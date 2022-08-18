// step-1: add event listener to the deposit button 
document.getElementById('btn-deposit').addEventListener('click', function(){
    // step-2: get the deposit amount from the deposit input field
    // For input field use .value to the value inside the input field
    const userDeposit = document.getElementById('input-deposit');
    const newDepositAmountString = userDeposit.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step-7: clear the current deposit field
    userDeposit.value = '';

    // if NaN
    if(isNaN(newDepositAmount)){
        return;
    }

    // step-3: get the current deposit total
    // for non-input(element other than input, textarea) use innerText to get the text
    const currentDeposit = document.getElementById('today-deposit');
    const currentDepositAmountString = currentDeposit.innerText;
    const currentDepositAmount = parseFloat(currentDepositAmountString);

    // step-4: add numbers to set the total deposit
    const todayTotalDeposit = currentDepositAmount + newDepositAmount;
    // set the deposit total
    currentDeposit.innerText = todayTotalDeposit;

    // step-5: get balance current total
    const currentBalance = document.getElementById('balance');
    const totalCurrentBalanceString = currentBalance.innerText;
    const totalCurrentBalance = parseFloat(totalCurrentBalanceString);

    // step-6: calculate current total balance
    const totalBalance = totalCurrentBalance + newDepositAmount;
    // set the balance total
    currentBalance.innerText = totalBalance;
});
