buttonCloseElement.onclick = (e) => {
    document.querySelector(".background-popup").classList.remove("popup__active");
    document.body.style.background = "";
    chooseDoctorsElement.value = "Выбор доктора";
    if (
      localStorage.getItem("token") !== "noid" &&
      localStorage.getItem("token")
    ) {
      buttonCreateElement.style.display = "block";
    } else {
      buttonLoginElement.style.display = "block";
    }
  };
  