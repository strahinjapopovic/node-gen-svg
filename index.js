import inquirer from 'inquirer';
import fs from 'fs/promises';
import generateSVG from './lib/utils.js';
const question = [
    {
        type: "input",
        name: "txt",
        message: "Insert text up to 3 characters: ",
        validate: function (input) {
            
            const done = this.async();
            setTimeout(function() {
                if (input.length !== 3) {
                  // Pass the return value in the done callback
                  done('You need to provide a 3 character string');
                } else {
                  // Pass the return value in the done callback
                  done(null, true);
                }
              }, 2000);
        },
        default: "SVG",
    },
    {
        type: "input",
        name: "color",
        message: "Insert preffered color name OR hexdecimal number for text: ",
        default: "red",
    },
    {
        type: "rawlist",
        name: "shape",
        message: "Select shape from the list: ",
        choices:
            [
                "circle",
                "triangle",
                "square"
            ],
        default: "circle"
    },
    {
        type: "input",
        name: "bgcolor",
        message: "Insert preffered color name OR hexadecimal number for shape background: ",
        default: "blue",
    }
];

const writeSVG = async (file, data) => {
    await fs.appendFile(file, data);
}

const main = async () => {
    const data = await inquirer.prompt(question);
    writeSVG(`./examples/${data.shape}-logo-ngsvg-${Math.floor((1 + Math.random()) * 0x100000000).toString(16).substring(1)}.svg`, generateSVG(data));
    console.log(data);
}
main();