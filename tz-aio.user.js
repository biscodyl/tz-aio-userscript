// ==UserScript==
// @name          Torrentz All-in-One
// @description   Does everything you wish Torrentz.eu could do!
// @version       2.2.0
// @date          2013-07-08
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
// @exclude       /^https?://[^/]+/feed\?.*/
// @exclude       /^https?://[^/]+/announcelist_.*/
// @exclude       /^https?://[^/]+/report_.*/
// @exclude       /^https?://[^/]+/comment_.*/
// @exclude       /^https?://[^/]+/i\?.+/
// @require       https://cdnjs.cloudflare.com/ajax/libs/jquery/2.0.2/jquery.min.js
// @require       http://elundmark.se/_files/js/tz-aio/tz-aio-plugins.js?v=2-2-0-0
// @resource css1 http://elundmark.se/_files/js/tz-aio/tz-aio-style.css?v=2-2-0-0
// @icon          data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAABNVBMVEUAAAAlSm8lSnAlS3AmS3AmTHImTHMmTXQnTnYnT3coTHEoUXkpUnsqVH4qVYArT3MrV4IsWYUtWoguXIovXo0vX44wYJAwYZIxVHcxYpQxY5UyZJYyZZcyZZgzZpk0Z5k1Z5k2aJo3WXs3aZo8bJ09Xn8+bp5CcaBFZYRHdaJJdqNNeaVPbYtQe6dSfahVf6lYdJFbhKxchK1hiK9iibBjfZhnjLJvh6Bylbhzlrh6m7x8kqh8nb2KnrGNqcWRrMeYqbuYssuas8ymtcSovdOqv9SvwtawxNezv8y2yNq5ytu+ydTD0eDJ0tvJ1uPP2ubT2uLZ4uvc4efe5u7f5+7i6fDl6e3p7vPq7fHq7/Ts8PXu8vbw8vTx9Pf19vj2+Pr4+fr4+fv6+/z8/Pz8/P39/f3///871JlNAAAAAXRSTlMAQObYZgAAAXFJREFUeNrt20dPw0AQBeBs6DX0niGhhN57Db333kJn//9PYOdgCQlYEEJ5Ab13mhnb8nfwYSRrQyGBxr3fQiMEEEAAAW8BkrZ8DJA0hgACCCCAAAIIIIAAAgjwAuy346cvBRdRgC0wIHYFBsxaLGAghQWMnlskoG/12f4c4H1CvIknuoYn59dPrAYBCO4igAAA4H0IIIAAAggggAACCPh3AG+MIQALWDalqI9w/NHNdguLoiBAf8qNzlryGgQD6Dh1k9verBrBAFr3dTJhKgUE2NTBgikTEGBR++3s4igIMK3tUV1+o2AAIw+uu+nMqRUMoOfaNU9j4SrBABLH2syZcsEA4ntab5gSAQHWtDyIFDSBAEmtLtpz6wUDmHpxxf1guFowgKE7LWZMhWAA3ZfBCoABtB3aYAWAAJp37OcrgNgv8guAFRusAACAbykl4I8A+PecAAIIIIAAAggggAACMhQAEPC0HQEEEJBJAPjx/1f83wbVqAm3rAAAAABJRU5ErkJggg==
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
// @grant         GM_setClipboard
// ==/UserScript==

/*
 * Compatibility
 * -------------
 *
 * Tested in Chrome 25+ (Tampermonkey v2.12.3124.16+)
 * and Firefox 19+ (and nightly dev) (GreaseMonkey 1.8+, Scriptish 0.1.8+) on Ubuntu 13.04
 *  
 * Legality
 * --------
 * 
 * Released under CC0 1.0 Universal (http://creativecommons.org/publicdomain/zero/1.0/).
 * The author of this script takes no responsibility for any potetial harm
 * done to any hamsters, servers, browsers or wallets. While browsing
 * affected sites with this script is fully legal,
 * downloading illegal copyrighted material still isn’t.
 * 
*/

