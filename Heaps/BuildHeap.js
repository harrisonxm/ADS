
let buildMaxHeap = function(arr){
  let hsize = arr.length;
  let nonleaf = Math.floor(arr.length/2)-1;
  for(let i = nonleaf; i > -1; i--){
    maxHeapify(arr,hsize,i);
  }
  return arr
}

let maxHeapify = function(a,hsize,idx){
  let left = 2 * idx + 1;
  let right = 2 * idx + 2;
  let largest;
  if(left <= hsize && a[left] > a[idx]){
    largest = left;
  } else {
    largest = idx;
  }
  if(right <= hsize && a[right] > a[largest]){
    largest = right;
  }
  if(largest != idx){
    [a[idx], a[largest]] = [a[largest], a[idx]];
    maxHeapify(a,hsize,largest)
  }
}

let arr1 = [5,2,10,12,20,15,19,20];
let heap = buildMaxHeap(arr1);
console.log(heap);

//Almost complete BST properties:
//non leaves - 1 to floor(n/2);
//leaves - floor(n/2) + 1 to n
// n represents number of nodes in a given BST
