class Options extends Tools {
  constructor({ elem, id, className, disabled, textContent, selected }) {
    super(elem);
    this.id = id;
    this.className = className;
    this.disabled = disabled;
    this.textContent = textContent;
    this.selected = selected;
  }
  render() {
    this.option = this.createElement();
    this.option.id = this.id;
    this.option.className = this.className;
    this.option.disabled = this.disabled;
    this.option.textContent = this.textContent;
    this.option.selected = this.selected;
    return this.option;
  }
}
const optionDefault = new Options({
  id: "select",
  elem: "option",
  textContent: "Выбор доктора",
  className: "select",
  selected: true,
  disabled: true,
});
const optionCardiologist = new Options({
  elem: "option",
  textContent: "Кардиолог",
  className: "cardiolog",
});
const optionDentist = new Options({
  elem: "option",
  textContent: "Стоматолог",
  className: "dentist",
});
const optionTherapist = new Options({
  elem: "option",
  textContent: "Терапевт",
  className: "therapist",
});

const optionUrgent = new Options({
  elem: "option",
  textContent: "Неотложная",
  className: "",
});
