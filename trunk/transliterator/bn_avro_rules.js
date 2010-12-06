﻿/**
 * Avro layout regular expression rules table for Bengali script
 * @author Junaid P V ([[user:Junaidpv]])
 * @date 2010-12-05
 * License: GPLv3, CC-BY-SA 3.0
 */
var tr_bn_avro = {};
tr_bn_avro.text = "Avro";
// Normal rules
tr_bn_avro.rules = {
'^ররi$':'ঋ',
'([ক-হ])্?ররi$':'$1ৃ',

'([ক-হড়ঢ়য়])o$':'$1',
'([ক-হড়ঢ়য়])a$':'$1া',
'([ক-হড়ঢ়য়])i$':'$1ি',
'([ক-হড়ঢ়য়])I$':'$1ী',
'([ক-হড়ঢ়য়])u$':'$1ু',
'([ক-হড়ঢ়য়])U$':'$1ূ',
'([ক-হড়ঢ়য়])ররi$':'$1ৃ',
'([ক-হড়ঢ়য়])e$':'$1ে',
'([ক-হড়ঢ়য়])োI$':'$1ৈ',
'([ক-হড়ঢ়য়])O$':'$1ো',
'([ক-হড়ঢ়য়])োU$':'$1ৌ',

'^অo$':'উ',
'^এe$':'ঈ',

'^কh$':'খ',
'^গh$':'ঘ',
'^ণg$':'ঙ',
'^চh$':'ছ',
'^জh$':'ঝ',
'^ণG$':'ঞ',
'^টh$':'ঠ',
'^ডh$':'ঢ',
'^তh$':'থ',
'^দh$':'ধ',
'^(পh|f)$':'ফ',
'^(বh|(v|V))$':'ভ',
'^(সh|S)$':'শ',
'^ড়h$':'ঢ়',
'^ত্`$':'ৎ',
'^নg$':'ং',
'^ঃ`$':':',
'^ররi$':'ঋ',
'^ওI$':'ঐ',
'^ওU$':'ঔ',

'^(k|K)$':'ক',
'^(g|G)$':'গ',
'^(c|C)$':'চ',
'^j$':'জ',
'^T$':'ট',
'^D$':'ড',
'^N$':'ণ',
'^t$':'ত',
'^d$':'দ',
'^n$':'ন',
'^(p|P)$':'প',
'^(b|B)$':'ব',
'^(m|M)$':'ম',
'^z$':'য',
'^r$':'র',
'^(l|L)$':'ল',
'^s$':'স',
'^(h|H)$':'হ',
'^R$':'ড়',
'^(y|Y)$':'য়',

'^o$':'অ',
'^(a|A)$':'আ',
'^i$':'ই',
'^I$':'ঈ',
'^u$':'উ',
'^U$':'ঊ',
'^e$':'এ',
'^O$':'ও',


'^0$':'০',
'^1$':'১',
'^2$':'২',
'^3$':'৩',
'^4$':'৪',
'^5$':'৫',
'^6$':'৬',
'^7$':'৭',
'^8$':'৮',
'^9$':'৯',

'^`$':'্',
'^\\:$':'ঃ',
'^\\^$':'ঁ',
'^\\.$':'৷',
'^\\$$':'৳',
'^ঃ`$':':'
};
// Memorised rules
tr_bn_avro.memrules = {

'^চচh$':['^.*[^o]$', 'চ্চ'],

'^([কঙলষস])(k|K)$':['^.*[^o]$','$1্ক'],
'^([ঙদল])(g|G)$':['^.*[^o]$','$1্গ'],
'^গg$':['^.*[^o]$','জ্ঞ'],
'^([জঞব])j$':['^.*[^o]$','$1্জ'],
'^নj$':['^.*[^o]$','ঞ্জ'],
'^([কটণনপলষস])T$':['^.*[^o]$','$1্ট'],
'^([ডণনল])D$':['^.*[^o]$','$1্ড'],
'^([গষহ])N$':['^.*[^o]$','$1্ণ'],
'^([কতনপশসহ])t$':['^.*[^o]$','$1্ত'],
'^([দনব])d$':['^.*[^o]$','$1্দ'],
'^([গঘণতধনপমশসহ])n$':['^.*[^o]$','$1্ন'],
'^([পমলস])p$':['^.*[^o]$','$1্প'],
'^([বমল])b$':['^.*[^o]$','$1্ব'],
'^([কগঙটণতদধনমলশষসহ])m$':['^.*[^o]$','$1্ম'],
'^([ক-ঘচ-ঝট-যলশ-হড়ঢ়য়])r$':['^.*[^o]$','$1্র'],
'^([কগপ-বমলশসহ])l$':['^.*[^o]$','$1্ল'],
'^([কনপ])s$':['^.*[^o]$','$1্স'],
'^([ক-হড়ঢ়য়])w$':['^.*[^o]$','$1্ব'],
'^([ক-হড়ঢ়য়])(y|Z)$':['^.*[^o]$','$1্য'],
'^নc$':['^.*[^o]$','ঞ্চ'],

//'^([অ-ঔা-ৌ])ররk$':['^.*[^o]$','$1র্ক'],

'^ররk$':['^.*(o|a|i|I|u|U|e|O|OI|OU|rri)rr$','র্ক'],
'^ররg$':['^.*(o|a|i|I|u|U|e|O|OI|OU|rri)rr$','র্গ'],
'^ররc$':['^.*(o|a|i|I|u|U|e|O|OI|OU|rri)rr$','র্চ'],
'^ররj$':['^.*(o|a|i|I|u|U|e|O|OI|OU|rri)rr$','র্জ'],
'^ররT$':['^.*(o|a|i|I|u|U|e|O|OI|OU|rri)rr$','র্ট'],
'^ররD$':['^.*(o|a|i|I|u|U|e|O|OI|OU|rri)rr$','র্ড'],
'^ররN$':['^.*(o|a|i|I|u|U|e|O|OI|OU|rri)rr$','র্ণ'],
'^ররt$':['^.*(o|a|i|I|u|U|e|O|OI|OU|rri)rr$','র্ত'],
'^ররd$':['^.*(o|a|i|I|u|U|e|O|OI|OU|rri)rr$','র্দ'],
'^ররn$':['^.*(o|a|i|I|u|U|e|O|OI|OU|rri)rr$','র্ন'],
'^ররp$':['^.*(o|a|i|I|u|U|e|O|OI|OU|rri)rr$','র্প'],
'^ররf$':['^.*(o|a|i|I|u|U|e|O|OI|OU|rri)rr$','র্ফ'],
'^ররb$':['^.*(o|a|i|I|u|U|e|O|OI|OU|rri)rr$','র্ব'],
'^ররv$':['^.*(o|a|i|I|u|U|e|O|OI|OU|rri)rr$','র্ভ'],
'^ররm$':['^.*(o|a|i|I|u|U|e|O|OI|OU|rri)rr$','র্ম'],
'^ররz$':['^.*(o|a|i|I|u|U|e|O|OI|OU|rri)rr$','র্য'],
'^ররl$':['^.*(o|a|i|I|u|U|e|O|OI|OU|rri)rr$','র্ল'],
'^ররS$':['^.*(o|a|i|I|u|U|e|O|OI|OU|rri)rr$','র্শ'],
'^ররs$':['^.*(o|a|i|I|u|U|e|O|OI|OU|rri)rr$','র্স'],
'^ররh$':['^.*(o|a|i|I|u|U|e|O|OI|OU|rri)rr$','র্হ'],
'^ররR$':['^.*(o|a|i|I|u|U|e|O|OI|OU|rri)rr$','র্ড়'],
'^রর(y|Y)$':['^.*(o|a|i|I|u|U|e|O|OI|OU|rri)rr$','র্য়'],

'^শh$': ['^.*S$', 'ষ']
};
