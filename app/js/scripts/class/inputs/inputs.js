class Input extends Tools {
  constructor({ elem, name, className, type, placeholder }) {
    super(elem);
    (this.name = name),
      (this.className = className),
      (this.type = type),
      (this.placeholder = placeholder);
  }
  render() {
    this.input = this.createElement();
    this.input.required = true;
    this.input.name = this.name;
    this.input.className = this.className;
    this.input.type = this.type;
    this.input.placeholder = this.placeholder;
    return this.input;
  }
}
