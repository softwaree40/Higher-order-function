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

// const greeting = function(greet){

//     return function(name){

//        console.log(`${greet} ${name}`)
//        console.log(`${greeting.name}`)

//     }
    

// }

// Using greeting function as arrow function

const greetingArrow = greet => name => {

    return (console.log(`${greet} ${name}`),
            console.log(`${greetingArrow.name}`)
     )
    

}

greetingArrow("Welcome")("Wale")