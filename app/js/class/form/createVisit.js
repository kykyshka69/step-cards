document.body.addEventListener("change", function (event) {
  if (
    event.target === document.querySelector(".choose-doctors") &&
    document.querySelector(".choose-doctors").value !== "Выбор доктора"
  ) {
    const modalBodyClass = document.querySelector(".popup-body");
    form.textContent = "";
    modalBodyClass.append(form);
    generalVisit.render();
    document.querySelector(".btn-post").style.display = "block";
  }
  if (
    event.target === document.querySelector(".choose-doctors") &&
    document.querySelector(".choose-doctors").value === "Кардиолог"
  ) {
    form.textContent = "";
    generalVisit.render();
    cardiologist.render();
  }
  if (
    event.target === document.querySelector(".choose-doctors") &&
    document.querySelector(".choose-doctors").value === "Терапевт"
  ) {
    form.textContent = "";
    generalVisit.render();
    terapevt.render();
  }
  if (
    event.target === document.querySelector(".choose-doctors") &&
    document.querySelector(".choose-doctors").value === "Стоматолог"
  ) {
    form.textContent = "";
    generalVisit.render();
    dentist.render();
  }
});
