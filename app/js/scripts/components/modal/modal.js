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
    chooseDoctorsElement.value == "cardiologist" &&
    chooseDoctorsElement.value !== "Выбор доктора"
  ) {
    visitClass.render();
  }
};
// document.body.addEventListener("change", function (event) {
//   if (
//     event.target === document.querySelector(".choose-doctors") &&
//     document.querySelector(".choose-doctors").value !== "Выбор доктора"
//   ) {
//     const modalBodyClass = document.querySelector(".popup-body");
//     form.textContent = "";
//     modalBodyClass.append(form);
//     generalVisit.render();
//     document.querySelector(".btn-post").style.display = "block";
//   }
//   if (
//     event.target === document.querySelector(".choose-doctors") &&
//     document.querySelector(".choose-doctors").value === "Кардиолог"
//   ) {
//     form.textContent = "";
//     generalVisit.render();
//     cardiologist.render();
//   }
//   if (
//     event.target === document.querySelector(".choose-doctors") &&
//     document.querySelector(".choose-doctors").value === "Терапевт"
//   ) {
//     form.textContent = "";
//     generalVisit.render();
//     terapevt.render();
//   }
//   if (
//     event.target === document.querySelector(".choose-doctors") &&
//     document.querySelector(".choose-doctors").value === "Стоматолог"
//   ) {
//     form.textContent = "";
//     generalVisit.render();
//     dentist.render();
//   }
// });
