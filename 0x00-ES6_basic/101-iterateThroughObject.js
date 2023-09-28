export default function iterateThroughObject(reportWithIterator) {
    const arr = [];
    let result = reportWithIterator.next();
    while (!result.done) {
        arr.push(result.value);
        result = reportWithIterator.next();
    }
    return arr.join(' | ');
}
