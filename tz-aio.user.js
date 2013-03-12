// ==UserScript==
// @name          Torrentz All-in-One
// @description   Does everything you wish Torrentz.eu could do!
// @version       2.1.1
// @date          2013-03-12
// @author        elundmark
// @contact       mail@elundmark.se
// @license       CC0 1.0 Universal; http://creativecommons.org/publicdomain/zero/1.0/
// @namespace     http://elundmark.se/code/tz-aio/
// @homepage      https://userscripts.org/scripts/show/125001
// @updateURL     https://userscripts.org/scripts/source/125001.meta.js
// @downloadURL   https://userscripts.org/scripts/source/125001.user.js
// @supportURL    https://github.com/elundmark/tz-aio-userscript/issues
// @include       /^https?://(www\.)?torrentz\.ph/.*/
// @include       /^https?://(www\.)?torrentz\.eu/.*/
// @include       /^https?://(www\.)?torrentz\.li/.*/
// @include       /^https?://(www\.)?torrentz\.com/.*/
// @include       /^https?://(www\.)?torrentz\.me/.*/
// @include       /^https?://(www\.)?torrentz\.in/.*/
// @include       /^https?://(www\.)?torrentz\.hk/.*/
// @include       /^https?://(www\.)?torrents\.de/.*/
// @include       /^https?://(www\.)?tz\.ai/*
// @exclude       /^https?://[^/]+/announcelist_.*/
// @exclude       /^https?://[^/]+/report_.*/
// @exclude       /^https?://[^/]+/i\?.+/
// @require       https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @require       http://elundmark.se/_files/js/tz-aio/tz-aio-plugins.js?v=210_1
// @resource css1 http://elundmark.se/_files/js/tz-aio/tz-aio-style.css?v=211_1
// @icon          data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAACqVBMVEUKFB4KFR8LFR8LFiELFiIMGCQNGicNGigNGygNGykOHCsPGSIPHi0PHi4PHy8QIDEQITEQITIRGyQRIjMTJjoUKDwUKD0VJDUWHykWLEIXICoXL0cYIisYMEgZIiwZMksaIywaNE4cOVYdJi8dOlcdO1keJzAePFoePVwfKDEfPl4fP14fV48gKjMgQGAgQGEhQmMhQ2UiRWcjRmkkLTYkSW0lSm8mTHImTXMnTnYpUnspXpQqVH4rV4IsWIQsWIUsWYUsWYYtNT4tWocuSWQvSmQvXo4xYpMxYpQxY5QxY5UyOkIyZJcyZZcyZZgzZpk1Z5o2PkY2aJo3P0c3P0g6Qko6a5w8REw9RU1ASFBAcJ9BSVFBUGBCSlJCcaBDcqFEc6FFTVRFdKJGU19GaY1HT1ZJYHdJdqRMeaVNV2FNc5hOWGJRWF9TfqhTfqlUW2JWfKJaYWdaYWhad5Rag6xbhK1dY2pdhq5fh65giK9iibBjaXBjirFla3FlhKJli7FnbXNnbXRnjbJnjbNobnRqj7Rtc3ltkrZvk7dzlrl1e4F6m7x7nL18nL1/hIqCocCEo8GFo8KHpcOLqMWMkZaMnrCOlp6OqsaSorGTmJyVr8qWsMqYnKCZnaGanqKas8ybtMyctM2guM+nvdKovdOtwdWywtK7vsG/wsTC0eDFx8rGyMvHycvJy83Jy87Nz9HN09rP2ubQ2uTQ3OfT3ejU3+nX2dra3N3c3d/d3+Dg4uTh4uPi4+Tk5ufk6/Ho7fHo7fPp6uzp7vTq6+zq7/Tr7O3r7O7r7/Pr8PXs7e7s8PXu8fTv8/bw8fHw8fLy9fj09PX09/j19vf29vf2+Pr3+Pr3+fr4+Pn5+fn5+fr6+vr6+/z7+/v7/P38/Pz8/P39/f3+/v7///+abyX6AAABGElEQVRYw2N4RCFgGCYG6FiTB+AGWPuTB0YNGDVg1ADaGIA9v7sg1Pc+eJRGugHKKOpD8RmwdS0U7Hn06OFqGEcOpjrvygMCBvgbGkHAVKABnEYwAJLpACp68IiQC+BgFtAAfhSRDpiHyDWg/RYQ3HhIvgH+xnpAQIELiIuFUQOGnQFwUOdLpgH5RUCQ8+iRkAeZXuCxAoKrj7y5/CgIg6UP5zD4UhCIFQ+PMjhQEAvxj+4waFMSjY8ecYtSkg6OPAph86MgHUx7OJPBHS7S+RAIQKUiiH54m7iEtHv/ISBYjFomgsFJVQIGTD92GA7mguOhFUnk8OHtKoSqNhEOOGB3RhcBAq3R6n3UgFEDBqsB5IKHw6PvDAAzFqvUZqMf1wAAAABJRU5ErkJggg==
// @grant         unsafeWindow
// @grant         GM_info
// @grant         GM_addStyle
// @grant         GM_log
// @grant         GM_getResourceText
// @grant         GM_setValue
// @grant         GM_getValue
// @grant         GM_deleteValue
// @grant         GM_openInTab
// @grant         GM_getMetadata
// ==/UserScript==

/*
 *
 * Tested in Chrome 25.0.1364.97 (Tampermonkey v2.12.3124.16)
 * and Firefox 19.0 (GreaseMonkey 1.8, Scriptish 0.1.8) on Ubuntu 12.10 32-bit
 * 
 * TODO's:
 *  Check if removing iframes needs more care (LastPass fails ex.)
 *    >> removed that, torretz seems to have stopped adding iframes
 *  Add keyups to select-to-search > re-build
 *    >> skipped that and added a delay and a better RegExp instead
 *  
*/

