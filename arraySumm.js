export function arraySummTest(value){
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

