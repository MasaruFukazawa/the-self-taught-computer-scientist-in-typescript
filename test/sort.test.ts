import { bubble_sort, insertion_sort, merge_sort } from '../src/sort'

// バブルソート テスト
test('bubble sort [5, 4, 3, 2, 1] to [1, 2, 3, 4, 5]', () => {
    expect(bubble_sort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
});

// 挿入ソート テスト
test('insertion sort [5, 4, 3, 2, 1] to [1, 2, 3, 4, 5]', () => {
    expect(insertion_sort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
});

// マージソート テスト
test('merge sort [5, 4, 3, 2, 1] to [1, 2, 3, 4, 5]', () => {
    expect(merge_sort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
});