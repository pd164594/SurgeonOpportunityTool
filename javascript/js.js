/*!
 * accounting.js v0.4.2, copyright 2014 Open Exchange Rates, MIT license, http://openexchangerates.github.io/accounting.js
 */
(function(p,z){function q(a){return!!(""===a||a&&a.charCodeAt&&a.substr)}function m(a){return u?u(a):"[object Array]"===v.call(a)}function r(a){return"[object Object]"===v.call(a)}function s(a,b){var d,a=a||{},b=b||{};for(d in b)b.hasOwnProperty(d)&&null==a[d]&&(a[d]=b[d]);return a}function j(a,b,d){var c=[],e,h;if(!a)return c;if(w&&a.map===w)return a.map(b,d);for(e=0,h=a.length;e<h;e++)c[e]=b.call(d,a[e],e,a);return c}function n(a,b){a=Math.round(Math.abs(a));return isNaN(a)?b:a}function x(a){var b=c.settings.currency.format;"function"===typeof a&&(a=a());return q(a)&&a.match("%v")?{pos:a,neg:a.replace("-","").replace("%v","-%v"),zero:a}:!a||!a.pos||!a.pos.match("%v")?!q(b)?b:c.settings.currency.format={pos:b,neg:b.replace("%v","-%v"),zero:b}:a}var c={version:"0.4.1",settings:{currency:{symbol:"$",format:"%s%v",decimal:".",thousand:",",precision:2,grouping:3},number:{precision:0,grouping:3,thousand:",",decimal:"."}}},w=Array.prototype.map,u=Array.isArray,v=Object.prototype.toString,o=c.unformat=c.parse=function(a,b){if(m(a))return j(a,function(a){return o(a,b)});a=a||0;if("number"===typeof a)return a;var b=b||".",c=RegExp("[^0-9-"+b+"]",["g"]),c=parseFloat((""+a).replace(/\((.*)\)/,"-$1").replace(c,"").replace(b,"."));return!isNaN(c)?c:0},y=c.toFixed=function(a,b){var b=n(b,c.settings.number.precision),d=Math.pow(10,b);return(Math.round(c.unformat(a)*d)/d).toFixed(b)},t=c.formatNumber=c.format=function(a,b,d,i){if(m(a))return j(a,function(a){return t(a,b,d,i)});var a=o(a),e=s(r(b)?b:{precision:b,thousand:d,decimal:i},c.settings.number),h=n(e.precision),f=0>a?"-":"",g=parseInt(y(Math.abs(a||0),h),10)+"",l=3<g.length?g.length%3:0;return f+(l?g.substr(0,l)+e.thousand:"")+g.substr(l).replace(/(\d{3})(?=\d)/g,"$1"+e.thousand)+(h?e.decimal+y(Math.abs(a),h).split(".")[1]:"")},A=c.formatMoney=function(a,b,d,i,e,h){if(m(a))return j(a,function(a){return A(a,b,d,i,e,h)});var a=o(a),f=s(r(b)?b:{symbol:b,precision:d,thousand:i,decimal:e,format:h},c.settings.currency),g=x(f.format);return(0<a?g.pos:0>a?g.neg:g.zero).replace("%s",f.symbol).replace("%v",t(Math.abs(a),n(f.precision),f.thousand,f.decimal))};c.formatColumn=function(a,b,d,i,e,h){if(!a)return[];var f=s(r(b)?b:{symbol:b,precision:d,thousand:i,decimal:e,format:h},c.settings.currency),g=x(f.format),l=g.pos.indexOf("%s")<g.pos.indexOf("%v")?!0:!1,k=0,a=j(a,function(a){if(m(a))return c.formatColumn(a,f);a=o(a);a=(0<a?g.pos:0>a?g.neg:g.zero).replace("%s",f.symbol).replace("%v",t(Math.abs(a),n(f.precision),f.thousand,f.decimal));if(a.length>k)k=a.length;return a});return j(a,function(a){return q(a)&&a.length<k?l?a.replace(f.symbol,f.symbol+Array(k-a.length+1).join(" ")):Array(k-a.length+1).join(" ")+a:a})};if("undefined"!==typeof exports){if("undefined"!==typeof module&&module.exports)exports=module.exports=c;exports.accounting=c}else"function"===typeof define&&define.amd?define([],function(){return c}):(c.noConflict=function(a){return function(){p.accounting=a;c.noConflict=z;return c}}(p.accounting),p.accounting=c)})(this);

