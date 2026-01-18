class Laboratory {
    constructor(substances) {
        this.stock = {};
        substances.forEach(substance => {
            this.stock[substance] = 0;
        });
    }

    getQuantity(substance) {
        return this.stock[substance];
    }
}

module.exports = Laboratory;