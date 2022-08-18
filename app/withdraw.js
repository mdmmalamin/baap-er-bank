/* 
1. add event handler with the withdraw button
2. get the withdraw amount from the withdraw input field
2-05. also make sure to convert the input into a number by using parseFloat

3. Get previous withdraw total 

4. calculate total withdraw amount
4-05. set total withdraw amount

5. get the previous balance total
6. calculate new balance total 
6-05. set the new balance total 

7. clear the input field
*/

// step-1:
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2:
    const userWithdraw = document.getElementById('input-withdraw');
    const newWithdrawAmountString = userWithdraw.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step-7:
    userWithdraw.value = '';

    // if NaN
    if(isNaN(newWithdrawAmount)){
        return;
    }

    // step-3:
    const currentWithdraw = document.getElementById('today-withdraw');
    const currentWithdrawAmountString = currentWithdraw.innerText;
    const currentWithdrawAmount = parseFloat(currentWithdrawAmountString);

    // step-5:
    const currentBalance = document.getElementById('balance');
    const totalCurrentBalanceString = currentBalance.innerText;
    const totalCurrentBalance = parseFloat(totalCurrentBalanceString);



    if (newWithdrawAmount > totalCurrentBalance) {
        alert('Baap Er Bank e eto TAKA nai!!!');
        return;
    }

    // step-4:
    const todayTotalWithdraw = currentWithdrawAmount + newWithdrawAmount;
    // step-4.05:
    currentWithdraw.innerText = todayTotalWithdraw;

    // step-6: 
    const totalBalance = totalCurrentBalance - newWithdrawAmount;
    // step-6.05:
    currentBalance.innerText = totalBalance;
});