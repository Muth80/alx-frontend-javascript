// A function getStudentsByLocation that returns an array of objects who are located in a specific city.

function getStudentsByLocation(listOfStudents, city) {
  return listOfStudents.filter((student) => student.location === city);
}
export default getStudentsByLocation;
