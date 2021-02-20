
const form: HTMLElement = document.querySelector("#contactForm");
form.addEventListener("submit", validateForm);

function checkInputLength(value: any): boolean {

    const trimmedValue = value.trim();

if (trimmedValue.length > 0) {
        return true;
    } else {
        return false;
    }
}

function validateForm(event: any) {
    event.preventDefault();

    const firstName: HTMLInputElement = document.querySelector("#firstName");
    const firstNameError: HTMLInputElement = document.querySelector("#firstNameError");
    const firstNameValue: string = firstName.value;

    if (checkInputLength(firstNameValue) === true) {
        firstNameError.style.display = "none";
    } else {
        firstNameError.style.display ="block";
    }

    const lastName: HTMLInputElement = document.querySelector("#lastName");
    const lastNameError: HTMLInputElement = document.querySelector("#lastNameError");
    const lastNameValue: string = lastName.value;

    if (checkInputLength(lastNameValue) === true) {
        lastNameError.style.display = "none";
    } else {
        lastNameError.style.display ="block";
    }

    const message: HTMLInputElement = document.querySelector("#message");
    const messageError: HTMLInputElement = document.querySelector("#messageError");
    const messageValue: string = message.value;

    if (checkTextAreaLength(messageValue) === true) {
      messageError.style.display = "none";
    } else {
      messageError.style.display = "block";
    }

    const email: HTMLInputElement = document.querySelector("#email");
    const emailError: HTMLInputElement = document.querySelector("#emailError");
    const wrongEmail: HTMLInputElement = document.querySelector("#invalidEmailError");

    const emailValue: string = email.value;

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

export default function checkTextAreaLength(value: any) {
  const trim: any = value.trim();
if (trim.length >= 10) { 
    return true;
  } else {
    return false;
  }
}


function validateEmail(email: any): boolean {
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
}

export default function sum(a: number, b: number) {
    return a + b;
}
