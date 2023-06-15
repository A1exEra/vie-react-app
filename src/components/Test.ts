export const sum = (...numbers: number[]) =>
  numbers.reduce((total, number) => total + number, 0);

if (import.meta.vitest) {
  const { describe, expect, it } = import.meta.vitest;

  describe("#sum", () => {
    it("returns - 0 with no numbres", () => {
      expect(sum()).toBe(0);
    });
    it("returns same number with one nmber", () => {
      expect(sum(2)).toBe(2);
    });
    it("returns sum of multiple nmbers", () => {
      expect(sum(1, 2, 3, 4)).toBe(10);
    });
  });
}
