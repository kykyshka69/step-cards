const textAreaClass = new textArea({
    name: "textarea",
    className: "modal-textarea form-control",
    textarea: "150",
    placeholder: "Введите текст, максимальное кол-во букв 150",
    elem: "textarea",
});

const textAreaElement = textAreaClass.render();
console.log(textAreaElement)