//change this code again as I removed image and now it will be under the hula pie image

let listContainer = document.getElementById('Image');
let foodButton = document.getElementById('button');

// Retrieve values from local storage
const latitude = localStorage.getItem('latitude');
const longitude = localStorage.getItem('longitude');

// Now you can use latitude and longitude in your script
console.log(latitude, longitude);


function clickButton(){

foodButton.addEventListener('click', function(){

  //once the button is clicked it will use google maps to find places that are close that have food in them//


})


let list = document.createElement('div');
list.setAttribute('id', 'listLocalEats');

let clickLink = document.createElement('li');
list.setAttribute('id', 'list');

listContainer.append(list);
list.append(clickLink);

}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}







const locateBtn = document.getElementById('locationBtn');
const placesBtn = document.getElementById('more');
let mapArea = document.getElementById('map');
let x = document.getElementById("demo");
let latC;
let lonC;

locateBtn.addEventListener('click', function(){
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
  mapArea.style.display = 'block';
});

function showPosition(position) {
 latC =  parseFloat(position.coords.latitude);
 lonC = parseFloat(position.coords.longitude);
 console.log(latC, lonC);
 initMap(latC, lonC);
};


function initMap(latC,lonC) {
    // Create the map.
    const map = new google.maps.Map(document.getElementById("map"), {
      center:{lat: latC, lng: lonC},
      zoom: 12,
      mapId: "8d193001f940fde3",
    });
}

 window.initMap = initMap;