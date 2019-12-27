const FS = require('fs');

// read intcode from file, split into array, parseInt array using map
let input = FS.readFileSync("input-1.txt", "utf8").split(",").map(num => parseInt(num));


function runIntCode(input, noun, verb) {

    // noun and verb parameter are assigned to respective positions in input intcode array.
    input[1] = noun;
    input[2] = verb;
    console.log("n", noun, "v", verb);

    let [a,b,c,d, ...rest] = input;
    console.log(a,b,c,d);

    for (let i = 0; i < input.length; i += 4) {
        
        let command = input[i];
        let input1 = input[input[i + 1]];
        let input2 = input[input[i + 2]];
        let outputIndex = input[i + 3]

        switch (command) {
            case 1:
                input[outputIndex] = input1 + input2;
                break;
            case 2:
                input[outputIndex] = input1 * input2;
                break;
            case 99:
                //console.log(`Value at postion 0: ${input[0]}`);
                return input[0];
                break;
            default:
                break;
        }

    }

}


function findNounVerb(match){

    for (let i = 0; i < 13; i++) {
        for (let j = 0; j < 4; j++) {
            let output = runIntCode(input, i, j);
            console.log("output:", output);
           // if (output == match) return { i, j };
          
        }
    }
}

//console.log(findNounVerb(5866663));



console.log(runIntCode(input,12,3));