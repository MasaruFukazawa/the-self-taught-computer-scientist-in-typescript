/**
 * @name バブルソート
 * @param a_list: number[]
 * @returns number[]
 */
function bubble_sort(a_list: number[]): number[] {

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


/**
 * @name 挿入ソート
 * @param a_list: number[]
 * @returns number[]
 */
function insertion_sort(a_list: number[]): number[] {

    const list_num: number = a_list.length

    for(let i: number = 1; i < list_num; i++) {

        const target_num: number = a_list[i]

        let j: number = i

        for ( ; j > 0 ; j--) {

            if(a_list[j - 1] > target_num) {
                a_list[j] = a_list[j - 1]
            } else {
                break
            }

        }

        a_list[j] = target_num

    }

    return a_list
}

export { bubble_sort, insertion_sort }