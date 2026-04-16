class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const suffixProds = new Array(n);
        const prefixProds = new Array(n);
        const res = new Array(n);

        prefixProds[0] = 1;
        suffixProds[n-1] = 1;

        for (let i=1; i < n; i++) {
            prefixProds[i] = nums[i-1] * prefixProds[i-1];
        }

        for (let i = n-2; i >= 0; i--) {
            suffixProds[i] = nums[i+1] * suffixProds[i+1];
        }
        
        for (let i = 0; i < n; i++) {
            res[i] = prefixProds[i] * suffixProds[i];
        }

        return res;
     }
}
