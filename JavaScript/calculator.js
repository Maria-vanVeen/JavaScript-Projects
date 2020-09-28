const CALCULATOR = {
  display_value: "0",
  first_operand: null,
  wait_second_operand: false,
  operator: null
};

function input_digit(digit) {
  const {display_value, wait_second_operand} = CALCULATOR;
  if (wait_second_operand === true) {
    CALCULATOR.display_value = digit;
    CALCULATOR.wait_second_operand = false;
  } else {
    CALCULATOR.display_value = display_value === "0" ? digit: display_value + digit;
  }
}

function input_decimal(dot) {
  if (CALCULATOR.wait_second_operand === true) { 
    return
  } 
  if(!CALCULATOR.display_value.includes(dot)) {
    CALCULATOR.display_value += dot;
  }
}

function handle_operator(next_operator) {
  const { first_operand, display_value, operator} = CALCULATOR;
  const value_of_input = parseFloat(display_value);
  console.log("handle operator is running");
  console.log(CALCULATOR);
  if (operator && CALCULATOR.wait_second_operand) { //if we have an operator and are waiting for second operand, overwrite the operator
    CALCULATOR.operator = next_operator;
    return;
  }
  if (first_operand == null) {
    CALCULATOR.first_operand = value_of_input;
  } else if(operator) { 
    const value_now = first_operand || 0; //WE ALREADY KNOW THAT THE FIRST OPERAND IS NOT NULL SO WHY DO WE NEED THE '|| 0' PART?
    let result = perform_calculation[operator] (value_now, value_of_input);
    result = Number(result).toFixed(9); //sometimes result can be a string so we need to convert to number.
    result = (result*1).toString();//this gets rid of trailing zeroes.
    CALCULATOR.display_value = result; //WHY DOES THE SAMPLE CODE HAVE 'parseFloat(result)' HERE? ISN'T display_value A STRING?
    CALCULATOR.first_operand = parseFloat(result);
    console.log(CALCULATOR);
  }
  CALCULATOR.wait_second_operand = true;
  CALCULATOR.operator = next_operator;
}

const perform_calculation = {
  "/": (first_operand, second_operand) => first_operand / second_operand,
  "*": (first_operand, second_operand) => first_operand * second_operand,
  "+": (first_operand, second_operand) => first_operand + second_operand,
  "-": (first_operand, second_operand) => first_operand - second_operand,
  "=": (first_operand, second_operand) => second_operand,
  
}

function calculator_reset() {
  CALCULATOR.display_value = "0";
  CALCULATOR.wait_second_operand = false;
  CALCULATOR.first_operand = null;
  CALCULATOR.operator = null;
}

function update_display() {
  document.querySelector(".calculator_screen").value = CALCULATOR.display_value;
}

update_display();

//This section monitors button clicks
const KEYS = document.querySelector(".calculator_keys");
KEYS.addEventListener("click", (event) => {
  const {target} = event;
  if (!target.matches("button")) { //if the click was not on a button
    console.log("not a button")
    return;
  }

  if (target.classList.contains("operator")) {
    handle_operator(target.value);
    update_display();
    return;
  }
  
  if (target.classList.contains("decimal")) {
    input_decimal(target.value);
    update_display();
    return;
  }

  if (target.classList.contains("all-clear")) {
    calculator_reset();
    update_display();
    return;
  }

  //if not one of the above cases it is a digit
  input_digit(target.value); 
  update_display();
}
)