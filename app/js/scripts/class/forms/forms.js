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
    this.form.append(
      this.renderHeaderForm(),
      this.renderBodyForm(),
      this.renderFooterForm()
    );
    return this.form;
  }
  renderHeaderForm() {
    const header = document.createElement("div");
    header.className = "modal-header";
    header.append(this.renderHeaderTitleForm(), buttonCloseElement);
    return header;
  }
  renderHeaderTitleForm() {
    const headerTitle = document.createElement("h5");
    headerTitle.className = "modal-title";
    headerTitle.textContent = "Login";
    return headerTitle;
  }
  renderBodyForm() {
    const bodyModal = document.createElement("div");
    bodyModal.className = "modal-body";
    return bodyModal;
  }
  renderFooterForm() {
    const footerModal = document.createElement("div");
    footerModal.className = "modal-footer";
    footerModal.append(buttonSubmitElement);
    return footerModal;
  }
}
