$(document).ready(function(){ 

    // Click function when click on scroll-up button 

    $('.about__toggle').click(function(event){ 
        event.preventDefault();
        console.log('Click!');

        $('.about-content_item').hide();

        var href = $(this).attr('href'); // #private
        
        console.log(href);

        $(href).fadeIn();

    });
    
// Function for window/display height 

    var windowHeight = $(window).height();
    console.log(windowHeight)


// Check Scrolling (for scroll down button)

    $(window).scroll(function () {
        console.log($(this).scrollTop());
        if ($(this).scrollTop() > windowHeight) {
            $('#scrollToTopEffect').fadeIn();
        }
        else {
            $('#scrollToTopEffect').fadeOut();
        }
    });

  
    // Going up (when click on button - go-up)
    $('#scrollToTopEffect').click(function (event) {
        console.log('You have clicked on a button');
        event.preventDefault();
        $('html').animate({scrollTop: 0}, 800)
    });

    // Click function when click on going-button button

    $('.link-circle').click(function (event) {
        event.preventDefault();
        console.log('Click!');

        var href = $(this).attr('href'); // #private
        console.log(href);

        

    });

    // Going up (when click on button - go-button)
    $('#scrollToButtonEffect').click(function (event) {
        console.log('You have clicked on a button');
        event.preventDefault();
        $('html').animate({ scrollTop: 1320 }, 800)
    });
});