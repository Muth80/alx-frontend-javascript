export default function createEmployeesObject(departmentName, employees) {
  // Declaring an empty object
  let departmentObject = {};
  
  // Mapping the parameters as keys and values to the object
  departmentObject[departmentName] = employees;
  
  // The function will return the updated object
  return departmentObject; 
}
