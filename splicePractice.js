let str = "Hey there buddy.";
const sArr = str.split(" ")
sArr.splice(0,1,"Yo")
console.log(sArr.join(" "))

const arr = [1,2,3,4,5,6]
arr.splice(1,2,9)
console.log(arr)