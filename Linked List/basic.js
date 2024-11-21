class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.length = 0
    }

    addFirst(data) {
        const newNode = new Node(data)
        newNode.next = this.head
        this.head = newNode
        this.length++
    }

    deleteFirst() {
        if (!this.head) {
            throw new Error("Linked list empty")
        }
        this.head = this.head.next
        this.length--
    }

    addLast(data) {
        if (!this.head) {
            this.addFirst(data)
            return
        }
        const newNode = new Node(data)
        let current = this.head
        while (current.next) {
            current = current.next
        }
        current.next = newNode
        this.length++
    }

    deleteLast() {
        if (!this.head) {
            throw new Error("Linked list empty")
        }
        if (!this.head.next) {
            this.head = null;
            this.length--;
            return;
        }
        let current = this.head, secondLast = current
        while (current.next) {
            secondLast = current
            current = current.next
        }
        secondLast.next = null
        this.length--
    }

    addAtIndex(index, data) {
        if (index < 0 || index > (this.length - 1)) {
            throw new Error("Index out of bound")
        }
        if (index === 0) {
            this.addFirst(data)
            return
        }
        const newNode = new Node(data)
        //using second last to make sure new data is added to correct position
        let current = this.head, secondLast = current, counter = 0
        while (counter !== index) {
            counter++
            secondLast = current
            current = current.next
        }
        newNode.next = secondLast.next
        secondLast.next = newNode
        this.length++
    }

    deleteAtIndex(index) {
        if (index < 0 || index > (this.length - 1)) {
            throw new Error("Index out of bound")
        }
        let current = this.head, counter = 0, secondLast = current
        while (counter !== index) {
            counter++
            secondLast = current
            current = current.next
        }
        secondLast.next = current.next
        this.length--
    }

    size() {
        return this.length
    }

    print() {
        if (!this.head) {
            throw new Error("Linked list empty")
        }
        const arr = []
        let current = this.head
        while (current) {
            arr.push(current.data)
            current = current.next
        }
        console.log("Linked List data -> ", arr, "Size-> ", this.length)
    }
}

const linkedList = new LinkedList()
linkedList.addFirst(1)
linkedList.print()
// linkedList.addLast(4)
// linkedList.print()
// linkedList.addAtIndex(1,2)
// linkedList.print()
// linkedList.deleteFirst()
// linkedList.print()
linkedList.deleteLast()
linkedList.print()
// linkedList.addFirst(1)
// linkedList.print()
// linkedList.addLast(4)
// linkedList.print()
// linkedList.addAtIndex(1,2)
// linkedList.print()
// linkedList.deleteAtIndex(2)
// linkedList.print()
