//hastable constructor
class HashTable{
  constructor(size=8){
    this.table = Array(size);
    this.numbuckets = this.table.length;
    this.count = 0;
    this.addLinks();
  }
  //adding linked list into buckets
  addLinks(){
    for(var i=0; i < this.numbuckets; i++){
      this.table[i] = new LinkedList();
    }
  }
  //hash function to randomize bucket location
  hash(key){
    var total = 0;
    for(var i=0; i < key.length; i++){
      total += key.charCodeAt(i);
    }
    let bucket = total % this.numbuckets;
    return bucket;
  }

  //get method for hashtable (lookup)
  get(key){
    let index = this.hash(key);
    let bucket = this.table[index];
    return bucket.get(key)
  }

  //insert method for hashtable (insert)
  insert(key,value){
    let index = this.hash(key);
    let bucket = this.table[index];
    if(bucket.get(key)){
      bucket.update(key,value);
    }
    else{
      bucket.add(key,value);
      this.count++;
    }
    if(this.count > this.numbuckets){
      this.resize();
    }
  }

//once num of key value nodes inserted is greater than the numbuckets need to resize
  resize(){
    let oldtable = this.table.slice();
    this.count = 0;
    this.table = Array(this.numbuckets*2);
    this.numbuckets = this.table.length;
    this.addLinks();
    for(var i = 0; i < oldtable.length; i++){
      let runner = oldtable[i].head.next;
      while(runner.next){
        this.insert(runner.key,runner.value);
        runner = runner.next;
      }
    }
  }

  remove(key){
    let index = this.hash(key);
    let bucket = this.table[index];
    if(bucket.get(key)){
      this.count--;
      return(bucket.remove(key))
    }
  }
}














//doubly linked list constructor
class LinkedList{
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







// Test for Hashtable


// function assert(bool) {
//   if (bool) {
//     return console.log("passed");
//   } else {
//     return console.log("failed");
//   }
// }

// let newLL = new LinkedList;
// newLL.add("abc",2);
// newLL.add("bcd",5);
// newLL.add("gbc",5);
// newLL.remove("bcd");
// assert(newLL.get("abc") === 2);
// assert(newLL.get("gbc") === 5);
// assert(newLL.get("bcd") === false);
// assert(newLL.get("gbc") === 5);
//
// let newHash = new HashTable;
// newHash.insert("abc",2);
// newHash.insert("bcd",4);
// newHash.insert("asdf",5);
// newHash.insert("abu",1);
// newHash.insert("aby",1);
// newHash.insert("abk",1);
// newHash.insert("abj",1);
// newHash.insert("habh",1);
// newHash.insert("habg",1);
// newHash.insert("hfbg",1);
// newHash.insert("habc",2);
// newHash.insert("hbcd",4);
// newHash.insert("hasdf",5);
// newHash.insert("habu",1);
// newHash.insert("haby",1);
// newHash.insert("habk",1);
// newHash.insert("habj",1);
// newHash.insert("habh",1);
// newHash.insert("habg",1);
// newHash.insert("hfbg",1);
//
// console.log('abc');
// assert(newHash.get('abc') === 2);
// console.log('bcd');
// assert(newHash.get('bcd') === 4);
// console.log('asdf');
// assert(newHash.get('asdf') === 5);
// console.log('abc');
// assert(newHash.get('abc') === 2);
// console.log('abg');
// assert(newHash.get('abg') === false);
// console.log('fbg');
// assert(newHash.get('fbg') === false);
// console.log(newHash.count);
// newHash.remove('asdf')
// console.log(newHash.count);
// console.log('asdf');
// assert(newHash.get('asdf') === false);
// assert(newHash.numbuckets === 32);
// assert(newHash.count === 16);
