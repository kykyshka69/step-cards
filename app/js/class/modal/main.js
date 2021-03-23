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

const modalWindow = new Modal({
    elem: "div",
    className: "background-popup",
  });

container.append(modalWindow.render());
let popup = document.querySelector(".background-popup");
let popupClass = document.querySelector(".popup");




class regModal extends Tools {
  constructor({elem, className}) {
    super(elem);
    this.className = className;
  }
  render() {
    this.div = this.createElement();
    this.div.className = this.className;
    this.div.insertAdjacentHTML('afterbegin', '<div class=regLabel><form name=registration class=reg-form>');
    return this.div
  }
}

const modalReg = new regModal({
  elem: 'div',
  className: 'reg-form'
});

container.append(modalReg.render());
let regForm = document.querySelector('.reg-form');
let regLabel = document.querySelector('.regLabel');


document.addEventListener('click', function (event) {
    const select = document.querySelectorAll('.choose-doctors');
    select.forEach(function (item) {
        if (event.target === item && item.value !== 'Выбор доктора') {
          regForm.classList.add('form__active');
      }
    })
  });



