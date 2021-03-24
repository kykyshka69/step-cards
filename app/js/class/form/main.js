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

const formAuthorization = new Form({
    action: "#",
    name: "authorization",
    className: "popup-form modal-content",
    elem: "form",
});

popupClass.append(formAuthorization.render());
const formLogin = document.querySelector(".popup-form");
formLogin.append(modalHeader.render());
const modalHeaderClass = document.querySelector(".popup-header");
modalHeaderClass.insertAdjacentHTML("afterbegin", "<h5 class=modal-title>Login</h5>");
modalHeaderClass.append(btnClose.render());
formLogin.append(modalBody.render());
formLogin.append(modalFooter.render());
let modalFooterClass = document.querySelector(".popup-footer");
modalFooterClass.append(btnSubmit.render())
let closeButton = document.querySelector(".btn-close");
closeButton.addEventListener('click', () => {
    popup.classList.remove('popup__active');
    loginButton.style.display = 'block';
});

