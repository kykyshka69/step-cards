/*
Нужно дописать фильтр , и есть баги на PUT  запросах
*/

const inputFilterElement = document.querySelector(".input-search");
inputFilterElement.oninput = function () {
  let inputValue = this.value.trim().toLowerCase();
  if (inputValue != "") {
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
        data.forEach((users, i) => {
          let test = document.querySelectorAll(".card");
          const { fullName } = users;

          let arrayFiterName = [fullName.toLowerCase().indexOf(inputValue)];
          if (arrayFiterName > -1) {
            test[i].classList.remove("hide");
          } else {
            test[i].classList.add("hide");
          }
        });
      });
  } else {
    getCard();
  }
};
chooseUrgencyFilterElement.onchange = function () {
  let urgencyValue = this.value;
  if (urgencyValue != "") {
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
        data.forEach((users, i) => {
          let test = document.querySelectorAll(".card");
          const { urgency } = users;
          // let test2 = chooseUrgencyFilterClass.renderOptionChooseUrgency();
          // test2.disabled = false;

          let arrayFiterUrgency = [urgency.search(urgencyValue)];
          if (arrayFiterUrgency > -1) {
            test[i].classList.remove("hide");
          } else {
            test[i].classList.add("hide");
          }
        });
      });
  } else {
    getCard();
  }
};
