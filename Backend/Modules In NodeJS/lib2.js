let lib1 = require('./lib1');

let b = 20;

function subtract(a,b){
    return a-b;
}

// module.exports = {
//     subtract,
//     b,
//     lib1
// };

module.exports.lib1 = lib1;
module.exports.b = b;
module.exports.subtract = subtract;