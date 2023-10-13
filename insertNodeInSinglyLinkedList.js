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
    insert(position, data){
        let newNode = new Node(data)

        if(!this.head){
            newNode.next = null
            // console.log(newNode)
            return newNode.val
        }

        let currentNode = this.head

        position = position - 1

        if(position === 0) {
            newNode.next = this.head
            this.head = newNode
    
            return newNode
        }
        let i = 0
        while(i !== position && currentNode){
            currentNode = currentNode.next
            i++
        }
        newNode.next = currentNode.next
        currentNode.next = newNode
        return currentNode
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
// llist.push(1)
// llist.push(2)
// llist.push(3)
// llist.push(4)
// llist.push(5)
console.log(llist.insert(1,6))
llist.print()