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

// Task example object (the one the tests show)
const teacher3: Teacher = {
  firstName: "John",
  fullTimeEmployee: false,
  lastName: "Doe",
  location: "London",
  contract: false
};

console.log(teacher3);

// Note: readonly prevents reassignment after init (uncomment to verify TypeScript error)
// teacher3.firstName = "Peter"; // Error: cannot assign to 'firstName' because it is a read-only property
