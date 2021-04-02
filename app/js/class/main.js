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
@@include("form/loginForm.js");
@@include("request/main.js");
@@include("select/main.js");
@@include("options/main.js");
@@include("textarea/main.js");
@@include("filter/main.js");
@@include("Visit/general.js");
@@include("Visit/visitCardiologist.js");
@@include("Visit/visitTherapist.js");
@@include("Visit/visitDentist.js");
@@include("form/chooseForm.js");
@@include("form/createVisit.js");
@@include("request/getCard.js");
@@include("request/posts.js");

let selectChooseDoctor;
createButton.addEventListener("click", () => {
  createButton.style.display = "none";
  popup.classList.add("popup__active");
  popupClass.classList.add("modal-dialog-scrollable", "modal-scrollbar");
  popupClass.append(ModalContent.render());
  const createContentClass = document.querySelector(".popup-create-content");
  createContentClass.append(modalHeader.render());
  const createHeaderClass = document.querySelector(".popup-header");
  createHeaderClass.insertAdjacentHTML(
    "afterbegin",
    "<h5 class=modal-title>Create Visit</h5>"
  );
  createHeaderClass.append(btnClose.render());
  let closeModal = document.querySelector(".close-modal");
  console.log(closeModal);
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
  createFooterClass.append(createPostBtn);

  document.querySelector(".btn-post").style.display = "none";

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