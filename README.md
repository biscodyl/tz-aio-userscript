Torrentz All-in-one Userscript
==============================

[Does everything you wish Torrentz could do!](http://userscripts.org/scripts/show/125001)
This userscript enhances Torrentz (on all SSL domains) to include a bunch of new features. Tested on Firefox 17+ (GreaseMonkey/Scriptish) and Google Chrome 23+ with Tampermonkey.

This userscript enhances Torrentz.eu (and all other mirror domains) to include a bunch of new features. Among them are customizable magnet-links, ajaxed sorting, intelligent stats, and much much more... Tested in Firefox 19.0 (GreaseMonkey 1.8, Scriptish 0.1.8), Chrome 25.0.1364.97 (Tampermonkey v2.12.3124.16). Will __not__ work using Chrome's built in userscript installation. Passes AdBlock default filter-rules.
Please [https://userscripts.org/scripts/reviews/125001](rate and/or leave a review) if you like it, and please feel free to ask for more features!

This project is mainly maintained and hosted on [https://github.com/elundmark/tz-aio-userscript/](github), so please report any issues or requests @ [https://github.com/elundmark/tz-aio-userscript/issues](github.com/elundmark/tz-aio-userscript/issues).

Applies to these sites
----------------------

* [http(s)://torrentz.eu/*](https://torrentz.eu/)
* [http(s)://torrentz.ph/*](https://torrentz.ph/)
* [http(s)://torrentz.li/*](https://torrentz.li/)
* [http(s)://torrentz.com/*](https://torrentz.com/)
* [http(s)://torrentz.me/*](https://torrentz.me/)
* [http(s)://torrentz.in/*](https://torrentz.in/)
* [http(s)://torrentz.hk/*](https://torrentz.hk/)
* [http(s)://torrents.de/*](https://torrents.de/)
* [http(s)://tz.ai/*](https://tz.ai/)

Features
--------

* _Default trackerlist_ (Magically sorted trackers, that apply to all magnet-links).
* _Search engines list_ (Select some text in the title and search these sites).
* _No referer url_ (An optional url that is prepended to all outgoing non-torrent-ish sites).
* _Force HTTPS_ (Off by default, but forces SSL if enabled).
* _Hide Ads_ (Wouldn't be a UserScript without this. As ads change, this script will be updated).
* _Colorful results_ (Uses a pretty solid `RegExp` pattern to figure out what is what and adds a background color so it's easier to read, and also dims out seemingly inactive torrents).
* _Ajaxed sorting_  (Applies to all search results, uses `history.pushState`).
* _Exclude filter_  (Remove unwanted torrens by keywprd or `RegExp`).
* _Fix comment links_ (Changes all valid un-anchored links inside comments to links).
* _All these settings are imported for **pre 2.1.0** users, and can be flushed and reset on demand._

* __NEW__ Global settings panel with these options **1**:
    * Force SSL on all domains.
    * Ad removal.
    * Ajaxed sorting of results.
    * Colorful results.
    * Saved custom trackers with intelligent sorting (now fixed).
    * Add your own Select-to-search search-engines links.
    * Linked comment-links.
    * Optional no-referer url for all outgoing links.

**1** ) Applies to all mirrors, unlike before. Old users settings are imported automatically.

Under the hood
----------------

* (v2.1.0 improved) Colorized search-results and magnet-link for each result.
* Direct download links for torrent files.
* Optimized magnet-link.
* Copy-trackers button for easy copying.
* Stats on seed-ratio and trackers (now generated a lot faster).
* wmv file warning.
* Smart keyboard shortcuts (`C` to toggle the Copy-trackers box, `D` to download with the magnet-link, `SHIFT+D` to download the first available .torrent file, `ESCAPE` for general exit / reset).
* (v2.0.18) Passes AdBlocker default list.

Included plugins
----------------
* jQuery JavaScript Library v1.9.1
  [jquery.com](http://jquery.com/)
  Includes Sizzle.js
  [http://sizzlejs.com/](http://sizzlejs.com/)
  Copyright 2005, 2012 jQuery Foundation, Inc. and other contributors
  Released under the MIT license
  [jquery.org/license](http://jquery.org/license)
* jQuery JSON Plugin, version: 2.4 (2012-11-13)
  MIT license: [opensource.org/licenses/mit-license.php](http://www.opensource.org/licenses/mit-license.php)
  Influenced by MochiKit's serializeJSON, (c) 2005 by Bob Ippolito.
* JSTORAGE, Copyright (c) 2010 Andris Reinman, andris.reinman@gmail.com
  Licensed under MIT license: [opensource.org/licenses/mit-license.php](http://www.opensource.org/licenses/mit-license.php)
* [jQuery replaceText](http://github.com/cowboy/jquery-replacetext/), Copyright (c) 2009 "Cowboy" Ben Alman
  Version: 1.1, Last updated: 11/21/2009*
  [Dual licensed](http://benalman.com/about/license/) under the MIT and GPL licenses.
  [Project Home](http://benalman.com/projects/jquery-replacetext-plugin/)
* [Underscore.js](http://underscorejs.org/) 1.4.4, (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
  Freely distributable under the [MIT](http://www.opensource.org/licenses/mit-license.php) license.

How to use
----------

1. Install [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) under Firefox, or [Scriptish](https://addons.mozilla.org/en-US/firefox/addon/scriptish/) which is also supported, or choose [Tampermonkey](https://chrome.google.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo) if you use Google Chrome.
2. Install the userscript itself from [userscripts.org](http://userscripts.org/scripts/show/125001), click on `Install`.

TODO's
----------

1. Build script for easier maintenance.
2. Remove old imports and clean up the code.
