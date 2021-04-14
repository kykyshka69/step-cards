const searchFilterUrgency = document.querySelector(".select-filter__urgency");
const inputFilterElement = document.querySelector(".input-search");

inputFilterElement.oninput = function () {
  let inputValue = this.value.trim();
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
        data.forEach((user, i) => {
          const { fullName } = user;
        });
      });
  }
};
