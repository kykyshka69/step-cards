const wrapperClass = new Tools("div");
// const wrapperElement = wrapperClass.renderPage();
document.body.append(wrapperClass.renderPage());
document.body.append(wrapperClass.renderMain());
document.body.append(wrapperClass.renderFooter());
