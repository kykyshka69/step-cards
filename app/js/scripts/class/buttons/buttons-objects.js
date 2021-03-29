const buttonLoginClass = new Buttons({
    elem: "a",
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
  type: "button"
});

const buttonCreateClass = new Buttons({
  elem: "button",
  className: "btn btn-create btn-primary",
  type: "button",
  textContent: "CreateVisit",
});

const buttonLoginElement = buttonLoginClass.render();
const buttonSubmitElement = buttonSubmitClass.render();
const buttonCloseElement = buttonCloseClass.render();
const buttonCreateElement = buttonCreateClass.render();