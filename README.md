# Live Local Web App

> As a user, When I travel,
>Then I want to have one app as a resource.
>
>When I am hungry,
>Then I want the app to suggest good local eats.
>
>When I am bored,
>Then I want the app to suggest local sights.
>
>When I am in a new place,
>Then I want to discover new music to listen to.

Welcome to Live Local. Our app is designed to be a one stop resource for discovering new places in the world. The gripping start page will gather the longitude and latitude coordinates when the begin button is clicked. This allows us to use those coordinates on other pages without having to ask the user to enter data in repeatedly. The homepage is the gateway to discovery in our three categories of food, sights, and music.

The food page uses the google maps API to suggest food locations within 3000 meters of the users exact location. The map displays with markers created at the food establishments location. When the marker is clicked, an info window shows the name, address, and link to google maps. That way the user can see further information they may desire, such as the ratings, reviews, and directions.

The sights portion of our web app allows the user to discover local sights and points of interest using the google maps API. The destinations are displayed in two intuitive carousels created with the use of tailwind css. When a destination looks good, the user can click the directions button which will show a map with the quickest route to their destination.

The music portion of the app uses the shazam API. It takes the user input and suggests new music that they may not have heard before. Upon clicking the submit button, 3 modals appear with the suggested information. Again, Tailwind CSS was used to accomplish this.  The idea is to keep the destination experience alive by immersing yourself in new experiences. 


## What we learned

It was a fun challenge to work with the Google maps API. The developers worked together by first establishing a function to obtain the users coordinates, that way we can use those coordinates on the other pages. We then worked on different parts of the API for the individual pages. The places library came in handy for both the food and sights page by passing a query to the library for the desired results and giving content to the user within a certain radius of the coordinates obtained earlier. The Google API was difficult to learn but had excellent documentation that guided us. The other API the app uses is the Shazam music API. This was not the first music API attempted but it was used due to the fact that it didnt have OAuth. The Shazam API has good functionality but for future endeavors, we would like to switch music API's as noted in the goals section.

Using Github to collaborate made our project run smoothly. We set a rule right away that 2 reviewers needed to look over pull requests to maintain the integrity of our main branch. Because we had those review policies in place, we didnt run into any issues with our main branch. The communication between developers was excellent as well. 

## Goals

We have some goals for future updates to the app. A major goal is using technologies like react to create a mobile version. 

For the start page:
1. We would like the geolocator function to run faster so there isnt a big delay between grabbing coordinates and   switching to the main homepage.

For the food page:
1. We would like to implement directions so that we dont have to use an external link to google maps. This way we are more in line with our vision of being a one stop shop app.

For the music page:
1. We would like to use a music API that allows us to give more local artists that are in line with the users specific taste. 


## Screenshots

![Start Page](/Assets/Images/startPage.jpg "Start Page")

![Sights Page](/Assets/Images/sightsPage.jpg "Sights Page")


## Deployed Web App

[Live Local Web App](https://rounderr21.github.io/Live_Local/)

### Source Code

There was no starter code provided. Some code snippets were taken from API documentation. Examples on stack overflow were consulted to help with map functionality. 





