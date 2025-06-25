document.getElementById('btn').addEventListener('click', () => {
    let num1 = parseFloat(document.getElementById('inp1').value);
    let num2 = parseFloat(document.getElementById('inp2').value);

    // If user gives invalid input
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please provide valid input!");
        return;
    }

    // Doing calculations
    let sum = num1 + num2;
    let product = num1 * num2;
    let division = num2 !== 0 ? (num1 / num2).toFixed(2) : "∞";

   
    document.querySelector('.sumVal').innerText = sum;
    document.querySelector('.productVal').innerText = product;
    document.querySelector('.divisionVal').innerText = division;
});
