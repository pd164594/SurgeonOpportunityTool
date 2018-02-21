/*!
 * accounting.js v0.4.2, copyright 2014 Open Exchange Rates, MIT license, http://openexchangerates.github.io/accounting.js
 */
(function(p,z){function q(a){return!!(""===a||a&&a.charCodeAt&&a.substr)}function m(a){return u?u(a):"[object Array]"===v.call(a)}function r(a){return"[object Object]"===v.call(a)}function s(a,b){var d,a=a||{},b=b||{};for(d in b)b.hasOwnProperty(d)&&null==a[d]&&(a[d]=b[d]);return a}function j(a,b,d){var c=[],e,h;if(!a)return c;if(w&&a.map===w)return a.map(b,d);for(e=0,h=a.length;e<h;e++)c[e]=b.call(d,a[e],e,a);return c}function n(a,b){a=Math.round(Math.abs(a));return isNaN(a)?b:a}function x(a){var b=c.settings.currency.format;"function"===typeof a&&(a=a());return q(a)&&a.match("%v")?{pos:a,neg:a.replace("-","").replace("%v","-%v"),zero:a}:!a||!a.pos||!a.pos.match("%v")?!q(b)?b:c.settings.currency.format={pos:b,neg:b.replace("%v","-%v"),zero:b}:a}var c={version:"0.4.1",settings:{currency:{symbol:"$",format:"%s%v",decimal:".",thousand:",",precision:2,grouping:3},number:{precision:0,grouping:3,thousand:",",decimal:"."}}},w=Array.prototype.map,u=Array.isArray,v=Object.prototype.toString,o=c.unformat=c.parse=function(a,b){if(m(a))return j(a,function(a){return o(a,b)});a=a||0;if("number"===typeof a)return a;var b=b||".",c=RegExp("[^0-9-"+b+"]",["g"]),c=parseFloat((""+a).replace(/\((.*)\)/,"-$1").replace(c,"").replace(b,"."));return!isNaN(c)?c:0},y=c.toFixed=function(a,b){var b=n(b,c.settings.number.precision),d=Math.pow(10,b);return(Math.round(c.unformat(a)*d)/d).toFixed(b)},t=c.formatNumber=c.format=function(a,b,d,i){if(m(a))return j(a,function(a){return t(a,b,d,i)});var a=o(a),e=s(r(b)?b:{precision:b,thousand:d,decimal:i},c.settings.number),h=n(e.precision),f=0>a?"-":"",g=parseInt(y(Math.abs(a||0),h),10)+"",l=3<g.length?g.length%3:0;return f+(l?g.substr(0,l)+e.thousand:"")+g.substr(l).replace(/(\d{3})(?=\d)/g,"$1"+e.thousand)+(h?e.decimal+y(Math.abs(a),h).split(".")[1]:"")},A=c.formatMoney=function(a,b,d,i,e,h){if(m(a))return j(a,function(a){return A(a,b,d,i,e,h)});var a=o(a),f=s(r(b)?b:{symbol:b,precision:d,thousand:i,decimal:e,format:h},c.settings.currency),g=x(f.format);return(0<a?g.pos:0>a?g.neg:g.zero).replace("%s",f.symbol).replace("%v",t(Math.abs(a),n(f.precision),f.thousand,f.decimal))};c.formatColumn=function(a,b,d,i,e,h){if(!a)return[];var f=s(r(b)?b:{symbol:b,precision:d,thousand:i,decimal:e,format:h},c.settings.currency),g=x(f.format),l=g.pos.indexOf("%s")<g.pos.indexOf("%v")?!0:!1,k=0,a=j(a,function(a){if(m(a))return c.formatColumn(a,f);a=o(a);a=(0<a?g.pos:0>a?g.neg:g.zero).replace("%s",f.symbol).replace("%v",t(Math.abs(a),n(f.precision),f.thousand,f.decimal));if(a.length>k)k=a.length;return a});return j(a,function(a){return q(a)&&a.length<k?l?a.replace(f.symbol,f.symbol+Array(k-a.length+1).join(" ")):Array(k-a.length+1).join(" ")+a:a})};if("undefined"!==typeof exports){if("undefined"!==typeof module&&module.exports)exports=module.exports=c;exports.accounting=c}else"function"===typeof define&&define.amd?define([],function(){return c}):(c.noConflict=function(a){return function(){p.accounting=a;c.noConflict=z;return c}}(p.accounting),p.accounting=c)})(this);



