class Options extends Tools {
  constructor({ elem, className, disabled, textContent, selected }) {
    super(elem);
    this.className = className;
    this.disabled = disabled;
    this.textContent = textContent;
    this.selected = selected;
  }
  render() {
    this.option = this.createElement();
    this.option.className = this.className;
    this.option.disabled = this.disabled;
    this.option.textContent = this.textContent;
    this.option.selected = this.selected;
    return this.option;
  }
}
