createPostBtn = btnPost.render();

createPostBtn.addEventListener("click", (e) => {
  popup.classList.remove("popup__active");
  if (document.querySelector(".choose-doctors").value === "Стоматолог") {
    createPost({
      doctor: "Стоматолог",
      purpose: document.querySelector(".visit__target").value,
      description: document.querySelector(".input_description").value,
      urgency: document.querySelector(".choose-urgency").value,
      lastvisit: document.querySelector(".input-date").value,
      fullname: document.querySelector(".input-fullName").value,
    });
  } else if (document.querySelector(".choose-doctors").value === "Кардиолог") {
    createPost({
      doctor: "Кардиолог",
      purpose: document.querySelector(".visit__target").value,
      description: document.querySelector(".input_description").value,
      urgency: document.querySelector(".choose-urgency").value,
      fullname: document.querySelector(".input-fullName").value,
      pressure: document.querySelector(".input-pressure").value,
      Indexbodymass: document.querySelector(".input-weight").value,
      cardiovascular: document.querySelector(".modal-textarea").value,
      age: document.querySelector(".input-age").value,
    });
  } else if (document.querySelector(".choose-doctors").value === "Терапевт") {
    createPost({
      doctor: "Терапевт",
      purpose: document.querySelector(".visit__target").value,
      description: document.querySelector(".input_description").value,
      urgency: document.querySelector(".choose-urgency").value,
      age: document.querySelector(".input-age").value,
      fullname: document.querySelector(".input-fullName").value,
    });
  }
});
function createPost(body) {
  fetch("https://ajax.test-danit.com/api/v2/cards", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(body),
  })
    .then((response) => {
      if (response.status === 200) {
        getCard();
        return response.text();
      }
    })
    .then((data) => console.log(data));
}
