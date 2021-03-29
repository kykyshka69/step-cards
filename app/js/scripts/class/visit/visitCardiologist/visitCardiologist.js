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
    labelPressureElement.append(inputPressureClass.render());
    labelTextAreaElement.append(textAreaClass.render());
    labelWeightElement.append(inputWeightClass.render());
    labelAgeElement.append(inputAgeClass.render());
      return formElement;
    }
  }