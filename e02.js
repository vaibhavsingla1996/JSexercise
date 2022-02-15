console.log("this is a logging command")

// THIS IS USED FOR MAKING TABLES
console.log("<------ table command is used to create tables ------>")
console.table(["AUDI", "VOLVO", "FORD"])

console.table({firstname:"ABC", lastname: "DEF"})


console.log("<------ console.clear() is used to clear console ------>")
// console.clear()

console.log("<------ warn is used for warning ------>")

const myObj = {firstname:"John", lastname:"Doe"};
console.warn(myObj);

const myArr = ["Orange", "Banana", "Mango", "Kiwi"];
console.warn(myArr);

console.log("<------ time is used for calculate time ------>")

console.time();
for (let i = 0; i < 1000; i++) {
  // some code
}
console.timeEnd();

console.log("<------ can set text against default in time and time end ------>")
console.time("for loop");
for (let i = 0; i < 1000000; i++) {
  // some code
}
console.timeEnd("for loop");

let i = 0;
console.time("while loop");
while (i < 1000000) {
  i++
}
console.timeEnd("while loop");