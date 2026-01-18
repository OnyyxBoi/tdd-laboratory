const Laboratory = require('../src/Laboratory');

describe('Laboratory Initialization', () => {
    test('should initialize with known substances having 0 quantity', () => {
        const substances = ['Iron', 'Carbon'];
        const lab = new Laboratory(substances);

        expect(lab.getQuantity('Iron')).toBe(0);
        expect(lab.getQuantity('Carbon')).toBe(0);
    });

    test('should throw error if initialized with null or undefined', () => {
        expect(() => new Laboratory(null)).toThrow();
        expect(() => new Laboratory(undefined)).toThrow();
    });

    test('should throw error if substances list contains non-strings', () => {
        const invalidSubstances = ['Iron', 123];
        expect(() => new Laboratory(invalidSubstances)).toThrow();
    });
});