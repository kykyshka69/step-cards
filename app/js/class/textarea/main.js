class textArea extends Tools {
    constructor({ elem, name, className, maxlength, placeholder }) {
      super(elem);
      (this.name = name),
        (this.className = className),
        (this.maxlength = maxlength),
        (this.placeholder = placeholder);
    }
    render() {
      this.textarea = this.createElement();
      this.textarea.required = true;
      this.textarea.name = this.name;
      this.textarea.className = this.className;
      this.textarea.maxlength = this.maxlength;
      this.textarea.placeholder = this.placeholder;
      return this.textarea;
    }
  }
  
  const modalTextArea = new textArea({
    name: "textarea",
    className: "modal-textarea form-control",
    textarea: "150",
    placeholder: "Введите текст, максимальное кол-во букв 150",
    elem: "textarea",
  });
  
//   test.append(modalTextArea.render());