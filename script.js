// Get the modal
var modal = document.getElementById('popup');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

class UI {
    static showAlert(message, className){
        const div = document.createElement('div');
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.box-form');
        const right = document.querySelector('.right');
        const login = document.querySelector('.login-form');
        const msg = document.querySelector('.msg');
        login.insertBefore(div, msg);
        
        //Vanish in 3 Seconds
        setTimeout(() => {
            document.querySelector('.alert').remove()
        }, 2000);
    }
}
//Get the password
var myInput = document.getElementById("psw");

// When the user starts to type something inside the password field
myInput.onkeyup = function () {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if (myInput.value.match(lowerCaseLetters)) {
        UI.showAlert('A lowerCase letter','valid');
    } else {
        UI.showAlert('A lowerCase letter','invalid');
    }

    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if (myInput.value.match(upperCaseLetters)) {
        UI.showAlert('A upperCase letter','valid');
    } else {
        UI.showAlert('A upperCase letter','invalid');
    }

    // Validate numbers
    var numbers = /[0-9]/g;
    if (myInput.value.match(numbers)) {
        UI.showAlert('A Number','valid');
    } else {
        UI.showAlert('A Number','invalid');
    }
    
    // Validate length
    if (myInput.value.length >= 8) {
        UI.showAlert('Minimum 8 characters','valid');
    } else {
        UI.showAlert('Minimum 8 characters','invalid');
    }
}

function Validate() {
    var password = document.getElementById("psw").value;
    var confirmPassword = document.getElementById("psw-repeat").value;
    if (password != confirmPassword) {
        UI.showAlert('Passwords did not match','invalid')
    }else{
        UI.showAlert('Password created successfully','valid')
    }
}

document.querySelector('.login-form').addEventListener('submit', (e) => {
    //Prevent Actual Submit
    e.preventDefault();
    Validate();
});
