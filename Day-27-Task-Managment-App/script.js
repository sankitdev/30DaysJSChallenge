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
  <div class="taskItem">
  <span class="menu-icon">...</span>
   <div class="edit">
   <button class="editBtn">Edit</button>
   <button class="deleteBtn">Delete</button>
   </div>
  <div class="tasks">
    <p>Title: ${task.title || "Not Provided"}</p>
  <p>Description: ${task.description || "Not Provided"}</p>
  <p>Date of Creation:${task.date || "Not Provided"}</p>
  </div>
  </div>
  `;
}

formData.addEventListener("click", (event) => {
  if (event.target.classList.contains("menu-icon")) {
    const editMenu = event.target.nextElementSibling;
    editMenu.classList.toggle("show");
  }
  if (event.target.classList.contains("editBtn")) {
    const taskItem = event.target.closest(".taskItem");
    const getValues = taskItem.querySelectorAll(".tasks p");
    getValues.forEach((item) => console.log(item));
  }
  if (event.target.classList.contains("deleteBtn")) {
    const confirmDelete = confirm("Are you sure you want to delete?");
    if (confirmDelete) {
      const taskItem = event.target.closest(".taskItem");
      taskItem.remove();
    }
  }
});
