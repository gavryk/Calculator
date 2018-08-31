var num1, num2, result;

function multiply() {
    num1 = document.getElementById('n1').value;
    num2 = document.getElementById('n2').value;

    result = num1*num2;

    document.getElementById('out').innerHTML = result;
}

function divide() {
    num1 = document.getElementById('n1').value;
    num2 = document.getElementById('n2').value;
    result = num1/num2;
    document.getElementById('out').innerHTML = result;

    if (num2 < 18) {
        alert('not allowed');
    }
}
function plus() {
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1+num2;
    document.getElementById('out').innerHTML = result;
}
function minus() {
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1-num2;
    document.getElementById('out').innerHTML = result;
}