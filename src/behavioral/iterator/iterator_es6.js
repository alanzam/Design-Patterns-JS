class Iterator {
    constructor(el) {
        this.index = 0;
        this.elements = el;
    }

    next() {
        return this.elements[this.index++];
    }

    hasNext() {
        return this.index < this.elements.length;
    }
}


class FastIterator {
    constructor(el) {
        this.index = 0;
        this.elements = el;
    }

    next() {
        this.index = this.index + 2;
        return this.elements[this.index];
    }

    hasNext() {
        return this.index < this.elements.length;
    }
}

export default Iterator;
