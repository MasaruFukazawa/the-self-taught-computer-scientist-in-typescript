import { BinaryTree } from '../src/tree'

test('検索', () => {

    let binary_tree = new BinaryTree(100)
    binary_tree.insert_left(200)
    binary_tree.insert_right(300)

    expect(binary_tree.breadth_first_search(300)).toEqual(true);
});