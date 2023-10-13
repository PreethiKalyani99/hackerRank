class Node{
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}

class doublyLinkedList{
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
            return;
        }
        let currentNode = this.head
        let prev = null

        while(currentNode.next){
            prev = currentNode
            currentNode = currentNode.next
        }
        if(prev){
            this.tail = prev
        }
        else{
            this.tail = null
            this.head = null
        }
        return currentNode.val
    }
    reverse(){
        let currentNode = this.head
        this.head = this.tail
        this.tail = currentNode
        let prev = null

        while(currentNode){
            let next = currentNode.next
            currentNode.next = prev
            prev = currentNode
            currentNode.prev = currentNode
            currentNode = next
        }
    }
    print(){
        let currentNode = this.head
        
        while(currentNode){
            console.log(currentNode.val)
            currentNode = currentNode.next
        }
    }
}

const dlist = new doublyLinkedList()

dlist.push(1)
dlist.push(2)
dlist.push(7)
dlist.push(4)
dlist.push(5)
console.log("popped value = ",dlist.pop())
dlist.reverse()
dlist.print()
