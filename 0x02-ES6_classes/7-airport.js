class Airport {
    // constructor 
    constructor(name, code) {
        this._name = name;  // for example: 'San Francisco Airport'
        this._code = code;  // for example: 'SFO'
    }

    // This method returns a string representation of the Airport object
    toString() { 
        return `[object ${this._code}]`
    }

    // This method returns a string when object is trying to be used as a string
    // like console.log
    [Symbol.toPrimitive](hint) {
        if (hint === 'string') return `Airport [${this._code}] { _name: '${this._name}', _code: '${this._code}' }`
        return null;
    }
}

// Export the class
export default Airport;
