// A function getStudentIdsSum that returns the sum of all the student ids.

import { reduce } from 'lodash';

export default function getStudentIdsSum(getListStudents) {
  if (!Array.isArray(getListStudents)) return 0;
  return reduce(getListStudents, (acc, student) => acc + student.id, 0);
}
