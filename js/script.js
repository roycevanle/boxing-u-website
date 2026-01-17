// This file is currently empty.
// You can add JavaScript here later to add interactivity,
// such as a simple image carousel, form validation, or a menu toggle for mobile.

console.log("JavaScript file is linked and ready for coding!");

function toggleReveal(button) {
  const cardContainer = button.closest('.card-training');
  const revealCard = cardContainer.querySelector('.card-reveal');
  revealCard.classList.toggle('active');
}