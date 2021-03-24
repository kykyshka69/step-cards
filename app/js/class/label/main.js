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
    className: "login-authorization",
});
  
const labelPassword = new Label({
    elem: "label",
    name: "login-authorization",
    className: "password-authorization",
});

formLogin.append(labelLogin.render(), labelPassword.render());
const labelLog = document.querySelector(".login-authorization");
labelLog.prepend(inputLogin.render());
const labelPass = document.querySelector(".password-authorization");
labelPass.prepend(inputPassword.render());


const visitTarget = new Label({
  elem: 'label',
  name: 'visit-target',
  className: 'visit-target input-group mb-3'
})


const visitDescription = new Label({
  elem: 'label',
  name: 'description',
  className: 'description input-group mb-3'
})

const labelFullName = new Label({
  elem: 'label',
  name: 'full-name',
  className: 'full-name input-group mb-3'
})

const labelTextArea = new Label({
  elem: 'label',
  name: 'label-textarea',
  className: 'label-textarea input-group mb-3'
})