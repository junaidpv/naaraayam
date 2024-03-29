﻿/**
 * Trasliteration regular expression rules table for Sanskrit
 * @author Junaid P V ([[user:Junaidpv]])
 * @date 2010-10-12
 * @credits With help from Naveen Shankar
 * License: GPLv3, CC-BY-SA 3.0
 */
if(tr_sa== undefined) var tr_sa = {};
else tr_sa = {};
tr_sa.text = "Transliteration";
tr_sa.description = "Sanskrit transliteration";
 // Normal rules
tr_sa.rules = [
['क्h','c','च्'],
['\\\\([A-Za-z\\>_~\\.0-9])','\\\\','$2'],

['([क-ह]़?)्a', '','$2'],
['([क-ह]़?)्A', '','$2ा'],
['([क-ह]़?)a', '','$2ा'],
['([क-ह]़?)्i', '','$2ि'],
['([क-ह]़?)(्I|िi|ॆe)', '','$2ी'],
['([क-ह]़?)्u', '','$2ु'],
['([क-ह]़?)(ुu|्U|ॊo)', '','$2ू'],
['([क-ह]़?)्R', '','$2ृ'],
['([क-ह]़?)ृR', '','$2ॄ'],
['([क-ह]़?)्ळ्l', '','$2ॢ'],
['([क-ह]़?)ॢl', '','$2ॣ'],
['([क-ह]़?)ॆ\\^', '','$2ॅ'],
['([क-ह]़?)्e', '','$2ॆ'],
['([क-ह]़?)्E', '','$2े'],
['([क-ह]़?)ॊ\\^', '','$2ॉ'],
['([क-ह]़?)i', '','$2ै'],
['([क-ह]़?)्o', '','$2ॊ'],
['([क-ह]़?)्O', '','$2ो'],
['([क-ह]़?)u', '','$2ौ'],
['([क-ह]़?)ृa', '','$2्ऱ'],
['([क-ह]़?)ृA', '','$2्ऱा'],
['([क-ह]़?)ृi', '','$2्ऱि'],
['([क-ह]़?)ृI', '','$2्ऱी'],
['([क-ह]़?)ृu', '','$2्ऱु'],
['([क-ह]़?)ृU', '','$2्ऱू'],
['([क-ह]़?)ृ\\^', '','$2्ऱॅ'],
['([क-ह]़?)ृe', '','$2्ऱॆ'],
['([क-ह]़?)ृE', '','$2्ऱे'],
['([क-ह]़?)ृo', '','$2्ऱॊ'],
['([क-ह]़?)ृO', '','$2्ऱो'],
['([क-ह]़?)ृ\\~', '','$2्ऱ्'],
['([क-ह])्\\`', '','$2़्'],

['अa', '','आ'],
['(ऒo|उu)', '','ऊ'],
['ऎ\\^', '','ऍ'],
['अi', '','ऐ'],
['अ\\^', '','ॲ'],
['(इi|ऎe)', '','ई'],
['ऒ\\^', '','ऑ'],
['अu', '','औ'],
['ऋR', '','ॠ'],
['ळ्l', '','ऌ'],
['ऌl', '','ॡ'],
['ं\\^', '','ँ'],
['ंm', '','ँ'],
['ओM', '','ॐ'],

['क्h', '','ख्'],
['ग्h', '','घ्'],
['न्g', '','ङ्'],
['च्h', '','छ्'],
['ज्h', '','झ्'],
['न्j', '','ञ्'],
['ट्h', '','ठ्'],
['ड्h', '','ढ्'],
['त्h', '','थ्'],
['द्h', '','ध्'],
['प्h', '','फ्'],
['ब्h', '','भ्'],
['ऋa', '','ऱ'],
['ऋA', '','ऱा'],
['ऋi', '','ऱि'],
['ऋI', '','ऱी'],
['ऋu', '','ऱु'],
['ऋU', '','ऱू'],
['ऋ\\^', '','ऱॅ'],
['ऋe', '','ऱॆ'],
['ऋE', '','ऱे'],
['ऋo', '','ऱॊ'],
['ऋO', '','ऱो'],
['ऋ\\~', '','ऱ्'],

['स्h', '','ष्'],
['क़्h', '','ख़्'],
['ज़्h', '','ऴ्'],
['।\\.', '','॥'],

['a', '','अ'],
['b', '','ब्'],
['c', '','क्'],
['d', '','द्'],
['e', '','ऎ'],
['(f|F)', '','फ़्'],
['g', '','ग्'],
['h', '','ह्'],
['i', '','इ'],
['j', '','ज्'],
['k', '','क्'],
['l', '','ल्'],
['m', '','म्'],
['n', '','न्'],
['o', '','ऒ'],
['p', '','प्'],
['q', '','क़्'],
['r', '','र्'],
['s', '','स्'],
['t', '','त्'],
['u', '','उ'],
['(v|w)', '','व्'],
['x', '','क्ष्'],
['y', '','य्'],
['(z|Z)', '','ज़्'],
['A', '','आ'],
['B', '','ब्ब्'],
['C', '','क्क्'],
['D', '','ड्'],
['E', '','ए'],
//'F', '','फ्'],
['G', '','ग्ग्'],
['H', '','ः'],
['I', '','ई'],
['J', '','ज्ज्'],
['K', '','क्क्'],
['L', '','ळ्'],
['M', '','ं'],
['N', '','ण्'],
['O', '','ओ'],
['P', '','प्प्'],
//'Q', '','अ'],
['R', '','ऋ'],
['S', '','श्'],
['T', '','ट्'],
['U', '','ऊ'],
['(V|W)', '','व्व्'],
['X', '','क्ष्'],
['Y', '','य्य्'],
//'z', '','अ'
['0', '','०'],
['1', '','१'],
['2', '','२'],
['3', '','३'],
['4', '','४'],
['5', '','५'],
['6', '','६'],
['7', '','७'],
['8', '','८'],
['9', '','९'],
['~', '','्'],
['\\.', '','।'],
['//', '','ऽ'],
['\\`', '','़']
];