

/*
Write below programs 
- Input one type of date format (like MMDDYY) and convert into other type like YYYYMMMDD
- conversion of a certain day time into total seconds elapsed in a day starting 00 hrs

*/

console.log("<--------- Object Literal --------->\n")
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


console.log("\n<--------- Date and Time --------->\n")

// When called as a constructor, returns a new Date object.
console.log(new Date())


// When called as a function, returns a string representation of the current date and time, exactly as new Date().toString() does.
console.log(Date())


// Returns the numeric value corresponding to the current time—the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC, with leap seconds ignored.
console.log(Date.now())

// Custom date 
let today = new Date()
let dateOfBirth = new Date("June 15, 1996")
console.log(dateOfBirth.toString())

// month/date/year
dateOfBirth = new Date("7/1/1996")
console.log(dateOfBirth.toString())

// year, day -> month will be picked automatically.
dateOfBirth = new Date(96, 13)
console.log(dateOfBirth.toString())

console.log("\n<--------- defaults functions of Date and Time --------->\n")

dateOfBirth = new Date("June 15 1996 20:13:46")

// .getMonth() 
// returns index of month(0 being jan and 11 being dec) from the date object
console.log(dateOfBirth.getMonth())

// .getDate()
// returns date from the date object
console.log(dateOfBirth.getDate())

// .getDay()
// returns day of week(sunday being 0 and sat being 6) from the date object
console.log(dateOfBirth.getDay())

// .getFullYear()
// returns year from the date object
console.log(dateOfBirth.getFullYear())

// .getHours()
// returns hour from the date object
console.log(dateOfBirth.getHours())

// .getTime()
// returns milliseconds since Jan 1, 1970, 00:00:00.000 GMT
console.log(dateOfBirth.getTime())


console.log("\n<--------- Program for conversion of a date to one time zone into another time zone--------->\n")


//let timezones = 

function dateConversion(offsetFromUTC) {
    let date = new Date()
    console.log("current time: ", date.toString())

    // return number which is difference in minutes
    // getting a negative value means current timezone is ahead of utc
    let utc_offset = date.getTimezoneOffset()
    console.log("utc_offset: ", utc_offset)

    date.setMinutes(date.getMinutes() + utc_offset)
    console.log("UTC time: ", date.toString())

    // just add new offset 
    date.setMinutes(date.getMinutes() + offsetFromUTC)
    console.log("new Timezone time: ", date.toString())
}

// PST is +480
dateConversion(96)