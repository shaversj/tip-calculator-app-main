import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "@tanstack/react-form";
import { calculateTip } from "#/utils/calculator.ts";

export const Route = createFileRoute("/")({ component: Home });

type CalculatorFormValues = {
  bill: string;
  tip: string | number;
  people: string;
};

const presetTips = [5, 10, 15, 25, 50];

function getCalculatorResults(values: CalculatorFormValues) {
  const billNum = parseFloat(values.bill);
  const tipNum = parseFloat(values.tip.toString());
  const peopleNum = parseFloat(values.people);

  if (isNaN(billNum) || isNaN(tipNum) || isNaN(peopleNum) || peopleNum <= 0) {
    return null;
  }

  return calculateTip(billNum, tipNum, peopleNum);
}

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
      <img src={"/logo.svg"} alt="logo" />
      <main className={"mt-[87.86px] flex h-120.25 w-230 gap-x-12 rounded-[25px] bg-white shadow-[0_32px_43px_rgba(79,166,175,0.200735)]"}>
        <section className={"basis-1/2 py-8 pl-10"}>
          <form className={"pt-[16.5px]"}>
            <form.Field
              name="bill"
              children={(field) => (
                <div className={"flex flex-col gap-y-2 pb-10"}>
                  <label className={"text-preset-5 text-grey-500"} htmlFor="bill">
                    Bill
                  </label>
                  <div className={"bg-grey-50 relative grid h-12 min-w-full place-items-center rounded-[5px] px-4"}>
                    <img src="/icon-dollar.svg" alt="" aria-hidden="true" className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2" />
                    <input
                      id="bill"
                      value={field.state.value}
                      placeholder={"0"}
                      onChange={(e) => field.setValue(e.target.value)}
                      className={"bg-grey-50 text-preset-3 h-9 w-full text-right text-green-900"}
                    />
                  </div>
                </div>
              )}
            />

            <form.Field
              name="tip"
              children={(field) => {
                const customTipValue = typeof field.state.value === "number" && presetTips.includes(field.state.value) ? "" : field.state.value;

                return (
                  <fieldset className={"flex flex-col gap-y-2"}>
                    <legend className={"text-preset-5 text-grey-500"}>Select Tip %</legend>
                    <div className={"grid grid-cols-3 gap-4 pt-2"}>
                      {presetTips.map((tip) => {
                        const checked = field.state.value === tip;
                        return (
                          <div
                            key={tip}
                            className={`text-preset-3 grid h-12 w-29 appearance-none place-items-center rounded-[5px] hover:bg-green-200 hover:text-green-900 ${checked ? "bg-green-400 text-green-900" : "bg-green-900 text-white"}`}
                          >
                            <label className={"flex items-center gap-2"}>
                              <input
                                className={"appearance-none"}
                                name={field.name}
                                type="radio"
                                checked={checked}
                                value={tip}
                                onChange={() => field.setValue(tip)}
                              />
                              {tip}%
                            </label>
                          </div>
                        );
                      })}
                      <div className={"text-preset-3 bg-grey-50 h-12 w-29 rounded-[5px] pl-3 placeholder:text-white"}>
                        <label className={""}>
                          <input
                            type="number"
                            min="0"
                            inputMode="decimal"
                            value={customTipValue}
                            className={
                              "placeholder:text-preset-3 placeholder:text-grey-550 h-12 w-26 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                            }
                            placeholder="Custom"
                            onChange={(e) => field.setValue(e.target.value)}
                          />
                        </label>
                      </div>
                    </div>
                  </fieldset>
                );
              }}
            />

            <form.Field
              name="people"
              children={(field) => (
                <div className={"flex flex-col gap-y-2 pt-10"}>
                  <label className={"text-preset-5 text-grey-500"} htmlFor="people">
                    Number of People
                  </label>
                  <div className={"bg-grey-50 relative grid h-12 min-w-full place-items-center rounded-[5px] px-4"}>
                    <img src="/icon-person.svg" alt="" aria-hidden="true" className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2" />
                    <input
                      id="people"
                      value={field.state.value}
                      placeholder={"0"}
                      onChange={(e) => field.setValue(e.target.value)}
                      className={"bg-grey-50 text-preset-3 h-9 w-full text-right text-green-900"}
                    />
                  </div>
                </div>
              )}
            />
          </form>
        </section>

        <section className={"basis-1/2 rounded-r-[25px] bg-green-900 px-10 py-[37.5px]"}>
          <form.Subscribe
            selector={(state) => state.values}
            children={(values) => {
              const calculatorResults = getCalculatorResults(values);

              return (
                <div className={"flex h-full flex-col gap-y-6"}>
                  <div className={"flex items-center"}>
                    <div>
                      <p className={"text-preset-5 text-white"}>Tip Amount</p>
                      <p className={"text-preset-6 text-grey-400"}>/ person</p>
                    </div>
                    {/*<h2 className={"text-preset-1 ml-auto text-green-400"}>${calculatorResults?.tipAmount?.toFixed(2)}</h2>*/}
                    <h2 className={"text-preset-1 ml-auto text-green-400"}>
                      ${calculatorResults ? calculatorResults?.tipAmount?.toFixed(2) : "0.00"}
                    </h2>
                  </div>

                  <div className={"flex items-center"}>
                    <div>
                      <p className={"text-preset-5 text-white"}>Total</p>
                      <p className={"text-preset-6 text-grey-400"}>/ person</p>
                    </div>
                    {/*<h2 className={"text-preset-1 ml-auto text-green-400"}>${calculatorResults?.total?.toFixed(2)}</h2>*/}
                    <h2 className={"text-preset-1 ml-auto text-green-400"}>${calculatorResults ? calculatorResults?.total?.toFixed(2) : "0.00"}</h2>
                  </div>

                  <button
                    className={
                      "text-preset-4 mt-auto w-full rounded-[5px] bg-green-400 py-3 text-green-900 uppercase hover:bg-green-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    }
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
      </main>
    </div>
  );
}
