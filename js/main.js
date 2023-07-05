const inputNumber1 = document.querySelector("#number1");
inputNumber1.addEventListener('change', handleInputNumber1Change);
inputNumber1.classList.remove("input-error");

function handleInputNumber1Change(event) {
    if(isNumber(event.target.value)) {
        event.target.classList.remove("input-error");
    }
    else {
        event.target.classList.add("input-error");
    }
}

const inputNumber2 = document.querySelector("#number2");
inputNumber2.addEventListener('change', handleInputNumber2Change);
inputNumber2.classList.remove("input-error");

function handleInputNumber2Change(event) {
    if(isNumber(event.target.value)) {
        event.target.classList.remove("input-error");
    }
    else {
        event.target.classList.add("input-error");
    }
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
    }

const btnPlus = document.querySelector("#btn-plus");
btnPlus.addEventListener('click', handleBtnPlusClick);

function handleBtnPlusClick(event) {
    event.preventDefault();
    if(inputNumber1.value > 0 && inputNumber2.value > 0) {
        const resultBox = parseFloat(inputNumber1.value) + parseFloat(inputNumber2.value);
        document.querySelector("#result-box").innerHTML = resultBox;
    }
}

const btnTimes = document.querySelector("#btn-times");
btnTimes.addEventListener('click', btnTimesClick);


function btnTimesClick(event){
    event.preventDefault();
  
    if(inputNumber1.value > 0 && inputNumber2.value > 0){
      const resultBox = parseFloat(inputNumber1.value) * parseFloat(inputNumber2.value);
      document.querySelector("#result-box").innerHTML = resultBox;
    }
  }

const btnClear = document.querySelector("#btn-clear");
btnClear.addEventListener('click', handleBtnClearClick);

function handleBtnClearClick(event) {
    event.preventDefault();

    inputNumber1.value = "";
    inputNumber1.classList.remove("input-error");

    inputNumber2.value = "";
    inputNumber2.classList.remove("input-error");

    document.querySelector("#result-box").innerHTML = 0;
}
