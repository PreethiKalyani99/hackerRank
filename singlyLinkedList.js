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
    pop(){
        if(!this.head){
            return 'no values to pop'
        }
        
        let currentNode = this.head;
        let prev = null

        while(currentNode.next){
            prev = currentNode;
            currentNode = currentNode.next;
        }

        if(prev){
            this.tail = prev
        }
        else{
            this.head = null
            this.tail = null
        }
        return currentNode.val
    }
    reverse() {
        if(!this.head){
            console.log("list is empty")
        }
        let currentNode = this.head;
        this.head = this.tail;
        this.tail = currentNode;
        let next;
        let prev = null;
        while(currentNode) {
            next = currentNode.next;
            currentNode.next = prev;
            prev = currentNode;
            currentNode = next;
        }
        return this; 
    }
    print() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.val);
            currentNode = currentNode.next;
        }
    }
}

const llist = new singlyLinkedList();
llist.push(1)
llist.push(2)
llist.push(3)
llist.push(4)
llist.push(5)
console.log("popped value => ",llist.pop())
llist.reverse()
llist.print()