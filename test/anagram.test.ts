import { is_anagram } from '../src/anagram'

// 
test('Emperor Octavian と Captain over Rome はアナグラム', () => {
    expect(is_anagram('Emperor Octavian', 'Captain over Rome')).toEqual(true);
});
