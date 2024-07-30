"use strict";
// chapter one alerts

// 1. Alert these following (individually):

// I. First Name
// let firstName = alert("Bilal");
// II. Last Name
// let lastName = alert("Ahmed");
// III. Email
// let email = alert("jokhiobilal.11@gmail.com");
// IV. Phone Number
// let phoneNumber = alert("090078601");
// V. Password
// let password = alert("jawan73");

// 2. Correct this statement: alert"You're learning JavaScript!";
// alert("you 're learning javascript!");

// 3. Code an alert statement displaying any message you like.
// alert("It's not over until i win!");

// Chapter 2 (Variables for string)

// 1. Declare any variable in the camelCase format.
// let myFirstName;
// 2. Declare a variable of your choice without defining it. Then, in a second statement, assign it a string of your choice.
// let learningJavascript;
// learningJavascript = true;
// 3. Declare the variable teamName and Alert your Team name.
// let teamName;
// alert(teamName); //undefined
// 4. This statement has already been coded.  Assign the variable a new string.
// var bestMan = "Charlie";
// bestMan = "Wolverine";

// Chapter 3 (Variables for numbers)

// 1. Declare a variable "caseQty"

// let caseQty;
// 2. Assign to the variable caseQty, which has already been declared,the value 144.
// caseQty = 144;
// 3. Rewrite this statement so the variable can be used in a math
// operation. var num = "9";
// let num = "9";
// num = +num;
// alert(typeof num);

// 4. In one statement declare a variable. In a second statement assign it the sum of 2 numbers.
// let number;
// number = 2 + 2;

// 5. What is the value of orderTotal?
// var merchTotal = 100;
// var shippingCharge = 10;
// var orderTotal = merchTotal + shippingCharge;
// Try it yourself.
// alert("110");

// 6. In the first statement declare a variable and assign it a number. In the second statement, change the value of the variable by adding it together with a number.

// let someNumber = 73;
// someNumber = 73 - 26;
// alert(someNumber);

// Chapter 4 (Variable names Legal and Illegal)

// 1. Correct this statement.
// var productCost = 3.45;

// 2. Rewrite this using camelCase.
// var NameOfBand;
// 3. In a single statement declare a legally-named variable and assign a number to it.
// let $lagalVariable = 27;
// 4. Declare a variable that is a combination of your first and last names. Use camelCase.
// let BilalAhmed;

// 5. List the legal and Illegal Variables.
/* 
legal variables:

let name;
let FirstName;
let _name;
let $name;
let _$name1;

Illegal variable:

let 1name;
let *name;
let -name;
let 11;
let +name;
let name+
let my name;
*/

// Chapter 5 (Math Expression I)

// 1. What is the name and symbol of the arithmetic operator that gives you the remainder when one number is divided by another?
// alert("ramainder operator = '%' use to take remainder ");

// 2. What is the value of num?
// var num = 20 % 6;
// alert(2);

// 3. In a single statement, declare the variable largeNum and assign it the result of 1,000 multiplied by 2,000.

// let largeNum = 1000 * 2000;
// alert(largeNum);

// 4. Assign to a variable the value represented by one variable subtracted from the value represented by another variable
// let var1 = 12;
// let var2 = var1;
// var1 -= var2;
// console.log(var1, var2);

// 5. Assign to a variable the remainder when one number is divided by  another. The variable hasn't been declared beforehand. Make up the variable name.

// let remainder = 23 % 178;
// console.log(remainder);

// 6. Code an alert that displays the result of a multiplication on 2 numbers.
// alert(`Multiplication of two numbers: ${23 * 2}`);

// Chapter 6 (Math Expression II)

// 1. Code a short form of x = x + 1; Use either of the two legal
// expressions.

// let x = 0;
// console.log(x++);
// console.log((x += 1));

// 2. If x has a value of 100, what is the fastest way to reduce it to 99 with a math expression?
// let x = 100;
// console.log(--x);

