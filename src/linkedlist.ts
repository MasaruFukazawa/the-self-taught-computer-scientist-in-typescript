/**
 * ノード : 順方向リストの要素
 * 
 * @class
 */
class Node {

    private _data: number
    private _next: Node | null

    constructor(data: number, next: Node | null = null) {
        this._data = data
        this._next = next
    }

    get data(): number {
        return this._data
    }

    get next(): Node | null {
        return this._next
    }

    set next(node: Node) {
        this._next = node
    }

}


/**
 * 順方向リスト
 * 
 * @class
 */
class LinkedList {

    private _head: Node | null

    constructor() {
        this._head = null
    }

    get head(): Node | null {
        return this._head
    }

    set head(node: Node) {
        this._head = node
    }

    get datas(): number[] {

        let return_datas: number[] = []

        let current: Node | null = this._head

        while(current) {
            return_datas.push(current.data)
            current = current.next
        }

        return return_datas
    }

    public append(data: number) {

        if (!this._head) {
            this._head = new Node(data)
            return 
        }

        let current: Node | null = this._head

        while(current?.next) {
            current = current.next            
        }

        current.next = new Node(data)
    }

    public search (target: number): boolean {

        let current: Node | null = this._head

        while(current) {
            if(current.data == target) return true
            current = current.next
        }   

        return false
    }

    public remove(target: number) {

        if (!this._head) return

        let previous: Node | null = this._head
        let current: Node | null | undefined = this._head?.next

        if (previous && current) {

            while (current) {

                if (current.data == target) {
                    previous.next = current.next as Node
                }

                previous = current
                current = current.next
            }

        }

        if (this._head?.data == target) {
            this._head = this._head.next
        }

    }

    public reverse() {

        if (!this._head) return
        if (!this._head.next) return 

        let current: Node | null | undefined = this._head
        let next: Node | null = current.next
        let previous: Node | null = null

        while (current) {

            next = current.next
            current.next = previous as Node
            previous = current
            current = next
            
        }
    
        this._head = previous
    }

    public detect_cycle(): boolean {

        if (!this._head) return false

        let slow: Node = this._head
        let fast: Node = this._head

        while (true) {

            try{
                slow = slow.next as Node
                fast = fast.next?.next as Node
            } catch (error) {
                return false
            }

            if (slow == fast) {
                return true
            }

        }

    }
}

export { LinkedList }