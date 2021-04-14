const modalBodyElement = document.querySelector(".modal-body");
const modalTitleElement = document.querySelector(".modal-title");
const modalHeaderElement = document.querySelector(".modal-header");
const modalFooterElement = document.querySelector(".modal-footer");
const modalGeneralElement = document.querySelector(".background-popup");
let formInputElements = document.getElementsByTagName("input");
buttonCloseElement.onclick = (e) => {
  e.preventDefault();
  modalWindowElement.remove();
  document.body.append(modalWindowElement);
  modalFooterElement.innerHTML = "";
  modalBodyElement.innerHTML = "";
  modalGeneralElement.classList.remove("popup__active");
  document.body.style.background = "";
  chooseDoctorsElement.value = "Выбор доктора";
  if (
    localStorage.getItem("token") !== "noid" &&
    localStorage.getItem("token")
  ) {
    buttonCreateElement.style.display = "block";
  } else {
    buttonLoginElement.style.display = "block";
  }
};

chooseDoctorsElement.onchange = (e) => {
  modalBodyElement.textContent = "";
  modalBodyElement.append(chooseDoctorsElement);
  visitClass.render();
  if (
    chooseDoctorsElement.value == "Cardiologist" &&
    chooseDoctorsElement.value !== "Выбор доктора"
  ) {
    visitCardiologistClass.render();
  } else if (
    chooseDoctorsElement.value == "Dentist" &&
    chooseDoctorsElement.value !== "Выбор доктора"
  ) {
    visitDentistClass.render();
  } else if (
    chooseDoctorsElement.value == "Therapist" &&
    chooseDoctorsElement.value !== "Выбор доктора"
  ) {
    visitTherapistClass.render();
  }
  formInputElements = Array.prototype.slice.call(formInputElements);
  formInputElements.forEach((element) => {
    element.value = "";
  });
};
