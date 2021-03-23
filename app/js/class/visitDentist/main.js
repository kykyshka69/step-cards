class visitDentist {
  constructor() {}
  addVisitDentist() {
    formLogin.append(labelLastVisit.render());
    const labelDentist = document.querySelector("#label-last-visit");
    labelDentist.append(inputLastVisit.render());
  }
}