console.log("connected");

  
$("#submit").on("click", function(){

  // Calculate Annual Patient Volume
  const weeklyPatientVolume = $("#weeklyPatientVolume").val();
  const annualPatientVolume = weeklyPatientVolume * 48;
  $("#annualPatientVolume").text(annualPatientVolume);

  // Calculate Annual Surgical Volume
  const weeklySurgicalVolume = $("#weeklySurgicalVolume").val();
  const annualSurgicalVolume = weeklySurgicalVolume * 48; 
  $("#annualSurgicalVolume").text(annualSurgicalVolume);

  // Calculate Annual No Show Volume
  const weeklyNoShowVolume = $("#weeklyNoShowVolume").val();
  const annualNoShowVolume = weeklyNoShowVolume * 48; 
  $("#annualNoShowVolume").text(annualNoShowVolume);

  // Creating a variable for annual Charges. 
  const annualCharges = $("#annualCharges").val();

  // Calculating Surgery Conversion Ratio
  const surgeryConversion = annualSurgicalVolume/annualPatientVolume;
  $("#surgeryConversion").text(Math.ceil((surgeryConversion*100)) + "%");

  // Calculating No Show Rate
  const noShowRate = annualNoShowVolume/annualPatientVolume;
  $("#noShowRate").text(Math.ceil((noShowRate*100)) + "%");

  // Creating Variable for New Now Show Goal;
  const newNoShowRate = $("#noShowGoal").val()/100; 

  // Calculating the New No Show Number. 
  const newNoShowNumber = newNoShowRate * annualPatientVolume; 
  $("#newNoShow").text(Math.ceil(newNoShowNumber));

  // Calculating the New Potential Surgerys with a lower no show rate. 
  const additionalSurgicalVolume = (annualNoShowVolume - newNoShowNumber) * surgeryConversion;
  $("#additionalSurgicalVolume").text(Math.ceil(additionalSurgicalVolume));

  // Calculating the possible Surgical loss due to no shows. 
  const possibleSurgicalVolumeLoss = (annualNoShowVolume * surgeryConversion);
  $("#possibleSurgicalVolumeLoss").text(Math.ceil(possibleSurgicalVolumeLoss));


  // Creating variable for the average Charge Per Surgery
  const averageChargePerSurgery = $("#averageChargePerSurgery").val();


  // Calculating the Surgery Income Loss due to No Shows
  const pontentialLossSurgeryNoShow = (averageChargePerSurgery * possibleSurgicalVolumeLoss);
  $("#surgeryLossNoShow").text(accounting.formatMoney(pontentialLossSurgeryNoShow,{
    precision: 0
  }));
 
  // Calculating EST POS Collection
  const estPOSCollection = ($("#estPOSCollection").val()/100);
  const estPOSCollectionDollars = estPOSCollection * annualCharges ; 
  $("#estPOSCollectionDollars").text(accounting.formatMoney(estPOSCollectionDollars,{
    precision: 0
  }));

  // Calculating the Cost to Collect POS
  const costCollectPOS = ($("#costCollectPOS").val()/100);
  const costCollectionPOSDollars = costCollectPOS * estPOSCollectionDollars;
  $("#costCollectPOSDollars").text(accounting.formatMoney(costCollectionPOSDollars,{
    precision: 0
  }));

  // Calculating the Current POS cost
  const currentPOS = ($("#currentPOS").val()/100);
  const costPOSDollars = currentPOS * estPOSCollectionDollars;
  $("#currentPOSDollars").text(accounting.formatMoney(costPOSDollars,{
    precision: 0
  }));

  // Calculating the Current POS Collection Cost
  const currenctPOSCollectionCost = (estPOSCollectionDollars - costPOSDollars) * costCollectPOS;
  console.log(currenctPOSCollectionCost);
  $("#currentPOSCollectionCost").text(accounting.formatMoney(currenctPOSCollectionCost,{
    precision: 0
  }));

  // Calculating the Cost to Collect Opp New Goal
  const costCollectGoal = ($("#costCollectGoal").val()/100);
  const costCollectGoalDollar = (estPOSCollectionDollars* costCollectGoal)
  $("#costCollectGoalDollar").text(accounting.formatMoney(costCollectGoalDollar, {
    precision: 0
  }));

  // Calculating Saving with Increase POS. 
  const savingsIncreasePOSDollars = (costCollectionPOSDollars - (estPOSCollectionDollars-costCollectGoalDollar) * costCollectPOS);
$("#increasedSavings").text(accounting.formatMoney(savingsIncreasePOSDollars, {
    precision: 0
  }));

  // Calculating the denied Claims
  const denialPercent = ($("#denialPercent").val()/100);
  const denialTotal = (annualPatientVolume + annualSurgicalVolume) * denialPercent;
  $("#denialTotal").text(Math.ceil(denialTotal));

  // Calculating the Average Charge Per Pt. Visit. 
  const avgChargePtVisit = annualCharges/(annualSurgicalVolume + annualPatientVolume)
  $("#avgChargePtVisit").text(accounting.formatMoney(avgChargePtVisit,{
    precision: 0
  }));

  // Calculating the Dollars at Risk;
  const dollarsAtRisk = avgChargePtVisit * denialTotal;
  $("#dollarsAtRisk").text(accounting.formatMoney(dollarsAtRisk,{
    precision: 0
  }));

  // Calculating New Surgery Counts. 
  const surgeryVisitRatio = ($("#surgeryVisitRatio").val()/100);
  const newSurgeryCount = (annualPatientVolume * surgeryVisitRatio) - annualSurgicalVolume;
  $("#newSurgeryCount").text(Math.ceil(newSurgeryCount));

  // Calculating possible amount 
  const possibleIncome = averageChargePerSurgery * newSurgeryCount;
  $("#possibleIncome").text(accounting.formatMoney(possibleIncome,{
    precision: 0
  }));


   $("#dollarOp").text("Your Possible Growth Opportunity: " + accounting.formatMoney(possibleIncome,{
    precision: 0
  }));

   $("#dollarsRisk").text("Your Possible Revenue Opportunity: " + accounting.formatMoney(dollarsAtRisk,{
    precision: 0
  }));

   $("#savingModal").text("Your Possible Expense Opportun: " + accounting.formatMoney(savingsIncreasePOSDollars,{
    precision: 0
  }));

   $("#successModal").modal("toggle");

});