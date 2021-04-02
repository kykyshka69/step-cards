class VisitDentist extends Visited {
  constructor() {
    super();
  }
  render() {
    form.append(date.render());
    document.querySelector(".label-date").append(inputDate.render());

    return form;
  }
}

const dentist = new VisitDentist();
