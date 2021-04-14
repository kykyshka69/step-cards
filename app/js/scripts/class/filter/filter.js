class Filter extends Tools {
  constructor({ elem, className }) {
    super(elem);
    this.className = className;
  }
  render() {
    const filter = this.createElement();
    const titleFilter = document.createElement("h5");
    titleFilter.textContent = "Filter";
    filter.className = this.className;
    document.querySelector(".main-filter__container").append(filter);
    filter.append(titleFilter, labelFilterSearchElement, chooseUrgencyElement);
    chooseUrgencyElement.classList.add("filter-search-urgency");
    labelFilterSearchElement.append(inputFilterSearchElement);
    return filter;
  }
}
