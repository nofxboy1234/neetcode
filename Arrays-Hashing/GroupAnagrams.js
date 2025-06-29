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

/*

Let's break down the worst-case time and space complexity of the 
groupAnagramsOptimized JavaScript code.

For context, let:

N be the number of strings in the input array strs.

K be the maximum length of a string in the input array.

Worst Case Time Complexity: O(N⋅K)
The dominant operations contributing to the time complexity are:

Outer Loop Iteration: The code iterates through each string in the strs 
array once. This contributes N iterations.

Inner Loop (Frequency Counting):

Inside the outer loop, for each str, we iterate through its characters to 
build the counts array.

In the worst case, a string can have a length of K.

So, this inner loop runs K times for each string.

Operations inside this loop (charCodeAt, array increment) are O(1).

Therefore, building the frequency array for one string takes O(K) time.

Key Generation:

After building the counts array (which has a fixed size of 26), we use 
counts.join('#') to create the key string.

Joining 26 elements into a string takes O(26) time, which is constant time, 
effectively O(1).

Map Operations:

anagramGroups.has(key), anagramGroups.get(key), and 
anagramGroups.set(key, value) operations (for string keys) are, 
on average, O(L key) where L key
​
  is the length of the key. In our case, the key length is constant 
  (26 digits + 25 '#' delimiters, so ≈51 characters). Thus, these are O(1) 
  on average.

In a worst-case scenario for hash maps (very rare with good hash functions 
and string keys), these could degrade to O(N) if all keys hash to the same 
bucket, but for typical JavaScript Map implementations and string keys, we assume average O(1).

Putting it Together:
For each of the N strings:

We spend O(K) time to count character frequencies.

We spend O(1) time to generate the key string.

We spend O(1) time for the map operation.

Total Time Complexity = N×(O(K)+O(1)+O(1))=O(N⋅K)

Worst Case Space Complexity: O(N⋅K)
The space complexity is determined by the storage used by the anagramGroups Map.

Storing Keys:

In the worst case, if all N input strings are unique and not anagrams of 
each other, the anagramGroups Map will store N distinct keys.

Each key is a frequency count string. As discussed, these keys have a fixed 
length (around 51 characters).

So, the space for keys is N×O(1)=O(N).

Storing Values (The Actual Strings):

The values in the anagramGroups Map are arrays, and these arrays ultimately 
store all the original strings from the input strs.

In the worst case, the total number of characters across all strings in the 
input strs is approximately N⋅K (if all N strings have maximum length K).

All these characters must be stored in the values of the anagramGroups Map.

Putting it Together:
Total Space Complexity = (Space for Keys) + (Space for Values)
Total Space Complexity = O(N)+O(N⋅K)

Since K can be up to 100, N⋅K is the dominant term.
Therefore, the Worst Case Space Complexity is O(N⋅K).

In summary:

Worst Case Time Complexity: O(N⋅K)

Worst Case Space Complexity: O(N⋅K)

This frequency counting approach is generally preferred over the sorting 
approach (O(N⋅KlogK) time, O(N⋅K) space) because it reduces the time complexity, 
especially for longer strings where logK can be significant.

*/
