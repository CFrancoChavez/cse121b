// app.js
import { fetchCityLocation, fetchWeatherData } from './weatherAPI.js';

const form = document.querySelector('form');
const input = form.querySelector('input');
const msg = form.querySelector('.msg');
const citiesList = document.querySelector('.cities');
// const lastSearchesList = document.querySelector('.last-searches');
const lastSearchesList = document.querySelector('.ajax-section');
const cardsContainer = document.querySelector('.cards');
const weatherDataArray = [];

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const cityName = input.value.trim();
  if (cityName) {
    const locationKey = await fetchCityLocation(cityName);
    if (locationKey) {
      const weatherData = await fetchWeatherData(locationKey);
      if (weatherData) {
        displayWeatherData(cityName, weatherData);
        addToWeatherDataArray(cityName, weatherData);
        displayLastSearches();
      } else {
        displayErrorMessage('Weather data not found');
      }
    } else {
      displayErrorMessage('City not found');
    }
  }
  input.value = '';
});

// Display weather data
function displayWeatherData(cityName, data) {
  
  const cityElement = document.querySelector(".city-name");
  const tempElement = document.querySelector(".city-temp");
  const iconElement = document.querySelector(".city-icon");
  const descriptionElement = document.querySelector("figcaption");

  cityElement.textContent = cityName;
  tempElement.textContent = `${data.Temperature.Metric.Value}°C`;
  iconElement.src = `https://www.accuweather.com/images/weathericons/${data.WeatherIcon}.svg`;
  descriptionElement.textContent = data.WeatherText;
  

  // Add the city to the list
  const li = document.createElement('li');
  li.textContent = cityName;
  citiesList.appendChild(li);
}

function addToWeatherDataArray(cityName, data) {
  // Add the data to the array
  
  weatherDataArray.push({ city: cityName, data });

  // Check if the array has more than 5 entries and remove the oldest entry
  if (weatherDataArray.length > 5) {
    weatherDataArray.shift();
  }
}


// Code for cards 
function displayLastSearches() {
  // Clear the existing content in both lists
  lastSearchesList.innerHTML = '';
  cardsContainer.innerHTML = '';

  const last4Searches = weatherDataArray.slice(-4);
  last4Searches.forEach(({ city, data }) => {
    // Create a new list item
    const li = document.createElement('li');
    li.textContent = city;

    // Create a card element
    const card = document.createElement('li');
    card.classList.add('card');

    // Populate the card with data
    card.innerHTML = `
      <h2>${city}</h2>
      <p>Temperature: ${data.Temperature.Metric.Value}°C</p>
      <p>Weather: ${data.WeatherText}</p>
      <img src="https://www.accuweather.com/images/weathericons/${data.WeatherIcon}.svg" alt="Weather Icon">
    `;

    // Append the list item to the last searches list
    lastSearchesList.appendChild(li);

    // Append the card to the card container
    cardsContainer.appendChild(card);
  });

  // If there are more than 4 items in the array, remove the oldest search
  while (weatherDataArray.length > 4) {
    weatherDataArray.shift();
  }
}


function displayErrorMessage(message) {
  msg.textContent = message;
  setTimeout(() => {
    msg.textContent = '';
  }, 3000);
}

