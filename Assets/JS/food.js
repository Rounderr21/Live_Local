let listContainer = document.getElementById('Image');
let foodButton = document.getElementById('button');
let mapContainer = document.getElementById('map');


// Attach the event listener to the foodButton
foodButton.addEventListener('click', function () {
  const latitude = JSON.parse(localStorage.getItem('latitude'));
  const longitude = JSON.parse(localStorage.getItem('longitude'));
  initMap(latitude, longitude);
});

let list = document.createElement('div');
list.setAttribute('id', 'listLocalEats');

let clickLink = document.createElement('li');
list.setAttribute('id', 'list');

listContainer.append(list);
list.append(clickLink);

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
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

// Define initMap globally
function initMap(latitude, longitude) {
  // Create the map.
  mapContainer.style.display = 'block';
  console.log(latitude);

  console.log(longitude);
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: latitude, lng: longitude },
    zoom: 12,
    mapId: "8d193001f940fde3",
  });
}