// 3. // What is the value of y?
// var x = 50;
// var y = x++;
// console.log(50);

// 4. var y = 50;
// var z = --y;
// What is the value of z?
// console.log(49);
// 5. In a single statement, decrement a num and assign its original value to newNum.

// let num1 = 1,
//   num2 = num1--;
// console.log(num1, num2);

// 6. In a single statement add 1 to a variable and assign its original value to another variable.

// let num = 1;
// let num2 = num++;

// 7. Assign a number value to a variable.
// Increment the variable.// Display the new value in an alert

// let variable = 4;
// console.log(++variable);

// Chapter 7 (Math Expression III)

// 1. var calculatedNum = 2 + (2 * 6);
// What is the value of calculatedNum?
// console.log(14);

// 2. var calculatedNum = (2 + 2) * 6;
// What is the value of calculatedNum?
// console.log(24);

// 3. var calculatedNum = (2 + 2) * (4 + 2);
// What is the value of calculatedNum?
// console.log(24);

// 4. var calculatedNum = ((2 + 2) * 4) + 2;
// What is the value of calculatedNum?
// console.log(26);

// 5. Write a statement that assigns to cost the result of 2 + 2 * 4 + 10,clarified with parentheses, producing 56.

// let cost = (2 + 2) * (4 + 10);
// console.log(cost);

// 6. Write a statement that assigns to units the result of 2 + 2 * 4 + 10,clarified with parentheses, producing 20.

// let a = 2 + 2 * 4 + 10;
// console.log(a);

// 7. Write a statement that assigns to pressure the result of 4 / 2 * 4, clarified with parentheses, producing 5.

// let pressure = (4 / 2) * 4 - 3;
// console.log(pressure);

// Chapter 8 (Concatenating Text Strings)

//1. What is the value of num? Include quotation marks.

// var num = "2" + "2";
// console.log("22");

// 2. message = ("Hello," + "Dolly");
// What is the value of message? (Include the quotation marks.)
// Alert the statement

// console.log("'Hello Number 10'");

// 3. alert("33" + 3);
// What message displays in the alert box?
// console.log("333");
// 4. Write an alert that displays the concatenation of the two parts
// of "Pakistan Zindabad".
// alert("Pakistan" + "Zindabad");

// 5. Write a statement that assigns to a variable the concatenation of a string with a number

// let string = "string" + 2;
// console.log(string);

// 6. Assign strings to two variables. Then concatenate them and assign
// the result to a third variable.

// let string1 = "hello",
//   string2 = "there";
// let string3 = string1 + " " + string2;
// console.log(string3);

// Chapter 9 (Prompts)

// 1. Code a prompt with the message "Enter first name". The user's
// response is assigned to firstName.
// let firstName = prompt("Enter First Name", "Bilal");
// console.log(firstName);

// 2. Code a prompt with the message "Country?" and the default
// answer "China". The user's response is assigned to country.

// let $city = prompt("Enter country", "pakistan");
// console.log($city);

// 3. Correct this statement
// var yourName = prompt("Enter Your Name");

// Code a prompt that specifies a string as the message Include a
// default input.

// let string = prompt("enter string", "string one");

// 5. Assign strings to two variables. Code a prompt specifying the first
// variable as the message and the second variable as the default
// response. Assign the user's response to a third variable.

// let var1, var2, var3;
// var1 = "what is your age";
// var2 = "My age is 40";
// var3 = prompt(var1, var2);
// console.log(var3);as

// 6. Display a prompt, including both a message and a default
// response.
// Display the user's response in an alert.

// let userResponse = prompt("are you learning javscript", "yes");
// alert(userResponse);

// Chapter 10 (if statments)

// 1. var city = "Karachi"
// if (city = "Karachi") {
// console.log("The City OF Lights")
// Correct the above statement:
// Also try this statement by yourself

// let city = "Karachi";
// if (city == "Karachi") {
//   console.log("The City OF Lights");
// }

