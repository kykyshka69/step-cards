class Options extends Tools {
  constructor({ id, elem, className, disabled, textContent, selected }) {
    super(elem);
    this.className = className;
    this.id = id;
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
    this.option.id = this.id;
    return this.option;
  }
}
const optionDefault = new Options({
  id: "option-default",
  elem: "option",
  textContent: "Выбор доктора",
  className: "qqq",
  selected: true,
  disabled: true,
});
const optionCardiologist = new Options({
  id: "option-cardiologist",
  elem: "option",
  textContent: "Кардиолог",
  className: "qqq",
});
const optionDentist = new Options({
  id: "option-dentist",
  elem: "option",
  textContent: "Стоматолог",
  className: "qqq",
});
const optionTherapist = new Options({
  id: "option-therapist",
  elem: "option",
  textContent: "Терапевт",
  className: "qqq",
});

const optionDefaultUrgency = new Options({
  id: "option-default-urgency",
  elem: "option",
  textContent: "Срочность",
  className: "qqq",
  selected: true,
  disabled: true,
});
const optionRegular = new Options({
  id: "option-regular",
  elem: "option",
  textContent: "Обычная",
  className: "qqq",
});
const optionPriority = new Options({
  id: "option-priority",
  elem: "option",
  textContent: "Приоритетная",
  className: "qqq",
});
const optionUrgent = new Options({
  id: "option-urgent",
  elem: "option",
  textContent: "неотложная",
  className: "qqq",
});
