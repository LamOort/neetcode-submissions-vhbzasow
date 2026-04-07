class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const counts = {};
        const freq = Array.from({ length: nums.length + 1 }, () => []);

        for (const num of nums) {
            counts[num] = (counts[num] || 0) + 1;
        } 

        for (const c in counts) {
            freq[counts[c]].push(parseInt(c))   
        }
        console.log(freq);

        const res = [];
        for (let i = freq.length - 1; i > 0; i--) {
            for(const n of freq[i]){
                res.push(n);
                if(res.length === k) {
                    return res;
                }
            }
        }
    }
}
