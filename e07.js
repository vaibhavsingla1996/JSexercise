console.log("<--------- JS as Dynamic Typed --------->")
// Observe run time allowance 
let anything = "Vaibhav"
console.log(anything)

anything = "Singla"
console.log(anything)

anything = 25
console.log(anything)

anything = true
console.log(anything)

anything = {fname:"Vaibhav", lname: "Singla", age: 25}
console.log(anything)


// Try no mentioned type vars 

kuchBhi = "Javascript"
console.log(kuchBhi)

kuchBhi = "python"
console.log(kuchBhi)

kuchBhi = false
console.log(kuchBhi)

kuchBhi = 2017
console.log(kuchBhi)

kuchBhi = {vehicle: "car", model: 2015}
console.log(kuchBhi)

// try typeof for all kind of falsy and truthy types 

let nothing
console.log(typeof nothing)

nothing = 12
console.log(typeof nothing)

nothing = "Swift"
console.log(typeof nothing)

nothing = "iOS"
console.log(typeof nothing)

nothing = 2007
console.log(typeof nothing)

nothing = false
console.log(typeof nothing)

nothing = {language: "Swift", year: 2016, latestVersion: 5.3, isDepricated: false}
console.log(typeof nothing)

nothing = null
console.log(typeof nothing)


// Type Conversion
console.log("\n\n<--------- Type Conversion --------->\n\n")

// String conversions using String()
let myVar = 34
console.log(myVar, (typeof myVar))

myVar = String(myVar) // String(34)
console.log(myVar, (typeof myVar))

myVar = String(true)
console.log(myVar, (typeof myVar))

myVar = String([1, 2, 3, 4, 5])
console.log(myVar, (typeof myVar))

myVar = String(new Date())
console.log(myVar, (typeof myVar))

// String conversions using toString()
let convertToString = 49
console.log(convertToString, (typeof convertToString))

convertToString = convertToString.toString() // String(34)
console.log(convertToString, (typeof convertToString))

convertToString = (false).toString()
console.log(convertToString, (typeof convertToString))

convertToString = [13, 24, 33, 64, 95].toString()
console.log(convertToString, (typeof convertToString))

convertToString = (new Date()).toString()
console.log(convertToString, (typeof convertToString))


// Number conversion
let stri = Number("3443")
console.log(stri, (typeof stri))

stri = Number(true)
console.log(stri, (typeof stri))


stri = parseInt("34")
console.log(stri, (typeof stri))
// output -> 34 number

stri = parseInt("34.123")
console.log(stri, (typeof stri)) 
// output -> 34 number

stri = Number("34.123")
console.log(stri, (typeof stri))
// 3output -> 4.123 number

stri = parseFloat("49.3234")
console.log(stri, (typeof stri))
// output -> 49.3234 number


// to fixed used for precision
stri = parseFloat("79.3123234234")
console.log(stri.toFixed(3), (typeof stri))
// output -> 79.312 number

stri = parseFloat("79.31")
console.log(stri.toFixed(5), (typeof stri))
// output -> 79.31000 number

stri = Number("3443d")
console.log(stri, (typeof stri))
// output -> NAN number


strh = 5/0
console.log(strh, (typeof strh))
// output -> Infinity number

strh = -5/0
console.log(strh, (typeof strh))
// output ->  -Infinity number