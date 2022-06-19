var storedNumber;
var storedOperation;
var newNumber;
function add(x, y) {
  return x + y;
}

function substract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x / y;
}

function operate(operation, x, y) {
  if (operation == "add") {
    return add(x, y);
  } else if (operation == "substract") {
    return substract(x, y);
  } else if (operation == "multiply") {
    return multiply(x, y);
  } else if (operation == "divide") {
    return divide(x, y);
  }
}

const buttonsWrapper = document.getElementById("buttons");
const total = document.getElementById("total");
buttonsWrapper.addEventListener("click", (event) => {
  const isButton = event.target.nodeName === "BUTTON";
  if (!isButton) {
    return;
  }

  console.dir(event.target.id);
  if (isNaN(event.target.id)) {
    console.log(`Clicked an opreation ${event.target.id}`);
    if (total.textContent.length > 0 && event.target.id != "equal") {
      storedNumber = parseInt(total.textContent);
      storedOperation = event.target.id;
      newNumber = true;
    } else if (event.target.id == "equal") {
      console.log(`Stored opreation, ${storedOperation}`);
      var number = parseInt(total.textContent);
      total.textContent = operate(storedOperation, storedNumber, number);
      console.log(storedNumber, number);
    }
    console.log(`Stored ${storedNumber}`);
  } else {
    if (newNumber === true) {
      total.textContent = "";
      newNumber = false;
    }
    total.textContent += event.target.id;
  }
});
