class Visit {
  constructor() {}
  render() {
    formElement.append(
      labelTargetElement,
      labelDescriptionElement,
      labelFullNameElement,
      labelDescriptionElement,
      chooseUrgencyElement
    );
    labelTargetElement.append(inputTargetElement);
    labelDescriptionElement.append(inputDescriptionElement);
    labelFullNameElement.append(inputFullNameElement);

    return formElement;
  }
}
