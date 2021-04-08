const modalBodyElement = document.querySelector(".modal-body");
const modalTitleElement = document.querySelector(".modal-title");
const modalHeaderElement = document.querySelector(".modal-header");

buttonCloseElement.onclick = (e) => {
  document.querySelector(".background-popup").classList.remove("popup__active");
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
  if (
    chooseDoctorsElement.value == "Cardiologist" &&
    chooseDoctorsElement.value !== "Выбор доктора"
  ) {
    modalBodyElement.textContent = "";
    modalBodyElement.append(chooseDoctorsElement);
    visitClass.render();
    visitCardiologistClass.render();
  } else if (
    chooseDoctorsElement.value == "Dentist" &&
    chooseDoctorsElement.value !== "Выбор доктора"
  ) {
    modalBodyElement.textContent = "";
    modalBodyElement.append(chooseDoctorsElement);
    visitClass.render();
    visitDentistClass.render();
  } else if (
    chooseDoctorsElement.value == "Therapist" &&
    chooseDoctorsElement.value !== "Выбор доктора"
  ) {
    modalBodyElement.textContent = "";
    modalBodyElement.append(chooseDoctorsElement);
    visitClass.render();
    visitTherapistClass.render();
  }
};
