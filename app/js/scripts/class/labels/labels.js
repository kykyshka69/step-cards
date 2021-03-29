class Label extends Tools {
    constructor({ elem, name, className }) {
      super(elem);
      this.className = className;
      this.name = name;
    }
    render() {
      this.label = this.createElement();
      this.label.name = this.name;
      this.label.className = this.className;
      return this.label;
    }
  }
  