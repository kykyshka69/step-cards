///1cca22df-a320-4624-903d-3cc066c921ad///////////////////////////////
const submitBtn = document.querySelector(".btn-submit");
submitBtn.onclick = () => {
  fetch("https://ajax.test-danit.com/api/v2/cards/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: inputLog.value,
      password: inputPass.value,
    }),
  })
    .then((response) => {
      if (response.status !== 200) {
        alert("Incorrect Login or Password");
        return "noid";
      } else {
        header.append(btnCreate.render());
        loginButton.style.display = "none";
        popup.classList.remove("popup__active");
        return response.text();
      }
    })
    .then((data) => {
      localStorage.setItem("token", data);
    });
  console.log(inputLog.value);
  console.log(inputPass.value);
};