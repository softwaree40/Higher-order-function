"use strict"
// oneWord replace all space
const oneWord = function(str){

 return str.replace(/ /g,"").toLowerCase()

}
// upper the first word
const upperTheFirstWord = function(str){

   // convert the string to array by splitting each of the word
   let splitWord = str.split(" ")
   // destruction the word into different variable 
   const [first,...others] = splitWord;
   //convert the first word in that variable (first)to uppercase and join back to string
   return [first.toUpperCase(),...others].join(" ");

}
