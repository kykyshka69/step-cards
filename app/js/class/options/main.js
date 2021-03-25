class Options extends Tools {
  constructor({ elem, className, disabled, textContent, selected }) {
    super(elem);
    this.className = className;
    this.disabled = disabled;
    this.textContent = textContent;
    this.selected = selected;
  }
  render() {
    this.option = this.createElement();
    this.option.className = this.className;
    this.option.disabled = this.disabled;
    this.option.textContent = this.textContent;
    this.option.selected = this.selected;
    return this.option;
  }
}
const optionDefault = new Options({
  elem: "option",
  textContent: "Выбор доктора",
  className: "",
  selected: true,
  disabled: true,
});
const optionCardiologist = new Options({
  elem: "option",
  textContent: "Кардиолог",
  className: "",
});
const optionDentist = new Options({
  elem: "option",
  textContent: "Стоматолог",
  className: "",
});
const optionTherapist = new Options({
  elem: "option",
  textContent: "Терапевт",
  className: "test",
});

const optionDefaultUrgency = new Options({
  elem: "option",
  textContent: "Срочность",
  className: "",
  selected: true,
  disabled: true,
});

const optionRegular = new Options({
  elem: "option",
  textContent: "Обычная",
  className: "",
});

const optionPriority = new Options({
  elem: "option",
  textContent: "Приоритетная",
  className: "",
});

const optionUrgent = new Options({
  elem: "option",
  textContent: "Неотложная",
  className: "",
});
