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
        console.log(item)
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
        const cardElement = cardClass.render();
        cardElement.style.width = "18rem";
        const cardBodyElement = cardClass.renderCardBody();
        const cardTitleElement = cardClass.renderCardTitle();
        const cardSubtitleElement = cardClass.renderCardSubtitle();
        main.append(cardElement);
        cardElement.append(cardBodyElement);
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
