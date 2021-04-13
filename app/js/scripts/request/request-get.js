const main = document.querySelector(".main-container");
function getCard() {
  fetch("https://ajax.test-danit.com/api/v2/cards", {
    method: "GET",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      main.className = "row justify-content-md-center gap-auto";
      data.forEach((item, i) => {
        console.log(item);
        const {
          id = "",
          doctor = "",
          purpose = "",
          description = "",
          urgency = "",
          fullName = "",
          pressure = "",
          IndexBodyMass = "",
          cardioVascular = "",
          age = "",
          lastVisit = "",
        } = item;
        let arr = [
          purpose,
          description,
          urgency,
          pressure,
          IndexBodyMass,
          cardioVascular,
          age,
          lastVisit,
        ];

        const cardElement = cardClass.render();
        const cardBodyElement = cardClass.renderCardBody();
        const cardTitleElement = cardClass.renderCardTitle();
        const cardSubtitleElement = cardClass.renderCardSubtitle();
        cardTitleElement.textContent = doctor;
        cardSubtitleElement.textContent = fullName;
        const cardBodyElement__Content = cardClass.renderCardBody();
        cardBodyElement.append(
          cardTitleElement,
          cardSubtitleElement,
          cardBodyElement__Content
        );
        cardBodyElement__Content.className = "card-body-content hide";
        const cardBodyElement__Button = cardClass.renderCardBody();
        cardBodyElement__Button.className = "modal-footer";
        const buttonEditElement = buttonEditClass.render();
        const buttonShowMoreElement = buttonShowMoreClass.render();
        const buttonHideInfoElement = buttonHideInfoClass.render();
        main.append(cardElement);
        cardElement.append(cardBodyElement, cardBodyElement__Button);
        cardBodyElement__Button.append(
          buttonShowMoreElement,
          buttonHideInfoElement,
          buttonEditElement
        );
        buttonShowMoreElement.onclick = (e) => {
          arr.forEach((el, i) => {
            cardBodyElement__Content.style.display = "block";
            const cardTextElement = cardClass.renderCardText();
            cardTextElement.textContent = el;
            cardBodyElement__Content.append(cardTextElement);
            buttonShowMoreElement.classList.add("hide");
            buttonHideInfoElement.classList.remove("hide");
            buttonHideInfoElement.onclick = (e) => {
              cardBodyElement__Content.textContent = "";
              buttonHideInfoElement.classList.add("hide");
              buttonShowMoreElement.classList.remove("hide");
            };
          });
        };
        buttonEditElement.onclick = (e) => {
          document
            .querySelector(".background-popup")
            .classList.add("popup__active");
          modalTitleElement.textContent = "Choose an action";
          modalBodyElement.textContent = "";
          modalBodyElement.append(chooseDoctorsElement);
          visitClass.render();
          chooseDoctorsElement.disabled = true;
          modalFooterElement.innerHTML = "";
          modalFooterElement.append(buttonDeleteElement, buttonEditCardElement);
          if (cardTitleElement.textContent == "Кардиолог") {
            visitCardiologistClass.render();
            chooseDoctorsElement.value = "Cardiologist";
            inputFullNameElement.value = fullName;
            inputTargetElement.value = purpose;
            inputDescriptionElement.value = description;
            chooseUrgencyElement.value = urgency;
            inputPressureElement.value = pressure;
            inputWeightElement.value = IndexBodyMass;
            textAreaElement.value = cardioVascular;
            inputAgeElement.value = age;
          } else if (cardTitleElement.textContent === "Стоматолог") {
            visitDentistClass.render();
            chooseDoctorsElement.value = "Dentist";

            inputFullNameElement.value = fullName;
            inputTargetElement.value = purpose;
            inputDescriptionElement.value = description;
            chooseUrgencyElement.value = urgency;
            inputLastVisitElement.value = lastVisit;
          } else if (cardTitleElement.textContent === "Терапевт") {
            visitTherapistClass.render();
            chooseDoctorsElement.value = "Therapist";
            chooseDoctorsElement.disabled;
            inputFullNameElement.value = fullName;
            inputTargetElement.value = purpose;
            inputDescriptionElement.value = description;
            chooseUrgencyElement.value = urgency;
            inputAgeElement.value = age;
          }
        };

        buttonDeleteElement.onclick = (e) => {
          fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }).then((response) => {
            console.log(response.status);
            if (response.status == 200) {
              main.textContent = "";
              getCard();
              alert();
            }
          });
          document
            .querySelector(".background-popup")
            .classList.remove("popup__active");
          modalFooterElement.innerHTML = "";
          chooseDoctorsElement.value = "Выбор доктора";
        };
        function putPost(body) {
          fetch(`https://ajax.test-danit.com/api/v2/cards/${id}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            body: JSON.stringify(body),
          })
            .then((response) => {
              if (response.status === 200) {
                alert("Карточка изменена");
                location.reload();
                return response.text();
              }
            })
            .then((data) => console.log(data));
        }
        buttonEditCardElement.onclick = (event) => {
          event.preventDefault();
          document
            .querySelector(".background-popup")
            .classList.remove("popup__active");
          if (chooseDoctorsElement.value === "Dentist") {
            putPost({
              doctor: "Стоматолог",
              purpose: inputTargetElement.value,
              description: inputDescriptionElement.value,
              urgency: chooseUrgencyElement.value,
              lastVisit: inputLastVisitElement.value,
              fullName: inputFullNameElement.value,
            });
          } else if (chooseDoctorsElement.value === "Cardiologist") {
            putPost({
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
            putPost({
              doctor: "Терапевт",
              purpose: inputTargetElement.value,
              description: inputDescriptionElement.value,
              urgency: chooseUrgencyElement.value,
              age: inputAgeElement.value,
              fullName: inputFullNameElement.value,
            });
          }
        };
      });
    });
}
getCard();
