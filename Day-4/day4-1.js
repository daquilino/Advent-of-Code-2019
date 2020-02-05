/*
  Brute force method
  1. loop through all numbers in range.
  2. check if they fit criteria
  3. return that number.
*/

const STARTRANGE = 240298;
const ENDRANGE = 784956;

for (let i = STARTRANGE; i <= ENDRANGE; i++){

}

function numTest(num){

    /* checks
       1. digits never decrease (they increase or are equal)
       2. two adjacent digits are the same. (111111 passes, so more than two can be same)
    */

   num = num.toString().split("").map(e=>parseInt(e));

   for(let i = 0; i < num.length -1; i++ ){
        let a = num[i];
        let b  = num[i+1];
        console.log("b",b, "a", a);
        // return false if digits decrease;
        if (b < a) return false; 
    
   }

   return true;
}


console.log(numTest(123476))