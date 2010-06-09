﻿/**
 * Naaraayam trasliteration regular expression rules table for Malayalam
 * @author Junaid P V
 * @date 2010-05-19
 */
 // Normal rules
 var rules = {
'^([ക-ഹ])്R$':'$1ൃ',
'^ന്ന്j$':'ഞ്ഞ്',
'^ന്ന്g$':'ങ്ങ്',
'^റ്റ്h$':'ത്',
'^ന്റ്h$':'ന്ത്',
'^([ക-ഹ])്r$':'$1്ര്',
'^([ക-ഹ])്ല്\\^$':'$1\u0d62',
'^([ക-ഹ])\u0d62\\^$':'$1\u0d63',
'^([ക-ഹ])്(l|L)$':'$1്ല്',
'^അa$':'ആ',
'^അi$':'ഐ',
'^അu$':'ഔ',
'^ഇi$':'ഈ',
'^ഋR$':'ൠ',
'^ഌ\\^$':'ൡ',
'^എe$':'ഈ',
'^ാa$':'ാാ',
'^ീi$':'ീീ',
'^ൂu$':'ൂൂ',
'^ൂo$':'ൂൂ',
'^ൄ\\^$':'ൄൄ',
'^േE$':'േേ',
'^ോO$':'ോോ',
'^ൗu$':'ൗൗ',
'^\u0d62\\^$':'\u0d63',
'^\u0d63\\^$':'\u0d63\u0d63',
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
'^ൺ\\\\$':'ണ്\u200d', // old style chillu N
'^ൺ~$':'ണ്',
'^ൺN$':'ണ്ണ്',
'^ൺT$':'ണ്ട്',
'^ൻ\\\\$':'ന്\u200d', // old style chillu n
'^ൻ~$':'ന്',
'^ൻk$':'ങ്ക്',
'^ൻj$':'ഞ്',
'^ൻn$':'ന്ന്',
'^ൻd$':'ന്ദ്',
'^ൻt$':'ന്റ്',
'^ൻm$':'ന്മ്',
'^ർ\\\\$':'ര്\u200d', // old style chill r
'^ർ~$':'ര്',
'^ർr$':'റ്',
'^ർy$':'ര്യ്',
'^ൽ\\\\$':'ല്\u200d', // old style chillu l
'^ൽ~$':'ല്',
'^ൽl$':'ല്ല്',
'^ൽp$':'ല്പ്',
'^ൽ\\^$':'ഌ',
'^ൾ\\\\$':'ള്\u200d', // old style chillu L
'^ൾ~$':'ള്',
'^ൾL$':'ള്ള്',
'^ൿ\\\\$':'ക്\u200d', // old style chillu k
'^ൿ(k|c)$':'ക്ക്',
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
'^([ക-ഹ])ുu$':'$1ൂ',
'^ൺU$':'ണൂ',
'^ൻU$':'നൂ',
'^ർU$':'രൂ',
'^ൽU$':'ലൂ',
'^ൾU$':'ളൂ',
'^ൿU$':'കൂ',
'^([ക-ഹ])ൊo$':'$1ൂ',
'^([ക-ഹ])ൃR$':'$1ൄ',
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
'^\u200cR$':'ഋ',
'^\u200ce$':'എ',
'^\u200cE$':'ഏ',
'^\u200cI$':'ഐ',
'^\u200co$':'ഒ',
'^\u200cO$':'ഓ',
'^\u200cH$':'ഃ',
'^\\\\0$':'൦',	// escape to ml digit 0 by \0
'^\\\\1$':'൧', 	// escape to ml digit 1 by \1
'^\\\\2$':'൨',	// escape to ml digit 2 by \2
'^\\\\3$':'൩',	// escape to ml digit 3 by \3
'^\\\\4$':'൪',	// escape to ml digit 4 by \4
'^\\\\5$':'൫',	// escape to ml digit 5 by \5
'^\\\\6$':'൬',	// escape to ml digit 6 by \6
'^\\\\7$':'൭',	// escape to ml digit 7 by \7
'^\\\\8$':'൮',	// escape to ml digit 8 by \8
'^\\\\9$':'൯',	// escape to ml digit 9 by \9
'^\\\\([A-Za-z\\>_~/])$':'$1',
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
'^R$':'ഋ',
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
'^c$':'ൿ',
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
'^t$':'റ്റ്', // tta according to 5.1
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
// Memorised rules
var memrules = {
'^ൿh$': ['^.*c$', 'ച്'],
'^ക്ക്h$': ['^.*cc$', 'ച്ച്']
};