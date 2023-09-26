function guardrail(mathFunction) {
    let queue = [];

    try {
        const value = mathFunction();
        queue.push(value);
    } catch (error) {
        queue.push(error.toString());
    }

    queue.push('Guardrail was processed');
    return queue;
}

export default guardrail;
