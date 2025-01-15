declare class Node<T = any> {
    value: T;
    left: Node<T> | null;
    right: Node<T> | null;
    constructor(value: T);
}
export declare class BinarySearchTree<T = any> {
    root: Node<T> | null;
    constructor();
    insert(value: T): BinarySearchTree<T> | undefined;
    has(value: T): Node<T> | null;
}
export {};
