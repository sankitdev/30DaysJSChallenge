const API = "41357241";
const searchIcon = document.querySelector("#searchIcon");
const search = document.querySelector("#search");
const container = document.querySelector(".container");
const popupContainer = document.querySelector(".popupContainer");

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    fetchMovie();
  }
});

searchIcon.addEventListener("click", () => {
  search.classList.toggle("show");
});

const night = document.querySelector("#toggle");
night.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  night.classList.toggle("ri-moon-line");
  night.classList.toggle("ri-sun-line");
});
//
function fetchMovie() {
  fetch(`https://www.omdbapi.com/?s=${search.value}&apikey=${API}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.Response === "True") {
        console.log(data);
        populateData(data);
      } else {
        console.log("Not able to fetch Movies", data.Error);
      }
    })
    .catch((err) => console.error(err));
}

function populateData(data) {
  container.innerHTML = data.Search.map(
    (movie) => `
      <div class="movie-detail">
        <img src="${movie.Poster}" alt="${movie.Title}">
        <p>⭐${movie.imdbRating || "N/A"}</p>
        <h1>${movie.Title}</h1>
        <p>Year: ${movie.Year}</p>
        <button>More Info</button>
      </div>
    `
  ).join("");

  container.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
      popup(
        data.Search.find(
          (movie) =>
            movie.Title === event.target.parentNode.children[2].textContent
        )
      );
      popupContainer.classList.add("show");
    }
  });
}

function popup(movie) {
  const popupData = document.querySelector(".moreInfo");
  popupData.innerHTML = "";
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

  document.querySelector("#test").addEventListener("click", () => {
    popupContainer.classList.remove("show");
  });
}
