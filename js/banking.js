// Deposit Amount Adding
{
  const depoBtn = document.getElementById("deposit-btn");
  depoBtn.addEventListener("click", function () {
    //   Get the Amount Deposited
    const depoField = document.getElementById("deposit-field");
    const depoFiledValue = parseFloat(depoField.value);
    const depoAmount = document.getElementById("deposit-amount");
    const previousDepo = parseFloat(depoAmount.innerText);
    const totalDepo = previousDepo + depoFiledValue;
    depoAmount.innerText = totalDepo;

    //   Get the balance total after deposited amount
    const balanceAmount = document.getElementById("balance-amount");
    balanceAmount.innerText = totalDepo;

    //   Clear Input
    depoField.value = "";
  });
}

{
  const wdrawBtn = document.getElementById("withdraw-btn");
  wdrawBtn.addEventListener("click", function () {
    //   Get withdraw amount
    const wdrawField = document.getElementById("withdraw-field");
    const wdrawFieldValue = parseFloat(wdrawField.value);
    const wdrawAmount = document.getElementById("withdraw-amount");
    const previousWdraw = parseFloat(wdrawAmount.innerText);
    const totalWdraw = previousWdraw + wdrawFieldValue;
    wdrawAmount.innerText = totalWdraw;

    const balanceAmount = document.getElementById("balance-amount");
    const balanceAmountValue = balanceAmount.innerText;
    const restBalance = balanceAmountValue - wdrawFieldValue;
    balanceAmount.innerText = restBalance;
    //   Clear Input Field
    wdrawField.value = "";
  });
}
