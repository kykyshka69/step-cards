class Tools {
  constructor(elem, className) {
    this.elem = elem;
    this.className = className;
  }
  createElement() {
    let elem = document.createElement(`${this.elem}`);
    return elem;
  }
}

