@@include("scripts/class/tools/tools.js");
@@include("scripts/class/buttons/buttons.js");
@@include("scripts/class/forms/forms.js");
@@include("scripts/class/modals/modals.js");
@@include("scripts/class/options/options.js");
@@include("scripts/class/inputs/inputs.js");
@@include("scripts/class/labels/labels.js");
@@include("scripts/class/textarea/textarea.js");
@@include("scripts/class/selects/selects.js");
@@include("scripts/class/visit/visit.js");
@@include("scripts/class/visit/visitCardiologist/visitCardiologist.js");
@@include("scripts/class/visit/visitDentist/visitDentist.js");
@@include("scripts/class/visit/visitTherapist/visitTherapist.js");

@@include("scripts/class/buttons/buttons-objects.js");
@@include("scripts/class/forms/forms-objects.js");
@@include("scripts/class/modals/modals-objects.js");
@@include("scripts/class/options/options-objects.js");
@@include("scripts/class/labels/labels-objects.js");
@@include("scripts/class/inputs/inputs-objects.js");
@@include("scripts/class/textarea/textarea-objects.js");
@@include("scripts/class/selects/selects-objects.js");
@@include("scripts/class/visit/visit-objects.js");
@@include("scripts/class/visit/visitCardiologist/visitCardiologist-objects.js");
@@include("scripts/class/visit/visitDentist/visitDentist-objects.js");
@@include("scripts/class/visit/visitTherapist/visitTherapist-objects.js");
@@include("scripts/class/tools/tools-objects.js");

@@include("scripts/components/header/header.js");
@@include("scripts/components/main/main.js");
@@include("scripts/components/footer/footer.js");
@@include("scripts/components/modal/modal.js");
@@include("scripts/request/request-login.js");
@@include("scripts/request/request-posts.js");
@@include("scripts/request/request-get.js");

if (localStorage.getItem("token") !== "noid" && localStorage.getItem("token")) {
  buttonLoginElement.style.display = "none";
  buttonCreateElement.style.display = "block";
} else {
  buttonLoginElement.style.display = "block";
}
