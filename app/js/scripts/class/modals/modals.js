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

  renderContainerModal() {
    const container = this.createElement("div");
    container.className = " popup-create-content modal-content";
    container.append(
      this.renderHeaderModal(),
      this.renderBodyModal(),
      this.renderFooterModal()
    );
    return container;
  }

  renderHeaderModal() {
    const header = this.createElement("div");
    header.className = "modal-header";
    header.append(this.renderHeaderTitleModal(), buttonCloseElement);
    return header;
  }
  renderHeaderTitleModal() {
    const headerTitle = this.createElement("h5");
    headerTitle.className = "modal-title";
    headerTitle.textContent = "Login";
    return headerTitle;
  }
  renderBodyModal() {
    const bodyModal = this.createElement("div");
    bodyModal.className = "modal-body";
    return bodyModal;
  }
  renderFooterModal() {
    const footerModal = this.createElement("div");
    footerModal.className = "modal-body";
    footerModal.append(buttonSubmitElement);
    return footerModal;
  }
}
