// ==UserScript==
// @name          Torrentz All-in-One Proxy Fix
// @description   Does everything you wish Torrentz.eu could do!
// @version       2.4.0
// @date          2014-02-04
// @author        elundmark
// @contact       mail@elundmark.se
// @license       CC0 1.0 Universal; http://creativecommons.org/publicdomain/zero/1.0/
// @namespace     http://elundmark.se/code/tz-aio-proxy/
// @homepage      https://github.com/elundmark/tz-aio-userscript/
// @supportURL    https://github.com/elundmark/tz-aio-userscript/issues
// @include       *
// @exclude       /^https?://[^/]+/feed(?:_[a-zA-Z]+)?\?.*/
// @exclude       /^https?://[^/]+/announcelist_.*/
// @exclude       /^https?://[^/]+/report_.*/
// @exclude       /^https?://[^/]+/comment_.*/
// @require       https://code.jquery.com/jquery-2.1.0.min.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min.js
// @resource css1 http://elundmark.se/_files/js/tz-aio/tz-aio-style.css?v=2-4-0-0
// @icon          data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAABNVBMVEUAAAAlSm8lSnAlS3AmS3AmTHImTHMmTXQnTnYnT3coTHEoUXkpUnsqVH4qVYArT3MrV4IsWYUtWoguXIovXo0vX44wYJAwYZIxVHcxYpQxY5UyZJYyZZcyZZgzZpk0Z5k1Z5k2aJo3WXs3aZo8bJ09Xn8+bp5CcaBFZYRHdaJJdqNNeaVPbYtQe6dSfahVf6lYdJFbhKxchK1hiK9iibBjfZhnjLJvh6Bylbhzlrh6m7x8kqh8nb2KnrGNqcWRrMeYqbuYssuas8ymtcSovdOqv9SvwtawxNezv8y2yNq5ytu+ydTD0eDJ0tvJ1uPP2ubT2uLZ4uvc4efe5u7f5+7i6fDl6e3p7vPq7fHq7/Ts8PXu8vbw8vTx9Pf19vj2+Pr4+fr4+fv6+/z8/Pz8/P39/f3///871JlNAAAAAXRSTlMAQObYZgAAAXFJREFUeNrt20dPw0AQBeBs6DX0niGhhN57Db333kJn//9PYOdgCQlYEEJ5Ab13mhnb8nfwYSRrQyGBxr3fQiMEEEAAAW8BkrZ8DJA0hgACCCCAAAIIIIAAAgjwAuy346cvBRdRgC0wIHYFBsxaLGAghQWMnlskoG/12f4c4H1CvIknuoYn59dPrAYBCO4igAAA4H0IIIAAAggggAACCPh3AG+MIQALWDalqI9w/NHNdguLoiBAf8qNzlryGgQD6Dh1k9verBrBAFr3dTJhKgUE2NTBgikTEGBR++3s4igIMK3tUV1+o2AAIw+uu+nMqRUMoOfaNU9j4SrBABLH2syZcsEA4ntab5gSAQHWtDyIFDSBAEmtLtpz6wUDmHpxxf1guFowgKE7LWZMhWAA3ZfBCoABtB3aYAWAAJp37OcrgNgv8guAFRusAACAbykl4I8A+PecAAIIIIAAAggggAACMhQAEPC0HQEEEJBJAPjx/1f83wbVqAm3rAAAAABJRU5ErkJggg==
// @grant         GM_info
// @grant         GM_addStyle
// @grant         GM_log
// @grant         GM_getResourceText
// @grant         GM_setValue
// @grant         GM_getValue
// @grant         GM_deleteValue
// @grant         GM_openInTab
// @grant         GM_getMetadata
// @grant         GM_setClipboard
// ==/UserScript==

/*
	# Compatibility
	
	Tested in Firefox 19+ (and nightly dev) (GreaseMonkey 1.8+, Scriptish 0.1.8+)
	and Chrome 25+ (Tampermonkey v2.12.3124.16+) on Ubuntu Linux
	using Sublime Text, Sass, Compass.app, Git, and node.js for debugging.
	 
	# Legality
	
	Released under CC0 1.0 Universal (http://creativecommons.org/publicdomain/zero/1.0/).
	The author of this script takes no responsibility for any potetial harm
	done to any hamsters, servers, browsers or wallets. While browsing
	affected sites with this script is fully legal,
	downloading illegal copyrighted material still isn’t.

	# External code

	UnderscoreJS and jQuery are freely distributed under the MIT license.

*/

