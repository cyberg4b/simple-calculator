const display = document.querySelector("#result");

function insertValue(val) {
  if (val == "C") {
    display.value = "";
    return 0;
  }
  if (val == "<-") {
    inputFlag = "";
    // outra forma de fazer o mesmo é utilizando as funções split(), pop(), e join()
    Array.from(display.value).forEach(item => { // transcreve todo valor do display para inputFlag com um caractere a menos
      if (inputFlag.length < display.value.length - 1) {
        inputFlag += item;
      }
    });
    display.value = inputFlag;
  } else {
    display.value += val;
  }
}

function calcThis() {
    let resultValue = eval(display.value);

    if(isNaN(resultValue)) {
        display.value = "Error!";
      setTimeout(() => {
        display.value = "";
      }, 1300);
    } else {
        display.value = resultValue;
    }
}

document.addEventListener("keydown", keyboardInputHandler); // ativa a escuta no teclado

// função para lidar com o input do teclado
function keyboardInputHandler(e) {
  e.preventDefault();

  if (e.key === "0") {
    display.value += "0";
  } else if (e.key === "1") {
    display.value += "1";
  } else if (e.key === "2") {
    display.value += "2";
  } else if (e.key === "3") {
    display.value += "3";
  } else if (e.key === "4") {
    display.value += "4";
  } else if (e.key === "5") {
    display.value += "5";
  } else if (e.key === "6") {
    display.value += "6";
  } else if (e.key === "7") {
    display.value += "7";
  } else if (e.key === "7") {
    display.value += "7";
  } else if (e.key === "8") {
    display.value += "8";
  } else if (e.key === "9") {
    display.value += "9";
  }

  if (e.key === "+") {
    display.value += "+";
  } else if (e.key === "-") {
    display.value += "-";
  } else if (e.key === "*") {
    display.value += "*";
  } else if (e.key === "/") {
    display.value += "/";
  }

  if (e.key === ".") {
    display.value += ".";
  }

  if (e.key === "Enter") {
    calcThis();
  }

  if (e.key === "Backspace") {
    const resultInput = display.value;
    display.value = resultInput.substring(0, display.value.length - 1);
  }
}