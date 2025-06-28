const { v4: uuidv4 } = require('uuid');

// let todos = [];
//     {id: 1, name: 'Task-1'},
//     {id: 2, name: 'Task-2'},

// ];
const Todo = require('../database/script/database');

module.exports.getGetTodos = (req, res, next)=>{
    // res.json(todos);
    Todo.getTodos()
        .then((data)=>{
            res.send(data);
        })
        .catch((err)=>{
            res.send(`Unable to fetch todos, ${err.message}`);
        })
}

module.exports.postAddTodo = (req, res)=>{
    const {name} = req.body;
    Todo.addTodo(name)
        .then((msg)=>{
            console.log(msg);
            return Todo.getTodos();
            // res.json(todos);
        })
        .then((data)=>{
            res.json(data);
        })
        .catch((err)=>{
            res.send(`Unable to add a todo, ${err.message}`);
        })
}

// module.exports.postAddTodo = (req, res)=>{
//     const {name} = req.body;
//     console.log(name);
//     todos.push({
//         id: uuidv4(),
//         name
//     })
//     res.json(todos);
// }

module.exports.postDeleteTodo = (req, res)=>{
    const {id} = req.body;
    Todo.deleteTodo(id)
        .then(()=>{
            return Todo.getTodos(); //read updated todos
        })
        .then((data)=>{
            res.json(data); // send updated list
        })
        .catch((err)=>{
            res.send(`Unable to delete a task, ${err.message}`);
        })
}

// module.exports.postDeleteTodo = (req, res)=>{
//     const {id} = req.body;
//     Todo = Todo.filter((task)=>{
//         if(task.id == id) return false;
//         return true;
//     })
//     res.json(Todo);
// }

module.exports.getIncreasePriority = (req, res)=>{
    const {id} = req.query;
    // console.log(id);
    Todo.increasePriority(id)
    .then(()=>{
            return Todo.getTodos(); //read updated todos
        })
        .then((data)=>{
            res.json(data); // send updated list
        })
        .catch((err)=>{
            res.send(`Unable to increase priority, ${err.message}`);
        })    
}

// module.exports.getIncreasePriority = (req, res)=>{
//     const {id} = req.query;
//     console.log(id);
//     let indx;
//     Todo.forEach((e,i)=>{
//         if(e.id == id){
//             indx = i;
//         }
//     })
//     console.log(indx);
//     let temp = Todo[indx];
//     Todo[indx] = Todo[indx - 1];
//     Todo[indx - 1] = temp;
//     res.json(Todo);
// }

module.exports.getDecreasrPriority = (req, res)=>{
    const {id} = req.query;
    // console.log(id);
    Todo.decreasePriority(id)
    .then(()=>{
            return Todo.getTodos(); //read updated todos
        })
        .then((data)=>{
            res.json(data); // send updated list
        })
        .catch((err)=>{
            res.send(`Unable to decrease priority, ${err.message}`);
        }) 
}

// module.exports.getDecreasrPriority = (req, res)=>{
//     const {id} = req.query;
//     console.log(id);
//     let indx;
//     Todo.forEach((e,i)=>{
//         if(e.id == id){
//             indx = i;
//         }
//     })
//     console.log(indx);
//     let temp = Todo[indx];
//     Todo[indx] = Todo[indx + 1];
//     Todo[indx + 1] = temp;
//     res.json(Todo);
// }