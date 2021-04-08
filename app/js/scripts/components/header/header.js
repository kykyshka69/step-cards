const header = document.querySelector(".header");
const headerLogo = document.querySelector(".header-logo");
const logo = document.createElement("a");
logo.innerHTML = "The Care Clinic";
logo.style.cursor = " pointer";
headerLogo.append(logo);
header.append(buttonLoginElement);

buttonLoginElement.onclick = () => {
  document.querySelector(".background-popup").classList.add("popup__active");
  buttonLoginElement.style.display = "none";
  header.append(buttonCreateElement);
  buttonCreateElement.style.display = "none";
};
