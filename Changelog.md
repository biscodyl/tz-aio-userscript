Changelog
---------

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

