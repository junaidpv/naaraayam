﻿/**
 * Trasliteration regular expression rules table for Devanagari
 * @authors: Junaid P V ([[user:Junaidpv]]), Mayur Kumar ([[user:mayur]])
 * @date 2010-09-29
 * License: GPLv3, CC-BY-SA 3.0
 */
 // Normal rules
 var rules = {
 '^([क-ह])ृओo$':'$1ॄ',
 '^([क-ह])ॢओo$':'$1ॣ',
 
'^([क-ह])्a$':'$1',
'^([क-ह]़?)a$':'$1ा',
'^([क-ह])((़)|्)i$':'$1$3ि',
'^ड़्i$':'ड़ि',
'^([क-ह])((़)|्)I$':'$1$3ी',
'^ड़्I$':'ड़ी',
'^([क-ह]़?)िi$':'$1ी',
'^([क-ह]़?)ेe$':'$1ी',
'^([क-ह])((़)|्)u$':'$1$3ु',
'^ड़्u$':'ड़ु',
'^([क-ह])((़)|्)U$':'$1$3ू',
'^ड़्U$':'ड़ू',
'^([क-ह]़?)ुu$':'$1ू',
'^([क-ह]़?)ोo$':'$1ू',
'^([क-ह])((़)|्)R$':'$1$3ृ',
'^ड़्R$':'ड़ृ',
'^([क-ह]़?)ृR$':'$1ॄ',
'^([क-ह])((़)|्)e$':'$1$3े',
'^ड़्e$':'ड़े',
'^([क-ह])((़)|्)E$':'$1$3ॅ',
'^ड़्E$':'ड़ॅ',
'^([क-ह]़?)ा?i$':'$1ै',
'^([क-ह])((़)|्)o$':'$1$3ो',
'^ड़्o$':'ड़ो',
'^([क-ह])((़)|्)O$':'$1$3ॉ',
'^ड़्O$':'ड़ॉ',
'^([क-ह]़?)u$':'$1ौ',
'^([क-ह]़?)ृl$':'$1ॢ',
'^([क-ह]़?)ॢU$':'$1ॣ',
'^([क-ह])((़)|्)H$':'$1$3ः',
'^ड़्H$':'ड़ः',
'^([क-ह]़?)ृU$':'$1ॄ',

'^च्ह्h$':'छ्',

'^अंM$':'अँ',
'^आंM$':'आँ',
'^ऋओo$':'ॠ',

'^क्h$':'ख्',
'^ग्h$':'घ्',
'^त्h$':'थ्',
'^ज्h$':'झ्',
'^ट्h$':'ठ्',
'^ड्h$':'ढ्',
'^त्h$':'थ्',
'^द्h$':'ध्',
'^स्h$':'श्',
'^श्h$':'ष्',
'^प्h$':'फ्',
'^ब्h$':'भ्',
'^़n$':'ज्ञ्',
'^ङ्y$':'ज्ञ्',
'^ड्D$':'ड़्',
'^ांM':'ाँ',
'^ड़्a$':'ड़',

'^अa$':'आ',
'^अi$':'ऐ',
'^एe$':'ऐ',
'^इi$':'ई',
'^उu$':'ऊ',
'^ओo$':'औ',
'^ऑm$':'ॐ',
'^ंM$':'ँ',
'^ऋU$':'ॠ',
'^ऋl$':'ॡ',
'^\u0951q$':'\u0952',
'^\u0953Q$':'\u0954',
'^।z$':'॥',

'^अ~$':'ऽ',
'^्\u0020$':'\u0020',
'^a$':'अ',
'^b$':'ब्',
'^c$':'च्',
'^d$':'द्',
'^e$':'ए',
'^f$':'फ्',
'^g$':'ग्',
'^h$':'ह्',
'^i$':'इ',
'^j$':'ज्',
'^k$':'क्',
'^l$':'ल्',
'^m$':'म्',
'^n$':'न्',
'^o$':'ओ',
'^p$':'प्',
'^q$':'\u0951',
'^r$':'र्',
'^s$':'स्',
'^t$':'त्',
'^u$':'उ',
'^v$':'व्',
'^w$':'व्',
'^[xX]$':'क्ष्',
'^y$':'य्',
'^z$':'।',
'^A$':'आ',
'^B$':'ब्',
'^C$':'॰',
'^D$':'ड्',
'^E$':'ऍ',
'^F$':'फ्',
'^G$':'ङ्',
'^H$':'ः',
'^I$':'ई',
'^J$':'़',
'^K$':'़',
'^L$':'ळ्',
'^M$':'ं',
'^N$':'ण्',
'^O$':'ऑ',
'^P$':'प्',
'^Q$':'\u0953',
'^R$':'ऋ',
'^S$':'श्',
'^T$':'ट्',
'^U$':'ऊ',
'^V$':'व्',
'^W$':'व्',
'^Y$':'ञ्',
'^Z$':'झ्',
'^\\.$':'।',
'^0$':'०',
'^1$':'१',
'^2$':'२',
'^3$':'३',
'^4$':'४',
'^5$':'५',
'^6$':'६',
'^7$':'७',
'^8$':'८',
'^9$':'९'
};
// Memorised rules
var memrules = {

};