// 2. This is the first line of an if statement:
// if (x === y) {
// Complete the statement. If the condition is true, display a box
// that asks the user value of z? and assign it to another variable.

// let x = +prompt("Enter the value of x", 2),
//   y = +prompt("enter the value of y", 2),
//   z;

// if (x === y) z = +prompt("Enter the value of z", 2);

// Code an if statement that tests if ZipCode is "10010" so, Alert
// that "Karachi". if not then alert ("Please write correct city")

// let zipCode = +prompt("Enter zip code", 10010);

// if (zipCode === 10010) alert("Karachi");
// else alert("please enter the correct code");

// 4. Code an if statement. Test whether a variable has a particular
// numerical value. If so, assign a new value to that variable, as in
// x = 25;

// let x = +prompt("Enter number");
// if (x === 73) x = 25;
// else console.log(x);

// Chapter 11 (Comparison Operators)

// let a = 2,
//   x = 3;

//   1. Code the first line of an if statement that tests whether one
// variable is unequal to another. (Use !)

// if (x != a) console.log("x is not equal to a");

// 2. Code the first line of an if statement that tests whether the
// value represented by a variable is greater than or equal to the
// value represented by another variable.

// if (x >= a) console.log("value of X is greater than equal to A");
// Code an if statement. Test whether a variable is unequal to a
// particular number. If so, assign a number to that variable.
// if (x != 2) {
//   x = 2;
// }

// Code an if statement that tests whether a number is unequal to
// a different number. If the condition is true (it will be), display a
// congratulations alert.

// if (2 !== 3) {
//   alert("congratulations!");
// }

// 5. Code a prompt asking for your first name.
// Code an if statement that tests whether the name you entered
// is unequal to another name.

// let firstName = prompt("Enter your First Name!");
// firstName = firstName.toLocaleLowerCase;

// if (firstName != "bilal") {
//   alert("No match");
// }

// Chapter 12 (if...else and else if statements)

// 1. Code an if statement that tests whether the value represented by
// a variable is greater than or equal to the value represented by
// another variable. If so, display an alert. If not, display a different
// alert.

// let var1, var2;
// var1 = +prompt("enter number 1");
// var2 = +prompt("enter number 2");

// if (var1 >= var2) {
//   alert("number 1 is greater than or equal to number 2");
// } else alert("number 1 is less than or equal to number 2");

// Write a program using if else and else if statement which take
// marks from user. And the program will calculate your percentage
// and give you grade A/C to Your percentage. (MARKSHEET)

// var eng, urdu, sindhi;
// eng = inputMarks("english");
// urdu = inputMarks("Urdu");
// sindhi = inputMarks("Sindhi");
// let totalMarks = 300;

// var percentage = ((eng + urdu + sindhi) / totalMarks) * 100;

// alert(percentage);

// if (percentage > 80 && percentage <= 100) alert("A Grade");
// else if (percentage > 70 && percentage <= 80) alert("B Grade");
// else if (percentage > 60 && percentage <= 70) alert("C Grade");
// else if (percentage > 50 && percentage <= 60) alert("C- Grade");
// else alert("F");

// function inputMarks(sub) {
//   let subject = +prompt(`enter marks of a ${sub} subject`);
//   if (subject < 0 || subject > 100) {
//     alert("wrong input! input Again!");
//     return inputMarks(sub);
//   }
//   return subject;
// }

// 3. This is the if statement that begins the code.
// if (a === 10) {
// alert("a is 10");
// }
// If a isn't 10, display an alert that says The correct value of a is
// alert("correct value of a is 12");

// This is the if statement that begins the code.
// if (a === 10) {
// alert("a is 10");
// }
// If a isn't 10, display an alert that says The correct value of a is

// city = prompt("Enter a city ");
// if (city === "larkana") alert("acknowledging it is Larkana");
// else if (city === "shikarpur") alert("acknowledgingit is Shikarpur");
// else alert("hello world!");

// Chapter 13 (Testing sets of conditions)

