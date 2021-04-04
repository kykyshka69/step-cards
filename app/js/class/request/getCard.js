document.body.append(modalCards.cards());
function getCard(e) {
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
      let test = [data];
      data.forEach((element, i) => {
        const {
          doctor = "",
          purpose = "",
          description = "",
          urgency = "",
          fullname = "",
          pressure = "",
          Indexbodymass = "",
          cardiovascular = "",
          age = "",
          lastvisit = "",
          id,
        } = element;

        document.querySelector(".card").innerHTML += `
          <div class="card-body">
          <div class= "row card-title-block justify-content-between">
            <h5 class="card-title col-sm">${doctor}</h5>
            <button  class="btn  btn-delete  btn-sm col-1">X</button>
            </div>
            <h6 class="card-subtitle mb-2 text-muted">${fullname}</h6>
            <div class="content-info-patient">
             <p class="card-text card-description">${description}</p>
            <p class="card-text card-purpose">${purpose}</p>
            <p class="card-text card-urgency">${urgency}</p>
            <p class="card-text card-pressure">${pressure}</p>
            <p class="card-text card-index-body-mass">${Indexbodymass}</p>
            <p class="card-text card-cardio">${cardiovascular}</p>
            <p class="card-text card-age">${age}</p>
            <p class="card-text card-last-visit">${lastvisit}</p>
            </div>
            <div class="row buttons-cards justify-content-between">
            <button  class="btn  btn-show-more btn-primary btn-sm col-5">Показать больше</button>
            <button class="btn btn-edit  btn-primary btn-sm col-5">Редактировать</button>
            </div>
          </div>
     `;

        const btnShowFullInfo = document.querySelectorAll(".btn-show-more");
        for (let index = 0; index < btnShowFullInfo.length; index++) {
          const itemBtn = btnShowFullInfo[index];
          itemBtn.addEventListener("click", (e) => {
            e.target.parentNode.previousElementSibling.classList.add("active");
          });
        }
      });

      const btnDeleteCards = document.querySelectorAll(".btn-delete");
      for (let index = 0; index < btnDeleteCards.length; index++) {
        const btnDelete = btnDeleteCards[index];
        btnDelete.addEventListener("click", (e) => {
          fetch(`https://ajax.test-danit.com/api/v2/cards/1`, {
            method: "DELETE",

            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          // console.log(e.target.parentNode.parentNode.remove());
          console.log("13");
        });
      }
    });
}
getCard();
