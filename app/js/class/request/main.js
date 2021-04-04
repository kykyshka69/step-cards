const submitBtn = document.querySelector(".btn-submit");
submitBtn.addEventListener("click", () => {
  fetch("https://ajax.test-danit.com/api/v2/cards/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: document.querySelector(".input-login").value,
      password: document.querySelector(".input-password").value,
    }),
  })
    .then((response) => {
      if (response.status == 401) {
        alert("Incorrect Login or Password");
        return "noid";
      } else if (response.status == 200) {
        loginButton.style.display = "none";
        createButton.style.display = "block";
        popup.classList.remove("popup__active");
        popupClass.textContent = "";
        return response.text();
      }
    })
    .then((data) => {
      if (data !== undefined) {
        localStorage.setItem("token", data);
      }
    });
});
