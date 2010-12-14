﻿/**
 * Regular expression rules table for Bengali National Keyboard
 * @author Junaid P V ([[user:Junaidpv]])
 * @date 2010-12-13
 * License: GPLv3, CC-BY-SA 3.0
 */
var tr_bn_nkb = {};
tr_bn_nkb.text = "NKB";
tr_bn_nkb.description = "Bengali National Keyboard";
// Normal rules
tr_bn_nkb.rules = [
['1', '', '১'],
['2', '', '২'],
['3', '', '৩'],
['4', '', '৪'],
['5', '', '৫'],
['6', '', '৬'],
['7', '', '৭'],
['8', '', '৮'],
['9', '', '৯'],
['0', '', '০'],

['q', '', 'ঙ'],
['w', '', 'য'],
['e', '', 'ড'],
['r', '', 'প'],
['t', '', 'ট'],
['y', '', 'চ'],
['u', '', 'জ'],
['i', '', 'হ'],
['o', '', 'গ'],
['p', '', 'ড়'],

['a', '', 'ৃ'],
['s', '', 'ু'],
['d', '', 'ি'],
['f', '', 'ব'],
['g', '', '্'],
['h', '', 'া'],
['j', '', 'ক'],
['k', '', 'ত'],
['l', '', 'দ'],

['z', '', 'ঁ'],
['x', '', 'ো'],
['c', '', 'ে'],
['v', '', 'র'],
['b', '', 'ন'],
['n', '', 'স'],
['m', '', 'ম'],

['Q', '', 'ং'],
['W', '', 'য়'],
['E', '', 'ঢ'],
['R', '', 'ফ'],
['T', '', 'ঠ'],
['Y', '', 'ছ'],
['U', '', 'ঝ'],
['I', '', 'ঞ'],
['O', '', 'ঘ'],
['P', '', 'ঢ়'],

['A', '', 'ৗ'],
['S', '', 'ূ'],
['D', '', 'ী'],
['F', '', 'ভ'],
['G', '', '।'],
['H', '', 'অ'],
['J', '', 'খ'],
['K', '', 'থ'],
['L', '', 'ধ'],

['Z', '', 'ঃ'],
['X', '', 'ৌ'],
['C', '', 'ৈ'],
['V', '', 'ল'],
['B', '', 'ণ'],
['N', '', 'ষ'],
['M', '', 'শ']
];

// Extended layout for National Keyboard. Works in Firefox only
tr_bn_nkb.extended_keyboard = true;
tr_bn_nkb.rules_x = [
['1', '', '৴'],
['2', '', '৵'],
['3', '', '৶'],
['4', '', '৳'],
['5', '', '৷'],
['6', '', '৸'],
['7', '', 'ं'],
['0', '', '৹'],
['\\-', '', '\u200C'],
['\\=', '', '\u200D'],

['q', '', 'ৢ'],
['w', '', '্য'],
['e', '', 'ৄ'],
['i', '', 'ঽ'],

['a', '', 'ঋ'],
['s', '', 'উ'],
['d', '', 'ই'],
['f', '', 'ৰ'],
['g', '', '॥'],
['h', '', 'আ'],
['j', '', '঱'],
['k', '', 'ঢ'],
['l', '', 'ঌ'],

['z', '', '৺'],
['x', '', 'ও'],
['c', '', 'এ'],
['v', '', '্র'],
['\\.', '', '়'],

['\\$', '', '৲'],
['\\^', '', '঳'],

['Q', '', 'ৣ'],

['A', '', 'ৠ'],
['S', '', 'ঊ'],
['D', '', 'ঈ'],
['F', '', 'ৱ'],
['L', '', 'ৡ'],

['X', '', 'ঔ'],
['C', '', 'ঐ']
];