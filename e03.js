// variables

/*

How to name variables. below are some suggestions
fullName - camel case
full-name
full_name - snake case

*/

// String
var courseName = "Reacts JS Bootcamp"

// Boolean
var isLoggedIn = true

// Int
var loggedCount = 34

console.log(loggedCount)
// 
var paymentMode;
paymentMode =  "Credit Card"
console.log(paymentMode);



const uid = "abc123"

// const type of variables can not be updated
// uid = "abcd123" will give runtime error

var fullName = "Vaibhav Singla"
var email = "jd@learningJS.com"
var password = "123456"
var comfirmPassword = 0
var courseCount = 0
var usLoggedInFromGoogle = false

// string interpolation
console.log("full name is " + fullName)
console.log(email)
console.log(uid)


// another way of string interpolation
console.log(`
    With unique ID: ${uid}
    User is: ${fullName}
    and his email is: ${email}
    and used the password: ${password}
`)

/*

no diff if we are assigning value for one time

var firstName = "Vaibhav"
console.log(firstName)

let firstName = "JD"
console.log(firstName)

const firstName = "Sonu"
console.log(firstName)

*/

// var variables values can be updated 
var name = "Vaibhav"
name = "Jd"
console.log(name)


// let variables values can also be updated
let age = 25

// 5 years later
age = 25+5
console.log(age)


// const variables values cannot be updated
const uuid = "asdapjfap"
console.log(uuid)


// var has function scope
function varFunctionScopeTest(someBool) {
    if (someBool) {
        var title = "var type initialized in block"
        console.log("used inside if block, "+ title) 
    }
    console.log("used inside function block, "+ title) 
}
varFunctionScopeTest(true)


// let has block scope
function letFunctionScopeTest(someBool) {
    if (someBool) {
        let title = "let type initialized in block"
        console.log("used inside if block, "+ title) 
    }
    // uncommenting below line will give the error. As let cannot be accessed outside the scope in which it is defined
    //console.log("used inside function block, "+ title) 
}
letFunctionScopeTest(true)


// const also has block scope
function constFunctionScopeTest(someBool) {
    if (someBool) {
        const title = "const type initialized in block"
        console.log("used inside if block, "+ title) 
    }
    // uncommenting below line will give the error. As let cannot be accessed outside the scope in which it is defined
    // console.log("used inside function block, "+ title) 
}
constFunctionScopeTest(true)


// funny thing happened

var schoolName = "Doon International School"

if (true) {
    var schoolName = "ARMY School"
    console.log(`
School name:- ${schoolName}
    `)
}
console.log(`
School name:- ${schoolName}
`)



let collegeName = "DCRUST"

if (true) {
    let collegeName = "Senitnel"
    console.log(`
School name:- ${collegeName}
    `)
}
console.log(`
School name:- ${collegeName}
`)

