/*
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  return bSearch(nums, 0, nums.length-1, target);
};

const bSearch = (arr, left, right, value) => {
  
  if (left >= right) {
      if (arr[left] < value) {
          return left+1;
      } else {
          return left;
      }
  }
  
  let mid = Math.floor((left + right) / 2);
  
  
  if (arr[mid] === value) {
      return mid;
  } else if (arr[mid] > value) {
      return bSearch(arr, left, mid-1, value);
  } else {
      return bSearch(arr, mid+1, right, value);
  }
}