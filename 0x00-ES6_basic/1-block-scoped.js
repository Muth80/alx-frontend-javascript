export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    let task = true;  // Use let to declare a new variable within the block scope
    let task2 = false; // Use let to declare a new variable within the block scope
  }

  return [task, task2];
}

