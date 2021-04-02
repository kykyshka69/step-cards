popupClass.append(formCreate.render());
const form = document.querySelector(".popup-form");
form.append(
  modalHeader.render(),
  modalBody.render(),
  modalFooter.render(),
  modalContainer.render()
);
document
  .querySelector(".popup-header")
  .insertAdjacentHTML("afterbegin", "<h5 class=modal-title>Login</h5>");
document.querySelector(".popup-header").append(btnClose.render());

document.querySelector(".popup-footer").append(btnSubmit.render());
const closeButton = document.querySelector(".btn-close");
closeButton.addEventListener("click", () => {
  popup.classList.remove("popup__active");
  loginButton.style.display = "block";
});

document
  .querySelector(".modal-body")
  .append(labelLogin.render(), labelPassword.render());
document.querySelector(".login-authorization").prepend(inputLogin.render());
document
  .querySelector(".password-authorization")
  .prepend(inputPassword.render());
