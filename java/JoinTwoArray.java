class Solution {
    public void merge(int[] nums1, int m, int[] nums2, int n) {
        int i = m; int r = n;
        while (i >= 0 && r > 0) {
            // num1 长度较小时 特殊兼容处理
            if (i == 0 && r > 0) {
                for (int j = 0; j < r; j += 1) {
                    nums1[j] = nums2[j];
                }
                System.out.print(Arrays.toString(nums1));
                return;
            }
            int nums1Item = nums1[i - 1];
            int nums2Item = nums2[r - 1];
            if (nums1Item > nums2Item) {
                // 最后一个值 数组2 小，就把 数组1 最后一个值放末尾，然后 数组1 下标左移
                nums1[i + r - 1] = nums1Item;
                i -= 1;
            } else {
                // 最末尾 数组2 大，把数组2 方 i + r - 1 处，然后 数组2 下标左移
                nums1[i + r - 1] = nums2Item;
                r -= 1;
            }
        }
        System.out.print(Arrays.toString(nums1));
    }
}