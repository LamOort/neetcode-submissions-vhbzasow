// naive solution

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hashMap = new Map();
        const result = [];

        for (let str of strs) {
            const sortedStr = str.split("").sort().join("");

            if (!hashMap.has(sortedStr)) {
                hashMap.set(sortedStr, []);
            } 
            hashMap.get(sortedStr).push(str);

        }
        hashMap.forEach((el) => result.push(el));
        return result;
    }
}
