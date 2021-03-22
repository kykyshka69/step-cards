class Tools {
    constructor(elem) {
      this.elem = elem;
    }
    createElement() {
      let elem = document.createElement(`${this.elem}`);
      return elem;
    }
  }

let header = document.querySelector(".header");
let container = document.querySelector(".container");  

@@include("buttons/main.js")
@@include("modal/main.js")
@@include("form/main.js")
@@include("input/main.js")
@@include("label/main.js")
@@include("request/main.js")
