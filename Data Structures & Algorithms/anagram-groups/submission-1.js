// optimized solution

class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const hashMap = new Map();
        const result = [];

        for(let str of strs) {
            // array to count alphabetic character, a -> z (26 characters)
            const count = new Array(26).fill(0); // prefill with "0"

            for (let char of str) {
                count[char.charCodeAt(0) - 'a'.charCodeAt(0)] +=1;
            }
            const key = count.join(',');

            console.log(count)

            if (!hashMap.has(key)) {
                hashMap.set(key, []);
            } hashMap.get(key).push(str);       
        }
        hashMap.forEach((el) => result.push(el));
        return result;
    }
}
