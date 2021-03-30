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
    wrapper.append(this.renderHeader(), this.renderFooter());
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


{/* <div class="card-body">
<h5 class="card-title">Card title</h5>
<h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<a href="#" class="card-link">Card link</a>
<a href="#" class="card-link">Another link</a>
</div>  */}