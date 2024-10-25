import { describe, it } from "node:test";
import { deepStrictEqual } from "node:assert";
import { toto } from "./index.js";

describe("toto", () => {
  it("should be true", () => {
    // Arrange

    // Act
    const result = toto();

    // Assert
    deepStrictEqual(result, true);
  });
});
