// add withdraw button event handler
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');

    if (isNaN(newWithdrawAmount)){
        alert('Enter a valid Amount!');
        return;
    }

    const previousBalanceAmount = getPreviousValueById('balance-total');

    if(newWithdrawAmount > previousBalanceAmount){
        alert('Tumr baap-Er-Bank e eto taka nai!');
        return;
    }

    const totalBalanceAmount = previousBalanceAmount - newWithdrawAmount;
    setCurrentValueById('balance-total', totalBalanceAmount);

    
    const previousWithdrawAmount = getPreviousValueById('withdraw-total');
    const totalWithdrawAmount = newWithdrawAmount + previousWithdrawAmount;
    setCurrentValueById('withdraw-total', totalWithdrawAmount);
});
