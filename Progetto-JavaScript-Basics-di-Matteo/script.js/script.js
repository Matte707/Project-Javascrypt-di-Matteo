// script.js
const incrementaBtn = document.getElementById('incrementa');
const decrementaBtn = document.getElementById('decrementa');
const valoreEl = document.getElementById('valore');

let counter = 0;

incrementaBtn.addEventListener('click', () => {
    counter++;
    valoreEl.textContent = counter;
});

decrementaBtn.addEventListener('click', () => {
    counter--;
    valoreEl.textContent = counter;
});
