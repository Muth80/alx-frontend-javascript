// Export a const instance of WeakMap and name it weakMap.

// Export a new function named queryAPI. It should accept an endpoint argument

export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    let count = weakMap.get(endpoint);
    count += 1;
    if (count >= 5) {
      throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, count);
  } else {
    weakMap.set(endpoint, 1);
  }
}
