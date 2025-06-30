// Many-to-Many mapping: One document in Collection A can be related to multiple documents in Collection B & vice-versa

db.createCollection('actors');

db.actors.insertMany([
    {name: 'Sheldon Cooper'},
    {name: 'Penny'},
]);

db.createCollection('movies');

db.movies.insertMany([
    {name: 'The Big Bang Theory'},
    {name: 'Young Sheldon'},
]);


db.createCollection('actors_movies');

actorId: ObjectId('68625842c94cd5b514748a77'), ObjectId('68625842c94cd5b514748a78')
movieId: ObjectId('6862586fc94cd5b514748a79'), ObjectId('6862586fc94cd5b514748a7a')

db.actors_movies.insertMany([
    {
        actorId: ObjectId('68625842c94cd5b514748a77'),
        movieId: ObjectId('6862586fc94cd5b514748a79')
    },
    {
        actorId: ObjectId('68625842c94cd5b514748a77'),
        movieId: ObjectId('6862586fc94cd5b514748a7a')
    },
    {
        actorId: ObjectId('68625842c94cd5b514748a78'),
        movieId: ObjectId('6862586fc94cd5b514748a79')
    }
]);

db.actors_movies.aggregate(
    {
        $lookup:{
            from: 'actors',
            localField: 'actorId',
            foreignField: '_id',
            as: 'ActorsInfo'
        }
    },
    {
        $lookup:{
            from: 'movies',
            localField: 'movieId',
            foreignField: '_id',
            as: 'MoviesInfo'
        }
    }
);