
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
  getMinNode(node = this.root){
    if(node.left){
      return this.getMinNode(node.left);
    }
    else {
      return node;
    }
  }
  remove(value){
    return this.removeNode(this.root, value);
  }
  removeNode(node = this.root, value){
    let temp;
    if(!node){
      return;
    }
    else if(value < node.value){
      if(!node.left){
        return;
      }
      node.left = this.removeNode(node.left, value);
    }
    else if(value > node.value){
      if(!node.right){
        return;
      }
      node.right = this.removeNode(node.right, value);
    }
    else{
      if(!node.left){
        temp = node.right;
        node.value = null;
        return temp;
      }
      else if(!node.right){
        temp = node.left;
        node.value = null;
        return temp;
      }
      else{
        temp = this.getMinNode(node.right);
        node.value = temp.value;
        node.right = this.removeNode(node.right, temp.value)
      }
    }
    return node;
  }
  findNode(value, node=this.root){
    if(node === null){
      return false;
    }
    if(value === node.value){
      return true;
    }
    else if(value < node.value){
      return this.findNode(value, node.left);
    }
    else if(value > node.value){
      return this.findNode(value, node.right);
    }
  }
  minDepth(node = this.root){
    if(!node){
      return 0;
    }
    if(!node.left && !node.right){
      return 1;
    }
    else if(!node.left){
      return this.minDepth(node.right)+1;
    }
    else if(!node.right){
      return this.minDepth(node.left)+1;
    }
    return Math.min(this.minDepth(node.left), this.minDepth(node.right))+1;
  }
  maxDepth(node = this.root){
    if(!node){
      return 0;
    }
    if(!node.left && !node.right){
      return 1;
    }
    else if(!node.right){
      return this.maxDepth(node.left)+1;
    }
    else if(!node.left){
      return this.maxDepth(node.right)+1;
    }
    return Math.max(this.maxDepth(node.left), this.maxDepth(node.right))+1
  }
}


var bst = new BST();
// bst.insert(30)
// bst.insert(40)
// bst.insert(70)
// bst.insert(80)
// bst.insert(100)
// bst.insert(90)
// bst.insert(120)
// bst.insert(110)
// bst.insert(115)
// bst.insert(105)
// bst.insert(107)
bst.insert(30)
bst.insert(20)
bst.insert(10)
bst.insert(40)
bst.insert(50)
bst.insert(51)

function log(value){
  console.log(value)
}

// console.log('in-order')
// bst.depthFirstTraversal('in-order', log)
// console.log('pre-order')
// bst.depthFirstTraversal('pre-order', log)
// console.log('post-order')
// bst.depthFirstTraversal('post-order', log)
// console.log('breadthFirstTraversal')
// bst.breadthFirstTraversal(log)


// bst.remove(100);
// console.log(bst.root.right.right.right.right.right.left)
// console.log(bst.findNode(100))

console.log(bst.minDepth())
console.log(bst.maxDepth())
