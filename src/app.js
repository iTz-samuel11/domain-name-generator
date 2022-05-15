/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronombres = ["the", "our"];
  let adjs = ["great", "big"];
  let nombres = ["jogger", "racoon"];
  let extenciones = [".com ", ".net", ".io", "us"];

  for (let pronombre of pronombres) {
    for (let adj of adjs) {
      for (let nombre of nombres) {
        for (let extencion of extenciones) {
          console.log(`${pronombre}${adj}${nombre}${extencion}`);
        }
      }
    }
  }
};
