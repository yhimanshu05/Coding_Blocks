const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(url);

let _db;

const dbName = 'todoApp';

function main(){
        return client.connect()
        .then(()=>{
            _db = client.db(dbName);
        })
        .catch((err)=>{
            reject(err);
        })
}
// async function main() {
//     try {
//         await client.connect();
//         console.log('Connected successfully to the server');
//         _db = client.db(dbName);
//     } 
//     catch (err) {
//         throw err;
//     }
// }


function getDB(){
    if(_db) return _db;
    return null;
}


module.exports.mongoConnect = main;
module.exports.getDB = getDB;