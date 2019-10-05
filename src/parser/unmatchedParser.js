// Generated automatically by nearley, version 2.19.0
// http://github.com/Hardmath123/nearley
export default (function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "DECK$ebnf$1$subexpression$1", "symbols": ["blank", "CARDLIST"], "postprocess": d => d[1]},
    {"name": "DECK$ebnf$1", "symbols": ["DECK$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "DECK$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "DECK$ebnf$2$subexpression$1", "symbols": ["blank", "APPEARANCE"], "postprocess": d => d[1]},
    {"name": "DECK$ebnf$2", "symbols": ["DECK$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "DECK$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "DECK", "symbols": ["CHARACTER", "DECK$ebnf$1", "DECK$ebnf$2", "_"], "postprocess": d=>  {return {...d[0], cards: d[1], metadata: d[2]}}},
    {"name": "CHARACTER$ebnf$1$subexpression$1", "symbols": ["nl", "SIDEKICK"], "postprocess": d => d[1]},
    {"name": "CHARACTER$ebnf$1", "symbols": ["CHARACTER$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "CHARACTER$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "CHARACTER", "symbols": ["HERO", "CHARACTER$ebnf$1"], "postprocess":  d => {
        return {
            hero: d[0],
            sidekick: d[1] || {quantity: 0}
        }}},
    {"name": "APPEARANCE$ebnf$1", "symbols": []},
    {"name": "APPEARANCE$ebnf$1", "symbols": ["APPEARANCE$ebnf$1", /[^*]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "APPEARANCE", "symbols": [{"literal":"*"}, "APPEARANCE$ebnf$1", {"literal":"*"}], "postprocess": d => d[1].join("")},
    {"name": "HERO", "symbols": ["NAME", "nl", "FIGHTING_TYPE", "__", "HP", "_", "MOVE", "__", "SPECIAL"], "postprocess":  d => {return {
        ...d[0], ...d[2], ...d[4], ...d[6], ...d[8]}} },
    {"name": "SIDEKICK", "symbols": ["NAME", "nl", "FIGHTING_TYPE", "__", "HP"], "postprocess": d => {return {...d[0], ...d[2], ...d[4]}}},
    {"name": "SIDEKICK", "symbols": ["NAME", "__", "QUANTITY", "nl", "FIGHTING_TYPE"], "postprocess": d => {return {...d[0], ...d[2], ...d[4]}}},
    {"name": "NAME", "symbols": ["str"], "postprocess": d => {return {'name': d[0]}}},
    {"name": "FIGHTING_TYPE$subexpression$1", "symbols": [/[mM]/, /[eE]/, /[lL]/, /[eE]/, /[eE]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "FIGHTING_TYPE", "symbols": ["_", "FIGHTING_TYPE$subexpression$1", "_"], "postprocess": d => {return {isRanged: false}}},
    {"name": "FIGHTING_TYPE$subexpression$2", "symbols": [/[rR]/, /[aA]/, /[nN]/, /[gG]/, /[eE]/, /[dD]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "FIGHTING_TYPE", "symbols": ["_", "FIGHTING_TYPE$subexpression$2", "_"], "postprocess": d => {return {isRanged: true}}},
    {"name": "HP$subexpression$1$subexpression$1", "symbols": [/[hH]/, /[pP]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "HP$subexpression$1", "symbols": ["HP$subexpression$1$subexpression$1"]},
    {"name": "HP$subexpression$1$subexpression$2", "symbols": [/[hH]/, /[eE]/, /[aA]/, /[lL]/, /[tT]/, /[hH]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "HP$subexpression$1", "symbols": ["HP$subexpression$1$subexpression$2"]},
    {"name": "HP", "symbols": ["HP$subexpression$1", "delim", "int"], "postprocess": d => {return {'hp': d[2]}}},
    {"name": "MOVE$subexpression$1$subexpression$1", "symbols": [/[mM]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "MOVE$subexpression$1", "symbols": ["MOVE$subexpression$1$subexpression$1"]},
    {"name": "MOVE$subexpression$1$subexpression$2", "symbols": [/[mM]/, /[oO]/, /[vV]/, /[eE]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "MOVE$subexpression$1", "symbols": ["MOVE$subexpression$1$subexpression$2"]},
    {"name": "MOVE", "symbols": ["MOVE$subexpression$1", "delim", "int"], "postprocess": d => {return {'move': d[2]}}},
    {"name": "SPECIAL", "symbols": ["dq_multiline_str"], "postprocess": d => {return {'specialAbility': d[0]}}},
    {"name": "CARDLIST$ebnf$1", "symbols": []},
    {"name": "CARDLIST$ebnf$1$subexpression$1", "symbols": ["blank", "CARDSET"], "postprocess": d => d[1]},
    {"name": "CARDLIST$ebnf$1", "symbols": ["CARDLIST$ebnf$1", "CARDLIST$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "CARDLIST", "symbols": ["CARDSET", "CARDLIST$ebnf$1"], "postprocess": d => [d[0]].concat(d[1]).flat()},
    {"name": "CARDSET", "symbols": ["USER", "nl", "CARDS"], "postprocess": d => d[2].map(card => {card.characterName = d[0]; return card})},
    {"name": "CARDS$ebnf$1", "symbols": []},
    {"name": "CARDS$ebnf$1$subexpression$1", "symbols": ["blank", "CARD"], "postprocess": d => d[1]},
    {"name": "CARDS$ebnf$1", "symbols": ["CARDS$ebnf$1", "CARDS$ebnf$1$subexpression$1"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "CARDS", "symbols": ["CARD", "CARDS$ebnf$1"], "postprocess": d => [d[0]].concat(d[1])},
    {"name": "CARD", "symbols": ["ADV_CARD"], "postprocess": id},
    {"name": "CARD", "symbols": ["S_CARD"], "postprocess": id},
    {"name": "ADV_CARD$ebnf$1$subexpression$1", "symbols": ["_", "ADV_EFFECTS"], "postprocess": d=>d[1]},
    {"name": "ADV_CARD$ebnf$1", "symbols": ["ADV_CARD$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "ADV_CARD$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "ADV_CARD$ebnf$2$subexpression$1", "symbols": ["_", "IMAGE"], "postprocess": d=>d[1]},
    {"name": "ADV_CARD$ebnf$2", "symbols": ["ADV_CARD$ebnf$2$subexpression$1"], "postprocess": id},
    {"name": "ADV_CARD$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "ADV_CARD", "symbols": ["QUANTITY", "__", "TITLE", "nl", "ADV_TYPE", "_", "BOOST", "ADV_CARD$ebnf$1", "ADV_CARD$ebnf$2"], "postprocess":  d => {
            return {
                ...d[0],
                ...d[2],
                ...d[4],
                ...d[6],
                ...d[7],
                ...d[8],
            }
        } },
    {"name": "S_CARD$ebnf$1$subexpression$1", "symbols": ["_", "IMAGE"], "postprocess": d=>d[1]},
    {"name": "S_CARD$ebnf$1", "symbols": ["S_CARD$ebnf$1$subexpression$1"], "postprocess": id},
    {"name": "S_CARD$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "S_CARD", "symbols": ["QUANTITY", "__", "TITLE", "nl", "S_TYPE", "_", "BOOST", "_", "EFFECT", "S_CARD$ebnf$1"], "postprocess":  d => {
            return {
                ...d[0],
                ...d[2],
                ...d[4],
                ...d[6],
                ...d[8],
                ...d[9],
            }
        } },
    {"name": "USER", "symbols": ["str"], "postprocess": d => d[0]},
    {"name": "TITLE", "symbols": ["str"], "postprocess": d => {return {title: d[0]}}},
    {"name": "S_TYPE$subexpression$1$subexpression$1", "symbols": [/[sS]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "S_TYPE$subexpression$1", "symbols": ["S_TYPE$subexpression$1$subexpression$1"]},
    {"name": "S_TYPE$subexpression$1$subexpression$2", "symbols": [/[sS]/, /[cC]/, /[hH]/, /[eE]/, /[mM]/, /[eE]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "S_TYPE$subexpression$1", "symbols": ["S_TYPE$subexpression$1$subexpression$2"]},
    {"name": "S_TYPE", "symbols": ["S_TYPE$subexpression$1"], "postprocess": d => {return {'type': 'scheme', 'value': 1}}},
    {"name": "ADV_TYPE", "symbols": ["A"], "postprocess": id},
    {"name": "ADV_TYPE", "symbols": ["D"], "postprocess": id},
    {"name": "ADV_TYPE", "symbols": ["V"], "postprocess": id},
    {"name": "A$subexpression$1$subexpression$1", "symbols": [/[aA]/, /[tT]/, /[tT]/, /[aA]/, /[cC]/, /[kK]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "A$subexpression$1", "symbols": ["A$subexpression$1$subexpression$1"]},
    {"name": "A$subexpression$1$subexpression$2", "symbols": [/[aA]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "A$subexpression$1", "symbols": ["A$subexpression$1$subexpression$2"]},
    {"name": "A", "symbols": ["A$subexpression$1", "delim", "int"], "postprocess": d => {return {'type': 'attack', 'value': d[2]}}},
    {"name": "D$subexpression$1$subexpression$1", "symbols": [/[dD]/, /[eE]/, /[fF]/, /[eE]/, /[nN]/, /[sS]/, /[eE]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "D$subexpression$1", "symbols": ["D$subexpression$1$subexpression$1"]},
    {"name": "D$subexpression$1$subexpression$2", "symbols": [/[dD]/, /[eE]/, /[fF]/, /[eE]/, /[nN]/, /[cC]/, /[eE]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "D$subexpression$1", "symbols": ["D$subexpression$1$subexpression$2"]},
    {"name": "D$subexpression$1$subexpression$3", "symbols": [/[dD]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "D$subexpression$1", "symbols": ["D$subexpression$1$subexpression$3"]},
    {"name": "D", "symbols": ["D$subexpression$1", "delim", "int"], "postprocess": d => {return {'type': 'defence', 'value': d[2]}}},
    {"name": "V$subexpression$1$subexpression$1", "symbols": [/[vV]/, /[eE]/, /[rR]/, /[sS]/, /[aA]/, /[tT]/, /[iI]/, /[lL]/, /[eE]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "V$subexpression$1", "symbols": ["V$subexpression$1$subexpression$1"]},
    {"name": "V$subexpression$1$subexpression$2", "symbols": [/[vV]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "V$subexpression$1", "symbols": ["V$subexpression$1$subexpression$2"]},
    {"name": "V", "symbols": ["V$subexpression$1", "delim", "int"], "postprocess": d => {return {'type': 'versatile', 'value': d[2]}}},
    {"name": "QUANTITY$subexpression$1", "symbols": [/[xX]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "QUANTITY", "symbols": ["int", "_", "QUANTITY$subexpression$1"], "postprocess": d => {return {quantity: d[0]}}},
    {"name": "QUANTITY$subexpression$2", "symbols": [/[xX]/], "postprocess": function(d) {return d.join(""); }},
    {"name": "QUANTITY", "symbols": ["QUANTITY$subexpression$2", "_", "int"], "postprocess": d => {return {quantity: d[2]}}},
    {"name": "BOOST", "symbols": [{"literal":"B"}, "delim", "int"], "postprocess": d => {return {boost: d[2]}}},
    {"name": "EFFECT", "symbols": ["dq_multiline_str"], "postprocess": d => {return {basicText: d[0]}}},
    {"name": "ADV_EFFECTS$ebnf$1", "symbols": ["IMMEDIATELY"], "postprocess": id},
    {"name": "ADV_EFFECTS$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "ADV_EFFECTS$ebnf$2", "symbols": ["DURING_COMBAT"], "postprocess": id},
    {"name": "ADV_EFFECTS$ebnf$2", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "ADV_EFFECTS$ebnf$3", "symbols": ["AFTER_COMBAT"], "postprocess": id},
    {"name": "ADV_EFFECTS$ebnf$3", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "ADV_EFFECTS", "symbols": ["ADV_EFFECTS$ebnf$1", "ADV_EFFECTS$ebnf$2", "ADV_EFFECTS$ebnf$3"], "postprocess": d => {return {immediatelyText: d[0], duringText: d[1], afterText: d[2]}}},
    {"name": "IMMEDIATELY$subexpression$1$subexpression$1", "symbols": [/[iI]/, {"literal":":"}], "postprocess": function(d) {return d.join(""); }},
    {"name": "IMMEDIATELY$subexpression$1", "symbols": ["IMMEDIATELY$subexpression$1$subexpression$1"]},
    {"name": "IMMEDIATELY$subexpression$1$subexpression$2", "symbols": [/[iI]/, /[mM]/, /[mM]/, /[eE]/, /[dD]/, /[iI]/, /[aA]/, /[tT]/, /[eE]/, /[lL]/, /[yY]/, {"literal":":"}], "postprocess": function(d) {return d.join(""); }},
    {"name": "IMMEDIATELY$subexpression$1", "symbols": ["IMMEDIATELY$subexpression$1$subexpression$2"]},
    {"name": "IMMEDIATELY", "symbols": ["nl", "IMMEDIATELY$subexpression$1", "_", "dq_multiline_str"], "postprocess": d => d[d.length-1]},
    {"name": "DURING_COMBAT$subexpression$1$subexpression$1", "symbols": [/[dD]/, {"literal":":"}], "postprocess": function(d) {return d.join(""); }},
    {"name": "DURING_COMBAT$subexpression$1", "symbols": ["DURING_COMBAT$subexpression$1$subexpression$1"]},
    {"name": "DURING_COMBAT$subexpression$1$subexpression$2", "symbols": [/[dD]/, /[uU]/, /[rR]/, /[iI]/, /[nN]/, /[gG]/, {"literal":" "}, /[cC]/, /[oO]/, /[mM]/, /[bB]/, /[aA]/, /[tT]/, {"literal":":"}], "postprocess": function(d) {return d.join(""); }},
    {"name": "DURING_COMBAT$subexpression$1", "symbols": ["DURING_COMBAT$subexpression$1$subexpression$2"]},
    {"name": "DURING_COMBAT", "symbols": ["nl", "DURING_COMBAT$subexpression$1", "_", "dq_multiline_str"], "postprocess": d => d[d.length-1]},
    {"name": "AFTER_COMBAT$subexpression$1$subexpression$1", "symbols": [/[aA]/, {"literal":":"}], "postprocess": function(d) {return d.join(""); }},
    {"name": "AFTER_COMBAT$subexpression$1", "symbols": ["AFTER_COMBAT$subexpression$1$subexpression$1"]},
    {"name": "AFTER_COMBAT$subexpression$1$subexpression$2", "symbols": [/[aA]/, /[fF]/, /[tT]/, /[eE]/, /[rR]/, {"literal":" "}, /[cC]/, /[oO]/, /[mM]/, /[bB]/, /[aA]/, /[tT]/, {"literal":":"}], "postprocess": function(d) {return d.join(""); }},
    {"name": "AFTER_COMBAT$subexpression$1", "symbols": ["AFTER_COMBAT$subexpression$1$subexpression$2"]},
    {"name": "AFTER_COMBAT", "symbols": ["nl", "AFTER_COMBAT$subexpression$1", "_", "dq_multiline_str"], "postprocess": d => d[d.length-1]},
    {"name": "IMAGE$subexpression$1$subexpression$1", "symbols": [/[uU]/, /[rR]/, /[lL]/, {"literal":":"}], "postprocess": function(d) {return d.join(""); }},
    {"name": "IMAGE$subexpression$1", "symbols": ["IMAGE$subexpression$1$subexpression$1"]},
    {"name": "IMAGE", "symbols": ["nl", "IMAGE$subexpression$1", "str"], "postprocess": d => {return {imageUrl: d[d.length-1]}}},
    {"name": "dq_multiline_str$ebnf$1", "symbols": []},
    {"name": "dq_multiline_str$ebnf$1", "symbols": ["dq_multiline_str$ebnf$1", "dstrchar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "dq_multiline_str", "symbols": [{"literal":"\""}, "dq_multiline_str$ebnf$1", {"literal":"\""}], "postprocess": d =>  d[1].join("")},
    {"name": "str$ebnf$1", "symbols": [/[^\n]/]},
    {"name": "str$ebnf$1", "symbols": ["str$ebnf$1", /[^\n]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "str", "symbols": ["str$ebnf$1"], "postprocess": function(d) {return d[0].join('')}},
    {"name": "int$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "int$ebnf$1", "symbols": ["int$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "int", "symbols": ["int$ebnf$1"], "postprocess": (d) => parseInt(d[0].join(''))},
    {"name": "blank", "symbols": ["_", "nl", "_", "nl"], "postprocess": d => null},
    {"name": "delim$ebnf$1", "symbols": [/[:-]/], "postprocess": id},
    {"name": "delim$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "delim", "symbols": ["_", "delim$ebnf$1", "_"], "postprocess": function(d) {return null;}},
    {"name": "nl", "symbols": [{"literal":"\n"}], "postprocess": function(d) {return null;}},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "__$ebnf$1", "symbols": ["wschar"]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", "wschar"], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": function(d) {return null;}},
    {"name": "wschar", "symbols": [/[ \t\n\v\f]/], "postprocess": id},
    {"name": "dstrchar", "symbols": [/[^\\"]/], "postprocess": id},
    {"name": "dstrchar", "symbols": [{"literal":"\\"}, "strescape"], "postprocess":
        function(d) {
            return JSON.parse("\""+d.join("")+"\"");
        }
        },
    {"name": "strescape", "symbols": [/["\\\/bfnrt]/], "postprocess": id},
    {"name": "strescape", "symbols": [{"literal":"u"}, /[a-fA-F0-9]/, /[a-fA-F0-9]/, /[a-fA-F0-9]/, /[a-fA-F0-9]/], "postprocess":
        function(d) {
            return d.join("");
        }
        }
]
  , ParserStart: "DECK"
}
// if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
//    module.exports = grammar;
// } else {
//    window.grammar = grammar;
// }
 return grammar})();
