$(document).ready(function(){
   
    $(".login-link").on('click', function(){
      $('.log-in-container').css('display',"inline-block");
      $('body').css({'background-color':'rgba(0,0,0,0.4)'});
   
    });

    $('.log-in-button').on('click',function(){
        alert('sent');

    });
    $('.order').on('click',function(){
        let menu = $('fieldset').find('.menu');
        let response = "";        
        for(let i = 0 ; i < menu.length;i++)
        {
            if(menu[i].checked)
               response += menu[i].value +",";
        }
        window.location.href = "./../view/checkout.html?food="+ response;
    });

});