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
let anotherColumn;
let anotherMoney;

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
let another;

//facts
let calculateButton;
let facts1;
let facts2;
let facts3;
let againButton;
let fact;
let informationConteiner;
let buttonAgainConteriner;

//another

let finalBudgetValue;

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
  finalBudgetValue = document.querySelector('.final-budget-value');

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
  clothColumn = document.querySelector('.clothes-column');
  clothMoney = document.querySelector('.cloth-money');

  //homeThings
  homeThingsInput = document.querySelector('.homeThings-input');
  homeThingsButton = document.querySelector('.homeThings-button');
  homeThingsColumn = document.querySelector('.homes-things-column');
  homeThingsMoney = document.querySelector('.homeThings-money');

  //fun
  funInput = document.querySelector('.fun-input');
  funButton = document.querySelector('.fun-button');
  funColumn = document.querySelector('.fun-column');
  funMoney = document.querySelector('.fun-money');

  //antoher
  anotherInput = document.querySelector('.another-input');
  anotherButton = document.querySelector('.another-button');
  anotherColumn = document.querySelector('.another-column');
  anotherMoney = document.querySelector('.another-money');

  //facts
  calculateButton = document.querySelector('.calculate');
  facts1 = document.querySelector('.facts1');
  facts2 = document.querySelector('.facts2');
  facts3 = document.querySelector('.facts3');
  fact = document.querySelector('.fact');
  againButton = document.querySelector('.again-button');
  informationConteiner = document.querySelector('.information-conteiner');
  buttonAgainConteriner = document.querySelector('.button-again-conteriner');

  //antoher
  columnText = document.querySelector('.column-text');
};

const allEvents = () => {
  budgetButton.addEventListener('click', addBudget);
  rentButton.addEventListener('click', function () {
    moneyADD(rentInput, rentMoney);
  });
  eatButton.addEventListener('click', function () {
    moneyADD(eatInput, eatMoney);
  });
  transportButton.addEventListener('click', function () {
    moneyADD(transportInput, transportMoney);
  });
  clothButton.addEventListener('click', function () {
    moneyADD(clothInput, clothMoney);
  });
  homeThingsButton.addEventListener('click', function () {
    moneyADD(homeThingsInput, homeThingsMoney);
  });
  funButton.addEventListener('click', function () {
    moneyADD(funInput, funMoney);
  });
  anotherButton.addEventListener('click', function () {
    moneyADD(anotherInput, anotherMoney);
  });
  calculateButton.addEventListener('click', calculateBudget);
  cancleButton.addEventListener('click', cancle);
};

const addBudget = () => {
  budgetValue = budgetInput.value;
  if (budgetValue !== '') {
    budgetInput.style.display = 'none';
    budgetButton.style.display = 'none';

    finalBudget.textContent = 'Twój budżet to:';
    finalBudgetValue.textContent = budgetValue + ' zł';

    finalBudgetValue.style.display = 'flex';
    finalBudget.style.display = 'flex';
    cancleButton.style.display = 'flex';
  } else {
    alert('Podaj wartość budżetu');
  }
};

function cancle() {
  budgetValue = budgetInput.value;

  finalBudgetValue.style.display = 'none';
  finalBudget.style.display = 'none';
  cancleButton.style.display = 'none';

  calculateButton.style.display = 'flex';
  informationConteiner.style.display = 'none';
  buttonAgainConteriner.style.display = 'none';
  facts1.style.display = 'none';
  facts2.style.display = 'none';
  facts3.style.display = 'none';
  againButton.style.display = 'none';

  finalBudget.textContent = '';
  finalBudgetValue.textContent = '';

  budgetInput.style.display = 'flex';
  budgetButton.style.display = 'flex';
  budgetInput.value = '';
  budgetInput.focus();
}

function moneyADD(input, moneyText) {
  value = parseInt(input.value);
  const inputCheck = input.value;
  const MoneyToInt = parseInt(moneyText.textContent);
  if (inputCheck !== 0 && inputCheck !== '') {
    const suma = value + MoneyToInt;
    moneyText.textContent = suma + ' zł';
    input.value = '';
    input.focus();
  } else {
    alert('Musisz wpisać kwote');
    input.focus();
  }
}

function calculateBudget() {
  if (finalBudget.textContent != 0 && finalBudget != '') {
    rentColumn.style.height =
      (parseInt(rentMoney.textContent) /
        parseInt(finalBudgetValue.textContent)) *
        100 +
      '%';

    calculateButton.style.display = 'none';

    eatColumn.style.height =
      (parseInt(eatMoney.textContent) /
        parseInt(finalBudgetValue.textContent)) *
        100 +
      '%';

    transportColumn.style.height =
      (parseInt(transportMoney.textContent) /
        parseInt(finalBudgetValue.textContent)) *
        100 +
      '%';

    clothColumn.style.height =
      (parseInt(clothMoney.textContent) /
        parseInt(finalBudgetValue.textContent)) *
        100 +
      '%';

    homeThingsColumn.style.height =
      (parseInt(homeThingsMoney.textContent) /
        parseInt(finalBudgetValue.textContent)) *
        100 +
      '%';

    funColumn.style.height =
      (parseInt(funMoney.textContent) /
        parseInt(finalBudgetValue.textContent)) *
        100 +
      '%';

    anotherColumn.style.height =
      (parseInt(anotherMoney.textContent) /
        parseInt(finalBudgetValue.textContent)) *
        100 +
      '%';

    calculateButton.style.display = 'none';
    informationConteiner.style.display = 'flex';
    buttonAgainConteriner.style.display = 'flex';
    facts1.style.display = 'flex';
    facts2.style.display = 'flex';
    facts3.style.display = 'flex';
    againButton.style.display = 'flex';
  } else {
    alert('Musisz podać swój budżet!');
  }
}

const statisicUpdate = () => {};

document.addEventListener('DOMContentLoaded', main);
