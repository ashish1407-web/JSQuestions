class Node {
    constructor(data, next) {
        this.data = data;
        this.next = null
    }
}
class SinglyLinkedList {
    constructor() {
        this.firstNode = null;
        this.lastNode = null
    }
    InsertIntoLinkedList(data) {
        const node = new Node(data);
        if (!this.firstNode) {
            this.firstNode = node;
            this.lastNode = node
        } else {
            let temp = this.firstNode;
            this.firstNode = node;
            this.firstNode.next = temp
        }
    }
    InsertIntoLast(data) {
        const node = new Node(data)
        if (!this.lastNode && !this.lastNode) {
            this.lastNode = node;
            this.firstNode = node;
        } else {
            let curr = this.firstNode;
            while (curr != null) {
                curr = curr.next;
            }
            let temp = this.lastNode;
            this.lastNode = node;
            temp.next = this.lastNode
        }
    }
    InsertIntoMiddle(data, k) {
        let node = new Node(data);
        if (this.firstNode == k) {
            InsetIntoFirst(node);
        } else {
            let head = this.firstNode;
            let count = 1;
            while (count !== k - 1) {
                head = head.next;
                count++;
            }
            let temp = head.next;
            head.next = node;
            node.next = temp;
        }

    }
    DeleteFromFront() {
        let temp = this.firstNode;
        this.firstNode = this.firstNode.next;
        temp.next = null;
    }
    DeleteFromLast() {
        let temp = this.firstNode;
        if (!this.firstNode) {
            return "No node for delete"
        } else if (this.firstNode == this.lastNode) {
            this.DeleteFromFront();
        } else {
            let curr = this.firstNode
            while (curr.next !== this.lastNode) {
                curr = curr.next
            }
            this.lastNode = curr;
            curr.next = null;
        }
    }
    DeleteFromPosition(k) {
        let count = 1;
        let curr = this.firstNode;
        while (count !== k) {
            count++;
            curr = curr.next;
        }
        let temp = curr.next;
        curr.next = temp.next;
        temp.next = null;
    }
    printTheMiddleOfTheLinkedList(head) {
        head = this.firstNode;
        console.log(head, "headdddd")
        let lastPtr = head;
        let slowPtr = head;
        while (lastPtr.next !== null && lastPtr.next.next !== null) {
            lastPtr = lastPtr.next.next;
            slowPtr = slowPtr.next;
        }
        return slowPtr
    }
    //    reverseOfTheLinkedList(){
    //         const head=this.firstNode;
    //           let curr=head;
    //           let next=null;
    //           let prev=null;
    //         while(curr.next!==null){
    //             next=curr.next;
    //             curr.next=prev;
    //             prev=next;
    //             next=curr
    //         }         
    //     return prev;
    //    }
    reverseOfTheLinkedList() {
        let head = this.firstNode;
        var prev = null;
        var current = head;
        var next = null;
        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        // head=prev;
        // return head;
        return prev;
    }
    printLinkedList() {
        let curr = this.firstNode;
        while (curr != null) {
            console.log(curr.data, "skks");
            curr = curr.next;
        }
    }
}
let sl = new SinglyLinkedList();
sl.InsertIntoLinkedList(100)
sl.InsertIntoLinkedList(200)
sl.InsertIntoLinkedList(1000)
sl.InsertIntoLinkedList(7000)
sl.InsertIntoLast(7700000000)
// sl.InsertIntoLast(8000)
sl.InsertIntoLast(90000)
// sl.InsertIntoMiddle(76767677676, 3)
// sl.DeleteFromFront()
// sl.DeleteFromLast()
// sl.DeleteFromPosition(4)
console.log("skkkkkkkkkk")
let ggg = sl.printTheMiddleOfTheLinkedList();
console.log("opopo", ggg.data)
sl.printLinkedList();
console.log("sjsssssssssssssssss")
// let head=list.firstNode;
var a = sl.reverseOfTheLinkedList();
console.log(a);
while (a) {
    console.log(a.data);
    a = a.next;
}



















