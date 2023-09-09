
const locationForm = document.getElementById("location-form");
const directionsSection = document.getElementById("directions-section");
const directionsButton = document.getElementById("directions-button");
const directionsButton2 = document.getElementById("directions-button2");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const prevBtn2 = document.getElementById("prev2");
const nextBtn2 = document.getElementById("next2");


// Variables for Google Maps and Places API
let currentImageIndex = 0; 
let currentImageIndex2 = 0; 
let map;
let service;
let infowindow;
let directionsService;
let directionsRenderer;
let imagePlaceIds = [];



// Adjusting the image arrays to be dynamic based on Google Maps results
let imageUrls = [];
let imageDescriptions = [];

let imageUrls2 = [];
let imageDescriptions2 = [];

// Replace these coordinates with the user's coordinates

const latitude = JSON.parse(localStorage.getItem('latitude'));
const longitude = JSON.parse(localStorage.getItem('longitude'));
let userLocation = { lat: latitude, lng: longitude };  // Example: San Francisco

// Initializes Google Maps and searches for nearby attractions
function initMap() {
  infowindow = new google.maps.InfoWindow();
  map = new google.maps.Map(document.createElement("div"));
  directionsService = new google.maps.DirectionsService();
directionsRenderer = new google.maps.DirectionsRenderer();
directionsRenderer.setMap(map);

  // Searching for tourist attractions
  let attractionsRequest = {
      location: userLocation,
      radius: '5000',   // Searching within a 5km radius
      type: ['tourist_attraction']  
  };

  // Searching for viewpoints or hiking trails 
  let viewpointsRequest = {
      location: userLocation,
      radius: '5000',   // Searching within a 5km radius
      type: ['viewpoint', 'park']  
  };

  service = new google.maps.places.PlacesService(map);
  service.nearbySearch(attractionsRequest, attractionsCallback);
  service.nearbySearch(viewpointsRequest, viewpointsCallback);
}
function calculateAndDisplayRoute(startCoords, destinationPlaceId) {
  directionsService.route(
    {
      origin: startCoords,
      destination: { placeId: destinationPlaceId },
      travelMode: 'DRIVING'
    },
    (response, status) => {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    }
  );
}
function attractionsCallback(results, status) {
if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (let i = 0; i < results.length; i++) {
        let place = results[i];
        if (place.photos && place.photos.length > 0) {
          imageUrls.push(place.photos[0].getUrl());
          imageDescriptions.push(place.name);
          imagePlaceIds.push(place.place_id);
      }
    }
    showCurrentImage();
}
}

function viewpointsCallback(results, status) {
if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (let i = 0; i < results.length; i++) {
        let place = results[i];
        if (place.photos && place.photos.length > 0) {
            imageUrls2.push(place.photos[0].getUrl());
            imageDescriptions2.push(place.name);
            imagePlaceIds.push(place.place_id);
        }
    }
    showCurrentImage2();
}
}
function showCurrentImage() {
  const carouselImage = document.getElementById("carousel-image");
  const imageDescription = document.getElementById("image-description");

  carouselImage.src = imageUrls[currentImageIndex];
  imageDescription.textContent = imageDescriptions[currentImageIndex];
}

function showCurrentImage2() {
  const carouselImage2 = document.getElementById("carousel-image2");
  const imageDescription2 = document.getElementById("image-description2");

  carouselImage2.src = imageUrls2[currentImageIndex2];
  imageDescription2.textContent = imageDescriptions2[currentImageIndex2];
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (let i = 0; i < results.length; i++) {
          let place = results[i];
          if (place.photos && place.photos.length > 0) {
              imageUrls.push(place.photos[0].getUrl());
              imageDescriptions.push(place.name);
          }
      }
      showCurrentImage();
  }
}



// Event Listener for form submission
locationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    modal.classList.add("hidden");
    carousel.classList.remove("hidden");
    carousel2.classList.remove("hidden");
    initMap();   // Initialize Google Maps and fetch nearby attractions
});


// Event Listener for Previous Button in the first carousel
prevBtn.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex - 1 + imageUrls.length) % imageUrls.length;
  showCurrentImage();
});

// Event Listener for Previous Button in the second carousel
prevBtn2.addEventListener("click", () => {
  currentImageIndex2 = (currentImageIndex2 - 1 + imageUrls2.length) % imageUrls2.length;
  showCurrentImage2();
});

// Event Listener for Next Button in the first carousel
nextBtn.addEventListener("click", () => {
  currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
  showCurrentImage();
});

// Event Listener for Next Button in the second carousel
nextBtn2.addEventListener("click", () => {
  currentImageIndex2 = (currentImageIndex2 + 1) % imageUrls2.length;
  showCurrentImage2();
});

document.getElementById("directions-button").addEventListener("click", () => {
  directionsSection.classList.remove("hidden");
  calculateAndDisplayRoute(userLocation, imagePlaceIds[currentImageIndex]);
  google.maps.event.trigger(map, 'resize'); // add this line
});

document.getElementById("directions-button2").addEventListener("click", () => {
  directionsSection.classList.remove("hidden");
  calculateAndDisplayRoute(userLocation, imagePlaceIds[currentImageIndex2]);
  google.maps.event.trigger(map, 'resize'); // and this line
});
