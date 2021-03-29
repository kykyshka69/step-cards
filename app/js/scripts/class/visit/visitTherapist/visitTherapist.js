class VisitTherapist extends Visit {
    constructor() {
      super();
    }
    render() {
      formElement.append(labelAgeElement);
      labelAgeElement.append(inputAgeClass.render());
  
      return formElement;
    }
  }