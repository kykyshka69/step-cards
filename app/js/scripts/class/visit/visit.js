class Visited {
  constructor() {}
  render() {
    form.append(
      visitTarget.render(),
      visitDescription.render(),
      labelFullName.render(),
      chooseUrgency.render()
    );
    document.querySelector(".visit-target").append(inputTarget.render());
    document.querySelector(".description").append(inputDescription.render());
    document
      .querySelector(".choose-urgency")
      .append(
        optionDefaultUrgency.render(),
        optionRegular.render(),
        optionPriority.render(),
        optionUrgent.render()
      );
    document.querySelector(".full-name").append(inputFullName.render());

    return form;
  }
}
const generalVisit = new Visited();
