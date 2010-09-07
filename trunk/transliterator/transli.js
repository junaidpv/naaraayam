/**
 * Trasliteration Tool
 * @author Junaid P V ([[user:Junaidpv]])
 * @date 2010-05-19
 * License: GPLv3, CC-BY-SA 3.0
 */
/**
 * Define your own regular expression rules here. Or include predefined rules before this file.
 * They should be in associative arrays named 'rules' and 'memrules'
 * 'rules' table is for normal rewriting
 * 'memrules' table is for memorised rules
*/

// defining to store state info
var trasliteration_fields = {};
// memory for previus key sequence
var previous_sequence = {};
// temporary disabling of transliteration
var temp_disable = {};

/**
 * from comment made by m2pc at http://www.webdeveloper.com/forum/showthread.php?t=74982
 */
 function GetCaretPosition (oField) {
	// Initialize
	var iCaretPos = 0;
	// IE Support
	if (document.selection) { 
	   // Set focus on the element
	   oField.focus ();
	   // To get cursor position, get empty selection range
	   var oSel = document.selection.createRange ();
	   // Move selection start to 0 position
	   oSel.moveStart ('character', -oField.value.length);
	   // The caret position is selection length
	   iCaretPos = oSel.text.length;
	}
	// Firefox support
	else if (oField.selectionStart || oField.selectionStart == '0')
	   iCaretPos = oField.selectionStart;
	// Return results
	return (iCaretPos);
}


function setCaretPosition (el, iCaretPos)
{
    if (document.selection) // IE
    {
        var range

        range = document.selection.createRange()

        if (el.type == 'text') // textbox
        {
            range.moveStart ('character', -el.value.length)
            range.moveEnd ('character', -el.value.length)
            range.moveStart ('character', iCaretPos)
            range.select()
        }
        else // textarea
        {
            range.collapse(false);
            range.move ('character', iCaretPos - el.value.length + el.value.split('\n').length - 1);
            range.select();
        }
    }
    else if (el.selectionStart || el.selectionStart == '0') // Firefox
    {
        el.setSelectionRange(iCaretPos, iCaretPos)
    }
}


function getLastSixChars(str, caretPosition)
{
	if(caretPosition <= 6 ) return str.substring(0,caretPosition);
	else return str.substring(caretPosition-6,caretPosition);
}
function replaceTransStringAtCaret(control, oldStringLength, newString, caretPosition)
{
	var text = control.value;
	// firefox always scrolls to topmost position,
	// to scroll manually we keep original scroll postion.
	if(control.scrollTop || control.scrollTop=='0') { var scrollTop = control.scrollTop; }
	if(text.length  >= 1) {
		var firstStr = text.substring(0, caretPosition - oldStringLength + 1);
		var lastStr = text.substring(caretPosition, text.length);
		control.value = firstStr+newString+ lastStr;
		var newCaretPosition = firstStr.length+newString.length;
		setCaretPosition(control,newCaretPosition);
	}
	else { 
		control.value = newString;
		var newCaretPosition = newString.length;
		setCaretPosition(control,newCaretPosition);
	}
	// Manually scrolling in firefox, few tweeks or re-writing may require
	if (navigator.userAgent.indexOf("Firefox")!=-1) {
		var textLength = control.value.length;
		var cols = control.cols;
		if(newCaretPosition > (textLength-cols)) {
			//var height = parseInt(window.getComputedStyle(control,null).getPropertyValue('height'));
			var fontsize = parseInt(window.getComputedStyle(control,null).getPropertyValue('font-size'));
			//var lineheight = height/fontsize;
			control.scrollTop = scrollTop+fontsize;
		} else control.scrollTop = scrollTop;
	}
}

