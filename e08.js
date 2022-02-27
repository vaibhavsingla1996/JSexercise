console.log("<--------- Understanding  type coercion --------->")

let strPlusInt = "5" + 5
console.log(strPlusInt)
// output -> 55 
// + operator with string and number treats number as string and concat both of them and vice-versa

let intPlusString = 5 + "5"
console.log(intPlusString)
// output -> 55 

let strMinusInt = "5" - 5
console.log(strMinusInt)
// output -> 0
// - operator with string and number treats string as number and does a substraction and vice-versa

let intMinusStr = 5 - "15"
console.log(intMinusStr)
// output -> -10


let boolPlusNumber = true + 5
console.log(boolPlusNumber)
// output -> 6
// true will be treated as 1 and false is treated as 0

let boolPlusString = true + "5"
console.log(boolPlusString)
// output -> true5 


let boolMinusString = false - "5"
console.log(boolMinusString)
// output -> -5

// values that js treats as false
// false
// 0
// undefiend
// "" empty string
// null

function checkBoolValue(anything, name) {
    if (anything) {
        console.log(name + " is marked as true")
    } else {
        console.log(name + " is marked as false")
    }
}

// checking false value
checkBoolValue("", "empty string")
checkBoolValue(0, "0")
checkBoolValue(undefined, "undefiend")
checkBoolValue(null, "null")
checkBoolValue(false, "false")
checkBoolValue(0.0, "float with 0.0 value")

// checking true value
checkBoolValue([], "empty array")
checkBoolValue({}, "empty obbject")
checkBoolValue("  ", "string with vale")
checkBoolValue(1000, "positive number")
checkBoolValue(-100, "negative number")
checkBoolValue(0.1, "float with some value")
checkBoolValue(1/0, "Infinity")
checkBoolValue(-1/0, "-Infinity")

console.log("\n\n<--------- Template Literals --------->\n\n")

// basic template literals
const firstName = "Vaibhav"
const lastName = "Singla"
console.log(`My first name is ${firstName}. My last name is ${lastName}.`)

// template literals with expressions

const a = 2
const b = 3
console.log(`Addition of a & b is ${a+b}.
Square of a+b is ${(a+b)**2}.`)

// using functions in template literals

function returnBool()  {
    return true
}

const literalWithFunction = `template literal with function is ${returnBool()}.`
console.log(literalWithFunction)

let person = 'Mike';
let age = 28;


// Doubt calling and setting value in function
// source -> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 
function myTag(strings, personExp, ageExp) {
  let str0 = strings[0]; // "That "
  let str1 = strings[1]; // " is a "
  let str2 = strings[2]; // "."

  let ageStr;
  if (ageExp > 99){
    ageStr = 'centenarian';
  } else {
    ageStr = 'youngster';
  }

  // We can even return a string built using a template literal
  return `${str0}${personExp}${str1}${ageStr}${str2}`;
}

let output = myTag`That ${ person } is a ${ age }.`;
console.log(output);
// That Mike is a youngster.
