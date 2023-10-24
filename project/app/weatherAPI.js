// weatherAPI.js


const apiKey = 'D5EKPFTDKD1iGU8BtL5MaRLn3cZiIDXC'; // Replace with your AccuWeather API key

async function fetchCityLocation(cityName) {
  try {
    const searchResponse = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${apiKey}&q=${cityName}`);
    if (searchResponse.ok) {
      const searchData = await searchResponse.json();
      if (searchData.length > 0) {
        const locationKey = searchData[0].Key;
        return locationKey;
      }
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function fetchWeatherData(locationKey) {
  try {
    const weatherResponse = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`);
    if (weatherResponse.ok) {
      const weatherData = await weatherResponse.json();
      return weatherData[0]; // Assume the first entry is the current condition
    }
    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export { fetchCityLocation, fetchWeatherData };
