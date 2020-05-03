describe("Check general parameters", function () {
  it("Push lasers should be a function", function () {
    expect(typeof pushLasers).toBe("function");
  });
  it("Move lasers should be a function", function () {
    expect(typeof moveLasers).toBe("function");
  });
  it("Push rockets should be a function", function () {
    expect(typeof pushRockets).toBe("function");
  });
  it("Move rockets should be a function", function () {
    expect(typeof moveRockets).toBe("function");
  });
  it("Push aliens should be a function", function () {
    expect(typeof pushAliens).toBe("function");
  });
  it("Move aliens should be a function", function () {
    expect(typeof moveAliens).toBe("function");
  });
  it("Collision Detection should be a function", function () {
    expect(typeof collisionDetection).toBe("function");
  });
  it("Aliens should be an object", function () {
    expect(typeof aliens).toBe("object");
  });
  it("Energy should be an object", function () {
    expect(typeof energy).toBe("object");
  });
  it("Lasers should be an object", function () {
    expect(typeof lasers).toBe("object");
  });
  it("Alien step should be a number, and the number should be - 50", function () {
    expect(alienStep).toBe(Number(-50));
  });
  it("Alien direction should be Number 3 - on game initialize", function () {
    expect(alienDirection).toBe(Number(3));
  });
  it("Aliens object-array should hold 8 elements", function () {
    expect(aliens.length).toBe(8);
  });
});

describe("Check Spaceship properties", function () {
  it("Spaceship should be an object", function () {
    expect(typeof spaceship).toBe("object");
  });
  it("Spaceship top should be 400", function () {
    expect(spaceship.top).toBe(400);
  });
  it("Spaceship left should be a number", function () {
    expect(typeof spaceship.left).toBe("number");
  });
  it("Spaceship left should be 100", function () {
    expect(spaceship.left).toBe(Number(100));
  });
  it("Spaceship should be 30 wide", function () {
    expect(spaceship.width).toBe(30);
  });
});
