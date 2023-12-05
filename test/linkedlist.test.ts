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