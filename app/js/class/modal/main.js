class Modal extends Tools {
    constructor({ elem, className }) {
      super(elem);
      this.className = className;
    }
    render() {
      this.div = this.createElement();
      this.div.className = this.className;
      this.div.insertAdjacentHTML("afterbegin", "<div class=popup></div>");
      return this.div;
    }
}

const modalWindow = new Modal({
    elem: "div",
    className: "background-popup modal",
});

const ModalContent = new Modal({
  elem: "div",
  className: "popup-create-content modal-content",
})

const modalHeader = new Modal({
  elem: "div",
  className: "popup-header modal-header",
});

const modalBody = new Modal({
  elem: "div",
  className: "popup-body modal-body",
});

const modalContainer = new Modal({
  elem: "div",
  className: "container",
});

const modalFooter = new Modal({
  elem: "div",
  className: "popup-footer modal-footer",
});

const filterWindow = new Modal({
  elem: "div",
  className: "modal modal-filter",
})

let check = 0;
container.append(modalWindow.render());
let popup = document.querySelector(".background-popup");
let popupClass = document.querySelector(".popup");
popupClass.classList.add("modal-dialog", "modal-dialog-centered");

document.addEventListener('click', function (event) {
    const select = document.querySelectorAll('.choose-doctors');
    select.forEach(function (item) {
        if (event.target === item && item.value !== 'Выбор доктора' && check == 0) {
        const modalBodyClass = document.querySelector(".popup-body");
        modalBodyClass.append(visitTarget.render(), visitDescription.render(), labelFullName.render());
        const labelTargetClass = document.querySelector(".visit-target");
        labelTargetClass.append(inputTarget.render());
        const labelDescriptionClass = document.querySelector(".description");
        labelDescriptionClass.append(inputDescription.render());
        modalBodyClass.append(chooseUrgency.render());
        const selectUrgency = document.querySelector(".choose-urgency");
        selectUrgency.append(optionDefaultUrgency.render(), optionRegular.render(), optionPriority.render(), optionUrgent.render());
        const labelNameClass = document.querySelector(".full-name");
        labelNameClass.append(inputFullName.render());
        check = 1;
        check++;
        console.log(check);
      } if (event.target === item && item.value == 'Кардиолог' && check == 2) {
        const modalBodyClass = document.querySelector(".popup-body");
        modalBodyClass.append(pressure.render(), labelWeight.render(), age.render(), labelTextArea.render());
        const labelTextAreaClass = document.querySelector(".label-textarea");
        labelTextAreaClass.append(modalTextArea.render());
        const pressureLabel = document.querySelector(".label-pressure");
        pressureLabel.append(inputPressure.render());
        const weightLabel = document.querySelector('.label-weight');
        weightLabel.append(inputWeight.render())
        const ageLabel = document.querySelector('.label-age');
        ageLabel.append(inputAge.render());
        check = 1;
        console.log(check);
      } else if (event.target === item && item.value == 'Выбор доктора') {
        const w = document.querySelector('.label-weight');
        const ta = document.querySelector(".label-textarea");
        const pr = document.querySelector(".label-pressure");
        const age = document.querySelector('.label-age');
        const name = document.querySelector(".full-name");
        const select = document.querySelector(".choose-urgency");
        const desc = document.querySelector(".description");
        const tar = document.querySelector(".visit-target");
        const arr = [w, ta, pr, age, name, select, desc, tar];
        arr.forEach(function (i) {
          // i.style.display = 'none';
        })
        check = 0;
        console.log(check);
      }
    })
  });
 