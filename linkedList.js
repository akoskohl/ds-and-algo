class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = new Node(value)
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
    prepend(value){
        const newNode = new Node(value)
        newNode.next = this.head
        this.head = newNode
        this.length++
    }
}
const myLinkedList = new LinkedList(10);
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.append(0)
myLinkedList.prepend(1)
