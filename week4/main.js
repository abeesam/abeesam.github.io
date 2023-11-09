// Step 1: Get your API key from OpenWeatherMap
const apiKey = 'your_api_key_here'; // Replace with your actual API key

// Step 2: Create variables to store references
const cityInput = document.getElementById('cityInput');
const btn = document.getElementById('btn');
const weatherInfo = document.getElementById('weather-info');

// Step 3: Add an event listener to the button
btn.addEventListener('click', () => {
    // Step 4: Get the value of the input field
    const cityName = cityInput.value;

    if (cityName.trim() === '') {
        alert('Please enter a city name');
        return;
    }

    // Step 5: Make an HTTP request to OpenWeatherMap API
    const url = https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey};

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Step 7: Parse and update weather info div
            const weatherDetails = `
                <p>Weather: ${data.weather[0].description}</p>
                <p>Temperature: ${data.main.temp} &#8451;</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
            weatherInfo.innerHTML = weatherDetails;
        })
        .catch(error => {
            // Step 6: Error handling
            console.error('Error fetching data:', error.message);
            // Handle different types of errors here
        });
});