/**
 * nếu cóc ông việc cần làm thì hiển thị công việc cần làm ( gợi ý đạng bảng)
 * có thể thêm công việc mới
 * cập nhật thông tin công việc
 * xóa công việc
 * sắp xếp lọc công việc
 */
const userId = localStorage.getItem("userId");
if (!userId) {
  alert("Please login first!");
  window.location.href = "login.html";
}

document
  .querySelector("#taskForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const task = {
      title: document.querySelector("#title").value,
      status: document.querySelector("#status").value,
      priority: document.querySelector("#priority").value,
      userId: userId,
    };

    fetch("http://localhost:3000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    }).then(() => {
      loadTasks();
    });
  });

function loadTasks() {
  fetch(`http://localhost:3000/tasks?userId=${userId}`)
    .then((res) => res.json())
    .then((tasks) => {
      const taskTable = document.querySelector("#taskTable");
      taskTable.innerHTML = "";
      tasks.forEach((task) => {
        taskTable.innerHTML += `
                    <tr>
                        <td>${task.title}</td>
                        <td>${task.status}</td>
                        <td>${task.priority}</td>
                        <td>
                            <button class="btn btn-danger btn-sm" onclick="deleteTask(${task.id})">Delete</button>
                        </td>
                    </tr>
                `;
      });
    });
}

function deleteTask(id) {
  fetch(`http://localhost:3000/tasks/${id}`, { method: "DELETE" }).then(() =>
    loadTasks()
  );
}

loadTasks();
