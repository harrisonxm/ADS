//First in First Out
class Queue {
  constructor(){
    this.items = [];
  }
  //adding new elements to end of queue
  enqueue(element){
    this.items.push(element);
  }
  //removes element first added
  dequeue(){
    return this.items.shift();
  }
  //helper method to see what front item of queue is
  front(){
    return this.items[0]
  }
  //bool to returns true if queue has no elements, false if queue is bigger than 0
  isEmpty(){
    if(this.items.length === 0){
      return true;
    }
    return false;
  }
  //returns number of elements in queue
  size(){
    return items.length;
  }
}




let queue = new Queue
queue.enqueue(5);
queue.enqueue(7)
queue.dequeue();
console.log(queue);
console.log(queue.front())
console.log(queue.isEmpty())
