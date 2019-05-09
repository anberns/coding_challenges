/*
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    
  // O(nlogn) -> sort then iterate through one array looking for intersecting 
  // values in smaller
  
  // sort
  nums1.sort( (a,b) => { 
      if (a === b) {
          return 0;
      }
      let intA = parseInt(a, 10)
      let intB = parseInt(b, 10)
      if (intA > intB) {
          return 1;
      } else {
          return -1;
      }
  });
  nums2.sort( (a,b) => { 
      if (a === b) {
          return 0;
      }
      let intA = parseInt(a, 10)
      let intB = parseInt(b, 10)
      if (intA > intB) {
          return 1;
      } else {
          return -1;
      }
  });
  
  
  
  // iterate and search, if found add to intersection array
  const inter = [];
  for (let i = 0; i < nums1.length; ++i) {
      if (bSearch(nums2, 0, nums2.length-1, nums1[i])) {
          if (!bSearch(inter, 0, inter.length-1, nums1[i])) {
              inter.push(nums1[i]);
          }
      }
  }
  return inter.sort();
};

const bSearch = (arr, left, right, value) => {
  if (left > right) {
      return false;
  }
  let mid = Math.floor((left + right) / 2);
  
  if (arr[mid] === value) {
      return true;
  } else if (arr[mid] > value) {
      return bSearch(arr, left, mid-1, value);
  } else {
      return bSearch(arr, mid+1, right, value);
  }
  
}