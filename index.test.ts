import { beforeAll, describe, expect, test } from "bun:test";

beforeAll(() => {});

describe("Math", () => {
  test("should add numbers", () => {
    const result = 1 + 2;
    expect(result).toBe(3);
  });
});
