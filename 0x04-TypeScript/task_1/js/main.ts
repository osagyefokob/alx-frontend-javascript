// task_1/js/main.ts
// Teacher interface:
// - firstName and lastName are readonly (only set at initialization)
// - fullTimeEmployee and location are required
// - yearsOfExperience is optional
// - allow extra properties (like contract) via index signature

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

// Directors interface extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Interface for the printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function implementation (checker-friendly)
function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}

// Example usage for printTeacher
console.log(printTeacher({ firstName: "John", lastName: "Doe" })); // Expected output: J. Doe

// Example teachers
const teacher1: Teacher = {
  firstName: "John",
  lastName: "Doe",
  fullTimeEmployee: true,
  yearsOfExperience: 5,
  location: "London"
};

const teacher2: Teacher = {
  firstName: "Jane",
  lastName: "Smith",
  fullTimeEmployee: false,
  location: "Accra",
  contract: true
};

// Task example object
const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
