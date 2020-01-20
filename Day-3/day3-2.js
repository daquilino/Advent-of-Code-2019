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


// Given two Map objects containing each wires points and steps to those points,
// find where those wires intersect (are contained in both Maps).
// Return a new map with those intersections and total steps (sum the steps from both wires). 
function findJuntions(wire1, wire2){

    let junctions = new Map(); 
    
    wire1.forEach((val,key)=>{
        
        let wire2Steps = wire2.get(key);

        if(wire2Steps){
            junctions.set(key,val + wire2Steps);
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

function findMinSteps(junctions){
    
    let minSteps;
    let iterations = 0;   // used to assign first Map value to minSteps

    junctions.forEach(function(val){
        console.log("minSteps:", minSteps);

        // This assignes a starting value to minSteps.    
        if(iterations == 0){
            minSteps = val;
        }
        else if(val < minSteps){
            minSteps = val;
        }

        iterations++;
    
    })
    return minSteps;

}


function findShortestDistance(wire1,wire2){

    let wire1Points = makePoints(wire1);
    let wire2Points = makePoints(wire2);
    
    let junctions = findJuntions(wire1Points, wire2Points);

    console.log("# of junctions", junctions.size)

   return findMinSteps(junctions)
}

//console.log("Shortest Manhattan Distance:", findShortestDistance(wire1, wire2));

//let mapPoints = makePoints(["R9,U4,L5,U2,R4,U6"]);
//console.log(mapPoints)


/* Test examples from AOC instructions
Here are the best steps for the extra examples from above:

R75,D30,R83,U83,L12,D49,R71,U7,L72
U62,R66,U55,R34,D71,R55,D58,R83 = 610 steps

R98,U47,R26,D63,R33,U87,L62,D20,R33,U53,R51
U98,R91,D20,R16,D67,R40,U7,R15,U6,R7 = 410 steps
*/

 let test1 = "R75,D30,R83,U83,L12,D49,R71,U7,L72".split(",")
 let test2 = "U62,R66,U55,R34,D71,R55,D58,R83".split(",")

 console.log("Shortest Manhattan Distance:", findShortestDistance(test1, test2));

