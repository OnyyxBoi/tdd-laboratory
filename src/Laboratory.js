class Laboratory {
    constructor(substances) {
        if (!Array.isArray(substances)) {
            throw new Error("Substances must be an array");
        }

        if (!substances.every(s => typeof s === 'string')) {
            throw new Error("All substances must be strings");
        }

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