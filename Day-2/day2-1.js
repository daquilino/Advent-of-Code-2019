const FS = require('fs');

// read intcode from file, split into array, parseInt array using map
let input = FS.readFileSync("input-part1.txt", "utf8").split(",").map(num => parseInt(num));



function runIntCode(input) {

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
                console.log(`Value at postion 0: ${input[0]}`);
                return;
                break;
            default:
                break;
        }

    }

}


runIntCode(input);
