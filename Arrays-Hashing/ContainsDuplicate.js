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
  nums = [1, 2, 3, 3];
  const result = solution.hasDuplicate(nums);
  console.log(result);
}

{
  const solution = new Solution();
  nums = [1, 2, 3, 4];
  const result = solution.hasDuplicate(nums);
  console.log(result);
}

{
  const solution = new Solution();
  nums = [2, 2, 1, 1, 3, 1, 2, 3, 1, 4];
  const result = solution.hasDuplicate(nums);
  console.log(result);
}
