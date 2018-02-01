// Add scrolling
$('.navbar a').addClass('page-scroll');
$('nav').addClass('navbar-transparent');

// Add Background to Nav when scrolling
$(document).scroll(function() {
    if ($(this).scrollTop() > 260) {
        $('nav').addClass('navbar-inverse').removeClass('navbar-transparent');
    }
});

$(document).scroll(function() {
    if ($(this).scrollTop() < 260) {
        $('nav').addClass('navbar-transparent').removeClass('navbar-inverse');
    }
});
