const modalWindowClass = new Modal({
  elem: "div",
  className: "background-popup modal",
});

const filterWindowClass = new Modal({
  elem: "div",
  className: "card-body"
})

const inputGroupClass = new Modal({
  elem: "div",
  className: "input-group mb-3"
})

const inputGroupElement = inputGroupClass.renderInputGroup();
const filterWindowElement = filterWindowClass.renderClear();
const modalWindowElement = modalWindowClass.render();
document.body.prepend(modalWindowElement);
