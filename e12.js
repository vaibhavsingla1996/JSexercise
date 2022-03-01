

/*
Date and Time

- ways to create date, console diff type of dates
- Understand system or browser settings which effect date or time (things which can affect date object value)
- .getMonth(), getDate(), getDay(), getFullYear()
- .getHours(), .getTime()

Write below programs 

- for conversion of a date to one time zone into another time zone
- Input one type of date format (like MMDDYY) and convert into other type like YYYYMMMDD
- conversion of a certain day time into total seconds elapsed in a day starting 00 hrs

*/

// Object Literal
// with different combinations of properties, functions, nested object etc 


let user = {
    firstName: "Vaibhav",
    lastName: "Singla",
    age: 25,
    role: "Developer",
    isGraduate: true,
    getDescription: function () {
        return `Name is ${this.firstName} + ${this.lastName}. Age is ${this.age}. Profession is ${this.role}.`
    },
    info: { 
        fullName: "Vaibhav Singla"
    }
}

console.log(user.lastName)
console.log(user["age"])
user.age = 30
console.log(user.age)
console.log(user.getDescription())
console.log(user.info.fullName)