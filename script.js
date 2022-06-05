"use strict";

const header = document.querySelector("header");

const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector.toLowerCase();
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.createMethod = function () {
    let newElem;
    {
      if (this.selector[0] === ".") {
        newElem = document.createElement("div");
        newElem.className = this.selector.substring(1);
      } else if (this.selector[0] === "#") {
        newElem = document.createElement("p");
        newElem.id = this.selector.substring(1);
      } else {
        alert('ERROR. First letter should be written with "." or "#"');
      }
      newElem.style.cssText = `
      height: ${this.height};
      width: ${this.width};
      background: ${this.bg};
      font-size: ${this.fontSize};`;
      header.append(newElem);
      newElem.innerHTML =
        this.selector.substring(1)[0].toUpperCase() +
        this.selector.substring(2);
    }
  };
};

const newObj1 = new DomElement(
  ".RaGnaR",
  "70px",
  "70%",
  "rgb(123, 136, 193)",
  "37px"
);

const newObj2 = new DomElement(
  "#LagertHA",
  "85px",
  "80%",
  "rgb(215, 13, 30)",
  "70px"
);

const newObj3 = new DomElement(
  "#ARTHAS",
  "100px",
  "100%",
  "rgb(83, 234, 18)",
  "100px"
);

newObj1.createMethod();
newObj2.createMethod();
newObj3.createMethod();
console.log(newObj1);
console.log(newObj2);
console.log(newObj3);
