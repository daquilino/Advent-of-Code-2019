const FS = require('fs');


function calculateFuel() {

    // read Module Masses from file
    let moduleMass = FS.readFileSync("input.txt", "utf8").split("\n");
 
    return moduleMass.reduce((totalFuel, mass) => totalFuel += Math.floor(parseInt(mass) / 3) - 2, 0)
 
}


console.log(`Total Fuel Needed: ${calculateFuel()}`)
