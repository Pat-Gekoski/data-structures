declare class Node<T = any> {
    value: T;
    next: Node<T> | null;
    constructor(value: T);
}
export declare class SinglyLinkedList<T = any> {
    head: Node<T> | null;
    tail: Node<T> | null;
    length: number;
    constructor();
    push(value: T): this;
    pop(): Node<T> | null;
    shift(): Node<T> | null;
    unshift(value: T): Node<T>;
    get(index: number): Node<T> | null;
    set(index: number, value: T): boolean;
    insert(index: number, value: T): boolean;
    remove(index: number): Node<T> | null | undefined;
    reverse(): void;
}
export {};
