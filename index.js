const { arraySumm } = require("./arraySumm")

document.addEventListener('DOMContentLoaded', function () {
  const input = document.getElementById("inputNumber")
  const btn = document.getElementById("btn")
  const output = document.getElementById("output")

  input.addEventListener("keyup", function() {
    input.value = input.value.replace(/[^0-9,-]/g, "");
  });

  btn.addEventListener("click", () => {
    arraySumm(input.value, output)
  })

})