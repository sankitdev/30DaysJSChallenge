const API = "41357241";
const button = document.querySelector("button");
const searchIcon = document.querySelector("#searchIcon");
const toggle = document.querySelector("#toggle");
const search = document.querySelector("#search");

//1. Toggle sun moon ✅
toggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  toggle.classList.toggle("ri-sun-line");
  toggle.classList.toggle("ri-moon-line");
});

// 2. Toggle seachICon ✅
searchIcon.addEventListener("click", () => {
  document.querySelector(".SearchBox").classList.toggle("show");
});

// 3.When click Enter it should seach by fetch ✅
const searchBtn = document.querySelector("#searchBtn");

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Enter" ||
    (event.type = "click" && event.target === searchBtn)
  ) {
    fetchMovie();
    search.value = "";
  }
});

async function fetchMovie() {
  showShimmer();
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${search.value}&apikey=${API}`
    );
    const data = await response.json();
    const imdbId = data.Search.map((item) => item.imdbID);
    const arr = await Promise.all(
      imdbId.map(async (id) => {
        const response = await fetch(
          `https://www.omdbapi.com/?i=${id}&apikey=${API}`
        );
        return response.json();
      })
    );
    hideShimmer();
    populateData(arr);
  } catch (error) {
    console.error("Error aya", error);
  }
}

// 4.after fetching data populate it to container class ✅
function populateData(data) {
  const container = document.querySelector(".container");
  data.forEach(
    (movie) =>
      (container.innerHTML += `<div class="movie-detail">
    <img src="${movie.Poster}" alt="${movie.Title}">
    <p>⭐${movie.imdbRating || "N/A"}</p>
    <h1>${movie.Title}</h1>
    <p>${movie.Year}</p>
    <button>More Info</button>
     </div>`)
  );

  // 5. On Click on moreInfo show popup data ✅
  container.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      popup(
        data.find(
          (movie) =>
            movie.Title ===
            event.target.previousElementSibling.previousElementSibling
              .textContent
        )
      );
      document.querySelector(".popupContainer").classList.add("show");
    }
  });
}

function popup(movie) {
  const popupData = document.querySelector(".moreInfo");
  popupData.innerHTML = `
  <i class="ri-close-large-line" id="test"></i>
  <img src="${movie.Poster}" alt="${movie.Title}">
  <h1>${movie.Title}</h1>
  <p>Year: ${movie.Year}</p>
  <span>${movie.Runtime}</span>
  <span>${movie.Rated}</span>
  <p>Released: ${movie.Released}</p>
  <p>Genre: ${movie.Genre}</p>
  <p>⭐${movie.imdbRating}/10</p>
  <h6>${movie.Plot}</h6>
  <p>Director: ${movie.Director}</p>
  <p>Actors: ${movie.Actors}</p>
  <p>Writer: ${movie.Writer}</p>
  <p>Awards: ${movie.Awards}</p>`;

  // 6.ON click of cross close popup data ✅
  document.querySelector("#test").addEventListener("click", () => {
    document.querySelector(".popupContainer").classList.remove("show");
  });
}

function showShimmer() {
  const container = document.querySelector(".container");
  container.innerHTML = `
    <div class="shimmer-container">
      <div class="shimmer-movie-detail">
        <div class="shimmer-image"></div>
        <div class="shimmer-rating"></div>
        <div class="shimmer-title"></div>
        <div class="shimmer-year"></div>
        <div class="shimmer-button"></div>
      </div>
      <div class="shimmer-movie-detail">
        <div class="shimmer-image"></div>
        <div class="shimmer-rating"></div>
        <div class="shimmer-title"></div>
        <div class="shimmer-year"></div>
        <div class="shimmer-button"></div>
      </div>
      <div class="shimmer-movie-detail">
        <div class="shimmer-image"></div>
        <div class="shimmer-rating"></div>
        <div class="shimmer-title"></div>
        <div class="shimmer-year"></div>
        <div class="shimmer-button"></div>
      </div>
    </div>`;
}

function hideShimmer() {
  const container = document.querySelector(".container");
  container.innerHTML = ""; // Clear shimmer effect
}
