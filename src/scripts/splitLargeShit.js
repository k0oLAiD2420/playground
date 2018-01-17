/*
Splits and outputs csv in parent directory
 */
const splitShit = require('csv-splitter')


/*
File that will be split
TODO: Setup as endpoint
 */
let file = __dirname + '/test.csv'

/*
split ( filePath , numberOfRowsToSplitOn, options)
 */
splitShit.split(file, 2500)
