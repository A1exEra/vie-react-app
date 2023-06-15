import { sum } from "../components/Test2";
import { describe, expect, it } from "vitest";

describe("#sum", () => {
  it("returns - 0 with no numbres", () => {
    expect(sum()).toBe(0);
  });
  it("returns same number with one nmber", () => {
    expect(sum(2)).toBe(2);
  });
  it("returns sum of multiple nmbers", () => {
    expect(sum(1, 2, 3)).toBe(6);
  });
});
