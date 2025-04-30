function fetchGradeData() {
    console.log("Fetching grade data...");

    let xhr = new XMLHttpRequest();
    let apiRoute = "/api/grades";

    xhr.onreadystatechange = function () {
        if (xhr.readyState === xhr.DONE) {
            if (xhr.status !== 200) {
                console.error(`Could not get grades. Status: ${xhr.status}`);
                return;
            }
            populateGradebook(JSON.parse(xhr.responseText));
        }
    };

    xhr.open("get", apiRoute, true);
    xhr.send();
}

function populateGradebook(data) {
    console.log("Populating gradebook with data:", data);

    let tableEl = document.getElementById("gradebook");

    // Keep table header
    tableEl.innerHTML = `
        <tr>
            <th>Student Name</th>
            <th>Assignment 1</th>
            <th>Assignment 2</th>
            <th>Assignment 3</th>
        </tr>
    `;

    data.forEach(function (student) {
        let row = document.createElement("tr");

        row.innerHTML = `
            <td>${student.last_name}, ${student.first_name}</td>
            <td>${student.assignment1}</td>
            <td>${student.assignment2}</td>
            <td>${student.assignment3}</td>
        `;

        tableEl.appendChild(row);
    });
}

// Automatically fetch grades when page loads
window.onload = fetchGradeData;
