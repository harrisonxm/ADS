//parent = Math.floor(i/2)
//left child = i*2
//right child = i*3

class minHeap {
  constructor(){
    this.heap = [null];
  }
  insert(num){
    this.heap.push(num);
    //if heap has more than 2 items
    if(this.heap.length > 2){
      //last index added
      let idx = this.heap.length-1;
      //while last index is less than its parent - have to move it up
      while(this.heap[idx] < this.heap[Math.floor(idx/2)]){
        //if haven't reached root node
        if(idx >= 1){
          //destructuring swap child node with parent node
          [this.heap[Math.floor(idx/2)], this.heap[idx]] = [this.heap[idx], this.heap[Math.floor(idx/2)]];
          //if parent node is larger than root node
          if(Math.floor(idx/2) > 1){
            idx = Math.floor(idx/2)
          } else {
            break;
          };
        };
      };
    };
  }
  remove(){
    //always remove smallest node
    let smallest = this.heap[1];
    //if more than two nodes in heap
    if(this.heap.length > 2){
      //set first element in heap to last nast element
      this.heap[1] = this.heap[this.heap.length-1];
      //now remove last element space , no longer needed
      this.heap.splice(this.heap.length-1);
      //only 2 elements left in heap
      if(this.heap.length === 3){
        //if one bigger than the other swap them
        if(this.heap[1] > this.heap[2]){
          [this.heap[1] , this.heap[2]] = [this.heap[2], this.heap[1]];
        }
        return smallest;
      }
      let i = 1;
      let left = 2 * i;
      let right = 2 * i + 1;
      while(this.heap[i] >= this.heap[left] || this.heap[i] >= this.heap[right]){
        if(this.heap[left] < this.heap[right]){
          [this.heap[i], this.heap[left]] = [this.heap[left] , this.heap[i]];
          i = 2 * i;
        } else {
          [this.heap[i] , this.heap[right]] = [this.heap[right] , this.heap[i]];
          i = 2 * i + 1;
        }
        left = 2 * i;
        right = 2 * i + 1;
        if(this.heap[left] == undefined || this.heap[right] == undefined){
          break;
        }
      }
    }
    else if(this.heap.length === 2){
      this.heap.splice(1,1);
    } else {
      return null;
    }
    return smallest;
  }

}

let heap = new minHeap();
heap.insert(2)
heap.insert(20)
heap.insert(30)
heap.insert(5)
heap.insert(20)
heap.insert(7)
heap.insert(2)


console.log(heap.heap);

//Min Heap: Almost complete BST, root node always is Min, parent node always smaller than children nodes

//The value of each child node is greater then or equal to
//the value of its parent, the min val is at the root
//levels get populated left to right
//using array to represent tree structure
//heaps are useful and efficient to store and look up data that needs order.
