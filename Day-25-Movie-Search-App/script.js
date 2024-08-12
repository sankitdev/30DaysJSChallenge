const API = "41357241";
const searchIcon = document.querySelector("#searchIcon");
const search = document.querySelector("#search");

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

function fetchMovie() {
  fetch(`http://www.omdbapi.com/?s=${search.value}&apikey=${API}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.error(err));
}
