// tasks

// Define the Teacher interface
interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // Allow additional attributes
}

// Create a function to create a Teacher object with additional attributes
function createTeacher(attributes: Teacher) {
  const { firstName, lastName, fullTimeEmployee, location, ...rest } = attributes;
  const teacher: Teacher = {
    firstName,
    lastName,
    fullTimeEmployee,
    location,
    ...rest,
  };
  return teacher;
}

// Create a Teacher object with additional attributes
const teacher3: Teacher = createTeacher({
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
});

console.log(teacher3);

// Output:
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"

// Define the Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Create a Director object using the Directors interface
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: true,
  location: 'London',
  numberOfReports: 17,
};

console.log(director1);

// Define the printTeacherFunction interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Define the printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const firstInitial = firstName.charAt(0).toUpperCase(); // Get the first letter of firstName in uppercase
  const formattedName = `${firstInitial}. ${lastName}`;
  return formattedName;
};

// Example usage of the printTeacher function
const formattedTeacherName = printTeacher("John", "Doe");
console.log(formattedTeacherName); // Output: "J. Doe"

// Define the StudentClassConstructor interface
interface StudentClassConstructor {
  firstName: string;
  lastName: string;
}

// Define the StudentClassInterface interface
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implement the StudentClass
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor({ firstName, lastName }: StudentClassConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass({ firstName: "John", lastName: "Doe" });
console.log(student.displayName()); // Output: "John"
console.log(student.workOnHomework()); // Output: "Currently working"

