
;(function($) {

   'use strict'

    var tapMobile = function() {
        $('.mainnav li:has(ul)').doubleTapToGo();
    };

    var gnAnimation = function() {
        $('.gn-animation').each( function() {
            var gnElement = $(this),
            gnAnimationClass = gnElement.data('animation'),
            gnAnimationDelay = gnElement.data('animation-delay'),
            gnAnimationOffset = gnElement.data('animation-offset');

            gnElement.css({
                '-webkit-animation-delay':  gnAnimationDelay,
                '-moz-animation-delay':     gnAnimationDelay,
                'animation-delay':          gnAnimationDelay
            });

            gnElement.waypoint(function() {
                gnElement.addClass('animated').addClass(gnAnimationClass);
            },{ triggerOnce: true, offset: gnAnimationOffset });
        });
    };

    var goTop = function() {
        $(window).scroll(function() {
            if ( $(this).scrollTop() > 800 ) {
                $('.go-top').addClass('show');
            } else {
                $('.go-top').removeClass('show');
            }
        }); 

        $('.go-top').click(function() {
            $("html, body").animate({ scrollTop: 0 }, 1000 , 'easeInOutExpo');
            return false;
        });
    };

    

    var tabs = function() {
        $('.tabs').each(function() {
            $(this).children('.content-tab').children().hide();
            $(this).children('.content-tab').children().first().show();
            $(this).find('.menu-tab').children('li').click( function(e){  
                var liActive = $(this).index();
                var contentActive = $(this).siblings().removeClass('active').parents('.tabs').children('.content-tab').children().eq(liActive);
                contentActive.addClass('active').fadeIn('slow');
                contentActive.siblings().removeClass('active');
                $(this).addClass('active').parents('.tabs').children('.content-tab').children().eq(liActive).siblings().hide();
                e.preventDefault();
            });
        });
    };

    var toggles = function() {
        var args = {duration: 400};

        $('.toggle .toggle-title.active').siblings('.toggle-content').show();
        $('.toggle.toggle-enable .toggle-title').click(function() {
            $(this).closest('.toggle').find('.toggle-content').slideToggle(args);
            $(this).toggleClass('active');
        }); // toggle 

        $('.accordion .toggle-title').click(function () {
            if( !$(this).is('.active') ) {
                $(this).closest('.accordion').find('.toggle-title.active').toggleClass('active').next().slideToggle(args);
                $(this).toggleClass('active');
                $(this).next().slideToggle(args);
            } else {
                $(this).toggleClass('active');
                $(this).next().slideToggle(args);
            }     
        }); // accordion
    };

    

    var dropList = function() {
        $('.drop-list').each(function() {
            var menuDrop = $(this).children('.nav-dropdown'),
                activeDrop = $(this).find('.drop-wrap');

            menuDrop.click(function () {
                var drop = $(this).children('.dropdown');

                if ( drop.is(".show") ) {
                    drop.removeClass('show');
                    activeDrop.removeClass('active');
                } else {
                    drop.addClass('show');
                    activeDrop.addClass('active');
                }
                return false;
            });

            $(document).click(function() {
                menuDrop.children('.dropdown').removeClass('show');
                activeDrop.removeClass('active');
            });
        });
    };



    var searchHandle = function() {
        $('.hide-navigation .search-icon').click(function(){
            var searchForm = $(this).parent().find('.search-form'),
                searchField = $(this).parent().find('.search-field');

            searchForm.stop(true, true).fadeToggle(function () {
                searchField.focus();
            });

            $('.search-field').click(function(e) {
                e.stopPropagation();
            })
        });

        $('.search-wrap .search-icon').click(function(){
            var searchForm = $(this).parent().find('.search-form'),
                searchField = $(this).parent().find('.search-field');

            searchForm.fadeIn(function () {
                searchForm.find('.search-field').focus();
            });
        });

        $('.search-wrap .search-close').click(function(){
            $(this).parent().fadeOut();
        });

        $(window).resize(function() {
            if ( $('.search-wrap .search-form').is(':hidden') ) {
                $('.search-wrap .search-form').removeAttr('style');
            }
        });

        $(document).on('click', '.search-text-menu', function(){
            $(this).animate({
                width:'282px',
                },200,function(){
                    $(this).css( 'paddingLeft','55px');
                });
        });

        $(document).click(function(e) {
            var clickID = e.target.id;

            if ( clickID != 'search-text-menu' ) {
                $(".search-text-menu").animate({
                    width:'1px',
                    },200,function(){
                        $(this).css( 'paddingLeft','41px');
                    });
            }
        });
    };

 
    var megaMenu = function(winWidth) {
        if ( $('.gn-mega-menu').size() != 0 ) {
            var item = $('.gn-mega-menu'),
                megaMenuLeft = item.offset().left;

            item.children('.sub-menu').css({
                'width' : $(window).width(),
                'margin-left' : - megaMenuLeft
            });
        }
    };

    var detectViewport = function() {
        $('[data-waypoint-active="yes"]').waypoint(function() {
            $(this).trigger('on-appear');
        }, { offset: '90%' });

        $(window).on('load', function() {
            setTimeout(function() {
                $.waypoints('refresh');
            }, 100);
        });
    };

    var hideMenu = function() {
        $('#hide-menu').click(function(e){
            if ( $("#navigation-panel").css("left") === "-215px" ) {
                $("#navigation-panel").animate({ left: "0" }, 300, 'easeInOutExpo')
            } else {
                $("#navigation-panel").animate({ left: "-215px" }, 300, 'easeInOutExpo')
            }
            e.preventDefault();
        });

        $('.close-nav').click(function() {
            $("#navigation-panel").animate({ left: "-215px" }, 200, 'easeInOutExpo');
        });
    };

    var scrollBar = function() {
        if ( $().mCustomScrollbar ) {
           $(".tabs.style2 .content-tab.scroll .content").mCustomScrollbar();
        }
    };

    var popupForm = function() {
        if ( $().leanModal ) {
            $('.login-popup > a, .signup-popup > a').leanModal({
                top: 110,
                overlay: 0.5,
                closeButton: ".close-modal"
            });
            $('#login-modal').submit(function(e) {
                return false;
            });
        }
    };

 
    var responsiveMenu = {

        menuType: 'desktop',

        initial: function(winWidth) {
            responsiveMenu.menuWidthDetect(winWidth);
            responsiveMenu.menuBtnClick();
            responsiveMenu.parentMenuClick();
        },

        menuWidthDetect: function(winWidth) {
            var currMenuType = 'desktop';

            if ( matchMedia('only screen and (max-width: 767px)').matches ) {
                currMenuType = 'mobile';
            } // change menu type

            if ( currMenuType !== responsiveMenu.menuType ) {
                responsiveMenu.menuType = currMenuType;

                if ( currMenuType === 'mobile' ) {
                    var $mobileMenu = $('#mainnav').attr('id', 'mainnav-mobi').hide();
                    var hasChildMenu = $('#mainnav-mobi').find('li.has-children'),
                        hasChildMenuMega = $('#mainnav-mobi').find('li.gn-mega-menu');

                    $('#header').find('.header-wrap').after($mobileMenu);
                    $('.header-wrap').hide();
                    hasChildMenu.children('ul').hide();
                    hasChildMenuMega.children('.sub-menu').hide();
                    hasChildMenu.children('a').after('<span class="btn-submenu"></span>');
                    hasChildMenuMega.children('a').after('<span class="btn-submenu"></span>');
                    $('.btn-menu').removeClass('active');
                 } else {
                    var $desktopMenu = $('#mainnav-mobi').attr('id', 'mainnav').removeAttr('style');

                    $desktopMenu.find('.sub-menu').removeAttr('style');
                    $('.header-wrap').removeAttr('style');
                    $('#header').find('.col-md-9').append($desktopMenu);
                    $('.btn-submenu').remove()
                    $('.added').remove();
                }
            } // clone and insert menu
        },

        menuBtnClick: function() {
            $('.btn-menu').on('click', function() {
                $('#mainnav-mobi').slideToggle(300);
                $(this).toggleClass('active');
            });
        }, // click on moblie button

        parentMenuClick: function() {
            $(document).on('click', '#mainnav-mobi li .btn-submenu', function(e) {
                if ( $(this).has('.sub-menu') ) {
                    e.stopImmediatePropagation()
                    $(this).next('.sub-menu').slideToggle(300);
                    $(this).toggleClass('active');
                    $(this).parent('.has-children, .gn-mega-menu').toggleClass('active');
                }
            });
        } // click on sub-menu button
    };

  
    // Dom Ready
    $(function() {
        tapMobile();
        detectViewport();

        hideMenu();
        scrollBar();
        dropList();
        tabs();

        toggles();

        popupForm();
        gnAnimation();
        goTop()
;
        // Initialize responsive and mega menu
        responsiveMenu.initial($(window).width());
        megaMenu($(window).width());
        $(window).resize(function() {
            responsiveMenu.menuWidthDetect($(this).width());
            megaMenu($(window).width());
        });
        lastestTweets();
   });

})(jQuery);