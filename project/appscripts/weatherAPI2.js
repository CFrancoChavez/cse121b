async function fetchWeatherData(latitude, longitude) {
  try {
    const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&forecast_days=1`;
    const weatherResponse = await fetch(apiUrl);

    if (weatherResponse.ok) {
      const weatherData = await weatherResponse.json();
      if (weatherData.hourly && weatherData.hourly.temperature_2m) {
        return {
          Temperature: {
            Metric: {
              Value: weatherData.hourly.temperature_2m[0],
            },
          },
          WeatherIcon: 1, 
          WeatherText: 'Weather description', 
        };
      }
    }

    return null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export { fetchWeatherData };
