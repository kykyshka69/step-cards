class VisitTherapist extends Visited {
  constructor() {
    super();
  }
  render() {
    form.append(age.render());
    document.querySelector(".label-age").append(inputAge.render());

    return form;
  }
}

const terapevt = new VisitTherapist();
