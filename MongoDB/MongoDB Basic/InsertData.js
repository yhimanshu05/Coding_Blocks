// mongosh -> show dbs -> use mentors -> db.createCollection()

// There are 2 ways to insert into DB using shell
// 1. insertOne : db.teachers.insertOne({name:________, subject:____________});
// 2. insertMany :  db.teachers.insertMany[{name: 'Monu', subject: 'Java'}, {name: 'Varun', subject: 'Data Science'}];

let users = [
    {name: 'Kartik', subject: 'Web Development'},
    {name: 'Monu', subject: 'Java'},
    {name: 'Mosina', subject: 'C++'},
    {name: 'Varun', subject: 'Data Science'}

];

[{name: 'Monu', subject: 'Java'},
{name: 'Varun', subject: 'Data Science'}]

// db.createCollection('teachers');
// db.teachers.insertOne({name: 'Mosina', subject: 'C++'});
// db.teachers.insertOne({name: 'Kartik', subject: 'Web Development'});

// db.teachers.insertMany[{name: 'Monu', subject: 'Java'}, {name: 'Varun', subject: 'Data Science'}];

// db.teachers.find();


let products = [
    {name:'Laptop', features:['Touchpad','i-6'], company:'Dell', price:20},
    {name:'Laptop', features:['4K Screen','i-7'], company:'HP', price:30},
    {name:'Laptop', features:['SSD','i-9'], company:'Apple', price:100},
    {name:'Mobile', features:['Touchscreen','256GB'], company:'Samsung'},
    {name:'Keyboard', features:['RGB Lighting','Mechanical'], company:'Logitech'},
]

// db.products.insertMany([
//     {name:'Laptop', features:['Touchpad','i-6'], company:'Dell', price:20},
//     {name:'Laptop', features:['4K Screen','i-7'], company:'HP', price:30},
//     {name:'Laptop', features:['SSD','i-9'], company:'Apple', price:100},
//     {name:'Mobile', features:['Touchscreen','256GB'], company:'Samsung'},
//     {name:'Keyboard', features:['RGB Lighting','Mechanical'], company:'Logitech'},
// ]);

// db.products.find({ name: 'Laptop'});
// db.products.find({features: '4K Screen'});
// db.products.insertOne({name:'Laptop', features:['Antiglare','i-7'], company:'Lenovo', price:50},);
// db.products.find({price:{$in:[20,50]}});
// db.products.find({name:'Laptop',features:'Antiglare'});

// db.products.find({name:'Laptop', price:{ $gt:25 } }); 



db.createCollection('characters');


db.characters.insertMany([
    {name: 'Sherlock'},
    {name: 'Hobbit'},
    {name: 'Jhethalal'},
    {name: 'Goku'},
    {name: 'Jackie Chan'},
    {name: 'Vegeta'},
    {name: 'Shinchan'},
    {name: 'Iron Man'},
    {name: 'Thanos'},
    {name: 'Flash'},
    {name: 'Batman'},
    {name: 'Joker'},
    {name: 'Woody'},
    {name: 'Cody'},
    {name: 'Harry Potter'},
    {name: 'Spiderman'},
    {name: 'Black Widow'},
    {name: 'Jack Sparrow'},
    {name: 'Indiana Jones'},
    {name: 'Hulk'},
    {name: 'Superman'},
])


// db.characters.find();
// when we write db.characters.find() we only get the first 20 enteries only.

// db.characters.find().toArray();
// when we execute this command we get the full array as output

// db.characters.find().forEach((character)=>{printjson(character)});
// With this command also we get all the elements of the array printed with their id.




// ----------------------------------------------------------------------------------------------

// There are 2 ways to Update Date:
// 1. updateOne(): db.products.updateOne({
//                     features: 'Touchpad'
//                 },{
//                     $set:{price: 120}    
//                 });
// 2. updateMany(): db.products.updateMany(
//                      {name: {
//                       $ne: 'Laptop'
//                      }
//                   },
//                      {
//                          $set:{
//                              price: 99
//                          }
//                      }
//                  )



//updating the price of laptop to 120 with feature as Touchpad
db.products.updateOne({
    features: 'Touchpad'
},{
    $set:{price: 120}    
});


// Adding price

db.products.updateMany(
    {name: {
        $ne: 'Laptop'
    }
},
    {
        $set:{
            price: 99
        }
    }
);



// -----------------------------------------------

// Pagination
db.characters.find().limit(5); // prints only the first 5 elements

db.characters.find().skip(5).limit(5); // skips the first 5 elements and then print the next 5 elements


// ------------------------------------------------------------------------

// Delete operations
// There are 2 ways to delete data

// 1. deleteOne: only the selected element will be deleted 
// 2. deleteMany: all the elements inside the collection will be deleted but the collection will remain 

db.characters.deleteOne({name: 'Goku'}); // only deletes the entry having the name Goku

db.characters.deleteMany(); // this will delete the entire data from characters collection

db.characters.drop(); // to delete the collection also.