// Imports go first
import { makePottery } from "./PotteryWheel.js";
import { firePottery } from "./Kiln.js";

// Make 5 pieces of pottery at the wheel
// makePottery(shape,weight,height)
let mug = makePottery("mug", 3.5, 5.5);
let vase = makePottery("vase", 10, 16);
let bowl = makePottery("bowl", 4, 4.5);
let picture = makePottery("picture", 6, 15.5);
let plate = makePottery("plate", 5, 1.5);

console.log(mug);

// Fire each piece of pottery in the kiln
let firedMug = firePottery(mug, 2300);
console.log(firedMug);
let firedVase = firePottery(vase, 2100);
let firedBowl = firePottery(bowl, 2200);
let firedPicture = firePottery(picture, 1000);
let firedPlate = firePottery(plate, 1500);

// Determine which ones should be sold, and their price

// Invoke the component function that renders the HTML list
