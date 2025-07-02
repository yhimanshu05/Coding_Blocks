const addtask = document.querySelector('#addtask');
const newtask = document.querySelector('#newtask');
const taskList = document.querySelector('.taskList');


function addToDom(todos) {
    taskList.innerText = '';
    todos.forEach(element => {
        // 1. create a new li element
        let li = document.createElement('li');

        //2. update the text inside this li element
        li.innerHTML = `
        <span class="taskname">${element.name}</span>
        <button atrid=${element._id} class="upBtn">⬆️</button>
        <button atrid=${element._id} class="dwnBtn">⬇️</button>
        <button atrid=${element._id} class="delBtn">❌</button>
        `; 

        // 3. append this li element to the taskList
        taskList.appendChild(li);
    })
}


axios.get('/gettodos')
    .then((res) => {
        console.log("response:",res);
        let todos = res.data;
        addToDom(todos);      
    })
    .catch((err) => {
        console.error(err);
    })


addtask.addEventListener('click', (ev) => {
    ev.preventDefault();         

    axios.post('/addtodo',{
        name : newtask.value
    })
    .then((res)=>{
        let todos = res.data;
        newtask.value = '';  
        console.log(todos);
        addToDom(todos);      
    })
    .catch((err)=>{
        console.error(err);
    })

})


function deleteTodo(atrid){
    axios.post('/deletetodo', {id: atrid})
        .then((res) => {
            let todos = res.data;
            console
            addToDom(todos);      
        })
        .catch((err) => {
            console.error(err);
        }) 
}

taskList.addEventListener('click', (ev) => {
    // console.log(ev);
    // console.log(ev.target);
    let atrid = ev.target.getAttribute('atrid');
    let btnName = ev.target.className;

    // console.log(atrid); 
    // console.log(btnName); 

    if (btnName == 'delBtn'){
        deleteTodo(atrid);
    }

    else if (btnName == 'upBtn' ){

        axios.get(`/increasepriority?id=${atrid}`)
        .then((res)=>{
            let todos = res.data;
            addToDom(todos);      
        })
        .catch((err)=>{
            console.error(err);
        })
    }

    else if (btnName == 'dwnBtn'){

        axios.get(`/decreasepriority?id=${atrid}`)
        .then((res)=>{
            let todos = res.data;
            addToDom(todos);      
        })
        .catch((err)=>{
            console.error(err);
        })
    }
})