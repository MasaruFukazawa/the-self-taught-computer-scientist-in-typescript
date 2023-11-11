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


/**
 * @name マージソート
 * @param a_list: number[]
 * @returns number[]
 */
function merge_sort(a_list: number[]): number[] {

    if (a_list.length > 1) {

        const mid: number = Math.floor(a_list.length / 2)

        const left: number[] = a_list.slice(0, mid)
        const right: number[] = a_list.slice(mid)

        merge_sort(left)
        merge_sort(right)

        let left_i: number = 0
        let right_i: number = 0
        let a_list_i: number = 0

        while ((left_i < left.length) && (right_i < right.length)) {

            if (left[left_i] <= right[right_i]) {
                a_list[a_list_i] = left[left_i]
                left_i++
            } else {
                a_list[a_list_i] = right[right_i]
                right_i++
            }

            a_list_i++

        }

        while(left_i < left.length) { 
            a_list[a_list_i] = left[left_i]
            left_i++ 
            a_list_i++                
        }

        while(right_i < right.length) { 
            a_list[a_list_i] = right[right_i]
            right_i++ 
            a_list_i++                
        }
    }

    return a_list
}

export { bubble_sort, insertion_sort, merge_sort }