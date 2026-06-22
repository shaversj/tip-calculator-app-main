import type { TipCalculatorFormApi } from "#/types/tip-calculator.ts";

const presetTips = [5, 10, 15, 25, 50];

type TipCalculatorFormProps = {
  form: TipCalculatorFormApi;
};

export function TipCalculatorForm({ form }: TipCalculatorFormProps) {
  return (
    <section className={"px-6 pb-8 md:px-[75.5px] md:pb-10 lg:basis-1/2 lg:px-0 lg:py-8 lg:pb-0 lg:pl-10"}>
      <form className={"pt-8.5 md:pt-13.5 lg:pt-[16.5px]"}>
        <form.Field
          name="bill"
          children={(field) => (
            <div className={"flex flex-col gap-y-2 pb-10"}>
              <label className={"text-preset-5 text-grey-500"} htmlFor="bill">
                Bill
              </label>
              <div
                className={`bg-grey-50 relative grid h-12 min-w-full place-items-center rounded-[5px] px-4 hover:outline-2 hover:outline-green-400 ${!field.state.meta.isValid ? "outline outline-red-500" : ""}`}
              >
                <img src="/icon-dollar.svg" alt="" aria-hidden="true" className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2" />
                <input
                  id="bill"
                  value={field.state.value}
                  placeholder={"0"}
                  onChange={(e) => field.setValue(e.target.value)}
                  className={"bg-grey-50 text-preset-3 h-9 w-full text-right text-green-900 outline-none"}
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
                <div className={"grid grid-cols-2 gap-4 pt-2 md:grid-cols-3"}>
                  {presetTips.map((tip) => {
                    const checked = field.state.value === tip;
                    return (
                      <div
                        key={tip}
                        className={`text-preset-3 grid h-12 appearance-none place-items-center rounded-[5px] hover:bg-green-200 hover:text-green-900 lg:w-29 ${checked ? "bg-green-400 text-green-900" : "bg-green-900 text-white"}`}
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
                  <div
                    className={
                      "text-preset-3 bg-grey-50 flex h-12 items-center justify-center rounded-[5px] px-3 placeholder:text-white hover:outline-2 hover:outline-green-400 lg:w-29"
                    }
                  >
                    <label>
                      <input
                        type="number"
                        min="0"
                        inputMode="decimal"
                        value={customTipValue}
                        className={
                          "placeholder:text-preset-3 placeholder:text-grey-550 h-full w-full [appearance:textfield] outline-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
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
          validators={{
            onChange: ({ value }) => (parseFloat(value) === 0 ? "Can't be zero" : undefined),
          }}
          children={(field) => (
            <div className={"flex flex-col gap-y-2 pt-10"}>
              <div className={"flex"}>
                <label className={"text-preset-5 text-grey-500"} htmlFor="people">
                  Number of People
                </label>
                {!field.state.meta.isValid && (
                  <em className={"text-preset-5 ml-auto text-orange-400"} role="alert">
                    {field.state.meta.errors.join(", ")}
                  </em>
                )}
              </div>

              <div
                className={`bg-grey-50 relative grid h-12 min-w-full place-items-center rounded-[5px] px-4 ${
                  !field.state.meta.isValid ? "outline-2 outline-orange-400 active:outline-2" : "hover:outline-2 hover:outline-green-400"
                }`}
              >
                <img src="/icon-person.svg" alt="" aria-hidden="true" className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2" />
                <input
                  id="people"
                  value={field.state.value}
                  placeholder={"0"}
                  onChange={(e) => field.setValue(e.target.value)}
                  className={"bg-grey-50 text-preset-3 h-9 w-full text-right text-green-900 outline-none"}
                />
              </div>
            </div>
          )}
        />
      </form>
    </section>
  );
}
