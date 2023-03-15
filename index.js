const input = document.getElementById("inputNumber")
const btn = document.getElementById("btn")
const output = document.getElementById("output")

input.addEventListener("keyup", function() {
  input.value = input.value.replace(/[^0-9,-]/g, "");
});

btn.addEventListener("click", () => {
  if(!input.value) return output.innerHTML = 0
  const arr = [...new Set(
    input.value
      .split(',')
      .map((item) => Number(item))
      .sort((a, b) => a - b)
    )]
  if(arr.length < 2)return output.innerHTML = arr[0]
  output.innerHTML = arr[0] + arr[1]
})

