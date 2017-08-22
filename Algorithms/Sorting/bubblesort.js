
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

//steps through element by element swaps if they are in wrong order;
// then loops over again and does same process;


//Big O
// worst-case O(n^2)
// Best-case O(n) -- already sorted, still have to iterate across once;
//Average O(n^2)
//worst-case space O(1) -- sorting done in place, not creating new list;
