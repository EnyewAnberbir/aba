hamburger = document.querySelector(".bars");
hamburger.onclick = function(){
    navBar = document.querySelector(".navBar")
    navBar.classList.toggle("active")
}

function validateForm(){
    let x = document.forms["RegisterForm"]["fname"].value;
    let x1 = document.forms["RegisterForm"]["lname"].value;
    let x2 = document.forms["RegisterForm"]["gender"].value;
    let x3 = document.forms["RegisterForm"]["phone"].value;
    let x4 = document.forms["RegisterForm"]["email"].value;
    let x5 = document.forms["RegisterForm"]["pass"].value;
    let x6 = document.forms["RegisterForm"]["cpass"].value;
    
    if(x==""){
        alert("First Name must be filled out");
        return false;
    }
    else if(x1==""){
        alert("Last Name must be filled out");
        return false;
    }
    else if(x2==""){
        alert("Your Gender is not Selected");
        return false;
    }
    else if(x3==""){
        alert("Phone number must be filled out");
        return false;
    }
    else if(x4==""){
        alert("Email account must be filled out");
        return false;
    }
    else if(x5==""){
        alert("You must enter your password");
        return false;
    }
    else if(x6==""){
        alert("You must enter your password again");
        return false;
    }
    else if(x5!=x6){
        alert("Your password is not matched");
        return false;
    }
    else{
        alert("Submitted Successfully")
        return false;
    }


}
function validation(){
    let a = document.forms["LoginForm"]["pass"].value;
    if(a==""){
        document.getElementById('demo').style.display="block";
        document.getElementById('demo').style.color="red";
        document.getElementById('demo').innerHTML="Please fill password";
    }

}