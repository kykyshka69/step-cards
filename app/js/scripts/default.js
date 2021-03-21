let header = document.querySelector(".header");
let container = document.querySelector(".container");
header.append(btnLogin.render());
container.append(modalWindow.render());
let loginButton = document.querySelector(".header-button");
let popup = document.querySelector(".background-popup");
loginButton.addEventListener('click', () => {
    popup.classList.add('popup__active');
    loginButton.style.display = 'none';
});
let popupClass = document.querySelector(".popup");
popupClass.append(formAuthorization.render());
const formLogin = document.querySelector(".popup-form");
formLogin.append(labelLogin.render());
formLogin.append(labelPassword.render());
const labelLog = document.querySelector(".login-authorization");
labelLog.prepend(inputLogin.render());
const labelPass = document.querySelector(".password-authorization");
labelPass.prepend(inputPassword.render());
formLogin.append(btnSubmit.render(), btnClose.render());
let closeButton = document.querySelector(".btn-close");
closeButton.addEventListener('click', () => {
    popup.classList.remove('popup__active');
    loginButton.style.display = 'block';
});