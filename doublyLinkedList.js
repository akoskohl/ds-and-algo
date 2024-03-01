// create a doubly linked list

class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            previous: null
        }
        this.tail = this.head
        this.prev = this.head
        this.length = 1
    }
    append(value) {
        const newNode = new Node(value)
        this.tail.next = newNode
        newNode.prev = this.tail
        this.tail = newNode
        this.length++
    }
    prepend(value){
        const newNode = new Node(value)
        newNode.next = this.head
        this.head.prev = newNode
        this.head = newNode
        // this.previous is default to null, so no change
        this.length++
    }
    remove (index) {
        if (index >= this.length) {
            console.log("index is out of bound, cannote remove anything")
        }
        const leader = this.traverseToIndex(index-1)
        const pointer = this.traverseToIndex(index+1)
        leader.next = pointer
        this.length--
    }
    printList(){
        const array = []
        let currentNode = this.head
        while (currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next
        }
}
const myDoublyLinkedList = new DoublyLinkedList(10)
myDoublyLinkedList.append(5)
myDoublyLinkedList.append(16)
// myDoublyLinkedList.append(0)
myDoublyLinkedList.printList()

myDoublyLinkedList.prepend(1)
myDoublyLinkedList.printList()
