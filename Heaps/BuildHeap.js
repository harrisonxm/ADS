
let buildMaxHeap = function(arr){
  arr.heapsize = arr.length;
  let nonleaf = Math.floor(arr.length/2);
  for(let i = nonleaf; i > 0; i--){
    maxHeapify(arr, i);
  }
}

let maxHeapify = function(a,idx){
  let left = 2 * idx;
  let right = 2 * idx + 1;
  let largest;
  if(left <= a.heapsize && a[left] > a[idx]){
    largest = left;
  } else {
    largest = idx;
  }
  if(right <= a.heapsize && a[right] > a[largest]){
    largest = right;
  }
  if(largest != idx){
    [a[idx], a[largest]] = [a[largest], a[idx]];
    maxHeapify(a,largest)
  }
}

let arr1 = [5,2,10,12,20,15,19,20];
let heap = buildMaxHeap(arr1);
console.log(heap.size)

//Almost complete BST properties:
//non leaves - 1 to floor(n/2);
//leaves - floor(n/2) + 1 to n
// n represents number of nodes in a given BST
