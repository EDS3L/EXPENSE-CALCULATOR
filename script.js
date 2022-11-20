let budgetConteiner;
let budgetInput;
let budgetButton;
let cancleButton;
let finalBudget;

//rent
let rentInput;
let rentButton;
let rentColumn;
let rentMoney;
let test;

//eat
let eatInput;
let eatButton;
let eatColumn;
let eatMoney;

//transport
let transportInput;
let transportButton;
let transportColumn;
let transportMoney;

//cloth
let clothInput;
let clothButton;
let clothColumn;
let clothMoney;

//homeThings
let homeThingsInput;
let homeThingsButton;
let homeThingsColumn;
let homeThingsMoney;

//fun
let funInput;
let funButton;
let funColumn;
let funMoney;

//antoher
let anotherInput;
let anotherButton;
let antoherColumn;
let antoherMoney;

//columns

let columnText;

//money
let budgetValue;
let rentValue;
let eatValue;
let transportValue;
let clothValue;
let homeThingsValue;
let funValue;
let antoher;

const main = () => {
  allElements();
  allEvents();
};

const allElements = () => {
  budgetConteiner = document.querySelector('.budget');
  budgetInput = document.querySelector('.budget-input');
  budgetButton = document.querySelector('.budget-accpet');
  cancleButton = document.querySelector('.cancle-final-button');
  finalBudget = document.querySelector('.final-budget');

  //rent
  rentInput = document.querySelector('.rent-input');
  rentButton = document.querySelector('.rent-button');
  rentColumn = document.querySelector('.rent-column');
  rentMoney = document.querySelector('.rent-money');
  // test = document.querySelector(".test")

  //eat
  eatInput = document.querySelector('.eat-input');
  eatButton = document.querySelector('.eat-button');
  eatColumn = document.querySelector('.eat-column');
  eatMoney = document.querySelector('.eat-money');

  //transport
  transportInput = document.querySelector('.transport-input');
  transportButton = document.querySelector('.transport-button');
  transportColumn = document.querySelector('.transport-column');
  transportMoney = document.querySelector('.transport-money');

  //cloth
  clothInput = document.querySelector('.cloth-input');
  clothButton = document.querySelector('.cloth-button');
  clothColumn = document.querySelector('.cloth-column');
  clothMoney = document.querySelector('.cloth-money');

  //homeThings
  homeThingsInput = document.querySelector('.homeThings-input');
  homeThingsButton = document.querySelector('.homeThings-button');
  homeThingsColumn = document.querySelector('.homeThings-column');
  homeThingsMoney = document.querySelector('.homeThings-money');

  //fun
  funInput = document.querySelector('.fun-input');
  funButton = document.querySelector('.fun-button');
  funColumn = document.querySelector('.fun-column');
  funMoney = document.querySelector('.fun-money');

  //antoher
  anotherInput = document.querySelector('.another-input');
  anotherButton = document.querySelector('.another-button');
  antoherColumn = document.querySelector('.another-column');
  anotherMoney = document.querySelector('.another-money');

  //antoher
  columnText = document.querySelector('.column-text');
};

const allEvents = () => {
  budgetButton.addEventListener('click', addBudget);
  rentButton.addEventListener('click', rentAdd);
};

const addBudget = () => {
  budgetValue = budgetInput.value;

  budgetInput.style.display = 'none';
  budgetButton.style.display = 'none';

  finalBudget.textContent = 'Twój budżet to: ' + budgetValue + ' zł';
  finalBudget.style.display = 'flex';
  cancleButton.style.display = 'flex';
};

const rentAdd = () => {
  rentValue = parseInt(rentInput.value);
  const rentMoneyToInt = parseInt(rentMoney.textContent);

  const suma = rentValue + rentMoneyToInt;
  rentMoney.textContent = suma;
  console.log(suma);
};

const statisicUpdate = () => {};

document.addEventListener('DOMContentLoaded', main);
