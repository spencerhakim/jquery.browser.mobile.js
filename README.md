Adds mobile detection support to jQuery. This is useful for disabling superfluous JavaScript on devices which are underpowered compared to their desktop/laptop counterparts.

- $.browser.mobile will be set to true if the browser is detected as a mobile variant
- $.browser.ipad will be set to true if the browser is detected as an iPad. The iPad is more powerful than most mobile devices, and is therefore treated separately.
- Detects Android, webOS, BlackBerry, iOS, Opera Mini, and more!