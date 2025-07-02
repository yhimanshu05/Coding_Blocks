const Todo = require("../models/todo");

module.exports.getGetTodos = async (req,res,next)=>{
    try{
        let data = await Todo.getTodos();
        console.log("Todo requested are:", data);
        res.send(data);
    }catch(err){
        next(err);
    }
}




module.exports.postAddTodo = (req,res)=>{
    // Responsible to add a new task to db
    const {name} = req.body;
    Todo.addTodo(name)
        .then((msg)=>{
            console.log(msg);
            res.redirect('/getTodos');
        })
        .catch((err) => {
            res.send(`Couldnt add todo: ${err.message}`);
        });
}



module.exports.postDeleteTodo = (req,res)=>{
    const {id} =req.body;
    console.log(id);
    Todo.deleteTodo(id)
        .then((msg)=>{
            console.log(msg);
            res.redirect('/getTodos');
        })
        .catch((err) => {
            res.send(`Couldnt delete todo: ${err.message}`);
        });
}




module.exports.getIncreasePriority = (req,res)=>{
   const {id} = req.query;
   Todo.increasePriority(id)
        .then(()=>{
            res.redirect('/getTodos');
        })
        .catch((err) => {
            res.send(`Couldnt increase priority: ${err.message}`);
        });
}



module.exports.getDecreasePriority = (req,res)=>{
    const {id} = req.query;
    Todo.decreasePriority(id)
        .then(()=>{
            res.redirect('/getTodos');
        })
        .catch((err) => {
            res.send(`Couldnt decrease priority: ${err.message}`);
        });
}