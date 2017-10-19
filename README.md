# Friend Finder

## Description

FriendFinder implements friend-matching based on the user's responses to a ten survey questions. The user responds to questions with values from "1 - (Strongly Disagree)" to "5 - (Strongly Agree)". When submitted, an existing user with responses that closest resemble the user is found and returned. 

FriendFinder is implemented using a [Node.js](https://nodejs.org/en/) and [Express](https://expressjs.com/).

## Demo
	
The FriendFinder demo can be found [here](https://glacial-citadel-82763.herokuapp.com/).

## Installation

To run the application locally, first clone this repository with the following command:

	git clone https://github.com/akelley/FriendFinder.git
	
Then, install the application dependencies:

	cd FriendFinder
	npm install
	
Next, run the node server locally.

	node server.js
	
Finally, open the local application on port 8080 at the URL: `http://localhost:8080/`.
