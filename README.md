# Torrentz All-in-one Userscript

### **Important! Mixed content warning in Firefox 23+**

This script uses a non secure `http` connection to check for updates, which triggers Firefoxs' new [mixed active content warning](https://support.mozilla.org/en-US/kb/how-does-content-isnt-secure-affect-my-safety?as=u). This is a good thing for security, but also bad for you in that **you won't recieve any notifications about updates anymore**. To re-enable notifications, please click the shield icon to the let of the locationbar when visible, and choose "Disable protection on this page". Sure I could purchase a `SSL` certificate for my site, but that's $15 a month from my already empty wallet. And all you send is a request that says `?version=1.2.3`:

    [Webdeveloper error] [17:58:52.736] Blocked loading mixed active content "http://elundmark.se/_files/js/tz-aio/log/update-check.php?version=2.3.3" @ file:///run/shm/elundmark-firefox-yrmdaoyp.default/gm_scripts/Torrentz_All-in-One/jquery.min.js:6



[Does everything you wish Torrentz could do!](http://userscripts.org/scripts/show/125001)
This userscript enhances Torrentz (on all its domains) to include a bunch of new features. Tested on Firefox 17+ (GreaseMonkey/Scriptish) and Google Chrome 23+ with Tampermonkey. _(Will **not** work using Chrome's built in userscript installation.)_
This userscript enhances Torrentz.eu (and all other mirror domains) to include a bunch of new features. Among them are customizable magnet-links, ajaxed sorting, intelligent stats, and much much more...

Please [rate and/or leave a review](https://userscripts.org/scripts/reviews/125001) if you like it, and please feel free to ask for more features!

This project is mainly maintained and hosted on [github](https://github.com/elundmark/tz-aio-userscript/), so please report any issues or requests @ [github.com/elundmark/tz-aio-userscript/issues](https://github.com/elundmark/tz-aio-userscript/issues).

## Applies to these sites

* [http(s)://torrentz.eu/*](https://torrentz.eu/)
* [http(s)://torrentz.ph/*](https://torrentz.ph/)
* [http(s)://torrentz.li/*](https://torrentz.li/)
* [http(s)://torrentz.com/*](https://torrentz.com/)
* [http(s)://torrentz.me/*](https://torrentz.me/)
* [http(s)://torrentz.in/*](https://torrentz.in/)
* [http(s)://torrentz.hk/*](https://torrentz.hk/)
* [http(s)://torrents.de/*](https://torrents.de/)
* [http(s)://tz.ai/*](https://tz.ai/)

## Features

* **Default trackerlist**  _Customizable_ - Magically sorted trackers, that apply to all magnet-links.
* **Search engines list**  _Customizable_ - Select some text in the title and search these sites.
* **Custom CSS Editor** _Customizable_ - Added by demand, edit away!
* **Force HTTPS**  _Customizable_ - Off by default, but forces SSL (`https://`) if enabled.
* **TV Episode Links**  Helps you search for next/prev episode/season, click the links in the filter-bar or use `SHIFT+[arrowkeys]` when available by searching for the common patters _SXXEXX_ or _2013 01 01_.
* **Ad removal**  _Customizable_ - Wouldn't be a UserScript without this. As new ads are added, this script will be updated.
* **Direct .torrent links**  Applies to all avaliable sites listed on each 'single page'.
* **Stats-bar**  Get all the important info right away, like seed-ratio, a Copy trackerlist button, a Magnet-link, links to the comments and the files, and the total amout of peers.
* **Copy Trackers Button**  Copies all trackers to your clipboard (if your engine doesn't support `GM_setClipboard` it shows them instead).
* **Ajaxed sorting**  _Customizable_ - Applies to all search results, uses `history.pushState`.
* **Exclude filter**  _Customizable_ - Remove unwanted torrens by keywords or `RegExp`.
* **Colorful results**  _Customizable_ - Uses a pretty solid `RegExp` pattern to figure out what is what and adds a background color, making it easier to scan every page.
    * All torrents in all search-results have their own magnet-link that includes your custom trackers.
    * Old/dead-ish torrents are dimmed out to indicate a "dead-ish" torrent.
    * If you use the exclude-filter, the number of excluded torrents are noted at the bottom of the list.
* **No referer url**  _Customizable_ - An optional url that is prepended to all outgoing non-torrent-ish sites.
* **Fix comment links**  _Customizable_ - Changes all valid un-anchored links inside comments to links.
* **Smart keyboard shortcuts**  `'C'` to copy all the trackers or toggle the tracker box, `'D'` to trigger the magnet-link, `'SHIFT + D'` to download the fist torrent-file listed, `'← →'` to navigate search results pages (Left arrow Right arrow), `'SHIFT + →'` to go to the next episode/season, `'SHIFT + ←'` to go to the previous episode/season, `'ESC'` for general exit/close.
* **Update checker**  Checks for updates automatically and notifies you about them.

_All these settings are accessed by clicking 'TzAio' at the top of each page, and can be flushed and reset if you want to start over, or take advantage of (any) new default trackers that might have been added._

## More features worth mentioning

* `.wmv` file warning.
* Passes AdBlocker default blacklist.
* All the data you save is stored permanently and applies across all domains, without the use of cookies or `localStorage`.

## Help me, help you to help Us

See something wrong in the code, or maybe you wanna collaborate in keeping this script even more up to date? If so, I'm super stoked! Throw me an email, or contribute to the repo right away!

Email and info: [https://github.com/elundmark](https://github.com/elundmark)

## Included plugins

* jQuery JavaScript Library v2.0.2 [jquery.com](http://jquery.com/). Includes Sizzle.js [http://sizzlejs.com/](http://sizzlejs.com/). Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors, released under the MIT license [jquery.org/license](http://jquery.org/license).
* [jQuery replaceText](http://github.com/cowboy/jquery-replacetext/), Copyright (c) 2009 "Cowboy" Ben Alman. Version: 1.1, Last updated: 11/21/2009* [Dual licensed](http://benalman.com/about/license/) under the MIT and GPL licenses. [Project Home](http://benalman.com/projects/jquery-replacetext-plugin/).
* [Underscore.js](http://underscorejs.org/) 1.4.4, (c) 2009-2013 Jeremy Ashkenas, DocumentCloud Inc. Freely distributable under the [MIT](http://www.opensource.org/licenses/mit-license.php) license.

## How to use

1. Install [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) under Firefox, or [Scriptish](https://addons.mozilla.org/en-US/firefox/addon/scriptish/) which is also supported, or choose [Tampermonkey](https://chrome.google.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo) if you use Google Chrome.
2. Install the userscript itself from [userscripts.org](http://userscripts.org/scripts/show/125001), click on `Install`.

## TODO's

The newline problem with Chrome/TamperMonkey and `GM_setClipboard` has [been solved](http://forum.tampermonkey.net/viewtopic.php?f=17&t=668) in it's newest [Beta release](http://tampermonkey.net/changelog.php?version=3.4.3525&ext=gcal), I'll let everyone know through the settings panel.

## Legality

Released under [CC0 1.0 Universal (CC0 1.0)](http://creativecommons.org/publicdomain/zero/1.0/).
The author of this script takes no responsibility for any potetial harm done to any hamsters, servers, browsers or wallets. While browsing affected sites with this script is fully legal, downloading illegal copyrighted material still isn't.
