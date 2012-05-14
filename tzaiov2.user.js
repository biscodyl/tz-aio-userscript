// ==UserScript==
// @name          Torrentz All-in-One
// @description   Does everything you wish Torrentz.eu could do!
// @version       2.0.0
// @date          2012-05-14
// @author        elundmark
// @license       MIT License; http://www.opensource.org/licenses/mit-license.php
// @namespace     http://elundmark.se/code/tz-aio
// @homepage      http://userscripts.org/scripts/show/125001
// @updateURL     https://userscripts.org/scripts/source/125001.meta.js
// @include       http://torrentz.eu/*
// @include       https://torrentz.eu/*
// @match         http://torrentz.eu/*
// @match         https://torrentz.eu/*
// @icon          data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAACqVBMVEUKFB4KFR8LFR8LFiELFiIMGCQNGicNGigNGygNGykOHCsPGSIPHi0PHi4PHy8QIDEQITEQITIRGyQRIjMTJjoUKDwUKD0VJDUWHykWLEIXICoXL0cYIisYMEgZIiwZMksaIywaNE4cOVYdJi8dOlcdO1keJzAePFoePVwfKDEfPl4fP14fV48gKjMgQGAgQGEhQmMhQ2UiRWcjRmkkLTYkSW0lSm8mTHImTXMnTnYpUnspXpQqVH4rV4IsWIQsWIUsWYUsWYYtNT4tWocuSWQvSmQvXo4xYpMxYpQxY5QxY5UyOkIyZJcyZZcyZZgzZpk1Z5o2PkY2aJo3P0c3P0g6Qko6a5w8REw9RU1ASFBAcJ9BSVFBUGBCSlJCcaBDcqFEc6FFTVRFdKJGU19GaY1HT1ZJYHdJdqRMeaVNV2FNc5hOWGJRWF9TfqhTfqlUW2JWfKJaYWdaYWhad5Rag6xbhK1dY2pdhq5fh65giK9iibBjaXBjirFla3FlhKJli7FnbXNnbXRnjbJnjbNobnRqj7Rtc3ltkrZvk7dzlrl1e4F6m7x7nL18nL1/hIqCocCEo8GFo8KHpcOLqMWMkZaMnrCOlp6OqsaSorGTmJyVr8qWsMqYnKCZnaGanqKas8ybtMyctM2guM+nvdKovdOtwdWywtK7vsG/wsTC0eDFx8rGyMvHycvJy83Jy87Nz9HN09rP2ubQ2uTQ3OfT3ejU3+nX2dra3N3c3d/d3+Dg4uTh4uPi4+Tk5ufk6/Ho7fHo7fPp6uzp7vTq6+zq7/Tr7O3r7O7r7/Pr8PXs7e7s8PXu8fTv8/bw8fHw8fLy9fj09PX09/j19vf29vf2+Pr3+Pr3+fr4+Pn5+fn5+fr6+vr6+/z7+/v7/P38/Pz8/P39/f3+/v7///+abyX6AAAC3ElEQVR42u3b51MTQRzH4RWUiIqIXRR7Q1EUuyiW2FDD2bAX7L0rIhZUUMHeK/ZesPfeULF3seHt9y8xkzsEjtWJXLzL6O+TV5nszD252exekjkGkyMAAQiQCeAwOK4BICjU0IKgBYRKhhZKAAIQgAAEIAABCEAAAhCAAARwa8BGcOeLkkTFApxjTh4B6+F8vEOwJGg1ZABjgg0AVPORBB0DBxDpkzfAuj8C+Em5i4OjSL+8ATbwXEGGPVnwQk3BQeZ+47IeQNLFMyk5O3mDwx6/ciJF06WKuQ4yZe87LkMPoG9Ux8CcVd4ERyv8AzXVY8WkrEbErNx//o4MGXoA9lo1DMnZZuUMJHjXDtHWVFJLhCPl3esACNuhAnzbSb8skUPpXwYsduszsByf1dJlbjBArShTW2MSoFF9tW3GzQFx+/7aHCCAswCaAwRwOWAnzYH/HkBzwF0A0WbPged3Hz3J3q14A8+AqNcLrTYjAdqvi/LbiZXCjQRg99QZatMnHYWM48XLdTF0DiTk87KojedAWlkWEG7sx7BIk5ZKo97LSO/GCrWIMHgdsCrPh14APi1g+RvYzFmIehzinCd7sCo2k/aCtQBOe7DSnU1aimPAkVqBlWgrmQOY/Ax40Y95N5fMAQw7C3ydxzzrRphzPdDrIMCTGQvobtJ2vAocpwqzUp0kcwBLvgPXGjPf1iZ9NZvwAHjTh3k1izDlemBRmXPgiGaetWzS79oDx/CeLt8Nl20Bz9jOWHnRCpTEMwNk2MvgP/sS7xrAkY/gV0f3HjxtltLscYJfyUQ9nRmmG6Ak49X1m7fvqT0+4CQgbXgNl8wBxyN7h8O6Ogmorg+w9eXD+4JSd7Gs/WDpB2WMqMsDdALGxo4cJGhIe9ZGymzgfGWMqP7+VXUAHJW0FBRksVi1Y8QVqEP/GxKAAAQgAAEIQAACEIAABCAAAbQAd7vdj8PgON1zSgACuAvgB4QHvuWvZtCMAAAAAElFTkSuQmCC
// ==/UserScript==
(function(){
  var currProtocol = location.protocol,
      currHost     = location.hostname,
      addJQuery, storedSettings, $j, init, TZO;
  if ( typeof unsafeWindow === "undefined" ) {
    unsafeWindow = window;
  }
  if ( currHost.match(/(www\.)?torrentz\.eu/i) && currProtocol === "http:" ) {
    // Force ssl - use torrentz.me if you need http: (.me has no ssl)
    location.href = location.href.replace(/^http:/, "https:");
  } else {
    // All done forcing ssl and checking we're on the right page
    // Chrome support: Loads jQuery and calls a callback function
    function addJQuery() {
      var script = document.createElement("script");
      // As of 2012-05-10 1.7.1 is the version Torrentz.eu has embedded
      script.setAttribute("src", "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js");
      script.addEventListener("load", function() {
        $j = unsafeWindow.jQuery;
        init(unsafeWindow, $j);
      }, false);
      document.body.appendChild(script);
    }
    // Main init function
    init = function(_window, $j){
      try {
        // Used to log errors to FB
        var GM_log = function(obj) {
          _window.console.log(obj);
        };
        /*
            Plugins  
        */
        /* jQuery JSON Plugin
         * version: 2.3 (2011-09-17)
         * This document is licensed as free software under the terms of the
         * MIT License: http://www.opensource.org/licenses/mit-license.php
         * Influenced by MochiKit's serializeJSON, which is
         * copyrighted 2005 by Bob Ippolito.
        */
        (function($j){var escapeable=/["\\\x00-\x1f\x7f-\x9f]/g,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};$j.toJSON=typeof JSON==="object"&&JSON.stringify?JSON.stringify:function(o){if(o===null){return"null"}var type=typeof o;if(type==="undefined"){return undefined}if(type==="number"||type==="boolean"){return""+o}if(type==="string"){return $j.quoteString(o)}if(type==="object"){if(typeof o.toJSON==="function"){return $j.toJSON(o.toJSON())}if(o.constructor===Date){var month=o.getUTCMonth()+1,day=o.getUTCDate(),year=o.getUTCFullYear(),hours=o.getUTCHours(),minutes=o.getUTCMinutes(),seconds=o.getUTCSeconds(),milli=o.getUTCMilliseconds();if(month<10){month="0"+month}if(day<10){day="0"+day}if(hours<10){hours="0"+hours}if(minutes<10){minutes="0"+minutes}if(seconds<10){seconds="0"+seconds}if(milli<100){milli="0"+milli}if(milli<10){milli="0"+milli}return'"'+year+"-"+month+"-"+day+"T"+hours+":"+minutes+":"+seconds+"."+milli+'Z"'}if(o.constructor===Array){var ret=[];for(var i=0;i<o.length;i++){ret.push($j.toJSON(o[i])||"null")}return"["+ret.join(",")+"]"}var name,val,pairs=[];for(var k in o){type=typeof k;if(type==="number"){name='"'+k+'"'}else{if(type==="string"){name=$j.quoteString(k)}else{continue}}type=typeof o[k];if(type==="function"||type==="undefined"){continue}val=$j.toJSON(o[k]);pairs.push(name+":"+val)}return"{"+pairs.join(",")+"}"}};$j.evalJSON=typeof JSON==="object"&&JSON.parse?JSON.parse:function(src){return eval("("+src+")")};$j.secureEvalJSON=typeof JSON==="object"&&JSON.parse?JSON.parse:function(src){var filtered=src.replace(/\\["\\\/bfnrtu]/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"");if(/^[\],:{}\s]*$/.test(filtered)){return eval("("+src+")")}else{throw new SyntaxError("Error parsing JSON, source is not valid.")}};$j.quoteString=function(string){if(string.match(escapeable)){return'"'+string.replace(escapeable,function(a){var c=meta[a];if(typeof c==="string"){return c}c=a.charCodeAt();return"\\u00"+Math.floor(c/16).toString(16)+(c%16).toString(16)})+'"'}return'"'+string+'"'}})($j);
        /* JSTORAGE
         * Copyright (c) 2010 Andris Reinman, andris.reinman@gmail.com
         * Project homepage: www.jstorage.info
         * Licensed under MIT-style license: http://www.opensource.org/licenses/mit-license.php
        */
        (function($j){if(!$j||!($j.toJSON||Object.toJSON||_window.JSON)){throw new Error("jQuery, MooTools or Prototype needs to be loaded before jStorage!")}var _storage={},_storage_service={jStorage:"{}"},_storage_elm=null,_storage_size=0,json_encode=$j.toJSON||Object.toJSON||(_window.JSON&&(JSON.encode||JSON.stringify)),json_decode=$j.evalJSON||(_window.JSON&&(JSON.decode||JSON.parse))||function(str){return String(str).evalJSON()},_backend=false,_ttl_timeout,_XMLService={isXML:function(elm){var documentElement=(elm?elm.ownerDocument||elm:0).documentElement;return documentElement?documentElement.nodeName!=="HTML":false},encode:function(xmlNode){if(!this.isXML(xmlNode)){return false}try{return new XMLSerializer().serializeToString(xmlNode)}catch(E1){try{return xmlNode.xml}catch(E2){}}return false},decode:function(xmlString){var dom_parser=("DOMParser" in window&&(new DOMParser()).parseFromString)||(_window.ActiveXObject&&function(_xmlString){var xml_doc=new ActiveXObject("Microsoft.XMLDOM");xml_doc.async="false";xml_doc.loadXML(_xmlString);return xml_doc}),resultXML;if(!dom_parser){return false}resultXML=dom_parser.call("DOMParser" in _window&&(new DOMParser())||_window,xmlString,"text/xml");return this.isXML(resultXML)?resultXML:false}};function _init(){var localStorageReallyWorks=false;if("localStorage" in _window){try{_window.localStorage.setItem("_tmptest","tmpval");localStorageReallyWorks=true;_window.localStorage.removeItem("_tmptest")}catch(BogusQuotaExceededErrorOnIos5){}}if(localStorageReallyWorks){try{if(_window.localStorage){_storage_service=_window.localStorage;_backend="localStorage"}}catch(E3){}}else{if("globalStorage" in _window){try{if(_window.globalStorage){_storage_service=_window.globalStorage[_window.location.hostname];_backend="globalStorage"}}catch(E4){}}else{_storage_elm=document.createElement("link");if(_storage_elm.addBehavior){_storage_elm.style.behavior="url(#default#userData)";document.getElementsByTagName("head")[0].appendChild(_storage_elm);_storage_elm.load("jStorage");var data="{}";try{data=_storage_elm.getAttribute("jStorage")}catch(E5){}_storage_service.jStorage=data;_backend="userDataBehavior"}else{_storage_elm=null;return}}}_load_storage();_handleTTL()}function _load_storage(){if(_storage_service.jStorage){try{_storage=json_decode(String(_storage_service.jStorage))}catch(E6){_storage_service.jStorage="{}"}}else{_storage_service.jStorage="{}"}_storage_size=_storage_service.jStorage?String(_storage_service.jStorage).length:0}function _save(){try{_storage_service.jStorage=json_encode(_storage);if(_storage_elm){_storage_elm.setAttribute("jStorage",_storage_service.jStorage);_storage_elm.save("jStorage")}_storage_size=_storage_service.jStorage?String(_storage_service.jStorage).length:0}catch(E7){}}function _checkKey(key){if(!key||(typeof key!="string"&&typeof key!="number")){throw new TypeError("Key name must be string or numeric")}if(key=="__jstorage_meta"){throw new TypeError("Reserved key name")}return true}function _handleTTL(){var curtime,i,TTL,nextExpire=Infinity,changed=false;clearTimeout(_ttl_timeout);if(!_storage.__jstorage_meta||typeof _storage.__jstorage_meta.TTL!="object"){return}curtime=+new Date();TTL=_storage.__jstorage_meta.TTL;for(i in TTL){if(TTL.hasOwnProperty(i)){if(TTL[i]<=curtime){delete TTL[i];delete _storage[i];changed=true}else{if(TTL[i]<nextExpire){nextExpire=TTL[i]}}}}if(nextExpire!=Infinity){_ttl_timeout=setTimeout(_handleTTL,nextExpire-curtime)}if(changed){_save()}}$j.jStorage={version:"0.1.6.1",set:function(key,value){_checkKey(key);if(_XMLService.isXML(value)){value={_is_xml:true,xml:_XMLService.encode(value)}}else{if(typeof value=="function"){value=null}else{if(value&&typeof value=="object"){value=json_decode(json_encode(value))}}}_storage[key]=value;_save();return value},get:function(key,def){_checkKey(key);if(key in _storage){if(_storage[key]&&typeof _storage[key]=="object"&&_storage[key]._is_xml&&_storage[key]._is_xml){return _XMLService.decode(_storage[key].xml)}else{return _storage[key]}}return typeof(def)=="undefined"?null:def},deleteKey:function(key){_checkKey(key);if(key in _storage){delete _storage[key];if(_storage.__jstorage_meta&&typeof _storage.__jstorage_meta.TTL=="object"&&key in _storage.__jstorage_meta.TTL){delete _storage.__jstorage_meta.TTL[key]}_save();return true}return false},setTTL:function(key,ttl){var curtime=+new Date();_checkKey(key);ttl=Number(ttl)||0;if(key in _storage){if(!_storage.__jstorage_meta){_storage.__jstorage_meta={}}if(!_storage.__jstorage_meta.TTL){_storage.__jstorage_meta.TTL={}}if(ttl>0){_storage.__jstorage_meta.TTL[key]=curtime+ttl}else{delete _storage.__jstorage_meta.TTL[key]}_save();_handleTTL();return true}return false},flush:function(){_storage={};_save();return true},storageObj:function(){function F(){}F.prototype=_storage;return new F()},index:function(){var index=[],i;for(i in _storage){if(_storage.hasOwnProperty(i)&&i!="__jstorage_meta"){index.push(i)}}return index},storageSize:function(){return _storage_size},currentBackend:function(){return _backend},storageAvailable:function(){return !!_backend},reInit:function(){var new_storage_elm,data;if(_storage_elm&&_storage_elm.addBehavior){new_storage_elm=document.createElement("link");_storage_elm.parentNode.replaceChild(new_storage_elm,_storage_elm);_storage_elm=new_storage_elm;_storage_elm.style.behavior="url(#default#userData)";document.getElementsByTagName("head")[0].appendChild(_storage_elm);_storage_elm.load("jStorage");data="{}";try{data=_storage_elm.getAttribute("jStorage")}catch(E5){}_storage_service.jStorage=data;_backend="userDataBehavior"}_load_storage()}};_init()})($j);
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
        /* Underscore.js 1.3.3
         * (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
         * Underscore is freely distributable under the MIT license.
         * Portions of Underscore are inspired or borrowed from Prototype,
         * Oliver Steele's Functional, and John Resig's Micro-Templating.
         * http://documentcloud.github.com/underscore
        */
        (function(){function r(a,c,d){if(a===c)return 0!==a||1/a==1/c;if(null==a||null==c)return a===c;a._chain&&(a=a._wrapped);c._chain&&(c=c._wrapped);if(a.isEqual&&b.isFunction(a.isEqual))return a.isEqual(c);if(c.isEqual&&b.isFunction(c.isEqual))return c.isEqual(a);var e=l.call(a);if(e!=l.call(c))return!1;switch(e){case "[object String]":return a==""+c;case "[object Number]":return a!=+a?c!=+c:0==a?1/a==1/c:a==+c;case "[object Date]":case "[object Boolean]":return+a==+c;case "[object RegExp]":return a.source==c.source&&a.global==c.global&&a.multiline==c.multiline&&a.ignoreCase==c.ignoreCase}if("object"!=typeof a||"object"!=typeof c)return!1;for(var f=d.length;f--;)if(d[f]==a)return!0;d.push(a);var f=0,g=!0;if("[object Array]"==e){if(f=a.length,g=f==c.length)for(;f--&&(g=f in a==f in c&&r(a[f],c[f],d)););}else{if("constructor"in a!="constructor"in c||a.constructor!=c.constructor)return!1;for(var h in a)if(b.has(a,h)&&(f++,!(g=b.has(c,h)&&r(a[h],c[h],d))))break;if(g){for(h in c)if(b.has(c,h)&&!f--)break;g=!f}}d.pop();return g}var s=this,I=s._,o={},k=Array.prototype,p=Object.prototype,i=k.slice,J=k.unshift,l=p.toString,K=p.hasOwnProperty,y=k.forEach,z=k.map,A=k.reduce,B=k.reduceRight,C=k.filter,D=k.every,E=k.some,q=k.indexOf,F=k.lastIndexOf,p=Array.isArray,L=Object.keys,t=Function.prototype.bind,b=function(a){return new m(a)};"undefined"!==typeof exports?("undefined"!==typeof module&&module.exports&&(exports=module.exports=b),exports._=b):s._=b;b.VERSION="1.3.3";var j=b.each=b.forEach=function(a,c,d){if(a!=null)if(y&&a.forEach===y)a.forEach(c,d);else if(a.length===+a.length)for(var e=0,f=a.length;e<f;e++){if(e in a&&c.call(d,a[e],e,a)===o)break}else for(e in a)if(b.has(a,e)&&c.call(d,a[e],e,a)===o)break};b.map=b.collect=function(a,c,b){var e=[];if(a==null)return e;if(z&&a.map===z)return a.map(c,b);j(a,function(a,g,h){e[e.length]=c.call(b,a,g,h)});if(a.length===+a.length)e.length=a.length;return e};b.reduce=b.foldl=b.inject=function(a,c,d,e){var f=arguments.length>2;a==null&&(a=[]);if(A&&a.reduce===A){e&&(c=b.bind(c,e));return f?a.reduce(c,d):a.reduce(c)}j(a,function(a,b,i){if(f)d=c.call(e,d,a,b,i);else{d=a;f=true}});if(!f)throw new TypeError("Reduce of empty array with no initial value");return d};b.reduceRight=b.foldr=function(a,c,d,e){var f=arguments.length>2;a==null&&(a=[]);if(B&&a.reduceRight===B){e&&(c=b.bind(c,e));return f?a.reduceRight(c,d):a.reduceRight(c)}var g=b.toArray(a).reverse();e&&!f&&(c=b.bind(c,e));return f?b.reduce(g,c,d,e):b.reduce(g,c)};b.find=b.detect=function(a,c,b){var e;G(a,function(a,g,h){if(c.call(b,a,g,h)){e=a;return true}});return e};b.filter=b.select=function(a,c,b){var e=[];if(a==null)return e;if(C&&a.filter===C)return a.filter(c,b);j(a,function(a,g,h){c.call(b,a,g,h)&&(e[e.length]=a)});return e};b.reject=function(a,c,b){var e=[];if(a==null)return e;j(a,function(a,g,h){c.call(b,a,g,h)||(e[e.length]=a)});return e};b.every=b.all=function(a,c,b){var e=true;if(a==null)return e;if(D&&a.every===D)return a.every(c,b);j(a,function(a,g,h){if(!(e=e&&c.call(b,a,g,h)))return o});return!!e};var G=b.some=b.any=function(a,c,d){c||(c=b.identity);var e=false;if(a==null)return e;if(E&&a.some===E)return a.some(c,d);j(a,function(a,b,h){if(e||(e=c.call(d,a,b,h)))return o});return!!e};b.include=b.contains=function(a,c){var b=false;if(a==null)return b;if(q&&a.indexOf===q)return a.indexOf(c)!=-1;return b=G(a,function(a){return a===c})};b.invoke=function(a,c){var d=i.call(arguments,2);return b.map(a,function(a){return(b.isFunction(c)?c||a:a[c]).apply(a,d)})};b.pluck=function(a,c){return b.map(a,function(a){return a[c]})};b.max=function(a,c,d){if(!c&&b.isArray(a)&&a[0]===+a[0])return Math.max.apply(Math,a);if(!c&&b.isEmpty(a))return-Infinity;var e={computed:-Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b>=e.computed&&(e={value:a,computed:b})});return e.value};b.min=function(a,c,d){if(!c&&b.isArray(a)&&a[0]===+a[0])return Math.min.apply(Math,a);if(!c&&b.isEmpty(a))return Infinity;var e={computed:Infinity};j(a,function(a,b,h){b=c?c.call(d,a,b,h):a;b<e.computed&&(e={value:a,computed:b})});return e.value};b.shuffle=function(a){var b=[],d;j(a,function(a,f){d=Math.floor(Math.random()*(f+1));b[f]=b[d];b[d]=a});return b};b.sortBy=function(a,c,d){var e=b.isFunction(c)?c:function(a){return a[c]};return b.pluck(b.map(a,function(a,b,c){return{value:a,criteria:e.call(d,a,b,c)}}).sort(function(a,b){var c=a.criteria,d=b.criteria;return c===void 0?1:d===void 0?-1:c<d?-1:c>d?1:0}),"value")};b.groupBy=function(a,c){var d={},e=b.isFunction(c)?c:function(a){return a[c]};j(a,function(a,b){var c=e(a,b);(d[c]||(d[c]=[])).push(a)});return d};b.sortedIndex=function(a,c,d){d||(d=b.identity);for(var e=0,f=a.length;e<f;){var g=e+f>>1;d(a[g])<d(c)?e=g+1:f=g}return e};b.toArray=function(a){return!a?[]:b.isArray(a)||b.isArguments(a)?i.call(a):a.toArray&&b.isFunction(a.toArray)?a.toArray():b.values(a)};b.size=function(a){return b.isArray(a)?a.length:b.keys(a).length};b.first=b.head=b.take=function(a,b,d){return b!=null&&!d?i.call(a,0,b):a[0]};b.initial=function(a,b,d){return i.call(a,0,a.length-(b==null||d?1:b))};b.last=function(a,b,d){return b!=null&&!d?i.call(a,Math.max(a.length-b,0)):a[a.length-1]};b.rest=b.tail=function(a,b,d){return i.call(a,b==null||d?1:b)};b.compact=function(a){return b.filter(a,function(a){return!!a})};b.flatten=function(a,c){return b.reduce(a,function(a,e){if(b.isArray(e))return a.concat(c?e:b.flatten(e));a[a.length]=e;return a},[])};b.without=function(a){return b.difference(a,i.call(arguments,1))};b.uniq=b.unique=function(a,c,d){var d=d?b.map(a,d):a,e=[];a.length<3&&(c=true);b.reduce(d,function(d,g,h){if(c?b.last(d)!==g||!d.length:!b.include(d,g)){d.push(g);e.push(a[h])}return d},[]);return e};b.union=function(){return b.uniq(b.flatten(arguments,true))};b.intersection=b.intersect=function(a){var c=i.call(arguments,1);return b.filter(b.uniq(a),function(a){return b.every(c,function(c){return b.indexOf(c,a)>=0})})};b.difference=function(a){var c=b.flatten(i.call(arguments,1),true);return b.filter(a,function(a){return!b.include(c,a)})};b.zip=function(){for(var a=i.call(arguments),c=b.max(b.pluck(a,"length")),d=Array(c),e=0;e<c;e++)d[e]=b.pluck(a,""+e);return d};b.indexOf=function(a,c,d){if(a==null)return-1;var e;if(d){d=b.sortedIndex(a,c);return a[d]===c?d:-1}if(q&&a.indexOf===q)return a.indexOf(c);d=0;for(e=a.length;d<e;d++)if(d in a&&a[d]===c)return d;return-1};b.lastIndexOf=function(a,b){if(a==null)return-1;if(F&&a.lastIndexOf===F)return a.lastIndexOf(b);for(var d=a.length;d--;)if(d in a&&a[d]===b)return d;return-1};b.range=function(a,b,d){if(arguments.length<=1){b=a||0;a=0}for(var d=arguments[2]||1,e=Math.max(Math.ceil((b-a)/d),0),f=0,g=Array(e);f<e;){g[f++]=a;a=a+d}return g};var H=function(){};b.bind=function(a,c){var d,e;if(a.bind===t&&t)return t.apply(a,i.call(arguments,1));if(!b.isFunction(a))throw new TypeError;e=i.call(arguments,2);return d=function(){if(!(this instanceof d))return a.apply(c,e.concat(i.call(arguments)));H.prototype=a.prototype;var b=new H,g=a.apply(b,e.concat(i.call(arguments)));return Object(g)===g?g:b}};b.bindAll=function(a){var c=i.call(arguments,1);c.length==0&&(c=b.functions(a));j(c,function(c){a[c]=b.bind(a[c],a)});return a};b.memoize=function(a,c){var d={};c||(c=b.identity);return function(){var e=c.apply(this,arguments);return b.has(d,e)?d[e]:d[e]=a.apply(this,arguments)}};b.delay=function(a,b){var d=i.call(arguments,2);return setTimeout(function(){return a.apply(null,d)},b)};b.defer=function(a){return b.delay.apply(b,[a,1].concat(i.call(arguments,1)))};b.throttle=function(a,c){var d,e,f,g,h,i,j=b.debounce(function(){h=g=false},c);return function(){d=this;e=arguments;f||(f=setTimeout(function(){f=null;h&&a.apply(d,e);j()},c));g?h=true:i=a.apply(d,e);j();g=true;return i}};b.debounce=function(a,b,d){var e;return function(){var f=this,g=arguments;d&&!e&&a.apply(f,g);clearTimeout(e);e=setTimeout(function(){e=null;d||a.apply(f,g)},b)}};b.once=function(a){var b=false,d;return function(){if(b)return d;b=true;return d=a.apply(this,arguments)}};b.wrap=function(a,b){return function(){var d=[a].concat(i.call(arguments,0));return b.apply(this,d)}};b.compose=function(){var a=arguments;return function(){for(var b=arguments,d=a.length-1;d>=0;d--)b=[a[d].apply(this,b)];return b[0]}};b.after=function(a,b){return a<=0?b():function(){if(--a<1)return b.apply(this,arguments)}};b.keys=L||function(a){if(a!==Object(a))throw new TypeError("Invalid object");var c=[],d;for(d in a)b.has(a,d)&&(c[c.length]=d);return c};b.values=function(a){return b.map(a,b.identity)};b.functions=b.methods=function(a){var c=[],d;for(d in a)b.isFunction(a[d])&&c.push(d);return c.sort()};b.extend=function(a){j(i.call(arguments,1),function(b){for(var d in b)a[d]=b[d]});return a};b.pick=function(a){var c={};j(b.flatten(i.call(arguments,1)),function(b){b in a&&(c[b]=a[b])});return c};b.defaults=function(a){j(i.call(arguments,1),function(b){for(var d in b)a[d]==null&&(a[d]=b[d])});return a};b.clone=function(a){return!b.isObject(a)?a:b.isArray(a)?a.slice():b.extend({},a)};b.tap=function(a,b){b(a);return a};b.isEqual=function(a,b){return r(a,b,[])};b.isEmpty=function(a){if(a==null)return true;if(b.isArray(a)||b.isString(a))return a.length===0;for(var c in a)if(b.has(a,c))return false;return true};b.isElement=function(a){return!!(a&&a.nodeType==1)};b.isArray=p||function(a){return l.call(a)=="[object Array]"};b.isObject=function(a){return a===Object(a)};b.isArguments=function(a){return l.call(a)=="[object Arguments]"};b.isArguments(arguments)||(b.isArguments=function(a){return!(!a||!b.has(a,"callee"))});b.isFunction=function(a){return l.call(a)=="[object Function]"};b.isString=function(a){return l.call(a)=="[object String]"};b.isNumber=function(a){return l.call(a)=="[object Number]"};b.isFinite=function(a){return b.isNumber(a)&&isFinite(a)};b.isNaN=function(a){return a!==a};b.isBoolean=function(a){return a===true||a===false||l.call(a)=="[object Boolean]"};b.isDate=function(a){return l.call(a)=="[object Date]"};b.isRegExp=function(a){return l.call(a)=="[object RegExp]"};b.isNull=function(a){return a===null};b.isUndefined=function(a){return a===void 0};b.has=function(a,b){return K.call(a,b)};b.noConflict=function(){s._=I;return this};b.identity=function(a){return a};b.times=function(a,b,d){for(var e=0;e<a;e++)b.call(d,e)};b.escape=function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;")};b.result=function(a,c){if(a==null)return null;var d=a[c];return b.isFunction(d)?d.call(a):d};b.mixin=function(a){j(b.functions(a),function(c){M(c,b[c]=a[c])})};var N=0;b.uniqueId=function(a){var b=N++;return a?a+b:b};b.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var u=/.^/,n={"\\":"\\","'":"'",r:"\r",n:"\n",t:"\t",u2028:"\u2028",u2029:"\u2029"},v;for(v in n)n[n[v]]=v;var O=/\\|'|\r|\n|\t|\u2028|\u2029/g,P=/\\(\\|'|r|n|t|u2028|u2029)/g,w=function(a){return a.replace(P,function(a,b){return n[b]})};b.template=function(a,c,d){d=b.defaults(d||{},b.templateSettings);a="__p+='"+a.replace(O,function(a){return"\\"+n[a]}).replace(d.escape||u,function(a,b){return"'+\n_.escape("+w(b)+")+\n'"}).replace(d.interpolate||u,function(a,b){return"'+\n("+w(b)+")+\n'"}).replace(d.evaluate||u,function(a,b){return"';\n"+w(b)+"\n;__p+='"})+"';\n";d.variable||(a="with(obj||{}){\n"+a+"}\n");var a="var __p='';var print=function(){__p+=Array.prototype.join.call(arguments, '')};\n"+a+"return __p;\n",e=new Function(d.variable||"obj","_",a);if(c)return e(c,b);c=function(a){return e.call(this,a,b)};c.source="function("+(d.variable||"obj")+"){\n"+a+"}";return c};b.chain=function(a){return b(a).chain()};var m=function(a){this._wrapped=a};b.prototype=m.prototype;var x=function(a,c){return c?b(a).chain():a},M=function(a,c){m.prototype[a]=function(){var a=i.call(arguments);J.call(a,this._wrapped);return x(c.apply(b,a),this._chain)}};b.mixin(b);j("pop,push,reverse,shift,sort,splice,unshift".split(","),function(a){var b=k[a];m.prototype[a]=function(){var d=this._wrapped;b.apply(d,arguments);var e=d.length;(a=="shift"||a=="splice")&&e===0&&delete d[0];return x(d,this._chain)}});j(["concat","join","slice"],function(a){var b=k[a];m.prototype[a]=function(){return x(b.apply(this._wrapped,arguments),this._chain)}});m.prototype.chain=function(){this._chain=true;return this};m.prototype.value=function(){return this._wrapped}}).call(this);
        /*
            End plugins  
        */
        if ( typeof _ === "function"
          && typeof $j === "function"
          && typeof $j.toJSON === "function"
          && typeof $j.jStorage === "object"
          && !/^announcelist_/.test(document.location.pathname.replace(/\x2F/g,"")) ) {
          // *************************************************************************************
          TZO = {
            torrHash         : document.location.pathname.replace(/\x2F/g,""),
            scriptName       : "tz_aio",
            scriptVersion    : "Version 2.0.0 2012-05-14",
            scriptHomepage   : "http://userscripts.org/scripts/show/125001",
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
"search imdb|http://www.nullrefer.com/?http://www.imdb.com/find?s=all&amp;q=%s",
"rotten tomatoes|http://www.nullrefer.com/?http://www.rottentomatoes.com/search/full_search.php?search=%s",
"itunes|http://www.nullrefer.com/?http://ax.itunes.apple.com/WebObjects/MZSearch.woa/wa/search?term=%s",
"amazon|http://www.nullrefer.com/?http://www.amazon.com/s/?field-keywords=%s",
"wikipedia|http://www.nullrefer.com/?http://en.wikipedia.org/w/index.php?search=%s",
"google|http://www.nullrefer.com/?http://www.google.com/search?q=%s"
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
#"+base+"_logo {\
display: block;\
position: absolute;\
top: -1px;\
right: -1px;\
z-index: 10;\
background-color: "+e.colors.tzblue+";\
background-image: url(/img/cbr.gif), url(/img/ctr.gif);\
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
left: 585px;\
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
."+base+"_b.no_ads .SPECIFICELEMENT, ."+base+"_b .removed_ad {\
display: none !important;\
}\
."+base+"_b div.top {\
position:relative;\
z-index:5;\
background-image: url('/img/cbl.gif'), url('/img/cbr.gif');\
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
input, button, select, option, form.search * {\
font-family:inherit;\
}\
              ";
            },
            searchCss        : function() {
              var boxShadow = "0 3px 5px #777, 0 -3px 5px #AAA",
                  e = this,
                  base = e.scriptName;
              return "\
body."+base+"_b div.results > dl {\
position: relative;\
border-bottom: 1px solid " + e.colors.white + "\
}\
body."+base+"_b div.results > dl a {\
display: block;\
position: absolute;\
top: 0px;\
left: 2px;\
width: 100%;\
height: 100%;\
line-height: 25px;\
}\
div.results > dl.pron {\
background-color: #FFDCEF;\
}\
div.results > dl.tv {\
background-color: #F4DED5;\
}\
div.results > dl.movie {\
background-color: #FCD1C0;\
}\
div.results > dl.game {\
background-color: #EDBF9E;\
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
body."+base+"_b div.results > dl:hover {\
background: "  + e.colors.offwhite + " !important;\
cursor: pointer;\
left: 0px;\
z-index: 99999;\
-moz-border-radius: 3px;\
-webkit-border-radius: 3px;\
border-radius: 3px;\
-webkit-box-shadow: " + boxShadow + ";\
-moz-box-shadow: " + boxShadow + ";\
box-shadow: " + boxShadow + ";\
}\
div.results > dl:hover dt {\
color: #474E54;\
}\
div.results > dl dt a:active, div.results > dl dt a:focus {\
opacity: 0.5;\
}\
div.results > dl:hover dt a {\
color: " + e.colors.orange + ";\
}\
body."+base+"_b div.results > dl:hover a {\
text-decoration: none;\
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
                var prev = index >= 1 ? _arr[(index-1)] : "", udpPopped;
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
              var localArr = s.replace(/^\n+/,"").replace(/\n+$/,"").split(/\n+/),
                  newString = "";
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
          };
          // end TZO object

          // Set default settings localStorage for the 1st run
          $j.jStorage.get(TZO.scriptName+"_removeAds") === null       && $j.jStorage.set(TZO.scriptName+"_removeAds",true);
          $j.jStorage.get(TZO.scriptName+"_searchHighlight") === null && $j.jStorage.set(TZO.scriptName+"_searchHighlight",true);
          $j.jStorage.get(TZO.scriptName+"_linkComments") === null    && $j.jStorage.set(TZO.scriptName+"_linkComments", true);
          $j.jStorage.get(TZO.scriptName+"_defaultTrackers") === null && $j.jStorage.set(TZO.scriptName+"_defaultTrackers",TZO.defTrackerList);
          $j.jStorage.get(TZO.scriptName+"_searchEngines") === null   && $j.jStorage.set(TZO.scriptName+"_searchEngines",TZO.searchEnginesArr);
          
          storedSettings = TZO.currentSettings();
          
          TZO.trackerObject.userArray = storedSettings.defaultTrackers;
          TZO.trackerObject.userString = TZO.mergeTrackers( TZO.trackerObject.userArray, [], "string");
          
          TZO.bodyEl.addClass(TZO.scriptName + "_b");
          TZO.addStyle( TZO.css() );

          // Settings applies to all pages
          (function(){
            var settingsEl,
                settingsSubmitEl,
                resetEl,
                settingsVisible = false;
            TZO.topDiv = $j("div.top:eq(0)");
            // Remove ads here since we have this function on every page
            if ( storedSettings.removeAds ) {
              TZO.removeDocOnclick();
              TZO.bodyEl.addClass("no_ads");
              $j("object, embed, iframe").addClass("removed_ad");
            }
            TZO.topDiv.find(" > ul").prepend("<li class='"+TZO.scriptName+"_settings'><a href='#' title='Change TzAio Settings'>TzAio</a>");
            settingsEl = TZO.topDiv.find(" > ul > li."+TZO.scriptName+"_settings a");
            TZO.topDiv.append("<div class='settings_wrap'><span id='trackers_title'>\
Default trackerlist (these are added to all torrents\' trackers, if absent)</span>\
<span id='searchengines_title'>Search engines list (title|url formatting, use %s to indicate keyword)</span>\
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
            if ( !storedSettings.linkComments ) $j("#searchHighlight_false").attr("checked", true);

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
              TZO.topDiv.find("input:checked").each(function(){
                var el = $j(this),
                    settingName = el.attr("name"),
                    settingValue = TZO.makeBool(el.val());
                $j.jStorage.set(TZO.scriptName + "_" + settingName, settingValue);
              });
              $j.jStorage.set( TZO.scriptName+"_defaultTrackers", $j("#default_trackers_textarea").val().split(/\n+/) );
              $j.jStorage.set( TZO.scriptName+"_searchEngines", $j("#default_searchengines_textarea").val().split(/\n+/) );
              setTimeout(function(){
                _window.location.reload();
              }, 250);
            });
            
            resetEl.bind("click",function(){
              var refresh_page_reset = confirm("Reset settings and reload the page?");
              if ( refresh_page_reset ) $j.jStorage.flush() && _window.location.reload();
              return false;
            });
          })();
          // End settings panel
          
          // Page specific select (always remove ads first)
          if ( /^\w{40}$/i.test(TZO.torrHash) ) {
            var downloadDiv = $j(".download:eq(0)");
            // Remove specific ads
            if ( storedSettings.removeAds ) {
              (function(){
                var topInfoDiv = TZO.bodyEl.find(" > div.info"),
                    firstDl    = downloadDiv.find(" > dl:eq(0)");
                if ( topInfoDiv.text().match(/btguard/i) ) topInfoDiv.addClass("removed_ad");
                if ( firstDl.text().match(/(direct\s+download|sponsored\s+link)/i) ) firstDl.addClass("removed_ad");
              })();
            }
            // Linkify comment links
            if ( storedSettings.linkComments ) {
              (function(){
                var commentEl = $j(".comment");
                setTimeout(function(){
                  // Linkify visible comments
                  if ( commentEl.length ) {
                    var regPatt = /((http|https)\:\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!\:.?+=&%@!\-\/]))?)?/gi,
                        linkComments = commentEl.find(".com:visible:contains('http')");
                    linkComments.each(function(){
                      var thisLink = $j(this);
                      thisLink.replaceText(regPatt, "<a href='$1'>$1</a>" );
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
                  verDownload    = $j(".votebox .status").text().match(/\d+/),
                  verDownloadCl  = verDownload && +verDownload[0] >= 2 ? " verified_download" : "",
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
                  };
              TZO.torrentTitles.raw = torrTitle;
              TZO.torrentTitles.encoded = encodeURIComponent( torrTitle ),
              trackerLinks.each(function() {
                // Will produce an empty array if there are no trackers on site
                currTrackerList.push( $j(this).text() );
              });
              TZO.trackerObject.siteArray = currTrackerList;
              TZO.trackerObject.siteString = TZO.mergeTrackers( [], TZO.trackerObject.siteArray, "string" );
              TZO.trackerObject.allArray = TZO.mergeTrackers( TZO.trackerObject.userArray, TZO.trackerObject.siteArray, "array" );
              TZO.trackerObject.allString = TZO.mergeTrackers( TZO.trackerObject.allArray, [], "string" );
              TZO.trackerObject.allMagnet = "magnet:?xt=urn:btih:" + TZO.torrHash + "&amp;dn="
              + TZO.torrentTitles.encoded + "&amp;tr=" + TZO.trackerObject.siteString.replace(/\n+/g,"&amp;tr=");
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
              clippyText = "<a href='#' id='copylist' title='Click to copy the trackerlist'>Copy " + TZO.trackerObject.allArray.length + " trackers</a>";
              if (commentCount) {
                commentText = "<a href='#comments_"+TZO.scriptName+"'>";
                commentDiv.attr("id","comments_"+TZO.scriptName);
              } else {
                commentText = "<a href='#write_comment_"+TZO.scriptName+"'>";
                formFieldset.attr("id","write_comment_"+TZO.scriptName);
              }
              commentText += "<img src='/img/comment.png'/> " + commentCount+"</a>";
              fileLinks.filter("[href*='.wmv']").each(function(){
                if ( /\.wmv$/i.test($j(this).text()) ) {
                  wmvWarning = true;
                }
              });
              if (fileLinks.length) {
                $j("div.files:eq(0)").attr("id","files_"+TZO.scriptName);
                filesInfoText = "<a href='#files_"+TZO.scriptName+"'><img src='/img/folder.png'/> " + fileLinks.length + "</a> &frasl; ";
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
                    textareaHTML = "<div id='copy_tr_textarea'><textarea cols='40' rows='10' wrap='off'>"
                    + copylistText + "</textarea></div>";
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
              var torCacheUrl = "http://torcache.net/torrent/" + TZO.torrHash.toUpperCase() + ".torrent?title=" + TZO.torrentTitles.encoded,
                  torRageUrl  = "http://torrage.net/torrent/" + TZO.torrHash.toUpperCase() + ".torrent",
                  torrSitesArr     = [
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
                      return ( "http://h33t.com/download.php?id=" + TZO.torrHash.toLowerCase() + "&f=" + TZO.torrentTitles.encoded + "%5D%5Bh33t%5D.torrent" );
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
                      // torrage.net/torrent/BAE62A9932EC69BC6687A6D399CCB9D89D00D455.torrent
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
                  [ "rarbg.com/torrents",
                    function(theUrl){
                      // rarbg.com/torrents/filmi/download/bae62a9932ec69bc6687a6d399ccb9d89d00d455/torrent.html
                      // rarbg.com/download.php?id=bae62a9932ec69bc6687a6d399ccb9d89d00d455&f=ubuntu-10-10-desktop-i386-iso.torrent
                      // last checked 2012-05-13
                      return ( "http://rarbg.com/download.php?id=" + TZO.torrHash + "&f=" + TZO.torrentTitles.encoded + ".torrent" );
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
                      return ( "http://coda.fm/albums/" + theUrlArr[4] + "/torrent/download?file=" + TZO.torrentTitles.encoded + ".torrent" );
                    }
                  ],
                  [ "take.fm/movies",
                    function(theUrl){                  
                      // take.fm/movies/999/releases/9999
                      // take.fm/movies/999/releases/9999/torrent/download?file=Title+of+torrent.torrent
                      // last checked 2012-05-13
                      var theUrlArr = theUrl.split("/");
                      return ( "http://take.fm/movies/"+theUrlArr[4]+"/releases/"+theUrlArr[6]+"/torrent/download?file="+TZO.torrentTitles.encoded+".torrent" );
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
              torrSitesArrLength = torrSitesArr.length;
              linkList.each(function(){
                var theUrl  = this.href,
                    theUrlLow = theUrl.toLowerCase(),
                    theLink   = $j(this);
                for ( var j = 0; j < torrSitesArrLength; j++ ) {
                  if ( theUrlLow.match(new RegExp(torrSitesArr[j][0],"i")) ) {
                    theLink.before("<a href='" + torrSitesArr[j][1](theUrl) + "' class='"
                    + TZO.scriptName + "_dllink' target='_blank'><em>Download&#160;.torrent</em></a>");
                  }
                }
              });
              // end download .torrent links
            })();
            // end torrent-page
            
            // Select to search
            (function(){
              var titleEl  = $j("h2:eq(0)"),
                  injectEl = downloadDiv.find(" > dl:eq(0)"),
                  searchBar, searchLinks, theOrgText, theOldText, searchHelperText,
                  unselectSelection, noModKeys, handleEscape;
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
                var st = TzaioSelect.Selector.getSelected(),
                    tempStr, _temp, searchStr, searchLink = "", searchHtml = "", leftOffset, widthCalc,
                    cssWidth, _searchEgi = [], xOffset = e.clientX, yOffset = e.clientY;
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
                    searchHtml += "<a class='search_link' href='"
                      + engineHTMLArr[1].replace(/%s/g,searchStr) + "'>" + engineHTMLArr[0] + "</a>";
                  }
                  searchHtml += "<a class='search_link' href='"
                    + "/search?f="+searchStr+"'>torrentz</a><a href='/feed?q=" + searchStr
                    + "'><img src='/img/rss.png' width='16' height='16'></a>";
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
            })();
            // end select-search
            
          // Splash page
          } else if (location.pathname === "/") {
            if ( storedSettings.removeAds ) {
              (function(){
                // Old Ads that might popup later again
                var frontPageAd   = TZO.bodyEl.find(" > p a img");
                if (frontPageAd.length && frontPageAd.parent().parent().is("p")) frontPageAd.parent().parent().hide();
              })();
            }
            
          // Help Page
          } else if ( (/^help\/?$/).test(TZO.torrHash) ) {
            (function(){
              $j("div.help:eq(0)").append("<p><b>Torrentz All-in-One UserScript</b></p><ul>\
<li>Installed: "+TZO.scriptVersion+"</li>\
<li>Built using <a href='http://www.jquery.com/'>jQuery</a>, \
<a href='http://documentcloud.github.com/underscore/'>underscore.js</a>, \
<a href='http://www.jstorage.info/'>jStorage</a>, \
<a href='http://code.google.com/p/jquery-json/'>jQuery JSON Plugin</a> \
&amp; the <a href='http://benalman.com/projects/jquery-replacetext-plugin/'>jQuery replaceText Plugin</a>.</li>\
<li>Access all the scripts' settings by clicking 'TzAio' in the menubar at the top.</li>\
<li>For information, suggestions, comments and more please visit \
<a href='"+TZO.scriptHomepage+"'>userscripts.org/scripts/show/125001</a> \
(as soon as I've launched my own webite I'll link you there)</li>\
<li>Short list of features: Download the torrentfile directly from multiple sources, \
hide all the Ads and sponsored links, including document.onclick popups, \
highlight searchresults by category (99.9% accurate), \
linkify links in the comments, \
search bar triggered by selection, fully customizable, \
a \"copy trackers\" button, \
a super-charged magnetlink, \
coupled with cutom default trackers to include in the trackerlist, \
a visible warning for WMV files and reportedly fake files, \
and some helpful stats about the health of the torrent.</li>\
Please visit <a href='"+TZO.scriptHomepage+"'>userscripts.org</a> \
if you've found any bugs or have any suggestions to improve this script. Thx!\
</ul>");
            })();
          // Searchresults ( The /i page uses ajax so let's skip that
          } else if ( /^(search|any|verified|advanced|tracker_)/i.test(TZO.torrHash) ) {
            (function(){
              var searchParameters = document.location.search.match(/^\?f\=(.+)$/i),
                  resultsEl = $j("div.results"),
                  resultsH2 = resultsEl.find(" > h2"),
                  genreArr;
              if ( storedSettings.removeAds ) {
              }
              if ( storedSettings.searchHighlight ) {
                genreArr = [
[ "pron",    /(pron|porn|p0rn|pr0n|xxx|adult|\bsex\b)/i ],
[ "tv",      /(\btv\b|eztv|ettv|tvteam|television|series|shows|episodes)/i ],
[ "movie",   /(movie|xvid|divx|bdrip|hdrip|maxspeed|klaxxon|axxo|wmv|avi|matroska|mkv|highres|264)/i ],
[ "game",    /game/i ],
[ "book",    /(book|epub|pdf|document|m4b|audiobook|audible|comics)/i ],
[ "music",   /(music|audio|flac|lossless|consert|bootleg|mp3|ogg|wav|m4a)/i ],
[ "app",     /(software|applications|apps|\bos\b)/i ],
[ "picture", /(picture|images|gallery)/i ],
[ "movie",   /(video|1080p|720p)/i ],
[ "app",     /(\bunix\b|\blinux\b|\bsolaris\b|\bwindows\b|\bmac\b|\bx64\b|\bx86\b)/i ],
[ "misc",    /(other|misc|unsorted|siterip)/i ]
                ];
                TZO.addStyle( TZO.searchCss() );
                resultsEl.find("dt").has("a").each(function(i, val1){
                  var dtEl     = $j(val1),
                      torrString = dtEl.text(),
                      hasRaquo   = /»/.test(torrString),
                      innerSpanWidth,
                      dtWidth    = dtEl.width();
                  // Span width padding fix
                  dtEl.find("> a").wrapInner("<span></span>");
                  innerSpanWidth = dtEl.find("> a > span").width();
                  dtEl.css({
                    "padding-left" : (innerSpanWidth + 5) + "px",
                    "width"        : (dtWidth - innerSpanWidth - 5) + "px"
                  });
                  // Keyword check
                  if (hasRaquo) {
                    var keyWordsArr = torrString.split("»"),
                        keyWords = keyWordsArr[(keyWordsArr.length-1)];
                    $j.each(genreArr, function(j, val2){
                      if ( val2[1].test(keyWords) ) {
                        dtEl
                        .parent()
                        .addClass(val2[0]);
                        return false;
                      }
                    });
                  }
                });
              }
              // Add rss link for "approximate match" results
              if ( searchParameters
                && searchParameters[1]
                && resultsEl.has("dl").length
                && resultsH2.length
                && !resultsH2.has("img[src*='rss.png']").length ) {
                resultsH2.append(" <a href=\"/feed?q=" + searchParameters[1] + "\"><img width=\"16\" height=\"16\" src=\"/img/rss.png\"></a>");
              }
            })();
          // end pages
          }

          // debug
          _window["debug_"+TZO.scriptName] = TZO;

        // ***************************************************************************************
        // end plugins and $j check
        }
      // end GM error logger
      } catch(e) {
        typeof GM_log === "function" && GM_log(e);
      }
    // end init
    }
    if ( typeof jQuery === "function" ) {
      $j = jQuery;
      init(unsafeWindow, $j);
    } else if ( typeof window.jQuery === "function" ) {
      $j = window.jQuery;
      init(unsafeWindow, $j);
    } else if ( typeof unsafeWindow.jQuery === "function" ) {
      $j = unsafeWindow.jQuery;
      init(unsafeWindow, $j);
    } else {
      // load jQuery and then execute the main init function on script.load
      addJQuery();
    }
  // end if !=== https:
  }
})();
