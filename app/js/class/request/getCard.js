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
      data.forEach((element) => {
        const {
          doctor,
          purpose,
          description,
          urgency,
          fullname,
          pressure,
          Indexbodymass,
          cardiovascular,
          age,
          lastvisit,
        } = element;
        document.body.innerHTML += `<div class="card" style="width: 22rem;">
        <div class="card-body">
          <h5 class="card-title">${doctor}</h5>
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
      </div>`;
      });
    });
}

getCard();
