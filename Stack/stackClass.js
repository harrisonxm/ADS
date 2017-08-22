//Last in First Out
class Stack {
  constructor(){
    this.items = [];
  }
  //adding element to top/end of stack
  push(element){
    this.items.push(element);
  }
  //removing element from top;
  pop(){
    return this.items.pop();
  }
  //returns item from top of stack
  peek(){
    return this.items[this.items.length-1];
  }
  //check to see if stack has no elements
  isEmpty(){
    if(this.items.length === 0){
      return true;
    }
    return false;
  }
  //returns size of stack
  size(){
    return this.items.length;
  }
  //removes all elements from stack
  clear(){
    this.items = [];
  }
}

let stack = new Stack();
stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(7)
stack.push(5)
stack.push(6)
stack.push(7)
stack.pop();
console.log(stack.peek())
console.log(stack.size())
console.log(stack.isEmpty())
stack.clear()
console.log(stack)
