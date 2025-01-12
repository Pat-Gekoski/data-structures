class Node<T = any> {
	public value: T
	public next: Node<T> | null

	constructor(value: T) {
		this.value = value
		this.next = null
	}
}

export class Queue<T = any> {
	public first: Node<T> | null
	public last: Node<T> | null
	public size: number

	constructor() {
		this.first = null
		this.last = null
		this.size = 0
	}

	public enqueue(value: T): number {
		const newNode = new Node(value)
		if (!this.first) {
			this.first = newNode
			this.last = newNode
		} else {
			this.last!.next = newNode
			this.last = newNode
		}

		return ++this.size
	}

	public dequeue(): T | null {
		if (!this.first) return null
		const temp = this.first
		if (this.first === this.last) {
			this.last = null
		}
		this.first = this.first.next
		this.size--
		return temp.value
	}
}
