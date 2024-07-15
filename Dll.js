class Node {
    constructor(data, next, prev) {
        this.data = data;
        this.next = null;
        this.prev = null
    }
}
class DoublyLinkedList {
    constructor() {
        this.firstNode = null;
        this.lastNode = null
    }
    InsertIntoFirstOfList(data) {
        var node = new Node(data);
        if (!this.firstNode) {
            this.firstNode = node;
            this.lastNode = node;
        } else {
            var temp = this.firstNode;
            this.firstNode = node;
            this.firstNode.next = temp;
            temp.prev = this.firstNode;
            this.firstNode.prev = null;

            // node.next=this.firstNode;
            //  this.firstNode.prev=node;
            // this.firstNode=node
        }
        this.size += 1
    }
    deleteFromTheFront(){
       if(!this.firstNode){
        this.firstNode=null;
        this.lastNode=null;
       }else{
           this.firstNode=this.firstNode.next;
           this.firstNode.prev=null;
       }
    }
    deleteFromLast(){
      let curr=this.firstNode;
      let count=0;
      while(curr!=this.lastNode ){
         curr=curr.next;
         count++;
      }
      var temp=curr.prev;
      temp.next=null;
    }
    InsertMiddleOfTheLinkedList(data, k) {
        var node = new Node(data);
          var count=1;
          let curr=this.firstNode;
           while(count!==k-1){
            curr=curr.next;
            count++
           }
        let temp=curr.next;
        curr.next=node;
        temp.prev=node;
        node.next=temp
    }
    InsertInTheEndOfTheLinkedList(data) {
        var node = new Node(data);
        var count = 1;
        var curr = this.firstNode;
        while (curr != this.lastNode) {
            curr = curr.next;
            count++;
        }
        let temp = this.lastNode;
        this.lastNode = node;
        temp.next = this.lastNode;
        this.lastNode.prev = temp
    }
    printLinkedList() {
        let head = this.firstNode;
        while (head !== null) {
            console.log(head.data, "slsls");
            head = head.next;
        }
    }
}
let dl = new DoublyLinkedList();
dl.InsertIntoFirstOfList(10);
dl.InsertIntoFirstOfList(200);
dl.InsertIntoFirstOfList(300);
dl.InsertIntoFirstOfList(400);
dl.InsertIntoFirstOfList(500);
// dl.InsertMiddleOfTheLinkedList(600000, 4)
// dl.InsertInTheEndOfTheLinkedList(80000)
dl.deleteFromTheFront()
dl.deleteFromLast();
dl.printLinkedList();
/*
prev=null
curr=head;
next=null
while(curr!=null){
next=curr.next;
curr.next=prev
prev=curr
curr=next

}



*/










