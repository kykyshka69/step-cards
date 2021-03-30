const modalWindowClass = new Modal({
  elem: "div",
  className: "background-popup modal",
  form: "formElement",
});

const modalCreateClass = new Modal({
  elem: "div",
  className: "modal-create modal",
  form: "formCreateElement",
});

const modalWindowElement = modalWindowClass.render();
document.body.prepend(modalWindowElement);

const modalCreateElement = modalCreateClass.render();
document.body.prepend(modalCreateElement);
