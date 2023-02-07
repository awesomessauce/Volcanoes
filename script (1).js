//Ok ima be real w/ whoever got this, we both have no clue what we're doing. I missed like a whole week and my other partner missed the day we covered libararies. Enjoy!!
var url = "https://raw.githubusercontent.com/b-mcavoy/datasets/main/Science/Volcano%20Eruptions.csv"
//https://github.com/b-mcavoy/datasets/blob/main/Science/Volcano%20Eruptions.csv

var volcanoName = getColumn(url,1);
var country = getColumn(url,2);
var type = getColumn(url,3);
var lastErruption = getColumn(url,4);
var region = getColumn(url,5);
var latitude = getColumn(url,6);
var longitude = getColumn(url,7);
var elevation = getColumn(url,8);
var dominantRockType = getColumn(url,9);
var tectonicSetting = getColumn(url,10);

// Country with the most erruptions (could also apply to other things. ex. most type, region, most rock type)
var uniqueCountries=[];
for (var i=0; i<country.length; i++){
  if (!uniqueCountries.includes(country[i])){
    uniqueCountries.push(country[i]);
  }
}
/*console.log (uniqueCountries);
prints a list of unique countries*/
var countryCounts=[];
for (var i=0; i<uniqueCountries.length; i++){
  var count=0;
  for (var j=0; j<country.length; j++){
    if(uniqueCountries[i]==country[j]){
      count++;
    }
  }
countryCounts.push(count);
}
/*console.log (countryCounts);
prints a list of how many times those countries are mentioned.*/ 
var mostErruptionsCountry = [];
for (var i=0; i<countryCounts.length; i++){}
var max = 0;
var maxtErruptionsCountry = "";
for (var i=0; i<countryCounts.length; i++){
      if(countryCounts[i] > max){
        max=countryCounts[i];
    maxtErruptionsCountry= uniqueCountries[i];
 }
}
console.log(maxtErruptionsCountry);

// Volcanos with the newest erruption
var uniqueCE=[];
for (var i=0; i<lastErruption.length; i++){
  if (lastErruption[i].includes(" CE")){
    uniqueCE.push(parseInt(lastErruption[i].substring(0, lastErruption[i].indexOf(" "))));
  }
}
//console.log (uniqueCE);
var latestErruptionVolcano = [];
for (var i=0; i<uniqueCE.length; i++){}
var maxVol = 0;
var newestErruption = "";
for (var i=0; i<uniqueCE.length; i++){
      if(uniqueCE[i] > maxVol){
        maxVol=uniqueCE[i];
    newestErruption= uniqueCE[i];
 }
}
console.log(newestErruption);


// average elevation?
// All volcanoes that begin with a letter (whatever letter idk)


  // function (region, minimum elevation, rock type)
function findVolcano (area, maximumElevation, rockType){
  //note: make the names here different than the actual getColumn names
var matchingName = [];
for (var i=0; i<volcanoName.length; i++){
    if (region[i]== area && parseInt(elevation[i])<= maximumElevation && (dominantRockType[i])== rockType){
      matchingName.push(volcanoName[i]);
    }
  }
  return matchingName;
}
console.log (findVolcano("Italy", 800, "Trachyte / Trachydacite"));



/*Iteration
Selection
One or more parameters
Return*/