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




class registrationLabels extends Tools {
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


const visitTarget = new registrationLabels ({
  elem: 'label',
  name: 'visit-target',
  className: 'visit-target'
})


const visitDescription = new registrationLabels ({
  elem: 'label',
  name: 'description',
  className: 'description'
})

const labelFullName = new registrationLabels ({
  elem: 'label',
  name: 'full-name',
  className: 'full-name'
})

regLabel.appendChild(visitTarget.render());
regLabel.appendChild(visitDescription.render());
regLabel.appendChild(labelFullName.render());

const visTarget = document.querySelector('.visit-target');
visTarget.prepend(inputTarget.render());

const visitDes = document.querySelector('.description');
visitDes.prepend(inputDescription.render());

const visFullName = document.querySelector('.full-name');
visFullName.prepend(inputFullName.render())