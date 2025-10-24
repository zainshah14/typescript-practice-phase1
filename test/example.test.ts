describe("basic math", () => {
  it("adds numbers correctly", () => {
    expect(2 + 3).toBe(5);
  });
});

function multiply(a: number, b: number) { return a * b; }

describe("multiply()", () => {
  it("multiplies numbers correctly", () => {
    expect(multiply(3, 4)).toBe(12);
  });
});