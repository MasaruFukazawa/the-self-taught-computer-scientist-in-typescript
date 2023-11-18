import { is_palindrome } from '../src/palindrome'

// 
test('Hannahが回文か検出', () => {
    expect(is_palindrome('Hannah')).toEqual(true);
});
