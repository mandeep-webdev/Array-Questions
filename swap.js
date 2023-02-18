// sort in descending order

function swap(arr) {
  if(arr.length  === 0) {
    return -1
  }
  for(let i = 0 ; i< arr.length ; i++) {
    for(let j = 1 ; j<arr.length ; j++) 
      {
        if(arr[j] > arr[j-1])
    {
      let temp = arr[j]
      arr[j] = arr[j-1]
      arr[j-1] = temp
      
    }
      }
    
    
  }
  return arr
}

const ans = swap([34,33,23,2,34])
console.log(ans)