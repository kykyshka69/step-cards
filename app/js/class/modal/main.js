class Modal extends Tools {
  constructor({ elem, className }) {
    super(elem);
    this.className = className;
  }
  render() {
    this.div = this.createElement();
    this.div.className = this.className;
    this.div.insertAdjacentHTML(
      "afterbegin",
      "<div class=popup><span class=popup__close>крестик</span></div>"
    );
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
popupClass.classList.add("modal-dialog", "modal-dialog-centered");
document.addEventListener("click", function (event) {
  const select = document.querySelectorAll(".choose-doctors");
  select.forEach(function (item) {
    if (event.target === item && item.value !== "Выбор доктора") {
      const modalBodyClass = document.querySelector(".popup-body");
      modalBodyClass.append(
        visitTarget.render(),
        visitDescription.render(),
        labelFullName.render(),
        labelTextArea.render()
      );
      const labelTargetClass = document.querySelector(".visit-target");
      labelTargetClass.append(inputTarget.render());
      const labelDescriptionClass = document.querySelector(".description");
      labelDescriptionClass.append(inputDescription.render());
      modalBodyClass.append(chooseUrgency.render());
      const selectUrgency = document.querySelector(".choose-urgency");
      selectUrgency.append(
        optionDefaultUrgency.render(),
        optionRegular.render(),
        optionPriority.render(),
        optionUrgent.render()
      );
      const labelNameClass = document.querySelector(".full-name");
      labelNameClass.append(inputFullName.render());
      const labelTextAreaClass = document.querySelector(".label-textarea");
      labelTextAreaClass.append(modalTextArea.render());
    }
  });
});
