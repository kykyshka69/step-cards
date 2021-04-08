buttonPostElement.onclick = (e) => {
  e.preventDefault();
  document.querySelector(".background-popup").classList.remove("popup__active");

  if (chooseDoctorsElement.value === "Dentist") {
    createPost({
      doctor: "Стоматолог",
      purpose: inputTargetElement.value,
      description: inputDescriptionElement.value,
      urgency: chooseUrgencyElement.value,
      lastVisit: inputLastVisitElement.value,
      fullName: inputFullNameElement.value,
    });
  }else if (chooseDoctorsElement.value=== "Cardiologist") {
    createPost({
      doctor: "Кардиолог",
      purpose: inputTargetElement.value,
      description: inputDescriptionElement.value,
      urgency: chooseUrgencyElement.value,
      fullName: inputFullNameElement.value,
      pressure: inputPressureElement.value,
      IndexBodyMass: inputWeightElement.value,
      cardioVascular: textAreaElement.value,
      age: inputAgeElement.value,
    });
  // } else if (document.querySelector(".choose-doctors").value === "Терапевт") {
  //   createPost({
  //     doctor: "Терапевт",
  //     purpose: document.querySelector(".visit__target").value,
  //     description: document.querySelector(".input_description").value,
  //     urgency: document.querySelector(".choose-urgency").value,
  //     age: document.querySelector(".input-age").value,
  //     fullname: document.querySelector(".input-fullName").value,
  //   });
  // }
};
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
        return response.text();
      }
    })
    .then((data) => console.log(data));
}
