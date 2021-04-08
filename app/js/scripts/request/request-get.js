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
        main.append(cardBodyElement);
        cardBodyElement.append(
          cardTitleElement,
          cardSubtitleElement,
          buttonShowMoreClass.render(),
          buttonEditClass.render()
        );
        cardTitleElement.textContent = doctor;
        cardSubtitleElement.textContent = fullName;
      });
    });
}
getCard();
