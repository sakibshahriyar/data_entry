const fs = require('fs');

function remove3DigitNumbers(inputFilePath, outputFilePath) {
    // Read content from the input file
    const content = fs.readFileSync(inputFilePath, 'utf8');

    // Use regular expression to find and remove 3-digit numbers followed by a dot and space
    //const modifiedContent = content.replace(/\b\d{3}\.\s/g, '');
    //const modifiedContent = content.replace(/^[^:]*:/gm, '');
    const modifiedContent = content.replace(/^[^:]*:/gm, '\n');

    // Write the modified content back to the output file
    fs.writeFileSync(outputFilePath, modifiedContent, 'utf8');

    console.log('3-digit numbers followed by dot and space removed successfully.');
}

// Replace 'input.txt' and 'output.txt' with your file paths
const inputFilePath = '191358 male - Copy.txt';
const outputFilePath = 'output.txt';

remove3DigitNumbers(inputFilePath, outputFilePath);