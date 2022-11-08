// Get the modal
const modal = document.getElementById('popup');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//I cant use this class! I have a Problem
class UI {
    static showAlert(message, idName) {
        const msgDiv = document.getElementById('idName');
        msgDiv.textContent = message;
        //Vanish in 4 Seconds
        setTimeout(() => {
            document.querySelector('#idName').remove()
        }, 4000);
    }
}
const form = document.getElementById("form");
const spans = form.querySelectorAll("span");
const fnameEspan = spans[1];
const lnameEspan = spans[2];
const emailEspan = spans[3];
const phoneEspan = spans[4];
const pswEspan = spans[5];
const psw2Espan = spans[6];

// After form loads focus will go to User id field.
function firstfocus() {
    const fname = document.signup.fname.focus();
    return true;
}

// This function will validate First Name.
function fname_validation() {
    const firstName = document.signup.fname;
    const letters = /^[A-Za-z]+$/;
    if (firstName.value.match(letters)) {
        fnameEspan.className = "active";
        firstName.setCustomValidity("");
        document.querySelector('#id-fname').remove()
        // Focus goes to next field.
        document.signup.lname.focus();
    }
    else {
        firstName.setCustomValidity("firstName must have alphabet characters only");
        fnameEspan.className = "active";
        firstName.focus();
        const msgDiv = document.getElementById('id-fname');
        msgDiv.textContent = 'firstName must have alphabet characters only';
        msgDiv.className = "error-message";
    }
}
// This function will validate Last Name.
function lname_validation() {
    const lastName = document.signup.lname;
    const letters = /^[A-Za-z]+$/;
    if (lastName.value.match(letters)) {
        lnameEspan.className = "active";
        lastName.setCustomValidity("");
        document.querySelector('#id-lname').remove();
        // Focus goes to next field.
        document.signup.email.focus();
    }
    else {
        lastName.setCustomValidity("LastName must have alphabet characters only");
        lnameEspan.className = "active";
        lastName.focus();
        const msgDiv = document.getElementById('id-lname');
        msgDiv.textContent = 'LastName must have alphabet characters only';
        msgDiv.className = "error-message";
    }
}

// This function will validate Email.
function ValidateEmail() {
    const email = document.signup.email;
    const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value.match(emailFormat)) {
        emailEspan.className = "active";
        email.setCustomValidity("");
        document.querySelector('#id-email').remove();
        document.signup.pnumber.focus();
    }
    else {
        email.setCustomValidity("You have entered an invalid email address!");
        emailEspan.className = "active";
        email.focus();
        const msgDiv = document.getElementById('id-email');
        msgDiv.textContent = 'You have entered an invalid email address!';
        msgDiv.className = "error-message";
    }
}

// This function will validate Phone Number.
function phoneNumber() {
    const pNumber = document.signup.pnumber;
    const phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (pNumber.value.match(phonePattern)) {
        phoneEspan.className = "active";
        pNumber.setCustomValidity("");
        document.querySelector('#id-pnumber').remove();
        document.signup.psw.focus();
    }
    else {
        pNumber.setCustomValidity("You have entered an invalid Phone Number!");
        phoneEspan.className = "active";
        pNumber.focus();
        const msgDiv = document.getElementById('id-pnumber');
        msgDiv.textContent = 'You have entered an invalid Phone Number!';
        msgDiv.className = "error-message";
    }
}

// This function will validate Password.
function CheckPassword() {
    const password = document.signup.psw;
    const passwordFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (psw.value.match(passwordFormat)) {
        pswEspan.className = "active";
        password.setCustomValidity("");
        document.querySelector('#id-psw').remove();
        document.signup.psw2.focus();
    }
    else {
        password.setCustomValidity("at least 1 number & 1 uppercase & lowercase letter & at least 8 or more characters");
        pswEspan.className = "active";
        password.focus();
        const msgDiv = document.getElementById('id-psw');
        msgDiv.textContent = 'at least 1 number, 1 uppercase, 1 lowercase letter, at least 8 or more characters';
        msgDiv.className = "error-message";
    }
}

// This function will confirm Passwords .
function passValidate() {
    const pswRepeat = document.signup.psw2;
    const  password = document.getElementById("psw").value;
    const confirmPassword = document.getElementById("psw2").value;
    if (password === confirmPassword) {
        psw2Espan.className = "active";
        pswRepeat.setCustomValidity("");
        document.querySelector('#id-psw2').remove();
        document.signup.btn.focus();

    } else {
        pswRepeat.setCustomValidity("Passwords must be the same");
        psw2Espan.className = "active";
        pswRepeat.focus();
        const msgDiv = document.getElementById('id-psw2');
        msgDiv.textContent = 'Passwords must be the same';
        msgDiv.className = "error-message";
    }
}
