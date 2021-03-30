class Modal extends Tools {
  constructor({ elem, className, form}) {
    super(elem);
    this.className = className;
    this.form = form;
  }
  render() {
    this.div = this.createElement();
    this.div.className = this.className;
    this.div.append(this.renderContainerModal());
    return this.div;
  }

  renderContainerModal() {
    const container = this.createElement("div");
    // const formElement = this.form;
    console.log(this.form)
    container.className = "popup-create-content modal-dialog modal-dialog-centered";
    container.append(
      this.form
      );
    return container;
  }
}
