const inputLoginClass = new Input({
    name: "login",
    className: "input-login form-control",
    type: "email",
    placeholder: "Your email",
    elem: "input",
});
  
  
const inputTargetClass = new Input ({
    name: "visit-target",
    className: "visit__target form-control",
    type: "text",
    placeholder: "Цель визита",
    elem: 'input',
});
  
const inputDescriptionClass = new Input ({
    name: 'Description',
    className: 'input_description form-control',
    type: 'text',
    placeholder: 'Краткое описание визита',
    elem: 'input'
});
  
const inputFullNameClass = new Input ({
    name: 'fullName',
    className: 'input-fullName form-control',
    type: 'text',
    placeholder: 'ФИО',
    elem: 'input'
});
  
const inputAgeClass = new Input({
    name: "fullName",
    className: "input-age form-control",
    type: "text",
    placeholder: "Your age",
    elem: "input",
});
  
const inputLoginElement = inputLoginClass.render();
const inputTargetElement = inputTargetClass.render();
const inputDescriptionElement = inputDescriptionClass.render();
const inputFullNameElement = inputFullNameClass.render();
const inputAgeElement = inputAgeClass.render();
