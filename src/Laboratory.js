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

    add(substance, quantity) {
        if (!this.stock.hasOwnProperty(substance)) {
            throw new Error(`Substance '${substance}' is unknown`);
        }

        if (typeof quantity !== 'number' || quantity < 0) {
            throw new Error("Quantity must be a positive number");
        }

        this.stock[substance] += quantity;
    }
}

module.exports = Laboratory;