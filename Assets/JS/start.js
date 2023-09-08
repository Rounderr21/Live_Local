const locateBtn = document.querySelector('#startScrn');
const titleEl = document.querySelector('.title')



let latC;
let lonC;

locateBtn.addEventListener('click', function(){

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
  window.location.assign(index.html);
});

function showPosition(position) {
 latC =  parseFloat(position.coords.latitude); 
 lonC = parseFloat(position.coords.longitude);
 
 console.log(latC, lonC);
};

const latitude = latC;
const longitude = lonC;

module.exports = latitude, longitude;