// 1. Code the first line of an if statement that tests whether both are true: a has the same value as b and c has the same value as d.

// let a = Prompt(),
//   b = Prompt(),
//   c = Prompt(),
//   d = Prompt();

// if (a == b && b == d) alert("condition is true");

function Prompt() {
  let input;
  return (input = +prompt("Enter a number"));
}

// 2. Code the first line of an if statement that tests whether either or
// both are true: a has the same value as b or c doesn't have the
// same value as d.

// let a = Prompt(),
//   b = Prompt(),
//   c = Prompt(),
//   d = Prompt();

// if (a == b || c != d) alert("Both conditions are true");

// 3. Code the first line of an if statement that tests whether
// I. name is either "Hamza" or "Arsalan".
// II. age is Less than 60.

// let _name = prompt("Enter name");
// let age = +prompt("Enter age");

// if (_name == "hamza" || (_name == "arsalan" && age == 30)) {
//   alert("hello brother!");
// }

// let number1, number2;
// (number1 = 2), (number2 = 4);

// if (number1 <= number2) alert("number1 is less or equal to number 2");
// else alert("number one is greater than number 2");

// 5. Declare 2 variables. Assign one of them your first name and the
// other one your last name.
// Code 2 prompts, asking for your first and your last name.
// If your answers match the two variables, display an alert.

// let firstName = prompt("enter first name"),
//   lastName = prompt("enter last name");
// if (firstName == "bilal" && lastName == "ahmed") alert("hello Bilal Ahmed");

// Chapter 14 (If statements nested)
// 1. Code an if statement enclosing a nested if. If password is not
// empty, then check if password is not greater than 5 , then display
// an alert that says "Password must be greater than 5" if greater
// than 5 then Alert "OK".

// let pass = +prompt("Enter password");

// if (pass) {
//   if (pass <= 5) {
//     alert("OK");
//   } else alert("password must be less than or equal to 5");
// } else alert("wrong password");

// Code the first line of an if statement that avoids the nesting above
// by testing for multiple conditions.

// if (a === 1) {
//   if (c === "Max") {
//     alert("OK");
//   }
// }

// let a = 1,
//   c = "max";

// if (a === 1 && c == "max") alert("OK");

// Chapter 15 (Array I)

// 1. Declare an empty array.

// let array = new Array(4);
// console.log(array);

// 2. Code an array with 1 string element
// let array = ["bilal", 1, true];

// 3. var alphabet = ["h","i","j","k"]. Now print the letter "j" in alert using array index

// let alphabet = ["h", "i", "j", "k"];
// console.log(alphabet[2]);

// 4. var alphabet=["h","i","j","k", "l","m", "n", "o"]. Find the total length of array.
// var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];
// console.log(alphabet.length);

// 5. Declare an array with one element and Add a second element
// with index in array. Create an alert whose message is the new
// element.
// let array = [1];
// array[array.length] = 2;
// console.log(array[1]);

// Chapter 16 (Array II)

// 1. Code an array with 1 string element.
// Add an additional element to the array using push.
// Create an alert whose message is the last element.

// let array = ["bilal"];
// array.push("ahmed", "jokhio");
// console.log(array[array.length - 1]);

// 2. var Alphabet=["h","i","j","k"]
// Remove the last element from the array Alphabet.
// var alphabet = ["h", "i", "j", "k"];
// let lastElement = alphabet.pop();
// console.log(lastElement);

// 3. var alphabet=["h","i","j","k"]
// Add a new element, a number, to the end of an array.

// let alphabet = ["h", "i", "j", "k"];
// let arrayLength = alphabet.push("l", "m");
// console.log(arrayLength);

// Arrays pasrt 2
var sizes = ["S", "M", "XL", "XXL", "XXXL"];
// 1. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// Remove the first element of an array.

// console.log(sizes.shift());

// 2. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// Add three number elements to the beginning of an array.
// sizes.splice(0, 0, 1, 2, 3);
// console.log(sizes);

