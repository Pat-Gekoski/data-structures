"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BinarySearchTree = void 0;
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (true) {
            if (value === current.value)
                return undefined;
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }
            else {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
    }
    has(value) {
        let current = this.root;
        while (current) {
            if (value === current.value) {
                return current;
            }
            current = value < current.value ? current.left : current.right;
        }
        return null;
    }
}
exports.BinarySearchTree = BinarySearchTree;
