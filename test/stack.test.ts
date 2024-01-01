import { Stack, ListStack } from '../src/stack'

test('Stackへのデータ追加', () => {

    let stack = new Stack()
    stack.push(100)
    stack.push(200)
    stack.push(300)
    stack.push(400)
    stack.push(500)

    expect(stack.size()).toEqual(5);

});

test('Stackからのデータ取得', () => {

    let stack = new Stack()
    stack.push(100)
    stack.push(200)
    stack.push(300)
    stack.push(400)
    stack.push(500)

    expect(stack.pop()).toEqual(500);
    expect(stack.pop()).toEqual(400);
    expect(stack.pop()).toEqual(300);
    expect(stack.pop()).toEqual(200);
    expect(stack.pop()).toEqual(100);

});

test('Stackが空か', () => {

    let stack = new Stack()
    stack.push(100)
    stack.push(200)
    stack.push(300)
    stack.push(400)
    stack.push(500)

    stack.pop()
    stack.pop()
    stack.pop()
    stack.pop()
    stack.pop()

    expect(stack.is_empty()).toEqual(true);

});

test('Stackでpopで次に取得できる', () => {

    let stack = new Stack()
    stack.push(100)
    stack.push(200)
    stack.push(300)
    stack.push(400)
    stack.push(500)

    expect(stack.peek()).toEqual(500);

});
