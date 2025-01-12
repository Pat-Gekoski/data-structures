class Node<T = any> {
	public value: T
	public next: Node<T> | null

	constructor(value: T) {
		this.value = value
		this.next = null
	}
}

export class SinglyLinkedList<T = any> {
	public head: Node<T> | null
	public tail: Node<T> | null
	public length: number

	constructor() {
		this.head = null
		this.tail = null
		this.length = 0
	}

	public push(value: T) {
		const newNode = new Node<T>(value)
		if (!this.head) {
			this.head = newNode
			this.tail = this.head
		} else {
			this.tail.next = newNode
			this.tail = newNode
		}
		this.length++
		return this
	}

	public pop(): Node<T> | undefined {
		if (!this.head) return

		if (this.head === this.tail) {
			const poppedNode = this.head
			this.head = null
			this.tail = null
			this.length--
			return poppedNode
		}

		let current = this.head
		while (current.next && current.next !== this.tail) {
			current = current.next
		}

		const poppedNode = this.tail
		current.next = null
		this.tail = current
		this.length--
		return poppedNode
	}

	public shift(): Node<T> | undefined {
		if (!this.head) return
		const current = this.head
		this.head = current.next
		if (!this.head) {
			this.tail = null
		}
		this.length--
		return current
	}

	public unshift(value: T): Node<T> {
		const newNode = new Node(value)
		if (!this.head) {
			this.head = newNode
			this.tail = newNode
		} else {
			newNode.next = this.head
			this.head = newNode
		}
		this.length++
		return newNode
	}

	public get(index: number): Node<T> | undefined {
		if (index < 0 || index >= this.length) return undefined

		let current = this.head
		let position = 0

		while (position !== index) {
			if (!current) return undefined
			current = current.next
			position++
		}

		return current
	}

	public set(index: number, value: T): boolean {
		const foundNode = this.get(index)
		if (foundNode) {
			foundNode.value = value
			return true
		}
		return false
	}

	public insert(index: number, value: T): boolean {
		if (index < 0 || index > this.length) return false
		if (index === this.length) return !!this.push(value)
		if (index === 0) return !!this.unshift(value)
		const newNode = new Node(value)
		const prev = this.get(index - 1)
		if (!prev) return false
		const temp = prev.next
		prev.next = newNode
		newNode.next = temp
		this.length++
		return true
	}

	public remove(index: number): Node<T> | undefined {
		if (index < 0 || index >= this.length) return undefined
		if (index === this.length - 1) return this.pop()
		if (index === 0) return this.shift()
		const prev = this.get(index - 1)
		if (prev) {
			const removedNode = prev.next
			prev.next = removedNode.next
			this.length--
			return removedNode
		}
	}

	public reverse() {
		let node = this.head
		this.head = this.tail
		this.tail = node

		let prev = null

		while (node !== null) {
			const nextNode = node.next
			node.next = prev
			prev = node
			node = nextNode
		}
	}
}
