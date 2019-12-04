const FS = require('fs');


function calculateFuel() {

    // read Module Masses from file
    let moduleMass = FS.readFileSync("input.txt", "utf8").split("\n");

    return moduleMass.reduce((totalFuel, mass) => totalFuel += Math.floor(parseInt(mass) / 3) - 2, 0)

}


function calcFuelFuel(mass, fuelFuel = 0) {

    let fuel = Math.floor(parseInt(mass) / 3) - 2;

    if (fuel <= 0) return fuelFuel;

    return calcFuelFuel(fuel, fuelFuel + fuel);

}

console.log(calcFuelFuel(654));

//console.log(`Total Fuel Needed: ${calculateFuel()}`)
