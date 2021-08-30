"use strict";
let output;
let value = document.querySelector("#select").value;
window.addEventListener("DOMContentLoaded", start);

function start() {
  document.getElementById("generate").addEventListener("click", generateResult());
}
function generateResult() {
  let input = document.querySelector("#text").value;
  console.log(input);
  console.log(value);

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
    output = input.substring(input.indexOf("jpg", input.indexOf("jpg")));
    // notworkingcorrectly
  } else if (value === "password") {
  }

  console.log(output);
}
