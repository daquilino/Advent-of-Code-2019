/*  Pseudo code
    1. convert the wire paths to point coordinates (x,y values)
    2. compare the points to determine where the wires cross (they share the same point);
    3. determine which wire 'cross' is closest to origin (starting point);
*/

const FS = require('fs');

let wires = FS.readFileSync("input.txt", "utf8").split("\r");
let wire1 = wires[0].split(",");
let wire2 = wires[1].split(",");

function makePoints(dirs) {

    let currentPosition = { x: 0, y: 0 };
    let points = []

    for (let i = 0; i < dirs.length; i++) {
        let dir = dirs[i].slice(0, 1);
        let steps = parseInt(dirs[i].slice(1))

        switch (dir) {
            case "R":
                // start j at 1 not 0 to remove counting starting positions every time (duplicates).
                for(let j = 1; j <= steps; j++){
                    points.push({x:currentPosition.x + j, y: currentPosition.y})
                }
                currentPosition.x += steps;
                break;
            case "U":
                for(let j = 1; j <= steps; j++){
                    points.push({x:currentPosition.x, y: currentPosition.y + j})
                }
                currentPosition.y += steps;
                break;
            case "D":
                for(let j = 1; j <= steps; j++){
                    points.push({x:currentPosition.x, y: currentPosition.y - j})
                }
                currentPosition.y -= steps;
                break;
            case "L":
                for(let j = 1; j <= steps; j++){
                    points.push({x:currentPosition.x - j, y: currentPosition.y})
                }
                currentPosition.x -= steps;
                break;
        }
    }

    return points; //returns an array of points
}


//given two arrays of points, returns an array containing all junctions.
// A junction is a point shared by both arrays.
function findJuntions(wire1, wire2){

    let junctions = wire1.filter(point=>{

        for(let i  = 0;i<wire2.length; i++){

            if( (point.x == wire2[i].x) && (point.y == wire2[i].y)){
                return true;
            }
        }
    })

    return junctions;

}

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

    console.log("#junctions", junctions.length)
    
    //let manDistances = junctions.map(manDistFromOrigin);

    //return Math.min(...manDistances);

}

console.log(findShortestDistance(wire1, wire2));