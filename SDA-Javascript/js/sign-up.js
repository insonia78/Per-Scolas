$(document).ready(function(){

    $('.submit').on('click', function(){
        let patternForNames = /^[A-Za-z]+$/;
        let nameValidationRegex = new RegExp(patternForNames);
        
        let firstName = $('.first-name').val().trim();
        if(!nameValidationRegex.test(firstName) || firstName === "")
        {
            alert("Invalid first Name");
            return;
        }
        let middleName = $('.middle-name').val().trim();
        if(!nameValidationRegex.test(middleName) && middleName !== "")
        {
            alert("Invalid middle Name");
            return;
        }
        let lastName = $('.last-name').val().trim();
        if(!nameValidationRegex.test(lastName) || lastName === "")
        {
            alert("Invalid last Name");
            return;
        }    
        var patternForEmail  = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;                
        nameValidationRegex = new RegExp(patternForEmail);
        let email = $('.email').val().trim();

        if(!nameValidationRegex.test(email) || email === "")
        {
            alert("Invalid email");
            return;
        }    
        let password = $('.password').val().trim();
        let reenterPassword = $('.re-enter-password').val().trim();
        if(password !== reenterPassword)
        {
            alert("Password don't match");
            return;
        }
        let param={
            first_name:firstName,
            middle_name:middleName,
            last_name:lastName,
            email:email,
            password:password
        };
        $.ajax
        ({
            url: 'https://sbt-javascript-html.firebaseio.com/.json',
            type: "POST",
            data: JSON.stringify(param),
            success: function () {
            window.location.href = "./../view/index.html";
            },
            error: function(error) {
            alert("error: "+error);
                }
        });
        
    });
});