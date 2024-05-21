// Q:11 - Create a new array named citrusFruits that contains the first two elements of the fruits array using the method.
const fruits: string[] = ["apple","banana","mango","orange"]
const citrusFruits:string[] = fruits.splice(0,2);
console.log("Citrus Fruits:",citrusFruits);