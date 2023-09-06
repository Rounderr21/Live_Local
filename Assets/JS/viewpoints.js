// Initialize variables
const modal = document.getElementById("modal");
const locationForm = document.getElementById("location-form");

const carousel = document.getElementById("carousel");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const carouselImage = document.getElementById("carousel-image");
const imageDescription = document.getElementById("image-description");

const carousel2 = document.getElementById("carousel2");
const prevBtn2 = document.getElementById("prev2");
const nextBtn2 = document.getElementById("next2");
const carouselImage2 = document.getElementById("carousel-image2");
const imageDescription2 = document.getElementById("image-description2");

const directionsButton = document.getElementById("directions-button");
const directionsButton2 = document.getElementById("directions-button2");
const directionsSection = document.getElementById("directions-section");

// Image URLs for the first carousel
const imageUrls = [
  'assets/images/IMG_2388.JPG',
  'assets/images/DSC09685-HDR (1).jpg',
  'assets/images/DSC02465-HDR (1).jpg'
];

// Image descriptions for the first carousel
const imageDescriptions = [
  'Description for image 1 in Attractions',
  'Description for image 2 in Attractions',
  'Description for image 3 in Attractions'
];

// Image URLs for the second carousel
const imageUrls2 = [
  'assets/images/DSC09685-HDR (1).jpg',
  'assets/images/DSC02465-HDR (1).jpg',
  'assets/images/IMG_2388.JPG'
];

// Image descriptions for the second carousel
const imageDescriptions2 = [
  'Description for image 1 in Viewpoints',
  'Description for image 2 in Viewpoints',
  'Description for image 3 in Viewpoints'
];

let currentImageIndex = 0;
let currentImageIndex2 = 0;

// Function to show the current image and description in the first carousel
function showCurrentImage() {
  carouselImage.src = imageUrls[currentImageIndex];
  imageDescription.textContent = imageDescriptions[currentImageIndex];
}

// Function to show the current image and description in the second carousel
function showCurrentImage2() {
  carouselImage2.src = imageUrls2[currentImageIndex2];
  imageDescription2.textContent = imageDescriptions2[currentImageIndex2];
}

// Event Listener for form submission
locationForm.addEventListener("submit", (e) => {
  e.preventDefault();
  modal.classList.add("hidden");
  carousel.classList.remove("hidden");
  carousel2.classList.remove("hidden");
  showCurrentImage();
  showCurrentImage2();
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

// Show the directions section when the button is clicked
directionsButton.addEventListener("click", () => {
  directionsSection.classList.remove("hidden");
});

directionsButton2.addEventListener("click", () => {
  directionsSection.classList.remove("hidden");
});