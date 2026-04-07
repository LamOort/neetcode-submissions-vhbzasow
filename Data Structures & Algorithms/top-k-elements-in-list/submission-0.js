// naive solution, complexity O(n.logn) due to sorting operation.

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};

        for (let num of nums) {
            if (!map[num]) {
                map[num] = 0;
            } map[num] += 1;
        }
        const storingArr = Object.entries(map).map(([num, freq]) => [
            freq,
            num
        ])
        // sort based on frequency, from highest to lowest.
        const sortedArr = storingArr.sort((a,b) => b[0] - a[0]);
        const res = sortedArr.slice(0,k).map((keyValPair) => keyValPair[1]);

        return res;
    }
}
