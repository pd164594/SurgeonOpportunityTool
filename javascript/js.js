console.log("connected");
  
$("#submit").on("click", function(){

  // Calculate Annual Patient Volume
  const weeklyPatientVolume = $("#weeklyPatientVolume").val();
  const annualPatientVolume = weeklyPatientVolume * 52;
  $("#annualPatientVolume").text(annualPatientVolume);

  // Calculate Annual Surgical Volume
  const weeklySurgicalVolume = $("#weeklySurgicalVolume").val();
  const annualSurgicalVolume = weeklySurgicalVolume * 52; 
  $("#annualSurgicalVolume").text(annualSurgicalVolume);

  // Calculate Annual No Show Volume
  const weeklyNoShowVolume = $("#weeklyNoShowVolume").val();
  const annualNoShowVolume = weeklyNoShowVolume * 52; 
  $("#annualNoShowVolume").text(annualNoShowVolume);

  // Creating a variable for annual Charges. 
  const annualChargers = $("#annualCharges").val();

  // Calculating Surgery Conversion Ratio
  const surgeryConversion = annualSurgicalVolume/annualPatientVolume;
  $("#surgeryConversion").text((surgeryConversion*100) + "%");

  // Calculating No Show Rate
  const noShowRate = annualNoShowVolume/annualPatientVolume;
  $("#noShowRate").text((noShowRate*100) + "%");

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







