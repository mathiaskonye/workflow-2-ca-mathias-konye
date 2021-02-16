
const form = document.querySelector("#contactForm");
form.addEventListener("submit", validateForm);

function checkInputLength(value: any) {

    const trimmedValue = value.trim();

if (trimmedValue.length > 0) {
        return true;
    } else {
        return false;
    }
}

function validateForm(event: any) {
    event.preventDefault();

    const firstName: Element = document.querySelector("#firstName");
    const firstNameError: Element = document.querySelector("#firstNameError");
    const firstNameValue: any = firstName.value;

    if (checkInputLength(firstNameValue) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display ="block";
    }

    const lastName = document.querySelector("#lastName");
    const lastNameError = document.querySelector("#lastNameError");
    const lastNameValue = lastName.value;

    if (checkInputLength(lastNameValue) === true) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display ="block";
    }

    const message = document.querySelector("#message");
    const messageError = document.querySelector("#messageError");
    const messageValue = message.value;

    if (checkInputLength(messageValue) === true) {
      messageError.style.display = "none";
    } else {
      messageError.style.display = "block";
    }

    const email = document.querySelector("#email");
    const emailError = document.querySelector("#emailError");
    const wrongEmail = document.querySelector("#invalidEmailError");

    const emailValue = email.value;

    if (checkInputLength(emailValue) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

if (validateEmail(emailValue) === true) {
        wrongEmail.style.display = "none";
    } else {
        wrongEmail.style.display = "block";
    }

}

function checkTextAreaLength(value) {
  const trim = value.trim;
if (trim.length >= 10) { 
    return true;
  } else {
    return false;
  }
}


function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
}
