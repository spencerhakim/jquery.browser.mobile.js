(function($, window) {

var height = $(window).height();
var width  = $(window).width();
$.browser.mobile = /mobile|mini|Android|webOS|BlackBerry|iPhone|iPod/i.test(navigator.userAgent) ? true : //try to match useragent
                        (width / height) < 1 && (width * height) <= 614400 ? true : //iPhone 4 resolution or lower in portrait mode
                        false;
$.browser.ipad = /iPad/i.test(navigator.userAgent); //iPad is more powerful than most mobile devices, detect separately

})(jQuery, window)