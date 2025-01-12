class Node<T = any> {
	public value: T
	public next: Node<T> | null
	public prev: Node<T> | null

	constructor(value: T) {
		this.value = value
		this.next = null
		this.prev = null
	}
}

export class DoublyLinkedList<T = any> {
	public head: Node<T> | null
	public tail: Node<T> | null
	public length: number

	constructor() {
		this.head = null
		this.tail = null
		this.length = 0
	}

	public push(value: T) {
		const node = new Node(value)
		if (!this.head) {
			this.head = node
			this.tail = node
		} else {
			this.tail.next = node
			node.prev = this.tail
			this.tail = node
		}

		this.length++
		return this
	}

	public pop(): Node<T> | undefined {
		if (!this.head) return

		const node = this.tail

		if (this.length === 1) {
			this.head = null
			this.tail = null
		} else {
			this.tail = node.prev
			this.tail.next = null
			node.prev = null
		}

		this.length--
		return node
	}

	public shift(): Node<T> | undefined {
		if (!this.head) return

		const node = this.head

		if (this.length === 1) {
			this.head = null
			this.tail = null
		} else {
			this.head = node.next
			this.head.prev = null
			node.next = null
		}

		this.length--
		return node
	}

	public unshift(value: T): Node<T> | undefined {
		const node = new Node(value)

		if (!this.head) {
			this.head = node
			this.tail = node
		} else {
			node.next = this.head
			this.head.prev = node
			this.head = node
		}

		this.length++
		return node
	}

	public get(index: number): Node<T> | undefined {
		if (index < 0 || index >= this.length) return undefined

		const mid = this.length / 2
		let position: number
		let current: Node<T>

		if (index <= mid) {
			position = 0
			current = this.head
			while (position !== index) {
				current = current.next
				position++
			}
		} else {
			position = this.length - 1
			current = this.tail
			while (position !== index) {
				current = current.prev
				position--
			}
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

	public insert(index: number, value: T) {
		if (index < 0 || index > this.length) return false
		if (index === this.length) return !!this.push(value)
		if (index === 0) return !!this.unshift(value)
		const newNode = new Node(value)
		const prevNode = this.get(index - 1)
		if (!prevNode) return false
		newNode.next = prevNode.next
		newNode.next.prev = newNode
		prevNode.next = newNode
		newNode.prev = prevNode
		this.length++
		return true
	}

	public remove(index: number): Node<T> | undefined {
		if (index < 0 || index >= this.length) return undefined
		if (index === this.length - 1) return this.pop()
		if (index === 0) return this.shift()
		const node = this.get(index)
		if (node) {
			node.prev.next = node.next
			node.next.prev = node.prev
			node.next = null
			node.prev = null
			this.length--
			return node
		}
	}
}
