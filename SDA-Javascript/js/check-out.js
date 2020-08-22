
$(document).ready(function(){
    let food = "";
   
     let data = window.location.href.split("=");
     data = data[1].split(",");  
     let total = getTotal(data,food);
     $(".your-order-details").append(total[1]);
     $('input').val(total[0]);
   
});
const getTotal = function(data,food){
    let total = 0;
    data.forEach(element => {   
        if(element === 'Clams')
        {
            food += '<li>'+element+'</li>';
            total += 10;
        }
        else if(element === 'Bruschetta')
        {
            food += '<li>'+element+'</li>';
            total +=5;
        }
        else if(element === 'Dumpling')
        {
            food += '<li>'+element+'</li>';
            total +=7;
        }
        else if(element === 'Wings')
        {
            food += '<li>'+element+'</li>';
            total +=2;
        }
        else if(element === 'Clams')
        {
            food += '<li>'+element+'</li>';
            total +=14;
        }
        else if(element === 'Profumo_di_Mare')
        {
            food += "<li>Profumo di Mare</li>";
            total +=3;
        }
        else if(element === 'Calamari')
        {
            food += '<li>'+element+'</li>';
            total += 19;
        }
        else if(element === 'Pomodoro')
        {
            food += '<li>'+element+'</li>';
            total +=1;
        }
        else if(element === 'Bolognese')
        {
            food += '<li>'+element+'</li>';
            total +=8;
        }
        else if(element === "Porcini")
        {
            food += '<li>'+element+'</li>';
            total +=17; 
        }   
        else if(element === "Capriciosa")
        {
            food += '<li>'+element+'</li>';
            total +=10;
        } 
        else if(element === 'Onion')
        {
            food += '<li>'+element+'</li>';
            total +=2;
        } 
        else if(element === "Peperoni")
        {
            food += '<li>'+element+'</li>';
            total +=20;
        }                   
        else if(element === "Margherita")
        {
            food += '<li>'+element+'</li>';
            total +=20;
        }
        
    });
    let array = new Array();
        array.push(total);
        array.push(food);   
        return array;
}