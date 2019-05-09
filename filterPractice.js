const arr = [1,2,3,4,5,6]
const evens = arr.filter( i => i % 2 === 0)
console.log(evens)

const sArr = ["Yo", "Ma", "Says", "Hi"]
const twoLetters = sArr.filter( i => i.length === 2)
const as = sArr.filter( i => i.includes("a"))
console.log(twoLetters)
console.log(as)