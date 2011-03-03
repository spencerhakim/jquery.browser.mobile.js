(function($, window) {

$.browser.height = $(window).height();
$.browser.width  = $(window).width();
$.browser.mobile = /mobile|Android|webOS|iPhone|iPod/i.test(navigator.userAgent) ? true : //try to match useragent
                        ($.browser.width / $.browser.height) < 1 && ($.browser.width * $.browser.height) <= 614400 ? true : //iPhone 4 resolution or lower in portrait mode
                        false;

})(jQuery, window)