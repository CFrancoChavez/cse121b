import { fetchWeatherData } from './weatherAPI2.js';

const citiesList = document.querySelector('.cities');
const cardsContainer = document.querySelector('.cards');
const weatherDataArray = [];

// Create an array of cities with their names, latitude, and longitude
const cities = [
  { name: 'Cordoba, Argentina', latitude: -31.416668, longitude: -64.183334 },
  { name: 'New York, USA', latitude: 40.712776, longitude: -74.005974 },
  { name: 'Punta del Este, Uruguay', latitude: -34.968871, longitude: -54.949142 },
  { name: 'Idaho, USA', latitude: 44.068202, longitude: -114.742043 }
];

document.querySelector('#query-button').addEventListener('click', async () => {
  const cityName = citiesList.children.length + 1;
  if (cityName <= cities.length) {
    const city = cities[cityName - 1];
    const weatherData = await fetchWeatherData(city.latitude, city.longitude);
    if (weatherData) {
      displayWeatherData(city.name, weatherData);
    } else {
      displayErrorMessage('Weather data not found');
    }
  }
});

function displayWeatherData(cityName, data) {
  const li = document.createElement('li');
  li.textContent = `${cityName} - Temperature: ${data.Temperature.Metric.Value}°C`;

  // Create a card element
  const card = document.createElement('li');
  card.classList.add('card');

  // Populate the card with data
  card.innerHTML = `
    <h2>${cityName}</h2>
    <p>Temperature: ${data.Temperature.Metric.Value}°C</p>
  `;

  citiesList.appendChild(li);
  cardsContainer.appendChild(card);
}

function displayErrorMessage(message) {
  const msg = document.querySelector('.msg');
  msg.textContent = message;
  setTimeout(() => {
    msg.textContent = '';
  }, 3000);
}
