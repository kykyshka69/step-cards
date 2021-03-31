const wrapperClass = new Tools("div");
const filterClass = new Tools("div");
const filterElement = filterClass.createFilter();
// const wrapperElement = wrapperClass.renderPage();
document.body.append(wrapperClass.renderPage());
document.body.append(filterElement);
document.body.append(wrapperClass.renderMain());
document.body.append(wrapperClass.renderFooter());
