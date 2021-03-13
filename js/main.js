$(document).ready(function() {

    $('.accordion-item').click(function() {

       
        if ($(this).hasClass('expand')) {
            $(this).removeClass('expand');
            $(this).find('.accordion-content').slideUp(500);
        } else {
            $(this).addClass('expand');
            $(this).find('.accordion-content').slideDown(500);
        } 
    })


})