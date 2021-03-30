const header = document.querySelector(".header");
const headerLogo = document.querySelector(".header-logo");
const logo = document.createElement("a");
logo.innerHTML = "The Care Clinic";
logo.style.cursor = " pointer";
headerLogo.append(logo);
buttonCreateElement.style.display = "none";
buttonLoginElement.onclick = () => {
  document.body.style.background = "rgba(0, 0, 0, 0.4)";
  document.querySelector(".background-popup").classList.add("popup__active");
  buttonLoginElement.style.display = "none";
  buttonCreateElement.style.display = "none";
};

buttonCreateElement.onclick = (e) => {
  document.querySelector(".background-popup").classList.add("popup__active");
  document.querySelector(".modal-body").innerHTML = "";
  document.querySelector(".modal-body").append(chooseDoctorsElement);
  document.querySelector(".modal-title").textContent = "Choose Doctors";
  buttonSubmitElement.remove();
  document.querySelector(".modal-header").append(buttonCloseElement);
};
