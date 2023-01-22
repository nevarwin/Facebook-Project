var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
    var username = document.getElementById("Username").value;
    var password = document.getElementById("Password").value;
if ( username == "admin" && password == "admin123"){
    alert ("Login successfully");
    //window.location = "success.html"; // Redirecting to other page.
    return false;
}
else if(username == "raven" && password =="raven123"){
    alert ("Login successfully")
    //window.location = "success.html"; // Redirecting to other page.
    return false;
}
else if(username == "armil" && password =="armil123"){
    alert ("Login successfully")
    //window.location = "success.html"; // Redirecting to other page.
    return false;
}
else if(username == "ydrian" && password =="ydrian123"){
    alert ("Login successfully")
    //window.location = "success.html"; // Redirecting to other page.
    return false;
}
else{
attempt --;// Decrementing by one.
alert("Failed! Please Try Again!");
// Disabling fields after 3 attempts.
    if( attempt == 0){
    document.getElementById("username").disabled = true;
    document.getElementById("password").disabled = true;
    document.getElementById("submit").disabled = true;
    return false;
    }
}
}

