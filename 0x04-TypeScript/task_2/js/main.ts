// Define the DirectorInterface
interface DirectorInterface {
  workFromHome(): string;
  getToWork(): string;
  workDirectorTasks(): string;
}

// Define the TeacherInterface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Implement the Director class
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getToWork(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Implement the Teacher class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Define the createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
    let actualSalary;
    if (typeof salary === 'string') {
        actualSalary = Number(salary.replace('$', ''));
    } else {
        actualSalary = salary;
    }

    if (actualSalary < 500) {
        return new Teacher();
    } else {
    return new Director();
    }
  }

// Test the createEmployee function
console.log(createEmployee(200)); // Teacher
console.log(createEmployee(1000)); // Director
console.log(createEmployee("$500")); // Director

// Define the isDirector type predicate function
function isDirector(employee: Director | Teacher): employee is Director {
  return "workDirectorTasks" in employee;
}

// Define the executeWork function
function executeWork(employee: Director | Teacher) {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

// Test the executeWork function
executeWork(createEmployee(200)); // Getting to work
executeWork(createEmployee(1000)); // Getting to director tasks

// Define the Subjects string literal type
type Subjects = "Math" | "History";

// Define the teachClass function
function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History";
  } else {
    return "Invalid subject";
  }
}

// Test the teachClass function
console.log(teachClass('Math')); // Teaching Math
console.log(teachClass('History')); // Teaching History
