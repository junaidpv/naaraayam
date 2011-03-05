/**
 * To Convert texts written in ASCII to Unicode.
 * @author Junaid P V
 * Date: 2011-03-05
 * @license GPLv 3
 */
(function($){
$.AsciiToUnicode = new (function(){
	/* Private members */

	/* Private functions */

	/* Public functions */

	/**
	 * Convert text of given element with specified scheme
	 * @param element Text of this element will be converted
	 * @param scheme Scheme to be used
	 * @return Converted text
	 */
	this.convert = function(element, scheme) {
		var text = $(element).val();
		var length = text.length;
		var convertedText = '';
		for(var i=0; i<length; i++) {
			var asciiCode = text.charCodeAt(i);
			if(scheme.map[asciiCode]) {
				convertedText += scheme.map[asciiCode];
			}
			else {
				convertedText += text.charCodeAt(i);
			}
		}
		return convertedText;
	}
})();
})(jQuery);