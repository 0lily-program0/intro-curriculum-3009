'use strict';
const fs = require('fs');
const fileName = './test.txt';
for (let count = 0; count < 30; count++) {
  fs.appendFileSync(fileName, 'おはようございます\n'); 
  fs.appendFileSync(fileName, 'こんにちは\n');
  fs.appendFileSync(fileName, 'こんばんは\n');
  // fs.appendFileSync(filename, '\n');
}
