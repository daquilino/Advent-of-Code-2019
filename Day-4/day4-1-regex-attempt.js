/*
   1. use regex and String.protptype.match to find if Two adjacent digits are the same (like 22 in 122345).
    match returns an array of all found matches, if array.length == 1, we have only one set of adjacent digits.
*/

// Returns true if num containse exactly one set of same adjacent digits.
function hasTwoAdj(num){

    // Any found matches will be put into an array.
    // If no matches are found 'matches' will be null
    let matches = num.toString().match(/(\d)\1/g);

    if(!matches) return false;  // mathces is null return false

    return (matches.length == 1) ? true : false;
}


// This works, but only for increasing numbers
// I NEED TO MAKE IT SO SAME NUMBER IS ACCEPTABLE;
function sixDigitInc(num){
    let matches = num.toString().match(/^(?=\d{6}$)0?1?2?3?4?5?6?7?8?9?$/g);

    console.log("matches:", matches);

    if(!matches) return false;  // mathces is null return false

    return (matches.length == 1) ? true : false;

}

