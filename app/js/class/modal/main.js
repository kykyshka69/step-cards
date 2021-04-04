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

  cards() {
    this.div = this.createElement();
    this.div.className = this.className;
    return this.div;
  }
}

const modalCards = new Modal({
  elem: "div",
  className: "card",
});
const modalWindow = new Modal({
  elem: "div",
  className: "background-popup modal",
});

const ModalContent = new Modal({
  elem: "div",
  className: "popup-create-content modal-content",
});

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
});

container.append(modalWindow.render());
let popup = document.querySelector(".background-popup");
let popupClass = document.querySelector(".popup");
popupClass.classList.add("modal-dialog", "modal-dialog-centered");

// document.body.addEventListener("change", function (event) {
//   if (
//     event.target === document.querySelector(".choose-doctors") &&
//     document.querySelector(".choose-doctors").value !== "Выбор доктора"
//   ) {
//     const modalBodyClass = document.querySelector(".popup-body");
//     form.textContent = "";
//     modalBodyClass.append(form);
//     generalVisit.render();
//     document.querySelector(".btn-post").style.display = "block";
//   }
//   if (
//     event.target === document.querySelector(".choose-doctors") &&
//     document.querySelector(".choose-doctors").value === "Кардиолог"
//   ) {
//     form.textContent = "";
//     generalVisit.render();
//     cardiologist.render();
//   }
//   if (
//     event.target === document.querySelector(".choose-doctors") &&
//     document.querySelector(".choose-doctors").value === "Терапевт"
//   ) {
//     form.textContent = "";
//     generalVisit.render();
//     terapevt.render();
//   }
//   if (
//     event.target === document.querySelector(".choose-doctors") &&
//     document.querySelector(".choose-doctors").value === "Стоматолог"
//   ) {
//     form.textContent = "";
//     generalVisit.render();
//     dentist.render();
//   }
// });
