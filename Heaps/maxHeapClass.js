class maxHeap{
  constructor(){
    //need 0 index to be null to work proper
    this.heap = [null];
  }
  insert(num){
    this.heap.push(num);
    if(this.heap.length > 2) {
      let idx = this.heap.length-1;
      while(this.heap[idx] > this.heap[Math.floor(idx/2)]){
        if(idx >= 1){
          [this.heap[Math.floor(idx/2)], this.heap[idx]] = [this.heap[idx] , this.heap[Math.floor(idx/2)]];
          if(Math.floor(idx/2) > 1){
            idx = Math.floor(idx/2);
          }
          else{
            break;
          }
        }
      }
    }
  }
  remove(){
    let largest = this.heap[1];
    if(this.heap.length > 2){
      this.heap[1] = this.heap[this.heap.length-1];
      this.heap.splice(this.heap.length-1);
      if(this.heap.length === 3){
        if(this.heap[1] < this.heap[2]){
          [this.heap[1], this.heap[2]] = [this.heap[2] , this.heap[1]];
        }
        return largest;
      }
      let i = 1;
      let left = i * 2;
      let right = i * 2 + 1;
      while(this.heap[i] <= this.heap[left] || this.heap[i] <= this.heap[right]){
        if(this.heap[left] < this.heap[right]){
          [this.heap[i] , this.heap[left]] = [this.heap[left] , this.heap[i]];
          i = i * 2;
        }
        else{
          [this.heap[i] , this.heap[right]] = [this.heap[right] , this.heap[i]];
          i = i * 2 + 1;
        }
        left = 2 * i;
        right = 2 * i + 1;
        if(this.heap[left] === undefined || this.heap[right] === undefined){
          break;
          }
        }
      }
      else if(this.heap.length === 2){
        this.heap.splice(1,1);
      }
      else{
        return null;
      }
      return largest;
    }
    sort(){
        let sortedMaxArr = [];
        while(this.heap.length > 1){
          sortedMaxArr.push(this.heap.remove());
        }
        return sortedMaxArr;
    }
  }

let heap = new maxHeap;
heap.insert(50)
heap.insert(40)
heap.insert(55)
heap.insert(20)
heap.insert(30)
heap.remove()
heap.remove()
console.log(heap.heap.sort())

//Max Heap: Almost complete BST, root node always is Max, parent node always larger than children nodes

//Big O
//worst : (n log n)

//Good For
//quick access to max or min;
//insertion is relatively fast
//used for priority queues, schedulers , order statiscs
