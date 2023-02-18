// Intro message/default page
// let choices = Bold, Medium, Light
console.log('Select a desired strength: ')
// Offer Bold, Medium, Light
// Or explain ratios?

/*
const bold = 
const med = 
const light =
*/

let strength = 'bold' 
// placeholder value, string in future
console.log('You have selected a ' + strength + ' coffee.')

let coffee = 20;
let water = 300;
let ratio = water/coffee;

// Store user choices and final explanation
const message = 'A good ratio for a ' + strength + ' pourover coffee is 1:' + ratio

const explanation = '. This means you should grind ' + coffee +' grams of coffee beans and pour ' + water + ' grams of water over your ground beans'

// Find out if it is better to store text in the JS or in the HTML. Not using React or Angular.

// final output
console.log(message + explanation)