function flagPartition(arr){
  let low = 0;
  let hi = arr.length-1;
  let mid = 0;

  while(mid <= hi){
    if(arr[mid] === 0){
      [arr[low], arr[mid]] = [arr[mid], arr[low]]
      low++;
      mid++;
    }
    else if(arr[mid] === 1){
      mid++;
    }
    else{
      [arr[hi], arr[mid]] = [arr[mid], arr[hi]];
      hi--;
    }
  }
  return arr
}

let arr = [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1];

flagPartition(arr);
console.log(arr)
