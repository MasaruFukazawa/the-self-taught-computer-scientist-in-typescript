import { bubble_sort } from '../src/sort'

// バブルソート テスト
test('sort [5, 4, 3, 2, 1] to [1, 2, 3, 4, 5]', () => {
    expect(bubble_sort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
});