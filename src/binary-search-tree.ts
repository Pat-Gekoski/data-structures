class Node<T = any> {
	public value: T
	public left: Node<T> | null
	public right: Node<T> | null

	constructor(value: T) {
		this.value = value
		this.left = null
		this.right = null
	}
}

export class BinarySearchTree<T = any> {
	public root: Node<T> | null

	constructor() {
		this.root = null
	}

	public insert(value: T): BinarySearchTree<T> | undefined {
		const newNode = new Node(value)

		if (this.root === null) {
			this.root = newNode
			return this
		}

		let current = this.root
		while (true) {
			if (value === current.value) return undefined
			if (value < current.value) {
				if (current.left === null) {
					current.left = newNode
					return this
				}
				current = current.left
			} else {
				if (current.right === null) {
					current.right = newNode
					return this
				}
				current = current.right
			}
		}
	}

	public has(value: T): Node<T> | null {
		let current = this.root

		while (current) {
			if (value === current.value) {
				return current
			}
			current = value < current.value ? current.left : current.right
		}

		return null
	}
}
