$('.menu').next().hide();

$('.menu').click(function(){
    $(this).next().slideToggle();
    $('.menu').not(this).next().stop(true,true).slideUp();
});