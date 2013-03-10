Torrentz All-in-one Userscript
==============================

[Does everything you wish Torrentz could do!](http://userscripts.org/scripts/show/125001)
This userscript enhances Torrentz (on all SSL domains) to include a bunch of new features. Tested on Firefox 17+ (GreaseMonkey/Scriptish) and Google Chrome +23 with Tampermonkey.

Applies to these sites
----------------------

* [http(s)://torrentz.ph/*](https://torrentz.ph/)
* [http(s)://torrentz.eu/*](https://torrentz.eu/)
* [http(s)://torrentz.li/*](https://torrentz.li/)
* [http(s)://torrentz.com/*](https://torrentz.com/)
* [http(s)://torrentz.me/*](https://torrentz.me/)
* [http(s)://torrentz.in/*](https://torrentz.in/)
* [http(s)://torrentz.hk/*](https://torrentz.hk/)
* [http(s)://torrents.de/*](https://torrents.de/)
* [http(s)://tz.ai/*](https://tz.ai/)

Features
--------

* _Default trackerlist_ (Magically sorted trackers, that apply to all magnet-links.)
* _Search engines list_ (Select some text in the title and search these sites.)
* _No referer url_ (An optional url that is prepended to all outgoing non-torrent-ish sites.)
* _Force HTTPS_ (Off be default, but forces SSL if enabled.)
* _Hide Ads_ (Wouldn't be a UserScript without this. As ads change, this script will be updated.)
* _Colorful results_ (Uses a pretty solid** `RegExp` pattern to figure out what is what.)
* _Ajaxed sorting_  (Applies to all search results, uses `history.pushState`)
* _Fix comment links_ (Changes all valid un-anchored links inside comments to links)
* All these settings are imported for <2.1.0 users, and can be flushed and reset on demand.

* __NEW__ Global settings panel with these options:
    * Force SSL on all domains **1**.
    * Ad removal.
    * Ajaxed sorting of results.
    * Colorful results.
    * Saved custom trackers with intelligent sorting (now fixed).
    * Add your own Select-to-search search-engines links.
    * Linked comment-links.
    * Optinal no-referer url for all outgoing links.
_1_ : Applies to all mirrors, unlike before. Old users settings are imported automatically.

Under the hood
----------------

* Smart keyboard shortcuts.
* (v2.1.0 improved) Colorized search-results and magnet-link for each result.
* Direct download links for torrent files.
* Optimized magnet-link.
* Copy-trackers button for easy copying.
* Stats on seed-ratio and trackers (now generated a lot faster).
* wmv file warning.
* (v2.0.18) Passes AdBlocker default list. `/html/body/div[2]` had `info` as a class, which matched a rule in adBlocker.

Included plugins
----------------
* jQuery JavaScript Library v1.9.1
  [jquery.com](http://jquery.com/)
  Includes Sizzle.js
  [http://sizzlejs.com/(]http://sizzlejs.com/)
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

1. Improve ***select-to-search**
2. Build script for easier maintenance.

