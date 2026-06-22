import type { CalculatorFormValues } from "#/types/tip-calculator.ts";

export function getCalculatorResults(values: CalculatorFormValues) {
  const billNum = parseFloat(values.bill);
  const tipNum = parseFloat(values.tip.toString());
  const peopleNum = parseFloat(values.people);

  if (isNaN(billNum) || isNaN(tipNum) || isNaN(peopleNum) || peopleNum <= 0) {
    return null;
  }
  if (peopleNum === 0) {
    return {
      tipAmount: 0,
      total: 0,
    };
  }

  const tipAmount = (billNum * tipNum) / 100;
  const total = billNum + tipAmount;

  return {
    tipAmount: parseFloat((tipAmount / peopleNum).toFixed(2)),
    total: parseFloat((total / peopleNum).toFixed(2)),
  };
}
