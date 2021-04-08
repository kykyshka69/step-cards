class VisitCardiologist extends Visit {
  constructor() {
    super();
  }
  render() {
    modalBodyElement.append(
      labelPressureElement,
      labelWeightElement,
      labelAgeElement,
      labelTextAreaElement
    );
    labelPressureElement.append(inputPressureElement);
    labelTextAreaElement.append(textAreaElement);
    labelWeightElement.append(inputWeightElement);
    labelAgeElement.append(inputAgeElement);
    return modalBodyElement;
  }
}
