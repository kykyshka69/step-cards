const searchFilterUrgency = document.querySelector(".filter-search-urgency");
function getResultsSearch() {
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
        const { doctor, urgency } = element;
        console.log(doctor, urgency);
      });
    });
}

// getResultsSearch();
