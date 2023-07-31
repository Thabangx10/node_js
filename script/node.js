// We import the fs module, which allows us to work with the file system
const fs = require("fs");

// We can use console.log to display messages in the console.
// Here, we log the directory name and the filename of this script.
console.log(__dirname);
console.log(__filename);

// To create a file and add content to it, we use the fs.writeFileSync method.
// It takes two arguments: the filename and the content to write.
// The following line will create a file named "nodeJS.txt" with the content "Welcome , Sir.."
fs.writeFileSync("nodeJS.txt", "Welcome , Sir..");

// After running this code, you will see "nodeJS.txt" file created in the same directory as this script,
// and it will contain the text "Welcome , Sir..".


const add = require("./script/addition.js")

console.log(add.addition(30,15));