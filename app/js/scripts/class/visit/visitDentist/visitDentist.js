class VisitDentist extends Visit {
  constructor() {
    super();
  }
  render() {
    fromCreateElement.append(labelLastVisitElement);
    labelLastVisitElement.append(inputLastVisitElement);
    return fromCreateElement;
  }
}
