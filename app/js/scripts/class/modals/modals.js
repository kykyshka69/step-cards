class Modal extends Tools {
    constructor({ elem, className }) {
      super(elem);
      this.className = className;
    }
    render() {
      this.div = this.createElement();
      this.div.className = this.className;
      this.div.insertAdjacentHTML("afterbegin", "<div class=popup></div>");
      return this.div;
    }
  }