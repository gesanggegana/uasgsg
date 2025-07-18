(function ($) {
    "use strict";



    /*
    ============================================
    Wow Active  	         
    ============================================
    */
    function wowAnimation() {
        var wow = new WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: false,
            live: true,
        });
        wow.init();
    }



    /*
    ===========================================
    Preloader			     
    ==========================================
    */
    function preloader() {
        $("#preloader").delay(0).fadeOut();
    }

    /*
    ===========================================
    dynamicCurrentMenuClass			     
    ==========================================
    */
    function dynamicCurrentMenuClass(selector) {
        let FileName = window.location.href.split('/').reverse()[0];

        selector.find('li').each(function () {
            let anchor = $(this).find('a');
            if ($(anchor).attr('href') == FileName) {
                $(this).addClass('active');
            }
        });
        // if any li has .current elmnt add class
        selector.children('li').each(function () {
            if ($(this).find('.active').length) {
                $(this).addClass('active');
            }
        });
        // if no file name return 
        if ('' == FileName) {
            selector.find('li').eq(0).addClass('active');
        }
    }

    // dynamic current class        
    let mainNavUL = $('.menu-nav').find('.navigation');
    dynamicCurrentMenuClass(mainNavUL);


    /*
    ===========================================
    Swiper Slider			     
    ==========================================
    */
    function thmSwiperInit() {
        const swiperElm = document.querySelectorAll(".thm-swiper__slider");
        swiperElm.forEach(function (swiperelm) {
            const swiperOptions = JSON.parse(swiperelm.dataset.swiperOptions);
            let thmSwiperSlider = new Swiper(swiperelm, swiperOptions);
        });
    }


    /*
    ===========================================
    Accordion Active		     
    ==========================================
    */
    function accordionActive() {
        if ($('.accordion-box-one').length) {
            $(".accordion-box-one").on('click', '.accord-btn', function () {

                if ($(this).hasClass('active') !== true) {
                    $('.accordion .accord-btn').removeClass('active');

                }

                if ($(this).next('.accord-content').is(':visible')) {
                    $(this).removeClass('active');
                    $(this).next('.accord-content').slideUp(500);
                } else {
                    $(this).addClass('active');
                    $('.accordion .accord-content').slideUp(500);
                    $(this).next('.accord-content').slideDown(500);
                }
            });
        }
    }












    /*============================================
	Mobile Menu	// SubMenu Dropdown Toggle
    =============================================*/
    if ($(".menu-area li.menu-item-has-children ul").length) {
        $(".menu-area .navigation li.menu-item-has-children").append(
            '<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>'
        );
    }



    /*============================================
	Mobile Nav Hide Show
    =============================================*/
    if ($(".mobile-menu").length) {
        var mobileMenuContent = $(".menu-area .main-menu").html();
        $(".mobile-menu .menu-box .menu-outer").append(mobileMenuContent);

        //Dropdown Button
        $(".mobile-menu li.menu-item-has-children .dropdown-btn").on("click", function () {
            $(this).toggleClass("open");
            $(this).prev("ul").slideToggle(300);
        });
        //Menu Toggle Btn
        $(".mobile-nav-toggler").on("click", function () {
            $("body").addClass("mobile-menu-visible");
        });

        //Menu Toggle Btn
        $(".menu-backdrop, .mobile-menu .close-btn").on("click", function () {
            $("body").removeClass("mobile-menu-visible");
        });
    }



    /*============================================
	Menu sticky & Scroll to top
    =============================================*/
    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $("#sticky-header").removeClass("sticky-menu");
            $(".scroll-to-target").removeClass("open");
        } else {
            $("#sticky-header").addClass("sticky-menu");
            $(".scroll-to-target").addClass("open");
        }
    });



    /*=============================================
	Scroll Up  	         
    =============================================*/
    if ($(".scroll-to-target").length) {
        $(".scroll-to-target").on("click", function () {
            var target = $(this).attr("data-target");
            // animate
            $("html, body").animate({
                    scrollTop: $(target).offset().top,
                },
                1000
            );
        });
    }



    /*=============================================
	Odometer Active  	     
    =============================================*/
    $(".odometer").appear(function (e) {
        var odo = $(".odometer");
        odo.each(function () {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });




    /*============================================
	Magnific Popup		    
    =============================================*/
    $(".popup-image").magnificPopup({
        type: "image",
        gallery: {
            enabled: true,
        },
    });




    /*============================================
	Magnific Popup video	    
    =============================================*/
    $(".popup-video").magnificPopup({
        type: "iframe",
    });



    /*=============================================
	Search Toggler		    
    =============================================*/
    if ($(".search-toggler").length) {
        $(".search-toggler").on("click", function (e) {
            e.preventDefault();
            $(".search-popup").toggleClass("active");
            $(".mobile-nav__wrapper").removeClass("expanded");
            $("body").toggleClass("locked");
        });
    }



    /*=============================================
    Offcanvas Menu 
    =============================================*/
    $(".menu-tigger").on("click", function () {
        $(".extra-info,.offcanvas-overly").addClass("active");
        return false;
    });
    $(".menu-close,.offcanvas-overly").on("click", function () {
        $(".extra-info,.offcanvas-overly").removeClass("active");
    });



    /*=============================================
    Marquee mode
    =============================================*/
    if ($(".marquee_mode").length) {
        $('.marquee_mode').marquee({
            speed: 50,
            gap: 0,
            delayBeforeStart: 0,
            direction: 'left',
            duplicated: true,
            pauseOnHover: true,
            startVisible: true,
        });
    }


    /*=============================================
    Marquee mode Two
    =============================================*/
    if ($(".marquee_mode-two").length) {
        $('.marquee_mode-two').marquee({
            speed: 50,
            gap: 0,
            delayBeforeStart: 0,
            direction: 'right',
            duplicated: true,
            pauseOnHover: true,
            startVisible: true,
        });
    }



    /*=============================================
    Odometer 
    =============================================*/
    if ($(".odometer").length) {
        var odo = $(".odometer");
        odo.each(function () {
            $(this).appear(function () {
                var countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
            });
        });
    }





    /*=============================================
      Img Magnific Popup 
      =============================================*/
    if ($(".img-popup").length) {
        var groups = {};
        $(".img-popup").each(function () {
            var id = parseInt($(this).attr("data-group"), 10);

            if (!groups[id]) {
                groups[id] = [];
            }

            groups[id].push(this);
        });

        $.each(groups, function () {
            $(this).magnificPopup({
                type: "image",
                closeOnContentClick: true,
                closeBtnInside: false,
                gallery: {
                    enabled: true
                }
            });
        });
    }



    // circle progress
    if ($(".dial").length) {
        $(".dial").appear(
            function () {
                var elm = $(this);
                var color = elm.attr("data-fgColor");
                var perc = elm.attr("value");
                elm.knob({
                    value: 0,
                    min: 0,
                    max: 100,
                    skin: "tron",
                    readOnly: true,
                    thickness: 0.14,
                    dynamicDraw: true,
                    displayInput: false,
                });
                $({
                    value: 0,
                }).animate({
                    value: perc,
                }, {
                    duration: 2000,
                    easing: "swing",
                    progress: function () {
                        elm.val(Math.ceil(this.value)).trigger("change");
                    },
                });
                $(this).append(function () {});
            }, {
                accY: 20,
            }
        );
    }
    //Fact Counter + Text Count
    if ($(".count-box").length) {
        $(".count-box").appear(
            function () {
                var $t = $(this),
                    n = $t.find(".count-text").attr("data-stop"),
                    r = parseInt($t.find(".count-text").attr("data-speed"), 10);

                if (!$t.hasClass("counted")) {
                    $t.addClass("counted");
                    $({
                        countNum: $t.find(".count-text").text(),
                    }).animate({
                        countNum: n,
                    }, {
                        duration: r,
                        easing: "linear",
                        step: function () {
                            $t.find(".count-text").text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $t.find(".count-text").text(this.countNum);
                        },
                    });
                }
            }, {
                accY: 0,
            }
        );
    }
    //====== Magnific Popup
    if ($(".video-popup").length) {
        $(".video-popup").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: true,

            fixedContentPos: false
        });
    }
    $(window).on("load", function () {
        preloader();
        wowAnimation();
        thmSwiperInit();
        accordionActive();

        // Nice Select
        $("select").niceSelect();

        //Jquery Curved Circle
        if ($(".curved-circle").length) {
            $(".curved-circle").circleType({
                position: "absolute",
                dir: 1,
                radius: 85,
                forceHeight: true,
                forceWidth: true,
            });
        }
        // Inisialisasi Magnific Popup untuk galeri foto
$(document).ready(function() {
    $('.gallery-wrapper').magnificPopup({
        delegate: 'a', // Elemen anak yang akan membuka popup (yaitu tag <a>)
        type: 'image', // Tipe konten adalah gambar
        gallery: {
            enabled: true // Mengaktifkan mode galeri (navigasi antar gambar)
        },
        mainClass: 'mfp-with-zoom', // Kelas CSS yang ditambahkan ke body saat popup terbuka
        zoom: {
            enabled: true, // Mengaktifkan efek zoom

            duration: 300, // Durasi efek, dalam milidetik
            easing: 'ease-in-out', // Fungsi easing transisi CSS

            // Fungsi "opener" harus mengembalikan elemen dari mana popup akan diperbesar
            // dan ke mana ia akan diperkecil.
            // Secara default adalah parent dari item galeri saat ini.
            opener: function(openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });
});



















    });




})(jQuery);
