buttonPostElement.onclick = (e) => {
  modalBodyElement.innerHTML = "";
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
  } else if (chooseDoctorsElement.value === "Cardiologist") {
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
  } else if (chooseDoctorsElement.value === "Therapist") {
    createPost({
      doctor: "Терапевт",
      purpose: inputTargetElement.value,
      description: inputDescriptionElement.value,
      urgency: chooseUrgencyElement.value,
      age: inputAgeElement.value,
      fullName: inputFullNameElement.value,
    });
  }
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
        alert("Карточка создана");
        location.reload();
        return response.text();
      }
    })
    .then((data) => console.log(data));
}
