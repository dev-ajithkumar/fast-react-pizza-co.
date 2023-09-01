# Fast React Pizza Co. Readme

Welcome to Fast React Pizza Co.! This is a beginner-friendly guide on how to set up and understand the code for our pizza ordering web application. In this document, we'll go through the code step by step and explain its functionality.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Application Structure](#application-structure)
- [Components](#components)
  - [App](#app)
  - [Header](#header)
  - [Menu](#menu)
  - [Pizza](#pizza)
  - [Footer](#footer)
  - [Order](#order)

## Introduction

Fast React Pizza Co. is a web application built with React that allows users to browse our delicious pizza menu and place orders. The code provided in the snippet is a simplified version of our application.

## Installation

To run this application on your local machine, follow these steps:

1. Ensure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (Node Package Manager) installed on your computer.

2. Clone this repository or download the code snippet.

3. Open a terminal/command prompt and navigate to the project directory.

4. Install the project dependencies by running the following command:

   ```
   npm install
   ```

5. Start the development server:

   ```
   npm start
   ```

6. The application should now be running locally. Open your web browser and go to `http://localhost:3000` to see the pizza menu.

## Application Structure

The code is structured into several React components, each responsible for a specific part of the application. Let's briefly explain each component:

## Components

### App

The `App` component serves as the main container for our application. It renders the `Header`, `Menu`, and `Footer` components.

### Header

The `Header` component displays the restaurant's name, "Fast React Pizza Co."

### Menu

The `Menu` component is responsible for rendering the pizza menu. It uses data from the `pizzaData` array to display information about each pizza, including its name, ingredients, price, and availability.

### Pizza

The `Pizza` component represents an individual pizza item in the menu. It displays the pizza's image, name, ingredients, price, and availability (whether it's sold out or not).

### Footer

The `Footer` component displays information about the restaurant's operating hours. It checks the current time to determine whether the restaurant is open or closed.

### Order

The `Order` component is displayed in the footer and provides information about the restaurant's hours and the option to place an order.

This code snippet provides a foundation for a pizza ordering application. You can further customize and expand the application to include features like ordering functionality and payment processing.

Enjoy building your pizza ordering application with React! If you have any questions or need assistance, feel free to reach out to us.

Thank you for choosing Fast React Pizza Co.! 🍕🍕🍕
