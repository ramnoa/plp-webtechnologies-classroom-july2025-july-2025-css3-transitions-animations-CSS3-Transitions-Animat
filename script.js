// Global variable (visible everywhere in this file)
let globalMessage = "Hi! This is from global scope.";

/**
 * Function to calculate area of rectangle
 * @param {number} length 
 * @param {number} width 
 * @returns area of the rectangle
 */
function calculateArea(length, width) {
  // Local variable (only exists inside this function)
  let area = length * width;
  return area;
}

// Function that uses calculateArea() and updates the page
function showResult() {
  let length = 8; // local variable
  let width = 4;  // local variable
  let result = calculateArea(length, width);

  // show result inside <p id="result">
  document.getElementById("result").innerText =
    `${globalMessage} The area of ${length} x ${width} is ${result}.`;
}

/* ----------------------------
   Part 3: CSS + JS Together
   ---------------------------- */

// get elements from the page
const triggerBtn = document.getElementById("triggerBtn");
const circle = document.querySelector(".circle");

// function that toggles the animation class
function toggleAnimation() {
  circle.classList.toggle("animate");
}

// run toggleAnimation whenever button is clicked
triggerBtn.addEventListener("click", toggleAnimation);
