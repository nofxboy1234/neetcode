class Solution {
  /**
   * Version 3: Balance of readability and efficiency
   * Time: O(n), Space: O(1)
   * Best for: Production code
   */

  /**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  isAnagram(s, t) {
    if (s.length !== t.length) return false;

    const letterCount = new Array(26).fill(0);
    const aCharCode = "a".charCodeAt(0);

    // Count frequency differences
    for (let i = 0; i < s.length; i++) {
      letterCount[s.charCodeAt(i) - aCharCode]++;
      letterCount[t.charCodeAt(i) - aCharCode]--;
    }

    // Check if all frequencies are balanced
    return letterCount.every((count) => count === 0);
  }
}

{
  const solution = new Solution();
  const s = "racecar";
  const t = "carrace";
  const result = solution.isAnagram(s, t);
  console.log(result);
}

{
  const solution = new Solution();
  const s = "jar";
  const t = "jam";
  const result = solution.isAnagram(s, t);
  console.log(result);
}

/*

Worst-Case Time Complexity: O(n)
The time complexity is determined by the operations that scale with the 
input size.

Length Check: if (s.length !== t.length) return false; This operation takes 
constant time, O(1), as it only compares two integer values.

Initialization: const letterCount = new Array(26).fill(0); This creates an a
rray of a fixed size (26) and fills it with zeros. This is a constant time 
operation, O(1), regardless of the input string lengths. const aCharCode = "a".charCodeAt(0); is also O(1).

First Loop:

JavaScript

for (let i = 0; i < s.length; i++) {
  letterCount[s.charCodeAt(i) - aCharCode]++;
  letterCount[t.charCodeAt(i) - aCharCode]--;
}
This loop iterates s.length times. Inside the loop:

s.charCodeAt(i) and t.charCodeAt(i) are constant time operations (O(1)) to get 
the ASCII value of a character.

Array access and increment/decrement (letterCount[...]++ and letterCount[...]--) 
are constant time operations (O(1)).
Therefore, the entire loop runs in O(n) time, where n is the length of 
the strings s and t.

every() Method:

JavaScript

return letterCount.every((count) => count === 0);
The every() method iterates over all elements of the letterCount array. 
Since letterCount has a fixed size of 26, this iteration takes constant time, O(1).

Combining these: The dominant factor in terms of time complexity is the first 
loop, which is O(n). All other operations are O(1). Therefore, the 
overall worst-case time complexity is O(n).

Worst-Case Space Complexity: O(1)
The space complexity is determined by the amount of memory used that scales 
with the input size.

letterCount Array: const letterCount = new Array(26).fill(0); This array 
always has a fixed size of 26, regardless of the length of the input strings 
s and t. This means it consumes a constant amount of memory.

aCharCode Variable: const aCharCode = "a".charCodeAt(0); This is a single 
variable that occupies constant space.

Combining these: All variables and data structures used by the function occupy a 
fixed amount of memory that does not depend on the input size n. Therefore, the 
worst-case space complexity is O(1).

Summary:
Worst-Case Time Complexity: O(n)

Worst-Case Space Complexity: O(1)

This aligns perfectly with the comment provided in the code: Time: O(n), Space: O(1).

*/
