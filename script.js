document.addEventListener("DOMContentLoaded", function() {
    const getLocationButton = document.getElementById("getLocationButton");
    
    getLocationButton.addEventListener("click", () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    alert(`Latitude: ${latitude}\nLongitude: ${longitude}`);
                },
                (error) => {
                    alert(`Error retrieving location: ${error.message}`);
                }
            );
        } else {
            alert("Geolocation is not available in this browser.");
        }
    });
});