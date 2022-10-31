/* Imports */
const button1 = document.getElementById('button-1');
const img1 = document.querySelector('#img-1');

/* State */

/* Events */
button1.addEventListener('click', () => {
    const randomPearl = Math.ceil(Math.random() * 3);
});

/* Display Functions */
function resetPearls() {
    img1.classList.remove('reveal');
}

function displayResults() {}
// (don't forget to call any display functions you want to run on page load!)
