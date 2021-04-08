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
          id,
        } = item;
        const cardBodyElement = cardBodyClass.render();
        const cardTitleElement = cardBodyClass.renderCardTitle();
        const cardSubtitleElement = cardBodyClass.renderCardSubtitle();
        const buttonEditElement = buttonEditClass.render();
        const buttonShowMoreElement = buttonShowMoreClass.render();
        const cardTextElement = cardBodyClass.renderCardText();
        main.append(cardBodyElement);
        cardBodyElement.append(
          cardTitleElement,
          cardSubtitleElement,
          cardTextElement,
          buttonShowMoreElement,
          buttonEditElement
        );
        cardTitleElement.textContent = doctor;
        cardSubtitleElement.textContent = fullName;

        buttonShowMoreElement.onclick = () => {};
      });
    });
}
getCard();
