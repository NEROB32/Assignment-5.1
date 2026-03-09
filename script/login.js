console.log('Login functionality commign');

document.getElementById("login-btn").addEventListener("click", function(e){
    e.preventDefault();
    const usernameInput = document.getElementById("input-username");
    const userName = usernameInput.value;
    console.log(userName);
 
    const inputPassword= document.getElementById("input-password");
    const pass =inputPassword.value;
    console.log(pass);
 
    if(userName == "admin" && pass == "admin123"){
        alert("login Success");
        window.location.assign("main.html");
    }else{
        alert("login Failes");
        return;
    }


});