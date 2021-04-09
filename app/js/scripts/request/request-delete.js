class Test extends Tools {
  constructor({ elem, className }) {
    super(elem);
    this.className = className;
  }
  render() {
    const card = this.createElement();
    card.className = this.className;
    card.append(this.renderCardBody(), this.renderCardButtonContainer());
    return card;
  }

  renderCardBody() {
    const cardBody = document.createElement("div");
    cardBody.className = "card-body col";
    cardBody.append(
      this.renderCardTitle(),
      this.renderCardSubtitle(),
      this.renderCardContent()
    );
    return cardBody;
  }
  renderCardContent() {
    const cardContent = this.createElement();
    cardContent.className = "card-body-content  hide";
    cardContent.append(this.renderCardText());
    return cardContent;
  }
  renderCardTitle() {
    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    return cardTitle;
  }
  renderCardSubtitle() {
    const cardSubtitle = document.createElement("h6");
    cardSubtitle.className = "card-subtitle mb-2 text-muted";
    return cardSubtitle;
  }
  renderCardText() {
    const cardText = document.createElement("p");
    cardText.className = "card-text";
    return cardText;
  }
  renderCardButtonContainer() {
    const cardButtonFooter = this.createElement();
    cardButtonFooter.className = "modal-footer";
    cardButtonFooter.append(
      buttonShowMoreElement,
      buttonHideInfoElement,
      buttonEditElement
    );
    return cardButtonFooter;
  }
}
const test = new Test({
  elem: "div",
  className: "card m-3 shadow",
});
console.log(test.render());
