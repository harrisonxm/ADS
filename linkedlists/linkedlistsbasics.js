
// linked list constructor function
// head and tail pointing to null because no nodes
function LinkedList(){
  this.head = null;
  this.tail = null;
}

//node constructor function takes in val, next , prev parameters
function Node(value, next, prev){
  this.value = value;
  this.next = next;
  this.prev = prev;
}

//new object instances of constructor function linkedlist
var LL = new LinkedList();

//new instance of node
var node1 = new Node(100, 'node2', null)

//prototype method that all instances of LinkedList have access to
//adds to front of linkedlist
//function takes in parameter of value
LinkedList.prototype.addToHead = function(value) {
  //create new instance of Node and pass in value
  //this.next parameter of new node becomes this.head because newnode is now the new head
  //this.prev is now null because the new node added to front
  var newNode = new Node(value, this.head, null);
  //if linkedlist not empty, set the currents heads prev to the new Node
  if (this.head) this.head.prev = newNode;
  //if linkedlist is empty set tail to newnode because theres only one node
  else this.tail = newNode;
  this.head = newNode;
};

LinkedList.prototype.addToTail = function(value){
//create node with value passed from func
//set this.next to null because it will be the tail
//set this.prev to the linkedlists current tail
  var newNode = new Node(value, null, this.tail );
  if(this.tail) {
    this.tail.next = newNode
  }else {
    this.head = newNode
  }
  this.tail = newNode
}

LinkedList.prototype.removeHead = function() {
  //if list is empty just return null
  if(!this.head) return null;
  //set var val to be heads value
  var val = this.head.value;
  //now we set the new head to be equal to current heads next
  this.head = this.head.next;
  //if there is a head present now we set prev to null
  if(this.head) {
    this.head.prev = null;
  //else if no head present and list is empty set tail to null
  } else {
    this.tail = null
  }
    return val;
};

LinkedList.prototype.removeTail = function() {
  //if list empty
  if(!this.tail) return null;
  //if not empty store value of current tail node
  var val = this.tail.value;
  //set new tail to current tail to prev
  this.tail = this.tail.prev;
  //after removing tail check to see if list is empty
  if(this.tail) {
    this.tail.next = null
  } else {
    this.head = null
  }
  return val
}

//return a value if the search value matches a value in the linked list
LinkedList.prototype.search = function (searchValue){
  //set a var representing current node, we start at head
  var currentNode = this.head
  //if current node exists keep runing
  while(currentNode){
    //if current node value at any time matches search value return the value
    if(currentNode.value === searchValue) return currentNode.value
    //interating through list
    currentNode = currentNode.next
  }
  //if got to the end and didnt match value then return null
  return null
}

LinkedList.prototype.indexOf = function(value){
  //store all indexes in array
  var indexes = [];
  //keep current index count of node
  var currentindex = 0;
  //starting point to travel through linked list
  var currentNode = this.head;
  //keep running as long as theres a head value
  while(currentNode){
    //if the nodes value equals value passed then we add current index to indexes array
    if(currentNode.value === value) {
      indexes.push(currentindex)
    }
    //to increase indexcount
    currentindex++
    //allows iteration through list
    currentNode = currentNode.next
  }
  return indexes
}

var LL = new LinkedList()
LL.addToHead(10)
LL.addToHead(20)
LL.addToHead(10)
// LL.addToTail(20)
// LL.addToTail(50)

console.log(LL)

//BIG O for linked list

//for Add/remove head or tail  -- Constant Time - O (1)
//head and tail pointers always pointing to their location so we know where they are

//Searching through Linked list
//Linear time complexity
//O (n)
//worst case scenario have to iterate through linked list


//Practical Uses
//Online games

//Memory Management Benefits:
//data doesn't have to stored together, can be broken up into little pieces
//if memory filled in certain places pointers can point to next