(function ($, __, loadStartMS) {
	"use strict";
	if ( !$(".top a:contains('iTorrentz')").length ) return;
	if ( typeof __ !== "function" || typeof $ !== "function"
		||(typeof GM_info !== "object" && typeof GM_getMetadata !== "function")  // added for Scriptish
		|| typeof GM_log !== "function"
		|| typeof GM_deleteValue !== "function"
		|| typeof GM_getResourceText !== "function"
		|| typeof GM_setValue !== "function"
		|| typeof GM_getValue !== "function"
		|| typeof GM_openInTab !== "function" ) {
		throw new Error("Missing functions or window! Please report this error if you're reading this!");
	}
	var cache
		// Greasemonkey
		,els			= {}
		,tz				= {}
		,isGM			= (typeof TM_log !== "function" && typeof GM_info === "object")
		// Scriptish
		,isSC			= (!isGM && typeof GM_info === "undefined" && typeof GM_getMetadata === "function")
		// Tampermonkey
		,isTM			= (!isGM && !isSC && typeof TM_log === "function")
		,environment	= isGM ? "Firefox/GreaseMonkey " : isTM ? "Chrome(-ium)/TamperMonkey "
			: isSC ? "Firefox/Scriptish " : "unknown "
		,execStartMS
		,startLogMsg
		,d				= document
		// start webkit popstate "fire on load" fix
		,hpPopped		= ("state" in history && history.state !== null)
		,hpInitialURL	= d.location.href
		// end fix
		,scriptSource	= isGM ? GM_info.scriptMetaStr : isTM ? GM_info.scriptSource : ""
		,UserScript		= function () {
			// if unknown script engine, it pbly breaks here
			this.name = isSC ? GM_getMetadata("name")[0] : GM_info.script.name;
			this.slug = "tz_aio";
			this.version = isSC ? GM_getMetadata("version")[0] : GM_info.script.version;
			this.bodyClass = this.slug + "_b " + this.slug + "_v" + (this.version.replace(/\..*/g,""));
			this.date = isSC ? GM_getMetadata("date")[0] : getMeta(new RegExp("//\\s*@date\\s+([0-9\\-]+)","i"), 1);
			this.link = isSC ? GM_getMetadata("homepage")[0] : getMeta(new RegExp("//\\s*@homepage\\s+(\\S+)","i"), 1);
			this.icon = isSC ? GM_getMetadata("icon")[0] : getMeta(new RegExp("//\\s*@icon\\s+(\\S+)","i"), 1);
			this.gitHubIssues = isSC ? GM_getMetadata("supporturl")[0] : getMeta(new RegExp("//\\s*@supportURL\\s+(\\S+)","i"), 1);
			this.gitHub = this.gitHubIssues.replace(/issues\/?$/,"");
			this.searchEngines = [
				"search_imdb|http://www.imdb.com/find?s=all&amp;q=%s"
				,"rotten_tomatoes|http://www.rottentomatoes.com/search/full_search.php?search=%s"
				,"itunes|http://ax.itunes.apple.com/WebObjects/MZSearch.woa/wa/search?term=%s"
				,"amazon|http://www.amazon.com/s/?field-keywords=%s"
				,"wikipedia|http://en.wikipedia.org/w/index.php?search=%s"
				,(unescape("%74%70%62%7C%68%74%74%70%73%3A%2F%2F%74%68%65%70%69%72%61%74%65%62%61%79%2E%73%65%2F%73%65%61%72%63%68%2F%25%73%2F%30%2F%37%2F%30"))
				,"google|https://www.google.com/search?q=%s"
			];
			this.defaultTrackers = [
				"udp://tracker.openbittorrent.com:80/"
				,"http://tracker.openbittorrent.com:80/"
				,"udp://tracker.publicbt.com:80/"
				,"http://tracker.publicbt.com:80/"
				,"udp://tracker.istole.it:6969/"
				,"udp://tracker.ccc.de:80/"
				,"http://tracker.ccc.de:80/"
				,"udp://fr33dom.h33t.com:3310/announce"
				,"http://inferno.demonoid.com:3407/announce"
				,"http://tracker.ilibr.org:6969/announce"
				,"udp://tracker.prq.to/announce"
				,"http://tracker.torrent.to:2710/announce"
				,"udp://11.rarbg.com/announce"
				,"http://9.rarbg.com:2710/announce"
				,"http://bt1.the9.com:6969/announce"
				,"http://exodus.desync.com:6969/announce"
				,"http://tracker.xpear.de:6969/announce"
				,"udp://open.demonii.com:1337/announce"
				,"http://tracker.yify-torrents.com/announce"
			];
			this.customCss = [
				"/* "
				," This is added after the default stylesheet."
				," All pages have a body class of 'tz_aio_b tz_aio_v2'"
				," To hide all tag clouds for example:"
				,"   body." + (this.bodyClass.replace(/\s/, ".")) + " > div.cloud {"
				,"       display: none;"
				,"   }"
				,"*/","",""
			];
			this.excludeFilter = "";
			this.removeAds = true;
			this.searchHighlight = true;
			this.linkComments = true;
			this.ajaxedSorting = true;
			this.forceHTTPS = false;
		};

	// Global function list
	function sendLog (s, callback) {
		if (console) {
			if (typeof s === "object" && String(s).indexOf("Error: ") === 0) {
				// Error object
				console.error(s);
			} else if (typeof s === "object") {
				console.dir(s);
			} else {
				console.log(s);
			}
		} else if (typeof GM_log === "function") {
			GM_log(s);
		} else {
			throw new Error(s);
		}
		if ( typeof callback === "function" ) {
			return callback();
		}
	}
	function myAddStyler (cssArray) {
		// https://gist.github.com/7450780
		if ( !cssArray || !cssArray.length ) return;
		var css = typeof cssArray === "string" ? cssArray : cssArray.join("\n")
			,heads
			,node;
		if ( typeof GM_addStyle === "function") {
			GM_addStyle(css);
		} else if ( typeof PRO_addStyle === "function" ) {
			PRO_addStyle(css);
		} else if ( typeof addStyle === "function" ) {
			addStyle(css);
		} else {
			heads = d.getElementsByTagName("head");
			if (heads && heads.length === 1) {
				node = d.createElement("style");
				node.type = "text/css";
				node.appendChild(d.createTextNode(css));
				heads[0].appendChild(node);
			}
		}
	}
	function getPageParmaters () {
		return {
			protocol	: location.protocol
			,host		: location.hostname
			,path		: location.pathname
			,domain		: d.domain
			,thash		: location.pathname.replace(/\x2F/g,"")
			,search		: location.search
			// remove hash to enable refreshing the page with location.href
			,href		: location.href.replace(location.hash,"").replace(/\#$/,"")
			,title		: d.title
			,titleEnc	: encodeURIComponent(d.title.replace(/\'/g,"_"))
		};
	}
	function getSearchGenres () {
		return([
			// remember to catch the obvious first (re), then re-check further down
			{
				name     : "pink"
				,pattern : new RegExp(unescape("%28%3F%3A%70%72%6F%6E%7C%70%6F%72%6E%7C%70%30%72%6E%7C%70"
					+ "%72%30%6E%7C%78%78%78%7C%61%64%75%6C%74%7C%5C%62%73%65%78%5C%62%7C%5C%62%31%38%5C%2B"
					+ "%3F%5C%62%29"), "i")
			}, {
				name     : "tv"
				,pattern : new RegExp("(?:(?:\\W|_)(?:sd|ez|et)?tv(?:\\W|_)|\\blol\\b|(?:\\W|_)s[0-9]{2}"
					+ "e[0-9]{2}(?:\\W|_)|tvteam|discovery|hdtv|television|series|\\bshows?\\b|episodes?|"
					+ "\\bseasons?\\b)","i")
			}, {
				name     : "movie"
				,pattern : new RegExp("(?:movie|film|maxspeed|axxo|feature|video|dvdscr|screener|(?:\\W|_)"
					+ "cam(rip)?\\b|\\br[3-6]\\b|\\bts\\b|telesync|\\bvod(rip)?)","i")
			}, {
				name     : "book"
				,pattern : new RegExp("(?:\\be?book|epub|pdf|document|m4b|audiobook|audible|\\bcbr\\b|comics)","i")
			}, {
				name     : "game"
				,pattern : new RegExp("(?:games?\\b|xbox|ps[x234]|wii|\\broms?(et)?\\b|playstation|nintendo)","i")
			}, {
				name     : "music"
				,pattern : new RegExp("(?:music|audio|\\bpop\\b|\\brock\\b|flac|lossless|album\\b|consert|"
					+ "bootleg|mp3|\\bogg\\b|wav|m4a|podcast|\\bost\\b)","i")
			}, {
				name     : "app"
				,pattern : new RegExp("(?:software|app[sz]?(?:lication)?s?\\b|\\bos[a-z]?\\b|\\bos\\b|\\bunix\\b"
					+ "|\\blinux\\b|\\bsolaris\\b|\\bwin(dows|([7-9]|xp))?\\b|\\bmac\\b|\\bx64\\b|\\bx86\\b"
					+ "|\\bandroid\\b|\\bpsp\\b|\\bios\\b|\\bpc\\b)","i")
			}, {
				name     : "picture"
				,pattern : new RegExp("(?:picture|images|gallery)","i")
			}, {
				name     : "anime"
				,pattern : new RegExp("anime\\b","i")
			}, {
				name     : "movie"
				,pattern : new RegExp("(?:1080p|720p|bluray|blueray|480p|wmv|avi|matroska|mkv"
					+ "|highres|264|xvid|divx|bdrip|brrip|hdrip)","i")
			}, {
				name     : "misc"
				,pattern : new RegExp("(?:other|\\bmisc|un(?:sorted|known|defined)|siterip)","i")
			}
		]);
	}
	function linkMatches () {
		var o = this;
		return function (s) {
			return (o.link.indexOf(s) !== -1);
		};
	}
	function getDirectTorrentLinks (href) {
		var hash		= tz.page.thash.toLowerCase()
			,HASH		= hash.toUpperCase()
			,titleEnc	= tz.page.titleEnc
			,torCacheUrl= "http://torcache.net/torrent/" + HASH + ".torrent?title=" + titleEnc
			,torRageUrl	= "http://torrage.com/torrent/" + HASH + ".torrent"
			,slashSplit	= href.split("/")
			,is			= linkMatches.apply({ link : href })
			,directHref
			,directMatch;
		if ( is("movietorrents.eu/") ) {
			// last checked 2012-07-25
			// movietorrents.eu/torrents-details.php?id=1421
			// movietorrents.eu/download.php?id=1421&name=Ubuntu%20iso%20file.torrent
			directMatch = href.match(/(\?|&)id=(\d+)/);
			directHref = directMatch && directMatch.length === 3 ? "http://movietorrents.eu/download.php?id="
				+ directMatch[2] + "&name=" + titleEnc + ".torrent" : null;
		} else if ( is("publichd.se/") ) {
			// last checked 2013-07-04
			// publichd.se/index.php?page=torrent-details&id=bae62a9932ec69bc6687a6d399ccb9d89d00d455
			// publichd.se/download.php?id=bae62a9932ec69bc6687a6d399ccb9d89d00d455&f=ubuntu-10.10-dvd-i386.iso.torrent
			directHref = "http://publichd.se/download.php?id=" + hash + "&f=" + titleEnc + ".torrent";
		} else if ( is("btmon.com/") ) {
			// last checked 2012-05-13
			// www.btmon.com/Applications/Unsorted/ubuntu-10.10-dvd-i386.iso.torrent.html
			// www.btmon.com/Applications/Unsorted/ubuntu-10.10-dvd-i386.iso.torrent
			directHref = href.replace(/\.html$/i, "");
		} else if ( is("torrentdownloads.me/") ) {
			// last checked 2012-06-02
			// www.torrentdownloads.me/torrent/1652094016/ubuntu-10+10-desktop-i386+iso
			// www.torrentdownloads.me/download/1652094016/ubuntu-10+10-desktop-i386+iso
			directHref = href.replace(/(\.me\/)torrent(\/)/i,"$1download$2");
		} else if ( is("kat.ph/")
			|| is("kickasstorrents.com/")
			|| is("kickmirror.com/")
			|| is("katproxy.com/")
			|| is("katmirror.com/")
			|| is("kickass.to/") ) {
			// last checked 2013-07-05
			// www.kickasstorrents.com/ubuntu-10-10-dvd-i386-iso-t4657293.html
			// torcache.net/torrent/BAE62A9932EC69BC6687A6D399CCB9D89D00D455.torrent?title=[kat.ph]ubuntu-10-10-dvd-i386
			directHref = torCacheUrl;
		//} else if ( is("h33t.to/torrent") ) {
		// last checked 2014-02-04, should work but it doesn't (checked w curl and referer + useragent set)
		// h33t.to/torrent/06197325
		// h33t.to/get/06197325
		// directHref = "http://h33t.to/get/" + slashSplit[4] + "/";
		} else if ( is("torlock.com/torrent") ) {
			// last checked 2013-08-30
			// www.torlock.com/torrent/9999999/ubuntu-10+10-desktop-i386+iso.html
			// www.torlock.com/tor/9999999.torrent
			directHref = "http://www.torlock.com/tor/" + slashSplit[4] + ".torrent";
		} else if ( is("newtorrents.info/torrent") ) {
			// last checked 2012-05-13
			// www.newtorrents.info/torrent/99999/Ubuntu-10-10-DVD-i386.html?nopop=1
			// www.newtorrents.info/down.php?id=99999
			directHref = slashSplit && slashSplit.length >= 5 ? "http://" + slashSplit[2]
				+ "/down.php?id=" + slashSplit[4] : null;
		} else if ( is("fenopy.eu/torrent")
			|| is("fenopy.se/torrent")
			|| is("fenopy.com/torrent") ) {
			// last checked 2013-07-27
			// fenopy.domain/torrent/ubuntu+10+10+dvd+i386+iso/NjMxNjcwMA
			// fenopy.domain/torrent/ubuntu+10+10+dvd+i386+iso/NjMxNjcwMA==/download.torrent
			// seems to use torcache but this works too
			directHref = href + "==/download.torrent";
		} else if ( is("extratorrent.com/torrent")
			|| is("extramirror.com/torrent")
			|| is("extratorrent.cc/torrent") ) {
			// last checked 2013-11-14
			// extratorrent.com/torrent/9999999/Ubuntu-10-10-DVD-i386.html
			// extratorrent.com/download/9999999/Ubuntu-10-10-DVD-i386.torrent
			directHref = href.replace(/\.(com|cc)\/torrent/i, ".$1/download").replace(/\.html$/i, ".torrent");
		} else if ( is("bitsnoop.com/") ) {
			// last checked 2012-05-13
			// bitsnoop.com/ubuntu-10-10-dvd-i386-q17900716.html
			// torrage.com/torrent/BAE62A9932EC69BC6687A6D399CCB9D89D00D455.torrent
			directHref = torRageUrl;
		} else if ( is("bt-chat.com/") ) {
			// last checked 2012-05-13
			// Site was malware flagged so I don't know if this still works
			// www.bt-chat.com/details.php?id=999999
			// www.bt-chat.com/download.php?id=999999
			directHref = href.replace(/\/details\.php/i, "/download.php");
		} else if ( is("1337x.org/") ) {
			// last checked 2012-05-13
			// 1337x.org/torrent/999999/ubuntu-10-10-dvd-i386/
			directHref = torCacheUrl;
		} else if ( is("torrentfunk.com/torrent/") ) {
			// last checked 2012-05-13
			// www.torrentfunk.com/torrent/9999999/ubuntu-10-10-dvd-i386.html
			// www.torrentfunk.com/tor/9999999.torrent
			directHref = slashSplit && slashSplit.length >= 5 ? "http://www.torrentfunk.com/tor/"
				+ slashSplit[4] + ".torrent" : null;
		} else if ( is("torrentstate.com/") ) {
			// last checked 2012-05-13
			// Site was down so I don't know if this still works
			// www.torrentstate.com/ubuntu-10-10-dvd-i386-iso-t4657293.html
			// www.torrentstate.com/download/BAE62A9932EC69BC6687A6D399CCB9D89D00D455
			directHref = "http://www.torrentstate.com/download/" + HASH;
		} else if ( is("torrenthound.com/hash")
			|| is("houndmirror.com/hash") ) {
			// last checked 2013-11-14
			// www.torrenthound.com/hash/bae62a9932ec69bc6687a6d399ccb9d89d00d455/torrent-info/ubuntu-10.10-dvd-i386.iso
			// www.torrenthound.com/torrent/bae62a9932ec69bc6687a6d399ccb9d89d00d455
			directHref = slashSplit[0]+slashSplit[1]+slashSplit[2]+"/torrent/" + hash;
		} else if ( is("vertor.com/torrents") ) {
			// last checked 2012-05-13
			// www.vertor.com/torrents/2191958/Ubuntu-10-10-Maverick-Meerkat-%28Desktop-Intel-x86%29
			// www.vertor.com/index.php?mod=download&id=2191958
			directHref = slashSplit && slashSplit.length >= 5 ? "http://www.vertor.com/index.php?mod=download&id="
				+ slashSplit[4] : null;
		} else if ( is("yourbittorrent.com/torrent/") ) {
			// last checked 2012-05-13
			// www.yourbittorrent.com/torrent/212911/ubuntu-10-10-desktop-i386-iso.html
			// www.yourbittorrent.com/down/212911.torrent
			directHref = slashSplit && slashSplit.length >= 5 ? "http://yourbittorrent.com/down/"
				+ slashSplit[4] + ".torrent" : null;
		} else if ( is("torrents.net/torrent") ) {
			// last checked 2012-05-13
			// www.torrents.net/torrent/9999999/Ubuntu-10-10-DVD-i386.html/
			// www.torrents.net/down/9999999.torrent
			directHref = slashSplit && slashSplit.length >= 5 ? "http://www.torrents.net/down/"
				+ slashSplit[4] + ".torrent" : null;
		} else if ( is("torrentbit.net/torrent") ) {
			// last checked 2012-05-13
			// www.torrentbit.net/torrent/1903618/Ubuntu11.04%20Desktop%20i386%20ISO/
			// www.torrentbit.net/get/1903618
			directHref = slashSplit && slashSplit.length >= 5 ? "http://www.torrentbit.net/get/"
				+ slashSplit[4] : null;
		} else if ( is("coda.fm/albums") ) {
			// last checked 2012-05-13
			// coda.fm/albums/9999
			// coda.fm/albums/9999/torrent/download?file=Title+of+torrent.torrent
			directHref = slashSplit && slashSplit.length >= 5 ? "http://coda.fm/albums/"
				+ slashSplit[4] + "/torrent/download?file=" + titleEnc + ".torrent" : null;
		} else if ( is("swesub.tv/torrents-details.php") ) {
			// swesub.tv/download.php?id=99999&name=BAE62A9932EC69BC6687A6D399CCB9D89D00D455.torrent
			// swesub.tv/torrents-details.php?id=99999
			directHref = href.replace("torrents-details.php?","download.php?") + "&name="
				+ HASH + ".torrent";
		} else if ( is("take.fm/movies") ) {
			// last checked 2012-05-13
			// take.fm/movies/999/releases/9999
			// take.fm/movies/999/releases/9999/torrent/download?file=Title+of+torrent.torrent
			directHref = slashSplit && slashSplit.length >= 7 ? "http://take.fm/movies/" + slashSplit[4]
				+ "/releases/" + slashSplit[6] + "/torrent/download?file=" + titleEnc + ".torrent" : null;
		} else if ( is("thepiratebay.sx/torrent/")
			|| is("thepiratebay.ac/torrent/")
			|| is("thepiratebay.pe/torrent/")
			|| is("thepiratebay.org/torrent/")
			|| is("thepiratebay.se/torrent/")
			|| is("pirateproxy.net/torrent/")
			|| is("pirateproxy.se/torrent/")
			|| is("piratebayproxy.se/torrent/")
			|| is("baymirror.com/torrent/")
			|| is("piratereverse.info/torrent/")
			|| is("piratebaymirror.me/torrent/") ) {
			// last checked 2014-02-04 (added .org)
			// not at all complete but these should cover it
			// thepiratebay.sx/torrent/9999999
			// torrents.thepiratebay.sx/9999999/Title+of+torrent.9999999.TPB.torrent
			directHref = slashSplit && slashSplit.length >= 5 ? "http://torrents." + slashSplit[2]
				+ "/" + slashSplit[4] + "/" + titleEnc + "." + slashSplit[4] + ".TPB.torrent" : null;
		} else if ( is("torrentcrazy.com/torrent/") ) {
			// last checked 2013-06-02
			// www.torrentcrazy.com/torrent/8487590/title.of.torrent
			// dl.torrentcrazy.com/bae62a9932ec69bc6687a6d399ccb9d89d00d455/Title+of+torrent.torrent
			directHref = slashSplit && slashSplit.length >= 6 ? "http://dl.torrentcrazy.com/" + hash
				+ "/" + titleEnc + ".torrent" : null;
		} else if ( is("rarbg.com/torrent") ) {
			// last checked 2013-07-27
			// rarbg.com/torrents/filmi/download/abcde12/torrent.html
			// rarbg.com/torrent/abcde12
			// rarbg.com/download.php?id=abcde12&f=Title+of+torrent[rarbg.com].torrent
			if ( href.match(/rarbg\.com\/torrents\/[^\/]+\/download\/[^\/]+\/torrent\.html$/i) ) {
				directHref = slashSplit && slashSplit.length === 8 ? "http://rarbg.com/download.php?id="
					+ slashSplit[6] + "&f=" + titleEnc + "%5Brarbg.com%5D.torrent" : null;
			} else if ( href.match(/rarbg\.com\/torrent\/[^\/]+\/?/i ) ) {
				directHref = slashSplit && slashSplit.length === 5 ? "http://rarbg.com/download.php?id="
					+ slashSplit[4] + "&f=" + titleEnc + "%5Brarbg.com%5D.torrent" : null;
			}
		} else if ( is("nyaa.eu/?") ) {
			// last checked 2013-06-02
			// www.nyaa.eu/?page=view&tid=999999
			// www.nyaa.eu/?page=download&tid=999999
			directHref = slashSplit && slashSplit.length >= 4
				? href.replace(/(\?|\&)page=view/,"$1page=download") : null;
		} else if ( is("torrage.com/torrent") ) {
			// torrage.com/torrent/BAE62A9932EC69BC6687A6D399CCB9D89D00D455.torrent
			directHref = href;
		} else if ( is("torcache.net/torrent") ) {
			// torcache.net/torrent/BAE62A9932EC69BC6687A6D399CCB9D89D00D455.torrent
			directHref = href;
		} else if ( is("zoink.it/torrent") ) {
			// zoink.it/torrent/BAE62A9932EC69BC6687A6D399CCB9D89D00D455.torrent
			directHref = href;
		}
		return directHref;
	}
	function getPlural (i) {
		return ( i === 1 ? "" : "s" );
	}
	function truncate (string, length) {
		var truncation = "...";
		length = length || 25;
		return string.length > length ?
			string.slice(0, length - truncation.length) + truncation : String(string);
	}
	function formatNumbers (i, roundHundreds) {
		var returnStr;
		if ( i >= 1000 ) {
			// 1.000+ , 1.100+ steps
			if ( roundHundreds ) {
				if ( i < 10000 ) {
					i = (100 * Math.round(i/100.0));
				} else if ( i >= 10000 ) {
					i = (500 * Math.round(i/500.0));
				}
			}
			returnStr = (String(i).replace(/(\d+)(\d{3})$/,"$1,$2"));
		} else {
			returnStr = String(i);
		}
		return returnStr;
	}
	function padZeroes (n, width, z) {
		z = z || "0";
		n = n + "";
		return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
	}
	function removeDocOnclick () {
		// this cookie prevents popup ads
		// wm_popundertz=1|Fri, 18 Oct 2013 03:27:11 GMT; tz=1|Fri, 18 Oct 2013 03:27:11 GMT
		var ckExpDate	= new Date( loadStartMS + (60*60*24*1000) ).toUTCString()
			,ckVal		= escape("1|"+ckExpDate)+"; expires="+escape(ckExpDate)+"; path=/";
		// Why remove when it's better to be sure?
		if ( d.onclick ) {
			d.onclick = null;
		}
		if ( d.onmouseup ) {
			d.onmouseup = null;
		}
		if ( d.onmousedown ) {
			d.onmousedown = null;
		}
		// 2013-05-30 _wm event handler ads w/ click/mouseup + cookies
		//  Seemed simple enough at first, just create a cookie and it stops.
		//  But userScripts load After the damn things checks for it,
		//  and the event is anonymous inside a jQuery function,
		//  so the "easiest" and most maintainable way seems to be a
		//  quiet refresh if the cookie is missing.
		if ( typeof d.cookie === "string"
			&& d.cookie.indexOf("wm_popundertz") === -1 ) {
			d.cookie = "wm_popundertz="+ckVal;
			d.cookie = "tz="+ckVal;
			location.reload();
		}
	}
	function handlePopStates (data) {
		// This solves the issue in <= v2.2.7 where you couldn't use
		//   the browsers back/forward buttons.
		// webkit popstate "fire on load" fix
		if ( !hpPopped && d.location.href == hpInitialURL ) return;
		if ( data.state && data.state.tz_aio_ajax && data.state.url ) {
			// If this history state contains an tz_aio_ajax url, go to it
			d.location.href = data.state.url;
		} else if ( data && !data.state && data.target ) {
			// this is sortof useless but it stays none the less
			d.location.href = data.target.document.location.href;
		}
	}
	function comLinksReplaceFunc ($1) {
		return "<a rel='noreferrer' href='" + getNoReferrerUrl($1) + "'>" + $1 + "</a>";

	}
	function linkifyCommentLinks (opts) {
		var delayInt;
		if ( opts.linkComments ) {
			delayInt = setTimeout(function(){
				// Linkify visible comments
				if ( els.$comments.length ) {
					els.$comments.find(".com:visible").each(function (i, el) {
						$(el).replaceText(cache.comLinksPatt, comLinksReplaceFunc);
					});
				}
			}, 750);
		}
	}
	function getDividedTrackers (arr) {
		var newString	= ""
			,next		= null
			,i;
		for (i = 0; i < arr.length; i++) {
			next = (i+1) < arr.length ? arr[(i+1)] : "";
			if ( cleanUrlCompare(next, "http") == cleanUrlCompare(arr[i], "udp") ) {
				newString += arr[i] + "\n";
			} else {
				newString += arr[i] + "\n\n";
			}
		}
		newString = newString.replace(/\n+$/,"");
		return newString;
	}
	function sortTrByProtocol (_arr) {
		// finalTrackerSorting
		var newArr		= []
			,udpPopped	= null  // udpPopped is now the http backup
			,prev		= null
			,i;
		for ( i = 0; i < _arr.length; i++ ) {
			udpPopped = null;
			prev = i >= 1 ? _arr[(i-1)] : "";
			if ( prev.replace(/^https?/,"") == _arr[i].replace(/^udp/,"") ) {
				udpPopped = newArr.pop();
				newArr.push(_arr[i]);
				newArr.push(udpPopped);
			} else {
				newArr.push(_arr[i]);
			}
		}
		return newArr;
	}
	function extractLeveledArray ( arr, level ) {
		var returnArr = []
			,i
			,errMsg;
		for ( i = 0; i < arr.length; i++ ) {
			if ( arr[i] && arr[i][level] ) {
				returnArr.push( arr[i][level] );
			} else {
				errMsg = "[extractLeveledArray] couldn't extract that level!";
				sendLog(errMsg);
				throw new Error(errMsg);
			}
		}
		return returnArr;
	}
	function doDirectTorrentLink (index, link) {
		var dlink = link && link.href ? getDirectTorrentLinks(link.href) : null;
		if ( dlink ) {
			$(link).before("<a href='" + dlink + "' class='" + tz.usc.slug
				+ "_dllink' target='_blank'><em>Download&#160;.torrent</em></a>");
		}
	}
	function setStorageOptions (storeObj, callback) {
		var returnSavedValue;
		if ( storeObj ) {
			// pass though new values that are to be saved, ex. version (2.1.0)
			storeObj = __.defaults(storeObj, tz.usc);
			GM_setValue(tz.storageName, JSON.stringify(storeObj));
			returnSavedValue = getGMstorage(tz.storageName);
		// reset values
		} else if ( !storeObj ) {
			GM_deleteValue(tz.storageName);
		}
		if ( typeof callback === "function" ) {
			return callback(returnSavedValue);
		}
	}
	function getGMstorage (key) {
		var value		= GM_getValue(key, false)
			,converted	= {};
		if ( value && /^\s*\{/.test(value) && /\}\s*$/.test(value) ) {
			converted = JSON.parse(value);
		}
		return converted;
	}
	function unselectSelection () {
		// be nice, unselect the selected text
		getSelection().collapseToStart();
	}
	function noModKeys (i) {
		return !!( !i.ctrlKey && !i.shiftKey && !i.altKey && !i.metaKey );
	}
	function cleanUrlCompare (url, type) {
		var cleanUrl;
		if ( type === "http" ) {
			cleanUrl = url.replace(cache.httpPatt,"");
		} else if ( type === "udp" ) {
			cleanUrl = url.replace(cache.udpPatt,"");
		}
		cleanUrl = cleanUrl.replace(/\/$/,"").replace(/:80\/?/,"");
		return cleanUrl || url;
	}
	function zipString (s) {
		var returnStr = s ? String(s).replace(/^\s+|\s+$/g, "") : s;
		return String(returnStr);
	}
	function getHoursPast (then, now) {
		then = +then;
		now = now || new Date().getTime();
		return Math.ceil((+now - then) / 1000 / 60 / 60);
	}
	function validUserInput (urls) {
		var returnBool = true
			,checkArray
			,i;
		// pass through empty values
		if ( urls.match(/\S/) ) {
			checkArray = __.compact(zipString(urls).split(/\s+/));
			for ( i = 0; i < checkArray.length; i++ ) {
				if ( !zipString(checkArray[i]).match(cache.matchUrlPatt) ) {
					returnBool = false;
					break;
				}
			}
		}
		return returnBool;
	}
	function isAnyInputFocused () {
		var activeEl = $(d.activeElement);
		if ( activeEl.length && activeEl[0].nodeName
			&& activeEl[0].nodeName.toLowerCase().match(/(?:input|textarea)/)
			&& !(activeEl.parents("div:eq(0)").length && activeEl.parents("div:eq(0)")[0].id
				&& activeEl.parents("div:eq(0)")[0].id.toLowerCase().match(/_copy_tr_textarea/) ) ) {
			return true;
		} else {
			return false;
		}
	}
	function getNodeNumber (nodeEl, getNum) {
		var getNumber	= getNum !== undefined ? getNum : true
			,numberMatch= nodeEl && nodeEl.textContent ? nodeEl.textContent
				.replace(cache.nonNumberishPatt,"").match(cache.numberFormulaPatt) : null
			,numberConv	= numberMatch && numberMatch.length === 2 ? Number(numberMatch[1]) : 0
			,numberStr	= String(numberConv)
			,num		= 0;
		if ( getNumber && numberConv && !isNaN(numberConv) ) {
			num = numberConv;
		} else if ( !getNumber ) {
			num = numberStr;
		}
		return num;
	}
	function sortTrackers (a, b) {
		var i = 0;
		if ( a[0] > b[0] ) {
			i = 1;
		} else if ( a[0] < b[0] ) {
			i = -1;
		}
		return i;
	}
	function isWindowsOS () {
		if ( navigator && ((navigator.platform && (/win/i).test(navigator.platform))
			|| (navigator.userAgent && (/windows/i).test(navigator.userAgent))) ) {
			return true;
		}
	}
	function getMeta (patt, index) {
		var matchObject = scriptSource.match(patt)
			,returnStr;
		if ( matchObject && matchObject.length >= (index+1) ) {
			returnStr = String(matchObject[index]);
		} else {
			sendLog("[getMeta] " + patt.source + " did not find a match!");
		}
		return returnStr;
	}
	function getMagnetUrl (hash, title, trackers, htmlEnc) {
		var returnStr = cache.magnetURI + hash + "&dn="
				+ encodeURIComponent(title) + "&tr="
			,trackerStr = encodeURIComponent(zipString(trackers).replace(/\n+/g,"&tr="))
				.replace(/\%26tr\%3D/g, "&tr=");
		returnStr += trackerStr;
		if ( htmlEnc ) {
			returnStr = __.escape(returnStr);
		}
		return returnStr;
	}
	function getHelpHtml () {
		var htmlArr = [ "<p><b>" + tz.usc.name + " UserScript</b></p>"
			,"<ul id='" + tz.usc.slug + "_help'>"
			,"<li>Installed: v" + tz.usc.version + "</li>"
			,"<li>Homepage: <a href='" + tz.usc.link + "'>" + tz.usc.link + "</a></li>"
			,"<li>On Github: <a href='" + tz.usc.gitHub + "'>" + tz.usc.gitHub + "</a></li>"
			,"<li>Changelog: <a href='" + tz.usc.gitHub + "blob/master/Changelog.md'>"
			,  tz.usc.gitHub + "blob/master/Changelog.md</a></li>"
			,"<li>Report issues and feature requests here: <a href='" + tz.usc.gitHubIssues + "'>"
			,tz.usc.gitHubIssues + "</a></li>"
			,"<li>Built using <a href='http://www.jquery.com/'>jQuery</a>, "
			,"<a href='http://underscorejs.org/'>underscore.js</a> "
			,"&amp; the <a href='http://github.com/cowboy/jquery-replacetext/'>jQuery replaceText Plugin</a>.</li>"
			,"<li>Keyboard Shortcuts<ul>"
			,"<li><kbd>'C'</kbd> : " + (typeof GM_setClipboard === "function"
				? "Copy all the trackers" : "Toggle the tracker box") + ".</li>"
			,"<li><kbd>'D'</kbd> : Trigger the Magnet-link.</li>"
			,"<li><kbd>'SHIFT + D'</kbd> : Download the fist torrent-file listed.</li>"
			,"<li><kbd>'&larr; &rarr;'</kbd> : Navigate search results pages (Left arrow Right arrow).</li>"
			,"<li><kbd>'SHIFT + &rarr;'</kbd> : Next episode/season.</li>"
			,"<li><kbd>'SHIFT + &larr;'</kbd> : Previous episode/season.</li>"
			,"<li><kbd>'ESC'</kbd> : General exit/close.</li>"
			,"</ul></li></ul>"
		];
		return htmlArr.join("");
	}
	function getSettingsHtml (opts, trackersString) {
		var tzCl				= tz.usc.slug
			,checkHighlight		= opts.searchHighlight ? " checked='checked' " : " "
			,checkAds			= opts.removeAds ?       " checked='checked' " : " "
			,checkCommentLinks	= opts.linkComments ?    " checked='checked' " : " "
			,checkAjaxSorting	= opts.ajaxedSorting ?   " checked='checked' " : " "
			,checkForceHTTPS	= opts.forceHTTPS ?      " checked='checked' " : " "
			,copyBuiltInTrLink	= typeof GM_setClipboard === "function"
				? " <em>If you need the built-in list that is baked into"
				+ " the userscript, <a id='" + tzCl + "_copy_built_in_trackerlist' href='#'>click here</a>"
				+ " to copy that list.</em>" : ""
			,versionStr			= tz.usc.version + " (" + tz.usc.date + ")"
			,htmlArr			= [ "<p class='generic " + tzCl + "_info_p' style='"
				,"background-image:url("+ tz.usc.icon + ");'>"
				,"<a href='" + tz.usc.link + "'>Torrent All-in-One</a> "
				,versionStr + " &mdash; Keyboard shortcuts? Learn about them <a href='"
				,"/help#" + tzCl + "_help'>here</a>. <br>"
				,"Like this userscript? Then please take a minute to rate and/or review this on <br>"
				,"<a href='" + tz.usc.link + "'>userscipts.org</a>. Also hosted on "
				,"<a href='" + tz.usc.gitHub + "'>GitHub</a>, please report all "
				,"issues and bugs <a href='" + tz.usc.gitHubIssues + "'>here</a>.</p>"
				,"<form id='" + tzCl + "_settings_submit' class='"
				,tzCl + "_settings_form profile' method='get' action='"
				,tz.page.path + "'><fieldset><legend>TzAio Settings</legend>"
				,"<p class='" + tzCl + "_main_radioselect'><input type='checkbox' name='"
				, tzCl + "_forceHTTPS' value='forceHTTPS'" + checkForceHTTPS + "id='" + tzCl + "_forceHTTPS' />"
				,"<label for='" + tzCl + "_forceHTTPS' title='This will redirect all pages to secure SSL, "
				,"beware that if HTTPS is unavailable, you have to try another mirror and turn this option off again. "
				,"That`s why this option is turned off by default.'>Force HTTPS</label>"
				,"<input type='checkbox' name='" + tzCl + "_removeAds' value='removeAds'"
				,checkAds + "id='" + tzCl + "_removeAds' />"
				,"<label for='" + tzCl + "_removeAds' title='This will hide all ads, including "
					+ "image ads, flash-based ads, and linked text ads. If you still see an ad, "
					+ "it is probably brand new and still not known to this script.'>Hide Ads</label>"
				,"<input type='checkbox' name='" + tzCl + "_searchHighlight' value='searchHighlight' "
				,"id='" + tzCl + "_searchHighlight'" + checkHighlight + " />"
				,"<label for='" + tzCl + "_searchHighlight' title='This is what highlights all "
					+ "results and makes the background for each row change color. You might "
					+ "want to turn this option off if your computer is very old, since this "
					+ "is the most time consuming part of this script.'>Colorful results</label>"
				,"<input type='checkbox' name='" + tzCl + "_ajaxedSorting' value='ajaxedSorting'"
				,checkAjaxSorting + "id='" + tzCl + "_ajaxedSorting'>"
				,"<label for='" + tzCl + "_ajaxedSorting' title='This feature turns on ajax for "
					+ "paged searchresults, sorting and episode links. The advantage is that it "
					+ "is some what faster, and puts less stress on the webserver."
					+ "'>Ajaxed sorting</label>"
				,"<input type='checkbox' name='" + tzCl + "_linkComments' value='linkComments'"
				,checkCommentLinks + "id='" + tzCl + "_linkComments'>"
				,"<label for='" + tzCl + "_linkComments' title='This feature looks for any link-like "
					+ "text in each user comment and converts it to real, clickable links."
					+ "'>Fix comment links</label></p>"
				,"<label for='" + tzCl + "_default_trackers_textarea'>Default trackerlist</label>"
				,"<textarea rows='6' name='track' class='i' id='" + tzCl + "_default_trackers_textarea' wrap='off'>"
				,trackersString + "</textarea><p>Optional. Default trackerlist (these are added to all torrents\' "
				,"trackers, if absent). Note that these are combined with the torrents own trackers, and "
				,"after that duplicates are removed, they get sorted by domain, and finally grouped "
				,"with any http backup protocols." + copyBuiltInTrLink + "</p>"
				,"<label for='" + tzCl + "_default_searchengines_textarea'>Search engines list</label>"
				,"<textarea id='" + tzCl + "_default_searchengines_textarea' wrap='off' "
				,"rows='6' name='searching' class='i'>" + (opts.searchEngines.join("\n"))
				,"</textarea><p>Optional. Search engines for the select-to-search feature (title|url formatting, "
				,"use <code>%s</code> to indicate keyword, and <code>_</code> to indicate a space). "
				,"<em>How do I use it?</em> &mdash; On the torrent page, select some text in the title "
				,"with the name of the torrent, and the links listed here will appear as links underneith.</p>"
				,"<label for='" + tzCl + "_custom_css_textarea'>Custom CSS</label>"
				,"<textarea id='" + tzCl + "_custom_css_textarea' wrap='off' rows='6' "
				,"name='custom_css' class='i'>" + (opts.customCss.join("\n")) + "</textarea>"
				,"<p>Optional. Edit this if you want to change the layout further, applies to all pages.</p>"
				,"<label for='" + tzCl + "_exclude_filter_input'>Exclude filter</label>"
				,"<input type='text' class='i' id='" + tzCl + "_exclude_filter_input' "
				,"name='" + tzCl + "_exclude_filter_input' value='" + opts.excludeFilter + "' "
				,"placeholder='keyword1,keyword2,keyword3' /><p>Optional. If you want to hide "
				,"certain torrents (based on name), enter some key phrases here (comma seperated)."
				," Remember that they are <em>not</em> case-sensitive, and that spaces will match any letter."
				," Also note that before applying the filter, any 2 or more spaces in the title are replaced by one, "
				,"that makes things a whole lot easier. Advanced: This supports "
				,"<a href='http://www.regular-expressions.info/javascript.html' target='_blank'>RegExp</a> too"
				,", to use it, type your pattern inside 2 forward slashes, ex: "
				,"<code>/(EpicMealTime|\\s(hd)?Cam(rip)?(\\s|$))/</code></p>"
				,"<div class='s'><a href='#' id='" + tzCl + "_settings_reset'><span>Reset?</span></a>"
				,"<input type='submit' value='Save' name='save'></div></fieldset></form>"
			];
		return htmlArr.join("");
	}
	function getSelected () {
		var t = "";
		if ( typeof getSelection === "function" ) {
			t = getSelection();
		} else if ( d.getSelection ) {
			t = d.getSelection();
		} else if ( d.selection ) {
			t = d.selection.createRange().text;
		}
		// OR, (w||d).getSelection().anchorNode.nodeValue = the targets text node,
		// counting the node that was the start of the selection.
		// anchordNode is null if no selection, nodeValue null
		// if unable to get selection
		return t;
	}
	function getNoReferrerUrl (url) {
		// This is the way you remove the referer; we know all new-ish browsers
		// understand these data uris, and that Firefox doesn't (yet) respect
		// the standardized(?) rel='noreferrer' tag.
		// But removing the referrer is important for the owners of Torrentz,
		// so doing our part is the way to go.
		var encUrl = encodeURIComponent(url);
		return (isTM ? url : "data:text/html,&lt;html&gt;&lt;meta http-equiv=\x22refresh\x22 "
			+ "content=\x220; url=" + encUrl + "\x22&gt;&lt;body&gt;&lt;a href=\x22" + encUrl
			+ "\x22&gt;" + __.escape(url) + "&lt;/a&gt;&lt;/body&gt;&lt;/html&gt;");
	}
	function isVerifiedDownload (votebox) {
		var returnDigit		= 0
			,negativeVotes	= 0
			,negI			= -1
			,statusDigit
			,negativeEls
			,positiveVotes
			,negativeElsLen
			,negMatch;
		if ( votebox && votebox.length ) {
			statusDigit = getNodeNumber(votebox.find(".status")[0], true);
			if ( statusDigit >= 3 ) {
				returnDigit = 1;
			} else if ( statusDigit < 0 ) {
				returnDigit = -1;
			} else {
				// count the other boxes and compare
				positiveVotes = getNodeNumber(votebox.find(".up")[0], true);
				negativeEls = votebox.find(".replist").has("a + a + a");
				negativeElsLen = negativeEls.length;
				while ( (++negI < negativeElsLen) ) {
					negMatch = getNodeNumber(negativeEls[negI], true);
					negativeVotes = negativeVotes + negMatch;
				}
				if ( positiveVotes >= 7 && (positiveVotes+negativeVotes) >= 2 ) {
					returnDigit = 1;
				}
			}
		}
		// Debug log
		// sendLog( "statusDigit = " + statusDigit + "\nreturnDigit = " + returnDigit
		// 	+  ( typeof positiveVotes === "number" ? "\n( positiveVotes >= 7 && (positiveVotes+negativeVotes) >= 2 )\n =  "
		// 	+ "( " + String(positiveVotes) + " >= 7 && (" + String(positiveVotes)
		// 	+ "+" + String(negativeVotes) + ") >= 2 )" + "\n >> "
		// 	+ String(( positiveVotes >= 7 && (positiveVotes+negativeVotes) >= 2 )) : "") );
		return returnDigit;
	}
	function setupCopyTextArea (text) {
		var tzCl        = tz.usc.slug
			,textareaHTML = "<div id='" + tzCl + "_copy_tr_textarea' class='" + tzCl + "_copy_textarea'>"
				+ "<textarea readonly='readonly' cols='40' rows='10' wrap='off'></textarea></div>";
		cache.copyTrackersLinkHeight = els.$copyTrackersLink.outerHeight();
		els.$body.append(textareaHTML);
		els.$copyTextArea = $("#" + tzCl + "_copy_tr_textarea");
		els.$copyTextArea.find("textarea").val(text);
		els.$copyTrackersLink.on("click", function () {
			toggleCopyBox(1);
			return false;
		});
	}
	function setupSelectToSearch () {
		var discardMatch = els.$titleEl[0].textContent.match(cache.selectTrashPatt)
			,tzCl        = tz.usc.slug;
		els.$titleEl.after("<div id='" + tzCl + "_search_bar' class='"
			+ tzCl + "_searchbar'></div>");
		els.$searchBar = $("#" + tzCl + "_search_bar");
		cache.discardThisForSelect = discardMatch ? discardMatch[0] : "";
		els.$titleEl
			.attr("title","Select the text in this title to start searching...")
			.bind("mouseup", fillSearchBar)
			.bind("mousedown", function (event) {
				els.$searchBar.empty();
				els.$body.removeClass("search_ready");
			})
		;
	}
	function handleMagnetClicks (event) {
		if ( !event && !isAnyInputFocused() ) {
			// :active css class
			els.$magnetLink.addClass("active");
			location.href = els.$magnetLink[0].href;
			return false;
		} else if ( event ) {
			// illogical, but this removes the override class active
			els.$magnetLink.removeClass("active");
		}
	}
	function makeTrackersObject (trackersArray, userTrackers) {
		var slashMatch
			,cleanHostPatt		= /^[^\/]*\/+/i
			,cleanHostPattTwo	= /(?::[0-9]+|\/).*$/i
			,ipMatch			= /[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+/
			,sortingArray		= []
			,cleanHost
			,domainSplit
			,domainSplitLen
			,sortedString
			,newArray
			,i;
		for ( i = 0; i < trackersArray.length; i++ ) {
			// count slashes
			slashMatch = trackersArray[i].split("/").length - 1;
			if ( slashMatch >= 2 && trackersArray[i].indexOf("://") !== -1 ) {
				// safe to delete beginning
				cleanHost = trackersArray[i].replace(cleanHostPatt,"");
			} else {
				cleanHost = trackersArray[i];
			}
			cleanHost = cleanHost.replace(cleanHostPattTwo,"");
			domainSplit = cleanHost.split(".");
			domainSplitLen = domainSplit.length;
			// !example.com
			if ( domainSplitLen > 2 ) {
				// example.co.uk
				if ( cleanHost.match(cache.twoPartDomainPatt) ) {
					cleanHost = domainSplit[(domainSplitLen-3)] + "." + domainSplit[(domainSplitLen-2)]
						+ "." + domainSplit[(domainSplitLen-1)];
				// !127.0.0.1
				} else if ( !cleanHost.match(ipMatch) ) {
					cleanHost = domainSplit[(domainSplitLen-2)] + "." + domainSplit[(domainSplitLen-1)];
				}
			}
			sortingArray.push( [ cleanHost.toLowerCase(), trackersArray[i] ] );
		}
		newArray = extractLeveledArray( sortingArray.sort(sortTrackers), 1 );
		newArray = sortTrByProtocol( newArray );
		sortedString = getDividedTrackers( newArray );
		if ( !userTrackers ) {
			cache.userString = sortedString;
			cache.userArray = newArray;
			return {
				userString : sortedString,
				userArray  : newArray
			};
		} else if ( userTrackers ) {
			return {
				allString  : sortedString,
				allArray   : newArray,
				userString : userTrackers.userString,
				userArray  : userTrackers.userArray
			};
		}
	}
	function ajaxResultsHandler (event) {
		var cachedSearchEl, i;
		event.forEach(function (mutation) {
			if ( mutation.addedNodes) {
				for ( i = 0; i < mutation.addedNodes.length; i++ ) {
					if ( mutation.addedNodes[i] && mutation.addedNodes[i].className
						&& mutation.addedNodes[i].className.indexOf("results") !== -1
						&& mutation.addedNodes[i].tagName && mutation.addedNodes[i].tagName === "DIV" ) {
						cachedSearchEl = $(mutation.addedNodes[i]);
						if ( !cachedSearchEl.find(".meta-info").length ) {
							cache.ajaxTimer = (new Date().getTime());
							initSearchPage(cachedSearchEl, tz.storedSettings, function (target) {
								// DEBUG callback
								sendLog((target.length) + " ajaxed div." + target[0].className + " - Exec: "
									+ ((new Date().getTime())-cache.ajaxTimer) + "ms");
							});
						}
					}
				}
			}
		});
	}
	function handleSettingsSubmit (event) {
		event.preventDefault();
		var tzCl				= tz.usc.slug
			,disabledInput		= els.$settingsForm.find("input[type='submit']")
				.prop("disabled", true)
			,invalidItemNames	= ""
			,submittedOptions	= {}
			,saveTrackers
			,saveSearchEngines
			,saveCustomCss
			,confirmNewStorageRules
			,trackersVal
			,searchEnginesVal
			,customCssVal
			,excludeFilterVal
			,trValid
			,seValid
			,exValid;
		els.$settingsForm.find(":checkbox").each(function (index, element) {
			var settingName = element.name.replace(tz.usc.slug + "_","")
				,settingValue = $(element).is(":checked");
			submittedOptions[settingName] = settingValue;
		});
		els.$defTrackersTextArea = $("#" + tzCl + "_default_trackers_textarea");
		els.$defSearchEngTextArea = $("#" + tzCl + "_default_searchengines_textarea");
		els.$customCssTextArea = $("#" + tzCl + "_custom_css_textarea");
		els.$excludeFilterInput = $("#" + tzCl + "_exclude_filter_input");
		trackersVal = els.$defTrackersTextArea.val();
		searchEnginesVal = els.$defSearchEngTextArea.val();
		customCssVal = els.$customCssTextArea.val();
		excludeFilterVal = els.$excludeFilterInput.val();

		// Validate inputs to help out user
		trValid = validUserInput(trackersVal);
		// shortest match = s|http://i.io/%s
		seValid = (!searchEnginesVal.match(/\S/i) || (validUserInput(searchEnginesVal)
			&& searchEnginesVal.indexOf("%s") >= 13 && searchEnginesVal.indexOf("|") > 0) );
		exValid = validateRegExp(excludeFilterVal);
		
		if ( seValid && trValid && exValid ) {
			saveTrackers = trackersVal.split(/\s+/);
			saveTrackers = __.compact(saveTrackers);
			saveSearchEngines = searchEnginesVal.split(/\s+/);
			saveSearchEngines = __.compact(saveSearchEngines);
			saveCustomCss = customCssVal.split(/\n/);
			submittedOptions.defaultTrackers = saveTrackers;
			submittedOptions.searchEngines = saveSearchEngines;
			submittedOptions.customCss = saveCustomCss;
			submittedOptions.excludeFilter = excludeFilterVal.replace(/(?:^\s*\,|\,\s*$)/g,"")
				.replace(/\,{2,}/g,",").replace(/(?:^\s+|\s+$)/g,"");
			if ( cache.freshUser ) {
				confirmNewStorageRules = confirm("Settings are now being stored and used "
					+ "across all Torrentz's domains.\nSave and continue?");
			}
			if ( !cache.freshUser || confirmNewStorageRules ) {
				setStorageOptions(submittedOptions, function (thisWasSaved) {
					// log before anything could break, as a debug toll for anyone to submit
					sendLog( "thisWasSaved" );
					sendLog(thisWasSaved);
					if ( thisWasSaved ) {
						sessionStorage.setItem(tz.usc.slug + "_SS_useroptions_saved", "true");
						location.href = tz.page.href;
					} else {
						disabledInput.prop("disabled", false);
						alert("You broke something! Try reloading the page..."
							+ cache.bugReportMsg);
						sendLog("GM_getValue(" + tz.storageName + ") returned false! "
							+ "Nothing stored, logging that plus 'submittedOptions'");
						sendLog("Failed! > submittedOptions");
						sendLog(submittedOptions);
						return;
					}
				});
			} else {
				disabledInput.prop("disabled", false);
			}
		} else {
			invalidItemNames = !seValid ? invalidItemNames + " 'Search engines list'," : invalidItemNames;
			invalidItemNames = !trValid ? invalidItemNames + " 'Default trackerlist'," : invalidItemNames;
			invalidItemNames = !exValid ? invalidItemNames + " 'Exclude filter (regexp)'," : invalidItemNames;
			alert("Invalid input in the " + invalidItemNames + " check your spelling!"
				+ cache.bugReportMsg);
			disabledInput.prop("disabled", false);
		}
		return false;
	}
	function bindAjaxLinks ($element) {
		els.$ajaxedResult = $element;
		els.$ajaxLinks = $element
			.find(" > div:eq(0) a, > h3:eq(0) a, > p:last a")
			.on("click", function (event) {
				var validLink
					,relMatch
					,absLink
					,$html
					,newTitle;
				if ( this.href ) {
					relMatch = this.href.match(/https?\:\/\/[^\/]+(\/.*)/);
					// prevent leaking of unwanted ajax links, shouldn't happen but it's good to remember
					validLink = relMatch && relMatch.length === 2 && relMatch[1] && relMatch[1].indexOf("/i?") !== 0
						&& relMatch[1].indexOf("/feed") !== 0 ? relMatch[1] : undefined;
					if ( validLink ) {
						absLink = relMatch[0];
						cache.ajaxTimer = new Date().getTime();
						els.$body.removeClass(tz.usc.slug + "_colorized");
						// changed from $.load() to enable getting the pages title
						$.ajax({
								url       : absLink
								,dataType : "html"
							}).fail(function () {
								sendLog("Sorry, there was an error fetching the page '" + absLink + "'", function () {
									location.href = absLink;
								});
							}).done(function (html) {
								$html = $(html);
								newTitle = $html.filter("title").text();
								if ( history.pushState ) {
									history.pushState( { tz_aio_ajax : true, url : absLink }, newTitle, absLink);
								}
								tz.page = getPageParmaters();
								tz.page.title = newTitle;
								tz.page.titleEnc = encodeURIComponent(newTitle.replace(/\'/g,"_"));
								$("title").html(newTitle);
								els.$body.find("div.results:eq(0)").html($html.filter("div.results:eq(0)").html());
								els.$ajaxedResult = $("body").find("div.results:eq(0)");
								initSearchPage(els.$ajaxedResult, tz.storedSettings, function (target) {
									// calling unsafeWindow.scrollTop gives us 0
									if ( typeof window === "object"
										&& ($(window).scrollTop() - els.$ajaxedResult.offset().top) > 0 ) {
										els.$bodyANDhtml.animate({ scrollTop : 0 }, "slow");
									}
									if ( els.$theSearchBox.length ) {
										els.$theSearchBox.parents("form:first").prop("action", tz.page.path);
										if ( tz.page.search ) {
											var filterMatch = tz.page.search.replace(/^\?(?:[a-z]+\=)?\+?(.+)/i,"$1")
												.match(/^([^\&]+)/i);
											if ( filterMatch && filterMatch.length === 2 && filterMatch[1] ) {
												els.$theSearchBox.val(decodeURIComponent(filterMatch[1]
													.replace(/\+/g," ")));
											}
										}
									}
									bindAjaxLinks(target);
									sendLog((target.length) + " ajaxed div." + target[0].className + " - Load+Exec: "
										+ ((new Date().getTime())-cache.ajaxTimer) + "ms");
								});
							})
						;
						return false;
					}
				}
			})
		;
	}
	function lastAction () {
		if ( !cache.lastActionDone ) {
			cache.lastActionDone = true;
			if ( sessionStorage.getItem(tz.usc.slug + "_SS_useroptions_saved") === "true" ) {
				// scroll up bacause user just saved options and window is def. scrolled down a bit
				els.$bodyANDhtml.animate({ scrollTop : 1 }, 0, function () {
					sessionStorage.removeItem(tz.usc.slug + "_SS_useroptions_saved");
					if ( !cache.freshUser ) {
						els.$body.addClass(tz.usc.slug + "_settings_saved");
						setTimeout(function () {
							els.$body.removeClass(tz.usc.slug + "_settings_saved");
						}, 5000);
					}
					els.$bodyANDhtml.animate({ scrollTop : 0 }, 0);
				});
			}
			return sendLog("Exec: " + ((new Date().getTime())-execStartMS) + "ms (not inc ajax)");
		}
	}
	function toggleCopyBox (cmd) {
		var linkHeight = cache.copyTrackersLinkHeight
			,isVisible
			,copyThis;
		if ( els.$copyTextArea && els.$copyTextArea.length ) {
			if ( typeof GM_setClipboard === "function" && cmd !== 2 ) {
				// Fix carriage returns before copying, and only for Windows users;
				// I noticed that certain clients don't like \r\n in the text
				// when on a Linux platform, so try and check for OS first
				copyThis = els.$copyTextArea.find("textarea").val();
				// note! jQuery strips out all \r in .val()
				if ( isWindowsOS() ) {
					// TamperMonkey (on Linux and Windows) < v3.4.3525 seems to remove \r ([CR]) chars,
					// a fix for this has been released in their latest Beta
					// http://tampermonkey.net/changelog.php?version=3.4.3525&ext=gcal
					copyThis = copyThis.replace(/\n/g,"\r\n");
				}
				GM_setClipboard(copyThis);
				if ( els.$copyTrackersLink && els.$copyTrackersLink.length ) {
					els.$copyTrackersLink.addClass("active");
					els.$copyTrackersLink.text(els.$copyTrackersLink.text().replace("Copy ","Copied "));
				}
			} else if ( els.$copyTrackersLink && els.$copyTrackersLink.length ) {
				// single torrent
				isVisible = els.$copyTextArea.is(":visible");
				if ( (!isVisible && cmd === 0) || cmd === 1 ) {
					els.$copyTextArea.css({
						top : (els.$copyTrackersLink.offset().top + linkHeight) + "px",
						left : (els.$copyTrackersLink.offset().left) + "px"
					}).stop().show(250).find("textarea")[0].select();
				} else if ( (isVisible && cmd === 0) || cmd === 2 ) {
					// Hide it
					els.$copyTextArea.stop().hide(200).find("textarea")[0].blur();
				}
			}
		}
	}
	function updateExcludeLog ($target, count, resultsList) {
		var logHtml = count + " result" + getPlural(count) + " removed using TzAio filter";
		logHtml += ($target.parents("dt:eq(0)").text().match(/\S/) ? "&nbsp;&ndash;&nbsp;" : "");
		$target.html(logHtml).one("click", function () {
			$(this).css("cursor", "default").parents("div.results:eq(0)").find("dl:hidden").css("display", "block");
		});
	}
	function handleKeyUps (e, unselected) {
		var noMods		= noModKeys(e)
			,key		= +e.which
			,safePlace	= !isAnyInputFocused()
			,tzCl		= tz.usc.slug
			,newTabOpt
			,torrentLinks
			,nextPrevLink;
		if ( !isNaN(key) && safePlace ) {
			if ( unselected || (key === 27 && noMods) ) {
				// 'ESCAPE'
				if ( els.$settingsForm.hasClass("expand") ) {
					els.$settingsLink.trigger("click");
					els.$bodyANDhtml.animate({
						scrollTop : 1
					}, 0, function () {
						els.$bodyANDhtml.animate({ scrollTop : 0 }, 0);
					});
				}
				if ( cache.isSingle ) {
					els.$magnetLink.removeClass("active");
					els.$titleEl.trigger("mousedown");
					els.$searchBar.empty();
					els.$body.removeClass("search_ready");
					toggleCopyBox(2);
					// strange range error in Chrome but nothing breaks
					try {
						unselectSelection();
					} catch (error) {
						// sendLog("[unselectSelection] Chrome unselect bug?")
						// sendLog(error);
					}
				}
			} else if ( cache.isSingle ) {
				if ( key === 68 &&  __.isEqual(e.shiftKey, true) ) {
					// first direct torrent file
					torrentLinks = $("." + tzCl + "_dllink");
					if ( torrentLinks.length ) {
						newTabOpt = isTM ? { active : true, insert : true } : isSC ? true : null;
						// trigger a random torrent link each time
						GM_openInTab(torrentLinks[(Math.floor(Math.random()*(torrentLinks.length)))].href, newTabOpt);
					} else {
						alert("No .torrent file to download!");
					}
				} else if ( key === 68 && noMods ) {
					// 'd'
					handleMagnetClicks(false);
				} else if ( key === 67 && noMods ) {
					// 'c'
					toggleCopyBox(0);
				}
			} else if ( cache.isSearch  ) {
				if ( key === 37 && noMods  ) {
					nextPrevLink = els.$body.find(".results a[rel='prev']:eq(0)");
				} else if ( key === 39 && noMods ) {
					nextPrevLink = els.$body.find(".results a[rel='next']:eq(0)");
				} else if ( key === 37 && __.isEqual(e.shiftKey, true) ) {
					e.preventDefault();
					nextPrevLink = els.$body.find(".results ." + tzCl + "_tv_prev_episode");
					nextPrevLink = nextPrevLink && nextPrevLink.length
						? nextPrevLink : els.$body.find(".results ." + tzCl + "_tv_prev_season");
				} else if ( key === 39 && __.isEqual(e.shiftKey, true) ) {
					e.preventDefault();
					nextPrevLink = els.$body.find(".results ." + tzCl + "_tv_next_episode");
					nextPrevLink = nextPrevLink && nextPrevLink.length
						? nextPrevLink : els.$body.find(".results ." + tzCl + "_tv_next_season");
				}
				if ( nextPrevLink && nextPrevLink.length ) {
					if ( tz.storedSettings.ajaxedSorting ) {
						nextPrevLink.trigger("click");
					} else {
						location.href = nextPrevLink[0].href;
					}
				}
			}
		}
	}
	function removeAds (page, userOpts, element, callback) {
		var adRemovedClass	= "removed_ad"
			,domain			= tz.page.domain
			,$tmpLink		= $("<a/>", { href : "/" })
			,$adIframes		= els.$body.find("> iframe")
			,frontPageAd;
		if ( userOpts.removeAds ) {
			if ( page === "common" ) {
				// also remove common ads here once
				els.$body.addClass("no_ads");
				els.$body.find("iframe[src*='clkads.com']").parents("div[style]:eq(0)").addClass(adRemovedClass);
				// removing iframes is tricky, look out for lastPass and such
				els.$body.find("p.generic").has("iframe").addClass(adRemovedClass);
				els.$body.find(" > div").has("a[href*='btguard.com/'] img").addClass(adRemovedClass);
				if ( $adIframes.length ) {
					$adIframes.each(function () {
						var iFrameDomain = $tmpLink.attr("href", this.src)[0].host;
						if ( iFrameDomain.indexOf(domain) === -1 ) {
							$(this).addClass(adRemovedClass);
						}
					});
				}
				removeDocOnclick();
			}
			if ( page === "single" ) {
				els.$pImageAd = els.$firstInfoDiv.prev().has("a img");
				els.$firstDl = els.$downloadDiv.find(" > dl:eq(0)");
				if ( els.$firstInfoDiv.length && els.$firstInfoDiv.text().match(/btguard/i) ) {
					els.$firstInfoDiv.addClass(adRemovedClass);
				}
				if ( els.$firstDl.text().match(/(?:direct\s+download|sponsored\s+link)/i) ) {
					els.$firstDl.addClass(adRemovedClass);
				}
				if ( els.$pImageAd.length ) {
					els.$pImageAd.addClass(adRemovedClass);
				}
			} else if ( page === "search" && element && element.length ) {
				if ( element.find("h2").text().match(/sponsored/i) ) {
					element.addClass(adRemovedClass);
				}
				element.prev().has("a img").addClass(adRemovedClass);
				els.$body.find(" > div.sponsored").addClass(adRemovedClass);
			} else if ( page === "splash" ) {
				// Old Ads that might popup later again
				frontPageAd = els.$body.find(" > p a img");
				if (frontPageAd.length && frontPageAd.parent().parent().is("p")) {
					frontPageAd.parent().parent().hide();
				}
			}
		}
		if ( typeof callback === "function" ) {
			callback();
		}
	}
	function fillSearchBar (event) {
		var searchHtml = ""
			,engineHTMLArr
			,delayTimeout
			,searchStr
			,selected
			,tempStr
			,i;
		// a small delay hinders the (before) annoying double popup
		delayTimeout = setTimeout(function () {
			selected = getSelected();
			if ( String(selected).match(/\S/i) ) {
				els.$titleEl.removeAttr("title");
				tempStr = selected + "";
				tempStr = tempStr
					.replace(/(?:\W|\_)/ig," ")
					.replace(cache.selectTrashPatt," ")
					.replace(cache.discardThisForSelect," ")
					.replace(/\s*locations?\s*$/," ")
					.replace(/\s*download\s*$/," ")
					.replace(/\s*torrent\s*$/," ")
					.replace(/\s+/g,"+")
					.replace(/(?:^\+|\+$)/g,"");
				searchStr = tempStr;
				for ( i = 0; i < cache.searchEnginesLen; i++ ) {
					engineHTMLArr = tz.storedSettings.searchEngines[i].split("|");
					searchHtml += "<a class='search_link' rel='noreferrer' href='"
						+ getNoReferrerUrl(engineHTMLArr[1].replace(/%s/g, searchStr))
						+ "'>" + engineHTMLArr[0].replace(/_/g," ") + "</a>";
				}
				searchHtml += "<a class='search_link' href='"
					+ "/search?f=" + searchStr + "'>torrentz</a><a href='/feed?q=" + searchStr
					+ "'><img src='" + cache.RSSIMG + "' width='16' height='16'></a>";
				if ( searchStr !== "" ) {
					els.$searchBar.html(searchHtml);
					els.$body.addClass("search_ready");
				}
			} else {
				handleKeyUps(false, true);
			}
		}, 150);
	}
	function makeStatsBar (options, trackers, callback) {
		var magnetLinkHtml	= ""
			,finalHtml		= ""
			,filesInfoText	= ""
			,seedTleach ,seedText ,minPeersText ,i ,commentText ,copyTrackersHtml ,trackerLen
			,_upLen ,_downLen
			,tzCl			= tz.usc.slug
			,wmvPatt		= /\.(?:wmv|WMV)$/
			,trackersDiv	= els.$body.find("div.trackers:eq(0)")
			,trackerLinks	= trackersDiv.find("dt a")
			,trackerLinksI	= -1
			,trackerLinksLen= trackerLinks.length
			,trackerDataEls	= trackersDiv.find("dl:has(a) dd")
			,upElems		= trackerDataEls.find(".u")
			,upElemsLen		= upElems.length
			,upElemsLenI	= -1
			,downElems		= trackerDataEls.find(".d")
			,downElemsLen	= downElems.length
			,downElemsLenI	= -1
			,dhtEls			= trackersDiv[0].textContent.indexOf("(DHT)") !== -1
				? trackersDiv.find("dl:eq(0):contains('(DHT)') span.u, "
				+ "dl:eq(0):contains('(DHT)') span.d") : []
			,dhtElsLen		= dhtEls.length
			,dhtElsLenI		= -1
			,dhtElsMax
			,seedColor		= "black"
			,seedTitle		= "S<span class='divided'>&frasl;</span>L &asymp;"
			,filesDiv		= els.$body.find("div.files:eq(0)")
			,fileLinks		= filesDiv.find("a")
			,fileLinksLen	= fileLinks.length
			,fileLinksLenI	= fileLinksLen
			,wmvWarning		= false
			,notActive		= !!(els.$downloadDiv.next(".error").text()
				.match(/active\s+locations?/i))
			,verDownload	= isVerifiedDownload(els.$body.find(".votebox"))
			,verDownloadCl	= verDownload > 0 && !notActive ? "_verified_dl" : notActive
				? " not_active" : verDownload < 0 ? "_bogus_dl" : "_unverified_dl"
			,filesSizeText	= filesDiv.find("div:contains('Size:'):eq(0)").text().replace("Size: ","")
			,commentDiv		= els.$body.find("div.comments")
			// not the settings form!
			,formFieldset	= els.$body.find("form.profile[method='post']:eq(0) fieldset")
			,commentCount	= els.$comments.length
			,htmlDivider	= " <span class='" + tzCl + "_sep'>&#124;</span> "
			,currTrackerList = [], _up = [], _down = []
			,upNum = 0, downNum = 0, topUpNum = 0, topDownNum = 0, seedMeter = 0, minPeers = 0
			,magnetUrl;
		while ( (++trackerLinksI < trackerLinksLen) ) {
			currTrackerList.push( (trackerLinks[trackerLinksI].textContent||"") );
		}
		trackers = makeTrackersObject(__.union(currTrackerList, trackers.userArray),
			trackers.userArray);
		trackerLen = trackers.allArray.length;
		// final magnetlink uri
		magnetLinkHtml = "<a id='" + tzCl + "_magnet_link" + "' class='" + tzCl
			+ "_mlink " + tzCl + verDownloadCl + "' href='"
			+ (getMagnetUrl(tz.page.thash, tz.page.title, trackers.allString, true))
			+ "' title='Fully qualified magnet URI for newer BitTorrent clients, includes"
			+ " all " + trackerLen + " tracker" + (getPlural(trackerLen)) + "'>Magnet Link</a>";
		// create seed leach ratio
		while ( (++upElemsLenI < upElemsLen) ) {
			_up[upElemsLenI] = getNodeNumber(upElems[upElemsLenI], true);
		}
		while ( (++downElemsLenI < downElemsLen) ) {
			_down[downElemsLenI] = getNodeNumber(downElems[downElemsLenI], true);
		}
		_upLen = _up.length;
		_downLen = _down.length;
		for ( i = 0; i < _upLen; i++) {
			upNum += _up[i];
			if ( i === 0 ) {
				topUpNum = _up[i];
			} else if ( _up[i] > topUpNum ) {
				topUpNum = _up[i];
			}
		}
		for ( i = 0; i < _downLen; i++) {
			downNum += _down[i];
			if ( i === 0 ) {
				topDownNum = _down[i];
			} else if ( _down[i] > topDownNum ) {
				topDownNum = _down[i];
			}
		}
		// DHT activity
		minPeers = (topDownNum >= topUpNum) ? topDownNum : topUpNum;
		while ( (++dhtElsLenI < dhtElsLen) ) {
			dhtElsMax = getNodeNumber(dhtEls[dhtElsLenI], true);
			if ( dhtElsMax > minPeers ) minPeers = dhtElsMax;
		}
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
			seedColor = "green";
		}
		seedText = seedTitle + " <span class='" + tzCl + "_seed_" + seedColor + "'>" + seedMeter + "</span>";
		minPeersText = " <span>" + formatNumbers(minPeers, true) + "+ peer"
			+ getPlural(minPeers) + "</span>";
		copyTrackersHtml = "<a href='#' id='" + tzCl + "_copylist' class='" + tzCl
			+ "_copylink' title='Click to copy the trackerlist'>Copy "
			+ trackerLen + " tracker" + (getPlural(trackerLen)) + "</a>";
		if ( commentCount ) {
			commentText = "<a href='#comments_" + tzCl + "' class='" + tzCl + "_comment_image'>";
			// commentDiv.attr("id","comments_" + tzCl);
			commentDiv.before("<a name='comments_" + tzCl + "'></a>");
		} else {
			commentText = "<a href='#write_comment_" + tzCl + "' class='" + tzCl + "_comment_image'>";
			// formFieldset.attr("id","write_comment_" + tzCl);
			formFieldset.before("<a name='write_comment_" + tzCl + "'></a>");
		}
		commentText += " " + commentCount + "</a>";
		if ( fileLinksLen && fileLinksLen <= 1000 ) {
			// as fast as possible
			while (fileLinksLenI--) {
				if ( fileLinks[fileLinksLenI].textContent.match(wmvPatt)
					|| fileLinks[fileLinksLenI].href.match(wmvPatt) ) {
					wmvWarning = true;
					fileLinksLenI = 0;
				}
			}
			filesDiv.before("<a name='files_" + tzCl + "'></a>");
			filesInfoText = "<a class='" + tzCl + "_folder_image' title='Not incl folders' href='#files_" + tzCl + "'> "
				+ fileLinksLen + "</a> &frasl; ";
		}
		filesInfoText += filesSizeText.length ? filesSizeText : "";
		if ( filesInfoText.length && wmvWarning ) {
			filesInfoText += " <span class='warn'>.wmv</span>";
		}
		finalHtml += magnetLinkHtml
			+ htmlDivider + copyTrackersHtml
			+ htmlDivider + minPeersText
			+ htmlDivider + "<span class='" + tzCl + "_peers_image'>" + seedText + "</span>"
			+ htmlDivider + commentText
			+ (filesInfoText.length ? (htmlDivider + filesInfoText) : "" );
		els.$downloadDiv.before("<p id='" + tzCl
			+ "' class='" + tzCl + "_info_bar generic "
			+ tzCl + verDownloadCl + "'" + cache.infoBarCss + ">"
			+ finalHtml + "</p>");

		// edit torrentz own magnet link if available
		els.$copyTrackersLink = $("#" + tzCl + "_copylist");
		els.$magnetLink = $("#" + tzCl + "_magnet_link");
		els.$magnetLink.on("click", handleMagnetClicks);
		els.$otherMagnetLinks = els.$body.find("a[href^='magnet']")
			.not(els.$magnetLink);
		if ( els.$otherMagnetLinks.length ) {
			magnetUrl = getMagnetUrl(tz.page.thash, tz.page.title, trackers.allString);
			els.$otherMagnetLinks.each(function (index, element) {
				$(element).attr("href", magnetUrl);
			});
		}
		if ( !commentCount ) {
			commentDiv.find(" > h2:eq(0)").replaceText(/\(\d+\)/, "(0)");
		}
		if ( typeof callback === "function" ) {
			return callback(trackers.allString);
		}
	}
	function dlResultsActions (resultsElement, options, callback) {
		var dlElements			= resultsElement.getElementsByTagName("dl")
			,dlElsLen			= dlElements.length
			,trackerLen			= cache.userArray.length
			,trAppend			= getPlural(trackerLen)
			,tzCl				= tz.usc.slug
			,linkPatt			= cache.hashPatt
			,doColorize			= options.searchHighlight
			,magnetTitleAppend	= " with magnetlink (" + trackerLen + " default tracker" + trAppend + ")"
			,metaDLpatt			= cache.metaDLpatt
			,keyPatterns		= getSearchGenres()
			,metaCl				= options.searchHighlight ? "meta-info colorizeme" : "meta-info"
			,currentClName
			,unverifiedClName	= ""
			,coloredClName		= ""
			,isActive			= true
			,spanMagnet
			,linkMagnet
			,isTrackerList		= tz.page.path.indexOf("/tracker_") === 0
			,doneResultClName	= !isTrackerList ? " " + tzCl + "_colorized"
				: " " + " " + tzCl + "_trackerlist"
			,i, torrHash, torrLink, torrLinks, torrTitle, vSpan, dtContent;
		for ( i = 0; i < dlElsLen; i++ ) {
			if ( dlElements[i].textContent.match(metaDLpatt) ) {
				dlElements[i].className = metaCl;
				continue;
			}
			if ( dlElements[i].style.display.toLowerCase() === "none" ) {
				continue;
			}
			unverifiedClName = "";
			currentClName = dlElements[i].className;
			// continue if not link, replace hyphens
			torrLinks = dlElements[i].getElementsByTagName("a");
			if ( !torrLinks.length ) {
				continue;
			} else {
				torrLink = torrLinks[0];
			}
			torrHash = torrLink.href.match(linkPatt)[0];
			torrTitle = torrLink.textContent;
			spanMagnet = d.createElement("SPAN");
			spanMagnet.className = tzCl + "_magnet";
			linkMagnet = d.createElement("A");
			linkMagnet.href = getMagnetUrl(torrHash, torrTitle, cache.userString);
			linkMagnet.title = "Download " + truncate(torrTitle, 20) + magnetTitleAppend;
			spanMagnet.appendChild(linkMagnet);
			dlElements[i].appendChild(spanMagnet);
			vSpan = dlElements[i].getElementsByClassName("v");
			vSpan = (vSpan && vSpan.length ? vSpan[0] : null);
			// stop if we're on a trackers list; too heavy and doesn't match enough anyways
			if ( isTrackerList ) {
				continue;
			}
			if ( vSpan ) {
				if ( !/[1-9]/.test(vSpan.textContent) ) {
					// no votes
					unverifiedClName = currentClName + " " + tzCl + "_unverified_dl";
				} else if ( /\-[0-9]/.test(vSpan.textContent) ) {
					// negative votes
					unverifiedClName = currentClName + " " + tzCl + "_fake_dl";
				}
				// Keyword check
				if ( doColorize && keyPatterns && keyPatterns.length ) {
					dtContent = dlElements[i].getElementsByTagName("dt");
					dtContent = dtContent.length ? dtContent[0].textContent : "";
					coloredClName = colorizeMatch(dtContent, keyPatterns, torrTitle);
				}
			}
			coloredClName = coloredClName.length ? " " + coloredClName : "";
			if ( doColorize ) {
				isActive = isActiveTorr( dlElements[i] );
			}
			if ( !isActive ) {
				coloredClName = coloredClName + " inactive";
			}
			dlElements[i].className = unverifiedClName + coloredClName;
		}
		els.$body.addClass(doneResultClName);
		if ( typeof callback === "function" ) {
			return callback(resultsElement);
		}
	}
	function validateRegExp (pattStr) {
		var isValid
			,fooPatt;
		if ( pattStr.match(/^\s*\//) && pattStr.match(/\/\s*$/) ) {
			pattStr = pattStr.replace(/(?:^\s*\/|\/\s*$)/g, "");
			try {
				fooPatt = new RegExp(pattStr,"i");
				isValid = __.isRegExp(fooPatt);
			} catch (error) {
				sendLog("not a valid regexp pattern!");
				sendLog(error);
				isValid = false;
			}
		} else if ( pattStr.match(/(?:^\s*\/|\/\s*$)/) ) {
			isValid = false;
		} else {
			isValid = true;
		}
		return isValid;
	}
	function makeExcludePatt (userString) {
		var convPatt
			,commaArr
			,i;
		if ( userString.match(/^\//) && userString.match(/\/$/) ) {
			convPatt = userString.replace(cache.zipSlashes,"");
		} else {
			userString = userString
				.replace(cache.unsafeRegexpChars,"\\$1")
				.replace(/\s/g,".")
			;
			if ( userString.indexOf(",") !== -1 ) {
				convPatt = "(";
				commaArr = userString.split(",");
				for ( i = 0; i < commaArr.length; i++ ) {
					convPatt += (i !== 0 ? "|" + commaArr[i] : commaArr[i]);
				}
				convPatt += ")";
			} else {
				convPatt = userString;
			}
		}
		return new RegExp(convPatt,"i");
	}
	function getResultTitle (el) {
		var text = el.textContent
			,title;
		if ( text.indexOf("»") ) {
			title = text.split("»")[0];
		} else {
			title = text;
		}
		title = title.replace(/\s+/g," ");
		return title;
	}
	function initialFilterOfList (list, opts, callback) {
		var dls						= list.getElementsByTagName("dl")
			,deletedByFilterCount	= 0
			,metaDLpatt				= cache.metaDLpatt
			,dlsLen					= dls.length
			,dlText
			,i;
		if ( opts.excludeFilter ) {
			for ( i = 0; i < dlsLen; i++ ) {
				dlText = getResultTitle(dls[i]);
				if ( !dlText.match(metaDLpatt) && dlText.match(makeExcludePatt(opts.excludeFilter)) ) {
					deletedByFilterCount++;
					dls[i].style.display = "none";
				}
			}
			cache.deletedByFilterCount = deletedByFilterCount;
		}
		if ( typeof callback === "function" ) {
			return callback(list);
		}
	}
	function isActiveTorr (el) {
		var activeTorrent	= true
			,seedsElems		= el.getElementsByClassName("u")
			,seedsEl		= seedsElems && seedsElems.length ? seedsElems[0] : null
			,leachElems		= el.getElementsByClassName("d")
			,leachEl		= leachElems && leachElems.length ? leachElems[0] : null
			,torrDateElems	= el.getElementsByClassName("a")
			,torrDateEls	= torrDateElems && torrDateElems.length
				? torrDateElems[0].getElementsByTagName("span") : null
			,torrDateEl		= torrDateEls && torrDateEls.length ? torrDateEls[0] : null
			,torrDateTitle	= torrDateEl ? torrDateEl.title : ""
			,torrDate		= torrDateTitle ? new Date(torrDateTitle).getTime() : 0
			// less than one month old
			,isNew			= (((new Date().getTime() - torrDate) / 1000 / 60 / 60 / 24) <= 31)
			,seeders
			,leachers;
		if ( !isNew && seedsEl && leachEl ) {
			seeders = getNodeNumber(seedsEl);
			leachers = getNodeNumber(leachEl);
			if ( seeders === 0 && leachers <= 5 ) {
				activeTorrent = false;
			}
		}
		return activeTorrent;
	}
	function colorizeMatch (text, genres, title) {
		var torrKeywords	= text.replace(title, " ")
			,dlTagsMatch	= torrKeywords.match(cache.sKeywordPatt)
			,dlTags			= dlTagsMatch && dlTagsMatch.length >= 2 && dlTagsMatch[1] ? dlTagsMatch[1] : ""
			,secondTryText	= !dlTags ? title.replace(cache.nonSafeChars," ") : ""
			,coloredClName	= ""
			,isSecondMatch	= false
			,sLen			= genres.length
			,i;
		for ( i = 0; i < sLen; i++ ) {
			// add spaces to let \\b match
			coloredClName = "";
			if ( dlTags ) {
				if ( genres[i].pattern.test((" " + dlTags + " ")) ) {
					coloredClName = genres[i].name;
					break;
				}
			}
			// no match or no keywords TO match
			//   try matching the title instead
			if ( (i !== (sLen-1) && !dlTags)           // in the loop but no keywords
				|| (i === (sLen-1) && !coloredClName) )  // or at the end and no match
			{
				if ( !isSecondMatch && (i === (sLen-1) && !coloredClName) ) {
					// reset loop for at the end and no match
					i = 0;
					// stop infinite loop
					isSecondMatch = true;
				}
				if ( genres[i].pattern.test((" " + secondTryText + " ")) ) {
					coloredClName = genres[i].name;
					break;
				}
			}
		}
		return coloredClName;
	}
	function fixSpecialQuery (s) {
		return (s.replace(cache.spaceToPlusPatt, "+")
			.replace(cache.zipPluses, "")
			.replace(cache.escapedQuotes, "%22"));
	}
	function makeSearchQuery (a, b, c, d, e) {
		return fixSpecialQuery((tz.page.path + "?f=" + (a||"") + (b||"") + e + (c||"") + (d||"")));
	}
	function getNiceYear (dateObj) {
		var month = Number(dateObj.getMonth()) + 1
			,day  = Number(dateObj.getDate())
			,year = String(dateObj.getFullYear());
		month = month < 10 ? "0" + String(month) : String(month);
		day = day < 10 ? "0" + String(day) : String(day);
		return year + " " + month + " " + day;
	}
	function getValidDate (date, go) {
		var currDateObj	= new Date(Number(date[0]), (Number(date[1]) - 1), Number(date[2]), 5)
			,oneDay		= 86400000
			,b			= true
			,dir		= go
			,i			= 0
			,tmpMS
			,currDateMS
			,newDate;
		currDateMS = currDateObj.getTime();
		while (b && i < 10) {
			tmpMS = currDateMS+(oneDay*dir);
			newDate = getNiceYear(new Date(tmpMS));
			if ( newDate.match(cache.validDatePatt) ) {
				b = false;
			} else {
				dir = dir + go;
			}
			i++;
		}
		return { nice : newDate, ms : tmpMS };
	}
	function getTvToolbarHtml (query) {
		// Torrentz uses a smart episode filter when searching with the non-default
		// pattern ex. S1E1, to S01E01, so this needs to validate as well,
		// it also applies to the format 1x[0]1 that torrentz also translates.
		var queryMatch	= query.match(/\?f=([^&]+)/i)
			,datem		= queryMatch && queryMatch.length === 2
				? decodeURIComponent(queryMatch[1]).replace(/(\d{4})\D?(\d{2})\D?(\d{2})/i, "$1"+"-"+"$2"+"-"+"$3")
				.match(cache.validDatePatt) : null
			,epm		= queryMatch && queryMatch.length === 2
				? queryMatch[1].match(cache.validEpisodePatt) : null
			,legacym	= queryMatch && queryMatch.length === 2
				? queryMatch[1].match(cache.validLegacyEpPatt) : null
			,ymdMatch
			,tzCl		= tz.usc.slug
			,nEpLinkCl	= "class='" + tzCl + "_tv_next_episode'"
			,pEpLinkCl	= "class='" + tzCl + "_tv_prev_episode'"
			,nSeLinkCl	= "class='" + tzCl + "_tv_next_season'"
			,pSeLinkCl	= "class='" + tzCl + "_tv_prev_season'"
			,htmlStr	= ""
			,ep			= {}
			,dp			= {};
		if (datem && datem.length === 17) {
			ymdMatch = datem[3].match(cache.ymdPatt);
			dp.year = ymdMatch[1];
			dp.month = ymdMatch[2];
			dp.day = ymdMatch[3];
			dp.nextDate = getValidDate([dp.year, dp.month, dp.day], 1);
			dp.prevDate = getValidDate([dp.year, dp.month, dp.day], -1);
			htmlStr = "<b><a " + pEpLinkCl + " href='"
				+ makeSearchQuery(datem[1], datem[2], datem[15], datem[16], "\x22" + dp.prevDate.nice + "\x22")
				+ "'>&lt; " + dp.prevDate.nice + "</a></b>";
			if ( dp.nextDate.ms && (dp.nextDate.ms - (new Date().getTime())) < 0 ) {
				htmlStr = htmlStr + " | <b><a " + nEpLinkCl + " href='"
					+ makeSearchQuery(datem[1], datem[2], datem[15], datem[16], "\x22" + dp.nextDate.nice + "\x22")
					+ "'>" + dp.nextDate.nice + " &gt;</a></b>";
			}
		} else if (epm && epm.length === 8) {
			ep.episode = epm[5] && epm[5] !== "0" ? +epm[5].replace(/^0/,"") : 0;
			ep.season = epm[3] !== "0" ? +epm[3].replace(/^0/,"") : 0;
			ep.currSeason = "S" + padZeroes(ep.season, 2);
			ep.nextEpisode = ep.currSeason + "E" + padZeroes((ep.episode+1), 2);
			ep.prevEpisode = ep.episode > 1 ? ep.currSeason + "E" + padZeroes((ep.episode-1), 2) : "";
			ep.nextSeason = "S" + padZeroes((ep.season+1), 2);
			ep.prevSeason = ep.season > 1 ? "S" + padZeroes((ep.season-1), 2) : "";
			if ( ep.prevSeason ) {
				htmlStr = htmlStr + "<a " + pSeLinkCl + " href='"
					+ makeSearchQuery(epm[1], epm[2], epm[6], epm[7], (epm[4] ? ep.prevSeason + "E01" : ep.prevSeason))
					+ "'>&laquo; " + ep.prevSeason + "</a> ";
			}
			if ( epm[4] && ep.prevEpisode ) {
				htmlStr = htmlStr + "<a " + pEpLinkCl + " href='" + makeSearchQuery(epm[1], epm[2], epm[6], epm[7], ep.prevEpisode)
					+ "'><b>&lt; " + ep.prevEpisode + "</b></a> ";
			}
			if ( (ep.prevSeason) || (epm[4] && ep.prevEpisode) ) {
				htmlStr = htmlStr + "| ";
			}
			if ( epm[4] && ep.nextEpisode ) {
				htmlStr = htmlStr + "<a " + nEpLinkCl + " href='" + makeSearchQuery(epm[1], epm[2], epm[6], epm[7], ep.nextEpisode)
					+ "'><b>" + ep.nextEpisode + " &gt;</b></a> ";
			}
			if ( ep.nextSeason ) {
				htmlStr = htmlStr + "<a " + nSeLinkCl + " href='"
					+ makeSearchQuery(epm[1], epm[2], epm[6], epm[7], (epm[4] ? ep.nextSeason + "E01" : ep.nextSeason))
					+ "'>" + ep.nextSeason + " &raquo;</a>";
			}
		} else if ( legacym ) {
			htmlStr = "Use s<b>NN</b>e<b>NN</b> to search for episodes";
		}
		return htmlStr;
	}
	function initSearchPage ($resultsEl, options, callback) {
		var searchParameters= tz.page.search.match(/^\?f\=(.+)$/i)
			,tzCl			= tz.usc.slug
			,resultsH2
			,tvToolbarLinks
			,noResultsTitle
			,$filterBar;
		if ( tz.usc.searchHighlight && !els.$body.hasClass(tzCl + "_colorized") ) {
			els.$body.addClass(tzCl + "_colorized");
		}
		if ( $resultsEl && $resultsEl.length ) {
			resultsH2 = $resultsEl.find(" > h2");
			// Add rss link for "approximate match" and no results
			if ( $resultsEl.length === 1 && searchParameters && searchParameters.length >= 2
				&& searchParameters[1] && resultsH2.length && !resultsH2.has("img[src*='rss.png']").length ) {

				resultsH2.append("<a class='approximate_rss_link' href='/feed_anyA?q="
					+ String(searchParameters[1]) + "'>&nbsp;<img width='16' height='16' src='"
					+ cache.RSSIMG + "' title='This RSS feed is empty'></a>")
				;
			}
			if ( cache.isSearch && tz.page.path !== "/i" && !cache.isSingle ) {
				$filterBar = $resultsEl.find(" > h3:eq(0)");
				tvToolbarLinks = getTvToolbarHtml(tz.page.search);
				if ( tvToolbarLinks && $filterBar.length ) {
					$("<span/>", {
						"html"	: tvToolbarLinks,
						"class"	: tzCl + "_episode_nav_links"
					}).prependTo($filterBar);
				} else if ( tvToolbarLinks && !$filterBar.length ) {
					noResultsTitle = $resultsEl.find(" > h2:eq(0):contains('No Torrents Found')");
					if ( noResultsTitle.length ) {
						noResultsTitle.after($("<h3/>", {
							"html" : $("<span/>", {
								"html"	: tvToolbarLinks,
								"class"	: tzCl + "_episode_nav_links no_res_eps"
							})
						}));
					}
				}
			}
			// for every .results div
			$resultsEl.each(function (index, element) {
				if ( tz.usc.searchHighlight ) {
					initialFilterOfList(element, options, function (filteredList) {
						dlResultsActions(filteredList, options, function (finishedResult) {
							var excludeCount
								,$result	= $(finishedResult)
								,dmcaClass	= options.searchHighlight ? "meta-info colorizeme" : "meta-info"
								,$logEl;
							// insert empty <p/> as the curved spacer for colored results
							if ( (cache.isSearch || cache.isSingle)
								&& options.searchHighlight && $resultsEl.find("dl").length
								&& $resultsEl.find(" > p").length === 0 ) {
								$("<p/>").html(" ").appendTo($resultsEl);
							}
							if ( options.excludeFilter ) {
								excludeCount = cache.deletedByFilterCount || 0;
								cache.deletedByFilterCount = 0; // reset cache value
								$result.find(" > dl:last").after("<dl class='" + dmcaClass + "'>"
									+ "<dt style='text-align: right'><span class='" + tzCl
									+ "_exclude_filter_count'></span></dt><dd></dd></dl>");
								$logEl = $result.find("span." + tzCl + "_exclude_filter_count");
								updateExcludeLog($logEl, excludeCount, finishedResult);
							}
							if ( typeof callback === "function" ) {
								return callback($result);
							}
						});
					});
				} else {
					if ( typeof callback === "function" ) {
						return callback($resultsEl);
					}
				}
			});
		} else {
			if ( typeof callback === "function" ) {
				return callback($resultsEl);
			}
		}
	}
	function initSingleTorrent (options, trackers, callback) {
		var infoDivHeight;
		// check for height of div.top before removeAds
		//   and remember that adBlocker removes it first
		//   and that it might not be available at all times
		els.$firstInfoDiv = els.$body.find(" > div.info:eq(0)");
		infoDivHeight = els.$firstInfoDiv.is(":visible")
			? els.$firstInfoDiv.outerHeight() - 20 : 0;
			// 20 is the padding t+b of p.generic
		cache.infoBarCss = infoDivHeight ? " style='min-height:"
			+ infoDivHeight + "px;line-height:" + infoDivHeight + "px;' " : " ";
		// single page selectors
		els.$downloadDiv = els.$body.find(".download:eq(0)");
		els.$torrTitle = els.$body.find("h2:eq(0) span");
		els.$titleEl = els.$body.find("h2:eq(0)");
		els.$comments = els.$body.find(".comment");
		// titles
		tz.page.title = els.$torrTitle.text();
		tz.page.titleEnc = encodeURIComponent(tz.page.title.replace(/\'/g,"_"));
		// remove ads for single page
		// inject download-buttons
		removeAds("single", options);
		makeStatsBar(options, trackers, function (trackersText) {
			setupSelectToSearch();
			els.$downloadDiv.find("a")
				.not(els.$otherMagnetLinks)
				.each(doDirectTorrentLink);
			setupCopyTextArea(trackersText);
			linkifyCommentLinks(options);
			if ( typeof callback === "function" ) {
				return callback(options);
			}
		});
	}
	function initSettingsPanel (options, trackers, callback) {
		var tzCl			= tz.usc.slug
			,settingsButton	= "<li class='" + tzCl + "_settings'>"
				+ "<a href='#' title='Change TzAio Settings'>TzAio</a>";
		removeAds("common", options);
		els.$topDiv = els.$body.find("div.top:eq(0)");
		els.$settingsEl = els.$topDiv.after(
			getSettingsHtml(options, trackers.userString)
		).find(" > ul").prepend(settingsButton).end();
		els.$settingsLink = els.$topDiv.find(" > ul > li."
			+ tzCl + "_settings a");
		els.$scriptInfoP = els.$topDiv.next("p.generic");
		els.$settingsForm = $("#" + tzCl + "_settings_submit")
			.on("submit", handleSettingsSubmit);
		els.$settingsLink.on("click", function (event) {
			event.preventDefault();
			els.$scriptInfoP.toggleClass("expand");
			els.$settingsForm.toggleClass("expand");
			els.$settingsLink.parent("li")
				.toggleClass(tz.usc.slug + "_settings_open");
			toggleCopyBox(2);
			return false;
		});
		els.$resetEl = $("#" + tzCl + "_settings_reset");
		$("#removeAds").attr("checked", options.removeAds);
		$("#searchHighlight").attr("checked", options.searchHighlight);
		$("#linkComments").attr("checked", options.linkComments);
		els.$resetEl.on("click", function (event) {
			var refresh_page_reset = confirm("This will erase all your custom settings!"
				+"\nReset settings and reload the page?");
			event.preventDefault();
			if ( refresh_page_reset ) {
				setStorageOptions(false, function () {
					sessionStorage.setItem(tz.usc.slug + "_SS_useroptions_saved", "true");
					location.href = tz.page.href;
				});
			}
			return false;
		});
		els.$copyBuiltInListLink = $("#" + tzCl + "_copy_built_in_trackerlist");
		if ( els.$copyBuiltInListLink.length ) {
			els.$copyBuiltInListLink.on("click", function () {
				// we know this exists now
				var sortedOriginal = makeTrackersObject(tz.usc.defaultTrackers, true).allString;
				if ( isWindowsOS() ) {
					sortedOriginal = sortedOriginal.replace(/\n/g,"\r\n");
				}
				GM_setClipboard(sortedOriginal);
				$(this).css("opacity", "0.5");
				return false;
			});
		}

		if ( typeof callback === "function" ) {
			return callback(options, trackers);
		}
	}
	function setupUserSettings (callback) {
		// Theory: Skip storing anything until user saves manually the first time,
		// helps avoid errors that breaks every first [unsaved] visit,
		// plus it's evil to store anything and not letting the user know first
		var opts = getGMstorage(tz.storageName)
			,trackers
			,newSettings;
		if ( !opts ) {
			// first time user
			cache.freshUser = true;
			newSettings = tz.usc;
			sendLog( "Thanks for using " + tz.usc.name + "!" );
		} else {
			// returning user with storage
			newSettings = getGMstorage(tz.storageName);
		}
		if ( !newSettings )  {
			sendLog( "[setupUserSettings] failed, newSettings is falsy!" );
			return;
		}
		// merge any new settings into newSettings
		//   not when saving because that depends on people always saving
		newSettings = __.defaults(newSettings, tz.usc);
		tz.storedSettings = newSettings;
		// func return unescaped
		tz.storedSettings.defaultTrackers = __.compact(tz.storedSettings.defaultTrackers);
		cache.searchEnginesLen = tz.storedSettings.searchEngines.length;
		trackers = makeTrackersObject(tz.storedSettings.defaultTrackers, false);
		if ( typeof callback === "function" ) {
			return callback(newSettings, trackers);
		}
	}

	// build internal objects
	tz.page = getPageParmaters();
	tz.usc = new UserScript();
	tz.storageName = tz.usc.slug + "_useroptions";

	cache = {
		RSSIMG				: "/img/rss.png"
		,freshUser			: false
		,httpPatt			: /^https?/
		,udpPatt			: /^udp/
		,sKeywordPatt		: /»\s+?(.*)$/i
		,hashPatt			: /[a-zA-Z0-9]{40}/
		,metaDLpatt			: /(?:explicit\s+results?\s+hidden\s+by\s+family\s+filters?|results?\s+removed\s+in\s+compliance\s+with)/i
		,validEpisodePatt	: /(.*?)([^sS=]|\b)S([0-9]{1,2})(E([0-9]{1,2}))?([^0-9]|\b)(.*)/i
		,validLegacyEpPatt	: /(.*?)(?:[^0-9=]|\b)([0-9]{1,2})x([0-9]{1,2})(?:[^0-9]|\b)(.*)/i
		,validDatePatt		: new RegExp("(.*?)([^0-9=]|\\b)(([0-9]{4})\\D?(((0[13578]|(10|12))\\D?(0[1-9]|[1-2]"
			+"[0-9]|3[0-1]))|(02-(0[1-9]|[1-2][0-9]))|((0[469]|11)\\D?(0[1-9]|[1-2][0-9]|30))))([^0-9]|\\b)(.*)","i")
		,ymdPatt			: /^(\d{4})\D?(\d{2})\D?(\d{2})/
		,twoPartDomainPatt	: new RegExp("(?:\\.com|\\.co|\\.info|\\.mobi|\\.net|\\.ar|\\.as|\\.at|"
			+ "\\.bb|\\.bg|\\.br|\\.ca|\\.ch|\\.cn|\\.cs|\\.dk|\\.ee|\\.es|\\.fi|\\.fr|\\.gr|\\.in|"
			+ "\\.is|\\.it|\\.jp|\\.lu|\\.no|\\.se|\\.pl|\\.ru|\\.tv|\\.tw|\\.tk|\\.ua|\\.uk|\\.us){2}","")
		,matchUrlPatt		: /[-a-zA-Z0-9@:%_\+.~#?&\/\/=]{2,256}\.[a-z]{2,4}(\:[0-9]+)?\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)?/i
		,comLinksPatt		: /(?:(?:htt|ud|ft)ps?\:\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(?:\/|\/([\w#!\:.?+=&%@!\-\/]))?)/gi
		,selectTrashPatt	: /(?:\s+(\d+\s*torrent)?\s*|\s*torrent\s*|\s*download\s*|\s*locations\s*){1,3}(Download \.torrent[\s\S]*)?$/i
		,unsafeRegexpChars	: /(\.|\\|\+|\*|\?|\[|\^|\]|\$|\(|\)|\{|\}|\=|\!|\x3C|\x3E|\||\:|\-|\"|\')/g
		,nonSafeChars		: /[^0-9a-zA-Z\-\+]+/
		,spaceToPlusPatt	: /(?:\s+|(\%20)+|(\%2B)+)/g
		,zipPluses			: /(?:^\++|\++$)/g
		,zipSlashes			: /(?:^\/|\/$)/g
		,escapedQuotes		: /(?:\%22|\x22)+/g
		,nonNumberishPatt	: /[^\-\+0-9]/gi
		,numberFormulaPatt	: /((?:\-|\+)?\d+)/
		// https://en.wikipedia.org/wiki/Magnet_URI_scheme
		,magnetURI			: "magnet:?xt=urn:btih:"
		,bugReportMsg		: "\n(If this problem persists, please get in touch and I'll fix it\n"
			+ tz.usc.link + ")"
	};

	$.fn.extend({ doLastAction : lastAction });
	myAddStyler(GM_getResourceText("css1"));
	$.ajaxSetup({ "cache" : true });

	$(d).ready(function () {

		// Start exec timer
		execStartMS = (new Date().getTime());
		
		els.$body = $("body").addClass(tz.usc.bodyClass);
		els.$bodyANDhtml = els.$body.add($("html"));

		startLogMsg = "Starting " + tz.usc.name + " v" + tz.usc.version + " "
			+ tz.usc.date + "\n" + tz.usc.link + "\nEnv.: "
			+ environment + "\nLoad: " + ((new Date().getTime())-loadStartMS) + "ms";
		
		// init calls
		sendLog(startLogMsg, function () {
			
			setupUserSettings(function (userOptions, trackers) {
				
				myAddStyler(userOptions.customCss);

				initSettingsPanel(userOptions, trackers, function (options, trackers){
					
					// look for search results
					cache.$searchResults = els.$body.find("div.results");
					els.$theSearchBox = $("#thesearchbox").prop("tabindex", 1);

					if ( ~tz.page.path.indexOf("users/") ) {
						els.$comments = els.$body.find(".comment");
						linkifyCommentLinks(options);
					}
					if ( ~tz.page.path.indexOf("/profile") || ~tz.page.path.indexOf("users/") ) {

						lastAction();

					} else if ( tz.page.thash.match(cache.hashPatt) ) {
						cache.isSingle = true;
						initSingleTorrent(options, trackers, function (options) {
							if ( cache.$searchResults.length ) {
								// Related search results
								initSearchPage(cache.$searchResults, options, function () {
									lastAction();
								});
							} else {
								lastAction();
							}
						});

					} else if ( tz.page.path.match(/^\/help\/?$/) ) {

						els.$helpDiv = els.$body.find("div.help:eq(0)")
							.append(getHelpHtml()).doLastAction();

					} else if ( tz.page.path === "/" ) {

						removeAds("splash", options, null, function () {
							lastAction();
						});

					} else if ( tz.page.path === "/i"
						|| tz.page.path.match(/^\/(?:search|any|verified|advanced|tracker_)/)
						|| tz.page.path.match(/^\/[a-z]{2,}\//) ) {

						cache.isSearch = true;
						removeAds("search", options, cache.$searchResults);

						initSearchPage(cache.$searchResults, options, function (results) {
							var observer;
							if ( tz.page.path !== "/i" ) {
								if ( options.ajaxedSorting ) {
									if ( history.pushState ) {
										// listen for popstate events
										onpopstate = handlePopStates;
									}
									bindAjaxLinks(results);
								}
							} else if ( tz.page.path === "/i" ) {
								observer = new MutationObserver(ajaxResultsHandler);
								observer.observe(els.$body[0], {
									attributes     : true
									,subtree       : true
									,childList     : true
									,characterData : true
								});
							}
							lastAction();
						});
					}
					// listen for keyups on all pages
					$(d).on("keyup", handleKeyUps);
				});

			});

		});

	});

}(jQuery, (this._||_), (new Date().getTime())));

/***************************************************************************************************
 * jQuery replaceText
 * Copyright (c) 2009 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 * Script: jQuery replaceText: String replace for your jQueries!
 * Version: 1.1, Last updated: 11/21/2009*
 * Project Home - http://benalman.com/projects/jquery-replacetext-plugin/
 * GitHub       - http://github.com/cowboy/jquery-replacetext/
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of 
 * this software and associated documentation files (the "Software"), to deal in 
 * the Software without restriction, including without limitation the rights to 
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies 
 * of the Software, and to permit persons to whom the Software is furnished to 
 * do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all 
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL 
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * 
 */

(function($){$.fn.replaceText=function(b,a,c){return this.each(function(){var f=this.firstChild,g,e,d=[];if(f){do{if(f.nodeType===3){g=f.nodeValue;e=g.replace(b,a);if(e!==g){if(!c&&/</.test(e)){$(f).before(e);d.push(f)}else{f.nodeValue=e}}}}while(f=f.nextSibling)}d.length&&$(d).remove()})}})(jQuery);