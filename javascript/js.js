console.log("connected");
  var weeklyPatientVolume = $("#weeklyPatientVolume");




$("#weeklyPatientVolume").change(function(){
    // Empty the DIVs on change first. 
    const yearlyVolumeHTML = $("#annualPatientVolume");
    const yearlyVolumeSpan = $("<span>");
    yearlyVolumeHTML.empty();
    yearlyVolumeSpan.empty();
    // Getting variable from the HTML and creating new variabls
    const weeklyPatientVolume = $("#weeklyPatientVolume").val();
    const annualPatientVolume = weeklyPatientVolume * 52;
    // Console.log numbers to double check values
    console.log(annualPatientVolume);
    console.log(weeklyPatientVolume);
   // appending values to the DOM. 
    yearlyVolumeSpan.text(annualPatientVolume);
    yearlyVolumeHTML.append(yearlyVolumeSpan);
})


$("#weeklySurgicalVolume").change(function(){
   // Empty the DIVs on change first. 
    const yearlySurgeryHTML = $("#annualSurgicalVolume");
    const yearlySurgerySpan = $("<span>");
    yearlySurgeryHTML.empty();
    yearlySurgerySpan.empty();
    // Getting variable from the HTML and creating new variabls
    const weeklySurgicalVolume = $("#weeklySurgicalVolume").val();
    const annualSurgicalVolume = weeklySurgicalVolume * 52;
    // Console.log numbers to double check values
    console.log(weeklySurgicalVolume);
    console.log(annualSurgicalVolume);
   // appending values to the DOM. 
    yearlySurgerySpan.text(annualSurgicalVolume);
    yearlySurgeryHTML.append(yearlySurgerySpan);
})


$("#weeklyNoShowVolume").change(function(){
   // Empty the DIVs on change first. 
    const yearlyNoShowHTML = $("#annualNoShowVolume");
    const yearlyNoShowSpan = $("<span>");
    yearlyNoShowHTML.empty();
    yearlyNoShowSpan.empty();
    // Getting variable from the HTML and creating new variabls
    const weeklyNoShowVolume = $("#weeklyNoShowVolume").val();
    const annualNoShowVolume = weeklyNoShowVolume * 52;
    // Console.log numbers to double check values
    console.log(weeklyNoShowVolume);
    console.log(annualNoShowVolume);
   // appending values to the DOM. 
    yearlyNoShowSpan.text(annualNoShowVolume);
    yearlyNoShowHTML.append(yearlyNoShowSpan);
})



