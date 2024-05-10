// leetCode链接: https://leetcode.cn/problems/longest-increasing-subsequence/description/
// 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

// 子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的
// 子序列
// 。

 
// 示例 1：

// 输入：nums = [10,9,2,5,3,7,101,18]
// 输出：4
// 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
// 示例 2：

// 输入：nums = [0,1,0,3,2,3]
// 输出：4
// 示例 3：

// 输入：nums = [7,7,7,7,7,7,7]
// 输出：1
 

// 提示：

// 1 <= nums.length <= 2500
// -104 <= nums[i] <= 104
 

// 进阶：

// 你能将算法的时间复杂度降低到 O(n log(n)) 吗?

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    // 其实这个题 一定要用到 上一次的 结果，自然就要考虑 动态规划
    // dp[i] 表示，以 nums[i] 这个值，作为结尾的，最长递增子序列的，长度。很拗口，再举例解释下：
    // nums = [10, 1, 3, 2, 4, 9]
    // dp[0] = 1, 表示以 10 (因为：nums[0] = 10) 结尾的 最长递增子序列的长度为 1
    // 依次，dp[1] = 1, 以 nums[1] = 1, 以 1 结尾的 最长递增子序列的长度为 1
    // 依次，dp[2] = 2, 以 nums[2] = 3, 以 3 结尾的 最长递增子序列的长度为 2
    // ...
    // dp[i] 依赖上一个结果，dp[i] 应该取 dp[j] + 1 和 dp[i] 二者最大的一个。这里有个坑，dp[i] 可能是
    const dp = [1]
    for (let i = 1; i < nums.length; i += 1) {
        dp[i] = 1
        for (let j = 0; j < i; j += 1) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    return Math.max(...dp)
}

const nums = [10,9,2,5,3,4,7,101,18]

console.log(lengthOfLIS(nums))
// 坦白：不看答案，写不出来。。。