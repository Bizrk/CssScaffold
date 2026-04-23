"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/he/he.js
var require_he = __commonJS({
  "node_modules/he/he.js"(exports2, module2) {
    (function(root) {
      var freeExports = typeof exports2 == "object" && exports2;
      var freeModule = typeof module2 == "object" && module2 && module2.exports == freeExports && module2;
      var freeGlobal = typeof global == "object" && global;
      if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
        root = freeGlobal;
      }
      var regexAstralSymbols = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
      var regexAsciiWhitelist = /[\x01-\x7F]/g;
      var regexBmpWhitelist = /[\x01-\t\x0B\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g;
      var regexEncodeNonAscii = /<\u20D2|=\u20E5|>\u20D2|\u205F\u200A|\u219D\u0338|\u2202\u0338|\u2220\u20D2|\u2229\uFE00|\u222A\uFE00|\u223C\u20D2|\u223D\u0331|\u223E\u0333|\u2242\u0338|\u224B\u0338|\u224D\u20D2|\u224E\u0338|\u224F\u0338|\u2250\u0338|\u2261\u20E5|\u2264\u20D2|\u2265\u20D2|\u2266\u0338|\u2267\u0338|\u2268\uFE00|\u2269\uFE00|\u226A\u0338|\u226A\u20D2|\u226B\u0338|\u226B\u20D2|\u227F\u0338|\u2282\u20D2|\u2283\u20D2|\u228A\uFE00|\u228B\uFE00|\u228F\u0338|\u2290\u0338|\u2293\uFE00|\u2294\uFE00|\u22B4\u20D2|\u22B5\u20D2|\u22D8\u0338|\u22D9\u0338|\u22DA\uFE00|\u22DB\uFE00|\u22F5\u0338|\u22F9\u0338|\u2933\u0338|\u29CF\u0338|\u29D0\u0338|\u2A6D\u0338|\u2A70\u0338|\u2A7D\u0338|\u2A7E\u0338|\u2AA1\u0338|\u2AA2\u0338|\u2AAC\uFE00|\u2AAD\uFE00|\u2AAF\u0338|\u2AB0\u0338|\u2AC5\u0338|\u2AC6\u0338|\u2ACB\uFE00|\u2ACC\uFE00|\u2AFD\u20E5|[\xA0-\u0113\u0116-\u0122\u0124-\u012B\u012E-\u014D\u0150-\u017E\u0192\u01B5\u01F5\u0237\u02C6\u02C7\u02D8-\u02DD\u0311\u0391-\u03A1\u03A3-\u03A9\u03B1-\u03C9\u03D1\u03D2\u03D5\u03D6\u03DC\u03DD\u03F0\u03F1\u03F5\u03F6\u0401-\u040C\u040E-\u044F\u0451-\u045C\u045E\u045F\u2002-\u2005\u2007-\u2010\u2013-\u2016\u2018-\u201A\u201C-\u201E\u2020-\u2022\u2025\u2026\u2030-\u2035\u2039\u203A\u203E\u2041\u2043\u2044\u204F\u2057\u205F-\u2063\u20AC\u20DB\u20DC\u2102\u2105\u210A-\u2113\u2115-\u211E\u2122\u2124\u2127-\u2129\u212C\u212D\u212F-\u2131\u2133-\u2138\u2145-\u2148\u2153-\u215E\u2190-\u219B\u219D-\u21A7\u21A9-\u21AE\u21B0-\u21B3\u21B5-\u21B7\u21BA-\u21DB\u21DD\u21E4\u21E5\u21F5\u21FD-\u2205\u2207-\u2209\u220B\u220C\u220F-\u2214\u2216-\u2218\u221A\u221D-\u2238\u223A-\u2257\u2259\u225A\u225C\u225F-\u2262\u2264-\u228B\u228D-\u229B\u229D-\u22A5\u22A7-\u22B0\u22B2-\u22BB\u22BD-\u22DB\u22DE-\u22E3\u22E6-\u22F7\u22F9-\u22FE\u2305\u2306\u2308-\u2310\u2312\u2313\u2315\u2316\u231C-\u231F\u2322\u2323\u232D\u232E\u2336\u233D\u233F\u237C\u23B0\u23B1\u23B4-\u23B6\u23DC-\u23DF\u23E2\u23E7\u2423\u24C8\u2500\u2502\u250C\u2510\u2514\u2518\u251C\u2524\u252C\u2534\u253C\u2550-\u256C\u2580\u2584\u2588\u2591-\u2593\u25A1\u25AA\u25AB\u25AD\u25AE\u25B1\u25B3-\u25B5\u25B8\u25B9\u25BD-\u25BF\u25C2\u25C3\u25CA\u25CB\u25EC\u25EF\u25F8-\u25FC\u2605\u2606\u260E\u2640\u2642\u2660\u2663\u2665\u2666\u266A\u266D-\u266F\u2713\u2717\u2720\u2736\u2758\u2772\u2773\u27C8\u27C9\u27E6-\u27ED\u27F5-\u27FA\u27FC\u27FF\u2902-\u2905\u290C-\u2913\u2916\u2919-\u2920\u2923-\u292A\u2933\u2935-\u2939\u293C\u293D\u2945\u2948-\u294B\u294E-\u2976\u2978\u2979\u297B-\u297F\u2985\u2986\u298B-\u2996\u299A\u299C\u299D\u29A4-\u29B7\u29B9\u29BB\u29BC\u29BE-\u29C5\u29C9\u29CD-\u29D0\u29DC-\u29DE\u29E3-\u29E5\u29EB\u29F4\u29F6\u2A00-\u2A02\u2A04\u2A06\u2A0C\u2A0D\u2A10-\u2A17\u2A22-\u2A27\u2A29\u2A2A\u2A2D-\u2A31\u2A33-\u2A3C\u2A3F\u2A40\u2A42-\u2A4D\u2A50\u2A53-\u2A58\u2A5A-\u2A5D\u2A5F\u2A66\u2A6A\u2A6D-\u2A75\u2A77-\u2A9A\u2A9D-\u2AA2\u2AA4-\u2AB0\u2AB3-\u2AC8\u2ACB\u2ACC\u2ACF-\u2ADB\u2AE4\u2AE6-\u2AE9\u2AEB-\u2AF3\u2AFD\uFB00-\uFB04]|\uD835[\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDCCF\uDD04\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDD6B]/g;
      var encodeMap = { "\xAD": "shy", "\u200C": "zwnj", "\u200D": "zwj", "\u200E": "lrm", "\u2063": "ic", "\u2062": "it", "\u2061": "af", "\u200F": "rlm", "\u200B": "ZeroWidthSpace", "\u2060": "NoBreak", "\u0311": "DownBreve", "\u20DB": "tdot", "\u20DC": "DotDot", "	": "Tab", "\n": "NewLine", "\u2008": "puncsp", "\u205F": "MediumSpace", "\u2009": "thinsp", "\u200A": "hairsp", "\u2004": "emsp13", "\u2002": "ensp", "\u2005": "emsp14", "\u2003": "emsp", "\u2007": "numsp", "\xA0": "nbsp", "\u205F\u200A": "ThickSpace", "\u203E": "oline", "_": "lowbar", "\u2010": "dash", "\u2013": "ndash", "\u2014": "mdash", "\u2015": "horbar", ",": "comma", ";": "semi", "\u204F": "bsemi", ":": "colon", "\u2A74": "Colone", "!": "excl", "\xA1": "iexcl", "?": "quest", "\xBF": "iquest", ".": "period", "\u2025": "nldr", "\u2026": "mldr", "\xB7": "middot", "'": "apos", "\u2018": "lsquo", "\u2019": "rsquo", "\u201A": "sbquo", "\u2039": "lsaquo", "\u203A": "rsaquo", '"': "quot", "\u201C": "ldquo", "\u201D": "rdquo", "\u201E": "bdquo", "\xAB": "laquo", "\xBB": "raquo", "(": "lpar", ")": "rpar", "[": "lsqb", "]": "rsqb", "{": "lcub", "}": "rcub", "\u2308": "lceil", "\u2309": "rceil", "\u230A": "lfloor", "\u230B": "rfloor", "\u2985": "lopar", "\u2986": "ropar", "\u298B": "lbrke", "\u298C": "rbrke", "\u298D": "lbrkslu", "\u298E": "rbrksld", "\u298F": "lbrksld", "\u2990": "rbrkslu", "\u2991": "langd", "\u2992": "rangd", "\u2993": "lparlt", "\u2994": "rpargt", "\u2995": "gtlPar", "\u2996": "ltrPar", "\u27E6": "lobrk", "\u27E7": "robrk", "\u27E8": "lang", "\u27E9": "rang", "\u27EA": "Lang", "\u27EB": "Rang", "\u27EC": "loang", "\u27ED": "roang", "\u2772": "lbbrk", "\u2773": "rbbrk", "\u2016": "Vert", "\xA7": "sect", "\xB6": "para", "@": "commat", "*": "ast", "/": "sol", "undefined": null, "&": "amp", "#": "num", "%": "percnt", "\u2030": "permil", "\u2031": "pertenk", "\u2020": "dagger", "\u2021": "Dagger", "\u2022": "bull", "\u2043": "hybull", "\u2032": "prime", "\u2033": "Prime", "\u2034": "tprime", "\u2057": "qprime", "\u2035": "bprime", "\u2041": "caret", "`": "grave", "\xB4": "acute", "\u02DC": "tilde", "^": "Hat", "\xAF": "macr", "\u02D8": "breve", "\u02D9": "dot", "\xA8": "die", "\u02DA": "ring", "\u02DD": "dblac", "\xB8": "cedil", "\u02DB": "ogon", "\u02C6": "circ", "\u02C7": "caron", "\xB0": "deg", "\xA9": "copy", "\xAE": "reg", "\u2117": "copysr", "\u2118": "wp", "\u211E": "rx", "\u2127": "mho", "\u2129": "iiota", "\u2190": "larr", "\u219A": "nlarr", "\u2192": "rarr", "\u219B": "nrarr", "\u2191": "uarr", "\u2193": "darr", "\u2194": "harr", "\u21AE": "nharr", "\u2195": "varr", "\u2196": "nwarr", "\u2197": "nearr", "\u2198": "searr", "\u2199": "swarr", "\u219D": "rarrw", "\u219D\u0338": "nrarrw", "\u219E": "Larr", "\u219F": "Uarr", "\u21A0": "Rarr", "\u21A1": "Darr", "\u21A2": "larrtl", "\u21A3": "rarrtl", "\u21A4": "mapstoleft", "\u21A5": "mapstoup", "\u21A6": "map", "\u21A7": "mapstodown", "\u21A9": "larrhk", "\u21AA": "rarrhk", "\u21AB": "larrlp", "\u21AC": "rarrlp", "\u21AD": "harrw", "\u21B0": "lsh", "\u21B1": "rsh", "\u21B2": "ldsh", "\u21B3": "rdsh", "\u21B5": "crarr", "\u21B6": "cularr", "\u21B7": "curarr", "\u21BA": "olarr", "\u21BB": "orarr", "\u21BC": "lharu", "\u21BD": "lhard", "\u21BE": "uharr", "\u21BF": "uharl", "\u21C0": "rharu", "\u21C1": "rhard", "\u21C2": "dharr", "\u21C3": "dharl", "\u21C4": "rlarr", "\u21C5": "udarr", "\u21C6": "lrarr", "\u21C7": "llarr", "\u21C8": "uuarr", "\u21C9": "rrarr", "\u21CA": "ddarr", "\u21CB": "lrhar", "\u21CC": "rlhar", "\u21D0": "lArr", "\u21CD": "nlArr", "\u21D1": "uArr", "\u21D2": "rArr", "\u21CF": "nrArr", "\u21D3": "dArr", "\u21D4": "iff", "\u21CE": "nhArr", "\u21D5": "vArr", "\u21D6": "nwArr", "\u21D7": "neArr", "\u21D8": "seArr", "\u21D9": "swArr", "\u21DA": "lAarr", "\u21DB": "rAarr", "\u21DD": "zigrarr", "\u21E4": "larrb", "\u21E5": "rarrb", "\u21F5": "duarr", "\u21FD": "loarr", "\u21FE": "roarr", "\u21FF": "hoarr", "\u2200": "forall", "\u2201": "comp", "\u2202": "part", "\u2202\u0338": "npart", "\u2203": "exist", "\u2204": "nexist", "\u2205": "empty", "\u2207": "Del", "\u2208": "in", "\u2209": "notin", "\u220B": "ni", "\u220C": "notni", "\u03F6": "bepsi", "\u220F": "prod", "\u2210": "coprod", "\u2211": "sum", "+": "plus", "\xB1": "pm", "\xF7": "div", "\xD7": "times", "<": "lt", "\u226E": "nlt", "<\u20D2": "nvlt", "=": "equals", "\u2260": "ne", "=\u20E5": "bne", "\u2A75": "Equal", ">": "gt", "\u226F": "ngt", ">\u20D2": "nvgt", "\xAC": "not", "|": "vert", "\xA6": "brvbar", "\u2212": "minus", "\u2213": "mp", "\u2214": "plusdo", "\u2044": "frasl", "\u2216": "setmn", "\u2217": "lowast", "\u2218": "compfn", "\u221A": "Sqrt", "\u221D": "prop", "\u221E": "infin", "\u221F": "angrt", "\u2220": "ang", "\u2220\u20D2": "nang", "\u2221": "angmsd", "\u2222": "angsph", "\u2223": "mid", "\u2224": "nmid", "\u2225": "par", "\u2226": "npar", "\u2227": "and", "\u2228": "or", "\u2229": "cap", "\u2229\uFE00": "caps", "\u222A": "cup", "\u222A\uFE00": "cups", "\u222B": "int", "\u222C": "Int", "\u222D": "tint", "\u2A0C": "qint", "\u222E": "oint", "\u222F": "Conint", "\u2230": "Cconint", "\u2231": "cwint", "\u2232": "cwconint", "\u2233": "awconint", "\u2234": "there4", "\u2235": "becaus", "\u2236": "ratio", "\u2237": "Colon", "\u2238": "minusd", "\u223A": "mDDot", "\u223B": "homtht", "\u223C": "sim", "\u2241": "nsim", "\u223C\u20D2": "nvsim", "\u223D": "bsim", "\u223D\u0331": "race", "\u223E": "ac", "\u223E\u0333": "acE", "\u223F": "acd", "\u2240": "wr", "\u2242": "esim", "\u2242\u0338": "nesim", "\u2243": "sime", "\u2244": "nsime", "\u2245": "cong", "\u2247": "ncong", "\u2246": "simne", "\u2248": "ap", "\u2249": "nap", "\u224A": "ape", "\u224B": "apid", "\u224B\u0338": "napid", "\u224C": "bcong", "\u224D": "CupCap", "\u226D": "NotCupCap", "\u224D\u20D2": "nvap", "\u224E": "bump", "\u224E\u0338": "nbump", "\u224F": "bumpe", "\u224F\u0338": "nbumpe", "\u2250": "doteq", "\u2250\u0338": "nedot", "\u2251": "eDot", "\u2252": "efDot", "\u2253": "erDot", "\u2254": "colone", "\u2255": "ecolon", "\u2256": "ecir", "\u2257": "cire", "\u2259": "wedgeq", "\u225A": "veeeq", "\u225C": "trie", "\u225F": "equest", "\u2261": "equiv", "\u2262": "nequiv", "\u2261\u20E5": "bnequiv", "\u2264": "le", "\u2270": "nle", "\u2264\u20D2": "nvle", "\u2265": "ge", "\u2271": "nge", "\u2265\u20D2": "nvge", "\u2266": "lE", "\u2266\u0338": "nlE", "\u2267": "gE", "\u2267\u0338": "ngE", "\u2268\uFE00": "lvnE", "\u2268": "lnE", "\u2269": "gnE", "\u2269\uFE00": "gvnE", "\u226A": "ll", "\u226A\u0338": "nLtv", "\u226A\u20D2": "nLt", "\u226B": "gg", "\u226B\u0338": "nGtv", "\u226B\u20D2": "nGt", "\u226C": "twixt", "\u2272": "lsim", "\u2274": "nlsim", "\u2273": "gsim", "\u2275": "ngsim", "\u2276": "lg", "\u2278": "ntlg", "\u2277": "gl", "\u2279": "ntgl", "\u227A": "pr", "\u2280": "npr", "\u227B": "sc", "\u2281": "nsc", "\u227C": "prcue", "\u22E0": "nprcue", "\u227D": "sccue", "\u22E1": "nsccue", "\u227E": "prsim", "\u227F": "scsim", "\u227F\u0338": "NotSucceedsTilde", "\u2282": "sub", "\u2284": "nsub", "\u2282\u20D2": "vnsub", "\u2283": "sup", "\u2285": "nsup", "\u2283\u20D2": "vnsup", "\u2286": "sube", "\u2288": "nsube", "\u2287": "supe", "\u2289": "nsupe", "\u228A\uFE00": "vsubne", "\u228A": "subne", "\u228B\uFE00": "vsupne", "\u228B": "supne", "\u228D": "cupdot", "\u228E": "uplus", "\u228F": "sqsub", "\u228F\u0338": "NotSquareSubset", "\u2290": "sqsup", "\u2290\u0338": "NotSquareSuperset", "\u2291": "sqsube", "\u22E2": "nsqsube", "\u2292": "sqsupe", "\u22E3": "nsqsupe", "\u2293": "sqcap", "\u2293\uFE00": "sqcaps", "\u2294": "sqcup", "\u2294\uFE00": "sqcups", "\u2295": "oplus", "\u2296": "ominus", "\u2297": "otimes", "\u2298": "osol", "\u2299": "odot", "\u229A": "ocir", "\u229B": "oast", "\u229D": "odash", "\u229E": "plusb", "\u229F": "minusb", "\u22A0": "timesb", "\u22A1": "sdotb", "\u22A2": "vdash", "\u22AC": "nvdash", "\u22A3": "dashv", "\u22A4": "top", "\u22A5": "bot", "\u22A7": "models", "\u22A8": "vDash", "\u22AD": "nvDash", "\u22A9": "Vdash", "\u22AE": "nVdash", "\u22AA": "Vvdash", "\u22AB": "VDash", "\u22AF": "nVDash", "\u22B0": "prurel", "\u22B2": "vltri", "\u22EA": "nltri", "\u22B3": "vrtri", "\u22EB": "nrtri", "\u22B4": "ltrie", "\u22EC": "nltrie", "\u22B4\u20D2": "nvltrie", "\u22B5": "rtrie", "\u22ED": "nrtrie", "\u22B5\u20D2": "nvrtrie", "\u22B6": "origof", "\u22B7": "imof", "\u22B8": "mumap", "\u22B9": "hercon", "\u22BA": "intcal", "\u22BB": "veebar", "\u22BD": "barvee", "\u22BE": "angrtvb", "\u22BF": "lrtri", "\u22C0": "Wedge", "\u22C1": "Vee", "\u22C2": "xcap", "\u22C3": "xcup", "\u22C4": "diam", "\u22C5": "sdot", "\u22C6": "Star", "\u22C7": "divonx", "\u22C8": "bowtie", "\u22C9": "ltimes", "\u22CA": "rtimes", "\u22CB": "lthree", "\u22CC": "rthree", "\u22CD": "bsime", "\u22CE": "cuvee", "\u22CF": "cuwed", "\u22D0": "Sub", "\u22D1": "Sup", "\u22D2": "Cap", "\u22D3": "Cup", "\u22D4": "fork", "\u22D5": "epar", "\u22D6": "ltdot", "\u22D7": "gtdot", "\u22D8": "Ll", "\u22D8\u0338": "nLl", "\u22D9": "Gg", "\u22D9\u0338": "nGg", "\u22DA\uFE00": "lesg", "\u22DA": "leg", "\u22DB": "gel", "\u22DB\uFE00": "gesl", "\u22DE": "cuepr", "\u22DF": "cuesc", "\u22E6": "lnsim", "\u22E7": "gnsim", "\u22E8": "prnsim", "\u22E9": "scnsim", "\u22EE": "vellip", "\u22EF": "ctdot", "\u22F0": "utdot", "\u22F1": "dtdot", "\u22F2": "disin", "\u22F3": "isinsv", "\u22F4": "isins", "\u22F5": "isindot", "\u22F5\u0338": "notindot", "\u22F6": "notinvc", "\u22F7": "notinvb", "\u22F9": "isinE", "\u22F9\u0338": "notinE", "\u22FA": "nisd", "\u22FB": "xnis", "\u22FC": "nis", "\u22FD": "notnivc", "\u22FE": "notnivb", "\u2305": "barwed", "\u2306": "Barwed", "\u230C": "drcrop", "\u230D": "dlcrop", "\u230E": "urcrop", "\u230F": "ulcrop", "\u2310": "bnot", "\u2312": "profline", "\u2313": "profsurf", "\u2315": "telrec", "\u2316": "target", "\u231C": "ulcorn", "\u231D": "urcorn", "\u231E": "dlcorn", "\u231F": "drcorn", "\u2322": "frown", "\u2323": "smile", "\u232D": "cylcty", "\u232E": "profalar", "\u2336": "topbot", "\u233D": "ovbar", "\u233F": "solbar", "\u237C": "angzarr", "\u23B0": "lmoust", "\u23B1": "rmoust", "\u23B4": "tbrk", "\u23B5": "bbrk", "\u23B6": "bbrktbrk", "\u23DC": "OverParenthesis", "\u23DD": "UnderParenthesis", "\u23DE": "OverBrace", "\u23DF": "UnderBrace", "\u23E2": "trpezium", "\u23E7": "elinters", "\u2423": "blank", "\u2500": "boxh", "\u2502": "boxv", "\u250C": "boxdr", "\u2510": "boxdl", "\u2514": "boxur", "\u2518": "boxul", "\u251C": "boxvr", "\u2524": "boxvl", "\u252C": "boxhd", "\u2534": "boxhu", "\u253C": "boxvh", "\u2550": "boxH", "\u2551": "boxV", "\u2552": "boxdR", "\u2553": "boxDr", "\u2554": "boxDR", "\u2555": "boxdL", "\u2556": "boxDl", "\u2557": "boxDL", "\u2558": "boxuR", "\u2559": "boxUr", "\u255A": "boxUR", "\u255B": "boxuL", "\u255C": "boxUl", "\u255D": "boxUL", "\u255E": "boxvR", "\u255F": "boxVr", "\u2560": "boxVR", "\u2561": "boxvL", "\u2562": "boxVl", "\u2563": "boxVL", "\u2564": "boxHd", "\u2565": "boxhD", "\u2566": "boxHD", "\u2567": "boxHu", "\u2568": "boxhU", "\u2569": "boxHU", "\u256A": "boxvH", "\u256B": "boxVh", "\u256C": "boxVH", "\u2580": "uhblk", "\u2584": "lhblk", "\u2588": "block", "\u2591": "blk14", "\u2592": "blk12", "\u2593": "blk34", "\u25A1": "squ", "\u25AA": "squf", "\u25AB": "EmptyVerySmallSquare", "\u25AD": "rect", "\u25AE": "marker", "\u25B1": "fltns", "\u25B3": "xutri", "\u25B4": "utrif", "\u25B5": "utri", "\u25B8": "rtrif", "\u25B9": "rtri", "\u25BD": "xdtri", "\u25BE": "dtrif", "\u25BF": "dtri", "\u25C2": "ltrif", "\u25C3": "ltri", "\u25CA": "loz", "\u25CB": "cir", "\u25EC": "tridot", "\u25EF": "xcirc", "\u25F8": "ultri", "\u25F9": "urtri", "\u25FA": "lltri", "\u25FB": "EmptySmallSquare", "\u25FC": "FilledSmallSquare", "\u2605": "starf", "\u2606": "star", "\u260E": "phone", "\u2640": "female", "\u2642": "male", "\u2660": "spades", "\u2663": "clubs", "\u2665": "hearts", "\u2666": "diams", "\u266A": "sung", "\u2713": "check", "\u2717": "cross", "\u2720": "malt", "\u2736": "sext", "\u2758": "VerticalSeparator", "\u27C8": "bsolhsub", "\u27C9": "suphsol", "\u27F5": "xlarr", "\u27F6": "xrarr", "\u27F7": "xharr", "\u27F8": "xlArr", "\u27F9": "xrArr", "\u27FA": "xhArr", "\u27FC": "xmap", "\u27FF": "dzigrarr", "\u2902": "nvlArr", "\u2903": "nvrArr", "\u2904": "nvHarr", "\u2905": "Map", "\u290C": "lbarr", "\u290D": "rbarr", "\u290E": "lBarr", "\u290F": "rBarr", "\u2910": "RBarr", "\u2911": "DDotrahd", "\u2912": "UpArrowBar", "\u2913": "DownArrowBar", "\u2916": "Rarrtl", "\u2919": "latail", "\u291A": "ratail", "\u291B": "lAtail", "\u291C": "rAtail", "\u291D": "larrfs", "\u291E": "rarrfs", "\u291F": "larrbfs", "\u2920": "rarrbfs", "\u2923": "nwarhk", "\u2924": "nearhk", "\u2925": "searhk", "\u2926": "swarhk", "\u2927": "nwnear", "\u2928": "toea", "\u2929": "tosa", "\u292A": "swnwar", "\u2933": "rarrc", "\u2933\u0338": "nrarrc", "\u2935": "cudarrr", "\u2936": "ldca", "\u2937": "rdca", "\u2938": "cudarrl", "\u2939": "larrpl", "\u293C": "curarrm", "\u293D": "cularrp", "\u2945": "rarrpl", "\u2948": "harrcir", "\u2949": "Uarrocir", "\u294A": "lurdshar", "\u294B": "ldrushar", "\u294E": "LeftRightVector", "\u294F": "RightUpDownVector", "\u2950": "DownLeftRightVector", "\u2951": "LeftUpDownVector", "\u2952": "LeftVectorBar", "\u2953": "RightVectorBar", "\u2954": "RightUpVectorBar", "\u2955": "RightDownVectorBar", "\u2956": "DownLeftVectorBar", "\u2957": "DownRightVectorBar", "\u2958": "LeftUpVectorBar", "\u2959": "LeftDownVectorBar", "\u295A": "LeftTeeVector", "\u295B": "RightTeeVector", "\u295C": "RightUpTeeVector", "\u295D": "RightDownTeeVector", "\u295E": "DownLeftTeeVector", "\u295F": "DownRightTeeVector", "\u2960": "LeftUpTeeVector", "\u2961": "LeftDownTeeVector", "\u2962": "lHar", "\u2963": "uHar", "\u2964": "rHar", "\u2965": "dHar", "\u2966": "luruhar", "\u2967": "ldrdhar", "\u2968": "ruluhar", "\u2969": "rdldhar", "\u296A": "lharul", "\u296B": "llhard", "\u296C": "rharul", "\u296D": "lrhard", "\u296E": "udhar", "\u296F": "duhar", "\u2970": "RoundImplies", "\u2971": "erarr", "\u2972": "simrarr", "\u2973": "larrsim", "\u2974": "rarrsim", "\u2975": "rarrap", "\u2976": "ltlarr", "\u2978": "gtrarr", "\u2979": "subrarr", "\u297B": "suplarr", "\u297C": "lfisht", "\u297D": "rfisht", "\u297E": "ufisht", "\u297F": "dfisht", "\u299A": "vzigzag", "\u299C": "vangrt", "\u299D": "angrtvbd", "\u29A4": "ange", "\u29A5": "range", "\u29A6": "dwangle", "\u29A7": "uwangle", "\u29A8": "angmsdaa", "\u29A9": "angmsdab", "\u29AA": "angmsdac", "\u29AB": "angmsdad", "\u29AC": "angmsdae", "\u29AD": "angmsdaf", "\u29AE": "angmsdag", "\u29AF": "angmsdah", "\u29B0": "bemptyv", "\u29B1": "demptyv", "\u29B2": "cemptyv", "\u29B3": "raemptyv", "\u29B4": "laemptyv", "\u29B5": "ohbar", "\u29B6": "omid", "\u29B7": "opar", "\u29B9": "operp", "\u29BB": "olcross", "\u29BC": "odsold", "\u29BE": "olcir", "\u29BF": "ofcir", "\u29C0": "olt", "\u29C1": "ogt", "\u29C2": "cirscir", "\u29C3": "cirE", "\u29C4": "solb", "\u29C5": "bsolb", "\u29C9": "boxbox", "\u29CD": "trisb", "\u29CE": "rtriltri", "\u29CF": "LeftTriangleBar", "\u29CF\u0338": "NotLeftTriangleBar", "\u29D0": "RightTriangleBar", "\u29D0\u0338": "NotRightTriangleBar", "\u29DC": "iinfin", "\u29DD": "infintie", "\u29DE": "nvinfin", "\u29E3": "eparsl", "\u29E4": "smeparsl", "\u29E5": "eqvparsl", "\u29EB": "lozf", "\u29F4": "RuleDelayed", "\u29F6": "dsol", "\u2A00": "xodot", "\u2A01": "xoplus", "\u2A02": "xotime", "\u2A04": "xuplus", "\u2A06": "xsqcup", "\u2A0D": "fpartint", "\u2A10": "cirfnint", "\u2A11": "awint", "\u2A12": "rppolint", "\u2A13": "scpolint", "\u2A14": "npolint", "\u2A15": "pointint", "\u2A16": "quatint", "\u2A17": "intlarhk", "\u2A22": "pluscir", "\u2A23": "plusacir", "\u2A24": "simplus", "\u2A25": "plusdu", "\u2A26": "plussim", "\u2A27": "plustwo", "\u2A29": "mcomma", "\u2A2A": "minusdu", "\u2A2D": "loplus", "\u2A2E": "roplus", "\u2A2F": "Cross", "\u2A30": "timesd", "\u2A31": "timesbar", "\u2A33": "smashp", "\u2A34": "lotimes", "\u2A35": "rotimes", "\u2A36": "otimesas", "\u2A37": "Otimes", "\u2A38": "odiv", "\u2A39": "triplus", "\u2A3A": "triminus", "\u2A3B": "tritime", "\u2A3C": "iprod", "\u2A3F": "amalg", "\u2A40": "capdot", "\u2A42": "ncup", "\u2A43": "ncap", "\u2A44": "capand", "\u2A45": "cupor", "\u2A46": "cupcap", "\u2A47": "capcup", "\u2A48": "cupbrcap", "\u2A49": "capbrcup", "\u2A4A": "cupcup", "\u2A4B": "capcap", "\u2A4C": "ccups", "\u2A4D": "ccaps", "\u2A50": "ccupssm", "\u2A53": "And", "\u2A54": "Or", "\u2A55": "andand", "\u2A56": "oror", "\u2A57": "orslope", "\u2A58": "andslope", "\u2A5A": "andv", "\u2A5B": "orv", "\u2A5C": "andd", "\u2A5D": "ord", "\u2A5F": "wedbar", "\u2A66": "sdote", "\u2A6A": "simdot", "\u2A6D": "congdot", "\u2A6D\u0338": "ncongdot", "\u2A6E": "easter", "\u2A6F": "apacir", "\u2A70": "apE", "\u2A70\u0338": "napE", "\u2A71": "eplus", "\u2A72": "pluse", "\u2A73": "Esim", "\u2A77": "eDDot", "\u2A78": "equivDD", "\u2A79": "ltcir", "\u2A7A": "gtcir", "\u2A7B": "ltquest", "\u2A7C": "gtquest", "\u2A7D": "les", "\u2A7D\u0338": "nles", "\u2A7E": "ges", "\u2A7E\u0338": "nges", "\u2A7F": "lesdot", "\u2A80": "gesdot", "\u2A81": "lesdoto", "\u2A82": "gesdoto", "\u2A83": "lesdotor", "\u2A84": "gesdotol", "\u2A85": "lap", "\u2A86": "gap", "\u2A87": "lne", "\u2A88": "gne", "\u2A89": "lnap", "\u2A8A": "gnap", "\u2A8B": "lEg", "\u2A8C": "gEl", "\u2A8D": "lsime", "\u2A8E": "gsime", "\u2A8F": "lsimg", "\u2A90": "gsiml", "\u2A91": "lgE", "\u2A92": "glE", "\u2A93": "lesges", "\u2A94": "gesles", "\u2A95": "els", "\u2A96": "egs", "\u2A97": "elsdot", "\u2A98": "egsdot", "\u2A99": "el", "\u2A9A": "eg", "\u2A9D": "siml", "\u2A9E": "simg", "\u2A9F": "simlE", "\u2AA0": "simgE", "\u2AA1": "LessLess", "\u2AA1\u0338": "NotNestedLessLess", "\u2AA2": "GreaterGreater", "\u2AA2\u0338": "NotNestedGreaterGreater", "\u2AA4": "glj", "\u2AA5": "gla", "\u2AA6": "ltcc", "\u2AA7": "gtcc", "\u2AA8": "lescc", "\u2AA9": "gescc", "\u2AAA": "smt", "\u2AAB": "lat", "\u2AAC": "smte", "\u2AAC\uFE00": "smtes", "\u2AAD": "late", "\u2AAD\uFE00": "lates", "\u2AAE": "bumpE", "\u2AAF": "pre", "\u2AAF\u0338": "npre", "\u2AB0": "sce", "\u2AB0\u0338": "nsce", "\u2AB3": "prE", "\u2AB4": "scE", "\u2AB5": "prnE", "\u2AB6": "scnE", "\u2AB7": "prap", "\u2AB8": "scap", "\u2AB9": "prnap", "\u2ABA": "scnap", "\u2ABB": "Pr", "\u2ABC": "Sc", "\u2ABD": "subdot", "\u2ABE": "supdot", "\u2ABF": "subplus", "\u2AC0": "supplus", "\u2AC1": "submult", "\u2AC2": "supmult", "\u2AC3": "subedot", "\u2AC4": "supedot", "\u2AC5": "subE", "\u2AC5\u0338": "nsubE", "\u2AC6": "supE", "\u2AC6\u0338": "nsupE", "\u2AC7": "subsim", "\u2AC8": "supsim", "\u2ACB\uFE00": "vsubnE", "\u2ACB": "subnE", "\u2ACC\uFE00": "vsupnE", "\u2ACC": "supnE", "\u2ACF": "csub", "\u2AD0": "csup", "\u2AD1": "csube", "\u2AD2": "csupe", "\u2AD3": "subsup", "\u2AD4": "supsub", "\u2AD5": "subsub", "\u2AD6": "supsup", "\u2AD7": "suphsub", "\u2AD8": "supdsub", "\u2AD9": "forkv", "\u2ADA": "topfork", "\u2ADB": "mlcp", "\u2AE4": "Dashv", "\u2AE6": "Vdashl", "\u2AE7": "Barv", "\u2AE8": "vBar", "\u2AE9": "vBarv", "\u2AEB": "Vbar", "\u2AEC": "Not", "\u2AED": "bNot", "\u2AEE": "rnmid", "\u2AEF": "cirmid", "\u2AF0": "midcir", "\u2AF1": "topcir", "\u2AF2": "nhpar", "\u2AF3": "parsim", "\u2AFD": "parsl", "\u2AFD\u20E5": "nparsl", "\u266D": "flat", "\u266E": "natur", "\u266F": "sharp", "\xA4": "curren", "\xA2": "cent", "$": "dollar", "\xA3": "pound", "\xA5": "yen", "\u20AC": "euro", "\xB9": "sup1", "\xBD": "half", "\u2153": "frac13", "\xBC": "frac14", "\u2155": "frac15", "\u2159": "frac16", "\u215B": "frac18", "\xB2": "sup2", "\u2154": "frac23", "\u2156": "frac25", "\xB3": "sup3", "\xBE": "frac34", "\u2157": "frac35", "\u215C": "frac38", "\u2158": "frac45", "\u215A": "frac56", "\u215D": "frac58", "\u215E": "frac78", "\u{1D4B6}": "ascr", "\u{1D552}": "aopf", "\u{1D51E}": "afr", "\u{1D538}": "Aopf", "\u{1D504}": "Afr", "\u{1D49C}": "Ascr", "\xAA": "ordf", "\xE1": "aacute", "\xC1": "Aacute", "\xE0": "agrave", "\xC0": "Agrave", "\u0103": "abreve", "\u0102": "Abreve", "\xE2": "acirc", "\xC2": "Acirc", "\xE5": "aring", "\xC5": "angst", "\xE4": "auml", "\xC4": "Auml", "\xE3": "atilde", "\xC3": "Atilde", "\u0105": "aogon", "\u0104": "Aogon", "\u0101": "amacr", "\u0100": "Amacr", "\xE6": "aelig", "\xC6": "AElig", "\u{1D4B7}": "bscr", "\u{1D553}": "bopf", "\u{1D51F}": "bfr", "\u{1D539}": "Bopf", "\u212C": "Bscr", "\u{1D505}": "Bfr", "\u{1D520}": "cfr", "\u{1D4B8}": "cscr", "\u{1D554}": "copf", "\u212D": "Cfr", "\u{1D49E}": "Cscr", "\u2102": "Copf", "\u0107": "cacute", "\u0106": "Cacute", "\u0109": "ccirc", "\u0108": "Ccirc", "\u010D": "ccaron", "\u010C": "Ccaron", "\u010B": "cdot", "\u010A": "Cdot", "\xE7": "ccedil", "\xC7": "Ccedil", "\u2105": "incare", "\u{1D521}": "dfr", "\u2146": "dd", "\u{1D555}": "dopf", "\u{1D4B9}": "dscr", "\u{1D49F}": "Dscr", "\u{1D507}": "Dfr", "\u2145": "DD", "\u{1D53B}": "Dopf", "\u010F": "dcaron", "\u010E": "Dcaron", "\u0111": "dstrok", "\u0110": "Dstrok", "\xF0": "eth", "\xD0": "ETH", "\u2147": "ee", "\u212F": "escr", "\u{1D522}": "efr", "\u{1D556}": "eopf", "\u2130": "Escr", "\u{1D508}": "Efr", "\u{1D53C}": "Eopf", "\xE9": "eacute", "\xC9": "Eacute", "\xE8": "egrave", "\xC8": "Egrave", "\xEA": "ecirc", "\xCA": "Ecirc", "\u011B": "ecaron", "\u011A": "Ecaron", "\xEB": "euml", "\xCB": "Euml", "\u0117": "edot", "\u0116": "Edot", "\u0119": "eogon", "\u0118": "Eogon", "\u0113": "emacr", "\u0112": "Emacr", "\u{1D523}": "ffr", "\u{1D557}": "fopf", "\u{1D4BB}": "fscr", "\u{1D509}": "Ffr", "\u{1D53D}": "Fopf", "\u2131": "Fscr", "\uFB00": "fflig", "\uFB03": "ffilig", "\uFB04": "ffllig", "\uFB01": "filig", "fj": "fjlig", "\uFB02": "fllig", "\u0192": "fnof", "\u210A": "gscr", "\u{1D558}": "gopf", "\u{1D524}": "gfr", "\u{1D4A2}": "Gscr", "\u{1D53E}": "Gopf", "\u{1D50A}": "Gfr", "\u01F5": "gacute", "\u011F": "gbreve", "\u011E": "Gbreve", "\u011D": "gcirc", "\u011C": "Gcirc", "\u0121": "gdot", "\u0120": "Gdot", "\u0122": "Gcedil", "\u{1D525}": "hfr", "\u210E": "planckh", "\u{1D4BD}": "hscr", "\u{1D559}": "hopf", "\u210B": "Hscr", "\u210C": "Hfr", "\u210D": "Hopf", "\u0125": "hcirc", "\u0124": "Hcirc", "\u210F": "hbar", "\u0127": "hstrok", "\u0126": "Hstrok", "\u{1D55A}": "iopf", "\u{1D526}": "ifr", "\u{1D4BE}": "iscr", "\u2148": "ii", "\u{1D540}": "Iopf", "\u2110": "Iscr", "\u2111": "Im", "\xED": "iacute", "\xCD": "Iacute", "\xEC": "igrave", "\xCC": "Igrave", "\xEE": "icirc", "\xCE": "Icirc", "\xEF": "iuml", "\xCF": "Iuml", "\u0129": "itilde", "\u0128": "Itilde", "\u0130": "Idot", "\u012F": "iogon", "\u012E": "Iogon", "\u012B": "imacr", "\u012A": "Imacr", "\u0133": "ijlig", "\u0132": "IJlig", "\u0131": "imath", "\u{1D4BF}": "jscr", "\u{1D55B}": "jopf", "\u{1D527}": "jfr", "\u{1D4A5}": "Jscr", "\u{1D50D}": "Jfr", "\u{1D541}": "Jopf", "\u0135": "jcirc", "\u0134": "Jcirc", "\u0237": "jmath", "\u{1D55C}": "kopf", "\u{1D4C0}": "kscr", "\u{1D528}": "kfr", "\u{1D4A6}": "Kscr", "\u{1D542}": "Kopf", "\u{1D50E}": "Kfr", "\u0137": "kcedil", "\u0136": "Kcedil", "\u{1D529}": "lfr", "\u{1D4C1}": "lscr", "\u2113": "ell", "\u{1D55D}": "lopf", "\u2112": "Lscr", "\u{1D50F}": "Lfr", "\u{1D543}": "Lopf", "\u013A": "lacute", "\u0139": "Lacute", "\u013E": "lcaron", "\u013D": "Lcaron", "\u013C": "lcedil", "\u013B": "Lcedil", "\u0142": "lstrok", "\u0141": "Lstrok", "\u0140": "lmidot", "\u013F": "Lmidot", "\u{1D52A}": "mfr", "\u{1D55E}": "mopf", "\u{1D4C2}": "mscr", "\u{1D510}": "Mfr", "\u{1D544}": "Mopf", "\u2133": "Mscr", "\u{1D52B}": "nfr", "\u{1D55F}": "nopf", "\u{1D4C3}": "nscr", "\u2115": "Nopf", "\u{1D4A9}": "Nscr", "\u{1D511}": "Nfr", "\u0144": "nacute", "\u0143": "Nacute", "\u0148": "ncaron", "\u0147": "Ncaron", "\xF1": "ntilde", "\xD1": "Ntilde", "\u0146": "ncedil", "\u0145": "Ncedil", "\u2116": "numero", "\u014B": "eng", "\u014A": "ENG", "\u{1D560}": "oopf", "\u{1D52C}": "ofr", "\u2134": "oscr", "\u{1D4AA}": "Oscr", "\u{1D512}": "Ofr", "\u{1D546}": "Oopf", "\xBA": "ordm", "\xF3": "oacute", "\xD3": "Oacute", "\xF2": "ograve", "\xD2": "Ograve", "\xF4": "ocirc", "\xD4": "Ocirc", "\xF6": "ouml", "\xD6": "Ouml", "\u0151": "odblac", "\u0150": "Odblac", "\xF5": "otilde", "\xD5": "Otilde", "\xF8": "oslash", "\xD8": "Oslash", "\u014D": "omacr", "\u014C": "Omacr", "\u0153": "oelig", "\u0152": "OElig", "\u{1D52D}": "pfr", "\u{1D4C5}": "pscr", "\u{1D561}": "popf", "\u2119": "Popf", "\u{1D513}": "Pfr", "\u{1D4AB}": "Pscr", "\u{1D562}": "qopf", "\u{1D52E}": "qfr", "\u{1D4C6}": "qscr", "\u{1D4AC}": "Qscr", "\u{1D514}": "Qfr", "\u211A": "Qopf", "\u0138": "kgreen", "\u{1D52F}": "rfr", "\u{1D563}": "ropf", "\u{1D4C7}": "rscr", "\u211B": "Rscr", "\u211C": "Re", "\u211D": "Ropf", "\u0155": "racute", "\u0154": "Racute", "\u0159": "rcaron", "\u0158": "Rcaron", "\u0157": "rcedil", "\u0156": "Rcedil", "\u{1D564}": "sopf", "\u{1D4C8}": "sscr", "\u{1D530}": "sfr", "\u{1D54A}": "Sopf", "\u{1D516}": "Sfr", "\u{1D4AE}": "Sscr", "\u24C8": "oS", "\u015B": "sacute", "\u015A": "Sacute", "\u015D": "scirc", "\u015C": "Scirc", "\u0161": "scaron", "\u0160": "Scaron", "\u015F": "scedil", "\u015E": "Scedil", "\xDF": "szlig", "\u{1D531}": "tfr", "\u{1D4C9}": "tscr", "\u{1D565}": "topf", "\u{1D4AF}": "Tscr", "\u{1D517}": "Tfr", "\u{1D54B}": "Topf", "\u0165": "tcaron", "\u0164": "Tcaron", "\u0163": "tcedil", "\u0162": "Tcedil", "\u2122": "trade", "\u0167": "tstrok", "\u0166": "Tstrok", "\u{1D4CA}": "uscr", "\u{1D566}": "uopf", "\u{1D532}": "ufr", "\u{1D54C}": "Uopf", "\u{1D518}": "Ufr", "\u{1D4B0}": "Uscr", "\xFA": "uacute", "\xDA": "Uacute", "\xF9": "ugrave", "\xD9": "Ugrave", "\u016D": "ubreve", "\u016C": "Ubreve", "\xFB": "ucirc", "\xDB": "Ucirc", "\u016F": "uring", "\u016E": "Uring", "\xFC": "uuml", "\xDC": "Uuml", "\u0171": "udblac", "\u0170": "Udblac", "\u0169": "utilde", "\u0168": "Utilde", "\u0173": "uogon", "\u0172": "Uogon", "\u016B": "umacr", "\u016A": "Umacr", "\u{1D533}": "vfr", "\u{1D567}": "vopf", "\u{1D4CB}": "vscr", "\u{1D519}": "Vfr", "\u{1D54D}": "Vopf", "\u{1D4B1}": "Vscr", "\u{1D568}": "wopf", "\u{1D4CC}": "wscr", "\u{1D534}": "wfr", "\u{1D4B2}": "Wscr", "\u{1D54E}": "Wopf", "\u{1D51A}": "Wfr", "\u0175": "wcirc", "\u0174": "Wcirc", "\u{1D535}": "xfr", "\u{1D4CD}": "xscr", "\u{1D569}": "xopf", "\u{1D54F}": "Xopf", "\u{1D51B}": "Xfr", "\u{1D4B3}": "Xscr", "\u{1D536}": "yfr", "\u{1D4CE}": "yscr", "\u{1D56A}": "yopf", "\u{1D4B4}": "Yscr", "\u{1D51C}": "Yfr", "\u{1D550}": "Yopf", "\xFD": "yacute", "\xDD": "Yacute", "\u0177": "ycirc", "\u0176": "Ycirc", "\xFF": "yuml", "\u0178": "Yuml", "\u{1D4CF}": "zscr", "\u{1D537}": "zfr", "\u{1D56B}": "zopf", "\u2128": "Zfr", "\u2124": "Zopf", "\u{1D4B5}": "Zscr", "\u017A": "zacute", "\u0179": "Zacute", "\u017E": "zcaron", "\u017D": "Zcaron", "\u017C": "zdot", "\u017B": "Zdot", "\u01B5": "imped", "\xFE": "thorn", "\xDE": "THORN", "\u0149": "napos", "\u03B1": "alpha", "\u0391": "Alpha", "\u03B2": "beta", "\u0392": "Beta", "\u03B3": "gamma", "\u0393": "Gamma", "\u03B4": "delta", "\u0394": "Delta", "\u03B5": "epsi", "\u03F5": "epsiv", "\u0395": "Epsilon", "\u03DD": "gammad", "\u03DC": "Gammad", "\u03B6": "zeta", "\u0396": "Zeta", "\u03B7": "eta", "\u0397": "Eta", "\u03B8": "theta", "\u03D1": "thetav", "\u0398": "Theta", "\u03B9": "iota", "\u0399": "Iota", "\u03BA": "kappa", "\u03F0": "kappav", "\u039A": "Kappa", "\u03BB": "lambda", "\u039B": "Lambda", "\u03BC": "mu", "\xB5": "micro", "\u039C": "Mu", "\u03BD": "nu", "\u039D": "Nu", "\u03BE": "xi", "\u039E": "Xi", "\u03BF": "omicron", "\u039F": "Omicron", "\u03C0": "pi", "\u03D6": "piv", "\u03A0": "Pi", "\u03C1": "rho", "\u03F1": "rhov", "\u03A1": "Rho", "\u03C3": "sigma", "\u03A3": "Sigma", "\u03C2": "sigmaf", "\u03C4": "tau", "\u03A4": "Tau", "\u03C5": "upsi", "\u03A5": "Upsilon", "\u03D2": "Upsi", "\u03C6": "phi", "\u03D5": "phiv", "\u03A6": "Phi", "\u03C7": "chi", "\u03A7": "Chi", "\u03C8": "psi", "\u03A8": "Psi", "\u03C9": "omega", "\u03A9": "ohm", "\u0430": "acy", "\u0410": "Acy", "\u0431": "bcy", "\u0411": "Bcy", "\u0432": "vcy", "\u0412": "Vcy", "\u0433": "gcy", "\u0413": "Gcy", "\u0453": "gjcy", "\u0403": "GJcy", "\u0434": "dcy", "\u0414": "Dcy", "\u0452": "djcy", "\u0402": "DJcy", "\u0435": "iecy", "\u0415": "IEcy", "\u0451": "iocy", "\u0401": "IOcy", "\u0454": "jukcy", "\u0404": "Jukcy", "\u0436": "zhcy", "\u0416": "ZHcy", "\u0437": "zcy", "\u0417": "Zcy", "\u0455": "dscy", "\u0405": "DScy", "\u0438": "icy", "\u0418": "Icy", "\u0456": "iukcy", "\u0406": "Iukcy", "\u0457": "yicy", "\u0407": "YIcy", "\u0439": "jcy", "\u0419": "Jcy", "\u0458": "jsercy", "\u0408": "Jsercy", "\u043A": "kcy", "\u041A": "Kcy", "\u045C": "kjcy", "\u040C": "KJcy", "\u043B": "lcy", "\u041B": "Lcy", "\u0459": "ljcy", "\u0409": "LJcy", "\u043C": "mcy", "\u041C": "Mcy", "\u043D": "ncy", "\u041D": "Ncy", "\u045A": "njcy", "\u040A": "NJcy", "\u043E": "ocy", "\u041E": "Ocy", "\u043F": "pcy", "\u041F": "Pcy", "\u0440": "rcy", "\u0420": "Rcy", "\u0441": "scy", "\u0421": "Scy", "\u0442": "tcy", "\u0422": "Tcy", "\u045B": "tshcy", "\u040B": "TSHcy", "\u0443": "ucy", "\u0423": "Ucy", "\u045E": "ubrcy", "\u040E": "Ubrcy", "\u0444": "fcy", "\u0424": "Fcy", "\u0445": "khcy", "\u0425": "KHcy", "\u0446": "tscy", "\u0426": "TScy", "\u0447": "chcy", "\u0427": "CHcy", "\u045F": "dzcy", "\u040F": "DZcy", "\u0448": "shcy", "\u0428": "SHcy", "\u0449": "shchcy", "\u0429": "SHCHcy", "\u044A": "hardcy", "\u042A": "HARDcy", "\u044B": "ycy", "\u042B": "Ycy", "\u044C": "softcy", "\u042C": "SOFTcy", "\u044D": "ecy", "\u042D": "Ecy", "\u044E": "yucy", "\u042E": "YUcy", "\u044F": "yacy", "\u042F": "YAcy", "\u2135": "aleph", "\u2136": "beth", "\u2137": "gimel", "\u2138": "daleth" };
      var regexEscape = /["&'<>`]/g;
      var escapeMap = {
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#x27;",
        "<": "&lt;",
        // See https://mathiasbynens.be/notes/ambiguous-ampersands: in HTML, the
        // following is not strictly necessary unless it’s part of a tag or an
        // unquoted attribute value. We’re only escaping it to support those
        // situations, and for XML support.
        ">": "&gt;",
        // In Internet Explorer ≤ 8, the backtick character can be used
        // to break out of (un)quoted attribute values or HTML comments.
        // See http://html5sec.org/#102, http://html5sec.org/#108, and
        // http://html5sec.org/#133.
        "`": "&#x60;"
      };
      var regexInvalidEntity = /&#(?:[xX][^a-fA-F0-9]|[^0-9xX])/;
      var regexInvalidRawCodePoint = /[\0-\x08\x0B\x0E-\x1F\x7F-\x9F\uFDD0-\uFDEF\uFFFE\uFFFF]|[\uD83F\uD87F\uD8BF\uD8FF\uD93F\uD97F\uD9BF\uD9FF\uDA3F\uDA7F\uDABF\uDAFF\uDB3F\uDB7F\uDBBF\uDBFF][\uDFFE\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/;
      var regexDecode = /&(CounterClockwiseContourIntegral|DoubleLongLeftRightArrow|ClockwiseContourIntegral|NotNestedGreaterGreater|NotSquareSupersetEqual|DiacriticalDoubleAcute|NotRightTriangleEqual|NotSucceedsSlantEqual|NotPrecedesSlantEqual|CloseCurlyDoubleQuote|NegativeVeryThinSpace|DoubleContourIntegral|FilledVerySmallSquare|CapitalDifferentialD|OpenCurlyDoubleQuote|EmptyVerySmallSquare|NestedGreaterGreater|DoubleLongRightArrow|NotLeftTriangleEqual|NotGreaterSlantEqual|ReverseUpEquilibrium|DoubleLeftRightArrow|NotSquareSubsetEqual|NotDoubleVerticalBar|RightArrowLeftArrow|NotGreaterFullEqual|NotRightTriangleBar|SquareSupersetEqual|DownLeftRightVector|DoubleLongLeftArrow|leftrightsquigarrow|LeftArrowRightArrow|NegativeMediumSpace|blacktriangleright|RightDownVectorBar|PrecedesSlantEqual|RightDoubleBracket|SucceedsSlantEqual|NotLeftTriangleBar|RightTriangleEqual|SquareIntersection|RightDownTeeVector|ReverseEquilibrium|NegativeThickSpace|longleftrightarrow|Longleftrightarrow|LongLeftRightArrow|DownRightTeeVector|DownRightVectorBar|GreaterSlantEqual|SquareSubsetEqual|LeftDownVectorBar|LeftDoubleBracket|VerticalSeparator|rightleftharpoons|NotGreaterGreater|NotSquareSuperset|blacktriangleleft|blacktriangledown|NegativeThinSpace|LeftDownTeeVector|NotLessSlantEqual|leftrightharpoons|DoubleUpDownArrow|DoubleVerticalBar|LeftTriangleEqual|FilledSmallSquare|twoheadrightarrow|NotNestedLessLess|DownLeftTeeVector|DownLeftVectorBar|RightAngleBracket|NotTildeFullEqual|NotReverseElement|RightUpDownVector|DiacriticalTilde|NotSucceedsTilde|circlearrowright|NotPrecedesEqual|rightharpoondown|DoubleRightArrow|NotSucceedsEqual|NonBreakingSpace|NotRightTriangle|LessEqualGreater|RightUpTeeVector|LeftAngleBracket|GreaterFullEqual|DownArrowUpArrow|RightUpVectorBar|twoheadleftarrow|GreaterEqualLess|downharpoonright|RightTriangleBar|ntrianglerighteq|NotSupersetEqual|LeftUpDownVector|DiacriticalAcute|rightrightarrows|vartriangleright|UpArrowDownArrow|DiacriticalGrave|UnderParenthesis|EmptySmallSquare|LeftUpVectorBar|leftrightarrows|DownRightVector|downharpoonleft|trianglerighteq|ShortRightArrow|OverParenthesis|DoubleLeftArrow|DoubleDownArrow|NotSquareSubset|bigtriangledown|ntrianglelefteq|UpperRightArrow|curvearrowright|vartriangleleft|NotLeftTriangle|nleftrightarrow|LowerRightArrow|NotHumpDownHump|NotGreaterTilde|rightthreetimes|LeftUpTeeVector|NotGreaterEqual|straightepsilon|LeftTriangleBar|rightsquigarrow|ContourIntegral|rightleftarrows|CloseCurlyQuote|RightDownVector|LeftRightVector|nLeftrightarrow|leftharpoondown|circlearrowleft|SquareSuperset|OpenCurlyQuote|hookrightarrow|HorizontalLine|DiacriticalDot|NotLessGreater|ntriangleright|DoubleRightTee|InvisibleComma|InvisibleTimes|LowerLeftArrow|DownLeftVector|NotSubsetEqual|curvearrowleft|trianglelefteq|NotVerticalBar|TildeFullEqual|downdownarrows|NotGreaterLess|RightTeeVector|ZeroWidthSpace|looparrowright|LongRightArrow|doublebarwedge|ShortLeftArrow|ShortDownArrow|RightVectorBar|GreaterGreater|ReverseElement|rightharpoonup|LessSlantEqual|leftthreetimes|upharpoonright|rightarrowtail|LeftDownVector|Longrightarrow|NestedLessLess|UpperLeftArrow|nshortparallel|leftleftarrows|leftrightarrow|Leftrightarrow|LeftRightArrow|longrightarrow|upharpoonleft|RightArrowBar|ApplyFunction|LeftTeeVector|leftarrowtail|NotEqualTilde|varsubsetneqq|varsupsetneqq|RightTeeArrow|SucceedsEqual|SucceedsTilde|LeftVectorBar|SupersetEqual|hookleftarrow|DifferentialD|VerticalTilde|VeryThinSpace|blacktriangle|bigtriangleup|LessFullEqual|divideontimes|leftharpoonup|UpEquilibrium|ntriangleleft|RightTriangle|measuredangle|shortparallel|longleftarrow|Longleftarrow|LongLeftArrow|DoubleLeftTee|Poincareplane|PrecedesEqual|triangleright|DoubleUpArrow|RightUpVector|fallingdotseq|looparrowleft|PrecedesTilde|NotTildeEqual|NotTildeTilde|smallsetminus|Proportional|triangleleft|triangledown|UnderBracket|NotHumpEqual|exponentiale|ExponentialE|NotLessTilde|HilbertSpace|RightCeiling|blacklozenge|varsupsetneq|HumpDownHump|GreaterEqual|VerticalLine|LeftTeeArrow|NotLessEqual|DownTeeArrow|LeftTriangle|varsubsetneq|Intersection|NotCongruent|DownArrowBar|LeftUpVector|LeftArrowBar|risingdotseq|GreaterTilde|RoundImplies|SquareSubset|ShortUpArrow|NotSuperset|quaternions|precnapprox|backepsilon|preccurlyeq|OverBracket|blacksquare|MediumSpace|VerticalBar|circledcirc|circleddash|CircleMinus|CircleTimes|LessGreater|curlyeqprec|curlyeqsucc|diamondsuit|UpDownArrow|Updownarrow|RuleDelayed|Rrightarrow|updownarrow|RightVector|nRightarrow|nrightarrow|eqslantless|LeftCeiling|Equilibrium|SmallCircle|expectation|NotSucceeds|thickapprox|GreaterLess|SquareUnion|NotPrecedes|NotLessLess|straightphi|succnapprox|succcurlyeq|SubsetEqual|sqsupseteq|Proportion|Laplacetrf|ImaginaryI|supsetneqq|NotGreater|gtreqqless|NotElement|ThickSpace|TildeEqual|TildeTilde|Fouriertrf|rmoustache|EqualTilde|eqslantgtr|UnderBrace|LeftVector|UpArrowBar|nLeftarrow|nsubseteqq|subsetneqq|nsupseteqq|nleftarrow|succapprox|lessapprox|UpTeeArrow|upuparrows|curlywedge|lesseqqgtr|varepsilon|varnothing|RightFloor|complement|CirclePlus|sqsubseteq|Lleftarrow|circledast|RightArrow|Rightarrow|rightarrow|lmoustache|Bernoullis|precapprox|mapstoleft|mapstodown|longmapsto|dotsquare|downarrow|DoubleDot|nsubseteq|supsetneq|leftarrow|nsupseteq|subsetneq|ThinSpace|ngeqslant|subseteqq|HumpEqual|NotSubset|triangleq|NotCupCap|lesseqgtr|heartsuit|TripleDot|Leftarrow|Coproduct|Congruent|varpropto|complexes|gvertneqq|LeftArrow|LessTilde|supseteqq|MinusPlus|CircleDot|nleqslant|NotExists|gtreqless|nparallel|UnionPlus|LeftFloor|checkmark|CenterDot|centerdot|Mellintrf|gtrapprox|bigotimes|OverBrace|spadesuit|therefore|pitchfork|rationals|PlusMinus|Backslash|Therefore|DownBreve|backsimeq|backprime|DownArrow|nshortmid|Downarrow|lvertneqq|eqvparsl|imagline|imagpart|infintie|integers|Integral|intercal|LessLess|Uarrocir|intlarhk|sqsupset|angmsdaf|sqsubset|llcorner|vartheta|cupbrcap|lnapprox|Superset|SuchThat|succnsim|succneqq|angmsdag|biguplus|curlyvee|trpezium|Succeeds|NotTilde|bigwedge|angmsdah|angrtvbd|triminus|cwconint|fpartint|lrcorner|smeparsl|subseteq|urcorner|lurdshar|laemptyv|DDotrahd|approxeq|ldrushar|awconint|mapstoup|backcong|shortmid|triangle|geqslant|gesdotol|timesbar|circledR|circledS|setminus|multimap|naturals|scpolint|ncongdot|RightTee|boxminus|gnapprox|boxtimes|andslope|thicksim|angmsdaa|varsigma|cirfnint|rtriltri|angmsdab|rppolint|angmsdac|barwedge|drbkarow|clubsuit|thetasym|bsolhsub|capbrcup|dzigrarr|doteqdot|DotEqual|dotminus|UnderBar|NotEqual|realpart|otimesas|ulcorner|hksearow|hkswarow|parallel|PartialD|elinters|emptyset|plusacir|bbrktbrk|angmsdad|pointint|bigoplus|angmsdae|Precedes|bigsqcup|varkappa|notindot|supseteq|precneqq|precnsim|profalar|profline|profsurf|leqslant|lesdotor|raemptyv|subplus|notnivb|notnivc|subrarr|zigrarr|vzigzag|submult|subedot|Element|between|cirscir|larrbfs|larrsim|lotimes|lbrksld|lbrkslu|lozenge|ldrdhar|dbkarow|bigcirc|epsilon|simrarr|simplus|ltquest|Epsilon|luruhar|gtquest|maltese|npolint|eqcolon|npreceq|bigodot|ddagger|gtrless|bnequiv|harrcir|ddotseq|equivDD|backsim|demptyv|nsqsube|nsqsupe|Upsilon|nsubset|upsilon|minusdu|nsucceq|swarrow|nsupset|coloneq|searrow|boxplus|napprox|natural|asympeq|alefsym|congdot|nearrow|bigstar|diamond|supplus|tritime|LeftTee|nvinfin|triplus|NewLine|nvltrie|nvrtrie|nwarrow|nexists|Diamond|ruluhar|Implies|supmult|angzarr|suplarr|suphsub|questeq|because|digamma|Because|olcross|bemptyv|omicron|Omicron|rotimes|NoBreak|intprod|angrtvb|orderof|uwangle|suphsol|lesdoto|orslope|DownTee|realine|cudarrl|rdldhar|OverBar|supedot|lessdot|supdsub|topfork|succsim|rbrkslu|rbrksld|pertenk|cudarrr|isindot|planckh|lessgtr|pluscir|gesdoto|plussim|plustwo|lesssim|cularrp|rarrsim|Cayleys|notinva|notinvb|notinvc|UpArrow|Uparrow|uparrow|NotLess|dwangle|precsim|Product|curarrm|Cconint|dotplus|rarrbfs|ccupssm|Cedilla|cemptyv|notniva|quatint|frac35|frac38|frac45|frac56|frac58|frac78|tridot|xoplus|gacute|gammad|Gammad|lfisht|lfloor|bigcup|sqsupe|gbreve|Gbreve|lharul|sqsube|sqcups|Gcedil|apacir|llhard|lmidot|Lmidot|lmoust|andand|sqcaps|approx|Abreve|spades|circeq|tprime|divide|topcir|Assign|topbot|gesdot|divonx|xuplus|timesd|gesles|atilde|solbar|SOFTcy|loplus|timesb|lowast|lowbar|dlcorn|dlcrop|softcy|dollar|lparlt|thksim|lrhard|Atilde|lsaquo|smashp|bigvee|thinsp|wreath|bkarow|lsquor|lstrok|Lstrok|lthree|ltimes|ltlarr|DotDot|simdot|ltrPar|weierp|xsqcup|angmsd|sigmav|sigmaf|zeetrf|Zcaron|zcaron|mapsto|vsupne|thetav|cirmid|marker|mcomma|Zacute|vsubnE|there4|gtlPar|vsubne|bottom|gtrarr|SHCHcy|shchcy|midast|midcir|middot|minusb|minusd|gtrdot|bowtie|sfrown|mnplus|models|colone|seswar|Colone|mstpos|searhk|gtrsim|nacute|Nacute|boxbox|telrec|hairsp|Tcedil|nbumpe|scnsim|ncaron|Ncaron|ncedil|Ncedil|hamilt|Scedil|nearhk|hardcy|HARDcy|tcedil|Tcaron|commat|nequiv|nesear|tcaron|target|hearts|nexist|varrho|scedil|Scaron|scaron|hellip|Sacute|sacute|hercon|swnwar|compfn|rtimes|rthree|rsquor|rsaquo|zacute|wedgeq|homtht|barvee|barwed|Barwed|rpargt|horbar|conint|swarhk|roplus|nltrie|hslash|hstrok|Hstrok|rmoust|Conint|bprime|hybull|hyphen|iacute|Iacute|supsup|supsub|supsim|varphi|coprod|brvbar|agrave|Supset|supset|igrave|Igrave|notinE|Agrave|iiiint|iinfin|copysr|wedbar|Verbar|vangrt|becaus|incare|verbar|inodot|bullet|drcorn|intcal|drcrop|cularr|vellip|Utilde|bumpeq|cupcap|dstrok|Dstrok|CupCap|cupcup|cupdot|eacute|Eacute|supdot|iquest|easter|ecaron|Ecaron|ecolon|isinsv|utilde|itilde|Itilde|curarr|succeq|Bumpeq|cacute|ulcrop|nparsl|Cacute|nprcue|egrave|Egrave|nrarrc|nrarrw|subsup|subsub|nrtrie|jsercy|nsccue|Jsercy|kappav|kcedil|Kcedil|subsim|ulcorn|nsimeq|egsdot|veebar|kgreen|capand|elsdot|Subset|subset|curren|aacute|lacute|Lacute|emptyv|ntilde|Ntilde|lagran|lambda|Lambda|capcap|Ugrave|langle|subdot|emsp13|numero|emsp14|nvdash|nvDash|nVdash|nVDash|ugrave|ufisht|nvHarr|larrfs|nvlArr|larrhk|larrlp|larrpl|nvrArr|Udblac|nwarhk|larrtl|nwnear|oacute|Oacute|latail|lAtail|sstarf|lbrace|odblac|Odblac|lbrack|udblac|odsold|eparsl|lcaron|Lcaron|ograve|Ograve|lcedil|Lcedil|Aacute|ssmile|ssetmn|squarf|ldquor|capcup|ominus|cylcty|rharul|eqcirc|dagger|rfloor|rfisht|Dagger|daleth|equals|origof|capdot|equest|dcaron|Dcaron|rdquor|oslash|Oslash|otilde|Otilde|otimes|Otimes|urcrop|Ubreve|ubreve|Yacute|Uacute|uacute|Rcedil|rcedil|urcorn|parsim|Rcaron|Vdashl|rcaron|Tstrok|percnt|period|permil|Exists|yacute|rbrack|rbrace|phmmat|ccaron|Ccaron|planck|ccedil|plankv|tstrok|female|plusdo|plusdu|ffilig|plusmn|ffllig|Ccedil|rAtail|dfisht|bernou|ratail|Rarrtl|rarrtl|angsph|rarrpl|rarrlp|rarrhk|xwedge|xotime|forall|ForAll|Vvdash|vsupnE|preceq|bigcap|frac12|frac13|frac14|primes|rarrfs|prnsim|frac15|Square|frac16|square|lesdot|frac18|frac23|propto|prurel|rarrap|rangle|puncsp|frac25|Racute|qprime|racute|lesges|frac34|abreve|AElig|eqsim|utdot|setmn|urtri|Equal|Uring|seArr|uring|searr|dashv|Dashv|mumap|nabla|iogon|Iogon|sdote|sdotb|scsim|napid|napos|equiv|natur|Acirc|dblac|erarr|nbump|iprod|erDot|ucirc|awint|esdot|angrt|ncong|isinE|scnap|Scirc|scirc|ndash|isins|Ubrcy|nearr|neArr|isinv|nedot|ubrcy|acute|Ycirc|iukcy|Iukcy|xutri|nesim|caret|jcirc|Jcirc|caron|twixt|ddarr|sccue|exist|jmath|sbquo|ngeqq|angst|ccaps|lceil|ngsim|UpTee|delta|Delta|rtrif|nharr|nhArr|nhpar|rtrie|jukcy|Jukcy|kappa|rsquo|Kappa|nlarr|nlArr|TSHcy|rrarr|aogon|Aogon|fflig|xrarr|tshcy|ccirc|nleqq|filig|upsih|nless|dharl|nlsim|fjlig|ropar|nltri|dharr|robrk|roarr|fllig|fltns|roang|rnmid|subnE|subne|lAarr|trisb|Ccirc|acirc|ccups|blank|VDash|forkv|Vdash|langd|cedil|blk12|blk14|laquo|strns|diams|notin|vDash|larrb|blk34|block|disin|uplus|vdash|vBarv|aelig|starf|Wedge|check|xrArr|lates|lbarr|lBarr|notni|lbbrk|bcong|frasl|lbrke|frown|vrtri|vprop|vnsup|gamma|Gamma|wedge|xodot|bdquo|srarr|doteq|ldquo|boxdl|boxdL|gcirc|Gcirc|boxDl|boxDL|boxdr|boxdR|boxDr|TRADE|trade|rlhar|boxDR|vnsub|npart|vltri|rlarr|boxhd|boxhD|nprec|gescc|nrarr|nrArr|boxHd|boxHD|boxhu|boxhU|nrtri|boxHu|clubs|boxHU|times|colon|Colon|gimel|xlArr|Tilde|nsime|tilde|nsmid|nspar|THORN|thorn|xlarr|nsube|nsubE|thkap|xhArr|comma|nsucc|boxul|boxuL|nsupe|nsupE|gneqq|gnsim|boxUl|boxUL|grave|boxur|boxuR|boxUr|boxUR|lescc|angle|bepsi|boxvh|varpi|boxvH|numsp|Theta|gsime|gsiml|theta|boxVh|boxVH|boxvl|gtcir|gtdot|boxvL|boxVl|boxVL|crarr|cross|Cross|nvsim|boxvr|nwarr|nwArr|sqsup|dtdot|Uogon|lhard|lharu|dtrif|ocirc|Ocirc|lhblk|duarr|odash|sqsub|Hacek|sqcup|llarr|duhar|oelig|OElig|ofcir|boxvR|uogon|lltri|boxVr|csube|uuarr|ohbar|csupe|ctdot|olarr|olcir|harrw|oline|sqcap|omacr|Omacr|omega|Omega|boxVR|aleph|lneqq|lnsim|loang|loarr|rharu|lobrk|hcirc|operp|oplus|rhard|Hcirc|orarr|Union|order|ecirc|Ecirc|cuepr|szlig|cuesc|breve|reals|eDDot|Breve|hoarr|lopar|utrif|rdquo|Umacr|umacr|efDot|swArr|ultri|alpha|rceil|ovbar|swarr|Wcirc|wcirc|smtes|smile|bsemi|lrarr|aring|parsl|lrhar|bsime|uhblk|lrtri|cupor|Aring|uharr|uharl|slarr|rbrke|bsolb|lsime|rbbrk|RBarr|lsimg|phone|rBarr|rbarr|icirc|lsquo|Icirc|emacr|Emacr|ratio|simne|plusb|simlE|simgE|simeq|pluse|ltcir|ltdot|empty|xharr|xdtri|iexcl|Alpha|ltrie|rarrw|pound|ltrif|xcirc|bumpe|prcue|bumpE|asymp|amacr|cuvee|Sigma|sigma|iiint|udhar|iiota|ijlig|IJlig|supnE|imacr|Imacr|prime|Prime|image|prnap|eogon|Eogon|rarrc|mdash|mDDot|cuwed|imath|supne|imped|Amacr|udarr|prsim|micro|rarrb|cwint|raquo|infin|eplus|range|rangd|Ucirc|radic|minus|amalg|veeeq|rAarr|epsiv|ycirc|quest|sharp|quot|zwnj|Qscr|race|qscr|Qopf|qopf|qint|rang|Rang|Zscr|zscr|Zopf|zopf|rarr|rArr|Rarr|Pscr|pscr|prop|prod|prnE|prec|ZHcy|zhcy|prap|Zeta|zeta|Popf|popf|Zdot|plus|zdot|Yuml|yuml|phiv|YUcy|yucy|Yscr|yscr|perp|Yopf|yopf|part|para|YIcy|Ouml|rcub|yicy|YAcy|rdca|ouml|osol|Oscr|rdsh|yacy|real|oscr|xvee|andd|rect|andv|Xscr|oror|ordm|ordf|xscr|ange|aopf|Aopf|rHar|Xopf|opar|Oopf|xopf|xnis|rhov|oopf|omid|xmap|oint|apid|apos|ogon|ascr|Ascr|odot|odiv|xcup|xcap|ocir|oast|nvlt|nvle|nvgt|nvge|nvap|Wscr|wscr|auml|ntlg|ntgl|nsup|nsub|nsim|Nscr|nscr|nsce|Wopf|ring|npre|wopf|npar|Auml|Barv|bbrk|Nopf|nopf|nmid|nLtv|beta|ropf|Ropf|Beta|beth|nles|rpar|nleq|bnot|bNot|nldr|NJcy|rscr|Rscr|Vscr|vscr|rsqb|njcy|bopf|nisd|Bopf|rtri|Vopf|nGtv|ngtr|vopf|boxh|boxH|boxv|nges|ngeq|boxV|bscr|scap|Bscr|bsim|Vert|vert|bsol|bull|bump|caps|cdot|ncup|scnE|ncap|nbsp|napE|Cdot|cent|sdot|Vbar|nang|vBar|chcy|Mscr|mscr|sect|semi|CHcy|Mopf|mopf|sext|circ|cire|mldr|mlcp|cirE|comp|shcy|SHcy|vArr|varr|cong|copf|Copf|copy|COPY|malt|male|macr|lvnE|cscr|ltri|sime|ltcc|simg|Cscr|siml|csub|Uuml|lsqb|lsim|uuml|csup|Lscr|lscr|utri|smid|lpar|cups|smte|lozf|darr|Lopf|Uscr|solb|lopf|sopf|Sopf|lneq|uscr|spar|dArr|lnap|Darr|dash|Sqrt|LJcy|ljcy|lHar|dHar|Upsi|upsi|diam|lesg|djcy|DJcy|leqq|dopf|Dopf|dscr|Dscr|dscy|ldsh|ldca|squf|DScy|sscr|Sscr|dsol|lcub|late|star|Star|Uopf|Larr|lArr|larr|uopf|dtri|dzcy|sube|subE|Lang|lang|Kscr|kscr|Kopf|kopf|KJcy|kjcy|KHcy|khcy|DZcy|ecir|edot|eDot|Jscr|jscr|succ|Jopf|jopf|Edot|uHar|emsp|ensp|Iuml|iuml|eopf|isin|Iscr|iscr|Eopf|epar|sung|epsi|escr|sup1|sup2|sup3|Iota|iota|supe|supE|Iopf|iopf|IOcy|iocy|Escr|esim|Esim|imof|Uarr|QUOT|uArr|uarr|euml|IEcy|iecy|Idot|Euml|euro|excl|Hscr|hscr|Hopf|hopf|TScy|tscy|Tscr|hbar|tscr|flat|tbrk|fnof|hArr|harr|half|fopf|Fopf|tdot|gvnE|fork|trie|gtcc|fscr|Fscr|gdot|gsim|Gscr|gscr|Gopf|gopf|gneq|Gdot|tosa|gnap|Topf|topf|geqq|toea|GJcy|gjcy|tint|gesl|mid|Sfr|ggg|top|ges|gla|glE|glj|geq|gne|gEl|gel|gnE|Gcy|gcy|gap|Tfr|tfr|Tcy|tcy|Hat|Tau|Ffr|tau|Tab|hfr|Hfr|ffr|Fcy|fcy|icy|Icy|iff|ETH|eth|ifr|Ifr|Eta|eta|int|Int|Sup|sup|ucy|Ucy|Sum|sum|jcy|ENG|ufr|Ufr|eng|Jcy|jfr|els|ell|egs|Efr|efr|Jfr|uml|kcy|Kcy|Ecy|ecy|kfr|Kfr|lap|Sub|sub|lat|lcy|Lcy|leg|Dot|dot|lEg|leq|les|squ|div|die|lfr|Lfr|lgE|Dfr|dfr|Del|deg|Dcy|dcy|lne|lnE|sol|loz|smt|Cup|lrm|cup|lsh|Lsh|sim|shy|map|Map|mcy|Mcy|mfr|Mfr|mho|gfr|Gfr|sfr|cir|Chi|chi|nap|Cfr|vcy|Vcy|cfr|Scy|scy|ncy|Ncy|vee|Vee|Cap|cap|nfr|scE|sce|Nfr|nge|ngE|nGg|vfr|Vfr|ngt|bot|nGt|nis|niv|Rsh|rsh|nle|nlE|bne|Bfr|bfr|nLl|nlt|nLt|Bcy|bcy|not|Not|rlm|wfr|Wfr|npr|nsc|num|ocy|ast|Ocy|ofr|xfr|Xfr|Ofr|ogt|ohm|apE|olt|Rho|ape|rho|Rfr|rfr|ord|REG|ang|reg|orv|And|and|AMP|Rcy|amp|Afr|ycy|Ycy|yen|yfr|Yfr|rcy|par|pcy|Pcy|pfr|Pfr|phi|Phi|afr|Acy|acy|zcy|Zcy|piv|acE|acd|zfr|Zfr|pre|prE|psi|Psi|qfr|Qfr|zwj|Or|ge|Gg|gt|gg|el|oS|lt|Lt|LT|Re|lg|gl|eg|ne|Im|it|le|DD|wp|wr|nu|Nu|dd|lE|Sc|sc|pi|Pi|ee|af|ll|Ll|rx|gE|xi|pm|Xi|ic|pr|Pr|in|ni|mp|mu|ac|Mu|or|ap|Gt|GT|ii);|&(Aacute|Agrave|Atilde|Ccedil|Eacute|Egrave|Iacute|Igrave|Ntilde|Oacute|Ograve|Oslash|Otilde|Uacute|Ugrave|Yacute|aacute|agrave|atilde|brvbar|ccedil|curren|divide|eacute|egrave|frac12|frac14|frac34|iacute|igrave|iquest|middot|ntilde|oacute|ograve|oslash|otilde|plusmn|uacute|ugrave|yacute|AElig|Acirc|Aring|Ecirc|Icirc|Ocirc|THORN|Ucirc|acirc|acute|aelig|aring|cedil|ecirc|icirc|iexcl|laquo|micro|ocirc|pound|raquo|szlig|thorn|times|ucirc|Auml|COPY|Euml|Iuml|Ouml|QUOT|Uuml|auml|cent|copy|euml|iuml|macr|nbsp|ordf|ordm|ouml|para|quot|sect|sup1|sup2|sup3|uuml|yuml|AMP|ETH|REG|amp|deg|eth|not|reg|shy|uml|yen|GT|LT|gt|lt)(?!;)([=a-zA-Z0-9]?)|&#([0-9]+)(;?)|&#[xX]([a-fA-F0-9]+)(;?)|&([0-9a-zA-Z]+)/g;
      var decodeMap = { "aacute": "\xE1", "Aacute": "\xC1", "abreve": "\u0103", "Abreve": "\u0102", "ac": "\u223E", "acd": "\u223F", "acE": "\u223E\u0333", "acirc": "\xE2", "Acirc": "\xC2", "acute": "\xB4", "acy": "\u0430", "Acy": "\u0410", "aelig": "\xE6", "AElig": "\xC6", "af": "\u2061", "afr": "\u{1D51E}", "Afr": "\u{1D504}", "agrave": "\xE0", "Agrave": "\xC0", "alefsym": "\u2135", "aleph": "\u2135", "alpha": "\u03B1", "Alpha": "\u0391", "amacr": "\u0101", "Amacr": "\u0100", "amalg": "\u2A3F", "amp": "&", "AMP": "&", "and": "\u2227", "And": "\u2A53", "andand": "\u2A55", "andd": "\u2A5C", "andslope": "\u2A58", "andv": "\u2A5A", "ang": "\u2220", "ange": "\u29A4", "angle": "\u2220", "angmsd": "\u2221", "angmsdaa": "\u29A8", "angmsdab": "\u29A9", "angmsdac": "\u29AA", "angmsdad": "\u29AB", "angmsdae": "\u29AC", "angmsdaf": "\u29AD", "angmsdag": "\u29AE", "angmsdah": "\u29AF", "angrt": "\u221F", "angrtvb": "\u22BE", "angrtvbd": "\u299D", "angsph": "\u2222", "angst": "\xC5", "angzarr": "\u237C", "aogon": "\u0105", "Aogon": "\u0104", "aopf": "\u{1D552}", "Aopf": "\u{1D538}", "ap": "\u2248", "apacir": "\u2A6F", "ape": "\u224A", "apE": "\u2A70", "apid": "\u224B", "apos": "'", "ApplyFunction": "\u2061", "approx": "\u2248", "approxeq": "\u224A", "aring": "\xE5", "Aring": "\xC5", "ascr": "\u{1D4B6}", "Ascr": "\u{1D49C}", "Assign": "\u2254", "ast": "*", "asymp": "\u2248", "asympeq": "\u224D", "atilde": "\xE3", "Atilde": "\xC3", "auml": "\xE4", "Auml": "\xC4", "awconint": "\u2233", "awint": "\u2A11", "backcong": "\u224C", "backepsilon": "\u03F6", "backprime": "\u2035", "backsim": "\u223D", "backsimeq": "\u22CD", "Backslash": "\u2216", "Barv": "\u2AE7", "barvee": "\u22BD", "barwed": "\u2305", "Barwed": "\u2306", "barwedge": "\u2305", "bbrk": "\u23B5", "bbrktbrk": "\u23B6", "bcong": "\u224C", "bcy": "\u0431", "Bcy": "\u0411", "bdquo": "\u201E", "becaus": "\u2235", "because": "\u2235", "Because": "\u2235", "bemptyv": "\u29B0", "bepsi": "\u03F6", "bernou": "\u212C", "Bernoullis": "\u212C", "beta": "\u03B2", "Beta": "\u0392", "beth": "\u2136", "between": "\u226C", "bfr": "\u{1D51F}", "Bfr": "\u{1D505}", "bigcap": "\u22C2", "bigcirc": "\u25EF", "bigcup": "\u22C3", "bigodot": "\u2A00", "bigoplus": "\u2A01", "bigotimes": "\u2A02", "bigsqcup": "\u2A06", "bigstar": "\u2605", "bigtriangledown": "\u25BD", "bigtriangleup": "\u25B3", "biguplus": "\u2A04", "bigvee": "\u22C1", "bigwedge": "\u22C0", "bkarow": "\u290D", "blacklozenge": "\u29EB", "blacksquare": "\u25AA", "blacktriangle": "\u25B4", "blacktriangledown": "\u25BE", "blacktriangleleft": "\u25C2", "blacktriangleright": "\u25B8", "blank": "\u2423", "blk12": "\u2592", "blk14": "\u2591", "blk34": "\u2593", "block": "\u2588", "bne": "=\u20E5", "bnequiv": "\u2261\u20E5", "bnot": "\u2310", "bNot": "\u2AED", "bopf": "\u{1D553}", "Bopf": "\u{1D539}", "bot": "\u22A5", "bottom": "\u22A5", "bowtie": "\u22C8", "boxbox": "\u29C9", "boxdl": "\u2510", "boxdL": "\u2555", "boxDl": "\u2556", "boxDL": "\u2557", "boxdr": "\u250C", "boxdR": "\u2552", "boxDr": "\u2553", "boxDR": "\u2554", "boxh": "\u2500", "boxH": "\u2550", "boxhd": "\u252C", "boxhD": "\u2565", "boxHd": "\u2564", "boxHD": "\u2566", "boxhu": "\u2534", "boxhU": "\u2568", "boxHu": "\u2567", "boxHU": "\u2569", "boxminus": "\u229F", "boxplus": "\u229E", "boxtimes": "\u22A0", "boxul": "\u2518", "boxuL": "\u255B", "boxUl": "\u255C", "boxUL": "\u255D", "boxur": "\u2514", "boxuR": "\u2558", "boxUr": "\u2559", "boxUR": "\u255A", "boxv": "\u2502", "boxV": "\u2551", "boxvh": "\u253C", "boxvH": "\u256A", "boxVh": "\u256B", "boxVH": "\u256C", "boxvl": "\u2524", "boxvL": "\u2561", "boxVl": "\u2562", "boxVL": "\u2563", "boxvr": "\u251C", "boxvR": "\u255E", "boxVr": "\u255F", "boxVR": "\u2560", "bprime": "\u2035", "breve": "\u02D8", "Breve": "\u02D8", "brvbar": "\xA6", "bscr": "\u{1D4B7}", "Bscr": "\u212C", "bsemi": "\u204F", "bsim": "\u223D", "bsime": "\u22CD", "bsol": "\\", "bsolb": "\u29C5", "bsolhsub": "\u27C8", "bull": "\u2022", "bullet": "\u2022", "bump": "\u224E", "bumpe": "\u224F", "bumpE": "\u2AAE", "bumpeq": "\u224F", "Bumpeq": "\u224E", "cacute": "\u0107", "Cacute": "\u0106", "cap": "\u2229", "Cap": "\u22D2", "capand": "\u2A44", "capbrcup": "\u2A49", "capcap": "\u2A4B", "capcup": "\u2A47", "capdot": "\u2A40", "CapitalDifferentialD": "\u2145", "caps": "\u2229\uFE00", "caret": "\u2041", "caron": "\u02C7", "Cayleys": "\u212D", "ccaps": "\u2A4D", "ccaron": "\u010D", "Ccaron": "\u010C", "ccedil": "\xE7", "Ccedil": "\xC7", "ccirc": "\u0109", "Ccirc": "\u0108", "Cconint": "\u2230", "ccups": "\u2A4C", "ccupssm": "\u2A50", "cdot": "\u010B", "Cdot": "\u010A", "cedil": "\xB8", "Cedilla": "\xB8", "cemptyv": "\u29B2", "cent": "\xA2", "centerdot": "\xB7", "CenterDot": "\xB7", "cfr": "\u{1D520}", "Cfr": "\u212D", "chcy": "\u0447", "CHcy": "\u0427", "check": "\u2713", "checkmark": "\u2713", "chi": "\u03C7", "Chi": "\u03A7", "cir": "\u25CB", "circ": "\u02C6", "circeq": "\u2257", "circlearrowleft": "\u21BA", "circlearrowright": "\u21BB", "circledast": "\u229B", "circledcirc": "\u229A", "circleddash": "\u229D", "CircleDot": "\u2299", "circledR": "\xAE", "circledS": "\u24C8", "CircleMinus": "\u2296", "CirclePlus": "\u2295", "CircleTimes": "\u2297", "cire": "\u2257", "cirE": "\u29C3", "cirfnint": "\u2A10", "cirmid": "\u2AEF", "cirscir": "\u29C2", "ClockwiseContourIntegral": "\u2232", "CloseCurlyDoubleQuote": "\u201D", "CloseCurlyQuote": "\u2019", "clubs": "\u2663", "clubsuit": "\u2663", "colon": ":", "Colon": "\u2237", "colone": "\u2254", "Colone": "\u2A74", "coloneq": "\u2254", "comma": ",", "commat": "@", "comp": "\u2201", "compfn": "\u2218", "complement": "\u2201", "complexes": "\u2102", "cong": "\u2245", "congdot": "\u2A6D", "Congruent": "\u2261", "conint": "\u222E", "Conint": "\u222F", "ContourIntegral": "\u222E", "copf": "\u{1D554}", "Copf": "\u2102", "coprod": "\u2210", "Coproduct": "\u2210", "copy": "\xA9", "COPY": "\xA9", "copysr": "\u2117", "CounterClockwiseContourIntegral": "\u2233", "crarr": "\u21B5", "cross": "\u2717", "Cross": "\u2A2F", "cscr": "\u{1D4B8}", "Cscr": "\u{1D49E}", "csub": "\u2ACF", "csube": "\u2AD1", "csup": "\u2AD0", "csupe": "\u2AD2", "ctdot": "\u22EF", "cudarrl": "\u2938", "cudarrr": "\u2935", "cuepr": "\u22DE", "cuesc": "\u22DF", "cularr": "\u21B6", "cularrp": "\u293D", "cup": "\u222A", "Cup": "\u22D3", "cupbrcap": "\u2A48", "cupcap": "\u2A46", "CupCap": "\u224D", "cupcup": "\u2A4A", "cupdot": "\u228D", "cupor": "\u2A45", "cups": "\u222A\uFE00", "curarr": "\u21B7", "curarrm": "\u293C", "curlyeqprec": "\u22DE", "curlyeqsucc": "\u22DF", "curlyvee": "\u22CE", "curlywedge": "\u22CF", "curren": "\xA4", "curvearrowleft": "\u21B6", "curvearrowright": "\u21B7", "cuvee": "\u22CE", "cuwed": "\u22CF", "cwconint": "\u2232", "cwint": "\u2231", "cylcty": "\u232D", "dagger": "\u2020", "Dagger": "\u2021", "daleth": "\u2138", "darr": "\u2193", "dArr": "\u21D3", "Darr": "\u21A1", "dash": "\u2010", "dashv": "\u22A3", "Dashv": "\u2AE4", "dbkarow": "\u290F", "dblac": "\u02DD", "dcaron": "\u010F", "Dcaron": "\u010E", "dcy": "\u0434", "Dcy": "\u0414", "dd": "\u2146", "DD": "\u2145", "ddagger": "\u2021", "ddarr": "\u21CA", "DDotrahd": "\u2911", "ddotseq": "\u2A77", "deg": "\xB0", "Del": "\u2207", "delta": "\u03B4", "Delta": "\u0394", "demptyv": "\u29B1", "dfisht": "\u297F", "dfr": "\u{1D521}", "Dfr": "\u{1D507}", "dHar": "\u2965", "dharl": "\u21C3", "dharr": "\u21C2", "DiacriticalAcute": "\xB4", "DiacriticalDot": "\u02D9", "DiacriticalDoubleAcute": "\u02DD", "DiacriticalGrave": "`", "DiacriticalTilde": "\u02DC", "diam": "\u22C4", "diamond": "\u22C4", "Diamond": "\u22C4", "diamondsuit": "\u2666", "diams": "\u2666", "die": "\xA8", "DifferentialD": "\u2146", "digamma": "\u03DD", "disin": "\u22F2", "div": "\xF7", "divide": "\xF7", "divideontimes": "\u22C7", "divonx": "\u22C7", "djcy": "\u0452", "DJcy": "\u0402", "dlcorn": "\u231E", "dlcrop": "\u230D", "dollar": "$", "dopf": "\u{1D555}", "Dopf": "\u{1D53B}", "dot": "\u02D9", "Dot": "\xA8", "DotDot": "\u20DC", "doteq": "\u2250", "doteqdot": "\u2251", "DotEqual": "\u2250", "dotminus": "\u2238", "dotplus": "\u2214", "dotsquare": "\u22A1", "doublebarwedge": "\u2306", "DoubleContourIntegral": "\u222F", "DoubleDot": "\xA8", "DoubleDownArrow": "\u21D3", "DoubleLeftArrow": "\u21D0", "DoubleLeftRightArrow": "\u21D4", "DoubleLeftTee": "\u2AE4", "DoubleLongLeftArrow": "\u27F8", "DoubleLongLeftRightArrow": "\u27FA", "DoubleLongRightArrow": "\u27F9", "DoubleRightArrow": "\u21D2", "DoubleRightTee": "\u22A8", "DoubleUpArrow": "\u21D1", "DoubleUpDownArrow": "\u21D5", "DoubleVerticalBar": "\u2225", "downarrow": "\u2193", "Downarrow": "\u21D3", "DownArrow": "\u2193", "DownArrowBar": "\u2913", "DownArrowUpArrow": "\u21F5", "DownBreve": "\u0311", "downdownarrows": "\u21CA", "downharpoonleft": "\u21C3", "downharpoonright": "\u21C2", "DownLeftRightVector": "\u2950", "DownLeftTeeVector": "\u295E", "DownLeftVector": "\u21BD", "DownLeftVectorBar": "\u2956", "DownRightTeeVector": "\u295F", "DownRightVector": "\u21C1", "DownRightVectorBar": "\u2957", "DownTee": "\u22A4", "DownTeeArrow": "\u21A7", "drbkarow": "\u2910", "drcorn": "\u231F", "drcrop": "\u230C", "dscr": "\u{1D4B9}", "Dscr": "\u{1D49F}", "dscy": "\u0455", "DScy": "\u0405", "dsol": "\u29F6", "dstrok": "\u0111", "Dstrok": "\u0110", "dtdot": "\u22F1", "dtri": "\u25BF", "dtrif": "\u25BE", "duarr": "\u21F5", "duhar": "\u296F", "dwangle": "\u29A6", "dzcy": "\u045F", "DZcy": "\u040F", "dzigrarr": "\u27FF", "eacute": "\xE9", "Eacute": "\xC9", "easter": "\u2A6E", "ecaron": "\u011B", "Ecaron": "\u011A", "ecir": "\u2256", "ecirc": "\xEA", "Ecirc": "\xCA", "ecolon": "\u2255", "ecy": "\u044D", "Ecy": "\u042D", "eDDot": "\u2A77", "edot": "\u0117", "eDot": "\u2251", "Edot": "\u0116", "ee": "\u2147", "efDot": "\u2252", "efr": "\u{1D522}", "Efr": "\u{1D508}", "eg": "\u2A9A", "egrave": "\xE8", "Egrave": "\xC8", "egs": "\u2A96", "egsdot": "\u2A98", "el": "\u2A99", "Element": "\u2208", "elinters": "\u23E7", "ell": "\u2113", "els": "\u2A95", "elsdot": "\u2A97", "emacr": "\u0113", "Emacr": "\u0112", "empty": "\u2205", "emptyset": "\u2205", "EmptySmallSquare": "\u25FB", "emptyv": "\u2205", "EmptyVerySmallSquare": "\u25AB", "emsp": "\u2003", "emsp13": "\u2004", "emsp14": "\u2005", "eng": "\u014B", "ENG": "\u014A", "ensp": "\u2002", "eogon": "\u0119", "Eogon": "\u0118", "eopf": "\u{1D556}", "Eopf": "\u{1D53C}", "epar": "\u22D5", "eparsl": "\u29E3", "eplus": "\u2A71", "epsi": "\u03B5", "epsilon": "\u03B5", "Epsilon": "\u0395", "epsiv": "\u03F5", "eqcirc": "\u2256", "eqcolon": "\u2255", "eqsim": "\u2242", "eqslantgtr": "\u2A96", "eqslantless": "\u2A95", "Equal": "\u2A75", "equals": "=", "EqualTilde": "\u2242", "equest": "\u225F", "Equilibrium": "\u21CC", "equiv": "\u2261", "equivDD": "\u2A78", "eqvparsl": "\u29E5", "erarr": "\u2971", "erDot": "\u2253", "escr": "\u212F", "Escr": "\u2130", "esdot": "\u2250", "esim": "\u2242", "Esim": "\u2A73", "eta": "\u03B7", "Eta": "\u0397", "eth": "\xF0", "ETH": "\xD0", "euml": "\xEB", "Euml": "\xCB", "euro": "\u20AC", "excl": "!", "exist": "\u2203", "Exists": "\u2203", "expectation": "\u2130", "exponentiale": "\u2147", "ExponentialE": "\u2147", "fallingdotseq": "\u2252", "fcy": "\u0444", "Fcy": "\u0424", "female": "\u2640", "ffilig": "\uFB03", "fflig": "\uFB00", "ffllig": "\uFB04", "ffr": "\u{1D523}", "Ffr": "\u{1D509}", "filig": "\uFB01", "FilledSmallSquare": "\u25FC", "FilledVerySmallSquare": "\u25AA", "fjlig": "fj", "flat": "\u266D", "fllig": "\uFB02", "fltns": "\u25B1", "fnof": "\u0192", "fopf": "\u{1D557}", "Fopf": "\u{1D53D}", "forall": "\u2200", "ForAll": "\u2200", "fork": "\u22D4", "forkv": "\u2AD9", "Fouriertrf": "\u2131", "fpartint": "\u2A0D", "frac12": "\xBD", "frac13": "\u2153", "frac14": "\xBC", "frac15": "\u2155", "frac16": "\u2159", "frac18": "\u215B", "frac23": "\u2154", "frac25": "\u2156", "frac34": "\xBE", "frac35": "\u2157", "frac38": "\u215C", "frac45": "\u2158", "frac56": "\u215A", "frac58": "\u215D", "frac78": "\u215E", "frasl": "\u2044", "frown": "\u2322", "fscr": "\u{1D4BB}", "Fscr": "\u2131", "gacute": "\u01F5", "gamma": "\u03B3", "Gamma": "\u0393", "gammad": "\u03DD", "Gammad": "\u03DC", "gap": "\u2A86", "gbreve": "\u011F", "Gbreve": "\u011E", "Gcedil": "\u0122", "gcirc": "\u011D", "Gcirc": "\u011C", "gcy": "\u0433", "Gcy": "\u0413", "gdot": "\u0121", "Gdot": "\u0120", "ge": "\u2265", "gE": "\u2267", "gel": "\u22DB", "gEl": "\u2A8C", "geq": "\u2265", "geqq": "\u2267", "geqslant": "\u2A7E", "ges": "\u2A7E", "gescc": "\u2AA9", "gesdot": "\u2A80", "gesdoto": "\u2A82", "gesdotol": "\u2A84", "gesl": "\u22DB\uFE00", "gesles": "\u2A94", "gfr": "\u{1D524}", "Gfr": "\u{1D50A}", "gg": "\u226B", "Gg": "\u22D9", "ggg": "\u22D9", "gimel": "\u2137", "gjcy": "\u0453", "GJcy": "\u0403", "gl": "\u2277", "gla": "\u2AA5", "glE": "\u2A92", "glj": "\u2AA4", "gnap": "\u2A8A", "gnapprox": "\u2A8A", "gne": "\u2A88", "gnE": "\u2269", "gneq": "\u2A88", "gneqq": "\u2269", "gnsim": "\u22E7", "gopf": "\u{1D558}", "Gopf": "\u{1D53E}", "grave": "`", "GreaterEqual": "\u2265", "GreaterEqualLess": "\u22DB", "GreaterFullEqual": "\u2267", "GreaterGreater": "\u2AA2", "GreaterLess": "\u2277", "GreaterSlantEqual": "\u2A7E", "GreaterTilde": "\u2273", "gscr": "\u210A", "Gscr": "\u{1D4A2}", "gsim": "\u2273", "gsime": "\u2A8E", "gsiml": "\u2A90", "gt": ">", "Gt": "\u226B", "GT": ">", "gtcc": "\u2AA7", "gtcir": "\u2A7A", "gtdot": "\u22D7", "gtlPar": "\u2995", "gtquest": "\u2A7C", "gtrapprox": "\u2A86", "gtrarr": "\u2978", "gtrdot": "\u22D7", "gtreqless": "\u22DB", "gtreqqless": "\u2A8C", "gtrless": "\u2277", "gtrsim": "\u2273", "gvertneqq": "\u2269\uFE00", "gvnE": "\u2269\uFE00", "Hacek": "\u02C7", "hairsp": "\u200A", "half": "\xBD", "hamilt": "\u210B", "hardcy": "\u044A", "HARDcy": "\u042A", "harr": "\u2194", "hArr": "\u21D4", "harrcir": "\u2948", "harrw": "\u21AD", "Hat": "^", "hbar": "\u210F", "hcirc": "\u0125", "Hcirc": "\u0124", "hearts": "\u2665", "heartsuit": "\u2665", "hellip": "\u2026", "hercon": "\u22B9", "hfr": "\u{1D525}", "Hfr": "\u210C", "HilbertSpace": "\u210B", "hksearow": "\u2925", "hkswarow": "\u2926", "hoarr": "\u21FF", "homtht": "\u223B", "hookleftarrow": "\u21A9", "hookrightarrow": "\u21AA", "hopf": "\u{1D559}", "Hopf": "\u210D", "horbar": "\u2015", "HorizontalLine": "\u2500", "hscr": "\u{1D4BD}", "Hscr": "\u210B", "hslash": "\u210F", "hstrok": "\u0127", "Hstrok": "\u0126", "HumpDownHump": "\u224E", "HumpEqual": "\u224F", "hybull": "\u2043", "hyphen": "\u2010", "iacute": "\xED", "Iacute": "\xCD", "ic": "\u2063", "icirc": "\xEE", "Icirc": "\xCE", "icy": "\u0438", "Icy": "\u0418", "Idot": "\u0130", "iecy": "\u0435", "IEcy": "\u0415", "iexcl": "\xA1", "iff": "\u21D4", "ifr": "\u{1D526}", "Ifr": "\u2111", "igrave": "\xEC", "Igrave": "\xCC", "ii": "\u2148", "iiiint": "\u2A0C", "iiint": "\u222D", "iinfin": "\u29DC", "iiota": "\u2129", "ijlig": "\u0133", "IJlig": "\u0132", "Im": "\u2111", "imacr": "\u012B", "Imacr": "\u012A", "image": "\u2111", "ImaginaryI": "\u2148", "imagline": "\u2110", "imagpart": "\u2111", "imath": "\u0131", "imof": "\u22B7", "imped": "\u01B5", "Implies": "\u21D2", "in": "\u2208", "incare": "\u2105", "infin": "\u221E", "infintie": "\u29DD", "inodot": "\u0131", "int": "\u222B", "Int": "\u222C", "intcal": "\u22BA", "integers": "\u2124", "Integral": "\u222B", "intercal": "\u22BA", "Intersection": "\u22C2", "intlarhk": "\u2A17", "intprod": "\u2A3C", "InvisibleComma": "\u2063", "InvisibleTimes": "\u2062", "iocy": "\u0451", "IOcy": "\u0401", "iogon": "\u012F", "Iogon": "\u012E", "iopf": "\u{1D55A}", "Iopf": "\u{1D540}", "iota": "\u03B9", "Iota": "\u0399", "iprod": "\u2A3C", "iquest": "\xBF", "iscr": "\u{1D4BE}", "Iscr": "\u2110", "isin": "\u2208", "isindot": "\u22F5", "isinE": "\u22F9", "isins": "\u22F4", "isinsv": "\u22F3", "isinv": "\u2208", "it": "\u2062", "itilde": "\u0129", "Itilde": "\u0128", "iukcy": "\u0456", "Iukcy": "\u0406", "iuml": "\xEF", "Iuml": "\xCF", "jcirc": "\u0135", "Jcirc": "\u0134", "jcy": "\u0439", "Jcy": "\u0419", "jfr": "\u{1D527}", "Jfr": "\u{1D50D}", "jmath": "\u0237", "jopf": "\u{1D55B}", "Jopf": "\u{1D541}", "jscr": "\u{1D4BF}", "Jscr": "\u{1D4A5}", "jsercy": "\u0458", "Jsercy": "\u0408", "jukcy": "\u0454", "Jukcy": "\u0404", "kappa": "\u03BA", "Kappa": "\u039A", "kappav": "\u03F0", "kcedil": "\u0137", "Kcedil": "\u0136", "kcy": "\u043A", "Kcy": "\u041A", "kfr": "\u{1D528}", "Kfr": "\u{1D50E}", "kgreen": "\u0138", "khcy": "\u0445", "KHcy": "\u0425", "kjcy": "\u045C", "KJcy": "\u040C", "kopf": "\u{1D55C}", "Kopf": "\u{1D542}", "kscr": "\u{1D4C0}", "Kscr": "\u{1D4A6}", "lAarr": "\u21DA", "lacute": "\u013A", "Lacute": "\u0139", "laemptyv": "\u29B4", "lagran": "\u2112", "lambda": "\u03BB", "Lambda": "\u039B", "lang": "\u27E8", "Lang": "\u27EA", "langd": "\u2991", "langle": "\u27E8", "lap": "\u2A85", "Laplacetrf": "\u2112", "laquo": "\xAB", "larr": "\u2190", "lArr": "\u21D0", "Larr": "\u219E", "larrb": "\u21E4", "larrbfs": "\u291F", "larrfs": "\u291D", "larrhk": "\u21A9", "larrlp": "\u21AB", "larrpl": "\u2939", "larrsim": "\u2973", "larrtl": "\u21A2", "lat": "\u2AAB", "latail": "\u2919", "lAtail": "\u291B", "late": "\u2AAD", "lates": "\u2AAD\uFE00", "lbarr": "\u290C", "lBarr": "\u290E", "lbbrk": "\u2772", "lbrace": "{", "lbrack": "[", "lbrke": "\u298B", "lbrksld": "\u298F", "lbrkslu": "\u298D", "lcaron": "\u013E", "Lcaron": "\u013D", "lcedil": "\u013C", "Lcedil": "\u013B", "lceil": "\u2308", "lcub": "{", "lcy": "\u043B", "Lcy": "\u041B", "ldca": "\u2936", "ldquo": "\u201C", "ldquor": "\u201E", "ldrdhar": "\u2967", "ldrushar": "\u294B", "ldsh": "\u21B2", "le": "\u2264", "lE": "\u2266", "LeftAngleBracket": "\u27E8", "leftarrow": "\u2190", "Leftarrow": "\u21D0", "LeftArrow": "\u2190", "LeftArrowBar": "\u21E4", "LeftArrowRightArrow": "\u21C6", "leftarrowtail": "\u21A2", "LeftCeiling": "\u2308", "LeftDoubleBracket": "\u27E6", "LeftDownTeeVector": "\u2961", "LeftDownVector": "\u21C3", "LeftDownVectorBar": "\u2959", "LeftFloor": "\u230A", "leftharpoondown": "\u21BD", "leftharpoonup": "\u21BC", "leftleftarrows": "\u21C7", "leftrightarrow": "\u2194", "Leftrightarrow": "\u21D4", "LeftRightArrow": "\u2194", "leftrightarrows": "\u21C6", "leftrightharpoons": "\u21CB", "leftrightsquigarrow": "\u21AD", "LeftRightVector": "\u294E", "LeftTee": "\u22A3", "LeftTeeArrow": "\u21A4", "LeftTeeVector": "\u295A", "leftthreetimes": "\u22CB", "LeftTriangle": "\u22B2", "LeftTriangleBar": "\u29CF", "LeftTriangleEqual": "\u22B4", "LeftUpDownVector": "\u2951", "LeftUpTeeVector": "\u2960", "LeftUpVector": "\u21BF", "LeftUpVectorBar": "\u2958", "LeftVector": "\u21BC", "LeftVectorBar": "\u2952", "leg": "\u22DA", "lEg": "\u2A8B", "leq": "\u2264", "leqq": "\u2266", "leqslant": "\u2A7D", "les": "\u2A7D", "lescc": "\u2AA8", "lesdot": "\u2A7F", "lesdoto": "\u2A81", "lesdotor": "\u2A83", "lesg": "\u22DA\uFE00", "lesges": "\u2A93", "lessapprox": "\u2A85", "lessdot": "\u22D6", "lesseqgtr": "\u22DA", "lesseqqgtr": "\u2A8B", "LessEqualGreater": "\u22DA", "LessFullEqual": "\u2266", "LessGreater": "\u2276", "lessgtr": "\u2276", "LessLess": "\u2AA1", "lesssim": "\u2272", "LessSlantEqual": "\u2A7D", "LessTilde": "\u2272", "lfisht": "\u297C", "lfloor": "\u230A", "lfr": "\u{1D529}", "Lfr": "\u{1D50F}", "lg": "\u2276", "lgE": "\u2A91", "lHar": "\u2962", "lhard": "\u21BD", "lharu": "\u21BC", "lharul": "\u296A", "lhblk": "\u2584", "ljcy": "\u0459", "LJcy": "\u0409", "ll": "\u226A", "Ll": "\u22D8", "llarr": "\u21C7", "llcorner": "\u231E", "Lleftarrow": "\u21DA", "llhard": "\u296B", "lltri": "\u25FA", "lmidot": "\u0140", "Lmidot": "\u013F", "lmoust": "\u23B0", "lmoustache": "\u23B0", "lnap": "\u2A89", "lnapprox": "\u2A89", "lne": "\u2A87", "lnE": "\u2268", "lneq": "\u2A87", "lneqq": "\u2268", "lnsim": "\u22E6", "loang": "\u27EC", "loarr": "\u21FD", "lobrk": "\u27E6", "longleftarrow": "\u27F5", "Longleftarrow": "\u27F8", "LongLeftArrow": "\u27F5", "longleftrightarrow": "\u27F7", "Longleftrightarrow": "\u27FA", "LongLeftRightArrow": "\u27F7", "longmapsto": "\u27FC", "longrightarrow": "\u27F6", "Longrightarrow": "\u27F9", "LongRightArrow": "\u27F6", "looparrowleft": "\u21AB", "looparrowright": "\u21AC", "lopar": "\u2985", "lopf": "\u{1D55D}", "Lopf": "\u{1D543}", "loplus": "\u2A2D", "lotimes": "\u2A34", "lowast": "\u2217", "lowbar": "_", "LowerLeftArrow": "\u2199", "LowerRightArrow": "\u2198", "loz": "\u25CA", "lozenge": "\u25CA", "lozf": "\u29EB", "lpar": "(", "lparlt": "\u2993", "lrarr": "\u21C6", "lrcorner": "\u231F", "lrhar": "\u21CB", "lrhard": "\u296D", "lrm": "\u200E", "lrtri": "\u22BF", "lsaquo": "\u2039", "lscr": "\u{1D4C1}", "Lscr": "\u2112", "lsh": "\u21B0", "Lsh": "\u21B0", "lsim": "\u2272", "lsime": "\u2A8D", "lsimg": "\u2A8F", "lsqb": "[", "lsquo": "\u2018", "lsquor": "\u201A", "lstrok": "\u0142", "Lstrok": "\u0141", "lt": "<", "Lt": "\u226A", "LT": "<", "ltcc": "\u2AA6", "ltcir": "\u2A79", "ltdot": "\u22D6", "lthree": "\u22CB", "ltimes": "\u22C9", "ltlarr": "\u2976", "ltquest": "\u2A7B", "ltri": "\u25C3", "ltrie": "\u22B4", "ltrif": "\u25C2", "ltrPar": "\u2996", "lurdshar": "\u294A", "luruhar": "\u2966", "lvertneqq": "\u2268\uFE00", "lvnE": "\u2268\uFE00", "macr": "\xAF", "male": "\u2642", "malt": "\u2720", "maltese": "\u2720", "map": "\u21A6", "Map": "\u2905", "mapsto": "\u21A6", "mapstodown": "\u21A7", "mapstoleft": "\u21A4", "mapstoup": "\u21A5", "marker": "\u25AE", "mcomma": "\u2A29", "mcy": "\u043C", "Mcy": "\u041C", "mdash": "\u2014", "mDDot": "\u223A", "measuredangle": "\u2221", "MediumSpace": "\u205F", "Mellintrf": "\u2133", "mfr": "\u{1D52A}", "Mfr": "\u{1D510}", "mho": "\u2127", "micro": "\xB5", "mid": "\u2223", "midast": "*", "midcir": "\u2AF0", "middot": "\xB7", "minus": "\u2212", "minusb": "\u229F", "minusd": "\u2238", "minusdu": "\u2A2A", "MinusPlus": "\u2213", "mlcp": "\u2ADB", "mldr": "\u2026", "mnplus": "\u2213", "models": "\u22A7", "mopf": "\u{1D55E}", "Mopf": "\u{1D544}", "mp": "\u2213", "mscr": "\u{1D4C2}", "Mscr": "\u2133", "mstpos": "\u223E", "mu": "\u03BC", "Mu": "\u039C", "multimap": "\u22B8", "mumap": "\u22B8", "nabla": "\u2207", "nacute": "\u0144", "Nacute": "\u0143", "nang": "\u2220\u20D2", "nap": "\u2249", "napE": "\u2A70\u0338", "napid": "\u224B\u0338", "napos": "\u0149", "napprox": "\u2249", "natur": "\u266E", "natural": "\u266E", "naturals": "\u2115", "nbsp": "\xA0", "nbump": "\u224E\u0338", "nbumpe": "\u224F\u0338", "ncap": "\u2A43", "ncaron": "\u0148", "Ncaron": "\u0147", "ncedil": "\u0146", "Ncedil": "\u0145", "ncong": "\u2247", "ncongdot": "\u2A6D\u0338", "ncup": "\u2A42", "ncy": "\u043D", "Ncy": "\u041D", "ndash": "\u2013", "ne": "\u2260", "nearhk": "\u2924", "nearr": "\u2197", "neArr": "\u21D7", "nearrow": "\u2197", "nedot": "\u2250\u0338", "NegativeMediumSpace": "\u200B", "NegativeThickSpace": "\u200B", "NegativeThinSpace": "\u200B", "NegativeVeryThinSpace": "\u200B", "nequiv": "\u2262", "nesear": "\u2928", "nesim": "\u2242\u0338", "NestedGreaterGreater": "\u226B", "NestedLessLess": "\u226A", "NewLine": "\n", "nexist": "\u2204", "nexists": "\u2204", "nfr": "\u{1D52B}", "Nfr": "\u{1D511}", "nge": "\u2271", "ngE": "\u2267\u0338", "ngeq": "\u2271", "ngeqq": "\u2267\u0338", "ngeqslant": "\u2A7E\u0338", "nges": "\u2A7E\u0338", "nGg": "\u22D9\u0338", "ngsim": "\u2275", "ngt": "\u226F", "nGt": "\u226B\u20D2", "ngtr": "\u226F", "nGtv": "\u226B\u0338", "nharr": "\u21AE", "nhArr": "\u21CE", "nhpar": "\u2AF2", "ni": "\u220B", "nis": "\u22FC", "nisd": "\u22FA", "niv": "\u220B", "njcy": "\u045A", "NJcy": "\u040A", "nlarr": "\u219A", "nlArr": "\u21CD", "nldr": "\u2025", "nle": "\u2270", "nlE": "\u2266\u0338", "nleftarrow": "\u219A", "nLeftarrow": "\u21CD", "nleftrightarrow": "\u21AE", "nLeftrightarrow": "\u21CE", "nleq": "\u2270", "nleqq": "\u2266\u0338", "nleqslant": "\u2A7D\u0338", "nles": "\u2A7D\u0338", "nless": "\u226E", "nLl": "\u22D8\u0338", "nlsim": "\u2274", "nlt": "\u226E", "nLt": "\u226A\u20D2", "nltri": "\u22EA", "nltrie": "\u22EC", "nLtv": "\u226A\u0338", "nmid": "\u2224", "NoBreak": "\u2060", "NonBreakingSpace": "\xA0", "nopf": "\u{1D55F}", "Nopf": "\u2115", "not": "\xAC", "Not": "\u2AEC", "NotCongruent": "\u2262", "NotCupCap": "\u226D", "NotDoubleVerticalBar": "\u2226", "NotElement": "\u2209", "NotEqual": "\u2260", "NotEqualTilde": "\u2242\u0338", "NotExists": "\u2204", "NotGreater": "\u226F", "NotGreaterEqual": "\u2271", "NotGreaterFullEqual": "\u2267\u0338", "NotGreaterGreater": "\u226B\u0338", "NotGreaterLess": "\u2279", "NotGreaterSlantEqual": "\u2A7E\u0338", "NotGreaterTilde": "\u2275", "NotHumpDownHump": "\u224E\u0338", "NotHumpEqual": "\u224F\u0338", "notin": "\u2209", "notindot": "\u22F5\u0338", "notinE": "\u22F9\u0338", "notinva": "\u2209", "notinvb": "\u22F7", "notinvc": "\u22F6", "NotLeftTriangle": "\u22EA", "NotLeftTriangleBar": "\u29CF\u0338", "NotLeftTriangleEqual": "\u22EC", "NotLess": "\u226E", "NotLessEqual": "\u2270", "NotLessGreater": "\u2278", "NotLessLess": "\u226A\u0338", "NotLessSlantEqual": "\u2A7D\u0338", "NotLessTilde": "\u2274", "NotNestedGreaterGreater": "\u2AA2\u0338", "NotNestedLessLess": "\u2AA1\u0338", "notni": "\u220C", "notniva": "\u220C", "notnivb": "\u22FE", "notnivc": "\u22FD", "NotPrecedes": "\u2280", "NotPrecedesEqual": "\u2AAF\u0338", "NotPrecedesSlantEqual": "\u22E0", "NotReverseElement": "\u220C", "NotRightTriangle": "\u22EB", "NotRightTriangleBar": "\u29D0\u0338", "NotRightTriangleEqual": "\u22ED", "NotSquareSubset": "\u228F\u0338", "NotSquareSubsetEqual": "\u22E2", "NotSquareSuperset": "\u2290\u0338", "NotSquareSupersetEqual": "\u22E3", "NotSubset": "\u2282\u20D2", "NotSubsetEqual": "\u2288", "NotSucceeds": "\u2281", "NotSucceedsEqual": "\u2AB0\u0338", "NotSucceedsSlantEqual": "\u22E1", "NotSucceedsTilde": "\u227F\u0338", "NotSuperset": "\u2283\u20D2", "NotSupersetEqual": "\u2289", "NotTilde": "\u2241", "NotTildeEqual": "\u2244", "NotTildeFullEqual": "\u2247", "NotTildeTilde": "\u2249", "NotVerticalBar": "\u2224", "npar": "\u2226", "nparallel": "\u2226", "nparsl": "\u2AFD\u20E5", "npart": "\u2202\u0338", "npolint": "\u2A14", "npr": "\u2280", "nprcue": "\u22E0", "npre": "\u2AAF\u0338", "nprec": "\u2280", "npreceq": "\u2AAF\u0338", "nrarr": "\u219B", "nrArr": "\u21CF", "nrarrc": "\u2933\u0338", "nrarrw": "\u219D\u0338", "nrightarrow": "\u219B", "nRightarrow": "\u21CF", "nrtri": "\u22EB", "nrtrie": "\u22ED", "nsc": "\u2281", "nsccue": "\u22E1", "nsce": "\u2AB0\u0338", "nscr": "\u{1D4C3}", "Nscr": "\u{1D4A9}", "nshortmid": "\u2224", "nshortparallel": "\u2226", "nsim": "\u2241", "nsime": "\u2244", "nsimeq": "\u2244", "nsmid": "\u2224", "nspar": "\u2226", "nsqsube": "\u22E2", "nsqsupe": "\u22E3", "nsub": "\u2284", "nsube": "\u2288", "nsubE": "\u2AC5\u0338", "nsubset": "\u2282\u20D2", "nsubseteq": "\u2288", "nsubseteqq": "\u2AC5\u0338", "nsucc": "\u2281", "nsucceq": "\u2AB0\u0338", "nsup": "\u2285", "nsupe": "\u2289", "nsupE": "\u2AC6\u0338", "nsupset": "\u2283\u20D2", "nsupseteq": "\u2289", "nsupseteqq": "\u2AC6\u0338", "ntgl": "\u2279", "ntilde": "\xF1", "Ntilde": "\xD1", "ntlg": "\u2278", "ntriangleleft": "\u22EA", "ntrianglelefteq": "\u22EC", "ntriangleright": "\u22EB", "ntrianglerighteq": "\u22ED", "nu": "\u03BD", "Nu": "\u039D", "num": "#", "numero": "\u2116", "numsp": "\u2007", "nvap": "\u224D\u20D2", "nvdash": "\u22AC", "nvDash": "\u22AD", "nVdash": "\u22AE", "nVDash": "\u22AF", "nvge": "\u2265\u20D2", "nvgt": ">\u20D2", "nvHarr": "\u2904", "nvinfin": "\u29DE", "nvlArr": "\u2902", "nvle": "\u2264\u20D2", "nvlt": "<\u20D2", "nvltrie": "\u22B4\u20D2", "nvrArr": "\u2903", "nvrtrie": "\u22B5\u20D2", "nvsim": "\u223C\u20D2", "nwarhk": "\u2923", "nwarr": "\u2196", "nwArr": "\u21D6", "nwarrow": "\u2196", "nwnear": "\u2927", "oacute": "\xF3", "Oacute": "\xD3", "oast": "\u229B", "ocir": "\u229A", "ocirc": "\xF4", "Ocirc": "\xD4", "ocy": "\u043E", "Ocy": "\u041E", "odash": "\u229D", "odblac": "\u0151", "Odblac": "\u0150", "odiv": "\u2A38", "odot": "\u2299", "odsold": "\u29BC", "oelig": "\u0153", "OElig": "\u0152", "ofcir": "\u29BF", "ofr": "\u{1D52C}", "Ofr": "\u{1D512}", "ogon": "\u02DB", "ograve": "\xF2", "Ograve": "\xD2", "ogt": "\u29C1", "ohbar": "\u29B5", "ohm": "\u03A9", "oint": "\u222E", "olarr": "\u21BA", "olcir": "\u29BE", "olcross": "\u29BB", "oline": "\u203E", "olt": "\u29C0", "omacr": "\u014D", "Omacr": "\u014C", "omega": "\u03C9", "Omega": "\u03A9", "omicron": "\u03BF", "Omicron": "\u039F", "omid": "\u29B6", "ominus": "\u2296", "oopf": "\u{1D560}", "Oopf": "\u{1D546}", "opar": "\u29B7", "OpenCurlyDoubleQuote": "\u201C", "OpenCurlyQuote": "\u2018", "operp": "\u29B9", "oplus": "\u2295", "or": "\u2228", "Or": "\u2A54", "orarr": "\u21BB", "ord": "\u2A5D", "order": "\u2134", "orderof": "\u2134", "ordf": "\xAA", "ordm": "\xBA", "origof": "\u22B6", "oror": "\u2A56", "orslope": "\u2A57", "orv": "\u2A5B", "oS": "\u24C8", "oscr": "\u2134", "Oscr": "\u{1D4AA}", "oslash": "\xF8", "Oslash": "\xD8", "osol": "\u2298", "otilde": "\xF5", "Otilde": "\xD5", "otimes": "\u2297", "Otimes": "\u2A37", "otimesas": "\u2A36", "ouml": "\xF6", "Ouml": "\xD6", "ovbar": "\u233D", "OverBar": "\u203E", "OverBrace": "\u23DE", "OverBracket": "\u23B4", "OverParenthesis": "\u23DC", "par": "\u2225", "para": "\xB6", "parallel": "\u2225", "parsim": "\u2AF3", "parsl": "\u2AFD", "part": "\u2202", "PartialD": "\u2202", "pcy": "\u043F", "Pcy": "\u041F", "percnt": "%", "period": ".", "permil": "\u2030", "perp": "\u22A5", "pertenk": "\u2031", "pfr": "\u{1D52D}", "Pfr": "\u{1D513}", "phi": "\u03C6", "Phi": "\u03A6", "phiv": "\u03D5", "phmmat": "\u2133", "phone": "\u260E", "pi": "\u03C0", "Pi": "\u03A0", "pitchfork": "\u22D4", "piv": "\u03D6", "planck": "\u210F", "planckh": "\u210E", "plankv": "\u210F", "plus": "+", "plusacir": "\u2A23", "plusb": "\u229E", "pluscir": "\u2A22", "plusdo": "\u2214", "plusdu": "\u2A25", "pluse": "\u2A72", "PlusMinus": "\xB1", "plusmn": "\xB1", "plussim": "\u2A26", "plustwo": "\u2A27", "pm": "\xB1", "Poincareplane": "\u210C", "pointint": "\u2A15", "popf": "\u{1D561}", "Popf": "\u2119", "pound": "\xA3", "pr": "\u227A", "Pr": "\u2ABB", "prap": "\u2AB7", "prcue": "\u227C", "pre": "\u2AAF", "prE": "\u2AB3", "prec": "\u227A", "precapprox": "\u2AB7", "preccurlyeq": "\u227C", "Precedes": "\u227A", "PrecedesEqual": "\u2AAF", "PrecedesSlantEqual": "\u227C", "PrecedesTilde": "\u227E", "preceq": "\u2AAF", "precnapprox": "\u2AB9", "precneqq": "\u2AB5", "precnsim": "\u22E8", "precsim": "\u227E", "prime": "\u2032", "Prime": "\u2033", "primes": "\u2119", "prnap": "\u2AB9", "prnE": "\u2AB5", "prnsim": "\u22E8", "prod": "\u220F", "Product": "\u220F", "profalar": "\u232E", "profline": "\u2312", "profsurf": "\u2313", "prop": "\u221D", "Proportion": "\u2237", "Proportional": "\u221D", "propto": "\u221D", "prsim": "\u227E", "prurel": "\u22B0", "pscr": "\u{1D4C5}", "Pscr": "\u{1D4AB}", "psi": "\u03C8", "Psi": "\u03A8", "puncsp": "\u2008", "qfr": "\u{1D52E}", "Qfr": "\u{1D514}", "qint": "\u2A0C", "qopf": "\u{1D562}", "Qopf": "\u211A", "qprime": "\u2057", "qscr": "\u{1D4C6}", "Qscr": "\u{1D4AC}", "quaternions": "\u210D", "quatint": "\u2A16", "quest": "?", "questeq": "\u225F", "quot": '"', "QUOT": '"', "rAarr": "\u21DB", "race": "\u223D\u0331", "racute": "\u0155", "Racute": "\u0154", "radic": "\u221A", "raemptyv": "\u29B3", "rang": "\u27E9", "Rang": "\u27EB", "rangd": "\u2992", "range": "\u29A5", "rangle": "\u27E9", "raquo": "\xBB", "rarr": "\u2192", "rArr": "\u21D2", "Rarr": "\u21A0", "rarrap": "\u2975", "rarrb": "\u21E5", "rarrbfs": "\u2920", "rarrc": "\u2933", "rarrfs": "\u291E", "rarrhk": "\u21AA", "rarrlp": "\u21AC", "rarrpl": "\u2945", "rarrsim": "\u2974", "rarrtl": "\u21A3", "Rarrtl": "\u2916", "rarrw": "\u219D", "ratail": "\u291A", "rAtail": "\u291C", "ratio": "\u2236", "rationals": "\u211A", "rbarr": "\u290D", "rBarr": "\u290F", "RBarr": "\u2910", "rbbrk": "\u2773", "rbrace": "}", "rbrack": "]", "rbrke": "\u298C", "rbrksld": "\u298E", "rbrkslu": "\u2990", "rcaron": "\u0159", "Rcaron": "\u0158", "rcedil": "\u0157", "Rcedil": "\u0156", "rceil": "\u2309", "rcub": "}", "rcy": "\u0440", "Rcy": "\u0420", "rdca": "\u2937", "rdldhar": "\u2969", "rdquo": "\u201D", "rdquor": "\u201D", "rdsh": "\u21B3", "Re": "\u211C", "real": "\u211C", "realine": "\u211B", "realpart": "\u211C", "reals": "\u211D", "rect": "\u25AD", "reg": "\xAE", "REG": "\xAE", "ReverseElement": "\u220B", "ReverseEquilibrium": "\u21CB", "ReverseUpEquilibrium": "\u296F", "rfisht": "\u297D", "rfloor": "\u230B", "rfr": "\u{1D52F}", "Rfr": "\u211C", "rHar": "\u2964", "rhard": "\u21C1", "rharu": "\u21C0", "rharul": "\u296C", "rho": "\u03C1", "Rho": "\u03A1", "rhov": "\u03F1", "RightAngleBracket": "\u27E9", "rightarrow": "\u2192", "Rightarrow": "\u21D2", "RightArrow": "\u2192", "RightArrowBar": "\u21E5", "RightArrowLeftArrow": "\u21C4", "rightarrowtail": "\u21A3", "RightCeiling": "\u2309", "RightDoubleBracket": "\u27E7", "RightDownTeeVector": "\u295D", "RightDownVector": "\u21C2", "RightDownVectorBar": "\u2955", "RightFloor": "\u230B", "rightharpoondown": "\u21C1", "rightharpoonup": "\u21C0", "rightleftarrows": "\u21C4", "rightleftharpoons": "\u21CC", "rightrightarrows": "\u21C9", "rightsquigarrow": "\u219D", "RightTee": "\u22A2", "RightTeeArrow": "\u21A6", "RightTeeVector": "\u295B", "rightthreetimes": "\u22CC", "RightTriangle": "\u22B3", "RightTriangleBar": "\u29D0", "RightTriangleEqual": "\u22B5", "RightUpDownVector": "\u294F", "RightUpTeeVector": "\u295C", "RightUpVector": "\u21BE", "RightUpVectorBar": "\u2954", "RightVector": "\u21C0", "RightVectorBar": "\u2953", "ring": "\u02DA", "risingdotseq": "\u2253", "rlarr": "\u21C4", "rlhar": "\u21CC", "rlm": "\u200F", "rmoust": "\u23B1", "rmoustache": "\u23B1", "rnmid": "\u2AEE", "roang": "\u27ED", "roarr": "\u21FE", "robrk": "\u27E7", "ropar": "\u2986", "ropf": "\u{1D563}", "Ropf": "\u211D", "roplus": "\u2A2E", "rotimes": "\u2A35", "RoundImplies": "\u2970", "rpar": ")", "rpargt": "\u2994", "rppolint": "\u2A12", "rrarr": "\u21C9", "Rrightarrow": "\u21DB", "rsaquo": "\u203A", "rscr": "\u{1D4C7}", "Rscr": "\u211B", "rsh": "\u21B1", "Rsh": "\u21B1", "rsqb": "]", "rsquo": "\u2019", "rsquor": "\u2019", "rthree": "\u22CC", "rtimes": "\u22CA", "rtri": "\u25B9", "rtrie": "\u22B5", "rtrif": "\u25B8", "rtriltri": "\u29CE", "RuleDelayed": "\u29F4", "ruluhar": "\u2968", "rx": "\u211E", "sacute": "\u015B", "Sacute": "\u015A", "sbquo": "\u201A", "sc": "\u227B", "Sc": "\u2ABC", "scap": "\u2AB8", "scaron": "\u0161", "Scaron": "\u0160", "sccue": "\u227D", "sce": "\u2AB0", "scE": "\u2AB4", "scedil": "\u015F", "Scedil": "\u015E", "scirc": "\u015D", "Scirc": "\u015C", "scnap": "\u2ABA", "scnE": "\u2AB6", "scnsim": "\u22E9", "scpolint": "\u2A13", "scsim": "\u227F", "scy": "\u0441", "Scy": "\u0421", "sdot": "\u22C5", "sdotb": "\u22A1", "sdote": "\u2A66", "searhk": "\u2925", "searr": "\u2198", "seArr": "\u21D8", "searrow": "\u2198", "sect": "\xA7", "semi": ";", "seswar": "\u2929", "setminus": "\u2216", "setmn": "\u2216", "sext": "\u2736", "sfr": "\u{1D530}", "Sfr": "\u{1D516}", "sfrown": "\u2322", "sharp": "\u266F", "shchcy": "\u0449", "SHCHcy": "\u0429", "shcy": "\u0448", "SHcy": "\u0428", "ShortDownArrow": "\u2193", "ShortLeftArrow": "\u2190", "shortmid": "\u2223", "shortparallel": "\u2225", "ShortRightArrow": "\u2192", "ShortUpArrow": "\u2191", "shy": "\xAD", "sigma": "\u03C3", "Sigma": "\u03A3", "sigmaf": "\u03C2", "sigmav": "\u03C2", "sim": "\u223C", "simdot": "\u2A6A", "sime": "\u2243", "simeq": "\u2243", "simg": "\u2A9E", "simgE": "\u2AA0", "siml": "\u2A9D", "simlE": "\u2A9F", "simne": "\u2246", "simplus": "\u2A24", "simrarr": "\u2972", "slarr": "\u2190", "SmallCircle": "\u2218", "smallsetminus": "\u2216", "smashp": "\u2A33", "smeparsl": "\u29E4", "smid": "\u2223", "smile": "\u2323", "smt": "\u2AAA", "smte": "\u2AAC", "smtes": "\u2AAC\uFE00", "softcy": "\u044C", "SOFTcy": "\u042C", "sol": "/", "solb": "\u29C4", "solbar": "\u233F", "sopf": "\u{1D564}", "Sopf": "\u{1D54A}", "spades": "\u2660", "spadesuit": "\u2660", "spar": "\u2225", "sqcap": "\u2293", "sqcaps": "\u2293\uFE00", "sqcup": "\u2294", "sqcups": "\u2294\uFE00", "Sqrt": "\u221A", "sqsub": "\u228F", "sqsube": "\u2291", "sqsubset": "\u228F", "sqsubseteq": "\u2291", "sqsup": "\u2290", "sqsupe": "\u2292", "sqsupset": "\u2290", "sqsupseteq": "\u2292", "squ": "\u25A1", "square": "\u25A1", "Square": "\u25A1", "SquareIntersection": "\u2293", "SquareSubset": "\u228F", "SquareSubsetEqual": "\u2291", "SquareSuperset": "\u2290", "SquareSupersetEqual": "\u2292", "SquareUnion": "\u2294", "squarf": "\u25AA", "squf": "\u25AA", "srarr": "\u2192", "sscr": "\u{1D4C8}", "Sscr": "\u{1D4AE}", "ssetmn": "\u2216", "ssmile": "\u2323", "sstarf": "\u22C6", "star": "\u2606", "Star": "\u22C6", "starf": "\u2605", "straightepsilon": "\u03F5", "straightphi": "\u03D5", "strns": "\xAF", "sub": "\u2282", "Sub": "\u22D0", "subdot": "\u2ABD", "sube": "\u2286", "subE": "\u2AC5", "subedot": "\u2AC3", "submult": "\u2AC1", "subne": "\u228A", "subnE": "\u2ACB", "subplus": "\u2ABF", "subrarr": "\u2979", "subset": "\u2282", "Subset": "\u22D0", "subseteq": "\u2286", "subseteqq": "\u2AC5", "SubsetEqual": "\u2286", "subsetneq": "\u228A", "subsetneqq": "\u2ACB", "subsim": "\u2AC7", "subsub": "\u2AD5", "subsup": "\u2AD3", "succ": "\u227B", "succapprox": "\u2AB8", "succcurlyeq": "\u227D", "Succeeds": "\u227B", "SucceedsEqual": "\u2AB0", "SucceedsSlantEqual": "\u227D", "SucceedsTilde": "\u227F", "succeq": "\u2AB0", "succnapprox": "\u2ABA", "succneqq": "\u2AB6", "succnsim": "\u22E9", "succsim": "\u227F", "SuchThat": "\u220B", "sum": "\u2211", "Sum": "\u2211", "sung": "\u266A", "sup": "\u2283", "Sup": "\u22D1", "sup1": "\xB9", "sup2": "\xB2", "sup3": "\xB3", "supdot": "\u2ABE", "supdsub": "\u2AD8", "supe": "\u2287", "supE": "\u2AC6", "supedot": "\u2AC4", "Superset": "\u2283", "SupersetEqual": "\u2287", "suphsol": "\u27C9", "suphsub": "\u2AD7", "suplarr": "\u297B", "supmult": "\u2AC2", "supne": "\u228B", "supnE": "\u2ACC", "supplus": "\u2AC0", "supset": "\u2283", "Supset": "\u22D1", "supseteq": "\u2287", "supseteqq": "\u2AC6", "supsetneq": "\u228B", "supsetneqq": "\u2ACC", "supsim": "\u2AC8", "supsub": "\u2AD4", "supsup": "\u2AD6", "swarhk": "\u2926", "swarr": "\u2199", "swArr": "\u21D9", "swarrow": "\u2199", "swnwar": "\u292A", "szlig": "\xDF", "Tab": "	", "target": "\u2316", "tau": "\u03C4", "Tau": "\u03A4", "tbrk": "\u23B4", "tcaron": "\u0165", "Tcaron": "\u0164", "tcedil": "\u0163", "Tcedil": "\u0162", "tcy": "\u0442", "Tcy": "\u0422", "tdot": "\u20DB", "telrec": "\u2315", "tfr": "\u{1D531}", "Tfr": "\u{1D517}", "there4": "\u2234", "therefore": "\u2234", "Therefore": "\u2234", "theta": "\u03B8", "Theta": "\u0398", "thetasym": "\u03D1", "thetav": "\u03D1", "thickapprox": "\u2248", "thicksim": "\u223C", "ThickSpace": "\u205F\u200A", "thinsp": "\u2009", "ThinSpace": "\u2009", "thkap": "\u2248", "thksim": "\u223C", "thorn": "\xFE", "THORN": "\xDE", "tilde": "\u02DC", "Tilde": "\u223C", "TildeEqual": "\u2243", "TildeFullEqual": "\u2245", "TildeTilde": "\u2248", "times": "\xD7", "timesb": "\u22A0", "timesbar": "\u2A31", "timesd": "\u2A30", "tint": "\u222D", "toea": "\u2928", "top": "\u22A4", "topbot": "\u2336", "topcir": "\u2AF1", "topf": "\u{1D565}", "Topf": "\u{1D54B}", "topfork": "\u2ADA", "tosa": "\u2929", "tprime": "\u2034", "trade": "\u2122", "TRADE": "\u2122", "triangle": "\u25B5", "triangledown": "\u25BF", "triangleleft": "\u25C3", "trianglelefteq": "\u22B4", "triangleq": "\u225C", "triangleright": "\u25B9", "trianglerighteq": "\u22B5", "tridot": "\u25EC", "trie": "\u225C", "triminus": "\u2A3A", "TripleDot": "\u20DB", "triplus": "\u2A39", "trisb": "\u29CD", "tritime": "\u2A3B", "trpezium": "\u23E2", "tscr": "\u{1D4C9}", "Tscr": "\u{1D4AF}", "tscy": "\u0446", "TScy": "\u0426", "tshcy": "\u045B", "TSHcy": "\u040B", "tstrok": "\u0167", "Tstrok": "\u0166", "twixt": "\u226C", "twoheadleftarrow": "\u219E", "twoheadrightarrow": "\u21A0", "uacute": "\xFA", "Uacute": "\xDA", "uarr": "\u2191", "uArr": "\u21D1", "Uarr": "\u219F", "Uarrocir": "\u2949", "ubrcy": "\u045E", "Ubrcy": "\u040E", "ubreve": "\u016D", "Ubreve": "\u016C", "ucirc": "\xFB", "Ucirc": "\xDB", "ucy": "\u0443", "Ucy": "\u0423", "udarr": "\u21C5", "udblac": "\u0171", "Udblac": "\u0170", "udhar": "\u296E", "ufisht": "\u297E", "ufr": "\u{1D532}", "Ufr": "\u{1D518}", "ugrave": "\xF9", "Ugrave": "\xD9", "uHar": "\u2963", "uharl": "\u21BF", "uharr": "\u21BE", "uhblk": "\u2580", "ulcorn": "\u231C", "ulcorner": "\u231C", "ulcrop": "\u230F", "ultri": "\u25F8", "umacr": "\u016B", "Umacr": "\u016A", "uml": "\xA8", "UnderBar": "_", "UnderBrace": "\u23DF", "UnderBracket": "\u23B5", "UnderParenthesis": "\u23DD", "Union": "\u22C3", "UnionPlus": "\u228E", "uogon": "\u0173", "Uogon": "\u0172", "uopf": "\u{1D566}", "Uopf": "\u{1D54C}", "uparrow": "\u2191", "Uparrow": "\u21D1", "UpArrow": "\u2191", "UpArrowBar": "\u2912", "UpArrowDownArrow": "\u21C5", "updownarrow": "\u2195", "Updownarrow": "\u21D5", "UpDownArrow": "\u2195", "UpEquilibrium": "\u296E", "upharpoonleft": "\u21BF", "upharpoonright": "\u21BE", "uplus": "\u228E", "UpperLeftArrow": "\u2196", "UpperRightArrow": "\u2197", "upsi": "\u03C5", "Upsi": "\u03D2", "upsih": "\u03D2", "upsilon": "\u03C5", "Upsilon": "\u03A5", "UpTee": "\u22A5", "UpTeeArrow": "\u21A5", "upuparrows": "\u21C8", "urcorn": "\u231D", "urcorner": "\u231D", "urcrop": "\u230E", "uring": "\u016F", "Uring": "\u016E", "urtri": "\u25F9", "uscr": "\u{1D4CA}", "Uscr": "\u{1D4B0}", "utdot": "\u22F0", "utilde": "\u0169", "Utilde": "\u0168", "utri": "\u25B5", "utrif": "\u25B4", "uuarr": "\u21C8", "uuml": "\xFC", "Uuml": "\xDC", "uwangle": "\u29A7", "vangrt": "\u299C", "varepsilon": "\u03F5", "varkappa": "\u03F0", "varnothing": "\u2205", "varphi": "\u03D5", "varpi": "\u03D6", "varpropto": "\u221D", "varr": "\u2195", "vArr": "\u21D5", "varrho": "\u03F1", "varsigma": "\u03C2", "varsubsetneq": "\u228A\uFE00", "varsubsetneqq": "\u2ACB\uFE00", "varsupsetneq": "\u228B\uFE00", "varsupsetneqq": "\u2ACC\uFE00", "vartheta": "\u03D1", "vartriangleleft": "\u22B2", "vartriangleright": "\u22B3", "vBar": "\u2AE8", "Vbar": "\u2AEB", "vBarv": "\u2AE9", "vcy": "\u0432", "Vcy": "\u0412", "vdash": "\u22A2", "vDash": "\u22A8", "Vdash": "\u22A9", "VDash": "\u22AB", "Vdashl": "\u2AE6", "vee": "\u2228", "Vee": "\u22C1", "veebar": "\u22BB", "veeeq": "\u225A", "vellip": "\u22EE", "verbar": "|", "Verbar": "\u2016", "vert": "|", "Vert": "\u2016", "VerticalBar": "\u2223", "VerticalLine": "|", "VerticalSeparator": "\u2758", "VerticalTilde": "\u2240", "VeryThinSpace": "\u200A", "vfr": "\u{1D533}", "Vfr": "\u{1D519}", "vltri": "\u22B2", "vnsub": "\u2282\u20D2", "vnsup": "\u2283\u20D2", "vopf": "\u{1D567}", "Vopf": "\u{1D54D}", "vprop": "\u221D", "vrtri": "\u22B3", "vscr": "\u{1D4CB}", "Vscr": "\u{1D4B1}", "vsubne": "\u228A\uFE00", "vsubnE": "\u2ACB\uFE00", "vsupne": "\u228B\uFE00", "vsupnE": "\u2ACC\uFE00", "Vvdash": "\u22AA", "vzigzag": "\u299A", "wcirc": "\u0175", "Wcirc": "\u0174", "wedbar": "\u2A5F", "wedge": "\u2227", "Wedge": "\u22C0", "wedgeq": "\u2259", "weierp": "\u2118", "wfr": "\u{1D534}", "Wfr": "\u{1D51A}", "wopf": "\u{1D568}", "Wopf": "\u{1D54E}", "wp": "\u2118", "wr": "\u2240", "wreath": "\u2240", "wscr": "\u{1D4CC}", "Wscr": "\u{1D4B2}", "xcap": "\u22C2", "xcirc": "\u25EF", "xcup": "\u22C3", "xdtri": "\u25BD", "xfr": "\u{1D535}", "Xfr": "\u{1D51B}", "xharr": "\u27F7", "xhArr": "\u27FA", "xi": "\u03BE", "Xi": "\u039E", "xlarr": "\u27F5", "xlArr": "\u27F8", "xmap": "\u27FC", "xnis": "\u22FB", "xodot": "\u2A00", "xopf": "\u{1D569}", "Xopf": "\u{1D54F}", "xoplus": "\u2A01", "xotime": "\u2A02", "xrarr": "\u27F6", "xrArr": "\u27F9", "xscr": "\u{1D4CD}", "Xscr": "\u{1D4B3}", "xsqcup": "\u2A06", "xuplus": "\u2A04", "xutri": "\u25B3", "xvee": "\u22C1", "xwedge": "\u22C0", "yacute": "\xFD", "Yacute": "\xDD", "yacy": "\u044F", "YAcy": "\u042F", "ycirc": "\u0177", "Ycirc": "\u0176", "ycy": "\u044B", "Ycy": "\u042B", "yen": "\xA5", "yfr": "\u{1D536}", "Yfr": "\u{1D51C}", "yicy": "\u0457", "YIcy": "\u0407", "yopf": "\u{1D56A}", "Yopf": "\u{1D550}", "yscr": "\u{1D4CE}", "Yscr": "\u{1D4B4}", "yucy": "\u044E", "YUcy": "\u042E", "yuml": "\xFF", "Yuml": "\u0178", "zacute": "\u017A", "Zacute": "\u0179", "zcaron": "\u017E", "Zcaron": "\u017D", "zcy": "\u0437", "Zcy": "\u0417", "zdot": "\u017C", "Zdot": "\u017B", "zeetrf": "\u2128", "ZeroWidthSpace": "\u200B", "zeta": "\u03B6", "Zeta": "\u0396", "zfr": "\u{1D537}", "Zfr": "\u2128", "zhcy": "\u0436", "ZHcy": "\u0416", "zigrarr": "\u21DD", "zopf": "\u{1D56B}", "Zopf": "\u2124", "zscr": "\u{1D4CF}", "Zscr": "\u{1D4B5}", "zwj": "\u200D", "zwnj": "\u200C" };
      var decodeMapLegacy = { "aacute": "\xE1", "Aacute": "\xC1", "acirc": "\xE2", "Acirc": "\xC2", "acute": "\xB4", "aelig": "\xE6", "AElig": "\xC6", "agrave": "\xE0", "Agrave": "\xC0", "amp": "&", "AMP": "&", "aring": "\xE5", "Aring": "\xC5", "atilde": "\xE3", "Atilde": "\xC3", "auml": "\xE4", "Auml": "\xC4", "brvbar": "\xA6", "ccedil": "\xE7", "Ccedil": "\xC7", "cedil": "\xB8", "cent": "\xA2", "copy": "\xA9", "COPY": "\xA9", "curren": "\xA4", "deg": "\xB0", "divide": "\xF7", "eacute": "\xE9", "Eacute": "\xC9", "ecirc": "\xEA", "Ecirc": "\xCA", "egrave": "\xE8", "Egrave": "\xC8", "eth": "\xF0", "ETH": "\xD0", "euml": "\xEB", "Euml": "\xCB", "frac12": "\xBD", "frac14": "\xBC", "frac34": "\xBE", "gt": ">", "GT": ">", "iacute": "\xED", "Iacute": "\xCD", "icirc": "\xEE", "Icirc": "\xCE", "iexcl": "\xA1", "igrave": "\xEC", "Igrave": "\xCC", "iquest": "\xBF", "iuml": "\xEF", "Iuml": "\xCF", "laquo": "\xAB", "lt": "<", "LT": "<", "macr": "\xAF", "micro": "\xB5", "middot": "\xB7", "nbsp": "\xA0", "not": "\xAC", "ntilde": "\xF1", "Ntilde": "\xD1", "oacute": "\xF3", "Oacute": "\xD3", "ocirc": "\xF4", "Ocirc": "\xD4", "ograve": "\xF2", "Ograve": "\xD2", "ordf": "\xAA", "ordm": "\xBA", "oslash": "\xF8", "Oslash": "\xD8", "otilde": "\xF5", "Otilde": "\xD5", "ouml": "\xF6", "Ouml": "\xD6", "para": "\xB6", "plusmn": "\xB1", "pound": "\xA3", "quot": '"', "QUOT": '"', "raquo": "\xBB", "reg": "\xAE", "REG": "\xAE", "sect": "\xA7", "shy": "\xAD", "sup1": "\xB9", "sup2": "\xB2", "sup3": "\xB3", "szlig": "\xDF", "thorn": "\xFE", "THORN": "\xDE", "times": "\xD7", "uacute": "\xFA", "Uacute": "\xDA", "ucirc": "\xFB", "Ucirc": "\xDB", "ugrave": "\xF9", "Ugrave": "\xD9", "uml": "\xA8", "uuml": "\xFC", "Uuml": "\xDC", "yacute": "\xFD", "Yacute": "\xDD", "yen": "\xA5", "yuml": "\xFF" };
      var decodeMapNumeric = { "0": "\uFFFD", "128": "\u20AC", "130": "\u201A", "131": "\u0192", "132": "\u201E", "133": "\u2026", "134": "\u2020", "135": "\u2021", "136": "\u02C6", "137": "\u2030", "138": "\u0160", "139": "\u2039", "140": "\u0152", "142": "\u017D", "145": "\u2018", "146": "\u2019", "147": "\u201C", "148": "\u201D", "149": "\u2022", "150": "\u2013", "151": "\u2014", "152": "\u02DC", "153": "\u2122", "154": "\u0161", "155": "\u203A", "156": "\u0153", "158": "\u017E", "159": "\u0178" };
      var invalidReferenceCodePoints = [1, 2, 3, 4, 5, 6, 7, 8, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 64976, 64977, 64978, 64979, 64980, 64981, 64982, 64983, 64984, 64985, 64986, 64987, 64988, 64989, 64990, 64991, 64992, 64993, 64994, 64995, 64996, 64997, 64998, 64999, 65e3, 65001, 65002, 65003, 65004, 65005, 65006, 65007, 65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678, 327679, 393214, 393215, 458750, 458751, 524286, 524287, 589822, 589823, 655358, 655359, 720894, 720895, 786430, 786431, 851966, 851967, 917502, 917503, 983038, 983039, 1048574, 1048575, 1114110, 1114111];
      var stringFromCharCode = String.fromCharCode;
      var object = {};
      var hasOwnProperty2 = object.hasOwnProperty;
      var has = function(object2, propertyName) {
        return hasOwnProperty2.call(object2, propertyName);
      };
      var contains = function(array, value) {
        var index = -1;
        var length = array.length;
        while (++index < length) {
          if (array[index] == value) {
            return true;
          }
        }
        return false;
      };
      var merge = function(options, defaults) {
        if (!options) {
          return defaults;
        }
        var result = {};
        var key2;
        for (key2 in defaults) {
          result[key2] = has(options, key2) ? options[key2] : defaults[key2];
        }
        return result;
      };
      var codePointToSymbol = function(codePoint, strict) {
        var output = "";
        if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
          if (strict) {
            parseError("character reference outside the permissible Unicode range");
          }
          return "\uFFFD";
        }
        if (has(decodeMapNumeric, codePoint)) {
          if (strict) {
            parseError("disallowed character reference");
          }
          return decodeMapNumeric[codePoint];
        }
        if (strict && contains(invalidReferenceCodePoints, codePoint)) {
          parseError("disallowed character reference");
        }
        if (codePoint > 65535) {
          codePoint -= 65536;
          output += stringFromCharCode(codePoint >>> 10 & 1023 | 55296);
          codePoint = 56320 | codePoint & 1023;
        }
        output += stringFromCharCode(codePoint);
        return output;
      };
      var hexEscape = function(codePoint) {
        return "&#x" + codePoint.toString(16).toUpperCase() + ";";
      };
      var decEscape = function(codePoint) {
        return "&#" + codePoint + ";";
      };
      var parseError = function(message) {
        throw Error("Parse error: " + message);
      };
      var encode = function(string, options) {
        options = merge(options, encode.options);
        var strict = options.strict;
        if (strict && regexInvalidRawCodePoint.test(string)) {
          parseError("forbidden code point");
        }
        var encodeEverything = options.encodeEverything;
        var useNamedReferences = options.useNamedReferences;
        var allowUnsafeSymbols = options.allowUnsafeSymbols;
        var escapeCodePoint = options.decimal ? decEscape : hexEscape;
        var escapeBmpSymbol = function(symbol) {
          return escapeCodePoint(symbol.charCodeAt(0));
        };
        if (encodeEverything) {
          string = string.replace(regexAsciiWhitelist, function(symbol) {
            if (useNamedReferences && has(encodeMap, symbol)) {
              return "&" + encodeMap[symbol] + ";";
            }
            return escapeBmpSymbol(symbol);
          });
          if (useNamedReferences) {
            string = string.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;").replace(/&#x66;&#x6A;/g, "&fjlig;");
          }
          if (useNamedReferences) {
            string = string.replace(regexEncodeNonAscii, function(string2) {
              return "&" + encodeMap[string2] + ";";
            });
          }
        } else if (useNamedReferences) {
          if (!allowUnsafeSymbols) {
            string = string.replace(regexEscape, function(string2) {
              return "&" + encodeMap[string2] + ";";
            });
          }
          string = string.replace(/&gt;\u20D2/g, "&nvgt;").replace(/&lt;\u20D2/g, "&nvlt;");
          string = string.replace(regexEncodeNonAscii, function(string2) {
            return "&" + encodeMap[string2] + ";";
          });
        } else if (!allowUnsafeSymbols) {
          string = string.replace(regexEscape, escapeBmpSymbol);
        }
        return string.replace(regexAstralSymbols, function($0) {
          var high = $0.charCodeAt(0);
          var low = $0.charCodeAt(1);
          var codePoint = (high - 55296) * 1024 + low - 56320 + 65536;
          return escapeCodePoint(codePoint);
        }).replace(regexBmpWhitelist, escapeBmpSymbol);
      };
      encode.options = {
        "allowUnsafeSymbols": false,
        "encodeEverything": false,
        "strict": false,
        "useNamedReferences": false,
        "decimal": false
      };
      var decode = function(html, options) {
        options = merge(options, decode.options);
        var strict = options.strict;
        if (strict && regexInvalidEntity.test(html)) {
          parseError("malformed character reference");
        }
        return html.replace(regexDecode, function($0, $1, $2, $3, $4, $5, $6, $7, $8) {
          var codePoint;
          var semicolon;
          var decDigits;
          var hexDigits;
          var reference;
          var next;
          if ($1) {
            reference = $1;
            return decodeMap[reference];
          }
          if ($2) {
            reference = $2;
            next = $3;
            if (next && options.isAttributeValue) {
              if (strict && next == "=") {
                parseError("`&` did not start a character reference");
              }
              return $0;
            } else {
              if (strict) {
                parseError(
                  "named character reference was not terminated by a semicolon"
                );
              }
              return decodeMapLegacy[reference] + (next || "");
            }
          }
          if ($4) {
            decDigits = $4;
            semicolon = $5;
            if (strict && !semicolon) {
              parseError("character reference was not terminated by a semicolon");
            }
            codePoint = parseInt(decDigits, 10);
            return codePointToSymbol(codePoint, strict);
          }
          if ($6) {
            hexDigits = $6;
            semicolon = $7;
            if (strict && !semicolon) {
              parseError("character reference was not terminated by a semicolon");
            }
            codePoint = parseInt(hexDigits, 16);
            return codePointToSymbol(codePoint, strict);
          }
          if (strict) {
            parseError(
              "named character reference was not terminated by a semicolon"
            );
          }
          return $0;
        });
      };
      decode.options = {
        "isAttributeValue": false,
        "strict": false
      };
      var escape = function(string) {
        return string.replace(regexEscape, function($0) {
          return escapeMap[$0];
        });
      };
      var he = {
        "version": "1.2.0",
        "encode": encode,
        "decode": decode,
        "escape": escape,
        "unescape": decode
      };
      if (typeof define == "function" && typeof define.amd == "object" && define.amd) {
        define(function() {
          return he;
        });
      } else if (freeExports && !freeExports.nodeType) {
        if (freeModule) {
          freeModule.exports = he;
        } else {
          for (var key in he) {
            has(he, key) && (freeExports[key] = he[key]);
          }
        }
      } else {
        root.he = he;
      }
    })(exports2);
  }
});

// node_modules/node-html-parser/dist/nodes/node.js
var require_node = __commonJS({
  "node_modules/node-html-parser/dist/nodes/node.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var he_1 = require_he();
    var Node = (
      /** @class */
      function() {
        function Node2(parentNode, range) {
          if (parentNode === void 0) {
            parentNode = null;
          }
          this.parentNode = parentNode;
          this.childNodes = [];
          Object.defineProperty(this, "range", {
            enumerable: false,
            writable: true,
            configurable: true,
            value: range !== null && range !== void 0 ? range : [-1, -1]
          });
        }
        Node2.prototype.remove = function() {
          var _this = this;
          if (this.parentNode) {
            var children = this.parentNode.childNodes;
            this.parentNode.childNodes = children.filter(function(child) {
              return _this !== child;
            });
            this.parentNode = null;
          }
          return this;
        };
        Object.defineProperty(Node2.prototype, "innerText", {
          get: function() {
            return this.rawText;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Node2.prototype, "textContent", {
          get: function() {
            return (0, he_1.decode)(this.rawText);
          },
          set: function(val) {
            this.rawText = (0, he_1.encode)(val);
          },
          enumerable: false,
          configurable: true
        });
        return Node2;
      }()
    );
    exports2.default = Node;
  }
});

// node_modules/node-html-parser/dist/nodes/type.js
var require_type = __commonJS({
  "node_modules/node-html-parser/dist/nodes/type.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var NodeType;
    (function(NodeType2) {
      NodeType2[NodeType2["ELEMENT_NODE"] = 1] = "ELEMENT_NODE";
      NodeType2[NodeType2["TEXT_NODE"] = 3] = "TEXT_NODE";
      NodeType2[NodeType2["COMMENT_NODE"] = 8] = "COMMENT_NODE";
    })(NodeType || (NodeType = {}));
    exports2.default = NodeType;
  }
});

// node_modules/node-html-parser/dist/nodes/comment.js
var require_comment = __commonJS({
  "node_modules/node-html-parser/dist/nodes/comment.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var node_1 = __importDefault(require_node());
    var type_1 = __importDefault(require_type());
    var CommentNode = (
      /** @class */
      function(_super) {
        __extends(CommentNode2, _super);
        function CommentNode2(rawText, parentNode, range, rawTagName) {
          if (parentNode === void 0) {
            parentNode = null;
          }
          if (rawTagName === void 0) {
            rawTagName = "!--";
          }
          var _this = _super.call(this, parentNode, range) || this;
          _this.rawText = rawText;
          _this.rawTagName = rawTagName;
          _this.nodeType = type_1.default.COMMENT_NODE;
          return _this;
        }
        CommentNode2.prototype.clone = function() {
          return new CommentNode2(this.rawText, null, void 0, this.rawTagName);
        };
        Object.defineProperty(CommentNode2.prototype, "text", {
          /**
           * Get unescaped text value of current node and its children.
           * @return {string} text content
           */
          get: function() {
            return this.rawText;
          },
          enumerable: false,
          configurable: true
        });
        CommentNode2.prototype.toString = function() {
          return "<!--".concat(this.rawText, "-->");
        };
        return CommentNode2;
      }(node_1.default)
    );
    exports2.default = CommentNode;
  }
});

// node_modules/domelementtype/lib/index.js
var require_lib = __commonJS({
  "node_modules/domelementtype/lib/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Doctype = exports2.CDATA = exports2.Tag = exports2.Style = exports2.Script = exports2.Comment = exports2.Directive = exports2.Text = exports2.Root = exports2.isTag = exports2.ElementType = void 0;
    var ElementType;
    (function(ElementType2) {
      ElementType2["Root"] = "root";
      ElementType2["Text"] = "text";
      ElementType2["Directive"] = "directive";
      ElementType2["Comment"] = "comment";
      ElementType2["Script"] = "script";
      ElementType2["Style"] = "style";
      ElementType2["Tag"] = "tag";
      ElementType2["CDATA"] = "cdata";
      ElementType2["Doctype"] = "doctype";
    })(ElementType = exports2.ElementType || (exports2.ElementType = {}));
    function isTag(elem) {
      return elem.type === ElementType.Tag || elem.type === ElementType.Script || elem.type === ElementType.Style;
    }
    exports2.isTag = isTag;
    exports2.Root = ElementType.Root;
    exports2.Text = ElementType.Text;
    exports2.Directive = ElementType.Directive;
    exports2.Comment = ElementType.Comment;
    exports2.Script = ElementType.Script;
    exports2.Style = ElementType.Style;
    exports2.Tag = ElementType.Tag;
    exports2.CDATA = ElementType.CDATA;
    exports2.Doctype = ElementType.Doctype;
  }
});

// node_modules/domhandler/lib/node.js
var require_node2 = __commonJS({
  "node_modules/domhandler/lib/node.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __assign = exports2 && exports2.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.cloneNode = exports2.hasChildren = exports2.isDocument = exports2.isDirective = exports2.isComment = exports2.isText = exports2.isCDATA = exports2.isTag = exports2.Element = exports2.Document = exports2.CDATA = exports2.NodeWithChildren = exports2.ProcessingInstruction = exports2.Comment = exports2.Text = exports2.DataNode = exports2.Node = void 0;
    var domelementtype_1 = require_lib();
    var Node = (
      /** @class */
      function() {
        function Node2() {
          this.parent = null;
          this.prev = null;
          this.next = null;
          this.startIndex = null;
          this.endIndex = null;
        }
        Object.defineProperty(Node2.prototype, "parentNode", {
          // Read-write aliases for properties
          /**
           * Same as {@link parent}.
           * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
           */
          get: function() {
            return this.parent;
          },
          set: function(parent) {
            this.parent = parent;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Node2.prototype, "previousSibling", {
          /**
           * Same as {@link prev}.
           * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
           */
          get: function() {
            return this.prev;
          },
          set: function(prev) {
            this.prev = prev;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Node2.prototype, "nextSibling", {
          /**
           * Same as {@link next}.
           * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
           */
          get: function() {
            return this.next;
          },
          set: function(next) {
            this.next = next;
          },
          enumerable: false,
          configurable: true
        });
        Node2.prototype.cloneNode = function(recursive) {
          if (recursive === void 0) {
            recursive = false;
          }
          return cloneNode(this, recursive);
        };
        return Node2;
      }()
    );
    exports2.Node = Node;
    var DataNode = (
      /** @class */
      function(_super) {
        __extends(DataNode2, _super);
        function DataNode2(data) {
          var _this = _super.call(this) || this;
          _this.data = data;
          return _this;
        }
        Object.defineProperty(DataNode2.prototype, "nodeValue", {
          /**
           * Same as {@link data}.
           * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
           */
          get: function() {
            return this.data;
          },
          set: function(data) {
            this.data = data;
          },
          enumerable: false,
          configurable: true
        });
        return DataNode2;
      }(Node)
    );
    exports2.DataNode = DataNode;
    var Text = (
      /** @class */
      function(_super) {
        __extends(Text2, _super);
        function Text2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.type = domelementtype_1.ElementType.Text;
          return _this;
        }
        Object.defineProperty(Text2.prototype, "nodeType", {
          get: function() {
            return 3;
          },
          enumerable: false,
          configurable: true
        });
        return Text2;
      }(DataNode)
    );
    exports2.Text = Text;
    var Comment = (
      /** @class */
      function(_super) {
        __extends(Comment2, _super);
        function Comment2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.type = domelementtype_1.ElementType.Comment;
          return _this;
        }
        Object.defineProperty(Comment2.prototype, "nodeType", {
          get: function() {
            return 8;
          },
          enumerable: false,
          configurable: true
        });
        return Comment2;
      }(DataNode)
    );
    exports2.Comment = Comment;
    var ProcessingInstruction = (
      /** @class */
      function(_super) {
        __extends(ProcessingInstruction2, _super);
        function ProcessingInstruction2(name, data) {
          var _this = _super.call(this, data) || this;
          _this.name = name;
          _this.type = domelementtype_1.ElementType.Directive;
          return _this;
        }
        Object.defineProperty(ProcessingInstruction2.prototype, "nodeType", {
          get: function() {
            return 1;
          },
          enumerable: false,
          configurable: true
        });
        return ProcessingInstruction2;
      }(DataNode)
    );
    exports2.ProcessingInstruction = ProcessingInstruction;
    var NodeWithChildren = (
      /** @class */
      function(_super) {
        __extends(NodeWithChildren2, _super);
        function NodeWithChildren2(children) {
          var _this = _super.call(this) || this;
          _this.children = children;
          return _this;
        }
        Object.defineProperty(NodeWithChildren2.prototype, "firstChild", {
          // Aliases
          /** First child of the node. */
          get: function() {
            var _a;
            return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(NodeWithChildren2.prototype, "lastChild", {
          /** Last child of the node. */
          get: function() {
            return this.children.length > 0 ? this.children[this.children.length - 1] : null;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(NodeWithChildren2.prototype, "childNodes", {
          /**
           * Same as {@link children}.
           * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
           */
          get: function() {
            return this.children;
          },
          set: function(children) {
            this.children = children;
          },
          enumerable: false,
          configurable: true
        });
        return NodeWithChildren2;
      }(Node)
    );
    exports2.NodeWithChildren = NodeWithChildren;
    var CDATA = (
      /** @class */
      function(_super) {
        __extends(CDATA2, _super);
        function CDATA2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.type = domelementtype_1.ElementType.CDATA;
          return _this;
        }
        Object.defineProperty(CDATA2.prototype, "nodeType", {
          get: function() {
            return 4;
          },
          enumerable: false,
          configurable: true
        });
        return CDATA2;
      }(NodeWithChildren)
    );
    exports2.CDATA = CDATA;
    var Document = (
      /** @class */
      function(_super) {
        __extends(Document2, _super);
        function Document2() {
          var _this = _super !== null && _super.apply(this, arguments) || this;
          _this.type = domelementtype_1.ElementType.Root;
          return _this;
        }
        Object.defineProperty(Document2.prototype, "nodeType", {
          get: function() {
            return 9;
          },
          enumerable: false,
          configurable: true
        });
        return Document2;
      }(NodeWithChildren)
    );
    exports2.Document = Document;
    var Element = (
      /** @class */
      function(_super) {
        __extends(Element2, _super);
        function Element2(name, attribs, children, type) {
          if (children === void 0) {
            children = [];
          }
          if (type === void 0) {
            type = name === "script" ? domelementtype_1.ElementType.Script : name === "style" ? domelementtype_1.ElementType.Style : domelementtype_1.ElementType.Tag;
          }
          var _this = _super.call(this, children) || this;
          _this.name = name;
          _this.attribs = attribs;
          _this.type = type;
          return _this;
        }
        Object.defineProperty(Element2.prototype, "nodeType", {
          get: function() {
            return 1;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Element2.prototype, "tagName", {
          // DOM Level 1 aliases
          /**
           * Same as {@link name}.
           * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
           */
          get: function() {
            return this.name;
          },
          set: function(name) {
            this.name = name;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Element2.prototype, "attributes", {
          get: function() {
            var _this = this;
            return Object.keys(this.attribs).map(function(name) {
              var _a, _b;
              return {
                name,
                value: _this.attribs[name],
                namespace: (_a = _this["x-attribsNamespace"]) === null || _a === void 0 ? void 0 : _a[name],
                prefix: (_b = _this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name]
              };
            });
          },
          enumerable: false,
          configurable: true
        });
        return Element2;
      }(NodeWithChildren)
    );
    exports2.Element = Element;
    function isTag(node) {
      return (0, domelementtype_1.isTag)(node);
    }
    exports2.isTag = isTag;
    function isCDATA(node) {
      return node.type === domelementtype_1.ElementType.CDATA;
    }
    exports2.isCDATA = isCDATA;
    function isText(node) {
      return node.type === domelementtype_1.ElementType.Text;
    }
    exports2.isText = isText;
    function isComment(node) {
      return node.type === domelementtype_1.ElementType.Comment;
    }
    exports2.isComment = isComment;
    function isDirective(node) {
      return node.type === domelementtype_1.ElementType.Directive;
    }
    exports2.isDirective = isDirective;
    function isDocument(node) {
      return node.type === domelementtype_1.ElementType.Root;
    }
    exports2.isDocument = isDocument;
    function hasChildren(node) {
      return Object.prototype.hasOwnProperty.call(node, "children");
    }
    exports2.hasChildren = hasChildren;
    function cloneNode(node, recursive) {
      if (recursive === void 0) {
        recursive = false;
      }
      var result;
      if (isText(node)) {
        result = new Text(node.data);
      } else if (isComment(node)) {
        result = new Comment(node.data);
      } else if (isTag(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_1 = new Element(node.name, __assign({}, node.attribs), children);
        children.forEach(function(child) {
          return child.parent = clone_1;
        });
        if (node.namespace != null) {
          clone_1.namespace = node.namespace;
        }
        if (node["x-attribsNamespace"]) {
          clone_1["x-attribsNamespace"] = __assign({}, node["x-attribsNamespace"]);
        }
        if (node["x-attribsPrefix"]) {
          clone_1["x-attribsPrefix"] = __assign({}, node["x-attribsPrefix"]);
        }
        result = clone_1;
      } else if (isCDATA(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_2 = new CDATA(children);
        children.forEach(function(child) {
          return child.parent = clone_2;
        });
        result = clone_2;
      } else if (isDocument(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_3 = new Document(children);
        children.forEach(function(child) {
          return child.parent = clone_3;
        });
        if (node["x-mode"]) {
          clone_3["x-mode"] = node["x-mode"];
        }
        result = clone_3;
      } else if (isDirective(node)) {
        var instruction = new ProcessingInstruction(node.name, node.data);
        if (node["x-name"] != null) {
          instruction["x-name"] = node["x-name"];
          instruction["x-publicId"] = node["x-publicId"];
          instruction["x-systemId"] = node["x-systemId"];
        }
        result = instruction;
      } else {
        throw new Error("Not implemented yet: ".concat(node.type));
      }
      result.startIndex = node.startIndex;
      result.endIndex = node.endIndex;
      if (node.sourceCodeLocation != null) {
        result.sourceCodeLocation = node.sourceCodeLocation;
      }
      return result;
    }
    exports2.cloneNode = cloneNode;
    function cloneChildren(childs) {
      var children = childs.map(function(child) {
        return cloneNode(child, true);
      });
      for (var i = 1; i < children.length; i++) {
        children[i].prev = children[i - 1];
        children[i - 1].next = children[i];
      }
      return children;
    }
  }
});

// node_modules/domhandler/lib/index.js
var require_lib2 = __commonJS({
  "node_modules/domhandler/lib/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
          __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DomHandler = void 0;
    var domelementtype_1 = require_lib();
    var node_js_1 = require_node2();
    __exportStar(require_node2(), exports2);
    var defaultOpts = {
      withStartIndices: false,
      withEndIndices: false,
      xmlMode: false
    };
    var DomHandler = (
      /** @class */
      function() {
        function DomHandler2(callback, options, elementCB) {
          this.dom = [];
          this.root = new node_js_1.Document(this.dom);
          this.done = false;
          this.tagStack = [this.root];
          this.lastNode = null;
          this.parser = null;
          if (typeof options === "function") {
            elementCB = options;
            options = defaultOpts;
          }
          if (typeof callback === "object") {
            options = callback;
            callback = void 0;
          }
          this.callback = callback !== null && callback !== void 0 ? callback : null;
          this.options = options !== null && options !== void 0 ? options : defaultOpts;
          this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
        }
        DomHandler2.prototype.onparserinit = function(parser) {
          this.parser = parser;
        };
        DomHandler2.prototype.onreset = function() {
          this.dom = [];
          this.root = new node_js_1.Document(this.dom);
          this.done = false;
          this.tagStack = [this.root];
          this.lastNode = null;
          this.parser = null;
        };
        DomHandler2.prototype.onend = function() {
          if (this.done)
            return;
          this.done = true;
          this.parser = null;
          this.handleCallback(null);
        };
        DomHandler2.prototype.onerror = function(error) {
          this.handleCallback(error);
        };
        DomHandler2.prototype.onclosetag = function() {
          this.lastNode = null;
          var elem = this.tagStack.pop();
          if (this.options.withEndIndices) {
            elem.endIndex = this.parser.endIndex;
          }
          if (this.elementCB)
            this.elementCB(elem);
        };
        DomHandler2.prototype.onopentag = function(name, attribs) {
          var type = this.options.xmlMode ? domelementtype_1.ElementType.Tag : void 0;
          var element = new node_js_1.Element(name, attribs, void 0, type);
          this.addNode(element);
          this.tagStack.push(element);
        };
        DomHandler2.prototype.ontext = function(data) {
          var lastNode = this.lastNode;
          if (lastNode && lastNode.type === domelementtype_1.ElementType.Text) {
            lastNode.data += data;
            if (this.options.withEndIndices) {
              lastNode.endIndex = this.parser.endIndex;
            }
          } else {
            var node = new node_js_1.Text(data);
            this.addNode(node);
            this.lastNode = node;
          }
        };
        DomHandler2.prototype.oncomment = function(data) {
          if (this.lastNode && this.lastNode.type === domelementtype_1.ElementType.Comment) {
            this.lastNode.data += data;
            return;
          }
          var node = new node_js_1.Comment(data);
          this.addNode(node);
          this.lastNode = node;
        };
        DomHandler2.prototype.oncommentend = function() {
          this.lastNode = null;
        };
        DomHandler2.prototype.oncdatastart = function() {
          var text = new node_js_1.Text("");
          var node = new node_js_1.CDATA([text]);
          this.addNode(node);
          text.parent = node;
          this.lastNode = text;
        };
        DomHandler2.prototype.oncdataend = function() {
          this.lastNode = null;
        };
        DomHandler2.prototype.onprocessinginstruction = function(name, data) {
          var node = new node_js_1.ProcessingInstruction(name, data);
          this.addNode(node);
        };
        DomHandler2.prototype.handleCallback = function(error) {
          if (typeof this.callback === "function") {
            this.callback(error, this.dom);
          } else if (error) {
            throw error;
          }
        };
        DomHandler2.prototype.addNode = function(node) {
          var parent = this.tagStack[this.tagStack.length - 1];
          var previousSibling = parent.children[parent.children.length - 1];
          if (this.options.withStartIndices) {
            node.startIndex = this.parser.startIndex;
          }
          if (this.options.withEndIndices) {
            node.endIndex = this.parser.endIndex;
          }
          parent.children.push(node);
          if (previousSibling) {
            node.prev = previousSibling;
            previousSibling.next = node;
          }
          node.parent = parent;
          this.lastNode = null;
        };
        return DomHandler2;
      }()
    );
    exports2.DomHandler = DomHandler;
    exports2.default = DomHandler;
  }
});

// node_modules/entities/lib/generated/decode-data-html.js
var require_decode_data_html = __commonJS({
  "node_modules/entities/lib/generated/decode-data-html.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.default = new Uint16Array(
      // prettier-ignore
      '\u1D41<\xD5\u0131\u028A\u049D\u057B\u05D0\u0675\u06DE\u07A2\u07D6\u080F\u0A4A\u0A91\u0DA1\u0E6D\u0F09\u0F26\u10CA\u1228\u12E1\u1415\u149D\u14C3\u14DF\u1525\0\0\0\0\0\0\u156B\u16CD\u198D\u1C12\u1DDD\u1F7E\u2060\u21B0\u228D\u23C0\u23FB\u2442\u2824\u2912\u2D08\u2E48\u2FCE\u3016\u32BA\u3639\u37AC\u38FE\u3A28\u3A71\u3AE0\u3B2E\u0800EMabcfglmnoprstu\\bfms\x7F\x84\x8B\x90\x95\x98\xA6\xB3\xB9\xC8\xCFlig\u803B\xC6\u40C6P\u803B&\u4026cute\u803B\xC1\u40C1reve;\u4102\u0100iyx}rc\u803B\xC2\u40C2;\u4410r;\uC000\u{1D504}rave\u803B\xC0\u40C0pha;\u4391acr;\u4100d;\u6A53\u0100gp\x9D\xA1on;\u4104f;\uC000\u{1D538}plyFunction;\u6061ing\u803B\xC5\u40C5\u0100cs\xBE\xC3r;\uC000\u{1D49C}ign;\u6254ilde\u803B\xC3\u40C3ml\u803B\xC4\u40C4\u0400aceforsu\xE5\xFB\xFE\u0117\u011C\u0122\u0127\u012A\u0100cr\xEA\xF2kslash;\u6216\u0176\xF6\xF8;\u6AE7ed;\u6306y;\u4411\u0180crt\u0105\u010B\u0114ause;\u6235noullis;\u612Ca;\u4392r;\uC000\u{1D505}pf;\uC000\u{1D539}eve;\u42D8c\xF2\u0113mpeq;\u624E\u0700HOacdefhilorsu\u014D\u0151\u0156\u0180\u019E\u01A2\u01B5\u01B7\u01BA\u01DC\u0215\u0273\u0278\u027Ecy;\u4427PY\u803B\xA9\u40A9\u0180cpy\u015D\u0162\u017Aute;\u4106\u0100;i\u0167\u0168\u62D2talDifferentialD;\u6145leys;\u612D\u0200aeio\u0189\u018E\u0194\u0198ron;\u410Cdil\u803B\xC7\u40C7rc;\u4108nint;\u6230ot;\u410A\u0100dn\u01A7\u01ADilla;\u40B8terDot;\u40B7\xF2\u017Fi;\u43A7rcle\u0200DMPT\u01C7\u01CB\u01D1\u01D6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01E2\u01F8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020FoubleQuote;\u601Duote;\u6019\u0200lnpu\u021E\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6A74\u0180git\u022F\u0236\u023Aruent;\u6261nt;\u622FourIntegral;\u622E\u0100fr\u024C\u024E;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6A2Fcr;\uC000\u{1D49E}p\u0100;C\u0284\u0285\u62D3ap;\u624D\u0580DJSZacefios\u02A0\u02AC\u02B0\u02B4\u02B8\u02CB\u02D7\u02E1\u02E6\u0333\u048D\u0100;o\u0179\u02A5trahd;\u6911cy;\u4402cy;\u4405cy;\u440F\u0180grs\u02BF\u02C4\u02C7ger;\u6021r;\u61A1hv;\u6AE4\u0100ay\u02D0\u02D5ron;\u410E;\u4414l\u0100;t\u02DD\u02DE\u6207a;\u4394r;\uC000\u{1D507}\u0100af\u02EB\u0327\u0100cm\u02F0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031Ccute;\u40B4o\u0174\u030B\u030D;\u42D9bleAcute;\u42DDrave;\u4060ilde;\u42DCond;\u62C4ferentialD;\u6146\u0470\u033D\0\0\0\u0342\u0354\0\u0405f;\uC000\u{1D53B}\u0180;DE\u0348\u0349\u034D\u40A8ot;\u60DCqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03CF\u03E2\u03F8ontourIntegra\xEC\u0239o\u0274\u0379\0\0\u037B\xBB\u0349nArrow;\u61D3\u0100eo\u0387\u03A4ft\u0180ART\u0390\u0396\u03A1rrow;\u61D0ightArrow;\u61D4e\xE5\u02CAng\u0100LR\u03AB\u03C4eft\u0100AR\u03B3\u03B9rrow;\u67F8ightArrow;\u67FAightArrow;\u67F9ight\u0100AT\u03D8\u03DErrow;\u61D2ee;\u62A8p\u0241\u03E9\0\0\u03EFrrow;\u61D1ownArrow;\u61D5erticalBar;\u6225n\u0300ABLRTa\u0412\u042A\u0430\u045E\u047F\u037Crrow\u0180;BU\u041D\u041E\u0422\u6193ar;\u6913pArrow;\u61F5reve;\u4311eft\u02D2\u043A\0\u0446\0\u0450ightVector;\u6950eeVector;\u695Eector\u0100;B\u0459\u045A\u61BDar;\u6956ight\u01D4\u0467\0\u0471eeVector;\u695Fector\u0100;B\u047A\u047B\u61C1ar;\u6957ee\u0100;A\u0486\u0487\u62A4rrow;\u61A7\u0100ct\u0492\u0497r;\uC000\u{1D49F}rok;\u4110\u0800NTacdfglmopqstux\u04BD\u04C0\u04C4\u04CB\u04DE\u04E2\u04E7\u04EE\u04F5\u0521\u052F\u0536\u0552\u055D\u0560\u0565G;\u414AH\u803B\xD0\u40D0cute\u803B\xC9\u40C9\u0180aiy\u04D2\u04D7\u04DCron;\u411Arc\u803B\xCA\u40CA;\u442Dot;\u4116r;\uC000\u{1D508}rave\u803B\xC8\u40C8ement;\u6208\u0100ap\u04FA\u04FEcr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65FBerySmallSquare;\u65AB\u0100gp\u0526\u052Aon;\u4118f;\uC000\u{1D53C}silon;\u4395u\u0100ai\u053C\u0549l\u0100;T\u0542\u0543\u6A75ilde;\u6242librium;\u61CC\u0100ci\u0557\u055Ar;\u6130m;\u6A73a;\u4397ml\u803B\xCB\u40CB\u0100ip\u056A\u056Fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058D\u05B2\u05CCy;\u4424r;\uC000\u{1D509}lled\u0253\u0597\0\0\u05A3mallSquare;\u65FCerySmallSquare;\u65AA\u0370\u05BA\0\u05BF\0\0\u05C4f;\uC000\u{1D53D}All;\u6200riertrf;\u6131c\xF2\u05CB\u0600JTabcdfgorst\u05E8\u05EC\u05EF\u05FA\u0600\u0612\u0616\u061B\u061D\u0623\u066C\u0672cy;\u4403\u803B>\u403Emma\u0100;d\u05F7\u05F8\u4393;\u43DCreve;\u411E\u0180eiy\u0607\u060C\u0610dil;\u4122rc;\u411C;\u4413ot;\u4120r;\uC000\u{1D50A};\u62D9pf;\uC000\u{1D53E}eater\u0300EFGLST\u0635\u0644\u064E\u0656\u065B\u0666qual\u0100;L\u063E\u063F\u6265ess;\u62DBullEqual;\u6267reater;\u6AA2ess;\u6277lantEqual;\u6A7Eilde;\u6273cr;\uC000\u{1D4A2};\u626B\u0400Aacfiosu\u0685\u068B\u0696\u069B\u069E\u06AA\u06BE\u06CARDcy;\u442A\u0100ct\u0690\u0694ek;\u42C7;\u405Eirc;\u4124r;\u610ClbertSpace;\u610B\u01F0\u06AF\0\u06B2f;\u610DizontalLine;\u6500\u0100ct\u06C3\u06C5\xF2\u06A9rok;\u4126mp\u0144\u06D0\u06D8ownHum\xF0\u012Fqual;\u624F\u0700EJOacdfgmnostu\u06FA\u06FE\u0703\u0707\u070E\u071A\u071E\u0721\u0728\u0744\u0778\u078B\u078F\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803B\xCD\u40CD\u0100iy\u0713\u0718rc\u803B\xCE\u40CE;\u4418ot;\u4130r;\u6111rave\u803B\xCC\u40CC\u0180;ap\u0720\u072F\u073F\u0100cg\u0734\u0737r;\u412AinaryI;\u6148lie\xF3\u03DD\u01F4\u0749\0\u0762\u0100;e\u074D\u074E\u622C\u0100gr\u0753\u0758ral;\u622Bsection;\u62C2isible\u0100CT\u076C\u0772omma;\u6063imes;\u6062\u0180gpt\u077F\u0783\u0788on;\u412Ef;\uC000\u{1D540}a;\u4399cr;\u6110ilde;\u4128\u01EB\u079A\0\u079Ecy;\u4406l\u803B\xCF\u40CF\u0280cfosu\u07AC\u07B7\u07BC\u07C2\u07D0\u0100iy\u07B1\u07B5rc;\u4134;\u4419r;\uC000\u{1D50D}pf;\uC000\u{1D541}\u01E3\u07C7\0\u07CCr;\uC000\u{1D4A5}rcy;\u4408kcy;\u4404\u0380HJacfos\u07E4\u07E8\u07EC\u07F1\u07FD\u0802\u0808cy;\u4425cy;\u440Cppa;\u439A\u0100ey\u07F6\u07FBdil;\u4136;\u441Ar;\uC000\u{1D50E}pf;\uC000\u{1D542}cr;\uC000\u{1D4A6}\u0580JTaceflmost\u0825\u0829\u082C\u0850\u0863\u09B3\u09B8\u09C7\u09CD\u0A37\u0A47cy;\u4409\u803B<\u403C\u0280cmnpr\u0837\u083C\u0841\u0844\u084Dute;\u4139bda;\u439Bg;\u67EAlacetrf;\u6112r;\u619E\u0180aey\u0857\u085C\u0861ron;\u413Ddil;\u413B;\u441B\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087E\u08A9\u08B1\u08E0\u08E6\u08FC\u092F\u095B\u0390\u096A\u0100nr\u0883\u088FgleBracket;\u67E8row\u0180;BR\u0899\u089A\u089E\u6190ar;\u61E4ightArrow;\u61C6eiling;\u6308o\u01F5\u08B7\0\u08C3bleBracket;\u67E6n\u01D4\u08C8\0\u08D2eeVector;\u6961ector\u0100;B\u08DB\u08DC\u61C3ar;\u6959loor;\u630Aight\u0100AV\u08EF\u08F5rrow;\u6194ector;\u694E\u0100er\u0901\u0917e\u0180;AV\u0909\u090A\u0910\u62A3rrow;\u61A4ector;\u695Aiangle\u0180;BE\u0924\u0925\u0929\u62B2ar;\u69CFqual;\u62B4p\u0180DTV\u0937\u0942\u094CownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61BFar;\u6958ector\u0100;B\u0965\u0966\u61BCar;\u6952ight\xE1\u039Cs\u0300EFGLST\u097E\u098B\u0995\u099D\u09A2\u09ADqualGreater;\u62DAullEqual;\u6266reater;\u6276ess;\u6AA1lantEqual;\u6A7Dilde;\u6272r;\uC000\u{1D50F}\u0100;e\u09BD\u09BE\u62D8ftarrow;\u61DAidot;\u413F\u0180npw\u09D4\u0A16\u0A1Bg\u0200LRlr\u09DE\u09F7\u0A02\u0A10eft\u0100AR\u09E6\u09ECrrow;\u67F5ightArrow;\u67F7ightArrow;\u67F6eft\u0100ar\u03B3\u0A0Aight\xE1\u03BFight\xE1\u03CAf;\uC000\u{1D543}er\u0100LR\u0A22\u0A2CeftArrow;\u6199ightArrow;\u6198\u0180cht\u0A3E\u0A40\u0A42\xF2\u084C;\u61B0rok;\u4141;\u626A\u0400acefiosu\u0A5A\u0A5D\u0A60\u0A77\u0A7C\u0A85\u0A8B\u0A8Ep;\u6905y;\u441C\u0100dl\u0A65\u0A6FiumSpace;\u605Flintrf;\u6133r;\uC000\u{1D510}nusPlus;\u6213pf;\uC000\u{1D544}c\xF2\u0A76;\u439C\u0480Jacefostu\u0AA3\u0AA7\u0AAD\u0AC0\u0B14\u0B19\u0D91\u0D97\u0D9Ecy;\u440Acute;\u4143\u0180aey\u0AB4\u0AB9\u0ABEron;\u4147dil;\u4145;\u441D\u0180gsw\u0AC7\u0AF0\u0B0Eative\u0180MTV\u0AD3\u0ADF\u0AE8ediumSpace;\u600Bhi\u0100cn\u0AE6\u0AD8\xEB\u0AD9eryThi\xEE\u0AD9ted\u0100GL\u0AF8\u0B06reaterGreate\xF2\u0673essLes\xF3\u0A48Line;\u400Ar;\uC000\u{1D511}\u0200Bnpt\u0B22\u0B28\u0B37\u0B3Areak;\u6060BreakingSpace;\u40A0f;\u6115\u0680;CDEGHLNPRSTV\u0B55\u0B56\u0B6A\u0B7C\u0BA1\u0BEB\u0C04\u0C5E\u0C84\u0CA6\u0CD8\u0D61\u0D85\u6AEC\u0100ou\u0B5B\u0B64ngruent;\u6262pCap;\u626DoubleVerticalBar;\u6226\u0180lqx\u0B83\u0B8A\u0B9Bement;\u6209ual\u0100;T\u0B92\u0B93\u6260ilde;\uC000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0BB6\u0BB7\u0BBD\u0BC9\u0BD3\u0BD8\u0BE5\u626Fqual;\u6271ullEqual;\uC000\u2267\u0338reater;\uC000\u226B\u0338ess;\u6279lantEqual;\uC000\u2A7E\u0338ilde;\u6275ump\u0144\u0BF2\u0BFDownHump;\uC000\u224E\u0338qual;\uC000\u224F\u0338e\u0100fs\u0C0A\u0C27tTriangle\u0180;BE\u0C1A\u0C1B\u0C21\u62EAar;\uC000\u29CF\u0338qual;\u62ECs\u0300;EGLST\u0C35\u0C36\u0C3C\u0C44\u0C4B\u0C58\u626Equal;\u6270reater;\u6278ess;\uC000\u226A\u0338lantEqual;\uC000\u2A7D\u0338ilde;\u6274ested\u0100GL\u0C68\u0C79reaterGreater;\uC000\u2AA2\u0338essLess;\uC000\u2AA1\u0338recedes\u0180;ES\u0C92\u0C93\u0C9B\u6280qual;\uC000\u2AAF\u0338lantEqual;\u62E0\u0100ei\u0CAB\u0CB9verseElement;\u620CghtTriangle\u0180;BE\u0CCB\u0CCC\u0CD2\u62EBar;\uC000\u29D0\u0338qual;\u62ED\u0100qu\u0CDD\u0D0CuareSu\u0100bp\u0CE8\u0CF9set\u0100;E\u0CF0\u0CF3\uC000\u228F\u0338qual;\u62E2erset\u0100;E\u0D03\u0D06\uC000\u2290\u0338qual;\u62E3\u0180bcp\u0D13\u0D24\u0D4Eset\u0100;E\u0D1B\u0D1E\uC000\u2282\u20D2qual;\u6288ceeds\u0200;EST\u0D32\u0D33\u0D3B\u0D46\u6281qual;\uC000\u2AB0\u0338lantEqual;\u62E1ilde;\uC000\u227F\u0338erset\u0100;E\u0D58\u0D5B\uC000\u2283\u20D2qual;\u6289ilde\u0200;EFT\u0D6E\u0D6F\u0D75\u0D7F\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uC000\u{1D4A9}ilde\u803B\xD1\u40D1;\u439D\u0700Eacdfgmoprstuv\u0DBD\u0DC2\u0DC9\u0DD5\u0DDB\u0DE0\u0DE7\u0DFC\u0E02\u0E20\u0E22\u0E32\u0E3F\u0E44lig;\u4152cute\u803B\xD3\u40D3\u0100iy\u0DCE\u0DD3rc\u803B\xD4\u40D4;\u441Eblac;\u4150r;\uC000\u{1D512}rave\u803B\xD2\u40D2\u0180aei\u0DEE\u0DF2\u0DF6cr;\u414Cga;\u43A9cron;\u439Fpf;\uC000\u{1D546}enCurly\u0100DQ\u0E0E\u0E1AoubleQuote;\u601Cuote;\u6018;\u6A54\u0100cl\u0E27\u0E2Cr;\uC000\u{1D4AA}ash\u803B\xD8\u40D8i\u016C\u0E37\u0E3Cde\u803B\xD5\u40D5es;\u6A37ml\u803B\xD6\u40D6er\u0100BP\u0E4B\u0E60\u0100ar\u0E50\u0E53r;\u603Eac\u0100ek\u0E5A\u0E5C;\u63DEet;\u63B4arenthesis;\u63DC\u0480acfhilors\u0E7F\u0E87\u0E8A\u0E8F\u0E92\u0E94\u0E9D\u0EB0\u0EFCrtialD;\u6202y;\u441Fr;\uC000\u{1D513}i;\u43A6;\u43A0usMinus;\u40B1\u0100ip\u0EA2\u0EADncareplan\xE5\u069Df;\u6119\u0200;eio\u0EB9\u0EBA\u0EE0\u0EE4\u6ABBcedes\u0200;EST\u0EC8\u0EC9\u0ECF\u0EDA\u627Aqual;\u6AAFlantEqual;\u627Cilde;\u627Eme;\u6033\u0100dp\u0EE9\u0EEEuct;\u620Fortion\u0100;a\u0225\u0EF9l;\u621D\u0100ci\u0F01\u0F06r;\uC000\u{1D4AB};\u43A8\u0200Ufos\u0F11\u0F16\u0F1B\u0F1FOT\u803B"\u4022r;\uC000\u{1D514}pf;\u611Acr;\uC000\u{1D4AC}\u0600BEacefhiorsu\u0F3E\u0F43\u0F47\u0F60\u0F73\u0FA7\u0FAA\u0FAD\u1096\u10A9\u10B4\u10BEarr;\u6910G\u803B\xAE\u40AE\u0180cnr\u0F4E\u0F53\u0F56ute;\u4154g;\u67EBr\u0100;t\u0F5C\u0F5D\u61A0l;\u6916\u0180aey\u0F67\u0F6C\u0F71ron;\u4158dil;\u4156;\u4420\u0100;v\u0F78\u0F79\u611Cerse\u0100EU\u0F82\u0F99\u0100lq\u0F87\u0F8Eement;\u620Builibrium;\u61CBpEquilibrium;\u696Fr\xBB\u0F79o;\u43A1ght\u0400ACDFTUVa\u0FC1\u0FEB\u0FF3\u1022\u1028\u105B\u1087\u03D8\u0100nr\u0FC6\u0FD2gleBracket;\u67E9row\u0180;BL\u0FDC\u0FDD\u0FE1\u6192ar;\u61E5eftArrow;\u61C4eiling;\u6309o\u01F5\u0FF9\0\u1005bleBracket;\u67E7n\u01D4\u100A\0\u1014eeVector;\u695Dector\u0100;B\u101D\u101E\u61C2ar;\u6955loor;\u630B\u0100er\u102D\u1043e\u0180;AV\u1035\u1036\u103C\u62A2rrow;\u61A6ector;\u695Biangle\u0180;BE\u1050\u1051\u1055\u62B3ar;\u69D0qual;\u62B5p\u0180DTV\u1063\u106E\u1078ownVector;\u694FeeVector;\u695Cector\u0100;B\u1082\u1083\u61BEar;\u6954ector\u0100;B\u1091\u1092\u61C0ar;\u6953\u0100pu\u109B\u109Ef;\u611DndImplies;\u6970ightarrow;\u61DB\u0100ch\u10B9\u10BCr;\u611B;\u61B1leDelayed;\u69F4\u0680HOacfhimoqstu\u10E4\u10F1\u10F7\u10FD\u1119\u111E\u1151\u1156\u1161\u1167\u11B5\u11BB\u11BF\u0100Cc\u10E9\u10EEHcy;\u4429y;\u4428FTcy;\u442Ccute;\u415A\u0280;aeiy\u1108\u1109\u110E\u1113\u1117\u6ABCron;\u4160dil;\u415Erc;\u415C;\u4421r;\uC000\u{1D516}ort\u0200DLRU\u112A\u1134\u113E\u1149ownArrow\xBB\u041EeftArrow\xBB\u089AightArrow\xBB\u0FDDpArrow;\u6191gma;\u43A3allCircle;\u6218pf;\uC000\u{1D54A}\u0272\u116D\0\0\u1170t;\u621Aare\u0200;ISU\u117B\u117C\u1189\u11AF\u65A1ntersection;\u6293u\u0100bp\u118F\u119Eset\u0100;E\u1197\u1198\u628Fqual;\u6291erset\u0100;E\u11A8\u11A9\u6290qual;\u6292nion;\u6294cr;\uC000\u{1D4AE}ar;\u62C6\u0200bcmp\u11C8\u11DB\u1209\u120B\u0100;s\u11CD\u11CE\u62D0et\u0100;E\u11CD\u11D5qual;\u6286\u0100ch\u11E0\u1205eeds\u0200;EST\u11ED\u11EE\u11F4\u11FF\u627Bqual;\u6AB0lantEqual;\u627Dilde;\u627FTh\xE1\u0F8C;\u6211\u0180;es\u1212\u1213\u1223\u62D1rset\u0100;E\u121C\u121D\u6283qual;\u6287et\xBB\u1213\u0580HRSacfhiors\u123E\u1244\u1249\u1255\u125E\u1271\u1276\u129F\u12C2\u12C8\u12D1ORN\u803B\xDE\u40DEADE;\u6122\u0100Hc\u124E\u1252cy;\u440By;\u4426\u0100bu\u125A\u125C;\u4009;\u43A4\u0180aey\u1265\u126A\u126Fron;\u4164dil;\u4162;\u4422r;\uC000\u{1D517}\u0100ei\u127B\u1289\u01F2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128E\u1298kSpace;\uC000\u205F\u200ASpace;\u6009lde\u0200;EFT\u12AB\u12AC\u12B2\u12BC\u623Cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uC000\u{1D54B}ipleDot;\u60DB\u0100ct\u12D6\u12DBr;\uC000\u{1D4AF}rok;\u4166\u0AE1\u12F7\u130E\u131A\u1326\0\u132C\u1331\0\0\0\0\0\u1338\u133D\u1377\u1385\0\u13FF\u1404\u140A\u1410\u0100cr\u12FB\u1301ute\u803B\xDA\u40DAr\u0100;o\u1307\u1308\u619Fcir;\u6949r\u01E3\u1313\0\u1316y;\u440Eve;\u416C\u0100iy\u131E\u1323rc\u803B\xDB\u40DB;\u4423blac;\u4170r;\uC000\u{1D518}rave\u803B\xD9\u40D9acr;\u416A\u0100di\u1341\u1369er\u0100BP\u1348\u135D\u0100ar\u134D\u1350r;\u405Fac\u0100ek\u1357\u1359;\u63DFet;\u63B5arenthesis;\u63DDon\u0100;P\u1370\u1371\u62C3lus;\u628E\u0100gp\u137B\u137Fon;\u4172f;\uC000\u{1D54C}\u0400ADETadps\u1395\u13AE\u13B8\u13C4\u03E8\u13D2\u13D7\u13F3rrow\u0180;BD\u1150\u13A0\u13A4ar;\u6912ownArrow;\u61C5ownArrow;\u6195quilibrium;\u696Eee\u0100;A\u13CB\u13CC\u62A5rrow;\u61A5own\xE1\u03F3er\u0100LR\u13DE\u13E8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13F9\u13FA\u43D2on;\u43A5ing;\u416Ecr;\uC000\u{1D4B0}ilde;\u4168ml\u803B\xDC\u40DC\u0480Dbcdefosv\u1427\u142C\u1430\u1433\u143E\u1485\u148A\u1490\u1496ash;\u62ABar;\u6AEBy;\u4412ash\u0100;l\u143B\u143C\u62A9;\u6AE6\u0100er\u1443\u1445;\u62C1\u0180bty\u144C\u1450\u147Aar;\u6016\u0100;i\u144F\u1455cal\u0200BLST\u1461\u1465\u146A\u1474ar;\u6223ine;\u407Ceparator;\u6758ilde;\u6240ThinSpace;\u600Ar;\uC000\u{1D519}pf;\uC000\u{1D54D}cr;\uC000\u{1D4B1}dash;\u62AA\u0280cefos\u14A7\u14AC\u14B1\u14B6\u14BCirc;\u4174dge;\u62C0r;\uC000\u{1D51A}pf;\uC000\u{1D54E}cr;\uC000\u{1D4B2}\u0200fios\u14CB\u14D0\u14D2\u14D8r;\uC000\u{1D51B};\u439Epf;\uC000\u{1D54F}cr;\uC000\u{1D4B3}\u0480AIUacfosu\u14F1\u14F5\u14F9\u14FD\u1504\u150F\u1514\u151A\u1520cy;\u442Fcy;\u4407cy;\u442Ecute\u803B\xDD\u40DD\u0100iy\u1509\u150Drc;\u4176;\u442Br;\uC000\u{1D51C}pf;\uC000\u{1D550}cr;\uC000\u{1D4B4}ml;\u4178\u0400Hacdefos\u1535\u1539\u153F\u154B\u154F\u155D\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417D;\u4417ot;\u417B\u01F2\u1554\0\u155BoWidt\xE8\u0AD9a;\u4396r;\u6128pf;\u6124cr;\uC000\u{1D4B5}\u0BE1\u1583\u158A\u1590\0\u15B0\u15B6\u15BF\0\0\0\0\u15C6\u15DB\u15EB\u165F\u166D\0\u1695\u169B\u16B2\u16B9\0\u16BEcute\u803B\xE1\u40E1reve;\u4103\u0300;Ediuy\u159C\u159D\u15A1\u15A3\u15A8\u15AD\u623E;\uC000\u223E\u0333;\u623Frc\u803B\xE2\u40E2te\u80BB\xB4\u0306;\u4430lig\u803B\xE6\u40E6\u0100;r\xB2\u15BA;\uC000\u{1D51E}rave\u803B\xE0\u40E0\u0100ep\u15CA\u15D6\u0100fp\u15CF\u15D4sym;\u6135\xE8\u15D3ha;\u43B1\u0100ap\u15DFc\u0100cl\u15E4\u15E7r;\u4101g;\u6A3F\u0264\u15F0\0\0\u160A\u0280;adsv\u15FA\u15FB\u15FF\u1601\u1607\u6227nd;\u6A55;\u6A5Clope;\u6A58;\u6A5A\u0380;elmrsz\u1618\u1619\u161B\u161E\u163F\u164F\u1659\u6220;\u69A4e\xBB\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163A\u163C\u163E;\u69A8;\u69A9;\u69AA;\u69AB;\u69AC;\u69AD;\u69AE;\u69AFt\u0100;v\u1645\u1646\u621Fb\u0100;d\u164C\u164D\u62BE;\u699D\u0100pt\u1654\u1657h;\u6222\xBB\xB9arr;\u637C\u0100gp\u1663\u1667on;\u4105f;\uC000\u{1D552}\u0380;Eaeiop\u12C1\u167B\u167D\u1682\u1684\u1687\u168A;\u6A70cir;\u6A6F;\u624Ad;\u624Bs;\u4027rox\u0100;e\u12C1\u1692\xF1\u1683ing\u803B\xE5\u40E5\u0180cty\u16A1\u16A6\u16A8r;\uC000\u{1D4B6};\u402Amp\u0100;e\u12C1\u16AF\xF1\u0288ilde\u803B\xE3\u40E3ml\u803B\xE4\u40E4\u0100ci\u16C2\u16C8onin\xF4\u0272nt;\u6A11\u0800Nabcdefiklnoprsu\u16ED\u16F1\u1730\u173C\u1743\u1748\u1778\u177D\u17E0\u17E6\u1839\u1850\u170D\u193D\u1948\u1970ot;\u6AED\u0100cr\u16F6\u171Ek\u0200ceps\u1700\u1705\u170D\u1713ong;\u624Cpsilon;\u43F6rime;\u6035im\u0100;e\u171A\u171B\u623Dq;\u62CD\u0176\u1722\u1726ee;\u62BDed\u0100;g\u172C\u172D\u6305e\xBB\u172Drk\u0100;t\u135C\u1737brk;\u63B6\u0100oy\u1701\u1741;\u4431quo;\u601E\u0280cmprt\u1753\u175B\u1761\u1764\u1768aus\u0100;e\u010A\u0109ptyv;\u69B0s\xE9\u170Cno\xF5\u0113\u0180ahw\u176F\u1771\u1773;\u43B2;\u6136een;\u626Cr;\uC000\u{1D51F}g\u0380costuvw\u178D\u179D\u17B3\u17C1\u17D5\u17DB\u17DE\u0180aiu\u1794\u1796\u179A\xF0\u0760rc;\u65EFp\xBB\u1371\u0180dpt\u17A4\u17A8\u17ADot;\u6A00lus;\u6A01imes;\u6A02\u0271\u17B9\0\0\u17BEcup;\u6A06ar;\u6605riangle\u0100du\u17CD\u17D2own;\u65BDp;\u65B3plus;\u6A04e\xE5\u1444\xE5\u14ADarow;\u690D\u0180ako\u17ED\u1826\u1835\u0100cn\u17F2\u1823k\u0180lst\u17FA\u05AB\u1802ozenge;\u69EBriangle\u0200;dlr\u1812\u1813\u1818\u181D\u65B4own;\u65BEeft;\u65C2ight;\u65B8k;\u6423\u01B1\u182B\0\u1833\u01B2\u182F\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183E\u184D\u0100;q\u1843\u1846\uC000=\u20E5uiv;\uC000\u2261\u20E5t;\u6310\u0200ptwx\u1859\u185E\u1867\u186Cf;\uC000\u{1D553}\u0100;t\u13CB\u1863om\xBB\u13CCtie;\u62C8\u0600DHUVbdhmptuv\u1885\u1896\u18AA\u18BB\u18D7\u18DB\u18EC\u18FF\u1905\u190A\u1910\u1921\u0200LRlr\u188E\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18A1\u18A2\u18A4\u18A6\u18A8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18B3\u18B5\u18B7\u18B9;\u655D;\u655A;\u655C;\u6559\u0380;HLRhlr\u18CA\u18CB\u18CD\u18CF\u18D1\u18D3\u18D5\u6551;\u656C;\u6563;\u6560;\u656B;\u6562;\u655Fox;\u69C9\u0200LRlr\u18E4\u18E6\u18E8\u18EA;\u6555;\u6552;\u6510;\u650C\u0280;DUdu\u06BD\u18F7\u18F9\u18FB\u18FD;\u6565;\u6568;\u652C;\u6534inus;\u629Flus;\u629Eimes;\u62A0\u0200LRlr\u1919\u191B\u191D\u191F;\u655B;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193B\u6502;\u656A;\u6561;\u655E;\u653C;\u6524;\u651C\u0100ev\u0123\u1942bar\u803B\xA6\u40A6\u0200ceio\u1951\u1956\u195A\u1960r;\uC000\u{1D4B7}mi;\u604Fm\u0100;e\u171A\u171Cl\u0180;bh\u1968\u1969\u196B\u405C;\u69C5sub;\u67C8\u016C\u1974\u197El\u0100;e\u1979\u197A\u6022t\xBB\u197Ap\u0180;Ee\u012F\u1985\u1987;\u6AAE\u0100;q\u06DC\u06DB\u0CE1\u19A7\0\u19E8\u1A11\u1A15\u1A32\0\u1A37\u1A50\0\0\u1AB4\0\0\u1AC1\0\0\u1B21\u1B2E\u1B4D\u1B52\0\u1BFD\0\u1C0C\u0180cpr\u19AD\u19B2\u19DDute;\u4107\u0300;abcds\u19BF\u19C0\u19C4\u19CA\u19D5\u19D9\u6229nd;\u6A44rcup;\u6A49\u0100au\u19CF\u19D2p;\u6A4Bp;\u6A47ot;\u6A40;\uC000\u2229\uFE00\u0100eo\u19E2\u19E5t;\u6041\xEE\u0693\u0200aeiu\u19F0\u19FB\u1A01\u1A05\u01F0\u19F5\0\u19F8s;\u6A4Don;\u410Ddil\u803B\xE7\u40E7rc;\u4109ps\u0100;s\u1A0C\u1A0D\u6A4Cm;\u6A50ot;\u410B\u0180dmn\u1A1B\u1A20\u1A26il\u80BB\xB8\u01ADptyv;\u69B2t\u8100\xA2;e\u1A2D\u1A2E\u40A2r\xE4\u01B2r;\uC000\u{1D520}\u0180cei\u1A3D\u1A40\u1A4Dy;\u4447ck\u0100;m\u1A47\u1A48\u6713ark\xBB\u1A48;\u43C7r\u0380;Ecefms\u1A5F\u1A60\u1A62\u1A6B\u1AA4\u1AAA\u1AAE\u65CB;\u69C3\u0180;el\u1A69\u1A6A\u1A6D\u42C6q;\u6257e\u0261\u1A74\0\0\u1A88rrow\u0100lr\u1A7C\u1A81eft;\u61BAight;\u61BB\u0280RSacd\u1A92\u1A94\u1A96\u1A9A\u1A9F\xBB\u0F47;\u64C8st;\u629Birc;\u629Aash;\u629Dnint;\u6A10id;\u6AEFcir;\u69C2ubs\u0100;u\u1ABB\u1ABC\u6663it\xBB\u1ABC\u02EC\u1AC7\u1AD4\u1AFA\0\u1B0Aon\u0100;e\u1ACD\u1ACE\u403A\u0100;q\xC7\xC6\u026D\u1AD9\0\0\u1AE2a\u0100;t\u1ADE\u1ADF\u402C;\u4040\u0180;fl\u1AE8\u1AE9\u1AEB\u6201\xEE\u1160e\u0100mx\u1AF1\u1AF6ent\xBB\u1AE9e\xF3\u024D\u01E7\u1AFE\0\u1B07\u0100;d\u12BB\u1B02ot;\u6A6Dn\xF4\u0246\u0180fry\u1B10\u1B14\u1B17;\uC000\u{1D554}o\xE4\u0254\u8100\xA9;s\u0155\u1B1Dr;\u6117\u0100ao\u1B25\u1B29rr;\u61B5ss;\u6717\u0100cu\u1B32\u1B37r;\uC000\u{1D4B8}\u0100bp\u1B3C\u1B44\u0100;e\u1B41\u1B42\u6ACF;\u6AD1\u0100;e\u1B49\u1B4A\u6AD0;\u6AD2dot;\u62EF\u0380delprvw\u1B60\u1B6C\u1B77\u1B82\u1BAC\u1BD4\u1BF9arr\u0100lr\u1B68\u1B6A;\u6938;\u6935\u0270\u1B72\0\0\u1B75r;\u62DEc;\u62DFarr\u0100;p\u1B7F\u1B80\u61B6;\u693D\u0300;bcdos\u1B8F\u1B90\u1B96\u1BA1\u1BA5\u1BA8\u622Arcap;\u6A48\u0100au\u1B9B\u1B9Ep;\u6A46p;\u6A4Aot;\u628Dr;\u6A45;\uC000\u222A\uFE00\u0200alrv\u1BB5\u1BBF\u1BDE\u1BE3rr\u0100;m\u1BBC\u1BBD\u61B7;\u693Cy\u0180evw\u1BC7\u1BD4\u1BD8q\u0270\u1BCE\0\0\u1BD2re\xE3\u1B73u\xE3\u1B75ee;\u62CEedge;\u62CFen\u803B\xA4\u40A4earrow\u0100lr\u1BEE\u1BF3eft\xBB\u1B80ight\xBB\u1BBDe\xE4\u1BDD\u0100ci\u1C01\u1C07onin\xF4\u01F7nt;\u6231lcty;\u632D\u0980AHabcdefhijlorstuwz\u1C38\u1C3B\u1C3F\u1C5D\u1C69\u1C75\u1C8A\u1C9E\u1CAC\u1CB7\u1CFB\u1CFF\u1D0D\u1D7B\u1D91\u1DAB\u1DBB\u1DC6\u1DCDr\xF2\u0381ar;\u6965\u0200glrs\u1C48\u1C4D\u1C52\u1C54ger;\u6020eth;\u6138\xF2\u1133h\u0100;v\u1C5A\u1C5B\u6010\xBB\u090A\u016B\u1C61\u1C67arow;\u690Fa\xE3\u0315\u0100ay\u1C6E\u1C73ron;\u410F;\u4434\u0180;ao\u0332\u1C7C\u1C84\u0100gr\u02BF\u1C81r;\u61CAtseq;\u6A77\u0180glm\u1C91\u1C94\u1C98\u803B\xB0\u40B0ta;\u43B4ptyv;\u69B1\u0100ir\u1CA3\u1CA8sht;\u697F;\uC000\u{1D521}ar\u0100lr\u1CB3\u1CB5\xBB\u08DC\xBB\u101E\u0280aegsv\u1CC2\u0378\u1CD6\u1CDC\u1CE0m\u0180;os\u0326\u1CCA\u1CD4nd\u0100;s\u0326\u1CD1uit;\u6666amma;\u43DDin;\u62F2\u0180;io\u1CE7\u1CE8\u1CF8\u40F7de\u8100\xF7;o\u1CE7\u1CF0ntimes;\u62C7n\xF8\u1CF7cy;\u4452c\u026F\u1D06\0\0\u1D0Arn;\u631Eop;\u630D\u0280lptuw\u1D18\u1D1D\u1D22\u1D49\u1D55lar;\u4024f;\uC000\u{1D555}\u0280;emps\u030B\u1D2D\u1D37\u1D3D\u1D42q\u0100;d\u0352\u1D33ot;\u6251inus;\u6238lus;\u6214quare;\u62A1blebarwedg\xE5\xFAn\u0180adh\u112E\u1D5D\u1D67ownarrow\xF3\u1C83arpoon\u0100lr\u1D72\u1D76ef\xF4\u1CB4igh\xF4\u1CB6\u0162\u1D7F\u1D85karo\xF7\u0F42\u026F\u1D8A\0\0\u1D8Ern;\u631Fop;\u630C\u0180cot\u1D98\u1DA3\u1DA6\u0100ry\u1D9D\u1DA1;\uC000\u{1D4B9};\u4455l;\u69F6rok;\u4111\u0100dr\u1DB0\u1DB4ot;\u62F1i\u0100;f\u1DBA\u1816\u65BF\u0100ah\u1DC0\u1DC3r\xF2\u0429a\xF2\u0FA6angle;\u69A6\u0100ci\u1DD2\u1DD5y;\u445Fgrarr;\u67FF\u0900Dacdefglmnopqrstux\u1E01\u1E09\u1E19\u1E38\u0578\u1E3C\u1E49\u1E61\u1E7E\u1EA5\u1EAF\u1EBD\u1EE1\u1F2A\u1F37\u1F44\u1F4E\u1F5A\u0100Do\u1E06\u1D34o\xF4\u1C89\u0100cs\u1E0E\u1E14ute\u803B\xE9\u40E9ter;\u6A6E\u0200aioy\u1E22\u1E27\u1E31\u1E36ron;\u411Br\u0100;c\u1E2D\u1E2E\u6256\u803B\xEA\u40EAlon;\u6255;\u444Dot;\u4117\u0100Dr\u1E41\u1E45ot;\u6252;\uC000\u{1D522}\u0180;rs\u1E50\u1E51\u1E57\u6A9Aave\u803B\xE8\u40E8\u0100;d\u1E5C\u1E5D\u6A96ot;\u6A98\u0200;ils\u1E6A\u1E6B\u1E72\u1E74\u6A99nters;\u63E7;\u6113\u0100;d\u1E79\u1E7A\u6A95ot;\u6A97\u0180aps\u1E85\u1E89\u1E97cr;\u4113ty\u0180;sv\u1E92\u1E93\u1E95\u6205et\xBB\u1E93p\u01001;\u1E9D\u1EA4\u0133\u1EA1\u1EA3;\u6004;\u6005\u6003\u0100gs\u1EAA\u1EAC;\u414Bp;\u6002\u0100gp\u1EB4\u1EB8on;\u4119f;\uC000\u{1D556}\u0180als\u1EC4\u1ECE\u1ED2r\u0100;s\u1ECA\u1ECB\u62D5l;\u69E3us;\u6A71i\u0180;lv\u1EDA\u1EDB\u1EDF\u43B5on\xBB\u1EDB;\u43F5\u0200csuv\u1EEA\u1EF3\u1F0B\u1F23\u0100io\u1EEF\u1E31rc\xBB\u1E2E\u0269\u1EF9\0\0\u1EFB\xED\u0548ant\u0100gl\u1F02\u1F06tr\xBB\u1E5Dess\xBB\u1E7A\u0180aei\u1F12\u1F16\u1F1Als;\u403Dst;\u625Fv\u0100;D\u0235\u1F20D;\u6A78parsl;\u69E5\u0100Da\u1F2F\u1F33ot;\u6253rr;\u6971\u0180cdi\u1F3E\u1F41\u1EF8r;\u612Fo\xF4\u0352\u0100ah\u1F49\u1F4B;\u43B7\u803B\xF0\u40F0\u0100mr\u1F53\u1F57l\u803B\xEB\u40EBo;\u60AC\u0180cip\u1F61\u1F64\u1F67l;\u4021s\xF4\u056E\u0100eo\u1F6C\u1F74ctatio\xEE\u0559nential\xE5\u0579\u09E1\u1F92\0\u1F9E\0\u1FA1\u1FA7\0\0\u1FC6\u1FCC\0\u1FD3\0\u1FE6\u1FEA\u2000\0\u2008\u205Allingdotse\xF1\u1E44y;\u4444male;\u6640\u0180ilr\u1FAD\u1FB3\u1FC1lig;\u8000\uFB03\u0269\u1FB9\0\0\u1FBDg;\u8000\uFB00ig;\u8000\uFB04;\uC000\u{1D523}lig;\u8000\uFB01lig;\uC000fj\u0180alt\u1FD9\u1FDC\u1FE1t;\u666Dig;\u8000\uFB02ns;\u65B1of;\u4192\u01F0\u1FEE\0\u1FF3f;\uC000\u{1D557}\u0100ak\u05BF\u1FF7\u0100;v\u1FFC\u1FFD\u62D4;\u6AD9artint;\u6A0D\u0100ao\u200C\u2055\u0100cs\u2011\u2052\u03B1\u201A\u2030\u2038\u2045\u2048\0\u2050\u03B2\u2022\u2025\u2027\u202A\u202C\0\u202E\u803B\xBD\u40BD;\u6153\u803B\xBC\u40BC;\u6155;\u6159;\u615B\u01B3\u2034\0\u2036;\u6154;\u6156\u02B4\u203E\u2041\0\0\u2043\u803B\xBE\u40BE;\u6157;\u615C5;\u6158\u01B6\u204C\0\u204E;\u615A;\u615D8;\u615El;\u6044wn;\u6322cr;\uC000\u{1D4BB}\u0880Eabcdefgijlnorstv\u2082\u2089\u209F\u20A5\u20B0\u20B4\u20F0\u20F5\u20FA\u20FF\u2103\u2112\u2138\u0317\u213E\u2152\u219E\u0100;l\u064D\u2087;\u6A8C\u0180cmp\u2090\u2095\u209Dute;\u41F5ma\u0100;d\u209C\u1CDA\u43B3;\u6A86reve;\u411F\u0100iy\u20AA\u20AErc;\u411D;\u4433ot;\u4121\u0200;lqs\u063E\u0642\u20BD\u20C9\u0180;qs\u063E\u064C\u20C4lan\xF4\u0665\u0200;cdl\u0665\u20D2\u20D5\u20E5c;\u6AA9ot\u0100;o\u20DC\u20DD\u6A80\u0100;l\u20E2\u20E3\u6A82;\u6A84\u0100;e\u20EA\u20ED\uC000\u22DB\uFE00s;\u6A94r;\uC000\u{1D524}\u0100;g\u0673\u061Bmel;\u6137cy;\u4453\u0200;Eaj\u065A\u210C\u210E\u2110;\u6A92;\u6AA5;\u6AA4\u0200Eaes\u211B\u211D\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6A8Arox\xBB\u2124\u0100;q\u212E\u212F\u6A88\u0100;q\u212E\u211Bim;\u62E7pf;\uC000\u{1D558}\u0100ci\u2143\u2146r;\u610Am\u0180;el\u066B\u214E\u2150;\u6A8E;\u6A90\u8300>;cdlqr\u05EE\u2160\u216A\u216E\u2173\u2179\u0100ci\u2165\u2167;\u6AA7r;\u6A7Aot;\u62D7Par;\u6995uest;\u6A7C\u0280adels\u2184\u216A\u2190\u0656\u219B\u01F0\u2189\0\u218Epro\xF8\u209Er;\u6978q\u0100lq\u063F\u2196les\xF3\u2088i\xED\u066B\u0100en\u21A3\u21ADrtneqq;\uC000\u2269\uFE00\xC5\u21AA\u0500Aabcefkosy\u21C4\u21C7\u21F1\u21F5\u21FA\u2218\u221D\u222F\u2268\u227Dr\xF2\u03A0\u0200ilmr\u21D0\u21D4\u21D7\u21DBrs\xF0\u1484f\xBB\u2024il\xF4\u06A9\u0100dr\u21E0\u21E4cy;\u444A\u0180;cw\u08F4\u21EB\u21EFir;\u6948;\u61ADar;\u610Firc;\u4125\u0180alr\u2201\u220E\u2213rts\u0100;u\u2209\u220A\u6665it\xBB\u220Alip;\u6026con;\u62B9r;\uC000\u{1D525}s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223A\u223E\u2243\u225E\u2263rr;\u61FFtht;\u623Bk\u0100lr\u2249\u2253eftarrow;\u61A9ightarrow;\u61AAf;\uC000\u{1D559}bar;\u6015\u0180clt\u226F\u2274\u2278r;\uC000\u{1D4BD}as\xE8\u21F4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xBB\u1C5B\u0AE1\u22A3\0\u22AA\0\u22B8\u22C5\u22CE\0\u22D5\u22F3\0\0\u22F8\u2322\u2367\u2362\u237F\0\u2386\u23AA\u23B4cute\u803B\xED\u40ED\u0180;iy\u0771\u22B0\u22B5rc\u803B\xEE\u40EE;\u4438\u0100cx\u22BC\u22BFy;\u4435cl\u803B\xA1\u40A1\u0100fr\u039F\u22C9;\uC000\u{1D526}rave\u803B\xEC\u40EC\u0200;ino\u073E\u22DD\u22E9\u22EE\u0100in\u22E2\u22E6nt;\u6A0Ct;\u622Dfin;\u69DCta;\u6129lig;\u4133\u0180aop\u22FE\u231A\u231D\u0180cgt\u2305\u2308\u2317r;\u412B\u0180elp\u071F\u230F\u2313in\xE5\u078Ear\xF4\u0720h;\u4131f;\u62B7ed;\u41B5\u0280;cfot\u04F4\u232C\u2331\u233D\u2341are;\u6105in\u0100;t\u2338\u2339\u621Eie;\u69DDdo\xF4\u2319\u0280;celp\u0757\u234C\u2350\u235B\u2361al;\u62BA\u0100gr\u2355\u2359er\xF3\u1563\xE3\u234Darhk;\u6A17rod;\u6A3C\u0200cgpt\u236F\u2372\u2376\u237By;\u4451on;\u412Ff;\uC000\u{1D55A}a;\u43B9uest\u803B\xBF\u40BF\u0100ci\u238A\u238Fr;\uC000\u{1D4BE}n\u0280;Edsv\u04F4\u239B\u239D\u23A1\u04F3;\u62F9ot;\u62F5\u0100;v\u23A6\u23A7\u62F4;\u62F3\u0100;i\u0777\u23AElde;\u4129\u01EB\u23B8\0\u23BCcy;\u4456l\u803B\xEF\u40EF\u0300cfmosu\u23CC\u23D7\u23DC\u23E1\u23E7\u23F5\u0100iy\u23D1\u23D5rc;\u4135;\u4439r;\uC000\u{1D527}ath;\u4237pf;\uC000\u{1D55B}\u01E3\u23EC\0\u23F1r;\uC000\u{1D4BF}rcy;\u4458kcy;\u4454\u0400acfghjos\u240B\u2416\u2422\u2427\u242D\u2431\u2435\u243Bppa\u0100;v\u2413\u2414\u43BA;\u43F0\u0100ey\u241B\u2420dil;\u4137;\u443Ar;\uC000\u{1D528}reen;\u4138cy;\u4445cy;\u445Cpf;\uC000\u{1D55C}cr;\uC000\u{1D4C0}\u0B80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248D\u2491\u250E\u253D\u255A\u2580\u264E\u265E\u2665\u2679\u267D\u269A\u26B2\u26D8\u275D\u2768\u278B\u27C0\u2801\u2812\u0180art\u2477\u247A\u247Cr\xF2\u09C6\xF2\u0395ail;\u691Barr;\u690E\u0100;g\u0994\u248B;\u6A8Bar;\u6962\u0963\u24A5\0\u24AA\0\u24B1\0\0\0\0\0\u24B5\u24BA\0\u24C6\u24C8\u24CD\0\u24F9ute;\u413Amptyv;\u69B4ra\xEE\u084Cbda;\u43BBg\u0180;dl\u088E\u24C1\u24C3;\u6991\xE5\u088E;\u6A85uo\u803B\xAB\u40ABr\u0400;bfhlpst\u0899\u24DE\u24E6\u24E9\u24EB\u24EE\u24F1\u24F5\u0100;f\u089D\u24E3s;\u691Fs;\u691D\xEB\u2252p;\u61ABl;\u6939im;\u6973l;\u61A2\u0180;ae\u24FF\u2500\u2504\u6AABil;\u6919\u0100;s\u2509\u250A\u6AAD;\uC000\u2AAD\uFE00\u0180abr\u2515\u2519\u251Drr;\u690Crk;\u6772\u0100ak\u2522\u252Cc\u0100ek\u2528\u252A;\u407B;\u405B\u0100es\u2531\u2533;\u698Bl\u0100du\u2539\u253B;\u698F;\u698D\u0200aeuy\u2546\u254B\u2556\u2558ron;\u413E\u0100di\u2550\u2554il;\u413C\xEC\u08B0\xE2\u2529;\u443B\u0200cqrs\u2563\u2566\u256D\u257Da;\u6936uo\u0100;r\u0E19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694Bh;\u61B2\u0280;fgqs\u258B\u258C\u0989\u25F3\u25FF\u6264t\u0280ahlrt\u2598\u25A4\u25B7\u25C2\u25E8rrow\u0100;t\u0899\u25A1a\xE9\u24F6arpoon\u0100du\u25AF\u25B4own\xBB\u045Ap\xBB\u0966eftarrows;\u61C7ight\u0180ahs\u25CD\u25D6\u25DErrow\u0100;s\u08F4\u08A7arpoon\xF3\u0F98quigarro\xF7\u21F0hreetimes;\u62CB\u0180;qs\u258B\u0993\u25FAlan\xF4\u09AC\u0280;cdgs\u09AC\u260A\u260D\u261D\u2628c;\u6AA8ot\u0100;o\u2614\u2615\u6A7F\u0100;r\u261A\u261B\u6A81;\u6A83\u0100;e\u2622\u2625\uC000\u22DA\uFE00s;\u6A93\u0280adegs\u2633\u2639\u263D\u2649\u264Bppro\xF8\u24C6ot;\u62D6q\u0100gq\u2643\u2645\xF4\u0989gt\xF2\u248C\xF4\u099Bi\xED\u09B2\u0180ilr\u2655\u08E1\u265Asht;\u697C;\uC000\u{1D529}\u0100;E\u099C\u2663;\u6A91\u0161\u2669\u2676r\u0100du\u25B2\u266E\u0100;l\u0965\u2673;\u696Alk;\u6584cy;\u4459\u0280;acht\u0A48\u2688\u268B\u2691\u2696r\xF2\u25C1orne\xF2\u1D08ard;\u696Bri;\u65FA\u0100io\u269F\u26A4dot;\u4140ust\u0100;a\u26AC\u26AD\u63B0che\xBB\u26AD\u0200Eaes\u26BB\u26BD\u26C9\u26D4;\u6268p\u0100;p\u26C3\u26C4\u6A89rox\xBB\u26C4\u0100;q\u26CE\u26CF\u6A87\u0100;q\u26CE\u26BBim;\u62E6\u0400abnoptwz\u26E9\u26F4\u26F7\u271A\u272F\u2741\u2747\u2750\u0100nr\u26EE\u26F1g;\u67ECr;\u61FDr\xEB\u08C1g\u0180lmr\u26FF\u270D\u2714eft\u0100ar\u09E6\u2707ight\xE1\u09F2apsto;\u67FCight\xE1\u09FDparrow\u0100lr\u2725\u2729ef\xF4\u24EDight;\u61AC\u0180afl\u2736\u2739\u273Dr;\u6985;\uC000\u{1D55D}us;\u6A2Dimes;\u6A34\u0161\u274B\u274Fst;\u6217\xE1\u134E\u0180;ef\u2757\u2758\u1800\u65CAnge\xBB\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277C\u2785\u2787r\xF2\u08A8orne\xF2\u1D8Car\u0100;d\u0F98\u2783;\u696D;\u600Eri;\u62BF\u0300achiqt\u2798\u279D\u0A40\u27A2\u27AE\u27BBquo;\u6039r;\uC000\u{1D4C1}m\u0180;eg\u09B2\u27AA\u27AC;\u6A8D;\u6A8F\u0100bu\u252A\u27B3o\u0100;r\u0E1F\u27B9;\u601Arok;\u4142\u8400<;cdhilqr\u082B\u27D2\u2639\u27DC\u27E0\u27E5\u27EA\u27F0\u0100ci\u27D7\u27D9;\u6AA6r;\u6A79re\xE5\u25F2mes;\u62C9arr;\u6976uest;\u6A7B\u0100Pi\u27F5\u27F9ar;\u6996\u0180;ef\u2800\u092D\u181B\u65C3r\u0100du\u2807\u280Dshar;\u694Ahar;\u6966\u0100en\u2817\u2821rtneqq;\uC000\u2268\uFE00\xC5\u281E\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288E\u2893\u28A0\u28A5\u28A8\u28DA\u28E2\u28E4\u0A83\u28F3\u2902Dot;\u623A\u0200clpr\u284E\u2852\u2863\u287Dr\u803B\xAF\u40AF\u0100et\u2857\u2859;\u6642\u0100;e\u285E\u285F\u6720se\xBB\u285F\u0100;s\u103B\u2868to\u0200;dlu\u103B\u2873\u2877\u287Bow\xEE\u048Cef\xF4\u090F\xF0\u13D1ker;\u65AE\u0100oy\u2887\u288Cmma;\u6A29;\u443Cash;\u6014asuredangle\xBB\u1626r;\uC000\u{1D52A}o;\u6127\u0180cdn\u28AF\u28B4\u28C9ro\u803B\xB5\u40B5\u0200;acd\u1464\u28BD\u28C0\u28C4s\xF4\u16A7ir;\u6AF0ot\u80BB\xB7\u01B5us\u0180;bd\u28D2\u1903\u28D3\u6212\u0100;u\u1D3C\u28D8;\u6A2A\u0163\u28DE\u28E1p;\u6ADB\xF2\u2212\xF0\u0A81\u0100dp\u28E9\u28EEels;\u62A7f;\uC000\u{1D55E}\u0100ct\u28F8\u28FDr;\uC000\u{1D4C2}pos\xBB\u159D\u0180;lm\u2909\u290A\u290D\u43BCtimap;\u62B8\u0C00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297E\u2989\u2998\u29DA\u29E9\u2A15\u2A1A\u2A58\u2A5D\u2A83\u2A95\u2AA4\u2AA8\u2B04\u2B07\u2B44\u2B7F\u2BAE\u2C34\u2C67\u2C7C\u2CE9\u0100gt\u2947\u294B;\uC000\u22D9\u0338\u0100;v\u2950\u0BCF\uC000\u226B\u20D2\u0180elt\u295A\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61CDightarrow;\u61CE;\uC000\u22D8\u0338\u0100;v\u297B\u0C47\uC000\u226A\u20D2ightarrow;\u61CF\u0100Dd\u298E\u2993ash;\u62AFash;\u62AE\u0280bcnpt\u29A3\u29A7\u29AC\u29B1\u29CCla\xBB\u02DEute;\u4144g;\uC000\u2220\u20D2\u0280;Eiop\u0D84\u29BC\u29C0\u29C5\u29C8;\uC000\u2A70\u0338d;\uC000\u224B\u0338s;\u4149ro\xF8\u0D84ur\u0100;a\u29D3\u29D4\u666El\u0100;s\u29D3\u0B38\u01F3\u29DF\0\u29E3p\u80BB\xA0\u0B37mp\u0100;e\u0BF9\u0C00\u0280aeouy\u29F4\u29FE\u2A03\u2A10\u2A13\u01F0\u29F9\0\u29FB;\u6A43on;\u4148dil;\u4146ng\u0100;d\u0D7E\u2A0Aot;\uC000\u2A6D\u0338p;\u6A42;\u443Dash;\u6013\u0380;Aadqsx\u0B92\u2A29\u2A2D\u2A3B\u2A41\u2A45\u2A50rr;\u61D7r\u0100hr\u2A33\u2A36k;\u6924\u0100;o\u13F2\u13F0ot;\uC000\u2250\u0338ui\xF6\u0B63\u0100ei\u2A4A\u2A4Ear;\u6928\xED\u0B98ist\u0100;s\u0BA0\u0B9Fr;\uC000\u{1D52B}\u0200Eest\u0BC5\u2A66\u2A79\u2A7C\u0180;qs\u0BBC\u2A6D\u0BE1\u0180;qs\u0BBC\u0BC5\u2A74lan\xF4\u0BE2i\xED\u0BEA\u0100;r\u0BB6\u2A81\xBB\u0BB7\u0180Aap\u2A8A\u2A8D\u2A91r\xF2\u2971rr;\u61AEar;\u6AF2\u0180;sv\u0F8D\u2A9C\u0F8C\u0100;d\u2AA1\u2AA2\u62FC;\u62FAcy;\u445A\u0380AEadest\u2AB7\u2ABA\u2ABE\u2AC2\u2AC5\u2AF6\u2AF9r\xF2\u2966;\uC000\u2266\u0338rr;\u619Ar;\u6025\u0200;fqs\u0C3B\u2ACE\u2AE3\u2AEFt\u0100ar\u2AD4\u2AD9rro\xF7\u2AC1ightarro\xF7\u2A90\u0180;qs\u0C3B\u2ABA\u2AEAlan\xF4\u0C55\u0100;s\u0C55\u2AF4\xBB\u0C36i\xED\u0C5D\u0100;r\u0C35\u2AFEi\u0100;e\u0C1A\u0C25i\xE4\u0D90\u0100pt\u2B0C\u2B11f;\uC000\u{1D55F}\u8180\xAC;in\u2B19\u2B1A\u2B36\u40ACn\u0200;Edv\u0B89\u2B24\u2B28\u2B2E;\uC000\u22F9\u0338ot;\uC000\u22F5\u0338\u01E1\u0B89\u2B33\u2B35;\u62F7;\u62F6i\u0100;v\u0CB8\u2B3C\u01E1\u0CB8\u2B41\u2B43;\u62FE;\u62FD\u0180aor\u2B4B\u2B63\u2B69r\u0200;ast\u0B7B\u2B55\u2B5A\u2B5Flle\xEC\u0B7Bl;\uC000\u2AFD\u20E5;\uC000\u2202\u0338lint;\u6A14\u0180;ce\u0C92\u2B70\u2B73u\xE5\u0CA5\u0100;c\u0C98\u2B78\u0100;e\u0C92\u2B7D\xF1\u0C98\u0200Aait\u2B88\u2B8B\u2B9D\u2BA7r\xF2\u2988rr\u0180;cw\u2B94\u2B95\u2B99\u619B;\uC000\u2933\u0338;\uC000\u219D\u0338ghtarrow\xBB\u2B95ri\u0100;e\u0CCB\u0CD6\u0380chimpqu\u2BBD\u2BCD\u2BD9\u2B04\u0B78\u2BE4\u2BEF\u0200;cer\u0D32\u2BC6\u0D37\u2BC9u\xE5\u0D45;\uC000\u{1D4C3}ort\u026D\u2B05\0\0\u2BD6ar\xE1\u2B56m\u0100;e\u0D6E\u2BDF\u0100;q\u0D74\u0D73su\u0100bp\u2BEB\u2BED\xE5\u0CF8\xE5\u0D0B\u0180bcp\u2BF6\u2C11\u2C19\u0200;Ees\u2BFF\u2C00\u0D22\u2C04\u6284;\uC000\u2AC5\u0338et\u0100;e\u0D1B\u2C0Bq\u0100;q\u0D23\u2C00c\u0100;e\u0D32\u2C17\xF1\u0D38\u0200;Ees\u2C22\u2C23\u0D5F\u2C27\u6285;\uC000\u2AC6\u0338et\u0100;e\u0D58\u2C2Eq\u0100;q\u0D60\u2C23\u0200gilr\u2C3D\u2C3F\u2C45\u2C47\xEC\u0BD7lde\u803B\xF1\u40F1\xE7\u0C43iangle\u0100lr\u2C52\u2C5Ceft\u0100;e\u0C1A\u2C5A\xF1\u0C26ight\u0100;e\u0CCB\u2C65\xF1\u0CD7\u0100;m\u2C6C\u2C6D\u43BD\u0180;es\u2C74\u2C75\u2C79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2C8F\u2C94\u2C99\u2C9E\u2CA3\u2CB0\u2CB6\u2CD3\u2CE3ash;\u62ADarr;\u6904p;\uC000\u224D\u20D2ash;\u62AC\u0100et\u2CA8\u2CAC;\uC000\u2265\u20D2;\uC000>\u20D2nfin;\u69DE\u0180Aet\u2CBD\u2CC1\u2CC5rr;\u6902;\uC000\u2264\u20D2\u0100;r\u2CCA\u2CCD\uC000<\u20D2ie;\uC000\u22B4\u20D2\u0100At\u2CD8\u2CDCrr;\u6903rie;\uC000\u22B5\u20D2im;\uC000\u223C\u20D2\u0180Aan\u2CF0\u2CF4\u2D02rr;\u61D6r\u0100hr\u2CFA\u2CFDk;\u6923\u0100;o\u13E7\u13E5ear;\u6927\u1253\u1A95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2D2D\0\u2D38\u2D48\u2D60\u2D65\u2D72\u2D84\u1B07\0\0\u2D8D\u2DAB\0\u2DC8\u2DCE\0\u2DDC\u2E19\u2E2B\u2E3E\u2E43\u0100cs\u2D31\u1A97ute\u803B\xF3\u40F3\u0100iy\u2D3C\u2D45r\u0100;c\u1A9E\u2D42\u803B\xF4\u40F4;\u443E\u0280abios\u1AA0\u2D52\u2D57\u01C8\u2D5Alac;\u4151v;\u6A38old;\u69BClig;\u4153\u0100cr\u2D69\u2D6Dir;\u69BF;\uC000\u{1D52C}\u036F\u2D79\0\0\u2D7C\0\u2D82n;\u42DBave\u803B\xF2\u40F2;\u69C1\u0100bm\u2D88\u0DF4ar;\u69B5\u0200acit\u2D95\u2D98\u2DA5\u2DA8r\xF2\u1A80\u0100ir\u2D9D\u2DA0r;\u69BEoss;\u69BBn\xE5\u0E52;\u69C0\u0180aei\u2DB1\u2DB5\u2DB9cr;\u414Dga;\u43C9\u0180cdn\u2DC0\u2DC5\u01CDron;\u43BF;\u69B6pf;\uC000\u{1D560}\u0180ael\u2DD4\u2DD7\u01D2r;\u69B7rp;\u69B9\u0380;adiosv\u2DEA\u2DEB\u2DEE\u2E08\u2E0D\u2E10\u2E16\u6228r\xF2\u1A86\u0200;efm\u2DF7\u2DF8\u2E02\u2E05\u6A5Dr\u0100;o\u2DFE\u2DFF\u6134f\xBB\u2DFF\u803B\xAA\u40AA\u803B\xBA\u40BAgof;\u62B6r;\u6A56lope;\u6A57;\u6A5B\u0180clo\u2E1F\u2E21\u2E27\xF2\u2E01ash\u803B\xF8\u40F8l;\u6298i\u016C\u2E2F\u2E34de\u803B\xF5\u40F5es\u0100;a\u01DB\u2E3As;\u6A36ml\u803B\xF6\u40F6bar;\u633D\u0AE1\u2E5E\0\u2E7D\0\u2E80\u2E9D\0\u2EA2\u2EB9\0\0\u2ECB\u0E9C\0\u2F13\0\0\u2F2B\u2FBC\0\u2FC8r\u0200;ast\u0403\u2E67\u2E72\u0E85\u8100\xB6;l\u2E6D\u2E6E\u40B6le\xEC\u0403\u0269\u2E78\0\0\u2E7Bm;\u6AF3;\u6AFDy;\u443Fr\u0280cimpt\u2E8B\u2E8F\u2E93\u1865\u2E97nt;\u4025od;\u402Eil;\u6030enk;\u6031r;\uC000\u{1D52D}\u0180imo\u2EA8\u2EB0\u2EB4\u0100;v\u2EAD\u2EAE\u43C6;\u43D5ma\xF4\u0A76ne;\u660E\u0180;tv\u2EBF\u2EC0\u2EC8\u43C0chfork\xBB\u1FFD;\u43D6\u0100au\u2ECF\u2EDFn\u0100ck\u2ED5\u2EDDk\u0100;h\u21F4\u2EDB;\u610E\xF6\u21F4s\u0480;abcdemst\u2EF3\u2EF4\u1908\u2EF9\u2EFD\u2F04\u2F06\u2F0A\u2F0E\u402Bcir;\u6A23ir;\u6A22\u0100ou\u1D40\u2F02;\u6A25;\u6A72n\u80BB\xB1\u0E9Dim;\u6A26wo;\u6A27\u0180ipu\u2F19\u2F20\u2F25ntint;\u6A15f;\uC000\u{1D561}nd\u803B\xA3\u40A3\u0500;Eaceinosu\u0EC8\u2F3F\u2F41\u2F44\u2F47\u2F81\u2F89\u2F92\u2F7E\u2FB6;\u6AB3p;\u6AB7u\xE5\u0ED9\u0100;c\u0ECE\u2F4C\u0300;acens\u0EC8\u2F59\u2F5F\u2F66\u2F68\u2F7Eppro\xF8\u2F43urlye\xF1\u0ED9\xF1\u0ECE\u0180aes\u2F6F\u2F76\u2F7Approx;\u6AB9qq;\u6AB5im;\u62E8i\xED\u0EDFme\u0100;s\u2F88\u0EAE\u6032\u0180Eas\u2F78\u2F90\u2F7A\xF0\u2F75\u0180dfp\u0EEC\u2F99\u2FAF\u0180als\u2FA0\u2FA5\u2FAAlar;\u632Eine;\u6312urf;\u6313\u0100;t\u0EFB\u2FB4\xEF\u0EFBrel;\u62B0\u0100ci\u2FC0\u2FC5r;\uC000\u{1D4C5};\u43C8ncsp;\u6008\u0300fiopsu\u2FDA\u22E2\u2FDF\u2FE5\u2FEB\u2FF1r;\uC000\u{1D52E}pf;\uC000\u{1D562}rime;\u6057cr;\uC000\u{1D4C6}\u0180aeo\u2FF8\u3009\u3013t\u0100ei\u2FFE\u3005rnion\xF3\u06B0nt;\u6A16st\u0100;e\u3010\u3011\u403F\xF1\u1F19\xF4\u0F14\u0A80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30E0\u310E\u312B\u3147\u3162\u3172\u318E\u3206\u3215\u3224\u3229\u3258\u326E\u3272\u3290\u32B0\u32B7\u0180art\u3047\u304A\u304Cr\xF2\u10B3\xF2\u03DDail;\u691Car\xF2\u1C65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307F\u308F\u3094\u30CC\u0100eu\u306D\u3071;\uC000\u223D\u0331te;\u4155i\xE3\u116Emptyv;\u69B3g\u0200;del\u0FD1\u3089\u308B\u308D;\u6992;\u69A5\xE5\u0FD1uo\u803B\xBB\u40BBr\u0580;abcfhlpstw\u0FDC\u30AC\u30AF\u30B7\u30B9\u30BC\u30BE\u30C0\u30C3\u30C7\u30CAp;\u6975\u0100;f\u0FE0\u30B4s;\u6920;\u6933s;\u691E\xEB\u225D\xF0\u272El;\u6945im;\u6974l;\u61A3;\u619D\u0100ai\u30D1\u30D5il;\u691Ao\u0100;n\u30DB\u30DC\u6236al\xF3\u0F1E\u0180abr\u30E7\u30EA\u30EEr\xF2\u17E5rk;\u6773\u0100ak\u30F3\u30FDc\u0100ek\u30F9\u30FB;\u407D;\u405D\u0100es\u3102\u3104;\u698Cl\u0100du\u310A\u310C;\u698E;\u6990\u0200aeuy\u3117\u311C\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xEC\u0FF2\xE2\u30FA;\u4440\u0200clqs\u3134\u3137\u313D\u3144a;\u6937dhar;\u6969uo\u0100;r\u020E\u020Dh;\u61B3\u0180acg\u314E\u315F\u0F44l\u0200;ips\u0F78\u3158\u315B\u109Cn\xE5\u10BBar\xF4\u0FA9t;\u65AD\u0180ilr\u3169\u1023\u316Esht;\u697D;\uC000\u{1D52F}\u0100ao\u3177\u3186r\u0100du\u317D\u317F\xBB\u047B\u0100;l\u1091\u3184;\u696C\u0100;v\u318B\u318C\u43C1;\u43F1\u0180gns\u3195\u31F9\u31FCht\u0300ahlrst\u31A4\u31B0\u31C2\u31D8\u31E4\u31EErrow\u0100;t\u0FDC\u31ADa\xE9\u30C8arpoon\u0100du\u31BB\u31BFow\xEE\u317Ep\xBB\u1092eft\u0100ah\u31CA\u31D0rrow\xF3\u0FEAarpoon\xF3\u0551ightarrows;\u61C9quigarro\xF7\u30CBhreetimes;\u62CCg;\u42DAingdotse\xF1\u1F32\u0180ahm\u320D\u3210\u3213r\xF2\u0FEAa\xF2\u0551;\u600Foust\u0100;a\u321E\u321F\u63B1che\xBB\u321Fmid;\u6AEE\u0200abpt\u3232\u323D\u3240\u3252\u0100nr\u3237\u323Ag;\u67EDr;\u61FEr\xEB\u1003\u0180afl\u3247\u324A\u324Er;\u6986;\uC000\u{1D563}us;\u6A2Eimes;\u6A35\u0100ap\u325D\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6A12ar\xF2\u31E3\u0200achq\u327B\u3280\u10BC\u3285quo;\u603Ar;\uC000\u{1D4C7}\u0100bu\u30FB\u328Ao\u0100;r\u0214\u0213\u0180hir\u3297\u329B\u32A0re\xE5\u31F8mes;\u62CAi\u0200;efl\u32AA\u1059\u1821\u32AB\u65B9tri;\u69CEluhar;\u6968;\u611E\u0D61\u32D5\u32DB\u32DF\u332C\u3338\u3371\0\u337A\u33A4\0\0\u33EC\u33F0\0\u3428\u3448\u345A\u34AD\u34B1\u34CA\u34F1\0\u3616\0\0\u3633cute;\u415Bqu\xEF\u27BA\u0500;Eaceinpsy\u11ED\u32F3\u32F5\u32FF\u3302\u330B\u330F\u331F\u3326\u3329;\u6AB4\u01F0\u32FA\0\u32FC;\u6AB8on;\u4161u\xE5\u11FE\u0100;d\u11F3\u3307il;\u415Frc;\u415D\u0180Eas\u3316\u3318\u331B;\u6AB6p;\u6ABAim;\u62E9olint;\u6A13i\xED\u1204;\u4441ot\u0180;be\u3334\u1D47\u3335\u62C5;\u6A66\u0380Aacmstx\u3346\u334A\u3357\u335B\u335E\u3363\u336Drr;\u61D8r\u0100hr\u3350\u3352\xEB\u2228\u0100;o\u0A36\u0A34t\u803B\xA7\u40A7i;\u403Bwar;\u6929m\u0100in\u3369\xF0nu\xF3\xF1t;\u6736r\u0100;o\u3376\u2055\uC000\u{1D530}\u0200acoy\u3382\u3386\u3391\u33A0rp;\u666F\u0100hy\u338B\u338Fcy;\u4449;\u4448rt\u026D\u3399\0\0\u339Ci\xE4\u1464ara\xEC\u2E6F\u803B\xAD\u40AD\u0100gm\u33A8\u33B4ma\u0180;fv\u33B1\u33B2\u33B2\u43C3;\u43C2\u0400;deglnpr\u12AB\u33C5\u33C9\u33CE\u33D6\u33DE\u33E1\u33E6ot;\u6A6A\u0100;q\u12B1\u12B0\u0100;E\u33D3\u33D4\u6A9E;\u6AA0\u0100;E\u33DB\u33DC\u6A9D;\u6A9Fe;\u6246lus;\u6A24arr;\u6972ar\xF2\u113D\u0200aeit\u33F8\u3408\u340F\u3417\u0100ls\u33FD\u3404lsetm\xE9\u336Ahp;\u6A33parsl;\u69E4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341C\u341D\u6AAA\u0100;s\u3422\u3423\u6AAC;\uC000\u2AAC\uFE00\u0180flp\u342E\u3433\u3442tcy;\u444C\u0100;b\u3438\u3439\u402F\u0100;a\u343E\u343F\u69C4r;\u633Ff;\uC000\u{1D564}a\u0100dr\u344D\u0402es\u0100;u\u3454\u3455\u6660it\xBB\u3455\u0180csu\u3460\u3479\u349F\u0100au\u3465\u346Fp\u0100;s\u1188\u346B;\uC000\u2293\uFE00p\u0100;s\u11B4\u3475;\uC000\u2294\uFE00u\u0100bp\u347F\u348F\u0180;es\u1197\u119C\u3486et\u0100;e\u1197\u348D\xF1\u119D\u0180;es\u11A8\u11AD\u3496et\u0100;e\u11A8\u349D\xF1\u11AE\u0180;af\u117B\u34A6\u05B0r\u0165\u34AB\u05B1\xBB\u117Car\xF2\u1148\u0200cemt\u34B9\u34BE\u34C2\u34C5r;\uC000\u{1D4C8}tm\xEE\xF1i\xEC\u3415ar\xE6\u11BE\u0100ar\u34CE\u34D5r\u0100;f\u34D4\u17BF\u6606\u0100an\u34DA\u34EDight\u0100ep\u34E3\u34EApsilo\xEE\u1EE0h\xE9\u2EAFs\xBB\u2852\u0280bcmnp\u34FB\u355E\u1209\u358B\u358E\u0480;Edemnprs\u350E\u350F\u3511\u3515\u351E\u3523\u352C\u3531\u3536\u6282;\u6AC5ot;\u6ABD\u0100;d\u11DA\u351Aot;\u6AC3ult;\u6AC1\u0100Ee\u3528\u352A;\u6ACB;\u628Alus;\u6ABFarr;\u6979\u0180eiu\u353D\u3552\u3555t\u0180;en\u350E\u3545\u354Bq\u0100;q\u11DA\u350Feq\u0100;q\u352B\u3528m;\u6AC7\u0100bp\u355A\u355C;\u6AD5;\u6AD3c\u0300;acens\u11ED\u356C\u3572\u3579\u357B\u3326ppro\xF8\u32FAurlye\xF1\u11FE\xF1\u11F3\u0180aes\u3582\u3588\u331Bppro\xF8\u331Aq\xF1\u3317g;\u666A\u0680123;Edehlmnps\u35A9\u35AC\u35AF\u121C\u35B2\u35B4\u35C0\u35C9\u35D5\u35DA\u35DF\u35E8\u35ED\u803B\xB9\u40B9\u803B\xB2\u40B2\u803B\xB3\u40B3;\u6AC6\u0100os\u35B9\u35BCt;\u6ABEub;\u6AD8\u0100;d\u1222\u35C5ot;\u6AC4s\u0100ou\u35CF\u35D2l;\u67C9b;\u6AD7arr;\u697Bult;\u6AC2\u0100Ee\u35E4\u35E6;\u6ACC;\u628Blus;\u6AC0\u0180eiu\u35F4\u3609\u360Ct\u0180;en\u121C\u35FC\u3602q\u0100;q\u1222\u35B2eq\u0100;q\u35E7\u35E4m;\u6AC8\u0100bp\u3611\u3613;\u6AD4;\u6AD6\u0180Aan\u361C\u3620\u362Drr;\u61D9r\u0100hr\u3626\u3628\xEB\u222E\u0100;o\u0A2B\u0A29war;\u692Alig\u803B\xDF\u40DF\u0BE1\u3651\u365D\u3660\u12CE\u3673\u3679\0\u367E\u36C2\0\0\0\0\0\u36DB\u3703\0\u3709\u376C\0\0\0\u3787\u0272\u3656\0\0\u365Bget;\u6316;\u43C4r\xEB\u0E5F\u0180aey\u3666\u366B\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uC000\u{1D531}\u0200eiko\u3686\u369D\u36B5\u36BC\u01F2\u368B\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369B\u43B8ym;\u43D1\u0100cn\u36A2\u36B2k\u0100as\u36A8\u36AEppro\xF8\u12C1im\xBB\u12ACs\xF0\u129E\u0100as\u36BA\u36AE\xF0\u12C1rn\u803B\xFE\u40FE\u01EC\u031F\u36C6\u22E7es\u8180\xD7;bd\u36CF\u36D0\u36D8\u40D7\u0100;a\u190F\u36D5r;\u6A31;\u6A30\u0180eps\u36E1\u36E3\u3700\xE1\u2A4D\u0200;bcf\u0486\u36EC\u36F0\u36F4ot;\u6336ir;\u6AF1\u0100;o\u36F9\u36FC\uC000\u{1D565}rk;\u6ADA\xE1\u3362rime;\u6034\u0180aip\u370F\u3712\u3764d\xE5\u1248\u0380adempst\u3721\u374D\u3740\u3751\u3757\u375C\u375Fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65B5own\xBB\u1DBBeft\u0100;e\u2800\u373E\xF1\u092E;\u625Cight\u0100;e\u32AA\u374B\xF1\u105Aot;\u65ECinus;\u6A3Alus;\u6A39b;\u69CDime;\u6A3Bezium;\u63E2\u0180cht\u3772\u377D\u3781\u0100ry\u3777\u377B;\uC000\u{1D4C9};\u4446cy;\u445Brok;\u4167\u0100io\u378B\u378Ex\xF4\u1777head\u0100lr\u3797\u37A0eftarro\xF7\u084Fightarrow\xBB\u0F5D\u0900AHabcdfghlmoprstuw\u37D0\u37D3\u37D7\u37E4\u37F0\u37FC\u380E\u381C\u3823\u3834\u3851\u385D\u386B\u38A9\u38CC\u38D2\u38EA\u38F6r\xF2\u03EDar;\u6963\u0100cr\u37DC\u37E2ute\u803B\xFA\u40FA\xF2\u1150r\u01E3\u37EA\0\u37EDy;\u445Eve;\u416D\u0100iy\u37F5\u37FArc\u803B\xFB\u40FB;\u4443\u0180abh\u3803\u3806\u380Br\xF2\u13ADlac;\u4171a\xF2\u13C3\u0100ir\u3813\u3818sht;\u697E;\uC000\u{1D532}rave\u803B\xF9\u40F9\u0161\u3827\u3831r\u0100lr\u382C\u382E\xBB\u0957\xBB\u1083lk;\u6580\u0100ct\u3839\u384D\u026F\u383F\0\0\u384Arn\u0100;e\u3845\u3846\u631Cr\xBB\u3846op;\u630Fri;\u65F8\u0100al\u3856\u385Acr;\u416B\u80BB\xA8\u0349\u0100gp\u3862\u3866on;\u4173f;\uC000\u{1D566}\u0300adhlsu\u114B\u3878\u387D\u1372\u3891\u38A0own\xE1\u13B3arpoon\u0100lr\u3888\u388Cef\xF4\u382Digh\xF4\u382Fi\u0180;hl\u3899\u389A\u389C\u43C5\xBB\u13FAon\xBB\u389Aparrows;\u61C8\u0180cit\u38B0\u38C4\u38C8\u026F\u38B6\0\0\u38C1rn\u0100;e\u38BC\u38BD\u631Dr\xBB\u38BDop;\u630Eng;\u416Fri;\u65F9cr;\uC000\u{1D4CA}\u0180dir\u38D9\u38DD\u38E2ot;\u62F0lde;\u4169i\u0100;f\u3730\u38E8\xBB\u1813\u0100am\u38EF\u38F2r\xF2\u38A8l\u803B\xFC\u40FCangle;\u69A7\u0780ABDacdeflnoprsz\u391C\u391F\u3929\u392D\u39B5\u39B8\u39BD\u39DF\u39E4\u39E8\u39F3\u39F9\u39FD\u3A01\u3A20r\xF2\u03F7ar\u0100;v\u3926\u3927\u6AE8;\u6AE9as\xE8\u03E1\u0100nr\u3932\u3937grt;\u699C\u0380eknprst\u34E3\u3946\u394B\u3952\u395D\u3964\u3996app\xE1\u2415othin\xE7\u1E96\u0180hir\u34EB\u2EC8\u3959op\xF4\u2FB5\u0100;h\u13B7\u3962\xEF\u318D\u0100iu\u3969\u396Dgm\xE1\u33B3\u0100bp\u3972\u3984setneq\u0100;q\u397D\u3980\uC000\u228A\uFE00;\uC000\u2ACB\uFE00setneq\u0100;q\u398F\u3992\uC000\u228B\uFE00;\uC000\u2ACC\uFE00\u0100hr\u399B\u399Fet\xE1\u369Ciangle\u0100lr\u39AA\u39AFeft\xBB\u0925ight\xBB\u1051y;\u4432ash\xBB\u1036\u0180elr\u39C4\u39D2\u39D7\u0180;be\u2DEA\u39CB\u39CFar;\u62BBq;\u625Alip;\u62EE\u0100bt\u39DC\u1468a\xF2\u1469r;\uC000\u{1D533}tr\xE9\u39AEsu\u0100bp\u39EF\u39F1\xBB\u0D1C\xBB\u0D59pf;\uC000\u{1D567}ro\xF0\u0EFBtr\xE9\u39B4\u0100cu\u3A06\u3A0Br;\uC000\u{1D4CB}\u0100bp\u3A10\u3A18n\u0100Ee\u3980\u3A16\xBB\u397En\u0100Ee\u3992\u3A1E\xBB\u3990igzag;\u699A\u0380cefoprs\u3A36\u3A3B\u3A56\u3A5B\u3A54\u3A61\u3A6Airc;\u4175\u0100di\u3A40\u3A51\u0100bg\u3A45\u3A49ar;\u6A5Fe\u0100;q\u15FA\u3A4F;\u6259erp;\u6118r;\uC000\u{1D534}pf;\uC000\u{1D568}\u0100;e\u1479\u3A66at\xE8\u1479cr;\uC000\u{1D4CC}\u0AE3\u178E\u3A87\0\u3A8B\0\u3A90\u3A9B\0\0\u3A9D\u3AA8\u3AAB\u3AAF\0\0\u3AC3\u3ACE\0\u3AD8\u17DC\u17DFtr\xE9\u17D1r;\uC000\u{1D535}\u0100Aa\u3A94\u3A97r\xF2\u03C3r\xF2\u09F6;\u43BE\u0100Aa\u3AA1\u3AA4r\xF2\u03B8r\xF2\u09EBa\xF0\u2713is;\u62FB\u0180dpt\u17A4\u3AB5\u3ABE\u0100fl\u3ABA\u17A9;\uC000\u{1D569}im\xE5\u17B2\u0100Aa\u3AC7\u3ACAr\xF2\u03CEr\xF2\u0A01\u0100cq\u3AD2\u17B8r;\uC000\u{1D4CD}\u0100pt\u17D6\u3ADCr\xE9\u17D4\u0400acefiosu\u3AF0\u3AFD\u3B08\u3B0C\u3B11\u3B15\u3B1B\u3B21c\u0100uy\u3AF6\u3AFBte\u803B\xFD\u40FD;\u444F\u0100iy\u3B02\u3B06rc;\u4177;\u444Bn\u803B\xA5\u40A5r;\uC000\u{1D536}cy;\u4457pf;\uC000\u{1D56A}cr;\uC000\u{1D4CE}\u0100cm\u3B26\u3B29y;\u444El\u803B\xFF\u40FF\u0500acdefhiosw\u3B42\u3B48\u3B54\u3B58\u3B64\u3B69\u3B6D\u3B74\u3B7A\u3B80cute;\u417A\u0100ay\u3B4D\u3B52ron;\u417E;\u4437ot;\u417C\u0100et\u3B5D\u3B61tr\xE6\u155Fa;\u43B6r;\uC000\u{1D537}cy;\u4436grarr;\u61DDpf;\uC000\u{1D56B}cr;\uC000\u{1D4CF}\u0100jn\u3B85\u3B87;\u600Dj;\u600C'.split("").map(function(c) {
        return c.charCodeAt(0);
      })
    );
  }
});

// node_modules/entities/lib/generated/decode-data-xml.js
var require_decode_data_xml = __commonJS({
  "node_modules/entities/lib/generated/decode-data-xml.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.default = new Uint16Array(
      // prettier-ignore
      "\u0200aglq	\x1B\u026D\0\0p;\u4026os;\u4027t;\u403Et;\u403Cuot;\u4022".split("").map(function(c) {
        return c.charCodeAt(0);
      })
    );
  }
});

// node_modules/entities/lib/decode_codepoint.js
var require_decode_codepoint = __commonJS({
  "node_modules/entities/lib/decode_codepoint.js"(exports2) {
    "use strict";
    var _a;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.replaceCodePoint = exports2.fromCodePoint = void 0;
    var decodeMap = /* @__PURE__ */ new Map([
      [0, 65533],
      // C1 Unicode control character reference replacements
      [128, 8364],
      [130, 8218],
      [131, 402],
      [132, 8222],
      [133, 8230],
      [134, 8224],
      [135, 8225],
      [136, 710],
      [137, 8240],
      [138, 352],
      [139, 8249],
      [140, 338],
      [142, 381],
      [145, 8216],
      [146, 8217],
      [147, 8220],
      [148, 8221],
      [149, 8226],
      [150, 8211],
      [151, 8212],
      [152, 732],
      [153, 8482],
      [154, 353],
      [155, 8250],
      [156, 339],
      [158, 382],
      [159, 376]
    ]);
    exports2.fromCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
    (_a = String.fromCodePoint) !== null && _a !== void 0 ? _a : function(codePoint) {
      var output = "";
      if (codePoint > 65535) {
        codePoint -= 65536;
        output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
        codePoint = 56320 | codePoint & 1023;
      }
      output += String.fromCharCode(codePoint);
      return output;
    };
    function replaceCodePoint(codePoint) {
      var _a2;
      if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
        return 65533;
      }
      return (_a2 = decodeMap.get(codePoint)) !== null && _a2 !== void 0 ? _a2 : codePoint;
    }
    exports2.replaceCodePoint = replaceCodePoint;
    function decodeCodePoint(codePoint) {
      return (0, exports2.fromCodePoint)(replaceCodePoint(codePoint));
    }
    exports2.default = decodeCodePoint;
  }
});

// node_modules/entities/lib/decode.js
var require_decode = __commonJS({
  "node_modules/entities/lib/decode.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.decodeXML = exports2.decodeHTMLStrict = exports2.decodeHTMLAttribute = exports2.decodeHTML = exports2.determineBranch = exports2.EntityDecoder = exports2.DecodingMode = exports2.BinTrieFlags = exports2.fromCodePoint = exports2.replaceCodePoint = exports2.decodeCodePoint = exports2.xmlDecodeTree = exports2.htmlDecodeTree = void 0;
    var decode_data_html_js_1 = __importDefault(require_decode_data_html());
    exports2.htmlDecodeTree = decode_data_html_js_1.default;
    var decode_data_xml_js_1 = __importDefault(require_decode_data_xml());
    exports2.xmlDecodeTree = decode_data_xml_js_1.default;
    var decode_codepoint_js_1 = __importStar(require_decode_codepoint());
    exports2.decodeCodePoint = decode_codepoint_js_1.default;
    var decode_codepoint_js_2 = require_decode_codepoint();
    Object.defineProperty(exports2, "replaceCodePoint", { enumerable: true, get: function() {
      return decode_codepoint_js_2.replaceCodePoint;
    } });
    Object.defineProperty(exports2, "fromCodePoint", { enumerable: true, get: function() {
      return decode_codepoint_js_2.fromCodePoint;
    } });
    var CharCodes;
    (function(CharCodes2) {
      CharCodes2[CharCodes2["NUM"] = 35] = "NUM";
      CharCodes2[CharCodes2["SEMI"] = 59] = "SEMI";
      CharCodes2[CharCodes2["EQUALS"] = 61] = "EQUALS";
      CharCodes2[CharCodes2["ZERO"] = 48] = "ZERO";
      CharCodes2[CharCodes2["NINE"] = 57] = "NINE";
      CharCodes2[CharCodes2["LOWER_A"] = 97] = "LOWER_A";
      CharCodes2[CharCodes2["LOWER_F"] = 102] = "LOWER_F";
      CharCodes2[CharCodes2["LOWER_X"] = 120] = "LOWER_X";
      CharCodes2[CharCodes2["LOWER_Z"] = 122] = "LOWER_Z";
      CharCodes2[CharCodes2["UPPER_A"] = 65] = "UPPER_A";
      CharCodes2[CharCodes2["UPPER_F"] = 70] = "UPPER_F";
      CharCodes2[CharCodes2["UPPER_Z"] = 90] = "UPPER_Z";
    })(CharCodes || (CharCodes = {}));
    var TO_LOWER_BIT = 32;
    var BinTrieFlags;
    (function(BinTrieFlags2) {
      BinTrieFlags2[BinTrieFlags2["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
      BinTrieFlags2[BinTrieFlags2["BRANCH_LENGTH"] = 16256] = "BRANCH_LENGTH";
      BinTrieFlags2[BinTrieFlags2["JUMP_TABLE"] = 127] = "JUMP_TABLE";
    })(BinTrieFlags = exports2.BinTrieFlags || (exports2.BinTrieFlags = {}));
    function isNumber(code) {
      return code >= CharCodes.ZERO && code <= CharCodes.NINE;
    }
    function isHexadecimalCharacter(code) {
      return code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_F || code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_F;
    }
    function isAsciiAlphaNumeric(code) {
      return code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_Z || code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_Z || isNumber(code);
    }
    function isEntityInAttributeInvalidEnd(code) {
      return code === CharCodes.EQUALS || isAsciiAlphaNumeric(code);
    }
    var EntityDecoderState;
    (function(EntityDecoderState2) {
      EntityDecoderState2[EntityDecoderState2["EntityStart"] = 0] = "EntityStart";
      EntityDecoderState2[EntityDecoderState2["NumericStart"] = 1] = "NumericStart";
      EntityDecoderState2[EntityDecoderState2["NumericDecimal"] = 2] = "NumericDecimal";
      EntityDecoderState2[EntityDecoderState2["NumericHex"] = 3] = "NumericHex";
      EntityDecoderState2[EntityDecoderState2["NamedEntity"] = 4] = "NamedEntity";
    })(EntityDecoderState || (EntityDecoderState = {}));
    var DecodingMode;
    (function(DecodingMode2) {
      DecodingMode2[DecodingMode2["Legacy"] = 0] = "Legacy";
      DecodingMode2[DecodingMode2["Strict"] = 1] = "Strict";
      DecodingMode2[DecodingMode2["Attribute"] = 2] = "Attribute";
    })(DecodingMode = exports2.DecodingMode || (exports2.DecodingMode = {}));
    var EntityDecoder = (
      /** @class */
      function() {
        function EntityDecoder2(decodeTree, emitCodePoint, errors) {
          this.decodeTree = decodeTree;
          this.emitCodePoint = emitCodePoint;
          this.errors = errors;
          this.state = EntityDecoderState.EntityStart;
          this.consumed = 1;
          this.result = 0;
          this.treeIndex = 0;
          this.excess = 1;
          this.decodeMode = DecodingMode.Strict;
        }
        EntityDecoder2.prototype.startEntity = function(decodeMode) {
          this.decodeMode = decodeMode;
          this.state = EntityDecoderState.EntityStart;
          this.result = 0;
          this.treeIndex = 0;
          this.excess = 1;
          this.consumed = 1;
        };
        EntityDecoder2.prototype.write = function(str, offset) {
          switch (this.state) {
            case EntityDecoderState.EntityStart: {
              if (str.charCodeAt(offset) === CharCodes.NUM) {
                this.state = EntityDecoderState.NumericStart;
                this.consumed += 1;
                return this.stateNumericStart(str, offset + 1);
              }
              this.state = EntityDecoderState.NamedEntity;
              return this.stateNamedEntity(str, offset);
            }
            case EntityDecoderState.NumericStart: {
              return this.stateNumericStart(str, offset);
            }
            case EntityDecoderState.NumericDecimal: {
              return this.stateNumericDecimal(str, offset);
            }
            case EntityDecoderState.NumericHex: {
              return this.stateNumericHex(str, offset);
            }
            case EntityDecoderState.NamedEntity: {
              return this.stateNamedEntity(str, offset);
            }
          }
        };
        EntityDecoder2.prototype.stateNumericStart = function(str, offset) {
          if (offset >= str.length) {
            return -1;
          }
          if ((str.charCodeAt(offset) | TO_LOWER_BIT) === CharCodes.LOWER_X) {
            this.state = EntityDecoderState.NumericHex;
            this.consumed += 1;
            return this.stateNumericHex(str, offset + 1);
          }
          this.state = EntityDecoderState.NumericDecimal;
          return this.stateNumericDecimal(str, offset);
        };
        EntityDecoder2.prototype.addToNumericResult = function(str, start, end, base) {
          if (start !== end) {
            var digitCount = end - start;
            this.result = this.result * Math.pow(base, digitCount) + parseInt(str.substr(start, digitCount), base);
            this.consumed += digitCount;
          }
        };
        EntityDecoder2.prototype.stateNumericHex = function(str, offset) {
          var startIdx = offset;
          while (offset < str.length) {
            var char = str.charCodeAt(offset);
            if (isNumber(char) || isHexadecimalCharacter(char)) {
              offset += 1;
            } else {
              this.addToNumericResult(str, startIdx, offset, 16);
              return this.emitNumericEntity(char, 3);
            }
          }
          this.addToNumericResult(str, startIdx, offset, 16);
          return -1;
        };
        EntityDecoder2.prototype.stateNumericDecimal = function(str, offset) {
          var startIdx = offset;
          while (offset < str.length) {
            var char = str.charCodeAt(offset);
            if (isNumber(char)) {
              offset += 1;
            } else {
              this.addToNumericResult(str, startIdx, offset, 10);
              return this.emitNumericEntity(char, 2);
            }
          }
          this.addToNumericResult(str, startIdx, offset, 10);
          return -1;
        };
        EntityDecoder2.prototype.emitNumericEntity = function(lastCp, expectedLength) {
          var _a;
          if (this.consumed <= expectedLength) {
            (_a = this.errors) === null || _a === void 0 ? void 0 : _a.absenceOfDigitsInNumericCharacterReference(this.consumed);
            return 0;
          }
          if (lastCp === CharCodes.SEMI) {
            this.consumed += 1;
          } else if (this.decodeMode === DecodingMode.Strict) {
            return 0;
          }
          this.emitCodePoint((0, decode_codepoint_js_1.replaceCodePoint)(this.result), this.consumed);
          if (this.errors) {
            if (lastCp !== CharCodes.SEMI) {
              this.errors.missingSemicolonAfterCharacterReference();
            }
            this.errors.validateNumericCharacterReference(this.result);
          }
          return this.consumed;
        };
        EntityDecoder2.prototype.stateNamedEntity = function(str, offset) {
          var decodeTree = this.decodeTree;
          var current = decodeTree[this.treeIndex];
          var valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
          for (; offset < str.length; offset++, this.excess++) {
            var char = str.charCodeAt(offset);
            this.treeIndex = determineBranch(decodeTree, current, this.treeIndex + Math.max(1, valueLength), char);
            if (this.treeIndex < 0) {
              return this.result === 0 || // If we are parsing an attribute
              this.decodeMode === DecodingMode.Attribute && // We shouldn't have consumed any characters after the entity,
              (valueLength === 0 || // And there should be no invalid characters.
              isEntityInAttributeInvalidEnd(char)) ? 0 : this.emitNotTerminatedNamedEntity();
            }
            current = decodeTree[this.treeIndex];
            valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
            if (valueLength !== 0) {
              if (char === CharCodes.SEMI) {
                return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
              }
              if (this.decodeMode !== DecodingMode.Strict) {
                this.result = this.treeIndex;
                this.consumed += this.excess;
                this.excess = 0;
              }
            }
          }
          return -1;
        };
        EntityDecoder2.prototype.emitNotTerminatedNamedEntity = function() {
          var _a;
          var _b = this, result = _b.result, decodeTree = _b.decodeTree;
          var valueLength = (decodeTree[result] & BinTrieFlags.VALUE_LENGTH) >> 14;
          this.emitNamedEntityData(result, valueLength, this.consumed);
          (_a = this.errors) === null || _a === void 0 ? void 0 : _a.missingSemicolonAfterCharacterReference();
          return this.consumed;
        };
        EntityDecoder2.prototype.emitNamedEntityData = function(result, valueLength, consumed) {
          var decodeTree = this.decodeTree;
          this.emitCodePoint(valueLength === 1 ? decodeTree[result] & ~BinTrieFlags.VALUE_LENGTH : decodeTree[result + 1], consumed);
          if (valueLength === 3) {
            this.emitCodePoint(decodeTree[result + 2], consumed);
          }
          return consumed;
        };
        EntityDecoder2.prototype.end = function() {
          var _a;
          switch (this.state) {
            case EntityDecoderState.NamedEntity: {
              return this.result !== 0 && (this.decodeMode !== DecodingMode.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
            }
            case EntityDecoderState.NumericDecimal: {
              return this.emitNumericEntity(0, 2);
            }
            case EntityDecoderState.NumericHex: {
              return this.emitNumericEntity(0, 3);
            }
            case EntityDecoderState.NumericStart: {
              (_a = this.errors) === null || _a === void 0 ? void 0 : _a.absenceOfDigitsInNumericCharacterReference(this.consumed);
              return 0;
            }
            case EntityDecoderState.EntityStart: {
              return 0;
            }
          }
        };
        return EntityDecoder2;
      }()
    );
    exports2.EntityDecoder = EntityDecoder;
    function getDecoder(decodeTree) {
      var ret = "";
      var decoder = new EntityDecoder(decodeTree, function(str) {
        return ret += (0, decode_codepoint_js_1.fromCodePoint)(str);
      });
      return function decodeWithTrie(str, decodeMode) {
        var lastIndex = 0;
        var offset = 0;
        while ((offset = str.indexOf("&", offset)) >= 0) {
          ret += str.slice(lastIndex, offset);
          decoder.startEntity(decodeMode);
          var len = decoder.write(
            str,
            // Skip the "&"
            offset + 1
          );
          if (len < 0) {
            lastIndex = offset + decoder.end();
            break;
          }
          lastIndex = offset + len;
          offset = len === 0 ? lastIndex + 1 : lastIndex;
        }
        var result = ret + str.slice(lastIndex);
        ret = "";
        return result;
      };
    }
    function determineBranch(decodeTree, current, nodeIdx, char) {
      var branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
      var jumpOffset = current & BinTrieFlags.JUMP_TABLE;
      if (branchCount === 0) {
        return jumpOffset !== 0 && char === jumpOffset ? nodeIdx : -1;
      }
      if (jumpOffset) {
        var value = char - jumpOffset;
        return value < 0 || value >= branchCount ? -1 : decodeTree[nodeIdx + value] - 1;
      }
      var lo = nodeIdx;
      var hi = lo + branchCount - 1;
      while (lo <= hi) {
        var mid = lo + hi >>> 1;
        var midVal = decodeTree[mid];
        if (midVal < char) {
          lo = mid + 1;
        } else if (midVal > char) {
          hi = mid - 1;
        } else {
          return decodeTree[mid + branchCount];
        }
      }
      return -1;
    }
    exports2.determineBranch = determineBranch;
    var htmlDecoder = getDecoder(decode_data_html_js_1.default);
    var xmlDecoder = getDecoder(decode_data_xml_js_1.default);
    function decodeHTML(str, mode) {
      if (mode === void 0) {
        mode = DecodingMode.Legacy;
      }
      return htmlDecoder(str, mode);
    }
    exports2.decodeHTML = decodeHTML;
    function decodeHTMLAttribute(str) {
      return htmlDecoder(str, DecodingMode.Attribute);
    }
    exports2.decodeHTMLAttribute = decodeHTMLAttribute;
    function decodeHTMLStrict(str) {
      return htmlDecoder(str, DecodingMode.Strict);
    }
    exports2.decodeHTMLStrict = decodeHTMLStrict;
    function decodeXML(str) {
      return xmlDecoder(str, DecodingMode.Strict);
    }
    exports2.decodeXML = decodeXML;
  }
});

// node_modules/entities/lib/generated/encode-html.js
var require_encode_html = __commonJS({
  "node_modules/entities/lib/generated/encode-html.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    function restoreDiff(arr) {
      for (var i = 1; i < arr.length; i++) {
        arr[i][0] += arr[i - 1][0] + 1;
      }
      return arr;
    }
    exports2.default = new Map(/* @__PURE__ */ restoreDiff([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(/* @__PURE__ */ restoreDiff([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(/* @__PURE__ */ restoreDiff([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(/* @__PURE__ */ restoreDiff([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));
  }
});

// node_modules/entities/lib/escape.js
var require_escape = __commonJS({
  "node_modules/entities/lib/escape.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.escapeText = exports2.escapeAttribute = exports2.escapeUTF8 = exports2.escape = exports2.encodeXML = exports2.getCodePoint = exports2.xmlReplacer = void 0;
    exports2.xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
    var xmlCodeMap = /* @__PURE__ */ new Map([
      [34, "&quot;"],
      [38, "&amp;"],
      [39, "&apos;"],
      [60, "&lt;"],
      [62, "&gt;"]
    ]);
    exports2.getCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    String.prototype.codePointAt != null ? function(str, index) {
      return str.codePointAt(index);
    } : (
      // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
      function(c, index) {
        return (c.charCodeAt(index) & 64512) === 55296 ? (c.charCodeAt(index) - 55296) * 1024 + c.charCodeAt(index + 1) - 56320 + 65536 : c.charCodeAt(index);
      }
    );
    function encodeXML(str) {
      var ret = "";
      var lastIdx = 0;
      var match;
      while ((match = exports2.xmlReplacer.exec(str)) !== null) {
        var i = match.index;
        var char = str.charCodeAt(i);
        var next = xmlCodeMap.get(char);
        if (next !== void 0) {
          ret += str.substring(lastIdx, i) + next;
          lastIdx = i + 1;
        } else {
          ret += "".concat(str.substring(lastIdx, i), "&#x").concat((0, exports2.getCodePoint)(str, i).toString(16), ";");
          lastIdx = exports2.xmlReplacer.lastIndex += Number((char & 64512) === 55296);
        }
      }
      return ret + str.substr(lastIdx);
    }
    exports2.encodeXML = encodeXML;
    exports2.escape = encodeXML;
    function getEscaper(regex, map) {
      return function escape(data) {
        var match;
        var lastIdx = 0;
        var result = "";
        while (match = regex.exec(data)) {
          if (lastIdx !== match.index) {
            result += data.substring(lastIdx, match.index);
          }
          result += map.get(match[0].charCodeAt(0));
          lastIdx = match.index + 1;
        }
        return result + data.substring(lastIdx);
      };
    }
    exports2.escapeUTF8 = getEscaper(/[&<>'"]/g, xmlCodeMap);
    exports2.escapeAttribute = getEscaper(/["&\u00A0]/g, /* @__PURE__ */ new Map([
      [34, "&quot;"],
      [38, "&amp;"],
      [160, "&nbsp;"]
    ]));
    exports2.escapeText = getEscaper(/[&<>\u00A0]/g, /* @__PURE__ */ new Map([
      [38, "&amp;"],
      [60, "&lt;"],
      [62, "&gt;"],
      [160, "&nbsp;"]
    ]));
  }
});

// node_modules/entities/lib/encode.js
var require_encode = __commonJS({
  "node_modules/entities/lib/encode.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.encodeNonAsciiHTML = exports2.encodeHTML = void 0;
    var encode_html_js_1 = __importDefault(require_encode_html());
    var escape_js_1 = require_escape();
    var htmlReplacer = /[\t\n!-,./:-@[-`\f{-}$\x80-\uFFFF]/g;
    function encodeHTML(data) {
      return encodeHTMLTrieRe(htmlReplacer, data);
    }
    exports2.encodeHTML = encodeHTML;
    function encodeNonAsciiHTML(data) {
      return encodeHTMLTrieRe(escape_js_1.xmlReplacer, data);
    }
    exports2.encodeNonAsciiHTML = encodeNonAsciiHTML;
    function encodeHTMLTrieRe(regExp, str) {
      var ret = "";
      var lastIdx = 0;
      var match;
      while ((match = regExp.exec(str)) !== null) {
        var i = match.index;
        ret += str.substring(lastIdx, i);
        var char = str.charCodeAt(i);
        var next = encode_html_js_1.default.get(char);
        if (typeof next === "object") {
          if (i + 1 < str.length) {
            var nextChar = str.charCodeAt(i + 1);
            var value = typeof next.n === "number" ? next.n === nextChar ? next.o : void 0 : next.n.get(nextChar);
            if (value !== void 0) {
              ret += value;
              lastIdx = regExp.lastIndex += 1;
              continue;
            }
          }
          next = next.v;
        }
        if (next !== void 0) {
          ret += next;
          lastIdx = i + 1;
        } else {
          var cp = (0, escape_js_1.getCodePoint)(str, i);
          ret += "&#x".concat(cp.toString(16), ";");
          lastIdx = regExp.lastIndex += Number(cp !== char);
        }
      }
      return ret + str.substr(lastIdx);
    }
  }
});

// node_modules/entities/lib/index.js
var require_lib3 = __commonJS({
  "node_modules/entities/lib/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.decodeXMLStrict = exports2.decodeHTML5Strict = exports2.decodeHTML4Strict = exports2.decodeHTML5 = exports2.decodeHTML4 = exports2.decodeHTMLAttribute = exports2.decodeHTMLStrict = exports2.decodeHTML = exports2.decodeXML = exports2.DecodingMode = exports2.EntityDecoder = exports2.encodeHTML5 = exports2.encodeHTML4 = exports2.encodeNonAsciiHTML = exports2.encodeHTML = exports2.escapeText = exports2.escapeAttribute = exports2.escapeUTF8 = exports2.escape = exports2.encodeXML = exports2.encode = exports2.decodeStrict = exports2.decode = exports2.EncodingMode = exports2.EntityLevel = void 0;
    var decode_js_1 = require_decode();
    var encode_js_1 = require_encode();
    var escape_js_1 = require_escape();
    var EntityLevel;
    (function(EntityLevel2) {
      EntityLevel2[EntityLevel2["XML"] = 0] = "XML";
      EntityLevel2[EntityLevel2["HTML"] = 1] = "HTML";
    })(EntityLevel = exports2.EntityLevel || (exports2.EntityLevel = {}));
    var EncodingMode;
    (function(EncodingMode2) {
      EncodingMode2[EncodingMode2["UTF8"] = 0] = "UTF8";
      EncodingMode2[EncodingMode2["ASCII"] = 1] = "ASCII";
      EncodingMode2[EncodingMode2["Extensive"] = 2] = "Extensive";
      EncodingMode2[EncodingMode2["Attribute"] = 3] = "Attribute";
      EncodingMode2[EncodingMode2["Text"] = 4] = "Text";
    })(EncodingMode = exports2.EncodingMode || (exports2.EncodingMode = {}));
    function decode(data, options) {
      if (options === void 0) {
        options = EntityLevel.XML;
      }
      var level = typeof options === "number" ? options : options.level;
      if (level === EntityLevel.HTML) {
        var mode = typeof options === "object" ? options.mode : void 0;
        return (0, decode_js_1.decodeHTML)(data, mode);
      }
      return (0, decode_js_1.decodeXML)(data);
    }
    exports2.decode = decode;
    function decodeStrict(data, options) {
      var _a;
      if (options === void 0) {
        options = EntityLevel.XML;
      }
      var opts = typeof options === "number" ? { level: options } : options;
      (_a = opts.mode) !== null && _a !== void 0 ? _a : opts.mode = decode_js_1.DecodingMode.Strict;
      return decode(data, opts);
    }
    exports2.decodeStrict = decodeStrict;
    function encode(data, options) {
      if (options === void 0) {
        options = EntityLevel.XML;
      }
      var opts = typeof options === "number" ? { level: options } : options;
      if (opts.mode === EncodingMode.UTF8)
        return (0, escape_js_1.escapeUTF8)(data);
      if (opts.mode === EncodingMode.Attribute)
        return (0, escape_js_1.escapeAttribute)(data);
      if (opts.mode === EncodingMode.Text)
        return (0, escape_js_1.escapeText)(data);
      if (opts.level === EntityLevel.HTML) {
        if (opts.mode === EncodingMode.ASCII) {
          return (0, encode_js_1.encodeNonAsciiHTML)(data);
        }
        return (0, encode_js_1.encodeHTML)(data);
      }
      return (0, escape_js_1.encodeXML)(data);
    }
    exports2.encode = encode;
    var escape_js_2 = require_escape();
    Object.defineProperty(exports2, "encodeXML", { enumerable: true, get: function() {
      return escape_js_2.encodeXML;
    } });
    Object.defineProperty(exports2, "escape", { enumerable: true, get: function() {
      return escape_js_2.escape;
    } });
    Object.defineProperty(exports2, "escapeUTF8", { enumerable: true, get: function() {
      return escape_js_2.escapeUTF8;
    } });
    Object.defineProperty(exports2, "escapeAttribute", { enumerable: true, get: function() {
      return escape_js_2.escapeAttribute;
    } });
    Object.defineProperty(exports2, "escapeText", { enumerable: true, get: function() {
      return escape_js_2.escapeText;
    } });
    var encode_js_2 = require_encode();
    Object.defineProperty(exports2, "encodeHTML", { enumerable: true, get: function() {
      return encode_js_2.encodeHTML;
    } });
    Object.defineProperty(exports2, "encodeNonAsciiHTML", { enumerable: true, get: function() {
      return encode_js_2.encodeNonAsciiHTML;
    } });
    Object.defineProperty(exports2, "encodeHTML4", { enumerable: true, get: function() {
      return encode_js_2.encodeHTML;
    } });
    Object.defineProperty(exports2, "encodeHTML5", { enumerable: true, get: function() {
      return encode_js_2.encodeHTML;
    } });
    var decode_js_2 = require_decode();
    Object.defineProperty(exports2, "EntityDecoder", { enumerable: true, get: function() {
      return decode_js_2.EntityDecoder;
    } });
    Object.defineProperty(exports2, "DecodingMode", { enumerable: true, get: function() {
      return decode_js_2.DecodingMode;
    } });
    Object.defineProperty(exports2, "decodeXML", { enumerable: true, get: function() {
      return decode_js_2.decodeXML;
    } });
    Object.defineProperty(exports2, "decodeHTML", { enumerable: true, get: function() {
      return decode_js_2.decodeHTML;
    } });
    Object.defineProperty(exports2, "decodeHTMLStrict", { enumerable: true, get: function() {
      return decode_js_2.decodeHTMLStrict;
    } });
    Object.defineProperty(exports2, "decodeHTMLAttribute", { enumerable: true, get: function() {
      return decode_js_2.decodeHTMLAttribute;
    } });
    Object.defineProperty(exports2, "decodeHTML4", { enumerable: true, get: function() {
      return decode_js_2.decodeHTML;
    } });
    Object.defineProperty(exports2, "decodeHTML5", { enumerable: true, get: function() {
      return decode_js_2.decodeHTML;
    } });
    Object.defineProperty(exports2, "decodeHTML4Strict", { enumerable: true, get: function() {
      return decode_js_2.decodeHTMLStrict;
    } });
    Object.defineProperty(exports2, "decodeHTML5Strict", { enumerable: true, get: function() {
      return decode_js_2.decodeHTMLStrict;
    } });
    Object.defineProperty(exports2, "decodeXMLStrict", { enumerable: true, get: function() {
      return decode_js_2.decodeXML;
    } });
  }
});

// node_modules/dom-serializer/lib/foreignNames.js
var require_foreignNames = __commonJS({
  "node_modules/dom-serializer/lib/foreignNames.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.attributeNames = exports2.elementNames = void 0;
    exports2.elementNames = new Map([
      "altGlyph",
      "altGlyphDef",
      "altGlyphItem",
      "animateColor",
      "animateMotion",
      "animateTransform",
      "clipPath",
      "feBlend",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feDistantLight",
      "feDropShadow",
      "feFlood",
      "feFuncA",
      "feFuncB",
      "feFuncG",
      "feFuncR",
      "feGaussianBlur",
      "feImage",
      "feMerge",
      "feMergeNode",
      "feMorphology",
      "feOffset",
      "fePointLight",
      "feSpecularLighting",
      "feSpotLight",
      "feTile",
      "feTurbulence",
      "foreignObject",
      "glyphRef",
      "linearGradient",
      "radialGradient",
      "textPath"
    ].map(function(val) {
      return [val.toLowerCase(), val];
    }));
    exports2.attributeNames = new Map([
      "definitionURL",
      "attributeName",
      "attributeType",
      "baseFrequency",
      "baseProfile",
      "calcMode",
      "clipPathUnits",
      "diffuseConstant",
      "edgeMode",
      "filterUnits",
      "glyphRef",
      "gradientTransform",
      "gradientUnits",
      "kernelMatrix",
      "kernelUnitLength",
      "keyPoints",
      "keySplines",
      "keyTimes",
      "lengthAdjust",
      "limitingConeAngle",
      "markerHeight",
      "markerUnits",
      "markerWidth",
      "maskContentUnits",
      "maskUnits",
      "numOctaves",
      "pathLength",
      "patternContentUnits",
      "patternTransform",
      "patternUnits",
      "pointsAtX",
      "pointsAtY",
      "pointsAtZ",
      "preserveAlpha",
      "preserveAspectRatio",
      "primitiveUnits",
      "refX",
      "refY",
      "repeatCount",
      "repeatDur",
      "requiredExtensions",
      "requiredFeatures",
      "specularConstant",
      "specularExponent",
      "spreadMethod",
      "startOffset",
      "stdDeviation",
      "stitchTiles",
      "surfaceScale",
      "systemLanguage",
      "tableValues",
      "targetX",
      "targetY",
      "textLength",
      "viewBox",
      "viewTarget",
      "xChannelSelector",
      "yChannelSelector",
      "zoomAndPan"
    ].map(function(val) {
      return [val.toLowerCase(), val];
    }));
  }
});

// node_modules/dom-serializer/lib/index.js
var require_lib4 = __commonJS({
  "node_modules/dom-serializer/lib/index.js"(exports2) {
    "use strict";
    var __assign = exports2 && exports2.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.render = void 0;
    var ElementType = __importStar(require_lib());
    var entities_1 = require_lib3();
    var foreignNames_js_1 = require_foreignNames();
    var unencodedElements = /* @__PURE__ */ new Set([
      "style",
      "script",
      "xmp",
      "iframe",
      "noembed",
      "noframes",
      "plaintext",
      "noscript"
    ]);
    function replaceQuotes(value) {
      return value.replace(/"/g, "&quot;");
    }
    function formatAttributes(attributes, opts) {
      var _a;
      if (!attributes)
        return;
      var encode = ((_a = opts.encodeEntities) !== null && _a !== void 0 ? _a : opts.decodeEntities) === false ? replaceQuotes : opts.xmlMode || opts.encodeEntities !== "utf8" ? entities_1.encodeXML : entities_1.escapeAttribute;
      return Object.keys(attributes).map(function(key) {
        var _a2, _b;
        var value = (_a2 = attributes[key]) !== null && _a2 !== void 0 ? _a2 : "";
        if (opts.xmlMode === "foreign") {
          key = (_b = foreignNames_js_1.attributeNames.get(key)) !== null && _b !== void 0 ? _b : key;
        }
        if (!opts.emptyAttrs && !opts.xmlMode && value === "") {
          return key;
        }
        return "".concat(key, '="').concat(encode(value), '"');
      }).join(" ");
    }
    var singleTag = /* @__PURE__ */ new Set([
      "area",
      "base",
      "basefont",
      "br",
      "col",
      "command",
      "embed",
      "frame",
      "hr",
      "img",
      "input",
      "isindex",
      "keygen",
      "link",
      "meta",
      "param",
      "source",
      "track",
      "wbr"
    ]);
    function render(node, options) {
      if (options === void 0) {
        options = {};
      }
      var nodes = "length" in node ? node : [node];
      var output = "";
      for (var i = 0; i < nodes.length; i++) {
        output += renderNode(nodes[i], options);
      }
      return output;
    }
    exports2.render = render;
    exports2.default = render;
    function renderNode(node, options) {
      switch (node.type) {
        case ElementType.Root:
          return render(node.children, options);
        case ElementType.Doctype:
        case ElementType.Directive:
          return renderDirective(node);
        case ElementType.Comment:
          return renderComment(node);
        case ElementType.CDATA:
          return renderCdata(node);
        case ElementType.Script:
        case ElementType.Style:
        case ElementType.Tag:
          return renderTag(node, options);
        case ElementType.Text:
          return renderText(node, options);
      }
    }
    var foreignModeIntegrationPoints = /* @__PURE__ */ new Set([
      "mi",
      "mo",
      "mn",
      "ms",
      "mtext",
      "annotation-xml",
      "foreignObject",
      "desc",
      "title"
    ]);
    var foreignElements = /* @__PURE__ */ new Set(["svg", "math"]);
    function renderTag(elem, opts) {
      var _a;
      if (opts.xmlMode === "foreign") {
        elem.name = (_a = foreignNames_js_1.elementNames.get(elem.name)) !== null && _a !== void 0 ? _a : elem.name;
        if (elem.parent && foreignModeIntegrationPoints.has(elem.parent.name)) {
          opts = __assign(__assign({}, opts), { xmlMode: false });
        }
      }
      if (!opts.xmlMode && foreignElements.has(elem.name)) {
        opts = __assign(__assign({}, opts), { xmlMode: "foreign" });
      }
      var tag = "<".concat(elem.name);
      var attribs = formatAttributes(elem.attribs, opts);
      if (attribs) {
        tag += " ".concat(attribs);
      }
      if (elem.children.length === 0 && (opts.xmlMode ? (
        // In XML mode or foreign mode, and user hasn't explicitly turned off self-closing tags
        opts.selfClosingTags !== false
      ) : (
        // User explicitly asked for self-closing tags, even in HTML mode
        opts.selfClosingTags && singleTag.has(elem.name)
      ))) {
        if (!opts.xmlMode)
          tag += " ";
        tag += "/>";
      } else {
        tag += ">";
        if (elem.children.length > 0) {
          tag += render(elem.children, opts);
        }
        if (opts.xmlMode || !singleTag.has(elem.name)) {
          tag += "</".concat(elem.name, ">");
        }
      }
      return tag;
    }
    function renderDirective(elem) {
      return "<".concat(elem.data, ">");
    }
    function renderText(elem, opts) {
      var _a;
      var data = elem.data || "";
      if (((_a = opts.encodeEntities) !== null && _a !== void 0 ? _a : opts.decodeEntities) !== false && !(!opts.xmlMode && elem.parent && unencodedElements.has(elem.parent.name))) {
        data = opts.xmlMode || opts.encodeEntities !== "utf8" ? (0, entities_1.encodeXML)(data) : (0, entities_1.escapeText)(data);
      }
      return data;
    }
    function renderCdata(elem) {
      return "<![CDATA[".concat(elem.children[0].data, "]]>");
    }
    function renderComment(elem) {
      return "<!--".concat(elem.data, "-->");
    }
  }
});

// node_modules/domutils/lib/stringify.js
var require_stringify = __commonJS({
  "node_modules/domutils/lib/stringify.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getOuterHTML = getOuterHTML;
    exports2.getInnerHTML = getInnerHTML;
    exports2.getText = getText;
    exports2.textContent = textContent;
    exports2.innerText = innerText;
    var domhandler_1 = require_lib2();
    var dom_serializer_1 = __importDefault(require_lib4());
    var domelementtype_1 = require_lib();
    function getOuterHTML(node, options) {
      return (0, dom_serializer_1.default)(node, options);
    }
    function getInnerHTML(node, options) {
      return (0, domhandler_1.hasChildren)(node) ? node.children.map(function(node2) {
        return getOuterHTML(node2, options);
      }).join("") : "";
    }
    function getText(node) {
      if (Array.isArray(node))
        return node.map(getText).join("");
      if ((0, domhandler_1.isTag)(node))
        return node.name === "br" ? "\n" : getText(node.children);
      if ((0, domhandler_1.isCDATA)(node))
        return getText(node.children);
      if ((0, domhandler_1.isText)(node))
        return node.data;
      return "";
    }
    function textContent(node) {
      if (Array.isArray(node))
        return node.map(textContent).join("");
      if ((0, domhandler_1.hasChildren)(node) && !(0, domhandler_1.isComment)(node)) {
        return textContent(node.children);
      }
      if ((0, domhandler_1.isText)(node))
        return node.data;
      return "";
    }
    function innerText(node) {
      if (Array.isArray(node))
        return node.map(innerText).join("");
      if ((0, domhandler_1.hasChildren)(node) && (node.type === domelementtype_1.ElementType.Tag || (0, domhandler_1.isCDATA)(node))) {
        return innerText(node.children);
      }
      if ((0, domhandler_1.isText)(node))
        return node.data;
      return "";
    }
  }
});

// node_modules/domutils/lib/traversal.js
var require_traversal = __commonJS({
  "node_modules/domutils/lib/traversal.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getChildren = getChildren;
    exports2.getParent = getParent;
    exports2.getSiblings = getSiblings;
    exports2.getAttributeValue = getAttributeValue;
    exports2.hasAttrib = hasAttrib;
    exports2.getName = getName;
    exports2.nextElementSibling = nextElementSibling;
    exports2.prevElementSibling = prevElementSibling;
    var domhandler_1 = require_lib2();
    function getChildren(elem) {
      return (0, domhandler_1.hasChildren)(elem) ? elem.children : [];
    }
    function getParent(elem) {
      return elem.parent || null;
    }
    function getSiblings(elem) {
      var _a, _b;
      var parent = getParent(elem);
      if (parent != null)
        return getChildren(parent);
      var siblings = [elem];
      var prev = elem.prev, next = elem.next;
      while (prev != null) {
        siblings.unshift(prev);
        _a = prev, prev = _a.prev;
      }
      while (next != null) {
        siblings.push(next);
        _b = next, next = _b.next;
      }
      return siblings;
    }
    function getAttributeValue(elem, name) {
      var _a;
      return (_a = elem.attribs) === null || _a === void 0 ? void 0 : _a[name];
    }
    function hasAttrib(elem, name) {
      return elem.attribs != null && Object.prototype.hasOwnProperty.call(elem.attribs, name) && elem.attribs[name] != null;
    }
    function getName(elem) {
      return elem.name;
    }
    function nextElementSibling(elem) {
      var _a;
      var next = elem.next;
      while (next !== null && !(0, domhandler_1.isTag)(next))
        _a = next, next = _a.next;
      return next;
    }
    function prevElementSibling(elem) {
      var _a;
      var prev = elem.prev;
      while (prev !== null && !(0, domhandler_1.isTag)(prev))
        _a = prev, prev = _a.prev;
      return prev;
    }
  }
});

// node_modules/domutils/lib/manipulation.js
var require_manipulation = __commonJS({
  "node_modules/domutils/lib/manipulation.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.removeElement = removeElement;
    exports2.replaceElement = replaceElement;
    exports2.appendChild = appendChild;
    exports2.append = append;
    exports2.prependChild = prependChild;
    exports2.prepend = prepend;
    function removeElement(elem) {
      if (elem.prev)
        elem.prev.next = elem.next;
      if (elem.next)
        elem.next.prev = elem.prev;
      if (elem.parent) {
        var childs = elem.parent.children;
        var childsIndex = childs.lastIndexOf(elem);
        if (childsIndex >= 0) {
          childs.splice(childsIndex, 1);
        }
      }
      elem.next = null;
      elem.prev = null;
      elem.parent = null;
    }
    function replaceElement(elem, replacement) {
      var prev = replacement.prev = elem.prev;
      if (prev) {
        prev.next = replacement;
      }
      var next = replacement.next = elem.next;
      if (next) {
        next.prev = replacement;
      }
      var parent = replacement.parent = elem.parent;
      if (parent) {
        var childs = parent.children;
        childs[childs.lastIndexOf(elem)] = replacement;
        elem.parent = null;
      }
    }
    function appendChild(parent, child) {
      removeElement(child);
      child.next = null;
      child.parent = parent;
      if (parent.children.push(child) > 1) {
        var sibling = parent.children[parent.children.length - 2];
        sibling.next = child;
        child.prev = sibling;
      } else {
        child.prev = null;
      }
    }
    function append(elem, next) {
      removeElement(next);
      var parent = elem.parent;
      var currNext = elem.next;
      next.next = currNext;
      next.prev = elem;
      elem.next = next;
      next.parent = parent;
      if (currNext) {
        currNext.prev = next;
        if (parent) {
          var childs = parent.children;
          childs.splice(childs.lastIndexOf(currNext), 0, next);
        }
      } else if (parent) {
        parent.children.push(next);
      }
    }
    function prependChild(parent, child) {
      removeElement(child);
      child.parent = parent;
      child.prev = null;
      if (parent.children.unshift(child) !== 1) {
        var sibling = parent.children[1];
        sibling.prev = child;
        child.next = sibling;
      } else {
        child.next = null;
      }
    }
    function prepend(elem, prev) {
      removeElement(prev);
      var parent = elem.parent;
      if (parent) {
        var childs = parent.children;
        childs.splice(childs.indexOf(elem), 0, prev);
      }
      if (elem.prev) {
        elem.prev.next = prev;
      }
      prev.parent = parent;
      prev.prev = elem.prev;
      prev.next = elem;
      elem.prev = prev;
    }
  }
});

// node_modules/domutils/lib/querying.js
var require_querying = __commonJS({
  "node_modules/domutils/lib/querying.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.filter = filter;
    exports2.find = find;
    exports2.findOneChild = findOneChild;
    exports2.findOne = findOne;
    exports2.existsOne = existsOne;
    exports2.findAll = findAll;
    var domhandler_1 = require_lib2();
    function filter(test, node, recurse, limit) {
      if (recurse === void 0) {
        recurse = true;
      }
      if (limit === void 0) {
        limit = Infinity;
      }
      return find(test, Array.isArray(node) ? node : [node], recurse, limit);
    }
    function find(test, nodes, recurse, limit) {
      var result = [];
      var nodeStack = [Array.isArray(nodes) ? nodes : [nodes]];
      var indexStack = [0];
      for (; ; ) {
        if (indexStack[0] >= nodeStack[0].length) {
          if (indexStack.length === 1) {
            return result;
          }
          nodeStack.shift();
          indexStack.shift();
          continue;
        }
        var elem = nodeStack[0][indexStack[0]++];
        if (test(elem)) {
          result.push(elem);
          if (--limit <= 0)
            return result;
        }
        if (recurse && (0, domhandler_1.hasChildren)(elem) && elem.children.length > 0) {
          indexStack.unshift(0);
          nodeStack.unshift(elem.children);
        }
      }
    }
    function findOneChild(test, nodes) {
      return nodes.find(test);
    }
    function findOne(test, nodes, recurse) {
      if (recurse === void 0) {
        recurse = true;
      }
      var searchedNodes = Array.isArray(nodes) ? nodes : [nodes];
      for (var i = 0; i < searchedNodes.length; i++) {
        var node = searchedNodes[i];
        if ((0, domhandler_1.isTag)(node) && test(node)) {
          return node;
        }
        if (recurse && (0, domhandler_1.hasChildren)(node) && node.children.length > 0) {
          var found = findOne(test, node.children, true);
          if (found)
            return found;
        }
      }
      return null;
    }
    function existsOne(test, nodes) {
      return (Array.isArray(nodes) ? nodes : [nodes]).some(function(node) {
        return (0, domhandler_1.isTag)(node) && test(node) || (0, domhandler_1.hasChildren)(node) && existsOne(test, node.children);
      });
    }
    function findAll(test, nodes) {
      var result = [];
      var nodeStack = [Array.isArray(nodes) ? nodes : [nodes]];
      var indexStack = [0];
      for (; ; ) {
        if (indexStack[0] >= nodeStack[0].length) {
          if (nodeStack.length === 1) {
            return result;
          }
          nodeStack.shift();
          indexStack.shift();
          continue;
        }
        var elem = nodeStack[0][indexStack[0]++];
        if ((0, domhandler_1.isTag)(elem) && test(elem))
          result.push(elem);
        if ((0, domhandler_1.hasChildren)(elem) && elem.children.length > 0) {
          indexStack.unshift(0);
          nodeStack.unshift(elem.children);
        }
      }
    }
  }
});

// node_modules/domutils/lib/legacy.js
var require_legacy = __commonJS({
  "node_modules/domutils/lib/legacy.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.testElement = testElement;
    exports2.getElements = getElements;
    exports2.getElementById = getElementById;
    exports2.getElementsByTagName = getElementsByTagName;
    exports2.getElementsByClassName = getElementsByClassName;
    exports2.getElementsByTagType = getElementsByTagType;
    var domhandler_1 = require_lib2();
    var querying_js_1 = require_querying();
    var Checks = {
      tag_name: function(name) {
        if (typeof name === "function") {
          return function(elem) {
            return (0, domhandler_1.isTag)(elem) && name(elem.name);
          };
        } else if (name === "*") {
          return domhandler_1.isTag;
        }
        return function(elem) {
          return (0, domhandler_1.isTag)(elem) && elem.name === name;
        };
      },
      tag_type: function(type) {
        if (typeof type === "function") {
          return function(elem) {
            return type(elem.type);
          };
        }
        return function(elem) {
          return elem.type === type;
        };
      },
      tag_contains: function(data) {
        if (typeof data === "function") {
          return function(elem) {
            return (0, domhandler_1.isText)(elem) && data(elem.data);
          };
        }
        return function(elem) {
          return (0, domhandler_1.isText)(elem) && elem.data === data;
        };
      }
    };
    function getAttribCheck(attrib, value) {
      if (typeof value === "function") {
        return function(elem) {
          return (0, domhandler_1.isTag)(elem) && value(elem.attribs[attrib]);
        };
      }
      return function(elem) {
        return (0, domhandler_1.isTag)(elem) && elem.attribs[attrib] === value;
      };
    }
    function combineFuncs(a, b) {
      return function(elem) {
        return a(elem) || b(elem);
      };
    }
    function compileTest(options) {
      var funcs = Object.keys(options).map(function(key) {
        var value = options[key];
        return Object.prototype.hasOwnProperty.call(Checks, key) ? Checks[key](value) : getAttribCheck(key, value);
      });
      return funcs.length === 0 ? null : funcs.reduce(combineFuncs);
    }
    function testElement(options, node) {
      var test = compileTest(options);
      return test ? test(node) : true;
    }
    function getElements(options, nodes, recurse, limit) {
      if (limit === void 0) {
        limit = Infinity;
      }
      var test = compileTest(options);
      return test ? (0, querying_js_1.filter)(test, nodes, recurse, limit) : [];
    }
    function getElementById(id, nodes, recurse) {
      if (recurse === void 0) {
        recurse = true;
      }
      if (!Array.isArray(nodes))
        nodes = [nodes];
      return (0, querying_js_1.findOne)(getAttribCheck("id", id), nodes, recurse);
    }
    function getElementsByTagName(tagName, nodes, recurse, limit) {
      if (recurse === void 0) {
        recurse = true;
      }
      if (limit === void 0) {
        limit = Infinity;
      }
      return (0, querying_js_1.filter)(Checks["tag_name"](tagName), nodes, recurse, limit);
    }
    function getElementsByClassName(className, nodes, recurse, limit) {
      if (recurse === void 0) {
        recurse = true;
      }
      if (limit === void 0) {
        limit = Infinity;
      }
      return (0, querying_js_1.filter)(getAttribCheck("class", className), nodes, recurse, limit);
    }
    function getElementsByTagType(type, nodes, recurse, limit) {
      if (recurse === void 0) {
        recurse = true;
      }
      if (limit === void 0) {
        limit = Infinity;
      }
      return (0, querying_js_1.filter)(Checks["tag_type"](type), nodes, recurse, limit);
    }
  }
});

// node_modules/domutils/lib/helpers.js
var require_helpers = __commonJS({
  "node_modules/domutils/lib/helpers.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.DocumentPosition = void 0;
    exports2.removeSubsets = removeSubsets;
    exports2.compareDocumentPosition = compareDocumentPosition;
    exports2.uniqueSort = uniqueSort;
    var domhandler_1 = require_lib2();
    function removeSubsets(nodes) {
      var idx = nodes.length;
      while (--idx >= 0) {
        var node = nodes[idx];
        if (idx > 0 && nodes.lastIndexOf(node, idx - 1) >= 0) {
          nodes.splice(idx, 1);
          continue;
        }
        for (var ancestor = node.parent; ancestor; ancestor = ancestor.parent) {
          if (nodes.includes(ancestor)) {
            nodes.splice(idx, 1);
            break;
          }
        }
      }
      return nodes;
    }
    var DocumentPosition;
    (function(DocumentPosition2) {
      DocumentPosition2[DocumentPosition2["DISCONNECTED"] = 1] = "DISCONNECTED";
      DocumentPosition2[DocumentPosition2["PRECEDING"] = 2] = "PRECEDING";
      DocumentPosition2[DocumentPosition2["FOLLOWING"] = 4] = "FOLLOWING";
      DocumentPosition2[DocumentPosition2["CONTAINS"] = 8] = "CONTAINS";
      DocumentPosition2[DocumentPosition2["CONTAINED_BY"] = 16] = "CONTAINED_BY";
    })(DocumentPosition || (exports2.DocumentPosition = DocumentPosition = {}));
    function compareDocumentPosition(nodeA, nodeB) {
      var aParents = [];
      var bParents = [];
      if (nodeA === nodeB) {
        return 0;
      }
      var current = (0, domhandler_1.hasChildren)(nodeA) ? nodeA : nodeA.parent;
      while (current) {
        aParents.unshift(current);
        current = current.parent;
      }
      current = (0, domhandler_1.hasChildren)(nodeB) ? nodeB : nodeB.parent;
      while (current) {
        bParents.unshift(current);
        current = current.parent;
      }
      var maxIdx = Math.min(aParents.length, bParents.length);
      var idx = 0;
      while (idx < maxIdx && aParents[idx] === bParents[idx]) {
        idx++;
      }
      if (idx === 0) {
        return DocumentPosition.DISCONNECTED;
      }
      var sharedParent = aParents[idx - 1];
      var siblings = sharedParent.children;
      var aSibling = aParents[idx];
      var bSibling = bParents[idx];
      if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
        if (sharedParent === nodeB) {
          return DocumentPosition.FOLLOWING | DocumentPosition.CONTAINED_BY;
        }
        return DocumentPosition.FOLLOWING;
      }
      if (sharedParent === nodeA) {
        return DocumentPosition.PRECEDING | DocumentPosition.CONTAINS;
      }
      return DocumentPosition.PRECEDING;
    }
    function uniqueSort(nodes) {
      nodes = nodes.filter(function(node, i, arr) {
        return !arr.includes(node, i + 1);
      });
      nodes.sort(function(a, b) {
        var relative = compareDocumentPosition(a, b);
        if (relative & DocumentPosition.PRECEDING) {
          return -1;
        } else if (relative & DocumentPosition.FOLLOWING) {
          return 1;
        }
        return 0;
      });
      return nodes;
    }
  }
});

// node_modules/domutils/lib/feeds.js
var require_feeds = __commonJS({
  "node_modules/domutils/lib/feeds.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.getFeed = getFeed;
    var stringify_js_1 = require_stringify();
    var legacy_js_1 = require_legacy();
    function getFeed(doc) {
      var feedRoot = getOneElement(isValidFeed, doc);
      return !feedRoot ? null : feedRoot.name === "feed" ? getAtomFeed(feedRoot) : getRssFeed(feedRoot);
    }
    function getAtomFeed(feedRoot) {
      var _a;
      var childs = feedRoot.children;
      var feed = {
        type: "atom",
        items: (0, legacy_js_1.getElementsByTagName)("entry", childs).map(function(item) {
          var _a2;
          var children = item.children;
          var entry = { media: getMediaElements(children) };
          addConditionally(entry, "id", "id", children);
          addConditionally(entry, "title", "title", children);
          var href2 = (_a2 = getOneElement("link", children)) === null || _a2 === void 0 ? void 0 : _a2.attribs["href"];
          if (href2) {
            entry.link = href2;
          }
          var description = fetch("summary", children) || fetch("content", children);
          if (description) {
            entry.description = description;
          }
          var pubDate = fetch("updated", children);
          if (pubDate) {
            entry.pubDate = new Date(pubDate);
          }
          return entry;
        })
      };
      addConditionally(feed, "id", "id", childs);
      addConditionally(feed, "title", "title", childs);
      var href = (_a = getOneElement("link", childs)) === null || _a === void 0 ? void 0 : _a.attribs["href"];
      if (href) {
        feed.link = href;
      }
      addConditionally(feed, "description", "subtitle", childs);
      var updated = fetch("updated", childs);
      if (updated) {
        feed.updated = new Date(updated);
      }
      addConditionally(feed, "author", "email", childs, true);
      return feed;
    }
    function getRssFeed(feedRoot) {
      var _a, _b;
      var childs = (_b = (_a = getOneElement("channel", feedRoot.children)) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : [];
      var feed = {
        type: feedRoot.name.substr(0, 3),
        id: "",
        items: (0, legacy_js_1.getElementsByTagName)("item", feedRoot.children).map(function(item) {
          var children = item.children;
          var entry = { media: getMediaElements(children) };
          addConditionally(entry, "id", "guid", children);
          addConditionally(entry, "title", "title", children);
          addConditionally(entry, "link", "link", children);
          addConditionally(entry, "description", "description", children);
          var pubDate = fetch("pubDate", children) || fetch("dc:date", children);
          if (pubDate)
            entry.pubDate = new Date(pubDate);
          return entry;
        })
      };
      addConditionally(feed, "title", "title", childs);
      addConditionally(feed, "link", "link", childs);
      addConditionally(feed, "description", "description", childs);
      var updated = fetch("lastBuildDate", childs);
      if (updated) {
        feed.updated = new Date(updated);
      }
      addConditionally(feed, "author", "managingEditor", childs, true);
      return feed;
    }
    var MEDIA_KEYS_STRING = ["url", "type", "lang"];
    var MEDIA_KEYS_INT = [
      "fileSize",
      "bitrate",
      "framerate",
      "samplingrate",
      "channels",
      "duration",
      "height",
      "width"
    ];
    function getMediaElements(where) {
      return (0, legacy_js_1.getElementsByTagName)("media:content", where).map(function(elem) {
        var attribs = elem.attribs;
        var media = {
          medium: attribs["medium"],
          isDefault: !!attribs["isDefault"]
        };
        for (var _i = 0, MEDIA_KEYS_STRING_1 = MEDIA_KEYS_STRING; _i < MEDIA_KEYS_STRING_1.length; _i++) {
          var attrib = MEDIA_KEYS_STRING_1[_i];
          if (attribs[attrib]) {
            media[attrib] = attribs[attrib];
          }
        }
        for (var _a = 0, MEDIA_KEYS_INT_1 = MEDIA_KEYS_INT; _a < MEDIA_KEYS_INT_1.length; _a++) {
          var attrib = MEDIA_KEYS_INT_1[_a];
          if (attribs[attrib]) {
            media[attrib] = parseInt(attribs[attrib], 10);
          }
        }
        if (attribs["expression"]) {
          media.expression = attribs["expression"];
        }
        return media;
      });
    }
    function getOneElement(tagName, node) {
      return (0, legacy_js_1.getElementsByTagName)(tagName, node, true, 1)[0];
    }
    function fetch(tagName, where, recurse) {
      if (recurse === void 0) {
        recurse = false;
      }
      return (0, stringify_js_1.textContent)((0, legacy_js_1.getElementsByTagName)(tagName, where, recurse, 1)).trim();
    }
    function addConditionally(obj, prop, tagName, where, recurse) {
      if (recurse === void 0) {
        recurse = false;
      }
      var val = fetch(tagName, where, recurse);
      if (val)
        obj[prop] = val;
    }
    function isValidFeed(value) {
      return value === "rss" || value === "feed" || value === "rdf:RDF";
    }
  }
});

// node_modules/domutils/lib/index.js
var require_lib5 = __commonJS({
  "node_modules/domutils/lib/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
          __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.hasChildren = exports2.isDocument = exports2.isComment = exports2.isText = exports2.isCDATA = exports2.isTag = void 0;
    __exportStar(require_stringify(), exports2);
    __exportStar(require_traversal(), exports2);
    __exportStar(require_manipulation(), exports2);
    __exportStar(require_querying(), exports2);
    __exportStar(require_legacy(), exports2);
    __exportStar(require_helpers(), exports2);
    __exportStar(require_feeds(), exports2);
    var domhandler_1 = require_lib2();
    Object.defineProperty(exports2, "isTag", { enumerable: true, get: function() {
      return domhandler_1.isTag;
    } });
    Object.defineProperty(exports2, "isCDATA", { enumerable: true, get: function() {
      return domhandler_1.isCDATA;
    } });
    Object.defineProperty(exports2, "isText", { enumerable: true, get: function() {
      return domhandler_1.isText;
    } });
    Object.defineProperty(exports2, "isComment", { enumerable: true, get: function() {
      return domhandler_1.isComment;
    } });
    Object.defineProperty(exports2, "isDocument", { enumerable: true, get: function() {
      return domhandler_1.isDocument;
    } });
    Object.defineProperty(exports2, "hasChildren", { enumerable: true, get: function() {
      return domhandler_1.hasChildren;
    } });
  }
});

// node_modules/boolbase/index.js
var require_boolbase = __commonJS({
  "node_modules/boolbase/index.js"(exports2, module2) {
    module2.exports = {
      trueFunc: function trueFunc() {
        return true;
      },
      falseFunc: function falseFunc() {
        return false;
      }
    };
  }
});

// node_modules/css-what/lib/commonjs/types.js
var require_types = __commonJS({
  "node_modules/css-what/lib/commonjs/types.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.AttributeAction = exports2.IgnoreCaseMode = exports2.SelectorType = void 0;
    var SelectorType;
    (function(SelectorType2) {
      SelectorType2["Attribute"] = "attribute";
      SelectorType2["Pseudo"] = "pseudo";
      SelectorType2["PseudoElement"] = "pseudo-element";
      SelectorType2["Tag"] = "tag";
      SelectorType2["Universal"] = "universal";
      SelectorType2["Adjacent"] = "adjacent";
      SelectorType2["Child"] = "child";
      SelectorType2["Descendant"] = "descendant";
      SelectorType2["Parent"] = "parent";
      SelectorType2["Sibling"] = "sibling";
      SelectorType2["ColumnCombinator"] = "column-combinator";
    })(SelectorType = exports2.SelectorType || (exports2.SelectorType = {}));
    exports2.IgnoreCaseMode = {
      Unknown: null,
      QuirksMode: "quirks",
      IgnoreCase: true,
      CaseSensitive: false
    };
    var AttributeAction;
    (function(AttributeAction2) {
      AttributeAction2["Any"] = "any";
      AttributeAction2["Element"] = "element";
      AttributeAction2["End"] = "end";
      AttributeAction2["Equals"] = "equals";
      AttributeAction2["Exists"] = "exists";
      AttributeAction2["Hyphen"] = "hyphen";
      AttributeAction2["Not"] = "not";
      AttributeAction2["Start"] = "start";
    })(AttributeAction = exports2.AttributeAction || (exports2.AttributeAction = {}));
  }
});

// node_modules/css-what/lib/commonjs/parse.js
var require_parse = __commonJS({
  "node_modules/css-what/lib/commonjs/parse.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.parse = exports2.isTraversal = void 0;
    var types_1 = require_types();
    var reName = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/;
    var reEscape = /\\([\da-f]{1,6}\s?|(\s)|.)/gi;
    var actionTypes = /* @__PURE__ */ new Map([
      [126, types_1.AttributeAction.Element],
      [94, types_1.AttributeAction.Start],
      [36, types_1.AttributeAction.End],
      [42, types_1.AttributeAction.Any],
      [33, types_1.AttributeAction.Not],
      [124, types_1.AttributeAction.Hyphen]
    ]);
    var unpackPseudos = /* @__PURE__ */ new Set([
      "has",
      "not",
      "matches",
      "is",
      "where",
      "host",
      "host-context"
    ]);
    function isTraversal(selector) {
      switch (selector.type) {
        case types_1.SelectorType.Adjacent:
        case types_1.SelectorType.Child:
        case types_1.SelectorType.Descendant:
        case types_1.SelectorType.Parent:
        case types_1.SelectorType.Sibling:
        case types_1.SelectorType.ColumnCombinator:
          return true;
        default:
          return false;
      }
    }
    exports2.isTraversal = isTraversal;
    var stripQuotesFromPseudos = /* @__PURE__ */ new Set(["contains", "icontains"]);
    function funescape(_, escaped, escapedWhitespace) {
      var high = parseInt(escaped, 16) - 65536;
      return high !== high || escapedWhitespace ? escaped : high < 0 ? (
        // BMP codepoint
        String.fromCharCode(high + 65536)
      ) : (
        // Supplemental Plane codepoint (surrogate pair)
        String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320)
      );
    }
    function unescapeCSS(str) {
      return str.replace(reEscape, funescape);
    }
    function isQuote(c) {
      return c === 39 || c === 34;
    }
    function isWhitespace(c) {
      return c === 32 || c === 9 || c === 10 || c === 12 || c === 13;
    }
    function parse2(selector) {
      var subselects = [];
      var endIndex = parseSelector(subselects, "".concat(selector), 0);
      if (endIndex < selector.length) {
        throw new Error("Unmatched selector: ".concat(selector.slice(endIndex)));
      }
      return subselects;
    }
    exports2.parse = parse2;
    function parseSelector(subselects, selector, selectorIndex) {
      var tokens = [];
      function getName(offset) {
        var match = selector.slice(selectorIndex + offset).match(reName);
        if (!match) {
          throw new Error("Expected name, found ".concat(selector.slice(selectorIndex)));
        }
        var name = match[0];
        selectorIndex += offset + name.length;
        return unescapeCSS(name);
      }
      function stripWhitespace(offset) {
        selectorIndex += offset;
        while (selectorIndex < selector.length && isWhitespace(selector.charCodeAt(selectorIndex))) {
          selectorIndex++;
        }
      }
      function readValueWithParenthesis() {
        selectorIndex += 1;
        var start = selectorIndex;
        var counter = 1;
        for (; counter > 0 && selectorIndex < selector.length; selectorIndex++) {
          if (selector.charCodeAt(selectorIndex) === 40 && !isEscaped(selectorIndex)) {
            counter++;
          } else if (selector.charCodeAt(selectorIndex) === 41 && !isEscaped(selectorIndex)) {
            counter--;
          }
        }
        if (counter) {
          throw new Error("Parenthesis not matched");
        }
        return unescapeCSS(selector.slice(start, selectorIndex - 1));
      }
      function isEscaped(pos) {
        var slashCount = 0;
        while (selector.charCodeAt(--pos) === 92)
          slashCount++;
        return (slashCount & 1) === 1;
      }
      function ensureNotTraversal() {
        if (tokens.length > 0 && isTraversal(tokens[tokens.length - 1])) {
          throw new Error("Did not expect successive traversals.");
        }
      }
      function addTraversal(type) {
        if (tokens.length > 0 && tokens[tokens.length - 1].type === types_1.SelectorType.Descendant) {
          tokens[tokens.length - 1].type = type;
          return;
        }
        ensureNotTraversal();
        tokens.push({ type });
      }
      function addSpecialAttribute(name, action2) {
        tokens.push({
          type: types_1.SelectorType.Attribute,
          name,
          action: action2,
          value: getName(1),
          namespace: null,
          ignoreCase: "quirks"
        });
      }
      function finalizeSubselector() {
        if (tokens.length && tokens[tokens.length - 1].type === types_1.SelectorType.Descendant) {
          tokens.pop();
        }
        if (tokens.length === 0) {
          throw new Error("Empty sub-selector");
        }
        subselects.push(tokens);
      }
      stripWhitespace(0);
      if (selector.length === selectorIndex) {
        return selectorIndex;
      }
      loop:
        while (selectorIndex < selector.length) {
          var firstChar = selector.charCodeAt(selectorIndex);
          switch (firstChar) {
            case 32:
            case 9:
            case 10:
            case 12:
            case 13: {
              if (tokens.length === 0 || tokens[0].type !== types_1.SelectorType.Descendant) {
                ensureNotTraversal();
                tokens.push({ type: types_1.SelectorType.Descendant });
              }
              stripWhitespace(1);
              break;
            }
            case 62: {
              addTraversal(types_1.SelectorType.Child);
              stripWhitespace(1);
              break;
            }
            case 60: {
              addTraversal(types_1.SelectorType.Parent);
              stripWhitespace(1);
              break;
            }
            case 126: {
              addTraversal(types_1.SelectorType.Sibling);
              stripWhitespace(1);
              break;
            }
            case 43: {
              addTraversal(types_1.SelectorType.Adjacent);
              stripWhitespace(1);
              break;
            }
            case 46: {
              addSpecialAttribute("class", types_1.AttributeAction.Element);
              break;
            }
            case 35: {
              addSpecialAttribute("id", types_1.AttributeAction.Equals);
              break;
            }
            case 91: {
              stripWhitespace(1);
              var name_1 = void 0;
              var namespace = null;
              if (selector.charCodeAt(selectorIndex) === 124) {
                name_1 = getName(1);
              } else if (selector.startsWith("*|", selectorIndex)) {
                namespace = "*";
                name_1 = getName(2);
              } else {
                name_1 = getName(0);
                if (selector.charCodeAt(selectorIndex) === 124 && selector.charCodeAt(selectorIndex + 1) !== 61) {
                  namespace = name_1;
                  name_1 = getName(1);
                }
              }
              stripWhitespace(0);
              var action = types_1.AttributeAction.Exists;
              var possibleAction = actionTypes.get(selector.charCodeAt(selectorIndex));
              if (possibleAction) {
                action = possibleAction;
                if (selector.charCodeAt(selectorIndex + 1) !== 61) {
                  throw new Error("Expected `=`");
                }
                stripWhitespace(2);
              } else if (selector.charCodeAt(selectorIndex) === 61) {
                action = types_1.AttributeAction.Equals;
                stripWhitespace(1);
              }
              var value = "";
              var ignoreCase = null;
              if (action !== "exists") {
                if (isQuote(selector.charCodeAt(selectorIndex))) {
                  var quote = selector.charCodeAt(selectorIndex);
                  var sectionEnd = selectorIndex + 1;
                  while (sectionEnd < selector.length && (selector.charCodeAt(sectionEnd) !== quote || isEscaped(sectionEnd))) {
                    sectionEnd += 1;
                  }
                  if (selector.charCodeAt(sectionEnd) !== quote) {
                    throw new Error("Attribute value didn't end");
                  }
                  value = unescapeCSS(selector.slice(selectorIndex + 1, sectionEnd));
                  selectorIndex = sectionEnd + 1;
                } else {
                  var valueStart = selectorIndex;
                  while (selectorIndex < selector.length && (!isWhitespace(selector.charCodeAt(selectorIndex)) && selector.charCodeAt(selectorIndex) !== 93 || isEscaped(selectorIndex))) {
                    selectorIndex += 1;
                  }
                  value = unescapeCSS(selector.slice(valueStart, selectorIndex));
                }
                stripWhitespace(0);
                var forceIgnore = selector.charCodeAt(selectorIndex) | 32;
                if (forceIgnore === 115) {
                  ignoreCase = false;
                  stripWhitespace(1);
                } else if (forceIgnore === 105) {
                  ignoreCase = true;
                  stripWhitespace(1);
                }
              }
              if (selector.charCodeAt(selectorIndex) !== 93) {
                throw new Error("Attribute selector didn't terminate");
              }
              selectorIndex += 1;
              var attributeSelector = {
                type: types_1.SelectorType.Attribute,
                name: name_1,
                action,
                value,
                namespace,
                ignoreCase
              };
              tokens.push(attributeSelector);
              break;
            }
            case 58: {
              if (selector.charCodeAt(selectorIndex + 1) === 58) {
                tokens.push({
                  type: types_1.SelectorType.PseudoElement,
                  name: getName(2).toLowerCase(),
                  data: selector.charCodeAt(selectorIndex) === 40 ? readValueWithParenthesis() : null
                });
                continue;
              }
              var name_2 = getName(1).toLowerCase();
              var data = null;
              if (selector.charCodeAt(selectorIndex) === 40) {
                if (unpackPseudos.has(name_2)) {
                  if (isQuote(selector.charCodeAt(selectorIndex + 1))) {
                    throw new Error("Pseudo-selector ".concat(name_2, " cannot be quoted"));
                  }
                  data = [];
                  selectorIndex = parseSelector(data, selector, selectorIndex + 1);
                  if (selector.charCodeAt(selectorIndex) !== 41) {
                    throw new Error("Missing closing parenthesis in :".concat(name_2, " (").concat(selector, ")"));
                  }
                  selectorIndex += 1;
                } else {
                  data = readValueWithParenthesis();
                  if (stripQuotesFromPseudos.has(name_2)) {
                    var quot = data.charCodeAt(0);
                    if (quot === data.charCodeAt(data.length - 1) && isQuote(quot)) {
                      data = data.slice(1, -1);
                    }
                  }
                  data = unescapeCSS(data);
                }
              }
              tokens.push({ type: types_1.SelectorType.Pseudo, name: name_2, data });
              break;
            }
            case 44: {
              finalizeSubselector();
              tokens = [];
              stripWhitespace(1);
              break;
            }
            default: {
              if (selector.startsWith("/*", selectorIndex)) {
                var endIndex = selector.indexOf("*/", selectorIndex + 2);
                if (endIndex < 0) {
                  throw new Error("Comment was not terminated");
                }
                selectorIndex = endIndex + 2;
                if (tokens.length === 0) {
                  stripWhitespace(0);
                }
                break;
              }
              var namespace = null;
              var name_3 = void 0;
              if (firstChar === 42) {
                selectorIndex += 1;
                name_3 = "*";
              } else if (firstChar === 124) {
                name_3 = "";
                if (selector.charCodeAt(selectorIndex + 1) === 124) {
                  addTraversal(types_1.SelectorType.ColumnCombinator);
                  stripWhitespace(2);
                  break;
                }
              } else if (reName.test(selector.slice(selectorIndex))) {
                name_3 = getName(0);
              } else {
                break loop;
              }
              if (selector.charCodeAt(selectorIndex) === 124 && selector.charCodeAt(selectorIndex + 1) !== 124) {
                namespace = name_3;
                if (selector.charCodeAt(selectorIndex + 1) === 42) {
                  name_3 = "*";
                  selectorIndex += 2;
                } else {
                  name_3 = getName(1);
                }
              }
              tokens.push(name_3 === "*" ? { type: types_1.SelectorType.Universal, namespace } : { type: types_1.SelectorType.Tag, name: name_3, namespace });
            }
          }
        }
      finalizeSubselector();
      return selectorIndex;
    }
  }
});

// node_modules/css-what/lib/commonjs/stringify.js
var require_stringify2 = __commonJS({
  "node_modules/css-what/lib/commonjs/stringify.js"(exports2) {
    "use strict";
    var __spreadArray = exports2 && exports2.__spreadArray || function(to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar)
              ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.stringify = void 0;
    var types_1 = require_types();
    var attribValChars = ["\\", '"'];
    var pseudoValChars = __spreadArray(__spreadArray([], attribValChars, true), ["(", ")"], false);
    var charsToEscapeInAttributeValue = new Set(attribValChars.map(function(c) {
      return c.charCodeAt(0);
    }));
    var charsToEscapeInPseudoValue = new Set(pseudoValChars.map(function(c) {
      return c.charCodeAt(0);
    }));
    var charsToEscapeInName = new Set(__spreadArray(__spreadArray([], pseudoValChars, true), [
      "~",
      "^",
      "$",
      "*",
      "+",
      "!",
      "|",
      ":",
      "[",
      "]",
      " ",
      "."
    ], false).map(function(c) {
      return c.charCodeAt(0);
    }));
    function stringify(selector) {
      return selector.map(function(token) {
        return token.map(stringifyToken).join("");
      }).join(", ");
    }
    exports2.stringify = stringify;
    function stringifyToken(token, index, arr) {
      switch (token.type) {
        case types_1.SelectorType.Child:
          return index === 0 ? "> " : " > ";
        case types_1.SelectorType.Parent:
          return index === 0 ? "< " : " < ";
        case types_1.SelectorType.Sibling:
          return index === 0 ? "~ " : " ~ ";
        case types_1.SelectorType.Adjacent:
          return index === 0 ? "+ " : " + ";
        case types_1.SelectorType.Descendant:
          return " ";
        case types_1.SelectorType.ColumnCombinator:
          return index === 0 ? "|| " : " || ";
        case types_1.SelectorType.Universal:
          return token.namespace === "*" && index + 1 < arr.length && "name" in arr[index + 1] ? "" : "".concat(getNamespace(token.namespace), "*");
        case types_1.SelectorType.Tag:
          return getNamespacedName(token);
        case types_1.SelectorType.PseudoElement:
          return "::".concat(escapeName(token.name, charsToEscapeInName)).concat(token.data === null ? "" : "(".concat(escapeName(token.data, charsToEscapeInPseudoValue), ")"));
        case types_1.SelectorType.Pseudo:
          return ":".concat(escapeName(token.name, charsToEscapeInName)).concat(token.data === null ? "" : "(".concat(typeof token.data === "string" ? escapeName(token.data, charsToEscapeInPseudoValue) : stringify(token.data), ")"));
        case types_1.SelectorType.Attribute: {
          if (token.name === "id" && token.action === types_1.AttributeAction.Equals && token.ignoreCase === "quirks" && !token.namespace) {
            return "#".concat(escapeName(token.value, charsToEscapeInName));
          }
          if (token.name === "class" && token.action === types_1.AttributeAction.Element && token.ignoreCase === "quirks" && !token.namespace) {
            return ".".concat(escapeName(token.value, charsToEscapeInName));
          }
          var name_1 = getNamespacedName(token);
          if (token.action === types_1.AttributeAction.Exists) {
            return "[".concat(name_1, "]");
          }
          return "[".concat(name_1).concat(getActionValue(token.action), '="').concat(escapeName(token.value, charsToEscapeInAttributeValue), '"').concat(token.ignoreCase === null ? "" : token.ignoreCase ? " i" : " s", "]");
        }
      }
    }
    function getActionValue(action) {
      switch (action) {
        case types_1.AttributeAction.Equals:
          return "";
        case types_1.AttributeAction.Element:
          return "~";
        case types_1.AttributeAction.Start:
          return "^";
        case types_1.AttributeAction.End:
          return "$";
        case types_1.AttributeAction.Any:
          return "*";
        case types_1.AttributeAction.Not:
          return "!";
        case types_1.AttributeAction.Hyphen:
          return "|";
        case types_1.AttributeAction.Exists:
          throw new Error("Shouldn't be here");
      }
    }
    function getNamespacedName(token) {
      return "".concat(getNamespace(token.namespace)).concat(escapeName(token.name, charsToEscapeInName));
    }
    function getNamespace(namespace) {
      return namespace !== null ? "".concat(namespace === "*" ? "*" : escapeName(namespace, charsToEscapeInName), "|") : "";
    }
    function escapeName(str, charsToEscape) {
      var lastIdx = 0;
      var ret = "";
      for (var i = 0; i < str.length; i++) {
        if (charsToEscape.has(str.charCodeAt(i))) {
          ret += "".concat(str.slice(lastIdx, i), "\\").concat(str.charAt(i));
          lastIdx = i + 1;
        }
      }
      return ret.length > 0 ? ret + str.slice(lastIdx) : str;
    }
  }
});

// node_modules/css-what/lib/commonjs/index.js
var require_commonjs = __commonJS({
  "node_modules/css-what/lib/commonjs/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports2 && exports2.__exportStar || function(m, exports3) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
          __createBinding(exports3, m, p);
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.stringify = exports2.parse = exports2.isTraversal = void 0;
    __exportStar(require_types(), exports2);
    var parse_1 = require_parse();
    Object.defineProperty(exports2, "isTraversal", { enumerable: true, get: function() {
      return parse_1.isTraversal;
    } });
    Object.defineProperty(exports2, "parse", { enumerable: true, get: function() {
      return parse_1.parse;
    } });
    var stringify_1 = require_stringify2();
    Object.defineProperty(exports2, "stringify", { enumerable: true, get: function() {
      return stringify_1.stringify;
    } });
  }
});

// node_modules/css-select/lib/sort.js
var require_sort = __commonJS({
  "node_modules/css-select/lib/sort.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isTraversal = void 0;
    var css_what_1 = require_commonjs();
    var procedure = /* @__PURE__ */ new Map([
      [css_what_1.SelectorType.Universal, 50],
      [css_what_1.SelectorType.Tag, 30],
      [css_what_1.SelectorType.Attribute, 1],
      [css_what_1.SelectorType.Pseudo, 0]
    ]);
    function isTraversal(token) {
      return !procedure.has(token.type);
    }
    exports2.isTraversal = isTraversal;
    var attributes = /* @__PURE__ */ new Map([
      [css_what_1.AttributeAction.Exists, 10],
      [css_what_1.AttributeAction.Equals, 8],
      [css_what_1.AttributeAction.Not, 7],
      [css_what_1.AttributeAction.Start, 6],
      [css_what_1.AttributeAction.End, 6],
      [css_what_1.AttributeAction.Any, 5]
    ]);
    function sortByProcedure(arr) {
      var procs = arr.map(getProcedure);
      for (var i = 1; i < arr.length; i++) {
        var procNew = procs[i];
        if (procNew < 0)
          continue;
        for (var j = i - 1; j >= 0 && procNew < procs[j]; j--) {
          var token = arr[j + 1];
          arr[j + 1] = arr[j];
          arr[j] = token;
          procs[j + 1] = procs[j];
          procs[j] = procNew;
        }
      }
    }
    exports2.default = sortByProcedure;
    function getProcedure(token) {
      var _a, _b;
      var proc = (_a = procedure.get(token.type)) !== null && _a !== void 0 ? _a : -1;
      if (token.type === css_what_1.SelectorType.Attribute) {
        proc = (_b = attributes.get(token.action)) !== null && _b !== void 0 ? _b : 4;
        if (token.action === css_what_1.AttributeAction.Equals && token.name === "id") {
          proc = 9;
        }
        if (token.ignoreCase) {
          proc >>= 1;
        }
      } else if (token.type === css_what_1.SelectorType.Pseudo) {
        if (!token.data) {
          proc = 3;
        } else if (token.name === "has" || token.name === "contains") {
          proc = 0;
        } else if (Array.isArray(token.data)) {
          proc = Math.min.apply(Math, token.data.map(function(d) {
            return Math.min.apply(Math, d.map(getProcedure));
          }));
          if (proc < 0) {
            proc = 0;
          }
        } else {
          proc = 2;
        }
      }
      return proc;
    }
  }
});

// node_modules/css-select/lib/attributes.js
var require_attributes = __commonJS({
  "node_modules/css-select/lib/attributes.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.attributeRules = void 0;
    var boolbase_1 = __importDefault(require_boolbase());
    var reChars = /[-[\]{}()*+?.,\\^$|#\s]/g;
    function escapeRegex(value) {
      return value.replace(reChars, "\\$&");
    }
    var caseInsensitiveAttributes = /* @__PURE__ */ new Set([
      "accept",
      "accept-charset",
      "align",
      "alink",
      "axis",
      "bgcolor",
      "charset",
      "checked",
      "clear",
      "codetype",
      "color",
      "compact",
      "declare",
      "defer",
      "dir",
      "direction",
      "disabled",
      "enctype",
      "face",
      "frame",
      "hreflang",
      "http-equiv",
      "lang",
      "language",
      "link",
      "media",
      "method",
      "multiple",
      "nohref",
      "noresize",
      "noshade",
      "nowrap",
      "readonly",
      "rel",
      "rev",
      "rules",
      "scope",
      "scrolling",
      "selected",
      "shape",
      "target",
      "text",
      "type",
      "valign",
      "valuetype",
      "vlink"
    ]);
    function shouldIgnoreCase(selector, options) {
      return typeof selector.ignoreCase === "boolean" ? selector.ignoreCase : selector.ignoreCase === "quirks" ? !!options.quirksMode : !options.xmlMode && caseInsensitiveAttributes.has(selector.name);
    }
    exports2.attributeRules = {
      equals: function(next, data, options) {
        var adapter = options.adapter;
        var name = data.name;
        var value = data.value;
        if (shouldIgnoreCase(data, options)) {
          value = value.toLowerCase();
          return function(elem) {
            var attr = adapter.getAttributeValue(elem, name);
            return attr != null && attr.length === value.length && attr.toLowerCase() === value && next(elem);
          };
        }
        return function(elem) {
          return adapter.getAttributeValue(elem, name) === value && next(elem);
        };
      },
      hyphen: function(next, data, options) {
        var adapter = options.adapter;
        var name = data.name;
        var value = data.value;
        var len = value.length;
        if (shouldIgnoreCase(data, options)) {
          value = value.toLowerCase();
          return function hyphenIC(elem) {
            var attr = adapter.getAttributeValue(elem, name);
            return attr != null && (attr.length === len || attr.charAt(len) === "-") && attr.substr(0, len).toLowerCase() === value && next(elem);
          };
        }
        return function hyphen(elem) {
          var attr = adapter.getAttributeValue(elem, name);
          return attr != null && (attr.length === len || attr.charAt(len) === "-") && attr.substr(0, len) === value && next(elem);
        };
      },
      element: function(next, data, options) {
        var adapter = options.adapter;
        var name = data.name, value = data.value;
        if (/\s/.test(value)) {
          return boolbase_1.default.falseFunc;
        }
        var regex = new RegExp("(?:^|\\s)".concat(escapeRegex(value), "(?:$|\\s)"), shouldIgnoreCase(data, options) ? "i" : "");
        return function element(elem) {
          var attr = adapter.getAttributeValue(elem, name);
          return attr != null && attr.length >= value.length && regex.test(attr) && next(elem);
        };
      },
      exists: function(next, _a, _b) {
        var name = _a.name;
        var adapter = _b.adapter;
        return function(elem) {
          return adapter.hasAttrib(elem, name) && next(elem);
        };
      },
      start: function(next, data, options) {
        var adapter = options.adapter;
        var name = data.name;
        var value = data.value;
        var len = value.length;
        if (len === 0) {
          return boolbase_1.default.falseFunc;
        }
        if (shouldIgnoreCase(data, options)) {
          value = value.toLowerCase();
          return function(elem) {
            var attr = adapter.getAttributeValue(elem, name);
            return attr != null && attr.length >= len && attr.substr(0, len).toLowerCase() === value && next(elem);
          };
        }
        return function(elem) {
          var _a;
          return !!((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.startsWith(value)) && next(elem);
        };
      },
      end: function(next, data, options) {
        var adapter = options.adapter;
        var name = data.name;
        var value = data.value;
        var len = -value.length;
        if (len === 0) {
          return boolbase_1.default.falseFunc;
        }
        if (shouldIgnoreCase(data, options)) {
          value = value.toLowerCase();
          return function(elem) {
            var _a;
            return ((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.substr(len).toLowerCase()) === value && next(elem);
          };
        }
        return function(elem) {
          var _a;
          return !!((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.endsWith(value)) && next(elem);
        };
      },
      any: function(next, data, options) {
        var adapter = options.adapter;
        var name = data.name, value = data.value;
        if (value === "") {
          return boolbase_1.default.falseFunc;
        }
        if (shouldIgnoreCase(data, options)) {
          var regex_1 = new RegExp(escapeRegex(value), "i");
          return function anyIC(elem) {
            var attr = adapter.getAttributeValue(elem, name);
            return attr != null && attr.length >= value.length && regex_1.test(attr) && next(elem);
          };
        }
        return function(elem) {
          var _a;
          return !!((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.includes(value)) && next(elem);
        };
      },
      not: function(next, data, options) {
        var adapter = options.adapter;
        var name = data.name;
        var value = data.value;
        if (value === "") {
          return function(elem) {
            return !!adapter.getAttributeValue(elem, name) && next(elem);
          };
        } else if (shouldIgnoreCase(data, options)) {
          value = value.toLowerCase();
          return function(elem) {
            var attr = adapter.getAttributeValue(elem, name);
            return (attr == null || attr.length !== value.length || attr.toLowerCase() !== value) && next(elem);
          };
        }
        return function(elem) {
          return adapter.getAttributeValue(elem, name) !== value && next(elem);
        };
      }
    };
  }
});

// node_modules/nth-check/lib/parse.js
var require_parse2 = __commonJS({
  "node_modules/nth-check/lib/parse.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.parse = void 0;
    var whitespace = /* @__PURE__ */ new Set([9, 10, 12, 13, 32]);
    var ZERO = "0".charCodeAt(0);
    var NINE = "9".charCodeAt(0);
    function parse2(formula) {
      formula = formula.trim().toLowerCase();
      if (formula === "even") {
        return [2, 0];
      } else if (formula === "odd") {
        return [2, 1];
      }
      var idx = 0;
      var a = 0;
      var sign = readSign();
      var number = readNumber();
      if (idx < formula.length && formula.charAt(idx) === "n") {
        idx++;
        a = sign * (number !== null && number !== void 0 ? number : 1);
        skipWhitespace();
        if (idx < formula.length) {
          sign = readSign();
          skipWhitespace();
          number = readNumber();
        } else {
          sign = number = 0;
        }
      }
      if (number === null || idx < formula.length) {
        throw new Error("n-th rule couldn't be parsed ('".concat(formula, "')"));
      }
      return [a, sign * number];
      function readSign() {
        if (formula.charAt(idx) === "-") {
          idx++;
          return -1;
        }
        if (formula.charAt(idx) === "+") {
          idx++;
        }
        return 1;
      }
      function readNumber() {
        var start = idx;
        var value = 0;
        while (idx < formula.length && formula.charCodeAt(idx) >= ZERO && formula.charCodeAt(idx) <= NINE) {
          value = value * 10 + (formula.charCodeAt(idx) - ZERO);
          idx++;
        }
        return idx === start ? null : value;
      }
      function skipWhitespace() {
        while (idx < formula.length && whitespace.has(formula.charCodeAt(idx))) {
          idx++;
        }
      }
    }
    exports2.parse = parse2;
  }
});

// node_modules/nth-check/lib/compile.js
var require_compile = __commonJS({
  "node_modules/nth-check/lib/compile.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.generate = exports2.compile = void 0;
    var boolbase_1 = __importDefault(require_boolbase());
    function compile(parsed) {
      var a = parsed[0];
      var b = parsed[1] - 1;
      if (b < 0 && a <= 0)
        return boolbase_1.default.falseFunc;
      if (a === -1)
        return function(index) {
          return index <= b;
        };
      if (a === 0)
        return function(index) {
          return index === b;
        };
      if (a === 1)
        return b < 0 ? boolbase_1.default.trueFunc : function(index) {
          return index >= b;
        };
      var absA = Math.abs(a);
      var bMod = (b % absA + absA) % absA;
      return a > 1 ? function(index) {
        return index >= b && index % absA === bMod;
      } : function(index) {
        return index <= b && index % absA === bMod;
      };
    }
    exports2.compile = compile;
    function generate(parsed) {
      var a = parsed[0];
      var b = parsed[1] - 1;
      var n = 0;
      if (a < 0) {
        var aPos_1 = -a;
        var minValue_1 = (b % aPos_1 + aPos_1) % aPos_1;
        return function() {
          var val = minValue_1 + aPos_1 * n++;
          return val > b ? null : val;
        };
      }
      if (a === 0)
        return b < 0 ? (
          // There are no result — always return `null`
          function() {
            return null;
          }
        ) : (
          // Return `b` exactly once
          function() {
            return n++ === 0 ? b : null;
          }
        );
      if (b < 0) {
        b += a * Math.ceil(-b / a);
      }
      return function() {
        return a * n++ + b;
      };
    }
    exports2.generate = generate;
  }
});

// node_modules/nth-check/lib/index.js
var require_lib6 = __commonJS({
  "node_modules/nth-check/lib/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.sequence = exports2.generate = exports2.compile = exports2.parse = void 0;
    var parse_js_1 = require_parse2();
    Object.defineProperty(exports2, "parse", { enumerable: true, get: function() {
      return parse_js_1.parse;
    } });
    var compile_js_1 = require_compile();
    Object.defineProperty(exports2, "compile", { enumerable: true, get: function() {
      return compile_js_1.compile;
    } });
    Object.defineProperty(exports2, "generate", { enumerable: true, get: function() {
      return compile_js_1.generate;
    } });
    function nthCheck(formula) {
      return (0, compile_js_1.compile)((0, parse_js_1.parse)(formula));
    }
    exports2.default = nthCheck;
    function sequence(formula) {
      return (0, compile_js_1.generate)((0, parse_js_1.parse)(formula));
    }
    exports2.sequence = sequence;
  }
});

// node_modules/css-select/lib/pseudo-selectors/filters.js
var require_filters = __commonJS({
  "node_modules/css-select/lib/pseudo-selectors/filters.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.filters = void 0;
    var nth_check_1 = __importDefault(require_lib6());
    var boolbase_1 = __importDefault(require_boolbase());
    function getChildFunc(next, adapter) {
      return function(elem) {
        var parent = adapter.getParent(elem);
        return parent != null && adapter.isTag(parent) && next(elem);
      };
    }
    exports2.filters = {
      contains: function(next, text, _a) {
        var adapter = _a.adapter;
        return function contains(elem) {
          return next(elem) && adapter.getText(elem).includes(text);
        };
      },
      icontains: function(next, text, _a) {
        var adapter = _a.adapter;
        var itext = text.toLowerCase();
        return function icontains(elem) {
          return next(elem) && adapter.getText(elem).toLowerCase().includes(itext);
        };
      },
      // Location specific methods
      "nth-child": function(next, rule, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var func = (0, nth_check_1.default)(rule);
        if (func === boolbase_1.default.falseFunc)
          return boolbase_1.default.falseFunc;
        if (func === boolbase_1.default.trueFunc)
          return getChildFunc(next, adapter);
        return function nthChild(elem) {
          var siblings = adapter.getSiblings(elem);
          var pos = 0;
          for (var i = 0; i < siblings.length; i++) {
            if (equals(elem, siblings[i]))
              break;
            if (adapter.isTag(siblings[i])) {
              pos++;
            }
          }
          return func(pos) && next(elem);
        };
      },
      "nth-last-child": function(next, rule, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var func = (0, nth_check_1.default)(rule);
        if (func === boolbase_1.default.falseFunc)
          return boolbase_1.default.falseFunc;
        if (func === boolbase_1.default.trueFunc)
          return getChildFunc(next, adapter);
        return function nthLastChild(elem) {
          var siblings = adapter.getSiblings(elem);
          var pos = 0;
          for (var i = siblings.length - 1; i >= 0; i--) {
            if (equals(elem, siblings[i]))
              break;
            if (adapter.isTag(siblings[i])) {
              pos++;
            }
          }
          return func(pos) && next(elem);
        };
      },
      "nth-of-type": function(next, rule, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var func = (0, nth_check_1.default)(rule);
        if (func === boolbase_1.default.falseFunc)
          return boolbase_1.default.falseFunc;
        if (func === boolbase_1.default.trueFunc)
          return getChildFunc(next, adapter);
        return function nthOfType(elem) {
          var siblings = adapter.getSiblings(elem);
          var pos = 0;
          for (var i = 0; i < siblings.length; i++) {
            var currentSibling = siblings[i];
            if (equals(elem, currentSibling))
              break;
            if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === adapter.getName(elem)) {
              pos++;
            }
          }
          return func(pos) && next(elem);
        };
      },
      "nth-last-of-type": function(next, rule, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var func = (0, nth_check_1.default)(rule);
        if (func === boolbase_1.default.falseFunc)
          return boolbase_1.default.falseFunc;
        if (func === boolbase_1.default.trueFunc)
          return getChildFunc(next, adapter);
        return function nthLastOfType(elem) {
          var siblings = adapter.getSiblings(elem);
          var pos = 0;
          for (var i = siblings.length - 1; i >= 0; i--) {
            var currentSibling = siblings[i];
            if (equals(elem, currentSibling))
              break;
            if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === adapter.getName(elem)) {
              pos++;
            }
          }
          return func(pos) && next(elem);
        };
      },
      // TODO determine the actual root element
      root: function(next, _rule, _a) {
        var adapter = _a.adapter;
        return function(elem) {
          var parent = adapter.getParent(elem);
          return (parent == null || !adapter.isTag(parent)) && next(elem);
        };
      },
      scope: function(next, rule, options, context) {
        var equals = options.equals;
        if (!context || context.length === 0) {
          return exports2.filters["root"](next, rule, options);
        }
        if (context.length === 1) {
          return function(elem) {
            return equals(context[0], elem) && next(elem);
          };
        }
        return function(elem) {
          return context.includes(elem) && next(elem);
        };
      },
      hover: dynamicStatePseudo("isHovered"),
      visited: dynamicStatePseudo("isVisited"),
      active: dynamicStatePseudo("isActive")
    };
    function dynamicStatePseudo(name) {
      return function dynamicPseudo(next, _rule, _a) {
        var adapter = _a.adapter;
        var func = adapter[name];
        if (typeof func !== "function") {
          return boolbase_1.default.falseFunc;
        }
        return function active(elem) {
          return func(elem) && next(elem);
        };
      };
    }
  }
});

// node_modules/css-select/lib/pseudo-selectors/pseudos.js
var require_pseudos = __commonJS({
  "node_modules/css-select/lib/pseudo-selectors/pseudos.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.verifyPseudoArgs = exports2.pseudos = void 0;
    exports2.pseudos = {
      empty: function(elem, _a) {
        var adapter = _a.adapter;
        return !adapter.getChildren(elem).some(function(elem2) {
          return adapter.isTag(elem2) || adapter.getText(elem2) !== "";
        });
      },
      "first-child": function(elem, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        if (adapter.prevElementSibling) {
          return adapter.prevElementSibling(elem) == null;
        }
        var firstChild = adapter.getSiblings(elem).find(function(elem2) {
          return adapter.isTag(elem2);
        });
        return firstChild != null && equals(elem, firstChild);
      },
      "last-child": function(elem, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var siblings = adapter.getSiblings(elem);
        for (var i = siblings.length - 1; i >= 0; i--) {
          if (equals(elem, siblings[i]))
            return true;
          if (adapter.isTag(siblings[i]))
            break;
        }
        return false;
      },
      "first-of-type": function(elem, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var siblings = adapter.getSiblings(elem);
        var elemName = adapter.getName(elem);
        for (var i = 0; i < siblings.length; i++) {
          var currentSibling = siblings[i];
          if (equals(elem, currentSibling))
            return true;
          if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === elemName) {
            break;
          }
        }
        return false;
      },
      "last-of-type": function(elem, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var siblings = adapter.getSiblings(elem);
        var elemName = adapter.getName(elem);
        for (var i = siblings.length - 1; i >= 0; i--) {
          var currentSibling = siblings[i];
          if (equals(elem, currentSibling))
            return true;
          if (adapter.isTag(currentSibling) && adapter.getName(currentSibling) === elemName) {
            break;
          }
        }
        return false;
      },
      "only-of-type": function(elem, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var elemName = adapter.getName(elem);
        return adapter.getSiblings(elem).every(function(sibling) {
          return equals(elem, sibling) || !adapter.isTag(sibling) || adapter.getName(sibling) !== elemName;
        });
      },
      "only-child": function(elem, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        return adapter.getSiblings(elem).every(function(sibling) {
          return equals(elem, sibling) || !adapter.isTag(sibling);
        });
      }
    };
    function verifyPseudoArgs(func, name, subselect, argIndex) {
      if (subselect === null) {
        if (func.length > argIndex) {
          throw new Error("Pseudo-class :".concat(name, " requires an argument"));
        }
      } else if (func.length === argIndex) {
        throw new Error("Pseudo-class :".concat(name, " doesn't have any arguments"));
      }
    }
    exports2.verifyPseudoArgs = verifyPseudoArgs;
  }
});

// node_modules/css-select/lib/pseudo-selectors/aliases.js
var require_aliases = __commonJS({
  "node_modules/css-select/lib/pseudo-selectors/aliases.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.aliases = void 0;
    exports2.aliases = {
      // Links
      "any-link": ":is(a, area, link)[href]",
      link: ":any-link:not(:visited)",
      // Forms
      // https://html.spec.whatwg.org/multipage/scripting.html#disabled-elements
      disabled: ":is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )",
      enabled: ":not(:disabled)",
      checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)",
      required: ":is(input, select, textarea)[required]",
      optional: ":is(input, select, textarea):not([required])",
      // JQuery extensions
      // https://html.spec.whatwg.org/multipage/form-elements.html#concept-option-selectedness
      selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)",
      checkbox: "[type=checkbox]",
      file: "[type=file]",
      password: "[type=password]",
      radio: "[type=radio]",
      reset: "[type=reset]",
      image: "[type=image]",
      submit: "[type=submit]",
      parent: ":not(:empty)",
      header: ":is(h1, h2, h3, h4, h5, h6)",
      button: ":is(button, input[type=button])",
      input: ":is(input, textarea, select, button)",
      text: "input:is(:not([type!='']), [type=text])"
    };
  }
});

// node_modules/css-select/lib/pseudo-selectors/subselects.js
var require_subselects = __commonJS({
  "node_modules/css-select/lib/pseudo-selectors/subselects.js"(exports2) {
    "use strict";
    var __spreadArray = exports2 && exports2.__spreadArray || function(to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar)
              ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.subselects = exports2.getNextSiblings = exports2.ensureIsTag = exports2.PLACEHOLDER_ELEMENT = void 0;
    var boolbase_1 = __importDefault(require_boolbase());
    var sort_js_1 = require_sort();
    exports2.PLACEHOLDER_ELEMENT = {};
    function ensureIsTag(next, adapter) {
      if (next === boolbase_1.default.falseFunc)
        return boolbase_1.default.falseFunc;
      return function(elem) {
        return adapter.isTag(elem) && next(elem);
      };
    }
    exports2.ensureIsTag = ensureIsTag;
    function getNextSiblings(elem, adapter) {
      var siblings = adapter.getSiblings(elem);
      if (siblings.length <= 1)
        return [];
      var elemIndex = siblings.indexOf(elem);
      if (elemIndex < 0 || elemIndex === siblings.length - 1)
        return [];
      return siblings.slice(elemIndex + 1).filter(adapter.isTag);
    }
    exports2.getNextSiblings = getNextSiblings;
    function copyOptions(options) {
      return {
        xmlMode: !!options.xmlMode,
        lowerCaseAttributeNames: !!options.lowerCaseAttributeNames,
        lowerCaseTags: !!options.lowerCaseTags,
        quirksMode: !!options.quirksMode,
        cacheResults: !!options.cacheResults,
        pseudos: options.pseudos,
        adapter: options.adapter,
        equals: options.equals
      };
    }
    var is = function(next, token, options, context, compileToken) {
      var func = compileToken(token, copyOptions(options), context);
      return func === boolbase_1.default.trueFunc ? next : func === boolbase_1.default.falseFunc ? boolbase_1.default.falseFunc : function(elem) {
        return func(elem) && next(elem);
      };
    };
    exports2.subselects = {
      is,
      /**
       * `:matches` and `:where` are aliases for `:is`.
       */
      matches: is,
      where: is,
      not: function(next, token, options, context, compileToken) {
        var func = compileToken(token, copyOptions(options), context);
        return func === boolbase_1.default.falseFunc ? next : func === boolbase_1.default.trueFunc ? boolbase_1.default.falseFunc : function(elem) {
          return !func(elem) && next(elem);
        };
      },
      has: function(next, subselect, options, _context, compileToken) {
        var adapter = options.adapter;
        var opts = copyOptions(options);
        opts.relativeSelector = true;
        var context = subselect.some(function(s) {
          return s.some(sort_js_1.isTraversal);
        }) ? (
          // Used as a placeholder. Will be replaced with the actual element.
          [exports2.PLACEHOLDER_ELEMENT]
        ) : void 0;
        var compiled = compileToken(subselect, opts, context);
        if (compiled === boolbase_1.default.falseFunc)
          return boolbase_1.default.falseFunc;
        var hasElement = ensureIsTag(compiled, adapter);
        if (context && compiled !== boolbase_1.default.trueFunc) {
          var _a = compiled.shouldTestNextSiblings, shouldTestNextSiblings_1 = _a === void 0 ? false : _a;
          return function(elem) {
            if (!next(elem))
              return false;
            context[0] = elem;
            var childs = adapter.getChildren(elem);
            var nextElements = shouldTestNextSiblings_1 ? __spreadArray(__spreadArray([], childs, true), getNextSiblings(elem, adapter), true) : childs;
            return adapter.existsOne(hasElement, nextElements);
          };
        }
        return function(elem) {
          return next(elem) && adapter.existsOne(hasElement, adapter.getChildren(elem));
        };
      }
    };
  }
});

// node_modules/css-select/lib/pseudo-selectors/index.js
var require_pseudo_selectors = __commonJS({
  "node_modules/css-select/lib/pseudo-selectors/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.compilePseudoSelector = exports2.aliases = exports2.pseudos = exports2.filters = void 0;
    var css_what_1 = require_commonjs();
    var filters_js_1 = require_filters();
    Object.defineProperty(exports2, "filters", { enumerable: true, get: function() {
      return filters_js_1.filters;
    } });
    var pseudos_js_1 = require_pseudos();
    Object.defineProperty(exports2, "pseudos", { enumerable: true, get: function() {
      return pseudos_js_1.pseudos;
    } });
    var aliases_js_1 = require_aliases();
    Object.defineProperty(exports2, "aliases", { enumerable: true, get: function() {
      return aliases_js_1.aliases;
    } });
    var subselects_js_1 = require_subselects();
    function compilePseudoSelector(next, selector, options, context, compileToken) {
      var _a;
      var name = selector.name, data = selector.data;
      if (Array.isArray(data)) {
        if (!(name in subselects_js_1.subselects)) {
          throw new Error("Unknown pseudo-class :".concat(name, "(").concat(data, ")"));
        }
        return subselects_js_1.subselects[name](next, data, options, context, compileToken);
      }
      var userPseudo = (_a = options.pseudos) === null || _a === void 0 ? void 0 : _a[name];
      var stringPseudo = typeof userPseudo === "string" ? userPseudo : aliases_js_1.aliases[name];
      if (typeof stringPseudo === "string") {
        if (data != null) {
          throw new Error("Pseudo ".concat(name, " doesn't have any arguments"));
        }
        var alias = (0, css_what_1.parse)(stringPseudo);
        return subselects_js_1.subselects["is"](next, alias, options, context, compileToken);
      }
      if (typeof userPseudo === "function") {
        (0, pseudos_js_1.verifyPseudoArgs)(userPseudo, name, data, 1);
        return function(elem) {
          return userPseudo(elem, data) && next(elem);
        };
      }
      if (name in filters_js_1.filters) {
        return filters_js_1.filters[name](next, data, options, context);
      }
      if (name in pseudos_js_1.pseudos) {
        var pseudo_1 = pseudos_js_1.pseudos[name];
        (0, pseudos_js_1.verifyPseudoArgs)(pseudo_1, name, data, 2);
        return function(elem) {
          return pseudo_1(elem, options, data) && next(elem);
        };
      }
      throw new Error("Unknown pseudo-class :".concat(name));
    }
    exports2.compilePseudoSelector = compilePseudoSelector;
  }
});

// node_modules/css-select/lib/general.js
var require_general = __commonJS({
  "node_modules/css-select/lib/general.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.compileGeneralSelector = void 0;
    var attributes_js_1 = require_attributes();
    var index_js_1 = require_pseudo_selectors();
    var css_what_1 = require_commonjs();
    function getElementParent(node, adapter) {
      var parent = adapter.getParent(node);
      if (parent && adapter.isTag(parent)) {
        return parent;
      }
      return null;
    }
    function compileGeneralSelector(next, selector, options, context, compileToken) {
      var adapter = options.adapter, equals = options.equals;
      switch (selector.type) {
        case css_what_1.SelectorType.PseudoElement: {
          throw new Error("Pseudo-elements are not supported by css-select");
        }
        case css_what_1.SelectorType.ColumnCombinator: {
          throw new Error("Column combinators are not yet supported by css-select");
        }
        case css_what_1.SelectorType.Attribute: {
          if (selector.namespace != null) {
            throw new Error("Namespaced attributes are not yet supported by css-select");
          }
          if (!options.xmlMode || options.lowerCaseAttributeNames) {
            selector.name = selector.name.toLowerCase();
          }
          return attributes_js_1.attributeRules[selector.action](next, selector, options);
        }
        case css_what_1.SelectorType.Pseudo: {
          return (0, index_js_1.compilePseudoSelector)(next, selector, options, context, compileToken);
        }
        case css_what_1.SelectorType.Tag: {
          if (selector.namespace != null) {
            throw new Error("Namespaced tag names are not yet supported by css-select");
          }
          var name_1 = selector.name;
          if (!options.xmlMode || options.lowerCaseTags) {
            name_1 = name_1.toLowerCase();
          }
          return function tag(elem) {
            return adapter.getName(elem) === name_1 && next(elem);
          };
        }
        case css_what_1.SelectorType.Descendant: {
          if (options.cacheResults === false || typeof WeakSet === "undefined") {
            return function descendant(elem) {
              var current = elem;
              while (current = getElementParent(current, adapter)) {
                if (next(current)) {
                  return true;
                }
              }
              return false;
            };
          }
          var isFalseCache_1 = /* @__PURE__ */ new WeakSet();
          return function cachedDescendant(elem) {
            var current = elem;
            while (current = getElementParent(current, adapter)) {
              if (!isFalseCache_1.has(current)) {
                if (adapter.isTag(current) && next(current)) {
                  return true;
                }
                isFalseCache_1.add(current);
              }
            }
            return false;
          };
        }
        case "_flexibleDescendant": {
          return function flexibleDescendant(elem) {
            var current = elem;
            do {
              if (next(current))
                return true;
            } while (current = getElementParent(current, adapter));
            return false;
          };
        }
        case css_what_1.SelectorType.Parent: {
          return function parent(elem) {
            return adapter.getChildren(elem).some(function(elem2) {
              return adapter.isTag(elem2) && next(elem2);
            });
          };
        }
        case css_what_1.SelectorType.Child: {
          return function child(elem) {
            var parent = adapter.getParent(elem);
            return parent != null && adapter.isTag(parent) && next(parent);
          };
        }
        case css_what_1.SelectorType.Sibling: {
          return function sibling(elem) {
            var siblings = adapter.getSiblings(elem);
            for (var i = 0; i < siblings.length; i++) {
              var currentSibling = siblings[i];
              if (equals(elem, currentSibling))
                break;
              if (adapter.isTag(currentSibling) && next(currentSibling)) {
                return true;
              }
            }
            return false;
          };
        }
        case css_what_1.SelectorType.Adjacent: {
          if (adapter.prevElementSibling) {
            return function adjacent(elem) {
              var previous = adapter.prevElementSibling(elem);
              return previous != null && next(previous);
            };
          }
          return function adjacent(elem) {
            var siblings = adapter.getSiblings(elem);
            var lastElement;
            for (var i = 0; i < siblings.length; i++) {
              var currentSibling = siblings[i];
              if (equals(elem, currentSibling))
                break;
              if (adapter.isTag(currentSibling)) {
                lastElement = currentSibling;
              }
            }
            return !!lastElement && next(lastElement);
          };
        }
        case css_what_1.SelectorType.Universal: {
          if (selector.namespace != null && selector.namespace !== "*") {
            throw new Error("Namespaced universal selectors are not yet supported by css-select");
          }
          return next;
        }
      }
    }
    exports2.compileGeneralSelector = compileGeneralSelector;
  }
});

// node_modules/css-select/lib/compile.js
var require_compile2 = __commonJS({
  "node_modules/css-select/lib/compile.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.compileToken = exports2.compileUnsafe = exports2.compile = void 0;
    var css_what_1 = require_commonjs();
    var boolbase_1 = __importDefault(require_boolbase());
    var sort_js_1 = __importStar(require_sort());
    var general_js_1 = require_general();
    var subselects_js_1 = require_subselects();
    function compile(selector, options, context) {
      var next = compileUnsafe(selector, options, context);
      return (0, subselects_js_1.ensureIsTag)(next, options.adapter);
    }
    exports2.compile = compile;
    function compileUnsafe(selector, options, context) {
      var token = typeof selector === "string" ? (0, css_what_1.parse)(selector) : selector;
      return compileToken(token, options, context);
    }
    exports2.compileUnsafe = compileUnsafe;
    function includesScopePseudo(t) {
      return t.type === css_what_1.SelectorType.Pseudo && (t.name === "scope" || Array.isArray(t.data) && t.data.some(function(data) {
        return data.some(includesScopePseudo);
      }));
    }
    var DESCENDANT_TOKEN = { type: css_what_1.SelectorType.Descendant };
    var FLEXIBLE_DESCENDANT_TOKEN = {
      type: "_flexibleDescendant"
    };
    var SCOPE_TOKEN = {
      type: css_what_1.SelectorType.Pseudo,
      name: "scope",
      data: null
    };
    function absolutize(token, _a, context) {
      var adapter = _a.adapter;
      var hasContext = !!(context === null || context === void 0 ? void 0 : context.every(function(e) {
        var parent = adapter.isTag(e) && adapter.getParent(e);
        return e === subselects_js_1.PLACEHOLDER_ELEMENT || parent && adapter.isTag(parent);
      }));
      for (var _i = 0, token_1 = token; _i < token_1.length; _i++) {
        var t = token_1[_i];
        if (t.length > 0 && (0, sort_js_1.isTraversal)(t[0]) && t[0].type !== css_what_1.SelectorType.Descendant) {
        } else if (hasContext && !t.some(includesScopePseudo)) {
          t.unshift(DESCENDANT_TOKEN);
        } else {
          continue;
        }
        t.unshift(SCOPE_TOKEN);
      }
    }
    function compileToken(token, options, context) {
      var _a;
      token.forEach(sort_js_1.default);
      context = (_a = options.context) !== null && _a !== void 0 ? _a : context;
      var isArrayContext = Array.isArray(context);
      var finalContext = context && (Array.isArray(context) ? context : [context]);
      if (options.relativeSelector !== false) {
        absolutize(token, options, finalContext);
      } else if (token.some(function(t) {
        return t.length > 0 && (0, sort_js_1.isTraversal)(t[0]);
      })) {
        throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled");
      }
      var shouldTestNextSiblings = false;
      var query = token.map(function(rules) {
        if (rules.length >= 2) {
          var first = rules[0], second = rules[1];
          if (first.type !== css_what_1.SelectorType.Pseudo || first.name !== "scope") {
          } else if (isArrayContext && second.type === css_what_1.SelectorType.Descendant) {
            rules[1] = FLEXIBLE_DESCENDANT_TOKEN;
          } else if (second.type === css_what_1.SelectorType.Adjacent || second.type === css_what_1.SelectorType.Sibling) {
            shouldTestNextSiblings = true;
          }
        }
        return compileRules(rules, options, finalContext);
      }).reduce(reduceRules, boolbase_1.default.falseFunc);
      query.shouldTestNextSiblings = shouldTestNextSiblings;
      return query;
    }
    exports2.compileToken = compileToken;
    function compileRules(rules, options, context) {
      var _a;
      return rules.reduce(function(previous, rule) {
        return previous === boolbase_1.default.falseFunc ? boolbase_1.default.falseFunc : (0, general_js_1.compileGeneralSelector)(previous, rule, options, context, compileToken);
      }, (_a = options.rootFunc) !== null && _a !== void 0 ? _a : boolbase_1.default.trueFunc);
    }
    function reduceRules(a, b) {
      if (b === boolbase_1.default.falseFunc || a === boolbase_1.default.trueFunc) {
        return a;
      }
      if (a === boolbase_1.default.falseFunc || b === boolbase_1.default.trueFunc) {
        return b;
      }
      return function combine(elem) {
        return a(elem) || b(elem);
      };
    }
  }
});

// node_modules/css-select/lib/index.js
var require_lib7 = __commonJS({
  "node_modules/css-select/lib/index.js"(exports2) {
    "use strict";
    var __createBinding = exports2 && exports2.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports2 && exports2.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports2 && exports2.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.aliases = exports2.pseudos = exports2.filters = exports2.is = exports2.selectOne = exports2.selectAll = exports2.prepareContext = exports2._compileToken = exports2._compileUnsafe = exports2.compile = void 0;
    var DomUtils = __importStar(require_lib5());
    var boolbase_1 = __importDefault(require_boolbase());
    var compile_js_1 = require_compile2();
    var subselects_js_1 = require_subselects();
    var defaultEquals = function(a, b) {
      return a === b;
    };
    var defaultOptions = {
      adapter: DomUtils,
      equals: defaultEquals
    };
    function convertOptionFormats(options) {
      var _a, _b, _c, _d;
      var opts = options !== null && options !== void 0 ? options : defaultOptions;
      (_a = opts.adapter) !== null && _a !== void 0 ? _a : opts.adapter = DomUtils;
      (_b = opts.equals) !== null && _b !== void 0 ? _b : opts.equals = (_d = (_c = opts.adapter) === null || _c === void 0 ? void 0 : _c.equals) !== null && _d !== void 0 ? _d : defaultEquals;
      return opts;
    }
    function wrapCompile(func) {
      return function addAdapter(selector, options, context) {
        var opts = convertOptionFormats(options);
        return func(selector, opts, context);
      };
    }
    exports2.compile = wrapCompile(compile_js_1.compile);
    exports2._compileUnsafe = wrapCompile(compile_js_1.compileUnsafe);
    exports2._compileToken = wrapCompile(compile_js_1.compileToken);
    function getSelectorFunc(searchFunc) {
      return function select(query, elements, options) {
        var opts = convertOptionFormats(options);
        if (typeof query !== "function") {
          query = (0, compile_js_1.compileUnsafe)(query, opts, elements);
        }
        var filteredElements = prepareContext(elements, opts.adapter, query.shouldTestNextSiblings);
        return searchFunc(query, filteredElements, opts);
      };
    }
    function prepareContext(elems, adapter, shouldTestNextSiblings) {
      if (shouldTestNextSiblings === void 0) {
        shouldTestNextSiblings = false;
      }
      if (shouldTestNextSiblings) {
        elems = appendNextSiblings(elems, adapter);
      }
      return Array.isArray(elems) ? adapter.removeSubsets(elems) : adapter.getChildren(elems);
    }
    exports2.prepareContext = prepareContext;
    function appendNextSiblings(elem, adapter) {
      var elems = Array.isArray(elem) ? elem.slice(0) : [elem];
      var elemsLength = elems.length;
      for (var i = 0; i < elemsLength; i++) {
        var nextSiblings = (0, subselects_js_1.getNextSiblings)(elems[i], adapter);
        elems.push.apply(elems, nextSiblings);
      }
      return elems;
    }
    exports2.selectAll = getSelectorFunc(function(query, elems, options) {
      return query === boolbase_1.default.falseFunc || !elems || elems.length === 0 ? [] : options.adapter.findAll(query, elems);
    });
    exports2.selectOne = getSelectorFunc(function(query, elems, options) {
      return query === boolbase_1.default.falseFunc || !elems || elems.length === 0 ? null : options.adapter.findOne(query, elems);
    });
    function is(elem, query, options) {
      var opts = convertOptionFormats(options);
      return (typeof query === "function" ? query : (0, compile_js_1.compile)(query, opts))(elem);
    }
    exports2.is = is;
    exports2.default = exports2.selectAll;
    var index_js_1 = require_pseudo_selectors();
    Object.defineProperty(exports2, "filters", { enumerable: true, get: function() {
      return index_js_1.filters;
    } });
    Object.defineProperty(exports2, "pseudos", { enumerable: true, get: function() {
      return index_js_1.pseudos;
    } });
    Object.defineProperty(exports2, "aliases", { enumerable: true, get: function() {
      return index_js_1.aliases;
    } });
  }
});

// node_modules/node-html-parser/dist/back.js
var require_back = __commonJS({
  "node_modules/node-html-parser/dist/back.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    function arr_back(arr) {
      return arr[arr.length - 1];
    }
    exports2.default = arr_back;
  }
});

// node_modules/node-html-parser/dist/matcher.js
var require_matcher = __commonJS({
  "node_modules/node-html-parser/dist/matcher.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var type_1 = __importDefault(require_type());
    function isTag(node) {
      return node && node.nodeType === type_1.default.ELEMENT_NODE;
    }
    function getAttributeValue(elem, name) {
      return isTag(elem) ? elem.getAttribute(name) : void 0;
    }
    function getName(elem) {
      return (elem && elem.rawTagName || "").toLowerCase();
    }
    function getChildren(node) {
      return node && node.childNodes;
    }
    function getParent(node) {
      return node ? node.parentNode : null;
    }
    function getText(node) {
      return node.text;
    }
    function removeSubsets(nodes) {
      var idx = nodes.length;
      var node;
      var ancestor;
      var replace;
      while (--idx > -1) {
        node = ancestor = nodes[idx];
        nodes[idx] = null;
        replace = true;
        while (ancestor) {
          if (nodes.indexOf(ancestor) > -1) {
            replace = false;
            nodes.splice(idx, 1);
            break;
          }
          ancestor = getParent(ancestor);
        }
        if (replace) {
          nodes[idx] = node;
        }
      }
      return nodes;
    }
    function existsOne(test, elems) {
      return elems.some(function(elem) {
        return isTag(elem) ? test(elem) || existsOne(test, getChildren(elem)) : false;
      });
    }
    function getSiblings(node) {
      var parent = getParent(node);
      return parent ? getChildren(parent) : [];
    }
    function hasAttrib(elem, name) {
      return getAttributeValue(elem, name) !== void 0;
    }
    function findOne(test, elems) {
      var elem = null;
      for (var i = 0, l = elems === null || elems === void 0 ? void 0 : elems.length; i < l && !elem; i++) {
        var el = elems[i];
        if (test(el)) {
          elem = el;
        } else {
          var childs = getChildren(el);
          if (childs && childs.length > 0) {
            elem = findOne(test, childs);
          }
        }
      }
      return elem;
    }
    function findAll(test, nodes) {
      var result = [];
      for (var i = 0, j = nodes.length; i < j; i++) {
        if (!isTag(nodes[i]))
          continue;
        if (test(nodes[i]))
          result.push(nodes[i]);
        var childs = getChildren(nodes[i]);
        if (childs)
          result = result.concat(findAll(test, childs));
      }
      return result;
    }
    exports2.default = {
      isTag,
      getAttributeValue,
      getName,
      getChildren,
      getParent,
      getText,
      removeSubsets,
      existsOne,
      getSiblings,
      hasAttrib,
      findOne,
      findAll
    };
  }
});

// node_modules/node-html-parser/dist/void-tag.js
var require_void_tag = __commonJS({
  "node_modules/node-html-parser/dist/void-tag.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var VoidTag = (
      /** @class */
      function() {
        function VoidTag2(addClosingSlash, tags) {
          if (addClosingSlash === void 0) {
            addClosingSlash = false;
          }
          this.addClosingSlash = addClosingSlash;
          if (Array.isArray(tags)) {
            this.voidTags = tags.reduce(function(set, tag) {
              return set.add(tag.toLowerCase()).add(tag.toUpperCase()).add(tag);
            }, /* @__PURE__ */ new Set());
          } else {
            this.voidTags = ["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"].reduce(function(set, tag) {
              return set.add(tag.toLowerCase()).add(tag.toUpperCase()).add(tag);
            }, /* @__PURE__ */ new Set());
          }
        }
        VoidTag2.prototype.formatNode = function(tag, attrs, innerHTML) {
          var addClosingSlash = this.addClosingSlash;
          var closingSpace = addClosingSlash && attrs && !attrs.endsWith(" ") ? " " : "";
          var closingSlash = addClosingSlash ? "".concat(closingSpace, "/") : "";
          return this.isVoidElement(tag.toLowerCase()) ? "<".concat(tag).concat(attrs).concat(closingSlash, ">") : "<".concat(tag).concat(attrs, ">").concat(innerHTML, "</").concat(tag, ">");
        };
        VoidTag2.prototype.isVoidElement = function(tag) {
          return this.voidTags.has(tag);
        };
        return VoidTag2;
      }()
    );
    exports2.default = VoidTag;
  }
});

// node_modules/node-html-parser/dist/nodes/text.js
var require_text = __commonJS({
  "node_modules/node-html-parser/dist/nodes/text.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    var he_1 = require_he();
    var node_1 = __importDefault(require_node());
    var type_1 = __importDefault(require_type());
    var TextNode = (
      /** @class */
      function(_super) {
        __extends(TextNode2, _super);
        function TextNode2(rawText, parentNode, range) {
          if (parentNode === void 0) {
            parentNode = null;
          }
          var _this = _super.call(this, parentNode, range) || this;
          _this.nodeType = type_1.default.TEXT_NODE;
          _this.rawTagName = "";
          _this._rawText = rawText;
          return _this;
        }
        TextNode2.prototype.clone = function() {
          return new TextNode2(this._rawText, null);
        };
        Object.defineProperty(TextNode2.prototype, "rawText", {
          get: function() {
            return this._rawText;
          },
          /**
           * Set rawText and invalidate trimmed caches
           */
          set: function(text) {
            this._rawText = text;
            this._trimmedRawText = void 0;
            this._trimmedText = void 0;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(TextNode2.prototype, "trimmedRawText", {
          /**
           * Returns raw text with all whitespace trimmed except single leading/trailing non-breaking space
           */
          get: function() {
            if (this._trimmedRawText !== void 0)
              return this._trimmedRawText;
            this._trimmedRawText = trimText(this.rawText);
            return this._trimmedRawText;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(TextNode2.prototype, "trimmedText", {
          /**
           * Returns text with all whitespace trimmed except single leading/trailing non-breaking space
           */
          get: function() {
            if (this._trimmedText !== void 0)
              return this._trimmedText;
            this._trimmedText = trimText(this.text);
            return this._trimmedText;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(TextNode2.prototype, "text", {
          /**
           * Get unescaped text value of current node and its children.
           * @return {string} text content
           */
          get: function() {
            return (0, he_1.decode)(this.rawText);
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(TextNode2.prototype, "isWhitespace", {
          /**
           * Detect if the node contains only white space.
           * @return {boolean}
           */
          get: function() {
            return /^(\s|&nbsp;)*$/.test(this.rawText);
          },
          enumerable: false,
          configurable: true
        });
        TextNode2.prototype.toString = function() {
          return this.rawText;
        };
        return TextNode2;
      }(node_1.default)
    );
    exports2.default = TextNode;
    function trimText(text) {
      var i = 0;
      var startPos;
      var endPos;
      while (i >= 0 && i < text.length) {
        if (/\S/.test(text[i])) {
          if (startPos === void 0) {
            startPos = i;
            i = text.length;
          } else {
            endPos = i;
            i = void 0;
          }
        }
        if (startPos === void 0)
          i++;
        else
          i--;
      }
      if (startPos === void 0)
        startPos = 0;
      if (endPos === void 0)
        endPos = text.length - 1;
      var hasLeadingSpace = startPos > 0 && /[^\S\r\n]/.test(text[startPos - 1]);
      var hasTrailingSpace = endPos < text.length - 1 && /[^\S\r\n]/.test(text[endPos + 1]);
      return (hasLeadingSpace ? " " : "") + text.slice(startPos, endPos + 1) + (hasTrailingSpace ? " " : "");
    }
  }
});

// node_modules/node-html-parser/dist/nodes/html.js
var require_html = __commonJS({
  "node_modules/node-html-parser/dist/nodes/html.js"(exports2) {
    "use strict";
    var __extends = exports2 && exports2.__extends || /* @__PURE__ */ function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __assign = exports2 && exports2.__assign || function() {
      __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p))
              t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    var __spreadArray = exports2 && exports2.__spreadArray || function(to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar)
              ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.parse = exports2.base_parse = void 0;
    var css_select_1 = require_lib7();
    var he_1 = __importDefault(require_he());
    var back_1 = __importDefault(require_back());
    var matcher_1 = __importDefault(require_matcher());
    var void_tag_1 = __importDefault(require_void_tag());
    var comment_1 = __importDefault(require_comment());
    var node_1 = __importDefault(require_node());
    var text_1 = __importDefault(require_text());
    var type_1 = __importDefault(require_type());
    function decode(val) {
      return JSON.parse(JSON.stringify(he_1.default.decode(val)));
    }
    var Htags = ["h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup"];
    var Dtags = ["details", "dialog", "dd", "div", "dt"];
    var Ftags = ["fieldset", "figcaption", "figure", "footer", "form"];
    var tableTags = ["table", "td", "tr"];
    var htmlTags = ["address", "article", "aside", "blockquote", "br", "hr", "li", "main", "nav", "ol", "p", "pre", "section", "ul"];
    var kBlockElements = /* @__PURE__ */ new Set();
    function addToKBlockElement() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var addToSet = function(array) {
        for (var index = 0; index < array.length; index++) {
          var element = array[index];
          kBlockElements.add(element);
          kBlockElements.add(element.toUpperCase());
        }
      };
      for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
        var arg = args_1[_a];
        addToSet(arg);
      }
    }
    addToKBlockElement(Htags, Dtags, Ftags, tableTags, htmlTags);
    var DOMTokenList = (
      /** @class */
      function() {
        function DOMTokenList2(valuesInit, afterUpdate) {
          if (valuesInit === void 0) {
            valuesInit = [];
          }
          if (afterUpdate === void 0) {
            afterUpdate = function() {
              return null;
            };
          }
          this._set = new Set(valuesInit);
          this._afterUpdate = afterUpdate;
        }
        DOMTokenList2.prototype._validate = function(c) {
          if (/\s/.test(c)) {
            throw new Error("DOMException in DOMTokenList.add: The token '".concat(c, "' contains HTML space characters, which are not valid in tokens."));
          }
        };
        DOMTokenList2.prototype.add = function(c) {
          this._validate(c);
          this._set.add(c);
          this._afterUpdate(this);
        };
        DOMTokenList2.prototype.replace = function(c1, c2) {
          this._validate(c2);
          this._set.delete(c1);
          this._set.add(c2);
          this._afterUpdate(this);
        };
        DOMTokenList2.prototype.remove = function(c) {
          this._set.delete(c) && this._afterUpdate(this);
        };
        DOMTokenList2.prototype.toggle = function(c) {
          this._validate(c);
          if (this._set.has(c))
            this._set.delete(c);
          else
            this._set.add(c);
          this._afterUpdate(this);
        };
        DOMTokenList2.prototype.contains = function(c) {
          return this._set.has(c);
        };
        Object.defineProperty(DOMTokenList2.prototype, "length", {
          get: function() {
            return this._set.size;
          },
          enumerable: false,
          configurable: true
        });
        DOMTokenList2.prototype.values = function() {
          return this._set.values();
        };
        Object.defineProperty(DOMTokenList2.prototype, "value", {
          get: function() {
            return Array.from(this._set.values());
          },
          enumerable: false,
          configurable: true
        });
        DOMTokenList2.prototype.toString = function() {
          return Array.from(this._set.values()).join(" ");
        };
        return DOMTokenList2;
      }()
    );
    var HTMLElement = (
      /** @class */
      function(_super) {
        __extends(HTMLElement2, _super);
        function HTMLElement2(tagName, keyAttrs, rawAttrs, parentNode, range, voidTag, _parseOptions) {
          if (rawAttrs === void 0) {
            rawAttrs = "";
          }
          if (parentNode === void 0) {
            parentNode = null;
          }
          if (voidTag === void 0) {
            voidTag = new void_tag_1.default();
          }
          if (_parseOptions === void 0) {
            _parseOptions = {};
          }
          var _this = _super.call(this, parentNode, range) || this;
          _this.rawAttrs = rawAttrs;
          _this.voidTag = voidTag;
          _this.nodeType = type_1.default.ELEMENT_NODE;
          _this.rawTagName = tagName;
          _this.rawAttrs = rawAttrs || "";
          _this.id = keyAttrs.id || "";
          _this.childNodes = [];
          _this._parseOptions = _parseOptions;
          _this.classList = new DOMTokenList(
            keyAttrs.class ? keyAttrs.class.split(/\s+/) : [],
            function(classList) {
              return _this.setAttribute("class", classList.toString());
            }
            // eslint-disable-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
          );
          if (keyAttrs.id) {
            if (!rawAttrs) {
              _this.rawAttrs = 'id="'.concat(keyAttrs.id, '"');
            }
          }
          if (keyAttrs.class) {
            if (!rawAttrs) {
              var cls = 'class="'.concat(_this.classList.toString(), '"');
              if (_this.rawAttrs) {
                _this.rawAttrs += " ".concat(cls);
              } else {
                _this.rawAttrs = cls;
              }
            }
          }
          return _this;
        }
        HTMLElement2.prototype.quoteAttribute = function(attr) {
          if (attr == null) {
            return "null";
          }
          return JSON.stringify(attr.replace(/"/g, "&quot;")).replace(/\\t/g, "	").replace(/\\n/g, "\n").replace(/\\r/g, "\r").replace(/\\/g, "");
        };
        HTMLElement2.prototype.removeChild = function(node) {
          this.childNodes = this.childNodes.filter(function(child) {
            return child !== node;
          });
          return this;
        };
        HTMLElement2.prototype.exchangeChild = function(oldNode, newNode) {
          var children = this.childNodes;
          this.childNodes = children.map(function(child) {
            if (child === oldNode) {
              return newNode;
            }
            return child;
          });
          return this;
        };
        Object.defineProperty(HTMLElement2.prototype, "tagName", {
          get: function() {
            return this.rawTagName ? this.rawTagName.toUpperCase() : this.rawTagName;
          },
          set: function(newname) {
            this.rawTagName = newname.toLowerCase();
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(HTMLElement2.prototype, "localName", {
          get: function() {
            return this.rawTagName.toLowerCase();
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(HTMLElement2.prototype, "isVoidElement", {
          get: function() {
            return this.voidTag.isVoidElement(this.localName);
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(HTMLElement2.prototype, "rawText", {
          /**
           * Get escpaed (as-it) text value of current node and its children.
           * @return {string} text content
           */
          get: function() {
            if (/^br$/i.test(this.rawTagName)) {
              return "\n";
            }
            return this.childNodes.reduce(function(pre, cur) {
              return pre += cur.rawText;
            }, "");
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(HTMLElement2.prototype, "textContent", {
          get: function() {
            return decode(this.rawText);
          },
          set: function(val) {
            var content = [new text_1.default(val, this)];
            this.childNodes = content;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(HTMLElement2.prototype, "text", {
          /**
           * Get unescaped text value of current node and its children.
           * @return {string} text content
           */
          get: function() {
            return decode(this.rawText);
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(HTMLElement2.prototype, "structuredText", {
          /**
           * Get structured Text (with '\n' etc.)
           * @return {string} structured text
           */
          get: function() {
            var currentBlock = [];
            var blocks = [currentBlock];
            function dfs(node) {
              if (node.nodeType === type_1.default.ELEMENT_NODE) {
                if (kBlockElements.has(node.rawTagName)) {
                  if (currentBlock.length > 0) {
                    blocks.push(currentBlock = []);
                  }
                  node.childNodes.forEach(dfs);
                  if (currentBlock.length > 0) {
                    blocks.push(currentBlock = []);
                  }
                } else {
                  node.childNodes.forEach(dfs);
                }
              } else if (node.nodeType === type_1.default.TEXT_NODE) {
                if (node.isWhitespace) {
                  currentBlock.prependWhitespace = true;
                } else {
                  var text = node.trimmedText;
                  if (currentBlock.prependWhitespace) {
                    text = " ".concat(text);
                    currentBlock.prependWhitespace = false;
                  }
                  currentBlock.push(text);
                }
              }
            }
            dfs(this);
            return blocks.map(function(block) {
              return block.join("").replace(/\s{2,}/g, " ");
            }).join("\n").replace(/\s+$/, "");
          },
          enumerable: false,
          configurable: true
        });
        HTMLElement2.prototype.toString = function() {
          var tag = this.rawTagName;
          if (tag) {
            var attrs = this.rawAttrs ? " ".concat(this.rawAttrs) : "";
            return this.voidTag.formatNode(tag, attrs, this.innerHTML);
          }
          return this.innerHTML;
        };
        Object.defineProperty(HTMLElement2.prototype, "innerHTML", {
          get: function() {
            return this.childNodes.map(function(child) {
              return child.toString();
            }).join("");
          },
          set: function(content) {
            var r = parse2(content, this._parseOptions);
            var nodes = r.childNodes.length ? r.childNodes : [new text_1.default(content, this)];
            resetParent(nodes, this);
            resetParent(this.childNodes, null);
            this.childNodes = nodes;
          },
          enumerable: false,
          configurable: true
        });
        HTMLElement2.prototype.set_content = function(content, options) {
          if (options === void 0) {
            options = {};
          }
          if (content instanceof node_1.default) {
            content = [content];
          } else if (typeof content == "string") {
            options = __assign(__assign({}, this._parseOptions), options);
            var r = parse2(content, options);
            content = r.childNodes.length ? r.childNodes : [new text_1.default(r.innerHTML, this)];
          }
          resetParent(this.childNodes, null);
          resetParent(content, this);
          this.childNodes = content;
          return this;
        };
        HTMLElement2.prototype.replaceWith = function() {
          var _this = this;
          var nodes = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            nodes[_i] = arguments[_i];
          }
          var parent = this.parentNode;
          var content = nodes.map(function(node) {
            if (node instanceof node_1.default) {
              return [node];
            } else if (typeof node == "string") {
              var r = parse2(node, _this._parseOptions);
              return r.childNodes.length ? r.childNodes : [new text_1.default(node, _this)];
            }
            return [];
          }).flat();
          var idx = parent.childNodes.findIndex(function(child) {
            return child === _this;
          });
          resetParent([this], null);
          parent.childNodes = __spreadArray(__spreadArray(__spreadArray([], parent.childNodes.slice(0, idx), true), resetParent(content, parent), true), parent.childNodes.slice(idx + 1), true);
          return this;
        };
        Object.defineProperty(HTMLElement2.prototype, "outerHTML", {
          get: function() {
            return this.toString();
          },
          enumerable: false,
          configurable: true
        });
        HTMLElement2.prototype.trimRight = function(pattern) {
          for (var i = 0; i < this.childNodes.length; i++) {
            var childNode = this.childNodes[i];
            if (childNode.nodeType === type_1.default.ELEMENT_NODE) {
              childNode.trimRight(pattern);
            } else {
              var index = childNode.rawText.search(pattern);
              if (index > -1) {
                childNode.rawText = childNode.rawText.substr(0, index);
                this.childNodes.length = i + 1;
              }
            }
          }
          return this;
        };
        Object.defineProperty(HTMLElement2.prototype, "structure", {
          /**
           * Get DOM structure
           * @return {string} structure
           */
          get: function() {
            var res = [];
            var indention = 0;
            function write(str) {
              res.push("  ".repeat(indention) + str);
            }
            function dfs(node) {
              var idStr = node.id ? "#".concat(node.id) : "";
              var classStr = node.classList.length ? ".".concat(node.classList.value.join(".")) : "";
              write("".concat(node.rawTagName).concat(idStr).concat(classStr));
              indention++;
              node.childNodes.forEach(function(childNode) {
                if (childNode.nodeType === type_1.default.ELEMENT_NODE) {
                  dfs(childNode);
                } else if (childNode.nodeType === type_1.default.TEXT_NODE) {
                  if (!childNode.isWhitespace) {
                    write("#text");
                  }
                }
              });
              indention--;
            }
            dfs(this);
            return res.join("\n");
          },
          enumerable: false,
          configurable: true
        });
        HTMLElement2.prototype.removeWhitespace = function() {
          var _this = this;
          var o = 0;
          this.childNodes.forEach(function(node) {
            if (node.nodeType === type_1.default.TEXT_NODE) {
              if (node.isWhitespace) {
                return;
              }
              node.rawText = node.trimmedRawText;
            } else if (node.nodeType === type_1.default.ELEMENT_NODE) {
              node.removeWhitespace();
            }
            _this.childNodes[o++] = node;
          });
          this.childNodes.length = o;
          return this;
        };
        HTMLElement2.prototype.querySelectorAll = function(selector) {
          return (0, css_select_1.selectAll)(selector, this, {
            xmlMode: true,
            adapter: matcher_1.default
          });
        };
        HTMLElement2.prototype.querySelector = function(selector) {
          return (0, css_select_1.selectOne)(selector, this, {
            xmlMode: true,
            adapter: matcher_1.default
          });
        };
        HTMLElement2.prototype.getElementsByTagName = function(tagName) {
          var upperCasedTagName = tagName.toUpperCase();
          var re = [];
          var stack = [];
          var currentNodeReference = this;
          var index = 0;
          while (index !== void 0) {
            var child = void 0;
            do {
              child = currentNodeReference.childNodes[index++];
            } while (index < currentNodeReference.childNodes.length && child === void 0);
            if (child === void 0) {
              currentNodeReference = currentNodeReference.parentNode;
              index = stack.pop();
              continue;
            }
            if (child.nodeType === type_1.default.ELEMENT_NODE) {
              if (tagName === "*" || child.tagName === upperCasedTagName)
                re.push(child);
              if (child.childNodes.length > 0) {
                stack.push(index);
                currentNodeReference = child;
                index = 0;
              }
            }
          }
          return re;
        };
        HTMLElement2.prototype.getElementById = function(id) {
          var stack = [];
          var currentNodeReference = this;
          var index = 0;
          while (index !== void 0) {
            var child = void 0;
            do {
              child = currentNodeReference.childNodes[index++];
            } while (index < currentNodeReference.childNodes.length && child === void 0);
            if (child === void 0) {
              currentNodeReference = currentNodeReference.parentNode;
              index = stack.pop();
              continue;
            }
            if (child.nodeType === type_1.default.ELEMENT_NODE) {
              if (child.id === id) {
                return child;
              }
              ;
              if (child.childNodes.length > 0) {
                stack.push(index);
                currentNodeReference = child;
                index = 0;
              }
            }
          }
          return null;
        };
        HTMLElement2.prototype.closest = function(selector) {
          var mapChild = /* @__PURE__ */ new Map();
          var el = this;
          var old = null;
          function findOne(test, elems) {
            var elem = null;
            for (var i = 0, l = elems.length; i < l && !elem; i++) {
              var el_1 = elems[i];
              if (test(el_1)) {
                elem = el_1;
              } else {
                var child = mapChild.get(el_1);
                if (child) {
                  elem = findOne(test, [child]);
                }
              }
            }
            return elem;
          }
          while (el) {
            mapChild.set(el, old);
            old = el;
            el = el.parentNode;
          }
          el = this;
          while (el) {
            var e = (0, css_select_1.selectOne)(selector, el, {
              xmlMode: true,
              adapter: __assign(__assign({}, matcher_1.default), { getChildren: function(node) {
                var child = mapChild.get(node);
                return child && [child];
              }, getSiblings: function(node) {
                return [node];
              }, findOne, findAll: function() {
                return [];
              } })
            });
            if (e) {
              return e;
            }
            el = el.parentNode;
          }
          return null;
        };
        HTMLElement2.prototype.appendChild = function(node) {
          node.remove();
          this.childNodes.push(node);
          node.parentNode = this;
          return node;
        };
        Object.defineProperty(HTMLElement2.prototype, "firstChild", {
          /**
           * Get first child node
           * @return {Node | undefined} first child node; or undefined if none
           */
          get: function() {
            return this.childNodes[0];
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(HTMLElement2.prototype, "lastChild", {
          /**
           * Get last child node
           * @return {Node | undefined} last child node; or undefined if none
           */
          get: function() {
            return (0, back_1.default)(this.childNodes);
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(HTMLElement2.prototype, "attrs", {
          /**
           * Get attributes
           * @access private
           * @return {Object} parsed and unescaped attributes
           */
          get: function() {
            if (this._attrs) {
              return this._attrs;
            }
            this._attrs = {};
            var attrs = this.rawAttributes;
            for (var key in attrs) {
              var val = attrs[key] || "";
              this._attrs[key.toLowerCase()] = decode(val);
            }
            return this._attrs;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(HTMLElement2.prototype, "attributes", {
          get: function() {
            var ret_attrs = {};
            var attrs = this.rawAttributes;
            for (var key in attrs) {
              var val = attrs[key] || "";
              ret_attrs[key] = decode(val);
            }
            return ret_attrs;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(HTMLElement2.prototype, "rawAttributes", {
          /**
           * Get escaped (as-is) attributes
           * @return {Object} parsed attributes
           */
          get: function() {
            if (this._rawAttrs) {
              return this._rawAttrs;
            }
            var attrs = {};
            if (this.rawAttrs) {
              var re = /([a-zA-Z()[\]#@$.?:][a-zA-Z0-9-_:()[\]#]*)(?:\s*=\s*((?:'[^']*')|(?:"[^"]*")|\S+))?/g;
              var match = void 0;
              while (match = re.exec(this.rawAttrs)) {
                var key = match[1];
                var val = match[2] || null;
                if (val && (val[0] === "'" || val[0] === '"'))
                  val = val.slice(1, val.length - 1);
                attrs[key] = attrs[key] || val;
              }
            }
            this._rawAttrs = attrs;
            return attrs;
          },
          enumerable: false,
          configurable: true
        });
        HTMLElement2.prototype.removeAttribute = function(key) {
          var _this = this;
          var attrs = this.rawAttributes;
          delete attrs[key];
          if (this._attrs) {
            delete this._attrs[key];
          }
          this.rawAttrs = Object.keys(attrs).map(function(name) {
            var val = _this.quoteAttribute(attrs[name]);
            if (val === "null" || val === '""')
              return name;
            return "".concat(name, "=").concat(val);
          }).join(" ");
          if (key === "id") {
            this.id = "";
          }
          return this;
        };
        HTMLElement2.prototype.hasAttribute = function(key) {
          return key.toLowerCase() in this.attrs;
        };
        HTMLElement2.prototype.getAttribute = function(key) {
          return this.attrs[key.toLowerCase()];
        };
        HTMLElement2.prototype.setAttribute = function(key, value) {
          var _this = this;
          if (arguments.length < 2) {
            throw new Error("Failed to execute 'setAttribute' on 'Element'");
          }
          var k2 = key.toLowerCase();
          var attrs = this.rawAttributes;
          for (var k in attrs) {
            if (k.toLowerCase() === k2) {
              key = k;
              break;
            }
          }
          attrs[key] = String(value);
          if (this._attrs) {
            this._attrs[k2] = decode(attrs[key]);
          }
          this.rawAttrs = Object.keys(attrs).map(function(name) {
            var val = _this.quoteAttribute(attrs[name]);
            if (val === "null" || val === '""')
              return name;
            return "".concat(name, "=").concat(val);
          }).join(" ");
          if (key === "id") {
            this.id = value;
          }
          return this;
        };
        HTMLElement2.prototype.setAttributes = function(attributes) {
          var _this = this;
          if (this._attrs) {
            delete this._attrs;
          }
          if (this._rawAttrs) {
            delete this._rawAttrs;
          }
          this.rawAttrs = Object.keys(attributes).map(function(name) {
            var val = attributes[name];
            if (val === "null" || val === '""')
              return name;
            return "".concat(name, "=").concat(_this.quoteAttribute(String(val)));
          }).join(" ");
          return this;
        };
        HTMLElement2.prototype.insertAdjacentHTML = function(where, html) {
          var _a, _b, _c;
          var _this = this;
          if (arguments.length < 2) {
            throw new Error("2 arguments required");
          }
          var p = parse2(html, this._parseOptions);
          if (where === "afterend") {
            var idx = this.parentNode.childNodes.findIndex(function(child) {
              return child === _this;
            });
            resetParent(p.childNodes, this.parentNode);
            (_a = this.parentNode.childNodes).splice.apply(_a, __spreadArray([idx + 1, 0], p.childNodes, false));
          } else if (where === "afterbegin") {
            resetParent(p.childNodes, this);
            (_b = this.childNodes).unshift.apply(_b, p.childNodes);
          } else if (where === "beforeend") {
            p.childNodes.forEach(function(n) {
              _this.appendChild(n);
            });
          } else if (where === "beforebegin") {
            var idx = this.parentNode.childNodes.findIndex(function(child) {
              return child === _this;
            });
            resetParent(p.childNodes, this.parentNode);
            (_c = this.parentNode.childNodes).splice.apply(_c, __spreadArray([idx, 0], p.childNodes, false));
          } else {
            throw new Error("The value provided ('".concat(where, "') is not one of 'beforebegin', 'afterbegin', 'beforeend', or 'afterend'"));
          }
          return this;
        };
        Object.defineProperty(HTMLElement2.prototype, "nextSibling", {
          get: function() {
            if (this.parentNode) {
              var children = this.parentNode.childNodes;
              var i = 0;
              while (i < children.length) {
                var child = children[i++];
                if (this === child)
                  return children[i] || null;
              }
              return null;
            }
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(HTMLElement2.prototype, "nextElementSibling", {
          get: function() {
            if (this.parentNode) {
              var children = this.parentNode.childNodes;
              var i = 0;
              var find = false;
              while (i < children.length) {
                var child = children[i++];
                if (find) {
                  if (child instanceof HTMLElement2) {
                    return child || null;
                  }
                } else if (this === child) {
                  find = true;
                }
              }
              return null;
            }
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(HTMLElement2.prototype, "previousSibling", {
          get: function() {
            if (this.parentNode) {
              var children = this.parentNode.childNodes;
              var i = children.length;
              while (i > 0) {
                var child = children[--i];
                if (this === child)
                  return children[i - 1] || null;
              }
              return null;
            }
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(HTMLElement2.prototype, "previousElementSibling", {
          get: function() {
            if (this.parentNode) {
              var children = this.parentNode.childNodes;
              var i = children.length;
              var find = false;
              while (i > 0) {
                var child = children[--i];
                if (find) {
                  if (child instanceof HTMLElement2) {
                    return child || null;
                  }
                } else if (this === child) {
                  find = true;
                }
              }
              return null;
            }
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(HTMLElement2.prototype, "classNames", {
          get: function() {
            return this.classList.toString();
          },
          enumerable: false,
          configurable: true
        });
        HTMLElement2.prototype.clone = function() {
          return parse2(this.toString(), this._parseOptions).firstChild;
        };
        return HTMLElement2;
      }(node_1.default)
    );
    exports2.default = HTMLElement;
    var kMarkupPattern = /<!--[\s\S]*?-->|<(\/?)([a-zA-Z][-.:0-9_a-zA-Z]*)((?:\s+[^>]*?(?:(?:'[^']*')|(?:"[^"]*"))?)*)\s*(\/?)>/g;
    var kAttributePattern = /(?:^|\s)(id|class)\s*=\s*((?:'[^']*')|(?:"[^"]*")|\S+)/gi;
    var kElementsClosedByOpening = {
      li: { li: true, LI: true },
      LI: { li: true, LI: true },
      p: { p: true, div: true, P: true, DIV: true },
      P: { p: true, div: true, P: true, DIV: true },
      b: { div: true, DIV: true },
      B: { div: true, DIV: true },
      td: { td: true, th: true, TD: true, TH: true },
      TD: { td: true, th: true, TD: true, TH: true },
      th: { td: true, th: true, TD: true, TH: true },
      TH: { td: true, th: true, TD: true, TH: true },
      h1: { h1: true, H1: true },
      H1: { h1: true, H1: true },
      h2: { h2: true, H2: true },
      H2: { h2: true, H2: true },
      h3: { h3: true, H3: true },
      H3: { h3: true, H3: true },
      h4: { h4: true, H4: true },
      H4: { h4: true, H4: true },
      h5: { h5: true, H5: true },
      H5: { h5: true, H5: true },
      h6: { h6: true, H6: true },
      H6: { h6: true, H6: true }
    };
    var kElementsClosedByClosing = {
      li: { ul: true, ol: true, UL: true, OL: true },
      LI: { ul: true, ol: true, UL: true, OL: true },
      a: { div: true, DIV: true },
      A: { div: true, DIV: true },
      b: { div: true, DIV: true },
      B: { div: true, DIV: true },
      i: { div: true, DIV: true },
      I: { div: true, DIV: true },
      p: { div: true, DIV: true },
      P: { div: true, DIV: true },
      td: { tr: true, table: true, TR: true, TABLE: true },
      TD: { tr: true, table: true, TR: true, TABLE: true },
      th: { tr: true, table: true, TR: true, TABLE: true },
      TH: { tr: true, table: true, TR: true, TABLE: true }
    };
    var frameflag = "documentfragmentcontainer";
    function base_parse(data, options) {
      var _a, _b;
      if (options === void 0) {
        options = {};
      }
      var voidTag = new void_tag_1.default((_a = options === null || options === void 0 ? void 0 : options.voidTag) === null || _a === void 0 ? void 0 : _a.closingSlash, (_b = options === null || options === void 0 ? void 0 : options.voidTag) === null || _b === void 0 ? void 0 : _b.tags);
      var elements = options.blockTextElements || {
        script: true,
        noscript: true,
        style: true,
        pre: true
      };
      var element_names = Object.keys(elements);
      var kBlockTextElements = element_names.map(function(it) {
        return new RegExp("^".concat(it, "$"), "i");
      });
      var kIgnoreElements = element_names.filter(function(it) {
        return Boolean(elements[it]);
      }).map(function(it) {
        return new RegExp("^".concat(it, "$"), "i");
      });
      function element_should_be_ignore(tag) {
        return kIgnoreElements.some(function(it) {
          return it.test(tag);
        });
      }
      function is_block_text_element(tag) {
        return kBlockTextElements.some(function(it) {
          return it.test(tag);
        });
      }
      var createRange = function(startPos, endPos) {
        return [startPos - frameFlagOffset, endPos - frameFlagOffset];
      };
      var root = new HTMLElement(null, {}, "", null, [0, data.length], voidTag, options);
      var currentParent = root;
      var stack = [root];
      var lastTextPos = -1;
      var noNestedTagIndex = void 0;
      var match;
      data = "<".concat(frameflag, ">").concat(data, "</").concat(frameflag, ">");
      var lowerCaseTagName = options.lowerCaseTagName, fixNestedATags = options.fixNestedATags;
      var dataEndPos = data.length - (frameflag.length + 2);
      var frameFlagOffset = frameflag.length + 2;
      while (match = kMarkupPattern.exec(data)) {
        var matchText = match[0], leadingSlash = match[1], tagName = match[2], attributes = match[3], closingSlash = match[4];
        var matchLength = matchText.length;
        var tagStartPos = kMarkupPattern.lastIndex - matchLength;
        var tagEndPos = kMarkupPattern.lastIndex;
        if (lastTextPos > -1) {
          if (lastTextPos + matchLength < tagEndPos) {
            var text = data.substring(lastTextPos, tagStartPos);
            currentParent.appendChild(new text_1.default(text, currentParent, createRange(lastTextPos, tagStartPos)));
          }
        }
        lastTextPos = kMarkupPattern.lastIndex;
        if (tagName === frameflag)
          continue;
        if (matchText[1] === "!") {
          if (options.comment) {
            var text = data.substring(tagStartPos + 4, tagEndPos - 3);
            currentParent.appendChild(new comment_1.default(text, currentParent, createRange(tagStartPos, tagEndPos)));
          }
          continue;
        }
        if (lowerCaseTagName)
          tagName = tagName.toLowerCase();
        if (!leadingSlash) {
          var attrs = {};
          for (var attMatch = void 0; attMatch = kAttributePattern.exec(attributes); ) {
            var key = attMatch[1], val = attMatch[2];
            var isQuoted = val[0] === "'" || val[0] === '"';
            attrs[key.toLowerCase()] = isQuoted ? val.slice(1, val.length - 1) : val;
          }
          var parentTagName = currentParent.rawTagName;
          if (!closingSlash && kElementsClosedByOpening[parentTagName]) {
            if (kElementsClosedByOpening[parentTagName][tagName]) {
              stack.pop();
              currentParent = (0, back_1.default)(stack);
            }
          }
          if (fixNestedATags && (tagName === "a" || tagName === "A")) {
            if (noNestedTagIndex !== void 0) {
              stack.splice(noNestedTagIndex);
              currentParent = (0, back_1.default)(stack);
            }
            noNestedTagIndex = stack.length;
          }
          var tagEndPos_1 = kMarkupPattern.lastIndex;
          var tagStartPos_1 = tagEndPos_1 - matchLength;
          currentParent = currentParent.appendChild(
            // Initialize range (end position updated later for closed tags)
            new HTMLElement(tagName, attrs, attributes.slice(1), null, createRange(tagStartPos_1, tagEndPos_1), voidTag, options)
          );
          stack.push(currentParent);
          if (is_block_text_element(tagName)) {
            var closeMarkup = "</".concat(tagName, ">");
            var closeIndex = lowerCaseTagName ? data.toLocaleLowerCase().indexOf(closeMarkup, kMarkupPattern.lastIndex) : data.indexOf(closeMarkup, kMarkupPattern.lastIndex);
            var textEndPos = closeIndex === -1 ? dataEndPos : closeIndex;
            if (element_should_be_ignore(tagName)) {
              var text = data.substring(tagEndPos_1, textEndPos);
              if (text.length > 0 && /\S/.test(text)) {
                currentParent.appendChild(new text_1.default(text, currentParent, createRange(tagEndPos_1, textEndPos)));
              }
            }
            if (closeIndex === -1) {
              lastTextPos = kMarkupPattern.lastIndex = data.length + 1;
            } else {
              lastTextPos = kMarkupPattern.lastIndex = closeIndex + closeMarkup.length;
              leadingSlash = "/";
            }
          }
        }
        if (leadingSlash || closingSlash || voidTag.isVoidElement(tagName)) {
          while (true) {
            if (noNestedTagIndex != null && (tagName === "a" || tagName === "A"))
              noNestedTagIndex = void 0;
            if (currentParent.rawTagName === tagName) {
              currentParent.range[1] = createRange(-1, Math.max(lastTextPos, tagEndPos))[1];
              stack.pop();
              currentParent = (0, back_1.default)(stack);
              break;
            } else {
              var parentTagName = currentParent.tagName;
              if (kElementsClosedByClosing[parentTagName]) {
                if (kElementsClosedByClosing[parentTagName][tagName]) {
                  stack.pop();
                  currentParent = (0, back_1.default)(stack);
                  continue;
                }
              }
              break;
            }
          }
        }
      }
      return stack;
    }
    exports2.base_parse = base_parse;
    function parse2(data, options) {
      if (options === void 0) {
        options = {};
      }
      var stack = base_parse(data, options);
      var root = stack[0];
      var _loop_1 = function() {
        var last = stack.pop();
        var oneBefore = (0, back_1.default)(stack);
        if (last.parentNode && last.parentNode.parentNode) {
          if (last.parentNode === oneBefore && last.tagName === oneBefore.tagName) {
            if (options.parseNoneClosedTags !== true) {
              oneBefore.removeChild(last);
              last.childNodes.forEach(function(child) {
                oneBefore.parentNode.appendChild(child);
              });
              stack.pop();
            }
          } else {
            if (options.parseNoneClosedTags !== true) {
              oneBefore.removeChild(last);
              last.childNodes.forEach(function(child) {
                oneBefore.appendChild(child);
              });
            }
          }
        } else {
        }
      };
      while (stack.length > 1) {
        _loop_1();
      }
      return root;
    }
    exports2.parse = parse2;
    function resetParent(nodes, parent) {
      return nodes.map(function(node) {
        node.parentNode = parent;
        return node;
      });
    }
  }
});

// node_modules/node-html-parser/dist/parse.js
var require_parse3 = __commonJS({
  "node_modules/node-html-parser/dist/parse.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.default = void 0;
    var html_1 = require_html();
    Object.defineProperty(exports2, "default", { enumerable: true, get: function() {
      return html_1.parse;
    } });
  }
});

// node_modules/node-html-parser/dist/valid.js
var require_valid = __commonJS({
  "node_modules/node-html-parser/dist/valid.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var html_1 = require_html();
    function valid(data, options) {
      if (options === void 0) {
        options = {};
      }
      var stack = (0, html_1.base_parse)(data, options);
      return Boolean(stack.length === 1);
    }
    exports2.default = valid;
  }
});

// node_modules/node-html-parser/dist/index.js
var require_dist = __commonJS({
  "node_modules/node-html-parser/dist/index.js"(exports2) {
    "use strict";
    var __importDefault = exports2 && exports2.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.NodeType = exports2.TextNode = exports2.Node = exports2.valid = exports2.CommentNode = exports2.HTMLElement = exports2.parse = void 0;
    var comment_1 = __importDefault(require_comment());
    exports2.CommentNode = comment_1.default;
    var html_1 = __importDefault(require_html());
    exports2.HTMLElement = html_1.default;
    var node_1 = __importDefault(require_node());
    exports2.Node = node_1.default;
    var text_1 = __importDefault(require_text());
    exports2.TextNode = text_1.default;
    var type_1 = __importDefault(require_type());
    exports2.NodeType = type_1.default;
    var parse_1 = __importDefault(require_parse3());
    var valid_1 = __importDefault(require_valid());
    exports2.valid = valid_1.default;
    function parse2(data, options) {
      if (options === void 0) {
        options = {};
      }
      return (0, parse_1.default)(data, options);
    }
    exports2.default = parse2;
    exports2.parse = parse2;
    parse2.parse = parse_1.default;
    parse2.HTMLElement = html_1.default;
    parse2.CommentNode = comment_1.default;
    parse2.valid = valid_1.default;
    parse2.Node = node_1.default;
    parse2.TextNode = text_1.default;
    parse2.NodeType = type_1.default;
  }
});

// node_modules/@babel/parser/lib/index.js
var require_lib8 = __commonJS({
  "node_modules/@babel/parser/lib/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", {
      value: true
    });
    function _objectWithoutPropertiesLoose(r, e) {
      if (null == r)
        return {};
      var t = {};
      for (var n in r)
        if ({}.hasOwnProperty.call(r, n)) {
          if (-1 !== e.indexOf(n))
            continue;
          t[n] = r[n];
        }
      return t;
    }
    var Position = class {
      constructor(line, col, index) {
        this.line = void 0;
        this.column = void 0;
        this.index = void 0;
        this.line = line;
        this.column = col;
        this.index = index;
      }
    };
    var SourceLocation = class {
      constructor(start, end) {
        this.start = void 0;
        this.end = void 0;
        this.filename = void 0;
        this.identifierName = void 0;
        this.start = start;
        this.end = end;
      }
    };
    function createPositionWithColumnOffset(position, columnOffset) {
      const {
        line,
        column,
        index
      } = position;
      return new Position(line, column + columnOffset, index + columnOffset);
    }
    var code = "BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED";
    var ModuleErrors = {
      ImportMetaOutsideModule: {
        message: `import.meta may appear only with 'sourceType: "module"'`,
        code
      },
      ImportOutsideModule: {
        message: `'import' and 'export' may appear only with 'sourceType: "module"'`,
        code
      }
    };
    var NodeDescriptions = {
      ArrayPattern: "array destructuring pattern",
      AssignmentExpression: "assignment expression",
      AssignmentPattern: "assignment expression",
      ArrowFunctionExpression: "arrow function expression",
      ConditionalExpression: "conditional expression",
      CatchClause: "catch clause",
      ForOfStatement: "for-of statement",
      ForInStatement: "for-in statement",
      ForStatement: "for-loop",
      FormalParameters: "function parameter list",
      Identifier: "identifier",
      ImportSpecifier: "import specifier",
      ImportDefaultSpecifier: "import default specifier",
      ImportNamespaceSpecifier: "import namespace specifier",
      ObjectPattern: "object destructuring pattern",
      ParenthesizedExpression: "parenthesized expression",
      RestElement: "rest element",
      UpdateExpression: {
        true: "prefix operation",
        false: "postfix operation"
      },
      VariableDeclarator: "variable declaration",
      YieldExpression: "yield expression"
    };
    var toNodeDescription = (node) => node.type === "UpdateExpression" ? NodeDescriptions.UpdateExpression[`${node.prefix}`] : NodeDescriptions[node.type];
    var StandardErrors = {
      AccessorIsGenerator: ({
        kind
      }) => `A ${kind}ter cannot be a generator.`,
      ArgumentsInClass: "'arguments' is only allowed in functions and class methods.",
      AsyncFunctionInSingleStatementContext: "Async functions can only be declared at the top level or inside a block.",
      AwaitBindingIdentifier: "Can not use 'await' as identifier inside an async function.",
      AwaitBindingIdentifierInStaticBlock: "Can not use 'await' as identifier inside a static block.",
      AwaitExpressionFormalParameter: "'await' is not allowed in async function parameters.",
      AwaitUsingNotInAsyncContext: "'await using' is only allowed within async functions and at the top levels of modules.",
      AwaitNotInAsyncContext: "'await' is only allowed within async functions and at the top levels of modules.",
      BadGetterArity: "A 'get' accessor must not have any formal parameters.",
      BadSetterArity: "A 'set' accessor must have exactly one formal parameter.",
      BadSetterRestParameter: "A 'set' accessor function argument must not be a rest parameter.",
      ConstructorClassField: "Classes may not have a field named 'constructor'.",
      ConstructorClassPrivateField: "Classes may not have a private field named '#constructor'.",
      ConstructorIsAccessor: "Class constructor may not be an accessor.",
      ConstructorIsAsync: "Constructor can't be an async function.",
      ConstructorIsGenerator: "Constructor can't be a generator.",
      DeclarationMissingInitializer: ({
        kind
      }) => `Missing initializer in ${kind} declaration.`,
      DecoratorArgumentsOutsideParentheses: "Decorator arguments must be moved inside parentheses: use '@(decorator(args))' instead of '@(decorator)(args)'.",
      DecoratorBeforeExport: "Decorators must be placed *before* the 'export' keyword. Remove the 'decoratorsBeforeExport: true' option to use the 'export @decorator class {}' syntax.",
      DecoratorsBeforeAfterExport: "Decorators can be placed *either* before or after the 'export' keyword, but not in both locations at the same time.",
      DecoratorConstructor: "Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?",
      DecoratorExportClass: "Decorators must be placed *after* the 'export' keyword. Remove the 'decoratorsBeforeExport: false' option to use the '@decorator export class {}' syntax.",
      DecoratorSemicolon: "Decorators must not be followed by a semicolon.",
      DecoratorStaticBlock: "Decorators can't be used with a static block.",
      DeferImportRequiresNamespace: 'Only `import defer * as x from "./module"` is valid.',
      DeletePrivateField: "Deleting a private field is not allowed.",
      DestructureNamedImport: "ES2015 named imports do not destructure. Use another statement for destructuring after the import.",
      DuplicateConstructor: "Duplicate constructor in the same class.",
      DuplicateDefaultExport: "Only one default export allowed per module.",
      DuplicateExport: ({
        exportName
      }) => `\`${exportName}\` has already been exported. Exported identifiers must be unique.`,
      DuplicateProto: "Redefinition of __proto__ property.",
      DuplicateRegExpFlags: "Duplicate regular expression flag.",
      ElementAfterRest: "Rest element must be last element.",
      EscapedCharNotAnIdentifier: "Invalid Unicode escape.",
      ExportBindingIsString: ({
        localName,
        exportName
      }) => `A string literal cannot be used as an exported binding without \`from\`.
- Did you mean \`export { '${localName}' as '${exportName}' } from 'some-module'\`?`,
      ExportDefaultFromAsIdentifier: "'from' is not allowed as an identifier after 'export default'.",
      ForInOfLoopInitializer: ({
        type
      }) => `'${type === "ForInStatement" ? "for-in" : "for-of"}' loop variable declaration may not have an initializer.`,
      ForInUsing: "For-in loop may not start with 'using' declaration.",
      ForOfAsync: "The left-hand side of a for-of loop may not be 'async'.",
      ForOfLet: "The left-hand side of a for-of loop may not start with 'let'.",
      GeneratorInSingleStatementContext: "Generators can only be declared at the top level or inside a block.",
      IllegalBreakContinue: ({
        type
      }) => `Unsyntactic ${type === "BreakStatement" ? "break" : "continue"}.`,
      IllegalLanguageModeDirective: "Illegal 'use strict' directive in function with non-simple parameter list.",
      IllegalReturn: "'return' outside of function.",
      ImportAttributesUseAssert: "The `assert` keyword in import attributes is deprecated and it has been replaced by the `with` keyword. You can enable the `deprecatedImportAssert` parser plugin to suppress this error.",
      ImportBindingIsString: ({
        importName
      }) => `A string literal cannot be used as an imported binding.
- Did you mean \`import { "${importName}" as foo }\`?`,
      ImportCallArity: `\`import()\` requires exactly one or two arguments.`,
      ImportCallNotNewExpression: "Cannot use new with import(...).",
      ImportCallSpreadArgument: "`...` is not allowed in `import()`.",
      ImportJSONBindingNotDefault: "A JSON module can only be imported with `default`.",
      ImportReflectionHasAssertion: "`import module x` cannot have assertions.",
      ImportReflectionNotBinding: 'Only `import module x from "./module"` is valid.',
      IncompatibleRegExpUVFlags: "The 'u' and 'v' regular expression flags cannot be enabled at the same time.",
      InvalidBigIntLiteral: "Invalid BigIntLiteral.",
      InvalidCodePoint: "Code point out of bounds.",
      InvalidCoverDiscardElement: "'void' must be followed by an expression when not used in a binding position.",
      InvalidCoverInitializedName: "Invalid shorthand property initializer.",
      InvalidDecimal: "Invalid decimal.",
      InvalidDigit: ({
        radix
      }) => `Expected number in radix ${radix}.`,
      InvalidEscapeSequence: "Bad character escape sequence.",
      InvalidEscapeSequenceTemplate: "Invalid escape sequence in template.",
      InvalidEscapedReservedWord: ({
        reservedWord
      }) => `Escape sequence in keyword ${reservedWord}.`,
      InvalidIdentifier: ({
        identifierName
      }) => `Invalid identifier ${identifierName}.`,
      InvalidLhs: ({
        ancestor
      }) => `Invalid left-hand side in ${toNodeDescription(ancestor)}.`,
      InvalidLhsBinding: ({
        ancestor
      }) => `Binding invalid left-hand side in ${toNodeDescription(ancestor)}.`,
      InvalidLhsOptionalChaining: ({
        ancestor
      }) => `Invalid optional chaining in the left-hand side of ${toNodeDescription(ancestor)}.`,
      InvalidNumber: "Invalid number.",
      InvalidOrMissingExponent: "Floating-point numbers require a valid exponent after the 'e'.",
      InvalidOrUnexpectedToken: ({
        unexpected
      }) => `Unexpected character '${unexpected}'.`,
      InvalidParenthesizedAssignment: "Invalid parenthesized assignment pattern.",
      InvalidPrivateFieldResolution: ({
        identifierName
      }) => `Private name #${identifierName} is not defined.`,
      InvalidPropertyBindingPattern: "Binding member expression.",
      InvalidRecordProperty: "Only properties and spread elements are allowed in record definitions.",
      InvalidRestAssignmentPattern: "Invalid rest operator's argument.",
      LabelRedeclaration: ({
        labelName
      }) => `Label '${labelName}' is already declared.`,
      LetInLexicalBinding: "'let' is disallowed as a lexically bound name.",
      LineTerminatorBeforeArrow: "No line break is allowed before '=>'.",
      MalformedRegExpFlags: "Invalid regular expression flag.",
      MissingClassName: "A class name is required.",
      MissingEqInAssignment: "Only '=' operator can be used for specifying default value.",
      MissingSemicolon: "Missing semicolon.",
      MissingPlugin: ({
        missingPlugin
      }) => `This experimental syntax requires enabling the parser plugin: ${missingPlugin.map((name) => JSON.stringify(name)).join(", ")}.`,
      MissingOneOfPlugins: ({
        missingPlugin
      }) => `This experimental syntax requires enabling one of the following parser plugin(s): ${missingPlugin.map((name) => JSON.stringify(name)).join(", ")}.`,
      MissingUnicodeEscape: "Expecting Unicode escape sequence \\uXXXX.",
      MixingCoalesceWithLogical: "Nullish coalescing operator(??) requires parens when mixing with logical operators.",
      ModuleAttributeDifferentFromType: "The only accepted module attribute is `type`.",
      ModuleAttributeInvalidValue: "Only string literals are allowed as module attribute values.",
      ModuleAttributesWithDuplicateKeys: ({
        key
      }) => `Duplicate key "${key}" is not allowed in module attributes.`,
      ModuleExportNameHasLoneSurrogate: ({
        surrogateCharCode
      }) => `An export name cannot include a lone surrogate, found '\\u${surrogateCharCode.toString(16)}'.`,
      ModuleExportUndefined: ({
        localName
      }) => `Export '${localName}' is not defined.`,
      MultipleDefaultsInSwitch: "Multiple default clauses.",
      NewlineAfterThrow: "Illegal newline after throw.",
      NoCatchOrFinally: "Missing catch or finally clause.",
      NumberIdentifier: "Identifier directly after number.",
      NumericSeparatorInEscapeSequence: "Numeric separators are not allowed inside unicode escape sequences or hex escape sequences.",
      ObsoleteAwaitStar: "'await*' has been removed from the async functions proposal. Use Promise.all() instead.",
      OptionalChainingNoNew: "Constructors in/after an Optional Chain are not allowed.",
      OptionalChainingNoTemplate: "Tagged Template Literals are not allowed in optionalChain.",
      OverrideOnConstructor: "'override' modifier cannot appear on a constructor declaration.",
      ParamDupe: "Argument name clash.",
      PatternHasAccessor: "Object pattern can't contain getter or setter.",
      PatternHasMethod: "Object pattern can't contain methods.",
      PrivateInExpectedIn: ({
        identifierName
      }) => `Private names are only allowed in property accesses (\`obj.#${identifierName}\`) or in \`in\` expressions (\`#${identifierName} in obj\`).`,
      PrivateNameRedeclaration: ({
        identifierName
      }) => `Duplicate private name #${identifierName}.`,
      RecordExpressionBarIncorrectEndSyntaxType: "Record expressions ending with '|}' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
      RecordExpressionBarIncorrectStartSyntaxType: "Record expressions starting with '{|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
      RecordExpressionHashIncorrectStartSyntaxType: "Record expressions starting with '#{' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.",
      RecordNoProto: "'__proto__' is not allowed in Record expressions.",
      RestTrailingComma: "Unexpected trailing comma after rest element.",
      SloppyFunction: "In non-strict mode code, functions can only be declared at top level or inside a block.",
      SloppyFunctionAnnexB: "In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement.",
      SourcePhaseImportRequiresDefault: 'Only `import source x from "./module"` is valid.',
      StaticPrototype: "Classes may not have static property named prototype.",
      SuperNotAllowed: "`super()` is only valid inside a class constructor of a subclass. Maybe a typo in the method name ('constructor') or not extending another class?",
      SuperPrivateField: "Private fields can't be accessed on super.",
      TrailingDecorator: "Decorators must be attached to a class element.",
      TupleExpressionBarIncorrectEndSyntaxType: "Tuple expressions ending with '|]' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
      TupleExpressionBarIncorrectStartSyntaxType: "Tuple expressions starting with '[|' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'bar'.",
      TupleExpressionHashIncorrectStartSyntaxType: "Tuple expressions starting with '#[' are only allowed when the 'syntaxType' option of the 'recordAndTuple' plugin is set to 'hash'.",
      UnexpectedArgumentPlaceholder: "Unexpected argument placeholder.",
      UnexpectedAwaitAfterPipelineBody: 'Unexpected "await" after pipeline body; await must have parentheses in minimal proposal.',
      UnexpectedDigitAfterHash: "Unexpected digit after hash token.",
      UnexpectedImportExport: "'import' and 'export' may only appear at the top level.",
      UnexpectedKeyword: ({
        keyword
      }) => `Unexpected keyword '${keyword}'.`,
      UnexpectedLeadingDecorator: "Leading decorators must be attached to a class declaration.",
      UnexpectedLexicalDeclaration: "Lexical declaration cannot appear in a single-statement context.",
      UnexpectedNewTarget: "`new.target` can only be used in functions or class properties.",
      UnexpectedNumericSeparator: "A numeric separator is only allowed between two digits.",
      UnexpectedPrivateField: "Unexpected private name.",
      UnexpectedReservedWord: ({
        reservedWord
      }) => `Unexpected reserved word '${reservedWord}'.`,
      UnexpectedSuper: "'super' is only allowed in object methods and classes.",
      UnexpectedToken: ({
        expected,
        unexpected
      }) => `Unexpected token${unexpected ? ` '${unexpected}'.` : ""}${expected ? `, expected "${expected}"` : ""}`,
      UnexpectedTokenUnaryExponentiation: "Illegal expression. Wrap left hand side or entire exponentiation in parentheses.",
      UnexpectedUsingDeclaration: "Using declaration cannot appear in the top level when source type is `script` or in the bare case statement.",
      UnexpectedVoidPattern: "Unexpected void binding.",
      UnsupportedBind: "Binding should be performed on object property.",
      UnsupportedDecoratorExport: "A decorated export must export a class declaration.",
      UnsupportedDefaultExport: "Only expressions, functions or classes are allowed as the `default` export.",
      UnsupportedImport: "`import` can only be used in `import()` or `import.meta`.",
      UnsupportedMetaProperty: ({
        target,
        onlyValidPropertyName
      }) => `The only valid meta property for ${target} is ${target}.${onlyValidPropertyName}.`,
      UnsupportedParameterDecorator: "Decorators cannot be used to decorate parameters.",
      UnsupportedPropertyDecorator: "Decorators cannot be used to decorate object literal properties.",
      UnsupportedSuper: "'super' can only be used with function calls (i.e. super()) or in property accesses (i.e. super.prop or super[prop]).",
      UnterminatedComment: "Unterminated comment.",
      UnterminatedRegExp: "Unterminated regular expression.",
      UnterminatedString: "Unterminated string constant.",
      UnterminatedTemplate: "Unterminated template.",
      UsingDeclarationExport: "Using declaration cannot be exported.",
      UsingDeclarationHasBindingPattern: "Using declaration cannot have destructuring patterns.",
      VarRedeclaration: ({
        identifierName
      }) => `Identifier '${identifierName}' has already been declared.`,
      VoidPatternCatchClauseParam: "A void binding can not be the catch clause parameter. Use `try { ... } catch { ... }` if you want to discard the caught error.",
      VoidPatternInitializer: "A void binding may not have an initializer.",
      YieldBindingIdentifier: "Can not use 'yield' as identifier inside a generator.",
      YieldInParameter: "Yield expression is not allowed in formal parameters.",
      YieldNotInGeneratorFunction: "'yield' is only allowed within generator functions.",
      ZeroDigitNumericSeparator: "Numeric separator can not be used after leading 0."
    };
    var StrictModeErrors = {
      StrictDelete: "Deleting local variable in strict mode.",
      StrictEvalArguments: ({
        referenceName
      }) => `Assigning to '${referenceName}' in strict mode.`,
      StrictEvalArgumentsBinding: ({
        bindingName
      }) => `Binding '${bindingName}' in strict mode.`,
      StrictFunction: "In strict mode code, functions can only be declared at top level or inside a block.",
      StrictNumericEscape: "The only valid numeric escape in strict mode is '\\0'.",
      StrictOctalLiteral: "Legacy octal literals are not allowed in strict mode.",
      StrictWith: "'with' in strict mode."
    };
    var ParseExpressionErrors = {
      ParseExpressionEmptyInput: "Unexpected parseExpression() input: The input is empty or contains only comments.",
      ParseExpressionExpectsEOF: ({
        unexpected
      }) => `Unexpected parseExpression() input: The input should contain exactly one expression, but the first expression is followed by the unexpected character \`${String.fromCodePoint(unexpected)}\`.`
    };
    var UnparenthesizedPipeBodyDescriptions = /* @__PURE__ */ new Set(["ArrowFunctionExpression", "AssignmentExpression", "ConditionalExpression", "YieldExpression"]);
    var PipelineOperatorErrors = Object.assign({
      PipeBodyIsTighter: "Unexpected yield after pipeline body; any yield expression acting as Hack-style pipe body must be parenthesized due to its loose operator precedence.",
      PipeTopicRequiresHackPipes: 'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.',
      PipeTopicUnbound: "Topic reference is unbound; it must be inside a pipe body.",
      PipeTopicUnconfiguredToken: ({
        token
      }) => `Invalid topic token ${token}. In order to use ${token} as a topic reference, the pipelineOperator plugin must be configured with { "proposal": "hack", "topicToken": "${token}" }.`,
      PipeTopicUnused: "Hack-style pipe body does not contain a topic reference; Hack-style pipes must use topic at least once.",
      PipeUnparenthesizedBody: ({
        type
      }) => `Hack-style pipe body cannot be an unparenthesized ${toNodeDescription({
        type
      })}; please wrap it in parentheses.`
    }, {
      PipelineBodyNoArrow: 'Unexpected arrow "=>" after pipeline body; arrow function in pipeline body must be parenthesized.',
      PipelineBodySequenceExpression: "Pipeline body may not be a comma-separated sequence expression.",
      PipelineHeadSequenceExpression: "Pipeline head should not be a comma-separated sequence expression.",
      PipelineTopicUnused: "Pipeline is in topic style but does not use topic reference.",
      PrimaryTopicNotAllowed: "Topic reference was used in a lexical context without topic binding.",
      PrimaryTopicRequiresSmartPipeline: 'Topic reference is used, but the pipelineOperator plugin was not passed a "proposal": "hack" or "smart" option.'
    });
    var _excluded = ["message"];
    function defineHidden(obj, key, value) {
      Object.defineProperty(obj, key, {
        enumerable: false,
        configurable: true,
        value
      });
    }
    function toParseErrorConstructor({
      toMessage,
      code: code2,
      reasonCode,
      syntaxPlugin
    }) {
      const hasMissingPlugin = reasonCode === "MissingPlugin" || reasonCode === "MissingOneOfPlugins";
      const oldReasonCodes = {
        AccessorCannotDeclareThisParameter: "AccesorCannotDeclareThisParameter",
        AccessorCannotHaveTypeParameters: "AccesorCannotHaveTypeParameters",
        ConstInitializerMustBeStringOrNumericLiteralOrLiteralEnumReference: "ConstInitiailizerMustBeStringOrNumericLiteralOrLiteralEnumReference",
        SetAccessorCannotHaveOptionalParameter: "SetAccesorCannotHaveOptionalParameter",
        SetAccessorCannotHaveRestParameter: "SetAccesorCannotHaveRestParameter",
        SetAccessorCannotHaveReturnType: "SetAccesorCannotHaveReturnType"
      };
      if (oldReasonCodes[reasonCode]) {
        reasonCode = oldReasonCodes[reasonCode];
      }
      return function constructor(loc, details) {
        const error = new SyntaxError();
        error.code = code2;
        error.reasonCode = reasonCode;
        error.loc = loc;
        error.pos = loc.index;
        error.syntaxPlugin = syntaxPlugin;
        if (hasMissingPlugin) {
          error.missingPlugin = details.missingPlugin;
        }
        defineHidden(error, "clone", function clone(overrides = {}) {
          var _overrides$loc;
          const {
            line,
            column,
            index
          } = (_overrides$loc = overrides.loc) != null ? _overrides$loc : loc;
          return constructor(new Position(line, column, index), Object.assign({}, details, overrides.details));
        });
        defineHidden(error, "details", details);
        Object.defineProperty(error, "message", {
          configurable: true,
          get() {
            const message = `${toMessage(details)} (${loc.line}:${loc.column})`;
            this.message = message;
            return message;
          },
          set(value) {
            Object.defineProperty(this, "message", {
              value,
              writable: true
            });
          }
        });
        return error;
      };
    }
    function ParseErrorEnum(argument, syntaxPlugin) {
      if (Array.isArray(argument)) {
        return (parseErrorTemplates) => ParseErrorEnum(parseErrorTemplates, argument[0]);
      }
      const ParseErrorConstructors = {};
      for (const reasonCode of Object.keys(argument)) {
        const template = argument[reasonCode];
        const _ref = typeof template === "string" ? {
          message: () => template
        } : typeof template === "function" ? {
          message: template
        } : template, {
          message
        } = _ref, rest = _objectWithoutPropertiesLoose(_ref, _excluded);
        const toMessage = typeof message === "string" ? () => message : message;
        ParseErrorConstructors[reasonCode] = toParseErrorConstructor(Object.assign({
          code: "BABEL_PARSER_SYNTAX_ERROR",
          reasonCode,
          toMessage
        }, syntaxPlugin ? {
          syntaxPlugin
        } : {}, rest));
      }
      return ParseErrorConstructors;
    }
    var Errors = Object.assign({}, ParseErrorEnum(ModuleErrors), ParseErrorEnum(StandardErrors), ParseErrorEnum(StrictModeErrors), ParseErrorEnum(ParseExpressionErrors), ParseErrorEnum`pipelineOperator`(PipelineOperatorErrors));
    function createDefaultOptions() {
      return {
        sourceType: "script",
        sourceFilename: void 0,
        startIndex: 0,
        startColumn: 0,
        startLine: 1,
        allowAwaitOutsideFunction: false,
        allowReturnOutsideFunction: false,
        allowNewTargetOutsideFunction: false,
        allowImportExportEverywhere: false,
        allowSuperOutsideMethod: false,
        allowUndeclaredExports: false,
        allowYieldOutsideFunction: false,
        plugins: [],
        strictMode: void 0,
        ranges: false,
        tokens: false,
        createImportExpressions: false,
        createParenthesizedExpressions: false,
        errorRecovery: false,
        attachComment: true,
        annexB: true
      };
    }
    function getOptions(opts) {
      const options = createDefaultOptions();
      if (opts == null) {
        return options;
      }
      if (opts.annexB != null && opts.annexB !== false) {
        throw new Error("The `annexB` option can only be set to `false`.");
      }
      for (const key of Object.keys(options)) {
        if (opts[key] != null)
          options[key] = opts[key];
      }
      if (options.startLine === 1) {
        if (opts.startIndex == null && options.startColumn > 0) {
          options.startIndex = options.startColumn;
        } else if (opts.startColumn == null && options.startIndex > 0) {
          options.startColumn = options.startIndex;
        }
      } else if (opts.startColumn == null || opts.startIndex == null) {
        if (opts.startIndex != null) {
          throw new Error("With a `startLine > 1` you must also specify `startIndex` and `startColumn`.");
        }
      }
      if (options.sourceType === "commonjs") {
        if (opts.allowAwaitOutsideFunction != null) {
          throw new Error("The `allowAwaitOutsideFunction` option cannot be used with `sourceType: 'commonjs'`.");
        }
        if (opts.allowReturnOutsideFunction != null) {
          throw new Error("`sourceType: 'commonjs'` implies `allowReturnOutsideFunction: true`, please remove the `allowReturnOutsideFunction` option or use `sourceType: 'script'`.");
        }
        if (opts.allowNewTargetOutsideFunction != null) {
          throw new Error("`sourceType: 'commonjs'` implies `allowNewTargetOutsideFunction: true`, please remove the `allowNewTargetOutsideFunction` option or use `sourceType: 'script'`.");
        }
      }
      return options;
    }
    var {
      defineProperty
    } = Object;
    var toUnenumerable = (object, key) => {
      if (object) {
        defineProperty(object, key, {
          enumerable: false,
          value: object[key]
        });
      }
    };
    function toESTreeLocation(node) {
      toUnenumerable(node.loc.start, "index");
      toUnenumerable(node.loc.end, "index");
      return node;
    }
    var estree = (superClass) => class ESTreeParserMixin extends superClass {
      parse() {
        const file = toESTreeLocation(super.parse());
        if (this.optionFlags & 256) {
          file.tokens = file.tokens.map(toESTreeLocation);
        }
        return file;
      }
      parseRegExpLiteral({
        pattern,
        flags
      }) {
        let regex = null;
        try {
          regex = new RegExp(pattern, flags);
        } catch (_) {
        }
        const node = this.estreeParseLiteral(regex);
        node.regex = {
          pattern,
          flags
        };
        return node;
      }
      parseBigIntLiteral(value) {
        let bigInt;
        try {
          bigInt = BigInt(value);
        } catch (_unused) {
          bigInt = null;
        }
        const node = this.estreeParseLiteral(bigInt);
        node.bigint = String(node.value || value);
        return node;
      }
      parseDecimalLiteral(value) {
        const decimal = null;
        const node = this.estreeParseLiteral(decimal);
        node.decimal = String(node.value || value);
        return node;
      }
      estreeParseLiteral(value) {
        return this.parseLiteral(value, "Literal");
      }
      parseStringLiteral(value) {
        return this.estreeParseLiteral(value);
      }
      parseNumericLiteral(value) {
        return this.estreeParseLiteral(value);
      }
      parseNullLiteral() {
        return this.estreeParseLiteral(null);
      }
      parseBooleanLiteral(value) {
        return this.estreeParseLiteral(value);
      }
      estreeParseChainExpression(node, endLoc) {
        const chain = this.startNodeAtNode(node);
        chain.expression = node;
        return this.finishNodeAt(chain, "ChainExpression", endLoc);
      }
      directiveToStmt(directive) {
        const expression = directive.value;
        delete directive.value;
        this.castNodeTo(expression, "Literal");
        expression.raw = expression.extra.raw;
        expression.value = expression.extra.expressionValue;
        const stmt = this.castNodeTo(directive, "ExpressionStatement");
        stmt.expression = expression;
        stmt.directive = expression.extra.rawValue;
        delete expression.extra;
        return stmt;
      }
      fillOptionalPropertiesForTSESLint(node) {
      }
      cloneEstreeStringLiteral(node) {
        const {
          start,
          end,
          loc,
          range,
          raw,
          value
        } = node;
        const cloned = Object.create(node.constructor.prototype);
        cloned.type = "Literal";
        cloned.start = start;
        cloned.end = end;
        cloned.loc = loc;
        cloned.range = range;
        cloned.raw = raw;
        cloned.value = value;
        return cloned;
      }
      initFunction(node, isAsync) {
        super.initFunction(node, isAsync);
        node.expression = false;
      }
      checkDeclaration(node) {
        if (node != null && this.isObjectProperty(node)) {
          this.checkDeclaration(node.value);
        } else {
          super.checkDeclaration(node);
        }
      }
      getObjectOrClassMethodParams(method) {
        return method.value.params;
      }
      isValidDirective(stmt) {
        var _stmt$expression$extr;
        return stmt.type === "ExpressionStatement" && stmt.expression.type === "Literal" && typeof stmt.expression.value === "string" && !((_stmt$expression$extr = stmt.expression.extra) != null && _stmt$expression$extr.parenthesized);
      }
      parseBlockBody(node, allowDirectives, topLevel, end, afterBlockParse) {
        super.parseBlockBody(node, allowDirectives, topLevel, end, afterBlockParse);
        const directiveStatements = node.directives.map((d) => this.directiveToStmt(d));
        node.body = directiveStatements.concat(node.body);
        delete node.directives;
      }
      parsePrivateName() {
        const node = super.parsePrivateName();
        if (!this.getPluginOption("estree", "classFeatures")) {
          return node;
        }
        return this.convertPrivateNameToPrivateIdentifier(node);
      }
      convertPrivateNameToPrivateIdentifier(node) {
        const name = super.getPrivateNameSV(node);
        delete node.id;
        node.name = name;
        return this.castNodeTo(node, "PrivateIdentifier");
      }
      isPrivateName(node) {
        if (!this.getPluginOption("estree", "classFeatures")) {
          return super.isPrivateName(node);
        }
        return node.type === "PrivateIdentifier";
      }
      getPrivateNameSV(node) {
        if (!this.getPluginOption("estree", "classFeatures")) {
          return super.getPrivateNameSV(node);
        }
        return node.name;
      }
      parseLiteral(value, type) {
        const node = super.parseLiteral(value, type);
        node.raw = node.extra.raw;
        delete node.extra;
        return node;
      }
      parseFunctionBody(node, allowExpression, isMethod = false) {
        super.parseFunctionBody(node, allowExpression, isMethod);
        node.expression = node.body.type !== "BlockStatement";
      }
      parseMethod(node, isGenerator, isAsync, isConstructor, allowDirectSuper, type, inClassScope = false) {
        let funcNode = this.startNode();
        funcNode.kind = node.kind;
        funcNode = super.parseMethod(funcNode, isGenerator, isAsync, isConstructor, allowDirectSuper, type, inClassScope);
        delete funcNode.kind;
        const {
          typeParameters
        } = node;
        if (typeParameters) {
          delete node.typeParameters;
          funcNode.typeParameters = typeParameters;
          this.resetStartLocationFromNode(funcNode, typeParameters);
        }
        const valueNode = this.castNodeTo(funcNode, "FunctionExpression");
        node.value = valueNode;
        if (type === "ClassPrivateMethod") {
          node.computed = false;
        }
        if (type === "ObjectMethod") {
          if (node.kind === "method") {
            node.kind = "init";
          }
          node.shorthand = false;
          return this.finishNode(node, "Property");
        } else {
          return this.finishNode(node, "MethodDefinition");
        }
      }
      nameIsConstructor(key) {
        if (key.type === "Literal")
          return key.value === "constructor";
        return super.nameIsConstructor(key);
      }
      parseClassProperty(...args) {
        const propertyNode = super.parseClassProperty(...args);
        if (!this.getPluginOption("estree", "classFeatures")) {
          return propertyNode;
        }
        this.castNodeTo(propertyNode, "PropertyDefinition");
        return propertyNode;
      }
      parseClassPrivateProperty(...args) {
        const propertyNode = super.parseClassPrivateProperty(...args);
        if (!this.getPluginOption("estree", "classFeatures")) {
          return propertyNode;
        }
        this.castNodeTo(propertyNode, "PropertyDefinition");
        propertyNode.computed = false;
        return propertyNode;
      }
      parseClassAccessorProperty(node) {
        const accessorPropertyNode = super.parseClassAccessorProperty(node);
        if (!this.getPluginOption("estree", "classFeatures")) {
          return accessorPropertyNode;
        }
        if (accessorPropertyNode.abstract && this.hasPlugin("typescript")) {
          delete accessorPropertyNode.abstract;
          this.castNodeTo(accessorPropertyNode, "TSAbstractAccessorProperty");
        } else {
          this.castNodeTo(accessorPropertyNode, "AccessorProperty");
        }
        return accessorPropertyNode;
      }
      parseObjectProperty(prop, startLoc, isPattern, refExpressionErrors) {
        const node = super.parseObjectProperty(prop, startLoc, isPattern, refExpressionErrors);
        if (node) {
          node.kind = "init";
          this.castNodeTo(node, "Property");
        }
        return node;
      }
      finishObjectProperty(node) {
        node.kind = "init";
        return this.finishNode(node, "Property");
      }
      isValidLVal(type, disallowCallExpression, isUnparenthesizedInAssign, binding) {
        return type === "Property" ? "value" : super.isValidLVal(type, disallowCallExpression, isUnparenthesizedInAssign, binding);
      }
      isAssignable(node, isBinding) {
        if (node != null && this.isObjectProperty(node)) {
          return this.isAssignable(node.value, isBinding);
        }
        return super.isAssignable(node, isBinding);
      }
      toAssignable(node, isLHS = false) {
        if (node != null && this.isObjectProperty(node)) {
          const {
            key,
            value
          } = node;
          if (this.isPrivateName(key)) {
            this.classScope.usePrivateName(this.getPrivateNameSV(key), key.loc.start);
          }
          this.toAssignable(value, isLHS);
        } else {
          super.toAssignable(node, isLHS);
        }
      }
      toAssignableObjectExpressionProp(prop, isLast, isLHS) {
        if (prop.type === "Property" && (prop.kind === "get" || prop.kind === "set")) {
          this.raise(Errors.PatternHasAccessor, prop.key);
        } else if (prop.type === "Property" && prop.method) {
          this.raise(Errors.PatternHasMethod, prop.key);
        } else {
          super.toAssignableObjectExpressionProp(prop, isLast, isLHS);
        }
      }
      finishCallExpression(unfinished, optional) {
        const node = super.finishCallExpression(unfinished, optional);
        if (node.callee.type === "Import") {
          var _ref, _ref2;
          this.castNodeTo(node, "ImportExpression");
          node.source = node.arguments[0];
          node.options = (_ref = node.arguments[1]) != null ? _ref : null;
          node.attributes = (_ref2 = node.arguments[1]) != null ? _ref2 : null;
          delete node.arguments;
          delete node.callee;
        } else if (node.type === "OptionalCallExpression") {
          this.castNodeTo(node, "CallExpression");
        } else {
          node.optional = false;
        }
        return node;
      }
      toReferencedArguments(node) {
        if (node.type === "ImportExpression") {
          return;
        }
        super.toReferencedArguments(node);
      }
      parseExport(unfinished, decorators) {
        const exportStartLoc = this.state.lastTokStartLoc;
        const node = super.parseExport(unfinished, decorators);
        switch (node.type) {
          case "ExportAllDeclaration":
            node.exported = null;
            break;
          case "ExportNamedDeclaration":
            if (node.specifiers.length === 1 && node.specifiers[0].type === "ExportNamespaceSpecifier") {
              this.castNodeTo(node, "ExportAllDeclaration");
              node.exported = node.specifiers[0].exported;
              delete node.specifiers;
            }
          case "ExportDefaultDeclaration":
            {
              var _declaration$decorato;
              const {
                declaration
              } = node;
              if ((declaration == null ? void 0 : declaration.type) === "ClassDeclaration" && ((_declaration$decorato = declaration.decorators) == null ? void 0 : _declaration$decorato.length) > 0 && declaration.start === node.start) {
                this.resetStartLocation(node, exportStartLoc);
              }
            }
            break;
        }
        return node;
      }
      stopParseSubscript(base, state) {
        const node = super.stopParseSubscript(base, state);
        if (state.optionalChainMember) {
          return this.estreeParseChainExpression(node, base.loc.end);
        }
        return node;
      }
      parseMember(base, startLoc, state, computed, optional) {
        const node = super.parseMember(base, startLoc, state, computed, optional);
        if (node.type === "OptionalMemberExpression") {
          this.castNodeTo(node, "MemberExpression");
        } else {
          node.optional = false;
        }
        return node;
      }
      isOptionalMemberExpression(node) {
        if (node.type === "ChainExpression") {
          return node.expression.type === "MemberExpression";
        }
        return super.isOptionalMemberExpression(node);
      }
      hasPropertyAsPrivateName(node) {
        if (node.type === "ChainExpression") {
          node = node.expression;
        }
        return super.hasPropertyAsPrivateName(node);
      }
      isObjectProperty(node) {
        return node.type === "Property" && node.kind === "init" && !node.method;
      }
      isObjectMethod(node) {
        return node.type === "Property" && (node.method || node.kind === "get" || node.kind === "set");
      }
      castNodeTo(node, type) {
        const result = super.castNodeTo(node, type);
        this.fillOptionalPropertiesForTSESLint(result);
        return result;
      }
      cloneIdentifier(node) {
        const cloned = super.cloneIdentifier(node);
        this.fillOptionalPropertiesForTSESLint(cloned);
        return cloned;
      }
      cloneStringLiteral(node) {
        if (node.type === "Literal") {
          return this.cloneEstreeStringLiteral(node);
        }
        return super.cloneStringLiteral(node);
      }
      finishNodeAt(node, type, endLoc) {
        return toESTreeLocation(super.finishNodeAt(node, type, endLoc));
      }
      finishNode(node, type) {
        const result = super.finishNode(node, type);
        this.fillOptionalPropertiesForTSESLint(result);
        return result;
      }
      resetStartLocation(node, startLoc) {
        super.resetStartLocation(node, startLoc);
        toESTreeLocation(node);
      }
      resetEndLocation(node, endLoc = this.state.lastTokEndLoc) {
        super.resetEndLocation(node, endLoc);
        toESTreeLocation(node);
      }
    };
    var TokContext = class {
      constructor(token, preserveSpace) {
        this.token = void 0;
        this.preserveSpace = void 0;
        this.token = token;
        this.preserveSpace = !!preserveSpace;
      }
    };
    var types = {
      brace: new TokContext("{"),
      j_oTag: new TokContext("<tag"),
      j_cTag: new TokContext("</tag"),
      j_expr: new TokContext("<tag>...</tag>", true)
    };
    types.template = new TokContext("`", true);
    var beforeExpr = true;
    var startsExpr = true;
    var isLoop = true;
    var isAssign = true;
    var prefix = true;
    var postfix = true;
    var ExportedTokenType = class {
      constructor(label, conf = {}) {
        this.label = void 0;
        this.keyword = void 0;
        this.beforeExpr = void 0;
        this.startsExpr = void 0;
        this.rightAssociative = void 0;
        this.isLoop = void 0;
        this.isAssign = void 0;
        this.prefix = void 0;
        this.postfix = void 0;
        this.binop = void 0;
        this.label = label;
        this.keyword = conf.keyword;
        this.beforeExpr = !!conf.beforeExpr;
        this.startsExpr = !!conf.startsExpr;
        this.rightAssociative = !!conf.rightAssociative;
        this.isLoop = !!conf.isLoop;
        this.isAssign = !!conf.isAssign;
        this.prefix = !!conf.prefix;
        this.postfix = !!conf.postfix;
        this.binop = conf.binop != null ? conf.binop : null;
        this.updateContext = null;
      }
    };
    var keywords$1 = /* @__PURE__ */ new Map();
    function createKeyword(name, options = {}) {
      options.keyword = name;
      const token = createToken(name, options);
      keywords$1.set(name, token);
      return token;
    }
    function createBinop(name, binop) {
      return createToken(name, {
        beforeExpr,
        binop
      });
    }
    var tokenTypeCounter = -1;
    var tokenTypes = [];
    var tokenLabels = [];
    var tokenBinops = [];
    var tokenBeforeExprs = [];
    var tokenStartsExprs = [];
    var tokenPrefixes = [];
    function createToken(name, options = {}) {
      var _options$binop, _options$beforeExpr, _options$startsExpr, _options$prefix;
      ++tokenTypeCounter;
      tokenLabels.push(name);
      tokenBinops.push((_options$binop = options.binop) != null ? _options$binop : -1);
      tokenBeforeExprs.push((_options$beforeExpr = options.beforeExpr) != null ? _options$beforeExpr : false);
      tokenStartsExprs.push((_options$startsExpr = options.startsExpr) != null ? _options$startsExpr : false);
      tokenPrefixes.push((_options$prefix = options.prefix) != null ? _options$prefix : false);
      tokenTypes.push(new ExportedTokenType(name, options));
      return tokenTypeCounter;
    }
    function createKeywordLike(name, options = {}) {
      var _options$binop2, _options$beforeExpr2, _options$startsExpr2, _options$prefix2;
      ++tokenTypeCounter;
      keywords$1.set(name, tokenTypeCounter);
      tokenLabels.push(name);
      tokenBinops.push((_options$binop2 = options.binop) != null ? _options$binop2 : -1);
      tokenBeforeExprs.push((_options$beforeExpr2 = options.beforeExpr) != null ? _options$beforeExpr2 : false);
      tokenStartsExprs.push((_options$startsExpr2 = options.startsExpr) != null ? _options$startsExpr2 : false);
      tokenPrefixes.push((_options$prefix2 = options.prefix) != null ? _options$prefix2 : false);
      tokenTypes.push(new ExportedTokenType("name", options));
      return tokenTypeCounter;
    }
    var tt = {
      bracketL: createToken("[", {
        beforeExpr,
        startsExpr
      }),
      bracketHashL: createToken("#[", {
        beforeExpr,
        startsExpr
      }),
      bracketBarL: createToken("[|", {
        beforeExpr,
        startsExpr
      }),
      bracketR: createToken("]"),
      bracketBarR: createToken("|]"),
      braceL: createToken("{", {
        beforeExpr,
        startsExpr
      }),
      braceBarL: createToken("{|", {
        beforeExpr,
        startsExpr
      }),
      braceHashL: createToken("#{", {
        beforeExpr,
        startsExpr
      }),
      braceR: createToken("}"),
      braceBarR: createToken("|}"),
      parenL: createToken("(", {
        beforeExpr,
        startsExpr
      }),
      parenR: createToken(")"),
      comma: createToken(",", {
        beforeExpr
      }),
      semi: createToken(";", {
        beforeExpr
      }),
      colon: createToken(":", {
        beforeExpr
      }),
      doubleColon: createToken("::", {
        beforeExpr
      }),
      dot: createToken("."),
      question: createToken("?", {
        beforeExpr
      }),
      questionDot: createToken("?."),
      arrow: createToken("=>", {
        beforeExpr
      }),
      template: createToken("template"),
      ellipsis: createToken("...", {
        beforeExpr
      }),
      backQuote: createToken("`", {
        startsExpr
      }),
      dollarBraceL: createToken("${", {
        beforeExpr,
        startsExpr
      }),
      templateTail: createToken("...`", {
        startsExpr
      }),
      templateNonTail: createToken("...${", {
        beforeExpr,
        startsExpr
      }),
      at: createToken("@"),
      hash: createToken("#", {
        startsExpr
      }),
      interpreterDirective: createToken("#!..."),
      eq: createToken("=", {
        beforeExpr,
        isAssign
      }),
      assign: createToken("_=", {
        beforeExpr,
        isAssign
      }),
      slashAssign: createToken("_=", {
        beforeExpr,
        isAssign
      }),
      xorAssign: createToken("_=", {
        beforeExpr,
        isAssign
      }),
      moduloAssign: createToken("_=", {
        beforeExpr,
        isAssign
      }),
      incDec: createToken("++/--", {
        prefix,
        postfix,
        startsExpr
      }),
      bang: createToken("!", {
        beforeExpr,
        prefix,
        startsExpr
      }),
      tilde: createToken("~", {
        beforeExpr,
        prefix,
        startsExpr
      }),
      doubleCaret: createToken("^^", {
        startsExpr
      }),
      doubleAt: createToken("@@", {
        startsExpr
      }),
      pipeline: createBinop("|>", 0),
      nullishCoalescing: createBinop("??", 1),
      logicalOR: createBinop("||", 1),
      logicalAND: createBinop("&&", 2),
      bitwiseOR: createBinop("|", 3),
      bitwiseXOR: createBinop("^", 4),
      bitwiseAND: createBinop("&", 5),
      equality: createBinop("==/!=/===/!==", 6),
      lt: createBinop("</>/<=/>=", 7),
      gt: createBinop("</>/<=/>=", 7),
      relational: createBinop("</>/<=/>=", 7),
      bitShift: createBinop("<</>>/>>>", 8),
      bitShiftL: createBinop("<</>>/>>>", 8),
      bitShiftR: createBinop("<</>>/>>>", 8),
      plusMin: createToken("+/-", {
        beforeExpr,
        binop: 9,
        prefix,
        startsExpr
      }),
      modulo: createToken("%", {
        binop: 10,
        startsExpr
      }),
      star: createToken("*", {
        binop: 10
      }),
      slash: createBinop("/", 10),
      exponent: createToken("**", {
        beforeExpr,
        binop: 11,
        rightAssociative: true
      }),
      _in: createKeyword("in", {
        beforeExpr,
        binop: 7
      }),
      _instanceof: createKeyword("instanceof", {
        beforeExpr,
        binop: 7
      }),
      _break: createKeyword("break"),
      _case: createKeyword("case", {
        beforeExpr
      }),
      _catch: createKeyword("catch"),
      _continue: createKeyword("continue"),
      _debugger: createKeyword("debugger"),
      _default: createKeyword("default", {
        beforeExpr
      }),
      _else: createKeyword("else", {
        beforeExpr
      }),
      _finally: createKeyword("finally"),
      _function: createKeyword("function", {
        startsExpr
      }),
      _if: createKeyword("if"),
      _return: createKeyword("return", {
        beforeExpr
      }),
      _switch: createKeyword("switch"),
      _throw: createKeyword("throw", {
        beforeExpr,
        prefix,
        startsExpr
      }),
      _try: createKeyword("try"),
      _var: createKeyword("var"),
      _const: createKeyword("const"),
      _with: createKeyword("with"),
      _new: createKeyword("new", {
        beforeExpr,
        startsExpr
      }),
      _this: createKeyword("this", {
        startsExpr
      }),
      _super: createKeyword("super", {
        startsExpr
      }),
      _class: createKeyword("class", {
        startsExpr
      }),
      _extends: createKeyword("extends", {
        beforeExpr
      }),
      _export: createKeyword("export"),
      _import: createKeyword("import", {
        startsExpr
      }),
      _null: createKeyword("null", {
        startsExpr
      }),
      _true: createKeyword("true", {
        startsExpr
      }),
      _false: createKeyword("false", {
        startsExpr
      }),
      _typeof: createKeyword("typeof", {
        beforeExpr,
        prefix,
        startsExpr
      }),
      _void: createKeyword("void", {
        beforeExpr,
        prefix,
        startsExpr
      }),
      _delete: createKeyword("delete", {
        beforeExpr,
        prefix,
        startsExpr
      }),
      _do: createKeyword("do", {
        isLoop,
        beforeExpr
      }),
      _for: createKeyword("for", {
        isLoop
      }),
      _while: createKeyword("while", {
        isLoop
      }),
      _as: createKeywordLike("as", {
        startsExpr
      }),
      _assert: createKeywordLike("assert", {
        startsExpr
      }),
      _async: createKeywordLike("async", {
        startsExpr
      }),
      _await: createKeywordLike("await", {
        startsExpr
      }),
      _defer: createKeywordLike("defer", {
        startsExpr
      }),
      _from: createKeywordLike("from", {
        startsExpr
      }),
      _get: createKeywordLike("get", {
        startsExpr
      }),
      _let: createKeywordLike("let", {
        startsExpr
      }),
      _meta: createKeywordLike("meta", {
        startsExpr
      }),
      _of: createKeywordLike("of", {
        startsExpr
      }),
      _sent: createKeywordLike("sent", {
        startsExpr
      }),
      _set: createKeywordLike("set", {
        startsExpr
      }),
      _source: createKeywordLike("source", {
        startsExpr
      }),
      _static: createKeywordLike("static", {
        startsExpr
      }),
      _using: createKeywordLike("using", {
        startsExpr
      }),
      _yield: createKeywordLike("yield", {
        startsExpr
      }),
      _asserts: createKeywordLike("asserts", {
        startsExpr
      }),
      _checks: createKeywordLike("checks", {
        startsExpr
      }),
      _exports: createKeywordLike("exports", {
        startsExpr
      }),
      _global: createKeywordLike("global", {
        startsExpr
      }),
      _implements: createKeywordLike("implements", {
        startsExpr
      }),
      _intrinsic: createKeywordLike("intrinsic", {
        startsExpr
      }),
      _infer: createKeywordLike("infer", {
        startsExpr
      }),
      _is: createKeywordLike("is", {
        startsExpr
      }),
      _mixins: createKeywordLike("mixins", {
        startsExpr
      }),
      _proto: createKeywordLike("proto", {
        startsExpr
      }),
      _require: createKeywordLike("require", {
        startsExpr
      }),
      _satisfies: createKeywordLike("satisfies", {
        startsExpr
      }),
      _keyof: createKeywordLike("keyof", {
        startsExpr
      }),
      _readonly: createKeywordLike("readonly", {
        startsExpr
      }),
      _unique: createKeywordLike("unique", {
        startsExpr
      }),
      _abstract: createKeywordLike("abstract", {
        startsExpr
      }),
      _declare: createKeywordLike("declare", {
        startsExpr
      }),
      _enum: createKeywordLike("enum", {
        startsExpr
      }),
      _module: createKeywordLike("module", {
        startsExpr
      }),
      _namespace: createKeywordLike("namespace", {
        startsExpr
      }),
      _interface: createKeywordLike("interface", {
        startsExpr
      }),
      _type: createKeywordLike("type", {
        startsExpr
      }),
      _opaque: createKeywordLike("opaque", {
        startsExpr
      }),
      name: createToken("name", {
        startsExpr
      }),
      placeholder: createToken("%%", {
        startsExpr
      }),
      string: createToken("string", {
        startsExpr
      }),
      num: createToken("num", {
        startsExpr
      }),
      bigint: createToken("bigint", {
        startsExpr
      }),
      decimal: createToken("decimal", {
        startsExpr
      }),
      regexp: createToken("regexp", {
        startsExpr
      }),
      privateName: createToken("#name", {
        startsExpr
      }),
      eof: createToken("eof"),
      jsxName: createToken("jsxName"),
      jsxText: createToken("jsxText", {
        beforeExpr
      }),
      jsxTagStart: createToken("jsxTagStart", {
        startsExpr
      }),
      jsxTagEnd: createToken("jsxTagEnd")
    };
    function tokenIsIdentifier(token) {
      return token >= 93 && token <= 133;
    }
    function tokenKeywordOrIdentifierIsKeyword(token) {
      return token <= 92;
    }
    function tokenIsKeywordOrIdentifier(token) {
      return token >= 58 && token <= 133;
    }
    function tokenIsLiteralPropertyName(token) {
      return token >= 58 && token <= 137;
    }
    function tokenComesBeforeExpression(token) {
      return tokenBeforeExprs[token];
    }
    function tokenCanStartExpression(token) {
      return tokenStartsExprs[token];
    }
    function tokenIsAssignment(token) {
      return token >= 29 && token <= 33;
    }
    function tokenIsFlowInterfaceOrTypeOrOpaque(token) {
      return token >= 129 && token <= 131;
    }
    function tokenIsLoop(token) {
      return token >= 90 && token <= 92;
    }
    function tokenIsKeyword(token) {
      return token >= 58 && token <= 92;
    }
    function tokenIsOperator(token) {
      return token >= 39 && token <= 59;
    }
    function tokenIsPostfix(token) {
      return token === 34;
    }
    function tokenIsPrefix(token) {
      return tokenPrefixes[token];
    }
    function tokenIsTSTypeOperator(token) {
      return token >= 121 && token <= 123;
    }
    function tokenIsTSDeclarationStart(token) {
      return token >= 124 && token <= 130;
    }
    function tokenLabelName(token) {
      return tokenLabels[token];
    }
    function tokenOperatorPrecedence(token) {
      return tokenBinops[token];
    }
    function tokenIsRightAssociative(token) {
      return token === 57;
    }
    function tokenIsTemplate(token) {
      return token >= 24 && token <= 25;
    }
    function getExportedToken(token) {
      return tokenTypes[token];
    }
    tokenTypes[8].updateContext = (context) => {
      context.pop();
    };
    tokenTypes[5].updateContext = tokenTypes[7].updateContext = tokenTypes[23].updateContext = (context) => {
      context.push(types.brace);
    };
    tokenTypes[22].updateContext = (context) => {
      if (context[context.length - 1] === types.template) {
        context.pop();
      } else {
        context.push(types.template);
      }
    };
    tokenTypes[143].updateContext = (context) => {
      context.push(types.j_expr, types.j_oTag);
    };
    var nonASCIIidentifierStartChars = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088F\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5C\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDC-\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7DC\uA7F1-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";
    var nonASCIIidentifierChars = "\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0897-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0CF3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF-\u1ADD\u1AE0-\u1AEB\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u200C\u200D\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\u30FB\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F\uFF65";
    var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
    var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");
    nonASCIIidentifierStartChars = nonASCIIidentifierChars = null;
    var astralIdentifierStartCodes = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 4, 51, 13, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 7, 25, 39, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 39, 27, 10, 22, 251, 41, 7, 1, 17, 5, 57, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 31, 9, 2, 0, 3, 0, 2, 37, 2, 0, 26, 0, 2, 0, 45, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 200, 32, 32, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 24, 43, 261, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 26, 3994, 6, 582, 6842, 29, 1763, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 433, 44, 212, 63, 33, 24, 3, 24, 45, 74, 6, 0, 67, 12, 65, 1, 2, 0, 15, 4, 10, 7381, 42, 31, 98, 114, 8702, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 229, 29, 3, 0, 208, 30, 2, 2, 2, 1, 2, 6, 3, 4, 10, 1, 225, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4381, 3, 5773, 3, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 8489];
    var astralIdentifierCodes = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 7, 9, 32, 4, 318, 1, 78, 5, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 68, 8, 2, 0, 3, 0, 2, 3, 2, 4, 2, 0, 15, 1, 83, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 7, 19, 58, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 199, 7, 137, 9, 54, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 55, 9, 266, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 10, 5350, 0, 7, 14, 11465, 27, 2343, 9, 87, 9, 39, 4, 60, 6, 26, 9, 535, 9, 470, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4178, 9, 519, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 245, 1, 2, 9, 233, 0, 3, 0, 8, 1, 6, 0, 475, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
    function isInAstralSet(code2, set) {
      let pos = 65536;
      for (let i = 0, length = set.length; i < length; i += 2) {
        pos += set[i];
        if (pos > code2)
          return false;
        pos += set[i + 1];
        if (pos >= code2)
          return true;
      }
      return false;
    }
    function isIdentifierStart(code2) {
      if (code2 < 65)
        return code2 === 36;
      if (code2 <= 90)
        return true;
      if (code2 < 97)
        return code2 === 95;
      if (code2 <= 122)
        return true;
      if (code2 <= 65535) {
        return code2 >= 170 && nonASCIIidentifierStart.test(String.fromCharCode(code2));
      }
      return isInAstralSet(code2, astralIdentifierStartCodes);
    }
    function isIdentifierChar(code2) {
      if (code2 < 48)
        return code2 === 36;
      if (code2 < 58)
        return true;
      if (code2 < 65)
        return false;
      if (code2 <= 90)
        return true;
      if (code2 < 97)
        return code2 === 95;
      if (code2 <= 122)
        return true;
      if (code2 <= 65535) {
        return code2 >= 170 && nonASCIIidentifier.test(String.fromCharCode(code2));
      }
      return isInAstralSet(code2, astralIdentifierStartCodes) || isInAstralSet(code2, astralIdentifierCodes);
    }
    var reservedWords = {
      keyword: ["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"],
      strict: ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"],
      strictBind: ["eval", "arguments"]
    };
    var keywords = new Set(reservedWords.keyword);
    var reservedWordsStrictSet = new Set(reservedWords.strict);
    var reservedWordsStrictBindSet = new Set(reservedWords.strictBind);
    function isReservedWord(word, inModule) {
      return inModule && word === "await" || word === "enum";
    }
    function isStrictReservedWord(word, inModule) {
      return isReservedWord(word, inModule) || reservedWordsStrictSet.has(word);
    }
    function isStrictBindOnlyReservedWord(word) {
      return reservedWordsStrictBindSet.has(word);
    }
    function isStrictBindReservedWord(word, inModule) {
      return isStrictReservedWord(word, inModule) || isStrictBindOnlyReservedWord(word);
    }
    function isKeyword(word) {
      return keywords.has(word);
    }
    function isIteratorStart(current, next, next2) {
      return current === 64 && next === 64 && isIdentifierStart(next2);
    }
    var reservedWordLikeSet = /* @__PURE__ */ new Set(["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete", "implements", "interface", "let", "package", "private", "protected", "public", "static", "yield", "eval", "arguments", "enum", "await"]);
    function canBeReservedWord(word) {
      return reservedWordLikeSet.has(word);
    }
    var Scope = class {
      constructor(flags) {
        this.flags = 0;
        this.names = /* @__PURE__ */ new Map();
        this.firstLexicalName = "";
        this.flags = flags;
      }
    };
    var ScopeHandler = class {
      constructor(parser, inModule) {
        this.parser = void 0;
        this.scopeStack = [];
        this.inModule = void 0;
        this.undefinedExports = /* @__PURE__ */ new Map();
        this.parser = parser;
        this.inModule = inModule;
      }
      get inTopLevel() {
        return (this.currentScope().flags & 1) > 0;
      }
      get inFunction() {
        return (this.currentVarScopeFlags() & 2) > 0;
      }
      get allowSuper() {
        return (this.currentThisScopeFlags() & 16) > 0;
      }
      get allowDirectSuper() {
        return (this.currentThisScopeFlags() & 32) > 0;
      }
      get allowNewTarget() {
        return (this.currentThisScopeFlags() & 512) > 0;
      }
      get inClass() {
        return (this.currentThisScopeFlags() & 64) > 0;
      }
      get inClassAndNotInNonArrowFunction() {
        const flags = this.currentThisScopeFlags();
        return (flags & 64) > 0 && (flags & 2) === 0;
      }
      get inStaticBlock() {
        for (let i = this.scopeStack.length - 1; ; i--) {
          const {
            flags
          } = this.scopeStack[i];
          if (flags & 128) {
            return true;
          }
          if (flags & (1667 | 64)) {
            return false;
          }
        }
      }
      get inNonArrowFunction() {
        return (this.currentThisScopeFlags() & 2) > 0;
      }
      get inBareCaseStatement() {
        return (this.currentScope().flags & 256) > 0;
      }
      get treatFunctionsAsVar() {
        return this.treatFunctionsAsVarInScope(this.currentScope());
      }
      createScope(flags) {
        return new Scope(flags);
      }
      enter(flags) {
        this.scopeStack.push(this.createScope(flags));
      }
      exit() {
        const scope = this.scopeStack.pop();
        return scope.flags;
      }
      treatFunctionsAsVarInScope(scope) {
        return !!(scope.flags & (2 | 128) || !this.parser.inModule && scope.flags & 1);
      }
      declareName(name, bindingType, loc) {
        let scope = this.currentScope();
        if (bindingType & 8 || bindingType & 16) {
          this.checkRedeclarationInScope(scope, name, bindingType, loc);
          let type = scope.names.get(name) || 0;
          if (bindingType & 16) {
            type = type | 4;
          } else {
            if (!scope.firstLexicalName) {
              scope.firstLexicalName = name;
            }
            type = type | 2;
          }
          scope.names.set(name, type);
          if (bindingType & 8) {
            this.maybeExportDefined(scope, name);
          }
        } else if (bindingType & 4) {
          for (let i = this.scopeStack.length - 1; i >= 0; --i) {
            scope = this.scopeStack[i];
            this.checkRedeclarationInScope(scope, name, bindingType, loc);
            scope.names.set(name, (scope.names.get(name) || 0) | 1);
            this.maybeExportDefined(scope, name);
            if (scope.flags & 1667)
              break;
          }
        }
        if (this.parser.inModule && scope.flags & 1) {
          this.undefinedExports.delete(name);
        }
      }
      maybeExportDefined(scope, name) {
        if (this.parser.inModule && scope.flags & 1) {
          this.undefinedExports.delete(name);
        }
      }
      checkRedeclarationInScope(scope, name, bindingType, loc) {
        if (this.isRedeclaredInScope(scope, name, bindingType)) {
          this.parser.raise(Errors.VarRedeclaration, loc, {
            identifierName: name
          });
        }
      }
      isRedeclaredInScope(scope, name, bindingType) {
        if (!(bindingType & 1))
          return false;
        if (bindingType & 8) {
          return scope.names.has(name);
        }
        const type = scope.names.get(name) || 0;
        if (bindingType & 16) {
          return (type & 2) > 0 || !this.treatFunctionsAsVarInScope(scope) && (type & 1) > 0;
        }
        return (type & 2) > 0 && !(scope.flags & 8 && scope.firstLexicalName === name) || !this.treatFunctionsAsVarInScope(scope) && (type & 4) > 0;
      }
      checkLocalExport(id) {
        const {
          name
        } = id;
        const topLevelScope = this.scopeStack[0];
        if (!topLevelScope.names.has(name)) {
          this.undefinedExports.set(name, id.loc.start);
        }
      }
      currentScope() {
        return this.scopeStack[this.scopeStack.length - 1];
      }
      currentVarScopeFlags() {
        for (let i = this.scopeStack.length - 1; ; i--) {
          const {
            flags
          } = this.scopeStack[i];
          if (flags & 1667) {
            return flags;
          }
        }
      }
      currentThisScopeFlags() {
        for (let i = this.scopeStack.length - 1; ; i--) {
          const {
            flags
          } = this.scopeStack[i];
          if (flags & (1667 | 64) && !(flags & 4)) {
            return flags;
          }
        }
      }
    };
    var FlowScope = class extends Scope {
      constructor(...args) {
        super(...args);
        this.declareFunctions = /* @__PURE__ */ new Set();
      }
    };
    var FlowScopeHandler = class extends ScopeHandler {
      createScope(flags) {
        return new FlowScope(flags);
      }
      declareName(name, bindingType, loc) {
        const scope = this.currentScope();
        if (bindingType & 2048) {
          this.checkRedeclarationInScope(scope, name, bindingType, loc);
          this.maybeExportDefined(scope, name);
          scope.declareFunctions.add(name);
          return;
        }
        super.declareName(name, bindingType, loc);
      }
      isRedeclaredInScope(scope, name, bindingType) {
        if (super.isRedeclaredInScope(scope, name, bindingType))
          return true;
        if (bindingType & 2048 && !scope.declareFunctions.has(name)) {
          const type = scope.names.get(name);
          return (type & 4) > 0 || (type & 2) > 0;
        }
        return false;
      }
      checkLocalExport(id) {
        if (!this.scopeStack[0].declareFunctions.has(id.name)) {
          super.checkLocalExport(id);
        }
      }
    };
    var reservedTypes = /* @__PURE__ */ new Set(["_", "any", "bool", "boolean", "empty", "extends", "false", "interface", "mixed", "null", "number", "static", "string", "true", "typeof", "void"]);
    var FlowErrors = ParseErrorEnum`flow`({
      AmbiguousConditionalArrow: "Ambiguous expression: wrap the arrow functions in parentheses to disambiguate.",
      AmbiguousDeclareModuleKind: "Found both `declare module.exports` and `declare export` in the same module. Modules can only have 1 since they are either an ES module or they are a CommonJS module.",
      AssignReservedType: ({
        reservedType
      }) => `Cannot overwrite reserved type ${reservedType}.`,
      DeclareClassElement: "The `declare` modifier can only appear on class fields.",
      DeclareClassFieldInitializer: "Initializers are not allowed in fields with the `declare` modifier.",
      DuplicateDeclareModuleExports: "Duplicate `declare module.exports` statement.",
      EnumBooleanMemberNotInitialized: ({
        memberName,
        enumName
      }) => `Boolean enum members need to be initialized. Use either \`${memberName} = true,\` or \`${memberName} = false,\` in enum \`${enumName}\`.`,
      EnumDuplicateMemberName: ({
        memberName,
        enumName
      }) => `Enum member names need to be unique, but the name \`${memberName}\` has already been used before in enum \`${enumName}\`.`,
      EnumInconsistentMemberValues: ({
        enumName
      }) => `Enum \`${enumName}\` has inconsistent member initializers. Either use no initializers, or consistently use literals (either booleans, numbers, or strings) for all member initializers.`,
      EnumInvalidExplicitType: ({
        invalidEnumType,
        enumName
      }) => `Enum type \`${invalidEnumType}\` is not valid. Use one of \`boolean\`, \`number\`, \`string\`, or \`symbol\` in enum \`${enumName}\`.`,
      EnumInvalidExplicitTypeUnknownSupplied: ({
        enumName
      }) => `Supplied enum type is not valid. Use one of \`boolean\`, \`number\`, \`string\`, or \`symbol\` in enum \`${enumName}\`.`,
      EnumInvalidMemberInitializerPrimaryType: ({
        enumName,
        memberName,
        explicitType
      }) => `Enum \`${enumName}\` has type \`${explicitType}\`, so the initializer of \`${memberName}\` needs to be a ${explicitType} literal.`,
      EnumInvalidMemberInitializerSymbolType: ({
        enumName,
        memberName
      }) => `Symbol enum members cannot be initialized. Use \`${memberName},\` in enum \`${enumName}\`.`,
      EnumInvalidMemberInitializerUnknownType: ({
        enumName,
        memberName
      }) => `The enum member initializer for \`${memberName}\` needs to be a literal (either a boolean, number, or string) in enum \`${enumName}\`.`,
      EnumInvalidMemberName: ({
        enumName,
        memberName,
        suggestion
      }) => `Enum member names cannot start with lowercase 'a' through 'z'. Instead of using \`${memberName}\`, consider using \`${suggestion}\`, in enum \`${enumName}\`.`,
      EnumNumberMemberNotInitialized: ({
        enumName,
        memberName
      }) => `Number enum members need to be initialized, e.g. \`${memberName} = 1\` in enum \`${enumName}\`.`,
      EnumStringMemberInconsistentlyInitialized: ({
        enumName
      }) => `String enum members need to consistently either all use initializers, or use no initializers, in enum \`${enumName}\`.`,
      GetterMayNotHaveThisParam: "A getter cannot have a `this` parameter.",
      ImportReflectionHasImportType: "An `import module` declaration can not use `type` or `typeof` keyword.",
      ImportTypeShorthandOnlyInPureImport: "The `type` and `typeof` keywords on named imports can only be used on regular `import` statements. It cannot be used with `import type` or `import typeof` statements.",
      InexactInsideExact: "Explicit inexact syntax cannot appear inside an explicit exact object type.",
      InexactInsideNonObject: "Explicit inexact syntax cannot appear in class or interface definitions.",
      InexactVariance: "Explicit inexact syntax cannot have variance.",
      InvalidNonTypeImportInDeclareModule: "Imports within a `declare module` body must always be `import type` or `import typeof`.",
      MissingTypeParamDefault: "Type parameter declaration needs a default, since a preceding type parameter declaration has a default.",
      NestedDeclareModule: "`declare module` cannot be used inside another `declare module`.",
      NestedFlowComment: "Cannot have a flow comment inside another flow comment.",
      PatternIsOptional: Object.assign({
        message: "A binding pattern parameter cannot be optional in an implementation signature."
      }, {
        reasonCode: "OptionalBindingPattern"
      }),
      SetterMayNotHaveThisParam: "A setter cannot have a `this` parameter.",
      SpreadVariance: "Spread properties cannot have variance.",
      ThisParamAnnotationRequired: "A type annotation is required for the `this` parameter.",
      ThisParamBannedInConstructor: "Constructors cannot have a `this` parameter; constructors don't bind `this` like other functions.",
      ThisParamMayNotBeOptional: "The `this` parameter cannot be optional.",
      ThisParamMustBeFirst: "The `this` parameter must be the first function parameter.",
      ThisParamNoDefault: "The `this` parameter may not have a default value.",
      TypeBeforeInitializer: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.",
      TypeCastInPattern: "The type cast expression is expected to be wrapped with parenthesis.",
      UnexpectedExplicitInexactInObject: "Explicit inexact syntax must appear at the end of an inexact object.",
      UnexpectedReservedType: ({
        reservedType
      }) => `Unexpected reserved type ${reservedType}.`,
      UnexpectedReservedUnderscore: "`_` is only allowed as a type argument to call or new.",
      UnexpectedSpaceBetweenModuloChecks: "Spaces between `%` and `checks` are not allowed here.",
      UnexpectedSpreadType: "Spread operator cannot appear in class or interface definitions.",
      UnexpectedSubtractionOperand: 'Unexpected token, expected "number" or "bigint".',
      UnexpectedTokenAfterTypeParameter: "Expected an arrow function after this type parameter declaration.",
      UnexpectedTypeParameterBeforeAsyncArrowFunction: "Type parameters must come after the async keyword, e.g. instead of `<T> async () => {}`, use `async <T>() => {}`.",
      UnsupportedDeclareExportKind: ({
        unsupportedExportKind,
        suggestion
      }) => `\`declare export ${unsupportedExportKind}\` is not supported. Use \`${suggestion}\` instead.`,
      UnsupportedStatementInDeclareModule: "Only declares and type imports are allowed inside declare module.",
      UnterminatedFlowComment: "Unterminated flow-comment."
    });
    function isEsModuleType(bodyElement) {
      return bodyElement.type === "DeclareExportAllDeclaration" || bodyElement.type === "DeclareExportDeclaration" && (!bodyElement.declaration || bodyElement.declaration.type !== "TypeAlias" && bodyElement.declaration.type !== "InterfaceDeclaration");
    }
    function hasTypeImportKind(node) {
      return node.importKind === "type" || node.importKind === "typeof";
    }
    var exportSuggestions = {
      const: "declare export var",
      let: "declare export var",
      type: "export type",
      interface: "export interface"
    };
    function partition(list, test) {
      const list1 = [];
      const list2 = [];
      for (let i = 0; i < list.length; i++) {
        (test(list[i], i, list) ? list1 : list2).push(list[i]);
      }
      return [list1, list2];
    }
    var FLOW_PRAGMA_REGEX = /\*?\s*@((?:no)?flow)\b/;
    var flow = (superClass) => class FlowParserMixin extends superClass {
      constructor(...args) {
        super(...args);
        this.flowPragma = void 0;
      }
      getScopeHandler() {
        return FlowScopeHandler;
      }
      shouldParseTypes() {
        return this.getPluginOption("flow", "all") || this.flowPragma === "flow";
      }
      finishToken(type, val) {
        if (type !== 134 && type !== 13 && type !== 28) {
          if (this.flowPragma === void 0) {
            this.flowPragma = null;
          }
        }
        super.finishToken(type, val);
      }
      addComment(comment) {
        if (this.flowPragma === void 0) {
          const matches = FLOW_PRAGMA_REGEX.exec(comment.value);
          if (!matches)
            ;
          else if (matches[1] === "flow") {
            this.flowPragma = "flow";
          } else if (matches[1] === "noflow") {
            this.flowPragma = "noflow";
          } else {
            throw new Error("Unexpected flow pragma");
          }
        }
        super.addComment(comment);
      }
      flowParseTypeInitialiser(tok) {
        const oldInType = this.state.inType;
        this.state.inType = true;
        this.expect(tok || 14);
        const type = this.flowParseType();
        this.state.inType = oldInType;
        return type;
      }
      flowParsePredicate() {
        const node = this.startNode();
        const moduloLoc = this.state.startLoc;
        this.next();
        this.expectContextual(110);
        if (this.state.lastTokStartLoc.index > moduloLoc.index + 1) {
          this.raise(FlowErrors.UnexpectedSpaceBetweenModuloChecks, moduloLoc);
        }
        if (this.eat(10)) {
          node.value = super.parseExpression();
          this.expect(11);
          return this.finishNode(node, "DeclaredPredicate");
        } else {
          return this.finishNode(node, "InferredPredicate");
        }
      }
      flowParseTypeAndPredicateInitialiser() {
        const oldInType = this.state.inType;
        this.state.inType = true;
        this.expect(14);
        let type = null;
        let predicate = null;
        if (this.match(54)) {
          this.state.inType = oldInType;
          predicate = this.flowParsePredicate();
        } else {
          type = this.flowParseType();
          this.state.inType = oldInType;
          if (this.match(54)) {
            predicate = this.flowParsePredicate();
          }
        }
        return [type, predicate];
      }
      flowParseDeclareClass(node) {
        this.next();
        this.flowParseInterfaceish(node, true);
        return this.finishNode(node, "DeclareClass");
      }
      flowParseDeclareFunction(node) {
        this.next();
        const id = node.id = this.parseIdentifier();
        const typeNode = this.startNode();
        const typeContainer = this.startNode();
        if (this.match(47)) {
          typeNode.typeParameters = this.flowParseTypeParameterDeclaration();
        } else {
          typeNode.typeParameters = null;
        }
        this.expect(10);
        const tmp = this.flowParseFunctionTypeParams();
        typeNode.params = tmp.params;
        typeNode.rest = tmp.rest;
        typeNode.this = tmp._this;
        this.expect(11);
        [typeNode.returnType, node.predicate] = this.flowParseTypeAndPredicateInitialiser();
        typeContainer.typeAnnotation = this.finishNode(typeNode, "FunctionTypeAnnotation");
        id.typeAnnotation = this.finishNode(typeContainer, "TypeAnnotation");
        this.resetEndLocation(id);
        this.semicolon();
        this.scope.declareName(node.id.name, 2048, node.id.loc.start);
        return this.finishNode(node, "DeclareFunction");
      }
      flowParseDeclare(node, insideModule) {
        if (this.match(80)) {
          return this.flowParseDeclareClass(node);
        } else if (this.match(68)) {
          return this.flowParseDeclareFunction(node);
        } else if (this.match(74)) {
          return this.flowParseDeclareVariable(node);
        } else if (this.eatContextual(127)) {
          if (this.match(16)) {
            return this.flowParseDeclareModuleExports(node);
          } else {
            if (insideModule) {
              this.raise(FlowErrors.NestedDeclareModule, this.state.lastTokStartLoc);
            }
            return this.flowParseDeclareModule(node);
          }
        } else if (this.isContextual(130)) {
          return this.flowParseDeclareTypeAlias(node);
        } else if (this.isContextual(131)) {
          return this.flowParseDeclareOpaqueType(node);
        } else if (this.isContextual(129)) {
          return this.flowParseDeclareInterface(node);
        } else if (this.match(82)) {
          return this.flowParseDeclareExportDeclaration(node, insideModule);
        }
        throw this.unexpected();
      }
      flowParseDeclareVariable(node) {
        this.next();
        node.id = this.flowParseTypeAnnotatableIdentifier(true);
        this.scope.declareName(node.id.name, 5, node.id.loc.start);
        this.semicolon();
        return this.finishNode(node, "DeclareVariable");
      }
      flowParseDeclareModule(node) {
        this.scope.enter(0);
        if (this.match(134)) {
          node.id = super.parseExprAtom();
        } else {
          node.id = this.parseIdentifier();
        }
        const bodyNode = node.body = this.startNode();
        const body = bodyNode.body = [];
        this.expect(5);
        while (!this.match(8)) {
          const bodyNode2 = this.startNode();
          if (this.match(83)) {
            this.next();
            if (!this.isContextual(130) && !this.match(87)) {
              this.raise(FlowErrors.InvalidNonTypeImportInDeclareModule, this.state.lastTokStartLoc);
            }
            body.push(super.parseImport(bodyNode2));
          } else {
            this.expectContextual(125, FlowErrors.UnsupportedStatementInDeclareModule);
            body.push(this.flowParseDeclare(bodyNode2, true));
          }
        }
        this.scope.exit();
        this.expect(8);
        this.finishNode(bodyNode, "BlockStatement");
        let kind = null;
        let hasModuleExport = false;
        body.forEach((bodyElement) => {
          if (isEsModuleType(bodyElement)) {
            if (kind === "CommonJS") {
              this.raise(FlowErrors.AmbiguousDeclareModuleKind, bodyElement);
            }
            kind = "ES";
          } else if (bodyElement.type === "DeclareModuleExports") {
            if (hasModuleExport) {
              this.raise(FlowErrors.DuplicateDeclareModuleExports, bodyElement);
            }
            if (kind === "ES") {
              this.raise(FlowErrors.AmbiguousDeclareModuleKind, bodyElement);
            }
            kind = "CommonJS";
            hasModuleExport = true;
          }
        });
        node.kind = kind || "CommonJS";
        return this.finishNode(node, "DeclareModule");
      }
      flowParseDeclareExportDeclaration(node, insideModule) {
        this.expect(82);
        if (this.eat(65)) {
          if (this.match(68) || this.match(80)) {
            node.declaration = this.flowParseDeclare(this.startNode());
          } else {
            node.declaration = this.flowParseType();
            this.semicolon();
          }
          node.default = true;
          return this.finishNode(node, "DeclareExportDeclaration");
        } else {
          if (this.match(75) || this.isLet() || (this.isContextual(130) || this.isContextual(129)) && !insideModule) {
            const label = this.state.value;
            throw this.raise(FlowErrors.UnsupportedDeclareExportKind, this.state.startLoc, {
              unsupportedExportKind: label,
              suggestion: exportSuggestions[label]
            });
          }
          if (this.match(74) || this.match(68) || this.match(80) || this.isContextual(131)) {
            node.declaration = this.flowParseDeclare(this.startNode());
            node.default = false;
            return this.finishNode(node, "DeclareExportDeclaration");
          } else if (this.match(55) || this.match(5) || this.isContextual(129) || this.isContextual(130) || this.isContextual(131)) {
            node = this.parseExport(node, null);
            if (node.type === "ExportNamedDeclaration") {
              node.default = false;
              delete node.exportKind;
              return this.castNodeTo(node, "DeclareExportDeclaration");
            } else {
              return this.castNodeTo(node, "DeclareExportAllDeclaration");
            }
          }
        }
        throw this.unexpected();
      }
      flowParseDeclareModuleExports(node) {
        this.next();
        this.expectContextual(111);
        node.typeAnnotation = this.flowParseTypeAnnotation();
        this.semicolon();
        return this.finishNode(node, "DeclareModuleExports");
      }
      flowParseDeclareTypeAlias(node) {
        this.next();
        const finished = this.flowParseTypeAlias(node);
        this.castNodeTo(finished, "DeclareTypeAlias");
        return finished;
      }
      flowParseDeclareOpaqueType(node) {
        this.next();
        const finished = this.flowParseOpaqueType(node, true);
        this.castNodeTo(finished, "DeclareOpaqueType");
        return finished;
      }
      flowParseDeclareInterface(node) {
        this.next();
        this.flowParseInterfaceish(node, false);
        return this.finishNode(node, "DeclareInterface");
      }
      flowParseInterfaceish(node, isClass) {
        node.id = this.flowParseRestrictedIdentifier(!isClass, true);
        this.scope.declareName(node.id.name, isClass ? 17 : 8201, node.id.loc.start);
        if (this.match(47)) {
          node.typeParameters = this.flowParseTypeParameterDeclaration();
        } else {
          node.typeParameters = null;
        }
        node.extends = [];
        if (this.eat(81)) {
          do {
            node.extends.push(this.flowParseInterfaceExtends());
          } while (!isClass && this.eat(12));
        }
        if (isClass) {
          node.implements = [];
          node.mixins = [];
          if (this.eatContextual(117)) {
            do {
              node.mixins.push(this.flowParseInterfaceExtends());
            } while (this.eat(12));
          }
          if (this.eatContextual(113)) {
            do {
              node.implements.push(this.flowParseInterfaceExtends());
            } while (this.eat(12));
          }
        }
        node.body = this.flowParseObjectType({
          allowStatic: isClass,
          allowExact: false,
          allowSpread: false,
          allowProto: isClass,
          allowInexact: false
        });
      }
      flowParseInterfaceExtends() {
        const node = this.startNode();
        node.id = this.flowParseQualifiedTypeIdentifier();
        if (this.match(47)) {
          node.typeParameters = this.flowParseTypeParameterInstantiation();
        } else {
          node.typeParameters = null;
        }
        return this.finishNode(node, "InterfaceExtends");
      }
      flowParseInterface(node) {
        this.flowParseInterfaceish(node, false);
        return this.finishNode(node, "InterfaceDeclaration");
      }
      checkNotUnderscore(word) {
        if (word === "_") {
          this.raise(FlowErrors.UnexpectedReservedUnderscore, this.state.startLoc);
        }
      }
      checkReservedType(word, startLoc, declaration) {
        if (!reservedTypes.has(word))
          return;
        this.raise(declaration ? FlowErrors.AssignReservedType : FlowErrors.UnexpectedReservedType, startLoc, {
          reservedType: word
        });
      }
      flowParseRestrictedIdentifier(liberal, declaration) {
        this.checkReservedType(this.state.value, this.state.startLoc, declaration);
        return this.parseIdentifier(liberal);
      }
      flowParseTypeAlias(node) {
        node.id = this.flowParseRestrictedIdentifier(false, true);
        this.scope.declareName(node.id.name, 8201, node.id.loc.start);
        if (this.match(47)) {
          node.typeParameters = this.flowParseTypeParameterDeclaration();
        } else {
          node.typeParameters = null;
        }
        node.right = this.flowParseTypeInitialiser(29);
        this.semicolon();
        return this.finishNode(node, "TypeAlias");
      }
      flowParseOpaqueType(node, declare) {
        this.expectContextual(130);
        node.id = this.flowParseRestrictedIdentifier(true, true);
        this.scope.declareName(node.id.name, 8201, node.id.loc.start);
        if (this.match(47)) {
          node.typeParameters = this.flowParseTypeParameterDeclaration();
        } else {
          node.typeParameters = null;
        }
        node.supertype = null;
        if (this.match(14)) {
          node.supertype = this.flowParseTypeInitialiser(14);
        }
        node.impltype = null;
        if (!declare) {
          node.impltype = this.flowParseTypeInitialiser(29);
        }
        this.semicolon();
        return this.finishNode(node, "OpaqueType");
      }
      flowParseTypeParameter(requireDefault = false) {
        const nodeStartLoc = this.state.startLoc;
        const node = this.startNode();
        const variance = this.flowParseVariance();
        const ident = this.flowParseTypeAnnotatableIdentifier();
        node.name = ident.name;
        node.variance = variance;
        node.bound = ident.typeAnnotation;
        if (this.match(29)) {
          this.eat(29);
          node.default = this.flowParseType();
        } else {
          if (requireDefault) {
            this.raise(FlowErrors.MissingTypeParamDefault, nodeStartLoc);
          }
        }
        return this.finishNode(node, "TypeParameter");
      }
      flowParseTypeParameterDeclaration() {
        const oldInType = this.state.inType;
        const node = this.startNode();
        node.params = [];
        this.state.inType = true;
        if (this.match(47) || this.match(143)) {
          this.next();
        } else {
          this.unexpected();
        }
        let defaultRequired = false;
        do {
          const typeParameter = this.flowParseTypeParameter(defaultRequired);
          node.params.push(typeParameter);
          if (typeParameter.default) {
            defaultRequired = true;
          }
          if (!this.match(48)) {
            this.expect(12);
          }
        } while (!this.match(48));
        this.expect(48);
        this.state.inType = oldInType;
        return this.finishNode(node, "TypeParameterDeclaration");
      }
      flowInTopLevelContext(cb) {
        if (this.curContext() !== types.brace) {
          const oldContext = this.state.context;
          this.state.context = [oldContext[0]];
          try {
            return cb();
          } finally {
            this.state.context = oldContext;
          }
        } else {
          return cb();
        }
      }
      flowParseTypeParameterInstantiationInExpression() {
        if (this.reScan_lt() !== 47)
          return;
        return this.flowParseTypeParameterInstantiation();
      }
      flowParseTypeParameterInstantiation() {
        const node = this.startNode();
        const oldInType = this.state.inType;
        this.state.inType = true;
        node.params = [];
        this.flowInTopLevelContext(() => {
          this.expect(47);
          const oldNoAnonFunctionType = this.state.noAnonFunctionType;
          this.state.noAnonFunctionType = false;
          while (!this.match(48)) {
            node.params.push(this.flowParseType());
            if (!this.match(48)) {
              this.expect(12);
            }
          }
          this.state.noAnonFunctionType = oldNoAnonFunctionType;
        });
        this.state.inType = oldInType;
        if (!this.state.inType && this.curContext() === types.brace) {
          this.reScan_lt_gt();
        }
        this.expect(48);
        return this.finishNode(node, "TypeParameterInstantiation");
      }
      flowParseTypeParameterInstantiationCallOrNew() {
        if (this.reScan_lt() !== 47)
          return null;
        const node = this.startNode();
        const oldInType = this.state.inType;
        node.params = [];
        this.state.inType = true;
        this.expect(47);
        while (!this.match(48)) {
          node.params.push(this.flowParseTypeOrImplicitInstantiation());
          if (!this.match(48)) {
            this.expect(12);
          }
        }
        this.expect(48);
        this.state.inType = oldInType;
        return this.finishNode(node, "TypeParameterInstantiation");
      }
      flowParseInterfaceType() {
        const node = this.startNode();
        this.expectContextual(129);
        node.extends = [];
        if (this.eat(81)) {
          do {
            node.extends.push(this.flowParseInterfaceExtends());
          } while (this.eat(12));
        }
        node.body = this.flowParseObjectType({
          allowStatic: false,
          allowExact: false,
          allowSpread: false,
          allowProto: false,
          allowInexact: false
        });
        return this.finishNode(node, "InterfaceTypeAnnotation");
      }
      flowParseObjectPropertyKey() {
        return this.match(135) || this.match(134) ? super.parseExprAtom() : this.parseIdentifier(true);
      }
      flowParseObjectTypeIndexer(node, isStatic, variance) {
        node.static = isStatic;
        if (this.lookahead().type === 14) {
          node.id = this.flowParseObjectPropertyKey();
          node.key = this.flowParseTypeInitialiser();
        } else {
          node.id = null;
          node.key = this.flowParseType();
        }
        this.expect(3);
        node.value = this.flowParseTypeInitialiser();
        node.variance = variance;
        return this.finishNode(node, "ObjectTypeIndexer");
      }
      flowParseObjectTypeInternalSlot(node, isStatic) {
        node.static = isStatic;
        node.id = this.flowParseObjectPropertyKey();
        this.expect(3);
        this.expect(3);
        if (this.match(47) || this.match(10)) {
          node.method = true;
          node.optional = false;
          node.value = this.flowParseObjectTypeMethodish(this.startNodeAt(node.loc.start));
        } else {
          node.method = false;
          if (this.eat(17)) {
            node.optional = true;
          }
          node.value = this.flowParseTypeInitialiser();
        }
        return this.finishNode(node, "ObjectTypeInternalSlot");
      }
      flowParseObjectTypeMethodish(node) {
        node.params = [];
        node.rest = null;
        node.typeParameters = null;
        node.this = null;
        if (this.match(47)) {
          node.typeParameters = this.flowParseTypeParameterDeclaration();
        }
        this.expect(10);
        if (this.match(78)) {
          node.this = this.flowParseFunctionTypeParam(true);
          node.this.name = null;
          if (!this.match(11)) {
            this.expect(12);
          }
        }
        while (!this.match(11) && !this.match(21)) {
          node.params.push(this.flowParseFunctionTypeParam(false));
          if (!this.match(11)) {
            this.expect(12);
          }
        }
        if (this.eat(21)) {
          node.rest = this.flowParseFunctionTypeParam(false);
        }
        this.expect(11);
        node.returnType = this.flowParseTypeInitialiser();
        return this.finishNode(node, "FunctionTypeAnnotation");
      }
      flowParseObjectTypeCallProperty(node, isStatic) {
        const valueNode = this.startNode();
        node.static = isStatic;
        node.value = this.flowParseObjectTypeMethodish(valueNode);
        return this.finishNode(node, "ObjectTypeCallProperty");
      }
      flowParseObjectType({
        allowStatic,
        allowExact,
        allowSpread,
        allowProto,
        allowInexact
      }) {
        const oldInType = this.state.inType;
        this.state.inType = true;
        const nodeStart = this.startNode();
        nodeStart.callProperties = [];
        nodeStart.properties = [];
        nodeStart.indexers = [];
        nodeStart.internalSlots = [];
        let endDelim;
        let exact;
        let inexact = false;
        if (allowExact && this.match(6)) {
          this.expect(6);
          endDelim = 9;
          exact = true;
        } else {
          this.expect(5);
          endDelim = 8;
          exact = false;
        }
        nodeStart.exact = exact;
        while (!this.match(endDelim)) {
          let isStatic = false;
          let protoStartLoc = null;
          let inexactStartLoc = null;
          const node = this.startNode();
          if (allowProto && this.isContextual(118)) {
            const lookahead = this.lookahead();
            if (lookahead.type !== 14 && lookahead.type !== 17) {
              this.next();
              protoStartLoc = this.state.startLoc;
              allowStatic = false;
            }
          }
          if (allowStatic && this.isContextual(106)) {
            const lookahead = this.lookahead();
            if (lookahead.type !== 14 && lookahead.type !== 17) {
              this.next();
              isStatic = true;
            }
          }
          const variance = this.flowParseVariance();
          if (this.eat(0)) {
            if (protoStartLoc != null) {
              this.unexpected(protoStartLoc);
            }
            if (this.eat(0)) {
              if (variance) {
                this.unexpected(variance.loc.start);
              }
              nodeStart.internalSlots.push(this.flowParseObjectTypeInternalSlot(node, isStatic));
            } else {
              nodeStart.indexers.push(this.flowParseObjectTypeIndexer(node, isStatic, variance));
            }
          } else if (this.match(10) || this.match(47)) {
            if (protoStartLoc != null) {
              this.unexpected(protoStartLoc);
            }
            if (variance) {
              this.unexpected(variance.loc.start);
            }
            nodeStart.callProperties.push(this.flowParseObjectTypeCallProperty(node, isStatic));
          } else {
            let kind = "init";
            if (this.isContextual(99) || this.isContextual(104)) {
              const lookahead = this.lookahead();
              if (tokenIsLiteralPropertyName(lookahead.type)) {
                kind = this.state.value;
                this.next();
              }
            }
            const propOrInexact = this.flowParseObjectTypeProperty(node, isStatic, protoStartLoc, variance, kind, allowSpread, allowInexact != null ? allowInexact : !exact);
            if (propOrInexact === null) {
              inexact = true;
              inexactStartLoc = this.state.lastTokStartLoc;
            } else {
              nodeStart.properties.push(propOrInexact);
            }
          }
          this.flowObjectTypeSemicolon();
          if (inexactStartLoc && !this.match(8) && !this.match(9)) {
            this.raise(FlowErrors.UnexpectedExplicitInexactInObject, inexactStartLoc);
          }
        }
        this.expect(endDelim);
        if (allowSpread) {
          nodeStart.inexact = inexact;
        }
        const out = this.finishNode(nodeStart, "ObjectTypeAnnotation");
        this.state.inType = oldInType;
        return out;
      }
      flowParseObjectTypeProperty(node, isStatic, protoStartLoc, variance, kind, allowSpread, allowInexact) {
        if (this.eat(21)) {
          const isInexactToken = this.match(12) || this.match(13) || this.match(8) || this.match(9);
          if (isInexactToken) {
            if (!allowSpread) {
              this.raise(FlowErrors.InexactInsideNonObject, this.state.lastTokStartLoc);
            } else if (!allowInexact) {
              this.raise(FlowErrors.InexactInsideExact, this.state.lastTokStartLoc);
            }
            if (variance) {
              this.raise(FlowErrors.InexactVariance, variance);
            }
            return null;
          }
          if (!allowSpread) {
            this.raise(FlowErrors.UnexpectedSpreadType, this.state.lastTokStartLoc);
          }
          if (protoStartLoc != null) {
            this.unexpected(protoStartLoc);
          }
          if (variance) {
            this.raise(FlowErrors.SpreadVariance, variance);
          }
          node.argument = this.flowParseType();
          return this.finishNode(node, "ObjectTypeSpreadProperty");
        } else {
          node.key = this.flowParseObjectPropertyKey();
          node.static = isStatic;
          node.proto = protoStartLoc != null;
          node.kind = kind;
          let optional = false;
          if (this.match(47) || this.match(10)) {
            node.method = true;
            if (protoStartLoc != null) {
              this.unexpected(protoStartLoc);
            }
            if (variance) {
              this.unexpected(variance.loc.start);
            }
            node.value = this.flowParseObjectTypeMethodish(this.startNodeAt(node.loc.start));
            if (kind === "get" || kind === "set") {
              this.flowCheckGetterSetterParams(node);
            }
            if (!allowSpread && node.key.name === "constructor" && node.value.this) {
              this.raise(FlowErrors.ThisParamBannedInConstructor, node.value.this);
            }
          } else {
            if (kind !== "init")
              this.unexpected();
            node.method = false;
            if (this.eat(17)) {
              optional = true;
            }
            node.value = this.flowParseTypeInitialiser();
            node.variance = variance;
          }
          node.optional = optional;
          return this.finishNode(node, "ObjectTypeProperty");
        }
      }
      flowCheckGetterSetterParams(property) {
        const paramCount = property.kind === "get" ? 0 : 1;
        const length = property.value.params.length + (property.value.rest ? 1 : 0);
        if (property.value.this) {
          this.raise(property.kind === "get" ? FlowErrors.GetterMayNotHaveThisParam : FlowErrors.SetterMayNotHaveThisParam, property.value.this);
        }
        if (length !== paramCount) {
          this.raise(property.kind === "get" ? Errors.BadGetterArity : Errors.BadSetterArity, property);
        }
        if (property.kind === "set" && property.value.rest) {
          this.raise(Errors.BadSetterRestParameter, property);
        }
      }
      flowObjectTypeSemicolon() {
        if (!this.eat(13) && !this.eat(12) && !this.match(8) && !this.match(9)) {
          this.unexpected();
        }
      }
      flowParseQualifiedTypeIdentifier(startLoc, id) {
        startLoc != null ? startLoc : startLoc = this.state.startLoc;
        let node = id || this.flowParseRestrictedIdentifier(true);
        while (this.eat(16)) {
          const node2 = this.startNodeAt(startLoc);
          node2.qualification = node;
          node2.id = this.flowParseRestrictedIdentifier(true);
          node = this.finishNode(node2, "QualifiedTypeIdentifier");
        }
        return node;
      }
      flowParseGenericType(startLoc, id) {
        const node = this.startNodeAt(startLoc);
        node.typeParameters = null;
        node.id = this.flowParseQualifiedTypeIdentifier(startLoc, id);
        if (this.match(47)) {
          node.typeParameters = this.flowParseTypeParameterInstantiation();
        }
        return this.finishNode(node, "GenericTypeAnnotation");
      }
      flowParseTypeofType() {
        const node = this.startNode();
        this.expect(87);
        node.argument = this.flowParsePrimaryType();
        return this.finishNode(node, "TypeofTypeAnnotation");
      }
      flowParseTupleType() {
        const node = this.startNode();
        node.types = [];
        this.expect(0);
        while (this.state.pos < this.length && !this.match(3)) {
          node.types.push(this.flowParseType());
          if (this.match(3))
            break;
          this.expect(12);
        }
        this.expect(3);
        return this.finishNode(node, "TupleTypeAnnotation");
      }
      flowParseFunctionTypeParam(first) {
        let name = null;
        let optional = false;
        let typeAnnotation = null;
        const node = this.startNode();
        const lh = this.lookahead();
        const isThis = this.state.type === 78;
        if (lh.type === 14 || lh.type === 17) {
          if (isThis && !first) {
            this.raise(FlowErrors.ThisParamMustBeFirst, node);
          }
          name = this.parseIdentifier(isThis);
          if (this.eat(17)) {
            optional = true;
            if (isThis) {
              this.raise(FlowErrors.ThisParamMayNotBeOptional, node);
            }
          }
          typeAnnotation = this.flowParseTypeInitialiser();
        } else {
          typeAnnotation = this.flowParseType();
        }
        node.name = name;
        node.optional = optional;
        node.typeAnnotation = typeAnnotation;
        return this.finishNode(node, "FunctionTypeParam");
      }
      reinterpretTypeAsFunctionTypeParam(type) {
        const node = this.startNodeAt(type.loc.start);
        node.name = null;
        node.optional = false;
        node.typeAnnotation = type;
        return this.finishNode(node, "FunctionTypeParam");
      }
      flowParseFunctionTypeParams(params = []) {
        let rest = null;
        let _this = null;
        if (this.match(78)) {
          _this = this.flowParseFunctionTypeParam(true);
          _this.name = null;
          if (!this.match(11)) {
            this.expect(12);
          }
        }
        while (!this.match(11) && !this.match(21)) {
          params.push(this.flowParseFunctionTypeParam(false));
          if (!this.match(11)) {
            this.expect(12);
          }
        }
        if (this.eat(21)) {
          rest = this.flowParseFunctionTypeParam(false);
        }
        return {
          params,
          rest,
          _this
        };
      }
      flowIdentToTypeAnnotation(startLoc, node, id) {
        switch (id.name) {
          case "any":
            return this.finishNode(node, "AnyTypeAnnotation");
          case "bool":
          case "boolean":
            return this.finishNode(node, "BooleanTypeAnnotation");
          case "mixed":
            return this.finishNode(node, "MixedTypeAnnotation");
          case "empty":
            return this.finishNode(node, "EmptyTypeAnnotation");
          case "number":
            return this.finishNode(node, "NumberTypeAnnotation");
          case "string":
            return this.finishNode(node, "StringTypeAnnotation");
          case "symbol":
            return this.finishNode(node, "SymbolTypeAnnotation");
          default:
            this.checkNotUnderscore(id.name);
            return this.flowParseGenericType(startLoc, id);
        }
      }
      flowParsePrimaryType() {
        const startLoc = this.state.startLoc;
        const node = this.startNode();
        let tmp;
        let type;
        let isGroupedType = false;
        const oldNoAnonFunctionType = this.state.noAnonFunctionType;
        switch (this.state.type) {
          case 5:
            return this.flowParseObjectType({
              allowStatic: false,
              allowExact: false,
              allowSpread: true,
              allowProto: false,
              allowInexact: true
            });
          case 6:
            return this.flowParseObjectType({
              allowStatic: false,
              allowExact: true,
              allowSpread: true,
              allowProto: false,
              allowInexact: false
            });
          case 0:
            this.state.noAnonFunctionType = false;
            type = this.flowParseTupleType();
            this.state.noAnonFunctionType = oldNoAnonFunctionType;
            return type;
          case 47: {
            const node2 = this.startNode();
            node2.typeParameters = this.flowParseTypeParameterDeclaration();
            this.expect(10);
            tmp = this.flowParseFunctionTypeParams();
            node2.params = tmp.params;
            node2.rest = tmp.rest;
            node2.this = tmp._this;
            this.expect(11);
            this.expect(19);
            node2.returnType = this.flowParseType();
            return this.finishNode(node2, "FunctionTypeAnnotation");
          }
          case 10: {
            const node2 = this.startNode();
            this.next();
            if (!this.match(11) && !this.match(21)) {
              if (tokenIsIdentifier(this.state.type) || this.match(78)) {
                const token = this.lookahead().type;
                isGroupedType = token !== 17 && token !== 14;
              } else {
                isGroupedType = true;
              }
            }
            if (isGroupedType) {
              this.state.noAnonFunctionType = false;
              type = this.flowParseType();
              this.state.noAnonFunctionType = oldNoAnonFunctionType;
              if (this.state.noAnonFunctionType || !(this.match(12) || this.match(11) && this.lookahead().type === 19)) {
                this.expect(11);
                return type;
              } else {
                this.eat(12);
              }
            }
            if (type) {
              tmp = this.flowParseFunctionTypeParams([this.reinterpretTypeAsFunctionTypeParam(type)]);
            } else {
              tmp = this.flowParseFunctionTypeParams();
            }
            node2.params = tmp.params;
            node2.rest = tmp.rest;
            node2.this = tmp._this;
            this.expect(11);
            this.expect(19);
            node2.returnType = this.flowParseType();
            node2.typeParameters = null;
            return this.finishNode(node2, "FunctionTypeAnnotation");
          }
          case 134:
            return this.parseLiteral(this.state.value, "StringLiteralTypeAnnotation");
          case 85:
          case 86:
            node.value = this.match(85);
            this.next();
            return this.finishNode(node, "BooleanLiteralTypeAnnotation");
          case 53:
            if (this.state.value === "-") {
              this.next();
              if (this.match(135)) {
                return this.parseLiteralAtNode(-this.state.value, "NumberLiteralTypeAnnotation", node);
              }
              if (this.match(136)) {
                return this.parseLiteralAtNode(-this.state.value, "BigIntLiteralTypeAnnotation", node);
              }
              throw this.raise(FlowErrors.UnexpectedSubtractionOperand, this.state.startLoc);
            }
            throw this.unexpected();
          case 135:
            return this.parseLiteral(this.state.value, "NumberLiteralTypeAnnotation");
          case 136:
            return this.parseLiteral(this.state.value, "BigIntLiteralTypeAnnotation");
          case 88:
            this.next();
            return this.finishNode(node, "VoidTypeAnnotation");
          case 84:
            this.next();
            return this.finishNode(node, "NullLiteralTypeAnnotation");
          case 78:
            this.next();
            return this.finishNode(node, "ThisTypeAnnotation");
          case 55:
            this.next();
            return this.finishNode(node, "ExistsTypeAnnotation");
          case 87:
            return this.flowParseTypeofType();
          default:
            if (tokenIsKeyword(this.state.type)) {
              const label = tokenLabelName(this.state.type);
              this.next();
              return super.createIdentifier(node, label);
            } else if (tokenIsIdentifier(this.state.type)) {
              if (this.isContextual(129)) {
                return this.flowParseInterfaceType();
              }
              return this.flowIdentToTypeAnnotation(startLoc, node, this.parseIdentifier());
            }
        }
        throw this.unexpected();
      }
      flowParsePostfixType() {
        const startLoc = this.state.startLoc;
        let type = this.flowParsePrimaryType();
        let seenOptionalIndexedAccess = false;
        while ((this.match(0) || this.match(18)) && !this.canInsertSemicolon()) {
          const node = this.startNodeAt(startLoc);
          const optional = this.eat(18);
          seenOptionalIndexedAccess = seenOptionalIndexedAccess || optional;
          this.expect(0);
          if (!optional && this.match(3)) {
            node.elementType = type;
            this.next();
            type = this.finishNode(node, "ArrayTypeAnnotation");
          } else {
            node.objectType = type;
            node.indexType = this.flowParseType();
            this.expect(3);
            if (seenOptionalIndexedAccess) {
              node.optional = optional;
              type = this.finishNode(node, "OptionalIndexedAccessType");
            } else {
              type = this.finishNode(node, "IndexedAccessType");
            }
          }
        }
        return type;
      }
      flowParsePrefixType() {
        const node = this.startNode();
        if (this.eat(17)) {
          node.typeAnnotation = this.flowParsePrefixType();
          return this.finishNode(node, "NullableTypeAnnotation");
        } else {
          return this.flowParsePostfixType();
        }
      }
      flowParseAnonFunctionWithoutParens() {
        const param = this.flowParsePrefixType();
        if (!this.state.noAnonFunctionType && this.eat(19)) {
          const node = this.startNodeAt(param.loc.start);
          node.params = [this.reinterpretTypeAsFunctionTypeParam(param)];
          node.rest = null;
          node.this = null;
          node.returnType = this.flowParseType();
          node.typeParameters = null;
          return this.finishNode(node, "FunctionTypeAnnotation");
        }
        return param;
      }
      flowParseIntersectionType() {
        const node = this.startNode();
        this.eat(45);
        const type = this.flowParseAnonFunctionWithoutParens();
        node.types = [type];
        while (this.eat(45)) {
          node.types.push(this.flowParseAnonFunctionWithoutParens());
        }
        return node.types.length === 1 ? type : this.finishNode(node, "IntersectionTypeAnnotation");
      }
      flowParseUnionType() {
        const node = this.startNode();
        this.eat(43);
        const type = this.flowParseIntersectionType();
        node.types = [type];
        while (this.eat(43)) {
          node.types.push(this.flowParseIntersectionType());
        }
        return node.types.length === 1 ? type : this.finishNode(node, "UnionTypeAnnotation");
      }
      flowParseType() {
        const oldInType = this.state.inType;
        this.state.inType = true;
        const type = this.flowParseUnionType();
        this.state.inType = oldInType;
        return type;
      }
      flowParseTypeOrImplicitInstantiation() {
        if (this.state.type === 132 && this.state.value === "_") {
          const startLoc = this.state.startLoc;
          const node = this.parseIdentifier();
          return this.flowParseGenericType(startLoc, node);
        } else {
          return this.flowParseType();
        }
      }
      flowParseTypeAnnotation() {
        const node = this.startNode();
        node.typeAnnotation = this.flowParseTypeInitialiser();
        return this.finishNode(node, "TypeAnnotation");
      }
      flowParseTypeAnnotatableIdentifier(allowPrimitiveOverride) {
        const ident = allowPrimitiveOverride ? this.parseIdentifier() : this.flowParseRestrictedIdentifier();
        if (this.match(14)) {
          ident.typeAnnotation = this.flowParseTypeAnnotation();
          this.resetEndLocation(ident);
        }
        return ident;
      }
      typeCastToParameter(node) {
        node.expression.typeAnnotation = node.typeAnnotation;
        this.resetEndLocation(node.expression, node.typeAnnotation.loc.end);
        return node.expression;
      }
      flowParseVariance() {
        let variance = null;
        if (this.match(53)) {
          variance = this.startNode();
          if (this.state.value === "+") {
            variance.kind = "plus";
          } else {
            variance.kind = "minus";
          }
          this.next();
          return this.finishNode(variance, "Variance");
        }
        return variance;
      }
      parseFunctionBody(node, allowExpressionBody, isMethod = false) {
        if (allowExpressionBody) {
          this.forwardNoArrowParamsConversionAt(node, () => super.parseFunctionBody(node, true, isMethod));
          return;
        }
        super.parseFunctionBody(node, false, isMethod);
      }
      parseFunctionBodyAndFinish(node, type, isMethod = false) {
        if (this.match(14)) {
          const typeNode = this.startNode();
          [typeNode.typeAnnotation, node.predicate] = this.flowParseTypeAndPredicateInitialiser();
          node.returnType = typeNode.typeAnnotation ? this.finishNode(typeNode, "TypeAnnotation") : null;
        }
        return super.parseFunctionBodyAndFinish(node, type, isMethod);
      }
      parseStatementLike(flags) {
        if (this.state.strict && this.isContextual(129)) {
          const lookahead = this.lookahead();
          if (tokenIsKeywordOrIdentifier(lookahead.type)) {
            const node = this.startNode();
            this.next();
            return this.flowParseInterface(node);
          }
        } else if (this.isContextual(126)) {
          const node = this.startNode();
          this.next();
          return this.flowParseEnumDeclaration(node);
        }
        const stmt = super.parseStatementLike(flags);
        if (this.flowPragma === void 0 && !this.isValidDirective(stmt)) {
          this.flowPragma = null;
        }
        return stmt;
      }
      parseExpressionStatement(node, expr, decorators) {
        if (expr.type === "Identifier") {
          if (expr.name === "declare") {
            if (this.match(80) || tokenIsIdentifier(this.state.type) || this.match(68) || this.match(74) || this.match(82)) {
              return this.flowParseDeclare(node);
            }
          } else if (tokenIsIdentifier(this.state.type)) {
            if (expr.name === "interface") {
              return this.flowParseInterface(node);
            } else if (expr.name === "type") {
              return this.flowParseTypeAlias(node);
            } else if (expr.name === "opaque") {
              return this.flowParseOpaqueType(node, false);
            }
          }
        }
        return super.parseExpressionStatement(node, expr, decorators);
      }
      shouldParseExportDeclaration() {
        const {
          type
        } = this.state;
        if (type === 126 || tokenIsFlowInterfaceOrTypeOrOpaque(type)) {
          return !this.state.containsEsc;
        }
        return super.shouldParseExportDeclaration();
      }
      isExportDefaultSpecifier() {
        const {
          type
        } = this.state;
        if (type === 126 || tokenIsFlowInterfaceOrTypeOrOpaque(type)) {
          return this.state.containsEsc;
        }
        return super.isExportDefaultSpecifier();
      }
      parseExportDefaultExpression() {
        if (this.isContextual(126)) {
          const node = this.startNode();
          this.next();
          return this.flowParseEnumDeclaration(node);
        }
        return super.parseExportDefaultExpression();
      }
      parseConditional(expr, startLoc, refExpressionErrors) {
        if (!this.match(17))
          return expr;
        if (this.state.maybeInArrowParameters) {
          const nextCh = this.lookaheadCharCode();
          if (nextCh === 44 || nextCh === 61 || nextCh === 58 || nextCh === 41) {
            this.setOptionalParametersError(refExpressionErrors);
            return expr;
          }
        }
        this.expect(17);
        const state = this.state.clone();
        const originalNoArrowAt = this.state.noArrowAt;
        const node = this.startNodeAt(startLoc);
        let {
          consequent,
          failed
        } = this.tryParseConditionalConsequent();
        let [valid, invalid] = this.getArrowLikeExpressions(consequent);
        if (failed || invalid.length > 0) {
          const noArrowAt = [...originalNoArrowAt];
          if (invalid.length > 0) {
            this.state = state;
            this.state.noArrowAt = noArrowAt;
            for (let i = 0; i < invalid.length; i++) {
              noArrowAt.push(invalid[i].start);
            }
            ({
              consequent,
              failed
            } = this.tryParseConditionalConsequent());
            [valid, invalid] = this.getArrowLikeExpressions(consequent);
          }
          if (failed && valid.length > 1) {
            this.raise(FlowErrors.AmbiguousConditionalArrow, state.startLoc);
          }
          if (failed && valid.length === 1) {
            this.state = state;
            noArrowAt.push(valid[0].start);
            this.state.noArrowAt = noArrowAt;
            ({
              consequent,
              failed
            } = this.tryParseConditionalConsequent());
          }
        }
        this.getArrowLikeExpressions(consequent, true);
        this.state.noArrowAt = originalNoArrowAt;
        this.expect(14);
        node.test = expr;
        node.consequent = consequent;
        node.alternate = this.forwardNoArrowParamsConversionAt(node, () => this.parseMaybeAssign(void 0, void 0));
        return this.finishNode(node, "ConditionalExpression");
      }
      tryParseConditionalConsequent() {
        this.state.noArrowParamsConversionAt.push(this.state.start);
        const consequent = this.parseMaybeAssignAllowIn();
        const failed = !this.match(14);
        this.state.noArrowParamsConversionAt.pop();
        return {
          consequent,
          failed
        };
      }
      getArrowLikeExpressions(node, disallowInvalid) {
        const stack = [node];
        const arrows = [];
        while (stack.length !== 0) {
          const node2 = stack.pop();
          if (node2.type === "ArrowFunctionExpression" && node2.body.type !== "BlockStatement") {
            if (node2.typeParameters || !node2.returnType) {
              this.finishArrowValidation(node2);
            } else {
              arrows.push(node2);
            }
            stack.push(node2.body);
          } else if (node2.type === "ConditionalExpression") {
            stack.push(node2.consequent);
            stack.push(node2.alternate);
          }
        }
        if (disallowInvalid) {
          arrows.forEach((node2) => this.finishArrowValidation(node2));
          return [arrows, []];
        }
        return partition(arrows, (node2) => node2.params.every((param) => this.isAssignable(param, true)));
      }
      finishArrowValidation(node) {
        var _node$extra;
        this.toAssignableList(node.params, (_node$extra = node.extra) == null ? void 0 : _node$extra.trailingCommaLoc, false);
        this.scope.enter(514 | 4);
        super.checkParams(node, false, true);
        this.scope.exit();
      }
      forwardNoArrowParamsConversionAt(node, parse3) {
        let result;
        if (this.state.noArrowParamsConversionAt.includes(this.offsetToSourcePos(node.start))) {
          this.state.noArrowParamsConversionAt.push(this.state.start);
          result = parse3();
          this.state.noArrowParamsConversionAt.pop();
        } else {
          result = parse3();
        }
        return result;
      }
      parseParenItem(node, startLoc) {
        const newNode = super.parseParenItem(node, startLoc);
        if (this.eat(17)) {
          newNode.optional = true;
          this.resetEndLocation(node);
        }
        if (this.match(14)) {
          const typeCastNode = this.startNodeAt(startLoc);
          typeCastNode.expression = newNode;
          typeCastNode.typeAnnotation = this.flowParseTypeAnnotation();
          return this.finishNode(typeCastNode, "TypeCastExpression");
        }
        return newNode;
      }
      assertModuleNodeAllowed(node) {
        if (node.type === "ImportDeclaration" && (node.importKind === "type" || node.importKind === "typeof") || node.type === "ExportNamedDeclaration" && node.exportKind === "type" || node.type === "ExportAllDeclaration" && node.exportKind === "type") {
          return;
        }
        super.assertModuleNodeAllowed(node);
      }
      parseExportDeclaration(node) {
        if (this.isContextual(130)) {
          node.exportKind = "type";
          const declarationNode = this.startNode();
          this.next();
          if (this.match(5)) {
            node.specifiers = this.parseExportSpecifiers(true);
            super.parseExportFrom(node);
            return null;
          } else {
            return this.flowParseTypeAlias(declarationNode);
          }
        } else if (this.isContextual(131)) {
          node.exportKind = "type";
          const declarationNode = this.startNode();
          this.next();
          return this.flowParseOpaqueType(declarationNode, false);
        } else if (this.isContextual(129)) {
          node.exportKind = "type";
          const declarationNode = this.startNode();
          this.next();
          return this.flowParseInterface(declarationNode);
        } else if (this.isContextual(126)) {
          node.exportKind = "value";
          const declarationNode = this.startNode();
          this.next();
          return this.flowParseEnumDeclaration(declarationNode);
        } else {
          return super.parseExportDeclaration(node);
        }
      }
      eatExportStar(node) {
        if (super.eatExportStar(node))
          return true;
        if (this.isContextual(130) && this.lookahead().type === 55) {
          node.exportKind = "type";
          this.next();
          this.next();
          return true;
        }
        return false;
      }
      maybeParseExportNamespaceSpecifier(node) {
        const {
          startLoc
        } = this.state;
        const hasNamespace = super.maybeParseExportNamespaceSpecifier(node);
        if (hasNamespace && node.exportKind === "type") {
          this.unexpected(startLoc);
        }
        return hasNamespace;
      }
      parseClassId(node, isStatement, optionalId) {
        super.parseClassId(node, isStatement, optionalId);
        if (this.match(47)) {
          node.typeParameters = this.flowParseTypeParameterDeclaration();
        }
      }
      parseClassMember(classBody, member, state) {
        const {
          startLoc
        } = this.state;
        if (this.isContextual(125)) {
          if (super.parseClassMemberFromModifier(classBody, member)) {
            return;
          }
          member.declare = true;
        }
        super.parseClassMember(classBody, member, state);
        if (member.declare) {
          if (member.type !== "ClassProperty" && member.type !== "ClassPrivateProperty" && member.type !== "PropertyDefinition") {
            this.raise(FlowErrors.DeclareClassElement, startLoc);
          } else if (member.value) {
            this.raise(FlowErrors.DeclareClassFieldInitializer, member.value);
          }
        }
      }
      isIterator(word) {
        return word === "iterator" || word === "asyncIterator";
      }
      readIterator() {
        const word = super.readWord1();
        const fullWord = "@@" + word;
        if (!this.isIterator(word) || !this.state.inType) {
          this.raise(Errors.InvalidIdentifier, this.state.curPosition(), {
            identifierName: fullWord
          });
        }
        this.finishToken(132, fullWord);
      }
      getTokenFromCode(code2) {
        const next = this.input.charCodeAt(this.state.pos + 1);
        if (code2 === 123 && next === 124) {
          this.finishOp(6, 2);
        } else if (this.state.inType && (code2 === 62 || code2 === 60)) {
          this.finishOp(code2 === 62 ? 48 : 47, 1);
        } else if (this.state.inType && code2 === 63) {
          if (next === 46) {
            this.finishOp(18, 2);
          } else {
            this.finishOp(17, 1);
          }
        } else if (isIteratorStart(code2, next, this.input.charCodeAt(this.state.pos + 2))) {
          this.state.pos += 2;
          this.readIterator();
        } else {
          super.getTokenFromCode(code2);
        }
      }
      isAssignable(node, isBinding) {
        if (node.type === "TypeCastExpression") {
          return this.isAssignable(node.expression, isBinding);
        } else {
          return super.isAssignable(node, isBinding);
        }
      }
      toAssignable(node, isLHS = false) {
        if (!isLHS && node.type === "AssignmentExpression" && node.left.type === "TypeCastExpression") {
          node.left = this.typeCastToParameter(node.left);
        }
        super.toAssignable(node, isLHS);
      }
      toAssignableList(exprList, trailingCommaLoc, isLHS) {
        for (let i = 0; i < exprList.length; i++) {
          const expr = exprList[i];
          if ((expr == null ? void 0 : expr.type) === "TypeCastExpression") {
            exprList[i] = this.typeCastToParameter(expr);
          }
        }
        super.toAssignableList(exprList, trailingCommaLoc, isLHS);
      }
      toReferencedList(exprList, isParenthesizedExpr) {
        for (let i = 0; i < exprList.length; i++) {
          var _expr$extra;
          const expr = exprList[i];
          if (expr && expr.type === "TypeCastExpression" && !((_expr$extra = expr.extra) != null && _expr$extra.parenthesized) && (exprList.length > 1 || !isParenthesizedExpr)) {
            this.raise(FlowErrors.TypeCastInPattern, expr.typeAnnotation);
          }
        }
        return exprList;
      }
      parseArrayLike(close, isTuple, refExpressionErrors) {
        const node = super.parseArrayLike(close, isTuple, refExpressionErrors);
        if (refExpressionErrors != null && !this.state.maybeInArrowParameters) {
          this.toReferencedList(node.elements);
        }
        return node;
      }
      isValidLVal(type, disallowCallExpression, isParenthesized, binding) {
        return type === "TypeCastExpression" || super.isValidLVal(type, disallowCallExpression, isParenthesized, binding);
      }
      parseClassProperty(node) {
        if (this.match(14)) {
          node.typeAnnotation = this.flowParseTypeAnnotation();
        }
        return super.parseClassProperty(node);
      }
      parseClassPrivateProperty(node) {
        if (this.match(14)) {
          node.typeAnnotation = this.flowParseTypeAnnotation();
        }
        return super.parseClassPrivateProperty(node);
      }
      isClassMethod() {
        return this.match(47) || super.isClassMethod();
      }
      isClassProperty() {
        return this.match(14) || super.isClassProperty();
      }
      isNonstaticConstructor(method) {
        return !this.match(14) && super.isNonstaticConstructor(method);
      }
      pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper) {
        if (method.variance) {
          this.unexpected(method.variance.loc.start);
        }
        delete method.variance;
        if (this.match(47)) {
          method.typeParameters = this.flowParseTypeParameterDeclaration();
        }
        super.pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper);
        if (method.params && isConstructor) {
          const params = method.params;
          if (params.length > 0 && this.isThisParam(params[0])) {
            this.raise(FlowErrors.ThisParamBannedInConstructor, method);
          }
        } else if (method.type === "MethodDefinition" && isConstructor && method.value.params) {
          const params = method.value.params;
          if (params.length > 0 && this.isThisParam(params[0])) {
            this.raise(FlowErrors.ThisParamBannedInConstructor, method);
          }
        }
      }
      pushClassPrivateMethod(classBody, method, isGenerator, isAsync) {
        if (method.variance) {
          this.unexpected(method.variance.loc.start);
        }
        delete method.variance;
        if (this.match(47)) {
          method.typeParameters = this.flowParseTypeParameterDeclaration();
        }
        super.pushClassPrivateMethod(classBody, method, isGenerator, isAsync);
      }
      parseClassSuper(node) {
        super.parseClassSuper(node);
        if (node.superClass && (this.match(47) || this.match(51))) {
          node.superTypeParameters = this.flowParseTypeParameterInstantiationInExpression();
        }
        if (this.isContextual(113)) {
          this.next();
          const implemented = node.implements = [];
          do {
            const node2 = this.startNode();
            node2.id = this.flowParseRestrictedIdentifier(true);
            if (this.match(47)) {
              node2.typeParameters = this.flowParseTypeParameterInstantiation();
            } else {
              node2.typeParameters = null;
            }
            implemented.push(this.finishNode(node2, "ClassImplements"));
          } while (this.eat(12));
        }
      }
      checkGetterSetterParams(method) {
        super.checkGetterSetterParams(method);
        const params = this.getObjectOrClassMethodParams(method);
        if (params.length > 0) {
          const param = params[0];
          if (this.isThisParam(param) && method.kind === "get") {
            this.raise(FlowErrors.GetterMayNotHaveThisParam, param);
          } else if (this.isThisParam(param)) {
            this.raise(FlowErrors.SetterMayNotHaveThisParam, param);
          }
        }
      }
      parsePropertyNamePrefixOperator(node) {
        node.variance = this.flowParseVariance();
      }
      parseObjPropValue(prop, startLoc, isGenerator, isAsync, isPattern, isAccessor, refExpressionErrors) {
        if (prop.variance) {
          this.unexpected(prop.variance.loc.start);
        }
        delete prop.variance;
        let typeParameters;
        if (this.match(47) && !isAccessor) {
          typeParameters = this.flowParseTypeParameterDeclaration();
          if (!this.match(10))
            this.unexpected();
        }
        const result = super.parseObjPropValue(prop, startLoc, isGenerator, isAsync, isPattern, isAccessor, refExpressionErrors);
        if (typeParameters) {
          (result.value || result).typeParameters = typeParameters;
        }
        return result;
      }
      parseFunctionParamType(param) {
        if (this.eat(17)) {
          if (param.type !== "Identifier") {
            this.raise(FlowErrors.PatternIsOptional, param);
          }
          if (this.isThisParam(param)) {
            this.raise(FlowErrors.ThisParamMayNotBeOptional, param);
          }
          param.optional = true;
        }
        if (this.match(14)) {
          param.typeAnnotation = this.flowParseTypeAnnotation();
        } else if (this.isThisParam(param)) {
          this.raise(FlowErrors.ThisParamAnnotationRequired, param);
        }
        if (this.match(29) && this.isThisParam(param)) {
          this.raise(FlowErrors.ThisParamNoDefault, param);
        }
        this.resetEndLocation(param);
        return param;
      }
      parseMaybeDefault(startLoc, left) {
        const node = super.parseMaybeDefault(startLoc, left);
        if (node.type === "AssignmentPattern" && node.typeAnnotation && node.right.start < node.typeAnnotation.start) {
          this.raise(FlowErrors.TypeBeforeInitializer, node.typeAnnotation);
        }
        return node;
      }
      checkImportReflection(node) {
        super.checkImportReflection(node);
        if (node.module && node.importKind !== "value") {
          this.raise(FlowErrors.ImportReflectionHasImportType, node.specifiers[0].loc.start);
        }
      }
      parseImportSpecifierLocal(node, specifier, type) {
        specifier.local = hasTypeImportKind(node) ? this.flowParseRestrictedIdentifier(true, true) : this.parseIdentifier();
        node.specifiers.push(this.finishImportSpecifier(specifier, type));
      }
      isPotentialImportPhase(isExport) {
        if (super.isPotentialImportPhase(isExport))
          return true;
        if (this.isContextual(130)) {
          if (!isExport)
            return true;
          const ch = this.lookaheadCharCode();
          return ch === 123 || ch === 42;
        }
        return !isExport && this.isContextual(87);
      }
      applyImportPhase(node, isExport, phase, loc) {
        super.applyImportPhase(node, isExport, phase, loc);
        if (isExport) {
          if (!phase && this.match(65)) {
            return;
          }
          node.exportKind = phase === "type" ? phase : "value";
        } else {
          if (phase === "type" && this.match(55))
            this.unexpected();
          node.importKind = phase === "type" || phase === "typeof" ? phase : "value";
        }
      }
      parseImportSpecifier(specifier, importedIsString, isInTypeOnlyImport, isMaybeTypeOnly, bindingType) {
        const firstIdent = specifier.imported;
        let specifierTypeKind = null;
        if (firstIdent.type === "Identifier") {
          if (firstIdent.name === "type") {
            specifierTypeKind = "type";
          } else if (firstIdent.name === "typeof") {
            specifierTypeKind = "typeof";
          }
        }
        let isBinding = false;
        if (this.isContextual(93) && !this.isLookaheadContextual("as")) {
          const as_ident = this.parseIdentifier(true);
          if (specifierTypeKind !== null && !tokenIsKeywordOrIdentifier(this.state.type)) {
            specifier.imported = as_ident;
            specifier.importKind = specifierTypeKind;
            specifier.local = this.cloneIdentifier(as_ident);
          } else {
            specifier.imported = firstIdent;
            specifier.importKind = null;
            specifier.local = this.parseIdentifier();
          }
        } else {
          if (specifierTypeKind !== null && tokenIsKeywordOrIdentifier(this.state.type)) {
            specifier.imported = this.parseIdentifier(true);
            specifier.importKind = specifierTypeKind;
          } else {
            if (importedIsString) {
              throw this.raise(Errors.ImportBindingIsString, specifier, {
                importName: firstIdent.value
              });
            }
            specifier.imported = firstIdent;
            specifier.importKind = null;
          }
          if (this.eatContextual(93)) {
            specifier.local = this.parseIdentifier();
          } else {
            isBinding = true;
            specifier.local = this.cloneIdentifier(specifier.imported);
          }
        }
        const specifierIsTypeImport = hasTypeImportKind(specifier);
        if (isInTypeOnlyImport && specifierIsTypeImport) {
          this.raise(FlowErrors.ImportTypeShorthandOnlyInPureImport, specifier);
        }
        if (isInTypeOnlyImport || specifierIsTypeImport) {
          this.checkReservedType(specifier.local.name, specifier.local.loc.start, true);
        }
        if (isBinding && !isInTypeOnlyImport && !specifierIsTypeImport) {
          this.checkReservedWord(specifier.local.name, specifier.loc.start, true, true);
        }
        return this.finishImportSpecifier(specifier, "ImportSpecifier");
      }
      parseBindingAtom() {
        switch (this.state.type) {
          case 78:
            return this.parseIdentifier(true);
          default:
            return super.parseBindingAtom();
        }
      }
      parseFunctionParams(node, isConstructor) {
        const kind = node.kind;
        if (kind !== "get" && kind !== "set" && this.match(47)) {
          node.typeParameters = this.flowParseTypeParameterDeclaration();
        }
        super.parseFunctionParams(node, isConstructor);
      }
      parseVarId(decl, kind) {
        super.parseVarId(decl, kind);
        if (this.match(14)) {
          decl.id.typeAnnotation = this.flowParseTypeAnnotation();
          this.resetEndLocation(decl.id);
        }
      }
      parseAsyncArrowFromCallExpression(node, call) {
        if (this.match(14)) {
          const oldNoAnonFunctionType = this.state.noAnonFunctionType;
          this.state.noAnonFunctionType = true;
          node.returnType = this.flowParseTypeAnnotation();
          this.state.noAnonFunctionType = oldNoAnonFunctionType;
        }
        return super.parseAsyncArrowFromCallExpression(node, call);
      }
      shouldParseAsyncArrow() {
        return this.match(14) || super.shouldParseAsyncArrow();
      }
      parseMaybeAssign(refExpressionErrors, afterLeftParse) {
        var _jsx;
        let state = null;
        let jsx2;
        if (this.hasPlugin("jsx") && (this.match(143) || this.match(47))) {
          state = this.state.clone();
          jsx2 = this.tryParse(() => super.parseMaybeAssign(refExpressionErrors, afterLeftParse), state);
          if (!jsx2.error)
            return jsx2.node;
          const {
            context
          } = this.state;
          const currentContext = context[context.length - 1];
          if (currentContext === types.j_oTag || currentContext === types.j_expr) {
            context.pop();
          }
        }
        if ((_jsx = jsx2) != null && _jsx.error || this.match(47)) {
          var _jsx2, _jsx3;
          state = state || this.state.clone();
          let typeParameters;
          const arrow = this.tryParse((abort) => {
            var _arrowExpression$extr;
            typeParameters = this.flowParseTypeParameterDeclaration();
            const arrowExpression2 = this.forwardNoArrowParamsConversionAt(typeParameters, () => {
              const result = super.parseMaybeAssign(refExpressionErrors, afterLeftParse);
              this.resetStartLocationFromNode(result, typeParameters);
              return result;
            });
            if ((_arrowExpression$extr = arrowExpression2.extra) != null && _arrowExpression$extr.parenthesized)
              abort();
            const expr = this.maybeUnwrapTypeCastExpression(arrowExpression2);
            if (expr.type !== "ArrowFunctionExpression")
              abort();
            expr.typeParameters = typeParameters;
            this.resetStartLocationFromNode(expr, typeParameters);
            return arrowExpression2;
          }, state);
          let arrowExpression = null;
          if (arrow.node && this.maybeUnwrapTypeCastExpression(arrow.node).type === "ArrowFunctionExpression") {
            if (!arrow.error && !arrow.aborted) {
              if (arrow.node.async) {
                this.raise(FlowErrors.UnexpectedTypeParameterBeforeAsyncArrowFunction, typeParameters);
              }
              return arrow.node;
            }
            arrowExpression = arrow.node;
          }
          if ((_jsx2 = jsx2) != null && _jsx2.node) {
            this.state = jsx2.failState;
            return jsx2.node;
          }
          if (arrowExpression) {
            this.state = arrow.failState;
            return arrowExpression;
          }
          if ((_jsx3 = jsx2) != null && _jsx3.thrown)
            throw jsx2.error;
          if (arrow.thrown)
            throw arrow.error;
          throw this.raise(FlowErrors.UnexpectedTokenAfterTypeParameter, typeParameters);
        }
        return super.parseMaybeAssign(refExpressionErrors, afterLeftParse);
      }
      parseArrow(node) {
        if (this.match(14)) {
          const result = this.tryParse(() => {
            const oldNoAnonFunctionType = this.state.noAnonFunctionType;
            this.state.noAnonFunctionType = true;
            const typeNode = this.startNode();
            [typeNode.typeAnnotation, node.predicate] = this.flowParseTypeAndPredicateInitialiser();
            this.state.noAnonFunctionType = oldNoAnonFunctionType;
            if (this.canInsertSemicolon())
              this.unexpected();
            if (!this.match(19))
              this.unexpected();
            return typeNode;
          });
          if (result.thrown)
            return null;
          if (result.error)
            this.state = result.failState;
          node.returnType = result.node.typeAnnotation ? this.finishNode(result.node, "TypeAnnotation") : null;
        }
        return super.parseArrow(node);
      }
      shouldParseArrow(params) {
        return this.match(14) || super.shouldParseArrow(params);
      }
      setArrowFunctionParameters(node, params) {
        if (this.state.noArrowParamsConversionAt.includes(this.offsetToSourcePos(node.start))) {
          node.params = params;
        } else {
          super.setArrowFunctionParameters(node, params);
        }
      }
      checkParams(node, allowDuplicates, isArrowFunction, strictModeChanged = true) {
        if (isArrowFunction && this.state.noArrowParamsConversionAt.includes(this.offsetToSourcePos(node.start))) {
          return;
        }
        for (let i = 0; i < node.params.length; i++) {
          if (this.isThisParam(node.params[i]) && i > 0) {
            this.raise(FlowErrors.ThisParamMustBeFirst, node.params[i]);
          }
        }
        super.checkParams(node, allowDuplicates, isArrowFunction, strictModeChanged);
      }
      parseParenAndDistinguishExpression(canBeArrow) {
        return super.parseParenAndDistinguishExpression(canBeArrow && !this.state.noArrowAt.includes(this.sourceToOffsetPos(this.state.start)));
      }
      parseSubscripts(base, startLoc, noCalls) {
        if (base.type === "Identifier" && base.name === "async" && this.state.noArrowAt.includes(startLoc.index)) {
          this.next();
          const node = this.startNodeAt(startLoc);
          node.callee = base;
          node.arguments = super.parseCallExpressionArguments();
          base = this.finishNode(node, "CallExpression");
        } else if (base.type === "Identifier" && base.name === "async" && this.match(47)) {
          const state = this.state.clone();
          const arrow = this.tryParse((abort) => this.parseAsyncArrowWithTypeParameters(startLoc) || abort(), state);
          if (!arrow.error && !arrow.aborted)
            return arrow.node;
          const result = this.tryParse(() => super.parseSubscripts(base, startLoc, noCalls), state);
          if (result.node && !result.error)
            return result.node;
          if (arrow.node) {
            this.state = arrow.failState;
            return arrow.node;
          }
          if (result.node) {
            this.state = result.failState;
            return result.node;
          }
          throw arrow.error || result.error;
        }
        return super.parseSubscripts(base, startLoc, noCalls);
      }
      parseSubscript(base, startLoc, noCalls, subscriptState) {
        if (this.match(18) && this.isLookaheadToken_lt()) {
          subscriptState.optionalChainMember = true;
          if (noCalls) {
            subscriptState.stop = true;
            return base;
          }
          this.next();
          const node = this.startNodeAt(startLoc);
          node.callee = base;
          node.typeArguments = this.flowParseTypeParameterInstantiationInExpression();
          this.expect(10);
          node.arguments = this.parseCallExpressionArguments();
          node.optional = true;
          return this.finishCallExpression(node, true);
        } else if (!noCalls && this.shouldParseTypes() && (this.match(47) || this.match(51))) {
          const node = this.startNodeAt(startLoc);
          node.callee = base;
          const result = this.tryParse(() => {
            node.typeArguments = this.flowParseTypeParameterInstantiationCallOrNew();
            this.expect(10);
            node.arguments = super.parseCallExpressionArguments();
            if (subscriptState.optionalChainMember) {
              node.optional = false;
            }
            return this.finishCallExpression(node, subscriptState.optionalChainMember);
          });
          if (result.node) {
            if (result.error)
              this.state = result.failState;
            return result.node;
          }
        }
        return super.parseSubscript(base, startLoc, noCalls, subscriptState);
      }
      parseNewCallee(node) {
        super.parseNewCallee(node);
        let targs = null;
        if (this.shouldParseTypes() && this.match(47)) {
          targs = this.tryParse(() => this.flowParseTypeParameterInstantiationCallOrNew()).node;
        }
        node.typeArguments = targs;
      }
      parseAsyncArrowWithTypeParameters(startLoc) {
        const node = this.startNodeAt(startLoc);
        this.parseFunctionParams(node, false);
        if (!this.parseArrow(node))
          return;
        return super.parseArrowExpression(node, void 0, true);
      }
      readToken_mult_modulo(code2) {
        const next = this.input.charCodeAt(this.state.pos + 1);
        if (code2 === 42 && next === 47 && this.state.hasFlowComment) {
          this.state.hasFlowComment = false;
          this.state.pos += 2;
          this.nextToken();
          return;
        }
        super.readToken_mult_modulo(code2);
      }
      readToken_pipe_amp(code2) {
        const next = this.input.charCodeAt(this.state.pos + 1);
        if (code2 === 124 && next === 125) {
          this.finishOp(9, 2);
          return;
        }
        super.readToken_pipe_amp(code2);
      }
      parseTopLevel(file, program) {
        const fileNode = super.parseTopLevel(file, program);
        if (this.state.hasFlowComment) {
          this.raise(FlowErrors.UnterminatedFlowComment, this.state.curPosition());
        }
        return fileNode;
      }
      skipBlockComment() {
        if (this.hasPlugin("flowComments") && this.skipFlowComment()) {
          if (this.state.hasFlowComment) {
            throw this.raise(FlowErrors.NestedFlowComment, this.state.startLoc);
          }
          this.hasFlowCommentCompletion();
          const commentSkip = this.skipFlowComment();
          if (commentSkip) {
            this.state.pos += commentSkip;
            this.state.hasFlowComment = true;
          }
          return;
        }
        return super.skipBlockComment(this.state.hasFlowComment ? "*-/" : "*/");
      }
      skipFlowComment() {
        const {
          pos
        } = this.state;
        let shiftToFirstNonWhiteSpace = 2;
        while ([32, 9].includes(this.input.charCodeAt(pos + shiftToFirstNonWhiteSpace))) {
          shiftToFirstNonWhiteSpace++;
        }
        const ch2 = this.input.charCodeAt(shiftToFirstNonWhiteSpace + pos);
        const ch3 = this.input.charCodeAt(shiftToFirstNonWhiteSpace + pos + 1);
        if (ch2 === 58 && ch3 === 58) {
          return shiftToFirstNonWhiteSpace + 2;
        }
        if (this.input.slice(shiftToFirstNonWhiteSpace + pos, shiftToFirstNonWhiteSpace + pos + 12) === "flow-include") {
          return shiftToFirstNonWhiteSpace + 12;
        }
        if (ch2 === 58 && ch3 !== 58) {
          return shiftToFirstNonWhiteSpace;
        }
        return false;
      }
      hasFlowCommentCompletion() {
        const end = this.input.indexOf("*/", this.state.pos);
        if (end === -1) {
          throw this.raise(Errors.UnterminatedComment, this.state.curPosition());
        }
      }
      flowEnumErrorBooleanMemberNotInitialized(loc, {
        enumName,
        memberName
      }) {
        this.raise(FlowErrors.EnumBooleanMemberNotInitialized, loc, {
          memberName,
          enumName
        });
      }
      flowEnumErrorInvalidMemberInitializer(loc, enumContext) {
        return this.raise(!enumContext.explicitType ? FlowErrors.EnumInvalidMemberInitializerUnknownType : enumContext.explicitType === "symbol" ? FlowErrors.EnumInvalidMemberInitializerSymbolType : FlowErrors.EnumInvalidMemberInitializerPrimaryType, loc, enumContext);
      }
      flowEnumErrorNumberMemberNotInitialized(loc, details) {
        this.raise(FlowErrors.EnumNumberMemberNotInitialized, loc, details);
      }
      flowEnumErrorStringMemberInconsistentlyInitialized(node, details) {
        this.raise(FlowErrors.EnumStringMemberInconsistentlyInitialized, node, details);
      }
      flowEnumMemberInit() {
        const startLoc = this.state.startLoc;
        const endOfInit = () => this.match(12) || this.match(8);
        switch (this.state.type) {
          case 135: {
            const literal = this.parseNumericLiteral(this.state.value);
            if (endOfInit()) {
              return {
                type: "number",
                loc: literal.loc.start,
                value: literal
              };
            }
            return {
              type: "invalid",
              loc: startLoc
            };
          }
          case 134: {
            const literal = this.parseStringLiteral(this.state.value);
            if (endOfInit()) {
              return {
                type: "string",
                loc: literal.loc.start,
                value: literal
              };
            }
            return {
              type: "invalid",
              loc: startLoc
            };
          }
          case 85:
          case 86: {
            const literal = this.parseBooleanLiteral(this.match(85));
            if (endOfInit()) {
              return {
                type: "boolean",
                loc: literal.loc.start,
                value: literal
              };
            }
            return {
              type: "invalid",
              loc: startLoc
            };
          }
          default:
            return {
              type: "invalid",
              loc: startLoc
            };
        }
      }
      flowEnumMemberRaw() {
        const loc = this.state.startLoc;
        const id = this.parseIdentifier(true);
        const init = this.eat(29) ? this.flowEnumMemberInit() : {
          type: "none",
          loc
        };
        return {
          id,
          init
        };
      }
      flowEnumCheckExplicitTypeMismatch(loc, context, expectedType) {
        const {
          explicitType
        } = context;
        if (explicitType === null) {
          return;
        }
        if (explicitType !== expectedType) {
          this.flowEnumErrorInvalidMemberInitializer(loc, context);
        }
      }
      flowEnumMembers({
        enumName,
        explicitType
      }) {
        const seenNames = /* @__PURE__ */ new Set();
        const members = {
          booleanMembers: [],
          numberMembers: [],
          stringMembers: [],
          defaultedMembers: []
        };
        let hasUnknownMembers = false;
        while (!this.match(8)) {
          if (this.eat(21)) {
            hasUnknownMembers = true;
            break;
          }
          const memberNode = this.startNode();
          const {
            id,
            init
          } = this.flowEnumMemberRaw();
          const memberName = id.name;
          if (memberName === "") {
            continue;
          }
          if (/^[a-z]/.test(memberName)) {
            this.raise(FlowErrors.EnumInvalidMemberName, id, {
              memberName,
              suggestion: memberName[0].toUpperCase() + memberName.slice(1),
              enumName
            });
          }
          if (seenNames.has(memberName)) {
            this.raise(FlowErrors.EnumDuplicateMemberName, id, {
              memberName,
              enumName
            });
          }
          seenNames.add(memberName);
          const context = {
            enumName,
            explicitType,
            memberName
          };
          memberNode.id = id;
          switch (init.type) {
            case "boolean": {
              this.flowEnumCheckExplicitTypeMismatch(init.loc, context, "boolean");
              memberNode.init = init.value;
              members.booleanMembers.push(this.finishNode(memberNode, "EnumBooleanMember"));
              break;
            }
            case "number": {
              this.flowEnumCheckExplicitTypeMismatch(init.loc, context, "number");
              memberNode.init = init.value;
              members.numberMembers.push(this.finishNode(memberNode, "EnumNumberMember"));
              break;
            }
            case "string": {
              this.flowEnumCheckExplicitTypeMismatch(init.loc, context, "string");
              memberNode.init = init.value;
              members.stringMembers.push(this.finishNode(memberNode, "EnumStringMember"));
              break;
            }
            case "invalid": {
              throw this.flowEnumErrorInvalidMemberInitializer(init.loc, context);
            }
            case "none": {
              switch (explicitType) {
                case "boolean":
                  this.flowEnumErrorBooleanMemberNotInitialized(init.loc, context);
                  break;
                case "number":
                  this.flowEnumErrorNumberMemberNotInitialized(init.loc, context);
                  break;
                default:
                  members.defaultedMembers.push(this.finishNode(memberNode, "EnumDefaultedMember"));
              }
            }
          }
          if (!this.match(8)) {
            this.expect(12);
          }
        }
        return {
          members,
          hasUnknownMembers
        };
      }
      flowEnumStringMembers(initializedMembers, defaultedMembers, {
        enumName
      }) {
        if (initializedMembers.length === 0) {
          return defaultedMembers;
        } else if (defaultedMembers.length === 0) {
          return initializedMembers;
        } else if (defaultedMembers.length > initializedMembers.length) {
          for (const member of initializedMembers) {
            this.flowEnumErrorStringMemberInconsistentlyInitialized(member, {
              enumName
            });
          }
          return defaultedMembers;
        } else {
          for (const member of defaultedMembers) {
            this.flowEnumErrorStringMemberInconsistentlyInitialized(member, {
              enumName
            });
          }
          return initializedMembers;
        }
      }
      flowEnumParseExplicitType({
        enumName
      }) {
        if (!this.eatContextual(102))
          return null;
        if (!tokenIsIdentifier(this.state.type)) {
          throw this.raise(FlowErrors.EnumInvalidExplicitTypeUnknownSupplied, this.state.startLoc, {
            enumName
          });
        }
        const {
          value
        } = this.state;
        this.next();
        if (value !== "boolean" && value !== "number" && value !== "string" && value !== "symbol") {
          this.raise(FlowErrors.EnumInvalidExplicitType, this.state.startLoc, {
            enumName,
            invalidEnumType: value
          });
        }
        return value;
      }
      flowEnumBody(node, id) {
        const enumName = id.name;
        const nameLoc = id.loc.start;
        const explicitType = this.flowEnumParseExplicitType({
          enumName
        });
        this.expect(5);
        const {
          members,
          hasUnknownMembers
        } = this.flowEnumMembers({
          enumName,
          explicitType
        });
        node.hasUnknownMembers = hasUnknownMembers;
        switch (explicitType) {
          case "boolean":
            node.explicitType = true;
            node.members = members.booleanMembers;
            this.expect(8);
            return this.finishNode(node, "EnumBooleanBody");
          case "number":
            node.explicitType = true;
            node.members = members.numberMembers;
            this.expect(8);
            return this.finishNode(node, "EnumNumberBody");
          case "string":
            node.explicitType = true;
            node.members = this.flowEnumStringMembers(members.stringMembers, members.defaultedMembers, {
              enumName
            });
            this.expect(8);
            return this.finishNode(node, "EnumStringBody");
          case "symbol":
            node.members = members.defaultedMembers;
            this.expect(8);
            return this.finishNode(node, "EnumSymbolBody");
          default: {
            const empty = () => {
              node.members = [];
              this.expect(8);
              return this.finishNode(node, "EnumStringBody");
            };
            node.explicitType = false;
            const boolsLen = members.booleanMembers.length;
            const numsLen = members.numberMembers.length;
            const strsLen = members.stringMembers.length;
            const defaultedLen = members.defaultedMembers.length;
            if (!boolsLen && !numsLen && !strsLen && !defaultedLen) {
              return empty();
            } else if (!boolsLen && !numsLen) {
              node.members = this.flowEnumStringMembers(members.stringMembers, members.defaultedMembers, {
                enumName
              });
              this.expect(8);
              return this.finishNode(node, "EnumStringBody");
            } else if (!numsLen && !strsLen && boolsLen >= defaultedLen) {
              for (const member of members.defaultedMembers) {
                this.flowEnumErrorBooleanMemberNotInitialized(member.loc.start, {
                  enumName,
                  memberName: member.id.name
                });
              }
              node.members = members.booleanMembers;
              this.expect(8);
              return this.finishNode(node, "EnumBooleanBody");
            } else if (!boolsLen && !strsLen && numsLen >= defaultedLen) {
              for (const member of members.defaultedMembers) {
                this.flowEnumErrorNumberMemberNotInitialized(member.loc.start, {
                  enumName,
                  memberName: member.id.name
                });
              }
              node.members = members.numberMembers;
              this.expect(8);
              return this.finishNode(node, "EnumNumberBody");
            } else {
              this.raise(FlowErrors.EnumInconsistentMemberValues, nameLoc, {
                enumName
              });
              return empty();
            }
          }
        }
      }
      flowParseEnumDeclaration(node) {
        const id = this.parseIdentifier();
        node.id = id;
        node.body = this.flowEnumBody(this.startNode(), id);
        return this.finishNode(node, "EnumDeclaration");
      }
      jsxParseOpeningElementAfterName(node) {
        if (this.shouldParseTypes()) {
          if (this.match(47) || this.match(51)) {
            node.typeArguments = this.flowParseTypeParameterInstantiationInExpression();
          }
        }
        return super.jsxParseOpeningElementAfterName(node);
      }
      isLookaheadToken_lt() {
        const next = this.nextTokenStart();
        if (this.input.charCodeAt(next) === 60) {
          const afterNext = this.input.charCodeAt(next + 1);
          return afterNext !== 60 && afterNext !== 61;
        }
        return false;
      }
      reScan_lt_gt() {
        const {
          type
        } = this.state;
        if (type === 47) {
          this.state.pos -= 1;
          this.readToken_lt();
        } else if (type === 48) {
          this.state.pos -= 1;
          this.readToken_gt();
        }
      }
      reScan_lt() {
        const {
          type
        } = this.state;
        if (type === 51) {
          this.state.pos -= 2;
          this.finishOp(47, 1);
          return 47;
        }
        return type;
      }
      maybeUnwrapTypeCastExpression(node) {
        return node.type === "TypeCastExpression" ? node.expression : node;
      }
    };
    var entities = {
      __proto__: null,
      quot: '"',
      amp: "&",
      apos: "'",
      lt: "<",
      gt: ">",
      nbsp: "\xA0",
      iexcl: "\xA1",
      cent: "\xA2",
      pound: "\xA3",
      curren: "\xA4",
      yen: "\xA5",
      brvbar: "\xA6",
      sect: "\xA7",
      uml: "\xA8",
      copy: "\xA9",
      ordf: "\xAA",
      laquo: "\xAB",
      not: "\xAC",
      shy: "\xAD",
      reg: "\xAE",
      macr: "\xAF",
      deg: "\xB0",
      plusmn: "\xB1",
      sup2: "\xB2",
      sup3: "\xB3",
      acute: "\xB4",
      micro: "\xB5",
      para: "\xB6",
      middot: "\xB7",
      cedil: "\xB8",
      sup1: "\xB9",
      ordm: "\xBA",
      raquo: "\xBB",
      frac14: "\xBC",
      frac12: "\xBD",
      frac34: "\xBE",
      iquest: "\xBF",
      Agrave: "\xC0",
      Aacute: "\xC1",
      Acirc: "\xC2",
      Atilde: "\xC3",
      Auml: "\xC4",
      Aring: "\xC5",
      AElig: "\xC6",
      Ccedil: "\xC7",
      Egrave: "\xC8",
      Eacute: "\xC9",
      Ecirc: "\xCA",
      Euml: "\xCB",
      Igrave: "\xCC",
      Iacute: "\xCD",
      Icirc: "\xCE",
      Iuml: "\xCF",
      ETH: "\xD0",
      Ntilde: "\xD1",
      Ograve: "\xD2",
      Oacute: "\xD3",
      Ocirc: "\xD4",
      Otilde: "\xD5",
      Ouml: "\xD6",
      times: "\xD7",
      Oslash: "\xD8",
      Ugrave: "\xD9",
      Uacute: "\xDA",
      Ucirc: "\xDB",
      Uuml: "\xDC",
      Yacute: "\xDD",
      THORN: "\xDE",
      szlig: "\xDF",
      agrave: "\xE0",
      aacute: "\xE1",
      acirc: "\xE2",
      atilde: "\xE3",
      auml: "\xE4",
      aring: "\xE5",
      aelig: "\xE6",
      ccedil: "\xE7",
      egrave: "\xE8",
      eacute: "\xE9",
      ecirc: "\xEA",
      euml: "\xEB",
      igrave: "\xEC",
      iacute: "\xED",
      icirc: "\xEE",
      iuml: "\xEF",
      eth: "\xF0",
      ntilde: "\xF1",
      ograve: "\xF2",
      oacute: "\xF3",
      ocirc: "\xF4",
      otilde: "\xF5",
      ouml: "\xF6",
      divide: "\xF7",
      oslash: "\xF8",
      ugrave: "\xF9",
      uacute: "\xFA",
      ucirc: "\xFB",
      uuml: "\xFC",
      yacute: "\xFD",
      thorn: "\xFE",
      yuml: "\xFF",
      OElig: "\u0152",
      oelig: "\u0153",
      Scaron: "\u0160",
      scaron: "\u0161",
      Yuml: "\u0178",
      fnof: "\u0192",
      circ: "\u02C6",
      tilde: "\u02DC",
      Alpha: "\u0391",
      Beta: "\u0392",
      Gamma: "\u0393",
      Delta: "\u0394",
      Epsilon: "\u0395",
      Zeta: "\u0396",
      Eta: "\u0397",
      Theta: "\u0398",
      Iota: "\u0399",
      Kappa: "\u039A",
      Lambda: "\u039B",
      Mu: "\u039C",
      Nu: "\u039D",
      Xi: "\u039E",
      Omicron: "\u039F",
      Pi: "\u03A0",
      Rho: "\u03A1",
      Sigma: "\u03A3",
      Tau: "\u03A4",
      Upsilon: "\u03A5",
      Phi: "\u03A6",
      Chi: "\u03A7",
      Psi: "\u03A8",
      Omega: "\u03A9",
      alpha: "\u03B1",
      beta: "\u03B2",
      gamma: "\u03B3",
      delta: "\u03B4",
      epsilon: "\u03B5",
      zeta: "\u03B6",
      eta: "\u03B7",
      theta: "\u03B8",
      iota: "\u03B9",
      kappa: "\u03BA",
      lambda: "\u03BB",
      mu: "\u03BC",
      nu: "\u03BD",
      xi: "\u03BE",
      omicron: "\u03BF",
      pi: "\u03C0",
      rho: "\u03C1",
      sigmaf: "\u03C2",
      sigma: "\u03C3",
      tau: "\u03C4",
      upsilon: "\u03C5",
      phi: "\u03C6",
      chi: "\u03C7",
      psi: "\u03C8",
      omega: "\u03C9",
      thetasym: "\u03D1",
      upsih: "\u03D2",
      piv: "\u03D6",
      ensp: "\u2002",
      emsp: "\u2003",
      thinsp: "\u2009",
      zwnj: "\u200C",
      zwj: "\u200D",
      lrm: "\u200E",
      rlm: "\u200F",
      ndash: "\u2013",
      mdash: "\u2014",
      lsquo: "\u2018",
      rsquo: "\u2019",
      sbquo: "\u201A",
      ldquo: "\u201C",
      rdquo: "\u201D",
      bdquo: "\u201E",
      dagger: "\u2020",
      Dagger: "\u2021",
      bull: "\u2022",
      hellip: "\u2026",
      permil: "\u2030",
      prime: "\u2032",
      Prime: "\u2033",
      lsaquo: "\u2039",
      rsaquo: "\u203A",
      oline: "\u203E",
      frasl: "\u2044",
      euro: "\u20AC",
      image: "\u2111",
      weierp: "\u2118",
      real: "\u211C",
      trade: "\u2122",
      alefsym: "\u2135",
      larr: "\u2190",
      uarr: "\u2191",
      rarr: "\u2192",
      darr: "\u2193",
      harr: "\u2194",
      crarr: "\u21B5",
      lArr: "\u21D0",
      uArr: "\u21D1",
      rArr: "\u21D2",
      dArr: "\u21D3",
      hArr: "\u21D4",
      forall: "\u2200",
      part: "\u2202",
      exist: "\u2203",
      empty: "\u2205",
      nabla: "\u2207",
      isin: "\u2208",
      notin: "\u2209",
      ni: "\u220B",
      prod: "\u220F",
      sum: "\u2211",
      minus: "\u2212",
      lowast: "\u2217",
      radic: "\u221A",
      prop: "\u221D",
      infin: "\u221E",
      ang: "\u2220",
      and: "\u2227",
      or: "\u2228",
      cap: "\u2229",
      cup: "\u222A",
      int: "\u222B",
      there4: "\u2234",
      sim: "\u223C",
      cong: "\u2245",
      asymp: "\u2248",
      ne: "\u2260",
      equiv: "\u2261",
      le: "\u2264",
      ge: "\u2265",
      sub: "\u2282",
      sup: "\u2283",
      nsub: "\u2284",
      sube: "\u2286",
      supe: "\u2287",
      oplus: "\u2295",
      otimes: "\u2297",
      perp: "\u22A5",
      sdot: "\u22C5",
      lceil: "\u2308",
      rceil: "\u2309",
      lfloor: "\u230A",
      rfloor: "\u230B",
      lang: "\u2329",
      rang: "\u232A",
      loz: "\u25CA",
      spades: "\u2660",
      clubs: "\u2663",
      hearts: "\u2665",
      diams: "\u2666"
    };
    var lineBreak = /\r\n|[\r\n\u2028\u2029]/;
    var lineBreakG = new RegExp(lineBreak.source, "g");
    function isNewLine(code2) {
      switch (code2) {
        case 10:
        case 13:
        case 8232:
        case 8233:
          return true;
        default:
          return false;
      }
    }
    function hasNewLine(input, start, end) {
      for (let i = start; i < end; i++) {
        if (isNewLine(input.charCodeAt(i))) {
          return true;
        }
      }
      return false;
    }
    var skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;
    var skipWhiteSpaceInLine = /(?:[^\S\n\r\u2028\u2029]|\/\/.*|\/\*.*?\*\/)*/g;
    function isWhitespace(code2) {
      switch (code2) {
        case 9:
        case 11:
        case 12:
        case 32:
        case 160:
        case 5760:
        case 8192:
        case 8193:
        case 8194:
        case 8195:
        case 8196:
        case 8197:
        case 8198:
        case 8199:
        case 8200:
        case 8201:
        case 8202:
        case 8239:
        case 8287:
        case 12288:
        case 65279:
          return true;
        default:
          return false;
      }
    }
    var JsxErrors = ParseErrorEnum`jsx`({
      AttributeIsEmpty: "JSX attributes must only be assigned a non-empty expression.",
      MissingClosingTagElement: ({
        openingTagName
      }) => `Expected corresponding JSX closing tag for <${openingTagName}>.`,
      MissingClosingTagFragment: "Expected corresponding JSX closing tag for <>.",
      UnexpectedSequenceExpression: "Sequence expressions cannot be directly nested inside JSX. Did you mean to wrap it in parentheses (...)?",
      UnexpectedToken: ({
        unexpected,
        HTMLEntity
      }) => `Unexpected token \`${unexpected}\`. Did you mean \`${HTMLEntity}\` or \`{'${unexpected}'}\`?`,
      UnsupportedJsxValue: "JSX value should be either an expression or a quoted JSX text.",
      UnterminatedJsxContent: "Unterminated JSX contents.",
      UnwrappedAdjacentJSXElements: "Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?"
    });
    function isFragment(object) {
      return object ? object.type === "JSXOpeningFragment" || object.type === "JSXClosingFragment" : false;
    }
    function getQualifiedJSXName(object) {
      if (object.type === "JSXIdentifier") {
        return object.name;
      }
      if (object.type === "JSXNamespacedName") {
        return object.namespace.name + ":" + object.name.name;
      }
      if (object.type === "JSXMemberExpression") {
        return getQualifiedJSXName(object.object) + "." + getQualifiedJSXName(object.property);
      }
      throw new Error("Node had unexpected type: " + object.type);
    }
    var jsx = (superClass) => class JSXParserMixin extends superClass {
      jsxReadToken() {
        let out = "";
        let chunkStart = this.state.pos;
        for (; ; ) {
          if (this.state.pos >= this.length) {
            throw this.raise(JsxErrors.UnterminatedJsxContent, this.state.startLoc);
          }
          const ch = this.input.charCodeAt(this.state.pos);
          switch (ch) {
            case 60:
            case 123:
              if (this.state.pos === this.state.start) {
                if (ch === 60 && this.state.canStartJSXElement) {
                  ++this.state.pos;
                  this.finishToken(143);
                } else {
                  super.getTokenFromCode(ch);
                }
                return;
              }
              out += this.input.slice(chunkStart, this.state.pos);
              this.finishToken(142, out);
              return;
            case 38:
              out += this.input.slice(chunkStart, this.state.pos);
              out += this.jsxReadEntity();
              chunkStart = this.state.pos;
              break;
            case 62:
            case 125:
            default:
              if (isNewLine(ch)) {
                out += this.input.slice(chunkStart, this.state.pos);
                out += this.jsxReadNewLine(true);
                chunkStart = this.state.pos;
              } else {
                ++this.state.pos;
              }
          }
        }
      }
      jsxReadNewLine(normalizeCRLF) {
        const ch = this.input.charCodeAt(this.state.pos);
        let out;
        ++this.state.pos;
        if (ch === 13 && this.input.charCodeAt(this.state.pos) === 10) {
          ++this.state.pos;
          out = normalizeCRLF ? "\n" : "\r\n";
        } else {
          out = String.fromCharCode(ch);
        }
        ++this.state.curLine;
        this.state.lineStart = this.state.pos;
        return out;
      }
      jsxReadString(quote) {
        let out = "";
        let chunkStart = ++this.state.pos;
        for (; ; ) {
          if (this.state.pos >= this.length) {
            throw this.raise(Errors.UnterminatedString, this.state.startLoc);
          }
          const ch = this.input.charCodeAt(this.state.pos);
          if (ch === quote)
            break;
          if (ch === 38) {
            out += this.input.slice(chunkStart, this.state.pos);
            out += this.jsxReadEntity();
            chunkStart = this.state.pos;
          } else if (isNewLine(ch)) {
            out += this.input.slice(chunkStart, this.state.pos);
            out += this.jsxReadNewLine(false);
            chunkStart = this.state.pos;
          } else {
            ++this.state.pos;
          }
        }
        out += this.input.slice(chunkStart, this.state.pos++);
        this.finishToken(134, out);
      }
      jsxReadEntity() {
        const startPos = ++this.state.pos;
        if (this.codePointAtPos(this.state.pos) === 35) {
          ++this.state.pos;
          let radix = 10;
          if (this.codePointAtPos(this.state.pos) === 120) {
            radix = 16;
            ++this.state.pos;
          }
          const codePoint = this.readInt(radix, void 0, false, "bail");
          if (codePoint !== null && this.codePointAtPos(this.state.pos) === 59) {
            ++this.state.pos;
            return String.fromCodePoint(codePoint);
          }
        } else {
          let count = 0;
          let semi = false;
          while (count++ < 10 && this.state.pos < this.length && !(semi = this.codePointAtPos(this.state.pos) === 59)) {
            ++this.state.pos;
          }
          if (semi) {
            const desc = this.input.slice(startPos, this.state.pos);
            const entity = entities[desc];
            ++this.state.pos;
            if (entity) {
              return entity;
            }
          }
        }
        this.state.pos = startPos;
        return "&";
      }
      jsxReadWord() {
        let ch;
        const start = this.state.pos;
        do {
          ch = this.input.charCodeAt(++this.state.pos);
        } while (isIdentifierChar(ch) || ch === 45);
        this.finishToken(141, this.input.slice(start, this.state.pos));
      }
      jsxParseIdentifier() {
        const node = this.startNode();
        if (this.match(141)) {
          node.name = this.state.value;
        } else if (tokenIsKeyword(this.state.type)) {
          node.name = tokenLabelName(this.state.type);
        } else {
          this.unexpected();
        }
        this.next();
        return this.finishNode(node, "JSXIdentifier");
      }
      jsxParseNamespacedName() {
        const startLoc = this.state.startLoc;
        const name = this.jsxParseIdentifier();
        if (!this.eat(14))
          return name;
        const node = this.startNodeAt(startLoc);
        node.namespace = name;
        node.name = this.jsxParseIdentifier();
        return this.finishNode(node, "JSXNamespacedName");
      }
      jsxParseElementName() {
        const startLoc = this.state.startLoc;
        let node = this.jsxParseNamespacedName();
        if (node.type === "JSXNamespacedName") {
          return node;
        }
        while (this.eat(16)) {
          const newNode = this.startNodeAt(startLoc);
          newNode.object = node;
          newNode.property = this.jsxParseIdentifier();
          node = this.finishNode(newNode, "JSXMemberExpression");
        }
        return node;
      }
      jsxParseAttributeValue() {
        let node;
        switch (this.state.type) {
          case 5:
            node = this.startNode();
            this.setContext(types.brace);
            this.next();
            node = this.jsxParseExpressionContainer(node, types.j_oTag);
            if (node.expression.type === "JSXEmptyExpression") {
              this.raise(JsxErrors.AttributeIsEmpty, node);
            }
            return node;
          case 143:
          case 134:
            return this.parseExprAtom();
          default:
            throw this.raise(JsxErrors.UnsupportedJsxValue, this.state.startLoc);
        }
      }
      jsxParseEmptyExpression() {
        const node = this.startNodeAt(this.state.lastTokEndLoc);
        return this.finishNodeAt(node, "JSXEmptyExpression", this.state.startLoc);
      }
      jsxParseSpreadChild(node) {
        this.next();
        node.expression = this.parseExpression();
        this.setContext(types.j_expr);
        this.state.canStartJSXElement = true;
        this.expect(8);
        return this.finishNode(node, "JSXSpreadChild");
      }
      jsxParseExpressionContainer(node, previousContext) {
        if (this.match(8)) {
          node.expression = this.jsxParseEmptyExpression();
        } else {
          const expression = this.parseExpression();
          node.expression = expression;
        }
        this.setContext(previousContext);
        this.state.canStartJSXElement = true;
        this.expect(8);
        return this.finishNode(node, "JSXExpressionContainer");
      }
      jsxParseAttribute() {
        const node = this.startNode();
        if (this.match(5)) {
          this.setContext(types.brace);
          this.next();
          this.expect(21);
          node.argument = this.parseMaybeAssignAllowIn();
          this.setContext(types.j_oTag);
          this.state.canStartJSXElement = true;
          this.expect(8);
          return this.finishNode(node, "JSXSpreadAttribute");
        }
        node.name = this.jsxParseNamespacedName();
        node.value = this.eat(29) ? this.jsxParseAttributeValue() : null;
        return this.finishNode(node, "JSXAttribute");
      }
      jsxParseOpeningElementAt(startLoc) {
        const node = this.startNodeAt(startLoc);
        if (this.eat(144)) {
          return this.finishNode(node, "JSXOpeningFragment");
        }
        node.name = this.jsxParseElementName();
        return this.jsxParseOpeningElementAfterName(node);
      }
      jsxParseOpeningElementAfterName(node) {
        const attributes = [];
        while (!this.match(56) && !this.match(144)) {
          attributes.push(this.jsxParseAttribute());
        }
        node.attributes = attributes;
        node.selfClosing = this.eat(56);
        this.expect(144);
        return this.finishNode(node, "JSXOpeningElement");
      }
      jsxParseClosingElementAt(startLoc) {
        const node = this.startNodeAt(startLoc);
        if (this.eat(144)) {
          return this.finishNode(node, "JSXClosingFragment");
        }
        node.name = this.jsxParseElementName();
        this.expect(144);
        return this.finishNode(node, "JSXClosingElement");
      }
      jsxParseElementAt(startLoc) {
        const node = this.startNodeAt(startLoc);
        const children = [];
        const openingElement = this.jsxParseOpeningElementAt(startLoc);
        let closingElement = null;
        if (!openingElement.selfClosing) {
          contents:
            for (; ; ) {
              switch (this.state.type) {
                case 143:
                  startLoc = this.state.startLoc;
                  this.next();
                  if (this.eat(56)) {
                    closingElement = this.jsxParseClosingElementAt(startLoc);
                    break contents;
                  }
                  children.push(this.jsxParseElementAt(startLoc));
                  break;
                case 142:
                  children.push(this.parseLiteral(this.state.value, "JSXText"));
                  break;
                case 5: {
                  const node2 = this.startNode();
                  this.setContext(types.brace);
                  this.next();
                  if (this.match(21)) {
                    children.push(this.jsxParseSpreadChild(node2));
                  } else {
                    children.push(this.jsxParseExpressionContainer(node2, types.j_expr));
                  }
                  break;
                }
                default:
                  this.unexpected();
              }
            }
          if (isFragment(openingElement) && !isFragment(closingElement) && closingElement !== null) {
            this.raise(JsxErrors.MissingClosingTagFragment, closingElement);
          } else if (!isFragment(openingElement) && isFragment(closingElement)) {
            this.raise(JsxErrors.MissingClosingTagElement, closingElement, {
              openingTagName: getQualifiedJSXName(openingElement.name)
            });
          } else if (!isFragment(openingElement) && !isFragment(closingElement)) {
            if (getQualifiedJSXName(closingElement.name) !== getQualifiedJSXName(openingElement.name)) {
              this.raise(JsxErrors.MissingClosingTagElement, closingElement, {
                openingTagName: getQualifiedJSXName(openingElement.name)
              });
            }
          }
        }
        if (isFragment(openingElement)) {
          node.openingFragment = openingElement;
          node.closingFragment = closingElement;
        } else {
          node.openingElement = openingElement;
          node.closingElement = closingElement;
        }
        node.children = children;
        if (this.match(47)) {
          throw this.raise(JsxErrors.UnwrappedAdjacentJSXElements, this.state.startLoc);
        }
        return isFragment(openingElement) ? this.finishNode(node, "JSXFragment") : this.finishNode(node, "JSXElement");
      }
      jsxParseElement() {
        const startLoc = this.state.startLoc;
        this.next();
        return this.jsxParseElementAt(startLoc);
      }
      setContext(newContext) {
        const {
          context
        } = this.state;
        context[context.length - 1] = newContext;
      }
      parseExprAtom(refExpressionErrors) {
        if (this.match(143)) {
          return this.jsxParseElement();
        } else if (this.match(47) && this.input.charCodeAt(this.state.pos) !== 33) {
          this.replaceToken(143);
          return this.jsxParseElement();
        } else {
          return super.parseExprAtom(refExpressionErrors);
        }
      }
      skipSpace() {
        const curContext = this.curContext();
        if (!curContext.preserveSpace)
          super.skipSpace();
      }
      getTokenFromCode(code2) {
        const context = this.curContext();
        if (context === types.j_expr) {
          this.jsxReadToken();
          return;
        }
        if (context === types.j_oTag || context === types.j_cTag) {
          if (isIdentifierStart(code2)) {
            this.jsxReadWord();
            return;
          }
          if (code2 === 62) {
            ++this.state.pos;
            this.finishToken(144);
            return;
          }
          if ((code2 === 34 || code2 === 39) && context === types.j_oTag) {
            this.jsxReadString(code2);
            return;
          }
        }
        if (code2 === 60 && this.state.canStartJSXElement && this.input.charCodeAt(this.state.pos + 1) !== 33) {
          ++this.state.pos;
          this.finishToken(143);
          return;
        }
        super.getTokenFromCode(code2);
      }
      updateContext(prevType) {
        const {
          context,
          type
        } = this.state;
        if (type === 56 && prevType === 143) {
          context.splice(-2, 2, types.j_cTag);
          this.state.canStartJSXElement = false;
        } else if (type === 143) {
          context.push(types.j_oTag);
        } else if (type === 144) {
          const out = context[context.length - 1];
          if (out === types.j_oTag && prevType === 56 || out === types.j_cTag) {
            context.pop();
            this.state.canStartJSXElement = context[context.length - 1] === types.j_expr;
          } else {
            this.setContext(types.j_expr);
            this.state.canStartJSXElement = true;
          }
        } else {
          this.state.canStartJSXElement = tokenComesBeforeExpression(type);
        }
      }
    };
    var TypeScriptScope = class extends Scope {
      constructor(...args) {
        super(...args);
        this.tsNames = /* @__PURE__ */ new Map();
      }
    };
    var TypeScriptScopeHandler = class extends ScopeHandler {
      constructor(...args) {
        super(...args);
        this.importsStack = [];
      }
      createScope(flags) {
        this.importsStack.push(/* @__PURE__ */ new Set());
        return new TypeScriptScope(flags);
      }
      enter(flags) {
        if (flags === 1024) {
          this.importsStack.push(/* @__PURE__ */ new Set());
        }
        super.enter(flags);
      }
      exit() {
        const flags = super.exit();
        if (flags === 1024) {
          this.importsStack.pop();
        }
        return flags;
      }
      hasImport(name, allowShadow) {
        const len = this.importsStack.length;
        if (this.importsStack[len - 1].has(name)) {
          return true;
        }
        if (!allowShadow && len > 1) {
          for (let i = 0; i < len - 1; i++) {
            if (this.importsStack[i].has(name))
              return true;
          }
        }
        return false;
      }
      declareName(name, bindingType, loc) {
        if (bindingType & 4096) {
          if (this.hasImport(name, true)) {
            this.parser.raise(Errors.VarRedeclaration, loc, {
              identifierName: name
            });
          }
          this.importsStack[this.importsStack.length - 1].add(name);
          return;
        }
        const scope = this.currentScope();
        let type = scope.tsNames.get(name) || 0;
        if (bindingType & 1024) {
          this.maybeExportDefined(scope, name);
          scope.tsNames.set(name, type | 16);
          return;
        }
        super.declareName(name, bindingType, loc);
        if (bindingType & 2) {
          if (!(bindingType & 1)) {
            this.checkRedeclarationInScope(scope, name, bindingType, loc);
            this.maybeExportDefined(scope, name);
          }
          type = type | 1;
        }
        if (bindingType & 256) {
          type = type | 2;
        }
        if (bindingType & 512) {
          type = type | 4;
        }
        if (bindingType & 128) {
          type = type | 8;
        }
        if (type)
          scope.tsNames.set(name, type);
      }
      isRedeclaredInScope(scope, name, bindingType) {
        const type = scope.tsNames.get(name);
        if ((type & 2) > 0) {
          if (bindingType & 256) {
            const isConst = !!(bindingType & 512);
            const wasConst = (type & 4) > 0;
            return isConst !== wasConst;
          }
          return true;
        }
        if (bindingType & 128 && (type & 8) > 0) {
          if (scope.names.get(name) & 2) {
            return !!(bindingType & 1);
          } else {
            return false;
          }
        }
        if (bindingType & 2 && (type & 1) > 0) {
          return true;
        }
        return super.isRedeclaredInScope(scope, name, bindingType);
      }
      checkLocalExport(id) {
        const {
          name
        } = id;
        if (this.hasImport(name))
          return;
        const len = this.scopeStack.length;
        for (let i = len - 1; i >= 0; i--) {
          const scope = this.scopeStack[i];
          const type = scope.tsNames.get(name);
          if ((type & 1) > 0 || (type & 16) > 0) {
            return;
          }
        }
        super.checkLocalExport(id);
      }
    };
    var ProductionParameterHandler = class {
      constructor() {
        this.stacks = [];
      }
      enter(flags) {
        this.stacks.push(flags);
      }
      exit() {
        this.stacks.pop();
      }
      currentFlags() {
        return this.stacks[this.stacks.length - 1];
      }
      get hasAwait() {
        return (this.currentFlags() & 2) > 0;
      }
      get hasYield() {
        return (this.currentFlags() & 1) > 0;
      }
      get hasReturn() {
        return (this.currentFlags() & 4) > 0;
      }
      get hasIn() {
        return (this.currentFlags() & 8) > 0;
      }
    };
    function functionFlags(isAsync, isGenerator) {
      return (isAsync ? 2 : 0) | (isGenerator ? 1 : 0);
    }
    var BaseParser = class {
      constructor() {
        this.sawUnambiguousESM = false;
        this.ambiguousScriptDifferentAst = false;
      }
      sourceToOffsetPos(sourcePos) {
        return sourcePos + this.startIndex;
      }
      offsetToSourcePos(offsetPos) {
        return offsetPos - this.startIndex;
      }
      hasPlugin(pluginConfig) {
        if (typeof pluginConfig === "string") {
          return this.plugins.has(pluginConfig);
        } else {
          const [pluginName, pluginOptions] = pluginConfig;
          if (!this.hasPlugin(pluginName)) {
            return false;
          }
          const actualOptions = this.plugins.get(pluginName);
          for (const key of Object.keys(pluginOptions)) {
            if ((actualOptions == null ? void 0 : actualOptions[key]) !== pluginOptions[key]) {
              return false;
            }
          }
          return true;
        }
      }
      getPluginOption(plugin, name) {
        var _this$plugins$get;
        return (_this$plugins$get = this.plugins.get(plugin)) == null ? void 0 : _this$plugins$get[name];
      }
    };
    function setTrailingComments(node, comments) {
      if (node.trailingComments === void 0) {
        node.trailingComments = comments;
      } else {
        node.trailingComments.unshift(...comments);
      }
    }
    function setLeadingComments(node, comments) {
      if (node.leadingComments === void 0) {
        node.leadingComments = comments;
      } else {
        node.leadingComments.unshift(...comments);
      }
    }
    function setInnerComments(node, comments) {
      if (node.innerComments === void 0) {
        node.innerComments = comments;
      } else {
        node.innerComments.unshift(...comments);
      }
    }
    function adjustInnerComments(node, elements, commentWS) {
      let lastElement = null;
      let i = elements.length;
      while (lastElement === null && i > 0) {
        lastElement = elements[--i];
      }
      if (lastElement === null || lastElement.start > commentWS.start) {
        setInnerComments(node, commentWS.comments);
      } else {
        setTrailingComments(lastElement, commentWS.comments);
      }
    }
    var CommentsParser = class extends BaseParser {
      addComment(comment) {
        if (this.filename)
          comment.loc.filename = this.filename;
        const {
          commentsLen
        } = this.state;
        if (this.comments.length !== commentsLen) {
          this.comments.length = commentsLen;
        }
        this.comments.push(comment);
        this.state.commentsLen++;
      }
      processComment(node) {
        const {
          commentStack
        } = this.state;
        const commentStackLength = commentStack.length;
        if (commentStackLength === 0)
          return;
        let i = commentStackLength - 1;
        const lastCommentWS = commentStack[i];
        if (lastCommentWS.start === node.end) {
          lastCommentWS.leadingNode = node;
          i--;
        }
        const {
          start: nodeStart
        } = node;
        for (; i >= 0; i--) {
          const commentWS = commentStack[i];
          const commentEnd = commentWS.end;
          if (commentEnd > nodeStart) {
            commentWS.containingNode = node;
            this.finalizeComment(commentWS);
            commentStack.splice(i, 1);
          } else {
            if (commentEnd === nodeStart) {
              commentWS.trailingNode = node;
            }
            break;
          }
        }
      }
      finalizeComment(commentWS) {
        var _node$options;
        const {
          comments
        } = commentWS;
        if (commentWS.leadingNode !== null || commentWS.trailingNode !== null) {
          if (commentWS.leadingNode !== null) {
            setTrailingComments(commentWS.leadingNode, comments);
          }
          if (commentWS.trailingNode !== null) {
            setLeadingComments(commentWS.trailingNode, comments);
          }
        } else {
          const node = commentWS.containingNode;
          const commentStart = commentWS.start;
          if (this.input.charCodeAt(this.offsetToSourcePos(commentStart) - 1) === 44) {
            switch (node.type) {
              case "ObjectExpression":
              case "ObjectPattern":
                adjustInnerComments(node, node.properties, commentWS);
                break;
              case "CallExpression":
              case "OptionalCallExpression":
                adjustInnerComments(node, node.arguments, commentWS);
                break;
              case "ImportExpression":
                adjustInnerComments(node, [node.source, (_node$options = node.options) != null ? _node$options : null], commentWS);
                break;
              case "FunctionDeclaration":
              case "FunctionExpression":
              case "ArrowFunctionExpression":
              case "ObjectMethod":
              case "ClassMethod":
              case "ClassPrivateMethod":
                adjustInnerComments(node, node.params, commentWS);
                break;
              case "ArrayExpression":
              case "ArrayPattern":
                adjustInnerComments(node, node.elements, commentWS);
                break;
              case "ExportNamedDeclaration":
              case "ImportDeclaration":
                adjustInnerComments(node, node.specifiers, commentWS);
                break;
              case "TSEnumDeclaration":
                adjustInnerComments(node, node.members, commentWS);
                break;
              case "TSEnumBody":
                adjustInnerComments(node, node.members, commentWS);
                break;
              default: {
                if (node.type === "RecordExpression") {
                  adjustInnerComments(node, node.properties, commentWS);
                  break;
                }
                if (node.type === "TupleExpression") {
                  adjustInnerComments(node, node.elements, commentWS);
                  break;
                }
                setInnerComments(node, comments);
              }
            }
          } else {
            setInnerComments(node, comments);
          }
        }
      }
      finalizeRemainingComments() {
        const {
          commentStack
        } = this.state;
        for (let i = commentStack.length - 1; i >= 0; i--) {
          this.finalizeComment(commentStack[i]);
        }
        this.state.commentStack = [];
      }
      resetPreviousNodeTrailingComments(node) {
        const {
          commentStack
        } = this.state;
        const {
          length
        } = commentStack;
        if (length === 0)
          return;
        const commentWS = commentStack[length - 1];
        if (commentWS.leadingNode === node) {
          commentWS.leadingNode = null;
        }
      }
      takeSurroundingComments(node, start, end) {
        const {
          commentStack
        } = this.state;
        const commentStackLength = commentStack.length;
        if (commentStackLength === 0)
          return;
        let i = commentStackLength - 1;
        for (; i >= 0; i--) {
          const commentWS = commentStack[i];
          const commentEnd = commentWS.end;
          const commentStart = commentWS.start;
          if (commentStart === end) {
            commentWS.leadingNode = node;
          } else if (commentEnd === start) {
            commentWS.trailingNode = node;
          } else if (commentEnd < start) {
            break;
          }
        }
      }
    };
    var State = class _State {
      constructor() {
        this.flags = 1024;
        this.startIndex = void 0;
        this.curLine = void 0;
        this.lineStart = void 0;
        this.startLoc = void 0;
        this.endLoc = void 0;
        this.errors = [];
        this.potentialArrowAt = -1;
        this.noArrowAt = [];
        this.noArrowParamsConversionAt = [];
        this.topicContext = {
          maxNumOfResolvableTopics: 0,
          maxTopicIndex: null
        };
        this.labels = [];
        this.commentsLen = 0;
        this.commentStack = [];
        this.pos = 0;
        this.type = 140;
        this.value = null;
        this.start = 0;
        this.end = 0;
        this.lastTokEndLoc = null;
        this.lastTokStartLoc = null;
        this.context = [types.brace];
        this.firstInvalidTemplateEscapePos = null;
        this.strictErrors = /* @__PURE__ */ new Map();
        this.tokensLength = 0;
      }
      get strict() {
        return (this.flags & 1) > 0;
      }
      set strict(v) {
        if (v)
          this.flags |= 1;
        else
          this.flags &= -2;
      }
      init({
        strictMode,
        sourceType,
        startIndex,
        startLine,
        startColumn
      }) {
        this.strict = strictMode === false ? false : strictMode === true ? true : sourceType === "module";
        this.startIndex = startIndex;
        this.curLine = startLine;
        this.lineStart = -startColumn;
        this.startLoc = this.endLoc = new Position(startLine, startColumn, startIndex);
      }
      get maybeInArrowParameters() {
        return (this.flags & 2) > 0;
      }
      set maybeInArrowParameters(v) {
        if (v)
          this.flags |= 2;
        else
          this.flags &= -3;
      }
      get inType() {
        return (this.flags & 4) > 0;
      }
      set inType(v) {
        if (v)
          this.flags |= 4;
        else
          this.flags &= -5;
      }
      get noAnonFunctionType() {
        return (this.flags & 8) > 0;
      }
      set noAnonFunctionType(v) {
        if (v)
          this.flags |= 8;
        else
          this.flags &= -9;
      }
      get hasFlowComment() {
        return (this.flags & 16) > 0;
      }
      set hasFlowComment(v) {
        if (v)
          this.flags |= 16;
        else
          this.flags &= -17;
      }
      get isAmbientContext() {
        return (this.flags & 32) > 0;
      }
      set isAmbientContext(v) {
        if (v)
          this.flags |= 32;
        else
          this.flags &= -33;
      }
      get inAbstractClass() {
        return (this.flags & 64) > 0;
      }
      set inAbstractClass(v) {
        if (v)
          this.flags |= 64;
        else
          this.flags &= -65;
      }
      get inDisallowConditionalTypesContext() {
        return (this.flags & 128) > 0;
      }
      set inDisallowConditionalTypesContext(v) {
        if (v)
          this.flags |= 128;
        else
          this.flags &= -129;
      }
      get soloAwait() {
        return (this.flags & 256) > 0;
      }
      set soloAwait(v) {
        if (v)
          this.flags |= 256;
        else
          this.flags &= -257;
      }
      get inFSharpPipelineDirectBody() {
        return (this.flags & 512) > 0;
      }
      set inFSharpPipelineDirectBody(v) {
        if (v)
          this.flags |= 512;
        else
          this.flags &= -513;
      }
      get canStartJSXElement() {
        return (this.flags & 1024) > 0;
      }
      set canStartJSXElement(v) {
        if (v)
          this.flags |= 1024;
        else
          this.flags &= -1025;
      }
      get containsEsc() {
        return (this.flags & 2048) > 0;
      }
      set containsEsc(v) {
        if (v)
          this.flags |= 2048;
        else
          this.flags &= -2049;
      }
      get hasTopLevelAwait() {
        return (this.flags & 4096) > 0;
      }
      set hasTopLevelAwait(v) {
        if (v)
          this.flags |= 4096;
        else
          this.flags &= -4097;
      }
      curPosition() {
        return new Position(this.curLine, this.pos - this.lineStart, this.pos + this.startIndex);
      }
      clone() {
        const state = new _State();
        state.flags = this.flags;
        state.startIndex = this.startIndex;
        state.curLine = this.curLine;
        state.lineStart = this.lineStart;
        state.startLoc = this.startLoc;
        state.endLoc = this.endLoc;
        state.errors = this.errors.slice();
        state.potentialArrowAt = this.potentialArrowAt;
        state.noArrowAt = this.noArrowAt.slice();
        state.noArrowParamsConversionAt = this.noArrowParamsConversionAt.slice();
        state.topicContext = this.topicContext;
        state.labels = this.labels.slice();
        state.commentsLen = this.commentsLen;
        state.commentStack = this.commentStack.slice();
        state.pos = this.pos;
        state.type = this.type;
        state.value = this.value;
        state.start = this.start;
        state.end = this.end;
        state.lastTokEndLoc = this.lastTokEndLoc;
        state.lastTokStartLoc = this.lastTokStartLoc;
        state.context = this.context.slice();
        state.firstInvalidTemplateEscapePos = this.firstInvalidTemplateEscapePos;
        state.strictErrors = this.strictErrors;
        state.tokensLength = this.tokensLength;
        return state;
      }
    };
    var _isDigit = function isDigit(code2) {
      return code2 >= 48 && code2 <= 57;
    };
    var forbiddenNumericSeparatorSiblings = {
      decBinOct: /* @__PURE__ */ new Set([46, 66, 69, 79, 95, 98, 101, 111]),
      hex: /* @__PURE__ */ new Set([46, 88, 95, 120])
    };
    var isAllowedNumericSeparatorSibling = {
      bin: (ch) => ch === 48 || ch === 49,
      oct: (ch) => ch >= 48 && ch <= 55,
      dec: (ch) => ch >= 48 && ch <= 57,
      hex: (ch) => ch >= 48 && ch <= 57 || ch >= 65 && ch <= 70 || ch >= 97 && ch <= 102
    };
    function readStringContents(type, input, pos, lineStart, curLine, errors) {
      const initialPos = pos;
      const initialLineStart = lineStart;
      const initialCurLine = curLine;
      let out = "";
      let firstInvalidLoc = null;
      let chunkStart = pos;
      const {
        length
      } = input;
      for (; ; ) {
        if (pos >= length) {
          errors.unterminated(initialPos, initialLineStart, initialCurLine);
          out += input.slice(chunkStart, pos);
          break;
        }
        const ch = input.charCodeAt(pos);
        if (isStringEnd(type, ch, input, pos)) {
          out += input.slice(chunkStart, pos);
          break;
        }
        if (ch === 92) {
          out += input.slice(chunkStart, pos);
          const res = readEscapedChar(input, pos, lineStart, curLine, type === "template", errors);
          if (res.ch === null && !firstInvalidLoc) {
            firstInvalidLoc = {
              pos,
              lineStart,
              curLine
            };
          } else {
            out += res.ch;
          }
          ({
            pos,
            lineStart,
            curLine
          } = res);
          chunkStart = pos;
        } else if (ch === 8232 || ch === 8233) {
          ++pos;
          ++curLine;
          lineStart = pos;
        } else if (ch === 10 || ch === 13) {
          if (type === "template") {
            out += input.slice(chunkStart, pos) + "\n";
            ++pos;
            if (ch === 13 && input.charCodeAt(pos) === 10) {
              ++pos;
            }
            ++curLine;
            chunkStart = lineStart = pos;
          } else {
            errors.unterminated(initialPos, initialLineStart, initialCurLine);
          }
        } else {
          ++pos;
        }
      }
      return {
        pos,
        str: out,
        firstInvalidLoc,
        lineStart,
        curLine,
        containsInvalid: !!firstInvalidLoc
      };
    }
    function isStringEnd(type, ch, input, pos) {
      if (type === "template") {
        return ch === 96 || ch === 36 && input.charCodeAt(pos + 1) === 123;
      }
      return ch === (type === "double" ? 34 : 39);
    }
    function readEscapedChar(input, pos, lineStart, curLine, inTemplate, errors) {
      const throwOnInvalid = !inTemplate;
      pos++;
      const res = (ch2) => ({
        pos,
        ch: ch2,
        lineStart,
        curLine
      });
      const ch = input.charCodeAt(pos++);
      switch (ch) {
        case 110:
          return res("\n");
        case 114:
          return res("\r");
        case 120: {
          let code2;
          ({
            code: code2,
            pos
          } = readHexChar(input, pos, lineStart, curLine, 2, false, throwOnInvalid, errors));
          return res(code2 === null ? null : String.fromCharCode(code2));
        }
        case 117: {
          let code2;
          ({
            code: code2,
            pos
          } = readCodePoint(input, pos, lineStart, curLine, throwOnInvalid, errors));
          return res(code2 === null ? null : String.fromCodePoint(code2));
        }
        case 116:
          return res("	");
        case 98:
          return res("\b");
        case 118:
          return res("\v");
        case 102:
          return res("\f");
        case 13:
          if (input.charCodeAt(pos) === 10) {
            ++pos;
          }
        case 10:
          lineStart = pos;
          ++curLine;
        case 8232:
        case 8233:
          return res("");
        case 56:
        case 57:
          if (inTemplate) {
            return res(null);
          } else {
            errors.strictNumericEscape(pos - 1, lineStart, curLine);
          }
        default:
          if (ch >= 48 && ch <= 55) {
            const startPos = pos - 1;
            const match = /^[0-7]+/.exec(input.slice(startPos, pos + 2));
            let octalStr = match[0];
            let octal = parseInt(octalStr, 8);
            if (octal > 255) {
              octalStr = octalStr.slice(0, -1);
              octal = parseInt(octalStr, 8);
            }
            pos += octalStr.length - 1;
            const next = input.charCodeAt(pos);
            if (octalStr !== "0" || next === 56 || next === 57) {
              if (inTemplate) {
                return res(null);
              } else {
                errors.strictNumericEscape(startPos, lineStart, curLine);
              }
            }
            return res(String.fromCharCode(octal));
          }
          return res(String.fromCharCode(ch));
      }
    }
    function readHexChar(input, pos, lineStart, curLine, len, forceLen, throwOnInvalid, errors) {
      const initialPos = pos;
      let n;
      ({
        n,
        pos
      } = readInt(input, pos, lineStart, curLine, 16, len, forceLen, false, errors, !throwOnInvalid));
      if (n === null) {
        if (throwOnInvalid) {
          errors.invalidEscapeSequence(initialPos, lineStart, curLine);
        } else {
          pos = initialPos - 1;
        }
      }
      return {
        code: n,
        pos
      };
    }
    function readInt(input, pos, lineStart, curLine, radix, len, forceLen, allowNumSeparator, errors, bailOnError) {
      const start = pos;
      const forbiddenSiblings = radix === 16 ? forbiddenNumericSeparatorSiblings.hex : forbiddenNumericSeparatorSiblings.decBinOct;
      const isAllowedSibling = radix === 16 ? isAllowedNumericSeparatorSibling.hex : radix === 10 ? isAllowedNumericSeparatorSibling.dec : radix === 8 ? isAllowedNumericSeparatorSibling.oct : isAllowedNumericSeparatorSibling.bin;
      let invalid = false;
      let total = 0;
      for (let i = 0, e = len == null ? Infinity : len; i < e; ++i) {
        const code2 = input.charCodeAt(pos);
        let val;
        if (code2 === 95 && allowNumSeparator !== "bail") {
          const prev = input.charCodeAt(pos - 1);
          const next = input.charCodeAt(pos + 1);
          if (!allowNumSeparator) {
            if (bailOnError)
              return {
                n: null,
                pos
              };
            errors.numericSeparatorInEscapeSequence(pos, lineStart, curLine);
          } else if (Number.isNaN(next) || !isAllowedSibling(next) || forbiddenSiblings.has(prev) || forbiddenSiblings.has(next)) {
            if (bailOnError)
              return {
                n: null,
                pos
              };
            errors.unexpectedNumericSeparator(pos, lineStart, curLine);
          }
          ++pos;
          continue;
        }
        if (code2 >= 97) {
          val = code2 - 97 + 10;
        } else if (code2 >= 65) {
          val = code2 - 65 + 10;
        } else if (_isDigit(code2)) {
          val = code2 - 48;
        } else {
          val = Infinity;
        }
        if (val >= radix) {
          if (val <= 9 && bailOnError) {
            return {
              n: null,
              pos
            };
          } else if (val <= 9 && errors.invalidDigit(pos, lineStart, curLine, radix)) {
            val = 0;
          } else if (forceLen) {
            val = 0;
            invalid = true;
          } else {
            break;
          }
        }
        ++pos;
        total = total * radix + val;
      }
      if (pos === start || len != null && pos - start !== len || invalid) {
        return {
          n: null,
          pos
        };
      }
      return {
        n: total,
        pos
      };
    }
    function readCodePoint(input, pos, lineStart, curLine, throwOnInvalid, errors) {
      const ch = input.charCodeAt(pos);
      let code2;
      if (ch === 123) {
        ++pos;
        ({
          code: code2,
          pos
        } = readHexChar(input, pos, lineStart, curLine, input.indexOf("}", pos) - pos, true, throwOnInvalid, errors));
        ++pos;
        if (code2 !== null && code2 > 1114111) {
          if (throwOnInvalid) {
            errors.invalidCodePoint(pos, lineStart, curLine);
          } else {
            return {
              code: null,
              pos
            };
          }
        }
      } else {
        ({
          code: code2,
          pos
        } = readHexChar(input, pos, lineStart, curLine, 4, false, throwOnInvalid, errors));
      }
      return {
        code: code2,
        pos
      };
    }
    function buildPosition(pos, lineStart, curLine) {
      return new Position(curLine, pos - lineStart, pos);
    }
    var VALID_REGEX_FLAGS = /* @__PURE__ */ new Set([103, 109, 115, 105, 121, 117, 100, 118]);
    var Token = class {
      constructor(state) {
        const startIndex = state.startIndex || 0;
        this.type = state.type;
        this.value = state.value;
        this.start = startIndex + state.start;
        this.end = startIndex + state.end;
        this.loc = new SourceLocation(state.startLoc, state.endLoc);
      }
    };
    var Tokenizer = class extends CommentsParser {
      constructor(options, input) {
        super();
        this.isLookahead = void 0;
        this.tokens = [];
        this.errorHandlers_readInt = {
          invalidDigit: (pos, lineStart, curLine, radix) => {
            if (!(this.optionFlags & 2048))
              return false;
            this.raise(Errors.InvalidDigit, buildPosition(pos, lineStart, curLine), {
              radix
            });
            return true;
          },
          numericSeparatorInEscapeSequence: this.errorBuilder(Errors.NumericSeparatorInEscapeSequence),
          unexpectedNumericSeparator: this.errorBuilder(Errors.UnexpectedNumericSeparator)
        };
        this.errorHandlers_readCodePoint = Object.assign({}, this.errorHandlers_readInt, {
          invalidEscapeSequence: this.errorBuilder(Errors.InvalidEscapeSequence),
          invalidCodePoint: this.errorBuilder(Errors.InvalidCodePoint)
        });
        this.errorHandlers_readStringContents_string = Object.assign({}, this.errorHandlers_readCodePoint, {
          strictNumericEscape: (pos, lineStart, curLine) => {
            this.recordStrictModeErrors(Errors.StrictNumericEscape, buildPosition(pos, lineStart, curLine));
          },
          unterminated: (pos, lineStart, curLine) => {
            throw this.raise(Errors.UnterminatedString, buildPosition(pos - 1, lineStart, curLine));
          }
        });
        this.errorHandlers_readStringContents_template = Object.assign({}, this.errorHandlers_readCodePoint, {
          strictNumericEscape: this.errorBuilder(Errors.StrictNumericEscape),
          unterminated: (pos, lineStart, curLine) => {
            throw this.raise(Errors.UnterminatedTemplate, buildPosition(pos, lineStart, curLine));
          }
        });
        this.state = new State();
        this.state.init(options);
        this.input = input;
        this.length = input.length;
        this.comments = [];
        this.isLookahead = false;
      }
      pushToken(token) {
        this.tokens.length = this.state.tokensLength;
        this.tokens.push(token);
        ++this.state.tokensLength;
      }
      next() {
        this.checkKeywordEscapes();
        if (this.optionFlags & 256) {
          this.pushToken(new Token(this.state));
        }
        this.state.lastTokEndLoc = this.state.endLoc;
        this.state.lastTokStartLoc = this.state.startLoc;
        this.nextToken();
      }
      eat(type) {
        if (this.match(type)) {
          this.next();
          return true;
        } else {
          return false;
        }
      }
      match(type) {
        return this.state.type === type;
      }
      createLookaheadState(state) {
        return {
          pos: state.pos,
          value: null,
          type: state.type,
          start: state.start,
          end: state.end,
          context: [this.curContext()],
          inType: state.inType,
          startLoc: state.startLoc,
          lastTokEndLoc: state.lastTokEndLoc,
          curLine: state.curLine,
          lineStart: state.lineStart,
          curPosition: state.curPosition
        };
      }
      lookahead() {
        const old = this.state;
        this.state = this.createLookaheadState(old);
        this.isLookahead = true;
        this.nextToken();
        this.isLookahead = false;
        const curr = this.state;
        this.state = old;
        return curr;
      }
      nextTokenStart() {
        return this.nextTokenStartSince(this.state.pos);
      }
      nextTokenStartSince(pos) {
        skipWhiteSpace.lastIndex = pos;
        return skipWhiteSpace.test(this.input) ? skipWhiteSpace.lastIndex : pos;
      }
      lookaheadCharCode() {
        return this.lookaheadCharCodeSince(this.state.pos);
      }
      lookaheadCharCodeSince(pos) {
        return this.input.charCodeAt(this.nextTokenStartSince(pos));
      }
      nextTokenInLineStart() {
        return this.nextTokenInLineStartSince(this.state.pos);
      }
      nextTokenInLineStartSince(pos) {
        skipWhiteSpaceInLine.lastIndex = pos;
        return skipWhiteSpaceInLine.test(this.input) ? skipWhiteSpaceInLine.lastIndex : pos;
      }
      lookaheadInLineCharCode() {
        return this.input.charCodeAt(this.nextTokenInLineStart());
      }
      codePointAtPos(pos) {
        let cp = this.input.charCodeAt(pos);
        if ((cp & 64512) === 55296 && ++pos < this.input.length) {
          const trail = this.input.charCodeAt(pos);
          if ((trail & 64512) === 56320) {
            cp = 65536 + ((cp & 1023) << 10) + (trail & 1023);
          }
        }
        return cp;
      }
      setStrict(strict) {
        this.state.strict = strict;
        if (strict) {
          this.state.strictErrors.forEach(([toParseError, at]) => this.raise(toParseError, at));
          this.state.strictErrors.clear();
        }
      }
      curContext() {
        return this.state.context[this.state.context.length - 1];
      }
      nextToken() {
        this.skipSpace();
        this.state.start = this.state.pos;
        if (!this.isLookahead)
          this.state.startLoc = this.state.curPosition();
        if (this.state.pos >= this.length) {
          this.finishToken(140);
          return;
        }
        this.getTokenFromCode(this.codePointAtPos(this.state.pos));
      }
      skipBlockComment(commentEnd) {
        let startLoc;
        if (!this.isLookahead)
          startLoc = this.state.curPosition();
        const start = this.state.pos;
        const end = this.input.indexOf(commentEnd, start + 2);
        if (end === -1) {
          throw this.raise(Errors.UnterminatedComment, this.state.curPosition());
        }
        this.state.pos = end + commentEnd.length;
        lineBreakG.lastIndex = start + 2;
        while (lineBreakG.test(this.input) && lineBreakG.lastIndex <= end) {
          ++this.state.curLine;
          this.state.lineStart = lineBreakG.lastIndex;
        }
        if (this.isLookahead)
          return;
        const comment = {
          type: "CommentBlock",
          value: this.input.slice(start + 2, end),
          start: this.sourceToOffsetPos(start),
          end: this.sourceToOffsetPos(end + commentEnd.length),
          loc: new SourceLocation(startLoc, this.state.curPosition())
        };
        if (this.optionFlags & 256)
          this.pushToken(comment);
        return comment;
      }
      skipLineComment(startSkip) {
        const start = this.state.pos;
        let startLoc;
        if (!this.isLookahead)
          startLoc = this.state.curPosition();
        let ch = this.input.charCodeAt(this.state.pos += startSkip);
        if (this.state.pos < this.length) {
          while (!isNewLine(ch) && ++this.state.pos < this.length) {
            ch = this.input.charCodeAt(this.state.pos);
          }
        }
        if (this.isLookahead)
          return;
        const end = this.state.pos;
        const value = this.input.slice(start + startSkip, end);
        const comment = {
          type: "CommentLine",
          value,
          start: this.sourceToOffsetPos(start),
          end: this.sourceToOffsetPos(end),
          loc: new SourceLocation(startLoc, this.state.curPosition())
        };
        if (this.optionFlags & 256)
          this.pushToken(comment);
        return comment;
      }
      skipSpace() {
        const spaceStart = this.state.pos;
        const comments = this.optionFlags & 4096 ? [] : null;
        loop:
          while (this.state.pos < this.length) {
            const ch = this.input.charCodeAt(this.state.pos);
            switch (ch) {
              case 32:
              case 160:
              case 9:
                ++this.state.pos;
                break;
              case 13:
                if (this.input.charCodeAt(this.state.pos + 1) === 10) {
                  ++this.state.pos;
                }
              case 10:
              case 8232:
              case 8233:
                ++this.state.pos;
                ++this.state.curLine;
                this.state.lineStart = this.state.pos;
                break;
              case 47:
                switch (this.input.charCodeAt(this.state.pos + 1)) {
                  case 42: {
                    const comment = this.skipBlockComment("*/");
                    if (comment !== void 0) {
                      this.addComment(comment);
                      comments == null || comments.push(comment);
                    }
                    break;
                  }
                  case 47: {
                    const comment = this.skipLineComment(2);
                    if (comment !== void 0) {
                      this.addComment(comment);
                      comments == null || comments.push(comment);
                    }
                    break;
                  }
                  default:
                    break loop;
                }
                break;
              default:
                if (isWhitespace(ch)) {
                  ++this.state.pos;
                } else if (ch === 45 && !this.inModule && this.optionFlags & 8192) {
                  const pos = this.state.pos;
                  if (this.input.charCodeAt(pos + 1) === 45 && this.input.charCodeAt(pos + 2) === 62 && (spaceStart === 0 || this.state.lineStart > spaceStart)) {
                    const comment = this.skipLineComment(3);
                    if (comment !== void 0) {
                      this.addComment(comment);
                      comments == null || comments.push(comment);
                    }
                  } else {
                    break loop;
                  }
                } else if (ch === 60 && !this.inModule && this.optionFlags & 8192) {
                  const pos = this.state.pos;
                  if (this.input.charCodeAt(pos + 1) === 33 && this.input.charCodeAt(pos + 2) === 45 && this.input.charCodeAt(pos + 3) === 45) {
                    const comment = this.skipLineComment(4);
                    if (comment !== void 0) {
                      this.addComment(comment);
                      comments == null || comments.push(comment);
                    }
                  } else {
                    break loop;
                  }
                } else {
                  break loop;
                }
            }
          }
        if ((comments == null ? void 0 : comments.length) > 0) {
          const end = this.state.pos;
          const commentWhitespace = {
            start: this.sourceToOffsetPos(spaceStart),
            end: this.sourceToOffsetPos(end),
            comments,
            leadingNode: null,
            trailingNode: null,
            containingNode: null
          };
          this.state.commentStack.push(commentWhitespace);
        }
      }
      finishToken(type, val) {
        this.state.end = this.state.pos;
        this.state.endLoc = this.state.curPosition();
        const prevType = this.state.type;
        this.state.type = type;
        this.state.value = val;
        if (!this.isLookahead) {
          this.updateContext(prevType);
        }
      }
      replaceToken(type) {
        this.state.type = type;
        this.updateContext();
      }
      readToken_numberSign() {
        if (this.state.pos === 0 && this.readToken_interpreter()) {
          return;
        }
        const nextPos = this.state.pos + 1;
        const next = this.codePointAtPos(nextPos);
        if (next >= 48 && next <= 57) {
          throw this.raise(Errors.UnexpectedDigitAfterHash, this.state.curPosition());
        }
        if (next === 123 || next === 91 && this.hasPlugin("recordAndTuple")) {
          this.expectPlugin("recordAndTuple");
          if (this.getPluginOption("recordAndTuple", "syntaxType") === "bar") {
            throw this.raise(next === 123 ? Errors.RecordExpressionHashIncorrectStartSyntaxType : Errors.TupleExpressionHashIncorrectStartSyntaxType, this.state.curPosition());
          }
          this.state.pos += 2;
          if (next === 123) {
            this.finishToken(7);
          } else {
            this.finishToken(1);
          }
        } else if (isIdentifierStart(next)) {
          ++this.state.pos;
          this.finishToken(139, this.readWord1(next));
        } else if (next === 92) {
          ++this.state.pos;
          this.finishToken(139, this.readWord1());
        } else {
          this.finishOp(27, 1);
        }
      }
      readToken_dot() {
        const next = this.input.charCodeAt(this.state.pos + 1);
        if (next >= 48 && next <= 57) {
          this.readNumber(true);
          return;
        }
        if (next === 46 && this.input.charCodeAt(this.state.pos + 2) === 46) {
          this.state.pos += 3;
          this.finishToken(21);
        } else {
          ++this.state.pos;
          this.finishToken(16);
        }
      }
      readToken_slash() {
        const next = this.input.charCodeAt(this.state.pos + 1);
        if (next === 61) {
          this.finishOp(31, 2);
        } else {
          this.finishOp(56, 1);
        }
      }
      readToken_interpreter() {
        if (this.state.pos !== 0 || this.length < 2)
          return false;
        let ch = this.input.charCodeAt(this.state.pos + 1);
        if (ch !== 33)
          return false;
        const start = this.state.pos;
        this.state.pos += 1;
        while (!isNewLine(ch) && ++this.state.pos < this.length) {
          ch = this.input.charCodeAt(this.state.pos);
        }
        const value = this.input.slice(start + 2, this.state.pos);
        this.finishToken(28, value);
        return true;
      }
      readToken_mult_modulo(code2) {
        let type = code2 === 42 ? 55 : 54;
        let width = 1;
        let next = this.input.charCodeAt(this.state.pos + 1);
        if (code2 === 42 && next === 42) {
          width++;
          next = this.input.charCodeAt(this.state.pos + 2);
          type = 57;
        }
        if (next === 61 && !this.state.inType) {
          width++;
          type = code2 === 37 ? 33 : 30;
        }
        this.finishOp(type, width);
      }
      readToken_pipe_amp(code2) {
        const next = this.input.charCodeAt(this.state.pos + 1);
        if (next === code2) {
          if (this.input.charCodeAt(this.state.pos + 2) === 61) {
            this.finishOp(30, 3);
          } else {
            this.finishOp(code2 === 124 ? 41 : 42, 2);
          }
          return;
        }
        if (code2 === 124) {
          if (next === 62) {
            this.finishOp(39, 2);
            return;
          }
          if (this.hasPlugin("recordAndTuple") && next === 125) {
            if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar") {
              throw this.raise(Errors.RecordExpressionBarIncorrectEndSyntaxType, this.state.curPosition());
            }
            this.state.pos += 2;
            this.finishToken(9);
            return;
          }
          if (this.hasPlugin("recordAndTuple") && next === 93) {
            if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar") {
              throw this.raise(Errors.TupleExpressionBarIncorrectEndSyntaxType, this.state.curPosition());
            }
            this.state.pos += 2;
            this.finishToken(4);
            return;
          }
        }
        if (next === 61) {
          this.finishOp(30, 2);
          return;
        }
        this.finishOp(code2 === 124 ? 43 : 45, 1);
      }
      readToken_caret() {
        const next = this.input.charCodeAt(this.state.pos + 1);
        if (next === 61 && !this.state.inType) {
          this.finishOp(32, 2);
        } else if (next === 94 && this.hasPlugin(["pipelineOperator", {
          proposal: "hack",
          topicToken: "^^"
        }])) {
          this.finishOp(37, 2);
          const lookaheadCh = this.input.codePointAt(this.state.pos);
          if (lookaheadCh === 94) {
            this.unexpected();
          }
        } else {
          this.finishOp(44, 1);
        }
      }
      readToken_atSign() {
        const next = this.input.charCodeAt(this.state.pos + 1);
        if (next === 64 && this.hasPlugin(["pipelineOperator", {
          proposal: "hack",
          topicToken: "@@"
        }])) {
          this.finishOp(38, 2);
        } else {
          this.finishOp(26, 1);
        }
      }
      readToken_plus_min(code2) {
        const next = this.input.charCodeAt(this.state.pos + 1);
        if (next === code2) {
          this.finishOp(34, 2);
          return;
        }
        if (next === 61) {
          this.finishOp(30, 2);
        } else {
          this.finishOp(53, 1);
        }
      }
      readToken_lt() {
        const {
          pos
        } = this.state;
        const next = this.input.charCodeAt(pos + 1);
        if (next === 60) {
          if (this.input.charCodeAt(pos + 2) === 61) {
            this.finishOp(30, 3);
            return;
          }
          this.finishOp(51, 2);
          return;
        }
        if (next === 61) {
          this.finishOp(49, 2);
          return;
        }
        this.finishOp(47, 1);
      }
      readToken_gt() {
        const {
          pos
        } = this.state;
        const next = this.input.charCodeAt(pos + 1);
        if (next === 62) {
          const size = this.input.charCodeAt(pos + 2) === 62 ? 3 : 2;
          if (this.input.charCodeAt(pos + size) === 61) {
            this.finishOp(30, size + 1);
            return;
          }
          this.finishOp(52, size);
          return;
        }
        if (next === 61) {
          this.finishOp(49, 2);
          return;
        }
        this.finishOp(48, 1);
      }
      readToken_eq_excl(code2) {
        const next = this.input.charCodeAt(this.state.pos + 1);
        if (next === 61) {
          this.finishOp(46, this.input.charCodeAt(this.state.pos + 2) === 61 ? 3 : 2);
          return;
        }
        if (code2 === 61 && next === 62) {
          this.state.pos += 2;
          this.finishToken(19);
          return;
        }
        this.finishOp(code2 === 61 ? 29 : 35, 1);
      }
      readToken_question() {
        const next = this.input.charCodeAt(this.state.pos + 1);
        const next2 = this.input.charCodeAt(this.state.pos + 2);
        if (next === 63) {
          if (next2 === 61) {
            this.finishOp(30, 3);
          } else {
            this.finishOp(40, 2);
          }
        } else if (next === 46 && !(next2 >= 48 && next2 <= 57)) {
          this.state.pos += 2;
          this.finishToken(18);
        } else {
          ++this.state.pos;
          this.finishToken(17);
        }
      }
      getTokenFromCode(code2) {
        switch (code2) {
          case 46:
            this.readToken_dot();
            return;
          case 40:
            ++this.state.pos;
            this.finishToken(10);
            return;
          case 41:
            ++this.state.pos;
            this.finishToken(11);
            return;
          case 59:
            ++this.state.pos;
            this.finishToken(13);
            return;
          case 44:
            ++this.state.pos;
            this.finishToken(12);
            return;
          case 91:
            if (this.hasPlugin("recordAndTuple") && this.input.charCodeAt(this.state.pos + 1) === 124) {
              if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar") {
                throw this.raise(Errors.TupleExpressionBarIncorrectStartSyntaxType, this.state.curPosition());
              }
              this.state.pos += 2;
              this.finishToken(2);
            } else {
              ++this.state.pos;
              this.finishToken(0);
            }
            return;
          case 93:
            ++this.state.pos;
            this.finishToken(3);
            return;
          case 123:
            if (this.hasPlugin("recordAndTuple") && this.input.charCodeAt(this.state.pos + 1) === 124) {
              if (this.getPluginOption("recordAndTuple", "syntaxType") !== "bar") {
                throw this.raise(Errors.RecordExpressionBarIncorrectStartSyntaxType, this.state.curPosition());
              }
              this.state.pos += 2;
              this.finishToken(6);
            } else {
              ++this.state.pos;
              this.finishToken(5);
            }
            return;
          case 125:
            ++this.state.pos;
            this.finishToken(8);
            return;
          case 58:
            if (this.hasPlugin("functionBind") && this.input.charCodeAt(this.state.pos + 1) === 58) {
              this.finishOp(15, 2);
            } else {
              ++this.state.pos;
              this.finishToken(14);
            }
            return;
          case 63:
            this.readToken_question();
            return;
          case 96:
            this.readTemplateToken();
            return;
          case 48: {
            const next = this.input.charCodeAt(this.state.pos + 1);
            if (next === 120 || next === 88) {
              this.readRadixNumber(16);
              return;
            }
            if (next === 111 || next === 79) {
              this.readRadixNumber(8);
              return;
            }
            if (next === 98 || next === 66) {
              this.readRadixNumber(2);
              return;
            }
          }
          case 49:
          case 50:
          case 51:
          case 52:
          case 53:
          case 54:
          case 55:
          case 56:
          case 57:
            this.readNumber(false);
            return;
          case 34:
          case 39:
            this.readString(code2);
            return;
          case 47:
            this.readToken_slash();
            return;
          case 37:
          case 42:
            this.readToken_mult_modulo(code2);
            return;
          case 124:
          case 38:
            this.readToken_pipe_amp(code2);
            return;
          case 94:
            this.readToken_caret();
            return;
          case 43:
          case 45:
            this.readToken_plus_min(code2);
            return;
          case 60:
            this.readToken_lt();
            return;
          case 62:
            this.readToken_gt();
            return;
          case 61:
          case 33:
            this.readToken_eq_excl(code2);
            return;
          case 126:
            this.finishOp(36, 1);
            return;
          case 64:
            this.readToken_atSign();
            return;
          case 35:
            this.readToken_numberSign();
            return;
          case 92:
            this.readWord();
            return;
          default:
            if (isIdentifierStart(code2)) {
              this.readWord(code2);
              return;
            }
        }
        throw this.raise(Errors.InvalidOrUnexpectedToken, this.state.curPosition(), {
          unexpected: String.fromCodePoint(code2)
        });
      }
      finishOp(type, size) {
        const str = this.input.slice(this.state.pos, this.state.pos + size);
        this.state.pos += size;
        this.finishToken(type, str);
      }
      readRegexp() {
        const startLoc = this.state.startLoc;
        const start = this.state.start + 1;
        let escaped, inClass;
        let {
          pos
        } = this.state;
        for (; ; ++pos) {
          if (pos >= this.length) {
            throw this.raise(Errors.UnterminatedRegExp, createPositionWithColumnOffset(startLoc, 1));
          }
          const ch = this.input.charCodeAt(pos);
          if (isNewLine(ch)) {
            throw this.raise(Errors.UnterminatedRegExp, createPositionWithColumnOffset(startLoc, 1));
          }
          if (escaped) {
            escaped = false;
          } else {
            if (ch === 91) {
              inClass = true;
            } else if (ch === 93 && inClass) {
              inClass = false;
            } else if (ch === 47 && !inClass) {
              break;
            }
            escaped = ch === 92;
          }
        }
        const content = this.input.slice(start, pos);
        ++pos;
        let mods = "";
        const nextPos = () => createPositionWithColumnOffset(startLoc, pos + 2 - start);
        while (pos < this.length) {
          const cp = this.codePointAtPos(pos);
          const char = String.fromCharCode(cp);
          if (VALID_REGEX_FLAGS.has(cp)) {
            if (cp === 118) {
              if (mods.includes("u")) {
                this.raise(Errors.IncompatibleRegExpUVFlags, nextPos());
              }
            } else if (cp === 117) {
              if (mods.includes("v")) {
                this.raise(Errors.IncompatibleRegExpUVFlags, nextPos());
              }
            }
            if (mods.includes(char)) {
              this.raise(Errors.DuplicateRegExpFlags, nextPos());
            }
          } else if (isIdentifierChar(cp) || cp === 92) {
            this.raise(Errors.MalformedRegExpFlags, nextPos());
          } else {
            break;
          }
          ++pos;
          mods += char;
        }
        this.state.pos = pos;
        this.finishToken(138, {
          pattern: content,
          flags: mods
        });
      }
      readInt(radix, len, forceLen = false, allowNumSeparator = true) {
        const {
          n,
          pos
        } = readInt(this.input, this.state.pos, this.state.lineStart, this.state.curLine, radix, len, forceLen, allowNumSeparator, this.errorHandlers_readInt, false);
        this.state.pos = pos;
        return n;
      }
      readRadixNumber(radix) {
        const start = this.state.pos;
        const startLoc = this.state.curPosition();
        let isBigInt = false;
        this.state.pos += 2;
        const val = this.readInt(radix);
        if (val == null) {
          this.raise(Errors.InvalidDigit, createPositionWithColumnOffset(startLoc, 2), {
            radix
          });
        }
        const next = this.input.charCodeAt(this.state.pos);
        if (next === 110) {
          ++this.state.pos;
          isBigInt = true;
        } else if (next === 109) {
          throw this.raise(Errors.InvalidDecimal, startLoc);
        }
        if (isIdentifierStart(this.codePointAtPos(this.state.pos))) {
          throw this.raise(Errors.NumberIdentifier, this.state.curPosition());
        }
        if (isBigInt) {
          const str = this.input.slice(start, this.state.pos).replace(/[_n]/g, "");
          this.finishToken(136, str);
          return;
        }
        this.finishToken(135, val);
      }
      readNumber(startsWithDot) {
        const start = this.state.pos;
        const startLoc = this.state.curPosition();
        let isFloat = false;
        let isBigInt = false;
        let hasExponent = false;
        let isOctal = false;
        if (!startsWithDot && this.readInt(10) === null) {
          this.raise(Errors.InvalidNumber, this.state.curPosition());
        }
        const hasLeadingZero = this.state.pos - start >= 2 && this.input.charCodeAt(start) === 48;
        if (hasLeadingZero) {
          const integer = this.input.slice(start, this.state.pos);
          this.recordStrictModeErrors(Errors.StrictOctalLiteral, startLoc);
          if (!this.state.strict) {
            const underscorePos = integer.indexOf("_");
            if (underscorePos > 0) {
              this.raise(Errors.ZeroDigitNumericSeparator, createPositionWithColumnOffset(startLoc, underscorePos));
            }
          }
          isOctal = hasLeadingZero && !/[89]/.test(integer);
        }
        let next = this.input.charCodeAt(this.state.pos);
        if (next === 46 && !isOctal) {
          ++this.state.pos;
          this.readInt(10);
          isFloat = true;
          next = this.input.charCodeAt(this.state.pos);
        }
        if ((next === 69 || next === 101) && !isOctal) {
          next = this.input.charCodeAt(++this.state.pos);
          if (next === 43 || next === 45) {
            ++this.state.pos;
          }
          if (this.readInt(10) === null) {
            this.raise(Errors.InvalidOrMissingExponent, startLoc);
          }
          isFloat = true;
          hasExponent = true;
          next = this.input.charCodeAt(this.state.pos);
        }
        if (next === 110) {
          if (isFloat || hasLeadingZero) {
            this.raise(Errors.InvalidBigIntLiteral, startLoc);
          }
          ++this.state.pos;
          isBigInt = true;
        }
        if (next === 109) {
          this.expectPlugin("decimal", this.state.curPosition());
          if (hasExponent || hasLeadingZero) {
            this.raise(Errors.InvalidDecimal, startLoc);
          }
          ++this.state.pos;
          var isDecimal = true;
        }
        if (isIdentifierStart(this.codePointAtPos(this.state.pos))) {
          throw this.raise(Errors.NumberIdentifier, this.state.curPosition());
        }
        const str = this.input.slice(start, this.state.pos).replace(/[_mn]/g, "");
        if (isBigInt) {
          this.finishToken(136, str);
          return;
        }
        if (isDecimal) {
          this.finishToken(137, str);
          return;
        }
        const val = isOctal ? parseInt(str, 8) : parseFloat(str);
        this.finishToken(135, val);
      }
      readCodePoint(throwOnInvalid) {
        const {
          code: code2,
          pos
        } = readCodePoint(this.input, this.state.pos, this.state.lineStart, this.state.curLine, throwOnInvalid, this.errorHandlers_readCodePoint);
        this.state.pos = pos;
        return code2;
      }
      readString(quote) {
        const {
          str,
          pos,
          curLine,
          lineStart
        } = readStringContents(quote === 34 ? "double" : "single", this.input, this.state.pos + 1, this.state.lineStart, this.state.curLine, this.errorHandlers_readStringContents_string);
        this.state.pos = pos + 1;
        this.state.lineStart = lineStart;
        this.state.curLine = curLine;
        this.finishToken(134, str);
      }
      readTemplateContinuation() {
        if (!this.match(8)) {
          this.unexpected(null, 8);
        }
        this.state.pos--;
        this.readTemplateToken();
      }
      readTemplateToken() {
        const opening = this.input[this.state.pos];
        const {
          str,
          firstInvalidLoc,
          pos,
          curLine,
          lineStart
        } = readStringContents("template", this.input, this.state.pos + 1, this.state.lineStart, this.state.curLine, this.errorHandlers_readStringContents_template);
        this.state.pos = pos + 1;
        this.state.lineStart = lineStart;
        this.state.curLine = curLine;
        if (firstInvalidLoc) {
          this.state.firstInvalidTemplateEscapePos = new Position(firstInvalidLoc.curLine, firstInvalidLoc.pos - firstInvalidLoc.lineStart, this.sourceToOffsetPos(firstInvalidLoc.pos));
        }
        if (this.input.codePointAt(pos) === 96) {
          this.finishToken(24, firstInvalidLoc ? null : opening + str + "`");
        } else {
          this.state.pos++;
          this.finishToken(25, firstInvalidLoc ? null : opening + str + "${");
        }
      }
      recordStrictModeErrors(toParseError, at) {
        const index = at.index;
        if (this.state.strict && !this.state.strictErrors.has(index)) {
          this.raise(toParseError, at);
        } else {
          this.state.strictErrors.set(index, [toParseError, at]);
        }
      }
      readWord1(firstCode) {
        this.state.containsEsc = false;
        let word = "";
        const start = this.state.pos;
        let chunkStart = this.state.pos;
        if (firstCode !== void 0) {
          this.state.pos += firstCode <= 65535 ? 1 : 2;
        }
        while (this.state.pos < this.length) {
          const ch = this.codePointAtPos(this.state.pos);
          if (isIdentifierChar(ch)) {
            this.state.pos += ch <= 65535 ? 1 : 2;
          } else if (ch === 92) {
            this.state.containsEsc = true;
            word += this.input.slice(chunkStart, this.state.pos);
            const escStart = this.state.curPosition();
            const identifierCheck = this.state.pos === start ? isIdentifierStart : isIdentifierChar;
            if (this.input.charCodeAt(++this.state.pos) !== 117) {
              this.raise(Errors.MissingUnicodeEscape, this.state.curPosition());
              chunkStart = this.state.pos - 1;
              continue;
            }
            ++this.state.pos;
            const esc = this.readCodePoint(true);
            if (esc !== null) {
              if (!identifierCheck(esc)) {
                this.raise(Errors.EscapedCharNotAnIdentifier, escStart);
              }
              word += String.fromCodePoint(esc);
            }
            chunkStart = this.state.pos;
          } else {
            break;
          }
        }
        return word + this.input.slice(chunkStart, this.state.pos);
      }
      readWord(firstCode) {
        const word = this.readWord1(firstCode);
        const type = keywords$1.get(word);
        if (type !== void 0) {
          this.finishToken(type, tokenLabelName(type));
        } else {
          this.finishToken(132, word);
        }
      }
      checkKeywordEscapes() {
        const {
          type
        } = this.state;
        if (tokenIsKeyword(type) && this.state.containsEsc) {
          this.raise(Errors.InvalidEscapedReservedWord, this.state.startLoc, {
            reservedWord: tokenLabelName(type)
          });
        }
      }
      raise(toParseError, at, details = {}) {
        const loc = at instanceof Position ? at : at.loc.start;
        const error = toParseError(loc, details);
        if (!(this.optionFlags & 2048))
          throw error;
        if (!this.isLookahead)
          this.state.errors.push(error);
        return error;
      }
      raiseOverwrite(toParseError, at, details = {}) {
        const loc = at instanceof Position ? at : at.loc.start;
        const pos = loc.index;
        const errors = this.state.errors;
        for (let i = errors.length - 1; i >= 0; i--) {
          const error = errors[i];
          if (error.loc.index === pos) {
            return errors[i] = toParseError(loc, details);
          }
          if (error.loc.index < pos)
            break;
        }
        return this.raise(toParseError, at, details);
      }
      updateContext(prevType) {
      }
      unexpected(loc, type) {
        throw this.raise(Errors.UnexpectedToken, loc != null ? loc : this.state.startLoc, {
          expected: type ? tokenLabelName(type) : null
        });
      }
      expectPlugin(pluginName, loc) {
        if (this.hasPlugin(pluginName)) {
          return true;
        }
        throw this.raise(Errors.MissingPlugin, loc != null ? loc : this.state.startLoc, {
          missingPlugin: [pluginName]
        });
      }
      expectOnePlugin(pluginNames) {
        if (!pluginNames.some((name) => this.hasPlugin(name))) {
          throw this.raise(Errors.MissingOneOfPlugins, this.state.startLoc, {
            missingPlugin: pluginNames
          });
        }
      }
      errorBuilder(error) {
        return (pos, lineStart, curLine) => {
          this.raise(error, buildPosition(pos, lineStart, curLine));
        };
      }
    };
    var ClassScope = class {
      constructor() {
        this.privateNames = /* @__PURE__ */ new Set();
        this.loneAccessors = /* @__PURE__ */ new Map();
        this.undefinedPrivateNames = /* @__PURE__ */ new Map();
      }
    };
    var ClassScopeHandler = class {
      constructor(parser) {
        this.parser = void 0;
        this.stack = [];
        this.undefinedPrivateNames = /* @__PURE__ */ new Map();
        this.parser = parser;
      }
      current() {
        return this.stack[this.stack.length - 1];
      }
      enter() {
        this.stack.push(new ClassScope());
      }
      exit() {
        const oldClassScope = this.stack.pop();
        const current = this.current();
        for (const [name, loc] of Array.from(oldClassScope.undefinedPrivateNames)) {
          if (current) {
            if (!current.undefinedPrivateNames.has(name)) {
              current.undefinedPrivateNames.set(name, loc);
            }
          } else {
            this.parser.raise(Errors.InvalidPrivateFieldResolution, loc, {
              identifierName: name
            });
          }
        }
      }
      declarePrivateName(name, elementType, loc) {
        const {
          privateNames,
          loneAccessors,
          undefinedPrivateNames
        } = this.current();
        let redefined = privateNames.has(name);
        if (elementType & 3) {
          const accessor = redefined && loneAccessors.get(name);
          if (accessor) {
            const oldStatic = accessor & 4;
            const newStatic = elementType & 4;
            const oldKind = accessor & 3;
            const newKind = elementType & 3;
            redefined = oldKind === newKind || oldStatic !== newStatic;
            if (!redefined)
              loneAccessors.delete(name);
          } else if (!redefined) {
            loneAccessors.set(name, elementType);
          }
        }
        if (redefined) {
          this.parser.raise(Errors.PrivateNameRedeclaration, loc, {
            identifierName: name
          });
        }
        privateNames.add(name);
        undefinedPrivateNames.delete(name);
      }
      usePrivateName(name, loc) {
        let classScope;
        for (classScope of this.stack) {
          if (classScope.privateNames.has(name))
            return;
        }
        if (classScope) {
          classScope.undefinedPrivateNames.set(name, loc);
        } else {
          this.parser.raise(Errors.InvalidPrivateFieldResolution, loc, {
            identifierName: name
          });
        }
      }
    };
    var ExpressionScope = class {
      constructor(type = 0) {
        this.type = type;
      }
      canBeArrowParameterDeclaration() {
        return this.type === 2 || this.type === 1;
      }
      isCertainlyParameterDeclaration() {
        return this.type === 3;
      }
    };
    var ArrowHeadParsingScope = class extends ExpressionScope {
      constructor(type) {
        super(type);
        this.declarationErrors = /* @__PURE__ */ new Map();
      }
      recordDeclarationError(ParsingErrorClass, at) {
        const index = at.index;
        this.declarationErrors.set(index, [ParsingErrorClass, at]);
      }
      clearDeclarationError(index) {
        this.declarationErrors.delete(index);
      }
      iterateErrors(iterator) {
        this.declarationErrors.forEach(iterator);
      }
    };
    var ExpressionScopeHandler = class {
      constructor(parser) {
        this.parser = void 0;
        this.stack = [new ExpressionScope()];
        this.parser = parser;
      }
      enter(scope) {
        this.stack.push(scope);
      }
      exit() {
        this.stack.pop();
      }
      recordParameterInitializerError(toParseError, node) {
        const origin = node.loc.start;
        const {
          stack
        } = this;
        let i = stack.length - 1;
        let scope = stack[i];
        while (!scope.isCertainlyParameterDeclaration()) {
          if (scope.canBeArrowParameterDeclaration()) {
            scope.recordDeclarationError(toParseError, origin);
          } else {
            return;
          }
          scope = stack[--i];
        }
        this.parser.raise(toParseError, origin);
      }
      recordArrowParameterBindingError(error, node) {
        const {
          stack
        } = this;
        const scope = stack[stack.length - 1];
        const origin = node.loc.start;
        if (scope.isCertainlyParameterDeclaration()) {
          this.parser.raise(error, origin);
        } else if (scope.canBeArrowParameterDeclaration()) {
          scope.recordDeclarationError(error, origin);
        } else {
          return;
        }
      }
      recordAsyncArrowParametersError(at) {
        const {
          stack
        } = this;
        let i = stack.length - 1;
        let scope = stack[i];
        while (scope.canBeArrowParameterDeclaration()) {
          if (scope.type === 2) {
            scope.recordDeclarationError(Errors.AwaitBindingIdentifier, at);
          }
          scope = stack[--i];
        }
      }
      validateAsPattern() {
        const {
          stack
        } = this;
        const currentScope = stack[stack.length - 1];
        if (!currentScope.canBeArrowParameterDeclaration())
          return;
        currentScope.iterateErrors(([toParseError, loc]) => {
          this.parser.raise(toParseError, loc);
          let i = stack.length - 2;
          let scope = stack[i];
          while (scope.canBeArrowParameterDeclaration()) {
            scope.clearDeclarationError(loc.index);
            scope = stack[--i];
          }
        });
      }
    };
    function newParameterDeclarationScope() {
      return new ExpressionScope(3);
    }
    function newArrowHeadScope() {
      return new ArrowHeadParsingScope(1);
    }
    function newAsyncArrowScope() {
      return new ArrowHeadParsingScope(2);
    }
    function newExpressionScope() {
      return new ExpressionScope();
    }
    var UtilParser = class extends Tokenizer {
      addExtra(node, key, value, enumerable = true) {
        if (!node)
          return;
        let {
          extra
        } = node;
        if (extra == null) {
          extra = {};
          node.extra = extra;
        }
        if (enumerable) {
          extra[key] = value;
        } else {
          Object.defineProperty(extra, key, {
            enumerable,
            value
          });
        }
      }
      isContextual(token) {
        return this.state.type === token && !this.state.containsEsc;
      }
      isUnparsedContextual(nameStart, name) {
        if (this.input.startsWith(name, nameStart)) {
          const nextCh = this.input.charCodeAt(nameStart + name.length);
          return !(isIdentifierChar(nextCh) || (nextCh & 64512) === 55296);
        }
        return false;
      }
      isLookaheadContextual(name) {
        const next = this.nextTokenStart();
        return this.isUnparsedContextual(next, name);
      }
      eatContextual(token) {
        if (this.isContextual(token)) {
          this.next();
          return true;
        }
        return false;
      }
      expectContextual(token, toParseError) {
        if (!this.eatContextual(token)) {
          if (toParseError != null) {
            throw this.raise(toParseError, this.state.startLoc);
          }
          this.unexpected(null, token);
        }
      }
      canInsertSemicolon() {
        return this.match(140) || this.match(8) || this.hasPrecedingLineBreak();
      }
      hasPrecedingLineBreak() {
        return hasNewLine(this.input, this.offsetToSourcePos(this.state.lastTokEndLoc.index), this.state.start);
      }
      hasFollowingLineBreak() {
        return hasNewLine(this.input, this.state.end, this.nextTokenStart());
      }
      isLineTerminator() {
        return this.eat(13) || this.canInsertSemicolon();
      }
      semicolon(allowAsi = true) {
        if (allowAsi ? this.isLineTerminator() : this.eat(13))
          return;
        this.raise(Errors.MissingSemicolon, this.state.lastTokEndLoc);
      }
      expect(type, loc) {
        if (!this.eat(type)) {
          this.unexpected(loc, type);
        }
      }
      tryParse(fn, oldState = this.state.clone()) {
        const abortSignal = {
          node: null
        };
        try {
          const node = fn((node2 = null) => {
            abortSignal.node = node2;
            throw abortSignal;
          });
          if (this.state.errors.length > oldState.errors.length) {
            const failState = this.state;
            this.state = oldState;
            this.state.tokensLength = failState.tokensLength;
            return {
              node,
              error: failState.errors[oldState.errors.length],
              thrown: false,
              aborted: false,
              failState
            };
          }
          return {
            node,
            error: null,
            thrown: false,
            aborted: false,
            failState: null
          };
        } catch (error) {
          const failState = this.state;
          this.state = oldState;
          if (error instanceof SyntaxError) {
            return {
              node: null,
              error,
              thrown: true,
              aborted: false,
              failState
            };
          }
          if (error === abortSignal) {
            return {
              node: abortSignal.node,
              error: null,
              thrown: false,
              aborted: true,
              failState
            };
          }
          throw error;
        }
      }
      checkExpressionErrors(refExpressionErrors, andThrow) {
        if (!refExpressionErrors)
          return false;
        const {
          shorthandAssignLoc,
          doubleProtoLoc,
          privateKeyLoc,
          optionalParametersLoc,
          voidPatternLoc
        } = refExpressionErrors;
        const hasErrors = !!shorthandAssignLoc || !!doubleProtoLoc || !!optionalParametersLoc || !!privateKeyLoc || !!voidPatternLoc;
        if (!andThrow) {
          return hasErrors;
        }
        if (shorthandAssignLoc != null) {
          this.raise(Errors.InvalidCoverInitializedName, shorthandAssignLoc);
        }
        if (doubleProtoLoc != null) {
          this.raise(Errors.DuplicateProto, doubleProtoLoc);
        }
        if (privateKeyLoc != null) {
          this.raise(Errors.UnexpectedPrivateField, privateKeyLoc);
        }
        if (optionalParametersLoc != null) {
          this.unexpected(optionalParametersLoc);
        }
        if (voidPatternLoc != null) {
          this.raise(Errors.InvalidCoverDiscardElement, voidPatternLoc);
        }
      }
      isLiteralPropertyName() {
        return tokenIsLiteralPropertyName(this.state.type);
      }
      isPrivateName(node) {
        return node.type === "PrivateName";
      }
      getPrivateNameSV(node) {
        return node.id.name;
      }
      hasPropertyAsPrivateName(node) {
        return (node.type === "MemberExpression" || node.type === "OptionalMemberExpression") && this.isPrivateName(node.property);
      }
      isObjectProperty(node) {
        return node.type === "ObjectProperty";
      }
      isObjectMethod(node) {
        return node.type === "ObjectMethod";
      }
      initializeScopes(inModule = this.options.sourceType === "module") {
        const oldLabels = this.state.labels;
        this.state.labels = [];
        const oldExportedIdentifiers = this.exportedIdentifiers;
        this.exportedIdentifiers = /* @__PURE__ */ new Set();
        const oldInModule = this.inModule;
        this.inModule = inModule;
        const oldScope = this.scope;
        const ScopeHandler2 = this.getScopeHandler();
        this.scope = new ScopeHandler2(this, inModule);
        const oldProdParam = this.prodParam;
        this.prodParam = new ProductionParameterHandler();
        const oldClassScope = this.classScope;
        this.classScope = new ClassScopeHandler(this);
        const oldExpressionScope = this.expressionScope;
        this.expressionScope = new ExpressionScopeHandler(this);
        return () => {
          this.state.labels = oldLabels;
          this.exportedIdentifiers = oldExportedIdentifiers;
          this.inModule = oldInModule;
          this.scope = oldScope;
          this.prodParam = oldProdParam;
          this.classScope = oldClassScope;
          this.expressionScope = oldExpressionScope;
        };
      }
      enterInitialScopes() {
        let paramFlags = 0;
        if (this.inModule || this.optionFlags & 1) {
          paramFlags |= 2;
        }
        if (this.optionFlags & 32) {
          paramFlags |= 1;
        }
        const isCommonJS = !this.inModule && this.options.sourceType === "commonjs";
        if (isCommonJS || this.optionFlags & 2) {
          paramFlags |= 4;
        }
        this.prodParam.enter(paramFlags);
        let scopeFlags = isCommonJS ? 514 : 1;
        if (this.optionFlags & 4) {
          scopeFlags |= 512;
        }
        this.scope.enter(scopeFlags);
      }
      checkDestructuringPrivate(refExpressionErrors) {
        const {
          privateKeyLoc
        } = refExpressionErrors;
        if (privateKeyLoc !== null) {
          this.expectPlugin("destructuringPrivate", privateKeyLoc);
        }
      }
    };
    var ExpressionErrors = class {
      constructor() {
        this.shorthandAssignLoc = null;
        this.doubleProtoLoc = null;
        this.privateKeyLoc = null;
        this.optionalParametersLoc = null;
        this.voidPatternLoc = null;
      }
    };
    var Node = class {
      constructor(parser, pos, loc) {
        this.type = "";
        this.start = pos;
        this.end = 0;
        this.loc = new SourceLocation(loc);
        if ((parser == null ? void 0 : parser.optionFlags) & 128)
          this.range = [pos, 0];
        if (parser != null && parser.filename)
          this.loc.filename = parser.filename;
      }
    };
    var NodePrototype = Node.prototype;
    NodePrototype.__clone = function() {
      const newNode = new Node(void 0, this.start, this.loc.start);
      const keys = Object.keys(this);
      for (let i = 0, length = keys.length; i < length; i++) {
        const key = keys[i];
        if (key !== "leadingComments" && key !== "trailingComments" && key !== "innerComments") {
          newNode[key] = this[key];
        }
      }
      return newNode;
    };
    var NodeUtils = class extends UtilParser {
      startNode() {
        const loc = this.state.startLoc;
        return new Node(this, loc.index, loc);
      }
      startNodeAt(loc) {
        return new Node(this, loc.index, loc);
      }
      startNodeAtNode(type) {
        return this.startNodeAt(type.loc.start);
      }
      finishNode(node, type) {
        return this.finishNodeAt(node, type, this.state.lastTokEndLoc);
      }
      finishNodeAt(node, type, endLoc) {
        node.type = type;
        node.end = endLoc.index;
        node.loc.end = endLoc;
        if (this.optionFlags & 128)
          node.range[1] = endLoc.index;
        if (this.optionFlags & 4096) {
          this.processComment(node);
        }
        return node;
      }
      resetStartLocation(node, startLoc) {
        node.start = startLoc.index;
        node.loc.start = startLoc;
        if (this.optionFlags & 128)
          node.range[0] = startLoc.index;
      }
      resetEndLocation(node, endLoc = this.state.lastTokEndLoc) {
        node.end = endLoc.index;
        node.loc.end = endLoc;
        if (this.optionFlags & 128)
          node.range[1] = endLoc.index;
      }
      resetStartLocationFromNode(node, locationNode) {
        this.resetStartLocation(node, locationNode.loc.start);
      }
      castNodeTo(node, type) {
        node.type = type;
        return node;
      }
      cloneIdentifier(node) {
        const {
          type,
          start,
          end,
          loc,
          range,
          name
        } = node;
        const cloned = Object.create(NodePrototype);
        cloned.type = type;
        cloned.start = start;
        cloned.end = end;
        cloned.loc = loc;
        cloned.range = range;
        cloned.name = name;
        if (node.extra)
          cloned.extra = node.extra;
        return cloned;
      }
      cloneStringLiteral(node) {
        const {
          type,
          start,
          end,
          loc,
          range,
          extra
        } = node;
        const cloned = Object.create(NodePrototype);
        cloned.type = type;
        cloned.start = start;
        cloned.end = end;
        cloned.loc = loc;
        cloned.range = range;
        cloned.extra = extra;
        cloned.value = node.value;
        return cloned;
      }
    };
    var unwrapParenthesizedExpression = (node) => {
      return node.type === "ParenthesizedExpression" ? unwrapParenthesizedExpression(node.expression) : node;
    };
    var LValParser = class extends NodeUtils {
      toAssignable(node, isLHS = false) {
        var _node$extra, _node$extra3;
        let parenthesized = void 0;
        if (node.type === "ParenthesizedExpression" || (_node$extra = node.extra) != null && _node$extra.parenthesized) {
          parenthesized = unwrapParenthesizedExpression(node);
          if (isLHS) {
            if (parenthesized.type === "Identifier") {
              this.expressionScope.recordArrowParameterBindingError(Errors.InvalidParenthesizedAssignment, node);
            } else if (parenthesized.type !== "CallExpression" && parenthesized.type !== "MemberExpression" && !this.isOptionalMemberExpression(parenthesized)) {
              this.raise(Errors.InvalidParenthesizedAssignment, node);
            }
          } else {
            this.raise(Errors.InvalidParenthesizedAssignment, node);
          }
        }
        switch (node.type) {
          case "Identifier":
          case "ObjectPattern":
          case "ArrayPattern":
          case "AssignmentPattern":
          case "RestElement":
          case "VoidPattern":
            break;
          case "ObjectExpression":
            this.castNodeTo(node, "ObjectPattern");
            for (let i = 0, length = node.properties.length, last = length - 1; i < length; i++) {
              var _node$extra2;
              const prop = node.properties[i];
              const isLast = i === last;
              this.toAssignableObjectExpressionProp(prop, isLast, isLHS);
              if (isLast && prop.type === "RestElement" && (_node$extra2 = node.extra) != null && _node$extra2.trailingCommaLoc) {
                this.raise(Errors.RestTrailingComma, node.extra.trailingCommaLoc);
              }
            }
            break;
          case "ObjectProperty": {
            const {
              key,
              value
            } = node;
            if (this.isPrivateName(key)) {
              this.classScope.usePrivateName(this.getPrivateNameSV(key), key.loc.start);
            }
            this.toAssignable(value, isLHS);
            break;
          }
          case "SpreadElement": {
            throw new Error("Internal @babel/parser error (this is a bug, please report it). SpreadElement should be converted by .toAssignable's caller.");
          }
          case "ArrayExpression":
            this.castNodeTo(node, "ArrayPattern");
            this.toAssignableList(node.elements, (_node$extra3 = node.extra) == null ? void 0 : _node$extra3.trailingCommaLoc, isLHS);
            break;
          case "AssignmentExpression":
            if (node.operator !== "=") {
              this.raise(Errors.MissingEqInAssignment, node.left.loc.end);
            }
            this.castNodeTo(node, "AssignmentPattern");
            delete node.operator;
            if (node.left.type === "VoidPattern") {
              this.raise(Errors.VoidPatternInitializer, node.left);
            }
            this.toAssignable(node.left, isLHS);
            break;
          case "ParenthesizedExpression":
            this.toAssignable(parenthesized, isLHS);
            break;
        }
      }
      toAssignableObjectExpressionProp(prop, isLast, isLHS) {
        if (prop.type === "ObjectMethod") {
          this.raise(prop.kind === "get" || prop.kind === "set" ? Errors.PatternHasAccessor : Errors.PatternHasMethod, prop.key);
        } else if (prop.type === "SpreadElement") {
          this.castNodeTo(prop, "RestElement");
          const arg = prop.argument;
          this.checkToRestConversion(arg, false);
          this.toAssignable(arg, isLHS);
          if (!isLast) {
            this.raise(Errors.RestTrailingComma, prop);
          }
        } else {
          this.toAssignable(prop, isLHS);
        }
      }
      toAssignableList(exprList, trailingCommaLoc, isLHS) {
        const end = exprList.length - 1;
        for (let i = 0; i <= end; i++) {
          const elt = exprList[i];
          if (!elt)
            continue;
          this.toAssignableListItem(exprList, i, isLHS);
          if (elt.type === "RestElement") {
            if (i < end) {
              this.raise(Errors.RestTrailingComma, elt);
            } else if (trailingCommaLoc) {
              this.raise(Errors.RestTrailingComma, trailingCommaLoc);
            }
          }
        }
      }
      toAssignableListItem(exprList, index, isLHS) {
        const node = exprList[index];
        if (node.type === "SpreadElement") {
          this.castNodeTo(node, "RestElement");
          const arg = node.argument;
          this.checkToRestConversion(arg, true);
          this.toAssignable(arg, isLHS);
        } else {
          this.toAssignable(node, isLHS);
        }
      }
      isAssignable(node, isBinding) {
        switch (node.type) {
          case "Identifier":
          case "ObjectPattern":
          case "ArrayPattern":
          case "AssignmentPattern":
          case "RestElement":
          case "VoidPattern":
            return true;
          case "ObjectExpression": {
            const last = node.properties.length - 1;
            return node.properties.every((prop, i) => {
              return prop.type !== "ObjectMethod" && (i === last || prop.type !== "SpreadElement") && this.isAssignable(prop);
            });
          }
          case "ObjectProperty":
            return this.isAssignable(node.value);
          case "SpreadElement":
            return this.isAssignable(node.argument);
          case "ArrayExpression":
            return node.elements.every((element) => element === null || this.isAssignable(element));
          case "AssignmentExpression":
            return node.operator === "=";
          case "ParenthesizedExpression":
            return this.isAssignable(node.expression);
          case "MemberExpression":
          case "OptionalMemberExpression":
            return !isBinding;
          default:
            return false;
        }
      }
      toReferencedList(exprList, isParenthesizedExpr) {
        return exprList;
      }
      toReferencedListDeep(exprList, isParenthesizedExpr) {
        this.toReferencedList(exprList, isParenthesizedExpr);
        for (const expr of exprList) {
          if ((expr == null ? void 0 : expr.type) === "ArrayExpression") {
            this.toReferencedListDeep(expr.elements);
          }
        }
      }
      parseSpread(refExpressionErrors) {
        const node = this.startNode();
        this.next();
        node.argument = this.parseMaybeAssignAllowIn(refExpressionErrors, void 0);
        return this.finishNode(node, "SpreadElement");
      }
      parseRestBinding() {
        const node = this.startNode();
        this.next();
        const argument = this.parseBindingAtom();
        if (argument.type === "VoidPattern") {
          this.raise(Errors.UnexpectedVoidPattern, argument);
        }
        node.argument = argument;
        return this.finishNode(node, "RestElement");
      }
      parseBindingAtom() {
        switch (this.state.type) {
          case 0: {
            const node = this.startNode();
            this.next();
            node.elements = this.parseBindingList(3, 93, 1);
            return this.finishNode(node, "ArrayPattern");
          }
          case 5:
            return this.parseObjectLike(8, true);
          case 88:
            return this.parseVoidPattern(null);
        }
        return this.parseIdentifier();
      }
      parseBindingList(close, closeCharCode, flags) {
        const allowEmpty = flags & 1;
        const elts = [];
        let first = true;
        while (!this.eat(close)) {
          if (first) {
            first = false;
          } else {
            this.expect(12);
          }
          if (allowEmpty && this.match(12)) {
            elts.push(null);
          } else if (this.eat(close)) {
            break;
          } else if (this.match(21)) {
            let rest = this.parseRestBinding();
            if (this.hasPlugin("flow") || flags & 2) {
              rest = this.parseFunctionParamType(rest);
            }
            elts.push(rest);
            if (!this.checkCommaAfterRest(closeCharCode)) {
              this.expect(close);
              break;
            }
          } else {
            const decorators = [];
            if (flags & 2) {
              if (this.match(26) && this.hasPlugin("decorators")) {
                this.raise(Errors.UnsupportedParameterDecorator, this.state.startLoc);
              }
              while (this.match(26)) {
                decorators.push(this.parseDecorator());
              }
            }
            elts.push(this.parseBindingElement(flags, decorators));
          }
        }
        return elts;
      }
      parseBindingRestProperty(prop) {
        this.next();
        if (this.hasPlugin("discardBinding") && this.match(88)) {
          prop.argument = this.parseVoidPattern(null);
          this.raise(Errors.UnexpectedVoidPattern, prop.argument);
        } else {
          prop.argument = this.parseIdentifier();
        }
        this.checkCommaAfterRest(125);
        return this.finishNode(prop, "RestElement");
      }
      parseBindingProperty() {
        const {
          type,
          startLoc
        } = this.state;
        if (type === 21) {
          return this.parseBindingRestProperty(this.startNode());
        }
        const prop = this.startNode();
        if (type === 139) {
          this.expectPlugin("destructuringPrivate", startLoc);
          this.classScope.usePrivateName(this.state.value, startLoc);
          prop.key = this.parsePrivateName();
        } else {
          this.parsePropertyName(prop);
        }
        prop.method = false;
        return this.parseObjPropValue(prop, startLoc, false, false, true, false);
      }
      parseBindingElement(flags, decorators) {
        const left = this.parseMaybeDefault();
        if (this.hasPlugin("flow") || flags & 2) {
          this.parseFunctionParamType(left);
        }
        if (decorators.length) {
          left.decorators = decorators;
          this.resetStartLocationFromNode(left, decorators[0]);
        }
        const elt = this.parseMaybeDefault(left.loc.start, left);
        return elt;
      }
      parseFunctionParamType(param) {
        return param;
      }
      parseMaybeDefault(startLoc, left) {
        startLoc != null ? startLoc : startLoc = this.state.startLoc;
        left = left != null ? left : this.parseBindingAtom();
        if (!this.eat(29))
          return left;
        const node = this.startNodeAt(startLoc);
        if (left.type === "VoidPattern") {
          this.raise(Errors.VoidPatternInitializer, left);
        }
        node.left = left;
        node.right = this.parseMaybeAssignAllowIn();
        return this.finishNode(node, "AssignmentPattern");
      }
      isValidLVal(type, disallowCallExpression, isUnparenthesizedInAssign, binding) {
        switch (type) {
          case "AssignmentPattern":
            return "left";
          case "RestElement":
            return "argument";
          case "ObjectProperty":
            return "value";
          case "ParenthesizedExpression":
            return "expression";
          case "ArrayPattern":
            return "elements";
          case "ObjectPattern":
            return "properties";
          case "VoidPattern":
            return true;
          case "CallExpression":
            if (!disallowCallExpression && !this.state.strict && this.optionFlags & 8192) {
              return true;
            }
        }
        return false;
      }
      isOptionalMemberExpression(expression) {
        return expression.type === "OptionalMemberExpression";
      }
      checkLVal(expression, ancestor, binding = 64, checkClashes = false, strictModeChanged = false, hasParenthesizedAncestor = false, disallowCallExpression = false) {
        var _expression$extra;
        const type = expression.type;
        if (this.isObjectMethod(expression))
          return;
        const isOptionalMemberExpression = this.isOptionalMemberExpression(expression);
        if (isOptionalMemberExpression || type === "MemberExpression") {
          if (isOptionalMemberExpression) {
            this.expectPlugin("optionalChainingAssign", expression.loc.start);
            if (ancestor.type !== "AssignmentExpression") {
              this.raise(Errors.InvalidLhsOptionalChaining, expression, {
                ancestor
              });
            }
          }
          if (binding !== 64) {
            this.raise(Errors.InvalidPropertyBindingPattern, expression);
          }
          return;
        }
        if (type === "Identifier") {
          this.checkIdentifier(expression, binding, strictModeChanged);
          const {
            name
          } = expression;
          if (checkClashes) {
            if (checkClashes.has(name)) {
              this.raise(Errors.ParamDupe, expression);
            } else {
              checkClashes.add(name);
            }
          }
          return;
        } else if (type === "VoidPattern" && ancestor.type === "CatchClause") {
          this.raise(Errors.VoidPatternCatchClauseParam, expression);
        }
        const unwrappedExpression = unwrapParenthesizedExpression(expression);
        disallowCallExpression || (disallowCallExpression = unwrappedExpression.type === "CallExpression" && (unwrappedExpression.callee.type === "Import" || unwrappedExpression.callee.type === "Super"));
        const validity = this.isValidLVal(type, disallowCallExpression, !(hasParenthesizedAncestor || (_expression$extra = expression.extra) != null && _expression$extra.parenthesized) && ancestor.type === "AssignmentExpression", binding);
        if (validity === true)
          return;
        if (validity === false) {
          const ParseErrorClass = binding === 64 ? Errors.InvalidLhs : Errors.InvalidLhsBinding;
          this.raise(ParseErrorClass, expression, {
            ancestor
          });
          return;
        }
        let key, isParenthesizedExpression;
        if (typeof validity === "string") {
          key = validity;
          isParenthesizedExpression = type === "ParenthesizedExpression";
        } else {
          [key, isParenthesizedExpression] = validity;
        }
        const nextAncestor = type === "ArrayPattern" || type === "ObjectPattern" ? {
          type
        } : ancestor;
        const val = expression[key];
        if (Array.isArray(val)) {
          for (const child of val) {
            if (child) {
              this.checkLVal(child, nextAncestor, binding, checkClashes, strictModeChanged, isParenthesizedExpression, true);
            }
          }
        } else if (val) {
          this.checkLVal(val, nextAncestor, binding, checkClashes, strictModeChanged, isParenthesizedExpression, disallowCallExpression);
        }
      }
      checkIdentifier(at, bindingType, strictModeChanged = false) {
        if (this.state.strict && (strictModeChanged ? isStrictBindReservedWord(at.name, this.inModule) : isStrictBindOnlyReservedWord(at.name))) {
          if (bindingType === 64) {
            this.raise(Errors.StrictEvalArguments, at, {
              referenceName: at.name
            });
          } else {
            this.raise(Errors.StrictEvalArgumentsBinding, at, {
              bindingName: at.name
            });
          }
        }
        if (bindingType & 8192 && at.name === "let") {
          this.raise(Errors.LetInLexicalBinding, at);
        }
        if (!(bindingType & 64)) {
          this.declareNameFromIdentifier(at, bindingType);
        }
      }
      declareNameFromIdentifier(identifier, binding) {
        this.scope.declareName(identifier.name, binding, identifier.loc.start);
      }
      checkToRestConversion(node, allowPattern) {
        switch (node.type) {
          case "ParenthesizedExpression":
            this.checkToRestConversion(node.expression, allowPattern);
            break;
          case "Identifier":
          case "MemberExpression":
            break;
          case "ArrayExpression":
          case "ObjectExpression":
            if (allowPattern)
              break;
          default:
            this.raise(Errors.InvalidRestAssignmentPattern, node);
        }
      }
      checkCommaAfterRest(close) {
        if (!this.match(12)) {
          return false;
        }
        this.raise(this.lookaheadCharCode() === close ? Errors.RestTrailingComma : Errors.ElementAfterRest, this.state.startLoc);
        return true;
      }
    };
    var keywordAndTSRelationalOperator = /in(?:stanceof)?|as|satisfies/y;
    function nonNull(x) {
      if (x == null) {
        throw new Error(`Unexpected ${x} value.`);
      }
      return x;
    }
    function assert(x) {
      if (!x) {
        throw new Error("Assert fail");
      }
    }
    var TSErrors = ParseErrorEnum`typescript`({
      AbstractMethodHasImplementation: ({
        methodName
      }) => `Method '${methodName}' cannot have an implementation because it is marked abstract.`,
      AbstractPropertyHasInitializer: ({
        propertyName
      }) => `Property '${propertyName}' cannot have an initializer because it is marked abstract.`,
      AccessorCannotBeOptional: "An 'accessor' property cannot be declared optional.",
      AccessorCannotDeclareThisParameter: "'get' and 'set' accessors cannot declare 'this' parameters.",
      AccessorCannotHaveTypeParameters: "An accessor cannot have type parameters.",
      ClassMethodHasDeclare: "Class methods cannot have the 'declare' modifier.",
      ClassMethodHasReadonly: "Class methods cannot have the 'readonly' modifier.",
      ConstInitializerMustBeStringOrNumericLiteralOrLiteralEnumReference: "A 'const' initializer in an ambient context must be a string or numeric literal or literal enum reference.",
      ConstructorHasTypeParameters: "Type parameters cannot appear on a constructor declaration.",
      DeclareAccessor: ({
        kind
      }) => `'declare' is not allowed in ${kind}ters.`,
      DeclareClassFieldHasInitializer: "Initializers are not allowed in ambient contexts.",
      DeclareFunctionHasImplementation: "An implementation cannot be declared in ambient contexts.",
      DuplicateAccessibilityModifier: ({
        modifier
      }) => `Accessibility modifier already seen: '${modifier}'.`,
      DuplicateModifier: ({
        modifier
      }) => `Duplicate modifier: '${modifier}'.`,
      EmptyHeritageClauseType: ({
        token
      }) => `'${token}' list cannot be empty.`,
      EmptyTypeArguments: "Type argument list cannot be empty.",
      EmptyTypeParameters: "Type parameter list cannot be empty.",
      ExpectedAmbientAfterExportDeclare: "'export declare' must be followed by an ambient declaration.",
      ImportAliasHasImportType: "An import alias can not use 'import type'.",
      ImportReflectionHasImportType: "An `import module` declaration can not use `type` modifier",
      IncompatibleModifiers: ({
        modifiers
      }) => `'${modifiers[0]}' modifier cannot be used with '${modifiers[1]}' modifier.`,
      IndexSignatureHasAbstract: "Index signatures cannot have the 'abstract' modifier.",
      IndexSignatureHasAccessibility: ({
        modifier
      }) => `Index signatures cannot have an accessibility modifier ('${modifier}').`,
      IndexSignatureHasDeclare: "Index signatures cannot have the 'declare' modifier.",
      IndexSignatureHasOverride: "'override' modifier cannot appear on an index signature.",
      IndexSignatureHasStatic: "Index signatures cannot have the 'static' modifier.",
      InitializerNotAllowedInAmbientContext: "Initializers are not allowed in ambient contexts.",
      InvalidHeritageClauseType: ({
        token
      }) => `'${token}' list can only include identifiers or qualified-names with optional type arguments.`,
      InvalidModifierOnAwaitUsingDeclaration: (modifier) => `'${modifier}' modifier cannot appear on an await using declaration.`,
      InvalidModifierOnTypeMember: ({
        modifier
      }) => `'${modifier}' modifier cannot appear on a type member.`,
      InvalidModifierOnTypeParameter: ({
        modifier
      }) => `'${modifier}' modifier cannot appear on a type parameter.`,
      InvalidModifierOnTypeParameterPositions: ({
        modifier
      }) => `'${modifier}' modifier can only appear on a type parameter of a class, interface or type alias.`,
      InvalidModifierOnUsingDeclaration: (modifier) => `'${modifier}' modifier cannot appear on a using declaration.`,
      InvalidModifiersOrder: ({
        orderedModifiers
      }) => `'${orderedModifiers[0]}' modifier must precede '${orderedModifiers[1]}' modifier.`,
      InvalidPropertyAccessAfterInstantiationExpression: "Invalid property access after an instantiation expression. You can either wrap the instantiation expression in parentheses, or delete the type arguments.",
      InvalidTupleMemberLabel: "Tuple members must be labeled with a simple identifier.",
      MissingInterfaceName: "'interface' declarations must be followed by an identifier.",
      NonAbstractClassHasAbstractMethod: "Abstract methods can only appear within an abstract class.",
      NonClassMethodPropertyHasAbstractModifier: "'abstract' modifier can only appear on a class, method, or property declaration.",
      OptionalTypeBeforeRequired: "A required element cannot follow an optional element.",
      OverrideNotInSubClass: "This member cannot have an 'override' modifier because its containing class does not extend another class.",
      PatternIsOptional: "A binding pattern parameter cannot be optional in an implementation signature.",
      PrivateElementHasAbstract: "Private elements cannot have the 'abstract' modifier.",
      PrivateElementHasAccessibility: ({
        modifier
      }) => `Private elements cannot have an accessibility modifier ('${modifier}').`,
      ReadonlyForMethodSignature: "'readonly' modifier can only appear on a property declaration or index signature.",
      ReservedArrowTypeParam: "This syntax is reserved in files with the .mts or .cts extension. Add a trailing comma, as in `<T,>() => ...`.",
      ReservedTypeAssertion: "This syntax is reserved in files with the .mts or .cts extension. Use an `as` expression instead.",
      SetAccessorCannotHaveOptionalParameter: "A 'set' accessor cannot have an optional parameter.",
      SetAccessorCannotHaveRestParameter: "A 'set' accessor cannot have rest parameter.",
      SetAccessorCannotHaveReturnType: "A 'set' accessor cannot have a return type annotation.",
      SingleTypeParameterWithoutTrailingComma: ({
        typeParameterName
      }) => `Single type parameter ${typeParameterName} should have a trailing comma. Example usage: <${typeParameterName},>.`,
      StaticBlockCannotHaveModifier: "Static class blocks cannot have any modifier.",
      TupleOptionalAfterType: "A labeled tuple optional element must be declared using a question mark after the name and before the colon (`name?: type`), rather than after the type (`name: type?`).",
      TypeAnnotationAfterAssign: "Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.",
      TypeImportCannotSpecifyDefaultAndNamed: "A type-only import can specify a default import or named bindings, but not both.",
      TypeModifierIsUsedInTypeExports: "The 'type' modifier cannot be used on a named export when 'export type' is used on its export statement.",
      TypeModifierIsUsedInTypeImports: "The 'type' modifier cannot be used on a named import when 'import type' is used on its import statement.",
      UnexpectedParameterModifier: "A parameter property is only allowed in a constructor implementation.",
      UnexpectedReadonly: "'readonly' type modifier is only permitted on array and tuple literal types.",
      UnexpectedTypeAnnotation: "Did not expect a type annotation here.",
      UnexpectedTypeCastInParameter: "Unexpected type cast in parameter position.",
      UnsupportedImportTypeArgument: "Argument in a type import must be a string literal.",
      UnsupportedParameterPropertyKind: "A parameter property may not be declared using a binding pattern.",
      UnsupportedSignatureParameterKind: ({
        type
      }) => `Name in a signature must be an Identifier, ObjectPattern or ArrayPattern, instead got ${type}.`,
      UsingDeclarationInAmbientContext: (kind) => `'${kind}' declarations are not allowed in ambient contexts.`
    });
    function keywordTypeFromName(value) {
      switch (value) {
        case "any":
          return "TSAnyKeyword";
        case "boolean":
          return "TSBooleanKeyword";
        case "bigint":
          return "TSBigIntKeyword";
        case "never":
          return "TSNeverKeyword";
        case "number":
          return "TSNumberKeyword";
        case "object":
          return "TSObjectKeyword";
        case "string":
          return "TSStringKeyword";
        case "symbol":
          return "TSSymbolKeyword";
        case "undefined":
          return "TSUndefinedKeyword";
        case "unknown":
          return "TSUnknownKeyword";
        default:
          return void 0;
      }
    }
    function tsIsAccessModifier(modifier) {
      return modifier === "private" || modifier === "public" || modifier === "protected";
    }
    function tsIsVarianceAnnotations(modifier) {
      return modifier === "in" || modifier === "out";
    }
    var typescript = (superClass) => class TypeScriptParserMixin extends superClass {
      constructor(...args) {
        super(...args);
        this.tsParseInOutModifiers = this.tsParseModifiers.bind(this, {
          allowedModifiers: ["in", "out"],
          disallowedModifiers: ["const", "public", "private", "protected", "readonly", "declare", "abstract", "override"],
          errorTemplate: TSErrors.InvalidModifierOnTypeParameter
        });
        this.tsParseConstModifier = this.tsParseModifiers.bind(this, {
          allowedModifiers: ["const"],
          disallowedModifiers: ["in", "out"],
          errorTemplate: TSErrors.InvalidModifierOnTypeParameterPositions
        });
        this.tsParseInOutConstModifiers = this.tsParseModifiers.bind(this, {
          allowedModifiers: ["in", "out", "const"],
          disallowedModifiers: ["public", "private", "protected", "readonly", "declare", "abstract", "override"],
          errorTemplate: TSErrors.InvalidModifierOnTypeParameter
        });
      }
      getScopeHandler() {
        return TypeScriptScopeHandler;
      }
      tsIsIdentifier() {
        return tokenIsIdentifier(this.state.type);
      }
      tsTokenCanFollowModifier() {
        return this.match(0) || this.match(5) || this.match(55) || this.match(21) || this.match(139) || this.isLiteralPropertyName();
      }
      tsNextTokenOnSameLineAndCanFollowModifier() {
        this.next();
        if (this.hasPrecedingLineBreak()) {
          return false;
        }
        return this.tsTokenCanFollowModifier();
      }
      tsNextTokenCanFollowModifier() {
        if (this.match(106)) {
          this.next();
          return this.tsTokenCanFollowModifier();
        }
        return this.tsNextTokenOnSameLineAndCanFollowModifier();
      }
      tsParseModifier(allowedModifiers, stopOnStartOfClassStaticBlock, hasSeenStaticModifier) {
        if (!tokenIsIdentifier(this.state.type) && this.state.type !== 58 && this.state.type !== 75) {
          return void 0;
        }
        const modifier = this.state.value;
        if (allowedModifiers.includes(modifier)) {
          if (hasSeenStaticModifier && this.match(106)) {
            return void 0;
          }
          if (stopOnStartOfClassStaticBlock && this.tsIsStartOfStaticBlocks()) {
            return void 0;
          }
          if (this.tsTryParse(this.tsNextTokenCanFollowModifier.bind(this))) {
            return modifier;
          }
        }
        return void 0;
      }
      tsParseModifiers({
        allowedModifiers,
        disallowedModifiers,
        stopOnStartOfClassStaticBlock,
        errorTemplate = TSErrors.InvalidModifierOnTypeMember
      }, modified) {
        const enforceOrder = (loc, modifier, before, after) => {
          if (modifier === before && modified[after]) {
            this.raise(TSErrors.InvalidModifiersOrder, loc, {
              orderedModifiers: [before, after]
            });
          }
        };
        const incompatible = (loc, modifier, mod1, mod2) => {
          if (modified[mod1] && modifier === mod2 || modified[mod2] && modifier === mod1) {
            this.raise(TSErrors.IncompatibleModifiers, loc, {
              modifiers: [mod1, mod2]
            });
          }
        };
        for (; ; ) {
          const {
            startLoc
          } = this.state;
          const modifier = this.tsParseModifier(allowedModifiers.concat(disallowedModifiers != null ? disallowedModifiers : []), stopOnStartOfClassStaticBlock, modified.static);
          if (!modifier)
            break;
          if (tsIsAccessModifier(modifier)) {
            if (modified.accessibility) {
              this.raise(TSErrors.DuplicateAccessibilityModifier, startLoc, {
                modifier
              });
            } else {
              enforceOrder(startLoc, modifier, modifier, "override");
              enforceOrder(startLoc, modifier, modifier, "static");
              enforceOrder(startLoc, modifier, modifier, "readonly");
              modified.accessibility = modifier;
            }
          } else if (tsIsVarianceAnnotations(modifier)) {
            if (modified[modifier]) {
              this.raise(TSErrors.DuplicateModifier, startLoc, {
                modifier
              });
            }
            modified[modifier] = true;
            enforceOrder(startLoc, modifier, "in", "out");
          } else {
            if (hasOwnProperty.call(modified, modifier)) {
              this.raise(TSErrors.DuplicateModifier, startLoc, {
                modifier
              });
            } else {
              enforceOrder(startLoc, modifier, "static", "readonly");
              enforceOrder(startLoc, modifier, "static", "override");
              enforceOrder(startLoc, modifier, "override", "readonly");
              enforceOrder(startLoc, modifier, "abstract", "override");
              incompatible(startLoc, modifier, "declare", "override");
              incompatible(startLoc, modifier, "static", "abstract");
            }
            modified[modifier] = true;
          }
          if (disallowedModifiers != null && disallowedModifiers.includes(modifier)) {
            this.raise(errorTemplate, startLoc, {
              modifier
            });
          }
        }
      }
      tsIsListTerminator(kind) {
        switch (kind) {
          case "EnumMembers":
          case "TypeMembers":
            return this.match(8);
          case "HeritageClauseElement":
            return this.match(5);
          case "TupleElementTypes":
            return this.match(3);
          case "TypeParametersOrArguments":
            return this.match(48);
        }
      }
      tsParseList(kind, parseElement) {
        const result = [];
        while (!this.tsIsListTerminator(kind)) {
          result.push(parseElement());
        }
        return result;
      }
      tsParseDelimitedList(kind, parseElement, refTrailingCommaPos) {
        return nonNull(this.tsParseDelimitedListWorker(kind, parseElement, true, refTrailingCommaPos));
      }
      tsParseDelimitedListWorker(kind, parseElement, expectSuccess, refTrailingCommaPos) {
        const result = [];
        let trailingCommaPos = -1;
        for (; ; ) {
          if (this.tsIsListTerminator(kind)) {
            break;
          }
          trailingCommaPos = -1;
          const element = parseElement();
          if (element == null) {
            return void 0;
          }
          result.push(element);
          if (this.eat(12)) {
            trailingCommaPos = this.state.lastTokStartLoc.index;
            continue;
          }
          if (this.tsIsListTerminator(kind)) {
            break;
          }
          if (expectSuccess) {
            this.expect(12);
          }
          return void 0;
        }
        if (refTrailingCommaPos) {
          refTrailingCommaPos.value = trailingCommaPos;
        }
        return result;
      }
      tsParseBracketedList(kind, parseElement, bracket, skipFirstToken, refTrailingCommaPos) {
        if (!skipFirstToken) {
          if (bracket) {
            this.expect(0);
          } else {
            this.expect(47);
          }
        }
        const result = this.tsParseDelimitedList(kind, parseElement, refTrailingCommaPos);
        if (bracket) {
          this.expect(3);
        } else {
          this.expect(48);
        }
        return result;
      }
      tsParseImportType() {
        const node = this.startNode();
        this.expect(83);
        this.expect(10);
        if (!this.match(134)) {
          this.raise(TSErrors.UnsupportedImportTypeArgument, this.state.startLoc);
          node.argument = super.parseExprAtom();
        } else {
          node.argument = this.parseStringLiteral(this.state.value);
        }
        if (this.eat(12)) {
          node.options = this.tsParseImportTypeOptions();
        } else {
          node.options = null;
        }
        this.expect(11);
        if (this.eat(16)) {
          node.qualifier = this.tsParseEntityName(1 | 2);
        }
        if (this.match(47)) {
          node.typeParameters = this.tsParseTypeArguments();
        }
        return this.finishNode(node, "TSImportType");
      }
      tsParseImportTypeOptions() {
        const node = this.startNode();
        this.expect(5);
        const withProperty = this.startNode();
        if (this.isContextual(76)) {
          withProperty.method = false;
          withProperty.key = this.parseIdentifier(true);
          withProperty.computed = false;
          withProperty.shorthand = false;
        } else {
          this.unexpected(null, 76);
        }
        this.expect(14);
        withProperty.value = this.tsParseImportTypeWithPropertyValue();
        node.properties = [this.finishObjectProperty(withProperty)];
        this.eat(12);
        this.expect(8);
        return this.finishNode(node, "ObjectExpression");
      }
      tsParseImportTypeWithPropertyValue() {
        const node = this.startNode();
        const properties = [];
        this.expect(5);
        while (!this.match(8)) {
          const type = this.state.type;
          if (tokenIsIdentifier(type) || type === 134) {
            properties.push(super.parsePropertyDefinition(null));
          } else {
            this.unexpected();
          }
          this.eat(12);
        }
        node.properties = properties;
        this.next();
        return this.finishNode(node, "ObjectExpression");
      }
      tsParseEntityName(flags) {
        let entity;
        if (flags & 1 && this.match(78)) {
          if (flags & 2) {
            entity = this.parseIdentifier(true);
          } else {
            const node = this.startNode();
            this.next();
            entity = this.finishNode(node, "ThisExpression");
          }
        } else {
          entity = this.parseIdentifier(!!(flags & 1));
        }
        while (this.eat(16)) {
          const node = this.startNodeAtNode(entity);
          node.left = entity;
          node.right = this.parseIdentifier(!!(flags & 1));
          entity = this.finishNode(node, "TSQualifiedName");
        }
        return entity;
      }
      tsParseTypeReference() {
        const node = this.startNode();
        node.typeName = this.tsParseEntityName(1);
        if (!this.hasPrecedingLineBreak() && this.match(47)) {
          node.typeParameters = this.tsParseTypeArguments();
        }
        return this.finishNode(node, "TSTypeReference");
      }
      tsParseThisTypePredicate(lhs) {
        this.next();
        const node = this.startNodeAtNode(lhs);
        node.parameterName = lhs;
        node.typeAnnotation = this.tsParseTypeAnnotation(false);
        node.asserts = false;
        return this.finishNode(node, "TSTypePredicate");
      }
      tsParseThisTypeNode() {
        const node = this.startNode();
        this.next();
        return this.finishNode(node, "TSThisType");
      }
      tsParseTypeQuery() {
        const node = this.startNode();
        this.expect(87);
        if (this.match(83)) {
          node.exprName = this.tsParseImportType();
        } else {
          node.exprName = this.tsParseEntityName(1 | 2);
        }
        if (!this.hasPrecedingLineBreak() && this.match(47)) {
          node.typeParameters = this.tsParseTypeArguments();
        }
        return this.finishNode(node, "TSTypeQuery");
      }
      tsParseTypeParameter(parseModifiers) {
        const node = this.startNode();
        parseModifiers(node);
        node.name = this.tsParseTypeParameterName();
        node.constraint = this.tsEatThenParseType(81);
        node.default = this.tsEatThenParseType(29);
        return this.finishNode(node, "TSTypeParameter");
      }
      tsTryParseTypeParameters(parseModifiers) {
        if (this.match(47)) {
          return this.tsParseTypeParameters(parseModifiers);
        }
      }
      tsParseTypeParameters(parseModifiers) {
        const node = this.startNode();
        if (this.match(47) || this.match(143)) {
          this.next();
        } else {
          this.unexpected();
        }
        const refTrailingCommaPos = {
          value: -1
        };
        node.params = this.tsParseBracketedList("TypeParametersOrArguments", this.tsParseTypeParameter.bind(this, parseModifiers), false, true, refTrailingCommaPos);
        if (node.params.length === 0) {
          this.raise(TSErrors.EmptyTypeParameters, node);
        }
        if (refTrailingCommaPos.value !== -1) {
          this.addExtra(node, "trailingComma", refTrailingCommaPos.value);
        }
        return this.finishNode(node, "TSTypeParameterDeclaration");
      }
      tsFillSignature(returnToken, signature) {
        const returnTokenRequired = returnToken === 19;
        const paramsKey = "parameters";
        const returnTypeKey = "typeAnnotation";
        signature.typeParameters = this.tsTryParseTypeParameters(this.tsParseConstModifier);
        this.expect(10);
        signature[paramsKey] = this.tsParseBindingListForSignature();
        if (returnTokenRequired) {
          signature[returnTypeKey] = this.tsParseTypeOrTypePredicateAnnotation(returnToken);
        } else if (this.match(returnToken)) {
          signature[returnTypeKey] = this.tsParseTypeOrTypePredicateAnnotation(returnToken);
        }
      }
      tsParseBindingListForSignature() {
        const list = super.parseBindingList(11, 41, 2);
        for (const pattern of list) {
          const {
            type
          } = pattern;
          if (type === "AssignmentPattern" || type === "TSParameterProperty") {
            this.raise(TSErrors.UnsupportedSignatureParameterKind, pattern, {
              type
            });
          }
        }
        return list;
      }
      tsParseTypeMemberSemicolon() {
        if (!this.eat(12) && !this.isLineTerminator()) {
          this.expect(13);
        }
      }
      tsParseSignatureMember(kind, node) {
        this.tsFillSignature(14, node);
        this.tsParseTypeMemberSemicolon();
        return this.finishNode(node, kind);
      }
      tsIsUnambiguouslyIndexSignature() {
        this.next();
        if (tokenIsIdentifier(this.state.type)) {
          this.next();
          return this.match(14);
        }
        return false;
      }
      tsTryParseIndexSignature(node) {
        if (!(this.match(0) && this.tsLookAhead(this.tsIsUnambiguouslyIndexSignature.bind(this)))) {
          return;
        }
        this.expect(0);
        const id = this.parseIdentifier();
        id.typeAnnotation = this.tsParseTypeAnnotation();
        this.resetEndLocation(id);
        this.expect(3);
        node.parameters = [id];
        const type = this.tsTryParseTypeAnnotation();
        if (type)
          node.typeAnnotation = type;
        this.tsParseTypeMemberSemicolon();
        return this.finishNode(node, "TSIndexSignature");
      }
      tsParsePropertyOrMethodSignature(node, readonly) {
        if (this.eat(17))
          node.optional = true;
        if (this.match(10) || this.match(47)) {
          if (readonly) {
            this.raise(TSErrors.ReadonlyForMethodSignature, node);
          }
          const method = node;
          if (method.kind && this.match(47)) {
            this.raise(TSErrors.AccessorCannotHaveTypeParameters, this.state.curPosition());
          }
          this.tsFillSignature(14, method);
          this.tsParseTypeMemberSemicolon();
          const paramsKey = "parameters";
          const returnTypeKey = "typeAnnotation";
          if (method.kind === "get") {
            if (method[paramsKey].length > 0) {
              this.raise(Errors.BadGetterArity, this.state.curPosition());
              if (this.isThisParam(method[paramsKey][0])) {
                this.raise(TSErrors.AccessorCannotDeclareThisParameter, this.state.curPosition());
              }
            }
          } else if (method.kind === "set") {
            if (method[paramsKey].length !== 1) {
              this.raise(Errors.BadSetterArity, this.state.curPosition());
            } else {
              const firstParameter = method[paramsKey][0];
              if (this.isThisParam(firstParameter)) {
                this.raise(TSErrors.AccessorCannotDeclareThisParameter, this.state.curPosition());
              }
              if (firstParameter.type === "Identifier" && firstParameter.optional) {
                this.raise(TSErrors.SetAccessorCannotHaveOptionalParameter, this.state.curPosition());
              }
              if (firstParameter.type === "RestElement") {
                this.raise(TSErrors.SetAccessorCannotHaveRestParameter, this.state.curPosition());
              }
            }
            if (method[returnTypeKey]) {
              this.raise(TSErrors.SetAccessorCannotHaveReturnType, method[returnTypeKey]);
            }
          } else {
            method.kind = "method";
          }
          return this.finishNode(method, "TSMethodSignature");
        } else {
          const property = node;
          if (readonly)
            property.readonly = true;
          const type = this.tsTryParseTypeAnnotation();
          if (type)
            property.typeAnnotation = type;
          this.tsParseTypeMemberSemicolon();
          return this.finishNode(property, "TSPropertySignature");
        }
      }
      tsParseTypeMember() {
        const node = this.startNode();
        if (this.match(10) || this.match(47)) {
          return this.tsParseSignatureMember("TSCallSignatureDeclaration", node);
        }
        if (this.match(77)) {
          const id = this.startNode();
          this.next();
          if (this.match(10) || this.match(47)) {
            return this.tsParseSignatureMember("TSConstructSignatureDeclaration", node);
          } else {
            node.key = this.createIdentifier(id, "new");
            return this.tsParsePropertyOrMethodSignature(node, false);
          }
        }
        this.tsParseModifiers({
          allowedModifiers: ["readonly"],
          disallowedModifiers: ["declare", "abstract", "private", "protected", "public", "static", "override"]
        }, node);
        const idx = this.tsTryParseIndexSignature(node);
        if (idx) {
          return idx;
        }
        super.parsePropertyName(node);
        if (!node.computed && node.key.type === "Identifier" && (node.key.name === "get" || node.key.name === "set") && this.tsTokenCanFollowModifier()) {
          node.kind = node.key.name;
          super.parsePropertyName(node);
          if (!this.match(10) && !this.match(47)) {
            this.unexpected(null, 10);
          }
        }
        return this.tsParsePropertyOrMethodSignature(node, !!node.readonly);
      }
      tsParseTypeLiteral() {
        const node = this.startNode();
        node.members = this.tsParseObjectTypeMembers();
        return this.finishNode(node, "TSTypeLiteral");
      }
      tsParseObjectTypeMembers() {
        this.expect(5);
        const members = this.tsParseList("TypeMembers", this.tsParseTypeMember.bind(this));
        this.expect(8);
        return members;
      }
      tsIsStartOfMappedType() {
        this.next();
        if (this.eat(53)) {
          return this.isContextual(122);
        }
        if (this.isContextual(122)) {
          this.next();
        }
        if (!this.match(0)) {
          return false;
        }
        this.next();
        if (!this.tsIsIdentifier()) {
          return false;
        }
        this.next();
        return this.match(58);
      }
      tsParseMappedType() {
        const node = this.startNode();
        this.expect(5);
        if (this.match(53)) {
          node.readonly = this.state.value;
          this.next();
          this.expectContextual(122);
        } else if (this.eatContextual(122)) {
          node.readonly = true;
        }
        this.expect(0);
        const typeParameter = this.startNode();
        typeParameter.name = this.tsParseTypeParameterName();
        typeParameter.constraint = this.tsExpectThenParseType(58);
        node.typeParameter = this.finishNode(typeParameter, "TSTypeParameter");
        node.nameType = this.eatContextual(93) ? this.tsParseType() : null;
        this.expect(3);
        if (this.match(53)) {
          node.optional = this.state.value;
          this.next();
          this.expect(17);
        } else if (this.eat(17)) {
          node.optional = true;
        }
        node.typeAnnotation = this.tsTryParseType();
        this.semicolon();
        this.expect(8);
        return this.finishNode(node, "TSMappedType");
      }
      tsParseTupleType() {
        const node = this.startNode();
        node.elementTypes = this.tsParseBracketedList("TupleElementTypes", this.tsParseTupleElementType.bind(this), true, false);
        let seenOptionalElement = false;
        node.elementTypes.forEach((elementNode) => {
          const {
            type
          } = elementNode;
          if (seenOptionalElement && type !== "TSRestType" && type !== "TSOptionalType" && !(type === "TSNamedTupleMember" && elementNode.optional)) {
            this.raise(TSErrors.OptionalTypeBeforeRequired, elementNode);
          }
          seenOptionalElement || (seenOptionalElement = type === "TSNamedTupleMember" && elementNode.optional || type === "TSOptionalType");
        });
        return this.finishNode(node, "TSTupleType");
      }
      tsParseTupleElementType() {
        const restStartLoc = this.state.startLoc;
        const rest = this.eat(21);
        const {
          startLoc
        } = this.state;
        let labeled;
        let label;
        let optional;
        let type;
        const isWord = tokenIsKeywordOrIdentifier(this.state.type);
        const chAfterWord = isWord ? this.lookaheadCharCode() : null;
        if (chAfterWord === 58) {
          labeled = true;
          optional = false;
          label = this.parseIdentifier(true);
          this.expect(14);
          type = this.tsParseType();
        } else if (chAfterWord === 63) {
          optional = true;
          const wordName = this.state.value;
          const typeOrLabel = this.tsParseNonArrayType();
          if (this.lookaheadCharCode() === 58) {
            labeled = true;
            label = this.createIdentifier(this.startNodeAt(startLoc), wordName);
            this.expect(17);
            this.expect(14);
            type = this.tsParseType();
          } else {
            labeled = false;
            type = typeOrLabel;
            this.expect(17);
          }
        } else {
          type = this.tsParseType();
          optional = this.eat(17);
          labeled = this.eat(14);
        }
        if (labeled) {
          let labeledNode;
          if (label) {
            labeledNode = this.startNodeAt(startLoc);
            labeledNode.optional = optional;
            labeledNode.label = label;
            labeledNode.elementType = type;
            if (this.eat(17)) {
              labeledNode.optional = true;
              this.raise(TSErrors.TupleOptionalAfterType, this.state.lastTokStartLoc);
            }
          } else {
            labeledNode = this.startNodeAt(startLoc);
            labeledNode.optional = optional;
            this.raise(TSErrors.InvalidTupleMemberLabel, type);
            labeledNode.label = type;
            labeledNode.elementType = this.tsParseType();
          }
          type = this.finishNode(labeledNode, "TSNamedTupleMember");
        } else if (optional) {
          const optionalTypeNode = this.startNodeAt(startLoc);
          optionalTypeNode.typeAnnotation = type;
          type = this.finishNode(optionalTypeNode, "TSOptionalType");
        }
        if (rest) {
          const restNode = this.startNodeAt(restStartLoc);
          restNode.typeAnnotation = type;
          type = this.finishNode(restNode, "TSRestType");
        }
        return type;
      }
      tsParseParenthesizedType() {
        const node = this.startNode();
        this.expect(10);
        node.typeAnnotation = this.tsParseType();
        this.expect(11);
        return this.finishNode(node, "TSParenthesizedType");
      }
      tsParseFunctionOrConstructorType(type, abstract) {
        const node = this.startNode();
        if (type === "TSConstructorType") {
          node.abstract = !!abstract;
          if (abstract)
            this.next();
          this.next();
        }
        this.tsInAllowConditionalTypesContext(() => this.tsFillSignature(19, node));
        return this.finishNode(node, type);
      }
      tsParseLiteralTypeNode() {
        const node = this.startNode();
        switch (this.state.type) {
          case 135:
          case 136:
          case 134:
          case 85:
          case 86:
            node.literal = super.parseExprAtom();
            break;
          default:
            this.unexpected();
        }
        return this.finishNode(node, "TSLiteralType");
      }
      tsParseTemplateLiteralType() {
        const node = this.startNode();
        node.literal = super.parseTemplate(false);
        return this.finishNode(node, "TSLiteralType");
      }
      parseTemplateSubstitution() {
        if (this.state.inType)
          return this.tsParseType();
        return super.parseTemplateSubstitution();
      }
      tsParseThisTypeOrThisTypePredicate() {
        const thisKeyword = this.tsParseThisTypeNode();
        if (this.isContextual(116) && !this.hasPrecedingLineBreak()) {
          return this.tsParseThisTypePredicate(thisKeyword);
        } else {
          return thisKeyword;
        }
      }
      tsParseNonArrayType() {
        switch (this.state.type) {
          case 134:
          case 135:
          case 136:
          case 85:
          case 86:
            return this.tsParseLiteralTypeNode();
          case 53:
            if (this.state.value === "-") {
              const node = this.startNode();
              const nextToken = this.lookahead();
              if (nextToken.type !== 135 && nextToken.type !== 136) {
                this.unexpected();
              }
              node.literal = this.parseMaybeUnary();
              return this.finishNode(node, "TSLiteralType");
            }
            break;
          case 78:
            return this.tsParseThisTypeOrThisTypePredicate();
          case 87:
            return this.tsParseTypeQuery();
          case 83:
            return this.tsParseImportType();
          case 5:
            return this.tsLookAhead(this.tsIsStartOfMappedType.bind(this)) ? this.tsParseMappedType() : this.tsParseTypeLiteral();
          case 0:
            return this.tsParseTupleType();
          case 10:
            return this.tsParseParenthesizedType();
          case 25:
          case 24:
            return this.tsParseTemplateLiteralType();
          default: {
            const {
              type
            } = this.state;
            if (tokenIsIdentifier(type) || type === 88 || type === 84) {
              const nodeType = type === 88 ? "TSVoidKeyword" : type === 84 ? "TSNullKeyword" : keywordTypeFromName(this.state.value);
              if (nodeType !== void 0 && this.lookaheadCharCode() !== 46) {
                const node = this.startNode();
                this.next();
                return this.finishNode(node, nodeType);
              }
              return this.tsParseTypeReference();
            }
          }
        }
        throw this.unexpected();
      }
      tsParseArrayTypeOrHigher() {
        const {
          startLoc
        } = this.state;
        let type = this.tsParseNonArrayType();
        while (!this.hasPrecedingLineBreak() && this.eat(0)) {
          if (this.match(3)) {
            const node = this.startNodeAt(startLoc);
            node.elementType = type;
            this.expect(3);
            type = this.finishNode(node, "TSArrayType");
          } else {
            const node = this.startNodeAt(startLoc);
            node.objectType = type;
            node.indexType = this.tsParseType();
            this.expect(3);
            type = this.finishNode(node, "TSIndexedAccessType");
          }
        }
        return type;
      }
      tsParseTypeOperator() {
        const node = this.startNode();
        const operator = this.state.value;
        this.next();
        node.operator = operator;
        node.typeAnnotation = this.tsParseTypeOperatorOrHigher();
        if (operator === "readonly") {
          this.tsCheckTypeAnnotationForReadOnly(node);
        }
        return this.finishNode(node, "TSTypeOperator");
      }
      tsCheckTypeAnnotationForReadOnly(node) {
        switch (node.typeAnnotation.type) {
          case "TSTupleType":
          case "TSArrayType":
            return;
          default:
            this.raise(TSErrors.UnexpectedReadonly, node);
        }
      }
      tsParseInferType() {
        const node = this.startNode();
        this.expectContextual(115);
        const typeParameter = this.startNode();
        typeParameter.name = this.tsParseTypeParameterName();
        typeParameter.constraint = this.tsTryParse(() => this.tsParseConstraintForInferType());
        node.typeParameter = this.finishNode(typeParameter, "TSTypeParameter");
        return this.finishNode(node, "TSInferType");
      }
      tsParseConstraintForInferType() {
        if (this.eat(81)) {
          const constraint = this.tsInDisallowConditionalTypesContext(() => this.tsParseType());
          if (this.state.inDisallowConditionalTypesContext || !this.match(17)) {
            return constraint;
          }
        }
      }
      tsParseTypeOperatorOrHigher() {
        const isTypeOperator = tokenIsTSTypeOperator(this.state.type) && !this.state.containsEsc;
        return isTypeOperator ? this.tsParseTypeOperator() : this.isContextual(115) ? this.tsParseInferType() : this.tsInAllowConditionalTypesContext(() => this.tsParseArrayTypeOrHigher());
      }
      tsParseUnionOrIntersectionType(kind, parseConstituentType, operator) {
        const node = this.startNode();
        const hasLeadingOperator = this.eat(operator);
        const types2 = [];
        do {
          types2.push(parseConstituentType());
        } while (this.eat(operator));
        if (types2.length === 1 && !hasLeadingOperator) {
          return types2[0];
        }
        node.types = types2;
        return this.finishNode(node, kind);
      }
      tsParseIntersectionTypeOrHigher() {
        return this.tsParseUnionOrIntersectionType("TSIntersectionType", this.tsParseTypeOperatorOrHigher.bind(this), 45);
      }
      tsParseUnionTypeOrHigher() {
        return this.tsParseUnionOrIntersectionType("TSUnionType", this.tsParseIntersectionTypeOrHigher.bind(this), 43);
      }
      tsIsStartOfFunctionType() {
        if (this.match(47)) {
          return true;
        }
        return this.match(10) && this.tsLookAhead(this.tsIsUnambiguouslyStartOfFunctionType.bind(this));
      }
      tsSkipParameterStart() {
        if (tokenIsIdentifier(this.state.type) || this.match(78)) {
          this.next();
          return true;
        }
        if (this.match(5)) {
          const {
            errors
          } = this.state;
          const previousErrorCount = errors.length;
          try {
            this.parseObjectLike(8, true);
            return errors.length === previousErrorCount;
          } catch (_unused) {
            return false;
          }
        }
        if (this.match(0)) {
          this.next();
          const {
            errors
          } = this.state;
          const previousErrorCount = errors.length;
          try {
            super.parseBindingList(3, 93, 1);
            return errors.length === previousErrorCount;
          } catch (_unused2) {
            return false;
          }
        }
        return false;
      }
      tsIsUnambiguouslyStartOfFunctionType() {
        this.next();
        if (this.match(11) || this.match(21)) {
          return true;
        }
        if (this.tsSkipParameterStart()) {
          if (this.match(14) || this.match(12) || this.match(17) || this.match(29)) {
            return true;
          }
          if (this.match(11)) {
            this.next();
            if (this.match(19)) {
              return true;
            }
          }
        }
        return false;
      }
      tsParseTypeOrTypePredicateAnnotation(returnToken) {
        return this.tsInType(() => {
          const t = this.startNode();
          this.expect(returnToken);
          const node = this.startNode();
          const asserts = !!this.tsTryParse(this.tsParseTypePredicateAsserts.bind(this));
          if (asserts && this.match(78)) {
            let thisTypePredicate = this.tsParseThisTypeOrThisTypePredicate();
            if (thisTypePredicate.type === "TSThisType") {
              node.parameterName = thisTypePredicate;
              node.asserts = true;
              node.typeAnnotation = null;
              thisTypePredicate = this.finishNode(node, "TSTypePredicate");
            } else {
              this.resetStartLocationFromNode(thisTypePredicate, node);
              thisTypePredicate.asserts = true;
            }
            t.typeAnnotation = thisTypePredicate;
            return this.finishNode(t, "TSTypeAnnotation");
          }
          const typePredicateVariable = this.tsIsIdentifier() && this.tsTryParse(this.tsParseTypePredicatePrefix.bind(this));
          if (!typePredicateVariable) {
            if (!asserts) {
              return this.tsParseTypeAnnotation(false, t);
            }
            node.parameterName = this.parseIdentifier();
            node.asserts = asserts;
            node.typeAnnotation = null;
            t.typeAnnotation = this.finishNode(node, "TSTypePredicate");
            return this.finishNode(t, "TSTypeAnnotation");
          }
          const type = this.tsParseTypeAnnotation(false);
          node.parameterName = typePredicateVariable;
          node.typeAnnotation = type;
          node.asserts = asserts;
          t.typeAnnotation = this.finishNode(node, "TSTypePredicate");
          return this.finishNode(t, "TSTypeAnnotation");
        });
      }
      tsTryParseTypeOrTypePredicateAnnotation() {
        if (this.match(14)) {
          return this.tsParseTypeOrTypePredicateAnnotation(14);
        }
      }
      tsTryParseTypeAnnotation() {
        if (this.match(14)) {
          return this.tsParseTypeAnnotation();
        }
      }
      tsTryParseType() {
        return this.tsEatThenParseType(14);
      }
      tsParseTypePredicatePrefix() {
        const id = this.parseIdentifier();
        if (this.isContextual(116) && !this.hasPrecedingLineBreak()) {
          this.next();
          return id;
        }
      }
      tsParseTypePredicateAsserts() {
        if (this.state.type !== 109) {
          return false;
        }
        const containsEsc = this.state.containsEsc;
        this.next();
        if (!tokenIsIdentifier(this.state.type) && !this.match(78)) {
          return false;
        }
        if (containsEsc) {
          this.raise(Errors.InvalidEscapedReservedWord, this.state.lastTokStartLoc, {
            reservedWord: "asserts"
          });
        }
        return true;
      }
      tsParseTypeAnnotation(eatColon = true, t = this.startNode()) {
        this.tsInType(() => {
          if (eatColon)
            this.expect(14);
          t.typeAnnotation = this.tsParseType();
        });
        return this.finishNode(t, "TSTypeAnnotation");
      }
      tsParseType() {
        assert(this.state.inType);
        const type = this.tsParseNonConditionalType();
        if (this.state.inDisallowConditionalTypesContext || this.hasPrecedingLineBreak() || !this.eat(81)) {
          return type;
        }
        const node = this.startNodeAtNode(type);
        node.checkType = type;
        node.extendsType = this.tsInDisallowConditionalTypesContext(() => this.tsParseNonConditionalType());
        this.expect(17);
        node.trueType = this.tsInAllowConditionalTypesContext(() => this.tsParseType());
        this.expect(14);
        node.falseType = this.tsInAllowConditionalTypesContext(() => this.tsParseType());
        return this.finishNode(node, "TSConditionalType");
      }
      isAbstractConstructorSignature() {
        return this.isContextual(124) && this.isLookaheadContextual("new");
      }
      tsParseNonConditionalType() {
        if (this.tsIsStartOfFunctionType()) {
          return this.tsParseFunctionOrConstructorType("TSFunctionType");
        }
        if (this.match(77)) {
          return this.tsParseFunctionOrConstructorType("TSConstructorType");
        } else if (this.isAbstractConstructorSignature()) {
          return this.tsParseFunctionOrConstructorType("TSConstructorType", true);
        }
        return this.tsParseUnionTypeOrHigher();
      }
      tsParseTypeAssertion() {
        if (this.getPluginOption("typescript", "disallowAmbiguousJSXLike")) {
          this.raise(TSErrors.ReservedTypeAssertion, this.state.startLoc);
        }
        const node = this.startNode();
        node.typeAnnotation = this.tsInType(() => {
          this.next();
          return this.match(75) ? this.tsParseTypeReference() : this.tsParseType();
        });
        this.expect(48);
        node.expression = this.parseMaybeUnary();
        return this.finishNode(node, "TSTypeAssertion");
      }
      tsParseHeritageClause(token) {
        const originalStartLoc = this.state.startLoc;
        const delimitedList = this.tsParseDelimitedList("HeritageClauseElement", () => {
          const node = this.startNode();
          node.expression = this.tsParseEntityName(1 | 2);
          if (this.match(47)) {
            node.typeParameters = this.tsParseTypeArguments();
          }
          return this.finishNode(node, "TSExpressionWithTypeArguments");
        });
        if (!delimitedList.length) {
          this.raise(TSErrors.EmptyHeritageClauseType, originalStartLoc, {
            token
          });
        }
        return delimitedList;
      }
      tsParseInterfaceDeclaration(node, properties = {}) {
        if (this.hasFollowingLineBreak())
          return null;
        this.expectContextual(129);
        if (properties.declare)
          node.declare = true;
        if (tokenIsIdentifier(this.state.type)) {
          node.id = this.parseIdentifier();
          this.checkIdentifier(node.id, 130);
        } else {
          node.id = null;
          this.raise(TSErrors.MissingInterfaceName, this.state.startLoc);
        }
        node.typeParameters = this.tsTryParseTypeParameters(this.tsParseInOutConstModifiers);
        if (this.eat(81)) {
          node.extends = this.tsParseHeritageClause("extends");
        }
        const body = this.startNode();
        body.body = this.tsInType(this.tsParseObjectTypeMembers.bind(this));
        node.body = this.finishNode(body, "TSInterfaceBody");
        return this.finishNode(node, "TSInterfaceDeclaration");
      }
      tsParseTypeAliasDeclaration(node) {
        node.id = this.parseIdentifier();
        this.checkIdentifier(node.id, 2);
        node.typeAnnotation = this.tsInType(() => {
          node.typeParameters = this.tsTryParseTypeParameters(this.tsParseInOutModifiers);
          this.expect(29);
          if (this.isContextual(114) && this.lookaheadCharCode() !== 46) {
            const node2 = this.startNode();
            this.next();
            return this.finishNode(node2, "TSIntrinsicKeyword");
          }
          return this.tsParseType();
        });
        this.semicolon();
        return this.finishNode(node, "TSTypeAliasDeclaration");
      }
      tsInTopLevelContext(cb) {
        if (this.curContext() !== types.brace) {
          const oldContext = this.state.context;
          this.state.context = [oldContext[0]];
          try {
            return cb();
          } finally {
            this.state.context = oldContext;
          }
        } else {
          return cb();
        }
      }
      tsInType(cb) {
        const oldInType = this.state.inType;
        this.state.inType = true;
        try {
          return cb();
        } finally {
          this.state.inType = oldInType;
        }
      }
      tsInDisallowConditionalTypesContext(cb) {
        const oldInDisallowConditionalTypesContext = this.state.inDisallowConditionalTypesContext;
        this.state.inDisallowConditionalTypesContext = true;
        try {
          return cb();
        } finally {
          this.state.inDisallowConditionalTypesContext = oldInDisallowConditionalTypesContext;
        }
      }
      tsInAllowConditionalTypesContext(cb) {
        const oldInDisallowConditionalTypesContext = this.state.inDisallowConditionalTypesContext;
        this.state.inDisallowConditionalTypesContext = false;
        try {
          return cb();
        } finally {
          this.state.inDisallowConditionalTypesContext = oldInDisallowConditionalTypesContext;
        }
      }
      tsEatThenParseType(token) {
        if (this.match(token)) {
          return this.tsNextThenParseType();
        }
      }
      tsExpectThenParseType(token) {
        return this.tsInType(() => {
          this.expect(token);
          return this.tsParseType();
        });
      }
      tsNextThenParseType() {
        return this.tsInType(() => {
          this.next();
          return this.tsParseType();
        });
      }
      tsParseEnumMember() {
        const node = this.startNode();
        node.id = this.match(134) ? super.parseStringLiteral(this.state.value) : this.parseIdentifier(true);
        if (this.eat(29)) {
          node.initializer = super.parseMaybeAssignAllowIn();
        }
        return this.finishNode(node, "TSEnumMember");
      }
      tsParseEnumDeclaration(node, properties = {}) {
        if (properties.const)
          node.const = true;
        if (properties.declare)
          node.declare = true;
        this.expectContextual(126);
        node.id = this.parseIdentifier();
        this.checkIdentifier(node.id, node.const ? 8971 : 8459);
        this.expect(5);
        node.members = this.tsParseDelimitedList("EnumMembers", this.tsParseEnumMember.bind(this));
        this.expect(8);
        return this.finishNode(node, "TSEnumDeclaration");
      }
      tsParseEnumBody() {
        const node = this.startNode();
        this.expect(5);
        node.members = this.tsParseDelimitedList("EnumMembers", this.tsParseEnumMember.bind(this));
        this.expect(8);
        return this.finishNode(node, "TSEnumBody");
      }
      tsParseModuleBlock() {
        const node = this.startNode();
        this.scope.enter(0);
        this.expect(5);
        super.parseBlockOrModuleBlockBody(node.body = [], void 0, true, 8);
        this.scope.exit();
        return this.finishNode(node, "TSModuleBlock");
      }
      tsParseModuleOrNamespaceDeclaration(node, nested = false) {
        node.id = this.parseIdentifier();
        if (!nested) {
          this.checkIdentifier(node.id, 1024);
        }
        if (this.eat(16)) {
          const inner = this.startNode();
          this.tsParseModuleOrNamespaceDeclaration(inner, true);
          node.body = inner;
        } else {
          this.scope.enter(1024);
          this.prodParam.enter(0);
          node.body = this.tsParseModuleBlock();
          this.prodParam.exit();
          this.scope.exit();
        }
        return this.finishNode(node, "TSModuleDeclaration");
      }
      tsParseAmbientExternalModuleDeclaration(node) {
        if (this.isContextual(112)) {
          node.kind = "global";
          node.global = true;
          node.id = this.parseIdentifier();
        } else if (this.match(134)) {
          node.kind = "module";
          node.id = super.parseStringLiteral(this.state.value);
        } else {
          this.unexpected();
        }
        if (this.match(5)) {
          this.scope.enter(1024);
          this.prodParam.enter(0);
          node.body = this.tsParseModuleBlock();
          this.prodParam.exit();
          this.scope.exit();
        } else {
          this.semicolon();
        }
        return this.finishNode(node, "TSModuleDeclaration");
      }
      tsParseImportEqualsDeclaration(node, maybeDefaultIdentifier, isExport) {
        node.isExport = isExport || false;
        node.id = maybeDefaultIdentifier || this.parseIdentifier();
        this.checkIdentifier(node.id, 4096);
        this.expect(29);
        const moduleReference = this.tsParseModuleReference();
        if (node.importKind === "type" && moduleReference.type !== "TSExternalModuleReference") {
          this.raise(TSErrors.ImportAliasHasImportType, moduleReference);
        }
        node.moduleReference = moduleReference;
        this.semicolon();
        return this.finishNode(node, "TSImportEqualsDeclaration");
      }
      tsIsExternalModuleReference() {
        return this.isContextual(119) && this.lookaheadCharCode() === 40;
      }
      tsParseModuleReference() {
        return this.tsIsExternalModuleReference() ? this.tsParseExternalModuleReference() : this.tsParseEntityName(0);
      }
      tsParseExternalModuleReference() {
        const node = this.startNode();
        this.expectContextual(119);
        this.expect(10);
        if (!this.match(134)) {
          this.unexpected();
        }
        node.expression = super.parseExprAtom();
        this.expect(11);
        this.sawUnambiguousESM = true;
        return this.finishNode(node, "TSExternalModuleReference");
      }
      tsLookAhead(f) {
        const state = this.state.clone();
        const res = f();
        this.state = state;
        return res;
      }
      tsTryParseAndCatch(f) {
        const result = this.tryParse((abort) => f() || abort());
        if (result.aborted || !result.node)
          return;
        if (result.error)
          this.state = result.failState;
        return result.node;
      }
      tsTryParse(f) {
        const state = this.state.clone();
        const result = f();
        if (result !== void 0 && result !== false) {
          return result;
        }
        this.state = state;
      }
      tsTryParseDeclare(node) {
        if (this.isLineTerminator()) {
          return;
        }
        const startType = this.state.type;
        return this.tsInAmbientContext(() => {
          switch (startType) {
            case 68:
              node.declare = true;
              return super.parseFunctionStatement(node, false, false);
            case 80:
              node.declare = true;
              return this.parseClass(node, true, false);
            case 126:
              return this.tsParseEnumDeclaration(node, {
                declare: true
              });
            case 112:
              return this.tsParseAmbientExternalModuleDeclaration(node);
            case 100:
              if (this.state.containsEsc) {
                return;
              }
            case 75:
            case 74:
              if (!this.match(75) || !this.isLookaheadContextual("enum")) {
                node.declare = true;
                return this.parseVarStatement(node, this.state.value, true);
              }
              this.expect(75);
              return this.tsParseEnumDeclaration(node, {
                const: true,
                declare: true
              });
            case 107:
              if (this.isUsing()) {
                this.raise(TSErrors.InvalidModifierOnUsingDeclaration, this.state.startLoc, "declare");
                node.declare = true;
                return this.parseVarStatement(node, "using", true);
              }
              break;
            case 96:
              if (this.isAwaitUsing()) {
                this.raise(TSErrors.InvalidModifierOnAwaitUsingDeclaration, this.state.startLoc, "declare");
                node.declare = true;
                this.next();
                return this.parseVarStatement(node, "await using", true);
              }
              break;
            case 129: {
              const result = this.tsParseInterfaceDeclaration(node, {
                declare: true
              });
              if (result)
                return result;
            }
            default:
              if (tokenIsIdentifier(startType)) {
                return this.tsParseDeclaration(node, this.state.type, true, null);
              }
          }
        });
      }
      tsTryParseExportDeclaration() {
        return this.tsParseDeclaration(this.startNode(), this.state.type, true, null);
      }
      tsParseDeclaration(node, type, next, decorators) {
        switch (type) {
          case 124:
            if (this.tsCheckLineTerminator(next) && (this.match(80) || tokenIsIdentifier(this.state.type))) {
              return this.tsParseAbstractDeclaration(node, decorators);
            }
            break;
          case 127:
            if (this.tsCheckLineTerminator(next)) {
              if (this.match(134)) {
                return this.tsParseAmbientExternalModuleDeclaration(node);
              } else if (tokenIsIdentifier(this.state.type)) {
                node.kind = "module";
                return this.tsParseModuleOrNamespaceDeclaration(node);
              }
            }
            break;
          case 128:
            if (this.tsCheckLineTerminator(next) && tokenIsIdentifier(this.state.type)) {
              node.kind = "namespace";
              return this.tsParseModuleOrNamespaceDeclaration(node);
            }
            break;
          case 130:
            if (this.tsCheckLineTerminator(next) && tokenIsIdentifier(this.state.type)) {
              return this.tsParseTypeAliasDeclaration(node);
            }
            break;
        }
      }
      tsCheckLineTerminator(next) {
        if (next) {
          if (this.hasFollowingLineBreak())
            return false;
          this.next();
          return true;
        }
        return !this.isLineTerminator();
      }
      tsTryParseGenericAsyncArrowFunction(startLoc) {
        if (!this.match(47))
          return;
        const oldMaybeInArrowParameters = this.state.maybeInArrowParameters;
        this.state.maybeInArrowParameters = true;
        const res = this.tsTryParseAndCatch(() => {
          const node = this.startNodeAt(startLoc);
          node.typeParameters = this.tsParseTypeParameters(this.tsParseConstModifier);
          super.parseFunctionParams(node);
          node.returnType = this.tsTryParseTypeOrTypePredicateAnnotation();
          this.expect(19);
          return node;
        });
        this.state.maybeInArrowParameters = oldMaybeInArrowParameters;
        if (!res)
          return;
        return super.parseArrowExpression(res, null, true);
      }
      tsParseTypeArgumentsInExpression() {
        if (this.reScan_lt() !== 47)
          return;
        return this.tsParseTypeArguments();
      }
      tsParseTypeArguments() {
        const node = this.startNode();
        node.params = this.tsInType(() => this.tsInTopLevelContext(() => {
          this.expect(47);
          return this.tsParseDelimitedList("TypeParametersOrArguments", this.tsParseType.bind(this));
        }));
        if (node.params.length === 0) {
          this.raise(TSErrors.EmptyTypeArguments, node);
        } else if (!this.state.inType && this.curContext() === types.brace) {
          this.reScan_lt_gt();
        }
        this.expect(48);
        return this.finishNode(node, "TSTypeParameterInstantiation");
      }
      tsIsDeclarationStart() {
        return tokenIsTSDeclarationStart(this.state.type);
      }
      isExportDefaultSpecifier() {
        if (this.tsIsDeclarationStart())
          return false;
        return super.isExportDefaultSpecifier();
      }
      parseBindingElement(flags, decorators) {
        const startLoc = decorators.length ? decorators[0].loc.start : this.state.startLoc;
        const modified = {};
        this.tsParseModifiers({
          allowedModifiers: ["public", "private", "protected", "override", "readonly"]
        }, modified);
        const accessibility = modified.accessibility;
        const override = modified.override;
        const readonly = modified.readonly;
        if (!(flags & 4) && (accessibility || readonly || override)) {
          this.raise(TSErrors.UnexpectedParameterModifier, startLoc);
        }
        const left = this.parseMaybeDefault();
        if (flags & 2) {
          this.parseFunctionParamType(left);
        }
        const elt = this.parseMaybeDefault(left.loc.start, left);
        if (accessibility || readonly || override) {
          const pp = this.startNodeAt(startLoc);
          if (decorators.length) {
            pp.decorators = decorators;
          }
          if (accessibility)
            pp.accessibility = accessibility;
          if (readonly)
            pp.readonly = readonly;
          if (override)
            pp.override = override;
          if (elt.type !== "Identifier" && elt.type !== "AssignmentPattern") {
            this.raise(TSErrors.UnsupportedParameterPropertyKind, pp);
          }
          pp.parameter = elt;
          return this.finishNode(pp, "TSParameterProperty");
        }
        if (decorators.length) {
          left.decorators = decorators;
        }
        return elt;
      }
      isSimpleParameter(node) {
        return node.type === "TSParameterProperty" && super.isSimpleParameter(node.parameter) || super.isSimpleParameter(node);
      }
      tsDisallowOptionalPattern(node) {
        for (const param of node.params) {
          if (param.type !== "Identifier" && param.optional && !this.state.isAmbientContext) {
            this.raise(TSErrors.PatternIsOptional, param);
          }
        }
      }
      setArrowFunctionParameters(node, params, trailingCommaLoc) {
        super.setArrowFunctionParameters(node, params, trailingCommaLoc);
        this.tsDisallowOptionalPattern(node);
      }
      parseFunctionBodyAndFinish(node, type, isMethod = false) {
        if (this.match(14)) {
          node.returnType = this.tsParseTypeOrTypePredicateAnnotation(14);
        }
        const bodilessType = type === "FunctionDeclaration" ? "TSDeclareFunction" : type === "ClassMethod" || type === "ClassPrivateMethod" ? "TSDeclareMethod" : void 0;
        if (bodilessType && !this.match(5) && this.isLineTerminator()) {
          return this.finishNode(node, bodilessType);
        }
        if (bodilessType === "TSDeclareFunction" && this.state.isAmbientContext) {
          this.raise(TSErrors.DeclareFunctionHasImplementation, node);
          if (node.declare) {
            return super.parseFunctionBodyAndFinish(node, bodilessType, isMethod);
          }
        }
        this.tsDisallowOptionalPattern(node);
        return super.parseFunctionBodyAndFinish(node, type, isMethod);
      }
      registerFunctionStatementId(node) {
        if (!node.body && node.id) {
          this.checkIdentifier(node.id, 1024);
        } else {
          super.registerFunctionStatementId(node);
        }
      }
      tsCheckForInvalidTypeCasts(items) {
        items.forEach((node) => {
          if ((node == null ? void 0 : node.type) === "TSTypeCastExpression") {
            this.raise(TSErrors.UnexpectedTypeAnnotation, node.typeAnnotation);
          }
        });
      }
      toReferencedList(exprList, isInParens) {
        this.tsCheckForInvalidTypeCasts(exprList);
        return exprList;
      }
      parseArrayLike(close, isTuple, refExpressionErrors) {
        const node = super.parseArrayLike(close, isTuple, refExpressionErrors);
        if (node.type === "ArrayExpression") {
          this.tsCheckForInvalidTypeCasts(node.elements);
        }
        return node;
      }
      parseSubscript(base, startLoc, noCalls, state) {
        if (!this.hasPrecedingLineBreak() && this.match(35)) {
          this.state.canStartJSXElement = false;
          this.next();
          const nonNullExpression = this.startNodeAt(startLoc);
          nonNullExpression.expression = base;
          return this.finishNode(nonNullExpression, "TSNonNullExpression");
        }
        let isOptionalCall = false;
        if (this.match(18) && this.lookaheadCharCode() === 60) {
          if (noCalls) {
            state.stop = true;
            return base;
          }
          state.optionalChainMember = isOptionalCall = true;
          this.next();
        }
        if (this.match(47) || this.match(51)) {
          let missingParenErrorLoc;
          const result = this.tsTryParseAndCatch(() => {
            if (!noCalls && this.atPossibleAsyncArrow(base)) {
              const asyncArrowFn = this.tsTryParseGenericAsyncArrowFunction(startLoc);
              if (asyncArrowFn) {
                state.stop = true;
                return asyncArrowFn;
              }
            }
            const typeArguments = this.tsParseTypeArgumentsInExpression();
            if (!typeArguments)
              return;
            if (isOptionalCall && !this.match(10)) {
              missingParenErrorLoc = this.state.curPosition();
              return;
            }
            if (tokenIsTemplate(this.state.type)) {
              const result2 = super.parseTaggedTemplateExpression(base, startLoc, state);
              result2.typeParameters = typeArguments;
              return result2;
            }
            if (!noCalls && this.eat(10)) {
              const node2 = this.startNodeAt(startLoc);
              node2.callee = base;
              node2.arguments = this.parseCallExpressionArguments();
              this.tsCheckForInvalidTypeCasts(node2.arguments);
              node2.typeParameters = typeArguments;
              if (state.optionalChainMember) {
                node2.optional = isOptionalCall;
              }
              return this.finishCallExpression(node2, state.optionalChainMember);
            }
            const tokenType = this.state.type;
            if (tokenType === 48 || tokenType === 52 || tokenType !== 10 && tokenType !== 93 && tokenType !== 120 && tokenCanStartExpression(tokenType) && !this.hasPrecedingLineBreak()) {
              return;
            }
            const node = this.startNodeAt(startLoc);
            node.expression = base;
            node.typeParameters = typeArguments;
            return this.finishNode(node, "TSInstantiationExpression");
          });
          if (missingParenErrorLoc) {
            this.unexpected(missingParenErrorLoc, 10);
          }
          if (result) {
            if (result.type === "TSInstantiationExpression") {
              if (this.match(16) || this.match(18) && this.lookaheadCharCode() !== 40) {
                this.raise(TSErrors.InvalidPropertyAccessAfterInstantiationExpression, this.state.startLoc);
              }
              if (!this.match(16) && !this.match(18)) {
                result.expression = super.stopParseSubscript(base, state);
              }
            }
            return result;
          }
        }
        return super.parseSubscript(base, startLoc, noCalls, state);
      }
      parseNewCallee(node) {
        var _callee$extra;
        super.parseNewCallee(node);
        const {
          callee
        } = node;
        if (callee.type === "TSInstantiationExpression" && !((_callee$extra = callee.extra) != null && _callee$extra.parenthesized)) {
          node.typeParameters = callee.typeParameters;
          node.callee = callee.expression;
        }
      }
      parseExprOp(left, leftStartLoc, minPrec) {
        let isSatisfies;
        if (tokenOperatorPrecedence(58) > minPrec && !this.hasPrecedingLineBreak() && (this.isContextual(93) || (isSatisfies = this.isContextual(120)))) {
          const node = this.startNodeAt(leftStartLoc);
          node.expression = left;
          node.typeAnnotation = this.tsInType(() => {
            this.next();
            if (this.match(75)) {
              if (isSatisfies) {
                this.raise(Errors.UnexpectedKeyword, this.state.startLoc, {
                  keyword: "const"
                });
              }
              return this.tsParseTypeReference();
            }
            return this.tsParseType();
          });
          this.finishNode(node, isSatisfies ? "TSSatisfiesExpression" : "TSAsExpression");
          this.reScan_lt_gt();
          return this.parseExprOp(node, leftStartLoc, minPrec);
        }
        return super.parseExprOp(left, leftStartLoc, minPrec);
      }
      checkReservedWord(word, startLoc, checkKeywords, isBinding) {
        if (!this.state.isAmbientContext) {
          super.checkReservedWord(word, startLoc, checkKeywords, isBinding);
        }
      }
      checkImportReflection(node) {
        super.checkImportReflection(node);
        if (node.module && node.importKind !== "value") {
          this.raise(TSErrors.ImportReflectionHasImportType, node.specifiers[0].loc.start);
        }
      }
      checkDuplicateExports() {
      }
      isPotentialImportPhase(isExport) {
        if (super.isPotentialImportPhase(isExport))
          return true;
        if (this.isContextual(130)) {
          const ch = this.lookaheadCharCode();
          return isExport ? ch === 123 || ch === 42 : ch !== 61;
        }
        return !isExport && this.isContextual(87);
      }
      applyImportPhase(node, isExport, phase, loc) {
        super.applyImportPhase(node, isExport, phase, loc);
        if (isExport) {
          node.exportKind = phase === "type" ? "type" : "value";
        } else {
          node.importKind = phase === "type" || phase === "typeof" ? phase : "value";
        }
      }
      parseImport(node) {
        if (this.match(134)) {
          node.importKind = "value";
          return super.parseImport(node);
        }
        let importNode;
        if (tokenIsIdentifier(this.state.type) && this.lookaheadCharCode() === 61) {
          node.importKind = "value";
          return this.tsParseImportEqualsDeclaration(node);
        } else if (this.isContextual(130)) {
          const maybeDefaultIdentifier = this.parseMaybeImportPhase(node, false);
          if (this.lookaheadCharCode() === 61) {
            return this.tsParseImportEqualsDeclaration(node, maybeDefaultIdentifier);
          } else {
            importNode = super.parseImportSpecifiersAndAfter(node, maybeDefaultIdentifier);
          }
        } else {
          importNode = super.parseImport(node);
        }
        if (importNode.importKind === "type" && importNode.specifiers.length > 1 && importNode.specifiers[0].type === "ImportDefaultSpecifier") {
          this.raise(TSErrors.TypeImportCannotSpecifyDefaultAndNamed, importNode);
        }
        return importNode;
      }
      parseExport(node, decorators) {
        if (this.match(83)) {
          const nodeImportEquals = node;
          this.next();
          let maybeDefaultIdentifier = null;
          if (this.isContextual(130) && this.isPotentialImportPhase(false)) {
            maybeDefaultIdentifier = this.parseMaybeImportPhase(nodeImportEquals, false);
          } else {
            nodeImportEquals.importKind = "value";
          }
          const declaration = this.tsParseImportEqualsDeclaration(nodeImportEquals, maybeDefaultIdentifier, true);
          return declaration;
        } else if (this.eat(29)) {
          const assign = node;
          assign.expression = super.parseExpression();
          this.semicolon();
          this.sawUnambiguousESM = true;
          return this.finishNode(assign, "TSExportAssignment");
        } else if (this.eatContextual(93)) {
          const decl = node;
          this.expectContextual(128);
          decl.id = this.parseIdentifier();
          this.semicolon();
          return this.finishNode(decl, "TSNamespaceExportDeclaration");
        } else {
          return super.parseExport(node, decorators);
        }
      }
      isAbstractClass() {
        return this.isContextual(124) && this.isLookaheadContextual("class");
      }
      parseExportDefaultExpression() {
        if (this.isAbstractClass()) {
          const cls = this.startNode();
          this.next();
          cls.abstract = true;
          return this.parseClass(cls, true, true);
        }
        if (this.match(129)) {
          const result = this.tsParseInterfaceDeclaration(this.startNode());
          if (result)
            return result;
        }
        return super.parseExportDefaultExpression();
      }
      parseVarStatement(node, kind, allowMissingInitializer = false) {
        const {
          isAmbientContext
        } = this.state;
        const declaration = super.parseVarStatement(node, kind, allowMissingInitializer || isAmbientContext);
        if (!isAmbientContext)
          return declaration;
        if (!node.declare && (kind === "using" || kind === "await using")) {
          this.raiseOverwrite(TSErrors.UsingDeclarationInAmbientContext, node, kind);
          return declaration;
        }
        for (const {
          id,
          init
        } of declaration.declarations) {
          if (!init)
            continue;
          if (kind === "var" || kind === "let" || !!id.typeAnnotation) {
            this.raise(TSErrors.InitializerNotAllowedInAmbientContext, init);
          } else if (!isValidAmbientConstInitializer(init, this.hasPlugin("estree"))) {
            this.raise(TSErrors.ConstInitializerMustBeStringOrNumericLiteralOrLiteralEnumReference, init);
          }
        }
        return declaration;
      }
      parseStatementContent(flags, decorators) {
        if (!this.state.containsEsc) {
          switch (this.state.type) {
            case 75: {
              if (this.isLookaheadContextual("enum")) {
                const node = this.startNode();
                this.expect(75);
                return this.tsParseEnumDeclaration(node, {
                  const: true
                });
              }
              break;
            }
            case 124:
            case 125: {
              if (this.nextTokenIsIdentifierAndNotTSRelationalOperatorOnSameLine()) {
                const token = this.state.type;
                const node = this.startNode();
                this.next();
                const declaration = token === 125 ? this.tsTryParseDeclare(node) : this.tsParseAbstractDeclaration(node, decorators);
                if (declaration) {
                  if (token === 125) {
                    declaration.declare = true;
                  }
                  return declaration;
                } else {
                  node.expression = this.createIdentifier(this.startNodeAt(node.loc.start), token === 125 ? "declare" : "abstract");
                  this.semicolon(false);
                  return this.finishNode(node, "ExpressionStatement");
                }
              }
              break;
            }
            case 126:
              return this.tsParseEnumDeclaration(this.startNode());
            case 112: {
              const nextCh = this.lookaheadCharCode();
              if (nextCh === 123) {
                const node = this.startNode();
                return this.tsParseAmbientExternalModuleDeclaration(node);
              }
              break;
            }
            case 129: {
              const result = this.tsParseInterfaceDeclaration(this.startNode());
              if (result)
                return result;
              break;
            }
            case 127: {
              if (this.nextTokenIsIdentifierOrStringLiteralOnSameLine()) {
                const node = this.startNode();
                this.next();
                return this.tsParseDeclaration(node, 127, false, decorators);
              }
              break;
            }
            case 128: {
              if (this.nextTokenIsIdentifierOnSameLine()) {
                const node = this.startNode();
                this.next();
                return this.tsParseDeclaration(node, 128, false, decorators);
              }
              break;
            }
            case 130: {
              if (this.nextTokenIsIdentifierOnSameLine()) {
                const node = this.startNode();
                this.next();
                return this.tsParseTypeAliasDeclaration(node);
              }
              break;
            }
          }
        }
        return super.parseStatementContent(flags, decorators);
      }
      parseAccessModifier() {
        return this.tsParseModifier(["public", "protected", "private"]);
      }
      tsHasSomeModifiers(member, modifiers) {
        return modifiers.some((modifier) => {
          if (tsIsAccessModifier(modifier)) {
            return member.accessibility === modifier;
          }
          return !!member[modifier];
        });
      }
      tsIsStartOfStaticBlocks() {
        return this.isContextual(106) && this.lookaheadCharCode() === 123;
      }
      parseClassMember(classBody, member, state) {
        const modifiers = ["declare", "private", "public", "protected", "override", "abstract", "readonly", "static"];
        this.tsParseModifiers({
          allowedModifiers: modifiers,
          disallowedModifiers: ["in", "out"],
          stopOnStartOfClassStaticBlock: true,
          errorTemplate: TSErrors.InvalidModifierOnTypeParameterPositions
        }, member);
        const callParseClassMemberWithIsStatic = () => {
          if (this.tsIsStartOfStaticBlocks()) {
            this.next();
            this.next();
            if (this.tsHasSomeModifiers(member, modifiers)) {
              this.raise(TSErrors.StaticBlockCannotHaveModifier, this.state.curPosition());
            }
            super.parseClassStaticBlock(classBody, member);
          } else {
            this.parseClassMemberWithIsStatic(classBody, member, state, !!member.static);
          }
        };
        if (member.declare) {
          this.tsInAmbientContext(callParseClassMemberWithIsStatic);
        } else {
          callParseClassMemberWithIsStatic();
        }
      }
      parseClassMemberWithIsStatic(classBody, member, state, isStatic) {
        const idx = this.tsTryParseIndexSignature(member);
        if (idx) {
          classBody.body.push(idx);
          if (member.abstract) {
            this.raise(TSErrors.IndexSignatureHasAbstract, member);
          }
          if (member.accessibility) {
            this.raise(TSErrors.IndexSignatureHasAccessibility, member, {
              modifier: member.accessibility
            });
          }
          if (member.declare) {
            this.raise(TSErrors.IndexSignatureHasDeclare, member);
          }
          if (member.override) {
            this.raise(TSErrors.IndexSignatureHasOverride, member);
          }
          return;
        }
        if (!this.state.inAbstractClass && member.abstract) {
          this.raise(TSErrors.NonAbstractClassHasAbstractMethod, member);
        }
        if (member.override) {
          if (!state.hadSuperClass) {
            this.raise(TSErrors.OverrideNotInSubClass, member);
          }
        }
        super.parseClassMemberWithIsStatic(classBody, member, state, isStatic);
      }
      parsePostMemberNameModifiers(methodOrProp) {
        const optional = this.eat(17);
        if (optional)
          methodOrProp.optional = true;
        if (methodOrProp.readonly && this.match(10)) {
          this.raise(TSErrors.ClassMethodHasReadonly, methodOrProp);
        }
        if (methodOrProp.declare && this.match(10)) {
          this.raise(TSErrors.ClassMethodHasDeclare, methodOrProp);
        }
      }
      shouldParseExportDeclaration() {
        if (this.tsIsDeclarationStart())
          return true;
        return super.shouldParseExportDeclaration();
      }
      parseConditional(expr, startLoc, refExpressionErrors) {
        if (!this.match(17))
          return expr;
        if (this.state.maybeInArrowParameters) {
          const nextCh = this.lookaheadCharCode();
          if (nextCh === 44 || nextCh === 61 || nextCh === 58 || nextCh === 41) {
            this.setOptionalParametersError(refExpressionErrors);
            return expr;
          }
        }
        return super.parseConditional(expr, startLoc, refExpressionErrors);
      }
      parseParenItem(node, startLoc) {
        const newNode = super.parseParenItem(node, startLoc);
        if (this.eat(17)) {
          newNode.optional = true;
          this.resetEndLocation(node);
        }
        if (this.match(14)) {
          const typeCastNode = this.startNodeAt(startLoc);
          typeCastNode.expression = node;
          typeCastNode.typeAnnotation = this.tsParseTypeAnnotation();
          return this.finishNode(typeCastNode, "TSTypeCastExpression");
        }
        return node;
      }
      parseExportDeclaration(node) {
        if (!this.state.isAmbientContext && this.isContextual(125)) {
          return this.tsInAmbientContext(() => this.parseExportDeclaration(node));
        }
        const startLoc = this.state.startLoc;
        const isDeclare = this.eatContextual(125);
        if (isDeclare && (this.isContextual(125) || !this.shouldParseExportDeclaration())) {
          throw this.raise(TSErrors.ExpectedAmbientAfterExportDeclare, this.state.startLoc);
        }
        const isIdentifier = tokenIsIdentifier(this.state.type);
        const declaration = isIdentifier && this.tsTryParseExportDeclaration() || super.parseExportDeclaration(node);
        if (!declaration)
          return null;
        if (declaration.type === "TSInterfaceDeclaration" || declaration.type === "TSTypeAliasDeclaration" || isDeclare) {
          node.exportKind = "type";
        }
        if (isDeclare && declaration.type !== "TSImportEqualsDeclaration") {
          this.resetStartLocation(declaration, startLoc);
          declaration.declare = true;
        }
        return declaration;
      }
      parseClassId(node, isStatement, optionalId, bindingType) {
        if ((!isStatement || optionalId) && this.isContextual(113)) {
          return;
        }
        super.parseClassId(node, isStatement, optionalId, node.declare ? 1024 : 8331);
        const typeParameters = this.tsTryParseTypeParameters(this.tsParseInOutConstModifiers);
        if (typeParameters)
          node.typeParameters = typeParameters;
      }
      parseClassPropertyAnnotation(node) {
        if (!node.optional) {
          if (this.eat(35)) {
            node.definite = true;
          } else if (this.eat(17)) {
            node.optional = true;
          }
        }
        const type = this.tsTryParseTypeAnnotation();
        if (type)
          node.typeAnnotation = type;
      }
      parseClassProperty(node) {
        this.parseClassPropertyAnnotation(node);
        if (this.state.isAmbientContext && !(node.readonly && !node.typeAnnotation) && this.match(29)) {
          this.raise(TSErrors.DeclareClassFieldHasInitializer, this.state.startLoc);
        }
        if (node.abstract && this.match(29)) {
          const {
            key
          } = node;
          this.raise(TSErrors.AbstractPropertyHasInitializer, this.state.startLoc, {
            propertyName: key.type === "Identifier" && !node.computed ? key.name : `[${this.input.slice(this.offsetToSourcePos(key.start), this.offsetToSourcePos(key.end))}]`
          });
        }
        return super.parseClassProperty(node);
      }
      parseClassPrivateProperty(node) {
        if (node.abstract) {
          this.raise(TSErrors.PrivateElementHasAbstract, node);
        }
        if (node.accessibility) {
          this.raise(TSErrors.PrivateElementHasAccessibility, node, {
            modifier: node.accessibility
          });
        }
        this.parseClassPropertyAnnotation(node);
        return super.parseClassPrivateProperty(node);
      }
      parseClassAccessorProperty(node) {
        this.parseClassPropertyAnnotation(node);
        if (node.optional) {
          this.raise(TSErrors.AccessorCannotBeOptional, node);
        }
        return super.parseClassAccessorProperty(node);
      }
      pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper) {
        const typeParameters = this.tsTryParseTypeParameters(this.tsParseConstModifier);
        if (typeParameters && isConstructor) {
          this.raise(TSErrors.ConstructorHasTypeParameters, typeParameters);
        }
        const {
          declare = false,
          kind
        } = method;
        if (declare && (kind === "get" || kind === "set")) {
          this.raise(TSErrors.DeclareAccessor, method, {
            kind
          });
        }
        if (typeParameters)
          method.typeParameters = typeParameters;
        super.pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper);
      }
      pushClassPrivateMethod(classBody, method, isGenerator, isAsync) {
        const typeParameters = this.tsTryParseTypeParameters(this.tsParseConstModifier);
        if (typeParameters)
          method.typeParameters = typeParameters;
        super.pushClassPrivateMethod(classBody, method, isGenerator, isAsync);
      }
      declareClassPrivateMethodInScope(node, kind) {
        if (node.type === "TSDeclareMethod")
          return;
        if (node.type === "MethodDefinition" && node.value.body == null) {
          return;
        }
        super.declareClassPrivateMethodInScope(node, kind);
      }
      parseClassSuper(node) {
        super.parseClassSuper(node);
        if (node.superClass) {
          if (node.superClass.type === "TSInstantiationExpression") {
            const tsInstantiationExpression = node.superClass;
            const superClass2 = tsInstantiationExpression.expression;
            this.takeSurroundingComments(superClass2, superClass2.start, superClass2.end);
            const superTypeArguments = tsInstantiationExpression.typeParameters;
            this.takeSurroundingComments(superTypeArguments, superTypeArguments.start, superTypeArguments.end);
            node.superClass = superClass2;
            node.superTypeParameters = superTypeArguments;
          } else if (this.match(47) || this.match(51)) {
            node.superTypeParameters = this.tsParseTypeArgumentsInExpression();
          }
        }
        if (this.eatContextual(113)) {
          node.implements = this.tsParseHeritageClause("implements");
        }
      }
      parseObjPropValue(prop, startLoc, isGenerator, isAsync, isPattern, isAccessor, refExpressionErrors) {
        const typeParameters = this.tsTryParseTypeParameters(this.tsParseConstModifier);
        if (typeParameters)
          prop.typeParameters = typeParameters;
        return super.parseObjPropValue(prop, startLoc, isGenerator, isAsync, isPattern, isAccessor, refExpressionErrors);
      }
      parseFunctionParams(node, isConstructor) {
        const typeParameters = this.tsTryParseTypeParameters(this.tsParseConstModifier);
        if (typeParameters)
          node.typeParameters = typeParameters;
        super.parseFunctionParams(node, isConstructor);
      }
      parseVarId(decl, kind) {
        super.parseVarId(decl, kind);
        if (decl.id.type === "Identifier" && !this.hasPrecedingLineBreak() && this.eat(35)) {
          decl.definite = true;
        }
        const type = this.tsTryParseTypeAnnotation();
        if (type) {
          decl.id.typeAnnotation = type;
          this.resetEndLocation(decl.id);
        }
      }
      parseAsyncArrowFromCallExpression(node, call) {
        if (this.match(14)) {
          node.returnType = this.tsParseTypeAnnotation();
        }
        return super.parseAsyncArrowFromCallExpression(node, call);
      }
      parseMaybeAssign(refExpressionErrors, afterLeftParse) {
        var _jsx, _jsx2, _typeCast, _jsx3, _typeCast2;
        let state;
        let jsx2;
        let typeCast;
        if (this.hasPlugin("jsx") && (this.match(143) || this.match(47))) {
          state = this.state.clone();
          jsx2 = this.tryParse(() => super.parseMaybeAssign(refExpressionErrors, afterLeftParse), state);
          if (!jsx2.error)
            return jsx2.node;
          const {
            context
          } = this.state;
          const currentContext = context[context.length - 1];
          if (currentContext === types.j_oTag || currentContext === types.j_expr) {
            context.pop();
          }
        }
        if (!((_jsx = jsx2) != null && _jsx.error) && !this.match(47)) {
          return super.parseMaybeAssign(refExpressionErrors, afterLeftParse);
        }
        if (!state || state === this.state)
          state = this.state.clone();
        let typeParameters;
        const arrow = this.tryParse((abort) => {
          var _expr$extra, _typeParameters;
          typeParameters = this.tsParseTypeParameters(this.tsParseConstModifier);
          const expr = super.parseMaybeAssign(refExpressionErrors, afterLeftParse);
          if (expr.type !== "ArrowFunctionExpression" || (_expr$extra = expr.extra) != null && _expr$extra.parenthesized) {
            abort();
          }
          if (((_typeParameters = typeParameters) == null ? void 0 : _typeParameters.params.length) !== 0) {
            this.resetStartLocationFromNode(expr, typeParameters);
          }
          expr.typeParameters = typeParameters;
          return expr;
        }, state);
        if (!arrow.error && !arrow.aborted) {
          if (typeParameters)
            this.reportReservedArrowTypeParam(typeParameters);
          return arrow.node;
        }
        if (!jsx2) {
          assert(!this.hasPlugin("jsx"));
          typeCast = this.tryParse(() => super.parseMaybeAssign(refExpressionErrors, afterLeftParse), state);
          if (!typeCast.error)
            return typeCast.node;
        }
        if ((_jsx2 = jsx2) != null && _jsx2.node) {
          this.state = jsx2.failState;
          return jsx2.node;
        }
        if (arrow.node) {
          this.state = arrow.failState;
          if (typeParameters)
            this.reportReservedArrowTypeParam(typeParameters);
          return arrow.node;
        }
        if ((_typeCast = typeCast) != null && _typeCast.node) {
          this.state = typeCast.failState;
          return typeCast.node;
        }
        throw ((_jsx3 = jsx2) == null ? void 0 : _jsx3.error) || arrow.error || ((_typeCast2 = typeCast) == null ? void 0 : _typeCast2.error);
      }
      reportReservedArrowTypeParam(node) {
        var _node$extra2;
        if (node.params.length === 1 && !node.params[0].constraint && !((_node$extra2 = node.extra) != null && _node$extra2.trailingComma) && this.getPluginOption("typescript", "disallowAmbiguousJSXLike")) {
          this.raise(TSErrors.ReservedArrowTypeParam, node);
        }
      }
      parseMaybeUnary(refExpressionErrors, sawUnary) {
        if (!this.hasPlugin("jsx") && this.match(47)) {
          return this.tsParseTypeAssertion();
        }
        return super.parseMaybeUnary(refExpressionErrors, sawUnary);
      }
      parseArrow(node) {
        if (this.match(14)) {
          const result = this.tryParse((abort) => {
            const returnType = this.tsParseTypeOrTypePredicateAnnotation(14);
            if (this.canInsertSemicolon() || !this.match(19))
              abort();
            return returnType;
          });
          if (result.aborted)
            return;
          if (!result.thrown) {
            if (result.error)
              this.state = result.failState;
            node.returnType = result.node;
          }
        }
        return super.parseArrow(node);
      }
      parseFunctionParamType(param) {
        if (this.eat(17)) {
          param.optional = true;
        }
        const type = this.tsTryParseTypeAnnotation();
        if (type)
          param.typeAnnotation = type;
        this.resetEndLocation(param);
        return param;
      }
      isAssignable(node, isBinding) {
        switch (node.type) {
          case "TSTypeCastExpression":
            return this.isAssignable(node.expression, isBinding);
          case "TSParameterProperty":
            return true;
          default:
            return super.isAssignable(node, isBinding);
        }
      }
      toAssignable(node, isLHS = false) {
        switch (node.type) {
          case "ParenthesizedExpression":
            this.toAssignableParenthesizedExpression(node, isLHS);
            break;
          case "TSAsExpression":
          case "TSSatisfiesExpression":
          case "TSNonNullExpression":
          case "TSTypeAssertion":
            if (isLHS) {
              this.expressionScope.recordArrowParameterBindingError(TSErrors.UnexpectedTypeCastInParameter, node);
            } else {
              this.raise(TSErrors.UnexpectedTypeCastInParameter, node);
            }
            this.toAssignable(node.expression, isLHS);
            break;
          case "AssignmentExpression":
            if (!isLHS && node.left.type === "TSTypeCastExpression") {
              node.left = this.typeCastToParameter(node.left);
            }
          default:
            super.toAssignable(node, isLHS);
        }
      }
      toAssignableParenthesizedExpression(node, isLHS) {
        switch (node.expression.type) {
          case "TSAsExpression":
          case "TSSatisfiesExpression":
          case "TSNonNullExpression":
          case "TSTypeAssertion":
          case "ParenthesizedExpression":
            this.toAssignable(node.expression, isLHS);
            break;
          default:
            super.toAssignable(node, isLHS);
        }
      }
      checkToRestConversion(node, allowPattern) {
        switch (node.type) {
          case "TSAsExpression":
          case "TSSatisfiesExpression":
          case "TSTypeAssertion":
          case "TSNonNullExpression":
            this.checkToRestConversion(node.expression, false);
            break;
          default:
            super.checkToRestConversion(node, allowPattern);
        }
      }
      isValidLVal(type, disallowCallExpression, isUnparenthesizedInAssign, binding) {
        switch (type) {
          case "TSTypeCastExpression":
            return true;
          case "TSParameterProperty":
            return "parameter";
          case "TSNonNullExpression":
            return "expression";
          case "TSAsExpression":
          case "TSSatisfiesExpression":
          case "TSTypeAssertion":
            return (binding !== 64 || !isUnparenthesizedInAssign) && ["expression", true];
          default:
            return super.isValidLVal(type, disallowCallExpression, isUnparenthesizedInAssign, binding);
        }
      }
      parseBindingAtom() {
        if (this.state.type === 78) {
          return this.parseIdentifier(true);
        }
        return super.parseBindingAtom();
      }
      parseMaybeDecoratorArguments(expr, startLoc) {
        if (this.match(47) || this.match(51)) {
          const typeArguments = this.tsParseTypeArgumentsInExpression();
          if (this.match(10)) {
            const call = super.parseMaybeDecoratorArguments(expr, startLoc);
            call.typeParameters = typeArguments;
            return call;
          }
          this.unexpected(null, 10);
        }
        return super.parseMaybeDecoratorArguments(expr, startLoc);
      }
      checkCommaAfterRest(close) {
        if (this.state.isAmbientContext && this.match(12) && this.lookaheadCharCode() === close) {
          this.next();
          return false;
        }
        return super.checkCommaAfterRest(close);
      }
      isClassMethod() {
        return this.match(47) || super.isClassMethod();
      }
      isClassProperty() {
        return this.match(35) || this.match(14) || super.isClassProperty();
      }
      parseMaybeDefault(startLoc, left) {
        const node = super.parseMaybeDefault(startLoc, left);
        if (node.type === "AssignmentPattern" && node.typeAnnotation && node.right.start < node.typeAnnotation.start) {
          this.raise(TSErrors.TypeAnnotationAfterAssign, node.typeAnnotation);
        }
        return node;
      }
      getTokenFromCode(code2) {
        if (this.state.inType) {
          if (code2 === 62) {
            this.finishOp(48, 1);
            return;
          }
          if (code2 === 60) {
            this.finishOp(47, 1);
            return;
          }
        }
        super.getTokenFromCode(code2);
      }
      reScan_lt_gt() {
        const {
          type
        } = this.state;
        if (type === 47) {
          this.state.pos -= 1;
          this.readToken_lt();
        } else if (type === 48) {
          this.state.pos -= 1;
          this.readToken_gt();
        }
      }
      reScan_lt() {
        const {
          type
        } = this.state;
        if (type === 51) {
          this.state.pos -= 2;
          this.finishOp(47, 1);
          return 47;
        }
        return type;
      }
      toAssignableListItem(exprList, index, isLHS) {
        const node = exprList[index];
        if (node.type === "TSTypeCastExpression") {
          exprList[index] = this.typeCastToParameter(node);
        }
        super.toAssignableListItem(exprList, index, isLHS);
      }
      typeCastToParameter(node) {
        node.expression.typeAnnotation = node.typeAnnotation;
        this.resetEndLocation(node.expression, node.typeAnnotation.loc.end);
        return node.expression;
      }
      shouldParseArrow(params) {
        if (this.match(14)) {
          return params.every((expr) => this.isAssignable(expr, true));
        }
        return super.shouldParseArrow(params);
      }
      shouldParseAsyncArrow() {
        return this.match(14) || super.shouldParseAsyncArrow();
      }
      canHaveLeadingDecorator() {
        return super.canHaveLeadingDecorator() || this.isAbstractClass();
      }
      jsxParseOpeningElementAfterName(node) {
        if (this.match(47) || this.match(51)) {
          const typeArguments = this.tsTryParseAndCatch(() => this.tsParseTypeArgumentsInExpression());
          if (typeArguments) {
            node.typeParameters = typeArguments;
          }
        }
        return super.jsxParseOpeningElementAfterName(node);
      }
      getGetterSetterExpectedParamCount(method) {
        const baseCount = super.getGetterSetterExpectedParamCount(method);
        const params = this.getObjectOrClassMethodParams(method);
        const firstParam = params[0];
        const hasContextParam = firstParam && this.isThisParam(firstParam);
        return hasContextParam ? baseCount + 1 : baseCount;
      }
      parseCatchClauseParam() {
        const param = super.parseCatchClauseParam();
        const type = this.tsTryParseTypeAnnotation();
        if (type) {
          param.typeAnnotation = type;
          this.resetEndLocation(param);
        }
        return param;
      }
      tsInAmbientContext(cb) {
        const {
          isAmbientContext: oldIsAmbientContext,
          strict: oldStrict
        } = this.state;
        this.state.isAmbientContext = true;
        this.state.strict = false;
        try {
          return cb();
        } finally {
          this.state.isAmbientContext = oldIsAmbientContext;
          this.state.strict = oldStrict;
        }
      }
      parseClass(node, isStatement, optionalId) {
        const oldInAbstractClass = this.state.inAbstractClass;
        this.state.inAbstractClass = !!node.abstract;
        try {
          return super.parseClass(node, isStatement, optionalId);
        } finally {
          this.state.inAbstractClass = oldInAbstractClass;
        }
      }
      tsParseAbstractDeclaration(node, decorators) {
        if (this.match(80)) {
          node.abstract = true;
          return this.maybeTakeDecorators(decorators, this.parseClass(node, true, false));
        } else if (this.isContextual(129)) {
          if (!this.hasFollowingLineBreak()) {
            node.abstract = true;
            this.raise(TSErrors.NonClassMethodPropertyHasAbstractModifier, node);
            return this.tsParseInterfaceDeclaration(node);
          } else {
            return null;
          }
        }
        throw this.unexpected(null, 80);
      }
      parseMethod(node, isGenerator, isAsync, isConstructor, allowDirectSuper, type, inClassScope) {
        const method = super.parseMethod(node, isGenerator, isAsync, isConstructor, allowDirectSuper, type, inClassScope);
        if (method.abstract || method.type === "TSAbstractMethodDefinition") {
          const hasEstreePlugin = this.hasPlugin("estree");
          const methodFn = hasEstreePlugin ? method.value : method;
          if (methodFn.body) {
            const {
              key
            } = method;
            this.raise(TSErrors.AbstractMethodHasImplementation, method, {
              methodName: key.type === "Identifier" && !method.computed ? key.name : `[${this.input.slice(this.offsetToSourcePos(key.start), this.offsetToSourcePos(key.end))}]`
            });
          }
        }
        return method;
      }
      tsParseTypeParameterName() {
        const typeName = this.parseIdentifier();
        return typeName.name;
      }
      shouldParseAsAmbientContext() {
        return !!this.getPluginOption("typescript", "dts");
      }
      parse() {
        if (this.shouldParseAsAmbientContext()) {
          this.state.isAmbientContext = true;
        }
        return super.parse();
      }
      getExpression() {
        if (this.shouldParseAsAmbientContext()) {
          this.state.isAmbientContext = true;
        }
        return super.getExpression();
      }
      parseExportSpecifier(node, isString, isInTypeExport, isMaybeTypeOnly) {
        if (!isString && isMaybeTypeOnly) {
          this.parseTypeOnlyImportExportSpecifier(node, false, isInTypeExport);
          return this.finishNode(node, "ExportSpecifier");
        }
        node.exportKind = "value";
        return super.parseExportSpecifier(node, isString, isInTypeExport, isMaybeTypeOnly);
      }
      parseImportSpecifier(specifier, importedIsString, isInTypeOnlyImport, isMaybeTypeOnly, bindingType) {
        if (!importedIsString && isMaybeTypeOnly) {
          this.parseTypeOnlyImportExportSpecifier(specifier, true, isInTypeOnlyImport);
          return this.finishNode(specifier, "ImportSpecifier");
        }
        specifier.importKind = "value";
        return super.parseImportSpecifier(specifier, importedIsString, isInTypeOnlyImport, isMaybeTypeOnly, isInTypeOnlyImport ? 4098 : 4096);
      }
      parseTypeOnlyImportExportSpecifier(node, isImport, isInTypeOnlyImportExport) {
        const leftOfAsKey = isImport ? "imported" : "local";
        const rightOfAsKey = isImport ? "local" : "exported";
        let leftOfAs = node[leftOfAsKey];
        let rightOfAs;
        let hasTypeSpecifier = false;
        let canParseAsKeyword = true;
        const loc = leftOfAs.loc.start;
        if (this.isContextual(93)) {
          const firstAs = this.parseIdentifier();
          if (this.isContextual(93)) {
            const secondAs = this.parseIdentifier();
            if (tokenIsKeywordOrIdentifier(this.state.type)) {
              hasTypeSpecifier = true;
              leftOfAs = firstAs;
              rightOfAs = isImport ? this.parseIdentifier() : this.parseModuleExportName();
              canParseAsKeyword = false;
            } else {
              rightOfAs = secondAs;
              canParseAsKeyword = false;
            }
          } else if (tokenIsKeywordOrIdentifier(this.state.type)) {
            canParseAsKeyword = false;
            rightOfAs = isImport ? this.parseIdentifier() : this.parseModuleExportName();
          } else {
            hasTypeSpecifier = true;
            leftOfAs = firstAs;
          }
        } else if (tokenIsKeywordOrIdentifier(this.state.type)) {
          hasTypeSpecifier = true;
          if (isImport) {
            leftOfAs = this.parseIdentifier(true);
            if (!this.isContextual(93)) {
              this.checkReservedWord(leftOfAs.name, leftOfAs.loc.start, true, true);
            }
          } else {
            leftOfAs = this.parseModuleExportName();
          }
        }
        if (hasTypeSpecifier && isInTypeOnlyImportExport) {
          this.raise(isImport ? TSErrors.TypeModifierIsUsedInTypeImports : TSErrors.TypeModifierIsUsedInTypeExports, loc);
        }
        node[leftOfAsKey] = leftOfAs;
        node[rightOfAsKey] = rightOfAs;
        const kindKey = isImport ? "importKind" : "exportKind";
        node[kindKey] = hasTypeSpecifier ? "type" : "value";
        if (canParseAsKeyword && this.eatContextual(93)) {
          node[rightOfAsKey] = isImport ? this.parseIdentifier() : this.parseModuleExportName();
        }
        if (!node[rightOfAsKey]) {
          node[rightOfAsKey] = this.cloneIdentifier(node[leftOfAsKey]);
        }
        if (isImport) {
          this.checkIdentifier(node[rightOfAsKey], hasTypeSpecifier ? 4098 : 4096);
        }
      }
      fillOptionalPropertiesForTSESLint(node) {
        var _node$directive, _node$decorators, _node$optional, _node$typeAnnotation, _node$accessibility, _node$decorators2, _node$override, _node$readonly, _node$static, _node$declare, _node$returnType, _node$typeParameters, _node$optional2, _node$optional3, _node$accessibility2, _node$readonly2, _node$static2, _node$declare2, _node$definite, _node$readonly3, _node$typeAnnotation2, _node$accessibility3, _node$decorators3, _node$override2, _node$optional4, _node$id, _node$abstract, _node$declare3, _node$decorators4, _node$implements, _node$superTypeArgume, _node$typeParameters2, _node$declare4, _node$definite2, _node$const, _node$declare5, _node$computed, _node$qualifier, _node$options, _node$declare6, _node$extends, _node$optional5, _node$readonly4, _node$declare7, _node$global, _node$const2, _node$in, _node$out;
        switch (node.type) {
          case "ExpressionStatement":
            (_node$directive = node.directive) != null ? _node$directive : node.directive = void 0;
            return;
          case "RestElement":
            node.value = void 0;
          case "Identifier":
          case "ArrayPattern":
          case "AssignmentPattern":
          case "ObjectPattern":
            (_node$decorators = node.decorators) != null ? _node$decorators : node.decorators = [];
            (_node$optional = node.optional) != null ? _node$optional : node.optional = false;
            (_node$typeAnnotation = node.typeAnnotation) != null ? _node$typeAnnotation : node.typeAnnotation = void 0;
            return;
          case "TSParameterProperty":
            (_node$accessibility = node.accessibility) != null ? _node$accessibility : node.accessibility = void 0;
            (_node$decorators2 = node.decorators) != null ? _node$decorators2 : node.decorators = [];
            (_node$override = node.override) != null ? _node$override : node.override = false;
            (_node$readonly = node.readonly) != null ? _node$readonly : node.readonly = false;
            (_node$static = node.static) != null ? _node$static : node.static = false;
            return;
          case "TSEmptyBodyFunctionExpression":
            node.body = null;
          case "TSDeclareFunction":
          case "FunctionDeclaration":
          case "FunctionExpression":
          case "ClassMethod":
          case "ClassPrivateMethod":
            (_node$declare = node.declare) != null ? _node$declare : node.declare = false;
            (_node$returnType = node.returnType) != null ? _node$returnType : node.returnType = void 0;
            (_node$typeParameters = node.typeParameters) != null ? _node$typeParameters : node.typeParameters = void 0;
            return;
          case "Property":
            (_node$optional2 = node.optional) != null ? _node$optional2 : node.optional = false;
            return;
          case "TSMethodSignature":
          case "TSPropertySignature":
            (_node$optional3 = node.optional) != null ? _node$optional3 : node.optional = false;
          case "TSIndexSignature":
            (_node$accessibility2 = node.accessibility) != null ? _node$accessibility2 : node.accessibility = void 0;
            (_node$readonly2 = node.readonly) != null ? _node$readonly2 : node.readonly = false;
            (_node$static2 = node.static) != null ? _node$static2 : node.static = false;
            return;
          case "TSAbstractPropertyDefinition":
          case "PropertyDefinition":
          case "TSAbstractAccessorProperty":
          case "AccessorProperty":
            (_node$declare2 = node.declare) != null ? _node$declare2 : node.declare = false;
            (_node$definite = node.definite) != null ? _node$definite : node.definite = false;
            (_node$readonly3 = node.readonly) != null ? _node$readonly3 : node.readonly = false;
            (_node$typeAnnotation2 = node.typeAnnotation) != null ? _node$typeAnnotation2 : node.typeAnnotation = void 0;
          case "TSAbstractMethodDefinition":
          case "MethodDefinition":
            (_node$accessibility3 = node.accessibility) != null ? _node$accessibility3 : node.accessibility = void 0;
            (_node$decorators3 = node.decorators) != null ? _node$decorators3 : node.decorators = [];
            (_node$override2 = node.override) != null ? _node$override2 : node.override = false;
            (_node$optional4 = node.optional) != null ? _node$optional4 : node.optional = false;
            return;
          case "ClassExpression":
            (_node$id = node.id) != null ? _node$id : node.id = null;
          case "ClassDeclaration":
            (_node$abstract = node.abstract) != null ? _node$abstract : node.abstract = false;
            (_node$declare3 = node.declare) != null ? _node$declare3 : node.declare = false;
            (_node$decorators4 = node.decorators) != null ? _node$decorators4 : node.decorators = [];
            (_node$implements = node.implements) != null ? _node$implements : node.implements = [];
            (_node$superTypeArgume = node.superTypeArguments) != null ? _node$superTypeArgume : node.superTypeArguments = void 0;
            (_node$typeParameters2 = node.typeParameters) != null ? _node$typeParameters2 : node.typeParameters = void 0;
            return;
          case "TSTypeAliasDeclaration":
          case "VariableDeclaration":
            (_node$declare4 = node.declare) != null ? _node$declare4 : node.declare = false;
            return;
          case "VariableDeclarator":
            (_node$definite2 = node.definite) != null ? _node$definite2 : node.definite = false;
            return;
          case "TSEnumDeclaration":
            (_node$const = node.const) != null ? _node$const : node.const = false;
            (_node$declare5 = node.declare) != null ? _node$declare5 : node.declare = false;
            return;
          case "TSEnumMember":
            (_node$computed = node.computed) != null ? _node$computed : node.computed = false;
            return;
          case "TSImportType":
            (_node$qualifier = node.qualifier) != null ? _node$qualifier : node.qualifier = null;
            (_node$options = node.options) != null ? _node$options : node.options = null;
            return;
          case "TSInterfaceDeclaration":
            (_node$declare6 = node.declare) != null ? _node$declare6 : node.declare = false;
            (_node$extends = node.extends) != null ? _node$extends : node.extends = [];
            return;
          case "TSMappedType":
            (_node$optional5 = node.optional) != null ? _node$optional5 : node.optional = false;
            (_node$readonly4 = node.readonly) != null ? _node$readonly4 : node.readonly = void 0;
            return;
          case "TSModuleDeclaration":
            (_node$declare7 = node.declare) != null ? _node$declare7 : node.declare = false;
            (_node$global = node.global) != null ? _node$global : node.global = node.kind === "global";
            return;
          case "TSTypeParameter":
            (_node$const2 = node.const) != null ? _node$const2 : node.const = false;
            (_node$in = node.in) != null ? _node$in : node.in = false;
            (_node$out = node.out) != null ? _node$out : node.out = false;
            return;
        }
      }
      chStartsBindingIdentifierAndNotRelationalOperator(ch, pos) {
        if (isIdentifierStart(ch)) {
          keywordAndTSRelationalOperator.lastIndex = pos;
          if (keywordAndTSRelationalOperator.test(this.input)) {
            const endCh = this.codePointAtPos(keywordAndTSRelationalOperator.lastIndex);
            if (!isIdentifierChar(endCh) && endCh !== 92) {
              return false;
            }
          }
          return true;
        } else if (ch === 92) {
          return true;
        } else {
          return false;
        }
      }
      nextTokenIsIdentifierAndNotTSRelationalOperatorOnSameLine() {
        const next = this.nextTokenInLineStart();
        const nextCh = this.codePointAtPos(next);
        return this.chStartsBindingIdentifierAndNotRelationalOperator(nextCh, next);
      }
      nextTokenIsIdentifierOrStringLiteralOnSameLine() {
        const next = this.nextTokenInLineStart();
        const nextCh = this.codePointAtPos(next);
        return this.chStartsBindingIdentifier(nextCh, next) || nextCh === 34 || nextCh === 39;
      }
    };
    function isPossiblyLiteralEnum(expression) {
      if (expression.type !== "MemberExpression")
        return false;
      const {
        computed,
        property
      } = expression;
      if (computed && property.type !== "StringLiteral" && (property.type !== "TemplateLiteral" || property.expressions.length > 0)) {
        return false;
      }
      return isUncomputedMemberExpressionChain(expression.object);
    }
    function isValidAmbientConstInitializer(expression, estree2) {
      var _expression$extra;
      const {
        type
      } = expression;
      if ((_expression$extra = expression.extra) != null && _expression$extra.parenthesized) {
        return false;
      }
      if (estree2) {
        if (type === "Literal") {
          const {
            value
          } = expression;
          if (typeof value === "string" || typeof value === "boolean") {
            return true;
          }
        }
      } else {
        if (type === "StringLiteral" || type === "BooleanLiteral") {
          return true;
        }
      }
      if (isNumber(expression, estree2) || isNegativeNumber(expression, estree2)) {
        return true;
      }
      if (type === "TemplateLiteral" && expression.expressions.length === 0) {
        return true;
      }
      if (isPossiblyLiteralEnum(expression)) {
        return true;
      }
      return false;
    }
    function isNumber(expression, estree2) {
      if (estree2) {
        return expression.type === "Literal" && (typeof expression.value === "number" || "bigint" in expression);
      }
      return expression.type === "NumericLiteral" || expression.type === "BigIntLiteral";
    }
    function isNegativeNumber(expression, estree2) {
      if (expression.type === "UnaryExpression") {
        const {
          operator,
          argument
        } = expression;
        if (operator === "-" && isNumber(argument, estree2)) {
          return true;
        }
      }
      return false;
    }
    function isUncomputedMemberExpressionChain(expression) {
      if (expression.type === "Identifier")
        return true;
      if (expression.type !== "MemberExpression" || expression.computed) {
        return false;
      }
      return isUncomputedMemberExpressionChain(expression.object);
    }
    var PlaceholderErrors = ParseErrorEnum`placeholders`({
      ClassNameIsRequired: "A class name is required.",
      UnexpectedSpace: "Unexpected space in placeholder."
    });
    var placeholders = (superClass) => class PlaceholdersParserMixin extends superClass {
      parsePlaceholder(expectedNode) {
        if (this.match(133)) {
          const node = this.startNode();
          this.next();
          this.assertNoSpace();
          node.name = super.parseIdentifier(true);
          this.assertNoSpace();
          this.expect(133);
          return this.finishPlaceholder(node, expectedNode);
        }
      }
      finishPlaceholder(node, expectedNode) {
        let placeholder = node;
        if (!placeholder.expectedNode || !placeholder.type) {
          placeholder = this.finishNode(placeholder, "Placeholder");
        }
        placeholder.expectedNode = expectedNode;
        return placeholder;
      }
      getTokenFromCode(code2) {
        if (code2 === 37 && this.input.charCodeAt(this.state.pos + 1) === 37) {
          this.finishOp(133, 2);
        } else {
          super.getTokenFromCode(code2);
        }
      }
      parseExprAtom(refExpressionErrors) {
        return this.parsePlaceholder("Expression") || super.parseExprAtom(refExpressionErrors);
      }
      parseIdentifier(liberal) {
        return this.parsePlaceholder("Identifier") || super.parseIdentifier(liberal);
      }
      checkReservedWord(word, startLoc, checkKeywords, isBinding) {
        if (word !== void 0) {
          super.checkReservedWord(word, startLoc, checkKeywords, isBinding);
        }
      }
      cloneIdentifier(node) {
        const cloned = super.cloneIdentifier(node);
        if (cloned.type === "Placeholder") {
          cloned.expectedNode = node.expectedNode;
        }
        return cloned;
      }
      cloneStringLiteral(node) {
        if (node.type === "Placeholder") {
          return this.cloneIdentifier(node);
        }
        return super.cloneStringLiteral(node);
      }
      parseBindingAtom() {
        return this.parsePlaceholder("Pattern") || super.parseBindingAtom();
      }
      isValidLVal(type, disallowCallExpression, isParenthesized, binding) {
        return type === "Placeholder" || super.isValidLVal(type, disallowCallExpression, isParenthesized, binding);
      }
      toAssignable(node, isLHS) {
        if (node && node.type === "Placeholder" && node.expectedNode === "Expression") {
          node.expectedNode = "Pattern";
        } else {
          super.toAssignable(node, isLHS);
        }
      }
      chStartsBindingIdentifier(ch, pos) {
        if (super.chStartsBindingIdentifier(ch, pos)) {
          return true;
        }
        const next = this.nextTokenStart();
        if (this.input.charCodeAt(next) === 37 && this.input.charCodeAt(next + 1) === 37) {
          return true;
        }
        return false;
      }
      verifyBreakContinue(node, isBreak) {
        var _node$label;
        if (((_node$label = node.label) == null ? void 0 : _node$label.type) === "Placeholder")
          return;
        super.verifyBreakContinue(node, isBreak);
      }
      parseExpressionStatement(node, expr) {
        var _expr$extra;
        if (expr.type !== "Placeholder" || (_expr$extra = expr.extra) != null && _expr$extra.parenthesized) {
          return super.parseExpressionStatement(node, expr);
        }
        if (this.match(14)) {
          const stmt = node;
          stmt.label = this.finishPlaceholder(expr, "Identifier");
          this.next();
          stmt.body = super.parseStatementOrSloppyAnnexBFunctionDeclaration();
          return this.finishNode(stmt, "LabeledStatement");
        }
        this.semicolon();
        const stmtPlaceholder = node;
        stmtPlaceholder.name = expr.name;
        return this.finishPlaceholder(stmtPlaceholder, "Statement");
      }
      parseBlock(allowDirectives, createNewLexicalScope, afterBlockParse) {
        return this.parsePlaceholder("BlockStatement") || super.parseBlock(allowDirectives, createNewLexicalScope, afterBlockParse);
      }
      parseFunctionId(requireId) {
        return this.parsePlaceholder("Identifier") || super.parseFunctionId(requireId);
      }
      parseClass(node, isStatement, optionalId) {
        const type = isStatement ? "ClassDeclaration" : "ClassExpression";
        this.next();
        const oldStrict = this.state.strict;
        const placeholder = this.parsePlaceholder("Identifier");
        if (placeholder) {
          if (this.match(81) || this.match(133) || this.match(5)) {
            node.id = placeholder;
          } else if (optionalId || !isStatement) {
            node.id = null;
            node.body = this.finishPlaceholder(placeholder, "ClassBody");
            return this.finishNode(node, type);
          } else {
            throw this.raise(PlaceholderErrors.ClassNameIsRequired, this.state.startLoc);
          }
        } else {
          this.parseClassId(node, isStatement, optionalId);
        }
        super.parseClassSuper(node);
        node.body = this.parsePlaceholder("ClassBody") || super.parseClassBody(!!node.superClass, oldStrict);
        return this.finishNode(node, type);
      }
      parseExport(node, decorators) {
        const placeholder = this.parsePlaceholder("Identifier");
        if (!placeholder)
          return super.parseExport(node, decorators);
        const node2 = node;
        if (!this.isContextual(98) && !this.match(12)) {
          node2.specifiers = [];
          node2.source = null;
          node2.declaration = this.finishPlaceholder(placeholder, "Declaration");
          return this.finishNode(node2, "ExportNamedDeclaration");
        }
        this.expectPlugin("exportDefaultFrom");
        const specifier = this.startNode();
        specifier.exported = placeholder;
        node2.specifiers = [this.finishNode(specifier, "ExportDefaultSpecifier")];
        return super.parseExport(node2, decorators);
      }
      isExportDefaultSpecifier() {
        if (this.match(65)) {
          const next = this.nextTokenStart();
          if (this.isUnparsedContextual(next, "from")) {
            if (this.input.startsWith(tokenLabelName(133), this.nextTokenStartSince(next + 4))) {
              return true;
            }
          }
        }
        return super.isExportDefaultSpecifier();
      }
      maybeParseExportDefaultSpecifier(node, maybeDefaultIdentifier) {
        var _specifiers;
        if ((_specifiers = node.specifiers) != null && _specifiers.length) {
          return true;
        }
        return super.maybeParseExportDefaultSpecifier(node, maybeDefaultIdentifier);
      }
      checkExport(node) {
        const {
          specifiers
        } = node;
        if (specifiers != null && specifiers.length) {
          node.specifiers = specifiers.filter((node2) => node2.exported.type === "Placeholder");
        }
        super.checkExport(node);
        node.specifiers = specifiers;
      }
      parseImport(node) {
        const placeholder = this.parsePlaceholder("Identifier");
        if (!placeholder)
          return super.parseImport(node);
        node.specifiers = [];
        if (!this.isContextual(98) && !this.match(12)) {
          node.source = this.finishPlaceholder(placeholder, "StringLiteral");
          this.semicolon();
          return this.finishNode(node, "ImportDeclaration");
        }
        const specifier = this.startNodeAtNode(placeholder);
        specifier.local = placeholder;
        node.specifiers.push(this.finishNode(specifier, "ImportDefaultSpecifier"));
        if (this.eat(12)) {
          const hasStarImport = this.maybeParseStarImportSpecifier(node);
          if (!hasStarImport)
            this.parseNamedImportSpecifiers(node);
        }
        this.expectContextual(98);
        node.source = this.parseImportSource();
        this.semicolon();
        return this.finishNode(node, "ImportDeclaration");
      }
      parseImportSource() {
        return this.parsePlaceholder("StringLiteral") || super.parseImportSource();
      }
      assertNoSpace() {
        if (this.state.start > this.offsetToSourcePos(this.state.lastTokEndLoc.index)) {
          this.raise(PlaceholderErrors.UnexpectedSpace, this.state.lastTokEndLoc);
        }
      }
    };
    var v8intrinsic = (superClass) => class V8IntrinsicMixin extends superClass {
      parseV8Intrinsic() {
        if (this.match(54)) {
          const v8IntrinsicStartLoc = this.state.startLoc;
          const node = this.startNode();
          this.next();
          if (tokenIsIdentifier(this.state.type)) {
            const name = this.parseIdentifierName();
            const identifier = this.createIdentifier(node, name);
            this.castNodeTo(identifier, "V8IntrinsicIdentifier");
            if (this.match(10)) {
              return identifier;
            }
          }
          this.unexpected(v8IntrinsicStartLoc);
        }
      }
      parseExprAtom(refExpressionErrors) {
        return this.parseV8Intrinsic() || super.parseExprAtom(refExpressionErrors);
      }
    };
    var PIPELINE_PROPOSALS = ["minimal", "fsharp", "hack", "smart"];
    var TOPIC_TOKENS = ["^^", "@@", "^", "%", "#"];
    function validatePlugins(pluginsMap) {
      if (pluginsMap.has("decorators")) {
        if (pluginsMap.has("decorators-legacy")) {
          throw new Error("Cannot use the decorators and decorators-legacy plugin together");
        }
        const decoratorsBeforeExport = pluginsMap.get("decorators").decoratorsBeforeExport;
        if (decoratorsBeforeExport != null && typeof decoratorsBeforeExport !== "boolean") {
          throw new Error("'decoratorsBeforeExport' must be a boolean, if specified.");
        }
        const allowCallParenthesized = pluginsMap.get("decorators").allowCallParenthesized;
        if (allowCallParenthesized != null && typeof allowCallParenthesized !== "boolean") {
          throw new Error("'allowCallParenthesized' must be a boolean.");
        }
      }
      if (pluginsMap.has("flow") && pluginsMap.has("typescript")) {
        throw new Error("Cannot combine flow and typescript plugins.");
      }
      if (pluginsMap.has("placeholders") && pluginsMap.has("v8intrinsic")) {
        throw new Error("Cannot combine placeholders and v8intrinsic plugins.");
      }
      if (pluginsMap.has("pipelineOperator")) {
        var _pluginsMap$get2;
        const proposal = pluginsMap.get("pipelineOperator").proposal;
        if (!PIPELINE_PROPOSALS.includes(proposal)) {
          const proposalList = PIPELINE_PROPOSALS.map((p) => `"${p}"`).join(", ");
          throw new Error(`"pipelineOperator" requires "proposal" option whose value must be one of: ${proposalList}.`);
        }
        if (proposal === "hack") {
          var _pluginsMap$get;
          if (pluginsMap.has("placeholders")) {
            throw new Error("Cannot combine placeholders plugin and Hack-style pipes.");
          }
          if (pluginsMap.has("v8intrinsic")) {
            throw new Error("Cannot combine v8intrinsic plugin and Hack-style pipes.");
          }
          const topicToken = pluginsMap.get("pipelineOperator").topicToken;
          if (!TOPIC_TOKENS.includes(topicToken)) {
            const tokenList = TOPIC_TOKENS.map((t) => `"${t}"`).join(", ");
            throw new Error(`"pipelineOperator" in "proposal": "hack" mode also requires a "topicToken" option whose value must be one of: ${tokenList}.`);
          }
          if (topicToken === "#" && ((_pluginsMap$get = pluginsMap.get("recordAndTuple")) == null ? void 0 : _pluginsMap$get.syntaxType) === "hash") {
            throw new Error(`Plugin conflict between \`["pipelineOperator", { proposal: "hack", topicToken: "#" }]\` and \`${JSON.stringify(["recordAndTuple", pluginsMap.get("recordAndTuple")])}\`.`);
          }
        } else if (proposal === "smart" && ((_pluginsMap$get2 = pluginsMap.get("recordAndTuple")) == null ? void 0 : _pluginsMap$get2.syntaxType) === "hash") {
          throw new Error(`Plugin conflict between \`["pipelineOperator", { proposal: "smart" }]\` and \`${JSON.stringify(["recordAndTuple", pluginsMap.get("recordAndTuple")])}\`.`);
        }
      }
      if (pluginsMap.has("moduleAttributes")) {
        if (pluginsMap.has("deprecatedImportAssert") || pluginsMap.has("importAssertions")) {
          throw new Error("Cannot combine importAssertions, deprecatedImportAssert and moduleAttributes plugins.");
        }
        const moduleAttributesVersionPluginOption = pluginsMap.get("moduleAttributes").version;
        if (moduleAttributesVersionPluginOption !== "may-2020") {
          throw new Error("The 'moduleAttributes' plugin requires a 'version' option, representing the last proposal update. Currently, the only supported value is 'may-2020'.");
        }
      }
      if (pluginsMap.has("importAssertions")) {
        if (pluginsMap.has("deprecatedImportAssert")) {
          throw new Error("Cannot combine importAssertions and deprecatedImportAssert plugins.");
        }
      }
      if (pluginsMap.has("deprecatedImportAssert"))
        ;
      else if (pluginsMap.has("importAttributes") && pluginsMap.get("importAttributes").deprecatedAssertSyntax) {
        pluginsMap.set("deprecatedImportAssert", {});
      }
      if (pluginsMap.has("recordAndTuple")) {
        const syntaxType = pluginsMap.get("recordAndTuple").syntaxType;
        if (syntaxType != null) {
          const RECORD_AND_TUPLE_SYNTAX_TYPES = ["hash", "bar"];
          if (!RECORD_AND_TUPLE_SYNTAX_TYPES.includes(syntaxType)) {
            throw new Error("The 'syntaxType' option of the 'recordAndTuple' plugin must be one of: " + RECORD_AND_TUPLE_SYNTAX_TYPES.map((p) => `'${p}'`).join(", "));
          }
        }
      }
      if (pluginsMap.has("asyncDoExpressions") && !pluginsMap.has("doExpressions")) {
        const error = new Error("'asyncDoExpressions' requires 'doExpressions', please add 'doExpressions' to parser plugins.");
        error.missingPlugins = "doExpressions";
        throw error;
      }
      if (pluginsMap.has("optionalChainingAssign") && pluginsMap.get("optionalChainingAssign").version !== "2023-07") {
        throw new Error("The 'optionalChainingAssign' plugin requires a 'version' option, representing the last proposal update. Currently, the only supported value is '2023-07'.");
      }
      if (pluginsMap.has("discardBinding") && pluginsMap.get("discardBinding").syntaxType !== "void") {
        throw new Error("The 'discardBinding' plugin requires a 'syntaxType' option. Currently the only supported value is 'void'.");
      }
    }
    var mixinPlugins = {
      estree,
      jsx,
      flow,
      typescript,
      v8intrinsic,
      placeholders
    };
    var mixinPluginNames = Object.keys(mixinPlugins);
    var ExpressionParser = class extends LValParser {
      checkProto(prop, isRecord, sawProto, refExpressionErrors) {
        if (prop.type === "SpreadElement" || this.isObjectMethod(prop) || prop.computed || prop.shorthand) {
          return sawProto;
        }
        const key = prop.key;
        const name = key.type === "Identifier" ? key.name : key.value;
        if (name === "__proto__") {
          if (isRecord) {
            this.raise(Errors.RecordNoProto, key);
            return true;
          }
          if (sawProto) {
            if (refExpressionErrors) {
              if (refExpressionErrors.doubleProtoLoc === null) {
                refExpressionErrors.doubleProtoLoc = key.loc.start;
              }
            } else {
              this.raise(Errors.DuplicateProto, key);
            }
          }
          return true;
        }
        return sawProto;
      }
      shouldExitDescending(expr, potentialArrowAt) {
        return expr.type === "ArrowFunctionExpression" && this.offsetToSourcePos(expr.start) === potentialArrowAt;
      }
      getExpression() {
        this.enterInitialScopes();
        this.nextToken();
        if (this.match(140)) {
          throw this.raise(Errors.ParseExpressionEmptyInput, this.state.startLoc);
        }
        const expr = this.parseExpression();
        if (!this.match(140)) {
          throw this.raise(Errors.ParseExpressionExpectsEOF, this.state.startLoc, {
            unexpected: this.input.codePointAt(this.state.start)
          });
        }
        this.finalizeRemainingComments();
        expr.comments = this.comments;
        expr.errors = this.state.errors;
        if (this.optionFlags & 256) {
          expr.tokens = this.tokens;
        }
        return expr;
      }
      parseExpression(disallowIn, refExpressionErrors) {
        if (disallowIn) {
          return this.disallowInAnd(() => this.parseExpressionBase(refExpressionErrors));
        }
        return this.allowInAnd(() => this.parseExpressionBase(refExpressionErrors));
      }
      parseExpressionBase(refExpressionErrors) {
        const startLoc = this.state.startLoc;
        const expr = this.parseMaybeAssign(refExpressionErrors);
        if (this.match(12)) {
          const node = this.startNodeAt(startLoc);
          node.expressions = [expr];
          while (this.eat(12)) {
            node.expressions.push(this.parseMaybeAssign(refExpressionErrors));
          }
          this.toReferencedList(node.expressions);
          return this.finishNode(node, "SequenceExpression");
        }
        return expr;
      }
      parseMaybeAssignDisallowIn(refExpressionErrors, afterLeftParse) {
        return this.disallowInAnd(() => this.parseMaybeAssign(refExpressionErrors, afterLeftParse));
      }
      parseMaybeAssignAllowIn(refExpressionErrors, afterLeftParse) {
        return this.allowInAnd(() => this.parseMaybeAssign(refExpressionErrors, afterLeftParse));
      }
      setOptionalParametersError(refExpressionErrors) {
        refExpressionErrors.optionalParametersLoc = this.state.startLoc;
      }
      parseMaybeAssign(refExpressionErrors, afterLeftParse) {
        const startLoc = this.state.startLoc;
        const isYield = this.isContextual(108);
        if (isYield) {
          if (this.prodParam.hasYield) {
            this.next();
            let left2 = this.parseYield(startLoc);
            if (afterLeftParse) {
              left2 = afterLeftParse.call(this, left2, startLoc);
            }
            return left2;
          }
        }
        let ownExpressionErrors;
        if (refExpressionErrors) {
          ownExpressionErrors = false;
        } else {
          refExpressionErrors = new ExpressionErrors();
          ownExpressionErrors = true;
        }
        const {
          type
        } = this.state;
        if (type === 10 || tokenIsIdentifier(type)) {
          this.state.potentialArrowAt = this.state.start;
        }
        let left = this.parseMaybeConditional(refExpressionErrors);
        if (afterLeftParse) {
          left = afterLeftParse.call(this, left, startLoc);
        }
        if (tokenIsAssignment(this.state.type)) {
          const node = this.startNodeAt(startLoc);
          const operator = this.state.value;
          node.operator = operator;
          if (this.match(29)) {
            this.toAssignable(left, true);
            node.left = left;
            const startIndex = startLoc.index;
            if (refExpressionErrors.doubleProtoLoc != null && refExpressionErrors.doubleProtoLoc.index >= startIndex) {
              refExpressionErrors.doubleProtoLoc = null;
            }
            if (refExpressionErrors.shorthandAssignLoc != null && refExpressionErrors.shorthandAssignLoc.index >= startIndex) {
              refExpressionErrors.shorthandAssignLoc = null;
            }
            if (refExpressionErrors.privateKeyLoc != null && refExpressionErrors.privateKeyLoc.index >= startIndex) {
              this.checkDestructuringPrivate(refExpressionErrors);
              refExpressionErrors.privateKeyLoc = null;
            }
            if (refExpressionErrors.voidPatternLoc != null && refExpressionErrors.voidPatternLoc.index >= startIndex) {
              refExpressionErrors.voidPatternLoc = null;
            }
          } else {
            node.left = left;
          }
          this.next();
          node.right = this.parseMaybeAssign();
          this.checkLVal(left, this.finishNode(node, "AssignmentExpression"), void 0, void 0, void 0, void 0, operator === "||=" || operator === "&&=" || operator === "??=");
          return node;
        } else if (ownExpressionErrors) {
          this.checkExpressionErrors(refExpressionErrors, true);
        }
        if (isYield) {
          const {
            type: type2
          } = this.state;
          const startsExpr2 = this.hasPlugin("v8intrinsic") ? tokenCanStartExpression(type2) : tokenCanStartExpression(type2) && !this.match(54);
          if (startsExpr2 && !this.isAmbiguousPrefixOrIdentifier()) {
            this.raiseOverwrite(Errors.YieldNotInGeneratorFunction, startLoc);
            return this.parseYield(startLoc);
          }
        }
        return left;
      }
      parseMaybeConditional(refExpressionErrors) {
        const startLoc = this.state.startLoc;
        const potentialArrowAt = this.state.potentialArrowAt;
        const expr = this.parseExprOps(refExpressionErrors);
        if (this.shouldExitDescending(expr, potentialArrowAt)) {
          return expr;
        }
        return this.parseConditional(expr, startLoc, refExpressionErrors);
      }
      parseConditional(expr, startLoc, refExpressionErrors) {
        if (this.eat(17)) {
          const node = this.startNodeAt(startLoc);
          node.test = expr;
          node.consequent = this.parseMaybeAssignAllowIn();
          this.expect(14);
          node.alternate = this.parseMaybeAssign();
          return this.finishNode(node, "ConditionalExpression");
        }
        return expr;
      }
      parseMaybeUnaryOrPrivate(refExpressionErrors) {
        return this.match(139) ? this.parsePrivateName() : this.parseMaybeUnary(refExpressionErrors);
      }
      parseExprOps(refExpressionErrors) {
        const startLoc = this.state.startLoc;
        const potentialArrowAt = this.state.potentialArrowAt;
        const expr = this.parseMaybeUnaryOrPrivate(refExpressionErrors);
        if (this.shouldExitDescending(expr, potentialArrowAt)) {
          return expr;
        }
        return this.parseExprOp(expr, startLoc, -1);
      }
      parseExprOp(left, leftStartLoc, minPrec) {
        if (this.isPrivateName(left)) {
          const value = this.getPrivateNameSV(left);
          if (minPrec >= tokenOperatorPrecedence(58) || !this.prodParam.hasIn || !this.match(58)) {
            this.raise(Errors.PrivateInExpectedIn, left, {
              identifierName: value
            });
          }
          this.classScope.usePrivateName(value, left.loc.start);
        }
        const op = this.state.type;
        if (tokenIsOperator(op) && (this.prodParam.hasIn || !this.match(58))) {
          let prec = tokenOperatorPrecedence(op);
          if (prec > minPrec) {
            if (op === 39) {
              this.expectPlugin("pipelineOperator");
              if (this.state.inFSharpPipelineDirectBody) {
                return left;
              }
              this.checkPipelineAtInfixOperator(left, leftStartLoc);
            }
            const node = this.startNodeAt(leftStartLoc);
            node.left = left;
            node.operator = this.state.value;
            const logical = op === 41 || op === 42;
            const coalesce = op === 40;
            if (coalesce) {
              prec = tokenOperatorPrecedence(42);
            }
            this.next();
            if (op === 39 && this.hasPlugin(["pipelineOperator", {
              proposal: "minimal"
            }])) {
              if (this.state.type === 96 && this.prodParam.hasAwait) {
                throw this.raise(Errors.UnexpectedAwaitAfterPipelineBody, this.state.startLoc);
              }
            }
            node.right = this.parseExprOpRightExpr(op, prec);
            const finishedNode = this.finishNode(node, logical || coalesce ? "LogicalExpression" : "BinaryExpression");
            const nextOp = this.state.type;
            if (coalesce && (nextOp === 41 || nextOp === 42) || logical && nextOp === 40) {
              throw this.raise(Errors.MixingCoalesceWithLogical, this.state.startLoc);
            }
            return this.parseExprOp(finishedNode, leftStartLoc, minPrec);
          }
        }
        return left;
      }
      parseExprOpRightExpr(op, prec) {
        const startLoc = this.state.startLoc;
        switch (op) {
          case 39:
            switch (this.getPluginOption("pipelineOperator", "proposal")) {
              case "hack":
                return this.withTopicBindingContext(() => {
                  return this.parseHackPipeBody();
                });
              case "fsharp":
                return this.withSoloAwaitPermittingContext(() => {
                  return this.parseFSharpPipelineBody(prec);
                });
            }
            if (this.getPluginOption("pipelineOperator", "proposal") === "smart") {
              return this.withTopicBindingContext(() => {
                if (this.prodParam.hasYield && this.isContextual(108)) {
                  throw this.raise(Errors.PipeBodyIsTighter, this.state.startLoc);
                }
                return this.parseSmartPipelineBodyInStyle(this.parseExprOpBaseRightExpr(op, prec), startLoc);
              });
            }
          default:
            return this.parseExprOpBaseRightExpr(op, prec);
        }
      }
      parseExprOpBaseRightExpr(op, prec) {
        const startLoc = this.state.startLoc;
        return this.parseExprOp(this.parseMaybeUnaryOrPrivate(), startLoc, tokenIsRightAssociative(op) ? prec - 1 : prec);
      }
      parseHackPipeBody() {
        var _body$extra;
        const {
          startLoc
        } = this.state;
        const body = this.parseMaybeAssign();
        const requiredParentheses = UnparenthesizedPipeBodyDescriptions.has(body.type);
        if (requiredParentheses && !((_body$extra = body.extra) != null && _body$extra.parenthesized)) {
          this.raise(Errors.PipeUnparenthesizedBody, startLoc, {
            type: body.type
          });
        }
        if (!this.topicReferenceWasUsedInCurrentContext()) {
          this.raise(Errors.PipeTopicUnused, startLoc);
        }
        return body;
      }
      checkExponentialAfterUnary(node) {
        if (this.match(57)) {
          this.raise(Errors.UnexpectedTokenUnaryExponentiation, node.argument);
        }
      }
      parseMaybeUnary(refExpressionErrors, sawUnary) {
        const startLoc = this.state.startLoc;
        const isAwait = this.isContextual(96);
        if (isAwait && this.recordAwaitIfAllowed()) {
          this.next();
          const expr2 = this.parseAwait(startLoc);
          if (!sawUnary)
            this.checkExponentialAfterUnary(expr2);
          return expr2;
        }
        const update = this.match(34);
        const node = this.startNode();
        if (tokenIsPrefix(this.state.type)) {
          node.operator = this.state.value;
          node.prefix = true;
          if (this.match(72)) {
            this.expectPlugin("throwExpressions");
          }
          const isDelete = this.match(89);
          this.next();
          node.argument = this.parseMaybeUnary(null, true);
          this.checkExpressionErrors(refExpressionErrors, true);
          if (this.state.strict && isDelete) {
            const arg = node.argument;
            if (arg.type === "Identifier") {
              this.raise(Errors.StrictDelete, node);
            } else if (this.hasPropertyAsPrivateName(arg)) {
              this.raise(Errors.DeletePrivateField, node);
            }
          }
          if (!update) {
            if (!sawUnary) {
              this.checkExponentialAfterUnary(node);
            }
            return this.finishNode(node, "UnaryExpression");
          }
        }
        const expr = this.parseUpdate(node, update, refExpressionErrors);
        if (isAwait) {
          const {
            type
          } = this.state;
          const startsExpr2 = this.hasPlugin("v8intrinsic") ? tokenCanStartExpression(type) : tokenCanStartExpression(type) && !this.match(54);
          if (startsExpr2 && !this.isAmbiguousPrefixOrIdentifier()) {
            this.raiseOverwrite(Errors.AwaitNotInAsyncContext, startLoc);
            return this.parseAwait(startLoc);
          }
        }
        return expr;
      }
      parseUpdate(node, update, refExpressionErrors) {
        if (update) {
          const updateExpressionNode = node;
          this.checkLVal(updateExpressionNode.argument, this.finishNode(updateExpressionNode, "UpdateExpression"));
          return node;
        }
        const startLoc = this.state.startLoc;
        let expr = this.parseExprSubscripts(refExpressionErrors);
        if (this.checkExpressionErrors(refExpressionErrors, false))
          return expr;
        while (tokenIsPostfix(this.state.type) && !this.canInsertSemicolon()) {
          const node2 = this.startNodeAt(startLoc);
          node2.operator = this.state.value;
          node2.prefix = false;
          node2.argument = expr;
          this.next();
          this.checkLVal(expr, expr = this.finishNode(node2, "UpdateExpression"));
        }
        return expr;
      }
      parseExprSubscripts(refExpressionErrors) {
        const startLoc = this.state.startLoc;
        const potentialArrowAt = this.state.potentialArrowAt;
        const expr = this.parseExprAtom(refExpressionErrors);
        if (this.shouldExitDescending(expr, potentialArrowAt)) {
          return expr;
        }
        return this.parseSubscripts(expr, startLoc);
      }
      parseSubscripts(base, startLoc, noCalls) {
        const state = {
          optionalChainMember: false,
          maybeAsyncArrow: this.atPossibleAsyncArrow(base),
          stop: false
        };
        do {
          base = this.parseSubscript(base, startLoc, noCalls, state);
          state.maybeAsyncArrow = false;
        } while (!state.stop);
        return base;
      }
      parseSubscript(base, startLoc, noCalls, state) {
        const {
          type
        } = this.state;
        if (!noCalls && type === 15) {
          return this.parseBind(base, startLoc, noCalls, state);
        } else if (tokenIsTemplate(type)) {
          return this.parseTaggedTemplateExpression(base, startLoc, state);
        }
        let optional = false;
        if (type === 18) {
          if (noCalls) {
            this.raise(Errors.OptionalChainingNoNew, this.state.startLoc);
            if (this.lookaheadCharCode() === 40) {
              return this.stopParseSubscript(base, state);
            }
          }
          state.optionalChainMember = optional = true;
          this.next();
        }
        if (!noCalls && this.match(10)) {
          return this.parseCoverCallAndAsyncArrowHead(base, startLoc, state, optional);
        } else {
          const computed = this.eat(0);
          if (computed || optional || this.eat(16)) {
            return this.parseMember(base, startLoc, state, computed, optional);
          } else {
            return this.stopParseSubscript(base, state);
          }
        }
      }
      stopParseSubscript(base, state) {
        state.stop = true;
        return base;
      }
      parseMember(base, startLoc, state, computed, optional) {
        const node = this.startNodeAt(startLoc);
        node.object = base;
        node.computed = computed;
        if (computed) {
          node.property = this.parseExpression();
          this.expect(3);
        } else if (this.match(139)) {
          if (base.type === "Super") {
            this.raise(Errors.SuperPrivateField, startLoc);
          }
          this.classScope.usePrivateName(this.state.value, this.state.startLoc);
          node.property = this.parsePrivateName();
        } else {
          node.property = this.parseIdentifier(true);
        }
        if (state.optionalChainMember) {
          node.optional = optional;
          return this.finishNode(node, "OptionalMemberExpression");
        } else {
          return this.finishNode(node, "MemberExpression");
        }
      }
      parseBind(base, startLoc, noCalls, state) {
        const node = this.startNodeAt(startLoc);
        node.object = base;
        this.next();
        node.callee = this.parseNoCallExpr();
        state.stop = true;
        return this.parseSubscripts(this.finishNode(node, "BindExpression"), startLoc, noCalls);
      }
      parseCoverCallAndAsyncArrowHead(base, startLoc, state, optional) {
        const oldMaybeInArrowParameters = this.state.maybeInArrowParameters;
        let refExpressionErrors = null;
        this.state.maybeInArrowParameters = true;
        this.next();
        const node = this.startNodeAt(startLoc);
        node.callee = base;
        const {
          maybeAsyncArrow,
          optionalChainMember
        } = state;
        if (maybeAsyncArrow) {
          this.expressionScope.enter(newAsyncArrowScope());
          refExpressionErrors = new ExpressionErrors();
        }
        if (optionalChainMember) {
          node.optional = optional;
        }
        if (optional) {
          node.arguments = this.parseCallExpressionArguments();
        } else {
          node.arguments = this.parseCallExpressionArguments(base.type !== "Super", node, refExpressionErrors);
        }
        let finishedNode = this.finishCallExpression(node, optionalChainMember);
        if (maybeAsyncArrow && this.shouldParseAsyncArrow() && !optional) {
          state.stop = true;
          this.checkDestructuringPrivate(refExpressionErrors);
          this.expressionScope.validateAsPattern();
          this.expressionScope.exit();
          finishedNode = this.parseAsyncArrowFromCallExpression(this.startNodeAt(startLoc), finishedNode);
        } else {
          if (maybeAsyncArrow) {
            this.checkExpressionErrors(refExpressionErrors, true);
            this.expressionScope.exit();
          }
          this.toReferencedArguments(finishedNode);
        }
        this.state.maybeInArrowParameters = oldMaybeInArrowParameters;
        return finishedNode;
      }
      toReferencedArguments(node, isParenthesizedExpr) {
        this.toReferencedListDeep(node.arguments, isParenthesizedExpr);
      }
      parseTaggedTemplateExpression(base, startLoc, state) {
        const node = this.startNodeAt(startLoc);
        node.tag = base;
        node.quasi = this.parseTemplate(true);
        if (state.optionalChainMember) {
          this.raise(Errors.OptionalChainingNoTemplate, startLoc);
        }
        return this.finishNode(node, "TaggedTemplateExpression");
      }
      atPossibleAsyncArrow(base) {
        return base.type === "Identifier" && base.name === "async" && this.state.lastTokEndLoc.index === base.end && !this.canInsertSemicolon() && base.end - base.start === 5 && this.offsetToSourcePos(base.start) === this.state.potentialArrowAt;
      }
      finishCallExpression(node, optional) {
        if (node.callee.type === "Import") {
          if (node.arguments.length === 0 || node.arguments.length > 2) {
            this.raise(Errors.ImportCallArity, node);
          } else {
            for (const arg of node.arguments) {
              if (arg.type === "SpreadElement") {
                this.raise(Errors.ImportCallSpreadArgument, arg);
              }
            }
          }
        }
        return this.finishNode(node, optional ? "OptionalCallExpression" : "CallExpression");
      }
      parseCallExpressionArguments(allowPlaceholder, nodeForExtra, refExpressionErrors) {
        const elts = [];
        let first = true;
        const oldInFSharpPipelineDirectBody = this.state.inFSharpPipelineDirectBody;
        this.state.inFSharpPipelineDirectBody = false;
        while (!this.eat(11)) {
          if (first) {
            first = false;
          } else {
            this.expect(12);
            if (this.match(11)) {
              if (nodeForExtra) {
                this.addTrailingCommaExtraToNode(nodeForExtra);
              }
              this.next();
              break;
            }
          }
          elts.push(this.parseExprListItem(11, false, refExpressionErrors, allowPlaceholder));
        }
        this.state.inFSharpPipelineDirectBody = oldInFSharpPipelineDirectBody;
        return elts;
      }
      shouldParseAsyncArrow() {
        return this.match(19) && !this.canInsertSemicolon();
      }
      parseAsyncArrowFromCallExpression(node, call) {
        var _call$extra;
        this.resetPreviousNodeTrailingComments(call);
        this.expect(19);
        this.parseArrowExpression(node, call.arguments, true, (_call$extra = call.extra) == null ? void 0 : _call$extra.trailingCommaLoc);
        if (call.innerComments) {
          setInnerComments(node, call.innerComments);
        }
        if (call.callee.trailingComments) {
          setInnerComments(node, call.callee.trailingComments);
        }
        return node;
      }
      parseNoCallExpr() {
        const startLoc = this.state.startLoc;
        return this.parseSubscripts(this.parseExprAtom(), startLoc, true);
      }
      parseExprAtom(refExpressionErrors) {
        let node;
        let decorators = null;
        const {
          type
        } = this.state;
        switch (type) {
          case 79:
            return this.parseSuper();
          case 83:
            node = this.startNode();
            this.next();
            if (this.match(16)) {
              return this.parseImportMetaPropertyOrPhaseCall(node);
            }
            if (this.match(10)) {
              if (this.optionFlags & 512) {
                return this.parseImportCall(node);
              } else {
                return this.finishNode(node, "Import");
              }
            } else {
              this.raise(Errors.UnsupportedImport, this.state.lastTokStartLoc);
              return this.finishNode(node, "Import");
            }
          case 78:
            node = this.startNode();
            this.next();
            return this.finishNode(node, "ThisExpression");
          case 90: {
            return this.parseDo(this.startNode(), false);
          }
          case 56:
          case 31: {
            this.readRegexp();
            return this.parseRegExpLiteral(this.state.value);
          }
          case 135:
            return this.parseNumericLiteral(this.state.value);
          case 136:
            return this.parseBigIntLiteral(this.state.value);
          case 134:
            return this.parseStringLiteral(this.state.value);
          case 84:
            return this.parseNullLiteral();
          case 85:
            return this.parseBooleanLiteral(true);
          case 86:
            return this.parseBooleanLiteral(false);
          case 10: {
            const canBeArrow = this.state.potentialArrowAt === this.state.start;
            return this.parseParenAndDistinguishExpression(canBeArrow);
          }
          case 0: {
            return this.parseArrayLike(3, false, refExpressionErrors);
          }
          case 5: {
            return this.parseObjectLike(8, false, false, refExpressionErrors);
          }
          case 68:
            return this.parseFunctionOrFunctionSent();
          case 26:
            decorators = this.parseDecorators();
          case 80:
            return this.parseClass(this.maybeTakeDecorators(decorators, this.startNode()), false);
          case 77:
            return this.parseNewOrNewTarget();
          case 25:
          case 24:
            return this.parseTemplate(false);
          case 15: {
            node = this.startNode();
            this.next();
            node.object = null;
            const callee = node.callee = this.parseNoCallExpr();
            if (callee.type === "MemberExpression") {
              return this.finishNode(node, "BindExpression");
            } else {
              throw this.raise(Errors.UnsupportedBind, callee);
            }
          }
          case 139: {
            this.raise(Errors.PrivateInExpectedIn, this.state.startLoc, {
              identifierName: this.state.value
            });
            return this.parsePrivateName();
          }
          case 33: {
            return this.parseTopicReferenceThenEqualsSign(54, "%");
          }
          case 32: {
            return this.parseTopicReferenceThenEqualsSign(44, "^");
          }
          case 37:
          case 38: {
            return this.parseTopicReference("hack");
          }
          case 44:
          case 54:
          case 27: {
            const pipeProposal = this.getPluginOption("pipelineOperator", "proposal");
            if (pipeProposal) {
              return this.parseTopicReference(pipeProposal);
            }
            throw this.unexpected();
          }
          case 47: {
            const lookaheadCh = this.input.codePointAt(this.nextTokenStart());
            if (isIdentifierStart(lookaheadCh) || lookaheadCh === 62) {
              throw this.expectOnePlugin(["jsx", "flow", "typescript"]);
            }
            throw this.unexpected();
          }
          default:
            if (type === 137) {
              return this.parseDecimalLiteral(this.state.value);
            } else if (type === 2 || type === 1) {
              return this.parseArrayLike(this.state.type === 2 ? 4 : 3, true);
            } else if (type === 6 || type === 7) {
              return this.parseObjectLike(this.state.type === 6 ? 9 : 8, false, true);
            }
            if (tokenIsIdentifier(type)) {
              if (this.isContextual(127) && this.lookaheadInLineCharCode() === 123) {
                return this.parseModuleExpression();
              }
              const canBeArrow = this.state.potentialArrowAt === this.state.start;
              const containsEsc = this.state.containsEsc;
              const id = this.parseIdentifier();
              if (!containsEsc && id.name === "async" && !this.canInsertSemicolon()) {
                const {
                  type: type2
                } = this.state;
                if (type2 === 68) {
                  this.resetPreviousNodeTrailingComments(id);
                  this.next();
                  return this.parseAsyncFunctionExpression(this.startNodeAtNode(id));
                } else if (tokenIsIdentifier(type2)) {
                  if (canBeArrow && this.lookaheadCharCode() === 61) {
                    return this.parseAsyncArrowUnaryFunction(this.startNodeAtNode(id));
                  } else {
                    return id;
                  }
                } else if (type2 === 90) {
                  this.resetPreviousNodeTrailingComments(id);
                  return this.parseDo(this.startNodeAtNode(id), true);
                }
              }
              if (canBeArrow && this.match(19) && !this.canInsertSemicolon()) {
                this.next();
                return this.parseArrowExpression(this.startNodeAtNode(id), [id], false);
              }
              return id;
            } else {
              throw this.unexpected();
            }
        }
      }
      parseTopicReferenceThenEqualsSign(topicTokenType, topicTokenValue) {
        const pipeProposal = this.getPluginOption("pipelineOperator", "proposal");
        if (pipeProposal) {
          this.state.type = topicTokenType;
          this.state.value = topicTokenValue;
          this.state.pos--;
          this.state.end--;
          this.state.endLoc = createPositionWithColumnOffset(this.state.endLoc, -1);
          return this.parseTopicReference(pipeProposal);
        }
        throw this.unexpected();
      }
      parseTopicReference(pipeProposal) {
        const node = this.startNode();
        const startLoc = this.state.startLoc;
        const tokenType = this.state.type;
        this.next();
        return this.finishTopicReference(node, startLoc, pipeProposal, tokenType);
      }
      finishTopicReference(node, startLoc, pipeProposal, tokenType) {
        if (this.testTopicReferenceConfiguration(pipeProposal, startLoc, tokenType)) {
          if (pipeProposal === "hack") {
            if (!this.topicReferenceIsAllowedInCurrentContext()) {
              this.raise(Errors.PipeTopicUnbound, startLoc);
            }
            this.registerTopicReference();
            return this.finishNode(node, "TopicReference");
          } else {
            if (!this.topicReferenceIsAllowedInCurrentContext()) {
              this.raise(Errors.PrimaryTopicNotAllowed, startLoc);
            }
            this.registerTopicReference();
            return this.finishNode(node, "PipelinePrimaryTopicReference");
          }
        } else {
          throw this.raise(Errors.PipeTopicUnconfiguredToken, startLoc, {
            token: tokenLabelName(tokenType)
          });
        }
      }
      testTopicReferenceConfiguration(pipeProposal, startLoc, tokenType) {
        switch (pipeProposal) {
          case "hack": {
            return this.hasPlugin(["pipelineOperator", {
              topicToken: tokenLabelName(tokenType)
            }]);
          }
          case "smart":
            return tokenType === 27;
          default:
            throw this.raise(Errors.PipeTopicRequiresHackPipes, startLoc);
        }
      }
      parseAsyncArrowUnaryFunction(node) {
        this.prodParam.enter(functionFlags(true, this.prodParam.hasYield));
        const params = [this.parseIdentifier()];
        this.prodParam.exit();
        if (this.hasPrecedingLineBreak()) {
          this.raise(Errors.LineTerminatorBeforeArrow, this.state.curPosition());
        }
        this.expect(19);
        return this.parseArrowExpression(node, params, true);
      }
      parseDo(node, isAsync) {
        this.expectPlugin("doExpressions");
        if (isAsync) {
          this.expectPlugin("asyncDoExpressions");
        }
        node.async = isAsync;
        this.next();
        const oldLabels = this.state.labels;
        this.state.labels = [];
        if (isAsync) {
          this.prodParam.enter(2);
          node.body = this.parseBlock();
          this.prodParam.exit();
        } else {
          node.body = this.parseBlock();
        }
        this.state.labels = oldLabels;
        return this.finishNode(node, "DoExpression");
      }
      parseSuper() {
        const node = this.startNode();
        this.next();
        if (this.match(10) && !this.scope.allowDirectSuper) {
          if (!(this.optionFlags & 16)) {
            this.raise(Errors.SuperNotAllowed, node);
          }
        } else if (!this.scope.allowSuper) {
          if (!(this.optionFlags & 16)) {
            this.raise(Errors.UnexpectedSuper, node);
          }
        }
        if (!this.match(10) && !this.match(0) && !this.match(16)) {
          this.raise(Errors.UnsupportedSuper, node);
        }
        return this.finishNode(node, "Super");
      }
      parsePrivateName() {
        const node = this.startNode();
        const id = this.startNodeAt(createPositionWithColumnOffset(this.state.startLoc, 1));
        const name = this.state.value;
        this.next();
        node.id = this.createIdentifier(id, name);
        return this.finishNode(node, "PrivateName");
      }
      parseFunctionOrFunctionSent() {
        const node = this.startNode();
        this.next();
        if (this.prodParam.hasYield && this.match(16)) {
          const meta = this.createIdentifier(this.startNodeAtNode(node), "function");
          this.next();
          if (this.match(103)) {
            this.expectPlugin("functionSent");
          } else if (!this.hasPlugin("functionSent")) {
            this.unexpected();
          }
          return this.parseMetaProperty(node, meta, "sent");
        }
        return this.parseFunction(node);
      }
      parseMetaProperty(node, meta, propertyName) {
        node.meta = meta;
        const containsEsc = this.state.containsEsc;
        node.property = this.parseIdentifier(true);
        if (node.property.name !== propertyName || containsEsc) {
          this.raise(Errors.UnsupportedMetaProperty, node.property, {
            target: meta.name,
            onlyValidPropertyName: propertyName
          });
        }
        return this.finishNode(node, "MetaProperty");
      }
      parseImportMetaPropertyOrPhaseCall(node) {
        this.next();
        if (this.isContextual(105) || this.isContextual(97)) {
          const isSource = this.isContextual(105);
          this.expectPlugin(isSource ? "sourcePhaseImports" : "deferredImportEvaluation");
          this.next();
          node.phase = isSource ? "source" : "defer";
          return this.parseImportCall(node);
        } else {
          const id = this.createIdentifierAt(this.startNodeAtNode(node), "import", this.state.lastTokStartLoc);
          if (this.isContextual(101)) {
            if (!this.inModule) {
              this.raise(Errors.ImportMetaOutsideModule, id);
            }
            this.sawUnambiguousESM = true;
          }
          return this.parseMetaProperty(node, id, "meta");
        }
      }
      parseLiteralAtNode(value, type, node) {
        this.addExtra(node, "rawValue", value);
        this.addExtra(node, "raw", this.input.slice(this.offsetToSourcePos(node.start), this.state.end));
        node.value = value;
        this.next();
        return this.finishNode(node, type);
      }
      parseLiteral(value, type) {
        const node = this.startNode();
        return this.parseLiteralAtNode(value, type, node);
      }
      parseStringLiteral(value) {
        return this.parseLiteral(value, "StringLiteral");
      }
      parseNumericLiteral(value) {
        return this.parseLiteral(value, "NumericLiteral");
      }
      parseBigIntLiteral(value) {
        return this.parseLiteral(value, "BigIntLiteral");
      }
      parseDecimalLiteral(value) {
        return this.parseLiteral(value, "DecimalLiteral");
      }
      parseRegExpLiteral(value) {
        const node = this.startNode();
        this.addExtra(node, "raw", this.input.slice(this.offsetToSourcePos(node.start), this.state.end));
        node.pattern = value.pattern;
        node.flags = value.flags;
        this.next();
        return this.finishNode(node, "RegExpLiteral");
      }
      parseBooleanLiteral(value) {
        const node = this.startNode();
        node.value = value;
        this.next();
        return this.finishNode(node, "BooleanLiteral");
      }
      parseNullLiteral() {
        const node = this.startNode();
        this.next();
        return this.finishNode(node, "NullLiteral");
      }
      parseParenAndDistinguishExpression(canBeArrow) {
        const startLoc = this.state.startLoc;
        let val;
        this.next();
        this.expressionScope.enter(newArrowHeadScope());
        const oldMaybeInArrowParameters = this.state.maybeInArrowParameters;
        const oldInFSharpPipelineDirectBody = this.state.inFSharpPipelineDirectBody;
        this.state.maybeInArrowParameters = true;
        this.state.inFSharpPipelineDirectBody = false;
        const innerStartLoc = this.state.startLoc;
        const exprList = [];
        const refExpressionErrors = new ExpressionErrors();
        let first = true;
        let spreadStartLoc;
        let optionalCommaStartLoc;
        while (!this.match(11)) {
          if (first) {
            first = false;
          } else {
            this.expect(12, refExpressionErrors.optionalParametersLoc === null ? null : refExpressionErrors.optionalParametersLoc);
            if (this.match(11)) {
              optionalCommaStartLoc = this.state.startLoc;
              break;
            }
          }
          if (this.match(21)) {
            const spreadNodeStartLoc = this.state.startLoc;
            spreadStartLoc = this.state.startLoc;
            exprList.push(this.parseParenItem(this.parseRestBinding(), spreadNodeStartLoc));
            if (!this.checkCommaAfterRest(41)) {
              break;
            }
          } else {
            exprList.push(this.parseMaybeAssignAllowInOrVoidPattern(11, refExpressionErrors, this.parseParenItem));
          }
        }
        const innerEndLoc = this.state.lastTokEndLoc;
        this.expect(11);
        this.state.maybeInArrowParameters = oldMaybeInArrowParameters;
        this.state.inFSharpPipelineDirectBody = oldInFSharpPipelineDirectBody;
        let arrowNode = this.startNodeAt(startLoc);
        if (canBeArrow && this.shouldParseArrow(exprList) && (arrowNode = this.parseArrow(arrowNode))) {
          this.checkDestructuringPrivate(refExpressionErrors);
          this.expressionScope.validateAsPattern();
          this.expressionScope.exit();
          this.parseArrowExpression(arrowNode, exprList, false);
          return arrowNode;
        }
        this.expressionScope.exit();
        if (!exprList.length) {
          this.unexpected(this.state.lastTokStartLoc);
        }
        if (optionalCommaStartLoc)
          this.unexpected(optionalCommaStartLoc);
        if (spreadStartLoc)
          this.unexpected(spreadStartLoc);
        this.checkExpressionErrors(refExpressionErrors, true);
        this.toReferencedListDeep(exprList, true);
        if (exprList.length > 1) {
          val = this.startNodeAt(innerStartLoc);
          val.expressions = exprList;
          this.finishNode(val, "SequenceExpression");
          this.resetEndLocation(val, innerEndLoc);
        } else {
          val = exprList[0];
        }
        return this.wrapParenthesis(startLoc, val);
      }
      wrapParenthesis(startLoc, expression) {
        if (!(this.optionFlags & 1024)) {
          this.addExtra(expression, "parenthesized", true);
          this.addExtra(expression, "parenStart", startLoc.index);
          this.takeSurroundingComments(expression, startLoc.index, this.state.lastTokEndLoc.index);
          return expression;
        }
        const parenExpression = this.startNodeAt(startLoc);
        parenExpression.expression = expression;
        return this.finishNode(parenExpression, "ParenthesizedExpression");
      }
      shouldParseArrow(params) {
        return !this.canInsertSemicolon();
      }
      parseArrow(node) {
        if (this.eat(19)) {
          return node;
        }
      }
      parseParenItem(node, startLoc) {
        return node;
      }
      parseNewOrNewTarget() {
        const node = this.startNode();
        this.next();
        if (this.match(16)) {
          const meta = this.createIdentifier(this.startNodeAtNode(node), "new");
          this.next();
          const metaProp = this.parseMetaProperty(node, meta, "target");
          if (!this.scope.allowNewTarget) {
            this.raise(Errors.UnexpectedNewTarget, metaProp);
          }
          return metaProp;
        }
        return this.parseNew(node);
      }
      parseNew(node) {
        this.parseNewCallee(node);
        if (this.eat(10)) {
          const args = this.parseExprList(11);
          this.toReferencedList(args);
          node.arguments = args;
        } else {
          node.arguments = [];
        }
        return this.finishNode(node, "NewExpression");
      }
      parseNewCallee(node) {
        const isImport = this.match(83);
        const callee = this.parseNoCallExpr();
        node.callee = callee;
        if (isImport && (callee.type === "Import" || callee.type === "ImportExpression")) {
          this.raise(Errors.ImportCallNotNewExpression, callee);
        }
      }
      parseTemplateElement(isTagged) {
        const {
          start,
          startLoc,
          end,
          value
        } = this.state;
        const elemStart = start + 1;
        const elem = this.startNodeAt(createPositionWithColumnOffset(startLoc, 1));
        if (value === null) {
          if (!isTagged) {
            this.raise(Errors.InvalidEscapeSequenceTemplate, createPositionWithColumnOffset(this.state.firstInvalidTemplateEscapePos, 1));
          }
        }
        const isTail = this.match(24);
        const endOffset = isTail ? -1 : -2;
        const elemEnd = end + endOffset;
        elem.value = {
          raw: this.input.slice(elemStart, elemEnd).replace(/\r\n?/g, "\n"),
          cooked: value === null ? null : value.slice(1, endOffset)
        };
        elem.tail = isTail;
        this.next();
        const finishedNode = this.finishNode(elem, "TemplateElement");
        this.resetEndLocation(finishedNode, createPositionWithColumnOffset(this.state.lastTokEndLoc, endOffset));
        return finishedNode;
      }
      parseTemplate(isTagged) {
        const node = this.startNode();
        let curElt = this.parseTemplateElement(isTagged);
        const quasis = [curElt];
        const substitutions = [];
        while (!curElt.tail) {
          substitutions.push(this.parseTemplateSubstitution());
          this.readTemplateContinuation();
          quasis.push(curElt = this.parseTemplateElement(isTagged));
        }
        node.expressions = substitutions;
        node.quasis = quasis;
        return this.finishNode(node, "TemplateLiteral");
      }
      parseTemplateSubstitution() {
        return this.parseExpression();
      }
      parseObjectLike(close, isPattern, isRecord, refExpressionErrors) {
        if (isRecord) {
          this.expectPlugin("recordAndTuple");
        }
        const oldInFSharpPipelineDirectBody = this.state.inFSharpPipelineDirectBody;
        this.state.inFSharpPipelineDirectBody = false;
        let sawProto = false;
        let first = true;
        const node = this.startNode();
        node.properties = [];
        this.next();
        while (!this.match(close)) {
          if (first) {
            first = false;
          } else {
            this.expect(12);
            if (this.match(close)) {
              this.addTrailingCommaExtraToNode(node);
              break;
            }
          }
          let prop;
          if (isPattern) {
            prop = this.parseBindingProperty();
          } else {
            prop = this.parsePropertyDefinition(refExpressionErrors);
            sawProto = this.checkProto(prop, isRecord, sawProto, refExpressionErrors);
          }
          if (isRecord && !this.isObjectProperty(prop) && prop.type !== "SpreadElement") {
            this.raise(Errors.InvalidRecordProperty, prop);
          }
          if (prop.shorthand) {
            this.addExtra(prop, "shorthand", true);
          }
          node.properties.push(prop);
        }
        this.next();
        this.state.inFSharpPipelineDirectBody = oldInFSharpPipelineDirectBody;
        let type = "ObjectExpression";
        if (isPattern) {
          type = "ObjectPattern";
        } else if (isRecord) {
          type = "RecordExpression";
        }
        return this.finishNode(node, type);
      }
      addTrailingCommaExtraToNode(node) {
        this.addExtra(node, "trailingComma", this.state.lastTokStartLoc.index);
        this.addExtra(node, "trailingCommaLoc", this.state.lastTokStartLoc, false);
      }
      maybeAsyncOrAccessorProp(prop) {
        return !prop.computed && prop.key.type === "Identifier" && (this.isLiteralPropertyName() || this.match(0) || this.match(55));
      }
      parsePropertyDefinition(refExpressionErrors) {
        let decorators = [];
        if (this.match(26)) {
          if (this.hasPlugin("decorators")) {
            this.raise(Errors.UnsupportedPropertyDecorator, this.state.startLoc);
          }
          while (this.match(26)) {
            decorators.push(this.parseDecorator());
          }
        }
        const prop = this.startNode();
        let isAsync = false;
        let isAccessor = false;
        let startLoc;
        if (this.match(21)) {
          if (decorators.length)
            this.unexpected();
          return this.parseSpread();
        }
        if (decorators.length) {
          prop.decorators = decorators;
          decorators = [];
        }
        prop.method = false;
        if (refExpressionErrors) {
          startLoc = this.state.startLoc;
        }
        let isGenerator = this.eat(55);
        this.parsePropertyNamePrefixOperator(prop);
        const containsEsc = this.state.containsEsc;
        this.parsePropertyName(prop, refExpressionErrors);
        if (!isGenerator && !containsEsc && this.maybeAsyncOrAccessorProp(prop)) {
          const {
            key
          } = prop;
          const keyName = key.name;
          if (keyName === "async" && !this.hasPrecedingLineBreak()) {
            isAsync = true;
            this.resetPreviousNodeTrailingComments(key);
            isGenerator = this.eat(55);
            this.parsePropertyName(prop);
          }
          if (keyName === "get" || keyName === "set") {
            isAccessor = true;
            this.resetPreviousNodeTrailingComments(key);
            prop.kind = keyName;
            if (this.match(55)) {
              isGenerator = true;
              this.raise(Errors.AccessorIsGenerator, this.state.curPosition(), {
                kind: keyName
              });
              this.next();
            }
            this.parsePropertyName(prop);
          }
        }
        return this.parseObjPropValue(prop, startLoc, isGenerator, isAsync, false, isAccessor, refExpressionErrors);
      }
      getGetterSetterExpectedParamCount(method) {
        return method.kind === "get" ? 0 : 1;
      }
      getObjectOrClassMethodParams(method) {
        return method.params;
      }
      checkGetterSetterParams(method) {
        var _params;
        const paramCount = this.getGetterSetterExpectedParamCount(method);
        const params = this.getObjectOrClassMethodParams(method);
        if (params.length !== paramCount) {
          this.raise(method.kind === "get" ? Errors.BadGetterArity : Errors.BadSetterArity, method);
        }
        if (method.kind === "set" && ((_params = params[params.length - 1]) == null ? void 0 : _params.type) === "RestElement") {
          this.raise(Errors.BadSetterRestParameter, method);
        }
      }
      parseObjectMethod(prop, isGenerator, isAsync, isPattern, isAccessor) {
        if (isAccessor) {
          const finishedProp = this.parseMethod(prop, isGenerator, false, false, false, "ObjectMethod");
          this.checkGetterSetterParams(finishedProp);
          return finishedProp;
        }
        if (isAsync || isGenerator || this.match(10)) {
          if (isPattern)
            this.unexpected();
          prop.kind = "method";
          prop.method = true;
          return this.parseMethod(prop, isGenerator, isAsync, false, false, "ObjectMethod");
        }
      }
      parseObjectProperty(prop, startLoc, isPattern, refExpressionErrors) {
        prop.shorthand = false;
        if (this.eat(14)) {
          prop.value = isPattern ? this.parseMaybeDefault(this.state.startLoc) : this.parseMaybeAssignAllowInOrVoidPattern(8, refExpressionErrors);
          return this.finishObjectProperty(prop);
        }
        if (!prop.computed && prop.key.type === "Identifier") {
          this.checkReservedWord(prop.key.name, prop.key.loc.start, true, false);
          if (isPattern) {
            prop.value = this.parseMaybeDefault(startLoc, this.cloneIdentifier(prop.key));
          } else if (this.match(29)) {
            const shorthandAssignLoc = this.state.startLoc;
            if (refExpressionErrors != null) {
              if (refExpressionErrors.shorthandAssignLoc === null) {
                refExpressionErrors.shorthandAssignLoc = shorthandAssignLoc;
              }
            } else {
              this.raise(Errors.InvalidCoverInitializedName, shorthandAssignLoc);
            }
            prop.value = this.parseMaybeDefault(startLoc, this.cloneIdentifier(prop.key));
          } else {
            prop.value = this.cloneIdentifier(prop.key);
          }
          prop.shorthand = true;
          return this.finishObjectProperty(prop);
        }
      }
      finishObjectProperty(node) {
        return this.finishNode(node, "ObjectProperty");
      }
      parseObjPropValue(prop, startLoc, isGenerator, isAsync, isPattern, isAccessor, refExpressionErrors) {
        const node = this.parseObjectMethod(prop, isGenerator, isAsync, isPattern, isAccessor) || this.parseObjectProperty(prop, startLoc, isPattern, refExpressionErrors);
        if (!node)
          this.unexpected();
        return node;
      }
      parsePropertyName(prop, refExpressionErrors) {
        if (this.eat(0)) {
          prop.computed = true;
          prop.key = this.parseMaybeAssignAllowIn();
          this.expect(3);
        } else {
          const {
            type,
            value
          } = this.state;
          let key;
          if (tokenIsKeywordOrIdentifier(type)) {
            key = this.parseIdentifier(true);
          } else {
            switch (type) {
              case 135:
                key = this.parseNumericLiteral(value);
                break;
              case 134:
                key = this.parseStringLiteral(value);
                break;
              case 136:
                key = this.parseBigIntLiteral(value);
                break;
              case 139: {
                const privateKeyLoc = this.state.startLoc;
                if (refExpressionErrors != null) {
                  if (refExpressionErrors.privateKeyLoc === null) {
                    refExpressionErrors.privateKeyLoc = privateKeyLoc;
                  }
                } else {
                  this.raise(Errors.UnexpectedPrivateField, privateKeyLoc);
                }
                key = this.parsePrivateName();
                break;
              }
              default:
                if (type === 137) {
                  key = this.parseDecimalLiteral(value);
                  break;
                }
                this.unexpected();
            }
          }
          prop.key = key;
          if (type !== 139) {
            prop.computed = false;
          }
        }
      }
      initFunction(node, isAsync) {
        node.id = null;
        node.generator = false;
        node.async = isAsync;
      }
      parseMethod(node, isGenerator, isAsync, isConstructor, allowDirectSuper, type, inClassScope = false) {
        this.initFunction(node, isAsync);
        node.generator = isGenerator;
        this.scope.enter(514 | 16 | (inClassScope ? 576 : 0) | (allowDirectSuper ? 32 : 0));
        this.prodParam.enter(functionFlags(isAsync, node.generator));
        this.parseFunctionParams(node, isConstructor);
        const finishedNode = this.parseFunctionBodyAndFinish(node, type, true);
        this.prodParam.exit();
        this.scope.exit();
        return finishedNode;
      }
      parseArrayLike(close, isTuple, refExpressionErrors) {
        if (isTuple) {
          this.expectPlugin("recordAndTuple");
        }
        const oldInFSharpPipelineDirectBody = this.state.inFSharpPipelineDirectBody;
        this.state.inFSharpPipelineDirectBody = false;
        const node = this.startNode();
        this.next();
        node.elements = this.parseExprList(close, !isTuple, refExpressionErrors, node);
        this.state.inFSharpPipelineDirectBody = oldInFSharpPipelineDirectBody;
        return this.finishNode(node, isTuple ? "TupleExpression" : "ArrayExpression");
      }
      parseArrowExpression(node, params, isAsync, trailingCommaLoc) {
        this.scope.enter(514 | 4);
        let flags = functionFlags(isAsync, false);
        if (!this.match(5) && this.prodParam.hasIn) {
          flags |= 8;
        }
        this.prodParam.enter(flags);
        this.initFunction(node, isAsync);
        const oldMaybeInArrowParameters = this.state.maybeInArrowParameters;
        if (params) {
          this.state.maybeInArrowParameters = true;
          this.setArrowFunctionParameters(node, params, trailingCommaLoc);
        }
        this.state.maybeInArrowParameters = false;
        this.parseFunctionBody(node, true);
        this.prodParam.exit();
        this.scope.exit();
        this.state.maybeInArrowParameters = oldMaybeInArrowParameters;
        return this.finishNode(node, "ArrowFunctionExpression");
      }
      setArrowFunctionParameters(node, params, trailingCommaLoc) {
        this.toAssignableList(params, trailingCommaLoc, false);
        node.params = params;
      }
      parseFunctionBodyAndFinish(node, type, isMethod = false) {
        this.parseFunctionBody(node, false, isMethod);
        return this.finishNode(node, type);
      }
      parseFunctionBody(node, allowExpression, isMethod = false) {
        const isExpression = allowExpression && !this.match(5);
        this.expressionScope.enter(newExpressionScope());
        if (isExpression) {
          node.body = this.parseMaybeAssign();
          this.checkParams(node, false, allowExpression, false);
        } else {
          const oldStrict = this.state.strict;
          const oldLabels = this.state.labels;
          this.state.labels = [];
          this.prodParam.enter(this.prodParam.currentFlags() | 4);
          node.body = this.parseBlock(true, false, (hasStrictModeDirective) => {
            const nonSimple = !this.isSimpleParamList(node.params);
            if (hasStrictModeDirective && nonSimple) {
              this.raise(Errors.IllegalLanguageModeDirective, (node.kind === "method" || node.kind === "constructor") && !!node.key ? node.key.loc.end : node);
            }
            const strictModeChanged = !oldStrict && this.state.strict;
            this.checkParams(node, !this.state.strict && !allowExpression && !isMethod && !nonSimple, allowExpression, strictModeChanged);
            if (this.state.strict && node.id) {
              this.checkIdentifier(node.id, 65, strictModeChanged);
            }
          });
          this.prodParam.exit();
          this.state.labels = oldLabels;
        }
        this.expressionScope.exit();
      }
      isSimpleParameter(node) {
        return node.type === "Identifier";
      }
      isSimpleParamList(params) {
        for (let i = 0, len = params.length; i < len; i++) {
          if (!this.isSimpleParameter(params[i]))
            return false;
        }
        return true;
      }
      checkParams(node, allowDuplicates, isArrowFunction, strictModeChanged = true) {
        const checkClashes = !allowDuplicates && /* @__PURE__ */ new Set();
        const formalParameters = {
          type: "FormalParameters"
        };
        for (const param of node.params) {
          this.checkLVal(param, formalParameters, 5, checkClashes, strictModeChanged);
        }
      }
      parseExprList(close, allowEmpty, refExpressionErrors, nodeForExtra) {
        const elts = [];
        let first = true;
        while (!this.eat(close)) {
          if (first) {
            first = false;
          } else {
            this.expect(12);
            if (this.match(close)) {
              if (nodeForExtra) {
                this.addTrailingCommaExtraToNode(nodeForExtra);
              }
              this.next();
              break;
            }
          }
          elts.push(this.parseExprListItem(close, allowEmpty, refExpressionErrors));
        }
        return elts;
      }
      parseExprListItem(close, allowEmpty, refExpressionErrors, allowPlaceholder) {
        let elt;
        if (this.match(12)) {
          if (!allowEmpty) {
            this.raise(Errors.UnexpectedToken, this.state.curPosition(), {
              unexpected: ","
            });
          }
          elt = null;
        } else if (this.match(21)) {
          const spreadNodeStartLoc = this.state.startLoc;
          elt = this.parseParenItem(this.parseSpread(refExpressionErrors), spreadNodeStartLoc);
        } else if (this.match(17)) {
          this.expectPlugin("partialApplication");
          if (!allowPlaceholder) {
            this.raise(Errors.UnexpectedArgumentPlaceholder, this.state.startLoc);
          }
          const node = this.startNode();
          this.next();
          elt = this.finishNode(node, "ArgumentPlaceholder");
        } else {
          elt = this.parseMaybeAssignAllowInOrVoidPattern(close, refExpressionErrors, this.parseParenItem);
        }
        return elt;
      }
      parseIdentifier(liberal) {
        const node = this.startNode();
        const name = this.parseIdentifierName(liberal);
        return this.createIdentifier(node, name);
      }
      createIdentifier(node, name) {
        node.name = name;
        node.loc.identifierName = name;
        return this.finishNode(node, "Identifier");
      }
      createIdentifierAt(node, name, endLoc) {
        node.name = name;
        node.loc.identifierName = name;
        return this.finishNodeAt(node, "Identifier", endLoc);
      }
      parseIdentifierName(liberal) {
        let name;
        const {
          startLoc,
          type
        } = this.state;
        if (tokenIsKeywordOrIdentifier(type)) {
          name = this.state.value;
        } else {
          this.unexpected();
        }
        const tokenIsKeyword2 = tokenKeywordOrIdentifierIsKeyword(type);
        if (liberal) {
          if (tokenIsKeyword2) {
            this.replaceToken(132);
          }
        } else {
          this.checkReservedWord(name, startLoc, tokenIsKeyword2, false);
        }
        this.next();
        return name;
      }
      checkReservedWord(word, startLoc, checkKeywords, isBinding) {
        if (word.length > 10) {
          return;
        }
        if (!canBeReservedWord(word)) {
          return;
        }
        if (checkKeywords && isKeyword(word)) {
          this.raise(Errors.UnexpectedKeyword, startLoc, {
            keyword: word
          });
          return;
        }
        const reservedTest = !this.state.strict ? isReservedWord : isBinding ? isStrictBindReservedWord : isStrictReservedWord;
        if (reservedTest(word, this.inModule)) {
          this.raise(Errors.UnexpectedReservedWord, startLoc, {
            reservedWord: word
          });
          return;
        } else if (word === "yield") {
          if (this.prodParam.hasYield) {
            this.raise(Errors.YieldBindingIdentifier, startLoc);
            return;
          }
        } else if (word === "await") {
          if (this.prodParam.hasAwait) {
            this.raise(Errors.AwaitBindingIdentifier, startLoc);
            return;
          }
          if (this.scope.inStaticBlock) {
            this.raise(Errors.AwaitBindingIdentifierInStaticBlock, startLoc);
            return;
          }
          this.expressionScope.recordAsyncArrowParametersError(startLoc);
        } else if (word === "arguments") {
          if (this.scope.inClassAndNotInNonArrowFunction) {
            this.raise(Errors.ArgumentsInClass, startLoc);
            return;
          }
        }
      }
      recordAwaitIfAllowed() {
        const isAwaitAllowed = this.prodParam.hasAwait;
        if (isAwaitAllowed && !this.scope.inFunction) {
          this.state.hasTopLevelAwait = true;
        }
        return isAwaitAllowed;
      }
      parseAwait(startLoc) {
        const node = this.startNodeAt(startLoc);
        this.expressionScope.recordParameterInitializerError(Errors.AwaitExpressionFormalParameter, node);
        if (this.eat(55)) {
          this.raise(Errors.ObsoleteAwaitStar, node);
        }
        if (!this.scope.inFunction && !(this.optionFlags & 1)) {
          if (this.isAmbiguousPrefixOrIdentifier()) {
            this.ambiguousScriptDifferentAst = true;
          } else {
            this.sawUnambiguousESM = true;
          }
        }
        if (!this.state.soloAwait) {
          node.argument = this.parseMaybeUnary(null, true);
        }
        return this.finishNode(node, "AwaitExpression");
      }
      isAmbiguousPrefixOrIdentifier() {
        if (this.hasPrecedingLineBreak())
          return true;
        const {
          type
        } = this.state;
        return type === 53 || type === 10 || type === 0 || tokenIsTemplate(type) || type === 102 && !this.state.containsEsc || type === 138 || type === 56 || this.hasPlugin("v8intrinsic") && type === 54;
      }
      parseYield(startLoc) {
        const node = this.startNodeAt(startLoc);
        this.expressionScope.recordParameterInitializerError(Errors.YieldInParameter, node);
        let delegating = false;
        let argument = null;
        if (!this.hasPrecedingLineBreak()) {
          delegating = this.eat(55);
          switch (this.state.type) {
            case 13:
            case 140:
            case 8:
            case 11:
            case 3:
            case 9:
            case 14:
            case 12:
              if (!delegating)
                break;
            default:
              argument = this.parseMaybeAssign();
          }
        }
        node.delegate = delegating;
        node.argument = argument;
        return this.finishNode(node, "YieldExpression");
      }
      parseImportCall(node) {
        this.next();
        node.source = this.parseMaybeAssignAllowIn();
        node.options = null;
        if (this.eat(12)) {
          if (!this.match(11)) {
            node.options = this.parseMaybeAssignAllowIn();
            if (this.eat(12)) {
              this.addTrailingCommaExtraToNode(node.options);
              if (!this.match(11)) {
                do {
                  this.parseMaybeAssignAllowIn();
                } while (this.eat(12) && !this.match(11));
                this.raise(Errors.ImportCallArity, node);
              }
            }
          } else {
            this.addTrailingCommaExtraToNode(node.source);
          }
        }
        this.expect(11);
        return this.finishNode(node, "ImportExpression");
      }
      checkPipelineAtInfixOperator(left, leftStartLoc) {
        if (this.hasPlugin(["pipelineOperator", {
          proposal: "smart"
        }])) {
          if (left.type === "SequenceExpression") {
            this.raise(Errors.PipelineHeadSequenceExpression, leftStartLoc);
          }
        }
      }
      parseSmartPipelineBodyInStyle(childExpr, startLoc) {
        if (this.isSimpleReference(childExpr)) {
          const bodyNode = this.startNodeAt(startLoc);
          bodyNode.callee = childExpr;
          return this.finishNode(bodyNode, "PipelineBareFunction");
        } else {
          const bodyNode = this.startNodeAt(startLoc);
          this.checkSmartPipeTopicBodyEarlyErrors(startLoc);
          bodyNode.expression = childExpr;
          return this.finishNode(bodyNode, "PipelineTopicExpression");
        }
      }
      isSimpleReference(expression) {
        switch (expression.type) {
          case "MemberExpression":
            return !expression.computed && this.isSimpleReference(expression.object);
          case "Identifier":
            return true;
          default:
            return false;
        }
      }
      checkSmartPipeTopicBodyEarlyErrors(startLoc) {
        if (this.match(19)) {
          throw this.raise(Errors.PipelineBodyNoArrow, this.state.startLoc);
        }
        if (!this.topicReferenceWasUsedInCurrentContext()) {
          this.raise(Errors.PipelineTopicUnused, startLoc);
        }
      }
      withTopicBindingContext(callback) {
        const outerContextTopicState = this.state.topicContext;
        this.state.topicContext = {
          maxNumOfResolvableTopics: 1,
          maxTopicIndex: null
        };
        try {
          return callback();
        } finally {
          this.state.topicContext = outerContextTopicState;
        }
      }
      withSmartMixTopicForbiddingContext(callback) {
        if (this.hasPlugin(["pipelineOperator", {
          proposal: "smart"
        }])) {
          const outerContextTopicState = this.state.topicContext;
          this.state.topicContext = {
            maxNumOfResolvableTopics: 0,
            maxTopicIndex: null
          };
          try {
            return callback();
          } finally {
            this.state.topicContext = outerContextTopicState;
          }
        } else {
          return callback();
        }
      }
      withSoloAwaitPermittingContext(callback) {
        const outerContextSoloAwaitState = this.state.soloAwait;
        this.state.soloAwait = true;
        try {
          return callback();
        } finally {
          this.state.soloAwait = outerContextSoloAwaitState;
        }
      }
      allowInAnd(callback) {
        const flags = this.prodParam.currentFlags();
        const prodParamToSet = 8 & ~flags;
        if (prodParamToSet) {
          this.prodParam.enter(flags | 8);
          try {
            return callback();
          } finally {
            this.prodParam.exit();
          }
        }
        return callback();
      }
      disallowInAnd(callback) {
        const flags = this.prodParam.currentFlags();
        const prodParamToClear = 8 & flags;
        if (prodParamToClear) {
          this.prodParam.enter(flags & ~8);
          try {
            return callback();
          } finally {
            this.prodParam.exit();
          }
        }
        return callback();
      }
      registerTopicReference() {
        this.state.topicContext.maxTopicIndex = 0;
      }
      topicReferenceIsAllowedInCurrentContext() {
        return this.state.topicContext.maxNumOfResolvableTopics >= 1;
      }
      topicReferenceWasUsedInCurrentContext() {
        return this.state.topicContext.maxTopicIndex != null && this.state.topicContext.maxTopicIndex >= 0;
      }
      parseFSharpPipelineBody(prec) {
        const startLoc = this.state.startLoc;
        this.state.potentialArrowAt = this.state.start;
        const oldInFSharpPipelineDirectBody = this.state.inFSharpPipelineDirectBody;
        this.state.inFSharpPipelineDirectBody = true;
        const ret = this.parseExprOp(this.parseMaybeUnaryOrPrivate(), startLoc, prec);
        this.state.inFSharpPipelineDirectBody = oldInFSharpPipelineDirectBody;
        return ret;
      }
      parseModuleExpression() {
        this.expectPlugin("moduleBlocks");
        const node = this.startNode();
        this.next();
        if (!this.match(5)) {
          this.unexpected(null, 5);
        }
        const program = this.startNodeAt(this.state.endLoc);
        this.next();
        const revertScopes = this.initializeScopes(true);
        this.enterInitialScopes();
        try {
          node.body = this.parseProgram(program, 8, "module");
        } finally {
          revertScopes();
        }
        return this.finishNode(node, "ModuleExpression");
      }
      parseVoidPattern(refExpressionErrors) {
        this.expectPlugin("discardBinding");
        const node = this.startNode();
        if (refExpressionErrors != null) {
          refExpressionErrors.voidPatternLoc = this.state.startLoc;
        }
        this.next();
        return this.finishNode(node, "VoidPattern");
      }
      parseMaybeAssignAllowInOrVoidPattern(close, refExpressionErrors, afterLeftParse) {
        if (refExpressionErrors != null && this.match(88)) {
          const nextCode = this.lookaheadCharCode();
          if (nextCode === 44 || nextCode === (close === 3 ? 93 : close === 8 ? 125 : 41) || nextCode === 61) {
            return this.parseMaybeDefault(this.state.startLoc, this.parseVoidPattern(refExpressionErrors));
          }
        }
        return this.parseMaybeAssignAllowIn(refExpressionErrors, afterLeftParse);
      }
      parsePropertyNamePrefixOperator(prop) {
      }
    };
    var loopLabel = {
      kind: 1
    };
    var switchLabel = {
      kind: 2
    };
    var loneSurrogate = /[\uD800-\uDFFF]/u;
    var keywordRelationalOperator = /in(?:stanceof)?/y;
    function babel7CompatTokens(tokens, input, startIndex) {
      for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i];
        const {
          type
        } = token;
        if (typeof type === "number") {
          if (type === 139) {
            const {
              loc,
              start,
              value,
              end
            } = token;
            const hashEndPos = start + 1;
            const hashEndLoc = createPositionWithColumnOffset(loc.start, 1);
            tokens.splice(i, 1, new Token({
              type: getExportedToken(27),
              value: "#",
              start,
              end: hashEndPos,
              startLoc: loc.start,
              endLoc: hashEndLoc
            }), new Token({
              type: getExportedToken(132),
              value,
              start: hashEndPos,
              end,
              startLoc: hashEndLoc,
              endLoc: loc.end
            }));
            i++;
            continue;
          }
          if (tokenIsTemplate(type)) {
            const {
              loc,
              start,
              value,
              end
            } = token;
            const backquoteEnd = start + 1;
            const backquoteEndLoc = createPositionWithColumnOffset(loc.start, 1);
            let startToken;
            if (input.charCodeAt(start - startIndex) === 96) {
              startToken = new Token({
                type: getExportedToken(22),
                value: "`",
                start,
                end: backquoteEnd,
                startLoc: loc.start,
                endLoc: backquoteEndLoc
              });
            } else {
              startToken = new Token({
                type: getExportedToken(8),
                value: "}",
                start,
                end: backquoteEnd,
                startLoc: loc.start,
                endLoc: backquoteEndLoc
              });
            }
            let templateValue, templateElementEnd, templateElementEndLoc, endToken;
            if (type === 24) {
              templateElementEnd = end - 1;
              templateElementEndLoc = createPositionWithColumnOffset(loc.end, -1);
              templateValue = value === null ? null : value.slice(1, -1);
              endToken = new Token({
                type: getExportedToken(22),
                value: "`",
                start: templateElementEnd,
                end,
                startLoc: templateElementEndLoc,
                endLoc: loc.end
              });
            } else {
              templateElementEnd = end - 2;
              templateElementEndLoc = createPositionWithColumnOffset(loc.end, -2);
              templateValue = value === null ? null : value.slice(1, -2);
              endToken = new Token({
                type: getExportedToken(23),
                value: "${",
                start: templateElementEnd,
                end,
                startLoc: templateElementEndLoc,
                endLoc: loc.end
              });
            }
            tokens.splice(i, 1, startToken, new Token({
              type: getExportedToken(20),
              value: templateValue,
              start: backquoteEnd,
              end: templateElementEnd,
              startLoc: backquoteEndLoc,
              endLoc: templateElementEndLoc
            }), endToken);
            i += 2;
            continue;
          }
          token.type = getExportedToken(type);
        }
      }
      return tokens;
    }
    var StatementParser = class extends ExpressionParser {
      parseTopLevel(file, program) {
        file.program = this.parseProgram(program, 140, this.options.sourceType === "module" ? "module" : "script");
        file.comments = this.comments;
        if (this.optionFlags & 256) {
          file.tokens = babel7CompatTokens(this.tokens, this.input, this.startIndex);
        }
        return this.finishNode(file, "File");
      }
      parseProgram(program, end, sourceType) {
        program.sourceType = sourceType;
        program.interpreter = this.parseInterpreterDirective();
        this.parseBlockBody(program, true, true, end);
        if (this.inModule) {
          if (!(this.optionFlags & 64) && this.scope.undefinedExports.size > 0) {
            for (const [localName, at] of Array.from(this.scope.undefinedExports)) {
              this.raise(Errors.ModuleExportUndefined, at, {
                localName
              });
            }
          }
          this.addExtra(program, "topLevelAwait", this.state.hasTopLevelAwait);
        }
        let finishedProgram;
        if (end === 140) {
          finishedProgram = this.finishNode(program, "Program");
        } else {
          finishedProgram = this.finishNodeAt(program, "Program", createPositionWithColumnOffset(this.state.startLoc, -1));
        }
        return finishedProgram;
      }
      stmtToDirective(stmt) {
        const directive = this.castNodeTo(stmt, "Directive");
        const directiveLiteral = this.castNodeTo(stmt.expression, "DirectiveLiteral");
        const expressionValue = directiveLiteral.value;
        const raw = this.input.slice(this.offsetToSourcePos(directiveLiteral.start), this.offsetToSourcePos(directiveLiteral.end));
        const val = directiveLiteral.value = raw.slice(1, -1);
        this.addExtra(directiveLiteral, "raw", raw);
        this.addExtra(directiveLiteral, "rawValue", val);
        this.addExtra(directiveLiteral, "expressionValue", expressionValue);
        directive.value = directiveLiteral;
        delete stmt.expression;
        return directive;
      }
      parseInterpreterDirective() {
        if (!this.match(28)) {
          return null;
        }
        const node = this.startNode();
        node.value = this.state.value;
        this.next();
        return this.finishNode(node, "InterpreterDirective");
      }
      isLet() {
        if (!this.isContextual(100)) {
          return false;
        }
        return this.hasFollowingBindingAtom();
      }
      isUsing() {
        if (!this.isContextual(107)) {
          return false;
        }
        return this.nextTokenIsIdentifierOnSameLine();
      }
      isForUsing() {
        if (!this.isContextual(107)) {
          return false;
        }
        const next = this.nextTokenInLineStart();
        const nextCh = this.codePointAtPos(next);
        if (this.isUnparsedContextual(next, "of")) {
          const nextCharAfterOf = this.lookaheadCharCodeSince(next + 2);
          if (nextCharAfterOf !== 61 && nextCharAfterOf !== 58 && nextCharAfterOf !== 59) {
            return false;
          }
        }
        if (this.chStartsBindingIdentifier(nextCh, next) || this.isUnparsedContextual(next, "void")) {
          return true;
        }
        return false;
      }
      nextTokenIsIdentifierOnSameLine() {
        const next = this.nextTokenInLineStart();
        const nextCh = this.codePointAtPos(next);
        return this.chStartsBindingIdentifier(nextCh, next);
      }
      isAwaitUsing() {
        if (!this.isContextual(96)) {
          return false;
        }
        let next = this.nextTokenInLineStart();
        if (this.isUnparsedContextual(next, "using")) {
          next = this.nextTokenInLineStartSince(next + 5);
          const nextCh = this.codePointAtPos(next);
          if (this.chStartsBindingIdentifier(nextCh, next)) {
            return true;
          }
        }
        return false;
      }
      chStartsBindingIdentifier(ch, pos) {
        if (isIdentifierStart(ch)) {
          keywordRelationalOperator.lastIndex = pos;
          if (keywordRelationalOperator.test(this.input)) {
            const endCh = this.codePointAtPos(keywordRelationalOperator.lastIndex);
            if (!isIdentifierChar(endCh) && endCh !== 92) {
              return false;
            }
          }
          return true;
        } else if (ch === 92) {
          return true;
        } else {
          return false;
        }
      }
      chStartsBindingPattern(ch) {
        return ch === 91 || ch === 123;
      }
      hasFollowingBindingAtom() {
        const next = this.nextTokenStart();
        const nextCh = this.codePointAtPos(next);
        return this.chStartsBindingPattern(nextCh) || this.chStartsBindingIdentifier(nextCh, next);
      }
      hasInLineFollowingBindingIdentifierOrBrace() {
        const next = this.nextTokenInLineStart();
        const nextCh = this.codePointAtPos(next);
        return nextCh === 123 || this.chStartsBindingIdentifier(nextCh, next);
      }
      allowsUsing() {
        return (this.scope.inModule || !this.scope.inTopLevel) && !this.scope.inBareCaseStatement;
      }
      parseModuleItem() {
        return this.parseStatementLike(1 | 2 | 4 | 8);
      }
      parseStatementListItem() {
        return this.parseStatementLike(2 | 4 | (!this.options.annexB || this.state.strict ? 0 : 8));
      }
      parseStatementOrSloppyAnnexBFunctionDeclaration(allowLabeledFunction = false) {
        let flags = 0;
        if (this.options.annexB && !this.state.strict) {
          flags |= 4;
          if (allowLabeledFunction) {
            flags |= 8;
          }
        }
        return this.parseStatementLike(flags);
      }
      parseStatement() {
        return this.parseStatementLike(0);
      }
      parseStatementLike(flags) {
        let decorators = null;
        if (this.match(26)) {
          decorators = this.parseDecorators(true);
        }
        return this.parseStatementContent(flags, decorators);
      }
      parseStatementContent(flags, decorators) {
        const startType = this.state.type;
        const node = this.startNode();
        const allowDeclaration = !!(flags & 2);
        const allowFunctionDeclaration = !!(flags & 4);
        const topLevel = flags & 1;
        switch (startType) {
          case 60:
            return this.parseBreakContinueStatement(node, true);
          case 63:
            return this.parseBreakContinueStatement(node, false);
          case 64:
            return this.parseDebuggerStatement(node);
          case 90:
            return this.parseDoWhileStatement(node);
          case 91:
            return this.parseForStatement(node);
          case 68:
            if (this.lookaheadCharCode() === 46)
              break;
            if (!allowFunctionDeclaration) {
              this.raise(this.state.strict ? Errors.StrictFunction : this.options.annexB ? Errors.SloppyFunctionAnnexB : Errors.SloppyFunction, this.state.startLoc);
            }
            return this.parseFunctionStatement(node, false, !allowDeclaration && allowFunctionDeclaration);
          case 80:
            if (!allowDeclaration)
              this.unexpected();
            return this.parseClass(this.maybeTakeDecorators(decorators, node), true);
          case 69:
            return this.parseIfStatement(node);
          case 70:
            return this.parseReturnStatement(node);
          case 71:
            return this.parseSwitchStatement(node);
          case 72:
            return this.parseThrowStatement(node);
          case 73:
            return this.parseTryStatement(node);
          case 96:
            if (this.isAwaitUsing()) {
              if (!this.allowsUsing()) {
                this.raise(Errors.UnexpectedUsingDeclaration, node);
              } else if (!allowDeclaration) {
                this.raise(Errors.UnexpectedLexicalDeclaration, node);
              } else if (!this.recordAwaitIfAllowed()) {
                this.raise(Errors.AwaitUsingNotInAsyncContext, node);
              }
              this.next();
              return this.parseVarStatement(node, "await using");
            }
            break;
          case 107:
            if (this.state.containsEsc || !this.hasInLineFollowingBindingIdentifierOrBrace()) {
              break;
            }
            if (!this.allowsUsing()) {
              this.raise(Errors.UnexpectedUsingDeclaration, this.state.startLoc);
            } else if (!allowDeclaration) {
              this.raise(Errors.UnexpectedLexicalDeclaration, this.state.startLoc);
            }
            return this.parseVarStatement(node, "using");
          case 100: {
            if (this.state.containsEsc) {
              break;
            }
            const next = this.nextTokenStart();
            const nextCh = this.codePointAtPos(next);
            if (nextCh !== 91) {
              if (!allowDeclaration && this.hasFollowingLineBreak())
                break;
              if (!this.chStartsBindingIdentifier(nextCh, next) && nextCh !== 123) {
                break;
              }
            }
          }
          case 75: {
            if (!allowDeclaration) {
              this.raise(Errors.UnexpectedLexicalDeclaration, this.state.startLoc);
            }
          }
          case 74: {
            const kind = this.state.value;
            return this.parseVarStatement(node, kind);
          }
          case 92:
            return this.parseWhileStatement(node);
          case 76:
            return this.parseWithStatement(node);
          case 5:
            return this.parseBlock();
          case 13:
            return this.parseEmptyStatement(node);
          case 83: {
            const nextTokenCharCode = this.lookaheadCharCode();
            if (nextTokenCharCode === 40 || nextTokenCharCode === 46) {
              break;
            }
          }
          case 82: {
            if (!(this.optionFlags & 8) && !topLevel) {
              this.raise(Errors.UnexpectedImportExport, this.state.startLoc);
            }
            this.next();
            let result;
            if (startType === 83) {
              result = this.parseImport(node);
            } else {
              result = this.parseExport(node, decorators);
            }
            this.assertModuleNodeAllowed(result);
            return result;
          }
          default: {
            if (this.isAsyncFunction()) {
              if (!allowDeclaration) {
                this.raise(Errors.AsyncFunctionInSingleStatementContext, this.state.startLoc);
              }
              this.next();
              return this.parseFunctionStatement(node, true, !allowDeclaration && allowFunctionDeclaration);
            }
          }
        }
        const maybeName = this.state.value;
        const expr = this.parseExpression();
        if (tokenIsIdentifier(startType) && expr.type === "Identifier" && this.eat(14)) {
          return this.parseLabeledStatement(node, maybeName, expr, flags);
        } else {
          return this.parseExpressionStatement(node, expr, decorators);
        }
      }
      assertModuleNodeAllowed(node) {
        if (!(this.optionFlags & 8) && !this.inModule) {
          this.raise(Errors.ImportOutsideModule, node);
        }
      }
      decoratorsEnabledBeforeExport() {
        if (this.hasPlugin("decorators-legacy"))
          return true;
        return this.hasPlugin("decorators") && this.getPluginOption("decorators", "decoratorsBeforeExport") !== false;
      }
      maybeTakeDecorators(maybeDecorators, classNode, exportNode) {
        if (maybeDecorators) {
          var _classNode$decorators;
          if ((_classNode$decorators = classNode.decorators) != null && _classNode$decorators.length) {
            if (typeof this.getPluginOption("decorators", "decoratorsBeforeExport") !== "boolean") {
              this.raise(Errors.DecoratorsBeforeAfterExport, classNode.decorators[0]);
            }
            classNode.decorators.unshift(...maybeDecorators);
          } else {
            classNode.decorators = maybeDecorators;
          }
          this.resetStartLocationFromNode(classNode, maybeDecorators[0]);
          if (exportNode)
            this.resetStartLocationFromNode(exportNode, classNode);
        }
        return classNode;
      }
      canHaveLeadingDecorator() {
        return this.match(80);
      }
      parseDecorators(allowExport) {
        const decorators = [];
        do {
          decorators.push(this.parseDecorator());
        } while (this.match(26));
        if (this.match(82)) {
          if (!allowExport) {
            this.unexpected();
          }
          if (!this.decoratorsEnabledBeforeExport()) {
            this.raise(Errors.DecoratorExportClass, this.state.startLoc);
          }
        } else if (!this.canHaveLeadingDecorator()) {
          throw this.raise(Errors.UnexpectedLeadingDecorator, this.state.startLoc);
        }
        return decorators;
      }
      parseDecorator() {
        this.expectOnePlugin(["decorators", "decorators-legacy"]);
        const node = this.startNode();
        this.next();
        if (this.hasPlugin("decorators")) {
          const startLoc = this.state.startLoc;
          let expr;
          if (this.match(10)) {
            const startLoc2 = this.state.startLoc;
            this.next();
            expr = this.parseExpression();
            this.expect(11);
            expr = this.wrapParenthesis(startLoc2, expr);
            const paramsStartLoc = this.state.startLoc;
            node.expression = this.parseMaybeDecoratorArguments(expr, startLoc2);
            if (this.getPluginOption("decorators", "allowCallParenthesized") === false && node.expression !== expr) {
              this.raise(Errors.DecoratorArgumentsOutsideParentheses, paramsStartLoc);
            }
          } else {
            expr = this.parseIdentifier(false);
            while (this.eat(16)) {
              const node2 = this.startNodeAt(startLoc);
              node2.object = expr;
              if (this.match(139)) {
                this.classScope.usePrivateName(this.state.value, this.state.startLoc);
                node2.property = this.parsePrivateName();
              } else {
                node2.property = this.parseIdentifier(true);
              }
              node2.computed = false;
              expr = this.finishNode(node2, "MemberExpression");
            }
            node.expression = this.parseMaybeDecoratorArguments(expr, startLoc);
          }
        } else {
          node.expression = this.parseExprSubscripts();
        }
        return this.finishNode(node, "Decorator");
      }
      parseMaybeDecoratorArguments(expr, startLoc) {
        if (this.eat(10)) {
          const node = this.startNodeAt(startLoc);
          node.callee = expr;
          node.arguments = this.parseCallExpressionArguments();
          this.toReferencedList(node.arguments);
          return this.finishNode(node, "CallExpression");
        }
        return expr;
      }
      parseBreakContinueStatement(node, isBreak) {
        this.next();
        if (this.isLineTerminator()) {
          node.label = null;
        } else {
          node.label = this.parseIdentifier();
          this.semicolon();
        }
        this.verifyBreakContinue(node, isBreak);
        return this.finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement");
      }
      verifyBreakContinue(node, isBreak) {
        let i;
        for (i = 0; i < this.state.labels.length; ++i) {
          const lab = this.state.labels[i];
          if (node.label == null || lab.name === node.label.name) {
            if (lab.kind != null && (isBreak || lab.kind === 1)) {
              break;
            }
            if (node.label && isBreak)
              break;
          }
        }
        if (i === this.state.labels.length) {
          const type = isBreak ? "BreakStatement" : "ContinueStatement";
          this.raise(Errors.IllegalBreakContinue, node, {
            type
          });
        }
      }
      parseDebuggerStatement(node) {
        this.next();
        this.semicolon();
        return this.finishNode(node, "DebuggerStatement");
      }
      parseHeaderExpression() {
        this.expect(10);
        const val = this.parseExpression();
        this.expect(11);
        return val;
      }
      parseDoWhileStatement(node) {
        this.next();
        this.state.labels.push(loopLabel);
        node.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement());
        this.state.labels.pop();
        this.expect(92);
        node.test = this.parseHeaderExpression();
        this.eat(13);
        return this.finishNode(node, "DoWhileStatement");
      }
      parseForStatement(node) {
        this.next();
        this.state.labels.push(loopLabel);
        let awaitAt = null;
        if (this.isContextual(96) && this.recordAwaitIfAllowed()) {
          awaitAt = this.state.startLoc;
          this.next();
        }
        this.scope.enter(0);
        this.expect(10);
        if (this.match(13)) {
          if (awaitAt !== null) {
            this.unexpected(awaitAt);
          }
          return this.parseFor(node, null);
        }
        const startsWithLet = this.isContextual(100);
        {
          const startsWithAwaitUsing = this.isAwaitUsing();
          const starsWithUsingDeclaration = startsWithAwaitUsing || this.isForUsing();
          const isLetOrUsing = startsWithLet && this.hasFollowingBindingAtom() || starsWithUsingDeclaration;
          if (this.match(74) || this.match(75) || isLetOrUsing) {
            const initNode = this.startNode();
            let kind;
            if (startsWithAwaitUsing) {
              kind = "await using";
              if (!this.recordAwaitIfAllowed()) {
                this.raise(Errors.AwaitUsingNotInAsyncContext, this.state.startLoc);
              }
              this.next();
            } else {
              kind = this.state.value;
            }
            this.next();
            this.parseVar(initNode, true, kind);
            const init2 = this.finishNode(initNode, "VariableDeclaration");
            const isForIn = this.match(58);
            if (isForIn && starsWithUsingDeclaration) {
              this.raise(Errors.ForInUsing, init2);
            }
            if ((isForIn || this.isContextual(102)) && init2.declarations.length === 1) {
              return this.parseForIn(node, init2, awaitAt);
            }
            if (awaitAt !== null) {
              this.unexpected(awaitAt);
            }
            return this.parseFor(node, init2);
          }
        }
        const startsWithAsync = this.isContextual(95);
        const refExpressionErrors = new ExpressionErrors();
        const init = this.parseExpression(true, refExpressionErrors);
        const isForOf = this.isContextual(102);
        if (isForOf) {
          if (startsWithLet) {
            this.raise(Errors.ForOfLet, init);
          }
          if (awaitAt === null && startsWithAsync && init.type === "Identifier") {
            this.raise(Errors.ForOfAsync, init);
          }
        }
        if (isForOf || this.match(58)) {
          this.checkDestructuringPrivate(refExpressionErrors);
          this.toAssignable(init, true);
          const type = isForOf ? "ForOfStatement" : "ForInStatement";
          this.checkLVal(init, {
            type
          });
          return this.parseForIn(node, init, awaitAt);
        } else {
          this.checkExpressionErrors(refExpressionErrors, true);
        }
        if (awaitAt !== null) {
          this.unexpected(awaitAt);
        }
        return this.parseFor(node, init);
      }
      parseFunctionStatement(node, isAsync, isHangingDeclaration) {
        this.next();
        return this.parseFunction(node, 1 | (isHangingDeclaration ? 2 : 0) | (isAsync ? 8 : 0));
      }
      parseIfStatement(node) {
        this.next();
        node.test = this.parseHeaderExpression();
        node.consequent = this.parseStatementOrSloppyAnnexBFunctionDeclaration();
        node.alternate = this.eat(66) ? this.parseStatementOrSloppyAnnexBFunctionDeclaration() : null;
        return this.finishNode(node, "IfStatement");
      }
      parseReturnStatement(node) {
        if (!this.prodParam.hasReturn) {
          this.raise(Errors.IllegalReturn, this.state.startLoc);
        }
        this.next();
        if (this.isLineTerminator()) {
          node.argument = null;
        } else {
          node.argument = this.parseExpression();
          this.semicolon();
        }
        return this.finishNode(node, "ReturnStatement");
      }
      parseSwitchStatement(node) {
        this.next();
        node.discriminant = this.parseHeaderExpression();
        const cases = node.cases = [];
        this.expect(5);
        this.state.labels.push(switchLabel);
        this.scope.enter(256);
        let cur;
        for (let sawDefault; !this.match(8); ) {
          if (this.match(61) || this.match(65)) {
            const isCase = this.match(61);
            if (cur)
              this.finishNode(cur, "SwitchCase");
            cases.push(cur = this.startNode());
            cur.consequent = [];
            this.next();
            if (isCase) {
              cur.test = this.parseExpression();
            } else {
              if (sawDefault) {
                this.raise(Errors.MultipleDefaultsInSwitch, this.state.lastTokStartLoc);
              }
              sawDefault = true;
              cur.test = null;
            }
            this.expect(14);
          } else {
            if (cur) {
              cur.consequent.push(this.parseStatementListItem());
            } else {
              this.unexpected();
            }
          }
        }
        this.scope.exit();
        if (cur)
          this.finishNode(cur, "SwitchCase");
        this.next();
        this.state.labels.pop();
        return this.finishNode(node, "SwitchStatement");
      }
      parseThrowStatement(node) {
        this.next();
        if (this.hasPrecedingLineBreak()) {
          this.raise(Errors.NewlineAfterThrow, this.state.lastTokEndLoc);
        }
        node.argument = this.parseExpression();
        this.semicolon();
        return this.finishNode(node, "ThrowStatement");
      }
      parseCatchClauseParam() {
        const param = this.parseBindingAtom();
        this.scope.enter(this.options.annexB && param.type === "Identifier" ? 8 : 0);
        this.checkLVal(param, {
          type: "CatchClause"
        }, 9);
        return param;
      }
      parseTryStatement(node) {
        this.next();
        node.block = this.parseBlock();
        node.handler = null;
        if (this.match(62)) {
          const clause = this.startNode();
          this.next();
          if (this.match(10)) {
            this.expect(10);
            clause.param = this.parseCatchClauseParam();
            this.expect(11);
          } else {
            clause.param = null;
            this.scope.enter(0);
          }
          clause.body = this.withSmartMixTopicForbiddingContext(() => this.parseBlock(false, false));
          this.scope.exit();
          node.handler = this.finishNode(clause, "CatchClause");
        }
        node.finalizer = this.eat(67) ? this.parseBlock() : null;
        if (!node.handler && !node.finalizer) {
          this.raise(Errors.NoCatchOrFinally, node);
        }
        return this.finishNode(node, "TryStatement");
      }
      parseVarStatement(node, kind, allowMissingInitializer = false) {
        this.next();
        this.parseVar(node, false, kind, allowMissingInitializer);
        this.semicolon();
        return this.finishNode(node, "VariableDeclaration");
      }
      parseWhileStatement(node) {
        this.next();
        node.test = this.parseHeaderExpression();
        this.state.labels.push(loopLabel);
        node.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement());
        this.state.labels.pop();
        return this.finishNode(node, "WhileStatement");
      }
      parseWithStatement(node) {
        if (this.state.strict) {
          this.raise(Errors.StrictWith, this.state.startLoc);
        }
        this.next();
        node.object = this.parseHeaderExpression();
        node.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement());
        return this.finishNode(node, "WithStatement");
      }
      parseEmptyStatement(node) {
        this.next();
        return this.finishNode(node, "EmptyStatement");
      }
      parseLabeledStatement(node, maybeName, expr, flags) {
        for (const label of this.state.labels) {
          if (label.name === maybeName) {
            this.raise(Errors.LabelRedeclaration, expr, {
              labelName: maybeName
            });
          }
        }
        const kind = tokenIsLoop(this.state.type) ? 1 : this.match(71) ? 2 : null;
        for (let i = this.state.labels.length - 1; i >= 0; i--) {
          const label = this.state.labels[i];
          if (label.statementStart === node.start) {
            label.statementStart = this.sourceToOffsetPos(this.state.start);
            label.kind = kind;
          } else {
            break;
          }
        }
        this.state.labels.push({
          name: maybeName,
          kind,
          statementStart: this.sourceToOffsetPos(this.state.start)
        });
        node.body = flags & 8 ? this.parseStatementOrSloppyAnnexBFunctionDeclaration(true) : this.parseStatement();
        this.state.labels.pop();
        node.label = expr;
        return this.finishNode(node, "LabeledStatement");
      }
      parseExpressionStatement(node, expr, decorators) {
        node.expression = expr;
        this.semicolon();
        return this.finishNode(node, "ExpressionStatement");
      }
      parseBlock(allowDirectives = false, createNewLexicalScope = true, afterBlockParse) {
        const node = this.startNode();
        if (allowDirectives) {
          this.state.strictErrors.clear();
        }
        this.expect(5);
        if (createNewLexicalScope) {
          this.scope.enter(0);
        }
        this.parseBlockBody(node, allowDirectives, false, 8, afterBlockParse);
        if (createNewLexicalScope) {
          this.scope.exit();
        }
        return this.finishNode(node, "BlockStatement");
      }
      isValidDirective(stmt) {
        return stmt.type === "ExpressionStatement" && stmt.expression.type === "StringLiteral" && !stmt.expression.extra.parenthesized;
      }
      parseBlockBody(node, allowDirectives, topLevel, end, afterBlockParse) {
        const body = node.body = [];
        const directives = node.directives = [];
        this.parseBlockOrModuleBlockBody(body, allowDirectives ? directives : void 0, topLevel, end, afterBlockParse);
      }
      parseBlockOrModuleBlockBody(body, directives, topLevel, end, afterBlockParse) {
        const oldStrict = this.state.strict;
        let hasStrictModeDirective = false;
        let parsedNonDirective = false;
        while (!this.match(end)) {
          const stmt = topLevel ? this.parseModuleItem() : this.parseStatementListItem();
          if (directives && !parsedNonDirective) {
            if (this.isValidDirective(stmt)) {
              const directive = this.stmtToDirective(stmt);
              directives.push(directive);
              if (!hasStrictModeDirective && directive.value.value === "use strict") {
                hasStrictModeDirective = true;
                this.setStrict(true);
              }
              continue;
            }
            parsedNonDirective = true;
            this.state.strictErrors.clear();
          }
          body.push(stmt);
        }
        afterBlockParse == null || afterBlockParse.call(this, hasStrictModeDirective);
        if (!oldStrict) {
          this.setStrict(false);
        }
        this.next();
      }
      parseFor(node, init) {
        node.init = init;
        this.semicolon(false);
        node.test = this.match(13) ? null : this.parseExpression();
        this.semicolon(false);
        node.update = this.match(11) ? null : this.parseExpression();
        this.expect(11);
        node.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement());
        this.scope.exit();
        this.state.labels.pop();
        return this.finishNode(node, "ForStatement");
      }
      parseForIn(node, init, awaitAt) {
        const isForIn = this.match(58);
        this.next();
        if (isForIn) {
          if (awaitAt !== null)
            this.unexpected(awaitAt);
        } else {
          node.await = awaitAt !== null;
        }
        if (init.type === "VariableDeclaration" && init.declarations[0].init != null && (!isForIn || !this.options.annexB || this.state.strict || init.kind !== "var" || init.declarations[0].id.type !== "Identifier")) {
          this.raise(Errors.ForInOfLoopInitializer, init, {
            type: isForIn ? "ForInStatement" : "ForOfStatement"
          });
        }
        if (init.type === "AssignmentPattern") {
          this.raise(Errors.InvalidLhs, init, {
            ancestor: {
              type: "ForStatement"
            }
          });
        }
        node.left = init;
        node.right = isForIn ? this.parseExpression() : this.parseMaybeAssignAllowIn();
        this.expect(11);
        node.body = this.withSmartMixTopicForbiddingContext(() => this.parseStatement());
        this.scope.exit();
        this.state.labels.pop();
        return this.finishNode(node, isForIn ? "ForInStatement" : "ForOfStatement");
      }
      parseVar(node, isFor, kind, allowMissingInitializer = false) {
        const declarations = node.declarations = [];
        node.kind = kind;
        for (; ; ) {
          const decl = this.startNode();
          this.parseVarId(decl, kind);
          decl.init = !this.eat(29) ? null : isFor ? this.parseMaybeAssignDisallowIn() : this.parseMaybeAssignAllowIn();
          if (decl.init === null && !allowMissingInitializer) {
            if (decl.id.type !== "Identifier" && !(isFor && (this.match(58) || this.isContextual(102)))) {
              this.raise(Errors.DeclarationMissingInitializer, this.state.lastTokEndLoc, {
                kind: "destructuring"
              });
            } else if ((kind === "const" || kind === "using" || kind === "await using") && !(this.match(58) || this.isContextual(102))) {
              this.raise(Errors.DeclarationMissingInitializer, this.state.lastTokEndLoc, {
                kind
              });
            }
          }
          declarations.push(this.finishNode(decl, "VariableDeclarator"));
          if (!this.eat(12))
            break;
        }
        return node;
      }
      parseVarId(decl, kind) {
        const id = this.parseBindingAtom();
        if (kind === "using" || kind === "await using") {
          if (id.type === "ArrayPattern" || id.type === "ObjectPattern") {
            this.raise(Errors.UsingDeclarationHasBindingPattern, id.loc.start);
          }
        } else {
          if (id.type === "VoidPattern") {
            this.raise(Errors.UnexpectedVoidPattern, id.loc.start);
          }
        }
        this.checkLVal(id, {
          type: "VariableDeclarator"
        }, kind === "var" ? 5 : 8201);
        decl.id = id;
      }
      parseAsyncFunctionExpression(node) {
        return this.parseFunction(node, 8);
      }
      parseFunction(node, flags = 0) {
        const hangingDeclaration = flags & 2;
        const isDeclaration = !!(flags & 1);
        const requireId = isDeclaration && !(flags & 4);
        const isAsync = !!(flags & 8);
        this.initFunction(node, isAsync);
        if (this.match(55)) {
          if (hangingDeclaration) {
            this.raise(Errors.GeneratorInSingleStatementContext, this.state.startLoc);
          }
          this.next();
          node.generator = true;
        }
        if (isDeclaration) {
          node.id = this.parseFunctionId(requireId);
        }
        const oldMaybeInArrowParameters = this.state.maybeInArrowParameters;
        this.state.maybeInArrowParameters = false;
        this.scope.enter(514);
        this.prodParam.enter(functionFlags(isAsync, node.generator));
        if (!isDeclaration) {
          node.id = this.parseFunctionId();
        }
        this.parseFunctionParams(node, false);
        this.withSmartMixTopicForbiddingContext(() => {
          this.parseFunctionBodyAndFinish(node, isDeclaration ? "FunctionDeclaration" : "FunctionExpression");
        });
        this.prodParam.exit();
        this.scope.exit();
        if (isDeclaration && !hangingDeclaration) {
          this.registerFunctionStatementId(node);
        }
        this.state.maybeInArrowParameters = oldMaybeInArrowParameters;
        return node;
      }
      parseFunctionId(requireId) {
        return requireId || tokenIsIdentifier(this.state.type) ? this.parseIdentifier() : null;
      }
      parseFunctionParams(node, isConstructor) {
        this.expect(10);
        this.expressionScope.enter(newParameterDeclarationScope());
        node.params = this.parseBindingList(11, 41, 2 | (isConstructor ? 4 : 0));
        this.expressionScope.exit();
      }
      registerFunctionStatementId(node) {
        if (!node.id)
          return;
        this.scope.declareName(node.id.name, !this.options.annexB || this.state.strict || node.generator || node.async ? this.scope.treatFunctionsAsVar ? 5 : 8201 : 17, node.id.loc.start);
      }
      parseClass(node, isStatement, optionalId) {
        this.next();
        const oldStrict = this.state.strict;
        this.state.strict = true;
        this.parseClassId(node, isStatement, optionalId);
        this.parseClassSuper(node);
        node.body = this.parseClassBody(!!node.superClass, oldStrict);
        return this.finishNode(node, isStatement ? "ClassDeclaration" : "ClassExpression");
      }
      isClassProperty() {
        return this.match(29) || this.match(13) || this.match(8);
      }
      isClassMethod() {
        return this.match(10);
      }
      nameIsConstructor(key) {
        return key.type === "Identifier" && key.name === "constructor" || key.type === "StringLiteral" && key.value === "constructor";
      }
      isNonstaticConstructor(method) {
        return !method.computed && !method.static && this.nameIsConstructor(method.key);
      }
      parseClassBody(hadSuperClass, oldStrict) {
        this.classScope.enter();
        const state = {
          hadConstructor: false,
          hadSuperClass
        };
        let decorators = [];
        const classBody = this.startNode();
        classBody.body = [];
        this.expect(5);
        this.withSmartMixTopicForbiddingContext(() => {
          while (!this.match(8)) {
            if (this.eat(13)) {
              if (decorators.length > 0) {
                throw this.raise(Errors.DecoratorSemicolon, this.state.lastTokEndLoc);
              }
              continue;
            }
            if (this.match(26)) {
              decorators.push(this.parseDecorator());
              continue;
            }
            const member = this.startNode();
            if (decorators.length) {
              member.decorators = decorators;
              this.resetStartLocationFromNode(member, decorators[0]);
              decorators = [];
            }
            this.parseClassMember(classBody, member, state);
            if (member.kind === "constructor" && member.decorators && member.decorators.length > 0) {
              this.raise(Errors.DecoratorConstructor, member);
            }
          }
        });
        this.state.strict = oldStrict;
        this.next();
        if (decorators.length) {
          throw this.raise(Errors.TrailingDecorator, this.state.startLoc);
        }
        this.classScope.exit();
        return this.finishNode(classBody, "ClassBody");
      }
      parseClassMemberFromModifier(classBody, member) {
        const key = this.parseIdentifier(true);
        if (this.isClassMethod()) {
          const method = member;
          method.kind = "method";
          method.computed = false;
          method.key = key;
          method.static = false;
          this.pushClassMethod(classBody, method, false, false, false, false);
          return true;
        } else if (this.isClassProperty()) {
          const prop = member;
          prop.computed = false;
          prop.key = key;
          prop.static = false;
          classBody.body.push(this.parseClassProperty(prop));
          return true;
        }
        this.resetPreviousNodeTrailingComments(key);
        return false;
      }
      parseClassMember(classBody, member, state) {
        const isStatic = this.isContextual(106);
        if (isStatic) {
          if (this.parseClassMemberFromModifier(classBody, member)) {
            return;
          }
          if (this.eat(5)) {
            this.parseClassStaticBlock(classBody, member);
            return;
          }
        }
        this.parseClassMemberWithIsStatic(classBody, member, state, isStatic);
      }
      parseClassMemberWithIsStatic(classBody, member, state, isStatic) {
        const publicMethod = member;
        const privateMethod = member;
        const publicProp = member;
        const privateProp = member;
        const accessorProp = member;
        const method = publicMethod;
        const publicMember = publicMethod;
        member.static = isStatic;
        this.parsePropertyNamePrefixOperator(member);
        if (this.eat(55)) {
          method.kind = "method";
          const isPrivateName = this.match(139);
          this.parseClassElementName(method);
          this.parsePostMemberNameModifiers(method);
          if (isPrivateName) {
            this.pushClassPrivateMethod(classBody, privateMethod, true, false);
            return;
          }
          if (this.isNonstaticConstructor(publicMethod)) {
            this.raise(Errors.ConstructorIsGenerator, publicMethod.key);
          }
          this.pushClassMethod(classBody, publicMethod, true, false, false, false);
          return;
        }
        const isContextual = !this.state.containsEsc && tokenIsIdentifier(this.state.type);
        const key = this.parseClassElementName(member);
        const maybeContextualKw = isContextual ? key.name : null;
        const isPrivate = this.isPrivateName(key);
        const maybeQuestionTokenStartLoc = this.state.startLoc;
        this.parsePostMemberNameModifiers(publicMember);
        if (this.isClassMethod()) {
          method.kind = "method";
          if (isPrivate) {
            this.pushClassPrivateMethod(classBody, privateMethod, false, false);
            return;
          }
          const isConstructor = this.isNonstaticConstructor(publicMethod);
          let allowsDirectSuper = false;
          if (isConstructor) {
            publicMethod.kind = "constructor";
            if (state.hadConstructor && !this.hasPlugin("typescript")) {
              this.raise(Errors.DuplicateConstructor, key);
            }
            if (isConstructor && this.hasPlugin("typescript") && member.override) {
              this.raise(Errors.OverrideOnConstructor, key);
            }
            state.hadConstructor = true;
            allowsDirectSuper = state.hadSuperClass;
          }
          this.pushClassMethod(classBody, publicMethod, false, false, isConstructor, allowsDirectSuper);
        } else if (this.isClassProperty()) {
          if (isPrivate) {
            this.pushClassPrivateProperty(classBody, privateProp);
          } else {
            this.pushClassProperty(classBody, publicProp);
          }
        } else if (maybeContextualKw === "async" && !this.isLineTerminator()) {
          this.resetPreviousNodeTrailingComments(key);
          const isGenerator = this.eat(55);
          if (publicMember.optional) {
            this.unexpected(maybeQuestionTokenStartLoc);
          }
          method.kind = "method";
          const isPrivate2 = this.match(139);
          this.parseClassElementName(method);
          this.parsePostMemberNameModifiers(publicMember);
          if (isPrivate2) {
            this.pushClassPrivateMethod(classBody, privateMethod, isGenerator, true);
          } else {
            if (this.isNonstaticConstructor(publicMethod)) {
              this.raise(Errors.ConstructorIsAsync, publicMethod.key);
            }
            this.pushClassMethod(classBody, publicMethod, isGenerator, true, false, false);
          }
        } else if ((maybeContextualKw === "get" || maybeContextualKw === "set") && !(this.match(55) && this.isLineTerminator())) {
          this.resetPreviousNodeTrailingComments(key);
          method.kind = maybeContextualKw;
          const isPrivate2 = this.match(139);
          this.parseClassElementName(publicMethod);
          if (isPrivate2) {
            this.pushClassPrivateMethod(classBody, privateMethod, false, false);
          } else {
            if (this.isNonstaticConstructor(publicMethod)) {
              this.raise(Errors.ConstructorIsAccessor, publicMethod.key);
            }
            this.pushClassMethod(classBody, publicMethod, false, false, false, false);
          }
          this.checkGetterSetterParams(publicMethod);
        } else if (maybeContextualKw === "accessor" && !this.isLineTerminator()) {
          this.expectPlugin("decoratorAutoAccessors");
          this.resetPreviousNodeTrailingComments(key);
          const isPrivate2 = this.match(139);
          this.parseClassElementName(publicProp);
          this.pushClassAccessorProperty(classBody, accessorProp, isPrivate2);
        } else if (this.isLineTerminator()) {
          if (isPrivate) {
            this.pushClassPrivateProperty(classBody, privateProp);
          } else {
            this.pushClassProperty(classBody, publicProp);
          }
        } else {
          this.unexpected();
        }
      }
      parseClassElementName(member) {
        const {
          type,
          value
        } = this.state;
        if ((type === 132 || type === 134) && member.static && value === "prototype") {
          this.raise(Errors.StaticPrototype, this.state.startLoc);
        }
        if (type === 139) {
          if (value === "constructor") {
            this.raise(Errors.ConstructorClassPrivateField, this.state.startLoc);
          }
          const key = this.parsePrivateName();
          member.key = key;
          return key;
        }
        this.parsePropertyName(member);
        return member.key;
      }
      parseClassStaticBlock(classBody, member) {
        var _member$decorators;
        this.scope.enter(576 | 128 | 16);
        const oldLabels = this.state.labels;
        this.state.labels = [];
        this.prodParam.enter(0);
        const body = member.body = [];
        this.parseBlockOrModuleBlockBody(body, void 0, false, 8);
        this.prodParam.exit();
        this.scope.exit();
        this.state.labels = oldLabels;
        classBody.body.push(this.finishNode(member, "StaticBlock"));
        if ((_member$decorators = member.decorators) != null && _member$decorators.length) {
          this.raise(Errors.DecoratorStaticBlock, member);
        }
      }
      pushClassProperty(classBody, prop) {
        if (!prop.computed && this.nameIsConstructor(prop.key)) {
          this.raise(Errors.ConstructorClassField, prop.key);
        }
        classBody.body.push(this.parseClassProperty(prop));
      }
      pushClassPrivateProperty(classBody, prop) {
        const node = this.parseClassPrivateProperty(prop);
        classBody.body.push(node);
        this.classScope.declarePrivateName(this.getPrivateNameSV(node.key), 0, node.key.loc.start);
      }
      pushClassAccessorProperty(classBody, prop, isPrivate) {
        if (!isPrivate && !prop.computed && this.nameIsConstructor(prop.key)) {
          this.raise(Errors.ConstructorClassField, prop.key);
        }
        const node = this.parseClassAccessorProperty(prop);
        classBody.body.push(node);
        if (isPrivate) {
          this.classScope.declarePrivateName(this.getPrivateNameSV(node.key), 0, node.key.loc.start);
        }
      }
      pushClassMethod(classBody, method, isGenerator, isAsync, isConstructor, allowsDirectSuper) {
        classBody.body.push(this.parseMethod(method, isGenerator, isAsync, isConstructor, allowsDirectSuper, "ClassMethod", true));
      }
      pushClassPrivateMethod(classBody, method, isGenerator, isAsync) {
        const node = this.parseMethod(method, isGenerator, isAsync, false, false, "ClassPrivateMethod", true);
        classBody.body.push(node);
        const kind = node.kind === "get" ? node.static ? 6 : 2 : node.kind === "set" ? node.static ? 5 : 1 : 0;
        this.declareClassPrivateMethodInScope(node, kind);
      }
      declareClassPrivateMethodInScope(node, kind) {
        this.classScope.declarePrivateName(this.getPrivateNameSV(node.key), kind, node.key.loc.start);
      }
      parsePostMemberNameModifiers(methodOrProp) {
      }
      parseClassPrivateProperty(node) {
        this.parseInitializer(node);
        this.semicolon();
        return this.finishNode(node, "ClassPrivateProperty");
      }
      parseClassProperty(node) {
        this.parseInitializer(node);
        this.semicolon();
        return this.finishNode(node, "ClassProperty");
      }
      parseClassAccessorProperty(node) {
        this.parseInitializer(node);
        this.semicolon();
        return this.finishNode(node, "ClassAccessorProperty");
      }
      parseInitializer(node) {
        this.scope.enter(576 | 16);
        this.expressionScope.enter(newExpressionScope());
        this.prodParam.enter(0);
        node.value = this.eat(29) ? this.parseMaybeAssignAllowIn() : null;
        this.expressionScope.exit();
        this.prodParam.exit();
        this.scope.exit();
      }
      parseClassId(node, isStatement, optionalId, bindingType = 8331) {
        if (tokenIsIdentifier(this.state.type)) {
          node.id = this.parseIdentifier();
          if (isStatement) {
            this.declareNameFromIdentifier(node.id, bindingType);
          }
        } else {
          if (optionalId || !isStatement) {
            node.id = null;
          } else {
            throw this.raise(Errors.MissingClassName, this.state.startLoc);
          }
        }
      }
      parseClassSuper(node) {
        node.superClass = this.eat(81) ? this.parseExprSubscripts() : null;
      }
      parseExport(node, decorators) {
        const maybeDefaultIdentifier = this.parseMaybeImportPhase(node, true);
        const hasDefault = this.maybeParseExportDefaultSpecifier(node, maybeDefaultIdentifier);
        const parseAfterDefault = !hasDefault || this.eat(12);
        const hasStar = parseAfterDefault && this.eatExportStar(node);
        const hasNamespace = hasStar && this.maybeParseExportNamespaceSpecifier(node);
        const parseAfterNamespace = parseAfterDefault && (!hasNamespace || this.eat(12));
        const isFromRequired = hasDefault || hasStar;
        if (hasStar && !hasNamespace) {
          if (hasDefault)
            this.unexpected();
          if (decorators) {
            throw this.raise(Errors.UnsupportedDecoratorExport, node);
          }
          this.parseExportFrom(node, true);
          this.sawUnambiguousESM = true;
          return this.finishNode(node, "ExportAllDeclaration");
        }
        const hasSpecifiers = this.maybeParseExportNamedSpecifiers(node);
        if (hasDefault && parseAfterDefault && !hasStar && !hasSpecifiers) {
          this.unexpected(null, 5);
        }
        if (hasNamespace && parseAfterNamespace) {
          this.unexpected(null, 98);
        }
        let hasDeclaration;
        if (isFromRequired || hasSpecifiers) {
          hasDeclaration = false;
          if (decorators) {
            throw this.raise(Errors.UnsupportedDecoratorExport, node);
          }
          this.parseExportFrom(node, isFromRequired);
        } else {
          hasDeclaration = this.maybeParseExportDeclaration(node);
        }
        if (isFromRequired || hasSpecifiers || hasDeclaration) {
          var _node2$declaration;
          const node2 = node;
          this.checkExport(node2, true, false, !!node2.source);
          if (((_node2$declaration = node2.declaration) == null ? void 0 : _node2$declaration.type) === "ClassDeclaration") {
            this.maybeTakeDecorators(decorators, node2.declaration, node2);
          } else if (decorators) {
            throw this.raise(Errors.UnsupportedDecoratorExport, node);
          }
          this.sawUnambiguousESM = true;
          return this.finishNode(node2, "ExportNamedDeclaration");
        }
        if (this.eat(65)) {
          const node2 = node;
          const decl = this.parseExportDefaultExpression();
          node2.declaration = decl;
          if (decl.type === "ClassDeclaration") {
            this.maybeTakeDecorators(decorators, decl, node2);
          } else if (decorators) {
            throw this.raise(Errors.UnsupportedDecoratorExport, node);
          }
          this.checkExport(node2, true, true);
          this.sawUnambiguousESM = true;
          return this.finishNode(node2, "ExportDefaultDeclaration");
        }
        throw this.unexpected(null, 5);
      }
      eatExportStar(node) {
        return this.eat(55);
      }
      maybeParseExportDefaultSpecifier(node, maybeDefaultIdentifier) {
        if (maybeDefaultIdentifier || this.isExportDefaultSpecifier()) {
          this.expectPlugin("exportDefaultFrom", maybeDefaultIdentifier == null ? void 0 : maybeDefaultIdentifier.loc.start);
          const id = maybeDefaultIdentifier || this.parseIdentifier(true);
          const specifier = this.startNodeAtNode(id);
          specifier.exported = id;
          node.specifiers = [this.finishNode(specifier, "ExportDefaultSpecifier")];
          return true;
        }
        return false;
      }
      maybeParseExportNamespaceSpecifier(node) {
        if (this.isContextual(93)) {
          var _ref, _ref$specifiers;
          (_ref$specifiers = (_ref = node).specifiers) != null ? _ref$specifiers : _ref.specifiers = [];
          const specifier = this.startNodeAt(this.state.lastTokStartLoc);
          this.next();
          specifier.exported = this.parseModuleExportName();
          node.specifiers.push(this.finishNode(specifier, "ExportNamespaceSpecifier"));
          return true;
        }
        return false;
      }
      maybeParseExportNamedSpecifiers(node) {
        if (this.match(5)) {
          const node2 = node;
          if (!node2.specifiers)
            node2.specifiers = [];
          const isTypeExport = node2.exportKind === "type";
          node2.specifiers.push(...this.parseExportSpecifiers(isTypeExport));
          node2.source = null;
          if (this.hasPlugin("importAssertions")) {
            node2.assertions = [];
          } else {
            node2.attributes = [];
          }
          node2.declaration = null;
          return true;
        }
        return false;
      }
      maybeParseExportDeclaration(node) {
        if (this.shouldParseExportDeclaration()) {
          node.specifiers = [];
          node.source = null;
          if (this.hasPlugin("importAssertions")) {
            node.assertions = [];
          } else {
            node.attributes = [];
          }
          node.declaration = this.parseExportDeclaration(node);
          return true;
        }
        return false;
      }
      isAsyncFunction() {
        if (!this.isContextual(95))
          return false;
        const next = this.nextTokenInLineStart();
        return this.isUnparsedContextual(next, "function");
      }
      parseExportDefaultExpression() {
        const expr = this.startNode();
        if (this.match(68)) {
          this.next();
          return this.parseFunction(expr, 1 | 4);
        } else if (this.isAsyncFunction()) {
          this.next();
          this.next();
          return this.parseFunction(expr, 1 | 4 | 8);
        }
        if (this.match(80)) {
          return this.parseClass(expr, true, true);
        }
        if (this.match(26)) {
          if (this.hasPlugin("decorators") && this.getPluginOption("decorators", "decoratorsBeforeExport") === true) {
            this.raise(Errors.DecoratorBeforeExport, this.state.startLoc);
          }
          return this.parseClass(this.maybeTakeDecorators(this.parseDecorators(false), this.startNode()), true, true);
        }
        if (this.match(75) || this.match(74) || this.isLet() || this.isUsing() || this.isAwaitUsing()) {
          throw this.raise(Errors.UnsupportedDefaultExport, this.state.startLoc);
        }
        const res = this.parseMaybeAssignAllowIn();
        this.semicolon();
        return res;
      }
      parseExportDeclaration(node) {
        if (this.match(80)) {
          const node2 = this.parseClass(this.startNode(), true, false);
          return node2;
        }
        return this.parseStatementListItem();
      }
      isExportDefaultSpecifier() {
        const {
          type
        } = this.state;
        if (tokenIsIdentifier(type)) {
          if (type === 95 && !this.state.containsEsc || type === 100) {
            return false;
          }
          if ((type === 130 || type === 129) && !this.state.containsEsc) {
            const next2 = this.nextTokenStart();
            const nextChar = this.input.charCodeAt(next2);
            if (nextChar === 123 || this.chStartsBindingIdentifier(nextChar, next2) && !this.input.startsWith("from", next2)) {
              this.expectOnePlugin(["flow", "typescript"]);
              return false;
            }
          }
        } else if (!this.match(65)) {
          return false;
        }
        const next = this.nextTokenStart();
        const hasFrom = this.isUnparsedContextual(next, "from");
        if (this.input.charCodeAt(next) === 44 || tokenIsIdentifier(this.state.type) && hasFrom) {
          return true;
        }
        if (this.match(65) && hasFrom) {
          const nextAfterFrom = this.input.charCodeAt(this.nextTokenStartSince(next + 4));
          return nextAfterFrom === 34 || nextAfterFrom === 39;
        }
        return false;
      }
      parseExportFrom(node, expect) {
        if (this.eatContextual(98)) {
          node.source = this.parseImportSource();
          this.checkExport(node);
          this.maybeParseImportAttributes(node);
          this.checkJSONModuleImport(node);
        } else if (expect) {
          this.unexpected();
        }
        this.semicolon();
      }
      shouldParseExportDeclaration() {
        const {
          type
        } = this.state;
        if (type === 26) {
          this.expectOnePlugin(["decorators", "decorators-legacy"]);
          if (this.hasPlugin("decorators")) {
            if (this.getPluginOption("decorators", "decoratorsBeforeExport") === true) {
              this.raise(Errors.DecoratorBeforeExport, this.state.startLoc);
            }
            return true;
          }
        }
        if (this.isUsing()) {
          this.raise(Errors.UsingDeclarationExport, this.state.startLoc);
          return true;
        }
        if (this.isAwaitUsing()) {
          this.raise(Errors.UsingDeclarationExport, this.state.startLoc);
          return true;
        }
        return type === 74 || type === 75 || type === 68 || type === 80 || this.isLet() || this.isAsyncFunction();
      }
      checkExport(node, checkNames, isDefault, isFrom) {
        if (checkNames) {
          var _node$specifiers;
          if (isDefault) {
            this.checkDuplicateExports(node, "default");
            if (this.hasPlugin("exportDefaultFrom")) {
              var _declaration$extra;
              const declaration = node.declaration;
              if (declaration.type === "Identifier" && declaration.name === "from" && declaration.end - declaration.start === 4 && !((_declaration$extra = declaration.extra) != null && _declaration$extra.parenthesized)) {
                this.raise(Errors.ExportDefaultFromAsIdentifier, declaration);
              }
            }
          } else if ((_node$specifiers = node.specifiers) != null && _node$specifiers.length) {
            for (const specifier of node.specifiers) {
              const {
                exported
              } = specifier;
              const exportName = exported.type === "Identifier" ? exported.name : exported.value;
              this.checkDuplicateExports(specifier, exportName);
              if (!isFrom && specifier.local) {
                const {
                  local
                } = specifier;
                if (local.type !== "Identifier") {
                  this.raise(Errors.ExportBindingIsString, specifier, {
                    localName: local.value,
                    exportName
                  });
                } else {
                  this.checkReservedWord(local.name, local.loc.start, true, false);
                  this.scope.checkLocalExport(local);
                }
              }
            }
          } else if (node.declaration) {
            const decl = node.declaration;
            if (decl.type === "FunctionDeclaration" || decl.type === "ClassDeclaration") {
              const {
                id
              } = decl;
              if (!id)
                throw new Error("Assertion failure");
              this.checkDuplicateExports(node, id.name);
            } else if (decl.type === "VariableDeclaration") {
              for (const declaration of decl.declarations) {
                this.checkDeclaration(declaration.id);
              }
            }
          }
        }
      }
      checkDeclaration(node) {
        if (node.type === "Identifier") {
          this.checkDuplicateExports(node, node.name);
        } else if (node.type === "ObjectPattern") {
          for (const prop of node.properties) {
            this.checkDeclaration(prop);
          }
        } else if (node.type === "ArrayPattern") {
          for (const elem of node.elements) {
            if (elem) {
              this.checkDeclaration(elem);
            }
          }
        } else if (node.type === "ObjectProperty") {
          this.checkDeclaration(node.value);
        } else if (node.type === "RestElement") {
          this.checkDeclaration(node.argument);
        } else if (node.type === "AssignmentPattern") {
          this.checkDeclaration(node.left);
        }
      }
      checkDuplicateExports(node, exportName) {
        if (this.exportedIdentifiers.has(exportName)) {
          if (exportName === "default") {
            this.raise(Errors.DuplicateDefaultExport, node);
          } else {
            this.raise(Errors.DuplicateExport, node, {
              exportName
            });
          }
        }
        this.exportedIdentifiers.add(exportName);
      }
      parseExportSpecifiers(isInTypeExport) {
        const nodes = [];
        let first = true;
        this.expect(5);
        while (!this.eat(8)) {
          if (first) {
            first = false;
          } else {
            this.expect(12);
            if (this.eat(8))
              break;
          }
          const isMaybeTypeOnly = this.isContextual(130);
          const isString = this.match(134);
          const node = this.startNode();
          node.local = this.parseModuleExportName();
          nodes.push(this.parseExportSpecifier(node, isString, isInTypeExport, isMaybeTypeOnly));
        }
        return nodes;
      }
      parseExportSpecifier(node, isString, isInTypeExport, isMaybeTypeOnly) {
        if (this.eatContextual(93)) {
          node.exported = this.parseModuleExportName();
        } else if (isString) {
          node.exported = this.cloneStringLiteral(node.local);
        } else if (!node.exported) {
          node.exported = this.cloneIdentifier(node.local);
        }
        return this.finishNode(node, "ExportSpecifier");
      }
      parseModuleExportName() {
        if (this.match(134)) {
          const result = this.parseStringLiteral(this.state.value);
          const surrogate = loneSurrogate.exec(result.value);
          if (surrogate) {
            this.raise(Errors.ModuleExportNameHasLoneSurrogate, result, {
              surrogateCharCode: surrogate[0].charCodeAt(0)
            });
          }
          return result;
        }
        return this.parseIdentifier(true);
      }
      isJSONModuleImport(node) {
        if (node.assertions != null) {
          return node.assertions.some(({
            key,
            value
          }) => {
            return value.value === "json" && (key.type === "Identifier" ? key.name === "type" : key.value === "type");
          });
        }
        return false;
      }
      checkImportReflection(node) {
        const {
          specifiers
        } = node;
        const singleBindingType = specifiers.length === 1 ? specifiers[0].type : null;
        if (node.phase === "source") {
          if (singleBindingType !== "ImportDefaultSpecifier") {
            this.raise(Errors.SourcePhaseImportRequiresDefault, specifiers[0].loc.start);
          }
        } else if (node.phase === "defer") {
          if (singleBindingType !== "ImportNamespaceSpecifier") {
            this.raise(Errors.DeferImportRequiresNamespace, specifiers[0].loc.start);
          }
        } else if (node.module) {
          var _node$assertions;
          if (singleBindingType !== "ImportDefaultSpecifier") {
            this.raise(Errors.ImportReflectionNotBinding, specifiers[0].loc.start);
          }
          if (((_node$assertions = node.assertions) == null ? void 0 : _node$assertions.length) > 0) {
            this.raise(Errors.ImportReflectionHasAssertion, specifiers[0].loc.start);
          }
        }
      }
      checkJSONModuleImport(node) {
        if (this.isJSONModuleImport(node) && node.type !== "ExportAllDeclaration") {
          const {
            specifiers
          } = node;
          if (specifiers != null) {
            const nonDefaultNamedSpecifier = specifiers.find((specifier) => {
              let imported;
              if (specifier.type === "ExportSpecifier") {
                imported = specifier.local;
              } else if (specifier.type === "ImportSpecifier") {
                imported = specifier.imported;
              }
              if (imported !== void 0) {
                return imported.type === "Identifier" ? imported.name !== "default" : imported.value !== "default";
              }
            });
            if (nonDefaultNamedSpecifier !== void 0) {
              this.raise(Errors.ImportJSONBindingNotDefault, nonDefaultNamedSpecifier.loc.start);
            }
          }
        }
      }
      isPotentialImportPhase(isExport) {
        if (isExport)
          return false;
        return this.isContextual(105) || this.isContextual(97) || this.isContextual(127);
      }
      applyImportPhase(node, isExport, phase, loc) {
        if (isExport) {
          return;
        }
        if (phase === "module") {
          this.expectPlugin("importReflection", loc);
          node.module = true;
        } else if (this.hasPlugin("importReflection")) {
          node.module = false;
        }
        if (phase === "source") {
          this.expectPlugin("sourcePhaseImports", loc);
          node.phase = "source";
        } else if (phase === "defer") {
          this.expectPlugin("deferredImportEvaluation", loc);
          node.phase = "defer";
        } else if (this.hasPlugin("sourcePhaseImports")) {
          node.phase = null;
        }
      }
      parseMaybeImportPhase(node, isExport) {
        if (!this.isPotentialImportPhase(isExport)) {
          this.applyImportPhase(node, isExport, null);
          return null;
        }
        const phaseIdentifier = this.startNode();
        const phaseIdentifierName = this.parseIdentifierName(true);
        const {
          type
        } = this.state;
        const isImportPhase = tokenIsKeywordOrIdentifier(type) ? type !== 98 || this.lookaheadCharCode() === 102 : type !== 12;
        if (isImportPhase) {
          this.applyImportPhase(node, isExport, phaseIdentifierName, phaseIdentifier.loc.start);
          return null;
        } else {
          this.applyImportPhase(node, isExport, null);
          return this.createIdentifier(phaseIdentifier, phaseIdentifierName);
        }
      }
      isPrecedingIdImportPhase(phase) {
        const {
          type
        } = this.state;
        return tokenIsIdentifier(type) ? type !== 98 || this.lookaheadCharCode() === 102 : type !== 12;
      }
      parseImport(node) {
        if (this.match(134)) {
          return this.parseImportSourceAndAttributes(node);
        }
        return this.parseImportSpecifiersAndAfter(node, this.parseMaybeImportPhase(node, false));
      }
      parseImportSpecifiersAndAfter(node, maybeDefaultIdentifier) {
        node.specifiers = [];
        const hasDefault = this.maybeParseDefaultImportSpecifier(node, maybeDefaultIdentifier);
        const parseNext = !hasDefault || this.eat(12);
        const hasStar = parseNext && this.maybeParseStarImportSpecifier(node);
        if (parseNext && !hasStar)
          this.parseNamedImportSpecifiers(node);
        this.expectContextual(98);
        return this.parseImportSourceAndAttributes(node);
      }
      parseImportSourceAndAttributes(node) {
        var _node$specifiers2;
        (_node$specifiers2 = node.specifiers) != null ? _node$specifiers2 : node.specifiers = [];
        node.source = this.parseImportSource();
        this.maybeParseImportAttributes(node);
        this.checkImportReflection(node);
        this.checkJSONModuleImport(node);
        this.semicolon();
        this.sawUnambiguousESM = true;
        return this.finishNode(node, "ImportDeclaration");
      }
      parseImportSource() {
        if (!this.match(134))
          this.unexpected();
        return this.parseExprAtom();
      }
      parseImportSpecifierLocal(node, specifier, type) {
        specifier.local = this.parseIdentifier();
        node.specifiers.push(this.finishImportSpecifier(specifier, type));
      }
      finishImportSpecifier(specifier, type, bindingType = 8201) {
        this.checkLVal(specifier.local, {
          type
        }, bindingType);
        return this.finishNode(specifier, type);
      }
      parseImportAttributes() {
        this.expect(5);
        const attrs = [];
        const attrNames = /* @__PURE__ */ new Set();
        do {
          if (this.match(8)) {
            break;
          }
          const node = this.startNode();
          const keyName = this.state.value;
          if (attrNames.has(keyName)) {
            this.raise(Errors.ModuleAttributesWithDuplicateKeys, this.state.startLoc, {
              key: keyName
            });
          }
          attrNames.add(keyName);
          if (this.match(134)) {
            node.key = this.parseStringLiteral(keyName);
          } else {
            node.key = this.parseIdentifier(true);
          }
          this.expect(14);
          if (!this.match(134)) {
            throw this.raise(Errors.ModuleAttributeInvalidValue, this.state.startLoc);
          }
          node.value = this.parseStringLiteral(this.state.value);
          attrs.push(this.finishNode(node, "ImportAttribute"));
        } while (this.eat(12));
        this.expect(8);
        return attrs;
      }
      parseModuleAttributes() {
        const attrs = [];
        const attributes = /* @__PURE__ */ new Set();
        do {
          const node = this.startNode();
          node.key = this.parseIdentifier(true);
          if (node.key.name !== "type") {
            this.raise(Errors.ModuleAttributeDifferentFromType, node.key);
          }
          if (attributes.has(node.key.name)) {
            this.raise(Errors.ModuleAttributesWithDuplicateKeys, node.key, {
              key: node.key.name
            });
          }
          attributes.add(node.key.name);
          this.expect(14);
          if (!this.match(134)) {
            throw this.raise(Errors.ModuleAttributeInvalidValue, this.state.startLoc);
          }
          node.value = this.parseStringLiteral(this.state.value);
          attrs.push(this.finishNode(node, "ImportAttribute"));
        } while (this.eat(12));
        return attrs;
      }
      maybeParseImportAttributes(node) {
        let attributes;
        var useWith = false;
        if (this.match(76)) {
          if (this.hasPrecedingLineBreak() && this.lookaheadCharCode() === 40) {
            return;
          }
          this.next();
          if (this.hasPlugin("moduleAttributes")) {
            attributes = this.parseModuleAttributes();
            this.addExtra(node, "deprecatedWithLegacySyntax", true);
          } else {
            attributes = this.parseImportAttributes();
          }
          useWith = true;
        } else if (this.isContextual(94) && !this.hasPrecedingLineBreak()) {
          if (!this.hasPlugin("deprecatedImportAssert") && !this.hasPlugin("importAssertions")) {
            this.raise(Errors.ImportAttributesUseAssert, this.state.startLoc);
          }
          if (!this.hasPlugin("importAssertions")) {
            this.addExtra(node, "deprecatedAssertSyntax", true);
          }
          this.next();
          attributes = this.parseImportAttributes();
        } else {
          attributes = [];
        }
        if (!useWith && this.hasPlugin("importAssertions")) {
          node.assertions = attributes;
        } else {
          node.attributes = attributes;
        }
      }
      maybeParseDefaultImportSpecifier(node, maybeDefaultIdentifier) {
        if (maybeDefaultIdentifier) {
          const specifier = this.startNodeAtNode(maybeDefaultIdentifier);
          specifier.local = maybeDefaultIdentifier;
          node.specifiers.push(this.finishImportSpecifier(specifier, "ImportDefaultSpecifier"));
          return true;
        } else if (tokenIsKeywordOrIdentifier(this.state.type)) {
          this.parseImportSpecifierLocal(node, this.startNode(), "ImportDefaultSpecifier");
          return true;
        }
        return false;
      }
      maybeParseStarImportSpecifier(node) {
        if (this.match(55)) {
          const specifier = this.startNode();
          this.next();
          this.expectContextual(93);
          this.parseImportSpecifierLocal(node, specifier, "ImportNamespaceSpecifier");
          return true;
        }
        return false;
      }
      parseNamedImportSpecifiers(node) {
        let first = true;
        this.expect(5);
        while (!this.eat(8)) {
          if (first) {
            first = false;
          } else {
            if (this.eat(14)) {
              throw this.raise(Errors.DestructureNamedImport, this.state.startLoc);
            }
            this.expect(12);
            if (this.eat(8))
              break;
          }
          const specifier = this.startNode();
          const importedIsString = this.match(134);
          const isMaybeTypeOnly = this.isContextual(130);
          specifier.imported = this.parseModuleExportName();
          const importSpecifier = this.parseImportSpecifier(specifier, importedIsString, node.importKind === "type" || node.importKind === "typeof", isMaybeTypeOnly, void 0);
          node.specifiers.push(importSpecifier);
        }
      }
      parseImportSpecifier(specifier, importedIsString, isInTypeOnlyImport, isMaybeTypeOnly, bindingType) {
        if (this.eatContextual(93)) {
          specifier.local = this.parseIdentifier();
        } else {
          const {
            imported
          } = specifier;
          if (importedIsString) {
            throw this.raise(Errors.ImportBindingIsString, specifier, {
              importName: imported.value
            });
          }
          this.checkReservedWord(imported.name, specifier.loc.start, true, true);
          if (!specifier.local) {
            specifier.local = this.cloneIdentifier(imported);
          }
        }
        return this.finishImportSpecifier(specifier, "ImportSpecifier", bindingType);
      }
      isThisParam(param) {
        return param.type === "Identifier" && param.name === "this";
      }
    };
    var Parser = class extends StatementParser {
      constructor(options, input, pluginsMap) {
        const normalizedOptions = getOptions(options);
        super(normalizedOptions, input);
        this.options = normalizedOptions;
        this.initializeScopes();
        this.plugins = pluginsMap;
        this.filename = normalizedOptions.sourceFilename;
        this.startIndex = normalizedOptions.startIndex;
        let optionFlags = 0;
        if (normalizedOptions.allowAwaitOutsideFunction) {
          optionFlags |= 1;
        }
        if (normalizedOptions.allowReturnOutsideFunction) {
          optionFlags |= 2;
        }
        if (normalizedOptions.allowImportExportEverywhere) {
          optionFlags |= 8;
        }
        if (normalizedOptions.allowSuperOutsideMethod) {
          optionFlags |= 16;
        }
        if (normalizedOptions.allowUndeclaredExports) {
          optionFlags |= 64;
        }
        if (normalizedOptions.allowNewTargetOutsideFunction) {
          optionFlags |= 4;
        }
        if (normalizedOptions.allowYieldOutsideFunction) {
          optionFlags |= 32;
        }
        if (normalizedOptions.ranges) {
          optionFlags |= 128;
        }
        if (normalizedOptions.tokens) {
          optionFlags |= 256;
        }
        if (normalizedOptions.createImportExpressions) {
          optionFlags |= 512;
        }
        if (normalizedOptions.createParenthesizedExpressions) {
          optionFlags |= 1024;
        }
        if (normalizedOptions.errorRecovery) {
          optionFlags |= 2048;
        }
        if (normalizedOptions.attachComment) {
          optionFlags |= 4096;
        }
        if (normalizedOptions.annexB) {
          optionFlags |= 8192;
        }
        this.optionFlags = optionFlags;
      }
      getScopeHandler() {
        return ScopeHandler;
      }
      parse() {
        this.enterInitialScopes();
        const file = this.startNode();
        const program = this.startNode();
        this.nextToken();
        file.errors = null;
        const result = this.parseTopLevel(file, program);
        result.errors = this.state.errors;
        result.comments.length = this.state.commentsLen;
        return result;
      }
    };
    function parse2(input, options) {
      var _options;
      if (((_options = options) == null ? void 0 : _options.sourceType) === "unambiguous") {
        options = Object.assign({}, options);
        try {
          options.sourceType = "module";
          const parser = getParser(options, input);
          const ast = parser.parse();
          if (parser.sawUnambiguousESM) {
            return ast;
          }
          if (parser.ambiguousScriptDifferentAst) {
            try {
              options.sourceType = "script";
              return getParser(options, input).parse();
            } catch (_unused) {
            }
          } else {
            ast.program.sourceType = "script";
          }
          return ast;
        } catch (moduleError) {
          try {
            options.sourceType = "script";
            return getParser(options, input).parse();
          } catch (_unused2) {
          }
          throw moduleError;
        }
      } else {
        return getParser(options, input).parse();
      }
    }
    function parseExpression2(input, options) {
      const parser = getParser(options, input);
      if (parser.options.strictMode) {
        parser.state.strict = true;
      }
      return parser.getExpression();
    }
    function generateExportedTokenTypes(internalTokenTypes) {
      const tokenTypes2 = {};
      for (const typeName of Object.keys(internalTokenTypes)) {
        tokenTypes2[typeName] = getExportedToken(internalTokenTypes[typeName]);
      }
      return tokenTypes2;
    }
    var tokTypes = generateExportedTokenTypes(tt);
    function getParser(options, input) {
      let cls = Parser;
      const pluginsMap = /* @__PURE__ */ new Map();
      if (options != null && options.plugins) {
        for (const plugin of options.plugins) {
          let name, opts;
          if (typeof plugin === "string") {
            name = plugin;
          } else {
            [name, opts] = plugin;
          }
          if (!pluginsMap.has(name)) {
            pluginsMap.set(name, opts || {});
          }
        }
        validatePlugins(pluginsMap);
        cls = getParserClass(pluginsMap);
      }
      return new cls(options, input, pluginsMap);
    }
    var parserClassCache = /* @__PURE__ */ new Map();
    function getParserClass(pluginsMap) {
      const pluginList = [];
      for (const name of mixinPluginNames) {
        if (pluginsMap.has(name)) {
          pluginList.push(name);
        }
      }
      const key = pluginList.join("|");
      let cls = parserClassCache.get(key);
      if (!cls) {
        cls = Parser;
        for (const plugin of pluginList) {
          cls = mixinPlugins[plugin](cls);
        }
        parserClassCache.set(key, cls);
      }
      return cls;
    }
    exports2.parse = parse2;
    exports2.parseExpression = parseExpression2;
    exports2.tokTypes = tokTypes;
  }
});

// src/extension.ts
var extension_exports = {};
__export(extension_exports, {
  activate: () => activate,
  deactivate: () => deactivate
});
module.exports = __toCommonJS(extension_exports);
var vscode6 = __toESM(require("vscode"));

// src/parsing/detectMarkupSelection.ts
function isMarkupSelection(text) {
  const trimmed = text.trim();
  return trimmed.startsWith("<") && trimmed.endsWith(">");
}

// src/parsing/parseHtmlLike.ts
var import_node_html_parser = __toESM(require_dist());
function parseHtmlLike(text) {
  let root;
  try {
    root = (0, import_node_html_parser.parse)(text);
  } catch (e) {
    return [];
  }
  function convert(node) {
    if (node.nodeType === 3 || node.nodeType === 8) {
      return null;
    }
    if (node.nodeType === 1 || node.nodeType === void 0) {
      if (!node.tagName) {
        const children2 = [];
        for (const child of node.childNodes) {
          const c = convert(child);
          if (c)
            children2.push(c);
        }
        return { tagName: null, id: null, classes: [], selector: null, children: children2 };
      }
      const tagName = node.rawTagName || node.tagName;
      const id = node.getAttribute("id") || null;
      let classes = [];
      const classAttr = node.getAttribute("class") || node.getAttribute("className");
      if (classAttr) {
        classes = classAttr.trim().split(/\s+/).filter(Boolean);
      }
      const children = [];
      for (const child of node.childNodes) {
        const c = convert(child);
        if (c) {
          if (c.tagName === null) {
            children.push(...c.children);
          } else {
            children.push(c);
          }
        }
      }
      return {
        tagName,
        id,
        classes,
        selector: null,
        children
      };
    }
    return null;
  }
  const nodes = root.childNodes.map(convert).filter(Boolean);
  const result = [];
  for (const n of nodes) {
    if (n.tagName === null) {
      result.push(...n.children);
    } else {
      result.push(n);
    }
  }
  return result;
}

// src/parsing/parseJsxLike.ts
var import_parser = __toESM(require_lib8());
function parseJsxLike(text) {
  const code = `<>${text}</>`;
  let ast;
  try {
    ast = (0, import_parser.parseExpression)(code, {
      plugins: ["jsx", "typescript"]
    });
  } catch (e) {
    return [];
  }
  return convertJsxNode(ast);
}
function convertJsxNode(node) {
  if (!node)
    return [];
  if (node.type === "JSXFragment") {
    const children = [];
    for (const child of node.children) {
      children.push(...convertJsxNode(child));
    }
    return children;
  }
  if (node.type === "JSXElement") {
    const openingElement = node.openingElement;
    let tagName = "";
    if (openingElement.name.type === "JSXIdentifier") {
      tagName = openingElement.name.name;
    } else if (openingElement.name.type === "JSXMemberExpression") {
      tagName = openingElement.name.property.name;
    }
    let id = null;
    let classes = [];
    for (const attr of openingElement.attributes) {
      if (attr.type === "JSXAttribute" && attr.name.type === "JSXIdentifier") {
        if (attr.name.name === "id" && attr.value && attr.value.type === "StringLiteral") {
          id = attr.value.value;
        }
        if ((attr.name.name === "class" || attr.name.name === "className") && attr.value && attr.value.type === "StringLiteral") {
          classes = attr.value.value.trim().split(/\s+/).filter(Boolean);
        }
      }
    }
    const children = [];
    for (const child of node.children) {
      children.push(...convertJsxNode(child));
    }
    return [{
      tagName,
      id,
      classes,
      selector: null,
      children
    }];
  }
  if (node.type === "JSXExpressionContainer") {
    return convertJsxNode(node.expression);
  }
  if (node.type === "LogicalExpression") {
    const left = convertJsxNode(node.left);
    const right = convertJsxNode(node.right);
    return [...left, ...right];
  }
  if (node.type === "ConditionalExpression") {
    const cons = convertJsxNode(node.consequent);
    const alt = convertJsxNode(node.alternate);
    return [...cons, ...alt];
  }
  if (node.type === "CallExpression") {
    const callee = node.callee;
    if (callee.type === "MemberExpression" && callee.property.type === "Identifier" && callee.property.name === "map") {
      const args = node.arguments;
      if (args.length > 0) {
        const callback = args[0];
        if (callback.type === "ArrowFunctionExpression" || callback.type === "FunctionExpression") {
          return convertJsxNode(callback.body);
        }
      }
    }
  }
  return [];
}

// src/parsing/stripRazorNoise.ts
function stripRazorNoise(text) {
  let cleaned = text;
  cleaned = cleaned.replace(/@if\s*\([^)]*\)\s*{/g, "");
  cleaned = cleaned.replace(/} else if\s*\([^)]*\)\s*{/g, "");
  cleaned = cleaned.replace(/} else\s*{/g, "");
  cleaned = cleaned.replace(/@foreach\s*\([^)]*\)\s*{/g, "");
  cleaned = cleaned.replace(/}/g, "");
  return cleaned;
}

// src/parsing/normalizeToScaffoldTree.ts
function normalizeToScaffoldTree(text, strategy) {
  let rawNodes = [];
  if (strategy === "jsx") {
    rawNodes = parseJsxLike(text);
  } else if (strategy === "razor") {
    rawNodes = parseHtmlLike(stripRazorNoise(text));
  } else {
    rawNodes = parseHtmlLike(text);
  }
  return rawNodes;
}

// src/transform/chooseSelector.ts
var vscode = __toESM(require("vscode"));
function chooseSelector(node) {
  const config = vscode.workspace.getConfiguration("cssScaffold");
  const skipReact = config.get("skipUppercaseReactComponents", true);
  if (node.tagName && /^[A-Z]/.test(node.tagName) && skipReact) {
    node.selector = null;
  } else if (node.id) {
    node.selector = `#${node.id}`;
  } else if (node.classes.length > 0) {
    node.selector = `.${node.classes[0]}`;
  } else if (node.tagName) {
    node.selector = node.tagName.toLowerCase();
  }
  for (const child of node.children) {
    chooseSelector(child);
  }
}

// src/transform/pruneIgnoredNodes.ts
var vscode2 = __toESM(require("vscode"));
function pruneIgnoredNodes(nodes) {
  const config = vscode2.workspace.getConfiguration("cssScaffold");
  const includeSource = config.get("includeSourceTags", true);
  const ignoredTags = /* @__PURE__ */ new Set(["script", "style", "meta", "link", "noscript"]);
  if (!includeSource)
    ignoredTags.add("source");
  function prune(nodeList) {
    const result = [];
    for (const node of nodeList) {
      if (node.tagName && ignoredTags.has(node.tagName.toLowerCase())) {
        continue;
      }
      node.children = prune(node.children);
      if (node.selector === null) {
        result.push(...node.children);
      } else {
        result.push(node);
      }
    }
    return result;
  }
  return prune(nodes);
}

// src/transform/dedupeSiblings.ts
function dedupeSiblings(nodes) {
  const map = /* @__PURE__ */ new Map();
  const result = [];
  for (const node of nodes) {
    node.children = dedupeSiblings(node.children);
    if (!node.selector) {
      result.push(node);
      continue;
    }
    if (map.has(node.selector)) {
      const existing = map.get(node.selector);
      existing.children.push(...node.children);
      existing.children = dedupeSiblings(existing.children);
    } else {
      map.set(node.selector, node);
      result.push(node);
    }
  }
  return result;
}

// src/output/emitNestedScss.ts
function emitNestedScss(nodes, indentLevel = 0) {
  if (nodes.length === 0)
    return "";
  const indentStr = "  ".repeat(indentLevel);
  let lines = [];
  for (const node of nodes) {
    if (!node.selector)
      continue;
    if (node.children.length === 0) {
      lines.push(`${indentStr}${node.selector} {}`);
    } else {
      const childrenScss = emitNestedScss(node.children, indentLevel + 1);
      if (childrenScss) {
        lines.push(`${indentStr}${node.selector} {`);
        lines.push(childrenScss);
        lines.push(`${indentStr}}`);
      } else {
        lines.push(`${indentStr}${node.selector} {}`);
      }
    }
  }
  return lines.join("\n");
}

// src/utils/getSelectionText.ts
var vscode3 = __toESM(require("vscode"));
function getSelectionText() {
  const editor = vscode3.window.activeTextEditor;
  if (!editor) {
    return null;
  }
  const selection = editor.selection;
  if (selection.isEmpty) {
    return null;
  }
  return editor.document.getText(selection);
}

// src/utils/clipboard.ts
var vscode4 = __toESM(require("vscode"));
async function copyToClipboard(text) {
  await vscode4.env.clipboard.writeText(text);
}

// src/utils/notifications.ts
var vscode5 = __toESM(require("vscode"));
function showSuccess(message) {
  vscode5.window.showInformationMessage(message);
}
function showError(message) {
  vscode5.window.showErrorMessage(message);
}

// src/utils/languageSupport.ts
function getParsingStrategy(languageId) {
  switch (languageId) {
    case "html":
    case "htm":
      return "html";
    case "javascript":
    case "javascriptreact":
    case "typescript":
    case "typescriptreact":
      return "jsx";
    case "razor":
    case "aspnetcorerazor":
      return "razor";
    default:
      return "html";
  }
}

// src/commands/copyFromSelection.ts
async function copyFromSelection(editor) {
  let text = getSelectionText();
  if (!text) {
    showError("Select some markup first.");
    return;
  }
  text = text.trim();
  if (!text.startsWith("<") && /^[a-zA-Z]/.test(text))
    text = "<" + text;
  if (!text.endsWith(">"))
    text = text + ">";
  if (!isMarkupSelection(text)) {
    showError("Selection must start with < and end with > to generate a CSS scaffold.");
    return;
  }
  try {
    const languageId = editor.document.languageId;
    const strategy = getParsingStrategy(languageId);
    let nodes = normalizeToScaffoldTree(text, strategy);
    for (const node of nodes) {
      chooseSelector(node);
    }
    nodes = pruneIgnoredNodes(nodes);
    nodes = dedupeSiblings(nodes);
    const scssBlock = emitNestedScss(nodes);
    if (!scssBlock.trim()) {
      showError("Could not generate a CSS scaffold from this selection.");
      return;
    }
    await copyToClipboard(scssBlock);
    showSuccess("CSS scaffold copied to clipboard.");
  } catch (err) {
    console.error(err);
    showError("Could not generate a CSS scaffold from this selection.");
  }
}

// src/parsing/parseScssToScaffoldTree.ts
function parseScssToScaffoldTree(scss) {
  let cleaned = scss.replace(/\/\*[\s\S]*?\*\//g, "");
  cleaned = cleaned.replace(/\/\/.*$/gm, "");
  cleaned = cleaned.replace(/"[^"]*"/g, '""').replace(/'[^']*'/g, "''");
  const tokens = [];
  let current = "";
  for (let i = 0; i < cleaned.length; i++) {
    const char = cleaned[i];
    if (char === "{" || char === "}" || char === ";") {
      const t2 = current.trim();
      if (t2)
        tokens.push(t2);
      tokens.push(char);
      current = "";
    } else {
      current += char;
    }
  }
  const t = current.trim();
  if (t)
    tokens.push(t);
  const rootNodes = [];
  const stack = [];
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i];
    if (token === "{") {
      const prev = tokens[i - 1];
      if (prev && prev !== "{" && prev !== "}" && prev !== ";") {
        if (prev.startsWith("@")) {
          stack.push(null);
        } else {
          const node = parseSelectorToNode(prev);
          let parent = null;
          for (let j = stack.length - 1; j >= 0; j--) {
            if (stack[j] !== null) {
              parent = stack[j];
              break;
            }
          }
          if (parent) {
            parent.children.push(node);
          } else {
            rootNodes.push(node);
          }
          stack.push(node);
        }
      } else {
        stack.push(null);
      }
    } else if (token === "}") {
      stack.pop();
    }
  }
  return rootNodes;
}
function parseSelectorToNode(sel) {
  const firstPart = sel.split(",")[0].trim();
  const parts = firstPart.split(/[\s>+~]+/).filter((p) => p);
  let target = parts[parts.length - 1] || "";
  target = target.split(":")[0];
  let tagName = "div";
  let id = null;
  const classes = [];
  const tagMatch = target.match(/^([a-zA-Z0-9\-]+)/);
  if (tagMatch) {
    tagName = tagMatch[1];
  } else if (target === "") {
  }
  const idMatch = target.match(/#([a-zA-Z0-9\-_]+)/);
  if (idMatch) {
    id = idMatch[1];
  }
  const classRegex = /\.([a-zA-Z0-9\-_]+)/g;
  let match;
  while ((match = classRegex.exec(target)) !== null) {
    classes.push(match[1]);
  }
  return {
    tagName,
    id,
    classes,
    selector: sel,
    children: []
  };
}

// src/output/emitHtmlScaffold.ts
function emitHtmlScaffold(nodes, indent = "") {
  let html = "";
  for (const node of nodes) {
    let tag = node.tagName || "div";
    let idAttr = node.id ? ` id="${node.id}"` : "";
    let classAttr = node.classes.length > 0 ? ` class="${node.classes.join(" ")}"` : "";
    let openTag = `<${tag}${idAttr}${classAttr}>`;
    let closeTag = `</${tag}>`;
    const voidElements = /* @__PURE__ */ new Set(["area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta", "param", "source", "track", "wbr"]);
    if (voidElements.has(tag.toLowerCase())) {
      html += `${indent}${openTag}
`;
    } else {
      if (node.children.length > 0) {
        html += `${indent}${openTag}
`;
        html += emitHtmlScaffold(node.children, indent + "  ");
        html += `${indent}${closeTag}
`;
      } else {
        html += `${indent}${openTag}${closeTag}
`;
      }
    }
  }
  return html;
}

// src/commands/copyHtmlScaffold.ts
async function copyHtmlScaffold(editor) {
  let text = getSelectionText();
  if (!text) {
    showError("Select some SCSS/CSS structure first.");
    return;
  }
  try {
    const nodes = parseScssToScaffoldTree(text);
    if (nodes.length === 0) {
      showError("Could not find any selectors to scaffold.");
      return;
    }
    const htmlBlock = emitHtmlScaffold(nodes);
    if (!htmlBlock.trim()) {
      showError("Could not generate an HTML scaffold from this selection.");
      return;
    }
    await copyToClipboard(htmlBlock);
    showSuccess("HTML scaffold copied to clipboard.");
  } catch (err) {
    console.error(err);
    showError("Could not generate an HTML scaffold from this selection.");
  }
}

// src/extension.ts
function activate(context) {
  let disposable1 = vscode6.commands.registerCommand("cssScaffold.copyFromSelection", () => {
    const editor = vscode6.window.activeTextEditor;
    if (editor) {
      copyFromSelection(editor);
    } else {
      vscode6.window.showErrorMessage("No active editor.");
    }
  });
  let disposable2 = vscode6.commands.registerCommand("cssScaffold.copyHtmlScaffold", () => {
    const editor = vscode6.window.activeTextEditor;
    if (editor) {
      copyHtmlScaffold(editor);
    } else {
      vscode6.window.showErrorMessage("No active editor.");
    }
  });
  context.subscriptions.push(disposable1, disposable2);
}
function deactivate() {
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  activate,
  deactivate
});
/*! Bundled license information:

he/he.js:
  (*! https://mths.be/he v1.2.0 by @mathias | MIT license *)
*/
