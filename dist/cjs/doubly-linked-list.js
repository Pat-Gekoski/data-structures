"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoublyLinkedList = void 0;
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head)
            return null;
        const node = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.tail = node.prev;
            this.tail.next = null;
            node.prev = null;
        }
        this.length--;
        return node;
    }
    shift() {
        if (!this.head)
            return null;
        const node = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = node.next;
            this.head.prev = null;
            node.next = null;
        }
        this.length--;
        return node;
    }
    unshift(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.length++;
        return node;
    }
    get(index) {
        if (index < 0 || index >= this.length)
            return null;
        const mid = Math.floor(this.length / 2);
        let position;
        let current;
        if (index <= mid) {
            position = 0;
            current = this.head;
            while (current && position !== index) {
                current = current.next;
                position++;
            }
        }
        else {
            position = this.length - 1;
            current = this.tail;
            while (current && position !== index) {
                current = current.prev;
                position--;
            }
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
        const prevNode = this.get(index - 1);
        if (!prevNode)
            return false;
        newNode.next = prevNode.next;
        newNode.next.prev = newNode;
        prevNode.next = newNode;
        newNode.prev = prevNode;
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
        const node = this.get(index);
        if (node) {
            node.prev.next = node.next;
            node.next.prev = node.prev;
            node.next = null;
            node.prev = null;
            this.length--;
            return node;
        }
    }
}
exports.DoublyLinkedList = DoublyLinkedList;
