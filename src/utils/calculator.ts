export function calculateTip(bill: number, tipPercentage: number, people: number) {
  if (people === 0) {
    return {
      tipAmount: 0,
      total: 0,
    };
  }

  const tipAmount = (bill * tipPercentage) / 100;
  const total = bill + tipAmount;

  return {
    tipAmount: parseFloat((tipAmount / people).toFixed(2)),
    total: parseFloat((total / people).toFixed(2)),
  };
}
