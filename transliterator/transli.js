/**
 * Trasliteration Tool
 * @author Junaid P V
 * @date 2010-05-19
 * License: GPLv3
 */
var mlrules = {
'([ക-ഹ])്ര്\\^':'$1ൃ',
'ന്ന്j':'ഞ്ഞ്',
'ന്ന്g':'ങ്ങ്',
'റ്റ്h':'ത്',
'ന്റ്h':'ന്ത്',
'അa':'ആ',
'അi':'ഐ',
'അu':'ഔ',
'ഇi':'ഈ',
'([ക-ഹ])്r':'$1്ര്',
'ക്h':'ഖ്',
'ഗ്h':'ഘ്',
'ൻg':'ങ്',
'ച്h':'ഛ്',
'ജ്h':'ഝ്',
'ട്h':'ഠ്',
'ഡ്h':'ഢ്',
'ത്h':'ഥ്',
'ദ്h':'ധ്',
'പ്h':'ഫ്',
'ബ്h':'ഭ്',
'ംa':'മ',
'ംA':'മാ',
'ംi':'മി',
'ംI':'മീ',
'ംu':'മു',
'ംU':'മൂ',
'ംr':'മ്ര്',
'ംe':'മെ',
'ംE':'മേ',
'ംo':'മൊ',
'ംO':'മോ',
'ംp':'മ്പ്',
'ം~':'മ്',
'സ്h':'ഷ്',
'ശ്h':'ഴ്',
'ൺ~':'ണ്',
'ൺN':'ണ്ണ്',
'ൺT':'ണ്ട്',
'ൻ~':'ന്',
'ൻk':'ങ്ക്',
'ൻj':'ഞ്',
'ൻn':'ന്ന്',
'ൻd':'ന്ദ്',
'ൻt':'ന്റ്',
'ർ~':'ര്',
'ർr':'ര്ര്',
'ർy':'ര്യ്',
'ൽ~':'ല്',
'ൽl':'ല്ല്',
'ൽp':'ല്പ്',
'ൾ~':'ള്',
'ൾL':'ള്ള്',
'([ക-ഹ])a':'$1ാ',
'([ക-ഹ])്a':'$1',
'ൺa':'ണ',
'ൻa':'ന',
'ർa':'ര',
'ൽa':'ല',
'ൾa':'ള',
'ൿa':'ക',
'([ക-ഹ])്A':'$1ാ',
'ൺA':'ണാ',
'ൻA':'നാ',
'ർA':'രാ',
'ൽA':'ലാ',
'ൾA':'ളാ',
'ൿA':'കാ',
'([ക-ഹ])്i':'$1ി',
'ൺi':'ണി',
'ൻi':'നി',
'ർi':'രി',
'ൽi':'ലി',
'ൾi':'ളി',
'ൿi':'കി',
'([ക-ഹ])്I':'$1ീ',
'ൺI':'ണീ',
'ൻI':'നീ',
'ർI':'രീ',
'ൽI':'ലീ',
'ൾI':'ളീ',
'ൿI':'കീ',
'([ക-ഹ])ിi':'$1ീ',
'([ക-ഹ])െe':'$1ീ',
'([ക-ഹ])്u':'$1ു',
'ൺu':'ണു',
'ൻu':'നു',
'ർu':'രു',
'ൽu':'ലു',
'ൾu':'ളു',
'ൿu':'കു',
'([ക-ഹ])്U':'$1ൂ',
'ൺU':'ണൂ',
'ൻU':'നൂ',
'ർU':'രൂ',
'ൽU':'ലൂ',
'ൾU':'ളൂ',
'ൿU':'കൂ',
'([ക-ഹ])ൊo':'$1ൂ',
'([ക-ഹ])്e':'$1െ',
'ൺe':'ണെ',
'ൻe':'നെ',
'ർe':'രെ',
'ൽe':'ലെ',
'ൾe':'ളെ',
'ൿe':'കെ',
'([ക-ഹ])്E':'$1േ',
'ൺE':'ണേ',
'ൻE':'നേ',
'ർE':'രേ',
'ൽE':'ലേ',
'ൾE':'ളേ',
'ൿE':'കേ',
'([ക-ഹ])i':'$1ൈ',
'([ക-ഹ])്o':'$1ൊ',
'ൺo':'ണൊ',
'ൻo':'നൊ',
'ർo':'രൊ',
'ൽo':'ലൊ',
'ൾo':'ളൊ',
'ൿo':'കൊ',
'([ക-ഹ])്O':'$1ോ',
'ൺO':'ണോ',
'ൻO':'നോ',
'ർO':'രോ',
'ൽO':'ലോ',
'ൾO':'ളോ',
'ൿO':'കോ',
'([ക-ഹ])u':'$1\u0d57',
'([അ-്])m':'$1ം',
'A':'ആ',
'B':'ബ്ബ്',
'C':'ച്ച്',
'D':'ഡ്',
'E':'ഏ',
'F':'ഫ്',
'G':'ഗ്ഗ്',
'H':'ഃ',
'I':'ഐ',
'J':'ജ്ജ്',
'K':'ക്ക്',
'L':'ൾ',
'M':'മ്മ്',
'N':'ൺ',
'O':'ഓ',
'P':'പ്പ്',
'Q':'ക്യ്',
'R':'റ്',
'S':'ശ്',
'T':'ട്',
'U':'ഊ',
'V':'വ്വ്',
'W':'വ്വ്',
'X':'ക്ഷ്',
'Y':'യ്യ്',
'Z':'ശ്ശ്',
'a':'അ',
'b':'ബ്',
'c':'ച്',
'd':'ദ്',
'e':'എ',
'f':'ഫ്',
'g':'ഗ്',
'h':'ഹ്',
'i':'ഇ',
'j':'ജ്',
'k':'ക്',
'l':'ൽ',
'm':'മ്',
'n':'ൻ',
'o':'ഒ',
'p':'പ്',
'q':'ക്ക്',
'r':'ർ',
's':'സ്',
't':'റ്റ്',
'u':'ഉ',
'v':'വ്',
'w':'വ്',
'x':'ക്ഷ്',
'y':'യ്',
'z':'ശ്',
'~':'്',
'_':'\u200c'
};

