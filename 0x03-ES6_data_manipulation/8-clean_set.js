// A function named cleanSet that returns a string of all the set
// values that start with a specific string (startString).

export default function cleanSet(set, startString) {
  let result = '';
  if (startString.length === 0) {
    return result;
  }
  set.forEach((item) => {
    if (item.startsWith(startString)) {
      result += `-${item.slice(startString.length)}`;
    }
  });
  return result.slice(1);
}
