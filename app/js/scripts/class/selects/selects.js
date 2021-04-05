class Select extends Tools {
  constructor({ elem, className, disabled }) {
    super(elem);
    this.className = className;
    this.disabled = disabled;
  }
  renderSelectChooseDoctors() {
    const chooseDoctors = this.createElement();
    chooseDoctors.className = "col-md-3 choose-doctors form-select mb-3";
    chooseDoctors.append(
      this.renderOptionChooseDoctors(),
      this.renderOptionCardiologist(),
      this.renderOptionDentist(),
      this.renderOptionTherapist()
    );
    return chooseDoctors;
  }

  renderOptionChooseDoctors() {
    const optionChooseDoctors = document.createElement("option");
      optionChooseDoctors.textContent = "Выбор доктора";
      (optionChooseDoctors.selected = true),
      (optionChooseDoctors.disabled = this.disabled);
    return optionChooseDoctors;
  }
  renderOptionCardiologist() {
    const optionCardiologist = document.createElement("option");
    optionCardiologist.textContent = "Кардиолог";
    optionCardiologist.value = "Cardiologist";
    return optionCardiologist;
  }
  renderOptionDentist() {
    const optionDentist = document.createElement("option");
    optionDentist.textContent = "Стоматолог";
    optionDentist.value = "Dentist";
    return optionDentist;
  }
  renderOptionTherapist() {
    const optionTherapist = document.createElement("option");
    optionTherapist.textContent = "Терапевт";
    optionTherapist.value = "Therapist";
    return optionTherapist;
  }

  renderSelectChooseUrgency() {
    const chooseUrgency = this.createElement();
    chooseUrgency.className = "choose-urgency form-select mb-3";
    chooseUrgency.append(
      this.renderOptionChooseUrgency(),
      this.renderOptionRegular(),
      this.renderOptionPriority(),
      this.renderOptionUrgent()
    );
    return chooseUrgency;
  }

  renderOptionChooseUrgency() {
    const optionChooseUrgency = document.createElement("option");
    if (this.disabled) {
      optionChooseUrgency.textContent = "Все";
    } else {
      optionChooseUrgency.textContent = "Срочность";
    }
    (optionChooseUrgency.selected = true),
      (optionChooseUrgency.disabled = true);
    return optionChooseUrgency;
  }
  renderOptionRegular() {
    const optionRegular = document.createElement("option");
    optionRegular.textContent = "Обычная";
    return optionRegular;
  }
  renderOptionPriority() {
    const optionPriority = document.createElement("option");
    optionPriority.textContent = "Приоритетная";
    return optionPriority;
  }
  renderOptionUrgent() {
    const optionUrgent = document.createElement("option");
    optionUrgent.textContent = "Неотложная";
    return optionUrgent;
  }
}
