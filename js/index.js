var tim = {};

tim.index = {};

// ready event
tim.index.ready = function() {
    $('#slides').superslides({
        animation: 'fade',
        slide_easing: 'easeInOutCubic',
        slide_speed: 800,
        pagination: false,
        hashchange: false,
        scrollable: true,
        play: 7000
    });

    $('#testimonial-slides').superslides({
        slide_easing: 'easeInOutCubic',
        slide_speed: 2000,
        pagination: false,
        hashchange: false,
        scrollable: true,
        inherit_width_from: '#testimonial-slides',
        inherit_height_from: '#testimonial-slides'//,
        //play: 9000
    });

    function filterPath(string) {
        return string
            .replace(/^\//,'')
            .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
            .replace(/\/$/,'');
    }
    
    var locationPath = filterPath(location.pathname);
    var scrollElem = scrollableElement('html', 'body');
 
    $('a[href*=#]').each(function() {
        var thisPath = filterPath(this.pathname) || locationPath;
        if (  locationPath == thisPath
            && (location.hostname == this.hostname || !this.hostname)
            && this.hash.replace(/#/,'') ) {
            var $target = $(this.hash), target = this.hash;
            if (target) {
                var targetOffset = $target.offset().top;
                $(this).click(function(event) {
                    event.preventDefault();
                    $(scrollElem).animate({scrollTop: targetOffset}, 400, function() {
                        location.hash = target;
                    });
                });
            }
        }
    });
 
      // use the first element that is "scrollable"
      function scrollableElement(els) {
        for (var i = 0, argLength = arguments.length; i <argLength; i++) {
          var el = arguments[i],
              $scrollElement = $(el);
          if ($scrollElement.scrollTop()> 0) {
            return el;
          } else {
            $scrollElement.scrollTop(1);
            var isScrollable = $scrollElement.scrollTop()> 0;
            $scrollElement.scrollTop(0);
            if (isScrollable) {
              return el;
            }
          }
        }
        return [];
      }
};

// attach ready event
$(document)
  .ready(tim.index.ready)
;