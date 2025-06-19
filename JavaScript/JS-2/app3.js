// Objects : It is a collection of properties.
const person = {
    name: "Himanshu Yadav",
    age: 20,
    isAdult: true,
    favColor: ['blue', 'magenta']
}

console.log(person);
console.log(person.name); // OUTPUT: Himanshu Yadav
console.log(person.favColor); // OUTPUT: ['blue', 'magenta']

console.log(person["name"]); // OUTPUT: Himanshu Yadav

// Prototypes : These are the mechanism by which JavaScript objects inherit features from one another.

const p1 = Object.create(person);
const p2 = Object.create(p1);

console.log(person);
console.log(p1); // {}
console.log(p2); // {}

console.log(p2.name); // OUTPUT: Himanshu Yadav
console.log(p1.name); // OUTPUT: Himanshu Yadav
console.log(p1.age); // OUTPUT: 20
console.log(p2.age); // OUTPUT: 20

console.log(p2.__proto__); //OUTPUT: {} (Give the refernce from where this p2 has been created)
console.log(p2.__proto__ === p1); // OUTPUT: true
console.log(p1.__proto__ === person); // OUTPUT: true

console.log(person.__proto__ === Object.prototype); // OUTPUT: true


// Constructor Function


function Person(name,age) {
    this.name = name;
    this.agr = age;
    // console.log(this);
    // this.sayName = function(){
    //     console.log(this.name);
    // }
}



const p3 = new Person('Kartik',23);
const p4 = new Person('Ajay',24);

console.log(p3); // OUTPUT: {name: 'Kartik', agr: 23, sayName: ƒ}
console.log(p4); // OUTPUT: {name: 'Ajay', agr: 24, sayName: ƒ} 

// To remove this sayName we will use prototyping
Person.prototype.sayName = function (){
    console.log(this.name);
}

console.log(p3); // OUTPUT: {name: 'Kartik', agr: 23}
console.log(p4); // OUTPUT: {name: 'Ajay', agr: 24}


// this keyword : refers to the current object or the instance being created
// 1. Implicit binding : 

const obj = {
    name:'Himanshu Yadav',
    age: 20,
    sayName: function (){
        console.log(this);
    },
    favColor: {
        color: 'blue',
        sayColor: function(){
            console.log(this);
        }
    }
};

console.log(obj.sayName()); // OUTPUT: {name: 'Himanshu Yadav', age: 20, sayName: ƒ}
                            //          undefined

console.log(obj.favColor); // OUTPUT: {color: 'blue', sayColor: ƒ}
console.log(obj.favColor.sayColor); // OUTPUT: ƒ (){
                                    //                  console.log(this);
                                    //                }

// 2. Explicit Binding :

function fun(name, age) {
    console.log(name);
    console.log(age);
    console.log(this);
}

const a = {
    m: 'Hello',
    n: 10
}

// fun('Himanshu', 20);
// fun.call(a,'Himanshu', 20); // OUTPUT: {m: 'Hello', n: 10}

const f = fun.bind(a);
console.log(f); // OUTPUT: fun(name, age) {
                //            console.log(name);
                //            console.log(age);
                //            console.log(this);
                //        }


// 3. new keyword binding : 

const newPerson = new Person("Yadav", 25);


// 4. Default keyword binding :
// if all the 3 bindings are not used then this refers to the global object(i.e window)


// Class Syntax

class Car{

    constructor(name,price,isDiskBrake){
        this.name = name;
        this.price = price;
        this.isDiskBrake = isDiskBrake;
    }
    // Normal method
    startCar() {
        console.log(`Starting the car ${this.name}`);
    }

    // Getter method
    get getName(){
        return this.name;
    }

    // Setter method
    set setPrice(updatedPrice){
        this.price = updatedPrice;
    }

    // Static method
    static applyBrake(){
        console.log("Applying the Brake...");

    }
}

const c1 = new Car('BMW M5', 20000000, true);
console.log(c1); // OUTPUT: Car {name: 'BMW M5', price: 20000000, isDiskBrake: true}
console.log(c1.startCar()); // OUTPUT: Starting the car BMW M5

console.log(c1.getName); // OUTPUT: BMW M5
c1.setPrice=30000000;
console.log(c1); // OUTPUT: Car {name: 'BMW M5', price: 30000000, isDiskBrake: true}

console.log(Car.applyBrake); // OUTPUT: Applying the Brake...


// Inheritance : class inherits properties and methods from another class
class RacingCar extends Car{

    constructor(name, price, isDiskBrake, maxSpeed, color){
        super(name, price, isDiskBrake);     // call the constructor of car class
        this.maxSpeed = maxSpeed;
        this.color = color;
    }

    get getMaxSpeed(){
        return this.maxSpeed;
    }
    get getColor(){
        return this.color;
    }

}

const r1 = new RacingCar("Audi", 1000000, true, 300, "Black");

console.log(r1.getName); // OUTPUT: Audi

console.log(r1.getMaxSpeed); // OUTPUT: 300