/**
 * This function will take a string to check against regular expression rules in the rules array.
 * It will return a two memeber array, having given string as first member and replacement string as
 * second memeber. If corresponding replacement could not be found then second string will be too given string
*/
function trans(lastpart,e)
{
	var len = lastpart.length;
	var i=0;
	var part1 = lastpart;
	var part2 = lastpart;
	var found = false;
outerloop1:
	for(i=0; i< len; i++)
	{
		var toTrans = lastpart.substring(i, len);
		for(var key in memrules)
		{
			if((new RegExp(key)).test(toTrans) && (new RegExp(memrules[key][0])).test(previous_sequence[(e.currentTarget || e.srcElement).id ]))
			{
				part1 = toTrans;
				part2 = toTrans.replace(RegExp(key), memrules[key][1]);
				found = true;
				break outerloop1;
			}
		}
	}
	if(!found)
	{
	outerloop2:
		for(i=0; i< len; i++)
		{
			var toTrans = lastpart.substring(i, len);
			for(var key in rules)
			{
				if((new RegExp(key)).test(toTrans))
				{
					part1 = toTrans;
					part2 = toTrans.replace(RegExp(key), rules[key]);
					break outerloop2;
				}
			}
		}
	}
	var pair = new Array(part1, part2);
	return pair;
}
// event listener for trasliterattion textfield
// also listen for Ctrl+M combination to disable and enable trasliteration
function tiKeyPressed(event) {
    var e = event || window.event;
    var code = e.charCode || e.keyCode;
	if (code == 8 ) { previous_sequence[(e.currentTarget || e.srcElement).id] = ''; return true; } // Backspace
    // If this keystroke is a function key of any kind, do not filter it
    if (e.charCode == 0) return true;       // Function key (Firefox only)
    if (e.ctrlKey || e.altKey) // Ctrl or Alt held down
	{
		if (e.ctrlKey && (code==77 || code==109)) // pressed Ctrl+M
		{
			var checkbox = document.getElementById((e.currentTarget || e.srcElement).id+'cb');
			if(checkbox)
			{
				if(!checkbox.checked)
				{
					trasliteration_fields[(e.currentTarget || e.srcElement).id] = true;
					temp_disable[checkbox.value] = false;
					checkbox.checked = true;
				}
				else
				{
					trasliteration_fields[(e.currentTarget || e.srcElement).id] = false;
					checkbox.checked = false;
				}
				return false;
			}
		}
		return true;
	}
	if (code < 32) return true;             // ASCII control character
	if(trasliteration_fields[(e.currentTarget || e.srcElement).id])
	{
		var targetElement = (e.currentTarget || e.srcElement);
		var c = String.fromCharCode(code);
		var oldCaretPosition = GetCaretPosition(targetElement);
		var lastSevenChars = getLastSixChars(targetElement.value, oldCaretPosition);
		
		if(code ==62 && previous_sequence[(e.currentTarget || e.srcElement).id ].substring(previous_sequence[(e.currentTarget || e.srcElement).id ].length-1)=="<") 
		{
			var oldString = "<>";
			var newString = "";
			temp_disable[(e.currentTarget || e.srcElement).id] = !temp_disable[(e.currentTarget || e.srcElement).id];
		}
		else {
			if(!temp_disable[(e.currentTarget || e.srcElement).id])
			{
				var transPair = trans(lastSevenChars+c, e);
				var oldString = transPair[0];
				var newString = transPair[1];
			}
			else 
			{
				var oldString = c;
				var newString = c;
			}
		}
		replaceTransStringAtCaret(targetElement, oldString.length, newString , oldCaretPosition);
		previous_sequence[(e.currentTarget || e.srcElement).id ] += c;
		if(previous_sequence[(e.currentTarget || e.srcElement).id ].length > 6 ) previous_sequence[(e.currentTarget || e.srcElement).id ] = previous_sequence[(e.currentTarget || e.srcElement).id ].substring(previous_sequence[(e.currentTarget || e.srcElement).id ].length-6);
		if(event.preventDefault) event.preventDefault();
		else if(event.cancelBubble) { event.cancelBubble = true; }
		return false;
	}
	return true;
}
/**
 * This is the function to which call during window load event for trasliterating textfields.
 * The funtion will accept any number of HTML tag IDs of textfields.
*/
function transliterate(id) {
	var len = arguments.length;
	for(var i=0;i<len; i++)
	{
		var element = document.getElementById(arguments[i]);
		if(element)
		{
			trasliteration_fields[arguments[i]] = true;
			previous_sequence[arguments[i]] = '';
			//element.onkeypress = tiKeyPressed;
			if (element.addEventListener){
				element.addEventListener('keypress', tiKeyPressed, false);
			} else if (element.attachEvent){  
				element.attachEvent("onkeypress", tiKeyPressed);  
			}  
		}
	}
}

function transOptionOnClick(event)
{
	var e = event || window.event;
	var checkbox =  (e.currentTarget || e.srcElement);
	if(checkbox.checked)
	{
		trasliteration_fields[checkbox.value] = true;
		temp_disable[checkbox.value] = false;
		checkbox.checked = true;
	}
	else
	{
		trasliteration_fields[checkbox.value] = false;
		checkbox.checked = false;
	}
}
// change this value to "after" or "before" to position transliteration option check box
var TO_POSITION = "after";
// call this function to add checkbox to enable/disable transliteration
function addTransliterationOption()
{
	var len = arguments.length;
	for(var i=0;i<len; i++)
	{
		var element = document.getElementById(arguments[i]);
		if(element)
		{
			var checkbox = document.createElement('input');
			checkbox.id = arguments[i]+'cb';
			checkbox.type = 'checkbox';
			checkbox.value = arguments[i];
			checkbox.onclick = transOptionOnClick;
			checkbox.checked = true;
			var para = document.createElement('p');
			para.appendChild(checkbox);
			var text = document.createTextNode("മലയാളത്തിലെഴുതുക (Ctrl+M)");
			para.appendChild(text);
			if(TO_POSITION=="after") element.parentNode.insertBefore(para, element.nextSibling);
			else if(TO_POSITION=="before") element.parentNode.insertBefore(para, element);
		}
	}
}