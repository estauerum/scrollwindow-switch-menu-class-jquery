$(window).scroll(function(){
    if ($(window).scrollTop() > 0) { 
        $('.menu__link_active').removeClass('menu__link_active');
        $('#main').addClass('menu__link_active');
    }
    if ($(window).scrollTop() > 500) { 
        $('.menu__link_active').removeClass('menu__link_active');
        $('#about-link').addClass('menu__link_active');
    }
    if ($(window).scrollTop() > 1000) { 
        $('.menu__link_active').removeClass('menu__link_active');
        $('#skills-link').addClass('menu__link_active');
    }
    if ($(window).scrollTop() > 1700) { 
        $('.menu__link_active').removeClass('menu__link_active');
        $('#portfolio-link').addClass('menu__link_active');
    }
    if ($(window).scrollTop() > 3800) {
        $('.menu__link_active').removeClass('menu__link_active');
        $('#contacts-link').addClass('menu__link_active');
    }
});
