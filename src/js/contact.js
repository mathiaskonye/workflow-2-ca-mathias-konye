var form = document.querySelector("#contactForm");
form.addEventListener("submit", validateForm);
function checkInputLength(value) {
    var trimmedValue = value.trim();
    if (trimmedValue.length > 0) {
        return true;
    }
    else {
        return false;
    }
}
function validateForm(event) {
    event.preventDefault();
    var firstName = document.querySelector("#firstName");
    var firstNameError = document.querySelector("#firstNameError");
    var firstNameValue = firstName.value;
    if (checkInputLength(firstNameValue) === true) {
        firstNameError.style.display = "none";
    }
    else {
        firstNameError.style.display = "block";
    }
    var lastName = document.querySelector("#lastName");
    var lastNameError = document.querySelector("#lastNameError");
    var lastNameValue = lastName.value;
    if (checkInputLength(lastNameValue) === true) {
        lastNameError.style.display = "none";
    }
    else {
        lastNameError.style.display = "block";
    }
    var message = document.querySelector("#message");
    var messageError = document.querySelector("#messageError");
    var messageValue = message.value;
    if (checkTextAreaLength(messageValue) === true) {
        messageError.style.display = "none";
    }
    else {
        messageError.style.display = "block";
    }
    var email = document.querySelector("#email");
    var emailError = document.querySelector("#emailError");
    var wrongEmail = document.querySelector("#invalidEmailError");
    var emailValue = email.value;
    if (checkInputLength(emailValue) === true) {
        emailError.style.display = "none";
    }
    else {
        emailError.style.display = "block";
    }
    if (validateEmail(emailValue) === true) {
        wrongEmail.style.display = "none";
    }
    else {
        wrongEmail.style.display = "block";
    }
}
function checkTextAreaLength(value) {
    var trim = value.trim();
    if (trim.length >= 10) {
        return true;
    }
    else {
        return false;
    }
}
function validateEmail(email) {
    var regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
}
