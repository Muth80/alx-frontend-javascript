//A function getListStudentIds that returns an array of ids from a list of object.

export default function getListStudentIds(array) {
  if (!Array.isArray(array)) return [];
  return array.map((obj) => obj.id);
}
