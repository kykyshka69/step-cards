class Tools {
    constructor(elem) {
      this.elem = elem;
    }
    createElement() {
      let elem = document.createElement(`${this.elem}`);
      return elem;
    }
  }

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

class Modal extends Tools {
    constructor({ elem, className }) {
      super(elem);
      this.className = className;
    }
    render() {
      this.div = this.createElement();
      this.div.className = this.className;
      this.div.insertAdjacentHTML("afterbegin", "<div class=popup><span class=popup__close>крестик</span></div>");
      return this.div;
    }
}

class Form extends Tools {
    constructor({ elem, action, name, className }) {
      super(elem);
      (this.name = name), (this.className = className), (this.action = action);
    }
    render() {
      this.form = this.createElement();
      this.form.name = this.name;
      this.form.className = this.className;
      this.form.action = this.action;
      return this.form;
    }
}

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

class Input extends Tools {
    constructor({ elem, name, className, type, placeholder }) {
      super(elem);
      (this.name = name),
        (this.className = className),
        (this.type = type),
        (this.placeholder = placeholder);
    }
    render() {
      this.input = this.createElement();
      this.input.required = true;
      this.input.name = this.name;
      this.input.className = this.className;
      this.input.type = this.type;
      this.input.placeholder = this.placeholder;
      return this.input;
    }
}