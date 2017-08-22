
let bubbleSort = function(arr){
  for(let i = 0; i < arr.length; i++){
    let swapped = false;
    for(let j = 0; j < arr.length-1; j++){
      if(arr[j] > arr[j+1]){
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        swapped++;
      }
    }
    if(swapped === 0){
      break;
    }
  }
  return arr;
}

console.log(bubbleSort([2,3,4,5,6,7]))
