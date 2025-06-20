// DOM : Document Object Model

// console.dir(document); // displaye the structure of the document

// Selectors in DOM
// 1. getElementById : select an element through its id. Returns single element
const h1= document.getElementById('heading');

console.log(h1);
h1.style.color='magenta';
h1.style.border='3px dashed black';
h1.style.backgroundColor='grey';

// 2. getElementByTagName : select an element by their tag name(like HTML tag). Returns HTMLCollection
const sections = document.getElementsByTagName('section');

console.log(sections); // OUTPUT: HTMLCollection [section]
console.log(sections[0]); // OUTPUT: section

// 3. getElementByCLassName : select an element by class name. Returns HTMLCollection
const favMovies = document.getElementsByClassName('fav-movie');

console.log(favMovies); // OUTPUT: HTMLCollection(3) [li.fav-movie, li.fav-movie, li.fav-movie]
for(let movie of favMovies){
    movie.style.color='purple';
    movie.style.fontWeight='bold';
}

// 4. getElementByName : select element by its name attribute
const inp = document.getElementsByName('username');

console.log(inp); // OUTPUT: NodeList [input]
console.log(inp[0]); // OUTPUT: <input type="text" name="username">

// 5. querySelector : select the 1st element which matches the selector
const h = document.querySelector('#heading');
const movie = document.querySelector('.fav-movie');

console.log(h); // OUTPUT: <h1 id="heading" style="color: magenta; border: 3px dashed black; background-color: grey;">DOM</h1>
console.log(movie); // OUTPUT: <li class="fav-movie" style="color: purple; font-weight: bold;">SpiderMan</li>

// 6. querySelectorAll : gives the NodeList of the all the elements which match the selector
const allMovies = document.querySelectorAll('.fav-movie');

console.log(allMovies); // OUTPUT: NodeList(3) [li.fav-movie, li.fav-movie, li.fav-movie]


// Traversing the DOM
// CHILD to PARENT 
const strong = document.querySelector('strong');
const strongP = strong.parentElement; // OUTPUT: <p>...</p>
console.log(strongP.parentElement); // OUTPUT: <body>...</body>

console.log(strongP.parentElement.parentElement); // OUTPUT: <html></html>
console.log(strongP.parentElement.parentElement.parentElement); // OUTPUT: null

// PARENT to CHILD
const para = document.querySelector('p');
console.log(para.children); // OUTPUT: HTMLCollection(3) [span, strong, a]
console.log(para.children[0]); // OUTPUT: <span>...</span>

// PARENT to SIBLING
const m1 = document.querySelector('h3'); // OUTPUT: <h3>Movies</h3>
console.log(m1.previousElementSibling); // OUTPUT: <img id="image" src"....."">
console.log(m1.nextElementSibling); // OUTPUT: <ul>...</ul>
console.log(m1.nextElementSibling.nextElementSibling); // OUTPUT: <br>

