"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
("ARRAY METHODS");
//.Push Method:Appends new elements to the end of an array, and returns the new length of the array
let arr = [1, 2, 3, 4, 5, 6]; //Before Push method used
arr.push(7);
console.log(arr); //After push method used[1,2,3,4,5,6,7]
//.Pop Method:Removes the last element from an array and returns it. If the array is empty, undefined is returned and the array is not modified.
let arr1 = [1, 2, 3, 4, 5, 6]; //Before pop method used
arr1.pop();
console.log(arr1); //After pop method used[1,2,3,4,5]
//.shift Method:Removes the first element from an array and returns it. 
let arr2 = [1, 2, 3, 4, 5, 6]; //Before shift method used
arr2.shift();
console.log(arr2); //After shift method used[2,3,4,5,6]
//.unshift:Inserts new elements at the start of an array, and returns the new length of the array.
let arr3 = [1, 2, 3, 4, 5, 6]; //
arr3.unshift(0);
console.log(arr3); // /After unshift method used [0, 1, 2, 3,4,5,6]
//.Concatt:Combines two or more arrays. This method returns a new array without modifying any existing arrays.
const str1 = 'Hello';
const str2 = 'World';
console.log(str1.concat(' ', str2)); // Expected output: Hello World
//Example # 2
const hello = "Hello, ";
console.log(hello.concat("Kevin", ". Have a nice day.")); //Expected output: Hello, Kevin. Have a nice day.
//.Join//Adds all the elements of an array into a string, separated by the specified separator string.
const elements = ['Fire', 'Air', 'Water'];
console.log(elements.join('_')); //// Expected output: "Fire_Air_Water"
//.Slice
//The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
const Animals = ['ant', 'bison', 'camel', 'duck', 'elephent'];
console.log(Animals.slice(2)); // Expected output: Array [ 'camel', 'duck', 'elephent' ]
console.log(Animals.slice(2, 3)); // Expected output: Array [ 'camel' ]
console.log(Animals.slice(2, 4)); // Expected output: Array [ 'camel', 'duck' ]
//.SPLICE
//The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
//.Index Of:Returns the index of the first occurrence of a value in an array, or -1 if it is not present.
let arr4 = [1, 2, 3, 4, 5, 6, 7];
console.log(arr4.indexOf(5)); //Expected output: 4
console.log(arr4.indexOf(3)); //Expected output: 2
console.log(arr4.indexOf(8)); //Expected output: -1
//.Include:Determines whether an array includes a certain element, returning true or false as appropriate.
const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
console.log(alphabet.includes('c')); //Expected output: "true"
console.log(alphabet.includes('i')); //Expected output: "false"
//.Find:Returns the value of the first element in the array where predicate is true, and undefined otherwise.
const array1 = [5, 12, 8, 130, 44];
const found = array1.find((element) => element > 10);
console.log(found); // Expected output: 12
const arry2 = [3, 5, 6, 8];
const find = arry2.find((elements) => elements % 2 == 0);
console.log(find); //Expected output: 6
//.at:Returns the item located at the specified index.
const arry4 = [5, 12, 8, 190, 56];
let index = 3;
console.log(`using an index of ${index} returned the element ${arry4.at(index)}`); //Expected output: using an index of 3 returned the element 190
//.Reverse:Reverses the elements in an array in place. This method mutates the array and returns a reference to the same array.
let num = [1, 2, 3, 4, 5];
num.reverse();
console.log(num); //Expected output: [ 5, 4, 3, 2, 1 ]
//.Some:Determines whether the specified callback function returns true for any element of an array.
const num1 = [1, 12, 3, 5, 7, 9];
let some = num1.some((elements) => elements % 2 === 0); //Expected output: true
console.log(some);
let some1 = num1.some((elements) => elements % 11 === 0); //Expected output:false
console.log(some1);
//.Every:Determines whether all the members of an array satisfy the specified test.
let num2 = [1, 2, 45, 67, 1, 22, 3, 43, 65];
const y = (x) => x > 100;
console.log(num2.every(y)); //Expected output:false,
//.Map Method:Calls a defined callback function on each element of an array, and returns an array that contains the results.
const a1 = [2, 4, 6, 8, 0];
const res = a1.map((x) => x * 2);
console.log(res); //Expected output:[ 4, 8, 12, 16, 0 ];
//.Filter Method:Returns the elements of an array that meet the condition specified in a callback function.
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const result = words.filter((x) => x.length > 6);
console.log(result); //// Expected output: Array ["exuberant", "destruction", "present"]
//.Reduce:Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.
let numbers = [1, 2, 3, 4, 5, 6];
let initialvalues = 0;
let TotalValues = numbers.reduce((accumulator, currentvalue) => accumulator + currentvalue, 0);
console.log(TotalValues); // Expected output:21
let number = [1, 2, 3, 4, 500, 600];
let initialvalue = 4;
let TotalValue = number.reduce((accumulator, currentvalue) => {
    console.log(`The accumulator value${accumulator} and current value ${currentvalue}`);
    return accumulator + currentvalue;
}, 5);
console.log(TotalValue.toLocaleString()); // Expected output:26
//===============================================================================================
