
## Content Feed Application
This repository contains the source code for a full-stack application designed to retrieve and display content from a private API, transforming and rendering it in a user-friendly manner similar to popular apps like MoneyLion or Instagram.

## Functionality

This is a page similar to MoneyLion or Instagram where we can see posts from different users. I added a tooltip on the avatar to display the complete name of the user. Additionally, users can click on the collapse button to view all the comments they received on their post, along with the number of likes for each comment. If a user clicks the collapse button again, the comments collapse.
We have the funcionality to read more if the text of the post is to long and again display less text if the user wants

One challenge in this code was implementing the "...read more" functionality to display only a portion of the text instead of the entire content. I addressed this by implementing validations, including checking the length of the text and adding a state to toggle between showing more or less text.

## Objective
The objective of this coding challenge is to demonstrate proficiency in full-stack development, including backend processing, API integration, and frontend development. The challenge focuses on connecting to a private API, processing data efficiently on the backend, and presenting it in a content feed format on the frontend.

## Tools and libraries
I used materil ui to desgin the styles and some icons
Typescript to type the functions and variables

## GET content cards
I created a get request that can recive a query param to order asc or desc by priority
this endpoint return an array of ContentCardType and we use this on the Home component 
using a Server Side Component to load the cards

## Test
I created test to validate the card component clicking the expand button to see the comments of each post, also validate the title and subtitle

To run the test:

yarn test

## Getting Started

To install dependencies:

yarn install

First, run the development server:

yarn run dev

Created by Ricardo Reyes
