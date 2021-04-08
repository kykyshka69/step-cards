const modalWindowClass = new Modal({
  elem: "div",
  className: "background-popup modal",
});

const modalWindowElement = modalWindowClass.render();
document.body.prepend(modalWindowElement);
