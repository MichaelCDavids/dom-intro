//get a reference to the calculate button
var calculateBtn = document.querySelector('.calculateBtn');
//get a reference to the billTotal element
var billTotalThing = document.querySelector('.billTotal');
//get a reference to the billString
var billString = document.querySelector('.billString');

// add event listener
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
    console.log(roundedBillTotal);
    if(roundedBillTotal<20.00){
      billTotalThing.classList.remove("danger");
      billTotalThing.classList.remove("warning");
    }else if(roundedBillTotal>20.00 && roundedBillTotal<30.00){
        billTotalThing.classList.remove("danger");
        billTotalThing.classList.add("warning");
    }else if(roundedBillTotal>30.00){
      billTotalThing.classList.remove("warning");
      billTotalThing.classList.add("danger");
    }
    billTotalThing.innerHTML = roundedBillTotal;

}

calculateBtn.addEventListener('click', calculateBtnClicked);
