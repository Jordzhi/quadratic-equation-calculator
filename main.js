// строгий режим
"use strict";

let a, b, c;

let button = document.querySelector(".activ-button");

button.addEventListener("click", () => {
  a = document.querySelector(".a").value;
  b = document.querySelector(".b").value;
  c = document.querySelector(".c").value;

  console.log("a = ", a);
  console.log("b = ", b);
  console.log("c = ", c);

  let D;
  D = b * b - 4 * a * c;

  console.log("D = ", D);

  if (D > 0) {
    let DSQRT = Math.sqrt(D);
    console.log("√D = ", DSQRT);

    let A10 = -b + Math.sqrt(D);
    let A11 = A10 / (2 * a);

    let A20 = -b - Math.sqrt(D);
    let A21 = A20 / (2 * a);

    console.log("X1 = ", A11);
    console.log("X2 = ", A21);

    let AFIELD = document.querySelector(".answer");
    AFIELD.innerHTML = "Ответ: " + "X1 = " + A11 + "; " + "X2 = " + A21;
  }
  if (D == 0) {
    let DSQRT = Math.sqrt(D);
    console.log("√D = ", DSQRT);

    let A10 = -b + Math.sqrt(D);
    let A11 = A10 / (2 * a);

    console.log("X1 = ", A11);

    let AFIELD = document.querySelector(".answer");
    AFIELD.innerHTML = "Ответ: " + "X1 = " + A11 + "; ";
  }
  if (D < 0) {
    let AFIELD = document.querySelector(".answer");
    AFIELD.innerHTML = "Нет Ответа";
  }
});
