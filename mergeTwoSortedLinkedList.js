class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

class singlyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
    }
    push(val){
        let newNode = new Node(val)

        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }
        else{
            this.tail.next = newNode
            this.tail = newNode
        }
        return val
    }
   
    mergeTwoSortedLinkedList(llist1, llist2) {
        if (!llist1.head && !llist2.head) {
            console.log("Lists are empty");
            return;
        }
        let currentNode1 = llist1.head;
        let currentNode2 = llist2.head;
        let newList = new singlyLinkedList();
    
        while (currentNode1 || currentNode2) {
            if (!currentNode1) {
                if (!newList.head) {
                    newList.head = currentNode2;
                    newList.tail = currentNode2;
                } else {
                    newList.tail.next = currentNode2;
                    newList.tail = currentNode2;
                }
                currentNode2 = currentNode2.next;
                break
            }
            if (!currentNode2) {
                if (!newList.head) {
                    newList.head = currentNode1;
                    newList.tail = currentNode1;
                } else {
                    newList.tail.next = currentNode1;
                    newList.tail = currentNode1;
                }
                currentNode1 = currentNode1.next;                
                break
            }
    
            if (currentNode1.val <= currentNode2.val) {
                if (!newList.head) {
                    newList.head = currentNode1;
                    newList.tail = currentNode1;
                } else {
                    newList.tail.next = currentNode1;
                    newList.tail = currentNode1;
                }
                currentNode1 = currentNode1.next;
            } else {
                if (!newList.head) {
                    newList.head = currentNode2;
                    newList.tail = currentNode2;
                } else {
                    newList.tail.next = currentNode2;
                    newList.tail = currentNode2;
                }
                currentNode2 = currentNode2.next;
            }
        }
        return newList
    }
    
    print() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.val);
            currentNode = currentNode.next;
        }
    }
}

const llist1 = new singlyLinkedList();
llist1.push(1)
llist1.push(2)
llist1.push(3)
llist1.push(4)
llist1.push(7)
const llist2 = new singlyLinkedList();
llist2.push(3)
llist2.push(6)

let result = new singlyLinkedList()
result.mergeTwoSortedLinkedList(llist1, llist2).print()