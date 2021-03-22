class Tools {
  constructor(elem) {
    this.elem = elem;
  }
  createElement() {
    let elem = document.createElement(`${this.elem}`);
    return elem;
  }
}

let header = document.querySelector(".header");
let container = document.querySelector(".container");

@@include("buttons/main.js");
@@include("modal/main.js");
@@include("form/main.js");
@@include("input/main.js");
@@include("label/main.js");
@@include("request/main.js");
@@include("select/main.js");
@@include("options/main.js");

createButton.addEventListener("click", () => {
  popup.classList.add("popup__active");
  popupClass.append(chooseDoctors.render());
  let selectChooseDoctor = document.querySelector(".choose-doctors");
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
