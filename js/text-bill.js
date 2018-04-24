document.addEventListener('DOMContentLoaded', function(){

  var textBill = document.querySelector('.billTypeText');

  var callTotal = document.querySelector('.callTotalOne');
  var smsTotal = document.querySelector('.smsTotalOne');
  var totalBill = document.querySelector('.totalOne');

  var addButton = document.querySelector('.addToBillBtn');

  var textBillObj = TextBill();

  function colorChangeTwo(){
    var tot = totalBill.innerHTML;
    if(tot>=30.00 && tot<50.00){
        totalBill.classList.add("warning");
    }else if(tot>=50.00){
        totalBill.classList.add("danger");
        alert('Critical Level Reached!');
    }
  }

  addButton.addEventListener('click', function(){
    var usageItem = textBill.value;
    var billTwoTotal = textBillObj.billTwo(usageItem);
    var callBillTwo = textBillObj.callTwo();
    callTotal.innerHTML = callBillTwo.toFixed(2);
    var smsBillTwo = textBillObj.smsTwo();
    smsTotal.innerHTML = smsBillTwo.toFixed(2);
    totalBill.innerHTML = textBillObj.finalTotal();
    colorChangeTwo();
  });
});
