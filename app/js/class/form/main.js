class Form extends Tools {
  constructor({ elem, action, name, className }) {
    super(elem);
    (this.name = name), (this.className = className), (this.action = action);
  }
  render() {
    this.form = this.createElement();
    this.form.name = this.name;
    this.form.className = this.className;
    this.form.action = this.action;
    return this.form;
  }
}

const formCreate = new Form({
  action: "#",
  name: "authorization",
  className: "popup-form modal-content",
  elem: "form",
});
