document.addEventListener('DOMContentLoaded', function(){

  var callCost = document.querySelector('.callCostSetting');
  var smsCost = document.querySelector('.smsCostSetting');
  var warningLevels = document.querySelector('.warningLevelSetting');
  var criticalLevels = document.querySelector('.criticalLevelSetting');

  var updateSettingsBtn = document.querySelector('.updateSettings');

  var radioSettingsButton = document.querySelector('.billItemTypeWithSettings');
  var radioSettingsAddBtn = document.querySelector('.radioSettingsAddButton');


  var radioSettingsCallTotal = document.querySelector('.callTotalSettings');
  var radioSettingsSmsTotal = document.querySelector('.smsTotalSettings');
  var radioSettingsAllTotal = document.querySelector('.totalSettings');

  var settingsObject = SettingsFunctions();

  function addToBill(){

    var checkedRadioBtnTwo = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtnTwo){
      var ItemType = checkedRadioBtnTwo.value;
      console.log(ItemType);
      //settingsObject.settingsBill(checkedRadioBtnTwo);
      settingsObject.calculateSettingsBill(ItemType);
      radioSettingsCallTotal.innerHTML = settingsObject.allCalls().toFixed(2);
      radioSettingsSmsTotal.innerHTML = settingsObject.allSms().toFixed(2);
      radioSettingsAllTotal.innerHTML = settingsObject.allTotal().toFixed(2);
    }

  }

  function valueUpdater(){
    var newCallCost = callCost.value;
    var newSmsCost = smsCost.value;
    var newWarningLevel = warningLevels.value;
    var newCriticalLevel = criticalLevels.value;
    settingsObject.updateCallValue(newCallCost);
    settingsObject.updateSmsValue(newSmsCost);
    settingsObject.updateWarningValue(newWarningLevel);
    settingsObject.updateCriticalValue(newCriticalLevel);
  }

  updateSettingsBtn.addEventListener('click',valueUpdater);
  radioSettingsAddBtn.addEventListener('click', addToBill);
});
