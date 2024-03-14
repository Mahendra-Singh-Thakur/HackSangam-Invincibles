const readline = require('readline');
const nodemailer = require('nodemailer');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function formatTime(timestamp) {
    const dtObject = new Date(timestamp * 1000);
    return dtObject.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
}

async function getWeatherData(city) {
    const apiKey = "bf733387ae12e236333921a2d4301ada";  // Replace with your OpenWeatherMap API key
    const baseUrl = "http://api.openweathermap.org/data/2.5/weather";
    const params = {
        q: city,
        appid: apiKey,
        units: "metric"
    };

    const response = await fetch(`${baseUrl}?${new URLSearchParams(params)}`);
    const data = await response.json();

    if (response.status === 200) {
        const temperature = data.main.temp;
        const humidity = data.main.humidity;
        const description = data.weather[0].description;
        const clouds = data.clouds.all;
        const windSpeed = data.wind.speed;
        const uvIndex = data.uv_index || "Not available";
        const sunriseTime = formatTime(data.sys.sunrise);
        const sunsetTime = formatTime(data.sys.sunset);
        const rainProbability = data.rain ? data.rain['1h'] : 0;

        const forecastUrl = "http://api.openweathermap.org/data/2.5/forecast";
        const forecastParams = {
            q: city,
            appid: apiKey,
            units: "metric"
        };
        const forecastResponse = await fetch(`${forecastUrl}?${new URLSearchParams(forecastParams)}`);
        const forecastData = await forecastResponse.json();

        const dateTempMap = {};
        forecastData.list.forEach(forecast => {
            const forecastDate = new Date(forecast.dt * 1000).toISOString().split('T')[0];
            const forecastTemperature = forecast.main.temp;
            if (dateTempMap[forecastDate]) {
                dateTempMap[forecastDate].push(forecastTemperature);
            } else {
                dateTempMap[forecastDate] = [forecastTemperature];
            }
        });

        let forecastMessage = "";
        for (const [date, temps] of Object.entries(dateTempMap)) {
            const avgTemp = temps.reduce((sum, temp) => sum + temp, 0) / temps.length;
            forecastMessage += `Average Temperature for ${date}: ${avgTemp}°C\n`;
        }

        return `Weather in ${city}:\n` +
               `Temperature: ${temperature}°C\n` +
               `Humidity: ${humidity}%\n` +
               `Description: ${description}\n` +
               `Clouds: ${clouds}%\n` +
               `Wind Speed: ${windSpeed} m/s\n` +
               `UV Index: ${uvIndex}\n` +
               `Rain Probability (last 1 hour): ${rainProbability} mm\n` +
               `${forecastMessage}`;
    } else {
        return "Failed to retrieve weather data.";
    }
}

async function emailAlert(subject, body, to) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'agrisol.for.farmer@gmail.com',
            pass: 'kotp hbot mnxb geem'
        }
    });

    const mailOptions = {
        from: 'agrisol.for.farmer@gmail.com',
        to: to,
        subject: subject,
        text: body
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ', info.messageId);
    } catch (error) {
        console.error('Error sending email: ', error);
    }
}

async function main() {
    rl.question('Enter the city name: ', async (city) => {
        const weatherData = await getWeatherData(city);
        await emailAlert('Weather Forecast', weatherData, 'thakurmahendrasingh907@gmail.com');
        rl.close();
    });
}

main();
