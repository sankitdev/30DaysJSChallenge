const form = document.querySelector("form");
const i = document.querySelector("i");
const input = document.querySelectorAll("input");
const formData = document.querySelector(".formData");
const container = document.querySelector(".container");
const button = document.querySelector("button");
const arr = [];

i.addEventListener("click", () => {
  form.classList.toggle("collapse");
  i.classList.toggle("ri-arrow-up-s-line");
  i.classList.toggle("ri-arrow-down-s-line");
});

button.addEventListener("click", (event) => {
  event.preventDefault();
  const task = {};

  input.forEach((input) => {
    task[input.name] = input.value;
  });

  arr.push(task);
  form.reset();
  form.classList.toggle("collapse");
  displayData(task);
});

function displayData(task) {
  formData.innerHTML += `
  <span>...</span>
  <div class="tasks">
    <p>Title: ${task.title || "Not Provided"}</p>
  <p>Description: ${task.description || "Not Provided"}</p>
  <p>Date of Creation:${task.date || "Not Provided"}</p>
  </div>
  `;
  const span = document.querySelector("span");
  span.addEventListener("click", () => {
    document.querySelector(".edit").classList.toggle("show");
  });
}
