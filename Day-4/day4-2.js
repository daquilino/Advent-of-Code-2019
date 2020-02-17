/*
  Brute force method
  1. loop through all numbers in range.
  2. check if they fit criteria
  3. return that number.
*/

const STARTRANGE = 240298;
const ENDRANGE = 784956;
let nums = 0;

//Iterate though input, checking if number passes requirements
function main() {

   for (let i = STARTRANGE; i <= ENDRANGE; i++) {
      if (numCheck(i)) nums++
   }

   console.log("number of matches:", nums);
}


//Checks number for requirements, returns true or false
function numCheck(num) {

   let good = false; //flag if number conatines at least one set

   // converts number to array of numbers  
   num = num.toString().split("").map(e => parseInt(e));

   for (let i = 0; i < num.length - 1; i++) {

      let a = num[i];
      let b = num[i + 1];

      // return false if digits decrease;
      if (b < a) return false;

      // only check if we have not yet found a set of numbers
      if (!good) {
         if (a == b) {
            // if we have a matching set, we check if number before or number after is the same
            // if not our set is only two numbers wich passes test.
            if ((a != num[i - 1]) && (a != num[i + 2])) good = true;
         }
      }

   }

   if (good) return true;
   return false
}


main();
