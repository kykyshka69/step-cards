class Label extends Tools {
    constructor({ elem, name, className }) {
      super(elem);
      this.className = className;
      this.name = name;
    }
    render() {
      this.label = this.createElement();
      this.label.name = this.name;
      this.label.className = this.className;
      return this.label;
    }
}

const labelLogin = new Label({
    elem: "label",
    name: "login-authorization",
    className: "login-authorization input-group mb-3",
});
  
const labelPassword = new Label({
    elem: "label",
    name: "login-authorization",
    className: "password-authorization input-group mb-3",
});

formLogin.append(modalContainer.render());
const bodyInput = document.querySelector(".modal-body");
bodyInput.append(labelLogin.render(), labelPassword.render())
const labelLog = document.querySelector(".login-authorization");
labelLog.prepend(inputLogin.render());
const labelPass = document.querySelector(".password-authorization");
labelPass.prepend(inputPassword.render());
