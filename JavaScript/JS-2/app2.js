// Array : Ordered collection of data.

// let nums = [1,48,39,36];
// console.log(nums); // for displaying array
// console.log(nums.length); // for getting the length of array
// console.log(nums[1]); // access the element at the 1th index.

// console.log(nums[100]); // will get undefined

// Array can store different types of elements like numbers, strings, NaN,  and another array in it.

// const randomArray = [1,2,3,3.14,NaN,"Himanshu",["Apple","Orange"], undefined,null];
// console.log(randomArray);
// console.log(randomArray[6]);


// ReferenceType and Equality
// const color = ['red', 'green', 'orange'];
// const colorCopy = color; // Copies the color array to colorCopy.

// colorCopy.push(1,2,3); // Inserted 1,2,3 into the array into colorCopy

// console.log(colorCopy); // OUTPUT: ['red', 'green', 'orange', 1, 2, 3]
// console.log(color); // OUTPUT: ['red', 'green', 'orange', 1, 2, 3] (we can observe that the new elements also got puched into the color array, this shows the arrays are reference type.)



// Array Methods
// 1. push() : inserting elements into array at the end
const fruits = ["Apple", "Orange", "Mango", "Banana"];

fruits.push('Papaya', 'Kiwi', 'Grapes');
console.log(fruits); // OUTPUT: ['Apple', 'Orange', 'Mango', 'Banana', 'Papaya', 'Kiwi', 'Grapes']

// 2. pop() : deleting element from the end of the array
fruits.pop();
console.log(fruits.pop()); // display the last element popped
console.log(fruits); //OUTPUT: ['Apple', 'Orange', 'Mango', 'Banana', 'Papaya', 'Kiwi']

// 3. unshift() : inserting elements at the beginning of the array.
fruits.unshift('Grapes', 'Dragon Fruit');

console.log(fruits); // OUTPUT:['Grapes', 'Dragon Fruit', 'Apple', 'Orange', 'Mango', 'Banana', 'Papaya', 'Kiwi']

// 4. shift() : deleting elements from the beginning of the array
fruits.shift();

console.log(fruits); // OUTPUT: ['Dragon Fruit', 'Apple', 'Orange', 'Mango', 'Banana', 'Papaya', 'Kiwi']

// 5. slice() : returns a shallow copy of a portion of an array into new array object from start to end.
const colors = ['red', 'green', 'blue', 'orange'];

console.log(colors.slice(1,3)); // OUTPUT: ['green', 'blue']
console.log(colors.slice()); // Returns the original array as it is.

// 6. splice() : changes the content of an array by removing or replacing existing elements or adding new elements.
console.log(colors);
console.log(colors.splice(1,2,'black', 'white', 'cyan'));

// 7. join() : join all elements of array with string
const arr = [1,2,3];

console.log(arr); // OUTPUT: [1,2,3]
console.log(arr.join('->')); // OUTPUT: 1->2->3

// 8. concat() : for concatinating two arrays
const arr1 = [1,2,3];
const arr2 = [99,88,77];

console.log(arr1.concat(arr2)); // OUTPUT: [1, 2, 3, 99, 88, 77]
console.log(arr2.concat(arr1)); // OUTPUT: [99, 88, 77, 1, 2, 3]

// 9. includes() : returns a boolean values after checking if the asked element is present in it or not.
const arrNum = [1,2,3,4,5];

console.log(arrNum.includes(3)); // OUTPUT: true
console.log(arrNum.includes(99)); // OUTPUT: false

// 10. indexOf() : returns the index of elements if it is present in the array

console.log(arrNum.indexOf(3)); // OUTPUT: 2
console.log(arrNum.indexOf(99)); // OUTPUT: -1

// 11. reverse() : simply reverses the array

console.log(arrNum.reverse()); // OUTPUT: [5, 4, 3, 2, 1] 


// Nested Array

const arr3 = [['X', 'O', 'X'], ['O', 'X', 'O'], [ 'X', 'X', 'X']];

console.log(arr3); 
// OUTPUT: 
//  ['X', 'O', 'X']
//  ['O', 'X', 'O']
//  ['X', 'X', 'X']

console.log(arr3[0]); // OUTPUT: ['X', 'O', 'X']
console.log(arr3[2]); // OUTPUT: ['X', 'X', 'X']
console.log(arr3[0][0]); // OUTPUT: X


// Advanced Array Methods
// 1. filter() : creates a new array with all elements that pass the test implemented by the provided function.
const isOdd = function (num){
    if (num % 2 !== 0){
        return true;
    }
    return false;
}

const arr4 = [1,2,3,4,5,6,7,8,9,10,11];
console.log(isOdd(5)); // OUTPUT: true
console.log(isOdd(2)); // OUTPUT: false

console.log(arr4.filter(isOdd)); // OUTPUT: [1, 3, 5, 7, 9, 11] (Prints all the odd values)

// 2. map() : Creates a new array populated with the results of calling a provided function on every element in the calling array
const square = function (num1){
    return num1 * num1;
}


const nums = [1,2,3,4,5,6,7];
console.log(square(5)); // OUTPUT: 25
console.log(square(3)); // OUTPUT: 9

console.log(nums.map(square)); // OUTPUT: [1, 4, 9, 16, 25, 36, 49] (Prints the squares of all elements present in the array)

// 3. reduce() : Executes a reducer callback function on each element of the array, resulting in a single output value
const arr5 = [1,2,3,4,5];

const sum = arr5.reduce((prev, curr) => prev + curr);
console.log(sum); // OUTPUT: 15

// 4. sort() : sorts the elements of an array inplace and returns the sorted array.
const arr6 = [1,2,10,11,12,8,9,5];

console.log(arr6);
console.log(arr6.sort((a,b)=> a-b)); // OUTPUT: [1, 2, 5, 8, 9, 10, 11, 12] (For sorting in ascending order)
console.log(arr6.sort((a,b)=> b-a)); // OUTPUT: [12, 11, 10, 9, 8, 5, 2, 1] (For sorting in descending order)

