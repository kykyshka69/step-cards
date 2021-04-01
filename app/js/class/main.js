class Tools {
  constructor(elem) {
    this.elem = elem;
  }
  createElement() {
    let elem = document.createElement(`${this.elem}`);
    return elem;
  }
}

let header = document.querySelector(".container-header");
let container = document.body;

@@include("buttons/main.js");
@@include("modal/main.js");
@@include("form/main.js");
@@include("input/main.js");
@@include("label/main.js");
@@include("request/main.js");
@@include("select/main.js");
@@include("options/main.js");
@@include("textarea/main.js");
@@include("filter/main.js");

let selectChooseDoctor;
createButton.addEventListener("click", () => {
  createButton.style.display = "none";
  popup.classList.add("popup__active");
  popupClass.classList.add("modal-dialog-scrollable", "modal-scrollbar");
  popupClass.append(formAuthorization.render());
  let formClass = document.querySelector(".popup-form");
  formClass.append(ModalContent.render());
  const createContentClass = document.querySelector(".popup-create-content");
  createContentClass.append(modalHeader.render());
  const createHeaderClass = document.querySelector(".popup-header");
  createHeaderClass.insertAdjacentHTML(
    "afterbegin",
    "<h5 class=modal-title>Create Visit</h5>"
  );
  createHeaderClass.append(btnClose.render());
  let closeModal = document.querySelector(".close-modal");

  closeModal.addEventListener("click", () => {
    popup.classList.remove("popup__active");
    popupClass.textContent = "";
    createButton.style.display = "block";
  });
  createContentClass.append(modalBody.render());
  const createBodyClass = document.querySelector(".popup-body");
  createBodyClass.append(chooseDoctors.render());
  createContentClass.append(modalFooter.render());
  const createFooterClass = document.querySelector(".popup-footer");
  createFooterClass.append(btnSubmit.render());
  selectChooseDoctor = document.querySelector(".choose-doctors");
  selectChooseDoctor.append(
    optionDefault.render(),
    optionCardiologist.render(),
    optionDentist.render(),
    optionTherapist.render()
  );
});

if (localStorage.getItem("token") !== "noid" && localStorage.getItem("token")) {
  loginButton.style.display = "none";
  createButton.style.display = "block";
  popupClass.textContent = "";
} else {
  loginButton.style.display = "block";
}

document.addEventListener("click", function (event) {
  if (
    document.querySelector(".choose-doctors").value !== "Выбор доктора" &&
    document.querySelector(".choose-doctors") === event.target
  ) {
    const modalBodyClass = document.querySelector(".popup-body");
    formLogin.textContent = "";
    modalBodyClass.append(formLogin);
    formLogin.append(
      visitTarget.render(),
      visitDescription.render(),
      chooseUrgency.render(),
      labelFullName.render(),
      labelTextArea.render()
    );
    const selectUrgency = document.querySelector(".choose-urgency");
    selectUrgency.append(
      optionDefaultUrgency.render(),
      optionRegular.render(),
      optionPriority.render(),
      optionUrgent.render()
    );

    const labelTargetClass = document.querySelector(".visit-target");
    labelTargetClass.append(inputTarget.render());
    const labelDescriptionClass = document.querySelector(".description");
    labelDescriptionClass.append(inputDescription.render());
    const labelNameClass = document.querySelector(".full-name");
    labelNameClass.append(inputFullName.render());
    const labelTextAreaClass = document.querySelector(".label-textarea");
    labelTextAreaClass.append(modalTextArea.render());
  } else if (document.querySelector(".choose-doctors").value == "Терапевт") {
    console.log();
  }
});
