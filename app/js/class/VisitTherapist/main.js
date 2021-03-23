class VisitTherapist {
  constructor({}) {}
  addVisitTherapist() {
    document.body.append(labelAge.render());
    const labelAgeX = document.querySelector(".label-age");
    labelAgeX.append(inputAge.render());
  }
  render() {
    return this.addVisitTherapist();
  }
}
const doctorTherapist = new VisitTherapist({});
doctorTherapist.addVisitTherapist();
