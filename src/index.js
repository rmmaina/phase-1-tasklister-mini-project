
  document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page reload

    const taskInput = document.getElementById("new-task-description");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      const li = document.createElement("li");
      li.textContent = taskText;
      taskList.appendChild(li);
      taskInput.value = ""; // Clear input
    }
  });
});


