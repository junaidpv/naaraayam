/**
 * Trasliteration Tool
 * @author Junaid P V
 * @date 2010-05-19
 * License: GPLv3
 */
/**
 * Define your own regular expression rules here. Last character will be the user type one.
*/
var rules = {
'^([ക-ഹ])്ര്\\^$':'$1ൃ',
'^ന്ന്j$':'ഞ്ഞ്',
'^ന്ന്g$':'ങ്ങ്',
'^റ്റ്h$':'ത്',
'^ന്റ്h$':'ന്ത്',
'^([ക-ഹ])്r$':'$1്ര്',
'^([ക-ഹ])്(l|L)$':'$1്ല്',
'^അa$':'ആ',
'^അi$':'ഐ',
'^അu$':'ഔ',
'^ഇi$':'ഈ',
'^ഋ\\^$':'ൠ',
'^ഌ\\^$':'ൡ',
'^ാa$':'ാാ',
'^ീi$':'ീീ',
'^ൂi$':'ൂൂ',
'^േE$':'േേ',
'^ോO$':'ോോ',
'^ൗu$':'ൗൗ',
'^ക്h$':'ഖ്',
'^ഗ്h$':'ഘ്',
'^ൻg$':'ങ്',
'^ച്h$':'ഛ്',
'^ജ്h$':'ഝ്',
'^ട്h$':'ഠ്',
'^ഡ്h$':'ഢ്',
'^ത്h$':'ഥ്',
'^ദ്h$':'ധ്',
'^പ്h$':'ഫ്',
'^ബ്h$':'ഭ്',
'^ംa$':'മ',
'^ംA$':'മാ',
'^ംi$':'മി',
'^ംI$':'മീ',
'^ംu$':'മു',
'^ംU$':'മൂ',
'^ംr$':'മ്ര്',
'^ംe$':'മെ',
'^ംE$':'മേ',
'^ംo$':'മൊ',
'^ംO$':'മോ',
'^ംm$':'മ്മ്',
'^ംp$':'മ്പ്',
'^ംl$':'മ്ല്',
'^ം~$':'മ്',
'^സ്h$':'ഷ്',
'^ശ്h$':'ഴ്',
'^ൺ~$':'ണ്',
'^ൺN$':'ണ്ണ്',
'^ൺT$':'ണ്ട്',
'^ൻ~$':'ന്',
'^ൻk$':'ങ്ക്',
'^ൻj$':'ഞ്',
'^ൻn$':'ന്ന്',
'^ൻd$':'ന്ദ്',
'^ൻt$':'ന്റ്',
'^ർ~$':'ര്',
'^ർr$':'ര്ര്',
'^ർy$':'ര്യ്',
'^ൽ~$':'ല്',
'^ൽl$':'ല്ല്',
'^ൽp$':'ല്പ്',
'^ൽ\\^$':'ഌ',
'^ൾ~$':'ള്',
'^ൾL$':'ള്ള്',
'^([ക-ഹ])a$':'$1ാ',
'^([ക-ഹ])്a$':'$1',
'^ൺa$':'ണ',
'^ൻa$':'ന',
'^ർa$':'ര',
'^ൽa$':'ല',
'^ൾa$':'ള',
'^ൿa$':'ക',
'^([ക-ഹ])്A$':'$1ാ',
'^ൺA$':'ണാ',
'^ൻA$':'നാ',
'^ർA$':'രാ',
'^ൽA$':'ലാ',
'^ൾA$':'ളാ',
'^ൿA$':'കാ',
'^([ക-ഹ])്i$':'$1ി',
'^ൺi$':'ണി',
'^ൻi$':'നി',
'^ർi$':'രി',
'^ൽi$':'ലി',
'^ൾi$':'ളി',
'^ൿi$':'കി',
'^([ക-ഹ])്I$':'$1ീ',
'^ൺI$':'ണീ',
'^ൻI$':'നീ',
'^ർI$':'രീ',
'^ൽI$':'ലീ',
'^ൾI$':'ളീ',
'^ൿI$':'കീ',
'^([ക-ഹ])ിi$':'$1ീ',
'^([ക-ഹ])െe$':'$1ീ',
'^([ക-ഹ])്u$':'$1ു',
'^ൺu$':'ണു',
'^ൻu$':'നു',
'^ർu$':'രു',
'^ൽu$':'ലു',
'^ൾu$':'ളു',
'^ൿu$':'കു',
'^([ക-ഹ])്U$':'$1ൂ',
'^ൺU$':'ണൂ',
'^ൻU$':'നൂ',
'^ർU$':'രൂ',
'^ൽU$':'ലൂ',
'^ൾU$':'ളൂ',
'^ൿU$':'കൂ',
'^([ക-ഹ])ൊo$':'$1ൂ',
'^ർ\\^$':'ഋ',
'^([ക-ഹ])്e$':'$1െ',
'^ൺe$':'ണെ',
'^ൻe$':'നെ',
'^ർe$':'രെ',
'^ൽe$':'ലെ',
'^ൾe$':'ളെ',
'^ൿe$':'കെ',
'^([ക-ഹ])്E$':'$1േ',
'^ൺE$':'ണേ',
'^ൻE$':'നേ',
'^ർE$':'രേ',
'^ൽE$':'ലേ',
'^ൾE$':'ളേ',
'^ൿE$':'കേ',
'^([ക-ഹ])i$':'$1ൈ',
'^([ക-ഹ])്o$':'$1ൊ',
'^ൺo$':'ണൊ',
'^ൻo$':'നൊ',
'^ർo$':'രൊ',
'^ൽo$':'ലൊ',
'^ൾo$':'ളൊ',
'^ൿo$':'കൊ',
'^([ക-ഹ])്O$':'$1ോ',
'^ൺO$':'ണോ',
'^ൻO$':'നോ',
'^ർO$':'രോ',
'^ൽO$':'ലോ',
'^ൾO$':'ളോ',
'^ൿO$':'കോ',
'^([ക-ഹ])u$':'$1\u0d57',
'^([അ-്])m$':'$1ം',
'^\u200ca$':'അ',
'^\u200cA$':'ആ',
'^\u200ci$':'ഇ',
'^\u200cu$':'ഉ',
'^\u200cU$':'ഊ',
'^\u200cർ\\^$':'ഋ',
'^\u200ce$':'എ',
'^\u200cE$':'ഏ',
'^\u200cI$':'ഐ',
'^\u200co$':'ഒ',
'^\u200cO$':'ഓ',
'^\u200cH$':'ഃ',
'^\u200c0$':'൦',
'^\u200c1$':'൧',
'^\u200c2$':'൨',
'^\u200c3$':'൩',
'^\u200c4$':'൪',
'^\u200c5$':'൫',
'^\u200c6$':'൬',
'^\u200c7$':'൭',
'^\u200c8$':'൮',
'^\u200c9$':'൯',
'^A$':'ആ',
'^B$':'ബ്ബ്',
'^C$':'ച്ച്',
'^D$':'ഡ്',
'^E$':'ഏ',
'^F$':'ഫ്',
'^G$':'ഗ്ഗ്',
'^H$':'ഃ',
'^I$':'ഐ',
'^J$':'ജ്ജ്',
'^K$':'ക്ക്',
'^L$':'ൾ',
'^M$':'മ്മ്',
'^N$':'ൺ',
'^O$':'ഓ',
'^P$':'പ്പ്',
'^Q$':'ക്യ്',
'^R$':'റ്',
'^S$':'ശ്',
'^T$':'ട്',
'^U$':'ഊ',
'^V$':'വ്വ്',
'^W$':'വ്വ്',
'^X$':'ക്ഷ്',
'^Y$':'യ്യ്',
'^Z$':'ശ്ശ്',
'^a$':'അ',
'^b$':'ബ്',
'^c$':'ക്',
'^d$':'ദ്',
'^e$':'എ',
'^f$':'ഫ്',
'^g$':'ഗ്',
'^h$':'ഹ്',
'^i$':'ഇ',
'^j$':'ജ്',
'^k$':'ക്',
'^l$':'ൽ',
'^m$':'മ്',
'^n$':'ൻ',
'^o$':'ഒ',
'^p$':'പ്',
'^q$':'ക്ക്',
'^r$':'ർ',
'^s$':'സ്',
'^t$':'റ്റ്',
'^u$':'ഉ',
'^v$':'വ്',
'^w$':'വ്',
'^x$':'ക്ഷ്',
'^y$':'യ്',
'^z$':'ശ്',
'^~$':'്',
'^_$':'\u200c',
'^//$':'ऽ'
};

var memrules = {
'^ക്h$': ['^.*c$', 'ച്']
};
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