const header = document.querySelector(".header");
const headerLogo = document.querySelector(".header-logo");
const logo = document.createElement("a");
logo.innerHTML = "The Care Clinic";
logo.style.cursor = " pointer";
headerLogo.append(logo);
buttonCreateElement.style.display = "none";
buttonLoginElement.onclick = () => {
  document.body.style.background = "rgba(0, 0, 0, 0.4)";
  document.querySelector(".background-popup").classList.add("popup__active");
  buttonLoginElement.style.display = "none";
  buttonCreateElement.style.display = "none";
};

buttonCreateElement.onclick = (e) => {
  chooseDoctorsElement.disabled = false;
  document.querySelector(".background-popup").classList.add("popup__active");
  modalBodyElement.innerHTML = "";
  modalBodyElement.append(chooseDoctorsElement);
  modalTitleElement.textContent = "Choose Doctors";
  buttonSubmitElement.remove();
  modalHeaderElement.append(buttonCloseElement);
};

document.addEventListener("click", (e) => {
  if (e.target === modalGeneralElement) {
    modalGeneralElement.classList.remove("popup__active");
  }
});
