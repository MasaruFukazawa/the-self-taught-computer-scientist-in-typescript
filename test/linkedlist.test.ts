import { LinkedList } from '../src/linkedlist'

test('順方向リストにノードを追加する', () => {

    const linkedlist: LinkedList = new LinkedList();

    linkedlist.append(100)
    linkedlist.append(200)
    linkedlist.append(300)
    linkedlist.append(400)
    linkedlist.append(500)

    expect(linkedlist.datas).toEqual([100, 200, 300, 400, 500]);

});

test('順方向リストの検索', () => {

    const linkedlist: LinkedList = new LinkedList();

    linkedlist.append(100)
    linkedlist.append(200)
    linkedlist.append(300)
    linkedlist.append(400)
    linkedlist.append(500)

    expect(linkedlist.search(100)).toEqual(true);

});

test('順方向リストから要素を削除する', () => {

    const linkedlist: LinkedList = new LinkedList();

    linkedlist.append(100)
    linkedlist.append(200)
    linkedlist.append(300)
    linkedlist.append(400)
    linkedlist.append(500)

    linkedlist.remove(300)
    linkedlist.remove(100)

    expect(linkedlist.datas).toEqual([200, 400, 500]);

});

test('順方向リストから逆順にする', () => {

    const linkedlist: LinkedList = new LinkedList();

    linkedlist.append(100)
    linkedlist.append(200)
    linkedlist.append(300)
    linkedlist.append(400)
    linkedlist.append(500)

    linkedlist.reverse()

    expect(linkedlist.datas).toEqual([500, 400, 300, 200, 100]);

});

test('リストが循環しているか', () => {

    const linkedlist: LinkedList = new LinkedList();

    linkedlist.append(100)
    linkedlist.append(200)
    linkedlist.append(300)
    linkedlist.append(400)
    linkedlist.append(500)

    expect(linkedlist.detect_cycle()).toEqual(false);

});