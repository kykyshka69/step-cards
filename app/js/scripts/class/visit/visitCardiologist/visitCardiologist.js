class VisitCardiologist extends Visit {
    constructor() {
      super();
    }
    render() {
      formElement.append(
        pressure.render(),
        labelWeight.render(),
        age.render(),
        labelTextArea.render()
      );
      document.querySelector(".label-pressure").append(inputPressure.render());
      document.querySelector(".label-textarea").append(modalTextArea.render());
      document.querySelector(".label-weight").append(inputWeight.render());
      document.querySelector(".label-age").append(inputAge.render());
      return form;
    }
  }