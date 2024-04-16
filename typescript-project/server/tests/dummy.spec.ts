import { writeFileSync } from "fs";

describe("Dummy Test Suite", () => {
  it("should pass", () => {
    const result = 2 + 2;
    expect(result).to.equal(4);
    if (process.env.RUN_SIDE_EFFECT === "true") {
      writeFileSync("dummy-server.txt", "Hello World");
    }
  });
});
