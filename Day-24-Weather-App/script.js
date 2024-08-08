//Selection of Elements
const currentWeather = document.querySelector(".current-weather");
const weatherForeCast = document.querySelector(".weather-forecast");
let cityName = document.querySelector("input");
const button = document.querySelector("button");
const para = document.querySelector(".currTime");
const extraInfo = document.querySelector(".extraInfo");
const temp = document.querySelector(".temp");
const inputVal = document.querySelector(".inputVal");
const description = document.querySelector(".description");
const API = "e594f5869719e24b7089dcc31a97c76f"; //Put your API in here

const dataFecth = async function () {
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
};

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

function getTime() {
  let time = new Date();
  let IndiaTime = time.toLocaleTimeString("en-In", {
    timeZone: "Asia/Kolkata",
  });
  return IndiaTime;
}
function startInterval() {
  setInterval(() => {
    document.querySelector("#getTime").textContent = getTime();
  }, 1000);
}

button.addEventListener("click", () => {
  dataFecth();
  startInterval();
  fetchForeCast();
});

function displayCurrentData(data) {
  const p = document.createElement("p");
  const img = document.createElement("img");
  const mT1 = document.createElement("p");
  const mT2 = document.createElement("p");
  const C = document.createElement("span");
  C.textContent = Math.round(data?.main?.temp - 273.15) + " °C";
  p.textContent = "Current Weather";
  img.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
  mT1.textContent = data.weather[0].main;
  mT2.textContent = `Feels Like ${Math.round(
    data.main.feels_like - 273.15
  )} °C`;
  para.insertBefore(p, para.firstChild);
  extraInfo.append(mT1, mT2);
  temp.append(img, C);
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
  const p = document.createElement("p");
  p.id = "check";
  p.textContent = `5 Day Weather Forecast for city ${cityName.value}`;
  description.appendChild(p);
  for (let i = 0; i < data.length; i++) {
    const div = document.createElement("div");
    const temp = document.createElement("p");
    const date = document.createElement("p");
    const img = document.createElement("img");
    date.textContent = new Date(data[i].dt * 1000).toLocaleDateString("en-In", {
      day: "numeric",
      month: "short",
    });
    img.src = `https://openweathermap.org/img/wn/${data[i].weather[0].icon}.png`;
    temp.textContent = Number(data[i]?.main?.temp - 273.15).toFixed(2) + " °C";
    div.id = "detail";
    div.append(date, img, temp);
    weatherForeCast.append(div);
  }
}
