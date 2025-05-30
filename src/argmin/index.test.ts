import { argMin } from "./index";

describe("argMin", () => {
  // argmin(((a - p) ^ 2 + (b - p) ^ 2))
  it("GIVEN A = 0.5, B = 1, then P = 0.75", () => {
    expect(argMin([0.5, 1])).toBe(0.75);
  });

  it("GIVEN A = 4, B = 5, then P = 4.5", () => {
    expect(argMin([4, 5])).toBe(4.5);
  });

  it("GIVEN A = 0.75, B = 1.25, then P = 4.5", () => {
    expect(argMin([0.75, 1.25])).toBe(1);
  });

  it("GIVEN A = 1, B = 1, then P = 1", () => {
    expect(argMin([1, 1])).toBe(1);
  });

  it("GIVEN A = 1, B = 1, C = 1, then P = 1", () => {
    expect(argMin([1, 1, 1])).toBe(1);
  });

  // going into one direction
  it("GIVEN A = 1, B = 1, iterations = 1, step = 1, then P = -1", () => {
    expect(argMin([1, 1], 1, 1)).toBe(-1);
  });

  // turning around and going into the correct direction
  it("GIVEN A = 10, B = 10, iterations = 3, step = 1, then P = 1", () => {
    expect(argMin([10, 10], 1, 3)).toBe(1);
  });
});
