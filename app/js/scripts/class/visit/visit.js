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
    chooseUrgencyElement.append(
      optionChooseUrgencyElement,
      optionRegularElement,
      optionPriorityElement,
      optionUrgentElement
    );
    labelFullNameElement.append(inputFullNameElement);

    return formElement;
  }
}
