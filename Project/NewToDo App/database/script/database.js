const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname,'..', 'data.json');

class Todo{
    static getTodos(){
        return new Promise((resolve, reject)=>{
            fs.readFile(
                filePath,
                {
                    encoding:'utf-8'
                },
                (err, data)=>{
                    if(err) return reject(err);
                    data = JSON.parse(data);
                    resolve(data);
                }
            )
        })
    }

    static addTodo(name){
        return new Promise((resolve, reject)=>{
            fs.readFile(
                filePath,
                {encoding: 'utf-8'},
                (err, data)=>{
                    if(err) return reject(err);
                    data = JSON.parse(data);
                    let newTask = {
                        id: uuidv4(),
                        name
                    }
                    data.unshift(newTask);
                    fs.writeFile(
                        filePath,
                        JSON.stringify(data),
                        (err)=>{
                            if(err) return reject(err);
                            resolve("Task added successfully");
                        })
                }
            )
        })
    }

    static deleteTodo(id){
        return new Promise((resolve, reject)=>{
            fs.readFile(
                filePath,
                {encoding: "utf-8"},
                (err, data)=>{
                    if(err) return reject(err);
                    data = JSON.parse(data);
                    let newData = data.filter(item=> item.id != id);
                    fs.writeFile(
                        filePath,
                        JSON.stringify(newData),
                        {encoding: "utf-8"},
                        (err)=>{
                            if(err) return reject(err);
                            resolve("Task deleted successfully.");
                        }
                    )
                }
            )
        })
    }
    // let indx;
    // Todo.forEach((e,i)=>{
    //     if(e.id == id){
    //         indx = i;
    //     }
    // })
    // console.log(indx);
    // let temp = Todo[indx];
    // Todo[indx] = Todo[indx - 1];
    // Todo[indx - 1] = temp;

    static increasePriority(id){
        return new Promise((resolve, reject )=>{
            fs.readFile(
                filePath,
                {encoding: "utf-8"},
                (err, data)=>{
                    if(err) return reject(err);
                    let Todo = JSON.parse(data);
                    let indx;
                    Todo.forEach((e,i)=>{
                        if(e.id == id){
                            indx = i;
                        }
                    })
                    console.log(indx);
                    let temp = Todo[indx];
                    Todo[indx] = Todo[indx - 1];
                    Todo[indx - 1] = temp;
                    fs.writeFile(
                        filePath,
                        JSON.stringify(Todo),
                        {encoding: "utf-8"},
                        (err)=>{
                            if(err) return reject(err);
                            resolve("Task priority increased successfully.");
                        }
                    )
                }
            )
        })
    }

    static decreasePriority(id){
        return new Promise((resolve, reject )=>{
            fs.readFile(
                filePath,
                {encoding: "utf-8"},
                (err, data)=>{
                    if(err) return reject(err);
                    let Todo = JSON.parse(data);
                    let indx;
                    Todo.forEach((e,i)=>{
                        if(e.id == id){
                            indx = i;
                        }
                    })
                    console.log(indx);
                    let temp = Todo[indx];
                    Todo[indx] = Todo[indx + 1];
                    Todo[indx + 1] = temp;
                    fs.writeFile(
                        filePath,
                        JSON.stringify(Todo),
                        {encoding: "utf-8"},
                        (err)=>{
                            if(err) return reject(err);
                            resolve("Task priority decreased successfully.");
                        }
                    )
                }
            )
        })
    }
}

module.exports = Todo;