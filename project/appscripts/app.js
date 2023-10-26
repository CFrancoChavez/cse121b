
import { fetchWeatherData } from './weatherAPI2.js';

const citiesList = document.querySelector('.cities');
const cardsContainer = document.querySelector('.cards');
const weatherDataArray = [];
let currentIndex = 0; // Initialize the current index

// Create an array of cities with their names, latitude, and longitude
const cities = [
  { name: 'Cordoba, Argentina', latitude: -31.416668, longitude: -64.183334 },
  { name: 'New York, USA', latitude: 40.712776, longitude: -74.005974 },
  { name: 'Punta del Este, Uruguay', latitude: -34.968871, longitude: -54.949142 },
  { name: 'Idaho, USA', latitude: 44.068202, longitude: -114.742043 }
];

// Function to shuffle the array randomly
function shuffleArray(array) {
  array.forEach((_, i) => {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  });
}

document.querySelector('#query-button').addEventListener('click', async () => {
  if (currentIndex < cities.length) {
    shuffleArray(cities); // Shuffle the cities array randomly
    const city = cities[currentIndex];
    const weatherData = await fetchWeatherData(city.latitude, city.longitude);
    if (weatherData) {
      displayWeatherData(city.name, weatherData);
      selectCard(currentIndex);
      currentIndex++; // Increment the current index
    } else {
      displayErrorMessage('Weather data not found');
    }
  }
  if (currentIndex >= cities.length) {
    // Disable the query button if all cities have been queried
    document.querySelector('#query-button').disabled = true;
  }
});

document.querySelector('#reset-button').addEventListener('click', () => {
  // Clear the results on the screen and reset the current index
  currentIndex = 0;
  citiesList.innerHTML = '';
  cardsContainer.innerHTML = '';
  document.querySelector('#query-button').disabled = false; // Re-enable the query button
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

function selectCard(index) {
  const cards = document.querySelectorAll('.card');
  cards[index].classList.add('selected');
}

function displayErrorMessage(message) {
  const msg = document.querySelector('.msg');
  msg.textContent = message;
  setTimeout(() => {
    msg.textContent = '';
  }, 3000);
}
