const str = "Let sleeping dogs lie.";
const lStr = str.toLowerCase();
const rStr = lStr.replace(/\./g, "")
console.log(rStr)
const sArr = rStr.split(" ");
sArr.sort()
console.log(sArr)
sArr.sort( (a,b) => {
  // return 1 for swap
  if (a > b) {
    return -1;
  } else if (a < b) {
    return 1;
  } else {
    return 0;
  }
})
console.log(sArr)