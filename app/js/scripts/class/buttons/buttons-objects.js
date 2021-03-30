const buttonLoginClass = new Buttons({
  elem: "button",
  className: "header-button btn btn-primary",
  type: "button",
  textContent: "LOGIN",
});

const buttonSubmitClass = new Buttons({
  elem: "button",
  className: "btn btn-submit btn-primary",
  type: "submit",
  textContent: "Submit",
});

const buttonCloseClass = new Buttons({
  elem: "button",
  className: "btn-close close-modal",
  type: "button",
});

const buttonCreateClass = new Buttons({
  elem: "button",
  className: "btn btn-create btn-primary",
  type: "button",
  textContent: "CreateVisit",
});

const buttonPostClass = new Buttons({
  elem: "button",
  className: "btn btn-post btn-primary",
  type: "submit",
  textContent: "Создать Визит",
});
const buttonShowMoreClass = new Buttons({
  elem: "button",
  className: "btn btn-show-more btn-primary",
  type: "button",
  textContent: "Показать больше",
});

const buttonEditClass = new Buttons({
  elem: "button",
  className: "btn btn-edit btn-primary",
  type: "button",
  textContent: "Редактировать",
});
const buttonLoginElement = buttonLoginClass.render();
const buttonSubmitElement = buttonSubmitClass.render();
const buttonCloseElement = buttonCloseClass.render();
const buttonCreateElement = buttonCreateClass.render();
const buttonPostElement = buttonPostClass.render();
const buttonShowMoreElement = buttonShowMoreClass.render();
const buttonEditElement = buttonEditClass.render();
