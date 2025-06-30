// For removing the productid from all elements of teachers1 collection
db.teachers1.updateMany({}, {$unset:{productID:1}});

// One-to-Many Mapping: When one user can have more than one product(means one document is related to more than one linked documents)

db.teachers1.updateOne(
    {
        _id: ObjectId('686246d7c94cd5b514748a6f')
    },
    {
        $set:{
            productIDs: [
                ObjectId('686246dec94cd5b514748a73'),
                ObjectId('686246dec94cd5b514748a74')
            ]
        }
    }
);

db.teachers1.updateOne(
    {
        _id: ObjectId('686246d7c94cd5b514748a70')
    },
    {
        $set:{
            productIDs: [
                ObjectId('686246dec94cd5b514748a75'),
                ObjectId('686246dec94cd5b514748a76')
            ]
        }
    }
);

// use Embedded if the data is changing with time
// use Referenced when we have to keep track of the latest data

// Read details
db.teachers1.aggregate({
    $lookup:{
        from: 'products1',
        localField: 'productIDs',
        foreignField: '_id',
        as: 'ProductDetails'
    }
});