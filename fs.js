let fs=require('fs');
const path = require('path');
// let content=fs.readFileSync('f1.txt');
// console.log(content+"");

// fs.writeFileSync('abc.txt','hello everyone how are you');

// fs.writeFileSync('abc.txt','hakuna matata');

// fs.appendFileSync('abc.txt','hello everyone how are you');


// fs.unlinkSync('abc.txt');
// //create a file
// fs.mkdirSync('pathModule');
// // to delete a file
// fs.rmdirSync('pathModule');

// //to check a file whether it exisits or not
// let doesExist=fs.existsSync('fs1.js');
// console.log('fs1.js file',doesExist);


// let fileArr=fs.readdirSync('/Users/ramanchaudhary/Desktop/GIT/sample');
// console.log(fileArr);


let srcPath='/Users/ramanchaudhary/Desktop/GIT/fsModule/f1.txt';
let destPath='/Users/ramanchaudhary/Desktop/GIT/fsModule/f2.txt';
let toBeCopiedFileName=path.basename(srcPath);
let des=path.join('/Users/ramanchaudhary/Desktop/GIT/sample',toBeCopiedFileName)


fs.copyFileSync(srcPath,destPath);