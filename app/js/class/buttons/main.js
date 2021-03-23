class Buttons extends Tools {
    constructor({ elem, className, type, textContent }) {
      super(elem);
      this.className = className;
      this.type = type;
      this.textContent = textContent;
    }
    render() {
      this.btn = this.createElement();
      this.btn.className = this.className;
      this.btn.type = this.type;
      this.btn.textContent = this.textContent;
      return this.btn;
    }
}

const btnLogin = new Buttons({
    elem: "a",
    className: "header-button btn btn-primary",
    type: "button",
    textContent: "LOGIN",
  });

const btnSubmit = new Buttons({
  elem: "button",
  className: "btn btn-submit btn-primary",
  type: "submit",
  textContent: "Submit",
});

const btnClose = new Buttons({
  elem: "button",
  className: "btn-close close-modal",
  type: "button"
});

const btnCreate = new Buttons({
  elem: "button",
  className: "btn btn-create btn-primary",
  type: "button",
  textContent: "CreateVisit",
});
header.append(btnLogin.render());
let loginButton = document.querySelector(".header-button");
loginButton.addEventListener('click', () => {
    popup.classList.add('popup__active');
    loginButton.style.display = 'none';
});
header.append(btnCreate.render());
let createButton = document.querySelector(".btn-create");
createButton.style.display = "none";