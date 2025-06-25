class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    const tallies = {};

    for (const num of nums) {
      tallies[num] = (tallies[num] || 0) + 1;
    }

    return Object.values(tallies).filter((tally) => tally >= 2).length > 0;
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
