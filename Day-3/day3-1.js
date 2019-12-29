/*
    1. convert the wire paths to point coordinates (x,y values)
    2. compare the points to determine where the wires cross (they share the same point);
    3. determine which wire 'cross' is closest to origin (starting point);


*/

//test examples
let wire1 = ["R75", "D30", "R83", "U83", "L12", "D49", "R71", "U7", "L72"];
let wire2 = ["U62", "R66", "U55", "R34", "D71", "R55", "D58", "R83"];

//let wire1Points = makePoints(wire1);
let wire2Points = []

let currentPosition = { x: 0, y: 0 };

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

    return points;
}
let wire1Points = makePoints(wire1);

console.log(wire1Points);