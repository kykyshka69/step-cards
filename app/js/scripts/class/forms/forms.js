class Form extends Tools {
  constructor({ elem, action, name, className }) {
    super(elem);
    (this.name = name), (this.action = action);
    this.className = className;
  }
  render() {
    this.form = this.createElement();
    this.form.name = this.name;
    this.form.className = this.className;
    this.form.action = this.action;
    return this.form;
  }
}
