class Label extends Tools {
  constructor({ id, title, elem, name, className }) {
    super(elem);
    this.className = className;
    this.name = name;
    this.id = id;
    this.title = title;
  }
  render() {
    this.label = this.createElement();
    this.label.name = this.name;
    this.label.className = this.className;
    this.label.id = this.id;
    this.label.title = this.title;
    return this.label;
  }
}

const labelLogin = new Label({
  title: "login",
  id: "label-login",
  elem: "label",
  name: "login-authorization",
  className: "login-authorization",
});

const labelPassword = new Label({
  title: "password",
  id: "label-password",
  elem: "label",
  name: "password-authorization",
  className: "password-authorization",
});
const labelLastVisit = new Label({
  title: "Дата последнего посещения",
  id: "label-last-visit",
  elem: "label",
  name: "label-last-visit",
  className: "password-authorization",
});

formLogin.append(labelLogin.render(), labelPassword.render());
const labelLog = document.querySelector(".login-authorization");
labelLog.prepend(inputLogin.render());
const labelPass = document.querySelector(".password-authorization");
labelPass.prepend(inputPassword.render());
