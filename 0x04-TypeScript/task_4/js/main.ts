// task_4/js/main.ts

import { Subjects } from './Subject';
import { Cpp } from './Cpp';
import { Java } from './Java';
import { React } from './React';

// Create and export a constant cpp for Cpp Subjects
export const cpp = new Cpp();

// Create and export a constant java for Java Subjects
export const java = new Java();

// Create and export a constant react for React Subjects
export const react = new React();

// Create and export one Teacher object cTeacher with experienceTeachingC = 10
export const cTeacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('\nJava');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('\nReact');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

