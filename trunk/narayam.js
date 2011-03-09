/**
 * Narayam (Standalone Edition)
 * Input field rewriter tool for web pages
 * (Based on naaraayam transliteration tool I first wrote on 2010-05-19)
 * Takes ideas added to Narayam extension for Mediawiki that Roan Kattouw helped
 * to improve and develop
 * @author Junaid P V ([[user:Junaidpv]])(http://junaidpv.in)
 * @date 2010-12-18 
 * @version 3.0
 * Last update: 2011-03-02
 * License: GPLv3, CC-BY-SA 3.0
 */

var narayam = new (function(){
	/* Private memebers */
	
	// Reference to this object
	var that = this;
	// text inputs Narayam applies to
	var inputs = [];
	// Whether Narayam is enabled
	var enabled = false;
	// Registered schemes
	var schemes = {};
	// currently selected scheme
	var currentScheme = null;
	// Default scheme to use
	var defaultScheme = null;
	// Short cut key
	var shortcutKey = {
		altKey: false,
		ctrlKey: false,
		shiftKey: false,
		key: null
	}
	// Messages
	var messages = {
		'narayam-checkbox-tooltip': "Checkbox tooltip",
		'narayam-help-url': "http://junaidpv.in",
		'narayam-toggle-ime': "To toggle IM"
	};

	/* Private functions */
	/**
	 * Transliterate a string using the current scheme
	 * @param str String to transliterate
	 * @param keyBuffer The key buffer
	 * @param useExtended Whether to use the extended part of the scheme
	 * @return Transliterated string, or str if no applicable transliteration found.
	 */
	function transliterate( str, keyBuffer, useExtended ) {
		var rules = currentScheme.extended_keyboard && useExtended ?
		currentScheme.rules_x : currentScheme.rules;
		for ( var i = 0;  i < rules.length; i++ ) {
			var keyBufferMatch = true;
			if ( rules[i][1].length > 0 && rules[i][1].length <= keyBuffer.length ) {
				// Try to match rules[i][1] at the end of the key buffer
				keyBufferMatch = new RegExp( rules[i][1] + '$' ).test( keyBuffer );
			}
			var regex = new RegExp( rules[i][0] + '$' );
			if ( keyBufferMatch && regex.test( str ) ) {
				return str.replace( regex, rules[i][2] );
			}
		}
		// No matches, return the input
		return str;
	}

	/**
	 * Get the n characters in str that immediately precede pos
	 * Example: lastNChars( "foobarbaz", 5, 2 ) == "ba"
	 * @param str String to search in
	 * @param pos Position in str
	 * @param n Number of characters to go back from pos
	 * @return Substring of str, at most n characters long, immediately preceding pos
	 */
	function lastNChars( str, pos, n ) {
		if ( n === 0 ) {
			return '';
		}
		if ( pos <= n ) {
			return str.substr( 0, pos );
		} else {
			return str.substr( pos - n, n);
		}
	}

	/**
	 * Find the point at which a and b diverge, i.e. the first position
	 * at which they don't have matching characters.
	 * @param a String
	 * @param b String
	 * @return Position at which a and b diverge, or -1 if a == b
	 */
	function firstDivergence( a, b ) {
		var minLength = a.length < b.length ? a.length : b.length;
		for ( var i = 0; i < minLength; i++ ) {
			if ( a.charCodeAt( i ) !== b.charCodeAt( i ) ) {
				return i;
			}
		}
		return -1;
	}


	function isShortcutKey( e ) {
		return e.altKey == shortcutKey.altKey &&
		e.ctrlKey == shortcutKey.ctrlKey &&
		e.shiftKey == shortcutKey.shiftKey &&
		String.fromCharCode( e.keyCode || e.charCode ).toLowerCase() == shortcutKey.key.toLowerCase();
	}

	function shortcutText() {
		var text = '';
		if ( shortcutKey.ctrlKey ) {
			text += 'Ctrl-';
		}
		if ( shortcutKey.shiftKey ) {
			text += 'Shift-';
		}
		if ( shortcutKey.altKey ) {
			text += 'Alt-';
		}
		text += shortcutKey.key.toUpperCase();
		return text;
	}

	// stop propagation of given event
	function stopPropagation(event) {
		if (event.stopPropagation) {
			// works except IE
			event.stopPropagation();
		}
		else {
			// cancel event propagation in IE
			event.cancelBubble = true;
		// may need to call
		}
		if(event.preventDefault) event.preventDefault();
	}

	/**
	 * from: http://stackoverflow.com/questions/3053542/how-to-get-the-start-and-end-points-of-selection-in-text-area/3053640#3053640
	 */
	function getCaretPosition(el) {
		var start = 0, end = 0, normalizedValue, range,
		textInputRange, len, endRange;

		if (typeof el.selectionStart == "number" && typeof el.selectionEnd == "number") {
			start = el.selectionStart;
			end = el.selectionEnd;
		} else {
			range = document.selection.createRange();
			if (range && range.parentElement() == el) {
				len = el.value.length;
				normalizedValue = el.value.replace(/\r\n/g, "\n");

				// Create a working TextRange that lives only in the input
				textInputRange = el.createTextRange();
				textInputRange.moveToBookmark(range.getBookmark());

				// Check if the start and end of the selection are at the very end
				// of the input, since moveStart/moveEnd doesn't return what we want
				// in those cases
				endRange = el.createTextRange();
				endRange.collapse(false);

				if (textInputRange.compareEndPoints("StartToEnd", endRange) > -1) {
					start = end = len;
				} else {
					start = -textInputRange.moveStart("character", -len);
					start += normalizedValue.slice(0, start).split("\n").length - 1;

					if (textInputRange.compareEndPoints("EndToEnd", endRange) > -1) {
						end = len;
					} else {
						end = -textInputRange.moveEnd("character", -len);
						end += normalizedValue.slice(0, end).split("\n").length - 1;
					}
				}
			}
		}
		return {
			start: start,
			end: end
		};
	}

	/**
	 * IE part from: http://stackoverflow.com/questions/3274843/get-caret-position-in-textarea-ie
	 */
	function setCaretPosition (el, iCaretPos)
	{
		if (document.selection) // IE
		{
			endOffset = startOffset=iCaretPos;
			var range = el.createTextRange();
			var startCharMove = offsetToRangeCharacterMove(el, startOffset);
			range.collapse(true);
			if (startOffset == endOffset) {
				range.move("character", startCharMove);
			} else {
				range.moveEnd("character", offsetToRangeCharacterMove(el, endOffset));
				range.moveStart("character", startCharMove);
			}
			range.select();
		}
		else if (el.selectionStart || el.selectionStart == '0') // Firefox
		{
			el.setSelectionRange(iCaretPos, iCaretPos)
		}
	}

	/**
	 * Add a CSS class to a element
	 * @param element HTML element
	 * @param cls CSS class
	 */
	function addClass(element,cls) {
		if (!element.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)')))
			element.className += " "+cls;
	}

	/**
	 * Remove a CSS class to a element
	 * @param element HTML element
	 * @param cls CSS class
	 */
	function removeClass(element,cls) {
		if (hasClass(element,cls)) {
			var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
			element.className=element.className.replace(reg,' ');
		}
	}

	/**
	 * Set a cookie
	 * from: http://www.javascripter.net/faq/settinga.htm
	 * @param cookieName cookie name
	 * @param cookieValue cookie value
	 * @param nDays number of days to keep
	 */
	function setCookie(cookieName,cookieValue,nDays) {
		var today = new Date();
		var expire = new Date();
		if (nDays==null || nDays==0) nDays=1;
		expire.setTime(today.getTime() + 3600000*24*nDays);
		document.cookie = cookieName+"="+escape(cookieValue)+ ";expires="+expire.toGMTString()+";path=/";
	}
	/**
	 * Read a cookie value
	 * from: http://www.javascripter.net/faq/readinga.htm
	 * @param cookieName cookie name to be read
	 * @return cookie value
	 */
	function readCookie(cookieName) {
		var theCookie=""+document.cookie;
		var ind=theCookie.indexOf(cookieName);
		if (ind==-1 || cookieName=="") return "";
		var ind1=theCookie.indexOf(';',ind);
		if (ind1==-1) ind1=theCookie.length;
		return unescape(theCookie.substring(ind+cookieName.length+1,ind1));
	}

	/**
	 * Firefox textarea scroll top once text replacemetn done.
	 * This function helps to identify the situation
	 * @param element Input element in which text replacement taking place
	 * @return boolean
	 */
	function manualScrollNeeded(element) {
		// If the element is a text area on Firefox, manual scrolling would be needed
		if (element.tagName.toLowerCase() == 'textarea' && navigator.userAgent.indexOf("Firefox")!=-1) {
			return true;
		}
		return false;
	}

	function replaceString(element, oldStringLength, newString, selectionRange)
	{
		var text = element.value;
		var newCaretPosition;
		// Check whether manual need or not
		var manualScrollNeed = false;
		// firefox always scrolls to topmost position,
		// to scroll manually we keep original scroll postion.
		if(manualScrollNeeded(element) && (element.scrollTop || element.scrollTop=='0')) {
			var scrollTop = element.scrollTop;
			manualScrollNeed = true;
		}
		if(text.length  >= 1) {
			var firstStr = text.substring(0, selectionRange['start'] - oldStringLength + 1);
			var lastStr = text.substring(selectionRange['end'], text.length);
			element.value = firstStr+newString+ lastStr;
			newCaretPosition = firstStr.length+newString.length;
			setCaretPosition(element,newCaretPosition);
		}
		else {
			element.value = newString;
			newCaretPosition = newString.length;
			setCaretPosition(element,newCaretPosition);
		}
		// Manually scrolling in firefox
		// TODO: find better manul scrolling, few tweeks or re-writing may be required
		if (manualScrollNeed) {
			// get total text length
			var textLength = element.value.length;
			// get number of columns in the textarea
			var cols = element.cols;
			if(newCaretPosition > (textLength-cols)) {
				//var height = parseInt(window.getComputedStyle(element,null).getPropertyValue('height'));
				var fontsize = parseInt(window.getComputedStyle(element,null).getPropertyValue('font-size'));
				//var lineheight = height/fontsize;
				element.scrollTop = scrollTop+fontsize;
			} else element.scrollTop = scrollTop;
		}
	}

	function onkeydown( event ) {
		var e = event || window.event;
		// If the current scheme uses the alt key, ignore keydown for Alt+? combinations
		if ( enabled && currentScheme.extended_keyboard && e.altKey && !e.ctrlKey ) {
			stopPropagation(e);
			return false; // Not in original code -- does this belong here?
		} else if ( isShortcutKey( e ) ) {
			that.toggle();
			stopPropagation(e);
			return false;
		}
		return true;
	}

	function onkeypress( e ) {
		if ( !enabled ) {
			return true;
		}
		var code = e.keyCode || e.charCode;
		if ( code == 8 ) { // Backspace
			// Blank the keybuffer
			that.keyBuffer = '';
			return true;
		}

		// Leave non-ASCII stuff alone, as well as anything involving
		// Alt (except for extended keymaps), Ctrl and Meta
		if ( code < 32 || ( e.altKey && !currentScheme.extended_keyboard ) || e.ctrlKey ) {
			return true;
		}

		var element = e.currentTarget || e.srcElement;
		var c = String.fromCharCode( code );
		var charLength = c.length;
		// Get the current caret position. The user may have selected text to overwrite,
		// so get both the start and end position of the selection. If there is no selection,
		// pos.start and pos.end will be equal.
		var pos = getCaretPosition(element);
		// Get the last few characters before the one the user just typed,
		// to provide context for the transliteration regexes.
		// We need to append c because it hasn't been added to element.text yet
		var input = lastNChars( element.value || '', pos.start, currentScheme.lookbackLength ) + c;
		var keyBuffer = element.keyBuffer || '';
		var replacement = transliterate( input , keyBuffer, e.altKey );

		// Update the key buffer
		keyBuffer += c;
		if ( keyBuffer.length > currentScheme.keyBufferLength ) {
			// The buffer is longer than needed, truncate it at the front
			keyBuffer = keyBuffer.substring( keyBuffer.length - currentScheme.keyBufferLength );
		}
		element.keyBuffer = keyBuffer;

		// Text replacement is expensive, so we avoid it as much as we can
		if ( replacement == input ) {
			return true;
		}
		// Drop a common prefix, if any
		// TODO: Profile this, see if it's any faster
		var divergingPos = firstDivergence( input, replacement );
		input = input.substring( divergingPos );
		replacement = replacement.substring( divergingPos );

		replaceString(element, input.length, replacement, pos)
		stopPropagation(e);
		return false;
	}

	function updateSchemeFromSelect(e) {
		var scheme = (e.currentTarget || e.srcElement).value;
		that.setScheme( scheme );
		setCookie( 'narayam-scheme', scheme );
	}

	function setAttribute(element, property, value) {
		if (typeof element.setAttribute === "function") {
			element.setAttribute( property, "" + value );
		}
		else {
			element[property] = "" + value;
            
		}
	}

	/* Public functions */
	
	/**
	 * Add more inputs to apply Narayam to
	 * @param inputElements A arry of one or more input or textarea elements
	 */
	this.addInputs = function( inputElements ) {
		inputs.concat(Array.prototype.slice.call( inputElements ));
		var count = inputElements.length;
		for(var i=0; i < count; i++) {
			var element = inputElements[i];
			if (element.addEventListener){
				element.addEventListener('keydown', onkeydown, false);
				element.addEventListener('keypress', onkeypress, false);
			} else if (element.attachEvent){
				element.attachEvent('onkeydown', onkeydown);
				element.attachEvent("onkeypress", onkeypress);
			}
			setAttribute(element, 'keyBuffer', '');
		}
		if ( enabled ) {
			for(i=0; i < count; i++) {
				element = inputElements[i];
				addClass(element,  'narayam-input');
			}
		}
	};

	this.setShortcutKey = function(options) {
		for (var property in options) {
			if (options.hasOwnProperty(property)) {
				shortcutKey[property] = options[property];
			}
		}
	}


	this.enable = function() {
		if ( !enabled && currentScheme !== null ) {
			var count = inputs.length;
			for(var i=0; i < count; i++) {
				addClass(inputs[i], 'narayam-input');
			}
			setCookie('narayam-enabled', '1');
			document.getElementById( 'narayam-toggle' ).checked = true;
			enabled = true;
		}
	};

	this.disable = function() {
		if ( enabled ) {
			var count = inputs.length;
			for(var i=0; i < count; i++) {
				removeClass(inputs[i], 'narayam-input');
			}
			setCookie('narayam-enabled', '0');
			document.getElementById( 'narayam-toggle' ).checked = false;
			enabled = false;
		}
	};

	this.toggle = function() {
		if ( enabled ) {
			that.disable();
		} else {
			that.enable();
		}
	};
	
	/**
	 * Add a transliteration scheme. 
	 * @param name Name of the scheme, must be unique
	 * @param data Object with scheme data
	 * @return True if added, false if not
	 */
	this.addScheme = function( name, data ) {
		schemes[name] = data;
		return true;
	};

	
	this.setScheme = function( name ) {
		if ( name in schemes ) {
			currentScheme = schemes[name];
			select.value=  name ;
		}
	};

	this.getInputs = function() {
		var inputs = document.getElementsByTagName('input');
		var textInputs = [];
		var count = inputs.length;
		for(var i=0; i < count; i++) {
			element = inputs[i];
			if(element.getAttribute('type')==='text' || element.getAttribute('type')==='search' || element.getAttribute('type')==='' || element.getAttribute('type')== undefined) {
				textInputs.push(element);
			}
		}
		return textInputs;

	}
	
	this.setup = function() {
		// Build scheme dropdown
		select = document.createElement("select");
		var haveSchemes = false;
		for ( var scheme in schemes ) {
			var option = document.createElement("option");
			option.value = scheme;
			option.appendChild( document.createTextNode(schemes[scheme].text) );
			select.appendChild(option);
			haveSchemes = true;
		}

		if (select.addEventListener){
			select.addEventListener('change', updateSchemeFromSelect, false);
		} else if (select.attachEvent){
			select.attachEvent('onchange', updateSchemeFromSelect);
		}
		
		if ( !haveSchemes ) {
			// No schemes available, don't show the tool
			return;
		}
		
		// Build enable/disable checkbox and label
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.id = "narayam-toggle";
		checkbox.title = messages['narayam-checkbox-tooltip'];
		checkbox.onclick = this.toggle;
		
		var label = document.createElement("label");
		label.htmlFor = "narayam-toggle";
		var anchor = document.createElement("a");
		anchor.title = messages['narayam-checkbox-tooltip'];
		anchor.appendChild( document.createTextNode(messages['narayam-toggle-ime'] + shortcutText()) );
		label.appendChild(anchor);
		
		var checkboxAndLabel = document.createElement("span");
		addClass(checkboxAndLabel, 'narayam-toggle-wrapper');
		checkboxAndLabel.appendChild(checkbox);
		checkboxAndLabel.appendChild(label);
		var spanWithEverything = document.createElement("span");
		addClass(spanWithEverything, 'narayam-wrapper' );
		spanWithEverything.appendChild(select);
		spanWithEverything.appendChild(checkboxAndLabel);
		document.getElementById("container").appendChild(spanWithEverything);
		
		// Restore state from cookies
		var savedScheme = readCookie( 'narayam-scheme' );
		if ( savedScheme && savedScheme in schemes ) {
			this.setScheme( savedScheme );
		} else {
			var autoScheme = defaultScheme ? defaultScheme : select.value;
			that.setScheme( autoScheme );
			setCookie( 'narayam-scheme', autoScheme );
		}
		var enabledCookie = readCookie( 'narayam-enabled' );
		if ( enabledCookie == '1' ) {
			this.enable();
		}

	};

})();