function getInputValue() {
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    //clear filed
    depositInput.value = '';
    return depositAmount;
}

document.getElementById('deposit-button').addEventListener('click', function () {
    /*     const depositInput = document.getElementById('deposit-input');
        const depositAmountText = depositInput.value;
        const depositAmount = parseFloat(depositAmountText); */
    const depositAmount = getInputValue();

    //get current deposit
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDeopotTotal = parseFloat(depositTotalText);

    depositTotal.innerText = depositAmount + previousDeopotTotal;

    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + depositAmount;



});

//------handel Withdeaw 
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    //get current deposit
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const previouswithdrawTotal = parseFloat(withdrawTotalText);

    withdrawTotal.innerText = withdrawAmount + previouswithdrawTotal;

    //update balance after withdraw
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

    //clear filed
    withdrawInput.value = '';

});