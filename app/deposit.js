// add deposit button event handler
document.getElementById('btn-deposit').addEventListener('click', function () {
    // get new deposit by using input field function
    const newDepositAmount = getInputFieldValueById('deposit-field');

    if (isNaN(newDepositAmount)){
        alert('Enter a valid Amount!');
        return;
    }

    // get previous deposit by using previous amount function
    const previousDepositAmount = getPreviousValueById('deposit-total');
    const totalDepositAmount = previousDepositAmount + newDepositAmount;
    setCurrentValueById('deposit-total', totalDepositAmount);

    // get previous balance by using previous amount function
    const previousBalanceAmount = getPreviousValueById('balance-total');
    const totalBalanceAmount = previousBalanceAmount + newDepositAmount;
    setCurrentValueById('balance-total', totalBalanceAmount);
});