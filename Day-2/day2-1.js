const FS = require('fs');


let input = FS.readFileSync("input-1.txt", "utf8").split(",");


for (let i = 0; i < input.length; i += 4) {

    let command = parseInt(input[i]);
    let input1 = parseInt(input[input[i + 1]]);
    let input2 = parseInt(input[input[i + 2]]);
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