/**
 * from Alex who wrote comment for http://blog.vishalon.net/index.php/javascript-getting-and-setting-caret-position-in-textarea/
 */
function GetCaretPosition(control)
{
    var CaretPos = 0;
    // IE Support
    if (document.selection)
    {
        control.focus();
        var Sel = document.selection.createRange ();
        var Sel2 = Sel.duplicate();
        Sel2.moveToElementText(control);
        CaretPos = -1;
        while(Sel2.inRange(Sel))
        {
            Sel2.moveStart('character');
            CaretPos++;
        }
    }
    // Firefox support

    else if (control.selectionStart || control.selectionStart == '0')
        CaretPos = control.selectionStart;

    return (CaretPos);
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
/*
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
function setCaretAtNewPosition(control, oldString, newString, oldCaretPosition)
{
	var newCaretPosition = oldCaretPosition - oldString.length + newString.length + 1 
	setCaretPosition(control, newCaretPosition);
}
function trans(lastpart)
{
	var len = lastpart.length;
	var i=0;
	var part1 = lastpart;
	var part2 = lastpart;
outerloop:
	for(i=0; i< len; i++)
	{
		var toTrans = lastpart.substring(i, len);
		for(var key in mlrules)
		{
			if((new RegExp(key)).test(toTrans))
			{
				part1 = toTrans;
				part2 = toTrans.replace(RegExp(key), mlrules[key]);
				break outerloop;
			}
		}
	}
	var pair = new Array(part1, part2);
	return pair;
}
function tiKeyPressed(event) {
    var e = event || window.event;
    var code = e.charCode || e.keyCode;
    // If this keystroke is a function key of any kind, do not filter it
    if (e.charCode == 0) return true;       // Function key (Firefox only)
    if (e.ctrlKey || e.altKey) return true; // Ctrl or Alt held down
    if (code < 32) return true;             // ASCII control character
    var targetElement = document.getElementById((e.target || e.srcElement).id);
    var c = String.fromCharCode(code);
	var oldCaretPosition = GetCaretPosition(targetElement);
	var lastSevenChars = getLastSixChars(targetElement.value, oldCaretPosition);
	var transPair = trans(lastSevenChars+c);
	var newText = replaceTransStringAtCaret(targetElement.value, transPair[0].length, transPair[1], oldCaretPosition);
	targetElement.value = newText;
	setCaretAtNewPosition(targetElement, transPair[0], transPair[1], oldCaretPosition);
    return false;
}
function transliterate(id) {
	var len = arguments.length;
	for(var i=0;i<len; i++)
	{
		var element = document.getElementById(arguments[i]);
		element.onkeypress = tiKeyPressed;
	}
}