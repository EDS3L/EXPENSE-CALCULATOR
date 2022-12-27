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
let procent;

let rentProcent;
let eatProcent;
let transportProcent;
let clothProcent;
let thingsProcent;
let funProcent;
let anotherProcent;

//another
let rentPro;
let eatPro;
let transPro;
let clothPro;
let thingsPro;
let funPro;
let anotherPro;

let finalBudgetValue;

let allSumMoney;

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
  procent = document.querySelectorAll('.procent');

  //antoher
  columnText = document.querySelectorAll('.column-text');

  rentPro = document.querySelector('.rentPro');
  eatPro = document.querySelector('.eatPro');
  transPro = document.querySelector('.transPro');
  clothPro = document.querySelector('.clothPro');
  thingsPro = document.querySelector('.thingsPro');
  funPro = document.querySelector('.funPro');
  anotherPro = document.querySelector('.anotherPro');

  allSumMoney = document.querySelectorAll('.sumMoney');
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
  anotherButton.addEventListener('click', function (e) {
    moneyADD(anotherInput, anotherMoney);
  });
  budgetInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addBudget();
    }
  });
  rentInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      moneyADD(rentInput, rentMoney);
      rentInput.focus();
    }
  });
  eatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      moneyADD(eatInput, eatMoney);
      eatInput.focus();
    }
  });
  transportInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      moneyADD(transportInput, transportMoney);
      transportInput.focus();
    }
  });
  clothInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      moneyADD(clothInput, clothMoney);
      clothInput.focus();
    }
  });
  homeThingsInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      moneyADD(homeThingsInput, homeThingsMoney);
      homeThingsInput.focus();
    }
  });
  funInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      moneyADD(funInput, funMoney);
      funInput.focus();
    }
  });
  anotherInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      moneyADD(anotherInput, anotherMoney);
      anotherInput.focus();
    }
  });
  calculateButton.addEventListener('click', () => {
    calculateBudget();
    for (const text of columnText) {
      text.style.display = 'flex';
    }
    statisicUpdate();
    suma();
  });
  cancleButton.addEventListener('click', back);
  againButton.addEventListener('click', reset);
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

function back() {
  budgetValue = budgetInput.value;

  finalBudgetValue.style.display = 'none';
  finalBudget.style.display = 'none';
  cancleButton.style.display = 'none';

  finalBudget.textContent = '';
  finalBudgetValue.textContent = '';

  budgetInput.style.display = 'flex';
  budgetButton.style.display = 'flex';
  budgetInput.value = budgetValue;
  budgetInput.focus();
}

