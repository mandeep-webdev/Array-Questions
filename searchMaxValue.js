const arr = [2,0,12,34];

function findMax(arr) {
  let maxValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }
  return maxValue;
}

const result = findMax(arr);
console.log(result);