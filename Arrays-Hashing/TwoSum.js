class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
    const numsMap = new Map();

    for (let i = 0; i < nums.length; i++) {
      const diff = target - nums[i];

      if (numsMap.has(diff)) {
        return [numsMap.get(diff), i];
      }

      numsMap.set(nums[i], i);
    }
  }
}

{
  const solution = new Solution();
  const nums = [3, 4, 5, 6];
  const result = solution.twoSum(nums, 7);
  console.log(result);
}

/*

Worst-Case Time Complexity: O(n)
The time complexity is primarily determined by the loop and the operations 
performed within it.

numsMap Initialization: const numsMap = new Map(); This operation takes 
constant time, O(1).

for Loop: The loop iterates through the nums array once, 
from i = 0 to nums.length - 1. In the worst case, the loop will run n times, 
where n is the length of the nums array.

Inside the loop, the following operations occur:

const diff = target - nums[i];: Arithmetic subtraction and array access are 
constant time operations, O(1).

if (numsMap.has(diff)): Checking for the existence of a key in a Map 
typically takes average O(1) time. In the worst case, for a hash map (which JavaScript's Map is implemented as), this can degrade to O(k) where k is the number of elements in the map in the case of many hash collisions. However, for a well-implemented hash map, the amortized worst case for has is O(1).

return [numsMap.get(diff), i];: Retrieving a value from a Map (like has) 
also takes average O(1) and amortized worst-case O(1) time.

numsMap.set(nums[i], i);: Adding a key-value pair to a Map also takes 
average O(1) and amortized worst-case O(1) time.

Since each operation inside the loop takes (amortized) constant time, 
and the loop runs n times, the overall worst-case time complexity of the 
twoSum function is dominated by the loop, making it O(n).

Worst-Case Space Complexity: O(n)
The space complexity is determined by the auxiliary space used by the function, 
primarily the numsMap.

numsMap: In the worst-case scenario, the loop might complete without finding 
a pair until it has iterated through almost all elements. For example, if the target can only be formed by the last two elements or if no such pair exists, the numsMap will end up storing almost all n elements from the nums array. Each entry in the map stores a number as a key and its index as a value.

Therefore, in the worst case, the numsMap could store up to n−1 entries 
(or n entries if no solution is found and the loop completes), 
where n is the length of the nums array. The space consumed by the Map grows 
linearly with the number of elements it stores.

Conclusion:

Worst-Case Time Complexity: O(n)

Worst-Case Space Complexity: O(n)












Deep Research

Canvas



*/
