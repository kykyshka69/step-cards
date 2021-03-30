class Tools {
  constructor(elem) {
    this.elem = elem;
  }
  createElement() {
    let elem = document.createElement(`${this.elem}`);
    return elem;
  }

  renderPage() {
    const wrapper = this.createElement("div");
    wrapper.className = "header navbar navbar-expand-lg navbar-light bg-light";
    wrapper.append(this.renderHeader(), this.renderMain(), this.renderFooter());
    return wrapper;
  }
  renderHeader() {
    const header = this.createElement();
    header.className = "container container-fluid container-header";
    header.append(
      this.renderHeaderLogo(),
      buttonLoginElement,
      buttonCreateElement
    );
    return header;
  }
  renderHeaderLogo() {
    const headerLogo = this.createElement();
    headerLogo.className = "header-logo navbar-brand";
    return headerLogo;
  }
  renderMain() {
    const main = this.createElement();
    main.className = "main";
    main.append(this.renderMainContainer());
    return main;
  }

  renderMainContainer() {
    const container = this.createElement();
    container.className = "main-container";

    return container;
  }
  renderFooter() {
    const footer = this.createElement();
    footer.className = "footer";
    return footer;
  }
}
