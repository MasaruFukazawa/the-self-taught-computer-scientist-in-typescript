/**
 * 二分木
 */
class BinaryTree {

    public key: number
    public left_child: BinaryTree | null = null
    public right_child: BinaryTree | null = null

    constructor(key: number) {
        this.key = key
    }

    public insert_left(key: number) {

        if (this.left_child == null) {
            this.left_child = new BinaryTree(key)
        } else {
            let binary_tree: BinaryTree = new BinaryTree(key)
            binary_tree.left_child = this.left_child
            this.left_child = binary_tree
        }

    }

    public insert_right(key: number) {

        if (this.right_child == null) {
            this.right_child = new BinaryTree(key)
        } else {
            let binary_tree: BinaryTree = new BinaryTree(key)
            binary_tree.right_child = this.right_child
            this.right_child = binary_tree
        }

    }

    public breadth_first_search(key: number) {

        let current: BinaryTree[] = [this]
        let next: BinaryTree[] = []

        while (current) {

            for (let node of current) {

                if (node.key == key) {
                    return true
                }

                if (node.left_child) {
                    next.push(node.left_child)
                }

                if (node.right_child) {
                    next.push(node.right_child)
                }

            }

            current = next
            next = []

        }

        return false
    }

    public invert() {

        let current: BinaryTree[] = [this]
        let next: BinaryTree[] = []

        while (current) {

            for (let node of current) {

                if (node.left_child) {
                    next.push(node.left_child)
                }

                if (node.right_child) {
                    next.push(node.right_child)
                }

                let tmp: BinaryTree | null = node.left_child

                node.left_child = node.right_child
                node.right_child = tmp

            }

            current = next
            next = []

        }
    }
}

export { BinaryTree }