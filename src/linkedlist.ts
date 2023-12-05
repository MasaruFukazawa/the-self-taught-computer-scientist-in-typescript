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

        let previous: Node | null = this.head
        let current: Node | null | undefined = this.head?.next

    }

}

export { LinkedList }