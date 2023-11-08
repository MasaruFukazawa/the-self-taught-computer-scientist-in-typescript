/**
 * @name バブルソート
 * @param a_list: number[]
 * @returns number[]
 */
function bubble_sort (a_list: number[]): number[] {

    const list_num: number = a_list.length - 1

    for(let i=0; i < list_num; i++ ) {
        for(let j=0; j < list_num; j++ ) {
            if (a_list[j] > a_list[j+1]) {
                [a_list[j], a_list[j+1]] = [a_list[j+1], a_list[j]]
            }
        }
    }

    return a_list
}

export { bubble_sort }