class Cards extends Tools {
  constructor({ elem, className }) {
    super(elem);
    this.className = className;
  }
  render() {
    const cardBody = this.createElement();
    cardBody.className = this.className;
    return cardBody;
  }

  renderCardBody(){
    const card = document.createElement("div");
    card.className = "card-body";
    return card;
  }
  renderCardTitle() {
    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    return cardTitle;
  }
  renderCardSubtitle() {
    const cardSubtitle = document.createElement("h6");
    cardSubtitle.className = "card-Subtitle";
    return cardSubtitle;
  }
  renderCardText() {
    const cardText = document.createElement("p");
    cardText.className = "card-text";
    return cardText;
  }
}
