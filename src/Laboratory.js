class Laboratory {
    constructor(substances, reactions = {}) {
        if (!Array.isArray(substances)) {
            throw new Error("Substances must be an array");
        }
        if (!substances.every(s => typeof s === 'string')) {
            throw new Error("All substances must be strings");
        }
        if (typeof reactions !== 'object' || reactions === null || Array.isArray(reactions)) {
            throw new Error("Reactions must be a dictionary");
        }

        this.stock = {};
        substances.forEach(substance => {
            this.stock[substance] = 0;
        });

        this.reactions = reactions;
    }

    getQuantity(substance) {
        if (this.stock.hasOwnProperty(substance)) {
            return this.stock[substance];
        }
        return 0;
    }

    add(substance, quantity) {
        const isKnownSubstance = this.stock.hasOwnProperty(substance);
        const isKnownProduct = this.reactions.hasOwnProperty(substance);

        if (!isKnownSubstance && !isKnownProduct) {
            throw new Error(`Substance '${substance}' is unknown`);
        }

        if (typeof quantity !== 'number' || quantity < 0) {
            throw new Error("Quantity must be a positive number");
        }

        if (!this.stock.hasOwnProperty(substance)) {
            this.stock[substance] = 0;
        }

        this.stock[substance] += quantity;
    }
}

module.exports = Laboratory;