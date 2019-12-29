/*
    1. convert the wire paths to point coordinates (x,y values)
    2. compare the points to determine where the wires cross (they share the same point);
    3. determine which wire 'cross' is closest to origin (starting point);


*/

//test examples
let wire1 = ["R75","D30","R83","U83","L12","D49","R71","U7","L72"];
let wire2  = ["U62","R66","U55","R34","D71","R55","D58","R83"];

let wire1Points = [];
let wire2Points = []

let currentPosition = {x:0, y:0};

function getPoints(val){

     let dir = val.slice(0,1);
     let steps = parseInt(val.slice(1))   

    switch (dir){
        case "R":
           currentPosition.x += steps;
           break;
        case "U":
            currentPosition.y += steps;
            break;
        case "D":
            currentPosition.y -= steps;
            break;
        case "L":
            currentPosition.x -= steps;
            break;
    }



}

getPoints();

console.log(currentPosition);