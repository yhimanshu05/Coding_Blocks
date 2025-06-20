// jQuery

// Selecting elements
$('#id')        // Select element with ID
$('.class')     // Select elements with class
$('tag')        // Select elements with tag name

console.log($('#heading')); 

// Changing styles
// .css('property', 'value') 
const h1 = $('#heading');
console.log(h1.css('backgroundColor','magenta'));
console.log(h1.css('color','red'));
console.log(h1.css('border','3px dotted black'));


// By DOM
const h2 = document.getElementById('heading');
console.log(h2.style.backgroundColor="yellow");


// Using on classes
const h3 = $('.fav_mov');
console.log(h3.css('background-color','red'));

// Anchor Tag
const h4 = $('ul a[href="http://google.com"]');
console.log(h4.css('border', '3px dashed red'));



// jQ methods
// 1. .text() : works like textContext 
const p = $('p');
console.log(p.text());

// to pass values
(p.text('New Text'));


// 2.html() : works like innerHTML
console.log(p.html()); // OUTPUT: New Text

//to pass values
p.html('<span>This is an added span</span>');



// 3. attr() : works like getAttribute
const inp = $('input');
console.log(inp.attr('type')); // OUTPUT: text

// to pass values
inp.attr('type', 'password');
console.log(inp.attr('type')); // OUTPUT: password


// 4.first()  & last()
const ul = $('h2+ul li');
console.log(ul.first().css('color','goldenrod')); // OUTPUT: S {0: li.fav-movie, length: 1, prevObject: S}

console.log(ul.last().css('color','cyan')); // OUTPUT: S {0: li.fav-movie, length: 1, prevObject: S}


// 5. value() - similar to value to get value
console.log(inp.val());



// CLASS METHODs
// 1. addClass() - adds a class to an element similar to .classList
h1.addClass('one');
h1.addClass('two'); 

// 2. removeClass() 
h1.removeClass('one'); 

// 3. toggleClass() - toggles a class on an element
// h1.toggleClass('one'); // will add the class 
h1.toggleClass('one');    // will remove the class


// jQuery Events

//click 
$('#btn-1').click(function(){
    alert('Button clicked')
    $(this).css('border', '3px solid black')
})

// keypress
$('#input').keypress(function(){
    // console.log('keyboard key pressed')
    console.log($(this).val())
})

// using any event object
$('#user').keypress(function(e){
    if(e.which===13){ 
        console.log('pressed enter')
    }
})



// jQuery - Effects
$('#btn2').click(function(){
    $('div').fadeOut(800,() => console.log('Faded out')
)
})

// better way 
$('#btn3').click(function(){
    $('div').fadeToggle(800, ()=> console.log('Toggled fade'))
})

// slide up
$('#btn4').click(function(){
    $('div').slideToggle()
})

//hide
$('#btn5').click(function(){
    $('div').hide()
})

$('#btn6').click(function(){
    $('div').show()
})