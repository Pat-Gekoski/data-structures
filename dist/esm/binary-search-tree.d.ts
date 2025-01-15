declare class Node<T = any> {
    value: T;
    left: Node<T> | null;
    right: Node<T> | null;
    constructor(value: T);
}
export declare class BinarySearchTree<T = any> {
    root: Node<T> | null;
    constructor();
    insert(value: T): BinarySearchTree<T>;
    has(value: T): boolean;
}
export {};
