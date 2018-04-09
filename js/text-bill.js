// get a reference to the textbox where the bill type is to be entered
var textBill = document.querySelector('.billTypeText');
// get a reference to the textbox where the call total will be displayed
var callTotal = document.querySelector('.callTotalOne');
// get a reference to the textbox where the sms total will be displayed
var smsTotal = document.querySelector('.smsTotalOne');
// get a reference to the textbox where the total phone bill is to be displayed
var totalBill = document.querySelector('.totalOne');
//get a reference to the add button
var addButton = document.querySelector('.addToBillBtn');

// create a variable that will keep track of call bill
var callsTotal = 0;
// create a variable that will keep track of sms bill
var smssTotal = 0;
//create a variable that will keep track of the total bill
var totalPhoneBillTracker = 0;

//add an event listener for when the add button is pressed
function phoneBill(){
  if(textBill.value === 'call'){
    callsTotal += 2.75;
    callTotal.innerHTML = callsTotal.toFixed(2);
    totalPhoneBillTracker += 2.75;
    totalBill.innerHTML = totalPhoneBillTracker.toFixed(2);
  }else if(textBill.value === 'sms'){
    smssTotal += 0.75;
    smsTotal.innerHTML = smssTotal.toFixed(2);
    totalPhoneBillTracker += 0.75;
    totalBill.innerHTML = totalPhoneBillTracker.toFixed(2);
  }
  if(totalPhoneBillTracker>30.00 && totalPhoneBillTracker<50.00){
      totalBill.classList.add("warning");
  }else if(totalPhoneBillTracker>50.00){
      totalBill.classList.add("danger");
  }
}

addButton.addEventListener('click', phoneBill);
