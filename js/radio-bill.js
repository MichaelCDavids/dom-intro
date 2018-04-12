// get a reference to the sms or call radio buttons
var radioButton = document.querySelector('.billItemTypeRadio');
//get a reference to the add button
var radioAddButton = document.querySelector('.radioBillAddBtn');

var radioCallTotals = document.querySelector('.callTotalTwo');
var radioSmsTotals = document.querySelector('.smsTotalTwo');
var radioAllTotal = document.querySelector('.totalTwo');


// create a variable that will keep track of call bill
var radioCallTotal = 0;
// create a variable that will keep track of sms bill
var radioSmsTotal = 0;
//create a variable that will keep track of the total bill
var radioTotalPhoneBillTracker = 0;

function radioBillFunction(){
  var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
  if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value
    // billItemType will be 'call' or 'sms'
    if(billItemType === 'call'){
      radioCallTotal += 2.75;
      radioCallTotals.innerHTML = radioCallTotal.toFixed(2);
      radioTotalPhoneBillTracker += 2.75;
      radioAllTotal.innerHTML = radioTotalPhoneBillTracker.toFixed(2);
    }else if(billItemType === 'sms'){
      radioSmsTotal += 0.75;
      radioSmsTotals.innerHTML = radioSmsTotal.toFixed(2);
      radioTotalPhoneBillTracker += 0.75;
      radioAllTotal.innerHTML = radioTotalPhoneBillTracker.toFixed(2);
    }
  }
}
function colorChangeThree(){
  if(radioAllTotal.innerHTML<30.00){
    radioAllTotal.classList.remove("danger");
    radioAllTotal.classList.remove("warning");
  }else if(radioAllTotal.innerHTML>30.00 && radioAllTotal.innerHTML<50.00){
    radioAllTotal.classList.remove("danger");
    radioAllTotal.classList.add("warning");
  }else if(radioAllTotal.innerHTML>=50.00){
    radioAllTotal.classList.remove("warning");
    radioAllTotal.classList.add("danger");
  }
}

radioAddButton.addEventListener('click', function(){
  radioBillFunction();
  colorChangeThree();
});
