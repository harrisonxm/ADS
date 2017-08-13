//Big O - how scalable an algorithim is
//Big O - how performant an algorithim is.


//constant runtime
//big O notation "O (1)"
//no matter how big input size gets only print first two elements
function log(array){
  console.log(array[0])
  console.log(array[1])
}

//Linear runtime
//big O notation: "O (n)"
//run time increases as array keeps adding another
//have to print one more for every element added
function logAll(array){
  for (var i = 0; i < array.length; i++){
    console.log(array[i])
  }
}

//exponential runtime
//big O notation: "O (n^2)"
//slows at larger scale
function addAndLog(array){
  for (var i = 0; i < array.length; i++){
    for (var j = 0; j < array.length; j++){
      console.log(array[i] + array[j])
    }
  }
}

//logarithmic runtime
//efficient
//big O notation: O (log n)
func binarySearch(array, key){
  var low = 0
  var high = array.lenght - 1;
  var mid;
  var element;

  while(low <= high){
    mid = math.floor((low + high) / 2, 10);
    element = array[mid];
    if(element < key){
      low = mid + 1;
    } else if (element > key) {
      high = mid -1
    } else {
      return mid
    }
  }
  return - 1
}
