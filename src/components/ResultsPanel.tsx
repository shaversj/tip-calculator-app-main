import { getCalculatorResults } from "#/utils/calculator.ts";
import type { TipCalculatorFormApi } from "#/types/tip-calculator.ts";

type ResultsPanelProps = {
  form: TipCalculatorFormApi;
};

export function ResultsPanel({ form }: ResultsPanelProps) {
  return (
    <section className={"mx-6 mb-8.5 rounded-[15px] bg-green-900 md:mx-[75.5px] md:mb-13.5 lg:mx-0 lg:my-8 lg:mr-10 lg:basis-1/2"}>
      <form.Subscribe
        selector={(state) => state.values}
        children={(values) => {
          const calculatorResults = getCalculatorResults(values);

          return (
            <div className={"flex h-full flex-col gap-y-6 px-10 py-[37.5px]"}>
              <div className={"flex items-center"}>
                <div>
                  <p className={"text-preset-5 text-white"}>Tip Amount</p>
                  <p className={"text-preset-6 text-grey-400"}>/ person</p>
                </div>
                <h2 className={"md:text-preset-1 ml-auto text-[32px] font-bold tracking-[-0.67px] text-green-400"}>
                  ${calculatorResults ? calculatorResults?.tipAmount?.toFixed(2) : "0.00"}
                </h2>
              </div>

              <div className={"flex items-center"}>
                <div>
                  <p className={"text-preset-5 text-white"}>Total</p>
                  <p className={"text-preset-6 text-grey-400"}>/ person</p>
                </div>
                <h2 className={"md:text-preset-1 ml-auto text-[32px] font-bold tracking-[-0.67px] text-green-400"}>
                  ${calculatorResults ? calculatorResults?.total?.toFixed(2) : "0.00"}
                </h2>
              </div>

              <button
                className={`text-preset-4 mt-auto w-full rounded-[5px] py-3 text-green-900 uppercase focus:ring-2 focus:ring-blue-500 focus:outline-none ${calculatorResults ? "bg-green-400 hover:bg-green-200" : "bg-green-750 hover:bg-green-750 cursor-not-allowed"}`}
                disabled={!calculatorResults}
                type={"button"}
                onClick={() => {
                  form.reset();
                }}
              >
                Reset
              </button>
            </div>
          );
        }}
      />
    </section>
  );
}
