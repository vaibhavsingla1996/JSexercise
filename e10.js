/*
Write a program 

1. FUNCTION randomWord(WORD LENGTH: Int) -> RETURNS RANDOM WORD 

- Above program should be expanded where it takes another arguments to cater Output and conversion in 

- UPPERFLATCASE
- camelCase
- PascalCase
- MACRO_CASE
- camel_Snake_Case
 
You can take more arguments for given function syntax to extend the program for right results. 

Bonus exercise - Appreciate if one type can be taken as input and converted into other type. 
*/

// Experiment with 
// 1. ‘back ticks’ and “single or double quotes” 
console.log("<--------- ‘back ticks’ and “single or double quotes” --------->")

const singleQuotesStr = 'singleQuotesStr'
const backTickQuotesStr = `backTickQuotesStr`

// String interporlation
console.log(singleQuotesStr + " doubleQuotesStr")
console.log(`${backTickQuotesStr} doubleQuotesStr`)

// Multiline support
console.log(singleQuotesStr + "\ndoubleQuotesStr")
console.log(`${backTickQuotesStr}
doubleQuotesStr`)

// 2. Capturing String - escaping characters \
console.log("\n<--------- Capturing String - escaping characters \ --------->\n")

console.log("\' inserting single quote")
console.log("\\ inserting backslash")
console.log("\" inserting double quote")
console.log("inserting \n newline")
console.log("-1-2-3-4,12\r34 carraige return clears everything ahead it.")
console.log(`vertical\vtab`)
console.log("tab\tadds 6 char worth space")
console.log("backspace \b removes one char")


// 3. .length
console.log("12345".length)

// 4. .toUpperCase(),
console.log("aaaaa".toUpperCase())

// 5. .toLowerCase()
console.log("AAAAA".toLowerCase())

// 6. [index],
console.log("12345"[1])

// 7. .indexOf(),
console.log("abcabc".indexOf("a"))
// this provide first index of providing char. if not present it returns -1

// 8. .lastIndexOf()
console.log("abcabc".lastIndexOf("a"))
// this provide last index of providing char. if not present it returns -1

// 9. .charAt(index),
console.log("12345".charAt(1))

// 10. .substring(index1, index2)
console.log("abcabc".substring(3,6))
// first argument is start index. If second argument is not provided it bydefault assumes last index as second arg. Also if start index is greater that length of string it returns empty string.

// 11. .slice(-3) - generally with array,
console.log("abcabc".slice(1))
// if provided positive argument it start slicing from starting of string
// if provided negative argument it start slicing from the ending of string
// if provided argument is greater than length of string it return empty string

// 12. .split(separator)
console.log("abcabc".split('a'))
// output -> [ '', 'bc', 'bc' ]

console.log('The quick brown fox jumps over the lazy dog.'.split(' '))
// output -> ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog.']

console.log('The quick brown fox jumps over the lazy dog.'.split(' ', 4))
// output -> [ 'The', 'quick', 'brown', 'fox' ]

// 13. .replace(from, to),
console.log('The quick brown fox jumps over the lazy dog.'.replace(" ", '/'))
// output -> The/quick brown fox jumps over the lazy dog.
// It only replaces first occurance of found string

// 14. .replaceAll(from, to)
console.log('The quick brown fox jumps over the lazy dog.'.replaceAll(" ", '/'))
// output -> The/quick brown fox jumps over the lazy dog.
// It only replaces all occurance of found string


// 15. .includes(character)
console.log('The quick brown fox jumps over the lazy dog.'.includes("the"))
// output -> true


console.log('The quick brown fox jumps over lazy dog.'.includes("the", 1))
// output -> false
// second argument is index from where the search start.
