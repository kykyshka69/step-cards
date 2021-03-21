const btnLogin = new Buttons({
    elem: "a",
    className: "header-button",
    type: "button",
    textContent: "LOGIN",
  });

const modalWindow = new Modal({
    elem: "div",
    className: "background-popup",
  });

const formAuthorization = new Form({
    action: "#",
    name: "authorization",
    className: "popup-form",
    elem: "form",
});

const labelLogin = new Label({
  elem: "label",
  name: "login-authorization",
  className: "login-authorization",
});

const labelPassword = new Label({
  elem: "label",
  name: "login-authorization",
  className: "password-authorization",
});

const inputLogin = new Input({
  name: "login",
  className: "authorization",
  type: "email",
  placeholder: "Your email",
  elem: "input",
});

const inputPassword = new Input({
  name: "pasword",
  className: "authorization",
  type: "password",
  placeholder: "Your password",
  elem: "input",
});

const btnSubmit = new Buttons({
  elem: "button",
  className: "btn-submit",
  type: "submit",
  textContent: "submit",
});

const btnClose = new Buttons({
  elem: "button",
  className: "btn-close",
  type: "button",
  textContent: "close",
});