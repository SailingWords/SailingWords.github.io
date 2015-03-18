var tim = {};

tim.index = {};

// ready event
tim.index.ready = function() {
    
    var $header     = $('.masthead'),
        $ui         = $header.find('.typer'),
        $library    = $header.find('.library'),
        $version    = $header.find('.version'),
        $logo       = $header.find('.container'),
        handler     = {
            introduction: function() {
                // zoom out
                setTimeout(function() {
                    $header
                    .removeClass('zoomed')
                    ;
                }, 14000);
                
                $ui.typed({
                    replaceBaseText : true,
                    strings         : [
                        "Silence is the power of gods.",
                        "Words are ours.",
                        "Words can build bridges across darkness and chaos.",
                        "<b>Simplify</b> life with words, with Us."
                    ],
                    showCursor      : false,
                    typeSpeed       : 50,
                    backSpeed       : 20,
                    backDelay       : 200
                });
                
                setTimeout(function() {
                    $library.transition('scale in', 1000);
                    $logo.transition('fade', 5000);
                }, 16500);
                
                setTimeout(function() {
                    $version.transition('fade', 1000);
                }, 17100);
            }
        };
    
    handler.introduction();
};

// attach ready event
$(document)
  .ready(tim.index.ready)
;