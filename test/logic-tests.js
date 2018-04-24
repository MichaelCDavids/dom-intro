describe('The calculateBill Function',function(){
  it('should calculate the total for a string of call usage', function(){
    assert.equal(calculateBill("call,call,call,call,call,call,call,call,call,call"),27.50);
  });
  it('should calculate the total for a string of sms usage', function(){
    assert.equal(calculateBill("sms,sms,sms,sms,sms,sms,sms,sms,sms,sms"),7.50);
  });
  it('should calculate the total for a string of call+sms usage', function(){
    assert.equal(calculateBill("call,call,call,call,call,call,sms,sms,sms,sms,sms,sms,sms,sms,sms,sms,call,call,call,call"),35.00);
  });
  it('should calculate the total for an empty string of phone usage', function(){
    assert.equal(calculateBill(" "),0.00);
  });
});

describe('The phoneBill Function',function(){
  it('should calculate the total for a call',function(){

  });
  it('should calculate the total for multiple calls',function(){

  });
  it('should calculate the total for a call and sms',function(){

  });
  it('should calculate the total for a sms',function(){

  });
});
describe('The settingsCalculator Function',function(){

  it('should calculate the total for a call', function(){

    // global
    var settingBill = SettingsFunctions()

    // settings button
    settingBill.newCall(5);
    settingBill.newSms(2.50);
    //todo - warning level...

    // add button
    settingBill.calculateSettingsBill('call');

    assert.equal(settingBill.allCalls(), 5);
    assert.equal(settingBill.allSms(), 0);
    assert.equal(settingBill.allTotal(), 5);

  });

  it('should calculate the total for mulitple calls', function(){

    var settingBill = SettingsFunctions()

    settingBill.newCall(5);
    settingBill.newSms(2.50);

    settingBill.calculateSettingsBill('call');
    settingBill.calculateSettingsBill('call');
    settingBill.calculateSettingsBill('call');

    assert.equal(settingBill.allCalls(), 15);
    assert.equal(settingBill.allSms(), 0);
    assert.equal(settingBill.allTotal(), 15);

  });

  it('should calculate the total for a call and sms', function(){

    var settingBill = SettingsFunctions()

    settingBill.newCall(5);
    settingBill.newSms(2.50);

    settingBill.calculateSettingsBill('call');
    settingBill.calculateSettingsBill('sms');

    assert.equal(settingBill.allCalls(), 5);
    assert.equal(settingBill.allSms(), 2.50);
    assert.equal(settingBill.allTotal(), 7.50);

  });

  it('should calculate the total for a sms', function(){

    var settingBill = SettingsFunctions()

    settingBill.newCall(5);
    settingBill.newSms(2.50);

    settingBill.calculateSettingsBill('sms');

    assert.equal(settingBill.allCalls(), 0);
    assert.equal(settingBill.allSms(), 2.50);
    assert.equal(settingBill.allTotal(), 2.50);

  });
  it('should calculate the total for a string of sms usage', function(){
    var settingBill = SettingsFunctions()

    settingBill.newCall(5);
    settingBill.newSms(2.50);

    settingBill.calculateSettingsBill('sms');
    settingBill.calculateSettingsBill('sms');
    settingBill.calculateSettingsBill('sms');
    settingBill.calculateSettingsBill('sms');
    settingBill.calculateSettingsBill('sms');
    settingBill.calculateSettingsBill('sms');
    settingBill.calculateSettingsBill('sms');
    settingBill.calculateSettingsBill('sms');
    settingBill.calculateSettingsBill('sms');
    settingBill.calculateSettingsBill('sms');

    assert.equal(settingBill.allSms(),25.00);
  });
  it('should calculate the total for a string of call+sms usage', function(){
    var settingBill = SettingsFunctions()

    settingBill.newCall(5);
    settingBill.newSms(2.50);

    settingBill.calculateSettingsBill('sms');
    settingBill.calculateSettingsBill('call');
    settingBill.calculateSettingsBill('sms');
    settingBill.calculateSettingsBill('call');
    settingBill.calculateSettingsBill('sms');
    settingBill.calculateSettingsBill('call');
    settingBill.calculateSettingsBill('sms');
    settingBill.calculateSettingsBill('call');
    settingBill.calculateSettingsBill('sms');
    settingBill.calculateSettingsBill('call');
    assert.equal(settingBill.allTotal(),37.50);
  });
  // it('should calculate the total for an empty string of phone usage', function(){
  //   var settingBill = SettingsFunctions()
  //   assert.equal(settingBill.total(),0.00);
  // });
  //
  it('should check if the total is greater or equal to critical level',function(){
      var settingBill = SettingsFunctions();

      settingBill.newCall(5);
      settingBill.newSms(2.50);
      settingBill.newWarning(10.00);
      settingBill.newCritical(50.00);

      settingBill.calculateSettingsBill('call');
      settingBill.calculateSettingsBill('call');
      settingBill.calculateSettingsBill('call');
      settingBill.calculateSettingsBill('call');
      settingBill.calculateSettingsBill('call');
      settingBill.calculateSettingsBill('call');
      settingBill.calculateSettingsBill('call');
      settingBill.calculateSettingsBill('call');
      settingBill.calculateSettingsBill('call');
      settingBill.calculateSettingsBill('call');
      settingBill.calculateSettingsBill('call');
      settingBill.calculateSettingsBill('call');
      settingBill.calculateSettingsBill('call');
      settingBill.calculateSettingsBill('call');
      settingBill.calculateSettingsBill('call');
      settingBill.calculateSettingsBill('call');
      settingBill.calculateSettingsBill('call');
      settingBill.calculateSettingsBill('call');
      settingBill.calculateSettingsBill('call');
      settingBill.calculateSettingsBill('call');

      assert.isAtMost(settingBill.allTotal(), settingBill.CriticalValue());
      assert.equal(settingBill.reachedCriticalLevel(), true);


      // this should be in another test - this is testing that if the critical level
      settingBill.newCritical(100.00);
      assert.equal(settingBill.reachedCriticalLevel(), false);


      //assert.isAtMost(settingBill.total(), settingBill.CriticalVal());

  });
});
