const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector("#search-button");
const cityElem = document.querySelector(".city");
const humidityElem = document.querySelector(".humidity");
const tempElem = document.querySelector(".temp");

const data = {
  tehran: { temp: 21, humidity: 12, country: "Iran" },
  tabriz: { temp: 11, humidity: 4, country: "Iran" },
  mashhad: { temp: 17, humidity: 13, country: "Iran" },
  shiraz: { temp: 19, humidity: 9, country: "Iran" },
  gorgan: { temp: 35, humidity: 18, country: "Iran" },
};

function showCityWeather() {
  const city = cityInput.value;
  const weather = data[city.toLowerCase()]; // TABriz -> tabriz

  if (weather) {
    // weather !== undefined
    cityElem.innerHTML = `${city}, ${weather.country}`;
    humidityElem.innerHTML = `Humidity: ${weather.humidity}%`;
    tempElem.innerHTML = weather.temp;
  }
}

searchButton.addEventListener("click", showCityWeather);
