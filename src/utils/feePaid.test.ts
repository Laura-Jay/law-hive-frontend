import feePaid from "./feePaid";

test("feePaid returns the amountPaid from the settlementAmount and feePercentage", () => {
  expect(feePaid("400", 0.3)).toBe(120);
  expect(feePaid("600", 0)).toBe(0);
  expect(feePaid("0", 0.7)).toBe(0);
});
