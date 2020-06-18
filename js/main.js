$(document).ready(function () {

    setTimeout(function () {
        $('.loader_bg').fadeToggle();
    }, 3000);
    // $(window).load(function(){
    //      $('.loader_bg').fadeOut();
    // });

    $(window).on('scroll',function(){
    	if($(window).scrollTop()){
    		$('.header').addClass('sticky');
    	}else{
    		$('.header').removeClass('sticky');
    	}
    });


 $('#nav').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing'
    });

 $(".menu").click(function(){
        $("ul").slideToggle(2000);
        $("#nav").addClass("show");
    });


 $(window).on('scroll',function(){
        if($(window).scrollTop()>350){
            $('.bar').each(function(){
                $(this).find('.skill').animate({
                    width:$(this).attr('data-percent')
                },3000);
            });
        }
    });

 $('a.smooth-menu,a.custom-btn,a.banner-btn').on("click", function (e) {
        e.preventDefault();
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top - 60
        }, 1000);
    });

 
 //carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    pagination: true,
    paginationSpeed: 800,
    margin:20,
    nav:true,
    slideSpeed:800,
    smartSpeed: 500,
    autoplay:true,
    singleItem: true,
    responsive:{
        0:{
            items:1
        },
        680:{
            items:2
        },
        1000:{
            items:2
        }
    }
});


//counter 
$('.counter').counterUp({
    delay: 30,
    time: 3000
});

new WOW().init();


});





