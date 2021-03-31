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
      const main = document.querySelector(".main-container");
      main.className = "row justify-content-md-center gap-auto";
      data.forEach((item, i) => {
        const {
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
        cardElement.style.width = "18rem";
        const cardBodyElement = cardClass.renderCardBody();
        const cardTitleElement = cardClass.renderCardTitle();
        const cardSubtitleElement = cardClass.renderCardSubtitle();
        cardTitleElement.textContent = doctor;
        cardSubtitleElement.textContent = fullName;
        cardBodyElement.append(cardTitleElement, cardSubtitleElement);
        const cardBodyElement__Content = cardClass.renderCardBody();
              cardBodyElement.append(cardBodyElement__Content);
              cardBodyElement__Content.className = "card-body-content";
              cardBodyElement__Content.style.display = "none";
        const cardBodyElement__Button = cardClass.renderCardBody();
        cardBodyElement__Button.className = "modal-footer"
        const buttonEditElement = buttonEditClass.render();
        const buttonShowMoreElement = buttonShowMoreClass.render();
        const buttonHideInfoElement = buttonHideInfoClass.render();
        main.append(cardElement);
        cardElement.append(cardBodyElement);
        cardElement.append(cardBodyElement__Button);
        cardBodyElement__Button.append(
          buttonShowMoreElement,
          buttonHideInfoElement,
          buttonEditElement
        );
        buttonShowMoreElement.onclick = (e) => {
          arr.forEach((el, i) => {
            cardBodyElement__Content.style.display = "block"
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
          document.querySelector(".background-popup").classList.add("popup__active");
          formElement.innerHTML = "";
          modalHeaderElement.innerHTML = "";
          modalHeaderTitleElement = fromClass.renderHeaderTitleForm();
          console.log(modalHeaderTitleElement)
          modalHeaderTitleElement.textContent = "Choose an action";
          modalHeaderElement.append(modalHeaderTitleElement, buttonCloseElement)
          modalFooterElement.innerHTML = "";
          formElement.append(modalHeaderElement, modalFooterElement)
          modalBodyElement.insertAdjacentHTML("afterbegin", `<h6 class="card-subtitle mb-2 text-muted">Что вы хотите сделать?</h6>`)
          modalBodyElement.classList.add("justify-content-md-center")
          modalFooterElement.append(buttonDeleteElement, buttonEditCardElement)
        }
      });
    });
}
getCard();
