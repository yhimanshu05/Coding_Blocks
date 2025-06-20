// DOM_Properties
// 1. innerText
// 2. textContext
// 3. innerHTML

const para = document.querySelector('p');

// innerText
console.log(para.innerText); // OUTPUT: Lorem..........

// textContext
console.log(para.textContent); // OUTPUT: Lorem...........

// innerHTML
console.log(para.innerHTML); // OUTPUT: <span>Lorem ipsum dolor</span> sit, amet consectetur adipisicing elit........


// ClassList Property

const h1 = document.querySelector("#heading");
console.log(h1); 

h1.style.color="purple";
h1.style.border="4px solid black";
h1.style.padding="16px";
h1.style.backgroundColor="magenta";


// const h1 = document.querySelector("#heading");

// console.log(h1.classList);

// const h1 = document.getElementById("heading");



// //using classList
// h1.classList.add("heading-class"); 

// //another class added
// h1.classList.add("one");

// //removing a class
// h1.classList.remove("heading-class");

// //toggle the classes
// h1.classList.toggle("heading-class"); // added

// h1.classList.toggle("heading-class"); // removed


// console.log(h1.classList.contains("one"));  // OUTPUT: true

// console.log(h1.classList.contains("ten"));  // OUTPUT: false

// Attribute methods: 

const inp = document.querySelector('input');

// getAttribute 
inp.getAttribute('type') // OUTPUT: 'text'

inp.getAttribute('name') // OUTPUT: 'username'

inp.getAttribute('placeholder') // OUTPUT: null

// setAttribute 
inp.setAttribute('type', 'date') 
inp.getAttribute('type') // OUTPUT: 'date'


// Change the Image
const image = document.querySelector('#image');
image.setAttribute('src', 'https://tse3.mm.bing.net/th?id=OIP.BURfWz31bTAn0oD-HZeu5QHaFj&pid=Api&P=0&h=180')


// CREATE AND ADDING ELEMENTS IN DOM
const strong = document.createElement('strong');
console.log(strong);

strong.innerText = "THIS IS A STRONG TAG";

const para1 = document.querySelector("p"); 
para1.appendChild(strong);
para1.append(strong);
para1.append("This is a some random text");
para1.prepend("This is prepended text");

const span = document.createElement("span");
span.innerText="THIS IS A DYNAMIC SPAN";

para1.prepend(span);
 
// Removing Element from DOM
// 1. .removeChild() 
const strong = document.querySelector("strong"); 

const para2 = document.querySelector("p");

para2.removeChild(strong);


// 2. tag.remove()
strong.remove();

const h1 = document.querySelector("h1"); 
h1.remove();
