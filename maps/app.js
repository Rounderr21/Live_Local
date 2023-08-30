const locateBtn = document.querySelector('#locationBtn');
const placesBtn = document.querySelector('#more');

let latC;
let lonC;

locateBtn.addEventListener('click', function(){

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }


function showPosition(position) {
 latC =  parseFloat(position.coords.latitude); 
 lonC = parseFloat(position.coords.longitude);
 
 console.log(latC, lonC);


 initMap(latC, lonC);
};




function initMap(latC,lonC) {
 let mapEl = document.querySelector('#map')

mapEl.classList.remove('hide');


  console.log(latC, lonC)
    // Create the map.
    
    const map = new google.maps.Map(document.getElementById("map"), {
      center:{lat: latC, lng: lonC},
      zoom: 12,
      mapId: "8d193001f940fde3",
    });

  
}
});


 window.initMap = initMap;
  
    