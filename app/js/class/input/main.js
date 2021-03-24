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

const inputLogin = new Input({
    name: "login",
    className: "input-login form-control",
    type: "email",
    placeholder: "Your email",
    elem: "input",
  });
  
  const inputPassword = new Input({
    name: "pasword",
    className: "input-password form-control",
    type: "password",
    placeholder: "Your password",
    elem: "input",
  });



  const inputTarget = new Input ({
    name: "visit-target",
    className: "visit__target form-control",
    type: "text",
    placeholder: "Your visit target", 
    elem: 'input'
  });
  
  
  const inputDescription = new Input ({
    name: 'Description',
    className: 'input_description form-control',
    type: 'text',
    placeholder: 'Description',
    elem: 'input'
  });
  
  const inputFullName = new Input ({
    name: 'fullName',
    className: 'input-fullName form-control',
    type: 'text',
    placeholder: 'Your full name',
    elem: 'input'
  });