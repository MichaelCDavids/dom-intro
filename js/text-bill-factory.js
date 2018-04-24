function TextBill(){
  var callsTotal = 0;
  var smssTotal = 0;
  var totalPhoneBillTracker = 0;

  function phoneBill(string){
    if(string === 'call'){
      callsTotal += 2.75;
      totalPhoneBillTracker += 2.75;
    }else if(string === 'sms'){
      smssTotal += 0.75;
      totalPhoneBillTracker += 0.75;
    }
  }

  function getCall(){
    return callsTotal;
  }
  function getSms(){
    return smssTotal;
  }
  function getTotal(){
    return totalPhoneBillTracker;
  }

  return {
    billTwo : phoneBill,
    smsTwo : getSms,
    callTwo : getCall,
    finalTotal : getTotal
  }
}
