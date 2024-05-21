// Assignment Of Array

// Q:1 - Create an array named fruits that contains the following string elements: "apple","banana","mango","orange"
const fruits:string[] = ["apple","banana","mango","orange"]
console.log("Fruits:",fruits);

// Q:2 - Declare an array named numbers that can contain only number elements and initialize it with the values 10,20,30 and 40.
const numbers:number[] = [10,20,30,40]
console.log("Numbers:",numbers);

// Q:3 - Access the third element of the fruits array and assign it to a variable named thirdFruit.
const thirdFruit:string = fruits[2]
console.log("Third Fruit:",thirdFruit);

// Q:4 - Change the second element of the numbers array to 25.
numbers[1] = 25
console.log("Numbers after changing the second element of the numbers array:",numbers);

// Q:5 - Add the element "grape" to the end of the fruits array using the method
fruits.push("grape")
console.log("Fruits after adding the element grape:",fruits);