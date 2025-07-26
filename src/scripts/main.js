// Imports go first
import { makePottery } from "./PotteryWheel.js";

// Make 5 pieces of pottery at the wheel
// makePottery(shape,weight,height)
let mug = makePottery("mug", 3.5, 5.5);
let vase = makePottery("vase", 10, 16);
let bowl = makePottery("bowl", 4, 4.5);
let picture = makePottery("picture", 6, 15.5);
let plate = makePottery("plate", 5, 1.5);

console.log(mug);

// Fire each piece of pottery in the kiln

// Determine which ones should be sold, and their price

// Invoke the component function that renders the HTML list
