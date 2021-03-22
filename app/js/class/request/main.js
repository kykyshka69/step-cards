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
  console.log(loginValue.value);
  console.log(passwordValue.value);
};

if (localStorage.getItem("token")){
  loginButton.style.display = "none";
  header.append(btnCreate.render());
}