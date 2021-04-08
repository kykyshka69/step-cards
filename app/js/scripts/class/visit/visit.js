class Visit {
  constructor() {}
  render() {
    modalBodyElement.append(
      labelTargetElement,
      labelDescriptionElement,
      labelFullNameElement,
      labelDescriptionElement,
      chooseUrgencyElement
    );
    labelTargetElement.append(inputTargetElement);
    labelDescriptionElement.append(inputDescriptionElement);
    labelFullNameElement.append(inputFullNameElement);

    return modalBodyElement;
  }
}
