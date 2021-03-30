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
        const cardBodyElement__Content = cardClass.renderCardBody();
        cardBodyElement.insertAdjacentElement("afterend", cardBodyElement__Content);
        const cardBodyElement__Button = cardClass.renderCardBody();
        cardBodyElement__Button.className = "d-grid gap-2"
        const cardTitleElement = cardClass.renderCardTitle();
        const cardSubtitleElement = cardClass.renderCardSubtitle();
        const buttonEditElement = buttonEditClass.render();
        const buttonShowMoreElement = buttonShowMoreClass.render();
        const buttonHideInfoElement = buttonHideInfoClass.render();
        main.append(cardElement);
        cardElement.append(cardBodyElement);
        cardElement.append(cardBodyElement__Button);
        cardBodyElement.append(cardTitleElement, cardSubtitleElement);
        cardBodyElement__Button.append(
          buttonShowMoreElement,
          buttonHideInfoElement,
          buttonEditElement
        );
        cardTitleElement.textContent = doctor;
        cardSubtitleElement.textContent = fullName;

        buttonShowMoreElement.onclick = (e) => {
          arr.forEach((el, i) => {
            const cardTextElement = cardClass.renderCardText();
            cardTextElement.textContent = el;
            cardSubtitleElement.insertAdjacentElement(
              "afterend",
              cardTextElement
            );
            buttonShowMoreElement.classList.add("hide");
            buttonHideInfoElement.classList.remove("hide");
            buttonHideInfoElement.onclick = (e) => {
              buttonHideInfoElement.classList.add("hide");
              buttonShowMoreElement.classList.remove("hide");
              document
                .getElementsByClassName(".card-text")
                .classList.add("hide");
            };
          });
        };
      });
    });
}
getCard();
