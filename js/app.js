
btn.addEventListener('click',function(){
                
    var name = document.getElementById("name").value;
    var message = document.getElementById("message");
    var msg = document.getElementById("msg")
    var email = document.getElementById("email").value;
    var message = document.getElementById("message");
    let password1 = document.getElementById('password')
    let password2 = document.getElementById('confirmPassword')

    if (name === "") {
        message.textContent = "Please provide your name.";
    } else {
        message.textContent = "";
    }

    if (email === "") {
        msg.textContent = "Please provide your email.";
    } else {
        msg.textContent = "";
    }

    if (name !== "" &&  email !== "" &&  password1 !== "" &&  password2 !== "") {
        alert("Form submitted successfully!"); 
    }else { 
        alert("Please provide all required information.");

    }
    
    if (password1 !== password2) {
        window.alert("your password is not meched!");
    }else {
        window.alert("your password is meched");
    }


    // if (password1 == "" &&  password2 == "") {
    //     alert("password enter unsucsessfull."); 
    // }else { 
    //     alert("password enter sucsessfull");
    // }




})






























































// function validateName() {
//     var name = document.getElementById("name").value;
//     var message = document.getElementById("message");
//     var msg = document.getElementById("msg")

//     if (name === "") {
//         message.textContent = "Please provide your name.";
//     } else {
//         message.textContent = "";
//     }
// }

// function validateEmail() {
//     var email = document.getElementById("email").value;
//     var message = document.getElementById("message");

//     if (email === "") {
//         msg.textContent = "Please provide your email.";
//     } else {
//         msg.textContent = "";
//     }
// }















    // work

        // btn.addEventListener('click',function(){
                
        //     var name = document.getElementById("name").value;
        //     var message = document.getElementById("message");
        //     var msg = document.getElementById("msg")

        //     if (name === "") {
        //         message.textContent = "Please provide your name.";
        //     } else {
        //         message.textContent = "";
        //     }
        // })

        // btn.addEventListener('click',function(){
        //     var email = document.getElementById("email").value;
        //     var message = document.getElementById("message");

        //     if (email === "") {
        //         msg.textContent = "Please provide your email.";
        //     } else {
        //         msg.textContent = "";
        //     }
        // })


        // btn.addEventListener('click',function(){
        //     if (name === "" || email === "" || password1=="" || password2=="") {
        //         alert("Please provide all required information.");
        //     }else { 
        //         alert("Form submitted successfully!"); 

        //     }
        // })

        // btn.addEventListener('click',function(){

        //     let password1 = document.getElementById('password')
        //     let password2 = document.getElementById('confirmPassword')


        //     if (password1 === password2) {
        //         window.alert("your password is meched");
        //     }else {
        //         window.alert("your password is not meched!"); 
        //     }
        // })

    // work
        


















        













        



























