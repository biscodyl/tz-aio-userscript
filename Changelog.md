# Changelog

**2.3.6** (2013-08-19)
* New ad class added to `removeAds`.

**2.3.5** (2013-08-16)
* Torrent direct links updated.

**2.3.4** (2013-08-16)
* Removed update checker due to bad code and changes in Firefox.

**2.3.3** (2013-08-06)
* Minor optimizations for detecting links in comments, and safer no-referrer urls.

**2.3.2** (2013-08-05)
* Important bug fixes for the update checker, and for new installs (with empty settings) which until now breaked the whole script.
* Still no solution for Chrome and the new-lines problem when copying trackers, if this persists, I'll have to change it to use the old copybox instead.

**2.3.1** (2013-08-04)
* `2013 01 01` episodes now stop at todays date.
* `No Referer Url` was dumped, and replaced with a more modern `rel='noreferrer' || data:text/html<html>...` solution, and I also made sure they open in the current window.
* Bug squashed in the comment links function, these links are now also free of any outgoing referrer.
* Noticed a bug in TamperMonkey where the trackers being copied where stripped of all newlines, have filed a [bugreport here](http://forum.tampermonkey.net/viewtopic.php?f=17&t=668).

**2.3.0** (2013-08-03)
* New TV toolbar that helps you search for next/prev episode/season, click the links in the filter-bar or use `SHIFT+[arrowkeys]` when available.
* Custom CSS editor added by demand, edit away!
* Direct torrent links updated.
* Copybox handling improved (only applies to GreaseMonkey v1.9 and below).
* Various CSS fixes.
* Removed dead trackers from the default list and added some new ones (remember that the best trackerlist is arguably an empty one).
* Trackers are now grouped with `udp:` first and `http:` as the backup.
* Better RSS feed exclusion.
* Ajaxed sorting improved, back/forward navigation now works, and titles are updated.
* Keyboard shortcuts handling improved, a list of them can now be found on the HELP page `/help`.
* DMCA / "Family filter" detection improved, which lead to searchresults loading a bit faster.
* Now using JSLint to debug, found a few bad coding habits I've since avoided.

**2.2.7** (2013-07-24)
* Added new ad block to the ad-list (`.dnotblcokmebro`).

**2.2.6** (2013-07-15)
* Checks for OS first before adding carriage returns (`GM_setClipboard`).

**2.2.5** (2013-07-13)
* Fixed missing newlines when using the new copy button (`GM_setClipboard`).

**2.2.4** (2013-07-12)
* Bugfix for the updater that alerted when it wasn't supposed to.

**2.2.3** (2013-07-12)
* Code cleanup and slight speed improvements, now in 'use strict' mode.

**2.2.2** (2013-07-09)
* Important bug-fixes for the built-in updater.

**2.2.1** (2013-07-09)
* More improvements of update checker; less annoying, it now only shows an alert popup once, after that you can only see the notice in the settings-panel.
* More intelligent; it deletes it's own storage when the scipt has just updates itself, and uses a nifty method to _really_ compare version numbers to see if it's really newer.

**2.2.0** (2013-07-08)
* Better update checking, fyi it checks every 12 hours, only sends your current version number, nothing else. It now also enables me to "send" a message in case something major happens.
* Code cleanup.
* Many small optimizations.

**2.1.18** (2013-07-06)
* Added update checker.
* Replaces css3 values with compass/css3.
* Other small code changes.

**2.1.17** (2013-07-05)
* Added direct links for `katproxy.com`.

**2.1.16** (2013-07-04)
* Fixed publichd.se links.
* Internal code structure changes.
* Bug fixed on `/help` pages.
* New logo.

**2.1.15** (2013-06-27)
* Sanitized regexp input; submitting an invalid pattern no longer breaks the page.
* Truncated magnetlink titles in searchresults.

**2.1.14** (2013-06-25)
* Modified the default trackerlist.
* More bugfixes for keyboard shortcuts.

**2.1.13** (2013-06-24)
* Added `GM_setClipboard` in place of the copybox, for engines that supports it (GreaseMonkey 1.10+).
* Minor bugfixes for keyboard shortcuts.

**2.1.12** (2013-06-23)
* Small optimizations.
* Added `/feed` urls to exclude list, stops feeds in Firefox from refreshing in a loop.

**2.1.11** (2013-06-20)
* Updated `jQuery` to version 2.0.2 and changed it's host to [cdnjs](http://cdnjs.cloudflare.com/).
* Removed link underneith Exclude filter to show hidden titles, click the info text below the list instead.

**2.1.10** (2013-06-14)
* Changed `document` to `unsafeWindow.document`. Added missing leglal disclaimer to `README.md`.

**2.1.9** (2013-06-14)
* Old import functions for pre 2.1.0 users removed.
* Removed jStorage and jQuery Json plugin, not needed anymore.
* Some internal optimizing of the Exclude Filter.
* Support for kickass.to.
* Build script; moved CSS variables to sass locally.
* No longer stores the CSS in `sessionStorage`.

**2.1.8** (2013-06-09)
* New image ad removed.

**2.1.7** (2013-06-06)
* Fix for "Exclude filter" not escaping special chars before converting string to a RegExp object.

**2.1.6** (2013-06-04)
* Fix for "Exclude filter" not showing the number of excluded torrents on some pages.

**2.1.5** (2013-06-04)
* Added new "Exclude filter" feature.
* Cleaned up and added some new trackers.
* Added some more direct links, and updated some old urls.
* Various bugfixes.

**2.1.4** (2013-05-31)
* Fixed removal of new (click) ads.
* Fixed search box to update when using ajax.
* Fixed various CSS bugs.
* Improved select-to-search.

**2.1.3** (2013-03-22)
* Fix for new inactive feature in [`dlResultsActions`].

**2.1.2** (2013-03-22)
* When colorizing results it also checks for torrents older than 1 month that have no seeders, and less than 5 downloaders, and if so it dims that one out to indicate an inactive torrent. Thanks to [kharn](https://userscripts.org/users/510357) for the suggestion!

**2.1.1** (2013-03-12)
* Validation of user settings before saving is now fixed, magnetlink click error was fixed, and a bunch of internal optimizations. README.md and Changelog.md typos fixed.

**2.1.0** (2013-03-10)
* Total rewrite, most noticable change is that it now uses GM supported built-in storage, which means all settings you save, applies to all domains. As there are more new features than changes, these are some of them. See all [here](https://github.com/elundmark/tz-aio-userscript/blob/master/README.md).
* __NEW__ Global settings panel with these options:
    * Force SSL on all domains **1**.
    * Ad removal.
    * Ajaxed sorting of results.
    * Colorful results.
    * Saved custom trackers with intelligent sorting (now fixed).
    * Add your own Select-to-search search-engines links.
    * Linked comment-links.
    * Optional no-referer url for all outgoing links.

**1** ) Applies to all mirrors, unlike before. Old users settings are imported automatically.
* Updated `jQuery` to __1.8.3__
* Updated `underScore.js` to __1.4.4__
* `@require` and `@resource` has replaced all bulky embedded code.
* Full compatibility with GreaseMonkey, TamperMonkey, and Scriptish.
* More kind to other plugins and userscripts, should play well with other important stuff like lastPass and AdBlocker.
* Smarter CSS, with colors you can change to your liking.
* Lightyears more robust and future-proof.
* ... faster too!

**2.0.23** (2013-02-23)
* Removed javascript click from search results, too many annoyances. Added the .li domain. Other small optimizations.
* Current domain list:
    * [http(s)://torrentz.ph/*](https://torrentz.ph/)
    * [http(s)://torrentz.eu/*](https://torrentz.eu/)
    * [http(s)://torrentz.li/*](https://torrentz.li/)
    * [http(s)://torrentz.com/*](https://torrentz.com/)
    * [http(s)://torrentz.me/*](https://torrentz.me/)
    * [http(s)://torrentz.in/*](https://torrentz.in/)
    * [http(s)://torrentz.hk/*](https://torrentz.hk/)
    * [http(s)://torrents.de/*](https://torrents.de/)
    * [http(s)://tz.ai/*](https://tz.ai/)

**2.0.22** (2013-01-18)
* CSS typo fix.

**2.0.21** (2013-01-18)
* Added new ad block to the no-ads list (sorry bro).

**2.0.20** (2013-01-11)
* Fixed autocomplete CSS (was hidden behind settings div).

**2.0.19** (2013-01-11)
* Various updates to step this into the future a litlle bit. GreaseMonkey or TamperMonkey is now required.`@match` rules have been removed for legibility and easier customization. `@grant GM_log` rule also added. Other small `typeof` quirks fixed.

**2.0.18** (2012-12-06)
* Fixed adblocker removing the info bar. Thanks [AlienHeads](https://github.com/elundmark/tz-aio-userscript/issues/1)!

**2.0.17** (2012-12-05)
* Result click fix and more small CSS fixes.

**2.0.16** (2012-12-04)
* All New Search results! Pretty sweet...

**2.0.15** (2012-12-04)
* Updated `jQuery` to __1.8.3__
* This script now applies to all the different domains:
* [http(s)://torrentz.eu/*](https://torrentz.eu/)
* [http(s)://torrentz.com/*](https://torrentz.com/)
* [http(s)://torrentz.me/*](https://torrentz.me/)
* [http(s)://torrentz.in/*](https://torrentz.in/)
* [http(s)://torrentz.hk/*](https://torrentz.hk/)
* [http(s)://torrents.de/*](https://torrents.de/)
* [http(s)://tz.ai/*](https://tz.ai/)

**2.0.14** (2012-12-04)
* Highlighted results for Anime. Small CSS fix on search results. Updated all embedded plugins to their latest release.

**2.0.13** (2012-09-07)
* New sponsored search results removed.

**2.0.12** (2012-09-05)
* Changed http://www.nullreferer.com/ cloaker to http://href.li/ and removed all said hardcoded urls to `TBO.cloakerUrl`.

**2.0.11** (2012-09-01)
* More new ads removed. jQuery bumped to 1.8.1.

**2.0.10** (2012-08-10)
* New ad removed.

**2.0.9** (2012-07-25)
* Added movietorrents.eu to the `torrSitesArr` download buttons array.

**2.0.8** (2012-07-23)
* Added publichd.eu to the `torrSitesArr` download buttons array.

**2.0.7** (2012-07-22)
* Fixed broken `linkComments` select option in the options panel.
* Linked the userscripts.org changelog to this page instead of mirroring it in two places.
* Plus some variable cleanups and inline comments.

**2.0.6** (2012-07-17)
* Numerous small but important fixes:
* Most notably to the magnet-links which could break when they contained hyphens or quotes.
* I also improved the searchresults list, especially when the title becomes too long.
* Removed rarbg.com's download button form `torrSitesArr`, which is impossible to link to now.
* Renamed torrage.net -> torrage.com in `torrSitesArr`.
* Cleaned up the code a tad.

**2.0.5** (2012-05-18)
* Removed new ads on search-result pages.

**2.0.4** (2012-05-17)
* Crutial whitespace fix using `_.compact()`
* New `@downloadURL`.
* Small RegExp changes.

**2.0.3** (2012-05-16)
* Added version-control to help future updates from breaking the page.
* Changed internal functions to prevent errors fom whitespace in user saved vaules.
* Small CSS fix to search-results.

**2.0.2** (2012-05-16)
* New: Magnet-links on all individual search-results.
* Crutial typo fix in `TZO.trackerObject.allMagnet` string.
* New Help section html.
* Speed improvments.
* `@require` jquery 1.7.1 instead of copying from unsafeWindow.

**2.0.1** (2012-05-14)
* Small CSS fix.

**2.0.0** (2012-05-14)
* First release, total rework of version 1.

**1.0** (2012-02-06)
* __I wrote the first version almost a year and a half ago, and since so much has changed since that version, I started anew with v.2__

