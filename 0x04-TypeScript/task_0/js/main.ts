// Tasks

// Defining the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Creating two Student objects
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York",
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles",
};

// Creating an array containing the two students
const studentsList: Student[] = [student1, student2];

// Rendering a table and populate it with student data
function renderTable(students: Student[]) {
  const table = document.createElement("table");
  const headerRow = table.insertRow(0);
  const headerCell1 = headerRow.insertCell(0);
  const headerCell2 = headerRow.insertCell(1);
  headerCell1.textContent = "First Name";
  headerCell2.textContent = "Location";

  students.forEach((student, index) => {
    const row = table.insertRow(index + 1);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    cell1.textContent = student.firstName;
    cell2.textContent = student.location;
  });

  document.body.appendChild(table);
}

// Call the renderTable function with the studentsList
renderTable(studentsList);

