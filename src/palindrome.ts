/**
 * @name 文字列の中の文字を小文字化、リバースする
 * @param str: string, 
 * @returns bool
 */
function reverse_string(str: string): string {
    return str.replace(/\s+/g, '').toLowerCase().split('').reverse().join('')
}

/**
 * @name 引数として渡された文字列が回文か検出する
 * @param str1: string, 
 * @returns bool
 */
function is_palindrome(str1: string): boolean {
    return str1.replace(/\s+/g, '').toLowerCase() == reverse_string(str1)
}

export { is_palindrome }