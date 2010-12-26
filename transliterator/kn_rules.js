/**
 * Trasliteration regular expression rules table for Kannada
 * @author M G Harish [[user:M G Harish]] , template taken from Junaid P V ([[user:Junaidpv]])
 * Modified by User:HPNadig (User:HPN on en)
 * @date 2010-12-25
 * License: GPLv3, CC-BY-SA 3.0
 */
if(tr_kn== undefined) var tr_kn = {};
else tr_kn = {};
tr_kn.text = "Transliteration";
tr_kn.description = "Kannada transliteration";
 // Normal rules
tr_kn.rules = [
['ಕ್h','c','ಚ್'],
['\\\\([A-Za-z\\>_~\\.0-9])','\\\\','$2'],

['ಜ್್j', '', 'ಜ್ಞ'
 
['([ಕ-ಹ]़?)್a', '','$2'],
['([ಕ-ಹ]़?)್A', '','$2ಾ'],
['([ಕ-ಹ]़?)a', '','$2ಾ'],
['([ಕ-ಹ]़?)್i', '','$2ಿ'],
['([ಕ-ಹ]़?)(್I|ಿi|ೆe)', '','$2ೀ'],
['([ಕ-ಹ]़?)್u', '','$2ು'],
['([ಕ-ಹ]़?)(ುu|್U|ೊo)', '','$2ೂ'],
['([ಕ-ಹ]़?)್R', '','$2ೃ'],
['([ಕ-ಹ]़?)ೃR', '','$2ೄ'],
['([ಕ-ಹ]़?)್e', '','$2ೆ'],
['([ಕ-ಹ]़?)್E', '','$2ೇ'],
['([ಕ-ಹ]़?)i', '','$2ೈ'],
['([ಕ-ಹ]़?)್o', '','$2ೊ'],
['([ಕ-ಹ]़?)್O', '','$2ೋ'],
['([ಕ-ಹ]़?)u', '','$2ೌ'],
['([ಕ-ಹ])್\\`', '','$2़್'],
 
['ಅa', '','ಆ'],
['(ಒo|ಉu)', '','ಊ'],
['ಅi', '','ಐ'],
['(ಇi|ಎe)', '','ಈ'],
['ಅu', '','ಔ'],
['ಋR', '','ೠ'],
['ಓM', '','ॐ'],
 
['ಕ್h', '','ಖ್'],
['ಗ್h', '','ಘ್'],
['ನ್g', '','ಙ್'],
['ಚ್h', '','ಛ್'],
['ಜ್h', '','ಝ್'],
['ನ್j', '','ಞ್'],
['ಟ್h', '','ಠ್'],
['ಡ್h', '','ಢ್'],
['ತ್h', '','ಥ್'],
['ದ್h', '','ಧ್'],
['ಪ್h', '','ಫ್'],
['ಬ್h', '','ಭ್'],
['ಸ್h', '','ಶ್'],
['ಶ್h', '','ಷ್'],


['ಋa', '','ರ'],
['ಋA', '','ರಾ'],
['ಋi', '','ರಿ'],
['ಋI', '','ರೀ'],
['ಋu', '','ರು'],
['ಋU', '','ರೂ'],
['ಋe', '','ರೆ'],
['ಋE', '','ರೇ'],

['([ಕ-ಹ]़?)ೃa', '','$2್ರ'],
['([ಕ-ಹ]़?)ೃA', '','$2್ರಾ'],
['([ಕ-ಹ]़?)ೃi', '','$2್ರಿ'],
['([ಕ-ಹ]़?)ೃI', '','$2್ರೀ'],
['([ಕ-ಹ]़?)ೃu', '','$2್ರು'],
['([ಕ-ಹ]़?)ೃU', '','$2್ರೂ'],
['([ಕ-ಹ]़?)ೃe', '','$2್ರೆ'],
['([ಕ-ಹ]़?)ೃE', '','$2್ರೇ'],
['([ಕ-ಹ]़?)ೃo', '','$2್ರೊ'],
['([ಕ-ಹ]़?)ೃO', '','$2್ರೋ'],
['([ಕ-ಹ]़?)ೃ\\~', '','$2್ರ್'],
 
['।\\.', '','॥'],
 
['a', '','ಅ'],
['b', '','ಬ್'],
['c', '','ಚ್'],
['d', '','ದ್'],
['e', '','ಎ'],
['(f|F)', '','ಫ಼್'],
['g', '','ಗ್'],
['h', '','ಹ್'],
['i', '','ಇ'],
['j', '','ಜ್'],
['k', '','ಕ್'],
['l', '','ಲ್'],
['m', '','ಮ್'],
['n', '','ನ್'],
['o', '','ಒ'],
['p', '','ಪ್'],
['q', '','क़್'],
['r', '','ರ್'],
['s', '','ಸ್'],
['t', '','ತ್'],
['u', '','ಉ'],
['(v|w)', '','ವ್'],
['x', '','ಕ್ಷ್'],
['y', '','ಯ್'],
['A', '','ಆ'],
['B', '','ಭ್'],
['C', '','ಛ್'],
['D', '','ಡ್'],
['E', '','ಏ'],
['G', '','ಘ್'],
['H', '','ಃ'],
['I', '','ಈ'],
['J', '','ಝ್'],
['K', '','ಖ್'],
['L', '','ಳ್'],
['M', '','ಂ'],
['N', '','ಣ್'],
['O', '','ಓ'],
['P', '','ಫ್'],
['R', '','ಋ'],
['S', '','ಶ್'],
['T', '','ಟ್'],
['U', '','ಊ'],
['(V|W)', '','ವ್'],
['X', '','ಕ್ಷ್'],
['Y', '','ಯ್'],
['(Z|z)', '','ಜ಼್'],
['j~j', '','ಜ್ಞ್'],
['0', '','೦'],
['1', '','೧'],
['2', '','೨'],
['3', '','೩'],
['4', '','೪'],
['5', '','೫'],
['6', '','೬'],
['7', '','೭'],
['8', '','೮'],
['9', '','೯'],
['~', '','್'],
['\\.', '','।'],
['//', '','ऽ'],
['\\`', '','़']
];
