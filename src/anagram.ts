/**
 * @name 文字列の中の文字を小文字化、昇順ソートする
 * @param str: string, 
 * @returns bool
 */
function sort_string(str: string): string {
    return str.replace(/\s+/g, '').toLowerCase().split('').sort().join('')
}

/**
 * @name 引数として渡された２つの文字列がアナグラムか検出する
 * @param
 *  str1: string, 
 *  str2: string,
 * @returns bool
 */
function is_anagram(str1: string, str2: string): boolean {
    return sort_string(str1) == sort_string(str2)
}

export { is_anagram }