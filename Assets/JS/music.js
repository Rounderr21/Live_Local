let artistone = document.getElementById('artist1');


document.getElementById('musicButton1').addEventListener('click', function() {
    fetchRecommendations('hip-hop'); // Pass 'hip-hop' as the genre to filter by
});

function fetchRecommendations(genre) {
    // Check if genre is empty
    if (!genre) {
        $('#recommendedSongs').html('<p>hip-hop</p>');
        return;
    }}

    document.getElementById('musicButton2').addEventListener('click', function() {
        fetchRecommendations('rnb'); // Pass 'rnb' as the genre to filter by
    });

    document.getElementById('musicButton3').addEventListener('click', function() {
        fetchRecommendations('country'); // Pass 'country' as the genre to filter by
    });


// Function to shuffle an array using Fisher-Yates shuffle algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function fetchRecommendations(inputValue) {
    // Check if inputValue is empty
    if (!inputValue) {
        $('#recommendedSongs').html('<p>Please type a song.</p>');
        return;
    }

    // Construct the URL for the recommendations API
    const recommendationsApiUrl = `https://shazam.p.rapidapi.com/songs/list-recommendations?key=484129036&locale=en-US&query=${encodeURIComponent(inputValue)}`;

    const settingsRecommendations = {
        async: true,
        crossDomain: true,
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b821e2c83amsh122400748d1a0cfp149f7djsnd9f32b4fe43c',
            'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
        },
        url: recommendationsApiUrl
    };

    // Keep track of unique artists
    const uniqueArtists = new Set();
    let artistsCount = 0;

    $('#recommendedSongs1, #recommendedSongs2, #recommendedSongs3').empty();
    uniqueArtists.clear();

    $.ajax(settingsRecommendations).done(function (recommendationsResponse) {
        console.log(recommendationsResponse);

        // Display recommendations details in the artist card
        if (recommendationsResponse && recommendationsResponse.tracks && recommendationsResponse.tracks.length > 0) {
            // Shuffle the recommendations
            shuffleArray(recommendationsResponse.tracks);

            // Keep track of the number of recommendations added
            let artistsCount = 0;

            // Iterate through the shuffled recommendations and display each one, but limit it to the first 3 unique artists
            for (let i = 0; i < recommendationsResponse.tracks.length; i++) {
                const recommendation = recommendationsResponse.tracks[i];
                const recommendationTitle = recommendation.title;
                const recommendationArtist = recommendation.subtitle;

                // Check if the artist is not a duplicate
                if (!uniqueArtists.has(recommendationArtist)) {
                    uniqueArtists.add(recommendationArtist);
                    artistsCount++;

                    // Append each recommendation to the appropriate "recommendedSongs" div
                    $(`#recommendedSongs${artistsCount}`).append(`
                        <div class="recommended-song">
                            <p>Artist: ${recommendationArtist}</p>
                            <p>Title: ${recommendationTitle}</p>
                        </div>
                    `);

                    // Stop adding recommendations after 3 unique artists
                    if (artistsCount === 3) {
                        break;
                    }
                }
            }
        } else {
            // Display a message if no recommendations are available
            $('#recommendedSongs').html('<p>No recommendations available.</p>');
        }

        // Show all artist cards
        $('#artist1, #artist2, #artist3').removeClass('hidden');
    }).fail(function (error) {
        // Handle AJAX request errors for recommendations
        console.error('Error fetching recommendations:', error);
        $('#recommendedSongs').html('<p>Unable to fetch recommendations.</p>');
        // Show all artist cards even if recommendations fail
        $('#artist1, #artist2, #artist3').removeClass('hidden');
    });
}

// Function to show artist cards and fetch recommendations
function showArtistCards() {
    var inputField = document.getElementById("searchInput");
    var inputValue = inputField.value.trim();

    if (inputValue === "") {
        inputField.placeholder = "Please type a song";
        return false;
    }

    // Call the function to fetch recommendations based on user input
    fetchRecommendations(inputValue);

    // Prevent the form from submitting the traditional way
    return false;
}


const dropdownButton = document.getElementById('dropdownButton');
const dropdownPanel = document.getElementById('dropdownPanel'); // Updated to match the id of the dropdown panel

dropdownButton.addEventListener('click', () => {
dropdownPanel.classList.toggle('hidden'); // Toggle the 'hidden' class to show/hide the dropdown
});

// Close the dropdown if a click occurs outside of it
document.addEventListener('click', (event) => {
if (!dropdownButton.contains(event.target) && !dropdownPanel.contains(event.target)) {
dropdownPanel.classList.add('hidden');
}
});

// Delayed animation for dropdown items
$('#dropdownButton').on('click', function() {
$('#dropdownItems a').each(function(index) {
const menuItem = $(this);
setTimeout(function() {
  menuItem.addClass('open');
}, index * 100); // Adjust the delay as needed
});
});

function updatePlaceholder(placeholderText) {
    document.getElementById("searchInput").placeholder = "Search for " + placeholderText;
}