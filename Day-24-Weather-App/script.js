const API = "e594f5869719e24b7089dcc31a97c76f"; //Put your API in here
let cityName = document.querySelector("input");

async function dataFecth() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${API}`
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    displayCurrentData(data);
  } catch (error) {
    console.error("Error aa gya:", error);
  }
}

async function fetchForeCast() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName.value}&appid=${API}`
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    getForeastData(data);
    cityName.value = "";
  } catch (error) {
    console.error("ForeCast Me Error Aya:", error);
  }
}

document.querySelector("button").addEventListener("click", () => {
  dataFecth();
  fetchForeCast();
});

function displayCurrentData(data) {
  const currentWeather = document.querySelector(".current-weather");
  currentWeather.innerHTML = `
    <p id="currTime">Current Weather</p>
    <div class="temp">
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png">
    <span>${Number(data?.main?.temp - 273.15).toFixed(2)}°C</span>
    </div>
    <div class="extraInfo">
    <p>${data.weather[0].main}</p>
    <p>Feels Like ${Number(data.main.feels_like - 273.15).toFixed(2)} °C</p>
    </div>
  `;
  const inputVal = document.querySelector(".inputVal");
  inputVal.textContent = cityName.value;
}

function getForeastData(data) {
  const arr = [];
  for (let i = 5; i < data.list.length; i += 8) {
    arr.push(data?.list[i]);
  }
  displayForeCast(arr);
}

function displayForeCast(data) {
  const weatherForeCast = document.querySelector(".weather-forecast");
  const description = document.querySelector(".description");
  const p = document.createElement("p");
  p.id = "check";
  p.textContent = `5 Day Weather Forecast for city ${cityName.value}`;
  description.appendChild(p);
  for (let i = 0; i < data.length; i++) {
    let date = new Date(data[i].dt * 1000).toLocaleDateString("en-In", {
      day: "numeric",
      month: "short",
    });
    weatherForeCast.innerHTML += `
    <div id="detail">
    <p>${date}</p>
    <img src="${`https://openweathermap.org/img/wn/${data[i].weather[0].icon}.png`}">
    <p>${Number(data[i]?.main?.temp - 273.15).toFixed(2) + "°C"}</p>
    </div>
    `;
  }
}
