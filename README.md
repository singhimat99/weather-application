<!-- Please update value in the {}  -->

<h1 align="center">Weather App</h1>

<div align="center">
   Solution for a challenge from  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://weather-application-e0cbf.firebaseapp.com/">
      Demo
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenges/mM1UIenRhK808W8qmLWv">
      Challenge
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

-   [Overview](#overview)
    -   [Built With](#built-with)
-   [Features](#features)
-   [How to use](#how-to-use)
-   [Contact](#contact)
-   [Acknowledgements](#acknowledgements)

<!-- OVERVIEW -->

## Overview

![screenshot](https://user-images.githubusercontent.com/16707738/92399059-5716eb00-f132-11ea-8b14-bcacdc8ec97b.png)

Building this project was a great experience for me as I was learning how to use react and work with external APIs. I did not provide a perfect solution as the API that was provided had become out of date. For this reason I decided to find my own API from the rapidAPI platform and had to use that to create this app.

I started by building the layout using Sass then I moved on to the search section and made sure that I was able to search for cities all over the world. I had to implement an algorithm that would call my API after the user had stopped typing for a few milliseconds. From there I integrated the rest of the application by updating the data presented on the UI based on what city the user had searched for. At this point I had practiced my skills working with an API, creating an algorithm, and structuring data. So, I was feeling good about the app that I built so far.

Little did I know the next part would be the toughest test yet.

I had to figure out how to update the image of the weather condition programmatically based on the data coming from the API. This would have been easy had the original API worked because the image names would have matched the data coming in from the API. However, I was using a totally different API...

So I had to figure out a way to use the incoming data and match it to the appropriate picture based on the given weather condition. I had to create an algorithm to do so. I first started by searching for information that would help me group the types of weather conditions into specific pictures. For example, if the condition was "clear" I would need the picture of just the sun, and if the condition was either "cloudy" or "heavy clouds" cloudy I would need to present a picture of overcast. This was a problem because I could not code this based on the string values of the conditions that I got as it would not be very efficient. So, I spent some time researching and found condition codes that I could use to potentially group the types of weather into separate categories. From there it was a piece of cake. It was a simple value checking algorithm that gave me back the string value of the name of the picture that I needed.

Building this algorithm and finally getting it to work was the most reqwarding part of this whole project. At the end of the day I am proud of what I have learned while working on this project and hope to make many more.

### Built With

<!-- This section should list any major frameworks that you built your project using. Here are a few examples.-->

-   [React](https://reactjs.org/)
-   [Sass](https://sass-lang.com/)

## Features

<!-- List the features of your application or follow the template. Don't share the figma file here :) -->

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges) challenge. The [challenge](https://devchallenges.io/challenges/mM1UIenRhK808W8qmLWv) was to build an application that presented weather data from any city in the world.

## How To Use

<!-- Example: -->

To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/your-user-name/your-project-name

# Install dependencies
$ npm install

# Run the app
$ npm start
```

## Acknowledgements

<!-- This section should list any articles or add-ons/plugins that helps you to complete the project. This is optional but it will help you in the future. For example: -->

-   [Steps to replicate a design with only HTML and CSS](https://devchallenges-blogs.web.app/how-to-replicate-design/)
-   [Node.js](https://nodejs.org/)
-   [Marked - a markdown parser](https://github.com/chjj/marked)

## Contact

-   GitHub [@singhimat99](https://{github.com/singhimat99})
-   Twitter [@himatCodes](https://{twitter.com/himatCodes})
