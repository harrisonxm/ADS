let selectionSort = function(arr){
  for(let i=0; i < arr.length; i++){

    let min = i;

    for(let j=i+1; j < arr.length; j++){
      if(arr[j] < arr[min]){
        min = j;
      }
    }

    let temp = arr[i];
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
}




const array = [2,1,2,5,7,8,9,2,1,1];

console.log(selectionSort(array))


//Big O
//Worse: O(n^2)
//Average: O(n^2)

//divides list into sorted sublist, and unsorted sublist
//find the min of unsorted sublist and swap it with leftmost of unsorted element
//now move sublist boundaries one element to right
