const array = [1,2,3,4,5,6];
const array3 = ["a","b","c","d"]

console.log(array);

const array2 = array.map( (i) => {
  return i += 2;
})

const array4 = array3.map( (i) => {
  return i += "_1"
})

console.log(array2)
console.log(array4)