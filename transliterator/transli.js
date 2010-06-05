/**
 * Trasliteration Tool
 * @author Junaid P V
 * @date 2010-05-19
 * License: GPLv3
 */
/**
 * Define your own regular expression rules here. Or include predefined rules before this file.
 * They should be in associative arrays named 'rules' and 'memrules'
 * 'rules' table is for normal rewriting
 * 'memrules' table is for memorised rules
*/

// defining to store state info
var trasliteration_fields = {};

var previous_sequence = '';

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
/**
 * from http://alexking.org/blog/2003/06/02/inserting-at-the-cursor-using-javascript
 */
function insertAtCursor(myField, myValue) {
    //IE support
    if (document.selection) {
        myField.focus();
        sel = document.selection.createRange();
        sel.text = myValue;
    }
    //MOZILLA/NETSCAPE support
    else if (myField.selectionStart || myField.selectionStart == '0') {
        var startPos = myField.selectionStart;
        var endPos = myField.selectionEnd;
        myField.value = myField.value.substring(0, startPos)
        + myValue
        + myField.value.substring(endPos, myField.value.length);
    } else {
        myField.value += myValue;
    }
}
function getLastSixChars(str, caretPosition)
{
	if(caretPosition <= 6 ) return str.substring(0,caretPosition);
	else return str.substring(caretPosition-6,caretPosition);
}
function replaceTransStringAtCaret(text, oldStringLength, newString, caretPosition)
{
	if(text.length <1)
	{
		return newString;
	}
	var firstStr = text.substring(0, caretPosition - oldStringLength + 1);
	var lastStr = text.substring(caretPosition, text.length);
	return firstStr+ newString + lastStr;
}
/* Helps to change position of caret to desired location */
function setCaretAtNewPosition(control, oldString, newString, oldCaretPosition)
{
	var newCaretPosition = oldCaretPosition - oldString.length + newString.length + 1 
	setCaretPosition(control, newCaretPosition);
}
/**
 * This function will take a string to check against regular expression rules in the rules array.
 * It will return a two memeber array, having given string as first member and replacement string as
 * second memeber. If corresponding replacement could not be found then second string will be too given string
*/
function trans(lastpart)
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
			if((new RegExp(key)).test(toTrans) && (new RegExp(memrules[key][0])).test(previous_sequence))
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
	if (code == 8 ) { previous_sequence = ''; return true; } // Backspace
    // If this keystroke is a function key of any kind, do not filter it
    if (e.charCode == 0) return true;       // Function key (Firefox only)
    if (e.ctrlKey || e.altKey) // Ctrl or Alt held down
	{
		if (e.ctrlKey && (code==77 || code==109))
		{
			var checkbox = document.getElementById((e.currentTarget || e.srcElement).id+'cb');
			if(checkbox)
			{
				if(!checkbox.checked)
				{
					trasliteration_fields[(e.currentTarget || e.srcElement).id] = true;
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
		var transPair = trans(lastSevenChars+c);
		var newText = replaceTransStringAtCaret(targetElement.value, transPair[0].length, transPair[1], oldCaretPosition);
		targetElement.value = newText;
		setCaretAtNewPosition(targetElement, transPair[0], transPair[1], oldCaretPosition);
		previous_sequence += c;
		if(previous_sequence.length > 6 ) previous_sequence = previous_sequence.substring(previous_sequence.length-6);
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
			//element.onkeypress = tiKeyPressed;
			if (element.addEventListener){
				element.addEventListener('keypress', tiKeyPressed, false);
			} else if (element.attachEvent){  
				element.attachEvent("onkeypress", tiKeyPressed);  
			}  
		}
	}
}

function transOptionOnClick()
{
	var e = event || window.event;
	var checkbox =  (e.currentTarget || e.srcElement);
	if(checkbox.checked)
	{
		trasliteration_fields[checkbox.value] = true;
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