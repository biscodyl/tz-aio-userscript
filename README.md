Torrentz All-in-one Userscript
==============================

[Does everything you wish Torrentz could do!](http://userscripts.org/scripts/show/125001)
This userscript enhances Torrentz (on all SSL domains) to include a bunch of new features. Tested on Firefox 17+ and Google Chrome +23 with Tampermonkey.

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

* Forces SSL on all domains.
* Ad removal.
* (v2.0.16 improved) Colorized search-results and magnet-link for each result.
* Direct download links for torrent files.
* Select-to-search with custom search-engines.
* Saved custom trackers with intelligent sorting.
* Optimized magnet-link.
* Copy-trackers button for easy copying.
* Stats on seed-ratio and trackers.
* wmv file warning.
* Options panel to customize these settings.
* (v2.0.18) Passes AdBlocker default list. `/html/body/div[2]` had `info` as a class, which matched a rule in adBlocker.

Included plugins
----------------

* jQuery JSON Plugin, version: 2.4 (2012-11-13)
  MIT license: [opensource.org/licenses/mit-license.php](http://www.opensource.org/licenses/mit-license.php)
  Influenced by MochiKit's serializeJSON, (c) 2005 by Bob Ippolito.
* JSTORAGE, Copyright (c) 2010 Andris Reinman, andris.reinman@gmail.com
  Licensed under MIT license: [opensource.org/licenses/mit-license.php](http://www.opensource.org/licenses/mit-license.php)
* [jQuery replaceText](http://github.com/cowboy/jquery-replacetext/), Copyright (c) 2009 "Cowboy" Ben Alman
  Version: 1.1, Last updated: 11/21/2009*
  [Dual licensed](http://benalman.com/about/license/) under the MIT and GPL licenses.
  [Project Home](http://benalman.com/projects/jquery-replacetext-plugin/)
* [Underscore.js](http://underscorejs.org/) 1.4.2, (c) 2009-2012 Jeremy Ashkenas, DocumentCloud Inc.
  Freely distributable under the [MIT](http://www.opensource.org/licenses/mit-license.php) license.

How to use
----------

1. Install [Greasemonkey](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/) under Firefox, or [Tampermonkey](https://chrome.google.com/webstore/detail/dhdgffkkebhmkfjojejmpbldmpobfkfo) under Google Chrome.
2. Install the userscript itself from [userscripts.org](http://userscripts.org/scripts/show/125001), click on `Install`.

TODO's
----------

1. Rewrite to make make it more maintainable. The result will be version 2.1.
2. Add keyboard shortcuts for magnet and copy-box.
3. Fix some CSS glitches, non critical.
4. Build script, v2.1.

