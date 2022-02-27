
console.log("\n<--------- Experiment Array --------->\n")
console.log("\n<--------- different ways to create Array --------->\n")

let arr = []
console.log(arr)

arr = [1, 2, 3, 4]
console.log(arr)

arr = Array()
console.log(arr)
console.log("length of arr is " + arr.length)

arr = Array(2)
console.log("length of arr is " + arr.length)
console.log(arr)

arr = Array(2, 3, 4)
console.log("length of arr is " + arr.length)
console.log(arr)

console.log("\n<--------- try out same types and different type elements --------->\n")

arr = [1, 3, 4, 5]
console.log(arr)

arr = [1, "3", "4", 5]
console.log(arr)

arr = [1, "asdad", 4.1223, true]
console.log(arr)

console.log("\n<--------- .length --------->\n")

arr = Array(2, 3, 4)
console.log("length of arr is " + arr.length)
console.log(arr)

console.log("\n<--------- .isArray() --------->\n")
console.log(Array.isArray(arr))

console.log("\n<--------- [index] --------->\n")
console.log(arr[0])
// providing index outside the array length will give undefined

console.log("\n<--------- indexOf(val) --------->\n")
console.log(arr.indexOf(1))
// if value is not found -1 is returned.

console.log("\n<--------- push(val) --------->\n")
// push appends the value at the end
arr.push(1)
console.log(arr)

console.log("\n<--------- pop() --------->\n")
// pop removes the last value
arr.pop()
console.log(arr)

console.log("\n<--------- unshift(value) --------->\n")
// unshift appends the value at index 0
arr.unshift(5)
console.log(arr)

console.log("\n<--------- shift() --------->\n")
// shift removes the value at index 0
arr.shift(5)
console.log(arr)


console.log("\n<--------- splice(from, to) --------->\n")
const newArr = arr.splice(1, 1)
console.log(newArr)

arr = [1, 2, 3, 4, 5, 6]
console.log(arr)

console.log("\n<--------- reverse() --------->\n")
console.log(arr.reverse())

console.log("\n<--------- concat(array) --------->\n")
console.log(arr.concat(["1", "2", "3"]))


console.log("\n<--------- sort(func) --------->\n")
console.log(arr.sort())

console.log("\n<--------- find(func) --------->\n")
arr = [2, 4, 6, 1]
console.log(arr.find(element => element > 5))