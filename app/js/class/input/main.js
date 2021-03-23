class Input extends Tools {
  constructor({ elem, name, className, type, placeholder, value, min, max }) {
    super(elem);
    (this.name = name),
      (this.className = className),
      (this.type = type),
      (this.placeholder = placeholder);
    this.value = value;
    this.min = min;
    this.max = max;
  }
  render() {
    this.input = this.createElement();
    this.input.required = true;
    this.input.name = this.name;
    this.input.className = this.className;
    this.input.type = this.type;
    this.input.placeholder = this.placeholder;
    this.input.value = this.value;
    this.input.min = this.min;
    this.input.max = this.max;
    return this.input;
  }
}

const inputLogin = new Input({
  name: "login",
  className: "input-login form-control",
  type: "email",
  placeholder: "Your email",
  elem: "input",
});

const inputPassword = new Input({
  name: "pasword",
  className: "input-password form-control",
  type: "password",
  placeholder: "Your password",
  elem: "input",
});

const inputAge = new Input({
  elem: "input",
  name: "age",
  className: "test",
  type: "date",
  value: "1920-01-01",
  min: "1920-01-01",
  max: "2021-12-31",
});
