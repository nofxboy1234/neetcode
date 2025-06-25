{
  class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
      const anagramGroups = new Map(); // Stores key (frequency string) -> array of anagrams

      for (const str of strs) {
        // Create a frequency count array for the current string
        const counts = new Array(26).fill(0); // 26 for 'a' through 'z'

        for (let i = 0; i < str.length; i++) {
          // Get character code and convert to 0-25 index
          const charCode = str.charCodeAt(i) - "a".charCodeAt(0);
          counts[charCode]++;
        }

        // Convert the frequency array into a unique string key
        // Example: "eat" -> [1,0,0,0,1,0,...1,...] -> "1#0#0#0#1#0#...#1#..."
        const key = counts.join("#");

        // Add the current string to the group corresponding to its key
        if (anagramGroups.has(key)) {
          anagramGroups.get(key).push(str);
        } else {
          anagramGroups.set(key, [str]);
        }
      }

      // Return all the values from the map, which are the grouped anagrams
      return Array.from(anagramGroups.values());
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
