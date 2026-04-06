class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();

        for(let i =0; i<nums.length; i++) {
          const difference = target - nums[i];

            if(map.has(difference)) {
                return [i, map.get(difference)]
            } else {
                map.set(nums[i], i)
            }
        }
        return []
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                    
}
 