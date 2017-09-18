class listNode {
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

function mergeSortedLists(l1,l2){
  let dummy = new listNode(0);
  let head = dummy;
  while(l1 && l2){
    if(l1.val < l2.val){
      dummy.next = l1;
      dummy = dummy.next;
      l1 = l1.next;
    }
    else{
      dummy.next = l2;
      dummy = dummy.next;
      l2 = l2.next;
    }
  }
  if(l1){
    dummy.next = l1;
  }
  else{
    dummy.next = l2;
  }
  return head.next;
}

let i1 = new listNode(2)
let i2 = new listNode(5)
let i3 = new listNode(7)
let i4 = new listNode(3)
let i5 = new listNode(11)


i1.next = i2;
i2.next = i3;
i4.next = i5;
let res = mergeSortedLists(i1, i4);
console.log(res)
console.log(res.next)
console.log(res.next.next)
console.log(res.next.next.next)
