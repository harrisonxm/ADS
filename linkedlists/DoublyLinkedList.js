class DLL{
  constructor(){
    this.head = new Node(null,null);
    this.tail = new Node(null,null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  add(key,value){
    if(this.head.next === this.tail){
      let node = new Node(key,value);
      this.head.next = node;
      this.tail.prev = node;
      node.next = this.tail;
      node.prev = this.head;
    }
    else{
      let node = new Node(key,value)
      this.tail.prev.next = node;
      node.prev = this.tail.prev;
      node.next = this.tail;
      this.tail.prev = node;
    }
  }
  get(key){
    let runner = this.head
    while(runner){
      if(runner.key === key){
        return runner.value;
      }
      runner = runner.next;
    }
    return false;
  }
  update(key,value){
    let runner = this.head;
    while(runner) {
      if(runner.key === key){
        let val = runner.value;
        runner.value = value;
        return val;
      }
      runner = runner.next;
    }
  }
  remove(key){
    let runner = this.head;
    while(runner){
      if(runner.key === key){
        let val = runner.value;
        runner.prev.next = runner.next;
        runner.next.prev = runner.prev;
        return val;
      }
      runner = runner.next
    }
    return false;
  }
}

class Node{
  constructor(key,value){
    this.value = value;
    this.key = key;
    this.next = null;
    this.prev = null;
  }
}

dll = new DLL();
dll.add(1,2)
dll.add(3,4)
// dll.update(3,5)
dll.add(5,6)
console.log(dll.remove(5))
console.log(dll.get(3));
console.log(dll.get(4));
console.log(dll.get(5));
