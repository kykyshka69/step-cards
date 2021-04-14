const labelLoginClass = new Label({
  elem: "label",
  name: "login-authorization",
  className: "login-authorization input-group mb-3",
});

const labelPasswordClass = new Label({
  elem: "label",
  name: "login-authorization",
  className: "password-authorization input-group mb-3",
});

const labelAgeClass = new Label({
  elem: "label",
  name: "label-age",
  className: "label-age input-group mb-3",
});

const labelTargetClass = new Label({
  elem: "label",
  name: "visit-target",
  className: "visit-target input-group mb-3",
});

const labelDescriptionClass = new Label({
  elem: "label",
  name: "description",
  className: "description input-group mb-3",
});

const labelFullNameClass = new Label({
  elem: "label",
  name: "full-name",
  className: "full-name input-group mb-3",
});

const labelTextAreaClass = new Label({
  elem: "label",
  name: "label-textarea",
  className: "label-textarea input-group mb-3",
});

const labelPressureClass = new Label({
  elem: "label",
  name: "label-pressure",
  className: "label-pressure input-group mb-3",
});

const labelWeightClass = new Label({
  elem: "label",
  name: "label-weight",
  className: "label-weight input-group mb-3",
});

const labelLastVisitClass = new Label({
  name: "label-date",
  elem: "label",
  className: "label-date input-group mb-3",
});

// const labelFilterSearchClass = new Label({
//   elem: "label",
//   name: "label-filter",
//   className: "label-filter input-gorup mb-3",
// });

const labelLoginElement = labelLoginClass.render();
const labelPasswordElement = labelPasswordClass.render();
const labelAgeElement = labelAgeClass.render();
const labelTargetElement = labelTargetClass.render();
const labelDescriptionElement = labelDescriptionClass.render();
const labelFullNameElement = labelFullNameClass.render();
const labelTextAreaElement = labelTextAreaClass.render();
const labelPressureElement = labelPressureClass.render();
const labelWeightElement = labelWeightClass.render();
const labelLastVisitElement = labelLastVisitClass.render();
// const labelFilterSearchElement = labelFilterSearchClass.render();
document.querySelector(".modal-body").append(labelLoginElement);
document.querySelector(".modal-body").append(labelPasswordElement);
