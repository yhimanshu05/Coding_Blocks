// JSON - JavaScript Object Notation
// It is a format through which we can transfer data over the web

let obj = {
    a: "Hello",
    b: true,
    c: 1010112,
    d: [1,2,3,4,5],
    e: {
        'dance' : 'salsa'
    }
}

// Converting JavaScript object to JSON string
console.log(JSON.stringify(obj)); // OUTPUT: {"a":"Hello","b":true,"c":1010112,"d":[1,2,3,4,5],"e":{"dance":"salsa"}}
let jsonObj = JSON.stringify(obj);

// Converting JSON string back to JavaScript object
console.log(JSON.parse(jsonObj));// OUTPUT: {a: 'Hello', b: true, c: 1010112, d: Array(5), e: {…}}


// CURRY function

function sum(a,b,c,d){
    return a+b+c;
}

console.log(sum(10,20,30,40)); // OUTPUT:60




function sum1(a){
    if(!a) return 0;

    let ans = a;
    function smallerSum(b){
        if(!b) return ans;
        ans += b;
        return smallerSum;
    }

    return smallerSum;
}

console.log(sum1()) // OUTPUT: 0
console.log(sum1(10)()) // OUTPUT: 10
console.log(sum1(10)(20)()) // OUTPUT: 30
console.log(sum1(10)(20)(30)()) // OUTPUT: 60
console.log(sum1(10)(20)(30)(40)()) // OUTPUT: 100