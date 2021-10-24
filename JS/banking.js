function getInputValue(inputID) {
    const inputField = document.getElementById(inputID);
    const inputAmountText = inputField.value;
    const newInputAmount = parseFloat(inputAmountText);
    //empty deposit input
    inputField.value = '';
    return newInputAmount;
}

function updateTotalField(totalFieldID, amount) {
    const totalField = document.getElementById(totalFieldID);
    const previousAmountText = totalField.innerText;
    const previousAmount = parseFloat(previousAmountText);
    const newTotalValue = previousAmount + amount;
    totalField.innerText = newTotalValue;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    return previousBalanceTotal;
}

function updateBalance(newInputAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + newInputAmount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - newInputAmount;
    }

}

// Update Deposit Amount
document.getElementById('deposit-button').addEventListener('click', function () {
    const newDepositAmount = getInputValue('deposit-input');
    const currentBalance = getCurrentBalance();
    if (newDepositAmount > 0) {
        updateTotalField('deposit-total', newDepositAmount);
        updateBalance(newDepositAmount, true);
    }
    else {
        alert('টাকা চিনোস? টাকা? 😑 জীবনে 2টা জিনিস মনে রাখবি, ফইন্নি। ০১. টাকার মান কখনো negetive হয় না। ০২. টাকা কোনো বর্ণমালা না। 😒 Positive Number input দে ফইন্নি! 🤬');
    };

    /*  
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText); */

    // update deposit total
    /* 
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal; */


    // update account balance
    /* 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal; */

    /* //empty deposit input
    depositInput.value = ''; */
});

//Update Withdraw Amount
document.getElementById('withdraw-button').addEventListener('click', function () {
    const newWithdrawAmount = getInputValue('withdraw-input')
    const currentBalance = getCurrentBalance();
    if (newWithdrawAmount > 0 && newWithdrawAmount <= currentBalance) {
        updateTotalField('withdraw-total', newWithdrawAmount);
        updateBalance(newWithdrawAmount, false);
    }
    else {
        alert('টাকা চিনোস? টাকা? 😑 জীবনে 2টা জিনিস মনে রাখবি, ফইন্নি। টাকার মান কখনো negetive বা string(বর্ণমালা) হয় না। Positive Number input দে ফইন্নি! 😒 আর বাপের ব্যাংকের BALANCE কম থাকলে টাকা WITHDRAW করবি না, বদমাইশ🤬');
    };


    /* const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawText); */

    /* const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawAmmount = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawAmmount + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;
 */

    // update account balance
    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal; */
    /* //empty deposit input
    withdrawInput.value = ''; */

});

