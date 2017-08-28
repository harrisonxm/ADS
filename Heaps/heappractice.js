
let maxHeapifyDown = function(a,hsize,idx){
  let left = 2 * idx + 1;
  let right = 2 * idx + 2;
  let largest = idx;
  if(left < hsize && a[left] > a[idx]){
    largest = left;
  }
  if(right < hsize && a[right] > a[largest]){
    largest = right;
  }
  if(largest != idx){
    [a[idx], a[largest]] = [a[largest], a[idx]];
    maxHeapifyDown(a,hsize,largest)
  }
}

let insert = function(arr,num){
  arr.push(num);
  if(arr.length > 1){
    const idx = arr.length-1;
    maxHeapifyUp(arr, arr.length, idx);
  }
}

let maxHeapifyUp = function(a,hsize,childIdx){
  if(childIdx <= 0){
    return;
  }
  let parentIdx = Math.round(childIdx/2)-1;
  let largest = parentIdx;
  if(childIdx < hsize && a[childIdx] > a[parentIdx]){
    largest = childIdx;
  }
  if(largest !== parentIdx){
    let temp = a[childIdx];
    a[childIdx] = a[parentIdx];
    a[parentIdx] = temp;
    maxHeapifyUp(a,hsize,parentIdx);
  }
}


let minHeapify = function(a,hsize,idx){
  let left = 2 * idx + 1;
  let right = 2 * idx + 2;
  let smallest = idx;
  if(left < hsize && a[left] < a[idx]){
    smallest = left;
  }
  if(right < hsize && a[right] < a[smallest]){
    smallest = right;
  }
  if(smallest != idx){
    [a[idx], a[smallest]] = [a[smallest], a[idx]];
    minHeapify(a,hsize,smallest)
  }
}
//using max heapify
let heapSort1 = function(arr){
  let hsize = arr.length;
  let nonleaf = Math.floor(arr.length/2)-1;

  for(let i = nonleaf; i > -1; i--){
    maxHeapifyDown(arr,hsize,i);
  }

  for(let i=hsize-1; i > 0; i--){
    [arr[i], arr[0]] = [arr[0], arr[i]];
    maxHeapifyDown(arr,i,0);
  }
}

//using min heapify
let heapSort2 = function(arr){
  let hsize = arr.length;
  let nonleaf = Math.floor(arr.length/2)-1;

  for(let i = nonleaf; i > -1; i--){
    minHeapify(arr,hsize,i);
  }

  for(let i=hsize-1; i > 0; i--){
    [arr[i], arr[0]] = [arr[0], arr[i]];
    minHeapify(arr,i,0);
  }
}

//extract method
let extractMax = function(a){
  let heapsize = a.length;
  if(heapsize < 1){
    return;
  }
  let max = a[0];
  a[0] = a[heapsize-1];
  a.length = a.length-1;
  heapsize = a.length;
  maxHeapify(a,heapsize,0)
  return max;
}

let arr1 = [];
insert(arr1,2)
insert(arr1,5)
insert(arr1,20)
insert(arr1,30)
insert(arr1,50)
insert(arr1,7)
insert(arr1,2)
insert(arr1,200)

for(let i = 3; i > -1; i--){
  maxHeapifyDown(arr1,arr1.length,i);
}
// heapSort1(arr1)

console.log(arr1)



//Almost complete BST properties:
//non leaves - 1 to floor(n/2);
//leaves - floor(n/2) + 1 to n
// n represents number of nodes in a given BST

//[ 20, 20, 19, 12, 5, 15, 10, 2 ]
