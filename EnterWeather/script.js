document.getElementById('cityForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent form submission

    const cityInput = document.getElementById('cityInput').value;
    getWeather(cityInput);
});

function getWeather(city) {
    const apiKey = 'bf733387ae12e236333921a2d4301ada'; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
        });
}

function displayWeather(data) {
    const weatherOutput = document.getElementById('weatherOutput');

    const cityName = data.name;
    const temperature = Math.round(data.main.temp - 273.15); // Convert Kelvin to Celsius
    const humidity = data.main.humidity;
    const weatherDescription = data.weather[0].description;
    const clouds = data.clouds.all;
    const windSpeed = data.wind.speed;
    const uvIndex = "Not available"; // UV index might not be available in this API
    const rainProbability = "0 mm"; // Rain probability might not be available in this API

    weatherOutput.innerHTML = `
        <p>Weather in ${cityName}:</p>
        <p>Temperature: ${temperature}°C</p>
        <p>Humidity: ${humidity}%</p>
        <p>Description: ${weatherDescription}</p>
        <p>Clouds: ${clouds}%</p>
        <p>Wind Speed: ${windSpeed} m/s</p>
        <p>UV Index: ${uvIndex}</p>
        <p>Rain Probability (last 1 hour): ${rainProbability}</p>
    `;
}

