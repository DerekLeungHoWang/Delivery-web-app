// INDEX PAGE
// image fade in
function showImages(el) {
    var windowHeight = jQuery( window ).height();
    $(el).each(function(){
        var thisPos = $(this).offset().top;

        var topOfWindow = $(window).scrollTop();
        if (topOfWindow + windowHeight - 200 > thisPos ) {
            $(this).addClass("fadeIn");
        }
    });
}
$(document).ready(function(){
        showImages('#cascade1');
        showImages('#cascade2');
        showImages('#cascade3');
});

$(window).scroll(function() {
        showImages('#cascade1');
        showImages('#cascade2');
        showImages('#cascade3');
});


//index button click to move to restaurants div
$("#exploreButton").click(function() {
    $('html,body').animate({
        scrollTop: $(".category").offset().top},
        'slow');
});


//sign in sign up page switch

document.querySelector('.img__btn').addEventListener('click', function() {
    document.querySelector('.cont').classList.toggle('s--signup');
  });
  


