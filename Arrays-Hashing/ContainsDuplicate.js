class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    const seen = new Set();

    for (const num of nums) {
      if (seen.has(num)) {
        return true;
      }
      seen.add(num);
    }

    return false;
  }
}

{
  const solution = new Solution();
  const nums = [1, 2, 3, 3];
  const result = solution.hasDuplicate(nums);
  console.log(result);
}

{
  const solution = new Solution();
  const nums = [1, 2, 3, 4];
  const result = solution.hasDuplicate(nums);
  console.log(result);
}

{
  const solution = new Solution();
  const nums = [2, 2, 1, 1, 3, 1, 2, 3, 1, 4];
  const result = solution.hasDuplicate(nums);
  console.log(result);
}

/*
Worst Case Time Complexity: O(n)
Worst case scenario: All elements in the array are unique (no duplicates found)

const seen = new Set(): O(1) - Set initialization
The for loop runs exactly n times (all elements): O(n)
Inside each iteration:

seen.has(num): O(1) - Set lookup operation
seen.add(num): O(1) - Set insertion operation


return false: O(1) - executed once at the end

Total: O(1) + O(n × (O(1) + O(1))) + O(1) = O(1) + O(n) + O(1) = O(n)

Worst Case Space Complexity: O(n)
Worst case scenario: All elements in the array are unique

seen Set stores all n unique elements: O(n)
No additional data structures or temporary arrays are created
Function call stack space: O(1)

Total: O(n) + O(1) = O(n)
The worst case occurs when the array contains all unique elements like 
[1, 2, 3, 4, 5], forcing the algorithm to examine every element and store each
 one in the Set before concluding no duplicates exist.
*/
