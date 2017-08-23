let insertionSort = function(arr){
  let key, j;
  for(let i=1; i < arr.length; i++){
    key = arr[i];
    j = i;

    while(j >= 0 && key < arr[j-1]){
      arr[j+1] = arr[j];
      j--;
    }
    arr[j] = key;
  }
  return arr;
}


console.log(insertionSort([5,2,1,5,7,9,10]));

//Big O
//Worst: O(n^2) = iterating through an array n amount of times
//Best: O(n) iterates one time to for sorted array


//1."assume" first element sorted
//2. for loop through elements
//3. set a variable to current index of array to compare - var key
//4. also need to set a variable to the represent the "hole" we are going to create - var j
//5. while the current index value of array is less than the elements that preceded it,
// increment preceding elements greater than current, by one position forward.
//6. now set the correct position for key
