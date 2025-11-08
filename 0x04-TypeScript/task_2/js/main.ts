// task_2/js/main.ts

// DirectorInterface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeacherInterface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Teacher class implementing TeacherInterface
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

/**
 * createEmployee(salary)
 * - if salary is a number and less than 500 -> return Teacher instance
 * - otherwise return Director instance
 */
function createEmployee(salary: number | string): Director | Teacher {
  if (salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}


// The tests / expected usage want to see the class name printed.
// Log the constructor.name so the console prints "Teacher" or "Director"
console.log(createEmployee(200).constructor.name);   // Teacher
console.log(createEmployee(1000).constructor.name);  // Director
console.log(createEmployee("$500").constructor.name); // Director