(function(w, $, underScore){

  if ( typeof w !== "object" || typeof underScore !== "function" || typeof $ !== "function"
    || typeof $.toJSON !== "function" || typeof $.jStorage !== "object"
    || (typeof GM_info !== "object" && typeof GM_getMetadata !== "function")  // added for Scriptish
    || typeof GM_addStyle !== "function"
    || typeof GM_log !== "function"
    || typeof GM_deleteValue !== "function"
    || typeof GM_getResourceText !== "function"
    || typeof GM_setValue !== "function"
    || typeof GM_getValue !== "function"
    || typeof GM_openInTab !== "function" ) {
    throw new Error("Missing functions or window! Please report this error if you're reading this!");
  }
  var tzAio,
    // Greasemonkey
    isGM            = (typeof TM_log !== "function" && typeof GM_info === "object"),
    // Scriptish
    isSC            = (!isGM && typeof GM_info === "undefined" && typeof GM_getMetadata === "function"),
    // Tampermonkey
    isTM            = (!isGM && !isSC && typeof TM_log === "function"),
    environment     = isGM ? "Firefox/GreaseMonkey " : isTM ? "Chrome(-ium)/TamperMonkey "
      : isSC ? "Firefox/Scriptish " : "unknown ",
    execStartMS,
    newCss,
    startLogMsg,
    $doc            = $(document),
    scriptSource    = isGM ? GM_info.scriptMetaStr : isTM ? GM_info.scriptSource : "",
    UserScript      = function () {
      var userjsObject = {
        name            : isSC ? GM_getMetadata("name")[0] : GM_info.script.name,
        slug            : "tz_aio",
        version         : isSC ? GM_getMetadata("version")[0] : GM_info.script.version,
        date            : isSC ? GM_getMetadata("date")[0]
          : tzAio.getMeta(new RegExp("//\\s*@date\\s+([0-9\\-]+)","i"), 1),
        link            : isSC ? GM_getMetadata("homepage")[0]
          : tzAio.getMeta(new RegExp("//\\s*@homepage\\s+(\\S+)","i"), 1),
        icon            : isSC ? GM_getMetadata("icon")[0]
          : tzAio.getMeta(new RegExp("//\\s*@icon\\s+(\\S+)","i"), 1),
        gitHubIssues    : isSC ? GM_getMetadata("supporturl")[0]
          : tzAio.getMeta(new RegExp("//\\s*@supportURL\\s+(\\S+)","i"), 1),
        searchEngines   : [
          "search_imdb|http://www.imdb.com/find?s=all&amp;q=%s",
          "rotten_tomatoes|http://www.rottentomatoes.com/search/full_search.php?search=%s",
          "itunes|http://ax.itunes.apple.com/WebObjects/MZSearch.woa/wa/search?term=%s",
          "amazon|http://www.amazon.com/s/?field-keywords=%s",
          "wikipedia|http://en.wikipedia.org/w/index.php?search=%s",
          "google|https://www.google.com/search?q=%s"
        ],
        defaultTrackers : [
          "udp://tracker.istole.it:80/",
          "udp://tracker.openbittorrent.com:80/",
          "udp://tracker.ccc.de:80/",
          "udp://tracker.publicbt.com:80/",
          "http://tracker.istole.it:80/",
          "http://tracker.openbittorrent.com:80/",
          "http://tracker.ccc.de:80/",
          "http://tracker.publicbt.com:80/",
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
        noRefUrl        : "http://href.li/?",
        removeAds       : true,
        searchHighlight : true,
        linkComments    : true,
        ajaxedSorting   : true,
        forceHTTPS      : false
      };
      // if unknown script engine, it pbly breaks here
      userjsObject.gitHub = userjsObject.gitHubIssues.replace(/issues\/?$/,"");
      return userjsObject;
    },
    sendLog         = function (message, callback) {
      var logSize = 0,
        pushed
      ;
      if ( typeof this.logs === "undefined" ) {
        this.logs = [];
      }
      pushed = this.logs.push(message);
      logSize = this.logs.length;
      if ( typeof w.console !== "undefined" ) {
        if ( message && !(message.toString().match(/^(Starting|Load\:|Exec\:|Thanks\sfor)/)) ) {
          w.console.log("--- TzAio logs[" + (logSize-1) + "] ---");
        }
        w.console.log(message);
      } else if ( typeof console === "function" && console.log ) {
        console.log(message);
      } else if ( typeof GM_log === "function" ) {
        GM_log(message);
      }
      if ( callback && typeof callback === "function" ) {
        callback();
      }
    }
  ;

  try {

    tzAio = {

      getPageParmaters    : function () {
        return {
          protocol : w.location.protocol,
          host     : w.location.hostname,
          path     : w.location.pathname,
          domain   : w.document.domain,
          thash    : w.location.pathname.replace(/\x2F/g,""),
          search   : w.location.search,
          // remove hash to enable refreshing the page with location.href
          href     : w.location.href.replace(w.location.hash,"").replace(/\#$/,"")
        };
      },

      cssElements         : {
        // search results highlighing
        // added as css classes, not by style
        // if you change these, remember to flush the session storage
        SRTV         : "#F5C0BF",
        SRMOVIE      : "#FCD1C0",
        SRGAME       : "#F2C3A1",
        SRBOOK       : "#CCDBEB",
        SRMUSIC      : "#D3E8C2",
        SRAPP        : "#EDEDF0",
        SRPICTURE    : "#E0C4DA",
        SRMISC       : "#DDBFDD",
        SRANIME      : "#F4DE7A",
        SRPINK       : "#FFBFE2",
        DMCA         : "#EDF2F8",
        // all other elements
        TZBLUE       : "#369",
        LIGHTTZBLUE  : "#90B2D5",
        DARKTZBLUE   : "#0C2C4C",
        TZPINK       : "#f5dfd6",
        LIGHTPINK    : "#faefeb",
        WHITE        : "#fff",
        BLACK        : "#000",
        INACTIVEGRAY : "#888",
        FORMGRAY     : "#F1F2F3",
        LOGOHOVER    : "#b3cce6",
        DARKGRAY     : "#333",
        MILKWHITE    : "#eee",
        GREEN        : "#00b900",
        BROWN        : "#805B4D",
        TEXTBROWN    : "#6B3F2E",
        GRAY         : "#AAA",
        LIGHTGRAY    : "#ccc",
        LIGHTGREEN   : "#d4ffd4",
        ORANGE       : "#F51",
        WARNRED      : "#CC0000",
        SOFTBLUE     : "#BCC6CF",
        RGBAWHITE08  : "rgba(255,255,255,0.8)",
        RGBAWHITE03  : "rgba(255,255,255,0.3)",
        RGBABLACK02  : "rgba(0,0,0,0.2)",
        RGBABLACK01  : "rgba(0,0,0,0.1)",
        RGBATRANSP   : "rgba(255,255,255,0)",
        INFORMATION  : "/img/information.png",
        RSSIMG       : "/img/rss.png"
      },

      searchGenres        : [
        // remember to catch the obvious first, ten re-check / trap further down
        {
          name : "pink",
          // idea: option to filter out the results, for the shy ones
          pattern : new RegExp(unescape("%28%70%72%6F%6E%7C%70%6F%72%6E%7C%70%30%72%6E%7C%70%72%30"
            + "%6E%7C%78%78%78%7C%61%64%75%6C%74%7C%5C%62%73%65%78%5C%62%7C%5C%62%31%38%5C%2B%3F%5C%62%29"), "i")
        }, {
          name : "tv",
          pattern : new RegExp("((\\W|_)(sd|ez|et)?tv(\\W|_)|\\blol\\b|(\\W|_)s[0-9]{2}e[0-9]{2}(\\W|_)|"
            + "tvteam|discovery|hdtv|television|series|\\bshows?\\b|episodes?|\\bseasons?\\b)","i")
        }, {
          name : "movie",
          pattern : new RegExp("(movie|film|maxspeed|axxo|feature|video|dvdscr|screener|(\\W|_)cam(rip)?"
            + "\\b|\\br[3-6]\\b|\\bts\\b|telesync|\\bvod(rip)?)","i")
        }, {
          name : "book",
          pattern : new RegExp("(\\be?book|epub|pdf|document|m4b|audiobook|audible|\\bcbr\\b|comics)","i")
        }, {
          name : "game",
          pattern : new RegExp("(games?\\b|xbox|ps[x234]|wii|\\broms?(et)?\\b|playstation|nintendo)","i")
        }, {
          name : "music",
          pattern : new RegExp("(music|audio|\\bpop\\b|\\brock\\b|flac|lossless|album\\b|consert|"
            + "bootleg|mp3|\\bogg\\b|wav|m4a|podcast|\\bost\\b)","i")
        }, {
          name : "app",
          pattern : new RegExp("(software|apps?(lications)?\\b|\\bos[a-z]?\\b|\\bos\\b|\\bunix\\b"
            + "|\\blinux\\b|\\bsolaris\\b|\\bwin(dows|([7-9]|xp))?\\b|\\bmac\\b|\\bx64\\b|\\bx86\\b"
            + "|\\bandroid\\b|\\bpsp\\b|\\bios\\b|\\bpc\\b)","i")
        }, {
          name : "picture",
          pattern : new RegExp("(picture|images|gallery)","i")
        }, {
          name : "anime",
          pattern : new RegExp("anime\\b","i")
        }, {
          name : "movie",
          pattern : new RegExp("(1080p|720p|bluray|blueray|480p|wmv|avi|matroska|mkv"
            + "|highres|264|xvid|divx|bdrip|brrip|hdrip)","i")
        }, {
          name : "misc",
          pattern : new RegExp("(other|\\bmisc|un(sorted|known|defined)|siterip)","i")
        }
      ],

      getDirectTorrentLinks     : function (href, hash, title, titleEnc) {
        if ( !href || !hash || !title || !titleEnc ) {
          sendLog("[getDirectTorrentLinks] is missing paramenters!");
        } else {
          var hash      = hash.toLowerCase(),
            HASH        = hash.toUpperCase(),
            torCacheUrl = "http://torcache.net/torrent/" + HASH + ".torrent?title=" + titleEnc,
            torRageUrl  = "http://torrage.com/torrent/" + HASH + ".torrent",
            directHref  = null,
            directMatch = null,
            slashSplit  = href.split("/")
          ;
          if ( ~href.indexOf("movietorrents.eu/") ) {
            // last checked 2012-07-25
            // movietorrents.eu/torrents-details.php?id=1421
            // movietorrents.eu/download.php?id=1421&name=Ubuntu%20iso%20file.torrent
            directMatch = href.match(/(\?|&)id=(\d+)/);
            directHref = directMatch && directMatch.length === 3 ? "http://movietorrents.eu/download.php?id="
              + directMatch[2] + "&name=" + titleEnc + ".torrent" : null;
          } else if ( ~href.indexOf("publichd.eu/") ) {
            // last checked 2012-07-23
            // publichd.eu/index.php?page=torrent-details&id=bae62a9932ec69bc6687a6d399ccb9d89d00d455
            // publichd.eu/download.php?id=bae62a9932ec69bc6687a6d399ccb9d89d00d455&f=ubuntu-10.10-dvd-i386.iso.torrent
            directHref = "http://publichd.eu/download.php?id=" + hash + "&f=" + titleEnc + ".torrent";
          } else if ( ~href.indexOf("btmon.com/") ) {
            // last checked 2012-05-13
            // www.btmon.com/Applications/Unsorted/ubuntu-10.10-dvd-i386.iso.torrent.html
            // www.btmon.com/Applications/Unsorted/ubuntu-10.10-dvd-i386.iso.torrent
            directHref = href.replace(/\.html$/i, "");
          } else if ( ~href.indexOf("torrentdownloads.net/") ) {
            // last checked 2012-05-13
            // www.torrentdownloads.net/torrent/1652094016/ubuntu-10+10-desktop-i386+iso
            // www.torrentdownloads.net/download/1652094016/ubuntu-10+10-desktop-i386+iso
            directHref = href.replace(/(\.net\/)torrent(\/)/i,"$1download$2");
          } else if ( ~href.indexOf("kat.ph/") || ~href.indexOf("kickasstorrents.com/") ) {
            // last checked 2012-05-13
            // www.kickasstorrents.com/ubuntu-10-10-dvd-i386-iso-t4657293.html
            // torcache.net/torrent/BAE62A9932EC69BC6687A6D399CCB9D89D00D455.torrent?title=[kat.ph]ubuntu-10-10-dvd-i386
            directHref = torCacheUrl;
          } else if ( ~href.indexOf("h33t.com/tor") ) {
            // last checked 2012-05-13
            // h33t.com/tor/999999/ubuntu-10.10-dvd-i386.iso-h33t
            // h33t.com/download.php?id=bae62a9932ec69bc6687a6d399ccb9d89d00d455&f=Ubuntu%2010.10%20-%20DVD%20-%20i386.iso.torrent
            directHref = "http://h33t.com/download.php?id=" + hash + "&f=" + titleEnc + "%5D%5Bh33t%5D.torrent";
          } else if ( ~href.indexOf("newtorrents.info/torrent") ) {
            // last checked 2012-05-13
            // www.newtorrents.info/torrent/99999/Ubuntu-10-10-DVD-i386.html?nopop=1
            // www.newtorrents.info/down.php?id=99999
            directHref = slashSplit && slashSplit.length >= 5 ? "http://" + slashSplit[2]
              + "/down.php?id=" + slashSplit[4] : null;
          } else if ( ~href.indexOf("fenopy.eu/torrent") ) {
            // last checked 2012-05-13
            // fenopy.com/torrent/ubuntu+10+10+dvd+i386+iso/NjMxNjcwMA
            // fenopy.com/torrent/ubuntu+10+10+dvd+i386+iso/NjMxNjcwMA==/download.torrent
            // seems to use torcache but this works too
            directHref = href + "==/download.torrent";
          } else if ( ~href.indexOf("extratorrent.com/torrent") ) {
            // last checked 2012-05-13
            // extratorrent.com/torrent/9999999/Ubuntu-10-10-DVD-i386.html
            // extratorrent.com/download/9999999/Ubuntu-10-10-DVD-i386.torrent
            directHref = href.replace(/(\.com\/torrent)/i, ".com/download").replace(/\.html$/i, ".torrent");
          } else if ( ~href.indexOf("bitsnoop.com/") ) {
            // last checked 2012-05-13
            // bitsnoop.com/ubuntu-10-10-dvd-i386-q17900716.html
            // torrage.com/torrent/BAE62A9932EC69BC6687A6D399CCB9D89D00D455.torrent
            directHref = torRageUrl;
          } else if ( ~href.indexOf("bt-chat.com/") ) {
            // last checked 2012-05-13
            // Site was malware flagged so I don't know if this still works
            // www.bt-chat.com/details.php?id=999999
            // www.bt-chat.com/download.php?id=999999
            directHref = href.replace(/\/details\.php/i, "/download.php");
          } else if ( ~href.indexOf("1337x.org/") ) {
            // last checked 2012-05-13
            // 1337x.org/torrent/999999/ubuntu-10-10-dvd-i386/
            directHref = torCacheUrl;
          } else if ( ~href.indexOf("torrentfunk.com/torrent/") ) {
            // last checked 2012-05-13
            // www.torrentfunk.com/torrent/9999999/ubuntu-10-10-dvd-i386.html
            // www.torrentfunk.com/tor/9999999.torrent
            directHref = slashSplit && slashSplit.length >= 5 ? "http://www.torrentfunk.com/tor/"
              + slashSplit[4] + ".torrent" : null;
          } else if ( ~href.indexOf("torrentstate.com/") ) {
            // last checked 2012-05-13
            // Site was down so I don't know if this still works
            // www.torrentstate.com/ubuntu-10-10-dvd-i386-iso-t4657293.html
            // www.torrentstate.com/download/BAE62A9932EC69BC6687A6D399CCB9D89D00D455
            directHref = "http://www.torrentstate.com/download/" + HASH;
          } else if ( ~href.indexOf("torlock.com/torrent/") ) {
            // last checked 2012-05-13
            // www.torlock.com/torrent/1702956/21-jump-street-2012-r5-new-line-inspiral.html
            // dl.torlock.com/1702956.torrent
            directHref = slashSplit && slashSplit.length >= 5 ? "http://dl.torlock.com/"
              + slashSplit[4] + ".torrent" : null;
          } else if ( ~href.indexOf("torrenthound.com/hash") ) {
            // last checked 2012-05-13
            // www.torrenthound.com/hash/bae62a9932ec69bc6687a6d399ccb9d89d00d455/torrent-info/ubuntu-10.10-dvd-i386.iso
            // www.torrenthound.com/torrent/bae62a9932ec69bc6687a6d399ccb9d89d00d455
            directHref = "http://www.torrenthound.com/torrent/" + hash;
          } else if ( ~href.indexOf("vertor.com/torrents") ) {
            // last checked 2012-05-13
            // www.vertor.com/torrents/2191958/Ubuntu-10-10-Maverick-Meerkat-%28Desktop-Intel-x86%29
            // www.vertor.com/index.php?mod=download&id=2191958
            directHref = slashSplit && slashSplit.length >= 5 ? "http://www.vertor.com/index.php?mod=download&id="
              + slashSplit[4] : null;
          } else if ( ~href.indexOf("yourbittorrent.com/torrent/") ) {
            // last checked 2012-05-13
            // www.yourbittorrent.com/torrent/212911/ubuntu-10-10-desktop-i386-iso.html
            // www.yourbittorrent.com/down/212911.torrent
            directHref = slashSplit && slashSplit.length >= 5 ? "http://yourbittorrent.com/down/"
              + slashSplit[4] + ".torrent" : null;
          } else if ( ~href.indexOf("torrents.net/torrent") ) {
            // last checked 2012-05-13
            // www.torrents.net/torrent/9999999/Ubuntu-10-10-DVD-i386.html/
            // www.torrents.net/down/9999999.torrent
            directHref = slashSplit && slashSplit.length >= 5 ? "http://www.torrents.net/down/"
              + slashSplit[4] + ".torrent" : null;
          } else if ( ~href.indexOf("torrentbit.net/torrent") ) {
            // last checked 2012-05-13
            // www.torrentbit.net/torrent/1903618/Ubuntu11.04%20Desktop%20i386%20ISO/
            // www.torrentbit.net/get/1903618
            directHref = slashSplit && slashSplit.length >= 5 ? "http://www.torrentbit.net/get/"
              + slashSplit[4] : null;
          } else if ( ~href.indexOf("coda.fm/albums") ) {
            // last checked 2012-05-13
            // coda.fm/albums/9999
            // coda.fm/albums/9999/torrent/download?file=Title+of+torrent.torrent
            directHref = slashSplit && slashSplit.length >= 5 ? "http://coda.fm/albums/"
              + slashSplit[4] + "/torrent/download?file=" + titleEnc + ".torrent" : null;
          } else if ( ~href.indexOf("swesub.tv/torrents-details.php") ) {
            // swesub.tv/download.php?id=99999&name=BAE62A9932EC69BC6687A6D399CCB9D89D00D455.torrent
            // swesub.tv/torrents-details.php?id=99999
            directHref = href.replace("torrents-details.php?","download.php?") + "&name="
              + HASH + ".torrent";
          } else if ( ~href.indexOf("take.fm/movies") ) {
            // last checked 2012-05-13
            // take.fm/movies/999/releases/9999
            // take.fm/movies/999/releases/9999/torrent/download?file=Title+of+torrent.torrent
            directHref = slashSplit && slashSplit.length >= 7 ? "http://take.fm/movies/" + slashSplit[4]
              + "/releases/" + slashSplit[6] + "/torrent/download?file=" + titleEnc + ".torrent" : null;
          } else if ( ~href.indexOf("torrage.com/torrent") ) {
            // torrage.com/torrent/BAE62A9932EC69BC6687A6D399CCB9D89D00D455.torrent
            directHref = href;
          } else if ( ~href.indexOf("torcache.net/torrent") ) {
            // torcache.net/torrent/BAE62A9932EC69BC6687A6D399CCB9D89D00D455.torrent
            directHref = href;
          } else if ( ~href.indexOf("zoink.it/torrent") ) {
            // zoink.it/torrent/BAE62A9932EC69BC6687A6D399CCB9D89D00D455.torrent
            directHref = href;
          }
          return directHref;
        }
      },

      makeBool            : function (e) {
        var testStr  = e ? this.truncateString(e.toString()) : "",
          returnBool = testStr.match(/^true$/i) ? true : testStr.match(/^false$/i)
            ? false : undefined;
        return returnBool;
      },

      stringValueS        : function (i) {
        return ( i === 1 ? "" : "s" );
      },

      formatNumbers       : function (i, roundHundreds) {
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
          returnStr = (i.toString().replace(/(\d+)(\d{3})$/,"$1,$2"));
        } else {
          returnStr = i.toString();
        }
        return returnStr;
      },

      removeDocOnclick    : function () {
        if ( document.onclick !== null ) {
          document.onclick = null;
        }
      },

      setStorageOptions    : function (storeObj, callback) {
        var jStorageKeys,
          returnSavedValue,
          i
        ;
        if ( storeObj ) {
          // pass though new values that are to be saved, ex. version (2.1.0)
          storeObj = underScore.defaults(storeObj, this.userScript);
          GM_setValue(this.userScript.slug + "_useroptions", JSON.stringify(storeObj));
          returnSavedValue = GM_getValue(this.userScript.slug + "_useroptions", false);

        // reset values
        } else if ( !storeObj ) {
          GM_deleteValue(this.userScript.slug + "_useroptions");
          $.jStorage.deleteKey(this.userScript.slug + "_versionCheck");
          $.jStorage.deleteKey(this.userScript.slug + "_searchEngines");
          $.jStorage.deleteKey(this.userScript.slug + "_defaultTrackers");
          $.jStorage.deleteKey(this.userScript.slug + "_removeAds");
          $.jStorage.deleteKey(this.userScript.slug + "_searchHighlight");
          $.jStorage.deleteKey(this.userScript.slug + "_linkComments");
        } 
        if ( callback && typeof callback === "function" ) {
          callback(returnSavedValue);
        }
      },

      importOldOptions    : function () {
        return {
          searchEngines     : $.jStorage.get(this.userScript.slug + "_searchEngines"),
          defaultTrackers   : $.jStorage.get(this.userScript.slug + "_defaultTrackers"),
          removeAds         : $.jStorage.get(this.userScript.slug + "_removeAds"),
          searchHighlight   : $.jStorage.get(this.userScript.slug + "_searchHighlight"),
          linkComments      : $.jStorage.get(this.userScript.slug + "_linkComments")
        };
      },

      getGMstorage        : function () {
        var stored = GM_getValue(this.userScript.slug + "_useroptions", false);
        if ( stored ) {
          return JSON.parse(stored);
        }
      },

      unselectSelection   : function () {
        // be nice, unselect the selected text
        w.getSelection().collapseToStart();
      },

      isFalse             : function (x) {
        if ( typeof x !== "undefined" && underScore.isBoolean(x) && x === false ) {
          return true;
        }
      },

      isTrue              : function (x) {
        if ( typeof x !== "undefined" && underScore.isBoolean(x) && x === true ) {
          return true;
        }
      },

      noModKeys           : function (i) {
        return (this.isFalse(i.ctrlKey) && this.isFalse(i.shiftKey) && this.isFalse(i.altKey)
          && this.isFalse(i.metaKey));
      },

      truncateString      : function (s) {
        var returnStr = s ? s.toString().replace(/^\s+/,"").replace(/\s+$/,"") : s;
        return returnStr;
      },

      validUserInput      : function (urls) {
        var checkArray,
          returnBool  = true,
          i
        ;
        // pass through empty values
        if ( urls.match(/\S/) ) {
          checkArray = underScore.compact(this.truncateString(urls).split(/\s+/));
          for ( i = 0; i < checkArray.length; i++ ) {
            if ( !this.truncateString(checkArray[i]).match(this.cachedValues.matchUrlPatt) ) {
              returnBool = false;
              break;
            }
          }
        }
        return returnBool;
      },

      isAnyInputFocused   : function () {
        var $activeEl   = $(document.activeElement),
          $activeParent = $activeEl.parent(),
          $activeParent = $activeParent.length ? $activeParent : $activeEl
        ;
        return ( $activeEl.length && $activeEl.is(":input")
          && $activeParent.attr("id") !== "copy_tr_textarea" );
      },

      getNodeNumber       : function (nodeEl, getNumber) {
        var getNumber  = getNumber !== undefined ? getNumber : true,
          numberMatch  = nodeEl.textContent.replace(/[^\-\+0-9]/gi,"").match(/((?:\-|\+)?\d+)/),
          numberConv   = numberMatch && numberMatch.length === 2 ? Number(numberMatch[1]) : 0,
          numberStr    = numberConv.toString(),
          returnThis   = 0
        ;
        if ( getNumber && numberConv && !isNaN(numberConv) ) {
          returnThis = numberConv;
        } else if ( !getNumber ) {
          returnThis = numberStr;
        }
        return returnThis;
      },

      toggleCopyBox       : function (forceShow, forceHide) {
        var forceShow  = typeof forceShow !== "undefined" ? forceShow : false,
          forceHide  = typeof forceHide !== "undefined" ? forceHide : false,
          isVisible,
          linkHeight = this.cachedValues.copyTrackersLinkHeight
        ;
        // if it's created
        if ( this.selectors.$copyTextArea.length && this.selectors.$copyTrackersLink.length ) {
          isVisible = this.selectors.$copyTextArea.is(":visible");
          if ( forceShow || (!isVisible && !forceHide) ) {
            // Show it
            this.selectors.$copyTextArea.css({
              top : (this.selectors.$copyTrackersLink.offset().top + linkHeight) + "px",
              left : (this.selectors.$copyTrackersLink.offset().left) + "px"
            }).stop().show(300).find("textarea")[0].select();
          } else if ( forceHide || (isVisible && !forceShow) ) {
            // Hide it
            this.selectors.$copyTextArea.stop().hide(200).blur();
          }
        }
      },

      handleKeyUps        : function (e, unselected) {
        var noMods   = tzAio.noModKeys(e),
          unselected = typeof unselected !== "undefined" ? unselected : false,
          key        = +e.which,
          safePlace  = !tzAio.isAnyInputFocused(),
          newTabOpt,
          torrentLinks,
          nextPrevLink
        ;
        if ( !isNaN(key) && safePlace ) {
          if ( unselected || (key === 27 && noMods) ) {
            // 'ESCAPE'
            if ( tzAio.selectors.$settingsForm.hasClass("expand") ) {
              tzAio.selectors.$settingsLink.trigger("click");
              tzAio.selectors.$bodyANDhtml.animate({
                scrollTop : 1
              }, 0, function () {
                tzAio.selectors.$bodyANDhtml.animate({ scrollTop : 0 }, 0);
              });
            }
            if ( tzAio.cachedValues.isSingle ) {
              tzAio.selectors.$magnetLink.removeClass("active");
              tzAio.selectors.$titleEl.trigger("mousedown");
              tzAio.selectors.$searchBar.empty();
              tzAio.selectors.$body.removeClass("search_ready");
              if ( tzAio.selectors.$copyTextArea.length ) {
                tzAio.toggleCopyBox(false, true);
              }
              // strange range error in Chrome but nothing breaks
              try {
                tzAio.unselectSelection();
              } catch (error) {
                // sendLog("[unselectSelection] Chrome unselect bug?")
                // sendLog(error);
              }
            }
          } else if ( tzAio.cachedValues.isSingle ) {
            if ( key === 68 &&  tzAio.isTrue(e.shiftKey) ) {
              // first direct torrent file
              torrentLinks = $("." + tzAio.userScript.slug + "_dllink");
              if ( torrentLinks.length ) {
                newTabOpt = isTM ? { active : true, insert : true } : isSC ? true : null;
                GM_openInTab(torrentLinks[0].href, newTabOpt);
              } else {
                alert("No .torrent file to download!");
              }
            } else if ( key === 68 && noMods ) {
              // 'd'
              tzAio.handleMagnetClicks(false);
            } else if ( key === 67 && noMods && tzAio.selectors.$copyTextArea.length ) {
              // 'c'
              tzAio.toggleCopyBox();
            }
          } else if ( tzAio.cachedValues.isSearch  ) {
            if ( key === 37 && noMods  ) {
              nextPrevLink = tzAio.selectors.$body.find(".results a[rel='prev']:eq(0)");
            } else if ( key === 39 && noMods ) {
              nextPrevLink = tzAio.selectors.$body.find(".results a[rel='next']:eq(0)");
            }
            if ( typeof nextPrevLink !== "undefined" && nextPrevLink.length ) {
              if ( tzAio.storedSettings.ajaxedSorting ) {
                nextPrevLink.trigger("click");
              } else {
                w.location.href = nextPrevLink[0].href;
              }
            }
          }
        }
      },

      getMeta             : function (patt, index) {
        var matchObject = scriptSource.match(patt),
          returnStr
        ;
        if ( matchObject && matchObject.length >= (index+1) ) {
          returnStr = matchObject[index].toString();
        } else {
          sendLog("[getMeta] " + patt.source + " did not find a match!");
        }
        return returnStr;
      },

      getCss              : function () {
        var cssProps = this.cssElements,
          patt       = null,
          cssStr     = GM_getResourceText("css1")
        ;
        // sass-ish variable replacing $VARIABLE with cssElements.VALUE
        underScore.each(cssProps, function (value, key, cssProps) {
          cssStr = cssStr.replace(new RegExp("\\$" + key + "([^A-Z0-9]|$)","g"), value + "$1");
        });
        return cssStr;
      },

      getMagnetUrl        : function (hash, title, trackers, htmlEnc) {
        var returnStr = this.cachedValues.magnetURI + hash + "&dn="
            + encodeURIComponent(title) + "&tr=",
          trackerStr = encodeURIComponent(this.truncateString(trackers).replace(/\n+/g,"&tr="))
            .replace(/\%26tr\%3D/g, "&tr=")
        ;
        returnStr += trackerStr;
        if ( htmlEnc ) {
          returnStr = underScore.escape(returnStr);
        }
        return returnStr;
      },

      getHelpHtml         : function () {
        var str = "<p><b>" + this.userScript.name + " UserScript</b></p><ul>"
          + "<li>Installed: v" + this.userScript.version + "</li>"
          + "<li>Homepage: <a href='" + this.userScript.link + "'>" + this.userScript.link + "</a></li>"
          + "<li>On Github: <a href='" + this.userScript.gitHub + "'>" + this.userScript.gitHub + "</a></li>"
          + "<li>Changelog: <a href='" + this.userScript.gitHub + "blob/master/Changelog.md'>"
          +   this.userScript.gitHub + "blob/master/Changelog.md</a></li>"
          + "<li>Report issues and feature requests here: <a href='" + this.userScript.gitHubIssues + "'>"
          + this.userScript.gitHubIssues + "</a></li>"
          + "<li>Built using <a href='http://www.jquery.com/'>jQuery</a>, "
          + "<a href='http://underscorejs.org/'>underscore.js</a>, "
          + "<a href='http://www.jstorage.info/'>jStorage</a>, "
          + "<a href='http://code.google.com/p/jquery-json/'>jQuery JSON Plugin</a> "
          + "&amp; the <a href='http://github.com/cowboy/jquery-replacetext/'>jQuery replaceText Plugin</a>."
          + "</li></ul>";
        return str;
      },

      removeAds           : function (page, userOpts, element) {
        var adRemovedClass = "removed_ad",
          frontPageAd
        ;
        if ( userOpts.removeAds ) {
          if ( page === "common" ) {
            // also remove common ads here once
            this.selectors.$body.addClass("no_ads")
              // removed: might remove addons like LastPass
              // .find("object, embed, iframe").filter(":not([src^='crome'])").addClass(adRemovedClass).end()
              .find("p.generic").has("iframe").addClass(adRemovedClass);
            this.removeDocOnclick();
          }
          if ( page === "single" ) {
            this.selectors.$pImageAd = this.selectors.$firstInfoDiv.prev().has("a img");
            this.selectors.$firstDl = this.selectors.$downloadDiv.find(" > dl:eq(0)");
            if ( this.selectors.$firstInfoDiv.length && this.selectors.$firstInfoDiv.text().match(/btguard/i) ) {
              this.selectors.$firstInfoDiv.addClass(adRemovedClass);
            }
            if ( this.selectors.$firstDl.text().match(/(direct\s+download|sponsored\s+link)/i) ) {
              this.selectors.$firstDl.addClass(adRemovedClass);
            }
            if ( this.selectors.$pImageAd.length ) {
              this.selectors.$pImageAd.addClass(adRemovedClass);
            }
          } else if ( page === "search" && element && element.length ) {
            if ( element.find("h2").text().match(/sponsored/i) ) {
              element.addClass(adRemovedClass);
            }
            element.prev().has("a img").addClass(adRemovedClass);
            this.selectors.$body.find(" > div.sponsored").addClass(adRemovedClass);
          } else if ( page === "splash" ) {
            // Old Ads that might popup later again
            frontPageAd = this.selectors.$body.find(" > p a img");
            if (frontPageAd.length && frontPageAd.parent().parent().is("p")) {
              frontPageAd.parent().parent().hide();
            }
          }
        }
        return true;
      },

      linkifyCommentLinks : function (opts) {
        var replaceWith = "<a href='" + opts.noRefUrl + "$1'>$1</a>",
          delayInt
        ;
        if ( opts.linkComments ) {
          delayInt = setTimeout(function(){
            // Linkify visible comments
            if ( tzAio.selectors.$comments.length ) {
              tzAio.selectors.$commentsLinked = tzAio.selectors.$comments.find(".com:visible:contains('http')")
                .each(function(i, el){
                  $(el).replaceText(tzAio.cachedValues.linkifyPatt, replaceWith);
                }
              );
            }
          }, 750);
        }
      },

      doDirectTorrentLink : function (index, link) {
        var dlink = link && link.href
          ? tzAio.getDirectTorrentLinks(link.href, tzAio.page.thash, tzAio.page.title,
            tzAio.page.titleEnc) : null;
        if ( dlink ) {
          $(link).before("<a href='" + dlink + "' class='" + tzAio.userScript.slug
            + "_dllink' target='_blank'><em>Download&#160;.torrent</em></a>");
        }
      },

      getSettingsHtml     : function (opts, trackersString, oldUser) {
        var checkHighlight  = opts.searchHighlight ? " checked='checked' " : " ",
          checkAds          = opts.removeAds ?       " checked='checked' " : " ",
          checkCommentLinks = opts.linkComments ?    " checked='checked' " : " ",
          checkAjaxSorting  = opts.ajaxedSorting ?   " checked='checked' " : " ",
          checkForceHTTPS   = opts.forceHTTPS ?      " checked='checked' " : " ",
          oldUserInfo       = oldUser ? "<br><span class='warn_old_user'>Your old settings were "
            + "imported and will be saved more permanently when you hit save!</span>" : "",
          str = "<p class='generic " + this.userScript.slug + "_info_p' style='"
          + "background-image:url("+ this.userScript.icon + ");'>"
          + "<a href='" + this.userScript.link + "'>Torrent All-in-One</a> "
          + "v" + this.userScript.version + " &mdash; "
          + "Use <kbd>'C'</kbd> to toggle the tracker box, <kbd>'D'</kbd> "
          + "to trigger the magnet-link, and <kbd>'SHIFT+D'</kbd> to download the first "
          + "torrent-file listed. &mdash; "
          + "Like this userscript? Then please take a minute to rate and/or review this on <a href='"
          + this.userScript.link + "'>userscipts.org</a>." + oldUserInfo + "<br><em>Also hosted on "
          + "<a href='" + this.userScript.gitHub + "'>GitHub</a>, please report all "
          + "issues and bugs <a href='" + this.userScript.gitHubIssues + "'>here</a> &mdash; "
          + "Last modified: " + this.userScript.date + "</em></p>"
          + "<form id='" + this.userScript.slug + "_settings_submit' class='"
          + this.userScript.slug + "_settings_form profile' method='get' action='"
          + this.page.path + "'><fieldset><legend>TzAio Settings</legend>"
          + "<label for='default_trackers_textarea'>Default trackerlist</label>"
          + "<textarea rows='6' name='track' class='i' id='default_trackers_textarea' wrap='off'>"
          + trackersString + "</textarea><p>Optional. Default trackerlist (these are added to all torrents\' "
          + "trackers, if absent). Note that these are combined with the torrents own trackers, and "
          + "after that duplicates are removed, they get sorted by domain, and finally grouped "
          + "with any backup udp protocols.</p>"
          + "<label for='norefurl'>No referer url</label><input type='text' class='i' id='norefurl' name='norefurl' "
          +  "value='" + opts.noRefUrl + "' placeholder='http://' />"
          + "<p>Optional. This url (if any) is prepended to all comment links, and search-engine links. "
          + "<a href='http://href.li?http://href.li/' target='_blank'>No referer</a> means that outgoing "
          + "links you click here can`t be traced back to " + this.page.domain + ". "
          + "All depending on what url to set it to, of course.</p>"
          + "<label for='default_searchengines_textarea'>Search engines list</label>"
          + "<textarea id='default_searchengines_textarea' wrap='off' "
          + "rows='6' name='searching' class='i'>" + (opts.searchEngines.join("\n"))
          + "</textarea><p>Optional. Search engines for the select-to-search feature (title|url formatting, "
          + "use <code>%s</code> to indicate keyword, and <code>_</code> to indicate a space). "
          + "<em>How do I use it?</em> &mdash; On the torrent page, select some text in the title "
          + "with the name of the torrent, and the links listed here will appear as links underneith.</p>"
          +   "<p><input type='checkbox' name='forceHTTPS' value='forceHTTPS'" + checkForceHTTPS + "id='forceHTTPS' />"
          +   "<label for='forceHTTPS' title='This will redirect all pages to secure SSL, beware that if HTTPS"
          +   " is unavailable, you have to try another mirror and turn this option off again. "
          +   "That`s why this option is turned off by default.'>Force HTTPS</label>"
          +   "<input type='checkbox' name='removeAds' value='removeAds'" + checkAds + "id='removeAds' />"
          +   "<label for='removeAds'>Hide Ads</label>"
          +   "<input type='checkbox' name='searchHighlight' value='searchHighlight' "
          +     "id='searchHighlight'" + checkHighlight + " />"
          +   "<label for='searchHighlight'>Colorful results</label>"
          +   "<input type='checkbox' name='ajaxedSorting' value='ajaxedSorting'"
          +     checkAjaxSorting + "id='ajaxedSorting'>"
          +   "<label for='ajaxedSorting'>Ajaxed sorting</label>"
          +   "<input type='checkbox' name='linkComments' value='linkComments'"
          +     checkCommentLinks + "id='linkComments'>"
          +   "<label for='linkComments'>Fix comment links</label></p>"
          + "<div class='s'><a href='#' id='settings_reset'><span>Reset?</span></a>"
          + "<input type='submit' value='Save' name='save'></div></fieldset></form>"
        ;
        return str;
      },

      setupCopyTextArea   : function (text) {
        var textareaHTML   = "<div id='copy_tr_textarea' class='" + this.userScript.slug + "_copy_textarea'>"
            + "<textarea readonly='readonly' cols='40' rows='10' wrap='off'>"
            + text + "</textarea></div>"
        ;
        this.cachedValues.copyTrackersLinkHeight = this.selectors.$copyTrackersLink.outerHeight();
        this.selectors.$body.append(textareaHTML);
        this.selectors.$copyTextArea = $("#copy_tr_textarea");
        this.selectors.$copyTrackersLink.on("click", function () {
          tzAio.toggleCopyBox();
          return false;
        });
      },

      getSelected         : function () {
        // TODO: 
        // (w||$doc[0]).getSelection().anchorNode.nodeValue
        //  = the targets text node,
        //    counting the node that was the start of the selection.
        //    anchordNode is null if no selection, nodeValue null
        //    if unable to get selection
        var t = "";
        if ( w.getSelection ) {
          t = w.getSelection();
        } else if ( $doc[0].getSelection ) {
          t = $doc[0].getSelection();
        } else if ( $doc[0].selection ) {
          t = $doc[0].selection.createRange().text;
        }
        return t;
      },

      fillSearchBar       : function (event) {
        var selected,
          delayTimeout,
          searchLink = "",
          searchHtml = "",
          _searchEgi = [],
          tempStr, _temp, searchStr,
          leftOffset, widthCalc, cssWidth,
          engineHTMLArr,
          i
        ;
        // a small delay hinders the (before) annoying double popup
        delayTimeout = setTimeout(function () {
          selected = tzAio.getSelected();
          if ( selected.toString().match(/\S/i) ) {
            tzAio.selectors.$titleEl.removeAttr("title");
            tempStr = selected + "";
            tempStr = tempStr
              .replace(/(\W|\_)/ig," ")
              .replace(tzAio.cachedValues.selectTrashPatt," ")
              .replace(tzAio.cachedValues.discardThisForSelect," ")
              .replace(/\s*locations?\s*$/," ")
              .replace(/\s*download\s*$/," ")
              .replace(/\s*torrent\s*$/," ")
              .replace(/\s+/g,"+")
              .replace(/(^\+|\+$)/g,"");
            searchStr = tempStr;
            for ( i = 0; i < tzAio.cachedValues.searchEnginesLen; i++ ) {
              engineHTMLArr = tzAio.storedSettings.searchEngines[i].split("|");
              searchHtml += "<a class='search_link' target='_blank' href='" + tzAio.storedSettings.noRefUrl
                + (engineHTMLArr[1].replace(/%s/g, searchStr))
                + "'>" + engineHTMLArr[0].replace(/_/g," ") + "</a>";
            }
            searchHtml += "<a class='search_link' href='"
              + "/search?f=" + searchStr + "'>torrentz</a><a href='/feed?q=" + searchStr
              + "'><img src='" + tzAio.cssElements.RSSIMG + "' width='16' height='16'></a>";
            if ( searchStr !== "" ) {
              tzAio.selectors.$searchBar.html(searchHtml);
              tzAio.selectors.$body.addClass("search_ready");
            }
          } else {
            tzAio.handleKeyUps(false, true);
          }
        }, 150);
      },

      setupSelectToSearch : function () {
        var discardMatch = this.selectors.$titleEl[0].textContent
          .match(this.cachedValues.selectTrashPatt)
        ;
        this.selectors.$titleEl.after("<div id='search_bar' class='"
          + this.userScript.slug + "_searchbar'></div>");
        this.selectors.$searchBar = $("#search_bar");
        this.cachedValues.discardThisForSelect = discardMatch && discardMatch.length
          ? discardMatch[0] : "";
        this.selectors.$titleEl
          .attr("title","Select the text in this title to start searching...")
          .bind("mouseup", this.fillSearchBar)
          .bind("mousedown", function (event) {
            tzAio.selectors.$searchBar.empty();
            tzAio.selectors.$body.removeClass("search_ready");
          });
      },

      isVerifiedDownload  : function (votebox) {
        var returnDigit = 0,
          statusDigit,
          negativeEls,
          negativeVotes = 0,
          positiveVotes
        ;
        if ( votebox && votebox.length ) {
          statusDigit = tzAio.getNodeNumber(votebox.find(".status")[0], true);
          if ( statusDigit >= 3 ) {
            returnDigit = 1;
          } else if ( statusDigit < 0 ) {
            returnDigit = -1;
          } else {
            // count the other boxes and compare
            positiveVotes = tzAio.getNodeNumber(votebox.find(".up")[0], true);
            negativeEls = votebox.find(".replist").has("a + a + a").each(function (index, element) {
              var negMatch = tzAio.getNodeNumber(element, true);
              negativeVotes += negMatch;
            });
            if ( positiveVotes >= 7 && (positiveVotes+negativeVotes) >= 2 ) {
              returnDigit = 1;
            }
          }
        }
        // Debug log
        // sendLog( "statusDigit = " + statusDigit + "\nreturnDigit = " + returnDigit
        //   +  ( typeof positiveVotes === "number" ? "\n( positiveVotes >= 7 && (positiveVotes+negativeVotes) >= 2 )\n =  "
        //   + "( " + (positiveVotes).toString() + " >= 7 && (" + (positiveVotes).toString()
        //   + "+" + (negativeVotes).toString() + ") >= 2 )" + "\n >> "
        //   + (( positiveVotes >= 7 && (positiveVotes+negativeVotes) >= 2 )).toString() : "") );
        return returnDigit;
      },

      extractLeveledArray : function ( arr, level ) {
        var returnArr = [],
          i,
          errMsg
        ;
        for ( i = 0; i < arr.length; i++ ) {
          if ( arr[i] && arr[i][level] ) {
            returnArr.push( arr[i][level] );
          } else {
            errMsg = "[extractLeveledArray] couldn't extract that level!";
            sendLog(errMsg);
            throw new Error(errMsg);
            break;
          }
        }
        return returnArr;
      },

      sortTrByProtocol    : function (_arr) {
        // finalTrackerSorting
        var newArr  = [],
          udpPopped = null,
          prev      = null,
          i
        ;
        for ( i = 0; i < _arr.length; i++ ) {
          udpPopped = null;
          prev = i >= 1 ? _arr[(i-1)] : "";
          if ( prev.replace(/^udp/,"") == _arr[i].replace(/^https?/,"") ) {
            udpPopped = newArr.pop();
            newArr.push(_arr[i]);
            newArr.push(udpPopped);
          } else {
            newArr.push(_arr[i]);
          }
        }
        return newArr;
      },

      sortTrackers        : function (a, b) {
        var i = 0;
        if ( a[0] > b[0] ) {
          i = 1;
        } else if ( a[0] < b[0] ) {
          i = -1;
        }
        return i;
      },

      getDividedTrackers  : function (arr) {
        var newString = "",
          next        = null,
          i
        ;
        for (i = 0; i < arr.length; i++) {
          next = (i+1) < arr.length ? arr[(i+1)] : "";
          if ( next.replace(/^udp/,"").replace(/\/$/,"").replace(/:80\/?/,"")
            == arr[i].replace(/^https?/,"").replace(/\/$/,"").replace(/:80\/?/,"") ) {
            newString += arr[i] + "\n";
          } else {
            newString += arr[i] + "\n\n";
          }
        }
        newString = newString.replace(/\n+$/,"");
        return newString;
      },

      makeTrackersObject  : function (trackersArray, userTrackers) {
        var slashMatch,
          cleanHost,
          domainSplit,
          domainSplitLen,
          sortingArray = [],
          i,
          x,
          returnObject
        ;
        for ( i = 0; i < trackersArray.length; i++ ) {
          // count slashes
          slashMatch = trackersArray[i].split("/").length - 1;
          if ( slashMatch >= 2 && trackersArray[i].indexOf("://") !== -1 ) {
            // safe to delete beginning
            cleanHost = trackersArray[i].replace(/^[^\/]*\/+/i,"");
          } else {
            cleanHost = trackersArray[i];
          }
          cleanHost = cleanHost.replace(/(:[0-9]+|\/).*$/i,"");
          domainSplit = cleanHost.split(".");
          domainSplitLen = domainSplit.length;
          // !example.com
          if ( domainSplitLen > 2 ) {
            // example.co.uk
            if ( cleanHost.match(this.cachedValues.twoPartDomainPatt) ) {
              cleanHost = domainSplit[(domainSplitLen-3)] + "." + domainSplit[(domainSplitLen-2)]
                + "." + domainSplit[(domainSplitLen-1)];
            // !127.0.0.1
            } else if ( !cleanHost.match(/[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+/) ) {
              cleanHost = domainSplit[(domainSplitLen-2)] + "." + domainSplit[(domainSplitLen-1)];
            }
          }
          sortingArray.push( [ cleanHost.toLowerCase(), trackersArray[i] ] );
        }
        newArray = this.extractLeveledArray( sortingArray.sort(this.sortTrackers), 1 );
        newArray = this.sortTrByProtocol( newArray );
        sortedString = this.getDividedTrackers( newArray );
        if ( !userTrackers ) {
          returnObject = {
            userString : sortedString,
            userArray  : newArray
          };
          this.cachedValues.userString = returnObject.userString;
          this.cachedValues.userArray = returnObject.userArray;
        } else if ( userTrackers ) {
          returnObject = {
            allString  : sortedString,
            allArray   : newArray,
            userString : userTrackers.userString,
            userArray  : userTrackers.userArray
          };
        }
        return returnObject;
      },

      makeStatsBar        : function (options, trackers, callback) {
        var mg_trackerList = "", magnetLinkHtml = "", finalHtml = "",
          filesInfoText = "", seedTleach, seedText, minPeersText, i,
          commentText, trackerNumText, copyTrackersHtml, trackerLen, _upLen, _downLen,
          tzCl             = this.userScript.slug,
          wmvPatt          = new RegExp("\\.wmv$","i"),
          trackersDiv      = this.selectors.$body.find("div.trackers:eq(0)"),
          trackerLinks     = trackersDiv.find("dt a"),
          trackerDataEls   = trackersDiv.find("dl:has(a) dd"),
          upElems          = trackerDataEls.find(".u"),
          upElemsLen       = upElems.length,
          upElemsLenI      = -1,
          downElems        = trackerDataEls.find(".d"),
          downElemsLen     = downElems.length,
          downElemsLenI    = -1,
          dhtEls           = trackersDiv.find("dl:eq(0):contains('(DHT)') span.u, "
            + "dl:eq(0):contains('(DHT)') span.d"),
          dhtElsLen        = dhtEls.length,
          dhtElsLenI       = -1,
          dhtElsMax,
          seedColor        = "black",
          seedTitle        = "S<span class='divided'>&frasl;</span>L &asymp;",
          filesDiv         = this.selectors.$body.find("div.files:eq(0)"),
          fileLinks        = filesDiv.find("a"),
          fileLinksLen     = fileLinks.length,
          fileLinksLenI    = fileLinksLen,
          wmvWarning       = false,
          notActive        = !!(this.selectors.$downloadDiv.next(".error").text()
            .match(/active\s+locations?/i)),
          verDownload      = this.isVerifiedDownload(this.selectors.$body.find(".votebox")),
          verDownloadCl    = verDownload > 0 && !notActive ? "_verified_dl" : notActive
            ? " not_active" : verDownload < 0 ? "_bogus_dl" : "_unverified_dl",
          filesSizeText    = filesDiv.find("div:contains('Size:'):eq(0)").text()
            .replace("Size: ",""),
          commentDiv       = this.selectors.$body.find("div.comments"),
          // not the settings form!
          formFieldset     = this.selectors.$body.find("form.profile[method='post']:eq(0) fieldset"),
          commentCount     = this.selectors.$comments.length,
          htmlDivider      = " <span class='" + tzCl + "_sep'>&#124;</span> ",
          currTrackerList = [], _up = [], _down = [],
          upNum = 0, downNum = 0, topUpNum = 0, topDownNum = 0, seedMeter = 0, minPeers = 0,
          magnetHtml,
          magnetUrl
        ;
        trackerLinks.each(function (index, element) {
          currTrackerList.push( (element.textContent||"") );
        });
        trackers = this.makeTrackersObject(
          underScore.union(
            currTrackerList,
            trackers.userArray
          ),
          trackers.userArray
        );
        trackerLen = trackers.allArray.length;
        // final magnetlink uri
        // this.cachedValues.magnetURI + this.page.thash + "&amp;dn="
        //  + this.page.titleEnc + "&amp;tr=" + trackers.allString.replace(/\n+/g,"&amp;tr=") 
        // getMagnetUrl(this.page.thash, this.page.title, trackers.allString, true)
        magnetLinkHtml = "<a id='" + tzCl + "_magnet_link" + "' class='" + tzCl
          + "_mlink " + tzCl + verDownloadCl + "' href='"
          + (this.getMagnetUrl(this.page.thash, this.page.title, trackers.allString, true))
          + "' title='Fully qualified magnet URI for newer BitTorrent clients, includes"
          + " all " + trackerLen + " tracker" + (this.stringValueS(trackerLen)) + "'>Magnet Link</a>";
        // create seed leach ratio
        while ( (++upElemsLenI < upElemsLen) ) {
          _up[upElemsLenI] = this.getNodeNumber(upElems[upElemsLenI], true);
        }
        while ( (++downElemsLenI < downElemsLen) ) {
          _down[downElemsLenI] = this.getNodeNumber(downElems[downElemsLenI], true);
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
          dhtElsMax = this.getNodeNumber(dhtEls[dhtElsLenI], true);
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
        minPeersText = " <span>" + this.formatNumbers(minPeers, true) + "+ peer"
          + this.stringValueS(minPeers) + "</span>";
        copyTrackersHtml = "<a href='#' id='copylist' class='" + tzCl
          + "_copylink' title='Click to copy the trackerlist'>Copy "
          + trackerLen + " tracker" + (this.stringValueS(trackerLen)) + "</a>";
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
        if ( fileLinksLen ) {
          // as fast as possible
          while (fileLinksLenI--) {
            if ( fileLinks[fileLinksLenI].textContent.match(wmvPatt)
              || fileLinks[fileLinksLenI].href.match(wmvPatt) ) {
              wmvWarning = true;
              fileLinksLenI = 0;
            }
          }
          // filesDiv.attr("id","files_" + tzCl);
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
        this.selectors.$downloadDiv.before("<p id='" + tzCl
          + "' class='" + tzCl + "_info_bar generic "
          + tzCl + verDownloadCl + "'" + this.cachedValues.infoBarCss + ">"
          + finalHtml + "</p>");

        // edit torrentz own magnet link if avaliable
        this.selectors.$copyTrackersLink = $("#copylist");
        this.selectors.$magnetLink = $("#" + tzCl + "_magnet_link");
        this.selectors.$magnetLink.on("click", this.handleMagnetClicks);
        this.selectors.$otherMagnetLinks = this.selectors.$body.find("a[href^='magnet']")
          .not(this.selectors.$magnetLink);
        if ( this.selectors.$otherMagnetLinks.length ) {
          magnetUrl = this.getMagnetUrl(this.page.thash, this.page.title, trackers.allString);
          this.selectors.$otherMagnetLinks.each(function (index, element) {
            $(element).attr("href", magnetUrl);
          });
        }
        if ( !commentCount ) {
          commentDiv.find(" > h2:eq(0)").replaceText(/\(\d+\)/, "(0)");
        }
        if ( callback && typeof callback === "function" ) {
          callback(trackers.allString);
        }
      },

      handleMagnetClicks  : function (event) {
        if ( !event && !this.isAnyInputFocused() ) {
          // :active css class
          this.selectors.$magnetLink.addClass("active");
          w.location.href = this.selectors.$magnetLink[0].href;
          return false;
        } else if ( event ) {
          // illogical, but this removes the override class active
          tzAio.selectors.$magnetLink.removeClass("active");
        }
      },

      ajaxResultsHandler  : function (event) {
        var cachedSearchEl;
        if ( event && event.target && event.target.className
          && event.target.className.indexOf("results") !== -1
          && event.target.tagName && event.target.tagName === "DIV" ) {
          cachedSearchEl = $(event.target);
          tzAio.cachedValues.ajaxTimer = (new Date().getTime());
          if ( !cachedSearchEl.hasClass(tzAio.userScript.slug + "_colorized") ) {
            tzAio.initSearchPage(cachedSearchEl, tzAio.userScript, function (target) {
              // sendLog((target.length) + " ajaxed div." + target[0].className + " - Exec: "
              //   + ((new Date().getTime())-tzAio.cachedValues.ajaxTimer) + "ms");
            });
          }
        }
      },

      doAjaxedSorting       : function (event) {
        var relLink, relMatch;
        if ( this.href ) {
          relMatch = this.href.match(new RegExp(tzAio.page.protocol.replace(":","\\:")
            + "\\/\\/" + tzAio.page.domain.replace(".","\\.") + "(\\/.*)","i"));
          // prevent leaking of unwanted ajax links, shouldn't happen but it's good to remember
          relLink = relMatch && relMatch.length === 2 && relMatch[1] && relMatch[1].indexOf("i?") !== 1
            && relMatch[1].indexOf("feed?") !== 0 ? relMatch[1] : undefined;
          if ( relLink ) {
            tzAio.selectors.$ajaxedResult.removeClass(tzAio.userScript.slug + "_colorized")
              .load(relLink + " div.results > *", function (responseText, textStatus, xhr) {
                tzAio.cachedValues.ajaxTimer = new Date().getTime();
                if ( textStatus == "error") {
                  // sendLog("Sorry, there was an error fetching the page '" + relLink + "'"
                  //   + xhr.status + " " + xhr.statusText);
                  w.location.href = relLink;
                } else {
                  if ( w.history.pushState ) {
                    w.history.pushState("", "", relLink);
                    tzAio.page = tzAio.getPageParmaters();
                  }
                  tzAio.selectors.$body = $("body");
                  tzAio.selectors.$ajaxedResult = tzAio.selectors.$body.find(".results:eq(0)");
                  tzAio.initSearchPage(tzAio.selectors.$ajaxedResult, tzAio.storedSettings, function (target) {
                    // calling unsafeWindow.scrollTop gives us 0
                    if ( typeof window === "object"
                      && ($(window).scrollTop() - tzAio.selectors.$ajaxedResult.offset().top) > 0 ) {
                      tzAio.selectors.$bodyANDhtml.animate({ scrollTop : 0 }, "slow");
                    }
                    if ( tzAio.selectors.$theSearchBox.length && tzAio.page.search ) {
                      var filterMatch = tzAio.page.search.replace(/^\?(?:[a-z]+\=)?\+?(.+)/i,"$1").match(/^([^\&]+)/i);
                      if ( filterMatch && filterMatch.length === 2 && filterMatch[1] ) {
                        tzAio.selectors.$theSearchBox.val(decodeURIComponent(filterMatch[1].replace(/\+/g," ")));
                      }
                    }
                    tzAio.bindAjaxLinks(target);
                    // sendLog((target.length) + " ajaxed div." + target[0].className + " - Exec: "
                    //   + ((new Date().getTime())-tzAio.cachedValues.ajaxTimer) + "ms");
                  });
                }
              })
            ;
            return false;
          }
        }
      },

      bindAjaxLinks       : function ($element) {
        this.selectors.$ajaxedResult = $element;
        this.selectors.$ajaxLinks = $element
          .find(" > div:eq(0) a, > h3:eq(0) a, > p:last a")
          .on("click", this.doAjaxedSorting)
        ;
      },

      dlResultsActions    : function (resultsElement, options, callback) {
        var dlElements      = resultsElement.getElementsByTagName("dl"),
          dlElsLen          = dlElements.length,
          trackerLen        = this.cachedValues.userArray.length,
          trackerSstr       = this.stringValueS(trackerLen),
          tzaioslug         = this.userScript.slug,
          linkPatt          = this.cachedValues.hashPatt,
          doColorize        = options.searchHighlight,
          magnetTitleAppend = " with magnetlink (" + trackerLen
            + " default tracker" + trackerSstr + ")",
          searchGenLen      = this.cachedValues.searchGenresLen,
          currentClName,
          unverifiedClName  = "",
          coloredClName     = "",
          i, torrHash, torrLink, torrLinks, torrTitle, vSpan, dtContent,
          isTrackerList     = this.page.path.indexOf("/tracker_") === 0,
          doneResultClName  = !isTrackerList ? " " + tzaioslug + "_colorized"
            : " " + " " + tzaioslug + "_trackerlist"
        ;
        for ( i = 0; i < dlElsLen; i++ ) {
          unverifiedClName = "";
          currentClName = dlElements[i].className;
          // [initSearchPage] added this class before this func was called
          if ( currentClName.indexOf("dmca") !== -1 ) {
            continue;
          }
          // continue if not link, replace hyphens
          torrLinks = dlElements[i].getElementsByTagName("a");
          if ( !torrLinks.length ) {
            continue;
          } else {
            torrLink = torrLinks[0];
          }
          torrHash = torrLink.href.match(linkPatt)[0];
          torrTitle = torrLink.textContent;
          spanMagnet = document.createElement("SPAN");
          spanMagnet.className = tzaioslug + "_magnet";
          linkMagnet = document.createElement("A");
          linkMagnet.href = this.getMagnetUrl(torrHash, torrTitle, this.cachedValues.userString);
          linkMagnet.title = "Download " + torrTitle + magnetTitleAppend;
          spanMagnet.appendChild(linkMagnet);
          dlElements[i].appendChild(spanMagnet);
          vSpan = dlElements[i].getElementsByClassName("v");
          vSpan = (vSpan && vSpan.length ? vSpan[0] : null);
          // stop if we're on a trackers list; too heavy and doesn't match enough
          if ( vSpan && !isTrackerList ) {
            if ( !/[1-9]/.test(vSpan.textContent) ) {
              // no votes
              unverifiedClName = currentClName + " " + tzaioslug + "_unverified_dl";
            } else if ( /\-[0-9]/.test(vSpan.textContent) ) {
              // negative votes
              unverifiedClName = currentClName + " " + tzaioslug + "_fake_dl";
            }
            // Keyword check
            if ( doColorize && this.searchGenres && this.searchGenres.length ) {
              dtContent = dlElements[i].getElementsByTagName("dt");
              dtContent = dtContent.length ? dtContent[0].textContent : "";
              coloredClName = this.colorizeMatch(dtContent, this.searchGenres, torrTitle);
            }
          }
          coloredClName = coloredClName.length ? " " + coloredClName : "";
          if ( !isTrackerList ) {
            dlElements[i].className = unverifiedClName + coloredClName;
          }
        }
        resultsElement.className += doneResultClName;

        if ( callback && typeof callback === "function" ) {
          callback(resultsElement);
        }
      },

      colorizeMatch       : function (text, genres, title) {
        var torrKeywords = text.replace(title, " "),
          dlTagsMatch    = torrKeywords.match(tzAio.cachedValues.sKeywordPatt),
          dlTags         = dlTagsMatch && dlTagsMatch.length >= 2 && dlTagsMatch[1] ? dlTagsMatch[1] : "",
          secondTryText  = !dlTags ? title.replace(/[^0-9a-zA-Z\-\+]+/," ") : "",
          coloredClName  = "",
          isSecondMatch  = false,
          sLen           = tzAio.cachedValues.searchGenresLen,
          i
        ;
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
      },

      initSearchPage      : function ($resultsEl, options, callback) {
        var searchParameters = this.page.search.match(/^\?f\=(.+)$/i),
          resultsH2, dmcaDl
        ;
        if ( $resultsEl && $resultsEl.length ) {
          
          if ( this.cachedValues.isSearch || this.cachedValues.isSingle )  {
            // Add class to 'X results removed in compliance with EUCD / DMCA' first
            lastListItem = $resultsEl.find("dl:last");
            if ( lastListItem.length && lastListItem.text().match(/removed.+compliance/i) ) {
              lastListItem.addClass("dmca");
            }
            // now insert a final 'p' for single page search results
            if ( options.searchHighlight && lastListItem.length && $resultsEl.find(" > p").length === 0 ) {
              $("<p/>").html(" ").appendTo($resultsEl);
            }
          }
          resultsH2 = $resultsEl.find(" > h2");
          // Add rss link for "approximate match" and no results
          if ( $resultsEl.length === 1 && searchParameters && searchParameters.length >= 2
            && searchParameters[1] && resultsH2.length && !resultsH2.has("img[src*='rss.png']").length ) {

            resultsH2.append("<a class='approximate_rss_link' href='/feed_anyA?q="
              + (searchParameters[1].toString()) + "'>&nbsp;<img width='16' height='16' src='"
              + this.cssElements.RSSIMG + "' title='This RSS feed is empty'></a>")
            ;
          }
          // for every .results div
          $resultsEl.each(function (index, element) {
            if ( element.className.indexOf(tzAio.userScript.slug + "_colorized") === -1 ) {
              tzAio.dlResultsActions(element, options, function (finishedResult) {
                if ( callback && typeof callback === "function" ) {
                  callback($(finishedResult));
                }                
              });
            } else {
              if ( callback && typeof callback === "function" ) {
                callback($resultsEl);
              }
            }
          });

        } else {
          if ( callback && typeof callback === "function" ) {
            callback($resultsEl);
          }
        }
      },

      initSingleTorrent   : function (options, trackers, callback) {
        var infoDivHeight;
        // check for height of div.top before removeAds
        //   and remember that adBlocker removes it first
        //   and that it might not be available at all times
        this.selectors.$firstInfoDiv = this.selectors.$body.find(" > div.info:eq(0)");
        infoDivHeight = this.selectors.$firstInfoDiv.is(":visible")
          ? this.selectors.$firstInfoDiv.outerHeight() - 20 : 0;
          // 20 is the padding t+b of p.generic
        this.cachedValues.infoBarCss = infoDivHeight ? " style='min-height:"
          + infoDivHeight + "px;line-height:" + infoDivHeight + "px;' " : " ";
        // single page selectors
        this.selectors.$downloadDiv = this.selectors.$body.find(".download:eq(0)");
        this.selectors.$torrTitle = this.selectors.$body.find("h2:eq(0) span");
        this.selectors.$titleEl = this.selectors.$body.find("h2:eq(0)");
        this.selectors.$comments = this.selectors.$body.find(".comment");
        // titles
        this.page.title = this.selectors.$torrTitle.text();
        this.page.titleEnc = encodeURIComponent(this.page.title.replace(/\'/g,"_"));
        // remove ads for single page
        // inject download-buttons
        this.removeAds("single", options);
        this.makeStatsBar(options, trackers, function (trackersText) {
          tzAio.setupSelectToSearch();
          tzAio.selectors.$downloadDiv.find("a")
            .not(tzAio.selectors.$otherMagnetLinks)
            .each(tzAio.doDirectTorrentLink);
          tzAio.setupCopyTextArea(trackersText);
          tzAio.linkifyCommentLinks(options);
          if ( callback && typeof callback === "function" ) {
            callback(options, trackers);
          }
        });
      },

      initSettingsPanel   : function (options, trackers, callback) {
        var settingsVisible = false,
          settingsButton    = "<li class='" + this.userScript.slug + "_settings'>"
            + "<a href='#' title='Change TzAio Settings'>TzAio</a>"
        ;
        this.removeAds("common", options);
        this.selectors.$topDiv = this.selectors.$body.find("div.top:eq(0)");
        this.selectors.$settingsEl = this.selectors.$topDiv.after(
            this.getSettingsHtml(options, trackers.userString, this.cachedValues.warnAboutOptions)
          ).find(" > ul").prepend(settingsButton).end();
        this.selectors.$settingsLink = this.selectors.$topDiv.find(" > ul > li."
          + this.userScript.slug + "_settings a");
        this.selectors.$scriptInfoP = this.selectors.$topDiv.next("p.generic");
        this.selectors.$settingsForm = $("#" + this.userScript.slug + "_settings_submit")
          .on("submit", function (event) {
            event.preventDefault();
            var saveTrackers,
              disabledInput    = tzAio.selectors.$settingsForm.find("input[type='submit']")
                .prop("disabled", true),
              importedNotice   = tzAio.cachedValues.warnAboutOptions
                ? "\n(Your previous settings were imported, but nothing is guaranteed!)" : "",
              saveSearchEngines,
              confirmNewStorageRules,
              trackersVal,
              searchEnginesVal,
              validateInput,
              noRefVal,
              invalidItemName,
              submittedOptions = {}
            ;
            tzAio.selectors.$settingsForm.find(":checkbox").each(function (index, element) {
              var settingName = element.name,
                settingValue  = $(element).is(":checked")
              ;
              submittedOptions[settingName] = settingValue;
            });
            tzAio.selectors.$defTrackersTextArea = $("#default_trackers_textarea");
            tzAio.selectors.$defSearchEngTextArea = $("#default_searchengines_textarea");
            tzAio.selectors.$noRefInput = $("#norefurl");
            trackersVal = tzAio.selectors.$defTrackersTextArea.val();
            searchEnginesVal = tzAio.selectors.$defSearchEngTextArea.val();
            noRefVal = tzAio.selectors.$noRefInput.val();

            // Validate inputs to help out user
            trValid = tzAio.validUserInput(trackersVal);
            // shortest match = s|http://i.io/%s
            seValid = (!searchEnginesVal.match(/\S/i) || (tzAio.validUserInput(searchEnginesVal)
              && searchEnginesVal.indexOf("%s") >= 13 && searchEnginesVal.indexOf("|") > 0) );
            nrValid = tzAio.validUserInput(noRefVal);
            
            if ( seValid && trValid && nrValid ) {
              saveTrackers = trackersVal.split(/\s+/);
              saveTrackers = underScore.compact(saveTrackers);
              saveSearchEngines = searchEnginesVal.split(/\s+/);
              saveSearchEngines = underScore.compact(saveSearchEngines);
              submittedOptions.defaultTrackers = saveTrackers;
              submittedOptions.searchEngines = saveSearchEngines;
              submittedOptions.noRefUrl = noRefVal.replace(/^\s+/g,"").replace(/\s+$/g,"");
              if ( tzAio.cachedValues.freshUser ) {
                confirmNewStorageRules = confirm("Settings are now being stored and used "
                  + "across all Torrentz's domains.\nSave and continue?"
                  + importedNotice);
              }
              if ( !tzAio.cachedValues.freshUser || confirmNewStorageRules ) {
                tzAio.setStorageOptions(submittedOptions, function (thisWasSaved) {
                  // log before anything could break, as a debug toll for anyone to submit
                  sendLog( "thisWasSaved" );
                  sendLog(thisWasSaved);
                  if ( thisWasSaved ) {
                    w.sessionStorage.setItem(tzAio.userScript.slug + "_SS_useroptions_saved", "true");
                    w.location.href = tzAio.page.href;
                  } else {
                    disabledInput.prop("disabled", false);
                    alert("You broke something! Try reloading the page..."
                      + tzAio.cachedValues.bugReportMsg);
                    sendLog("GM_getValue(" + tzAio.userScript.slug + "_useroptions) returned false! "
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
              invalidItemName = !seValid ? "Search engines list" : !trValid
              ? "Default trackerlist" : !nrValid ? "No referer url" : "[ERROR]";
              alert("Invalid input in the '" + invalidItemName + "', check your spelling!"
                + tzAio.cachedValues.bugReportMsg);
              disabledInput.prop("disabled", false);
            }
            return false;
          })
        ;
        this.selectors.$settingsLink.on("click", function (event) {
          tzAio.selectors.$scriptInfoP.toggleClass("expand");
          tzAio.selectors.$settingsForm.toggleClass("expand");
          tzAio.selectors.$settingsLink.parent("li").toggleClass("tz_aio_settings_open");
          if ( tzAio.selectors.$copyTextArea && tzAio.selectors.$copyTextArea.length ) {
            tzAio.toggleCopyBox(false, true);
          }
          event.preventDefault();
          return false;
        });
        this.selectors.$resetEl = $("#settings_reset");
        $("#removeAds").attr("checked", options.removeAds);
        $("#searchHighlight").attr("checked", options.searchHighlight);
        $("#linkComments").attr("checked", options.linkComments);
        this.selectors.$resetEl.on("click", function (event) {
          var refresh_page_reset = confirm("This will erase all your custom settings!\nReset settings and reload the page?");
          event.preventDefault();
          if ( refresh_page_reset ) {
            tzAio.setStorageOptions(false, function () {
              w.sessionStorage.setItem(tzAio.userScript.slug + "_SS_useroptions_saved", "true");
              w.location.href = tzAio.page.href;
            });
          }
          return false;
        });

        if ( callback && typeof callback === "function" ) {
          callback(options, trackers);
        }
      },

      setupUserSettings   : function (callback) {
        // Theory: Skip storing anything until user saves manually the first time,
        //   helps avoid errors that breaks every first [unsaved] visit,
        //   plus it's evil to store anything and not letting anyone know
        var newSettings,
          trackers
        ;
        if ( !GM_getValue(this.userScript.slug + "_useroptions", false) ) {
          this.cachedValues.freshUser = true;
          if ( $.jStorage.get(this.userScript.slug + "_defaultTrackers") !== null ) {
            // pre 2.1.0 user with jStorage options
            newSettings = this.importOldOptions();
            this.cachedValues.warnAboutOptions = true;
          } else {
            // first time user
            newSettings = this.userScript;
            sendLog( "Thanks for using " + this.userScript.name + "!" );
          }
        } else {
          // returning user with storage
          newSettings = this.getGMstorage();
        }
        if ( !newSettings )  {
          sendLog( "[setupUserSettings] failed, newSettings is falsy!" );
          return;
        }
        // merge any new settings into newSettings
        //   not when saving because that depends on people always saving
        newSettings = underScore.defaults(newSettings, this.userScript);
        this.storedSettings = newSettings;
        this.storedSettings.defaultTrackers = underScore.compact(this.storedSettings.defaultTrackers);
        this.cachedValues.searchEnginesLen = this.storedSettings.searchEngines.length;
        trackers = this.makeTrackersObject(this.storedSettings.defaultTrackers, false);
        // Redirect users with SSL forced
        if ( this.storedSettings.forceHTTPS ) {
          if ( this.page.protocol === "http:" ) {
            location.href = location.href.replace(/^http:/, "https:");
            return;
          }
        }
        if ( callback && typeof callback === "function" ) {
          callback(newSettings, trackers);
        }
      },

      injectCss             : function () {
        // sessionStorage is a tiny bit faster because we're replacing colors in the file
        //   before appending it, so let's save some ms by caching it
        //   to manually flush: > window.sessionStorage.removeItem("tz_aio_SS_cached_css")
        if ( w.sessionStorage ) {

          var cachedCss = w.sessionStorage.getItem(this.userScript.slug + "_SS_cached_css");

          if ( cachedCss && typeof cachedCss === "string"
            && cachedCss.match(this.cachedValues.cssVersionPatt)
            && ( this.userScript.version === cachedCss.match(this.cachedValues.cssVersionPatt)[1] ) ) {
            // cached css and the same version, safe to re-use
            GM_addStyle(cachedCss);
          } else {
            // updated css version or fresh session
            w.sessionStorage.removeItem(this.userScript.slug + "_SS_cached_css");
            newCss = this.getCss();
            GM_addStyle(newCss);
            w.sessionStorage.setItem(this.userScript.slug + "_SS_cached_css", newCss);
          }

        } else {
          GM_addStyle(this.getCss());
        }
      },

      lastAction          : function () {
        if ( !this.cachedValues.lastActionDone ) {
          this.cachedValues.lastActionDone = true;
          if ( this.makeBool( w.sessionStorage.getItem(this.userScript.slug + "_SS_useroptions_saved") ) === true ) {
            // scroll up bacause user just saved options and window is def. scrolled down a bit
            this.selectors.$bodyANDhtml.animate({ scrollTop : 1 }, 0, function () {
              w.sessionStorage.removeItem(tzAio.userScript.slug + "_SS_useroptions_saved");
              if ( !tzAio.cachedValues.freshUser ) {
                tzAio.selectors.$body.addClass(tzAio.userScript.slug + "_settings_saved");
                setTimeout(function () {
                  tzAio.selectors.$body.removeClass(tzAio.userScript.slug + "_settings_saved");
                }, 5000);
              }
              tzAio.selectors.$bodyANDhtml.animate({ scrollTop : 0 }, 0);
            });
          }
          sendLog("Exec: " + ((new Date().getTime())-execStartMS) + "ms (not inc ajax)");
        }
      },

      selectors           : {},

      tzaio               : true

    };

    // build internal objects
    tzAio.page = tzAio.getPageParmaters();
    tzAio.userScript = new UserScript();

    tzAio.cachedValues = {
      searchGenresLen    : tzAio.searchGenres.length,
      freshUser          : false,
      sKeywordPatt       : /»\s+?(.*)$/i,
      hashPatt           : /[a-zA-Z0-9]{40}/,
      cssVersionPatt     : /^\s*\/\*\s*([0-9.]+)/,
      twoPartDomainPatt  : new RegExp("(\\.com|\\.co|\\.info|\\.mobi|\\.net|\\.ar|\\.as|\\.at|"
        + "\\.bb|\\.bg|\\.br|\\.ca|\\.ch|\\.cn|\\.cs|\\.dk|\\.ee|\\.es|\\.fi|\\.fr|\\.gr|\\.in|"
        + "\\.is|\\.it|\\.jp|\\.lu|\\.no|\\.se|\\.pl|\\.ru|\\.tv|\\.tw|\\.tk|\\.ua|\\.uk|\\.us){2}",""),
      linkifyPatt        : /((htt|ud|ft)ps?\:\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!\:.?+=&%@!\-\/]))?)?/gi,
      matchUrlPatt       : /[-a-zA-Z0-9@:%_\+.~#?&\/\/=]{2,256}\.[a-z]{2,4}(\:[0-9]+)?\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)?/i,
      selectTrashPatt    : /(\s+\d+(\s*torrent)?\s*|\s*torrent\s*|\s*download\s*|\s*locations\s*){1,3}(Download \.torrent[\s\S]*)?$/i,
      warnAboutOptions   : false,
      // https://en.wikipedia.org/wiki/Magnet_URI_scheme
      magnetURI          : "magnet:?xt=urn:btih:",
      bugReportMsg       : "\n(If this problem persists, please get in touch and I'll fix it\n"
        + tzAio.userScript.link + ")"
    };

    $.fn.extend({
      lastAction : function (callback) {
        if ( callback && typeof callback === "function" ) {
          callback(this);
        }
      }
    });

    $.ajaxSetup({ cache : true });

    tzAio.injectCss();

    $doc.ready(function () {

      // Start exec timer
      execStartMS = (new Date().getTime());

      startLogMsg = "Starting " + tzAio.userScript.name + " v" + tzAio.userScript.version + " "
        + tzAio.userScript.date + "\n" + tzAio.userScript.link + "\nEnv.: "
        + environment + "\nLoad: " + ((new Date().getTime())-loadStartMS) + "ms";
      
      tzAio.selectors.$body = $("body");
      tzAio.selectors.$bodyANDhtml = tzAio.selectors.$body.add($("html"));

      // tell the world
      tzAio.selectors.$body.addClass(tzAio.userScript.slug + "_b "
        + tzAio.userScript.slug + "_v" + (tzAio.userScript.version.replace(/\..*/g,"")));

      // init calls
      sendLog(startLogMsg, function () {
        
        tzAio.setupUserSettings(function (userOptions, trackers) {
          
          tzAio.initSettingsPanel(userOptions, trackers, function (options, trackers){
            
            // look for search results
            tzAio.cachedValues.$searchResults = tzAio.selectors.$body.find("div.results");
            tzAio.selectors.$theSearchBox = $("#thesearchbox").prop("tabindex", 1);

            if ( ~tzAio.page.path.indexOf("/profile") ) {

              tzAio.lastAction();

            } else if ( tzAio.page.thash.match(tzAio.cachedValues.hashPatt) ) {
              tzAio.cachedValues.isSingle = true;
              tzAio.initSingleTorrent(options, trackers, function (options, trackers) {
                if ( tzAio.cachedValues.$searchResults.length ) {
                  // Related search results
                  tzAio.initSearchPage(tzAio.cachedValues.$searchResults, options, function (searchElement) {
                    tzAio.lastAction();
                  });
                } else {
                  tzAio.lastAction();
                }
              });

            } else if ( tzAio.page.path.match(/^\/help\/?$/) ) {

              tzAio.selectors.$helpDiv = tzAio.selectors.$body.find("div.help:eq(0)")
                .append(tzAio.getHelpHtml()).lastAction(tzAio.lastAction);

            } else if ( tzAio.page.path === "/" ) {

              tzAio.removeAds("splash", options) && tzAio.lastAction();

            } else if ( tzAio.page.path === "/i"
              || tzAio.page.path.match(/^\/(search|any|verified|advanced|tracker_)/)
              || tzAio.page.path.match(/^\/[a-z]{2,}\//) ) {

              tzAio.removeAds("search", options, tzAio.cachedValues.$searchResults);

              tzAio.initSearchPage(tzAio.cachedValues.$searchResults, options, function (results) {
                if ( tzAio.page.path !== "/i" ) {
                  tzAio.cachedValues.isSearch = true;
                  if ( options.ajaxedSorting ) {
                    tzAio.bindAjaxLinks(results);
                  }
                } else if ( tzAio.page.path === "/i" ) {
                  tzAio.selectors.$body[0].addEventListener("DOMNodeInserted", tzAio.ajaxResultsHandler, true);
                }
                tzAio.lastAction();              
              });
            }
            // listen for keyups on all pages
            $doc.on("keyup", tzAio.handleKeyUps);
          });

        });

      });

    });

  } catch (error) {

    if ( typeof sendLog === "function" ) {
      sendLog(error);
    } else {
      throw new Error(error);
    }

  }

}((unsafeWindow||window), jQuery, (this._||_||unsafeWindow._)));