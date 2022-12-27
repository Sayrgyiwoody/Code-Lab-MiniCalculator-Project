
let num1_msg = document.getElementById("num1-msg");
let num2_msg = document.getElementById("num2-msg");
let operator_msg = document.getElementById("operator-msg");

num1_msg.style.display = "none";
num2_msg.style.display = "none";
operator_msg.style.display = "none";

//status to show result 
let num1Status,num2Status,operatorStatus = true; //true = to show
function calculate() {
    document.querySelector(".result-text").innerHTML = "";
    let result;
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");
    let operator = document.getElementById("operator");

    checkValidation(num1,num2,operator);
    if (num1Status == true && num2Status == true && operatorStatus == true) {
        num1 = parseInt(num1.value);
        num2 = parseInt(num2.value);

        switch (operator.value) {
            case '+':
            result = num1 + num2;
            break;
            case '-':
            result = num1 - num2;
            break;
            case '*':
            result = num1 * num2;
            break;
            case '/':
            result = num1 / num2;
            break;
        }
        //Show User the answer
        document.querySelector(".result-text").innerHTML = result;
    }
}


function checkValidation(num1,num2,operator) {
    if (num1.value == "" || num1.value == undefined || num1.value == null) {
        num1_msg.style.display = "block";
        num1Status = false;
    }else {
        num1_msg.style.display = "none";
        num1Status = true;
    }
    if (num2.value == "" || num2.value == undefined || num2.value == null) {
        num2_msg.style.display = "block";
        num2Status = false;
    }else {
        num2_msg.style.display = "none";
        num2Status = true;
    }
    if (operator.value == "empty") {
        operator_msg.style.display = "block";
        operatorStatus = false;
    }else {
        operator_msg.style.display = "none";
        operatorStatus = true;
    }
}