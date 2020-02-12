/*
  Brute force method
  1. loop through all numbers in range.
  2. check if they fit criteria
  3. return that number.
*/

const STARTRANGE = 240298;
const ENDRANGE = 784956;
let nums = 0;


for (let i = STARTRANGE; i <= ENDRANGE; i++) {

   if (numCheck(i)) nums++

}

console.log("number of matches:", nums);

function numCheck(num) {

   /* checks
      1. digits never decrease (they increase or are equal)
      2. two adjacent digits are the same. (111111 passes, so more than two can be same)
   */

   let hasTwoAdj = false


   // converts number to array of numbers  
   num = num.toString().split("").map(e => parseInt(e));

   for (let i = 0; i < num.length - 1; i++) {


      let a = num[i];
      let b = num[i + 1];
   
      
      // return false if digits decrease;
      if (b < a) return false;
      if (a == b) hasTwoAdj = true;
   }

   if (hasTwoAdj) return num.join("");

   return false
}


