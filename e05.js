
//logical operators
console.log("\n\n<----------- Starting with logical operators ----------->\n\n")
// && AND operator
// || OR operator
// ! NOT operator

let isVerified = true
let isLoggedIn = true
let hasPaymentToken = true
let isGuest = true


if (isVerified && !isLoggedIn && hasPaymentToken) {
    console.log('Greeting message to user')
    console.log('Grant access to paid content')
} else if (isVerified || isGuest) {
    console.log('Grant access to freemium content')
} else {
    console.log("Please sign up first")
}


// datatype - Array 
console.log("\n\n<----------- Starting with Array ----------->\n\n")
const superheroes = ['Iron Man', 'Spider Man', 'Capt. America']
console.log(superheroes)

// accessing values via index
console.log("access first value : ", superheroes[0])

// calculating length of array
console.log(superheroes.length)

// accessing last value of array
console.log(superheroes[superheroes.length-1])

// String interpolation with array
console.log(`We have ${superheroes.length} superheroes`)

const numbers = [1, 2, 3, 4, 5]

// operations - adding or removing element in start/ 0 index of array
// remove first element

let num = numbers.shift()
console.log(num)
console.log(numbers)

// add new element in start of array
numbers.unshift(19)
console.log(numbers)


// operations - adding or removing element in end/(array.length-1) index of array

// remove value
let popValue = numbers.pop()
console.log(popValue)
console.log(numbers)

// add value
numbers.push(39)
console.log(numbers)

// operations - adding and removing element in middle of array
numbers.splice(2, 5, 79)
console.log(numbers)


// datatype - Objects 
console.log("\n\n<----------- Starting with Objects ----------->\n\n")

let movie = { 
    title: "Super Man",
    genre: "Action",
    releaseYear: 1997
}

console.log(movie)
console.log(movie.title)
console.log(movie.releaseYear)

movie.genre = "Action Thriller"
console.log("updated genre to " + movie.genre)


movie = { 
    title: "Spider Man",
    genre: "Action",
    releaseYear: 2000
}
console.log(movie)

const beverage = {
    name: "coke",
    price: 30,
    flavor: "orange"
}
console.log(`
Hey there is a new beverage ${beverage.name} with ${beverage.flavor} flavour at price rs${beverage.price}
`)

// FUNCTIONS 
console.log("\n\n<----------- Starting with functions ----------->\n\n")

console.log("\n Single param with functions \n")
let sayHello = function (name) {
    console.log(`Greeting message to ${name}`)
    console.log(`Hey ${name}`)
}

sayHello('Vaibhav')
let John = "John"
sayHello(John)


console.log("\n multiple params with functions \n")
let fullNameMaker = function(firstName, lastName) {
    console.log(`Happy to have you ${firstName} ${lastName}`)
}

fullNameMaker('Vaibhav', 'Singla')

console.log("\n multiple datatype params with functions \n")
let addressMaker = function(flatNo, streetName, city, pincode) {
    console.log(`Your full address is ${flatNo}, ${streetName}, ${city}, ${pincode}`)
}

addressMaker(12, "huda sector 20", "Kaithal", 136027)


console.log("\n functions returning values\n")
let addNumbers = function(num1, num2) {
    let added = num1 + num2
    return added
}

console.log(addNumbers(9, 5))

let addedNumbers = addNumbers(3, 5)
console.log(addedNumbers)

let mutiplyNumbers = function (num1, num2) {
    return num1 * num2
}

let multipliedNumbers = mutiplyNumbers(3, 5)
console.log(multipliedNumbers)

console.log("\n functions having - default params with returning values\n")
let guestUser = function(name = 'Guest', courseCount = 0) {
    return "Hello " + name + " and your course count is " + courseCount
}

console.log(guestUser("Vaibhav Singla", 0))

// DATE
console.log("\n\n<----------- Starting with DATE ----------->\n\n")

let now = new Date()

// printing full date data
console.log(now)

// printing just date
console.log(now.getDate())

// printing just month, starting jan with 0 
console.log(now.getMonth())

// printing date of week starting sunday with 0, monday with 1
console.log(now.getDay())

// setting custom date

let customDate = new Date("January 5 2010")
console.log(customDate)

// printing full year
console.log(customDate.getFullYear())


// TIME RELATED Functions

console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getSeconds())
console.log(now.getMilliseconds())


// UPDATE date using set methods

console.log(now.setFullYear(2015))
console.log(now.setMonth(2))
console.log(now.setMinutes(30))
// console.log(now.setHours(10))
console.log(now)


