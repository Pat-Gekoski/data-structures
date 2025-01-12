class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
export class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head)
            return null;
        if (this.head === this.tail) {
            const poppedNode = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return poppedNode;
        }
        let current = this.head;
        while (current.next && current.next !== this.tail) {
            current = current.next;
        }
        const poppedNode = this.tail;
        current.next = null;
        this.tail = current;
        this.length--;
        return poppedNode;
    }
    shift() {
        if (!this.head)
            return null;
        const current = this.head;
        this.head = current.next;
        if (!this.head) {
            this.tail = null;
        }
        this.length--;
        return current;
    }
    unshift(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return newNode;
    }
    get(index) {
        if (index < 0 || index >= this.length)
            return null;
        let current = this.head;
        let position = 0;
        while (position !== index) {
            if (!current)
                return null;
            current = current.next;
            position++;
        }
        return current;
    }
    set(index, value) {
        const foundNode = this.get(index);
        if (foundNode) {
            foundNode.value = value;
            return true;
        }
        return false;
    }
    insert(index, value) {
        if (index < 0 || index > this.length)
            return false;
        if (index === this.length)
            return !!this.push(value);
        if (index === 0)
            return !!this.unshift(value);
        const newNode = new Node(value);
        const prev = this.get(index - 1);
        if (!prev)
            return false;
        const temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }
    remove(index) {
        if (index < 0 || index >= this.length)
            return null;
        if (index === this.length - 1)
            return this.pop();
        if (index === 0)
            return this.shift();
        const prev = this.get(index - 1);
        if (prev && prev.next) {
            const removedNode = prev.next;
            prev.next = removedNode.next;
            this.length--;
            return removedNode;
        }
    }
    reverse() {
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        while (node !== null) {
            const nextNode = node.next;
            node.next = prev;
            prev = node;
            node = nextNode;
        }
    }
}
