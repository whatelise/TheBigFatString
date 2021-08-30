"use strict";
let output;
let input = document.querySelector("#text").value;
let length = input.length;
window.addEventListener("DOMContentLoaded", start);

function start() {
  document.querySelector("#generate").addEventListener("click", generateResult);
}
function generateResult() {
  document.querySelector("#generate").removeEventListener("click", generateResult);
  let value = document.querySelector("#select").value;
  if (value === "uppercase") {
    output = input.substring(0, 1).toUpperCase() + input.substring(1).toLowerCase();
  } else if (value === "firstname") {
    output = input.substring(input.indexOf(" "), input.substring(input.lastIndexOf(" ")));
  } else if (value === "lengthoffirstname") {
    output = input.indexOf(" ");
  } else if (value === "middlename") {
    output = input.substring(input.indexOf(" ") + 1, input.lastIndexOf(" "));
    // missing first and last index number
  } else if (value === "filename") {
    // output = input.match("png") + input.match("jpg");
    // output = input.substring(input.indexOf("jpg", input.indexOf("jpg")));
    output = input.endsWith(".png");
    // notworkingcorrectly
  } else if (value === "password") {
    const regex = /[a-z]/gi;
    output = input.replaceAll(regex, "*");
  } else if (value === "thirdletteruppercase") {
    output = input.substring(0, 2) + input.substring(2, 3).toUpperCase() + input.substring(3).toLowerCase();
  } else if (value === "hyphen") {
    //don't know
  }

  showResult();
  console.log(input);
  console.log(value);
  console.log(output);
}

function showResult() {
  document.querySelector("output").textContent = output;
  start();
}
