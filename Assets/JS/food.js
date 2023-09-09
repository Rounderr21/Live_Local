let listContainer = document.getElementById('Image');
let foodButton = document.getElementById('button');


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

let map;
let service;
let infowindow;

function initMap(latitude, longitude) {
  // Create the map.
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: latitude, lng: longitude },
    zoom: 15,
  });

  const request = {
    location: new google.maps.LatLng(latitude, longitude),
    radius: 3000, // Search radius in meters (adjust as needed)
    keyword: "food", // You can specify a keyword like "food" or "restaurant"
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, (results, status) => {
    console.log("Status:", status);
    if (status === google.maps.places.PlacesServiceStatus.OK && results) {
      console.log("Results:", results);

      for (let i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }

      map.setCenter(results[0].geometry.location);
    }
  });
}

function createMarker(results) {
  if (!results.geometry || !results.geometry.location) return;

  const marker = new google.maps.Marker({
    map,
    position: results.geometry.location,
  });

  google.maps.event.addListener(marker, "click", () => {
    const name = results.name;
    const address = results.vicinity;

    // Check if name and address are defined before creating the content string
    if (name && address) {
      // Create a link to view the location on Google Maps
      const mapLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name)},${encodeURIComponent(address)}`;
      
      // Create the content string with the link
      const contentString = `
        <strong>${name}</strong><br>
        ${address}<br>
        <a href="${mapLink}" target="_blank">View on Google Maps</a>
      `;
      
      infowindow = new google.maps.InfoWindow({
        content: contentString,
      });
      
      infowindow.open(map, marker); // Specify the marker as the anchor
      infowindow.focus(map, marker);
    }
  });
}
