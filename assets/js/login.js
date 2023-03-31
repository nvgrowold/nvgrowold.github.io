/*set default value for user name and password*/
var userDefault = "user";
var passWord = "P@ssw0rd123";   

/*get value of login link and login button*/
var loginLink = document.getElementById('user-name');
var loginBtn = document.getElementById('login-button');

/*get login-form to loginForm*/
var loginForm = document.getElementById('login-form');

/*get logout part*/
var welcomeNote = document.getElementById('welcome');
var displayUser = document.getElementById('userName');
var logoutLink  = document.getElementById('logout');
var loggedInTag = document.getElementById('logged-in-tag');

/*self ivoking function checking if localStorage saved username*/
var isLoggedIn = localStorage.getItem('isLoggedIn');
var savedname = localStorage.getItem('username');


if(isLoggedIn){
    displayUser = savedname;
    //console.log('username');
    //console.log(displayUser);
    loginLink.style.display = 'none';
    loginBtn.style.display = 'none';
    welcomeNote.style.display = 'block';
    //displayUser.style.display = 'inline'; not showing
    logoutLink.style.display = 'inline';
    //loggedInTag.style.display = 'inline';
}else{
    loginLink.style.display = 'block';
    //loginBtn.style.display = 'inline';
    welcomeNote.style.display = 'none';
    logoutLink.style.display = 'none';
    loggedInTag.style.display = 'none';
}

function logoutClicked(){
  console.log("logout clicked");
  localStorage.removeItem('isLoggedIn');
  localStorage.removeItem('username');

  loginLink.style.display = 'block';
  //loginBtn.style.display = 'block';
  welcomeNote.style.display = 'none';
  logoutLink.style.display = 'none';
  loggedInTag.style.display = 'none';

}


loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    /**taking out value from HTML, put here assigning to variables, connecting html and js file */
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;

    /*only fulfill two conditions could log in successful to store page*/
    if  (user == userDefault && pass == passWord) {       
        //disappear login link
        loginLink.style.display = 'none';
        loginBtn.style.display = 'none';
        console.log ("Display userDefault passWord");
        console.log (userDefault);
        welcomeNote.style.display = 'block';
        //displayUser.style.display = 'inline'; not showing
        logoutLink.style.display = 'inline';
        loggedInTag.style.display = 'inline';

        //save username to local storage
        localStorage.setItem('isLoggedIn', true);
        localStorage.setItem('username', user);
        
        
        alert("Login succeed, please click ok!");
        window.location = "userFavorite.html";

    }
    /*else will pop an alert and stay in log in page*/
    else{
      
        alert("Wrong user name or password not correct!");
      // window.location="login.html";
    } 

});