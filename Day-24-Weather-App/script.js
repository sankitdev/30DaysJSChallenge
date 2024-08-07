//Selection of Elements
const currentWeather = document.querySelector(".current-weather");
const weatherForeCast = document.querySelector(".weather-forecast");
let cityName = document.querySelector("input");
const button = document.querySelector("button");
const para = document.querySelector(".currTime");
const extraInfo = document.querySelector(".extraInfo");
const API = "e594f5869719e24b7089dcc31a97c76f"; //Put your API in here

const dataFecth = async function () {
  try {
    const response = await fetch("sample_Data.json");
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    displayCurrentData(data);
  } catch (error) {
    console.error("Error aa gya:", error);
  }
};

dataFecth();

function getTime() {
  let time = new Date();
  let IndiaTime = time.toLocaleTimeString("en-In", {
    timeZone: "Asia/Kolkata",
  });
  return IndiaTime;
}
setInterval(() => {
  document.querySelector("#getTime").textContent = getTime();
}, 1000);

function displayCurrentData(data) {
  const p = document.createElement("p");
  const h1 = document.createElement("h1");
  const img = document.createElement("img");
  const mT1 = document.createElement("p");
  const mT2 = document.createElement("p");
  h1.textContent = Math.round(data?.main?.temp - 273.15) + " °C";
  p.textContent = "Current Weather";
  img.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  mT1.textContent = data.weather[0].main;
  mT2.textContent = `Feels Like ${Math.round(
    data.main.feels_like - 273.15
  )} °C`;
  // spanMain.textContent = data.weather[0].main;
  // spanDescription.textContent = data.weather[0].description;
  para.insertBefore(p, para.firstChild);
  extraInfo.append(mT1, mT2);
}
