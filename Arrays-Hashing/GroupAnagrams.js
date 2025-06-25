{
  class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
      const letterCountMap = new Map();

      const aCharCode = "a".charCodeAt(0);

      for (let i = 0; i < strs.length; i++) {
        const str = strs[i];
        const letterCount = new Array(26).fill(0);

        for (let j = 0; j < str.length; j++) {
          letterCount[str.charCodeAt(j) - aCharCode]++;
        }

        const letterCountArrayStr = letterCount.toString();

        if (letterCountMap.has(letterCountArrayStr)) {
          letterCountMap.get(letterCountArrayStr).push(str);
        } else {
          letterCountMap.set(letterCountArrayStr, [str]);
        }
      }

      return letterCountMap.values().toArray();
    }
  }

  {
    const solution = new Solution();
    const strs = ["act", "pots", "tops", "cat", "stop", "hat"];
    const result = solution.groupAnagrams(strs);
    console.log(result);
    // Output: [["hat"], ["act", "cat"], ["stop", "pots", "tops"]]
  }

  {
    const solution = new Solution();
    const strs = ["x"];
    const result = solution.groupAnagrams(strs);
    console.log(result);
    // Output: [["x"]]
  }
}
