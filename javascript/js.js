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
  $("#surgeryConversion").text((surgeryConversion*100) + "%");

  // Calculating No Show Rate
  const noShowRate = annualNoShowVolume/annualPatientVolume;
  $("#noShowRate").text((noShowRate*100) + "%");

  // Creating Variable for New Now Show Goal;
  const newNoShowRate = $("#noShowGoal").val()/100; 

  // Calculating the New No Show Number. 
  const newNoShowNumber = newNoShowRate * annualPatientVolume; 
  $("#newNoShow").text(newNoShowNumber);

  // Calculating the New Potential Surgerys with a lower no show rate. 
  const additionalSurgicalVolume = (annualNoShowVolume - newNoShowNumber) * surgeryConversion;
  $("#additionalSurgicalVolume").text(additionalSurgicalVolume);

  // Calculating the possible Surgical loss due to no shows. 
  const possibleSurgicalVolumeLoss = (annualNoShowVolume * surgeryConversion);
  $("#possibleSurgicalVolumeLoss").text(possibleSurgicalVolumeLoss);


  // Creating variable for the average Charge Per Surgery
  const averageChargePerSurgery = $("#averageChargePerSurgery").val();


  // Calculating the Surgery Income Loss due to No Shows
  const pontentialLossSurgeryNoShow = (averageChargePerSurgery * possibleSurgicalVolumeLoss);
  $("#surgeryLossNoShow").text(Math.ceil(pontentialLossSurgeryNoShow));
 
  // Calculating EST POS Collection
  const estPOSCollection = ($("#estPOSCollection").val()/100);
  const estPOSCollectionDollars = estPOSCollection * annualCharges ; 
  $("#estPOSCollectionDollars").text(Math.ceil(estPOSCollectionDollars));

  // Calculating the Cost to Collect POS
  const costCollectPOS = ($("#costCollectPOS").val()/100);
  const costCollectionPOSDollars = costCollectPOS * estPOSCollectionDollars;
  $("#costCollectPOSDollars").text(costCollectionPOSDollars);

  // Calculating the Current POS cost
  const currentPOS = ($("#currentPOS").val()/100);
  const costPOSDollars = currentPOS * annualCharges;
  $("#currentPOSDollars").text(costPOSDollars);

  // Calculating the Current POS Collection Cost
  const currenctPOSCollectionCost = (estPOSCollectionDollars - costPOSDollars) * costCollectPOS;
  console.log(currenctPOSCollectionCost);
  $("#currentPOSCollectionCost").text(currenctPOSCollectionCost);

  // Calculating the Cost to Collect Opp New Goal
  const costCollectGoal = ($("#costCollectGoal").val()/100);
  const costCollectGoalDollar = (estPOSCollectionDollars-(annualCharges * costCollectGoal)) * costCollectPOS 
  $("#costCollectGoalDollar").text(costCollectGoalDollar);

  // Calculating the denied Claims
  const denialPercent = ($("#denialPercent").val()/100);
  const denialTotal = (annualPatientVolume + annualSurgicalVolume) * denialPercent;
  $("#denialTotal").text(denialTotal);

  // Calculating the Average Charge Per Pt. Visit. 
  const avgChargePtVisit = annualCharges/(annualSurgicalVolume + annualPatientVolume)
  $("#avgChargePtVisit").text(avgChargePtVisit);

});










































// $("#weeklyPatientVolume").change(function(){
//     // Empty the DIVs on change first. 
    
//     const yearlyVolumeHTML = $("#annualPatientVolume");
//     const yearlyVolumeSpan = $("<span>");
//     yearlyVolumeSpan.attr("id","yearlyVolume");
//     yearlyVolumeHTML.empty();
//     yearlyVolumeSpan.empty();
//     // Getting variable from the HTML and creating new variabls
//     const weeklyPatientVolume = $("#weeklyPatientVolume").val();
//     const annualPatientVolume = weeklyPatientVolume * 52;
//     // Console.log numbers to double check values
//     console.log(annualPatientVolume);
//     console.log(weeklyPatientVolume);
//    // appending values to the DOM. 
//     yearlyVolumeSpan.text(annualPatientVolume);
//     yearlyVolumeHTML.append(yearlyVolumeSpan);
//     annualPatients += $("#yearlyVolume").val();
//     console.log("Your annual Patients: ", annualPatients)

// })


// $("#weeklySurgicalVolume").change(function(){

//    // Empty the DIVs on change first. 
//     const yearlySurgeryHTML = $("#annualSurgicalVolume");
//     const yearlySurgerySpan = $("<span>");
//     const surgeryConversion = $("#surgeryConversion");
//     yearlySurgerySpan.attr("id", "yearlySurgery");
//     yearlySurgeryHTML.empty();
//     yearlySurgerySpan.empty();
//     surgeryConversion.empty();
//     // Getting variable from the HTML and creating new variabls
//     const weeklySurgicalVolume = $("#weeklySurgicalVolume").val();
//     const annualSurgicalVolume = weeklySurgicalVolume * 52;
//     // Console.log numbers to double check values
//     console.log(weeklySurgicalVolume);
//     console.log(annualSurgicalVolume);
//    // appending values to the DOM. 
//     yearlySurgerySpan.text(annualSurgicalVolume);
//     yearlySurgeryHTML.append(yearlySurgerySpan);
//     annualSurgerys += $("#yearlySurgery").val();


//     var surgeryRate = annualSurgerys/annualPatients;
//     surgeryConversion.text(surgeryRate);
// })


// $("#weeklyNoShowVolume").change(function(){
//    // Empty the DIVs on change first. 
//     const yearlyNoShowHTML = $("#annualNoShowVolume");
//     const yearlyNoShowSpan = $("<span>");
//     yearlyNoShowSpan.attr("id", "yearlyNoShow");
//     yearlyNoShowHTML.empty();
//     yearlyNoShowSpan.empty();
//     // Getting variable from the HTML and creating new variabls
//     const weeklyNoShowVolume = $("#weeklyNoShowVolume").val();
//     const annualNoShowVolume = weeklyNoShowVolume * 52;
//     // Console.log numbers to double check values
//     console.log(weeklyNoShowVolume);
//     console.log(annualNoShowVolume);
//    // appending values to the DOM. 
//     yearlyNoShowSpan.text(annualNoShowVolume);
//     yearlyNoShowHTML.append(yearlyNoShowSpan);
// })







