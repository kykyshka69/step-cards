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
    inputFilter.setAttribute("aria-describedby", "basic-addon1");
    return inputFilter;
  }
  renderLabelFilter() {
    const labelFilter = document.createElement("div");
    labelFilter.className = "col-md-4 input-group mb-3";
    labelFilter.name = "label-filter";
    const titleFilter = document.createElement("span");
    titleFilter.textContent = "Поиск";
    titleFilter.className = "input-group-text";
    titleFilter.id = "basic-addon1";
    labelFilter.append(titleFilter ,this.renderInputFilter());
    return labelFilter;
  }
  render() {
    const filter = this.createElement();
    filter.className = this.className;
    document.querySelector(".main-filter__container").append(filter);

    filter.append(
      this.renderLabelFilter(),
      chooseUrgencyFilterElement
    );

    return filter;
  }
}
