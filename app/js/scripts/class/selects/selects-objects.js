const chooseDoctorsClass = new Select({
  elem: "select",
  className: "choose-doctors form-select mb-3",
});

const chooseUrgencyClass = new Select({
  elem: "select",
  className: "choose-urgency form-select mb-3",
});
const chooseUrgencyElement = chooseUrgencyClass.render();
const chooseDoctorsElement = chooseDoctorsClass.render();
