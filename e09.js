console.log("<--------- Implementing Math functions--------->")

// PI
console.log("\n<--------- PI --------->\n")

const piValue = Math.PI
console.log(piValue)
// output -> 3.141592653589793

const piValueWithOperator = Math.PI + 1
console.log(piValueWithOperator)
// output -> 4.141592653589793

const piValueWithString = Math.PI + "1"
console.log(piValueWithString)
// output -> 3.1415926535897931
// this just adds on in the last just as we learnt in type coersion

// .round()
console.log("\n<--------- .round() --------->\n")

const floatRound = Math.round(123.12323)
console.log(floatRound)
// output -> 123

const floatRound2 = Math.round(123.5)
console.log(floatRound2)
// output -> 124

const stringRound = Math.round("123.5")
console.log(stringRound, (typeof stringRound))
// output -> 124, number
// round converts string into number and rounds the value.

// .ceil()
// take the upper value
console.log("\n<--------- .ceil() --------->\n")

const floatCeil = Math.ceil(123.12323)
console.log(floatCeil)
// output -> 124

const floatCeil2 = Math.ceil(123.9)
console.log(floatCeil2)
// output -> 124

const stringCeil = Math.ceil("123.5")
console.log(stringCeil, (typeof stringCeil))
// output -> 124, number
// ceil converts string into number and rounds the value.

// .floor()
// take the lower value
console.log("\n<--------- .floor() --------->\n")

const floatFloor = Math.floor(123.12323)
console.log(floatFloor)
// output -> 123

const floatFloor2 = Math.floor(123.9)
console.log(floatFloor2)
// output -> 123

const stringFloor = Math.floor("123.5")
console.log(stringFloor, (typeof stringFloor))
// output -> 123, number
// Floor converts string into number and rounds the value.

// .sqrt()
// square root of value
console.log("\n<--------- .sqrt() --------->\n")

const sqrt1 = Math.sqrt(9)
console.log(sqrt1)
// output -> 3

const sqrt2 = Math.sqrt(10)
console.log(sqrt2)
// output -> 3.1622776601683795

const stringSqrt2 = Math.sqrt("asdd")
console.log(stringSqrt2)
// output -> NaN

const stringSqrt = Math.sqrt("asdd")
console.log(stringSqrt)
// output -> 3.1622776601683795
// sqrt converts string into number and finds the sqrt of the value.

// .abs()
// absolute of value. converts negative to positive value
console.log("\n<--------- .abs() --------->\n")

const abs1 = Math.abs(9)
console.log(abs1)
// output -> 9

const abs2 = Math.abs(-10)
console.log(abs2)
// output -> 10

const abs3 = Math.abs(-10.1)
console.log(abs3)
// output -> 10.1

const absString = Math.abs("-10.1")
console.log(absString)
// output -> 10.1
// abs converts string into number and finds the abs of the value.


const absString2 = Math.abs("-adfaf")
console.log(absString2)
// output -> NaN


// .pow()
// of value
console.log("\n<--------- .pow() --------->\n")

const pow1 = Math.pow(2, 2)
console.log(pow1)
// output -> 4

const pow2 = Math.pow(-10, 3)
console.log(pow2)
// this is simple math negative base with odd power returns a negative
// output -> -1000

const pow3 = Math.pow(100, -2)
console.log(pow3)
// this becomes 1/(100 ** 2) which is close to 0.0001
// output -> 0.00009999999999999999

const pow4 = Math.pow(100, 1/2)
console.log(pow4)
// 1/x power works as root such as above.
// output -> 10


const powString = Math.pow("abc", 2)
console.log(powString)
// output -> NaN

const powString2 = Math.pow("2", 2)
console.log(powString2)
// output -> 4
// pow converts string into number and finds the exp of the value.


// intersting example
const powString3 = Math.pow("2", true)
console.log(powString3)
// output -> 2


// .min()
// minimum value of collection
console.log("\n<--------- .min() --------->\n")

const min1 = Math.min(9, 10, 11, -1)
console.log(min1)
// output -> -1

let minArr = [(1/3), 10, 11.12, 1]
const min2 = Math.min(...minArr)
console.log(min2)
// output -> 0.3333333333333333

const minString = Math.min("a", "aa", "abc", "aba")
console.log(minString)
// output -> NaN

const minString2 = Math.min("1", "1.4", "0.5555", true)
console.log(minString2)
// output -> 0.5555


// .max()
// maximum value of collection
console.log("\n<--------- .max() --------->\n")

const max1 = Math.max(9, 10, 11, -1)
console.log(max1)
// output -> 11

let maxArr = [(1/3), 10, 11.12, 1]
const max2 = Math.max(...maxArr)
console.log(max2)
// output -> 11.2



// .random()
// returns a random value between 0 and 1
console.log("\n<--------- .random() --------->\n")

const random1 = Math.random()
console.log(random1)
// output -> something random


// Generating random number with max value
function getRandomMax(max) {
    return Math.floor(Math.random() * max)
}

console.log(getRandomMax(7))
// expected output: a number from 0 to < max value provided

// Getting a random number between two values

function getRandomBetweenMinMax(min, max) {
    return (Math.random() * (max-min)) + min
}
console.log(getRandomBetweenMinMax(1, 5))
// expected output: a number between min and max value provided

