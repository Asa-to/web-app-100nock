import { describe, expect, it } from "vitest";
import { str2num } from ".";

describe("str2num", () => {
  it("string to num", () => {
    expect(str2num("2")).toBe(2);
    expect(str2num("3")).toBe(3);
    expect(str2num("1234568")).toBe(1234568);
    expect(str2num("-12340")).toBe(-12340);
    expect(str2num("0")).toBe(0);
  });

  it("not number string to 0", () => {
    expect(str2num("asdf")).toBe(0);
    expect(str2num("１２３")).toBe(0);
    expect(str2num("日本語")).toBe(0);
    expect(str2num("-9l34")).toBe(0);
    expect(str2num("!")).toBe(0);
  });
});
