document.addEventListener('DOMContentLoaded', function(){
  var radioButton = document.querySelector('.billItemTypeRadio');
  var radioAddButton = document.querySelector('.radioBillAddBtn');
  var radioCallTotals = document.querySelector('.callTotalTwo');
  var radioSmsTotals = document.querySelector('.smsTotalTwo');
  var radioAllTotal = document.querySelector('.totalTwo');

  var radioWidget = TextBill();

  function colorChangeThree(){
    var newTotal = radioAllTotal.innerHTML
    if(newTotal<30.00){
      radioAllTotal.classList.remove("danger");
      radioAllTotal.classList.remove("warning");
    }else if(newTotal>=30.00 && newTotal<50.00){
      radioAllTotal.classList.remove("danger");
      radioAllTotal.classList.add("warning");
    }else if(newTotal>=50.00){
      radioAllTotal.classList.remove("warning");
      radioAllTotal.classList.add("danger");
      alert('Critical Level Reached!');
    }
  }

  radioAddButton.addEventListener('click', function(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    if (checkedRadioBtn){
      var billItemType = checkedRadioBtn.value;
      var bill = radioWidget.billTwo(billItemType);
      var call = radioWidget.callTwo().toFixed(2);
      var sms = radioWidget.smsTwo().toFixed(2);
      total = radioWidget.finalTotal().toFixed(2);
      radioCallTotals.innerHTML = call;
      radioSmsTotals.innerHTML = sms;
      radioAllTotal.innerHTML = total;
    }
    colorChangeThree();
  });
});
