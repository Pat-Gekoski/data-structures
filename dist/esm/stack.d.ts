declare class Node<T = any> {
    value: T;
    next: Node<T> | null;
    constructor(value: T);
}
export declare class Stack<T = any> {
    first: Node<T> | null;
    last: Node<T> | null;
    size: number;
    constructor();
    push(value: T): number;
    pop(): T | null;
}
export {};
