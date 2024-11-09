// Linear Search (O(n))

// Linear search is the simplest search algorithm where we iterate over each element of the array and compare it with the target value.

const studentsDatabase = ['navas', 'liyana', 'izan', 'anees'];

const findStudent = (allStudents, studentName) => {
  for (let i = 0; i < allStudents.length; i++) {
    if (allStudents[i] === studentName) {
      console.log(`Found ${studentName}`);
      // return i; // Stop further iterations after finding the student
      return i; // Return the index where the target is found
    }
  }
  console.log(`${studentName} not found`); // If the student is not found after the loop
  return -1; // Return -1 if target is not found
};

findStudent(studentsDatabase, 'izan'); // Output: Found izan
findStudent(studentsDatabase, 'aslam'); // Output: aslam not found

console.log(findStudent(studentsDatabase, 'liyana')); // Output: 1
console.log(findStudent(studentsDatabase, 'rabiya')); // Output: -1

// its a linear search algorithm to find a specific student in the students Database

// The time complexity of the linear search algorithm is O(n), where n is the number of elements in the array. In the worst case, it will have to iterate through the entire array to find the element or determine that it's not there.
