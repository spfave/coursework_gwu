const subtract = require('./calculation');

const priceEl = document.getElementById('price');
const balanceEl = document.getElementById('balance');
const expenseEl = document.getElementById('expense');
const expensesListEl = document.getElementById('expenses-list');
const submitBtn = document.getElementById('btn-submit');
const resetBtn = document.getElementById('btn-reset');

function addToList(name, price) {
  expensesListEl.innerHTML += `<li class="list-group-item">Name: ${name}
    <span class="ml-4">Price: ${price}</span></li>`;
}

function submit(e) {
  e.preventDefault();
  const total = subtract(Number(balanceEl.innerHTML), priceEl.value);
  balanceEl.innerText = total;
  addToList(expenseEl.value, priceEl.value);
}

function reset(e) {
  e.preventDefault();
  balanceEl.innerText = '2000';
  expensesListEl.innerText = '';
  document.querySelector('form').reset();
  console.log(document.querySelector('form'));
}

submitBtn.onclick = submit;
resetBtn.onclick = reset;
