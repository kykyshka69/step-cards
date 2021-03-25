class VisitTherapist {
  constructor({}) {}
  addVisitTherapist() {
    formLogin.append(labelAge.render());

    // const labelUserAge = document.querySelector(".label-age");
    // labelUserAge.append(inputAge.render());
  }
  render() {
    return this.addVisitTherapist();
  }
}
const doctorTherapist = new VisitTherapist({});
console.log(doctorTherapist.render());
