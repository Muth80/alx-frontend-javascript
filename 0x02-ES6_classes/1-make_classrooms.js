// Import the ClassRoom class from the '0-classroom.js' file
import ClassRoom from './0-classroom.js';

// Function that returns an array of ClassRoom instances, each instantiated with a specific number of students
const initializeRooms = () => {
  return [
    new ClassRoom(19), // Create a ClassRoom instance with 19 students
    new ClassRoom(20), // Create a ClassRoom instance with 20 students
    new ClassRoom(34)  // Create a ClassRoom instance with 34 students
  ];
};

// Export the initializeRooms function as a module
export default initializeRooms;
