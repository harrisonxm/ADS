
let buildMaxHeap = function(arr){
  let hsize = arr.length;
  let nonleaf = Math.floor(arr.length/2)-1;
  for(let i = nonleaf; i > -1; i--){
    maxHeapify(arr,hsize,i);
  }
}

let maxHeapify = function(a,hsize,idx){
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
    maxHeapify(a,hsize,largest)
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
    maxHeapify(arr,hsize,i);
  }

  for(let i=hsize-1; i > 0; i--){
    [arr[i], arr[0]] = [arr[0], arr[i]];
    maxHeapify(arr,i,0);
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

let arr1 = [5,2,10,12,20,15,19,20];
heapSort2(arr1)
console.log(arr1)


//Almost complete BST properties:
//non leaves - 1 to floor(n/2);
//leaves - floor(n/2) + 1 to n
// n represents number of nodes in a given BST

//[ 20, 20, 19, 12, 5, 15, 10, 2 ]
