/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  // for each index, the maximum sub-array is either
  // that index only or that index + the previous max sub-array
  // O(n) time
  let maxSum = nums[0];
  for (let i = 1; i < nums.length; ++i) {
      let currentValue = nums[i];
      let prevBest = nums[i-1]
      if (currentValue + prevBest > currentValue) {
          nums[i] = currentValue + prevBest;
      }
      if (nums[i] > maxSum) {
          maxSum = nums[i];
      }
  }
  return maxSum;
};
  
/*
-2 => [-2] => -2
1 => [1] => 1
-3 => [1,-3] => -2
4 => [4] => 4
-1 => [4,-1] => 3
2 => [4,-1,2] => 5
1 => [4.-1,2,1] => 6
-5 => [4,-1,2,1,-5] => 1
4 => [4,-1,2,1,-5,4] => 5
*/