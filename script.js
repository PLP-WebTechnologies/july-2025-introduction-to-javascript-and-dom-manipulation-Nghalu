// Part 1: Variables & Conditionals
function checkAge() {
  let age = document.getElementById("ageInput").value;
  let message = "";

  if (age >= 18) {
    message = "You are eligible!";
  } else if (age > 0) {
    message = "You must be 18 or older.";
  } else {
    message = "Please enter a valid age.";
  }

  document.getElementById("ageResult").innerText = message;
}
// Part 2: Functions (Reusability)
// Function to calculate cart total
function calculateTotal(prices) {
  let total = 0;
  for (let price of prices) {
    total += price;
  }
  return total;
}
// Function to display cart total
function showTotal() {
  let prices = [10, 20, 30];
  let total = calculateTotal(prices);
  document.getElementById("cartResult").innerText = "Cart Total: $" + total;
}
// Part 3: Loops
// Countdown using a for loop
function showCountdown() {
  let list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear previous
  for (let i = 10; i >= 1; i--) {
    let li = document.createElement("li");
    li.innerText = i;
    list.appendChild(li);
  }
}
// Part 4: DOM Manipulation

// Toggle dark mode
document.getElementById("toggleBtn").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});
// Change text on button click
document.getElementById("changeTextBtn").addEventListener("click", function() {
  document.getElementById("dynamicText").innerText = "Text has been changed!";
});
// Create new element dynamically
let newPara = document.createElement("p");
newPara.innerText = "This paragraph was created with JavaScript!";
document.body.appendChild(newPara);
