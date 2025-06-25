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
