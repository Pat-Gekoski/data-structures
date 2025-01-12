declare class Node<T = any> {
    value: T;
    next: Node<T> | null;
    constructor(value: T);
}
export declare class Queue<T = any> {
    first: Node<T> | null;
    last: Node<T> | null;
    size: number;
    constructor();
    enqueue(value: T): number;
    dequeue(): T | null;
}
export {};