(function(w, $, underScore){

  if ( typeof w !== "object" || typeof underScore !== "function" || typeof $ !== "function"
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
  var tzAio
    // Greasemonkey
    ,isGM            = (typeof TM_log !== "function" && typeof GM_info === "object")
    // Scriptish
    ,isSC            = (!isGM && typeof GM_info === "undefined" && typeof GM_getMetadata === "function")
    // Tampermonkey
    ,isTM            = (!isGM && !isSC && typeof TM_log === "function")
    ,environment     = isGM ? "Firefox/GreaseMonkey " : isTM ? "Chrome(-ium)/TamperMonkey "
      : isSC ? "Firefox/Scriptish " : "unknown "
    ,execStartMS
    ,startLogMsg
    ,d               = w.document
    ,scriptSource    = isGM ? GM_info.scriptMetaStr : isTM ? GM_info.scriptSource : ""
    ,UserScript      = function () {
      // if unknown script engine, it pbly breaks here
      this.name = isSC ? GM_getMetadata("name")[0] : GM_info.script.name;
      this.slug = "tz_aio";
      this.version = isSC ? GM_getMetadata("version")[0] : GM_info.script.version;
      this.date = isSC ? GM_getMetadata("date")[0]
        : tzAio.getMeta(new RegExp("//\\s*@date\\s+([0-9\\-]+)","i"), 1);
      this.link = isSC ? GM_getMetadata("homepage")[0]
        : tzAio.getMeta(new RegExp("//\\s*@homepage\\s+(\\S+)","i"), 1);
      this.icon = isSC ? GM_getMetadata("icon")[0]
        : tzAio.getMeta(new RegExp("//\\s*@icon\\s+(\\S+)","i"), 1);
      this.gitHubIssues = isSC ? GM_getMetadata("supporturl")[0]
        : tzAio.getMeta(new RegExp("//\\s*@supportURL\\s+(\\S+)","i"), 1);
      this.gitHub = this.gitHubIssues.replace(/issues\/?$/,"");
      this.searchEngines = [
        "search_imdb|http://www.imdb.com/find?s=all&amp;q=%s"
        ,"rotten_tomatoes|http://www.rottentomatoes.com/search/full_search.php?search=%s"
        ,"itunes|http://ax.itunes.apple.com/WebObjects/MZSearch.woa/wa/search?term=%s"
        ,"amazon|http://www.amazon.com/s/?field-keywords=%s"
        ,"wikipedia|http://en.wikipedia.org/w/index.php?search=%s"
        ,"google|https://www.google.com/search?q=%s"
      ];
      this.defaultTrackers = [
        "udp://tracker.openbittorrent.com:80/"
        ,"udp://tracker.ccc.de:80/"
        ,"udp://tracker.publicbt.com:80/"
        ,"udp://denis.stalker.h3q.com:6969/announce"
        ,"udp://tracker.istole.it:6969/"
        ,"udp://tracker.istole.it:80/"
        ,"http://tracker.istole.it:80/"
        ,"http://tracker.openbittorrent.com:80/"
        ,"http://tracker.ccc.de:80/"
        ,"http://tracker.publicbt.com:80/"
        ,"http://inferno.demonoid.com:3407/announce"
        ,"http://tracker.ilibr.org:6969/announce"
        ,"http://tracker.prq.to/announce"
        ,"http://tracker.torrent.to:2710/announce"
        ,"http://9.rarbg.com:2710/announce"
        ,"http://bt1.the9.com:6969/announce"
        ,"http://exodus.desync.com:6969/announce"
        ,"http://genesis.1337x.org:1337/announce"
        ,"http://nemesis.1337x.org:80/announce"
        ,"http://tracker.hexagon.cc:2710/announce"
        ,"http://tracker.torrentbox.com:2710/announce"
        ,"http://tracker.xpear.de:6969/announce"
        ,"udp://open.demonii.com:1337/announce"
      ];
      this.noRefUrl = "http://href.li/?";
      this.excludeFilter = "";
      this.removeAds = true;
      this.searchHighlight = true;
      this.linkComments = true;
      this.ajaxedSorting = true;
      this.forceHTTPS = false;
    },
    sendLog         = function (message, callback) {
      var logSize = 0
        ,pushed
      ;
      if ( typeof this.logs === "undefined" ) {
        this.logs = [];
      }
      pushed = this.logs.push(message);
      logSize = this.logs.length;
      if ( typeof w.console == "object" && typeof w.console.log === "function" ) {
        if ( !(String(message).match(/^(Starting|Load\:|Exec\:|Thanks\sfor|Successfully.checked.for.updates)/)) ) {
          w.console.log("--- TzAio logs[" + (logSize-1) + "] ---");
        }
        w.console.log(message);
      } else if ( typeof GM_log === "function" ) {
        GM_log((logSize-1) + ": " + message);
      } else {
        throw new Error((logSize-1) + ": " + "No log function available, " + message);
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
          protocol : w.location.protocol
          ,host    : w.location.hostname
          ,path    : w.location.pathname
          ,domain  : d.domain
          ,thash   : w.location.pathname.replace(/\x2F/g,"")
          ,search  : w.location.search
          // remove hash to enable refreshing the page with location.href
          ,href    : w.location.href.replace(w.location.hash,"").replace(/\#$/,"")
        };
      },

      searchGenres        : [
        // remember to catch the obvious first, then re-check further down
        {
          name     : "pink"
          ,pattern : new RegExp(unescape("%28%70%72%6F%6E%7C%70%6F%72%6E%7C%70%30%72%6E%7C%70%72%30"
            + "%6E%7C%78%78%78%7C%61%64%75%6C%74%7C%5C%62%73%65%78%5C%62%7C%5C%62%31%38%5C%2B%3F%5C%62%29"), "i")
        }, {
          name     : "tv"
          ,pattern : new RegExp("((\\W|_)(sd|ez|et)?tv(\\W|_)|\\blol\\b|(\\W|_)s[0-9]{2}e[0-9]{2}(\\W|_)|"
            + "tvteam|discovery|hdtv|television|series|\\bshows?\\b|episodes?|\\bseasons?\\b)","i")
        }, {
          name     : "movie"
          ,pattern : new RegExp("(movie|film|maxspeed|axxo|feature|video|dvdscr|screener|(\\W|_)cam(rip)?"
            + "\\b|\\br[3-6]\\b|\\bts\\b|telesync|\\bvod(rip)?)","i")
        }, {
          name     : "book"
          ,pattern : new RegExp("(\\be?book|epub|pdf|document|m4b|audiobook|audible|\\bcbr\\b|comics)","i")
        }, {
          name     : "game"
          ,pattern : new RegExp("(games?\\b|xbox|ps[x234]|wii|\\broms?(et)?\\b|playstation|nintendo)","i")
        }, {
          name     : "music"
          ,pattern : new RegExp("(music|audio|\\bpop\\b|\\brock\\b|flac|lossless|album\\b|consert|"
            + "bootleg|mp3|\\bogg\\b|wav|m4a|podcast|\\bost\\b)","i")
        }, {
          name     : "app"
          ,pattern : new RegExp("(software|apps?(lications)?\\b|\\bos[a-z]?\\b|\\bos\\b|\\bunix\\b"
            + "|\\blinux\\b|\\bsolaris\\b|\\bwin(dows|([7-9]|xp))?\\b|\\bmac\\b|\\bx64\\b|\\bx86\\b"
            + "|\\bandroid\\b|\\bpsp\\b|\\bios\\b|\\bpc\\b)","i")
        }, {
          name     : "picture"
          ,pattern : new RegExp("(picture|images|gallery)","i")
        }, {
          name     : "anime"
          ,pattern : new RegExp("anime\\b","i")
        }, {
          name     : "movie"
          ,pattern : new RegExp("(1080p|720p|bluray|blueray|480p|wmv|avi|matroska|mkv"
            + "|highres|264|xvid|divx|bdrip|brrip|hdrip)","i")
        }, {
          name     : "misc"
          ,pattern : new RegExp("(other|\\bmisc|un(sorted|known|defined)|siterip)","i")
        }
      ],

      getDirectTorrentLinks     : function (href, hash, title, titleEnc) {
        if ( !href || !hash || !title || !titleEnc ) {
          sendLog("[getDirectTorrentLinks] is missing paramenters!");
        } else {
          var hash       = hash.toLowerCase()
            ,HASH        = hash.toUpperCase()
            ,torCacheUrl = "http://torcache.net/torrent/" + HASH + ".torrent?title=" + titleEnc
            ,torRageUrl  = "http://torrage.com/torrent/" + HASH + ".torrent"
            ,directHref  = null
            ,directMatch = null
            ,slashSplit  = href.split("/")
          ;
          if ( ~href.indexOf("movietorrents.eu/") ) {
            // last checked 2012-07-25
            // movietorrents.eu/torrents-details.php?id=1421
            // movietorrents.eu/download.php?id=1421&name=Ubuntu%20iso%20file.torrent
            directMatch = href.match(/(\?|&)id=(\d+)/);
            directHref = directMatch && directMatch.length === 3 ? "http://movietorrents.eu/download.php?id="
              + directMatch[2] + "&name=" + titleEnc + ".torrent" : null;
          } else if ( ~href.indexOf("publichd.se/") ) {
            // last checked 2013-07-04
            // publichd.se/index.php?page=torrent-details&id=bae62a9932ec69bc6687a6d399ccb9d89d00d455
            // publichd.se/download.php?id=bae62a9932ec69bc6687a6d399ccb9d89d00d455&f=ubuntu-10.10-dvd-i386.iso.torrent
            directHref = "http://publichd.se/download.php?id=" + hash + "&f=" + titleEnc + ".torrent";
          } else if ( ~href.indexOf("btmon.com/") ) {
            // last checked 2012-05-13
            // www.btmon.com/Applications/Unsorted/ubuntu-10.10-dvd-i386.iso.torrent.html
            // www.btmon.com/Applications/Unsorted/ubuntu-10.10-dvd-i386.iso.torrent
            directHref = href.replace(/\.html$/i, "");
          } else if ( ~href.indexOf("torrentdownloads.me/") ) {
            // last checked 2012-06-02
            // www.torrentdownloads.me/torrent/1652094016/ubuntu-10+10-desktop-i386+iso
            // www.torrentdownloads.me/download/1652094016/ubuntu-10+10-desktop-i386+iso
            directHref = href.replace(/(\.me\/)torrent(\/)/i,"$1download$2");
          } else if ( ~href.indexOf("kat.ph/") || ~href.indexOf("kickasstorrents.com/")
            || ~href.indexOf("katproxy.com") || ~href.indexOf("katmirror.com/") || ~href.indexOf("kickass.to/") ) {
            // last checked 2013-07-05
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
          } else if ( ~href.indexOf("thepiratebay.sx/torrent/") || ~href.indexOf("pirateproxy.net/torrent/") ) {
            // last checked 2013-06-02
            // thepiratebay.sx/torrent/9999999
            // torrents.thepiratebay.sx/9999999/Title+of+torrent.9999999.TPB.torrent
            directHref = slashSplit && slashSplit.length >= 5 ? "http://torrents." + slashSplit[2]
              + "/" + slashSplit[4] + "/" + titleEnc + "." + slashSplit[4] + ".TPB.torrent" : null;
          } else if ( ~href.indexOf("torrentcrazy.com/torrent/") ) {
            // last checked 2013-06-02
            // www.torrentcrazy.com/torrent/8487590/title.of.torrent
            // dl.torrentcrazy.com/bae62a9932ec69bc6687a6d399ccb9d89d00d455/Title+of+torrent.torrent
            directHref = slashSplit && slashSplit.length >= 6 ? "http://dl.torrentcrazy.com/" + hash
              + "/" + titleEnc + ".torrent" : null;
          } else if ( ~href.indexOf("nyaa.eu/?") ) {
            // last checked 2013-06-02
            // www.nyaa.eu/?page=view&tid=438802
            // www.nyaa.eu/?page=download&tid=438802
            directHref = slashSplit && slashSplit.length >= 4
              ? href.replace(/(\?|\&)page=view/,"$1page=download") : null;
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
        var testStr   = e ? this.zipString(e) : ""
          ,returnBool = testStr.match(/^true$/i) ? true : testStr.match(/^false$/i)
            ? false : undefined
        ;
        return returnBool;
      },

      stringValueS        : function (i) {
        return ( i === 1 ? "" : "s" );
      },

      truncate            : function (string, length) {
        var truncation = "...";
        length = length || 25;
        return string.length > length ?
          string.slice(0, length - truncation.length) + truncation : String(string);
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
          returnStr = (String(i).replace(/(\d+)(\d{3})$/,"$1,$2"));
        } else {
          returnStr = String(i);
        }
        return returnStr;
      },

      removeDocOnclick    : function () {
        var ckExpDate = new Date( loadStartMS + (60*60*24*1000) )
          ,ckVal      = "wm_popundertz=" + escape("1|" + String(ckExpDate))
            + "; expires=" + String(ckExpDate) + "; path=/"
        ;
        // Why remove when it's better to be sure?
        d.onclick && (d.onclick = null);
        d.onmouseup && (d.onmouseup = null);
        d.onmousedown && (d.onmousedown = null);
        /* 2013-05-30 _wm event handler ads w/ click/mouseup + cookies
         * 
         *  Seemed simple enough at first, just create a cookie and it stops.
         *  But userScripts load After the damn things checks for it,
         *  and the event is anonymous inside a jQuery function,
         *  so the "easiest" and most maintainable way seems to be a
         *  quiet refresh if the cookie is missing.
         *
         */
        if ( typeof d.cookie === "string"
          && d.cookie.indexOf("wm_popundertz") === -1 ) {
          d.cookie = ckVal;
          w.top.location.reload();
        }
      },

      setStorageOptions    : function (storeObj, callback) {
        var returnSavedValue
          ,tzCl = this.userScript.slug
          ,i
        ;
        if ( storeObj ) {
          // pass though new values that are to be saved, ex. version (2.1.0)
          storeObj = underScore.defaults(storeObj, this.userScript);
          GM_setValue(tzCl + "_useroptions", JSON.stringify(storeObj));
          returnSavedValue = GM_getValue(tzCl + "_useroptions", false);
        // reset values
        } else if ( !storeObj ) {
          GM_deleteValue(tzCl + "_useroptions");
        } 
        if ( callback && typeof callback === "function" ) {
          callback(returnSavedValue);
        }
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

      zipString           : function (s) {
        var returnStr = s ? String(s).replace(/^\s+/,"").replace(/\s+$/,"") : s;
        return String(returnStr);
      },

      getHoursPast        : function (then, now) {
        then = +then;
        now = now || new Date().getTime();
        return Math.ceil((+now - then) / 1000 / 60 / 60);
      },

      validUserInput      : function (urls) {
        var checkArray
          ,returnBool  = true
          ,i
        ;
        // pass through empty values
        if ( urls.match(/\S/) ) {
          checkArray = underScore.compact(this.zipString(urls).split(/\s+/));
          for ( i = 0; i < checkArray.length; i++ ) {
            if ( !this.zipString(checkArray[i]).match(this.cache.matchUrlPatt) ) {
              returnBool = false;
              break;
            }
          }
        }
        return returnBool;
      },

      isAnyInputFocused   : function () {
        var returnBool = false
          ,activeEl    = d.activeElement
        ;
        if ( activeEl && activeEl.nodeName
          && activeEl.nodeName.toLowerCase().match(/(input|textarea)/)
          && !(activeEl.id && activeEl.id.toLowerCase().match(/_copy_tr_textarea/)) ) {
          returnBool = true;
        }
        return returnBool;
      },

      getNodeNumber       : function (nodeEl, getNumber) {
        var getNumber  = getNumber !== undefined ? getNumber : true
          ,numberMatch = nodeEl && nodeEl.textContent ? nodeEl.textContent
            .replace(/[^\-\+0-9]/gi,"").match(/((?:\-|\+)?\d+)/) : null
          ,numberConv  = numberMatch && numberMatch.length === 2 ? Number(numberMatch[1]) : 0
          ,numberStr   = String(numberConv)
          ,returnThis  = 0
        ;
        if ( getNumber && numberConv && !isNaN(numberConv) ) {
          returnThis = numberConv;
        } else if ( !getNumber ) {
          returnThis = numberStr;
        }
        return returnThis;
      },

      toggleCopyBox       : function (forceShow, forceHide) {
        var forceShow   = typeof forceShow !== "undefined" ? forceShow : false
          ,forceHide    = typeof forceHide !== "undefined" ? forceHide : false
          ,linkHeight   = this.cache.copyTrackersLinkHeight
          ,useClipboard = typeof GM_setClipboard === "function"
          ,isVisible
        ;
        // if it's created
        if ( this.selectors.$copyTextArea.length && this.selectors.$copyTrackersLink.length ) {
          isVisible = this.selectors.$copyTextArea.is(":visible");
          if ( forceShow || (!isVisible && !forceHide) ) {
            // Show it
            if ( useClipboard ) {
              GM_setClipboard(this.selectors.$copyTextArea.find("textarea")[0].innerHTML);
              this.selectors.$copyTrackersLink.addClass("active");
              this.selectors.$copyTrackersLink.text(this.selectors.$copyTrackersLink.text().replace("Copy ","Copied "));
            } else {
              this.selectors.$copyTextArea.css({
                top : (this.selectors.$copyTrackersLink.offset().top + linkHeight) + "px",
                left : (this.selectors.$copyTrackersLink.offset().left) + "px"
              }).stop().show(300).find("textarea")[0].select();
            }
          } else if ( forceHide || (isVisible && !forceShow) ) {
            // Hide it
            if ( !useClipboard ) {
              this.selectors.$copyTextArea.stop().hide(200).blur();
            }
          }
        }
      },

      handleKeyUps        : function (e, unselected) {
        var noMods    = tzAio.noModKeys(e)
          ,unselected = typeof unselected !== "undefined" ? unselected : false
          ,key        = +e.which
          ,safePlace  = !tzAio.isAnyInputFocused()
          ,newTabOpt
          ,torrentLinks
          ,nextPrevLink
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
            if ( tzAio.cache.isSingle ) {
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
          } else if ( tzAio.cache.isSingle ) {
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
          } else if ( tzAio.cache.isSearch  ) {
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
        var matchObject = scriptSource.match(patt)
          ,returnStr
        ;
        if ( matchObject && matchObject.length >= (index+1) ) {
          returnStr = String(matchObject[index]);
        } else {
          sendLog("[getMeta] " + patt.source + " did not find a match!");
        }
        return returnStr;
      },

      getMagnetUrl        : function (hash, title, trackers, htmlEnc) {
        var returnStr = this.cache.magnetURI + hash + "&dn="
            + encodeURIComponent(title) + "&tr="
          ,trackerStr = encodeURIComponent(this.zipString(trackers).replace(/\n+/g,"&tr="))
            .replace(/\%26tr\%3D/g, "&tr=")
        ;
        returnStr += trackerStr;
        if ( htmlEnc ) {
          returnStr = underScore.escape(returnStr);
        }
        return returnStr;
      },

      getHelpHtml         : function () {
        var latestVersionHtml = this.latestVersionObj.version && this.latestVersionObj.version
          !== this.userScript.version ? " <a href='" + this.userScript.link + "'>Update available!</a>" : ""
        ,htmlArr = [ "<p><b>" + this.userScript.name + " UserScript</b></p><ul>"
          ,"<li>Installed: v" + this.userScript.version + latestVersionHtml + "</li>"
          ,"<li>Homepage: <a href='" + this.userScript.link + "'>" + this.userScript.link + "</a></li>"
          ,"<li>On Github: <a href='" + this.userScript.gitHub + "'>" + this.userScript.gitHub + "</a></li>"
          ,"<li>Changelog: <a href='" + this.userScript.gitHub + "blob/master/Changelog.md'>"
          ,  this.userScript.gitHub + "blob/master/Changelog.md</a></li>"
          ,"<li>Report issues and feature requests here: <a href='" + this.userScript.gitHubIssues + "'>"
          ,this.userScript.gitHubIssues + "</a></li>"
          ,"<li>Built using <a href='http://www.jquery.com/'>jQuery</a>, "
          ,"<a href='http://underscorejs.org/'>underscore.js</a> "
          ,"&amp; the <a href='http://github.com/cowboy/jquery-replacetext/'>jQuery replaceText Plugin</a>."
          ,"</li></ul>"
        ];
        return htmlArr.join("");
      },

      removeAds           : function (page, userOpts, element) {
        var adRemovedClass = "removed_ad"
          ,frontPageAd
        ;
        if ( userOpts.removeAds ) {
          if ( page === "common" ) {
            // also remove common ads here once
            this.selectors.$body.addClass("no_ads");
              // removed: might remove addons like LastPass
              // .find("object, embed, iframe").filter(":not([src^='crome'])").addClass(adRemovedClass).end()
            this.selectors.$body.find("iframe[src*='clkads.com']").parent("div[style]").addClass(adRemovedClass);
            this.selectors.$body.find("p.generic").has("iframe").addClass(adRemovedClass);
            this.selectors.$body.find(" > div").has("a[href*='btguard.com/'] img").addClass(adRemovedClass);
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
        var replaceWith = "<a href='" + opts.noRefUrl + "$1'>$1</a>"
          ,delayInt
        ;
        if ( opts.linkComments ) {
          delayInt = setTimeout(function(){
            // Linkify visible comments
            if ( tzAio.selectors.$comments.length ) {
              tzAio.selectors.$commentsLinked = tzAio.selectors.$comments.find(".com:visible:contains('http')")
                .each(function(i, el){
                  $(el).replaceText(tzAio.cache.linkifyPatt, replaceWith);
                }
              );
            }
          }, 750);
        }
      },

      doDirectTorrentLink : function (index, link) {
        var dlink = link && link.href
          ? tzAio.getDirectTorrentLinks(link.href, tzAio.page.thash, tzAio.page.title, tzAio.page.titleEnc) : null;
        if ( dlink ) {
          $(link).before("<a href='" + dlink + "' class='" + tzAio.userScript.slug
            + "_dllink' target='_blank'><em>Download&#160;.torrent</em></a>");
        }
      },

      getSettingsHtml     : function (opts, trackersString) {
        var tzCl             = this.userScript.slug
          ,checkHighlight    = opts.searchHighlight ? " checked='checked' " : " "
          ,checkAds          = opts.removeAds ?       " checked='checked' " : " "
          ,checkCommentLinks = opts.linkComments ?    " checked='checked' " : " "
          ,checkAjaxSorting  = opts.ajaxedSorting ?   " checked='checked' " : " "
          ,checkForceHTTPS   = opts.forceHTTPS ?      " checked='checked' " : " "
          ,latest            = tzAio.latestVersionObj.checked && tzAio.latestVersionObj
          ,latestVersionMsg  = latest && latest.version !== this.userScript.version
            ? "<p class='" + tzCl + "_new_version_msg'>New version available! Update or grab "
            + "the latest version <a href='" + this.userScript.link + "'>here</a><br>"
            + "Latest version: " + latest.version + " (" + latest.date + ")<br>"
            + "Changelog: " + latest.changes + "</p>" : ""
          ,noticeMsg         = latest && latest.message ? "<p><mark>" + latest.message  + "</mark></p>" : ""
          ,lastUpdate        = tzAio.latestVersionObj.checked && +tzAio.latestVersionObj.checked > 3600000
            ? " (Last checked " + (tzAio.getHoursPast(tzAio.latestVersionObj.checked)) + " hours ago)" : ""
          ,versionHtml       = this.userScript.version + " (" + this.userScript.date + ")"
          ,versionHtml       = latest && latest.version !== this.userScript.version
            ? versionHtml : "<mark title='You have the latest version! " + lastUpdate + "' "
              + "class='" + tzCl + "_current_version_mark'>" + versionHtml + "</mark>"
          ,copyTrackerDesc   = typeof GM_setClipboard === "function"
            ? "copy all the trackers" : "toggle the tracker box"
          ,htmlArr           = [ "<p class='generic " + tzCl + "_info_p' style='"
            ,"background-image:url("+ this.userScript.icon + ");'>"
            ,"<a href='" + this.userScript.link + "'>Torrent All-in-One</a> "
            ,versionHtml + " &mdash; "
            ,"Use <kbd>'C'</kbd> to " + copyTrackerDesc + ", <kbd>'D'</kbd> "
            ,"to trigger the magnet-link, and <kbd>'SHIFT+D'</kbd> to download the first "
            ,"torrent-file listed. &mdash; "
            ,"Like this userscript? Then please take a minute to rate and/or review this on <a href='"
            ,this.userScript.link + "'>userscipts.org</a>. <em>Also hosted on "
            ,"<a href='" + this.userScript.gitHub + "'>GitHub</a>, please report all "
            ,"issues and bugs <a href='" + this.userScript.gitHubIssues + "'>here</a>.</em></p>"
            ,"<form id='" + tzCl + "_settings_submit' class='"
            ,tzCl + "_settings_form profile' method='get' action='"
            ,this.page.path + "'><fieldset><legend>TzAio Settings</legend>"
            ,noticeMsg
            ,latestVersionMsg
            ,"<p><input type='checkbox' name='" + tzCl + "_forceHTTPS' value='forceHTTPS'" + checkForceHTTPS
            ,"id='" + tzCl + "_forceHTTPS' />"
            ,"<label for='" + tzCl + "_forceHTTPS' title='This will redirect all pages to secure SSL, "
            ,"beware that if HTTPS is unavailable, you have to try another mirror and turn this option off again. "
            ,"That`s why this option is turned off by default.'>Force HTTPS</label>"
            ,"<input type='checkbox' name='" + tzCl + "_removeAds' value='removeAds'"
            ,checkAds + "id='" + tzCl + "_removeAds' />"
            ,"<label for='" + tzCl + "_removeAds'>Hide Ads</label>"
            ,"<input type='checkbox' name='" + tzCl + "_searchHighlight' value='searchHighlight' "
            ,"id='" + tzCl + "_searchHighlight'" + checkHighlight + " />"
            ,"<label for='" + tzCl + "_searchHighlight'>Colorful results</label>"
            ,"<input type='checkbox' name='" + tzCl + "_ajaxedSorting' value='ajaxedSorting'"
            ,checkAjaxSorting + "id='" + tzCl + "_ajaxedSorting'>"
            ,"<label for='" + tzCl + "_ajaxedSorting'>Ajaxed sorting</label>"
            ,"<input type='checkbox' name='" + tzCl + "_linkComments' value='linkComments'"
            ,checkCommentLinks + "id='" + tzCl + "_linkComments'>"
            ,"<label for='" + tzCl + "_linkComments'>Fix comment links</label></p>"
            ,"<label for='" + tzCl + "_default_trackers_textarea'>Default trackerlist</label>"
            ,"<textarea rows='6' name='track' class='i' id='" + tzCl + "_default_trackers_textarea' wrap='off'>"
            ,trackersString + "</textarea><p>Optional. Default trackerlist (these are added to all torrents\' "
            ,"trackers, if absent). Note that these are combined with the torrents own trackers, and "
            ,"after that duplicates are removed, they get sorted by domain, and finally grouped "
            ,"with any backup udp protocols.</p>"
            ,"<label for='" + tzCl + "_norefurl'>No referer url</label><input type='text' class='i' id='"
            ,tzCl + "_norefurl' name='" + tzCl + "_norefurl' "
            ,"value='" + opts.noRefUrl + "' placeholder='http://' />"
            ,"<p>Optional. This url (if any) is prepended to all comment links, and search-engine links. "
            ,"<a href='http://href.li?http://href.li/' target='_blank'>No referer</a> means that outgoing "
            ,"links you click here can`t be traced back to " + this.page.domain + ". "
            ,"All depending on what url to set it to, of course.</p>"
            ,"<label for='" + tzCl + "_default_searchengines_textarea'>Search engines list</label>"
            ,"<textarea id='" + tzCl + "_default_searchengines_textarea' wrap='off' "
            ,"rows='6' name='searching' class='i'>" + (opts.searchEngines.join("\n"))
            ,"</textarea><p>Optional. Search engines for the select-to-search feature (title|url formatting, "
            ,"use <code>%s</code> to indicate keyword, and <code>_</code> to indicate a space). "
            ,"<em>How do I use it?</em> &mdash; On the torrent page, select some text in the title "
            ,"with the name of the torrent, and the links listed here will appear as links underneith.</p>"
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
            ,"<input type='submit' value='Save' name='save'></div></fieldset></form>" ]
        ;
        return htmlArr.join("");
      },

      setupCopyTextArea   : function (text) {
        var tzCl        = this.userScript.slug
          ,textareaHTML = "<div id='" + tzCl + "_copy_tr_textarea' class='"
            + tzCl + "_copy_textarea'>"
            + "<textarea readonly='readonly' cols='40' rows='10' wrap='off'>"
            + text + "</textarea></div>"
        ;
        this.cache.copyTrackersLinkHeight = this.selectors.$copyTrackersLink.outerHeight();
        this.selectors.$body.append(textareaHTML);
        this.selectors.$copyTextArea = $("#" + tzCl + "_copy_tr_textarea");
        this.selectors.$copyTrackersLink.on("click", function () {
          tzAio.toggleCopyBox();
          return false;
        });
      },

      getSelected         : function () {
        // TODO: 
        // (w||d).getSelection().anchorNode.nodeValue
        //  = the targets text node,
        //    counting the node that was the start of the selection.
        //    anchordNode is null if no selection, nodeValue null
        //    if unable to get selection
        var t = "";
        if ( w.getSelection ) {
          t = w.getSelection();
        } else if ( d.getSelection ) {
          t = d.getSelection();
        } else if ( d.selection ) {
          t = d.selection.createRange().text;
        }
        return t;
      },

      fillSearchBar       : function (event) {
        var selected
          ,delayTimeout
          ,searchLink = ""
          ,searchHtml = ""
          ,_searchEgi = []
          ,tempStr
          ,_temp
          ,searchStr
          ,leftOffset
          ,widthCalc
          ,cssWidth
          ,engineHTMLArr
          ,i
        ;
        // a small delay hinders the (before) annoying double popup
        delayTimeout = setTimeout(function () {
          selected = tzAio.getSelected();
          if ( String(selected).match(/\S/i) ) {
            tzAio.selectors.$titleEl.removeAttr("title");
            tempStr = selected + "";
            tempStr = tempStr
              .replace(/(\W|\_)/ig," ")
              .replace(tzAio.cache.selectTrashPatt," ")
              .replace(tzAio.cache.discardThisForSelect," ")
              .replace(/\s*locations?\s*$/," ")
              .replace(/\s*download\s*$/," ")
              .replace(/\s*torrent\s*$/," ")
              .replace(/\s+/g,"+")
              .replace(/(^\+|\+$)/g,"");
            searchStr = tempStr;
            for ( i = 0; i < tzAio.cache.searchEnginesLen; i++ ) {
              engineHTMLArr = tzAio.storedSettings.searchEngines[i].split("|");
              searchHtml += "<a class='search_link' target='_blank' href='" + tzAio.storedSettings.noRefUrl
                + (engineHTMLArr[1].replace(/%s/g, searchStr))
                + "'>" + engineHTMLArr[0].replace(/_/g," ") + "</a>";
            }
            searchHtml += "<a class='search_link' href='"
              + "/search?f=" + searchStr + "'>torrentz</a><a href='/feed?q=" + searchStr
              + "'><img src='" + tzAio.cache.RSSIMG + "' width='16' height='16'></a>";
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
            .match(this.cache.selectTrashPatt)
          ,tzCl          = this.userScript.slug
        ;
        this.selectors.$titleEl.after("<div id='" + tzCl + "_search_bar' class='"
          + tzCl + "_searchbar'></div>");
        this.selectors.$searchBar = $("#" + tzCl + "_search_bar");
        this.cache.discardThisForSelect = discardMatch && discardMatch.length
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
        var returnDigit  = 0
          ,negativeVotes = 0
          ,negI          = -1
          ,statusDigit
          ,negativeEls
          ,positiveVotes
          ,negativeElsLen
          ,negMatch
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
            negativeEls = votebox.find(".replist").has("a + a + a");
            negativeElsLen = negativeEls.length;
            while ( (++negI < negativeElsLen) ) {
              negMatch = tzAio.getNodeNumber(negativeEls[negI], true);
            }
            // negativeEls = votebox.find(".replist").has("a + a + a").each(function (index, element) {
            //   var negMatch = tzAio.getNodeNumber(element, true);
            //   negativeVotes += negMatch;
            // });
            if ( positiveVotes >= 7 && (positiveVotes+negativeVotes) >= 2 ) {
              returnDigit = 1;
            }
          }
        }
        // Debug log
        // sendLog( "statusDigit = " + statusDigit + "\nreturnDigit = " + returnDigit
        //   +  ( typeof positiveVotes === "number" ? "\n( positiveVotes >= 7 && (positiveVotes+negativeVotes) >= 2 )\n =  "
        //   + "( " + String(positiveVotes) + " >= 7 && (" + String(positiveVotes)
        //   + "+" + String(negativeVotes) + ") >= 2 )" + "\n >> "
          // + String(( positiveVotes >= 7 && (positiveVotes+negativeVotes) >= 2 )) : "") );
        return returnDigit;
      },

      extractLeveledArray : function ( arr, level ) {
        var returnArr = []
          ,i
          ,errMsg
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
        var newArr   = []
          ,udpPopped = null
          ,prev      = null
          ,i
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
        var newString = ""
          ,next       = null
          ,i
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
        var slashMatch
          ,cleanHost
          ,domainSplit
          ,domainSplitLen
          ,sortingArray = []
          ,i
          ,x
          ,returnObject
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
            if ( cleanHost.match(this.cache.twoPartDomainPatt) ) {
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
          this.cache.userString = returnObject.userString;
          this.cache.userArray = returnObject.userArray;
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
        var mg_trackerList  = "", magnetLinkHtml = "", finalHtml = ""
          ,filesInfoText    = "", seedTleach, seedText, minPeersText, i
          ,commentText, trackerNumText, copyTrackersHtml, trackerLen, _upLen, _downLen
          ,tzCl             = this.userScript.slug
          ,wmvPatt          = new RegExp("\\.wmv$","i")
          ,trackersDiv      = this.selectors.$body.find("div.trackers:eq(0)")
          ,trackerLinks     = trackersDiv.find("dt a")
          ,trackerLinksI    = -1
          ,trackerLinksLen  = trackerLinks.length
          ,trackerDataEls   = trackersDiv.find("dl:has(a) dd")
          ,upElems          = trackerDataEls.find(".u")
          ,upElemsLen       = upElems.length
          ,upElemsLenI      = -1
          ,downElems        = trackerDataEls.find(".d")
          ,downElemsLen     = downElems.length
          ,downElemsLenI    = -1
          ,dhtEls           = trackersDiv[0].textContent.indexOf("(DHT)") !== -1
            ? trackersDiv.find("dl:eq(0):contains('(DHT)') span.u, "
            + "dl:eq(0):contains('(DHT)') span.d") : []
          ,dhtElsLen        = dhtEls.length
          ,dhtElsLenI       = -1
          ,dhtElsMax
          ,seedColor        = "black"
          ,seedTitle        = "S<span class='divided'>&frasl;</span>L &asymp;"
          ,filesDiv         = this.selectors.$body.find("div.files:eq(0)")
          ,fileLinks        = filesDiv.find("a")
          ,fileLinksLen     = fileLinks.length
          ,fileLinksLenI    = fileLinksLen
          ,wmvWarning       = false
          ,notActive        = !!(this.selectors.$downloadDiv.next(".error").text()
            .match(/active\s+locations?/i))
          ,verDownload      = this.isVerifiedDownload(this.selectors.$body.find(".votebox"))
          ,verDownloadCl    = verDownload > 0 && !notActive ? "_verified_dl" : notActive
            ? " not_active" : verDownload < 0 ? "_bogus_dl" : "_unverified_dl"
          ,filesSizeText    = filesDiv.find("div:contains('Size:'):eq(0)").text().replace("Size: ","")
          ,commentDiv       = this.selectors.$body.find("div.comments")
          // not the settings form!
          ,formFieldset     = this.selectors.$body.find("form.profile[method='post']:eq(0) fieldset")
          ,commentCount     = this.selectors.$comments.length
          ,htmlDivider      = " <span class='" + tzCl + "_sep'>&#124;</span> "
          ,currTrackerList = [], _up = [], _down = []
          ,upNum = 0, downNum = 0, topUpNum = 0, topDownNum = 0, seedMeter = 0, minPeers = 0
          ,magnetHtml
          ,magnetUrl
        ;
        while ( (++trackerLinksI < trackerLinksLen) ) {
          currTrackerList.push( (trackerLinks[trackerLinksI].textContent||"") );
        }
        trackers = this.makeTrackersObject(underScore.union(currTrackerList, trackers.userArray),
          trackers.userArray);
        trackerLen = trackers.allArray.length;
        // final magnetlink uri
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
        copyTrackersHtml = "<a href='#' id='" + tzCl + "_copylist' class='" + tzCl
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
          + tzCl + verDownloadCl + "'" + this.cache.infoBarCss + ">"
          + finalHtml + "</p>");

        // edit torrentz own magnet link if available
        this.selectors.$copyTrackersLink = $("#" + tzCl + "_copylist");
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
        var cachedSearchEl, i;
        event.forEach(function (mutation) {
          if ( mutation.addedNodes) {
            for ( i = 0; i < mutation.addedNodes.length; i++ ) {
              if ( mutation.addedNodes[i] && mutation.addedNodes[i].className
                && mutation.addedNodes[i].className.indexOf("results") !== -1
                && mutation.addedNodes[i].tagName && mutation.addedNodes[i].tagName === "DIV" ) {
                cachedSearchEl = $(mutation.addedNodes[i]);
                tzAio.cache.ajaxTimer = (new Date().getTime());
                if ( !cachedSearchEl.hasClass(tzAio.userScript.slug + "_colorized") ) {
                  tzAio.initSearchPage(cachedSearchEl, tzAio.storedSettings, function (target) {
                    /* DEBUG callback
                    sendLog((target.length) + " ajaxed div." + target[0].className + " - Exec: "
                      + ((new Date().getTime())-tzAio.cache.ajaxTimer) + "ms");*/
                  });
                }
              }
            };
          }
        });
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
                tzAio.cache.ajaxTimer = new Date().getTime();
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
                    if ( tzAio.selectors.$theSearchBox.length ) {
                      tzAio.selectors.$theSearchBox.parents("form:first").prop("action", tzAio.page.path);
                      if ( tzAio.page.search ) {
                        var filterMatch = tzAio.page.search.replace(/^\?(?:[a-z]+\=)?\+?(.+)/i,"$1").match(/^([^\&]+)/i);
                        if ( filterMatch && filterMatch.length === 2 && filterMatch[1] ) {
                          tzAio.selectors.$theSearchBox.val(decodeURIComponent(filterMatch[1].replace(/\+/g," ")));
                        }
                      }
                    }
                    tzAio.bindAjaxLinks(target);
                    // sendLog((target.length) + " ajaxed div." + target[0].className + " - Exec: "
                    //   + ((new Date().getTime())-tzAio.cache.ajaxTimer) + "ms");
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
        var dlElements       = resultsElement.getElementsByTagName("dl")
          ,dlElsLen          = dlElements.length
          ,trackerLen        = this.cache.userArray.length
          ,trackerSstr       = this.stringValueS(trackerLen)
          ,tzCl              = this.userScript.slug
          ,linkPatt          = this.cache.hashPatt
          ,doColorize        = options.searchHighlight
          ,magnetTitleAppend = " with magnetlink (" + trackerLen
            + " default tracker" + trackerSstr + ")"
          ,searchGenLen      = this.cache.searchGenresLen
          ,currentClName
          ,unverifiedClName  = ""
          ,coloredClName     = ""
          ,isActive          = true
          ,isTrackerList     = this.page.path.indexOf("/tracker_") === 0
          ,doneResultClName  = !isTrackerList ? " " + tzCl + "_colorized"
            : " " + " " + tzCl + "_trackerlist"
          ,i, torrHash, torrLink, torrLinks, torrTitle, vSpan, dtContent
        ;
        for ( i = 0; i < dlElsLen; i++ ) {
          if ( dlElements[i].style.display.toLowerCase() === "none" ) {
            continue;
          }
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
          spanMagnet = d.createElement("SPAN");
          spanMagnet.className = tzCl + "_magnet";
          linkMagnet = d.createElement("A");
          linkMagnet.href = this.getMagnetUrl(torrHash, torrTitle, this.cache.userString);
          linkMagnet.title = "Download " + this.truncate(torrTitle, 20) + magnetTitleAppend;
          spanMagnet.appendChild(linkMagnet);
          dlElements[i].appendChild(spanMagnet);
          vSpan = dlElements[i].getElementsByClassName("v");
          vSpan = (vSpan && vSpan.length ? vSpan[0] : null);
          // stop if we're on a trackers list; too heavy and doesn't match enough
          if ( !isTrackerList ) {
            if ( vSpan ) {
              if ( !/[1-9]/.test(vSpan.textContent) ) {
                // no votes
                unverifiedClName = currentClName + " " + tzCl + "_unverified_dl";
              } else if ( /\-[0-9]/.test(vSpan.textContent) ) {
                // negative votes
                unverifiedClName = currentClName + " " + tzCl + "_fake_dl";
              }
              // Keyword check
              if ( doColorize && this.searchGenres && this.searchGenres.length ) {
                dtContent = dlElements[i].getElementsByTagName("dt");
                dtContent = dtContent.length ? dtContent[0].textContent : "";
                coloredClName = this.colorizeMatch(dtContent, this.searchGenres, torrTitle);
              }
            }
            coloredClName = coloredClName.length ? " " + coloredClName : "";
            if ( doColorize ) {
              isActive = this.isActiveTorr( dlElements[i] );
            }
            if ( !isActive ) {
              coloredClName = coloredClName + " inactive";
            }
            dlElements[i].className = unverifiedClName + coloredClName;
          }
        }
        resultsElement.className += doneResultClName;
        if ( callback && typeof callback === "function" ) {
          callback(resultsElement);
        }
      },

      validateRegExp      : function (pattStr) {
        var returnBool
          ,fooPatt
        ;
        if ( pattStr.match(/^\s*\//) && pattStr.match(/\/\s*$/) ) {
          pattStr = pattStr.replace(/(^\s*\/|\/\s*$)/g, "");
          try {
            fooPatt = new RegExp(pattStr,"i");
            returnBool = underScore.isRegExp(fooPatt);
          } catch (error) {
            sendLog("not a valid regexp pattern!");
            sendLog(error);
            returnBool = false;
          }
        } else {
          returnBool = true;
        }
        return returnBool;
      },

      makeExcludePatt     : function (userString) {
        var convertedPattern
          ,commaArr
          ,i
        ;
        if ( userString.match(/^\//) && userString.match(/\/$/) ) {
          convertedPattern = userString.replace(/(^\/|\/$)/g,"");
        } else {
          userString = userString
            .replace(/(\.|\\|\+|\*|\?|\[|\^|\]|\$|\(|\)|\{|\}|\=|\!|\<|\>|\||\:|\-|\"|\')/g,"\\$1")
            .replace(/\s/g,".")
          ;
          if ( userString.indexOf(",") !== -1 ) {
            convertedPattern = "(";
            commaArr = userString.split(",");
            for ( i = 0; i < commaArr.length; i++ ) {
              convertedPattern += (i !== 0 ? "|" + commaArr[i] : commaArr[i]);
            }
            convertedPattern += ")";
          } else {
            convertedPattern = userString;
          }
        }
        return new RegExp(convertedPattern,"i");
      },

      getResultTitle      : function (el) {
        var text = el.textContent
          ,returnText
        ;
        if ( text.indexOf("»") ) {
          returnText = text.split("»")[0];
        } else {
          returnText = text;
        }
        return returnText.replace(/\s+/g," ");
      },

      initialFilterOfList : function (list, opts, $dmcaElement, callback) {
        var i
          ,dls                  = list.getElementsByTagName("dl")
          ,dlsLen               = dls.length
          ,deletedByFilterCount = 0
          ,dmcaClass            = opts.searchHighlight ? "dmca colorizeme" : "dmca"
          ,dlText
          ,$logEl
        ;
        if ( opts.excludeFilter ) {
          for ( i = 0; i < dlsLen; i++ ) {
            dlText = tzAio.getResultTitle(dls[i]);
            if ( dls[i].className !== "dmca" && dlText.match(tzAio.makeExcludePatt(opts.excludeFilter)) ) {
              deletedByFilterCount++;
              dls[i].style.display = "none";
            }
          }
          if ( !$dmcaElement || !$dmcaElement.length ) {

            $(list).find(" > dl:last").after("<dl class='" + dmcaClass + "'>"
              + "<dt style='text-align: right'><span class='" + this.userScript.slug
              + "_exclude_filter_count'></span></dt><dd></dd></dl>");
          }
          if ( $dmcaElement && $dmcaElement.length ) {
              $dmcaElement.addClass(dmcaClass)
                .find("dt").prepend("<span class='" + this.userScript.slug + "_exclude_filter_count'></span>");
          }
          $logEl = $(list).find("span." + this.userScript.slug + "_exclude_filter_count");
          this.updateExcludeLog($logEl, deletedByFilterCount, list);
        }
        if ( callback && typeof callback === "function" ) {
          callback(list);
        }
      },

      isActiveTorr        : function (el) {
        var activeTorrent = true
          ,seedsEl        = el.getElementsByClassName("u")
          ,seedsEl        = seedsEl && seedsEl.length ? seedsEl[0] : null
          ,leachEl        = el.getElementsByClassName("d")
          ,leachEl        = leachEl && leachEl.length ? leachEl[0] : null
          ,torrDateEl     = el.getElementsByClassName("a")
          ,torrDateEl     = torrDateEl && torrDateEl.length
            ? torrDateEl[0].getElementsByTagName("span") : null
          ,torrDateEl     = torrDateEl && torrDateEl.length ? torrDateEl[0] : null
          ,torrDate       = torrDateEl ? torrDateEl.title : ""
          ,torrDate       = torrDate ? new Date(torrDate).getTime() : 0
          // less than one month old
          ,isNew          = (((new Date().getTime() - torrDate) / 1000 / 60 / 60 / 24) <= 31)
          ,seeders
          ,leachers
        ;
        if ( !isNew && seedsEl && leachEl ) {
          seeders = this.getNodeNumber(seedsEl);
          leachers = this.getNodeNumber(leachEl);
          if ( seeders === 0 && leachers <= 5 ) {
            activeTorrent = false;
          }
        }
        return activeTorrent;
      },

      colorizeMatch       : function (text, genres, title) {
        var torrKeywords = text.replace(title, " ")
          ,dlTagsMatch   = torrKeywords.match(tzAio.cache.sKeywordPatt)
          ,dlTags        = dlTagsMatch && dlTagsMatch.length >= 2 && dlTagsMatch[1] ? dlTagsMatch[1] : ""
          ,secondTryText = !dlTags ? title.replace(/[^0-9a-zA-Z\-\+]+/," ") : ""
          ,coloredClName = ""
          ,isSecondMatch = false
          ,sLen          = tzAio.cache.searchGenresLen
          ,i
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
        var searchParameters = this.page.search.match(/^\?f\=(.+)$/i)
          ,resultsH2, dmcaDl, $lastListItem, $dmcaEl
        ;
        if ( $resultsEl && $resultsEl.length ) {

          if ( this.cache.isSearch || this.cache.isSingle )  {
            // Add class to 'X results removed in compliance with EUCD / DMCA' first
            $lastListItem = $resultsEl.find("dl:last");
            if ( $lastListItem.length && $lastListItem[0].innerHTML.indexOf("removed in compliance") !== -1 ) {
              $lastListItem.addClass("dmca");
              $dmcaEl = $lastListItem;
            }
            // now insert a final 'p' for single page search results
            if ( options.searchHighlight && $lastListItem.length && $resultsEl.find(" > p").length === 0 ) {
              $("<p/>").html(" ").appendTo($resultsEl);
            }
          }
          resultsH2 = $resultsEl.find(" > h2");
          // Add rss link for "approximate match" and no results
          if ( $resultsEl.length === 1 && searchParameters && searchParameters.length >= 2
            && searchParameters[1] && resultsH2.length && !resultsH2.has("img[src*='rss.png']").length ) {

            resultsH2.append("<a class='approximate_rss_link' href='/feed_anyA?q="
              + String(searchParameters[1]) + "'>&nbsp;<img width='16' height='16' src='"
              + this.cache.RSSIMG + "' title='This RSS feed is empty'></a>")
            ;
          }
          // for every .results div
          $resultsEl.each(function (index, element) {
            if ( element.className.indexOf(tzAio.userScript.slug + "_colorized") === -1 ) {
              tzAio.initialFilterOfList(element, options, $dmcaEl, function (filteredList) {
                tzAio.dlResultsActions(filteredList, options, function (finishedResult) {
                  if ( callback && typeof callback === "function" ) {
                    callback($(finishedResult));
                  }                
                });
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
        this.cache.infoBarCss = infoDivHeight ? " style='min-height:"
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
        var tzCl          = this.userScript.slug,
          settingsVisible = false,
          settingsButton  = "<li class='" + tzCl + "_settings'>"
            + "<a href='#' title='Change TzAio Settings'>TzAio</a>"
        ;
        this.removeAds("common", options);
        this.selectors.$topDiv = this.selectors.$body.find("div.top:eq(0)");
        this.selectors.$settingsEl = this.selectors.$topDiv.after(
            this.getSettingsHtml(options, trackers.userString)
          ).find(" > ul").prepend(settingsButton).end();
        this.selectors.$settingsLink = this.selectors.$topDiv.find(" > ul > li."
          + tzCl + "_settings a");
        this.selectors.$scriptInfoP = this.selectors.$topDiv.next("p.generic");
        this.selectors.$settingsForm = $("#" + tzCl + "_settings_submit")
          .on("submit", function (event) {
            event.preventDefault();
            var saveTrackers
              ,disabledInput    = tzAio.selectors.$settingsForm.find("input[type='submit']")
                .prop("disabled", true)
              ,saveSearchEngines
              ,confirmNewStorageRules
              ,trackersVal
              ,searchEnginesVal
              ,validateInput
              ,noRefVal
              ,excludeFilterVal
              ,invalidItemNames = ""
              ,trValid, seValid, nrValid, exValid, submittedOptions = {}
            ;
            tzAio.selectors.$settingsForm.find(":checkbox").each(function (index, element) {
              var settingName = element.name.replace(tzAio.userScript.slug + "_","")
                ,settingValue = $(element).is(":checked")
              ;
              submittedOptions[settingName] = settingValue;
            });
            tzAio.selectors.$defTrackersTextArea = $("#" + tzCl + "_default_trackers_textarea");
            tzAio.selectors.$defSearchEngTextArea = $("#" + tzCl + "_default_searchengines_textarea");
            tzAio.selectors.$noRefInput = $("#" + tzCl + "_norefurl");
            tzAio.selectors.$excludeFilterInput = $("#" + tzCl + "_exclude_filter_input");
            trackersVal = tzAio.selectors.$defTrackersTextArea.val();
            searchEnginesVal = tzAio.selectors.$defSearchEngTextArea.val();
            noRefVal = tzAio.selectors.$noRefInput.val();
            excludeFilterVal = tzAio.selectors.$excludeFilterInput.val();

            // Validate inputs to help out user
            trValid = tzAio.validUserInput(trackersVal);
            // shortest match = s|http://i.io/%s
            seValid = (!searchEnginesVal.match(/\S/i) || (tzAio.validUserInput(searchEnginesVal)
              && searchEnginesVal.indexOf("%s") >= 13 && searchEnginesVal.indexOf("|") > 0) );
            nrValid = tzAio.validUserInput(noRefVal);
            exValid = tzAio.validateRegExp(excludeFilterVal);
            
            if ( seValid && trValid && nrValid && exValid ) {
              saveTrackers = trackersVal.split(/\s+/);
              saveTrackers = underScore.compact(saveTrackers);
              saveSearchEngines = searchEnginesVal.split(/\s+/);
              saveSearchEngines = underScore.compact(saveSearchEngines);
              submittedOptions.defaultTrackers = saveTrackers;
              submittedOptions.searchEngines = saveSearchEngines;
              submittedOptions.noRefUrl = noRefVal.replace(/(^\s+|\s+$)/g,"");
              submittedOptions.excludeFilter = excludeFilterVal.replace(/(^\s*\,|\,\s*$)/g,"")
                .replace(/\,{2,}/g,",").replace(/(^\s+|\s+$)/g,"");
              if ( tzAio.cache.freshUser ) {
                confirmNewStorageRules = confirm("Settings are now being stored and used "
                  + "across all Torrentz's domains.\nSave and continue?");
              }
              if ( !tzAio.cache.freshUser || confirmNewStorageRules ) {
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
                      + tzAio.cache.bugReportMsg);
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
              invalidItemNames = !seValid ? invalidItemNames + " 'Search engines list'," : invalidItemNames;
              invalidItemNames = !trValid ? invalidItemNames + " 'Default trackerlist'," : invalidItemNames;
              invalidItemNames = !nrValid ? invalidItemNames + " 'No referer url'," : invalidItemNames;
              invalidItemNames = !exValid ? invalidItemNames + " 'Exclude filter (regexp)'," : invalidItemNames;
              alert("Invalid input in the " + invalidItemNames + " check your spelling!"
                + tzAio.cache.bugReportMsg);
              disabledInput.prop("disabled", false);
            }
            return false;
          })
        ;
        this.selectors.$settingsLink.on("click", function (event) {
          event.preventDefault();
          tzAio.selectors.$scriptInfoP.toggleClass("expand");
          tzAio.selectors.$settingsForm.toggleClass("expand");
          tzAio.selectors.$settingsLink.parent("li")
            .toggleClass(tzAio.userScript.slug + "_settings_open");
          if ( tzAio.selectors.$copyTextArea && tzAio.selectors.$copyTextArea.length ) {
            tzAio.toggleCopyBox(false, true);
          }
          return false;
        });
        this.selectors.$resetEl = $("#" + tzCl + "_settings_reset");
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
        //   plus it's evil to store anything and not letting the user know first
        var newSettings, trackers;
        if ( !GM_getValue(this.userScript.slug + "_useroptions", false) ) {
          // first time user
          this.cache.freshUser = true;
          newSettings = this.userScript;
          sendLog( "Thanks for using " + this.userScript.name + "!" );
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
        // func return unescaped
        this.storedSettings.defaultTrackers = underScore.compact(this.storedSettings.defaultTrackers);
        this.cache.searchEnginesLen = this.storedSettings.searchEngines.length;
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

      updateExcludeLog : function ($target, count, resultsList) {
        var logHtml = count + " result" + this.stringValueS(count) + " removed using TzAio filter";
        logHtml += ($target.parents("dt:eq(0)").text().match(/\S/) ? "&nbsp;&ndash;&nbsp;" : "");
        $target.html(logHtml).one("click", function () {
          $(resultsList).find("dl:hidden").css("display", "block");
        });
      },

      lastAction          : function () {
        if ( !this.cache.lastActionDone ) {
          this.cache.lastActionDone = true;
          if ( this.makeBool( w.sessionStorage.getItem(this.userScript.slug + "_SS_useroptions_saved") ) === true ) {
            // scroll up bacause user just saved options and window is def. scrolled down a bit
            this.selectors.$bodyANDhtml.animate({ scrollTop : 1 }, 0, function () {
              w.sessionStorage.removeItem(tzAio.userScript.slug + "_SS_useroptions_saved");
              if ( !tzAio.cache.freshUser ) {
                tzAio.selectors.$body.addClass(tzAio.userScript.slug + "_settings_saved");
                setTimeout(function () {
                  tzAio.selectors.$body.removeClass(tzAio.userScript.slug + "_settings_saved");
                }, 5000);
              }
              tzAio.selectors.$bodyANDhtml.animate({ scrollTop : 0 }, 0);
            });
          }
          sendLog("Exec: " + ((new Date().getTime())-execStartMS) + "ms (not inc ajax)");
          this.getLatestJson();
        }
      },

      getLatestJson       : function () {
        setTimeout(function () {
          var updateObject  = {}
            // Enough to matter and no more than informative
            ,updateInterval = (1000*60*60*12)
            ,tzCl           = tzAio.userScript.slug
            ,now            = new Date().getTime()
            ,lastCheck      = tzAio.latestVersionObj.checked || "1359673200000"
            ,lastCheck      = Number(lastCheck)
            ,updateMessage
          ;
          updateMessage = "New version of TzAio available! Please update the script now in "
            + (isGM ? "GreaseMonkey" : isTM ? "TamperMonkey" : isSC ? "Scriptish " : "your scriptengine")
            + ", or grab the latest version here:\n" + tzAio.userScript.link;
          if ( (now - lastCheck) >= updateInterval ) {
            $.getJSON("http://elundmark.se/_files/js/tz-aio/log/update-check.php", {
                version : tzAio.userScript.version
              }, function (data) {
                if ( data && underScore.isObject(data) && data.version ) {
                  updateObject = data;
                  updateObject.checked = String(now);
                  sendLog("Successfully checked for updates, installed: " + tzAio.userScript.version
                    + ", latest: " + updateObject.version);
                  // store regardless to prevent empty date::multiple checks
                  GM_setValue(tzCl + "_json_update_check", JSON.stringify(updateObject));
                  if ( tzAio.userScript.version !== updateObject.version ) {
                    alert( updateMessage + "\nInstalled: " + tzAio.userScript.version
                      + " - Latest: " + updateObject.version );
                  }
                } else {
                  sendLog("Tried to check for updates but failed! :(" + tzAio.cache.bugReportMsg);
                }
              })
            ;
          }
        }, 2500);
      },

      selectors           : {},

    };

    // build internal objects
    tzAio.page = tzAio.getPageParmaters();
    tzAio.userScript = new UserScript();
    tzAio.latestVersionObj = JSON.parse(GM_getValue(tzAio.userScript.slug + "_json_update_check", "{}"));

    tzAio.cache = {
      RSSIMG             : "/img/rss.png"
      ,searchGenresLen   : tzAio.searchGenres.length
      ,freshUser         : false
      ,sKeywordPatt      : /»\s+?(.*)$/i
      ,hashPatt          : /[a-zA-Z0-9]{40}/
      ,twoPartDomainPatt : new RegExp("(\\.com|\\.co|\\.info|\\.mobi|\\.net|\\.ar|\\.as|\\.at|"
        + "\\.bb|\\.bg|\\.br|\\.ca|\\.ch|\\.cn|\\.cs|\\.dk|\\.ee|\\.es|\\.fi|\\.fr|\\.gr|\\.in|"
        + "\\.is|\\.it|\\.jp|\\.lu|\\.no|\\.se|\\.pl|\\.ru|\\.tv|\\.tw|\\.tk|\\.ua|\\.uk|\\.us){2}","")
      ,linkifyPatt       : /((htt|ud|ft)ps?\:\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!\:.?+=&%@!\-\/]))?)?/gi
      ,matchUrlPatt      : /[-a-zA-Z0-9@:%_\+.~#?&\/\/=]{2,256}\.[a-z]{2,4}(\:[0-9]+)?\b(\/[-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)?/i
      ,selectTrashPatt   : /(\s+(\d+\s*torrent)?\s*|\s*torrent\s*|\s*download\s*|\s*locations\s*){1,3}(Download \.torrent[\s\S]*)?$/i
      // https://en.wikipedia.org/wiki/Magnet_URI_scheme
      ,magnetURI         : "magnet:?xt=urn:btih:"
      ,bugReportMsg      : "\n(If this problem persists, please get in touch and I'll fix it\n"
        + tzAio.userScript.link + ")"
    };

    $.fn.extend({
      lastAction : function () {
        tzAio.lastAction();
      }
    });

    GM_addStyle(GM_getResourceText("css1"));

    $.ajaxSetup({ cache : true });

    $(d).ready(function () {

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
            tzAio.cache.$searchResults = tzAio.selectors.$body.find("div.results");
            tzAio.selectors.$theSearchBox = $("#thesearchbox").prop("tabindex", 1);

            if ( ~tzAio.page.path.indexOf("users/") ) {
              tzAio.selectors.$comments = tzAio.selectors.$body.find(".comment");
              tzAio.linkifyCommentLinks(options);
            }
            if ( ~tzAio.page.path.indexOf("/profile") || ~tzAio.page.path.indexOf("users/") ) {

              tzAio.lastAction();

            } else if ( tzAio.page.thash.match(tzAio.cache.hashPatt) ) {
              tzAio.cache.isSingle = true;
              tzAio.initSingleTorrent(options, trackers, function (options, trackers) {
                if ( tzAio.cache.$searchResults.length ) {
                  // Related search results
                  tzAio.initSearchPage(tzAio.cache.$searchResults, options, function (searchElement) {
                    tzAio.lastAction();
                  });
                } else {
                  tzAio.lastAction();
                }
              });

            } else if ( tzAio.page.path.match(/^\/help\/?$/) ) {

              tzAio.selectors.$helpDiv = tzAio.selectors.$body.find("div.help:eq(0)")
                .append(tzAio.getHelpHtml()).lastAction();

            } else if ( tzAio.page.path === "/" ) {

              tzAio.removeAds("splash", options) && tzAio.lastAction();

            } else if ( tzAio.page.path === "/i"
              || tzAio.page.path.match(/^\/(search|any|verified|advanced|tracker_)/)
              || tzAio.page.path.match(/^\/[a-z]{2,}\//) ) {

              tzAio.cache.isSearch = true;
              tzAio.removeAds("search", options, tzAio.cache.$searchResults);

              tzAio.initSearchPage(tzAio.cache.$searchResults, options, function (results) {
                var observer;
                if ( tzAio.page.path !== "/i" ) {
                  if ( options.ajaxedSorting ) {
                    tzAio.bindAjaxLinks(results);
                  }
                } else if ( tzAio.page.path === "/i" ) {
                  observer = new MutationObserver(tzAio.ajaxResultsHandler);
                  observer.observe(tzAio.selectors.$body[0], {
                    attributes     : true
                    ,subtree       : true
                    ,childList     : true
                    ,characterData : true
                  });
                }
                tzAio.lastAction();              
              });
            }
            // listen for keyups on all pages
            $(d).on("keyup", tzAio.handleKeyUps);
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