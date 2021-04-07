class VisitDentist extends Visit {
  constructor() {
    super();
  }
  render() {
    formElement.append(labelLastVisitElement);
    labelLastVisitElement.append(inputLastVisitElement);
    return formElement;
  }
}
