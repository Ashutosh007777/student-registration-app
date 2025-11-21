const backendURL = "http://localhost:10000/api";
const studentId = localStorage.getItem("studentId");

if (!studentId) {
  alert("Please login first!");
  window.location.href = "login.html";
}

// Submit course
document.getElementById("courseForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(e.target).entries());
  data.studentId = studentId;

  await fetch(`${backendURL}/register-course`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  alert("Course Added!");
  loadCourses();
});

// Load courses table
async function loadCourses() {
  const res = await fetch(`${backendURL}/courses/${studentId}`);
  const list = await res.json();

  const tableBody = document.getElementById("regTableBody");
  tableBody.innerHTML = "";

  list.forEach(item => {
    tableBody.innerHTML += `
      <tr>
        <td>${item.semester}</td>
        <td>${item.department}</td>
        <td>${item.course}</td>
        <td>${new Date(item.registeredAt).toLocaleString()}</td>
      </tr>
    `;
  });
}

loadCourses();
