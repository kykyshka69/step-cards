class VisitDentist extends Visit {
  constructor() {
    super();
  }
  render() {
    modalBodyElement.append(labelLastVisitElement);
    labelLastVisitElement.append(inputLastVisitElement);
    return modalBodyElement;
  }
}
