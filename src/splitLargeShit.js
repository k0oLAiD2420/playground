/*
Splits and outputs csv in parent directory
 */
const splitShit = require('csv-splitter');

let file = __dirname + '/test.csv';

/*
split ( filePath , numberOfRowsToSplitOn, options)
 */
splitShit.split(file, 2500);
