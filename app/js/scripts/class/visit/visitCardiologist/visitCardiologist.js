class VisitCardiologist extends Visit {
    constructor() {
      super();
    }
    render() {
    formElement.append(
        labelPressureElement,
        labelWeightElement,
        labelAgeElement,
        labelTextAreaElement
    );
    labelPressureElement.append(inputPressureElement.render());
    labelTextAreaElement.append(inputTextAreaElement.render());
    labelWeightElement.append(inputWeightElement.render());
    labelAgeElement.append(inputAgeElement.render());
      return formElement;
    }
  }