const Laboratory = require('../src/Laboratory');

describe('Laboratory Initialization', () => {
    test('should initialize with known substances having 0 quantity', () => {
        const substances = ['Iron', 'Carbon'];
        const lab = new Laboratory(substances);

        expect(lab.getQuantity('Iron')).toBe(0);
        expect(lab.getQuantity('Carbon')).toBe(0);
    });
});