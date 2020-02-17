/*
  Brute force method
  1. loop through all numbers in range.
  2. check if they fit criteria
  3. return that number.
*/

const STARTRANGE = 240298;
const ENDRANGE = 784956;
let nums = 0;

function main() {

   for (let i = STARTRANGE; i <= ENDRANGE; i++) {
      if (numCheck(i)) nums++
   }

   console.log("number of matches:", nums);
}



function numCheck(num) {

   /* checks
      1. digits never decrease (they increase or are equal)
      2. Must contain at least one set of only two adjacent digits. (111122 works since '2' repeats only twice)
            Test Cases:
            112233 pass
            111122 pass
            111145 fail
            123444 fail
            244444 fail
            244445 fail
            244446 fail
            244447 fail
            244448 fail
            244449 fail
            244455 pass


            if two numbers match hasTwoAdj true
            on next pass if a != b  set onlyTowAdj flag true
                else hasTowajd if set to false

            dont enter loop if both are true (we already passed that test)
    */

   let hasTwoAdj = false;
   let onlyTwoAdj = false;

   // converts number to array of numbers  
   num = num.toString().split("").map(e => parseInt(e));

   for (let i = 0; i < num.length - 1; i++) {

      let a = num[i];
      let b = num[i + 1];

      // return false if digits decrease;
      if (b < a) return false;

   } 

   if (hasTwoAdj && onlyTwoAdj) return true;
   return false
}


main();
