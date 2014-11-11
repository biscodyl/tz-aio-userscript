# Changelog

### [v2.7.10](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.7.10) (2014-11-11)

* New ad class detected `.SimpleAcceptebleTextAds`.

### [v2.7.9](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.7.9) (2014-11-04)

* Change to search query, from `f=` to `q=`. Applies especially to the episode feature, fixing a bug I didn't realize existed.

### [v2.7.8](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.7.8) (2014-10-29)

* Added support for the filesoup proxy domain.
* Modified the conditional domain check for redirecting to `https:`.
* Changed the RegExp pattern for the `@include` meta entry into one domain per row.

### [v2.7.7](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.7.7) (2014-10-27)

* Corrections made for new `/my` url.
* Micro-optimizations of `for` and `while` loops.

### [v2.7.6](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.7.6) (2014-10-24)

* Ad detected; fixed bad iframe ad condition.

### [v2.7.5](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.7.5) (2014-10-22)

* Changed the single [CC0 Universal 1.0 License](https://creativecommons.org/publicdomain/zero/1.0/) to dual license with the [MIT](http://elundmark.se/_files/js/tz-aio/license.txt) due to [conflict](https://github.com/elundmark/tz-aio-userscript/issues/7) with OSI - first couple of versions of this had an MIT license which i foolishly changed without thinking.
* Updated [license.txt](https://github.com/elundmark/tz-aio-userscript/blob/master/license.txt).
* No other changes in the code.

### [v2.7.4](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.7.4) (2014-10-21)

* [Greasyfork](https://greasyfork.org/en/scripts/search?q=torrentz) link change.
* ViewMe ad-link selector updated to `results.find("p a[href*='viewme.com/']")`.

### [v2.7.3](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.7.3) (2014-09-30)

* Minor link updates.

### [v2.7.2](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.7.2) (2014-09-23)

* Added **Votes** to infobar.
* Other small infobar improvements.
* `Date().getTime()` replaced w/ `Date.now()`.

### [v2.7.1](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.7.1) (2014-09-16)

* Demonoid.ph added to dl-list.
* Disabled color-pickers are now truely disabled.

### [v2.7.0](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.7.0) (2014-09-15)

* One new ad link detected.
* Added link for 1337x.to.
* No more html strings; stabler html generation using `jQuery("<elem/>")`.
* Small CSS improvments.
* Smarter settings.
* General code cleanup.
* Sorry about all the smaller unplanned 2.6.x releases that should have been given more thought.

### [v2.6.4](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.6.4) (2014-09-11)

* Another stupid pos fix for `2.6.3`.

### [v2.6.3](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.6.3) (2014-09-11)

* Annoying error fixed for `2.6.2`.

### [v2.6.2](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.6.2) (2014-09-11)

* Even better infobar (w/ readable code).

### [v2.6.1](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.6.1) (2014-09-09)

* Fixed some annoying text issues in the infobar.

### [v2.6.0](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.6.0) (2014-09-09)

* New and improved infobar.
* Scrapped images and lighter code.
* New look for magnet-links.
* Many small papercuts fixed.
* Re-checked browser and plugin compatibility.

### [v2.5.14](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.5.14) (2014-08-04)

* Fixed **next** and **prev** keyboard shortcuts, they broke because `rel=next` and `rel=prev` were removed.

### [v2.5.13](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.5.13) (2014-07-07)

* **Important!** If you use Scriptish, upgrade it to the [latest version](https://addons.mozilla.org/en-US/firefox/addon/scriptish/versions/), at this moment `v0.1.12`. Earlier versions have a [bug](https://github.com/scriptish/scriptish/issues/237).
* [Bugfixes](https://github.com/elundmark/tz-aio-userscript/issues/3) for embedding CSS.
* Code syntax changed.
* Updated jQuery to `v2.1.1`.

### [v2.5.12](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.5.12) (2014-06-16)

* Small fix to the keyboard shortcut for the direct links.

### [v2.5.11](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.5.11) (2014-06-03)

* New click ad cookie detected `wgm`.
* Monkeyguts link added.

### [v2.5.10](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.5.10) (2014-05-31)

* CSS rule fix for spectrum color pickers.

### [v2.5.9](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.5.9) (2014-05-31)

* Changed `@require` and added `@resource`for [spectrum](https://github.com/bgrins/spectrum) to the cdn at [jsdelivr.net](http://www.jsdelivr.com/) to comply with [greasyfork.org](https://greasyfork.org/)'s [rules](https://greasyfork.org/help/external-scripts).
* Made the ad cookie _remover_ in `removeDocOnclick()` sturdier and less prone to infinite reloads.
* Removed all links to [userscripts.org](https://userscripts.org/) - R.I.P.
* Markdown cleanup.

### [v2.5.8](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.5.8) (2014-05-27)

* Added `ch` domain for Switzerland.

### [v2.5.7](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.5.7) (2014-05-24)

* Removed link to greasyfork due to limitations in `@require`.

### [v2.5.6](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.5.6) (2014-05-24)

* New `meta.js` url, **disable _Require Secure Updates_** to enable future auto-updates.
* New script hosting link(s).
* Stricter use of `window` and `document`.
* Typo fix in settings panel.

### [v2.5.5](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.5.5) (2014-04-18)

* Fixed bug in dmca counter.
* Added another proxy fix for tpb.

### [v2.5.4](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.5.4) (2014-04-10)

* Added removed DMCA counts to the top bar.
* Some unescaped html fixed.

### [v2.5.3](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.5.3) (2014-03-28)

* Fixed typo in searchtabs rss link.

### [v2.5.2](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.5.2) (2014-03-28)

* Fixed ajax beaviour and search-tabs excluding some terms.
* Small CSS bugs fixed.

### [v2.5.1](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.5.1) (2014-03-27)

* Bugfix for persistent ads showing regardless of `Hide Ads`.

### [v2.5.0](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.5.0) (2014-03-27)

* **New!** Automatic Search Tabs for the search box, generated by the editable search-engines. Can be turned off in the settings.
* **New!** Color pickers for the results. Powered by [Spectrum Colorpicker v1.3.3](https://github.com/bgrins/spectrum).
* **New!** Export / Import functionality for the settings.
* **New!** Improved Hud w/ bigger icons from [FatCow-Farm Fresh Icons](http://www.fatcow.com/free-icons).
* Improved `RegExp` pattern for the search results.
* Removed legacy update checker.
* Many speed improvements.
* Tons of bugs fixed and re-written functions.
* Updated [UnderScore.js](http://underscorejs.org/) to `v1.6.0`.
* [jQuery](http://jquery.com/) (`v2.1.0`) is now fetched from [cdnjs.com](https://cdnjs.com/).

### [v2.4.2](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.4.2) (2014-03-19)

* Bug fix for previous ad fix in `2.4.1`.

### [v2.4.1](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.4.1) (2014-03-18)

* Fixed inline ads having `!important` that overrides this scripts own `!important` CSS rules.

### [v2.4.0](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.4.0) (2014-02-04)

* Autopager compatible (thx [roshambo](https://userscripts.org/users/143015) for the fix).
* Removed the use of `unsafeWindow`.
* New methods for highlighting which will decrease the chance of breaking with other scripts.
* Direct links fixed.
* New Ads removed.
* Smaller code footprint.
* Episode links now work on "No Torrents Found" pages.
* Updated jQuery to `v2.1.0` (fetched the file from **code.jquery.com**).
* Still supports the old auto-updater but that will be removed on the next release due to low usage (finally).

### [v2.3.18](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.3.18) (2013-12-14)

* Updated another direct link domain.

### [v2.3.17](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.3.17) (2013-12-10)

* Updated 1 direct link domain.

### [v2.3.16](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.3.16) (2013-11-21)

* Added new ad block to the ad-list (`.SimpleAcceptableTextAds`).
* Small typo fixes.
* New direct torrent link matcher function (`tzAio.linkMatches`).

### [v2.3.15](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.3.15) (2013-11-14)

* Added 2 direct link sources.

### [v2.3.14](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.3.14) (2013-11-13)

* Updated [UnderScore.js](http://underscorejs.org/) to `v1.5.2`.
* Replaced log function with a smarter one that doesn't need a `try {} cacth () {}` block.
* Swicthed to tabs instead of hard spaces.
* New CSS function with better cross-engine support.

### [v2.3.13](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.3.13) (2013-10-17)

* Updated the browser cookie to block new popup ads. `tz=1`

### [v2.3.12](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.3.12) (2013-09-11)

* More speed improvements and optimizations.
* Updated [UnderScore.js](http://underscorejs.org/) to `v1.5.1`, now fetched from [cdnjs](https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.1/underscore-min.js).
* Updated jQuery to `v2.0.3`.
* No more external plugins file fetched from my own server.

### [v2.3.11](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.3.11) (2013-09-10)

* Small speed improvments in `@include` pattern and all javascript regular expressions.

### [v2.3.10](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.3.10) (2013-09-08)

* Fixed bug that copied trackers whenever ESC was pressed or settings-panel was opened.

### [v2.3.9](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.3.9) (2013-08-31)

* Using `shift + d` now downloads a random torrent instead of the first one listed.

### [v2.3.8](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.3.8) (2013-08-30)

* Added torlock.com as a direct torrent link.

### [v2.3.7](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.3.7) (2013-08-27)

* Updated [UnderScore.js](http://underscorejs.org/) to `v1.5.0` and made the no-referrer links include a clickable link for targets that take time loading.

### [v2.3.6](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.3.6) (2013-08-19)

* New ad class added to `removeAds`.

### [v2.3.5](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.3.5) (2013-08-16)

* Torrent direct links updated.

### [v2.3.4](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.3.4) (2013-08-16)

* Removed update checker due to bad code and changes in Firefox.

### [v2.3.3](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.3.3) (2013-08-06)

* Minor optimizations for detecting links in comments, and safer no-referrer urls.

### [v2.3.2](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.3.2) (2013-08-05)

* Important bug fixes for the update checker, and for new installs (with empty settings) which until now breaked the whole script.
* Still no solution for Chrome and the new-lines problem when copying trackers, if this persists, I'll have to change it to use the old copybox instead.

### [v2.3.1](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.3.1) (2013-08-04)

* `2013 01 01` episodes now stop at todays date.
* `No Referer Url` was dumped, and replaced with a more modern `rel='noreferrer' || data:text/html<html>...` solution, and I also made sure they open in the current window.
* Bug squashed in the comment links function, these links are now also free of any outgoing referrer.
* Noticed a bug in TamperMonkey where the trackers being copied where stripped of all newlines. This bug has since then [been solved](http://forum.tampermonkey.net/viewtopic.php?f=17&t=668) in it's newest [Beta release](http://tampermonkey.net/changelog.php?version=3.4.3525&ext=gcal).

### [v2.3.0](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.3.0) (2013-08-03)

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

### [v2.2.7](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.2.7) (2013-07-24)

* Added new ad block to the ad-list (`.dnotblcokmebro`).

### [v2.2.6](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.2.6) (2013-07-15)

* Checks for OS first before adding carriage returns (`GM_setClipboard`).

### [v2.2.5](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.2.5) (2013-07-13)

* Fixed missing newlines when using the new copy button (`GM_setClipboard`).

### [v2.2.4](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.2.4) (2013-07-12)

* Bugfix for the updater that alerted when it wasn't supposed to.

### [v2.2.3](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.2.3) (2013-07-12)

* Code cleanup and slight speed improvements, now in 'use strict' mode.

### [v2.2.2](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.2.2) (2013-07-09)

* Important bug-fixes for the built-in updater.

### [v2.2.1](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.2.1) (2013-07-09)

* More improvements of update checker; less annoying, it now only shows an alert popup once, after that you can only see the notice in the settings-panel.
* More intelligent; it deletes it's own storage when the scipt has just updates itself, and uses a nifty method to _really_ compare version numbers to see if it's really newer.

### [v2.2.0](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.2.0) (2013-07-08)

* Better update checking, fyi it checks every 12 hours, only sends your current version number, nothing else. It now also enables me to "send" a message in case something major happens.
* Code cleanup.
* Many small optimizations.

### [v2.1.18](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.1.18) (2013-07-06)

* Added update checker.
* Replaces css3 values with compass/css3.
* Other small code changes.

### [v2.1.17](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.1.17) (2013-07-05)

* Added direct links for `katproxy.com`.

### [v2.1.16](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.1.16) (2013-07-04)

* Fixed publichd.se links.
* Internal code structure changes.
* Bug fixed on `/help` pages.
* New logo.

### [v2.1.15](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.1.15) (2013-06-27)

* Sanitized regexp input; submitting an invalid pattern no longer breaks the page.
* Truncated magnetlink titles in searchresults.

### [v2.1.14](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.1.14) (2013-06-25)

* Modified the default trackerlist.
* More bugfixes for keyboard shortcuts.

### [v2.1.13](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.1.13) (2013-06-24)

* Added `GM_setClipboard` in place of the copybox, for engines that supports it (GreaseMonkey 1.10+).
* Minor bugfixes for keyboard shortcuts.

### [v2.1.12](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.1.12) (2013-06-23)

* Small optimizations.
* Added `/feed` urls to exclude list, stops feeds in Firefox from refreshing in a loop.

### [v2.1.11](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.1.11) (2013-06-20)

* Updated `jQuery` to version 2.0.2 and changed it's host to [cdnjs](http://cdnjs.cloudflare.com/).
* Removed link underneith Exclude filter to show hidden titles, click the info text below the list instead.

### [v2.1.10](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.1.10) (2013-06-14)

* Changed `document` to `unsafeWindow.document`. Added missing leglal disclaimer to `README.md`.

### [v2.1.9](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.1.9) (2013-06-14)

* Old import functions for pre 2.1.0 users removed.
* Removed jStorage and jQuery Json plugin, not needed anymore.
* Some internal optimizing of the Exclude Filter.
* Support for kickass.to.
* Build script; moved CSS variables to sass locally.
* No longer stores the CSS in `sessionStorage`.

### [v2.1.8](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.1.8) (2013-06-09)

* New image ad removed.

### [v2.1.7](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.1.7) (2013-06-06)

* Fix for "Exclude filter" not escaping special chars before converting string to a RegExp object.

### [v2.1.6](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.1.6) (2013-06-04)

* Fix for "Exclude filter" not showing the number of excluded torrents on some pages.

### [v2.1.5](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.1.5) (2013-06-04)

* Added new "Exclude filter" feature.
* Cleaned up and added some new trackers.
* Added some more direct links, and updated some old urls.
* Various bugfixes.

### [v2.1.4](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.1.4) (2013-05-31)

* Fixed removal of new (click) ads.
* Fixed search box to update when using ajax.
* Fixed various CSS bugs.
* Improved select-to-search.

### [v2.1.3](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.1.3) (2013-03-22)

* Fix for new inactive feature in [`dlResultsActions`].

### [v2.1.2](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.1.2) (2013-03-22)

* When colorizing results it also checks for torrents older than 1 month that have no seeders, and less than 5 downloaders, and if so it dims that one out to indicate an inactive torrent. Thanks to [kharn](https://userscripts.org/users/510357) for the suggestion!

### [v2.1.1](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.1.1) (2013-03-12)

* Validation of user settings before saving is now fixed, magnetlink click error was fixed, and a bunch of internal optimizations. README.md and Changelog.md typos fixed.

### [v2.1.0](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.1.0) (2013-03-10)

* Total rewrite, most noticable change is that it now uses GM supported built-in storage, which means all settings you save, applies to all domains. As there are more new features than changes, these are some of them. See all [here](https://github.com/elundmark/tz-aio-userscript/blob/master/README.md).
* __NEW__ Global settings panel with these options:
    * Force SSL on all domains _(applies to all mirrors, unlike before. Old users settings are imported automatically)_.
    * Ad removal.
    * Ajaxed sorting of results.
    * Colorful results.
    * Saved custom trackers with intelligent sorting (now fixed).
    * Add your own Select-to-search search-engines links.
    * Linked comment-links.
    * Optional no-referer url for all outgoing links.
* Updated `jQuery` to __1.8.3__
* Updated `underScore.js` to __1.4.4__
* `@require` and `@resource` has replaced all bulky embedded code.
* Full compatibility with GreaseMonkey, TamperMonkey, and Scriptish.
* More kind to other plugins and userscripts, should play well with other important stuff like lastPass and AdBlocker.
* Smarter CSS, with colors you can change to your liking.
* Lightyears more robust and future-proof.
* ... faster too!

### [v2.0.23](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.0.23) (2013-02-23)

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

### [v2.0.22](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.0.22) (2013-01-18)

* CSS typo fix.

### [v2.0.21](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.0.21) (2013-01-18)

* Added new ad block to the no-ads list (sorry bro).

### [v2.0.20](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.0.20) (2013-01-11)

* Fixed autocomplete CSS (was hidden behind settings div).

### [v2.0.19](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.0.19) (2013-01-11)

* Various updates to step this into the future a litlle bit. GreaseMonkey or TamperMonkey is now required.`@match` rules have been removed for legibility and easier customization. `@grant GM_log` rule also added. Other small `typeof` quirks fixed.

### [v2.0.18](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.0.18) (2012-12-06)

* Fixed adblocker removing the info bar. Thanks [AlienHeads](https://github.com/elundmark/tz-aio-userscript/issues/1)!

### [v2.0.17](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.0.17) (2012-12-05)

* Result click fix and more small CSS fixes.

### [v2.0.16](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.0.16) (2012-12-04)

* All New Search results! Pretty sweet...

### [v2.0.15](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.0.15) (2012-12-04)

* Updated `jQuery` to __1.8.3__
* This script now applies to all the different domains:
* [http(s)://torrentz.eu/*](https://torrentz.eu/)
* [http(s)://torrentz.com/*](https://torrentz.com/)
* [http(s)://torrentz.me/*](https://torrentz.me/)
* [http(s)://torrentz.in/*](https://torrentz.in/)
* [http(s)://torrentz.hk/*](https://torrentz.hk/)
* [http(s)://torrents.de/*](https://torrents.de/)
* [http(s)://tz.ai/*](https://tz.ai/)

### [v2.0.14](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.0.14) (2012-12-04)

* Highlighted results for Anime. Small CSS fix on search results. Updated all embedded plugins to their latest release.

### [v2.0.13](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.0.13) (2012-09-07)

* New sponsored search results removed.

### [v2.0.12](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.0.12) (2012-09-05)

* Changed http://www.nullreferer.com/ cloaker to http://href.li/ and removed all said hardcoded urls to `TBO.cloakerUrl`.

### [v2.0.11](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.0.11) (2012-09-01)

* More new ads removed. jQuery bumped to 1.8.1.

### [v2.0.10](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.0.10) (2012-08-10)

* New ad removed.

### [v2.0.9](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.0.9) (2012-07-25)

* Added movietorrents.eu to the `torrSitesArr` download buttons array.

### [v2.0.8](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.0.8) (2012-07-23)

* Added publichd.eu to the `torrSitesArr` download buttons array.

### [v2.0.7](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.0.7) (2012-07-22)

* Fixed broken `linkComments` select option in the options panel.
* Linked the userscripts.org changelog to this page instead of mirroring it in two places.
* Plus some variable cleanups and inline comments.

### [v2.0.6](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.0.6) (2012-07-17)

* Numerous small but important fixes:
* Most notably to the magnet-links which could break when they contained hyphens or quotes.
* I also improved the searchresults list, especially when the title becomes too long.
* Removed rarbg.com's download button form `torrSitesArr`, which is impossible to link to now.
* Renamed torrage.net -> torrage.com in `torrSitesArr`.
* Cleaned up the code a tad.

### [v2.0.5](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.0.5) (2012-05-18)

* Removed new ads on search-result pages.

### [v2.0.4](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.0.4) (2012-05-17)

* Crutial whitespace fix using `_.compact()`
* New `@downloadURL`.
* Small RegExp changes.

### [v2.0.3](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.0.3) (2012-05-16)

* Added version-control to help future updates from breaking the page.
* Changed internal functions to prevent errors fom whitespace in user saved vaules.
* Small CSS fix to search-results.

### [v2.0.2](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.0.2) (2012-05-16)

* New: Magnet-links on all individual search-results.
* Crutial typo fix in `TZO.trackerObject.allMagnet` string.
* New Help section html.
* Speed improvments.
* `@require` jquery 1.7.1 instead of copying from unsafeWindow.

### [v2.0.1](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.0.1) (2012-05-14)

* Small CSS fix.

### [v2.0.0](https://github.com/elundmark/tz-aio-userscript/releases/tag/2.0.0) (2012-05-14)

* The first version which I wrote just for me (cirka 2011) was called v1, **v2.0.0** is a total rework of that original version. So, this is the _first public_ version.
