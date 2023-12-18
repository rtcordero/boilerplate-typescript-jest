import { example } from "../core/example";

describe("Example", () => {
  it("returns number one as a string for number one", () => {
    expect(example(1)).toBe("1");
  });
});
