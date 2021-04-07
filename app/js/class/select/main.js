class Select extends Tools {
    constructor({ elem, className }) {
      super(elem);
      this.className = className;
    }
    render() {
      this.select = this.createElement();
      this.select.className = this.className;
      return this.select;
    }
  }
  const chooseDoctors = new Select({
    elem: "select",
    className: "choose-doctors",
  });
