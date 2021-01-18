 "use strict"
// oneWord replace all space
const oneWord = function(str){

 return str.replace(/ /g,"").toLowerCase();

};
// upper the first word
const upperTheFirstWord = function(str){

   // convert the string to array by splitting each of the word
   let splitWord = str.split(" ");
   // destruction the word into different variable 
   const [first,...others] = splitWord;
   //convert the first word in that variable (first)to uppercase and join back to string
   return [first.toUpperCase(),...others].join(" ");

};
const capitalizeFirstLetter = function(str){
     let result = []
    // split the word example: welcome to school => ["welcome","to","school"]
    let splitWordNow = str.split(" ")
    for(const eachWord of splitWordNow){

       const [firstWord,...others] = eachWord
      result.push(firstWord.toUpperCase() + others.join(""))
    
    }
    return result
}
// creating higher order function that take the str arg and function
const higherOrderFunction = function(str, fx) {
  console.log(`This is original string: ${str}`)
  console.log(`Transform original string: ${fx(str)}`)
  console.log(`What is my function Name: ${fx.name}`)
  console.log(`We need use transformer function ${fx(str)}`)
}
higherOrderFunction("javaScript is the best language!",capitalizeFirstLetter)
higherOrderFunction("we are back to school",capitalizeFirstLetter)
//Writting functions that return another functions

const greeting = function(greet){

    return function(name){

       console.log(`${greet} ${name}`)
       console.log(`${greeting.name}`)

    }
    

}

// Using greeting function as arrow function

const greetingArrow = greet => name => {

    return (console.log(`${greet} ${name}`),
            console.log(`${greetingArrow.name}`)
     )
    

}

greetingArrow("Welcome")("Wale")

// Using call and apply method 
const lufthansa = {
airline: "Lufthansa",
iataCode: "LH",
bookings: [],

}

const deltaAirLine = {
 airline: "delta Airline",
 iataCode: "H34",
 bookings: []

}
//using call method to bind object to a function.Which take the object as arg and list of arg pass to it
const book = function (flightNumber,name){
    console.log(`${this.name} booked a seat on ${this.airline} flight ${this.iataCode} ${this.flightNumber}`);
    this.bookings.push(this.name,this.airline,this.flightNumber,this.iataCode)
  console.log(this.bookings)
 }

book.call(deltaAirLine,23456,"Wale Abiodun")
book.call(lufthansa,231111,"Ajagunna")


//Apply method take array of argument 

//Binding method

const addVAT= function(rate){

  return function(value){

    console.log(value + value * rate)

  }
  

}
console.log("check if it run",addVAT(100))
// immediate invoke function IIFE9
  (()=> console.log("i am okay"))();
  const realName = ()=>{
     console.log("We are home")


  }

var array=[1,2,3,4,5];
console.log(array.splice(2));

// function declaration
function school() {
 
   return "i am working to school"

}

console.log(school())
// Object litera 

const roboot ={
   firstName: "John",
   lastName: "faith",
   sitDown: function(){
      console.log('sit down')
      console.log(this.firstName + this.lastName)
   }

}
roboot.sitDown()

function retrunFun(){

           (name)=>{
   return `Hello ${name}`

 }

}
retrunFun()("wale")