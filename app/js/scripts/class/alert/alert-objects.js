const AlertCreateClass = new Alert({
    elem: "div",
    text: "Операция успешна"
})

const AlertCreateElement_Close = AlertCreateClass.renderHeaderButton();
const AlertCreateElement_Active = AlertCreateClass.render();
const AlertCreateElement = AlertCreateClass.renderContainer();
const AlertCreateElement_Text = AlertCreateClass.renderBody();
document.body.append(AlertCreateElement);
function alert(){
    document.querySelector(".toast:not(.showing):not(.show)").style.transition = "1s";
    document.querySelector(".toast:not(.showing):not(.show)").style.opacity = "1";
    setTimeout(() => {
      document.querySelector(".toast:not(.showing):not(.show)").style.opacity = "0";
    }, 2000);
}
