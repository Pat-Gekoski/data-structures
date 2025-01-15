class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
export class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let current = this.root;
        while (current) {
            if (value === current.value)
                return this;
            if (value < current.value) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            }
            else {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                current = current.right;
            }
        }
        return this;
    }
    has(value) {
        let current = this.root;
        while (current) {
            if (value === current.value) {
                return true;
            }
            current = value < current.value ? current.left : current.right;
        }
        return false;
    }
}
const tree = new BinarySearchTree();
tree.insert(58);
tree.insert(46);
tree.insert(53);
tree.insert(34);
tree.insert(45);
tree.insert(30);
tree.insert(13);
tree.insert(10);
tree.insert(16);
tree.insert(12);
tree.insert(5);
console.dir(tree, { depth: null });
