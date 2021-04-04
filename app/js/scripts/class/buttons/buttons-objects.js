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
  className: "btn btn-primary mb-1",
  type: "button",
  textContent: "Show More",
});

const buttonHideInfoClass = new Buttons({
  elem: "button",
  className: "btn btn-hide-info hide btn-primary",
  type: "button",
  textContent: "Hide",
});

const buttonEditClass = new Buttons({
  elem: "button",
  className: "btn btn-light mb-2",
  type: "button",
  textContent: "Edit",
});

const buttonDeleteClass = new Buttons({
  elem: "button",
  className: "btn btn-danger mb2",
  type: "button",
  textContent: "Delete",
});

const buttonEditCardClass = new Buttons({
  elem: "button",
  className: "btn btn-primary mb-2",
  type: "button",
  textContent: "Save",
});

const buttonLoginElement = buttonLoginClass.render();
const buttonSubmitElement = buttonSubmitClass.render();
const buttonCloseElement = buttonCloseClass.render();
const buttonCreateElement = buttonCreateClass.render();
const buttonPostElement = buttonPostClass.render();
const buttonShowMoreElement = buttonShowMoreClass.render();
const buttonEditElement = buttonEditClass.render();
const buttonHideInfoElement = buttonHideInfoClass.render();
const buttonDeleteElement = buttonDeleteClass.render();
const buttonEditCardElement = buttonEditCardClass.render();
