// script.js

// Get button element by its ID
const button = document.getElementById("myButton");
const resultDiv = document.getElementById("result");

// Add click event listener
button.addEventListener("click", () => {
  // Logic to execute on click
  resultDiv.textContent = "Button was clicked!";
  resultDiv.classList.add("text-green-500", "font-bold");
});
