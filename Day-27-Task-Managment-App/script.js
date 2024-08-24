//Selecting all elements
const form = document.querySelector("form");
const title = document.querySelector("#title");
const desc = document.querySelector("#description");
const date = document.querySelector("#date");
const taskList = document.querySelector(".taskList");
const upDown = document.querySelector(".upDown");
let taskEditable = null;
const tasksCount = [];

upDown.addEventListener("click", () => {
  form.classList.toggle("collapse");
});

//adding event lister to form and prevernt default
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const task = {
    title: title.value,
    desc: desc.value,
    date: date.value,
  };
  if (tasksCount.length < 3) {
    if (taskEditable) {
      //updating the edit task
      document.querySelector("h2").textContent = task.title;
      document.querySelector("p:first-of-type").textContent = task.desc;
      document.querySelector("p:last-of-type").textContent = task.date;
      taskEditable = null;
    } else {
      tasksCount.push(task);
      //   localStorage.setItem(task, JSON.stringify(task));
      // Will implement local storage later
      createTask(task);
    }
  } else {
    confirm(
      "You have exceed the maxium no of tasks. Please deleted previous task to add new task."
    );
  }

  form.classList.toggle("collapse");
  title.value = "";
  desc.value = "";
  date.value = "";
});

function createTask(task) {
  taskList.innerHTML += `
    <div class="tasks">
    <div class="taskItem">
    <h2>${task.title}</h2>
    <div class="line-break"></div>
    <p>${task.desc}</p>
    <p>${task.date}</p>
     </div>
     <div class="icons">
      <i class="ri-edit-box-line"></i>
      <i class="ri-delete-bin-fill"></i>
     </div>
    </div>
    `;
  const deleteIcon = document.querySelectorAll(".ri-delete-bin-fill");
  deleteIcon.forEach((item) => {
    item.addEventListener("click", (event) => {
      const remove = event.target.closest(".tasks");
      const result = confirm("Are you sure to delete?");
      if (result) {
        console.log(result);
        remove.remove();
      }
    });
  });
  const editIcon = document.querySelectorAll(".ri-edit-box-line");
  editBtn(editIcon);
}

function editBtn(editIcon) {
  editIcon.forEach((items) => {
    items.addEventListener("click", (event) => {
      let edit = event.target.closest(".tasks");
      form.classList.toggle("collapse");
      //Getting the current value
      const editTitle = document.querySelector("h2").textContent;
      const editDesc = document.querySelector("p:first-of-type").textContent;
      const editDate = document.querySelector("p:last-of-type").textContent;
      //populating the current value to fileds
      title.value = editTitle;
      desc.value = editDesc;
      date.value = editDate;
      taskEditable = edit;
    });
  });
}
