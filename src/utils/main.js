export const test = function () {
    
}

const fullHeight = function () {
    $(function () {
        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function () {
            $('.js-fullheight').css('height', $(window).height());
        });
    });
};

const homeContentOwl = function () {
    $(".content-main").owlCarousel({
        animateOut:   "fadeOut",
        animateIn:    "fadeIn",
        autoplay:     true,
        loop:         true,
        items:        4,
        margin:       0,
        stagePadding: 0,
        nav:          true,
        dots:         true,
        navText:      ["<span class=\"ion-ios-arrow-back\">", "<span class=\"ion-ios-arrow-forward\">"],
        responsive:   {
            0:    {
                items: 4
            },
            600:  {
                items: 4
            },
            1000: {
                items: 4
            }
        }
    });
};

const contentWaypoint = function () {
    if (typeof $(document).waypoint === "function") {
        var i = 0;
        $(".ftco-animate").waypoint(function (direction) {
            if (direction === "down" && !$(this.element).hasClass("ftco-animated")) {

                i++;

                $(this.element).addClass("item-animate");
                setTimeout(function () {

                    $("body .ftco-animate.item-animate").each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            var effect = el.data("animate-effect");
                            if (effect === "fadeIn") {
                                el.addClass("fadeIn ftco-animated");
                            } else if (effect === "fadeInLeft") {
                                el.addClass("fadeInLeft ftco-animated");
                            } else if (effect === "faadeInRight") {
                                el.addClass("fadeInRight ftco-animated");
                            } else {
                                el.addClass("fadeInUp ftco-animated");
                            }
                            el.removeClass("item-animate");
                        }, k * 50, "easeInOutExpo");
                    });

                }, 100);

            }

        }, {offset: "95%"});
    }
};


const homeStellar = function () {
    if (typeof $(window).stellar === "function") {
        $(window).stellar({
            responsive:          true,
            parallaxBackgrounds: true,
            parallaxElements:    true,
            horizontalScrolling: false,
            hideDistantElements: false,
            scrollProperty:      "scroll"
        });
    }
};


export default {
    fullHeight: fullHeight,
    homeStellar:     homeStellar,
    contentWaypoint: contentWaypoint,
    homeContentOwl:  homeContentOwl
};