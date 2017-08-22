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
}


 let sortedArrayToBST = function(arr){
   let mid = Math.floor(arr.length/2)
    let bst = new BST();
    bst.insert(arr[mid])
    for(var i = 0; i < mid; i++){
         bst.insert(arr[i]);
         if(arr[mid+i]){
           bst.insert(arr[mid+i]);
         }
    }
    return bst.root;
 }

let array = [1,2,4,5,7,8,10,12]

let sa = sortedArrayToBST(array);
console.log(sa)
console.log(sa.left.right)
