const chooseDoctorsClass = new Select({
  elem: "select",
});

const chooseUrgencyClass = new Select({
  elem: "select",
});
const chooseUrgencyFilterClass = new Select({
  elem: "select",
  className: "select-filter__urgency",
  disabled: true
});
const chooseUrgencyElement = chooseUrgencyClass.renderSelectChooseUrgency();
const chooseDoctorsElement = chooseDoctorsClass.renderSelectChooseDoctors();
const chooseUrgencyFilterElement = chooseUrgencyFilterClass.renderSelectChooseUrgency();
