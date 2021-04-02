// let selectChooseDoctor;
// createButton.addEventListener("click", () => {
//   createButton.style.display = "none";
//   popup.classList.add("popup__active");
//   popupClass.classList.add("modal-dialog-scrollable", "modal-scrollbar");
//   form.textContent = "";
//   popupClass.append(form);
//   form.append(ModalContent.render());
//   document
//     .querySelector(".popup-create-content")
//     .append(modalHeader.render(), modalBody.render(), modalFooter.render());
//   document
//     .querySelector(".popup-header")
//     .insertAdjacentHTML(
//       "afterbegin",
//       "<h5 class=modal-title>Create Visit</h5>"
//     );
//   document.querySelector(".popup-header").append(btnClose.render());
//   const createBodyClass = document.querySelector(".popup-body");
//   createBodyClass.append(chooseDoctors.render());
//   const createFooterClass = document.querySelector(".popup-footer");
//   createFooterClass.append(btnSubmit.render());
//   selectChooseDoctor = document.querySelector(".choose-doctors");
//   selectChooseDoctor.append(
//     optionDefault.render(),
//     optionCardiologist.render(),
//     optionDentist.render(),
//     optionTherapist.render()
//   );
// });

// const closeModal = document.querySelector(".close-modal");
// closeModal.addEventListener("click", () => {
//   popup.classList.remove("popup__active");
//   popupClass.textContent = "";
//   createButton.style.display = "block";
// });
