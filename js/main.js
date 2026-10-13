(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').css('top', '0px');
        } else {
            $('.sticky-top').css('top', '-100px');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: false,
        loop: true,
        nav : false
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);


// ── Mega Menu Category Switcher ──────────────────────────────────────────────
(function ($) {
    "use strict";

    function switchMegaCategory(cat) {
        // Sidebar links
        $('.mega-cat-link').removeClass('active');
        $('.mega-cat-link[data-cat="' + cat + '"]').addClass('active');
        // Description panels
        $('.mega-desc-panel').removeClass('active');
        $('#mega-' + cat).addClass('active');
        // Course list panels
        $('.mega-courses-panel').removeClass('active');
        $('#mega-courses-' + cat).addClass('active');
    }

    // Switch on hover (desktop)
    $(document).on('mouseenter', '.mega-cat-link', function () {
        switchMegaCategory($(this).data('cat'));
    });

    // Keep mega menu open while hovering inside it
    $(document).on('mouseenter', '.mega-menu', function () {
        $(this).closest('.dropdown').addClass('show');
        $(this).closest('.dropdown').find('.dropdown-toggle').attr('aria-expanded', 'true');
        $(this).addClass('show');
    }).on('mouseleave', '.mega-menu', function () {
        $(this).closest('.dropdown').removeClass('show');
        $(this).closest('.dropdown').find('.dropdown-toggle').attr('aria-expanded', 'false');
        $(this).removeClass('show');
    });

})(jQuery);