Number.isNaN = Number.isNaN || function(value) {     
  return value !== value;
}

var console = console || {
  log: function() {}
}

var Cookies = Cookies || { get: function(){ return null; } };
var n = function() {};

function DataModel() {
  this.weeklyPatientVolume = ko.observable(0);
  this.weeklySurgeryVolume = ko.observable(0);
  this.weeklyNoShowVolume = ko.observable(0);
  this.annualCharges = ko.observable(0);
  this.noShowGoal = ko.observable(0);
  this.averageChargePerSurgery = ko.observable(0);
  this.estPOSCollectionInput = ko.observable(8);
  this.costCollectPOSInput = ko.observable(15);
  this.currentPOSInput = ko.observable(4);
  this.costCollectGoalInput = ko.observable(6);
  this.denialPercentInput = ko.observable(15);
  this.surgeryVisitRatioInput = ko.observable(25);

  this.newNoShowRate = ko.computed( function() { return this.noShowGoal() / 100 }, this);
  this.estPOSCollection = ko.computed( function() { return this.estPOSCollectionInput()/100 }, this);
  this.costCollectPOS = ko.computed( function() { return this.costCollectPOSInput()/100 }, this);
  this.currentPOS = ko.computed( function() { return this.currentPOSInput()/100 }, this);
  this.costCollectGoal = ko.computed( function() { return this.costCollectGoalInput()/100 }, this);
  this.denialPercent = ko.computed( function() { return this.denialPercentInput()/100 }, this);
  this.surgeryVisitRatio = ko.computed( function() { return this.surgeryVisitRatioInput()/100 }, this);

  this.annualPatientVolume = ko.computed(function() { return this.weeklyPatientVolume() * 48 }, this);  
  this.annualSurgeryVolume = ko.computed(function() { return this.weeklySurgeryVolume() * 48 }, this);  
  this.annualNoShowVolume = ko.computed(function() { return this.weeklyNoShowVolume() * 48 }, this);  
  this.surgeryConversion = ko.computed(function() { return this.annualSurgeryVolume()/this.annualPatientVolume() }, this);
  this.surgeryConversionText = ko.computed(function() { return Number.isNaN(this.surgeryConversion()) ? "" : Math.ceil((this.surgeryConversion()*100)) + "%" }, this);
  this.noShowRate = ko.computed(function() { return this.annualNoShowVolume()/this.annualPatientVolume() }, this);
  this.noShowRateText = ko.computed(function() { return Number.isNaN(this.noShowRate()) ? "" : Math.ceil((this.noShowRate()*100)) + "%" }, this);  
  this.newNoShowNumber = ko.computed( function() { return this.newNoShowRate() * this.annualPatientVolume() } , this);
  this.newNoShowNumberText = ko.computed( function() { return Math.ceil(this.newNoShowNumber()) } , this);
  this.additionalSurgicalVolume = ko.computed( function() { return (this.annualNoShowVolume() - this.newNoShowNumber()) * this.surgeryConversion() }, this);
  this.additionalSurgicalVolumeText = ko.computed( function() { return Number.isNaN(this.additionalSurgicalVolume()) ? "" : Math.ceil(this.additionalSurgicalVolume()) }, this);
  this.possibleSurgicalVolumeLoss = ko.computed( function() { return this.annualNoShowVolume() * this.surgeryConversion() }, this);
  this.possibleSurgicalVolumeLossText = ko.computed( function() { return Number.isNaN(this.possibleSurgicalVolumeLoss()) ? "" : Math.ceil(this.possibleSurgicalVolumeLoss()) }, this);  
  this.potentialLossSurgeryNoShow = ko.computed( function() { return this.averageChargePerSurgery() * this.possibleSurgicalVolumeLoss() }, this);
  this.potentialLossSurgeryNoShowText = ko.computed( function() { return accounting.formatMoney(this.potentialLossSurgeryNoShow()) }, this );
  this.estPOSCollectionDollars = ko.computed( function() { return this.estPOSCollection() * this.annualCharges() }, this);
  this.estPOSCollectionDollarsText = ko.computed( function() { return accounting.formatMoney(this.estPOSCollectionDollars()) }, this);
  this.costCollectionPOSDollars = ko.computed(function() { return this.costCollectPOS() * this.estPOSCollectionDollars() }, this);
  this.costCollectionPOSDollarsText = ko.computed(function(){ return accounting.formatMoney(this.costCollectionPOSDollars()) }, this);
  this.costPOSDollars = ko.computed(function() { return this.currentPOS() * this.estPOSCollectionDollars() }, this);
  this.costPOSDollarsText = ko.computed(function(){ return accounting.formatMoney(this.costPOSDollars()) }, this);
  this.currentPOSCollectionCost = ko.computed(function() { return (this.estPOSCollectionDollars() - this.costPOSDollars()) * this.costCollectPOS() }, this);
  this.currentPOSCollectionCostText = ko.computed(function() { return accounting.formatMoney(this.currentPOSCollectionCost()) }, this);
  this.costCollectGoalDollar = ko.computed(function() { return this.estPOSCollectionDollars() * this.costCollectGoal() }, this);
  this.costCollectGoalDollarText = ko.computed(function() { return accounting.formatMoney(this.costCollectGoalDollar()) }, this);
  this.savingsIncreasePOSDollars = ko.computed(function() { return (this.costCollectionPOSDollars() - (this.estPOSCollectionDollars()-this.costCollectGoalDollar()) * this.costCollectPOS()) }, this);
  this.savingsIncreasePOSDollarsText = ko.computed(function() { return accounting.formatMoney(this.savingsIncreasePOSDollars()) }, this);
  this.denialTotal = ko.computed(function(){ return (this.annualPatientVolume() + this.annualSurgeryVolume()) * this.denialPercent() }, this);
  this.denialTotalText = ko.computed(function(){ return this.denialTotal().toFixed(2) }, this);
  this.avgChargePtVisit = ko.computed(function() { return this.annualCharges()/(this.annualSurgeryVolume() + this.annualPatientVolume()) }, this);
  this.avgChargePtVisitText = ko.computed(function() { return accounting.formatMoney(this.avgChargePtVisit()) }, this);
  this.dollarsAtRisk = ko.computed(function() { return this.avgChargePtVisit() * this.denialTotal() }, this);
  this.dollarsAtRiskText = ko.computed(function() { return accounting.formatMoney(this.dollarsAtRisk()) }, this);
  this.newSurgeryCount = ko.computed(function() { return (this.annualPatientVolume() * this.surgeryVisitRatio()) - this.annualSurgeryVolume() }, this);
  this.newSurgeryCountText = ko.computed(function() { return Math.ceil(this.newSurgeryCount()) }, this);
  this.possibleIncome = ko.computed(function() { return this.averageChargePerSurgery() * this.newSurgeryCount() }, this);
  this.possibleIncomeText = ko.computed(function() { return accounting.formatMoney(this.possibleIncome()) }, this);

  this.plainCSV = ko.computed(function() {
    var csvContent = "Data point,Weekly,Yearly\r\n";e
    csvContent += "Number of patients each week," + this.weeklyPatientVolume() + "," + this.annualPatientVolume() + "\r\n";
    csvContent += "Number of surgeries each week," + this.weeklySurgeryVolume() + "," + this.annualSurgeryVolume() + "\r\n";
    csvContent += "Number of no shows each week," + this.weeklyNoShowVolume() + "," + this.annualNoShowVolume() + "\r\n";
    csvContent += "Annual charges,,\"" + accounting.formatMoney(this.annualCharges()) + "\"\r\n";
    csvContent += "Surgery conversion ratio,," + this.surgeryConversionText() + "\r\n";
    csvContent += "No show rate,," + this.noShowRateText() + "\r\n";
    csvContent += "No show goal (in %),," + this.noShowGoal() + "\r\n";
    csvContent += "New no show number,," + this.newNoShowNumberText() + "\r\n";
    csvContent += "Possible additional surgeries with reduced no shows,," + this.additionalSurgicalVolumeText() + "\r\n";
    csvContent += "Possible surgery loss due to no show,," + this.possibleSurgicalVolumeLossText() + "\r\n";
    csvContent += "Average charge per surgery,,\"" + accounting.formatMoney(this.averageChargePerSurgery()) + "\"\r\n";
    csvContent += "Possible surgery income loss due to no show,,\"" + this.potentialLossSurgeryNoShowText() + "\"\r\n";
    csvContent += "EST POS collection (in %)," + this.estPOSCollectionInput() + ",\"" + this.estPOSCollectionDollarsText() + "\"\r\n";
    csvContent += "Cost to collect POS (in %)," + this.costCollectPOSInput() + ",\"" + this.costCollectionPOSDollarsText() + "\"\r\n";
    csvContent += "Current POS collection cost,,\"" + this.currentPOSCollectionCostText() + "\"\r\n";
    csvContent += "New goal collect opp," + this.costCollectGoalInput() + ",\"" + this.costCollectGoalDollarText() + "\"\r\n";
    csvContent += "Saving with increased POS collections,,\"" + this.savingsIncreasePOSDollarsText() + "\"\r\n";
    csvContent += "% of denials - claim count," + this.denialPercentInput() +",\"" + this.denialTotalText() + "\"\r\n";
    csvContent += "Average charge per patient visit,,\"" + this.avgChargePtVisitText() + "\"\r\n";
    csvContent += "Dollars at risk due to denials,,\"" + this.dollarsAtRiskText() + "\"\r\n";
    csvContent += "Goal for surgery to visit ratio (%)," + this.surgeryVisitRatioInput() + ",\r\n";
    csvContent += "Possible new surgeries count,," + this.newSurgeryCountText() + "\r\n";
    csvContent += "Possible added income if surgery ratio hits goal,,\"" + this.possibleIncomeText() + "\"\r\n";
    return csvContent;
  }, this);
  
  this.asCSV = ko.computed(function() {
    return encodeURI("data:text/csv;charset=utf-8," + this.plainCSV());
  }, this);
}

var datamodel = new DataModel();
ko.applyBindings(datamodel);

$("#submit").on("click", function(){
   $("#successModal").modal("toggle");
});

$("#print").on("click", function(){
  window.print();
});

$("#download").on("click", function(e){
  var csvData = "sep=,\r\n" + datamodel.plainCSV();
  var isOldIE = navigator.appName === "Microsoft Internet Explorer";
  var isIE11 = !!navigator.userAgent.match(/Trident\/7\./);

  if ( isOldIE ) {
    var elIframe = $("<iframe></iframe>");
    $('body').append(elIframe);
    var iframe = elIframe[0].contentWindow || elIframe[0].contentDocument;

    iframe.document.open("text/html", "replace");
    iframe.document.write(csvData);
    iframe.document.close();
    iframe.focus();
    iframe.document.execCommand('SaveAs', true, 'data.csv');
    elIframe.remove();
    e.stopPropagation();
    e.preventDefault();
    return false;
  } else if (isIE11) {
    navigator.msSaveOrOpenBlob(
      new Blob(
        [ "\uFEFF", csvData ],
        { type: "text/csv" } ),
      "calculator.csv"
    );
    e.stopPropagation();
    e.preventDefault();
    return false;
  } else {
    return true;
  }
});