const { ObjectId } = require("mongodb");
const {getDB} = require("../database/database");
const { v4: uuidv4 } = require('uuid');


async function getPriority() {
    const counter = await getDB().collection('counter');
    let currentPriority;

    const cnt = await counter.findOne({ id: 'myCounter' });
    if (!cnt) {
        await counter.insertOne({ id: 'myCounter', val: 1 });
        currentPriority = 1;
    } else {
        const updated = await counter.findOneAndUpdate(
            { id: 'myCounter' },
            { $inc: { val: 1 } },
            { returnDocument: 'after' }  
        );

        currentPriority = updated.val;
    }

    return currentPriority;
}



class Todo {
    static addTodo(name) {
        return new Promise(async (resolve, reject) => {
            try {
                const todo = await getDB().collection('todo');
                const currentPriority = await getPriority();

                const data = {
                    name,
                    id: uuidv4(),
                    priority: currentPriority
                };

                await todo.insertOne(data);
                resolve('Added successfully');
            } catch (err) {
                reject(err);
            }
        });
    }


    static getTodos() {
        return new Promise(async (resolve, reject) => {
            try {
                const todo = await getDB().collection('todo');
                const data = await todo.find({}).sort({priority:1}).toArray();
                console.log(data);
                resolve(data);
            } catch (err) {
                reject(err);
            }
        });
    }


    static deleteTodo(id) {
        return new Promise(async (resolve, reject) => {
            try {
                const todo = await getDB().collection('todo');
                await todo.deleteOne({ _id: new ObjectId(id) });
                resolve("Deletion Successful");
            } catch (err) {
                reject(err);
            }
        });
    }

 
    static increasePriority(id){
        return new Promise(async (resolve, reject) => {
            try {
                const todo = await getDB().collection('todo');

                let currentItem = await todo.find({ _id: new ObjectId(id) }).toArray();
                console.log("current item :",currentItem);
                currentItem = currentItem[0];


                let allTasks = await todo.find({
                    priority:{
                        $lt: currentItem.priority
                    }
                }).sort({priority: -1}) .toArray();
                console.log("All tasks",allTasks);


                let previousItem = allTasks[0];
                if(!previousItem){             // if prev elem is not present
                    return resolve("priority set done")
                }
                console.log("current item :",currentItem);
                console.log("previous item :",previousItem);


                await todo.updateOne(
                    {_id: new ObjectId(currentItem._id)},
                    {$set:{
                        priority: previousItem.priority
                    }}
                ); 

                await todo.updateOne(
                    {_id: new ObjectId(previousItem._id)},
                    {$set:{
                        priority: currentItem.priority
                    }}
                ); 



                resolve("done");

            } catch (err) {
                reject(err);
            }
        });
    }



    static decreasePriority(id){
        return new Promise(async (resolve, reject) => {
            try {
                const todo = await getDB().collection('todo');

                let currentItem = await todo.find({ _id: new ObjectId(id) }).toArray();
                console.log("current item :",currentItem);
                currentItem = currentItem[0];


                let allTasks = await todo.find({
                    priority:{
                        $gt: currentItem.priority
                    }
                }).sort({priority: 1 }).limit(1).toArray();
                console.log("All tasks",allTasks);


                let nextItem = allTasks[0];
                if(!nextItem){             // if prev elem is not present
                    return resolve("priority set done")
                }
                console.log("current item :",currentItem);
                console.log("previous item :",nextItem);


                await todo.updateOne(
                    {_id: new ObjectId(currentItem._id)},
                    {$set:{
                        priority: nextItem.priority
                    }}
                ); 

                await todo.updateOne(
                    {_id: new ObjectId(nextItem._id)},
                    {$set:{
                        priority: currentItem.priority
                    }}
                ); 



                resolve("done");

            } catch (err) {
                reject(err);
            }
        });
    }
}

module.exports = Todo;