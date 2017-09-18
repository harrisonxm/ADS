// function partition(arr,low,high){
//   let i = low - 1;
//   let pivot = arr[high];
//
//   for(var j = low; j < arr.length-1; j++){
//     if(arr[j] <= pivot){
//       i++;
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//   }
//   [arr[i+1], arr[high]] = [arr[high], arr[i+1]];
//   return i+1;
// }
//
// function quickSort(arr,low,high){
//   if(low < high){
//     let p = partition(arr,low,high);
//     quickSort(arr,low, p-1)
//     quickSort(arr,p+1, high)
//   }
// }


// let array = [10, 7, 8, 9, 1, 5];
// quickSort(array, 0, array.length-1);
//
// console.log(array)



//
function partition(arr, low, high){
  let i = low-1;
  let pivot = arr[high];

  for(var j = low; j < high; j++){
    if(arr[j] <= pivot){
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i+1], arr[high]] = [arr[high], arr[i+1]];
  return i+1;
}

function quickSort(arr,low,high){
  if(low < high){
    let p = partition(arr,low,high)
    quickSort(arr,low,p-1);
    quickSort(arr,p+1, high)
  }
}

let array = [10, 7, 8, 9, 1, 5];
quickSort(array, 0, array.length-1);

console.log(array)












//partition method, use two pointers
//partition makes it so all elements on left of "pivot" are less than it and vice versa


// Big O;
// Best Case (n log n);
// Average Case (n log n);
// Worst Case O(n^2);
