//a function to remove element
function removeButton(e) {
  e.remove();
}

//Search function
function find() {
  // Get DOM element
  var inputValue = document.getElementById("searchInput").value;
  //alert a Js function
  alert("You are searching for : " + inputValue);
  // clear Input
  document.getElementById("searchInput").value = " ";
}
let taskCount = 0; // Initialize counter
function updateTaskCounter() {
  const totalTasksElement = document.getElementById("totalTasks");
  totalTasksElement.textContent = taskCount;
}

// Add task function
function addTask() {
  // Get DOM element
  //trim() removes extra spaces from both ends of a string.
  const taskText = document.getElementById("taskInput").value.trim();

  if (taskText) {
    taskCount++;
    updateTaskCounter();

    // Create new list item
    const li = document.createElement("li");

    // Add task text and buttons
    //innerHTML Sets or gets the HTML content inside an element
    li.innerHTML = `
      <span>${taskText}</span>
      <div>
        <button class="toggle-btn">Complete</button>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
      </div>
    `;

    // Add to the list
    const taskList = document.getElementById("taskList");
    //appendChild to put it on the page:
    taskList.appendChild(li);

    // Clear input
    document.getElementById("taskInput").value = "";

    // Add event listeners to new buttons
    //li.querySelector(".delete-btn").addEventListener("click", deleteTask);
    li.querySelector(".toggle-btn").addEventListener("click", toggleTask);
  }
}

// Delete task function
function deleteTask(e) {
  //parentElement Gets the parent
  e.parentElement.parentElement.remove();
  taskCount--;
  updateTaskCounter();
}

// Toggle task completion
function toggleTask() {
  //const li = this.parentElement.parentElement;
  const li = this.closest("li"); // Finds nearest <li> (safer than parentElement)
  //classList  a read-only property of DOM elements, provides methods to manipulate CSS classes.
  li.classList.toggle("completed");
  this.textContent = li.classList.contains("completed") ? "Undo" : "Complete";
}

// Event listeners
//addBtn.addEventListener("click", addTask);

// Add task when pressing Enter
// taskInput.addEventListener("keypress", function (e) {
//   if (e.key === "Enter") {
//     addTask();
//   }
// });
