//get a reference to the calculate button
var calculateBtn = document.querySelector('.calculateBtn');
//get a reference to the billTotal element
var billTotalElement = document.querySelector('.billTotal');
//get a reference to the billString
var billString = document.querySelector('.billString');

//Function that calculates the total phone bill
function calculateBtnClicked(){
    // get the string entered in the textArea
    var billStringFunction = billString.value;
    //split the string
    var billItems = billStringFunction.split(",");
    // a variable for the total phone bill.
    var billTotal = 0;
    //loop over all the bill items
    for (var i=0;i<billItems.length;i++){
        var billItem = billItems[i].trim();
        if (billItem === "call"){
            billTotal += 2.75;
        }
        else if (billItem === "sms"){
            billTotal += 0.75;
        }
    }
    //round to two decimals
    var roundedBillTotal = billTotal.toFixed(2);
    billTotalElement.innerHTML = roundedBillTotal;
}
//Function that changes the color when warning and critical levels are met
function colorChangeOne(){
  if(billTotalElement.innerHTML<20.00){
    billTotalElement.classList.remove("danger");
    billTotalElement.classList.remove("warning");
  }else if(billTotalElement.innerHTML>20.00 && billTotalElement.innerHTML<30.00){
    billTotalElement.classList.remove("danger");
    billTotalElement.classList.add("warning");
  }else if(billTotalElement.innerHTML>=30.00){
    billTotalElement.classList.remove("warning");
    billTotalElement.classList.add("danger");
  }
}

calculateBtn.addEventListener('click', function(){//Anonymous Function that calls both functions
  calculateBtnClicked();
  colorChangeOne();
});
