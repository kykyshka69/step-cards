const submitBtn = document.querySelector(".btn-submit");
submitBtn.onclick = () => {
  const loginValue = document.querySelector(".input-login");
  const passwordValue = document.querySelector(".input-password");
  fetch("https://ajax.test-danit.com/api/v2/cards/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: loginValue.value,
      password: passwordValue.value,
    }),
  })
    .then((response) => {
      if (response.status !== 200 ) {
        // loginValue.style.borderColor = "red";
        // passwordValue.style.borderColor = "red";
        alert("Incorrect Login or Password");
        return "noid";
      } else {
        loginButton.style.display = "none";
        createButton.style.display = "block";
        popup.classList.remove("popup__active");
        return response.text();
      }
    })
    .then((data) => {
      localStorage.setItem("token", data);
    });
  console.log(loginValue.value);
  console.log(passwordValue.value);
};
