
function BST(value){
  this.value = value;
  this.left = null;
  this.right = null;
}


BST.prototype.insert = function(value){
    if(value <= this.value) {
      if(!this.left){
        this.left = new BST(value);
      }
      else{
        this.left.insert(value);
      }
    }
    else if(value > this.value){
      if(!this.right){
        this.right = new BST(value);
      }
      else{
        this.right.insert(value);
      }
    }
  };

BST.prototype.contains = function(value){
  if(this.value === value){
    return true;
  }
  else {
    if(value < this.value){
      if(!this.left){
        return false;
      }
      else{
        return this.left.contains(value);
      }
    }
    else if(value > this.value){
      if(!this.right){
        return false;
      }
      else{
        return this.right.contains(value)
      }
    }
  }
}

//indorder - node touched from least to greatest
BST.prototype.depthFirstTraversal = function(iteratorFunc){

  if(this.left){
    this.left.depthFirstTraversal(iteratorFunc)
  }
  iteratorFunc(this.value);
  if(this.right){
    this.right.depthFirstTraversal(iteratorFunc)
  }
}

//preorder - parent node touched first then left then right
BST.prototype.depthFirstTraversal = function(iteratorFunc){
  iteratorFunc(this.value);
  if(this.left){
    this.left.depthFirstTraversal(iteratorFunc)
  }
  if(this.right){
    this.right.depthFirstTraversal(iteratorFunc)
  }
}

//post-order - all left children node touched then right childen node then parent node
BST.prototype.depthFirstTraversal = function(iteratorFunc){
  if(this.left){
    this.left.depthFirstTraversal(iteratorFunc)
  }
  if(this.right){
    this.right.depthFirstTraversal(iteratorFunc)
  }
  iteratorFunc(this.value)
}

var bst = new BST(50);
bst.insert(30)
bst.insert(70)
bst.insert(100)
bst.insert(60)
bst.insert(59)
bst.insert(20)
bst.insert(45)
bst.insert(35)
bst.insert(85)
bst.insert(105)
bst.insert(10)

function log(value){
  console.log(value)
}

bst.depthFirstTraversal(log)
