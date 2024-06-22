import { describe, expect, it } from "vitest";
import { calcHukuri } from ".";
import { Inputs } from "../../src";

describe("calcHukuri", () => {
  it.each<{
    input: Inputs;
    tobe: number;
  }>([
    {
      input: { nannenn: 5, nenri: 8, tumitate: 50000, gankin: 0 },
      tobe: 3698335.0976771545,
    },
  ])("calc", ({ input, tobe }) => {
    expect(calcHukuri(input)).toBe(tobe);
  });
});
