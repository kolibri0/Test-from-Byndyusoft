function arraySumm(value, output){
  if(!value) return output.innerHTML = 0
  const arr = [...new Set(
    value
      .split(',')
      .map((item) => Number(item))
      .sort((a, b) => a - b)
    )]
  if(arr.length < 2)return output.innerHTML = arr[0]
  output.innerHTML = arr[0] + arr[1]
}

function arraySummTest(value){
  if(!value) return 0
  const arr = [...new Set(
    value
      .split(',')
      .map((item) => Number(item))
      .sort((a, b) => a - b)
    )]
  if(arr.length < 2)return arr[0]
  return arr[0] + arr[1]
}

module.exports = {
  arraySummTest
}