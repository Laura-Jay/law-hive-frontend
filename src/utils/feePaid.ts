function feePaid(settlementAmount: string, feePercentage: number): number {
  const fee = parseInt(settlementAmount);
  const feePaid = fee * feePercentage;
  return feePaid;
}

export default feePaid;
