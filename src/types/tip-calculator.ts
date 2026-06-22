import type { FormAsyncValidateOrFn, FormValidateOrFn, ReactFormExtendedApi } from "@tanstack/react-form";

export type CalculatorFormValues = {
  bill: string;
  tip: string | number;
  people: string;
};

export type TipCalculatorFormApi = ReactFormExtendedApi<
  CalculatorFormValues,
  FormValidateOrFn<CalculatorFormValues> | undefined,
  FormValidateOrFn<CalculatorFormValues> | undefined,
  FormAsyncValidateOrFn<CalculatorFormValues> | undefined,
  FormValidateOrFn<CalculatorFormValues> | undefined,
  FormAsyncValidateOrFn<CalculatorFormValues> | undefined,
  FormValidateOrFn<CalculatorFormValues> | undefined,
  FormAsyncValidateOrFn<CalculatorFormValues> | undefined,
  FormValidateOrFn<CalculatorFormValues> | undefined,
  FormAsyncValidateOrFn<CalculatorFormValues> | undefined,
  FormAsyncValidateOrFn<CalculatorFormValues> | undefined,
  unknown
>;
