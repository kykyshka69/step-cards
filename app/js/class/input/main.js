class Input extends Tools {
  constructor({ id, elem, name, className, type, placeholder }) {
    super(elem);
    (this.name = name),
      (this.className = className),
      (this.type = type),
      (this.placeholder = placeholder);
    this.id = id;
  }
  render() {
    this.input = this.createElement();
    this.input.required = true;
    this.input.name = this.name;
    this.input.className = this.className;
    this.input.type = this.type;
    this.input.placeholder = this.placeholder;
    this.input.id = this.id;
    return this.input;
  }
}

const inputLogin = new Input({
  id: "login",
  name: "login",
  className: "input-login",
  type: "email",
  placeholder: "Your email",
  elem: "input",
});

const inputPassword = new Input({
  id: "password",
  name: "password",
  className: "input-password",
  type: "password",
  placeholder: "Your password",
  elem: "input",
});

const inputLastVisit = new Input({
  id: "last-visit",
  name: "last-visit",
  className: "input-visit",
  type: "text",
  placeholder: "Дата последнего посещения",
  elem: "input",
});
