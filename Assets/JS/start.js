const locateBtn = document.querySelector('#startScrn');
const titleEl = document.querySelector('.title')

let latC;
let lonC;

locateBtn.addEventListener('click', function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      latC = parseFloat(position.coords.latitude);
      lonC = parseFloat(position.coords.longitude);
      JSON.stringify(localStorage.setItem('latitude', latC));
      JSON.stringify(localStorage.setItem('longitude', lonC));
      console.log(latC, lonC);

      // Now that you have the location, you can redirect to the next page.
      window.location.href = "home-page.html";
    });
  } else {
    // Handle the case where geolocation is not supported by the browser.
    alert("Geolocation is not supported by this browser.");
  }
});