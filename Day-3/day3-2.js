/*  Pseudo code
    1. Start with code from step 1
    2. When determining point, also keep track on number of steps to those points.
        -Instead of using a Set to store the points, Use a Map. Where the key is the point (stringified)
        and the value the number of steps.
        -Only add to the Map if the point in not in the Map yet. This will ensure that only the first visit
        to that intersection is used (as per the instructions).

    3. When determining intersections, also keep track of total steps (add both wire steps);
    3. Return intersection with lowest total steps value.
*/

const FS = require('fs');

//READING INPUT FROM FILE.
let wires = FS.readFileSync("input.txt", "utf8").split("\r\n");
let wire1 = wires[0].split(",");
let wire2 = wires[1].split(",");


// Given an array of directions.
// Traces wire and determines each point the wire crosses as well as the number of steps each point is from the origin.
// This is stored in a Map (the point as the key and steps as the value), which is returned.
function makePoints(dirs) {

    let currentPosition = { x: 0, y: 0 };
    let points = new Map()
    let stepsFromOrigin = 0;

    for (let i = 0; i < dirs.length; i++) {
        let dir = dirs[i].slice(0, 1);
        let steps = parseInt(dirs[i].slice(1))

        switch (dir) {
            case "R":
                // start j at 1 not 0 to remove counting starting positions every time (duplicates).
                for(let j = 1; j <= steps; j++){

                    let currentPoint = JSON.stringify({x:currentPosition.x + j, y: currentPosition.y});
                    console.log("currntPoint", currentPoint)

                    stepsFromOrigin += 1;
                    if(!points.has(currentPoint)){
                        points.set(currentPoint, stepsFromOrigin);
                    }
                   
                }
                currentPosition.x += steps;
                break;
            case "U":
                for(let j = 1; j <= steps; j++){
                    let currentPoint = JSON.stringify({x:currentPosition.x + j, y: currentPosition.y});
                    stepsFromOrigin += 1;
                    if(!points.has(currentPoint)){
                        points.set(currentPoint, stepsFromOrigin);
                    }
                }
                currentPosition.y += steps;
                break;
            case "D":
                for(let j = 1; j <= steps; j++){
                    let currentPoint = JSON.stringify({x:currentPosition.x + j, y: currentPosition.y});
                    stepsFromOrigin += 1;
                    if(!points.has(currentPoint)){
                        points.set(currentPoint, stepsFromOrigin);
                    }
                }
                currentPosition.y -= steps;
                break;
            case "L":
                for(let j = 1; j <= steps; j++){
                    let currentPoint = JSON.stringify({x:currentPosition.x + j, y: currentPosition.y});
                    stepsFromOrigin += 1;
                    if(!points.has(currentPoint)){
                        points.set(currentPoint, stepsFromOrigin);
                    }
                }
                currentPosition.x -= steps;
                break;
        }
    }

    return points; //returns an array of points
}


//given two sets of JSON.stringified points, returns an array containing all junctions.
// A junction is a point shared by both arrays.
function findJuntions(wire1, wire2){

    let junctions = []; 
    
    wire1.forEach(point=>{
        if(wire2.has(point)){
            junctions.push(JSON.parse(point));
        }
    })

    return junctions;

}


// Computes Manhattan Distance between point and origin.
function manDistFromOrigin(point){

    //http://jwilson.coe.uga.edu/MATH7200/TaxiCab/TaxiCab.html
    //distance = abs(x2-x1)+ abs(y2-y1);
    // since first point, (x1,y1), is the origin (0,0);
    // we can simplfy abs(x2) + abs(y2)

    return Math.abs(point.x) + Math.abs(point.y);
}


function findShortestDistance(wire1,wire2){

    let wire1Points = makePoints(wire1);
    let wire2Points = makePoints(wire2);


    let junctions = findJuntions(wire1Points, wire2Points);

    let manDistances = junctions.map(manDistFromOrigin);

    return Math.min(...manDistances);
}

//console.log("Shortest Manhattan Distance:", findShortestDistance(wire1, wire2));

console.log(makePoints(["R9,U4,L5,U2,R4,U6"]))
