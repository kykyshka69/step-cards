// buttonPostElement.onclick = (e) => {  
//   if (chooseDoctorsElement.value === "Dentist") {
//     createPost({
//       doctor: "Стоматолог",
//       purpose: inputTargetElement.value,
//       description: inputDescriptionElement.value,
//       urgency: chooseUrgencyElement.value,
//       lastVisit: inputLastVisitElement.value,
//       fullName: inputFullNameElement.value,
//     });
//   } else if (chooseDoctorsElement.value === "Cardiologist") {
//     createPost({
//       doctor: "Кардиолог",
//       purpose: inputTargetElement.value,
//       description: inputDescriptionElement.value,
//       urgency: chooseUrgencyElement.value,
//       fullName: inputFullNameElement.value,
//       pressure: inputPressureElement.value,
//       IndexBodyMass: inputWeightElement.value,
//       cardioVascular: textAreaElement.value,
//       age: inputAgeElement.value,
//     });
//   } else if (chooseDoctorsElement.value === "Therapist") {
//     createPost({
//       doctor: "Терапевт",
//       purpose: inputTargetElement.value,
//       description: inputDescriptionElement.value,
//       urgency: chooseUrgencyElement.value,
//       age: inputAgeElement.value,
//       fullName: inputFullNameElement.value,
//     });
//   }
//   modalBodyElement.innerHTML = "";
//   modalFooterElement.innerHTML = "";
//   modalGeneralElement.classList.remove("popup__active");
//   chooseDoctorsElement.value = "Выбор доктора";
// };

// function createPost(body) {
//   fetch("https://ajax.test-danit.com/api/v2/cards", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//     body: JSON.stringify(body),
//   })
//     .then((response) => {
//       if (response.status === 200) {
//         main.textContent = "";
//         getCard();
//         return response.text();
//       }
//     })
//     .then((data) => console.log(data));
// }



buttonPostElement.onclick = (e) => {
  const global = [{
    doctor: "Стоматолог",
    purpose: inputTargetElement.value,
    description: inputDescriptionElement.value,
    urgency: chooseUrgencyElement.value,
    lastVisit: inputLastVisitElement.value,
    fullName: inputFullNameElement.value,
  }]

  const terapert = [{
    doctor: "Терапевт",
    purpose: inputTargetElement.value,
    description: inputDescriptionElement.value,
    urgency: chooseUrgencyElement.value,
    age: inputAgeElement.value,
    fullName: inputFullNameElement.value,
  }]

  const card = [{
        doctor: "Кардиолог",
        purpose: inputTargetElement.value,
        description: inputDescriptionElement.value,
        urgency: chooseUrgencyElement.value,
        fullName: inputFullNameElement.value,
        pressure: inputPressureElement.value,
        IndexBodyMass: inputWeightElement.value,
        cardioVascular: textAreaElement.value,
        age: inputAgeElement.value,
  }]

 

  global.map(function (obj) {
    const {purpose, description, lastVisit, fullName} =obj;
     if (purpose!='' && description !='' && fullName !='' && lastVisit !='' && lastVisit !=''&& chooseDoctorsElement.value === "Dentist") {
      createPost({
        doctor: "Стоматолог",
        purpose: inputTargetElement.value,
        description: inputDescriptionElement.value,
        urgency: chooseUrgencyElement.value,
        lastVisit: inputLastVisitElement.value,
        fullName: inputFullNameElement.value,
      }) 
       console.log('hurray');
     } 
  })

  terapert.map(function (o) {
    const {purpose, description, fullName, age} = o;
    if (purpose!='' && description !='' && fullName !='' && age !='' && chooseDoctorsElement.value === "Therapist") {
      createPost({
          doctor: "Терапевт",
          purpose: inputTargetElement.value,
          description: inputDescriptionElement.value,
          urgency: chooseUrgencyElement.value,
          age: inputAgeElement.value,
          fullName: inputFullNameElement.value,
          })
     }
  })

  card.map(function (ob) {
    const { purpose, description, fullName, pressure, IndexBodyMass, cardioVascular, age } = ob;
    if (purpose !='' && description !='' && fullName !='' && age !='' && pressure !='' && IndexBodyMass !='', cardioVascular !='' && chooseDoctorsElement.value === "Cardiologist") {
      createPost({
            doctor: "Кардиолог",
            purpose: inputTargetElement.value,
            description: inputDescriptionElement.value,
            urgency: chooseUrgencyElement.value,
            fullName: inputFullNameElement.value,
            pressure: inputPressureElement.value,
            IndexBodyMass: inputWeightElement.value,
            cardioVascular: textAreaElement.value,
            age: inputAgeElement.value,
          });
    } return 
  })};


  function createPost(body) {
    fetch("https://ajax.test-danit.com/api/v2/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (response.status === 200) {
          main.textContent = "";
          getCard();
          return response.text();
        }
      })
      // .then((data) => console.log(data));
  }
  