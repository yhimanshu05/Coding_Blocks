function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

//vWe didn't used global.add because it pollutes thes global space

// global.add = function add(a,b){
//     return a+b;
// }


module.exports.add = add;
// console.log(MediaSourceHandle.exports);
