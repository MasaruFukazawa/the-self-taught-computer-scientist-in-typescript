/**
 * JSの配列を使用したStack
 */
class Stack {

    private _items: number[] = []

    constructor() {
        this._items = []
    }

    public push(item: number) {
        this._items.push(item)
    }

    public pop(): number | undefined {
        return this._items.pop()
    }

    public size(): number {
        return this._items.length
    }

    public is_empty(): boolean {
        return this._items.length == 0 ? true : false        
    }

    public peek(): number {
        return this._items[this._items.length - 1]
    }

}


/**
 * リストを使用したStack
 */
class ListStack {


}

export { Stack, ListStack }