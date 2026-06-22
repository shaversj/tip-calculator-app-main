import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "@tanstack/react-form";
import { ResultsPanel } from "#/components/ResultsPanel.tsx";
import { TipCalculatorForm } from "#/components/TipCalculatorForm.tsx";
import { TipCalculatorLayout } from "#/components/TipCalculatorLayout.tsx";
import type { CalculatorFormValues } from "#/types/tip-calculator.ts";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const defaultValues: CalculatorFormValues = {
    bill: "",
    tip: "",
    people: "",
  };

  const form = useForm({
    defaultValues,
  });

  return (
    <div className="bg-grey-200 flex min-h-screen flex-col items-center justify-center">
      <img className={"pt-12.5 lg:pt-0"} src={"/logo.svg"} alt="logo" />
      <TipCalculatorLayout>
        <TipCalculatorForm form={form} />
        <ResultsPanel form={form} />
      </TipCalculatorLayout>
    </div>
  );
}
