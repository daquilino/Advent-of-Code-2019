const FS = require('fs');


function calculateFuel() {

    // read Module Masses from file
    let moduleMass = FS.readFileSync("input.txt", "utf8").split("\n");
    

    return moduleMass.reduce((totalFuel, mass) => {
        
        let modFuel = Math.floor(parseInt(mass) / 3) - 2
        
        return totalFuel += (modFuel + calcFuelFuel(modFuel));
    
    }, 0)

}


// recursivly calculates fuel needed given mass of fuel.
function calcFuelFuel(mass, fuelFuel = 0) {

    let fuel = Math.floor(parseInt(mass) / 3) - 2;

    if (fuel <= 0) return fuelFuel;

    return calcFuelFuel(fuel, fuelFuel + fuel);

}


console.log(`Total Fuel Needed: ${calculateFuel()}`)
