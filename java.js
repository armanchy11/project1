$(function(){
    $(window).on('scroll',function(){
        var sticky = $(window).scrollTop();
        if( sticky > 0){
            $('.menu').addClass('stickymenu')
        }else{
            $('.menu').removeClass('stickymenu')
        }

        // back to top
        if( sticky > 700){
            $('#back_to_top').fadeIn(1000)
        }else{
            $('#back_to_top').fadeOut(1000)
        }
         
    })
    $('#back_to_top').on('click',function(){
        $('html,body').animate({
            scrollTop:0
        })
    })

       // preloader

    $(window).on('load',function(){
        $('#preloader').fadeOut(1000)
     })
})