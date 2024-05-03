// 给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。
// 非递减意为：元素递增或者相等
// 
// 请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。
// 
// 注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。为了应对这种情况，nums1 的初始长度为 m + n，其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。
// 
// 示例 1：
// 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// 输出：[1,2,2,3,5,6]
// 解释：需要合并 [1,2,3] 和 [2,5,6] 。
// 合并结果是 [1,2,2,3,5,6] ，其中斜体加粗标注的为 nums1 中的元素。
// 
// 示例 2：
// 输入：nums1 = [1], m = 1, nums2 = [], n = 0
// 输出：[1]
// 解释：需要合并 [1] 和 [] 。
// 合并结果是 [1] 。
// 
// 示例 3：
// 输入：nums1 = [0], m = 0, nums2 = [1], n = 1
// 输出：[1]
// 解释：需要合并的数组是 [] 和 [1] 。
// 合并结果是 [1] 。
// 
// 注意，因为 m = 0 ，所以 nums1 中没有元素。nums1 中仅存的 0 仅仅是为了确保合并结果可以顺利存放到 nums1 中。
// 
// 提示：
// nums1.length == m + n
// nums2.length == n
// 0 <= m, n <= 200
// 1 <= m + n <= 200
// -109 <= nums1[i], nums2[j] <= 109

interface JoinTwoOrderArrays<T> {
    (a: Array<T>, m: number, b: Array<T>, n: number): Array<T> // 注意区分这里不是使用 "=>" 而是 ":"
}

let joinTwoOrderArrays: JoinTwoOrderArrays<number>
// m = nums1.length; n = nums2.length
joinTwoOrderArrays = (nums1: number[], m: number, nums2: number[], n: number): Array<number> => {
    // nums1 nums2 顺序是 从 小 到 大，左 小 右 大
    // nums1 [1, 2, 3, 0, 0, 0]
    // nums2 [2, 3, 4]
    // 思路：比较 nums2 最大值 大于 nums1 的最大值，就放最右边
    let i = m - n // nums1 length
    let r = n // nums2 length
    while (i > 0 && r > 0) {
        // 比较最大值
        if (nums2[r - 1] > nums1[i - 1]) {
            nums1[m - 1] = nums2[r - 1]
            r > 0 && (r -= 1)
        } else {
            nums1[m - 1] = nums1[i - 1]
            i > 0 && (i -= 1)
        }
        m -= 1
    }
    console.log(nums1)
    return nums1;
}

joinTwoOrderArrays([1, 2, 3, 0, 0, 0, 0], 7, [2, 5, 8, 9], 4)
joinTwoOrderArrays([1, 2, 3, 5, 0, 0, 0], 7, [2, 5, 9], 3)
joinTwoOrderArrays([1, 2, 3, 5, 7, 9, 0, 0, 0], 9, [2, 5, 9], 3)
joinTwoOrderArrays([1, 2, 3, 0, 0, 0, 0, 0, 0], 9, [2, 5, 5, 7, 9, 9], 6)

// 思考：这是三路快排的解法吗？我怎么觉得就是双指针比较最大值呢？[2024.05.03 10:03]
// 思考2: 这个 nums1 的长度是两个数组之和的具体应用场景是什么？也就是这道题解决的实际问题是什么？