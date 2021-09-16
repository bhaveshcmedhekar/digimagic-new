var FIproject = {};
var winWidth = $(window).width();
var headerHeight = $(".comp-header").height();
console.log(headerHeight);

function homeBanner() {
    try {
        $(".home-banner").slick({
            dots: true,
            fade: true,
            arrows: false,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover: false
        });
    } catch (error) {

    }
}

function ourPeopleBanner() {
    try {
        $(".our-people-slider").slick({
            dots: true,
        });
    } catch (error) {

    }
}

function newsSlider() {
    try {
        $(".news-slider").slick({
            dots: true,
            arrows: true,
            infinite: true,
        });
    } catch (error) {

    }
}

function aboutBanner() {
    try {
        $(".about-banner").slick({
            dots: false,
            fade: true,
            infinite: false,
        });
    } catch (error) {
        console.log(error)
    }
}

function menuOpen() {
    try {
        $(".menu-btn").click(function() {
            $(this).next().slideToggle();
        });
        $(".nav-item.parent > .nav-link").click(function() {
            var parentElm = $(this).closest(".parent");
            //$(".nav-item.parent .submenu").slideUp();
            var nextSubmenu = $(this).next(".submenu");
            parentElm.siblings().find(".submenu").hide();
            $(this).next(".submenu").show(); //.slideToggle();
            // if (submenuStatus == "none") {
            //     nextSubmenu.slideDown();
            // }
            // else {
            //     nextSubmenu.slideUp();
            // }

        })
    } catch (error) {
        console.log(error)
    }
}

function openSearchField() {
    try {
        $(".bs-search-wrap .show-search-fields").click(function() {
            var parentElm = $(this).closest(".bs-search-wrap");
            parentElm.toggleClass("active");
        })

        $(document).on("click", function(e) {
            if ($(".bs-search-wrap").hasClass("active")) {
                if (!$(e.target).closest(".bs-search-wrap").length) {
                    $(".bs-search-wrap").removeClass("active");
                }
            }
        });
    } catch (error) {
        console.log(error)
    }
}

function openPopup() {
    try {
        $(".open-popup").click(function() {
            var popupWrap = $(this).data("show");
            $(".bs-popup[data-popup='" + popupWrap + "']").fadeIn();
        })

        $(".bs-popup .close").click(function() {
            $(".bs-popup").fadeOut();
        })

        $(document).mouseup(function(e) {
            if ($(e.target).closest(".popup-main").length === 0) {
                $(".bs-popup").fadeOut();
            }
        });
    } catch (error) {
        console.log(error)
    }
}

function registerHereValidator() {
    $('#register-here').validate({ // initialize the plugin
        rules: {
            fname: {
                required: true,
            },
            lname: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                digit: true
            },
            resume: {
                required: true,
            },
            expertise: {
                required: true,
            },
            preferredLoc: {
                required: true,
            },
        },
        messages: {
            fname: "Please enter your firstname",
            lname: "Please enter your lastname",
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            email: "Please enter a valid email address",
            phone: {
                required: "This field is required",
                email: "Please enter a valid phone number",
            },
            // city: {
            //     required: "This field is required"
            // },
            // resume: {
            //     required: "This field is required"
            // }
        },
        submitHandler: function(form) { // for demo
            alert('valid form submitted'); // for demo
            return false; // for demo
        }
    });
}

$(function() {
    /* document ready*/
    if ($(".home-banner").length) {
        homeBanner();
    }
    if ($(".our-people-slider").length) {
        ourPeopleBanner();
    }

    if ($(".about-banner").length) {
        aboutBanner()
    }

    if ($(".news-slider").length) {
        newsSlider();
    }

    if (winWidth < 992) {
        menuOpen();
    }
    if ($(".bs-search-wrap").length) {
        openSearchField();
    }

    if ($('#register-here').length) {
        registerHereValidator();
    }
    if ($(".bs-popup").length) {
        openPopup();
    }
});
$(window).scroll(function() {
    var scrollPos = $(window).scrollTop();
    if (scrollPos > headerHeight) {
        $(".comp-header").addClass("fixed-header");
    } else {
        $(".comp-header").removeClass("fixed-header");
    }
})