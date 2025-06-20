// IntroductionTODOMEvents
// Events : These are actions or occurences that happen in the system you are programming which the system tells you about so your code can react to them.
// Two ways to add events  - inline and external

// 1. inline: it is directly done in the HTML .
// 2. external
// const btn = document.getElementById('btn');
// const h1 =document.querySelector('h1');


// btn.onclick = function(){
//     console.log("Someone clicked the button.");

// }

// h1.onclick = function(){
//     h1.style.color="red";
//     h1.style.backgroundColor = 'aqua';
//     h1.style.border = '3px solid bloack';
// }



function scream(){
    console.log('SCREAM!!!!!');
}

function shout(){
    console.log('SHOUTTT!!!');
}

// btn.onclick = scream;
// btn.onclick = shout; // scream will not work when we run this


// by doing this both shout and scream will work 
btn.addEventListener('click', scream);
btn.addEventListener('click', shout); 

// ----------------MOUSE EVENTS--------------------

h1.addEventListener('mouseenter', function() {
    console.log('Mouse Enter');
    h1.style.border ='3px solid black';
    h1.style.backgroundColor ='aqua';
});

h1.addEventListener('mouseleave', function() {
    console.log('Mouse Leave');
    h1.style.border ='';
    h1.style.backgroundColor ='';
});


// Keyboard events
const inp = document.querySelector('input')
inp.addEventListener('keypress', function(){
    console.log(event.target.value);
})


// Form Events
const form = document.querySelector('form')

form.addEventListener('submit', function() {
    e.preventDefault(); // to prevent page from reloading after submitting
    console.log("Form submitted");
    const username = form.elements[1].value;
    const age = form.elements[2].value;

    console.log(username);
    console.log(age);
})