const API = "e594f5869719e24b7089dcc31a97c76f"; //Put your API in here
const cityName = document.querySelector("input");
const button = document.querySelector("button");

async function dataFecth() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${API}&units=metric`
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
      `https://api.openweathermap.org/data/2.5/forecast?q=${cityName.value}&appid=${API}&units=metric`
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    displayForeCast(data);
    cityName.value = "";
  } catch (error) {
    console.error("ForeCast Me Error Aya:", error);
  }
}

function handleEvent() {
  if (cityName.value.trim() === "") {
    alert("Enter City Name");
  } else {
    button.disabled = true;
    button.textContent = "Loading...";
    Promise.all([dataFecth(), fetchForeCast()]).finally(() => {
      button.disabled = false;
      button.textContent = "Search";
    });
  }
}
button.addEventListener("click", handleEvent);
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && document.activeElement === cityName) {
    handleEvent();
  }
});

function displayCurrentData(data) {
  const currentWeather = document.querySelector(".current-weather");
  currentWeather.innerHTML = `
    <h1 id="cityName">${cityName.value}</h1>
    <div class="temp">
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png">
    <p>${data?.main?.temp}°C</p>
    </div>
    <div class="extraInfo">
    <p>${data.weather[0].main}</p>
    <p>Feels Like ${data.main.feels_like} °C</p>
    </div>
  `;
  currentWeather.classList.add("show");
}

function displayForeCast(data) {
  const weatherForeCast = document.querySelector(".weather-forecast");
  weatherForeCast.innerHTML = "";
  for (let i = 5; i < data.list.length; i += 8) {
    let date = new Date(data.list[i].dt * 1000).toLocaleDateString("en-In", {
      day: "numeric",
      month: "short",
    });
    weatherForeCast.innerHTML += `
    <div id="detail" class="flex">
    <p>${date}</p>
    <img src="${`https://openweathermap.org/img/wn/${data.list[i].weather[0].icon}.png`}">
    <p>${data.list[i]?.main?.temp} °C</p>
    </div>
    `;
  }
  weatherForeCast.classList.add("show");
}
