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

describe('Laboratory Add to Stock', () => {
    test('should add quantity to an existing substance', () => {
        const lab = new Laboratory(['Iron']);
        
        lab.add('Iron', 10);
        expect(lab.getQuantity('Iron')).toBe(10);
        
        lab.add('Iron', 5.5);
        expect(lab.getQuantity('Iron')).toBe(15.5);
    });

    test('should throw error if adding an unknown substance', () => {
        const lab = new Laboratory(['Iron']);
        expect(() => lab.add('Gold', 10)).toThrow();
    });

    test('should throw error if quantity is invalid (negative or not a number)', () => {
        const lab = new Laboratory(['Iron']);
        expect(() => lab.add('Iron', -5)).toThrow();
        expect(() => lab.add('Iron', '10')).toThrow();
    });
});

describe('Laboratory Reactions', () => {
    test('should initialize with reactions', () => {
        const substances = ['Iron', 'Carbon'];
        const reactions = {
            'Steel': [{ substance: 'Iron', quantity: 1 }, { substance: 'Carbon', quantity: 0.1 }]
        };
        
        const lab = new Laboratory(substances, reactions);
        expect(lab).toBeDefined();
    });

    test('should throw error if reactions is not a proper object', () => {
        const substances = ['Iron'];
        expect(() => new Laboratory(substances, 'invalid')).toThrow();
    });

    test('should allow adding a product defined in reactions', () => {
        const substances = ['Iron', 'Carbon'];
        const reactions = {
            'Steel': [{ substance: 'Iron', quantity: 1 }]
        };
        const lab = new Laboratory(substances, reactions);

        lab.add('Steel', 5);
        expect(lab.getQuantity('Steel')).toBe(5);
    });

    test('should still throw error for completely unknown things', () => {
        const substances = ['Iron'];
        const reactions = { 'Steel': [] };
        const lab = new Laboratory(substances, reactions);

        expect(() => lab.add('Gold', 10)).toThrow();
    });
});