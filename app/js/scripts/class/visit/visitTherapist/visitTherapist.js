class VisitTherapist extends Visit {
  constructor() {
    super();
  }
  render() {
    modalBodyElement.append(labelAgeElement);
    labelAgeElement.append(inputAgeElement);

    return modalBodyElement;
  }
}
