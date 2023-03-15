import { arraySummTest } from "./arraySumm.js";

const input = document.getElementById("inputNumber")
const btn = document.getElementById("btn")
const output = document.getElementById("output")

input.addEventListener("keyup", function() {
  input.value = input.value.replace(/[^0-9,-]/g, "");
});

btn.addEventListener("click", () => {
  output.innerHTML = arraySummTest(input.value)
})