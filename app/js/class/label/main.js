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

const visitTarget = new Label({
  elem: "label",
  name: "visit-target",
  className: "visit-target input-group mb-3",
});

const visitDescription = new Label({
  elem: "label",
  name: "description",
  className: "description input-group mb-3",
});

const labelFullName = new Label({
  elem: "label",
  name: "full-name",
  className: "full-name input-group mb-3",
});

const labelTextArea = new Label({
  elem: "label",
  name: "label-textarea",
  className: "label-textarea input-group mb-3",
});

const pressure = new Label({
  elem: "label",
  name: "label-pressure",
  className: "label-pressure input-group mb-3",
});

const labelWeight = new Label({
  elem: "label",
  name: "label-weight",
  className: "label-weight input-group mb-3",
});

const age = new Label({
  name: "label-age",
  elem: "label",
  className: "label-age input-group mb-3",
});

const date = new Label({
  name: "label-date",
  elem: "label",
  className: "label-date input-group mb-3",
});