// 3. Declare an array with one element.
// Add a second element to the beginning of the array.
// Create an alert whose message is the new first element.
// let arr = [1];
// arr.unshift(0);
// console.log(arr[0]);

// 4. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// Insert "L" into the array between "M" and "XL".
// sizes.splice(2, 0, "L");
// console.log(sizes);

// 5. var sizes = ["S", "M", "XL", "XXL", "XXXL"].
// Copy the first 3 sizes of the array and put them into a new array,regSizes.

// let someSizes = sizes.slice(0, 3);
// console.log(someSizes);

// 6. var pets = ["dog", "cat", "ox", "duck", "frog"].
// Add 2 elements after "dog" and remove "cat", "ox", and "duck".
// var pets = ["dog", "cat", "ox", "duck", "frog"];
// var deleted = pets.splice(1, 3, "lion", "camel");
// console.log(pets, deleted);

// 7. var pets = ["dog", "cat", "ox", "duck", "frog"];
// Remove "cat" and "ox".
// let pets = ["dog", "cat", "ox", "duck", "frog"];
// let removedElements = pets.splice(1, 2);
// console.log(pets, removedElements);

// 8. var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];
// Reduce it to "duck" and "frog" using slice.
// let pets = ["dog", "cat", "ox", "duck", "frog"];
// let someAnimals = pets.slice(3);
// console.log(someAnimals);

// Chapter 17 - 20 (for Loops)

// 1. Write a statement in which loop is to run 10 times.
// for (let i = 1; i < 11; ) console.log(i++);

// 2. Code the first line of a for loop with the usual counter name, usual// starting value, and usual increment. Run it 12 times using <= to
// specify how many loops.
// for (let i = 1; i <= 12; i++) console.log(i);

// 3. What are the 5 characters missing from this code, excluding any
// spaces that are missing? Type them in order, with no spaces or
// commas between them.
// for (var i = 0; i <= 4; i++) {
//   console.log("hello world!");
// }

// 4. Code the first line of a for loop with a counter name that's not i.
// Code the usual starting value and usual increment. Run it 100
// times using < to specify how many loops.

// for (let counter = 1; i <= 100; counter++) console.log(counter);

// 5. Code the first line of a for loop with the usual counter and the
// usual starting value. Run it 3 times using > to specify how many
// loops. Decrement it with each iteration.

// 6. The statement assigns the number of elements in the array to the
// variable.
// 7. Set a variable named "flag" with an initial Boolean value of your
// choice.
// 8. Code the first line of a for loop with the usual counter, the usual
// starting value, and the usual incrementing. Limit the number of
// loops by the number of elements in the array pets.
// 9. Coding Exercise:
// Set a for loop to run 10 iterations.
// On the second iteration, display the counter in an alert. (It should
// be 1.)
// Break out of the loop.
// 10. Create an array which contains user names
// Code a prompt with the message "Enter first name". The user's
// response is assigned to firstName.
// Code the first line of a for loop with the usual counter, the usual
// starting value, and the usual incrementing. Limit the number of
// loops by the number of elements in the array user names.
// Code an if statement that tests the presense of (user name) in an
// array.

// var firstArr = ["a", "b", "c", "d", "e", "f"];
// var secondArr = [1, 2, 3, 4, 5, 6];
// Code the first line of a for loop with the usual counter, the usual
// starting value, and the usual incrementing. Limit the number of
// loops by the number of elements in the array firstArr.
// In the scope of main loop Code the nested loop. Limit the number
// of nested loops by the number of elements in the array
// secondArr.
// After that concatenate the both loops.
// Expected Output:
// a1
// a2
// a3
// a4
// ...
// f6

// var firstArr = ["a", "b", "c", "d", "e", "f"];
// var secondArr = [1, 2, 3, 4, 5, 6];

// for (let i = 0; i < firstArr.length; i++)
//   for (let j = 0; j < secondArr.length; j++)
//     console.log(firstArr[i] + secondArr[j]);
