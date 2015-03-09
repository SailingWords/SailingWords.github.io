$(document).ready(function () {
    if($(window).width() > 600) {
        $('body')
          .visibility({
            offset: -1,
            once: false,
            continuous: false,
            onTopPassed: function() {
              $('.following.bar')
                .addClass('light fixed')
                .find('.menu')
                  .removeClass('inverted')
              ;
            },
            onTopPassedReverse: function() {
              $('.following.bar')
                .removeClass('light fixed')
                .find('.menu')
                  .addClass('inverted')
                  .find('.additional.item')
                    .transition('hide')
              ;
            }
          })
        ;
    }
});