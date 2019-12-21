const FS = require('fs');


let input = FS.readFileSync("input.txt", "utf8").split(",");

console.log(input.slice(0,4));

for (let i = 0; i < input.length; i += 4) {

    let command = parseInt(input[i]);
    let input1 = parseInt(input[input[i + 1]]);
    let input2 = parseInt(input[input[i + 2]]);
    let outputIndex = input[i + 3]

    switch (command) {
        case 1:
            console.log(`adding noun:${input1}  verb:${input2} outputIndex:${outputIndex}`);
            input[outputIndex] = input1 + input2;
            break;
        case 2:
            console.log(`multiplying noun:${input1}  verb:${input2} outputIndex:${outputIndex}`);
            input[outputIndex] = input1 * input2;
            break;
        case 99:
            console.log(`Value at postion 0: ${input[0]}`);
            return;
            break;
        default:
            break;
    }

    console.log(input.slice(0,4));
}


