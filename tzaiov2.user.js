// ==UserScript==
// @name          Torrentz All-in-One
// @description   Does everything you wish Torrentz.eu could do!
// @version       2.0.17
// @date          2012-12-05
// @author        elundmark
// @contact       mail@elundmark.se
// @license       MIT License; http://www.opensource.org/licenses/mit-license.php
// @namespace     http://elundmark.se/code/tz-aio/
// @homepage      https://userscripts.org/scripts/show/125001
// @updateURL     https://userscripts.org/scripts/source/125001.meta.js
// @downloadURL   https://userscripts.org/scripts/source/125001.user.js
// @supportURL    https://github.com/elundmark/tz-aio-userscript/issues
// @include       http://torrentz.eu/*
// @include       https://torrentz.eu/*
// @match         http://torrentz.eu/*
// @match         https://torrentz.eu/*
// @include       http://torrentz.com/*
// @include       https://torrentz.com/*
// @match         http://torrentz.com/*
// @match         https://torrentz.com/*
// @include       http://torrentz.me/*
// @include       https://torrentz.me/*
// @match         http://torrentz.me/*
// @match         https://torrentz.me/*
// @include       http://torrentz.in/*
// @include       https://torrentz.in/*
// @match         http://torrentz.in/*
// @match         https://torrentz.in/*
// @include       http://torrentz.hk/*
// @include       https://torrentz.hk/*
// @match         http://torrentz.hk/*
// @match         https://torrentz.hk/*
// @include       http://torrents.de/*
// @include       https://torrents.de/*
// @match         http://torrents.de/*
// @match         https://torrents.de/*
// @include       http://tz.ai/*
// @include       https://tz.ai/*
// @match         http://tz.ai/*
// @match         https://tz.ai/*
// @require       http://code.jquery.com/jquery-1.8.3.min.js
// @icon          data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAACqVBMVEUKFB4KFR8LFR8LFiELFiIMGCQNGicNGigNGygNGykOHCsPGSIPHi0PHi4PHy8QIDEQITEQITIRGyQRIjMTJjoUKDwUKD0VJDUWHykWLEIXICoXL0cYIisYMEgZIiwZMksaIywaNE4cOVYdJi8dOlcdO1keJzAePFoePVwfKDEfPl4fP14fV48gKjMgQGAgQGEhQmMhQ2UiRWcjRmkkLTYkSW0lSm8mTHImTXMnTnYpUnspXpQqVH4rV4IsWIQsWIUsWYUsWYYtNT4tWocuSWQvSmQvXo4xYpMxYpQxY5QxY5UyOkIyZJcyZZcyZZgzZpk1Z5o2PkY2aJo3P0c3P0g6Qko6a5w8REw9RU1ASFBAcJ9BSVFBUGBCSlJCcaBDcqFEc6FFTVRFdKJGU19GaY1HT1ZJYHdJdqRMeaVNV2FNc5hOWGJRWF9TfqhTfqlUW2JWfKJaYWdaYWhad5Rag6xbhK1dY2pdhq5fh65giK9iibBjaXBjirFla3FlhKJli7FnbXNnbXRnjbJnjbNobnRqj7Rtc3ltkrZvk7dzlrl1e4F6m7x7nL18nL1/hIqCocCEo8GFo8KHpcOLqMWMkZaMnrCOlp6OqsaSorGTmJyVr8qWsMqYnKCZnaGanqKas8ybtMyctM2guM+nvdKovdOtwdWywtK7vsG/wsTC0eDFx8rGyMvHycvJy83Jy87Nz9HN09rP2ubQ2uTQ3OfT3ejU3+nX2dra3N3c3d/d3+Dg4uTh4uPi4+Tk5ufk6/Ho7fHo7fPp6uzp7vTq6+zq7/Tr7O3r7O7r7/Pr8PXs7e7s8PXu8fTv8/bw8fHw8fLy9fj09PX09/j19vf29vf2+Pr3+Pr3+fr4+Pn5+fn5+fr6+vr6+/z7+/v7/P38/Pz8/P39/f3+/v7///+abyX6AAAC3ElEQVR42u3b51MTQRzH4RWUiIqIXRR7Q1EUuyiW2FDD2bAX7L0rIhZUUMHeK/ZesPfeULF3seHt9y8xkzsEjtWJXLzL6O+TV5nszD252exekjkGkyMAAQiQCeAwOK4BICjU0IKgBYRKhhZKAAIQgAAEIAABCEAAAhCAAARwa8BGcOeLkkTFApxjTh4B6+F8vEOwJGg1ZABjgg0AVPORBB0DBxDpkzfAuj8C+Em5i4OjSL+8ATbwXEGGPVnwQk3BQeZ+47IeQNLFMyk5O3mDwx6/ciJF06WKuQ4yZe87LkMPoG9Ux8CcVd4ERyv8AzXVY8WkrEbErNx//o4MGXoA9lo1DMnZZuUMJHjXDtHWVFJLhCPl3esACNuhAnzbSb8skUPpXwYsduszsByf1dJlbjBArShTW2MSoFF9tW3GzQFx+/7aHCCAswCaAwRwOWAnzYH/HkBzwF0A0WbPged3Hz3J3q14A8+AqNcLrTYjAdqvi/LbiZXCjQRg99QZatMnHYWM48XLdTF0DiTk87KojedAWlkWEG7sx7BIk5ZKo97LSO/GCrWIMHgdsCrPh14APi1g+RvYzFmIehzinCd7sCo2k/aCtQBOe7DSnU1aimPAkVqBlWgrmQOY/Ax40Y95N5fMAQw7C3ydxzzrRphzPdDrIMCTGQvobtJ2vAocpwqzUp0kcwBLvgPXGjPf1iZ9NZvwAHjTh3k1izDlemBRmXPgiGaetWzS79oDx/CeLt8Nl20Bz9jOWHnRCpTEMwNk2MvgP/sS7xrAkY/gV0f3HjxtltLscYJfyUQ9nRmmG6Ak49X1m7fvqT0+4CQgbXgNl8wBxyN7h8O6Ogmorg+w9eXD+4JSd7Gs/WDpB2WMqMsDdALGxo4cJGhIe9ZGymzgfGWMqP7+VXUAHJW0FBRksVi1Y8QVqEP/GxKAAAQgAAEIQAACEIAABCAAAbQAd7vdj8PgON1zSgACuAvgB4QHvuWvZtCMAAAAAElFTkSuQmCC
// ==/UserScript==
(function(){
  var currProtocol = location.protocol,
      currHost     = location.hostname,
      storedSettings, init, TZO;
  if ( currProtocol === "http:" ) {
    location.href = location.href.replace(/^http:/, "https:");
  } else {
    // Main init function, called right after it's been closed
    init = function(_window, $j){
      try {
        // Used to log errors to FB
        var GM_log = function(obj) {
          _window.console.log(obj);
        };
        if ( typeof $j !== "function" || typeof _window !== "object" ) throw "We have no _window (or) $j";
        //
        //  Plugins  
        //
        /* jQuery JSON Plugin
         * version: 2.4 (2012-11-13)
         * http://code.google.com/p/jquery-json
         * This document is licensed as free software under the terms of the
         * MIT License: http://www.opensource.org/licenses/mit-license.php
         * Influenced by MochiKit's serializeJSON, which is
         * copyrighted 2005 by Bob Ippolito.
        */
        (function($){'use strict';var escape=/["\\\x00-\x1f\x7f-\x9f]/g,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},hasOwn=Object.prototype.hasOwnProperty;$.toJSON=typeof JSON==='object'&&JSON.stringify?JSON.stringify:function(o){if(o===null){return'null';}
var pairs,k,name,val,type=$.type(o);if(type==='undefined'){return undefined;}
if(type==='number'||type==='boolean'){return String(o);}
if(type==='string'){return $.quoteString(o);}
if(typeof o.toJSON==='function'){return $.toJSON(o.toJSON());}
if(type==='date'){var month=o.getUTCMonth()+1,day=o.getUTCDate(),year=o.getUTCFullYear(),hours=o.getUTCHours(),minutes=o.getUTCMinutes(),seconds=o.getUTCSeconds(),milli=o.getUTCMilliseconds();if(month<10){month='0'+month;}
if(day<10){day='0'+day;}
if(hours<10){hours='0'+hours;}
if(minutes<10){minutes='0'+minutes;}
if(seconds<10){seconds='0'+seconds;}
if(milli<100){milli='0'+milli;}
if(milli<10){milli='0'+milli;}
return'"'+year+'-'+month+'-'+day+'T'+
hours+':'+minutes+':'+seconds+'.'+milli+'Z"';}
pairs=[];if($.isArray(o)){for(k=0;k<o.length;k++){pairs.push($.toJSON(o[k])||'null');}
return'['+pairs.join(',')+']';}
if(typeof o==='object'){for(k in o){if(hasOwn.call(o,k)){type=typeof k;if(type==='number'){name='"'+k+'"';}else if(type==='string'){name=$.quoteString(k);}else{continue;}
type=typeof o[k];if(type!=='function'&&type!=='undefined'){val=$.toJSON(o[k]);pairs.push(name+':'+val);}}}
return'{'+pairs.join(',')+'}';}};$.evalJSON=typeof JSON==='object'&&JSON.parse?JSON.parse:function(str){return eval('('+str+')');};$.secureEvalJSON=typeof JSON==='object'&&JSON.parse?JSON.parse:function(str){var filtered=str.replace(/\\["\\\/bfnrtu]/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,'');if(/^[\],:{}\s]*$/.test(filtered)){return eval('('+str+')');}
throw new SyntaxError('Error parsing JSON, source is not valid.');};$.quoteString=function(str){if(str.match(escape)){return'"'+str.replace(escape,function(a){var c=meta[a];if(typeof c==='string'){return c;}
c=a.charCodeAt();return'\\u00'+Math.floor(c/16).toString(16)+(c%16).toString(16);})+'"';}
return'"'+str+'"';};}(jQuery));
        /* JSTORAGE
         * Copyright (c) 2010 Andris Reinman, andris.reinman@gmail.com
         * Project homepage: www.jstorage.info
         * Licensed under MIT-style license: http://www.opensource.org/licenses/mit-license.php
        */
        (function(){function x(a,b){function f(){if("session"==a)try{j=m.parse(window.name||"{}")}catch(b){j={}}}var h=!1,e=0,g,d,j={};Math.random();if(b||"undefined"==typeof window[a+"Storage"])if("local"==a&&window.globalStorage)localStorage=window.globalStorage[window.location.hostname];else if("userDataBehavior"==l){b&&(window[a+"Storage"]&&window[a+"Storage"].parentNode)&&window[a+"Storage"].parentNode.removeChild(window[a+"Storage"]);d=document.createElement("button");document.getElementsByTagName("head")[0].appendChild(d);
"local"==a?j=c:"session"==a&&f();for(g in j)j.hasOwnProperty(g)&&("__jstorage_meta"!=g&&"length"!=g&&"undefined"!=typeof j[g])&&(g in d||e++,d[g]=j[g]);d.length=e;d.key=function(a){var b=0,c;f();for(c in j)if(j.hasOwnProperty(c)&&"__jstorage_meta"!=c&&"length"!=c&&"undefined"!=typeof j[c]){if(b==a)return c;b++}};d.getItem=function(b){f();return"session"==a?j[b]:o.jStorage.get(b)};d.setItem=function(a,b){"undefined"!=typeof b&&(d[a]=(b||"").toString())};d.removeItem=function(b){if("local"==a)return o.jStorage.deleteKey(b);
d[b]=void 0;h=!0;b in d&&d.removeAttribute(b);h=!1};d.clear=function(){"session"==a?(window.name="",x("session",!0)):o.jStorage.flush()};"local"==a&&(z=function(a,b){"length"!=a&&(h=!0,"undefined"==typeof b?a in d&&(e--,d.removeAttribute(a)):(a in d||e++,d[a]=(b||"").toString()),d.length=e,h=!1)});d.attachEvent("onpropertychange",function(b){if("length"!=b.propertyName&&!(h||"length"==b.propertyName)){if("local"==a)!(b.propertyName in j)&&"undefined"!=typeof d[b.propertyName]&&e++;else if("session"==
a){f();"undefined"!=typeof d[b.propertyName]&&!(b.propertyName in j)?(j[b.propertyName]=d[b.propertyName],e++):"undefined"==typeof d[b.propertyName]&&b.propertyName in j?(delete j[b.propertyName],e--):j[b.propertyName]=d[b.propertyName];"session"==a&&(window.name=m.stringify(j));d.length=e;return}o.jStorage.set(b.propertyName,d[b.propertyName]);d.length=e}});window[a+"Storage"]=d}}function D(){var a="{}";if("userDataBehavior"==l){i.load("jStorage");try{a=i.getAttribute("jStorage")}catch(b){}try{q=
i.getAttribute("jStorage_update")}catch(c){}k.jStorage=a}E();y();F()}function t(){var a;clearTimeout(G);G=setTimeout(function(){if("localStorage"==l||"globalStorage"==l)a=k.jStorage_update;else if("userDataBehavior"==l){i.load("jStorage");try{a=i.getAttribute("jStorage_update")}catch(b){}}if(a&&a!=q){q=a;var f=m.parse(m.stringify(c.__jstorage_meta.CRC32)),h;D();h=m.parse(m.stringify(c.__jstorage_meta.CRC32));var e,g=[],d=[];for(e in f)f.hasOwnProperty(e)&&(h[e]?f[e]!=h[e]&&g.push(e):d.push(e));for(e in h)h.hasOwnProperty(e)&&
(f[e]||g.push(e));r(g,"updated");r(d,"deleted")}},25)}function r(a,b){a=[].concat(a||[]);if("flushed"==b){var a=[],c;for(c in n)n.hasOwnProperty(c)&&a.push(c);b="deleted"}c=0;for(var h=a.length;c<h;c++)if(n[a[c]])for(var e=0,g=n[a[c]].length;e<g;e++)n[a[c]][e](a[c],b)}function u(){var a=(+new Date).toString();"localStorage"==l||"globalStorage"==l?k.jStorage_update=a:"userDataBehavior"==l&&(i.setAttribute("jStorage_update",a),i.save("jStorage"));t()}function E(){if(k.jStorage)try{c=m.parse(String(k.jStorage))}catch(a){k.jStorage=
"{}"}else k.jStorage="{}";A=k.jStorage?String(k.jStorage).length:0;c.__jstorage_meta||(c.__jstorage_meta={});c.__jstorage_meta.CRC32||(c.__jstorage_meta.CRC32={})}function v(){if(c.__jstorage_meta.PubSub){for(var a=+new Date-2E3,b=0,f=c.__jstorage_meta.PubSub.length;b<f;b++)if(c.__jstorage_meta.PubSub[b][0]<=a){c.__jstorage_meta.PubSub.splice(b,c.__jstorage_meta.PubSub.length-b);break}c.__jstorage_meta.PubSub.length||delete c.__jstorage_meta.PubSub}try{k.jStorage=m.stringify(c),i&&(i.setAttribute("jStorage",
k.jStorage),i.save("jStorage")),A=k.jStorage?String(k.jStorage).length:0}catch(h){}}function p(a){if(!a||"string"!=typeof a&&"number"!=typeof a)throw new TypeError("Key name must be string or numeric");if("__jstorage_meta"==a)throw new TypeError("Reserved key name");return!0}function y(){var a,b,f,h,e=Infinity,g=!1,d=[];clearTimeout(H);if(c.__jstorage_meta&&"object"==typeof c.__jstorage_meta.TTL){a=+new Date;f=c.__jstorage_meta.TTL;h=c.__jstorage_meta.CRC32;for(b in f)f.hasOwnProperty(b)&&(f[b]<=
a?(delete f[b],delete h[b],delete c[b],g=!0,d.push(b)):f[b]<e&&(e=f[b]));Infinity!=e&&(H=setTimeout(y,e-a));g&&(v(),u(),r(d,"deleted"))}}function F(){if(c.__jstorage_meta.PubSub){for(var a,b=B,f=len=c.__jstorage_meta.PubSub.length-1;0<=f;f--)if(a=c.__jstorage_meta.PubSub[f],a[0]>B){var b=a[0],h=a[1];a=a[2];if(s[h])for(var e=0,g=s[h].length;e<g;e++)s[h][e](h,m.parse(m.stringify(a)))}B=b}}var o=window.jQuery||window.$||(window.$={}),m={parse:window.JSON&&(window.JSON.parse||window.JSON.decode)||String.prototype.evalJSON&&
function(a){return String(a).evalJSON()}||o.parseJSON||o.evalJSON,stringify:Object.toJSON||window.JSON&&(window.JSON.stringify||window.JSON.encode)||o.toJSON};if(!m.parse||!m.stringify)throw Error("No JSON support found, include //cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2.js to page");var c={},k={jStorage:"{}"},i=null,A=0,l=!1,n={},G=!1,q=0,s={},B=+new Date,H,C={isXML:function(a){return(a=(a?a.ownerDocument||a:0).documentElement)?"HTML"!==a.nodeName:!1},encode:function(a){if(!this.isXML(a))return!1;
try{return(new XMLSerializer).serializeToString(a)}catch(b){try{return a.xml}catch(c){}}return!1},decode:function(a){var b="DOMParser"in window&&(new DOMParser).parseFromString||window.ActiveXObject&&function(a){var b=new ActiveXObject("Microsoft.XMLDOM");b.async="false";b.loadXML(a);return b};if(!b)return!1;a=b.call("DOMParser"in window&&new DOMParser||window,a,"text/xml");return this.isXML(a)?a:!1}},z=function(){};o.jStorage={version:"0.3.0",set:function(a,b,f){p(a);f=f||{};if("undefined"==typeof b)return this.deleteKey(a),
b;if(C.isXML(b))b={_is_xml:!0,xml:C.encode(b)};else{if("function"==typeof b)return;b&&"object"==typeof b&&(b=m.parse(m.stringify(b)))}c[a]=b;var h=c.__jstorage_meta.CRC32,e=m.stringify(b),g,d=0,d=0;g=-1;for(var j=0,i=e.length;j<i;j++)d=(g^e.charCodeAt(j))&255,d="0x"+"00000000 77073096 EE0E612C 990951BA 076DC419 706AF48F E963A535 9E6495A3 0EDB8832 79DCB8A4 E0D5E91E 97D2D988 09B64C2B 7EB17CBD E7B82D07 90BF1D91 1DB71064 6AB020F2 F3B97148 84BE41DE 1ADAD47D 6DDDE4EB F4D4B551 83D385C7 136C9856 646BA8C0 FD62F97A 8A65C9EC 14015C4F 63066CD9 FA0F3D63 8D080DF5 3B6E20C8 4C69105E D56041E4 A2677172 3C03E4D1 4B04D447 D20D85FD A50AB56B 35B5A8FA 42B2986C DBBBC9D6 ACBCF940 32D86CE3 45DF5C75 DCD60DCF ABD13D59 26D930AC 51DE003A C8D75180 BFD06116 21B4F4B5 56B3C423 CFBA9599 B8BDA50F 2802B89E 5F058808 C60CD9B2 B10BE924 2F6F7C87 58684C11 C1611DAB B6662D3D 76DC4190 01DB7106 98D220BC EFD5102A 71B18589 06B6B51F 9FBFE4A5 E8B8D433 7807C9A2 0F00F934 9609A88E E10E9818 7F6A0DBB 086D3D2D 91646C97 E6635C01 6B6B51F4 1C6C6162 856530D8 F262004E 6C0695ED 1B01A57B 8208F4C1 F50FC457 65B0D9C6 12B7E950 8BBEB8EA FCB9887C 62DD1DDF 15DA2D49 8CD37CF3 FBD44C65 4DB26158 3AB551CE A3BC0074 D4BB30E2 4ADFA541 3DD895D7 A4D1C46D D3D6F4FB 4369E96A 346ED9FC AD678846 DA60B8D0 44042D73 33031DE5 AA0A4C5F DD0D7CC9 5005713C 270241AA BE0B1010 C90C2086 5768B525 206F85B3 B966D409 CE61E49F 5EDEF90E 29D9C998 B0D09822 C7D7A8B4 59B33D17 2EB40D81 B7BD5C3B C0BA6CAD EDB88320 9ABFB3B6 03B6E20C 74B1D29A EAD54739 9DD277AF 04DB2615 73DC1683 E3630B12 94643B84 0D6D6A3E 7A6A5AA8 E40ECF0B 9309FF9D 0A00AE27 7D079EB1 F00F9344 8708A3D2 1E01F268 6906C2FE F762575D 806567CB 196C3671 6E6B06E7 FED41B76 89D32BE0 10DA7A5A 67DD4ACC F9B9DF6F 8EBEEFF9 17B7BE43 60B08ED5 D6D6A3E8 A1D1937E 38D8C2C4 4FDFF252 D1BB67F1 A6BC5767 3FB506DD 48B2364B D80D2BDA AF0A1B4C 36034AF6 41047A60 DF60EFC3 A867DF55 316E8EEF 4669BE79 CB61B38C BC66831A 256FD2A0 5268E236 CC0C7795 BB0B4703 220216B9 5505262F C5BA3BBE B2BD0B28 2BB45A92 5CB36A04 C2D7FFA7 B5D0CF31 2CD99E8B 5BDEAE1D 9B64C2B0 EC63F226 756AA39C 026D930A 9C0906A9 EB0E363F 72076785 05005713 95BF4A82 E2B87A14 7BB12BAE 0CB61B38 92D28E9B E5D5BE0D 7CDCEFB7 0BDBDF21 86D3D2D4 F1D4E242 68DDB3F8 1FDA836E 81BE16CD F6B9265B 6FB077E1 18B74777 88085AE6 FF0F6A70 66063BCA 11010B5C 8F659EFF F862AE69 616BFFD3 166CCF45 A00AE278 D70DD2EE 4E048354 3903B3C2 A7672661 D06016F7 4969474D 3E6E77DB AED16A4A D9D65ADC 40DF0B66 37D83BF0 A9BCAE53 DEBB9EC5 47B2CF7F 30B5FFE9 BDBDF21C CABAC28A 53B39330 24B4A3A6 BAD03605 CDD70693 54DE5729 23D967BF B3667A2E C4614AB8 5D681B02 2A6F2B94 B40BBE37 C30C8EA1 5A05DF1B 2D02EF8D".substr(9*
d,8),g=g>>>8^d;h[a]=g^-1;this.setTTL(a,f.TTL||0);z(a,b);r(a,"updated");return b},get:function(a,b){p(a);return a in c?c[a]&&"object"==typeof c[a]&&c[a]._is_xml&&c[a]._is_xml?C.decode(c[a].xml):c[a]:"undefined"==typeof b?null:b},deleteKey:function(a){p(a);return a in c?(delete c[a],"object"==typeof c.__jstorage_meta.TTL&&a in c.__jstorage_meta.TTL&&delete c.__jstorage_meta.TTL[a],delete c.__jstorage_meta.CRC32[a],z(a,void 0),v(),u(),r(a,"deleted"),!0):!1},setTTL:function(a,b){var f=+new Date;p(a);
b=Number(b)||0;return a in c?(c.__jstorage_meta.TTL||(c.__jstorage_meta.TTL={}),0<b?c.__jstorage_meta.TTL[a]=f+b:delete c.__jstorage_meta.TTL[a],v(),y(),u(),!0):!1},getTTL:function(a){var b=+new Date;p(a);return a in c&&c.__jstorage_meta.TTL&&c.__jstorage_meta.TTL[a]?(a=c.__jstorage_meta.TTL[a]-b)||0:0},flush:function(){c={__jstorage_meta:{CRC32:{}}};x("local",!0);v();u();r(null,"flushed");return!0},storageObj:function(){function a(){}a.prototype=c;return new a},index:function(){var a=[],b;for(b in c)c.hasOwnProperty(b)&&
"__jstorage_meta"!=b&&a.push(b);return a},storageSize:function(){return A},currentBackend:function(){return l},storageAvailable:function(){return!!l},listenKeyChange:function(a,b){p(a);n[a]||(n[a]=[]);n[a].push(b)},stopListening:function(a,b){p(a);if(n[a])if(b)for(var c=n[a].length-1;0<=c;c--)n[a][c]==b&&n[a].splice(c,1);else delete n[a]},subscribe:function(a,b){a=(a||"").toString();if(!a)throw new TypeError("Channel not defined");s[a]||(s[a]=[]);s[a].push(b)},publish:function(a,b){a=(a||"").toString();
if(!a)throw new TypeError("Channel not defined");c.__jstorage_meta||(c.__jstorage_meta={});c.__jstorage_meta.PubSub||(c.__jstorage_meta.PubSub=[]);c.__jstorage_meta.PubSub.unshift([+new Date,a,b]);v();u()},reInit:function(){D()}};a:{var w=!1;if("localStorage"in window)try{window.localStorage.setItem("_tmptest","tmpval"),w=!0,window.localStorage.removeItem("_tmptest")}catch(I){}if(w)try{window.localStorage&&(k=window.localStorage,l="localStorage",q=k.jStorage_update)}catch(J){}else if("globalStorage"in
window)try{window.globalStorage&&(k=window.globalStorage[window.location.hostname],l="globalStorage",q=k.jStorage_update)}catch(K){}else if(i=document.createElement("link"),i.addBehavior){i.style.behavior="url(#default#userData)";document.getElementsByTagName("head")[0].appendChild(i);try{i.load("jStorage")}catch(L){i.setAttribute("jStorage","{}"),i.save("jStorage"),i.load("jStorage")}w="{}";try{w=i.getAttribute("jStorage")}catch(M){}try{q=i.getAttribute("jStorage_update")}catch(N){}k.jStorage=w;
l="userDataBehavior"}else{i=null;break a}E();y();x("local");x("session");"localStorage"==l||"globalStorage"==l?"addEventListener"in window?window.addEventListener("storage",t,!1):document.attachEvent("onstorage",t):"userDataBehavior"==l&&setInterval(t,1E3);F();"addEventListener"in window&&window.addEventListener("pageshow",function(a){a.persisted&&t()},!1)}})();
        /* jQuery replaceText
         * Copyright (c) 2009 "Cowboy" Ben Alman
         * Dual licensed under the MIT and GPL licenses.
         * http://benalman.com/about/license/
         * Script: jQuery replaceText: String replace for your jQueries!
         * Version: 1.1, Last updated: 11/21/2009*
         * Project Home - http://benalman.com/projects/jquery-replacetext-plugin/
         * GitHub       - http://github.com/cowboy/jquery-replacetext/
        */
        (function($j){$j.fn.replaceText=function(b,a,c){return this.each(function(){var f=this.firstChild,g,e,d=[];if(f){do{if(f.nodeType===3){g=f.nodeValue;e=g.replace(b,a);if(e!==g){if(!c&&/</.test(e)){$j(f).before(e);d.push(f)}else{f.nodeValue=e}}}}while(f=f.nextSibling)}d.length&&$j(d).remove()})}})($j);
        /* Underscore.js 1.4.2
         * (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
         * Underscore may be freely distributed under the MIT license.
         * http://underscorejs.org
        */
        (function(){var e=this,t=e._,n={},r=Array.prototype,i=Object.prototype,s=Function.prototype,o=r.push,u=r.slice,a=r.concat,f=r.unshift,l=i.toString,c=i.hasOwnProperty,h=r.forEach,p=r.map,d=r.reduce,v=r.reduceRight,m=r.filter,g=r.every,y=r.some,b=r.indexOf,w=r.lastIndexOf,E=Array.isArray,S=Object.keys,x=s.bind,T=function(e){if(e instanceof T)return e;if(!(this instanceof T))return new T(e);this._wrapped=e};typeof exports!="undefined"?(typeof module!="undefined"&&module.exports&&(exports=module.exports=T),exports._=T):e._=T,T.VERSION="1.4.2";var N=T.each=T.forEach=function(e,t,r){if(e==null)return;if(h&&e.forEach===h)e.forEach(t,r);else if(e.length===+e.length){for(var i=0,s=e.length;i<s;i++)if(t.call(r,e[i],i,e)===n)return}else for(var o in e)if(T.has(e,o)&&t.call(r,e[o],o,e)===n)return};T.map=T.collect=function(e,t,n){var r=[];return e==null?r:p&&e.map===p?e.map(t,n):(N(e,function(e,i,s){r[r.length]=t.call(n,e,i,s)}),r)},T.reduce=T.foldl=T.inject=function(e,t,n,r){var i=arguments.length>2;e==null&&(e=[]);if(d&&e.reduce===d)return r&&(t=T.bind(t,r)),i?e.reduce(t,n):e.reduce(t);N(e,function(e,s,o){i?n=t.call(r,n,e,s,o):(n=e,i=!0)});if(!i)throw new TypeError("Reduce of empty array with no initial value");return n},T.reduceRight=T.foldr=function(e,t,n,r){var i=arguments.length>2;e==null&&(e=[]);if(v&&e.reduceRight===v)return r&&(t=T.bind(t,r)),arguments.length>2?e.reduceRight(t,n):e.reduceRight(t);var s=e.length;if(s!==+s){var o=T.keys(e);s=o.length}N(e,function(u,a,f){a=o?o[--s]:--s,i?n=t.call(r,n,e[a],a,f):(n=e[a],i=!0)});if(!i)throw new TypeError("Reduce of empty array with no initial value");return n},T.find=T.detect=function(e,t,n){var r;return C(e,function(e,i,s){if(t.call(n,e,i,s))return r=e,!0}),r},T.filter=T.select=function(e,t,n){var r=[];return e==null?r:m&&e.filter===m?e.filter(t,n):(N(e,function(e,i,s){t.call(n,e,i,s)&&(r[r.length]=e)}),r)},T.reject=function(e,t,n){var r=[];return e==null?r:(N(e,function(e,i,s){t.call(n,e,i,s)||(r[r.length]=e)}),r)},T.every=T.all=function(e,t,r){t||(t=T.identity);var i=!0;return e==null?i:g&&e.every===g?e.every(t,r):(N(e,function(e,s,o){if(!(i=i&&t.call(r,e,s,o)))return n}),!!i)};var C=T.some=T.any=function(e,t,r){t||(t=T.identity);var i=!1;return e==null?i:y&&e.some===y?e.some(t,r):(N(e,function(e,s,o){if(i||(i=t.call(r,e,s,o)))return n}),!!i)};T.contains=T.include=function(e,t){var n=!1;return e==null?n:b&&e.indexOf===b?e.indexOf(t)!=-1:(n=C(e,function(e){return e===t}),n)},T.invoke=function(e,t){var n=u.call(arguments,2);return T.map(e,function(e){return(T.isFunction(t)?t:e[t]).apply(e,n)})},T.pluck=function(e,t){return T.map(e,function(e){return e[t]})},T.where=function(e,t){return T.isEmpty(t)?[]:T.filter(e,function(e){for(var n in t)if(t[n]!==e[n])return!1;return!0})},T.max=function(e,t,n){if(!t&&T.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.max.apply(Math,e);if(!t&&T.isEmpty(e))return-Infinity;var r={computed:-Infinity};return N(e,function(e,i,s){var o=t?t.call(n,e,i,s):e;o>=r.computed&&(r={value:e,computed:o})}),r.value},T.min=function(e,t,n){if(!t&&T.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.min.apply(Math,e);if(!t&&T.isEmpty(e))return Infinity;var r={computed:Infinity};return N(e,function(e,i,s){var o=t?t.call(n,e,i,s):e;o<r.computed&&(r={value:e,computed:o})}),r.value},T.shuffle=function(e){var t,n=0,r=[];return N(e,function(e){t=T.random(n++),r[n-1]=r[t],r[t]=e}),r};var k=function(e){return T.isFunction(e)?e:function(t){return t[e]}};T.sortBy=function(e,t,n){var r=k(t);return T.pluck(T.map(e,function(e,t,i){return{value:e,index:t,criteria:r.call(n,e,t,i)}}).sort(function(e,t){var n=e.criteria,r=t.criteria;if(n!==r){if(n>r||n===void 0)return 1;if(n<r||r===void 0)return-1}return e.index<t.index?-1:1}),"value")};var L=function(e,t,n,r){var i={},s=k(t);return N(e,function(t,o){var u=s.call(n,t,o,e);r(i,u,t)}),i};T.groupBy=function(e,t,n){return L(e,t,n,function(e,t,n){(T.has(e,t)?e[t]:e[t]=[]).push(n)})},T.countBy=function(e,t,n){return L(e,t,n,function(e,t,n){T.has(e,t)||(e[t]=0),e[t]++})},T.sortedIndex=function(e,t,n,r){n=n==null?T.identity:k(n);var i=n.call(r,t),s=0,o=e.length;while(s<o){var u=s+o>>>1;n.call(r,e[u])<i?s=u+1:o=u}return s},T.toArray=function(e){return e?e.length===+e.length?u.call(e):T.values(e):[]},T.size=function(e){return e.length===+e.length?e.length:T.keys(e).length},T.first=T.head=T.take=function(e,t,n){return t!=null&&!n?u.call(e,0,t):e[0]},T.initial=function(e,t,n){return u.call(e,0,e.length-(t==null||n?1:t))},T.last=function(e,t,n){return t!=null&&!n?u.call(e,Math.max(e.length-t,0)):e[e.length-1]},T.rest=T.tail=T.drop=function(e,t,n){return u.call(e,t==null||n?1:t)},T.compact=function(e){return T.filter(e,function(e){return!!e})};var A=function(e,t,n){return N(e,function(e){T.isArray(e)?t?o.apply(n,e):A(e,t,n):n.push(e)}),n};T.flatten=function(e,t){return A(e,t,[])},T.without=function(e){return T.difference(e,u.call(arguments,1))},T.uniq=T.unique=function(e,t,n,r){var i=n?T.map(e,n,r):e,s=[],o=[];return N(i,function(n,r){if(t?!r||o[o.length-1]!==n:!T.contains(o,n))o.push(n),s.push(e[r])}),s},T.union=function(){return T.uniq(a.apply(r,arguments))},T.intersection=function(e){var t=u.call(arguments,1);return T.filter(T.uniq(e),function(e){return T.every(t,function(t){return T.indexOf(t,e)>=0})})},T.difference=function(e){var t=a.apply(r,u.call(arguments,1));return T.filter(e,function(e){return!T.contains(t,e)})},T.zip=function(){var e=u.call(arguments),t=T.max(T.pluck(e,"length")),n=new Array(t);for(var r=0;r<t;r++)n[r]=T.pluck(e,""+r);return n},T.object=function(e,t){var n={};for(var r=0,i=e.length;r<i;r++)t?n[e[r]]=t[r]:n[e[r][0]]=e[r][1];return n},T.indexOf=function(e,t,n){if(e==null)return-1;var r=0,i=e.length;if(n){if(typeof n!="number")return r=T.sortedIndex(e,t),e[r]===t?r:-1;r=n<0?Math.max(0,i+n):n}if(b&&e.indexOf===b)return e.indexOf(t,n);for(;r<i;r++)if(e[r]===t)return r;return-1},T.lastIndexOf=function(e,t,n){if(e==null)return-1;var r=n!=null;if(w&&e.lastIndexOf===w)return r?e.lastIndexOf(t,n):e.lastIndexOf(t);var i=r?n:e.length;while(i--)if(e[i]===t)return i;return-1},T.range=function(e,t,n){arguments.length<=1&&(t=e||0,e=0),n=arguments[2]||1;var r=Math.max(Math.ceil((t-e)/n),0),i=0,s=new Array(r);while(i<r)s[i++]=e,e+=n;return s};var O=function(){};T.bind=function(t,n){var r,i;if(t.bind===x&&x)return x.apply(t,u.call(arguments,1));if(!T.isFunction(t))throw new TypeError;return i=u.call(arguments,2),r=function(){if(this instanceof r){O.prototype=t.prototype;var e=new O,s=t.apply(e,i.concat(u.call(arguments)));return Object(s)===s?s:e}return t.apply(n,i.concat(u.call(arguments)))}},T.bindAll=function(e){var t=u.call(arguments,1);return t.length==0&&(t=T.functions(e)),N(t,function(t){e[t]=T.bind(e[t],e)}),e},T.memoize=function(e,t){var n={};return t||(t=T.identity),function(){var r=t.apply(this,arguments);return T.has(n,r)?n[r]:n[r]=e.apply(this,arguments)}},T.delay=function(e,t){var n=u.call(arguments,2);return setTimeout(function(){return e.apply(null,n)},t)},T.defer=function(e){return T.delay.apply(T,[e,1].concat(u.call(arguments,1)))},T.throttle=function(e,t){var n,r,i,s,o,u,a=T.debounce(function(){o=s=!1},t);return function(){n=this,r=arguments;var f=function(){i=null,o&&(u=e.apply(n,r)),a()};return i||(i=setTimeout(f,t)),s?o=!0:(s=!0,u=e.apply(n,r)),a(),u}},T.debounce=function(e,t,n){var r,i;return function(){var s=this,o=arguments,u=function(){r=null,n||(i=e.apply(s,o))},a=n&&!r;return clearTimeout(r),r=setTimeout(u,t),a&&(i=e.apply(s,o)),i}},T.once=function(e){var t=!1,n;return function(){return t?n:(t=!0,n=e.apply(this,arguments),e=null,n)}},T.wrap=function(e,t){return function(){var n=[e];return o.apply(n,arguments),t.apply(this,n)}},T.compose=function(){var e=arguments;return function(){var t=arguments;for(var n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},T.after=function(e,t){return e<=0?t():function(){if(--e<1)return t.apply(this,arguments)}},T.keys=S||function(e){if(e!==Object(e))throw new TypeError("Invalid object");var t=[];for(var n in e)T.has(e,n)&&(t[t.length]=n);return t},T.values=function(e){var t=[];for(var n in e)T.has(e,n)&&t.push(e[n]);return t},T.pairs=function(e){var t=[];for(var n in e)T.has(e,n)&&t.push([n,e[n]]);return t},T.invert=function(e){var t={};for(var n in e)T.has(e,n)&&(t[e[n]]=n);return t},T.functions=T.methods=function(e){var t=[];for(var n in e)T.isFunction(e[n])&&t.push(n);return t.sort()},T.extend=function(e){return N(u.call(arguments,1),function(t){for(var n in t)e[n]=t[n]}),e},T.pick=function(e){var t={},n=a.apply(r,u.call(arguments,1));return N(n,function(n){n in e&&(t[n]=e[n])}),t},T.omit=function(e){var t={},n=a.apply(r,u.call(arguments,1));for(var i in e)T.contains(n,i)||(t[i]=e[i]);return t},T.defaults=function(e){return N(u.call(arguments,1),function(t){for(var n in t)e[n]==null&&(e[n]=t[n])}),e},T.clone=function(e){return T.isObject(e)?T.isArray(e)?e.slice():T.extend({},e):e},T.tap=function(e,t){return t(e),e};var M=function(e,t,n,r){if(e===t)return e!==0||1/e==1/t;if(e==null||t==null)return e===t;e instanceof T&&(e=e._wrapped),t instanceof T&&(t=t._wrapped);var i=l.call(e);if(i!=l.call(t))return!1;switch(i){case"[object String]":return e==String(t);case"[object Number]":return e!=+e?t!=+t:e==0?1/e==1/t:e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object RegExp]":return e.source==t.source&&e.global==t.global&&e.multiline==t.multiline&&e.ignoreCase==t.ignoreCase}if(typeof e!="object"||typeof t!="object")return!1;var s=n.length;while(s--)if(n[s]==e)return r[s]==t;n.push(e),r.push(t);var o=0,u=!0;if(i=="[object Array]"){o=e.length,u=o==t.length;if(u)while(o--)if(!(u=M(e[o],t[o],n,r)))break}else{var a=e.constructor,f=t.constructor;if(a!==f&&!(T.isFunction(a)&&a instanceof a&&T.isFunction(f)&&f instanceof f))return!1;for(var c in e)if(T.has(e,c)){o++;if(!(u=T.has(t,c)&&M(e[c],t[c],n,r)))break}if(u){for(c in t)if(T.has(t,c)&&!(o--))break;u=!o}}return n.pop(),r.pop(),u};T.isEqual=function(e,t){return M(e,t,[],[])},T.isEmpty=function(e){if(e==null)return!0;if(T.isArray(e)||T.isString(e))return e.length===0;for(var t in e)if(T.has(e,t))return!1;return!0},T.isElement=function(e){return!!e&&e.nodeType===1},T.isArray=E||function(e){return l.call(e)=="[object Array]"},T.isObject=function(e){return e===Object(e)},N(["Arguments","Function","String","Number","Date","RegExp"],function(e){T["is"+e]=function(t){return l.call(t)=="[object "+e+"]"}}),T.isArguments(arguments)||(T.isArguments=function(e){return!!e&&!!T.has(e,"callee")}),typeof /./!="function"&&(T.isFunction=function(e){return typeof e=="function"}),T.isFinite=function(e){return T.isNumber(e)&&isFinite(e)},T.isNaN=function(e){return T.isNumber(e)&&e!=+e},T.isBoolean=function(e){return e===!0||e===!1||l.call(e)=="[object Boolean]"},T.isNull=function(e){return e===null},T.isUndefined=function(e){return e===void 0},T.has=function(e,t){return c.call(e,t)},T.noConflict=function(){return e._=t,this},T.identity=function(e){return e},T.times=function(e,t,n){for(var r=0;r<e;r++)t.call(n,r)},T.random=function(e,t){return t==null&&(t=e,e=0),e+(0|Math.random()*(t-e+1))};var _={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};_.unescape=T.invert(_.escape);var D={escape:new RegExp("["+T.keys(_.escape).join("")+"]","g"),unescape:new RegExp("("+T.keys(_.unescape).join("|")+")","g")};T.each(["escape","unescape"],function(e){T[e]=function(t){return t==null?"":(""+t).replace(D[e],function(t){return _[e][t]})}}),T.result=function(e,t){if(e==null)return null;var n=e[t];return T.isFunction(n)?n.call(e):n},T.mixin=function(e){N(T.functions(e),function(t){var n=T[t]=e[t];T.prototype[t]=function(){var e=[this._wrapped];return o.apply(e,arguments),F.call(this,n.apply(T,e))}})};var P=0;T.uniqueId=function(e){var t=P++;return e?e+t:t},T.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var H=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},j=/\\|'|\r|\n|\t|\u2028|\u2029/g;T.template=function(e,t,n){n=T.defaults({},n,T.templateSettings);var r=new RegExp([(n.escape||H).source,(n.interpolate||H).source,(n.evaluate||H).source].join("|")+"|$","g"),i=0,s="__p+='";e.replace(r,function(t,n,r,o,u){s+=e.slice(i,u).replace(j,function(e){return"\\"+B[e]}),s+=n?"'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'":r?"'+\n((__t=("+r+"))==null?'':__t)+\n'":o?"';\n"+o+"\n__p+='":"",i=u+t.length}),s+="';\n",n.variable||(s="with(obj||{}){\n"+s+"}\n"),s="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+s+"return __p;\n";try{var o=new Function(n.variable||"obj","_",s)}catch(u){throw u.source=s,u}if(t)return o(t,T);var a=function(e){return o.call(this,e,T)};return a.source="function("+(n.variable||"obj")+"){\n"+s+"}",a},T.chain=function(e){return T(e).chain()};var F=function(e){return this._chain?T(e).chain():e};T.mixin(T),N(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=r[e];T.prototype[e]=function(){var n=this._wrapped;return t.apply(n,arguments),(e=="shift"||e=="splice")&&n.length===0&&delete n[0],F.call(this,n)}}),N(["concat","join","slice"],function(e){var t=r[e];T.prototype[e]=function(){return F.call(this,t.apply(this._wrapped,arguments))}}),T.extend(T.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);
        //
        //  End plugins  
        //
        if ( typeof _ === "function"
          && typeof $j === "function"
          && typeof $j.toJSON === "function"
          && typeof $j.jStorage === "object"
          && !/^announcelist_/.test(document.location.pathname.replace(/\x2F/g,"")) ) {
          // ***************************************************************************************
          TZO = {
            torrHash         : document.location.pathname.replace(/\x2F/g,""),
            scriptName       : "tz_aio",
            scriptVersion    : "Version 2.0.17 2012-12-05",
            docDomain        : document.domain,
            scriptHomepage   : "http://userscripts.org/scripts/show/125001",
            cloakerUrl       : "http://href.li/?",
            bodyEl           : $j("body"),
            defTrackerList   : [
"http://tracker.openbittorrent.com:80/announce",
"udp://tracker.openbittorrent.com:80/announce",
"http://tracker.publicbt.com:80/announce",
"udp://tracker.publicbt.com:80/announce",
"http://tracker2.istole.it:6969/announce",
"http://tracker.istole.it:80/announce",
"http://inferno.demonoid.com:3407/announce",
"http://tracker.ilibr.org:6969/announce",
"http://tracker.prq.to/announce",
"http://tracker.torrent.to:2710/announce",
"http://9.rarbg.com:2710/announce",
"http://bt1.the9.com:6969/announce",
"http://exodus.desync.com:6969/announce",
"http://genesis.1337x.org:1337/announce",
"http://nemesis.1337x.org:80/announce"
            ],
            searchEnginesArr : [
"search_imdb|http://www.imdb.com/find?s=all&amp;q=%s",
"rotten_tomatoes|http://www.rottentomatoes.com/search/full_search.php?search=%s",
"itunes|http://ax.itunes.apple.com/WebObjects/MZSearch.woa/wa/search?term=%s",
"amazon|http://www.amazon.com/s/?field-keywords=%s",
"wikipedia|http://en.wikipedia.org/w/index.php?search=%s",
"google|http://www.google.com/search?q=%s"
            ],
            colors              : {
              tzblue     : "#369",
              tzpink     : "#f5dfd6",
              lightpink  : "#faefeb",
              white      : "#fff",
              black      : "#000",
              logohover  : "#b3cce6",
              darkgray   : "#333",
              milkwhite  : "#eee",
              offwhite   : "#fefefe",
              green      : "#00b900",
              brown      : "#805B4D",
              gray       : "#AAA",
              lightgray  : "#ccc",
              lightgreen : "#d4ffd4",
              orange     : "#F51"
            },
            css              : function(){
              // everything's an Object :)
              var e = this,
                  base = e.scriptName;
              return "\
/* SITE */\
."+base+"_b a { outline:none !important; }\
."+base+"_b ul.autocomplete { z-index: 2 !important; }\
."+base+"_b h2 a img { border: 0 !important; }\
#magnet_container {\
display: block;\
position: absolute;\
z-index: 6;\
}\
#magnet_container, #magnet_container embed, #magnet_container object {\
margin: 0;\
padding: 0;\
border: 0 none;\
}\
#copied_box {\
display: none;\
position: fixed;\
top: 15px;\
left: 50%;\
margin-left: -280px;\
width: 160px;\
height: 25px;\
line-height: 25px;\
text-align: center;\
color: "+e.colors.white+";\
background-color: "+e.colors.tzblue+";\
z-index: 99;\
font-size: 15px;\
font-family: inherit;\
}\
#"+base+" {\
padding-right: 0 !important;\
position: relative;\
}\
#"+base+".verified_download {\
background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUE\
AAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKfSURBVDjLpZPrS1NhHMf9O3bOdmwDCWREIYK\
EUHsVJBI7mg3FvCxL09290jZj2EyLMnJexkgpLbPUanNOberU5taUMnHZUULMvelCtWF0sW/n7MVMEiN64AsPD8/n83uucQDi/id\
/DBT4Dolypw/qsz0pTMbj/WHpiDgsdSUyUmeiPt2+V7SrIM+bSss8ySGdR4abQQv6lrui6VxsRonrGCS9VEjSQ9E7CtiqdOZ4UuT\
qnBHO1X7YXl6Daa4yGq7vWO1D40wVDtj4kWQbn94myPGkCDPdSesczE2sCZShwl8CzcwZ6NiUs6n2nYX99T1cnKqA2EKui6+Twph\
A5k4yqMayopU5mANV3lNQTBdCMVUA9VQh3GuDMHiVcLCS3J4jSLhCGmKCjBEx0xlshjXYhApfMZRP5CyYD+UkG08+xt+4wLVQZA1\
tzxthm2tEfD3JxARH7QkbD1ZuozaggdZbxK5kAIsf5qGaKMTY2lAU/rH5HW3PLsEwUYy+YCcERmIjJpDcpzb6l7th9KtQ69fi09e\
PUej9l7cx2DJbD7UrG3r3afQHOyCo+V3QQzE35pvQvnAZukk5zL5qRL59jsKbPzdheXoBZc4saFhBS6AO7V4zqCpiawuptwQG+UA\
a7Ct3UT0hh9p9EnXT5Vh6t4C22QaUDh6HwnECOmcO7K+6kW49DKqS2DrEZCtfuI+9GrNHg4fMHVSO5kE7nAPVkAxKBxcOzsajpS4\
Yh4ohUPPWKTUh3PaQEptIOr6BiJjcZXCwktaAGfrRIpwblqOV3YKdhfXOIvBLeREWpnd8ynsaSJoyESFphwTtfjN6X1jRO2+FxWt\
CWksqBApeiFIR9K6fiTpPiigDoadqCEag5YUFKl6Yrciw0VOlhOivv/Ff8wtn0KzlebrUYwAAAABJRU5ErkJggg==);\
}\
#"+base+".not_active { background-image:url(//"+TZO.docDomain+"/img/exclamation.png); }\
#"+base+"_logo {\
display: block;\
position: absolute;\
top: -1px;\
right: -1px;\
z-index: 10;\
background-color: "+e.colors.tzblue+";\
background-image: url(//"+TZO.docDomain+"/img/cbr.gif), url(//"+TZO.docDomain+"/img/ctr.gif);\
background-repeat: no-repeat, no-repeat;\
background-position: bottom right, top right;\
width: 66px;\
height: 44px;\
border: 0;\
line-height: 44px;\
text-align: center;\
overflow: visible;\
color: "+e.colors.white+";\
}\
#"+base+"_message {\
display: none;\
position: absolute;\
border-right: 2px solid "+e.colors.tzblue+";\
top: 1px;\
right: 64px;\
width: 862px;\
height: 42px;\
line-height: 42px;\
background: "+e.colors.lightgreen+";\
color: "+e.colors.black+";\
text-align: left;\
}\
#"+base+"_logo:hover {\
color: "+e.colors.logohover+";\
}\
#"+base+"_logo:hover #"+base+"_message,\
#"+base+"_message:hover {\
display: block;\
}\
#"+base+"_logo:active {\
color: "+e.colors.white+";\
}\
#"+base+" #copylist {\
border-bottom: 1px dotted "+e.colors.green+";\
color: "+e.colors.tzblue+";\
display: inline-block;\
height: 20px;\
max-height: 20px;\
cursor: pointer;\
}\
#"+base+" a:active, #copylist:active, #copylist.active {\
color: "+e.colors.black+" !important;\
}\
#"+base+" a."+base+"_mlink:hover, #copylist:hover, #copylist.hover {\
border-bottom-style: solid !important;\
}\
#"+base+" .divided {\
padding: 0 3px;\
}\
#"+base+" a[href='#comments_"+base+"'] img,\
#"+base+" a[href='#write_comment_"+base+"'] img {\
position:relative;\
top:3px;\
}\
#"+base+" a[href='#files_"+base+"'] img {\
position:relative;\
top:1px;\
}\
#"+base+" .warn {\
color: red !important;\
text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\
padding-left: 4px;\
}\
#"+base+" ."+base+"_sep {\
color: "+e.colors.darkgray+";\
padding: 0 5px;\
text-shadow: -1px 1px 0 "+e.colors.milkwhite+";\
}\
#"+base+" ."+base+"_mlink {\
border-bottom: 1px dotted "+e.colors.green+";\
}\
."+base+"_b div.download dl {\
position: relative;\
}\
."+base+"_b a."+base+"_dllink {\
display: block;\
width: 120px;\
height:20px;\
padding-top: 5px;\
padding-bottom: 5px;\
position: absolute;\
top: 0;\
right: 80px;\
}\
."+base+"_b a."+base+"_dllink em {\
color: "+e.colors.brown+";\
font-size: 12px;\
line-height: 20px;\
height:20px;\
font-style:normal;\
font-weight:normal;\
display:block;\
text-align: center;\
background: "+e.colors.tzpink+";\
background: rgba(239,212,202,1);\
white-space: nowrap;\
overflow: visible;\
-webkit-border-radius: 6px;\
-moz-border-radius: 6px;\
border-radius: 6px;\
}\
."+base+"_b a."+base+"_dllink:hover em {\
background: "+e.colors.lightgreen+";\
color: "+e.colors.black+";\
-webkit-box-shadow: inset 0 0 2px "+e.colors.green+";\
   -moz-box-shadow: inset 0 0 2px "+e.colors.green+";\
        box-shadow: inset 0 0 2px "+e.colors.green+";\
}\
."+base+"_b a."+base+"_dllink:active em {\
background: "+e.colors.green+";\
color: "+e.colors.white+";\
}\
."+base+"_b a."+base+"_dllink:hover ~ a,\
."+base+"_b a."+base+"_dllink:hover + a {\
background-color: "+e.colors.lightpink+" !important;\
}\
."+base+"_b h2 span::selection, #copy_tr_textarea textarea::selection {\
color: "+e.colors.white+";\
background-color: "+e.colors.tzblue+";\
}\
."+base+"_b h2 span::-moz-selection, #copy_tr_textarea textarea::-moz-selection {\
color: "+e.colors.white+";\
background-color: "+e.colors.tzblue+";\
}\
#copy_tr_textarea textarea:focus {\
  outline:none;\
}\
."+base+"_b div.download h2 {\
position: relative;\
}\
."+base+"_b #search_bar {\
display: none;\
}\
."+base+"_b.search_ready #search_bar {\
display: block;\
float: none;\
min-height: 23px;\
padding: 0 0 10px 10px;\
background: "+e.colors.white+";\
margin: 0;\
text-align: center;\
border-bottom: 1px solid "+e.colors.tzpink+";\
position: relative;\
}\
."+base+"_b.search_ready #search_bar a.search_link, ."+base+"_b.search_ready #search_bar {\
font-size: 15px;\
line-height: 22px;\
color: "+e.colors.brown+";\
text-align: center;\
}\
."+base+"_b.search_ready #search_bar a.search_link {\
display: inline-block;\
margin-right: 8px;\
padding: 0 10px 3px;\
background: "+e.colors.tzpink+";\
-webkit-border-radius: 0 0 6px 6px;\
-moz-border-radius: 0 0 6px 6px;\
border-radius: 0 0 6px 6px;\
}\
."+base+"_b.search_ready #search_bar a.search_link:hover {\
color: "+e.colors.black+";\
}\
."+base+"_b.search_ready #search_bar a.search_link:active {\
color: "+e.colors.white+";\
}\
."+base+"_b.search_ready #search_bar a:last-of-type {\
margin-right: 0;\
}\
."+base+"_b.search_ready #search_bar a img {\
position: relative;\
top: 2px;\
}\
/*."+base+"_b.no_ads div.trackers, ."+base+"_b.no_ads div.feedback {\
margin-right: 0 !important;\
}\
."+base+"_b.no_ads div.note {\
margin-right: 40px !important;\
}*/\
#copy_tr_textarea {\
z-index: 11;\
position: absolute;\
top:0;\
left:0;\
display: none;\
padding: 10px;\
-webkit-border-radius:0 3px 3px 3px;\
   -moz-border-radius:0 3px 3px 3px;\
        border-radius:0 3px 3px 3px;\
-webkit-box-shadow: 0 5px 15px "+e.colors.tzblue+";\
-moz-box-shadow: 0 5px 15px "+e.colors.tzblue+";\
box-shadow: 0 5px 15px "+e.colors.tzblue+";\
background:"+e.colors.white+";\
background:rgba(255,255,255,0.8);\
}\
#copy_tr_textarea textarea {\
width: 380px;\
height: 224px;\
}\
#copy_tr_textarea textarea {\
border:0;\
white-space: nowrap;\
overflow: auto;\
padding: 0;\
color: "+e.colors.darkgray+";\
background-color: "+e.colors.white+";\
font: 13px/1.2 'Ubuntu Mono', Menlo, Monaco, Consolas, Inconsolata, 'Courier New', Courier, monospace;\
}\
\
\
/*   SETTINGS   */ \
\
\
."+base+"_b.no_ads .SPECIFICELEMENT, ."+base+"_b.no_ads .dontblockmebro, ."+base+"_b .removed_ad {\
display: none !important;\
}\
."+base+"_b div.top {\
position:relative;\
z-index:5;\
background-image: url('//"+TZO.docDomain+"/img/cbl.gif'), url('//"+TZO.docDomain+"/img/cbr.gif');\
background-repeat: no-repeat, no-repeat;\
background-position: left bottom, right bottom;\
background-color: "+e.colors.tzblue+"; position:relative;\
}\
."+base+"_b div.top > ul {\
background:transparent !important;\
}\
."+base+"_b div.top.expand { height:328px; }\
."+base+"_b div.top.expand > ul > li."+base+"_settings {\
display:block !important;\
visibility:visible !important;\
}\
."+base+"_b div.top.expand > ul > li {\
visibility:hidden;\
}\
."+base+"_b div.top.expand > ul > li."+base+"_settings a {\
border-bottom:8px solid "+e.colors.white+";\
border-right:1px solid "+e.colors.white+";\
background-color:#90B2D5 !important;\
-webkit-border-radius:0 0 5px 5px;\
   -moz-border-radius:0 0 5px 5px;\
        border-radius:0 0 5px 5px;\
}\
."+base+"_b div.top div.settings_wrap { display:none; }\
."+base+"_b div.top.expand div.settings_wrap {\
display:none;\
height:255px;\
width:100%;\
bottom:0px;\
position:absolute;\
z-index:5;\
font-family:Arial;\
line-height:normal;\
font-size:15px;\
color:"+e.colors.white+";\
font-weight:bold;\
}\
."+base+"_b div.top.expand div.settings_wrap {\
display:block;\
}\
."+base+"_b div.top div.settings_wrap textarea {\
color:"+e.colors.darkgray+";\
white-space: nowrap;\
overflow: auto;\
background-color:"+e.colors.white+";\
font:13px/1.2 'Ubuntu Mono', Menlo, Monaco, Consolas, Inconsolata, 'Courier New', Courier, monospace;\
}\
."+base+"_b div.top div.settings_wrap textarea:focus {\
color: "+e.colors.black+";\
}\
."+base+"_b div.top div.settings_wrap textarea,\
."+base+"_b div.top div.settings_wrap #other_settings {\
display:block;\
position:absolute;\
bottom:20px;\
width:351px;\
min-width:351px;\
max-width:351px;\
overflow:visible;\
}\
."+base+"_b div.top div.settings_wrap #other_settings {\
width:180px;\
min-width:180px;\
max-width:180px;\
}\
."+base+"_b #default_trackers_textarea {\
left:20px;\
}\
."+base+"_b #default_searchengines_textarea {\
left:405px;\
}\
."+base+"_b #default_searchengines_textarea,\
."+base+"_b #default_trackers_textarea {\
height:178px;\
min-height:178px;\
max-height:178px;\
border:7px solid "+e.colors.white+";\
-webkit-border-radius: 3px;\
   -moz-border-radius: 3px;\
        border-radius: 3px;\
}\
."+base+"_b #default_searchengines_textarea:focus,\
."+base+"_b #default_trackers_textarea:focus {\
  outline:none;\
}\
."+base+"_b #other_settings {\
right: 22px;\
height: 235px;\
min-height: 235px;\
max-height: 235px;\
text-align: center;\
}\
."+base+"_b #other_settings p {\
margin-bottom: 5px;\
text-align: center;\
height: 18px;\
min-height: 18px;\
max-height: 18px;\
text-shadow:1px 1px 0 #0C2C4C;\
}\
."+base+"_b #other_settings p.inputs {\
margin: 0 12px 22px 12px;\
position: relative;\
line-height: 12px;\
font-size: 12px;\
height: 12px;\
min-height: 12px;\
max-height: 12px;\
}\
."+base+"_b #other_settings p._title {\
margin-bottom: 20px;\
}\
."+base+"_b #other_settings p span.lp, ."+base+"_b #other_settings p span.rp {\
display: block;\
position: absolute;\
top: 0;\
}\
."+base+"_b #other_settings p span.lp {\
left: 0;\
}\
."+base+"_b #other_settings p span.rp {\
right: 0\
}\
."+base+"_b #other_settings p span.lp label {\
padding-left: 4px;\
color: "+e.colors.darkgray+";\
}\
."+base+"_b #other_settings p span.rp label {\
padding-right: 4px;\
color: "+e.colors.darkgray+";\
}\
."+base+"_b #other_settings p span label {\
position: relative;\
top: 1px;\
}\
."+base+"_b #other_settings p span.rp input {\
float: right;\
}\
."+base+"_b #other_settings p span.lp input {\
float: left;\
}\
."+base+"_b #other_settings span.lp input:checked + label {\
color: "+e.colors.lightgray+" !important;\
right: -1px;\
}\
."+base+"_b #other_settings span.rp input:checked + label {\
color: "+e.colors.lightgray+" !important;\
left: -1px;\
}\
#trackers_title, #searchengines_title {\
top: 0px;\
position: absolute;\
display: block;\
width: 365px;\
}\
#trackers_title {\
left: 20px;\
}\
#searchengines_title {\
left: 405px;\
}\
."+base+"_b div.top #settings_reset {\
position: absolute;\
display: block;\
right: 7px;\
top: -62px;\
width: 100%;\
text-align: right;\
text-decoration: none;\
color: "+e.colors.lightgray+";\
font-size: 12px;\
}\
."+base+"_b div.top #settings_reset span {\
border-bottom: 1px dotted "+e.colors.milkwhite+";\
}\
."+base+"_b div.top button#settings_submit, \
."+base+"_b div.top button#settings_submit {\
cursor:pointer;\
}\
."+base+"_b div.top button#settings_submit {\
bottom: 2px;\
left: 0px;\
position: absolute;\
display: block;\
width: 180px;\
height: 21px;\
font-size: 12px;\
color: "+e.colors.darkgray+";\
padding: 1px 0px 2px;\
background: "+e.colors.lightgray+";\
-webkit-border-radius: 5px;\
   -moz-border-radius: 5px;\
        border-radius: 5px;\
border: 2px solid #ffffff;\
-webkit-box-shadow: 0px 3px 0 #0C2C4C, inset 0px 0px 1px #369;\
   -moz-box-shadow: 0px 3px 0 #0C2C4C, inset 0px 0px 1px #369;\
        box-shadow: 0px 3px 0 #0C2C4C, inset 0px 0px 1px #369;\
text-shadow: 0px -1px 0px rgba(0,0,0,0.2), 0px 1px 0px rgba(255,255,255,0.3);\
}\
."+base+"_b div.top.expand button#settings_submit:focus {\
bottom: 1px;\
}\
."+base+"_b div.top.expand button#settings_submit:active {\
background: #999;\
bottom: 0px;\
-webkit-box-shadow: none;\
   -moz-box-shadow: none;\
        box-shadow: none;\
}\
."+base+"_b .top label {\
text-shadow:none;\
}\
.top ._title, .top input:checked + label,\
#trackers_title, #searchengines_title {\
text-shadow: 1px 1px 0 #0C2C4C;\
}\
/*input, button, select, option, form.search * {\
font-family:inherit;\
}*/\
              ";
            },
            searchCss        : function() {
              var e    = this,
                  base = e.scriptName
              ;
              return "\
body."+base+"_b div.results > dl:not(.dmca):hover > dt > a {\
  color: #F51;\
  text-decoration: underline;\
}\
body."+base+"_b div.results > dl:not(.dmca):hover {\
  cursor: pointer;\
  background-color: white;\
  position: relative;\
  z-index: 999999999;\
  -webkit-box-shadow: -4px 0 3px rgba(0,0,0,0.1), 0 -4px 20px white, \
4px 0 3px rgba(0,0,0,0.1), 0 4px 15px white;\
  -moz-box-shadow: -4px 0 3px rgba(0,0,0,0.1), 0 -4px 20px white, \
4px 0 3px rgba(0,0,0,0.1), 0 4px 15px white;\
  box-shadow: -4px 0 3px rgba(0,0,0,0.1), 0 -4px 20px white, \
4px 0 3px rgba(0,0,0,0.1), 0 4px 15px white;\
  -moz-border-radius: 2px;\
  -webkit-border-radius: 2px;\
  -ms-border-radius: 2px;\
  border-radius: 2px;\
}\
body."+base+"_b div.results > dl span.magnet {\
  width: 24px;\
  height: 24px;\
  position: relative;\
  top: -7px;\
  left: -15px;\
  overflow: visible;\
  position: relative;\
  text-align: center;\
}\
body."+base+"_b div.results > dl span.magnet a {\
  display:block;\
  position:absolute;\
  top:0; bottom:0;\
  left:0; right:0;\
  color: rgb(255,255,255);\
  color: rgba(255,255,255,0);\
  -webkit-transition: all 0.15s linear;\
  -moz-transition: all 0.15s linear;\
  transition: all 0.15s linear;\
  background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAACYVBMVEUAAAAAA\
ABMizxMizwAAAAAAAAdNRcAAAAAAAAAAAAAAAADBgMAAAAHDAVMizxMizwrTyIqTSFNjTtOjTtDejRNjTtCeTNNjTtNjTtCeTNBd\
zJOjjtNjTpPjzpPjzpKhjZKhjZMizpUkUNWk0R4rl5SkEByqFh2rVtMizpNjTxSkEJxp1mLvG2Nu26RwHKUxHRUkUNWkkRZlEdZl\
UdalUhalkhnmFdvplhxqFlypWFzwiVzxiF0pmN0qlx1ySJ2yCN3rV94p2h5qWl6qWt6xS57xjB7yS98xTN8yyx9xzWAyTmAzTSBz\
jSBzjaDyT6DzjiEzzqFzUCGzECHykWIzEOIzUSM0keNv26Nz0yOzU+OzlGP0k2QwXCQw3CR0FOR1E6S1VCTxHKT1FOT1VKT1VOU1\
VOU1VaV01mZ1Vua2F2bvJGc2GGd2WKfrpmfwpWf2WWgv5ig2meiwJmi22uk222l3G6m2Hanw5+n0Iin0Yeo1Iap1Yep2HqqxaKq2\
3qs14ms3nqt2Iut23+u1Y2u1o6u332v33+v34Cv4ICwtayw4IG0z6214om24oq65JG75JG83Z6835284Ju93p++36C+456+5pe/3\
6HA4Z/A5J/A5KDB46HB5KHC5KLD56DE46fE5aLE5qTF5KjF5qXF6KHG6aTH6aXJ6arR6rfR7bXT67vU7rrY4dTY78DZ8MLa49fa7\
cba8MXc8sjd5drf8szi89Lj9NLk9NPl9dbr99/t7ert7evt+OPu7uzu7u3v7+3v7+7v8O3v+eXv+ebw8O7w8O/x8e/x+en1++/3/\
PL///+5JOgQAAAAMHRSTlMAAgMEBgcICg0QFhYZIiotOkh9f4CAjo6QmKDLzc3O0NX19fX19vb29/f3+P39/v6zdD/wAAABQElEQ\
VQoz2NgoCroRAMIiVMoAFli1+69e/fu37//ABCgSOwGCR84cAQEUCTA4kfWZNkYGljm5SJL7Nt/4GC5aWz9wsWNicbCTAgJoLijw\
8y2nMzs4q65KtLMMAmgObW2S1LjGw4d7y/MmacuCpc4st5kakJYzrpTp3Z05GfMVuaHShw4UhDT6ptcsv3UqT29pUl1+hIwiaNO1\
SkBy3q2nTq1c9rqtPQWOajEkaMmc/z7Tp3ceerU4ROnlocs0kRIzPJfCguTFX7zERLOVakeKyHiG4Mim2VhEseKwtvtfNaCxLeEu\
pbpicN1bDaaFG3vvenUqa2BLsGTlfgQwd5tsSDC2m3VBi+r4BlqQsgRZWY+sSnO0z2qZoK2DBtSNLJzi6jqVE6ZXqGrJcbLxYokw\
8IpICmvqKEgJcjDwYgnIQAAHQu+galt2X0AAAAASUVORK5CYII=) 50% 50% no-repeat;\
  background-size:18px 18px;\
}\
body."+base+"_b div.results > dl span.magnet a:hover {\
  background-size:24px 24px;\
}\
body."+base+"_b div.results > dl span.magnet a:active {\
  background-size:14px 14px;\
}\
body."+base+"_b h2 a.approximate_rss_link img {\
  opacity:0.5;\
}\
body."+base+"_b h2 a.approximate_rss_link:hover img {\
  opacity:1;\
}\
body."+base+"_b div.results > dl.dmca {\
  background-color: #EDF2F8;\
}\
body."+base+"_b div.results dl span.v[style*='background-color:#fff'], body."+base+"_b div.results dl span.v:empty {\
  visibility: hidden;\
}\
div.results > dl.pink {\
background-color: #FFDCEF;\
}\
div.results > dl.tv {\
background-color: #F4DED5;\
}\
div.results > dl.movie {\
background-color: #FCD1C0;\
}\
div.results > dl.game {\
background-color: #F2C3A1; /*EDBF9E*/\
}\
div.results > dl.book {\
background-color: #CCDBEB;\
}\
div.results > dl.music {\
background-color: #D3E8C2;\
}\
div.results > dl.app {\
background-color: #EDEDF0;\
}\
div.results > dl.picture {\
background-color: #E0C4DA;\
}\
div.results > dl.misc {\
background-color: #DDBFDD;\
}\
div.results > dl.anime {\
background-color: #F4DE7A;\
}\
              ";
            },
            addStyle         : function(css) {
              $j("head").append("<style type='text/css'>\n" + css + "\n</style>");
            },
            makeBool         : function(e) {
              return (/^true$/i).test(e);
            },
            removeDocOnclick : function() {
              if ( document.onclick !== null ) document.onclick = null;
            },
            currentSettings  : function(){
              return {
                versionCheck    : $j.jStorage.get(this.scriptName+"_versionCheck"),
                removeAds       : $j.jStorage.get(this.scriptName+"_removeAds"),
                searchHighlight : $j.jStorage.get(this.scriptName+"_searchHighlight"),
                linkComments    : $j.jStorage.get(this.scriptName+"_linkComments"),
                defaultTrackers : $j.jStorage.get(this.scriptName+"_defaultTrackers"),
                searchEngines   : $j.jStorage.get(this.scriptName+"_searchEngines")
              };
            },
            finalTrackerSorting : function(_arr){
              var sortArr = function(a,b) {
                a = a.toLowerCase().replace(/^(htt|ud)p:\/\//,"").replace(/\/$/,"");
                b = b.toLowerCase().replace(/^(htt|ud)p:\/\//,"").replace(/\/$/,"");
                a = a.match(/^\d+\.\d+\.\d+\.\d+/) ? a.replace(/^(\d+)\./,"$1")
                  : !a.match(/^[a-z0-9-]+\.[a-z0-9-]+\./) ? a
                  : a.match(/^[a-z0-9-]+\.[a-z0-9-]+\./) ? a.replace(/[a-z0-9-]+\.([a-z0-9-]+\.)/,"$1")
                  : a;
                b = b.match(/^\d+\.\d+\.\d+\.\d+/) ? b.replace(/^(\d+)\./,"$1")
                  : !b.match(/^[a-z0-9-]+\.[a-z0-9-]+\./) ? b
                  : b.match(/^[a-z0-9-]+\.[a-z0-9-]+\./) ? b.replace(/[a-z0-9-]+\.([a-z0-9-]+\.)/,"$1")
                  : b;
                if ( a == b ) { return 0; }
                if ( a > b )  { return 1; } else { return -1; }
              }, newArr = [];
              _arr.sort(sortArr);
              for (var index = 0; index < _arr.length; index++) {
                var prev = index >= 1 ? _arr[(index-1)] : "",
                    udpPopped
                ;
                if ( prev.replace(/^udp/,"") == _arr[index].replace(/^https?/,"") ) {
                  udpPopped = newArr.pop();
                  newArr.push(_arr[index]);
                  newArr.push(udpPopped);
                } else {
                  newArr.push(_arr[index]);
                }
              }
              return newArr;
            },
            mergeTrackers    : function(stored, specific, format) {
              var mergedArray;
              if ( _.isArray(stored) && _.isArray(specific) ) {
                stored = _.compact(stored);
                specific = _.compact(specific);
                mergedArray = _.union(stored, specific);
                mergedArray = this.finalTrackerSorting(mergedArray);
                if ( format && format === "array") {
                  return mergedArray;
                } else if ( format && format === "string") {
                  return mergedArray.join("\n\n");
                }
              } else {
                throw "mergeTrackers got something else than an array";
              }
            },
            newlineDelimiter    : function(s){
              var localArr  = s.replace(/^\n+/,"").replace(/\n+$/,"").split(/\n+/),
                  newString = ""
              ;
              for (var index = 0; index < localArr.length; index++) {
                var next = (index+1) < localArr.length ? localArr[(index+1)] : "";
                if ( next.replace(/^udp/,"") == localArr[index].replace(/^https?/,"") ) {
                  newString += localArr[index] + "\n";
                } else {
                  newString += localArr[index] + "\n\n";
                }
              }
              newString = newString.replace(/\n+$/,"");
              return newString;
            },
            copyTextarea        : [],
            torrentTitles       : {
              raw     : "",
              encoded : ""
            },
            topDiv              : null,
            trackerObject       : {}
          // end TZO object
          };
          storedSettings = TZO.currentSettings();
          
          // Set default settings localStorage for the 1st run
          if ( storedSettings.versionCheck === null
            && storedSettings.removeAds === null
            && storedSettings.searchHighlight === null
            && storedSettings.linkComments === null
            && storedSettings.defaultTrackers === null
            && storedSettings.searchEngines === null ) {
            $j.jStorage.set(TZO.scriptName+"_versionCheck",TZO.scriptVersion);
            $j.jStorage.set(TZO.scriptName+"_removeAds",true);
            $j.jStorage.set(TZO.scriptName+"_searchHighlight",true);
            $j.jStorage.set(TZO.scriptName+"_linkComments", true);
            $j.jStorage.set(TZO.scriptName+"_defaultTrackers",TZO.defTrackerList);
            $j.jStorage.set(TZO.scriptName+"_searchEngines",TZO.searchEnginesArr);
            storedSettings = TZO.currentSettings();
          } else if ( $j.jStorage.get(TZO.scriptName+"_versionCheck") === null ) {
            // new version flush to circumvent errors (mean and lazy)
            alert("This version upgrade requires all stored data you have to be deleted, \
sorry about that. The page will refresh and new values set. Won't happen again :)");
            $j.jStorage.flush() && _window.location.reload();
          }
          
          TZO.trackerObject.userArray = storedSettings.defaultTrackers;
          TZO.trackerObject.userString = TZO.mergeTrackers( TZO.trackerObject.userArray, [], "string");
          
          TZO.bodyEl.addClass(TZO.scriptName + "_b");
          TZO.addStyle( TZO.css() );
          // Settings applies to all pages
          (function(){
            var settingsEl,
                settingsSubmitEl,
                resetEl,
                settingsVisible = false
            ;
            TZO.topDiv = $j("div.top:eq(0)");
            // Remove ads here since we have this function on every page
            if ( storedSettings.removeAds ) {
              TZO.removeDocOnclick();
              TZO.bodyEl.addClass("no_ads");
              $j("object, embed, iframe").addClass("removed_ad");
              $j("p.generic").has("iframe").addClass("removed_ad");
            }
            TZO.topDiv.find(" > ul").prepend("<li class='"+TZO.scriptName+"_settings'><a href='#' title='Change TzAio Settings'>TzAio</a>");
            settingsEl = TZO.topDiv.find(" > ul > li."+TZO.scriptName+"_settings a");
            TZO.topDiv.append("<div class='settings_wrap'><span id='trackers_title'>\
Default trackerlist (these are added to all torrents\' trackers, if absent)</span>\
<span id='searchengines_title'>Search engines list (title|url formatting, use %s to indicate keyword, and \"_\" to indicate a space)</span>\
<textarea title='Note that these are combined with the torrents own trackers, and after that duplicates are removed, \
they get sorted by domain, and finally grouped with any backup udp protocols.' id='default_trackers_textarea' wrap='off'>"
+ TZO.newlineDelimiter( TZO.mergeTrackers( [], storedSettings.defaultTrackers, "string" ) ) + "</textarea>\
<textarea id='default_searchengines_textarea' wrap='off' title='How to use: On the torrent page, select some text in the title \
with the name of the torrent, and the links listed here will appear as links underneith.'>" + storedSettings.searchEngines.join("\n") + "</textarea>\
<div id='other_settings'><a href='#' id='settings_reset'><span>Reset?</span></a>\
<p class='_title'>Main settings</p>\
\
<p>Hide Torrentz's Ads</p>\
<p class='inputs'><span class='lp'><input type='radio' name='removeAds' value='true' checked='checked' id='removeAds_true' />\
<label for='removeAds_true'>Yes</label></span><span class='rp'><input type='radio' name='removeAds' value='false' id='removeAds_false' />\
<label for='removeAds_false'>No</label></span></p>\
\
<p>Highlight search results</p>\
<p class='inputs'><span class='lp'><input type='radio' name='searchHighlight' value='true' checked='checked' id='searchHighlight_true' />\
<label for='searchHighlight_true'>Yes</label></span><span class='rp'><input type='radio' name='searchHighlight' value='false' \
id='searchHighlight_false' /><label for='searchHighlight_false'>No</label></span></p>\
\
<p>Fix comment links</p>\
<p class='inputs'><span class='lp'><input type='radio' name='linkComments' value='true' checked='checked' id='linkComments_true'>\
<label for='linkComments_true'>Yes</label></span><span class='rp'><input type='radio' name='linkComments' value='false' id='linkComments_false'>\
<label for='linkComments_false'>No</label></span></p>\
\
<button id='settings_submit'>SAVE &amp; REFRESH</button>\
</div></div>");
            if ( !storedSettings.removeAds ) $j("#removeAds_false").attr("checked", true);
            if ( !storedSettings.searchHighlight ) $j("#searchHighlight_false").attr("checked", true);
            if ( !storedSettings.linkComments ) $j("#linkComments_false").attr("checked", true);
            settingsSubmitEl = $j("#settings_submit");
            resetEl = $j("#settings_reset");
            
            settingsEl.click(function(){
              if ( TZO.topDiv.hasClass("expand") && settingsVisible ) {
                TZO.topDiv.removeClass("expand");
                settingsVisible = false;
              } else if ( !TZO.topDiv.hasClass("expand") && !settingsVisible ) {
                TZO.topDiv.addClass("expand");
                settingsVisible = true;
              }
              TZO.copyTextarea.length && TZO.copyTextarea.stop().hide(0);
              return false;
            });
            settingsSubmitEl.bind("click", function(){
              var saveTrackers,
                  saveSearchEngines
              ;
              TZO.topDiv.find("input:checked").each(function(){
                var el           = $j(this),
                    settingName  = el.attr("name"),
                    settingValue = TZO.makeBool(el.val())
                ;
                $j.jStorage.set(TZO.scriptName + "_" + settingName, settingValue);
              });
              saveTrackers = $j("#default_trackers_textarea").val().split(/\s+/);
              saveSearchEngines = $j("#default_searchengines_textarea").val().split(/\s+/);
              saveSearchEngines = _.compact(saveSearchEngines);
              $j.jStorage.set( TZO.scriptName+"_defaultTrackers",  saveTrackers);
              $j.jStorage.set( TZO.scriptName+"_searchEngines", saveSearchEngines);
              setTimeout(function(){
                _window.location.reload();
              }, 100);
            });
            
            resetEl.bind("click",function(){
              var refresh_page_reset = confirm("Reset settings and reload the page?");
              if ( refresh_page_reset ) $j.jStorage.flush() && _window.location.reload();
              return false;
            });
          // End settings panel
          })();
          
          // Page specific select (always remove ads first)
          if ( /^\w{40}$/i.test(TZO.torrHash) ) {
            var downloadDiv = $j(".download:eq(0)");
            // Remove specific ads
            if ( storedSettings.removeAds ) {
              (function(){
                var topInfoDiv = TZO.bodyEl.find(" > div.info"),
                    firstDl    = downloadDiv.find(" > dl:eq(0)"),
                    pImgAd     = topInfoDiv.prev().has("a img")
                ;
                if ( topInfoDiv.text().match(/btguard/i) ) topInfoDiv.addClass("removed_ad");
                if ( firstDl.text().match(/(direct\s+download|sponsored\s+link)/i) ) firstDl.addClass("removed_ad");
                if ( pImgAd.length ) pImgAd.addClass("removed_ad");
              })();
            }
            // Linkify comment links
            if ( storedSettings.linkComments ) {
              (function(){
                var commentEl = $j(".comment");
                setTimeout(function(){
                  // Linkify visible comments
                  if ( commentEl.length ) {
                    var regPatt      = /((http|https)\:\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!\:.?+=&%@!\-\/]))?)?/gi,
                        linkComments = commentEl.find(".com:visible:contains('http')")
                    ;
                    linkComments.each(function(){
                      var thisLink = $j(this);
                      thisLink.replaceText(regPatt, "<a href='" + TZO.cloakerUrl + "$1'>$1</a>" );
                    });
                  }
                }, 750);
              })();
            }
            // info bar
            (function(){
              // create all-in-one bar
              var currTrackerList= [],
                  trackersDiv    = $j("div.trackers:eq(0)"),
                  trackerLinks   = trackersDiv.find("dt a"),
                  trackerDataEls = trackersDiv.find("dl:has(a) dd"),
                  trackerLen,
                  torrTitle      = $j("h2:eq(0) span").text(),
                  mg_trackerList = "",
                  magnetLinkHtml = "",
                  announceUrl    = trackersDiv.find(" > p > a[href*='announcelist_']").attr("href"),
                  finalHtml      = "",
                  upElems        = trackerDataEls.find(".u"),
                  downElems      = trackerDataEls.find(".d"),
                  dhtEls         = trackersDiv.find("dl:eq(0):contains('(DHT)') span.u, dl:eq(0):contains('(DHT)') span.d"),
                  _up            = [],
                  _down          = [],
                  upNum          = 0,
                  downNum        = 0,
                  topUpNum       = 0,
                  topDownNum     = 0,
                  seedMeter      = 0,
                  seedTleach,
                  seedColor      = TZO.colors.black,
                  seedText,
                  minPeersText,
                  seedTitle      = "S<span class='divided'>&frasl;</span>L &asymp;",
                  filesDiv       = $j("div.files"),
                  fileLinks      = $j("a", filesDiv),
                  filesInfoText,
                  wmvWarning     = false,
                  notActive      = !!(downloadDiv.next(".error").text().match(/active\s+locations?/i)),
                  verDownload    = $j(".votebox .status").text().match(/\d+/),
                  verDownloadCl  = (verDownload && +verDownload[0] >= 3) && !notActive ? " verified_download" : notActive ? " not_active" : "",
                  warn_blink_timer,
                  filesSizeText  = $j("div:contains('Size:'):eq(0)", filesDiv).text().replace("Size: ",""),
                  commentDiv     = $j("div.comments"),
                  formFieldset   = $j("form.profile fieldset"),
                  commentCount   = $j(".comment", commentDiv).length,
                  htmlDivider    = " <span class='"+TZO.scriptName+"_sep'>&#124;</span> ",
                  trackersText,
                  commentText,
                  trackerNumText,
                  clippyText,
                  minPeers = 0,
                  formatNumbers  = function(i){
                    if ( i >= 1000 ) {
                      i = ""+i+"";
                      return (i.replace(/(\d+)(\d{3})$/,"$1,$2"));
                    } else {
                      return i;
                    }
                  }
              ;
              TZO.torrentTitles.raw = torrTitle;
              TZO.torrentTitles.encoded = encodeURIComponent( torrTitle.replace("'","") );
              trackerLinks.each(function() {
                // Will produce an empty array if there are no trackers on site
                currTrackerList.push( $j(this).text() );
              });
              TZO.trackerObject.siteArray = currTrackerList;
              TZO.trackerObject.siteString = TZO.mergeTrackers( [], TZO.trackerObject.siteArray, "string" );
              TZO.trackerObject.allArray = TZO.mergeTrackers( TZO.trackerObject.userArray, TZO.trackerObject.siteArray, "array" );
              TZO.trackerObject.allString = TZO.mergeTrackers( TZO.trackerObject.allArray, [], "string" );
              TZO.trackerObject.allMagnet = "magnet:?xt=urn:btih:" + TZO.torrHash + "&amp;dn="
              + TZO.torrentTitles.encoded + "&amp;tr=" + TZO.trackerObject.allString.replace(/\n+/g,"&amp;tr=");
              trackerLen = TZO.trackerObject.allArray.length;
              trackersText = trackerLen > 1 ? "trackers" : "tracker";
              // final magnetlink uri
              magnetLinkHtml = "<a class='"+TZO.scriptName+"_mlink' href='"
              + TZO.trackerObject.allMagnet 
              + "' title='Fully qualified magnet URI for newer BitTorrent clients, includes"
              + " all " + trackerLen + " " + trackersText + "'>Magnet Link</a>";
              // create seed leach ratio
              upElems.each(function(index) {
                _up[index]   = +$j(this).text().replace(/\D/g,"");
              });
              downElems.each(function(index) {
                _down[index] = +$j(this).text().replace(/\D/g,"");
              });
              for (var i = 0; i < _up.length; i++) {
                upNum += _up[i];
                if (i === 0) {
                  topUpNum = _up[i];
                } else if ( _up[i] > topUpNum ) {
                  topUpNum = _up[i];
                }
              }
              for (var i = 0; i < _down.length; i++) {
                downNum += _down[i];
                if (i === 0) {
                  topDownNum = _down[i];
                } else if ( _down[i] > topDownNum ) {
                  topDownNum = _down[i];
                }
              }
              // DHT activity
              minPeers = (topDownNum >= topUpNum) ? topDownNum : topUpNum;
              dhtEls.each(function(){
                var i = +$j(this).text().replace(/\D/g,"");
                if ( i > minPeers ) minPeers = i;
              });
              seedTleach = (upNum/downNum);
              seedTleach = ((topUpNum/topDownNum )+(seedTleach))/2;
              if (seedTleach === Infinity) {
                seedMeter = (upNum/_up.length).toFixed(2); // 8 divided by 0
              } else if (isNaN(seedTleach)) {
                seedMeter = 0; // 0 divided by 0
              } else if (seedTleach < 10) {
                seedMeter = seedTleach.toFixed(2);
              } else if (seedTleach >= 10 && seedTleach < 100) {
                seedMeter = seedTleach.toFixed(1);
              } else if (seedTleach >= 100) {
                seedMeter = Math.round(seedTleach);
              }
              if (seedMeter >= 2 && topUpNum >= 5 ) {
                seedColor = TZO.colors.green;
              }
              seedText = seedTitle + " <span style='color:" + seedColor + "'>" + seedMeter + "</span>";
              minPeersText = " <span>" + formatNumbers(minPeers) + "+ peers</span>";
              clippyText = "<a href='#' id='copylist' title='Click to copy the trackerlist'>Copy "
                          +TZO.trackerObject.allArray.length + " trackers</a>";
              if (commentCount) {
                commentText = "<a href='#comments_"+TZO.scriptName+"'>";
                commentDiv.attr("id","comments_"+TZO.scriptName);
              } else {
                commentText = "<a href='#write_comment_"+TZO.scriptName+"'>";
                formFieldset.attr("id","write_comment_"+TZO.scriptName);
              }
              commentText += "<img src='//"+TZO.docDomain+"/img/comment.png'/> " + commentCount+"</a>";
              fileLinks.filter("[href*='.wmv']").each(function(){
                if ( /\.wmv$/i.test($j(this).text()) ) {
                  wmvWarning = true;
                }
              });
              if (fileLinks.length) {
                $j("div.files:eq(0)").attr("id","files_"+TZO.scriptName);
                filesInfoText = "<a href='#files_"+TZO.scriptName+"'><img src='//"+TZO.docDomain+"/img/folder.png'/> " + fileLinks.length + "</a> &frasl; ";
              } else if (!fileLinks.length) {
                filesInfoText = "";
              }
              filesInfoText += filesSizeText.length ? filesSizeText : "";
              if ( filesInfoText.length && wmvWarning ) {
                filesInfoText += " <span class='warn'>.wmv</span>";
              }
              finalHtml += magnetLinkHtml;
              finalHtml += htmlDivider + clippyText;
              finalHtml += htmlDivider + minPeersText;
              finalHtml += htmlDivider + seedText;
              finalHtml += htmlDivider + commentText;
              finalHtml += filesInfoText.length ? htmlDivider + filesInfoText : "";
              finalHtml += " <a href='"+TZO.scriptHomepage+"' id='"+TZO.scriptName+"_logo'";
              finalHtml += " title='"+TZO.scriptVersion+"'>Tz Aio";
              finalHtml += "<span id='"+TZO.scriptName+"_message'>";
              finalHtml += "Visit Torrentz All-in-One Website ("+TZO.scriptVersion+")";
              finalHtml += "</span></a>";
              downloadDiv.before("<div id='" + TZO.scriptName + "' class='info" + verDownloadCl + "'>" + finalHtml + "</div>");
              // edit torrentz own magnet link if avaliable
              downloadDiv.find("a[href^='magnet']").each(function(){
                $(this).attr("href", TZO.trackerObject.allMagnet
                                     .replace(/\&amp\;/ig,"&")
                                     .replace(/\&gt\;/ig,">")
                                     .replace(/\&lt\;/ig,"<")
                );
              });
              warn_blink_timer = setTimeout(function(){
                $j("#"+TZO.scriptName).find(".warn")
                .fadeOut(500).delay(550).fadeIn(500)
                .delay(550).fadeOut(500).delay(550).fadeIn(500)
                .delay(550).fadeOut(500).delay(550).fadeIn(500);
              }, 2000);
              // end info bar
              
              // Setup copy methods
              (function(){
                // flash method sux and has been abandoned
                var copylistEl   = $j("#copylist"),
                    copylistText = TZO.newlineDelimiter( TZO.trackerObject.allString ),
                    linkHeight   = copylistEl.outerHeight(),
                    theTextarea,
                    textareaHTML = "<div id='copy_tr_textarea'><textarea readonly='readonly' cols='40' rows='10' wrap='off'>"
                    + copylistText + "</textarea></div>"
                ;
                TZO.bodyEl.append(textareaHTML);
                TZO.copyTextarea = $j("#copy_tr_textarea");
                copylistEl.click(function(){
                  if ( TZO.copyTextarea.is(":hidden") ) {
                    TZO.copyTextarea.css({
                      top : (copylistEl.offset().top + linkHeight)+"px",
                      left : (copylistEl.offset().left)+"px"
                    }).show(0).find("textarea")[0].select();
                  } else {
                    TZO.copyTextarea.hide(0);
                  }
                  return false;
                });
              })();
              
            })();       
            
            // Download buttons
            (function(){
              // select the links we want to downloadify
              var torCacheUrl        = "http://torcache.net/torrent/" + TZO.torrHash.toUpperCase() + ".torrent?title=" + TZO.torrentTitles.encoded,
                  torRageUrl         = "http://torrage.com/torrent/" + TZO.torrHash.toUpperCase() + ".torrent",
                  torrSitesArr       = [
                    [ "movietorrents.eu",
                      function(theUrl){
                        // movietorrents.eu/torrents-details.php?id=1421
                        // movietorrents.eu/download.php?id=1421&name=Ubuntu%20iso%20file.torrent
                        // last checked 2012-07-25
                        return ( "http://movietorrents.eu/download.php?id=" + theUrl.match(/(\?|&)id=(\d+)/)[2]
                          + "&name=" + TZO.torrentTitles.encoded + ".torrent" );
                      }
                    ],
                    [ "publichd.eu",
                      function(theUrl){
                        // publichd.eu/index.php?page=torrent-details&id=bae62a9932ec69bc6687a6d399ccb9d89d00d455
                        // publichd.eu/download.php?id=bae62a9932ec69bc6687a6d399ccb9d89d00d455&f=ubuntu-10.10-dvd-i386.iso.torrent
                        // last checked 2012-07-23
                        return ( "http://publichd.eu/download.php?id=" + TZO.torrHash.toLowerCase() + "&f=" + TZO.torrentTitles.encoded + ".torrent" );
                      }
                    ],
                    [ "btmon.com",
                      function(theUrl){
                        // www.btmon.com/Applications/Unsorted/ubuntu-10.10-dvd-i386.iso.torrent.html
                        // www.btmon.com/Applications/Unsorted/ubuntu-10.10-dvd-i386.iso.torrent
                        // last checked 2012-05-13
                        return ( theUrl.replace(/\.html$/i, "") );
                      }
                    ],
                    [ "torrentdownloads.net",
                      function(theUrl){
                        // www.torrentdownloads.net/torrent/1652094016/ubuntu-10+10-desktop-i386+iso
                        // www.torrentdownloads.net/download/1652094016/ubuntu-10+10-desktop-i386+iso
                        // last checked 2012-05-13
                        return ( theUrl.replace(/(\.net\/)torrent(\/)/i,"$1download$2") );
                      }
                    ],
                    [ "kat.ph",
                      function(theUrl){
                        // www.kickasstorrents.com/ubuntu-10-10-dvd-i386-iso-t4657293.html
                        // torcache.net/torrent/BAE62A9932EC69BC6687A6D399CCB9D89D00D455.torrent?title=[kat.ph]ubuntu-10-10-dvd-i386
                        // last checked 2012-05-13
                        return ( torCacheUrl );
                      }
                    ],
                    [ "kickasstorrents.com",
                      function(theUrl){
                        // www.kickasstorrents.com/ubuntu-10-10-dvd-i386-iso-t4657293.html
                        // torcache.net/torrent/BAE62A9932EC69BC6687A6D399CCB9D89D00D455.torrent?title=[kat.ph]ubuntu-10-10-dvd-i386
                        // last checked 2012-05-13
                        return ( torCacheUrl );
                      }
                    ],
                    [ "h33t.com/tor",
                      function(theUrl){
                        // h33t.com/tor/999999/ubuntu-10.10-dvd-i386.iso-h33t
                        // h33t.com/download.php?id=bae62a9932ec69bc6687a6d399ccb9d89d00d455&f=Ubuntu%2010.10%20-%20DVD%20-%20i386.iso.torrent
                        // last checked 2012-05-13
                        return ( "http://h33t.com/download.php?id=" + TZO.torrHash.toLowerCase() + "&f="
                                +TZO.torrentTitles.encoded + "%5D%5Bh33t%5D.torrent" );
                      }
                    ],
                    [ "newtorrents.info/torrent",
                      function(theUrl){
                        // www.newtorrents.info/torrent/99999/Ubuntu-10-10-DVD-i386.html?nopop=1
                        // www.newtorrents.info/down.php?id=99999
                        // last checked 2012-05-13
                        var theUrlArr = theUrl.split("/");
                        return ( "http://" + theUrlArr[2] + "/down.php?id=" + theUrlArr[4] );
                      }
                    ],
                    [ "fenopy.eu/torrent",
                      function(theUrl){
                        // fenopy.com/torrent/ubuntu+10+10+dvd+i386+iso/NjMxNjcwMA
                        // fenopy.com/torrent/ubuntu+10+10+dvd+i386+iso/NjMxNjcwMA==/download.torrent
                        // seems to use torcache but this works too
                        // last checked 2012-05-13
                        return ( theUrl + "==/download.torrent" );
                      }
                    ],
                    [ "extratorrent.com/torrent",
                      function(theUrl){
                        // extratorrent.com/torrent/9999999/Ubuntu-10-10-DVD-i386.html
                        // extratorrent.com/download/9999999/Ubuntu-10-10-DVD-i386.torrent
                        // last checked 2012-05-13
                        return ( theUrl.replace(/(\.com\/torrent)/i, ".com/download").replace(/\.html$/i, ".torrent") );
                      }
                    ],
                    [ "bitsnoop.com",
                      function(theUrl){
                        // bitsnoop.com/ubuntu-10-10-dvd-i386-q17900716.html
                        // torrage.com/torrent/BAE62A9932EC69BC6687A6D399CCB9D89D00D455.torrent
                        // last checked 2012-05-13
                        return ( torRageUrl );
                      }
                    ],
                    [ "bt-chat.com",
                      function(theUrl){
                        // www.bt-chat.com/details.php?id=999999
                        // www.bt-chat.com/download.php?id=999999
                        // last checked 2012-05-13
                        // Site was malware flagged so I don't know if this still works
                        return ( theUrl.replace(/\/details\.php/i, "/download.php") );
                      }
                    ],
                    [ "1337x.org",
                      function(theUrl){
                        // 1337x.org/torrent/999999/ubuntu-10-10-dvd-i386/
                        // last checked 2012-05-13
                        return ( torCacheUrl );
                      }
                    ],
                    [ "torrentfunk.com/torrent/",
                      function(theUrl){
                        // www.torrentfunk.com/torrent/9999999/ubuntu-10-10-dvd-i386.html
                        // www.torrentfunk.com/tor/9999999.torrent
                        // last checked 2012-05-13
                        var theUrlArr = theUrl.split("/");
                        return ( "http://www.torrentfunk.com/tor/" + theUrlArr[4] + ".torrent" );
                      }
                    ],
                    [ "torrentstate.com",
                      function(theUrl){
                        // www.torrentstate.com/ubuntu-10-10-dvd-i386-iso-t4657293.html
                        // www.torrentstate.com/download/BAE62A9932EC69BC6687A6D399CCB9D89D00D455
                        // last checked 2012-05-13
                        // Site was down so I don't know if this still works
                        return ( "http://www.torrentstate.com/download/" + TZO.torrHash.toUpperCase() );
                      }
                    ],
                    [ "torlock.com/torrent/",
                      function(theUrl){
                        // www.torlock.com/torrent/1702956/21-jump-street-2012-r5-new-line-inspiral.html
                        // dl.torlock.com/1702956.torrent
                        // last checked 2012-05-13
                        var theUrlArr = theUrl.split("/");
                        return ( "http://dl.torlock.com/" + theUrlArr[4] + ".torrent" );
                      }
                    ],
                    [ "torrenthound.com/hash",
                      function(theUrl){
                        // www.torrenthound.com/hash/bae62a9932ec69bc6687a6d399ccb9d89d00d455/torrent-info/ubuntu-10.10-dvd-i386.iso
                        // www.torrenthound.com/torrent/bae62a9932ec69bc6687a6d399ccb9d89d00d455
                        // last checked 2012-05-13
                        return ( "http://www.torrenthound.com/torrent/" + TZO.torrHash );
                      }
                    ],
                    [ "vertor.com/torrents",
                      function(theUrl){
                        // www.vertor.com/torrents/2191958/Ubuntu-10-10-Maverick-Meerkat-%28Desktop-Intel-x86%29
                        // www.vertor.com/index.php?mod=download&id=2191958
                        // last checked 2012-05-13
                        var theUrlArr = theUrl.split("/");
                        return ( "http://www.vertor.com/index.php?mod=download&id=" + theUrlArr[4] );
                      }
                    ],
                    [ "yourbittorrent.com/torrent/",
                      function(theUrl){
                        // www.yourbittorrent.com/torrent/212911/ubuntu-10-10-desktop-i386-iso.html
                        // www.yourbittorrent.com/down/212911.torrent
                        // last checked 2012-05-13
                        var theUrlArr = theUrl.split("/");
                        return ( "http://yourbittorrent.com/down/" + theUrlArr[4] + ".torrent" );
                      }
                    ],
                    [ "torrents.net/torrent",
                      function(theUrl){
                        // www.torrents.net/torrent/9999999/Ubuntu-10-10-DVD-i386.html/
                        // www.torrents.net/down/9999999.torrent
                        // last checked 2012-05-13
                        var theUrlArr = theUrl.split("/");
                        return ( "http://www.torrents.net/down/" + theUrlArr[4] + ".torrent" );
                      }
                    ],
                    [ "torrentbit.net/torrent",
                      function(theUrl){                  
                        // www.torrentbit.net/torrent/1903618/Ubuntu11.04%20Desktop%20i386%20ISO/
                        // www.torrentbit.net/get/1903618
                        // last checked 2012-05-13
                        var theUrlArr = theUrl.split("/");
                        return ( "http://www.torrentbit.net/get/" + theUrlArr[4] );
                      }
                    ],
                    [ "coda.fm/albums",
                      function(theUrl){                  
                        // coda.fm/albums/9999
                        // coda.fm/albums/9999/torrent/download?file=Title+of+torrent.torrent
                        // last checked 2012-05-13
                        var theUrlArr = theUrl.split("/");
                        return ( "http://coda.fm/albums/" + theUrlArr[4] + "/torrent/download?file="
                                +TZO.torrentTitles.encoded + ".torrent" );
                      }
                    ],
                    [ "take.fm/movies",
                      function(theUrl){                  
                        // take.fm/movies/999/releases/9999
                        // take.fm/movies/999/releases/9999/torrent/download?file=Title+of+torrent.torrent
                        // last checked 2012-05-13
                        var theUrlArr = theUrl.split("/");
                        return ( "http://take.fm/movies/"+theUrlArr[4]+"/releases/"+theUrlArr[6]
                                +"/torrent/download?file="+TZO.torrentTitles.encoded+".torrent" );
                      }
                    ],
                    [ "torrage.com/torrent",
                      function(theUrl){
                        // torrage.com/torrent/BAE62A9932EC69BC6687A6D399CCB9D89D00D455.torrent
                        return theUrl;
                      }
                    ],
                    [ "torcache.net/torrent",
                      function(theUrl){
                        // torcache.net/torrent/BAE62A9932EC69BC6687A6D399CCB9D89D00D455.torrent
                        return theUrl;
                      }
                    ],
                    [ "zoink.it/torrent",
                      function(theUrl){
                        // zoink.it/torrent/BAE62A9932EC69BC6687A6D399CCB9D89D00D455.torrent
                        return theUrl;
                      }
                    ]
                  ],
                  linkList           = downloadDiv.find("a:not([href^='magnet']):not([href='"+TZO.scriptName + "_dllink'])"),
                  torrSitesArrLength = torrSitesArr.length
              ;
              linkList.each(function(){
                var theUrl    = this.href,
                    theUrlLow = theUrl.toLowerCase(),
                    theLink   = $j(this)
                ;
                for ( var j = 0; j < torrSitesArrLength; j++ ) {
                  if ( theUrlLow.match(new RegExp(torrSitesArr[j][0],"i")) ) {
                    theLink.before("<a href='" + torrSitesArr[j][1](theUrl) + "' class='"
                    + TZO.scriptName + "_dllink' target='_blank'><em>Download&#160;.torrent</em></a>");
                  }
                }
              // end download .torrent links
              });
            // end torrent-page
            })();
            
            // Select to search
            (function(){
              var titleEl           = $j("h2:eq(0)"),
                  injectEl          = downloadDiv.find(" > dl:eq(0)"),
                  searchBar,
                  searchLinks,
                  theOrgText,
                  theOldText,
                  searchHelperText,
                  unselectSelection,
                  noModKeys,
                  handleEscape
              ;
              titleEl.attr("title","Select the text in this title to start searching...");
              titleEl.after("<div id='search_bar'></div>");
              searchBar = $j("#search_bar");
              if (!_window.TzaioSelect) {
                TzaioSelect = {};
              }
              TzaioSelect.Selector = {};
              TzaioSelect.Selector.getSelected = function() {
                var t = "";
                if (_window.getSelection) {
                  t = _window.getSelection();
                } else if (document.getSelection) {
                  t = document.getSelection();
                } else if (document.selection) {
                  t = document.selection.createRange().text;
                }
                return t;
              }
              TzaioSelect.Selector.mouseup = function(e) {
                var st         = TzaioSelect.Selector.getSelected(),
                    tempStr,
                    _temp,
                    searchStr,
                    searchLink = "",
                    searchHtml = "",
                    leftOffset,
                    widthCalc,
                    cssWidth,
                    _searchEgi = [],
                    xOffset    = e.clientX,
                    yOffset    = e.clientY
                ;
                if (st != "") {
                  titleEl.removeAttr("title");
                  tempStr = st+"";
                  tempStr = tempStr
                    .replace(/(\W|\_)/ig," ")
                    .replace(/(torrent|download|locations)/ig,"")
                    .replace(/\s+/g," ")
                    .replace(/\s/g,"+")
                    .replace(/(^\+|\+$)/g,"");
                  searchStr = tempStr;
                  for ( var i = 0; i < storedSettings.searchEngines.length; i++ ) {
                    var engineHTMLArr = storedSettings.searchEngines[i].split("|");
                    searchHtml += "<a class='search_link' href='" + TZO.cloakerUrl
                      + engineHTMLArr[1].replace(/%s/g,searchStr).replace("http://www.nullrefer.com/?","")
                      + "'>" + engineHTMLArr[0].replace(/_/g," ") + "</a>";
                  }
                  searchHtml += "<a class='search_link' href='"
                    + "/search?f="+searchStr+"'>torrentz</a><a href='/feed?q=" + searchStr
                    + "'><img src='//"+TZO.docDomain+"/img/rss.png' width='16' height='16'></a>";
                  if (searchStr != "") {
                    searchBar.html(searchHtml);
                    TZO.bodyEl.addClass("search_ready");
                  }
                } else {
                  handleEscape(false, true);
                }
              }
              titleEl.bind("mouseup", TzaioSelect.Selector.mouseup);
              titleEl.bind("mousedown", function(){
                searchBar.empty();
                TZO.bodyEl.removeClass("search_ready");
              });
              unselectSelection = function() {
                // be nice, unselect the selected text
                // todo: browser compatible? works in safari, chrome, firefox            
                _window.getSelection().collapseToStart();
              }
              noModKeys = function(i) {
                function isF(x){
                  if ( _.isBoolean(x) && x === false ) return true;
                }
                function isD(y){
                  return typeof y !== "undefined";
                }
                if ( isD(i.ctrlKey) && isD(i.shiftKey) && isD(i.altKey) && isD(i.metaKey) ) {
                  return isF(i.ctrlKey) && isF(i.shiftKey) && isF(i.altKey) && isF(i.metaKey);
                }
              }
              handleEscape = function(e, unselected) { 
                if (unselected || +e.which === 27 && noModKeys(e)) {
                  // strange range error but nothing breaks
                  try {
                    titleEl.length && titleEl.trigger("mousedown");
                    searchBar.length && searchBar.empty();
                    TZO.bodyEl.removeClass("search_ready");
                    TZO.copyTextarea.length && TZO.copyTextarea.stop().hide(0);
                    TZO.topDiv.hasClass("expand") && TZO.topDiv.find(" > ul > li."+TZO.scriptName+"_settings a").trigger("click");
                    unselectSelection();
                  } catch(e) {
                    typeof GM_log === "function" && GM_log(e);
                  }
                }
              }
              $j(document).keyup(handleEscape);
            // end select-search
            })();
            
          // Splash page
          } else if (location.pathname === "/") {
            if ( storedSettings.removeAds ) {
              (function(){
                // Old Ads that might popup later again
                var frontPageAd = TZO.bodyEl.find(" > p a img");
                if (frontPageAd.length && frontPageAd.parent().parent().is("p")) frontPageAd.parent().parent().hide();
              })();
            }
            
          // Help Page
          } else if ( (/^help\/?$/).test(TZO.torrHash) ) {
            (function(){
              $j("div.help:eq(0)").append("<p><b>Torrentz All-in-One UserScript</b></p><ul>\
<li>Installed: "+TZO.scriptVersion+"</li>\
<li>Homepage: <a href='"+TZO.scriptHomepage+"'>"+TZO.scriptHomepage+"</a></li>\
<li>Github: <a href='https://github.com/elundmark/tz-aio-userscript'>https://github.com/elundmark/tz-aio-userscript</a></li>\
<li>Report issues here: <a href='https://github.com/elundmark/tz-aio-userscript'>https://github.com/elundmark/tz-aio-userscript/issues</a></li>\
<li>Built using <a href='http://www.jquery.com/'>jQuery</a>, \
<a href='http://underscorejs.org/'>underscore.js</a>, \
<a href='http://www.jstorage.info/'>jStorage</a>, \
<a href='http://code.google.com/p/jquery-json/'>jQuery JSON Plugin</a> \
&amp; the <a href='http://github.com/cowboy/jquery-replacetext/'>jQuery replaceText Plugin</a>.</li>\
</ul>");
            })();
          // Searchresults ( The /i page uses ajax so let's skip that
          } else if ( /^(search|any|verified|advanced|tracker_)/i.test(TZO.torrHash) ) {
            if ( storedSettings.removeAds ) {
              (function(){
                var resultsEl = $j("div.results:eq(0)");
                if ( resultsEl.find("h2").text().match(/sponsored/i) ) {
                  resultsEl.addClass("removed_ad");
                }
                resultsEl.prev().has("a img").addClass("removed_ad")
                $j("body > div.sponsored").addClass("removed_ad");
              })();
            }
            (function(){
              var searchParameters = document.location.search.match(/^\?f\=(.+)$/i),
                  resultsEl        = $j("div.results:visible:eq(0)"),
                  resultsH2        = resultsEl.find(" > h2"),
                  widthsObj        = null,
                  genreArr,
                  genreArrLength,
                  colorize,
                  dmcaDl
              ;
              if ( storedSettings.searchHighlight ) {
                genreArr = [
[ "pink",    new RegExp(unescape("%28%70%72%6F%6E%7C%70%6F%72%6E%7C%70%30%72%6E%7C%70%72%30%6E%7C%78\
%78%78%7C%61%64%75%6C%74%7C%5C%62%73%65%78%5C%62%7C%5C%62%31%38%5C%2B%3F%5C%62%29"), "i") ],
[ "tv",      /(\btv\b|eztv|ettv|tvteam|television|series|shows|episodes)/i ],
[ "movie",   /(movie|xvid|divx|bdrip|hdrip|maxspeed|klaxxon|axxo|wmv|avi|matroska|mkv|highres|264)/i ],
[ "game",    /game/i ],
[ "book",    /(book|epub|pdf|document|m4b|audiobook|audible|comics)/i ],
[ "music",   /(music|audio|\bpop\b|\brock\b|flac|lossless|consert|bootleg|mp3|ogg|wav|m4a)/i ],
[ "app",     /(software|applications|apps|\bos\b)/i ],
[ "picture", /(picture|images|gallery)/i ],
[ "anime",   /anime\b/i ],
[ "movie",   /(video|1080p|720p)/i ],
[ "app",     /(\bos\b|\bunix\b|\blinux\b|\bsolaris\b|\bwindows\b|\bmac\b|\bx64\b|\bx86\b)/i ],
[ "misc",    /(other|misc|miscellaneous|unsorted|siterip)/i ]
                ];
                genreArrLength = genreArr.length;
                colorize = function(x, e) {
                   // I've tried to optimize this to make it faster but this is the best I could do
                  var el             = $j(e),
                      dtEl           = $j("dt", el),
                      elLink         = $j("a", el),
                      statsDd        = el.find("dd"),
                      // avoid errors as much as possible
                      torrString     = dtEl.length ? dtEl.text() : "",
                      showTitle      = torrString.length > 89 ? torrString : null,
                      matchKeywords  = torrString.replace(/^.*»\s+?(.*)$/i, "$1"),
                      matchTitle     = torrString.replace(/^(.*)\s+?».*$/i, "$1").replace("'",""),
                      matchKeywords  = matchKeywords.length ? matchKeywords : torrString,
                      matchTitle     = matchTitle.length ? matchTitle : torrString,
                      i              = 0,
                      magnetUrl
                  ;
                  if ( !widthsObj ) {
                    widthsObj = { dt : (dtEl.width() - 24), dd : (statsDd.width() + 24) };
                  }
                  if ( elLink.length && dtEl.length ) {
                    // magnet link
                    magnetUrl = "magnet:?xt=urn:btih:" + elLink.attr("href").match(/\w{40}/i)[0]
                    + "&amp;dn=" + encodeURIComponent( matchTitle )
                    + "&amp;tr=" + TZO.trackerObject.userString.replace(/\n+/g,"&amp;tr=");
                    el.find("dd").prepend("<span class='magnet'><a href='" + magnetUrl + "' title='Download with magnetlink "
                    + "(" + TZO.trackerObject.userArray.length + " trackers)'>&nbsp;</a></span>")
                    .end().click(function(e){
                      var $target = typeof e.target !== "undefined" ? $(e.target) : null,
                        $this = $(this),
                        $link
                      ;
                      if ( $target && !$target.is("a") ) {
                        $link = $this.find("> dt > a");
                        $link = $link.attr("href").match(/\/[a-zA-Z0-9]{40}/) ? $link.attr("href") : null;
                        $link && ( location.href = $link );
                        return false;
                      }
                    });
                    showTitle && ( el.attr("title", showTitle) );
                    // Keyword check
                    for (i; i < genreArrLength; i++) {
                      if ( genreArr[i][1].test(matchKeywords) ) {
                        el.addClass( genreArr[i][0] );
                        break;
                      }
                    }
                  }
                }
                // Add class to 'X results removed in compliance with EUCD / DMCA' first
                dmcaDl = resultsEl.find("dl:last");
                if ( dmcaDl.text().match(/removed.+compliance/i) ) {
                  dmcaDl.addClass("dmca");
                }
                resultsEl.find("dl").each(colorize);
                TZO.addStyle( TZO.searchCss() );
                TZO.addStyle( "div.results > dl > dt { width: " + widthsObj.dt + "px !important; }"
                  + "div.results > dl > dd { width: " + widthsObj.dd + "px !important; }" );
              }
              // Add rss link for "approximate match" results
              if ( searchParameters
                && searchParameters[1]
                && resultsEl.has("dl").length
                && resultsH2.length
                && !resultsH2.has("img[src*='rss.png']").length ) {
                resultsH2.append(
                  " <a class='approximate_rss_link' href='/feed?q="
                  + searchParameters[1]
                  + "'><img width='16' height='16' src='//"+TZO.docDomain+"/img/rss.png'></a>"
                );
              }
            })();
          // end pages
          }
          // easier debuggery
          _window["debug_"+TZO.scriptName] = TZO;
        // *****************************************************************************************
        }
      } catch(e) {
        typeof GM_log === "function" && GM_log(e);
      // end GM error logger
      }
    // end init
    }
    // call init with window and jQuery from best to worst solution
    init( (unsafeWindow||window), (jQuery||unsafeWindow.jQuery||window.jQuery) );
  // end if !=== https:
  }
})();
