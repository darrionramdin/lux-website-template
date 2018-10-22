$(function() {
    // Sets Background Images
    const imageElements = $('[data-image]');
    for(let element of imageElements) {
        $(element).css("background-image",`url(${$(element).data('image')})`);
    }

    portfolioFilter();
    navbarScroll();
    smoothScroll();   
});

// Filterizr Init
function portfolioFilter() {
    if($('.filtr-container').length) {
        $('.filtr-container').filterizr();
        $('.portfolio-filters li a').on('click', function(e) {
            e.preventDefault();
            $('.portfolio-filters li a').removeClass('active');
            $(this).addClass('active');
        })
    } else {
        return;
    }
}

// Navbar Scroll 
function navbarScroll() {
    $(document).scroll(function() {
        $('.navbar').toggleClass('navbar-scrolled', $(this).scrollTop() > $('.navbar').height());
    });
}

// Smooth Scroll
function smoothScroll() {
    $('.navbar .nav-link, .scrollTo').on("click", function (e) {
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 50
        }, 1000);
        e.preventDefault();
    });
}