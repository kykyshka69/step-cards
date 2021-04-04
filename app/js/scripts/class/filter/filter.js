class Filter extends Tools {
  constructor({ elem, className }) {
    super(elem);
    this.className = className;
  }
  renderInputFilter() {
    const inputFilter = document.createElement("input");
    (inputFilter.name = "search"),
      (inputFilter.className = "input-search form-control");
    inputFilter.type = "text";
    inputFilter.placeholder = "Введите ФИО";
    return inputFilter;
  }
  renderLabelFilter() {
    const labelFilter = document.createElement("label");
    labelFilter.className = "label-filter input-gorup mb-3";
    labelFilter.name = "label-filter";
    labelFilter.append(this.renderInputFilter());
    return labelFilter;
  }
  render() {
    const filter = this.createElement();
    const titleFilter = document.createElement("span");
    titleFilter.textContent = "Поиск";
    titleFilter.className = "input-group-text";
    filter.className = this.className;
    document.querySelector(".main-filter__container").append(filter);

    filter.append(
      titleFilter,
      this.renderLabelFilter(),
      chooseUrgencyFilterElement
    );

    return filter;
  }
}
