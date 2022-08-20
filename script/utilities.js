// input field function
function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';

    return inputFieldValue;
}

// previous amount function
function getPreviousValueById(previousAmountId){
    const previousAmount = document.getElementById(previousAmountId);
    const previousAmountValueString = previousAmount.innerText;
    const previousAmountValue = parseFloat(previousAmountValueString);

    return previousAmountValue;
}

// set new amount function
function setCurrentValueById(previousAmountId, newAmount){
    const previousAmount = document.getElementById(previousAmountId);
    previousAmount.innerText = newAmount;
}
