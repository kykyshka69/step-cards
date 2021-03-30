buttonSubmitElement.onclick = () => {
  fetch("https://ajax.test-danit.com/api/v2/cards/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: inputLoginElement.value,
      password: inputPasswordElement.nvalue,
    }),
  })
    .then((response) => {
      console.log(response.status);
      if (response.status == 401 ) {
        alert("Incorrect Login or Password");
        return "noid";
      } else if (response.status == 200) {
        buttonLoginElement.style.display = "none";
        buttonCreateElement.style.display = "block";
        popup.classList.remove("popup__active");
        popupClass.textContent = "";
        return response.text();
      }
    })
    .then((data) => {
      if (data !== undefined){
        localStorage.setItem("token", data);
      }
    });
  console.log(inputLoginElement.value);
  console.log(inputPasswordElement.value);
};
