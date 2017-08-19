
class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(){
    this.root = null;
  }
  insert(value){
    if(!this.root){
      this.root = new Node(value)
    }
    else{
      this.insertNode(this.root, value)
    }
  }

  insertNode(node, value){
    if(value <= node.value){
      if(!node.left){
        node.left = new Node(value)
      }
      else{
        this.insertNode(node.left, value);
      }
    }
    else if(value > node.value){
      if(!node.right){
        node.right = new Node(value);
      }
      else{
        this.insertNode(node.right, value);
      }
    }
  }
  depthFirstTraversal(order,iteratorFunc){
    this.depthFirstTraversalNode(this.root, order, iteratorFunc)
  }

  depthFirstTraversalNode(node, order, iteratorFunc){
    if(order === 'pre-order'){
      iteratorFunc(node.value);
    }
    if(node.left){
      this.depthFirstTraversalNode(node.left, order, iteratorFunc);
    }
    if(order === 'in-order'){
      iteratorFunc(node.value);
    }
    if(node.right){
      this.depthFirstTraversalNode(node.right, order, iteratorFunc);
    }
    if(order === 'post-order'){
      iteratorFunc(node.value);
    }
  }
  breadthFirstTraversal(iteratorFunc){
    this.breadthFirstTraversalNode(this.root, iteratorFunc);
  }
  breadthFirstTraversalNode(node, iteratorFunc){
    let queue = [node];
    while(queue.length){
      let levelNode = queue.shift();
      iteratorFunc(levelNode.value)
      if(levelNode.left){
        queue.push(levelNode.left)
      }
      if(levelNode.right){
        queue.push(levelNode.right)
      }
    }
  }

  getMin(value){
    this.getMinNode(this.root, value);
  }
  getMinNode(node, value){
    if(value < node.value){
      this.getMinNode(value);
    }
    else{
      return value;
    }
  }
}


var bst = new BST();

bst.insert(30)
bst.insert(20)
bst.insert(40)
bst.insert(70)
bst.insert(60)
bst.insert(80)

function log(value){
  console.log(value)
}

console.log('in-order')
bst.depthFirstTraversal('in-order', log)
console.log('pre-order')
bst.depthFirstTraversal('pre-order', log)
console.log('post-order')
bst.depthFirstTraversal('post-order', log)
console.log('breadthFirstTraversal')
bst.breadthFirstTraversal(log)
