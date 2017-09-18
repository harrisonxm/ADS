class maxHeap{
  constructor(){
    this.store = [];
  }
  size(){
    return this.store.length;
  }
  insert(num){
    this.store.push(num);
    if(this.size() > 1){
      const idx = this.size()-1;
      this.maxHeapifyUp(idx);
    }
  }
  maxHeapifyUp(childIdx){
    if(childIdx <= 0){
      return;
    }
    let parentIdx = Math.round(childIdx/2)-1;
    let largest = parentIdx;
    if(childIdx < this.size() && this.store[childIdx] > this.store[parentIdx]){
      largest = childIdx;
    }
    if(largest !== parentIdx){
      let temp = this.store[childIdx];
      this.store[childIdx] = this.store[parentIdx];
      this.store[parentIdx] = temp;
      this.maxHeapifyUp(parentIdx);
    }
  }
  maxHeapifyDown(idx, hsize=this.size()){
    let left = 2 * idx + 1;
    let right = 2 * idx + 2;
    let largest = idx;
    if(left < hsize && this.store[left] > this.store[idx]){
      largest = left;
    }
    if(right < hsize && this.store[right] > this.store[largest]){
      largest = right;
    }
    if(largest != idx){
      [this.store[idx], this.store[largest]] = [this.store[largest], this.store[idx]];
      this.maxHeapifyDown(largest,hsize)
    }
  }
  extractMax(){
    let heapsize = this.size();
    if(heapsize < 1){
      return;
    }
    let max = this.store[0];
    this.store[0] = this.store[heapsize-1];
    this.store.length = this.store.length-1;
    heapsize = this.store.length;
    this.maxHeapifyDown(0)
    return max;
  }
  heapSort(){
    let nonleaf = Math.floor(this.size()/2)-1;
    for(let i = nonleaf; i > -1; i--){
      this.maxHeapifyDown(i);
    }
    for(let i=this.size()-1; i > 0; i--){
      [this.store[i], this.store[0]] = [this.store[0], this.store[i]];
      this.maxHeapifyDown(0, i);
    }
  }
}

let heap = new maxHeap();
heap.insert(2)
heap.insert(5)
heap.insert(20)
heap.insert(30)
heap.insert(50)
heap.insert(7)
heap.insert(2)
heap.insert(200)

heap.heapSort();

console.log(heap)
