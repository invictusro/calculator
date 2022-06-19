var storedNumber;
var storedOperation = "";
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
  // Check if the clicked button is operation or number
  if (isNaN(event.target.id)) {
    // We check to see if the operation is not equal and if we have any number inputted
    if (total.textContent.length > 0 && event.target.id != "equal") {
      // If we already have a stored number on the second press of an operation, we gonna calculate
      if (storedNumber > 0) {
        console.log("Here");
        var number = parseInt(total.textContent);
        total.textContent = operate(storedOperation, storedNumber, number);
      }
      // We store the operations/numbers that were clicked so we can work with them later
      storedOperation = event.target.id;
      storedNumber = parseInt(total.textContent);
      newNumber = true;
    } else if (event.target.id == "equal") {
      // We simply do an equal and set text content as the operation return
      console.log(`Stored opreation, ${storedOperation}`);
      var number = parseInt(total.textContent);
      total.textContent = operate(storedOperation, storedNumber, number);
      console.log(storedNumber, number);
    }
    console.log(`Stored ${storedNumber}`);
  } else {
    // If the newNumber is true which means we pressed an operation and stored the number, we gonna set the total as empty then add our clicked number
    if (newNumber === true) {
      total.textContent = "";
      newNumber = false;
    }
    // If the button is not an operation, we add the number pressed to our total element

    total.textContent += event.target.id;
  }
});
