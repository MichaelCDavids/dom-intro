// get a reference to the sms or call radio buttons

// get refences to all the settings fields
var callCost = document.querySelector('.callCostSetting');
var smsCost = document.querySelector('.smsCostSetting');
var warningLevels = document.querySelector('.warningLevelSetting');
var criticalLevels = document.querySelector('.criticalLevelSetting');





var updateSettingsBtn = document.querySelector('.updateSettings');



// get a reference to the sms or call radio buttons
var radioSettingsButton = document.querySelector('.billItemTypeWithSettings');
//get a reference to the add button
var radioSettingsAddBtn = document.querySelector('.radioSettingsAddButton');

var radioSettingsCallTotal = document.querySelector('.callTotalSettings');
var radioSettingsSmsTotal = document.querySelector('.smsTotalSettings');
var radioSettingsAllTotal = document.querySelector('.totalSettings');

 var callValue = 0;
 var smsValue = 0;
 var warningValue = 0;
 var criticalValue = 0;
// create a variable that will keep track of call bill
var radioSettingCallsTotal = 0;
// create a variable that will keep track of sms bill
var radioSettingsSmsTotals = 0;
//create a variable that will keep track of the total bill
var radioSettingsAllTotals = 0;

function updateSettingsFunction(){
  var newCallCost = callCost.value;
  var newSmsCost = smsCost.value;
  var newWarningLevel = warningLevels.value;
  var newCriticalLevel = criticalLevels.value;

  if(callCost != ''){
    callValue = parseFloat(newCallCost)
  }
  if(smsCost != ''){
    smsValue = parseFloat(newSmsCost)
  }
  if(warningLevels != ''){
    warningValue = parseFloat(newWarningLevel)
  }
  if(criticalLevels != ''){
    criticalValue = parseFloat(newCriticalLevel)
  }
}

function radioSettingsBillFunction(){
  var checkedRadioBtnTwo = document.querySelector("input[name='billItemTypeWithSettings']:checked");
  if (checkedRadioBtnTwo){
    var ItemType = checkedRadioBtnTwo.value
    // ItemType will be 'call' or 'sms'
    if(ItemType === 'call'){
      radioSettingCallsTotal += callValue;
      radioSettingsCallTotal.innerHTML = radioSettingCallsTotal.toFixed(2);
      radioSettingsAllTotals += callValue;
      radioSettingsAllTotal.innerHTML = radioSettingsAllTotals.toFixed(2);
    }else if(ItemType === 'sms'){
      radioSettingsSmsTotals += smsValue;
      radioSettingsSmsTotal.innerHTML = radioSettingsSmsTotals.toFixed(2);
      radioSettingsAllTotals += smsValue;
      radioSettingsAllTotal.innerHTML = radioSettingsAllTotals.toFixed(2);
    }
    if(radioSettingsAllTotals<warningValue){
      radioSettingsAllTotal.classList.remove("danger");
      radioSettingsAllTotal.classList.remove("warning");
    }else if(radioSettingsAllTotals>warningValue && radioSettingsAllTotals<criticalValue){
      radioSettingsAllTotal.classList.remove("danger");
      radioSettingsAllTotal.classList.add("warning");
    }else if(radioSettingsAllTotals>=criticalValue){
      radioSettingsAllTotal.classList.remove("warning");
      radioSettingsAllTotal.classList.add("danger");
      radioSettingsAddBtn.removeEventListener('click', radioSettingsBillFunction);
    }
  }
}

updateSettingsBtn.addEventListener('click',updateSettingsFunction);
radioSettingsAddBtn.addEventListener('click', radioSettingsBillFunction);