function reset() {
  location.reload(true);
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
    calculateButton.style.display = 'none';

    //rent
    if (
      (parseInt(rentMoney.textContent) /
        parseInt(finalBudgetValue.textContent)) *
        100 <=
      100
    ) {
      rentColumn.style.height =
        (parseInt(rentMoney.textContent) /
          parseInt(finalBudgetValue.textContent)) *
          100 +
        '%';
    } else {
      rentColumn.style.height = 100 + '%';
      rentProcent =
        (parseInt(rentMoney.textContent) /
          parseInt(finalBudgetValue.textContent)) *
        100;
    }

    //eat

    if (
      (parseInt(eatMoney.textContent) /
        parseInt(finalBudgetValue.textContent)) *
        100 <=
      100
    ) {
      eatColumn.style.height =
        (parseInt(eatMoney.textContent) /
          parseInt(finalBudgetValue.textContent)) *
          100 +
        '%';
    } else {
      eatColumn.style.height = 100 + '%';
      eatProcent =
        (parseInt(eatMoney.textContent) /
          parseInt(finalBudgetValue.textContent)) *
        100;
    }

    //transport

    if (
      (parseInt(transportMoney.textContent) /
        parseInt(finalBudgetValue.textContent)) *
        100 <=
      100
    ) {
      transportColumn.style.height =
        (parseInt(transportMoney.textContent) /
          parseInt(finalBudgetValue.textContent)) *
          100 +
        '%';
    } else {
      transportColumn.style.height = 100 + '%';
      transportProcent =
        (parseInt(transportMoney.textContent) /
          parseInt(finalBudgetValue.textContent)) *
        100;
    }

    //cloth

    if (
      (parseInt(clothMoney.textContent) /
        parseInt(finalBudgetValue.textContent)) *
        100 <=
      100
    ) {
      clothColumn.style.height =
        (parseInt(clothMoney.textContent) /
          parseInt(finalBudgetValue.textContent)) *
          100 +
        '%';
    } else {
      clothColumn.style.height = 100 + '%';
      clothProcent =
        (parseInt(clothMoney.textContent) /
          parseInt(finalBudgetValue.textContent)) *
        100;
    }

    //homeThings

    if (
      (parseInt(homeThingsMoney.textContent) /
        parseInt(finalBudgetValue.textContent)) *
        100 <=
      100
    ) {
      homeThingsColumn.style.height =
        (parseInt(homeThingsMoney.textContent) /
          parseInt(finalBudgetValue.textContent)) *
          100 +
        '%';
    } else {
      homeThingsColumn.style.height = 100 + '%';
      thingsProcent =
        (parseInt(homeThingsMoney.textContent) /
          parseInt(finalBudgetValue.textContent)) *
        100;
    }

    //fun

    if (
      (parseInt(funMoney.textContent) /
        parseInt(finalBudgetValue.textContent)) *
        100 <=
      100
    ) {
      funColumn.style.height =
        (parseInt(funMoney.textContent) /
          parseInt(finalBudgetValue.textContent)) *
          100 +
        '%';
    } else {
      funColumn.style.height = 100 + '%';
      funProcent =
        (parseInt(funMoney.textContent) /
          parseInt(finalBudgetValue.textContent)) *
        100;
    }

    //another

    if (
      (parseInt(anotherMoney.textContent) /
        parseInt(finalBudgetValue.textContent)) *
        100 <=
      100
    ) {
      anotherColumn.style.height =
        (parseInt(anotherMoney.textContent) /
          parseInt(finalBudgetValue.textContent)) *
          100 +
        '%';
    } else {
      anotherColumn.style.height = 100 + '%';
      anotherProcent =
        (parseInt(anotherMoney.textContent) /
          parseInt(finalBudgetValue.textContent)) *
        100;
    }

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

const statisicUpdate = () => {
  for (const per of procent) {
    per.style.display = 'flex';
  }

  rentPro.textContent =
    Math.round(
      (parseInt(rentMoney.textContent) /
        parseInt(finalBudgetValue.textContent)) *
        100
    ) + '%';
  eatPro.textContent =
    Math.round(
      (parseInt(eatMoney.textContent) /
        parseInt(finalBudgetValue.textContent)) *
        100
    ) + '%';
  transPro.textContent =
    Math.round(
      (parseInt(transportMoney.textContent) /
        parseInt(finalBudgetValue.textContent)) *
        100
    ) + '%';
  clothPro.textContent =
    Math.round(
      (parseInt(clothMoney.textContent) /
        parseInt(finalBudgetValue.textContent)) *
        100
    ) + '%';
  thingsPro.textContent =
    Math.round(
      (parseInt(homeThingsMoney.textContent) /
        parseInt(finalBudgetValue.textContent)) *
        100
    ) + '%';
  funPro.textContent =
    Math.round(
      (parseInt(funMoney.textContent) /
        parseInt(finalBudgetValue.textContent)) *
        100
    ) + '%';
  anotherPro.textContent =
    Math.round(
      (parseInt(anotherMoney.textContent) /
        parseInt(finalBudgetValue.textContent)) *
        100
    ) + '%';
};

const suma = () => {
  const rentCash = parseInt(rentMoney.textContent);
  const eatCash = parseInt(eatMoney.textContent);
  const transportCash = parseInt(transportMoney.textContent);
  const clothCash = parseInt(clothMoney.textContent);
  const thingsCash = parseInt(homeThingsMoney.textContent);
  const funCash = parseInt(funMoney.textContent);
  const anotherCash = parseInt(anotherMoney.textContent);

  const allCash =
    rentCash +
    eatCash +
    transportCash +
    clothCash +
    thingsCash +
    funCash +
    anotherCash;

  const max = Math.max(
    rentCash,
    eatCash,
    transportCash,
    clothCash,
    thingsCash,
    funCash,
    anotherCash
  );

  for (var i = 0; i < allSumMoney.length; i++) {
    var div = allSumMoney[i];
    if (parseInt(div.textContent) == max) {
      const name =
        div.closest('.button-conteriner').parentNode.children[0].children[0]
          .textContent;

      const difference = parseInt(finalBudgetValue.textContent) - allCash;
      const procentOfBudget = Math.round(
        (allCash / parseInt(finalBudgetValue.textContent)) * 100
      );

      facts1.textContent = `Największa cześć twojego budżetu to: ${name}`;

      facts2.textContent = `W tym miesiący udało ci sie zaoszczędzi: ${difference} zł`;

      facts3.textContent = `Wszystkie wydatki to : ${procentOfBudget} % twojego budżetu`;
    }
  }
};

document.addEventListener('DOMContentLoaded', main);
