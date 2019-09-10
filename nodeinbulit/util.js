var util = require('util');
var genric = 'Hi %s Welcome onboard with %s';

var output = util.format(genric, 'John', 'Aakash')
console.log(output)