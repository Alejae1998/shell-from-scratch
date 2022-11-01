/* Imports */
const button1 = document.getElementById('button-1');
const button2 = document.getElementById('button-2');
const button3 = document.getElementById('button-3');
const resetButton = document.querySelector('#reset');
const img1 = document.querySelector('#img-1');
const img2 = document.querySelector('#img-2');
const img3 = document.querySelector('#img-3');
const cat1 = document.getElementById('cat1');
const cat2 = document.getElementById('cat2');
const cat3 = document.getElementById('cat3');

const winsSpan = document.getElementById('wins');
const lossesSpan = document.getElementById('losses');
const totalSpan = document.getElementById('total');

/* State */
let wins = 0;
let total = 0;
/* Events */
button1.addEventListener('click', () => {
    total++;
    resetPearls();
    const randomPearl = Math.ceil(Math.random() * 3);
    if (randomPearl === 1) {
        wins++;
        img1.classList.add('reveal');
    } else if (randomPearl === 2) {
        img2.classList.add('reveal');
    } else {
        img3.classList.add('reveal');
    }
    displayResults();
});
button2.addEventListener('click', () => {
    total++;
    resetPearls();
    const randomPearl = Math.ceil(Math.random() * 3);
    if (randomPearl === 1) {
        img1.classList.add('reveal');
    } else if (randomPearl === 2) {
        wins++;
        img2.classList.add('reveal');
    } else {
        img3.classList.add('reveal');
    }
    displayResults();
});
button3.addEventListener('click', () => {
    total++;
    resetPearls();
    const randomPearl = Math.ceil(Math.random() * 3);
    if (randomPearl === 1) {
        img1.classList.add('reveal');
    } else if (randomPearl === 2) {
        img2.classList.add('reveal');
    } else {
        wins++;
        img3.classList.add('reveal');
    }
    displayResults();
});

//reset button
resetButton.addEventListener('click', () => {
    total = 0;
    wins = 0;
    resetPearls();
    displayResults();
});

/* Display Functions */
function resetPearls() {
    img1.classList.remove('reveal');
    img2.classList.remove('reveal');
    img3.classList.remove('reveal');
}

function displayResults() {
    winsSpan.textContent = wins;
    lossesSpan.textContent = total - wins;
    totalSpan.textContent = total;
}
// (don't forget to call any display functions you want to run on page load!)
