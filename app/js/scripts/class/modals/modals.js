class Modal extends Tools {
  constructor({ elem, className }) {
    super(elem);
    this.className = className;
  }
  render() {
    this.div = this.createElement();
    this.div.className = this.className;
    this.div.append(this.renderContainerModal());
    return this.div;
  }

  renderClear(){
    this.div = this.createElement();
    this.div.className = this.className;
    return this.div;
  }

  renderInputGroup(){
    this.div = this.createElement();
    this.div.className = this.className;
    return this.div;
  }

  renderContainerModal() {
    const container = this.createElement("div");
    container.className =
      "popup-create-content modal-dialog modal-dialog-centered modal-dialog-scrollable modal-scrollbar";
    container.append(formElement);
    return container;
  }
}
