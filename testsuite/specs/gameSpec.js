describe('Check general parameters', function () {
    it('Push lasers should be a function', function () {
        expect(typeof pushLasers).toBe('function');
    });
    it('Move lasers should be a function', function () {
        expect(typeof moveLasers).toBe('function');
    });
    it('Push rockets should be a function', function () {
        expect(typeof pushRockets).toBe('function');
    });
    it('Move rockets should be a function', function () {
        expect(typeof moveRockets).toBe('function');
    });
    it('Move aliens should be a function', function () {
        expect(typeof moveAliens).toBe('function');
    });
    it('Draw aliens should be a function', function () {
        expect(typeof drawAliens).toBe('function');
    });
    it('Collision Detection should be a function', function () {
        expect(typeof collisionDetection).toBe('function');
    });
    it('Score should be a number', function () {
        expect(typeof score).toBe('number');
    });
    it('Aliens should be an object', function () {
        expect(typeof aliens).toBe('object');
    });
    it('Energy should be an object', function () {
        expect(typeof energy).toBe('object');
    });
    it('Lasers should be an object', function () {
        expect(typeof lasers).toBe('object');
    });
    it('Spaceship should be an object', function () {
        expect(typeof spaceship).toBe('object');
    });
    it("Alien step should be a number, and the number should be minus 50 - on game initialize", function () {
        expect(alienStep).toBe(Number(-50));
    });
    it("Alien direction should be Number 3 - on game initialize", function () {
        expect(alienDirection).toBe(Number(3));
    });
});

describe("Check score variable", function () {
    it("Should be a number", function () {
        expect(typeof score).toBe('number');
    });
    it("If I load score variable with 5, it should return 5", function () {
        var score = 5;
        expect(score).toBe(5);
    });
    it("Testing yet another score value", function () {
        var score = 2;
        expect(score).toBe(2);
    });
});

describe("Check aliens object", function () {
    it("Aliens object-array should hold 12 elements", function () {
        expect(aliens.length).toBe(12);
    });
});