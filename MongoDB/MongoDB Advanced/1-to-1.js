// One-to-One mapping: A relationship where one document in a collection is associated with exactly one document in another collection.

// There are 2 ways to implement this.
// 1. Embedded Documents
// 2. Two Collections


// 1. Embedded
db.createCollection('teachers1');

db.teachers1.insertMany([
    {name: 'Kartik', subject: 'Web development'},
    {name: 'Monu', subject: 'Java'},
    {name: 'Mosina', subject: 'C++'},
    {name: 'Varun', subject: 'Data Science'}
]);

db.createCollection('products1');

db.products1.insertMany([
    {name: 'Macbook', features:['Touchpad','i-6'], price:20},
    {name: 'HP', features:['4K Screen','i-5'], price:30},
    {name: 'Dell', features:['SSD','i-9'], price:100},
    {name: 'Lenovo', features:['Antiglare','i-7'], price:50}
]);

// Update details of Kartik
db.teachers1.updateOne(
    {
        _id: ObjectId('6862413dc94cd5b514748a63')
    },
    {
        $set:{
            laptop: {name: 'Macbook', features:['Touchpad','i-6'], price:20}
        }
    }
);

// Update details of Monu
db.teachers1.updateOne(
    {
        _id: ObjectId('6862413dc94cd5b514748a64')
    },
    {
        $set:{
            laptop: {name: 'HP', features:['4K Screen','i-5'], price:30} 
        }
    }
);

// Update details of Mosina
db.teachers1.updateOne(
    {
        _id: ObjectId('6862413dc94cd5b514748a65')
    },
    {
        $set:{
            laptop: {name: 'Dell', features:['SSD','i-9'], price:100}
        }
    }
);

// Update details of Varun
db.teachers1.updateOne(
    {
        _id: ObjectId('6862413dc94cd5b514748a66')
    },
    {
        $set:{
            laptop: {name: 'Lenovo', features:['Antiglare','i-7'], price:50}
        }
    }
);

db.teachers1.find({name:'Kartik'}).toArray();
db.teachers1.find({name:'Kartik'}).toArray()[0].laptop;

// -------------------------------------------------------------------------------------

// 2. Two Collection
db.teachers1.updateOne(
    {
        _id: ObjectId('686246d7c94cd5b514748a6f')
    },
    {
        $set:{
            productID: ObjectId('686246dec94cd5b514748a73')
        }
    }
);

db.teachers1.updateOne(
    {
        _id: ObjectId('686246d7c94cd5b514748a70')
    },
    {
        $set:{
            productID: ObjectId('686246dec94cd5b514748a74')
        }
    }
);

db.teachers1.updateOne(
    {
        _id: ObjectId('686246d7c94cd5b514748a71')
    },
    {
        $set:{
            productID: ObjectId('686246dec94cd5b514748a75')
        }
    }
);

db.teachers1.updateOne(
    {
        _id: ObjectId('686246d7c94cd5b514748a72')
    },
    {
        $set:{
            productID: ObjectId('686246dec94cd5b514748a76')
        }
    }
);

// Fetching data from 2 collections
db.teachers1.aggregate({
    $lookup:{
        from: 'products1',
        localField: 'productID',
        foreignField: '_id',
        as: 'productDetails'
    }
});