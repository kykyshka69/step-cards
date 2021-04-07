const inputLoginClass = new Input({
  name: "login",
  className: "input-login form-control",
  type: "email",
  placeholder: "Your email",
  elem: "input",
});

const inputPasswordClass = new Input({
  name: "passoword",
  className: "input-password form-control",
  type: "password",
  placeholder: "Your password",
  elem: "input",
});

const inputTargetClass = new Input({
  name: "visit-target",
  className: "visit__target form-control",
  type: "text",
  placeholder: "Цель визита",
  elem: "input",
});

const inputDescriptionClass = new Input({
  name: "Description",
  className: "input_description form-control",
  type: "text",
  placeholder: "Краткое описание визита",
  elem: "input",
});

const inputFullNameClass = new Input({
  name: "fullName",
  className: "input-fullName form-control",
  type: "text",
  placeholder: "ФИО",
  elem: "input",
});

const inputAgeClass = new Input({
  name: "age",
  className: "input-age form-control",
  type: "text",
  placeholder: "Ваш возраст",
  elem: "input",
});

const inputPressureClass = new Input({
  name: "pressure",
  className: "input-pressure form-control",
  type: "text",
  placeholder: "Обычное давление",
  elem: "input",
});

const inputWeightClass = new Input({
  name: "weight",
  className: "input-weight form-control",
  type: "text",
  placeholder: "Индекс массы тела",
  elem: "input",
});

const inputLastVisitClass = new Input({
  name: "date",
  className: "input-date form-control",
  type: "text",
  placeholder: "Дата последнего визита",
  elem: "input",
});

const inputLoginElement = inputLoginClass.render();
const inputPasswordElement = inputPasswordClass.render();
const inputTargetElement = inputTargetClass.render();
const inputDescriptionElement = inputDescriptionClass.render();
const inputFullNameElement = inputFullNameClass.render();
const inputAgeElement = inputAgeClass.render();
const inputPressureElement = inputPressureClass.render();
const inputWeightElement = inputWeightClass.render();
const inputLastVisitElement = inputLastVisitClass.render();
labelLoginElement.append(inputLoginElement);
labelPasswordElement.append(inputPasswordElement);
