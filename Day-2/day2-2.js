const FS = require('fs');

// read intcode from file, split into array, parseInt array using map
let input = FS.readFileSync("input-part2.txt", "utf8").split(",").map(num => parseInt(num));


function runIntCode(input, noun, verb) {

    //this makes a copy of input, so we are not modifying the original input array by reference. 
    input = [...input];

    // noun and verb parameter are assigned to respective positions in input intcode array.
    input[1] = noun;
    input[2] = verb;

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

    for (let i = 0; i < 100; i++) {
        for (let j = 0; j < 100; j++) {
            let output = runIntCode(input, i, j);
            if (output == match) return 100* i+ j;
          
        }
    }
}

console.log(findNounVerb(19690720));

