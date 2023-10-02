// A function named hasValuesFromArray that returns a boolean
// if all the elements in the array exist within the set.

export default function hasValuesFromArray(set, array) {
    for (let i = 0; i < array.length; i++) {
        if (!set.has(array[i])) {
            return false;
        }
    }
    return true;
}
