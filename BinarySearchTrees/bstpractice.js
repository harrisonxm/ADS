//Performance
// Look up: O(log n)



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
BST.prototype.inorderdepthFirstTraversal = function(iteratorFunc){

  if(this.left){
    this.left.inorderdepthFirstTraversal(iteratorFunc)
  }
  iteratorFunc(this.value);
  if(this.right){
    this.right.inorderdepthFirstTraversal(iteratorFunc)
  }
}

//preorder - parent node touched first then left then right
BST.prototype.preorderdepthFirstTraversal = function(iteratorFunc){
  iteratorFunc(this.value);
  if(this.left){
    this.left.preorderdepthFirstTraversal(iteratorFunc)
  }
  if(this.right){
    this.right.preorderdepthFirstTraversal(iteratorFunc)
  }
}

//post-order - all left children node touched then right childen node then parent node
BST.prototype.postorderdepthFirstTraversal = function(iteratorFunc){
  if(this.left){
    this.left.postorderdepthFirstTraversal(iteratorFunc)
  }
  if(this.right){
    this.right.postorderdepthFirstTraversal(iteratorFunc)
  }
  iteratorFunc(this.value)
}

//traversing level by level
BST.prototype.breadthFirstTraversal = function(iteratorFunc){
  var queue = [this];
  while(queue.length){
    treeNode = queue.shift();
    iteratorFunc(treeNode)
    if(treeNode.left){
      queue.push(treeNode.left);
    }
    if(treeNode.right){
      queue.push(treeNode.right)
    }
  }
}

BST.prototype.getMinVal = function(){
  if(this.left){
    return this.left.getMinVal();
  }
  else{
    return this.value;
  }
}

BST.prototype.getMaxVal = function(){
  if(this.right){
    return this.right.getMaxVal();
  }
  else{
    return this.value;
  }
}

BST.prototype.remove = function(value){
  if(!this){
    return this;
  }
  if(value < this.value){
    if(!this.left){
      return;
    }
    this.left = this.left.remove(value);
  }
  else if(value > this.value){
    if(!this.right){
      return;
    }
    this.right = this.right.remove(value);
  }
  //reached delete node
  else{
    //case: if one child node or none
    if(!this.left){
      temp = this.right;
      this.value = null;
      return temp;
    }
    else if(!this.right){
      temp = this.left;
      this.value = null;
      return temp;
    }
    //case: if two children node
    temp = this.right.getMinVal();
    this.value = temp;
    this.right = this.right.remove(temp);
  }
  return this;
}

var bst = new BST(50);
bst.insert(30)
bst.insert(20)
bst.insert(40)
bst.insert(70)
bst.insert(60)
bst.insert(80)



function log(value){
  console.log(value)
}


console.log('delete 20');
bst.remove(20);
bst.inorderdepthFirstTraversal(log);

console.log('delete 30');
bst.remove(30);
bst.inorderdepthFirstTraversal(log);

console.log('delete 32');
bst.remove(32);
bst.inorderdepthFirstTraversal(log);
