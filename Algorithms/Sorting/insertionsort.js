let insertionSort = function(arr){
  let key, j;
  for(let i=1; i < arr.length; i++){
    key = arr[i];
    j = i-1;

    while(j >= 0 && key < arr[j]){
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = key;
  }
  return arr;
}


console.log(insertionSort([5,2,1,5,7,9,10]));

//Big O
//Worst: O(n^2) = iterating through an array n amount of times
//Best: O(n) iterates one time to for sorted array


//1.iterate through array
//2.
