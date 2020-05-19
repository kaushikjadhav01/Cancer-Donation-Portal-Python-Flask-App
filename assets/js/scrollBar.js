"use strict";

$(function () {

// ========================= Scale-bar ================================

    $(window).scroll(function () {
        if (($(this).scrollTop() + $(this).height()) >= $(".scale-area").offset().top) {
            $('.scale-bar-1').each(function () {
                var getPercent = $(this).data('percent') / 100;
                var getProgressWrapWidth = $(this).width();
                var progressTotal = getPercent * getProgressWrapWidth;
                var animationLength = 1500;
                $(this).stop().animate({
                    left: progressTotal
                }, animationLength);
            });
        }
    });
});
