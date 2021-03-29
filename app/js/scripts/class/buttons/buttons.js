class Buttons extends Tools {
    constructor({ elem, className, type, textContent }) {
      super(elem);
      this.className = className;
      this.type = type;
      this.textContent = textContent;
    }
    render() {
      this.btn = this.createElement();
      this.btn.className = this.className;
      this.btn.type = this.type;
      this.btn.textContent = this.textContent;
      return this.btn;
    }
}