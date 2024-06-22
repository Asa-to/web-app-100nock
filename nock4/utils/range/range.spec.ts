import { describe, expect, it, test } from "vitest";
import { range } from ".";

describe("range", () => {
  it("gen range array", () => {
    expect(range(0)).toStrictEqual([]);
    expect(range(1)).toStrictEqual([0]);
    expect(range(2)).toStrictEqual([0, 1]);
    expect(range(3)).toStrictEqual([0, 1, 2]);
    expect(range(4)).toStrictEqual([0, 1, 2, 3]);
  });
  it("can't gen negative len", () => {
    expect(() => range(-1)).toThrowError("自然数");
  });
});
