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
    className: "header-button",
    type: "button",
    textContent: "LOGIN",
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

const btnCreate = new Buttons({
  elem: "a",
  className: "btn-create",
  type: "button",
  textContent: "CreateVisit",
});
