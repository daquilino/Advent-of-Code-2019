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
