/**
 * Narayam (ISimple Edition)
 * Input field rewriter tool for web pages
 * (Based on naaraayam transliteration tool I first wrote on 2010-05-19)
 * Takes ideas added to Narayam extension for Mediawiki that Roan Kattouw helped
 * to improve the tool
 * @author Junaid P V ([[user:Junaidpv]])(http://junaidpv.in)
 * @date 2010-12-18 
 * @version 3.0
 * Last update: 2011-03-02
 * License: GPLv3, CC-BY-SA 3.0
 */

var narayam = new (function(){
	/* Private memebers */

	// text inputs Narayam applies to
	var inputs = [];
	// Whether Narayam is enabled
	var enabled = false;
	// Registered schemes
	var schemes = {};
	// currently selected scheme
	var currentScheme = null;
	// Short cut key
	var shortcutKey = {
		altKey: false,
		ctrlKey: false,
		shiftKey: false,
		key: null
	}

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
		if (event.stopPropagation)
			// works except IE
			event.stopPropagation();
		else
			// cancel event propagation in IE
			event.cancelBubble = true;
	// may need to call
	//if(event.preventDefault) event.preventDefault();
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

	function replaceString(element, oldStringLength, newString, selectionRange)
	{
		var text = element.value;
		var newCaretPosition;
		// firefox always scrolls to topmost position,
		// to scroll manually we keep original scroll postion.
		if(element.scrollTop || element.scrollTop=='0') {
			var scrollTop = element.scrollTop;
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
		// Manually scrolling in firefox, few tweeks or re-writing may require
		if (navigator.userAgent.indexOf("Firefox")!=-1) {
			var textLength = element.value.length;
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
			this.toggle();
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
			this.keyBuffer = '';
			return true;
		}

		// Leave non-ASCII stuff alone, as well as anything involving
		// Alt (except for extended keymaps), Ctrl and Meta
		if ( code < 32 || ( e.altKey && !currentScheme.extended_keyboard ) || e.ctrlKey ) {
			return true;
		}

		var element = e.currentTarget || e.srcElement;
		var c = String.fromCharCode( e.which );
		// Get the current caret position. The user may have selected text to overwrite,
		// so get both the start and end position of the selection. If there is no selection,
		// pos.start and pos.end will be equal.
		var pos = getCaretPosition(this);
		// Get the last few characters before the one the user just typed,
		// to provide context for the transliteration regexes.
		// We need to append c because it hasn't been added to element.text yet
		var input = lastNChars( element.text, pos.start, currentScheme.lookbackLength ) + c;
		var keyBuffer = element.keyBuffer;
		var replacement = transliterate( input, keyBuffer, e.altKey );

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

		replaceString(element, input.lenght, replacement, pos)
		stopPropagation(e);
		return false;
	}

	/* Public functions */

	this.enable = function() {
		if ( !enabled && currentScheme !== null ) {
			$inputs.addClass( 'narayam-input' );
			$.cookie( 'narayam-enabled', '1', {
				'path': '/',
				'expires': 30
			} );
			$( '#narayam-toggle' ).attr( 'checked', true );
			enabled = true;
		}
	};

	this.disable = function() {
		if ( enabled ) {
			$inputs.removeClass( 'narayam-input' );
			$.cookie( 'narayam-enabled', '0', {
				'path': '/',
				'expires': 30
			} );
			$( '#narayam-toggle' ).attr( 'checked', false );
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
})();