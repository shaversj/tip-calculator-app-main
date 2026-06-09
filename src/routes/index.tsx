import { createFileRoute } from "@tanstack/react-router";
import { useForm } from "@tanstack/react-form";
import { useState } from "react";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const [tipCalculation, setTipCalculation] = useState(0);

  const form = useForm({
    defaultValues: {
      bill: "",
      tip: "",
      people: "",
    },
  });

  return (
    <div className="bg-grey-200 flex min-h-screen flex-col items-center justify-center">
      <img src={"/logo.svg"} alt="logo" />
      <main className={"mt-[87.86px] flex h-120.25 w-230 gap-x-12 rounded-[25px] bg-white shadow-[0_32px_43px_rgba(79,166,175,0.200735)]"}>
        <section className={"basis-1/2 py-8 pl-10"}>
          <form
            className={"pt-[16.5px]"}
            onSubmit={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <form.Field
              name="bill"
              children={({ field }) => (
                <div className={"flex flex-col gap-y-2 pb-10"}>
                  <label className={"text-preset-5 text-grey-500"} htmlFor="bill">
                    Bill
                  </label>
                  <input id="bill" {...field} className={"bg-grey-50 text-preset-3 rounded-[5px] px-4 pt-2 text-green-900"} />
                </div>
              )}
            />

            <form.Field
              name="tip"
              children={({ field }) => (
                <fieldset className={"flex flex-col gap-y-2"}>
                  <legend className={"text-preset-5 text-grey-500"}>Select Tip %</legend>
                  <div className={"flex flex-wrap gap-4 pt-2"}>
                    {[5, 10, 15, 25, 50].map((tip) => (
                      <div className={"text-preset-3 grid h-12 w-29 appearance-none place-items-center rounded-[5px] bg-green-900 text-white"}>
                        <label key={tip} className={"flex items-center gap-2"}>
                          <input className={"appearance-none"} type="radio" value={tip} {...field} />
                          {tip}%
                        </label>
                      </div>
                    ))}
                    <div className={"text-preset-3 bg-grey-50 h-12 w-29 rounded-[5px] pl-3 placeholder:text-white"}>
                      <label key={"custom"} className={""}>
                        <input
                          type="number"
                          className={
                            "placeholder:text-preset-3 placeholder:text-grey-550 h-12 w-29 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                          }
                          placeholder="Custom"
                          onChange={(e) => {
                            const value = e.target.value;
                            if (value === "") {
                              field.onChange("");
                            } else {
                              const num = parseFloat(value);
                              if (!isNaN(num)) {
                                field.onChange(num);
                              }
                            }
                          }}
                        />
                      </label>
                    </div>
                  </div>
                </fieldset>
              )}
            />

            <form.Field
              name="people"
              children={({ field }) => (
                <div className={"flex flex-col gap-y-2 pt-10"}>
                  <label className={"text-preset-5 text-grey-500"} htmlFor="people">
                    Number of People
                  </label>
                  <input id="people" {...field} className={"bg-grey-50 text-preset-3 rounded-[5px] px-4 pt-2 text-green-900"} />
                </div>
              )}
            />
          </form>
        </section>

        <section className={"basis-1/2 rounded-r-[25px] bg-green-900 px-10 py-[37.5px]"}>
          <div className={"flex h-full flex-col gap-y-6"}>
            <div className={"flex items-center"}>
              <div>
                <p className={"text-preset-5 text-white"}>Tip Amount</p>
                <p className={"text-preset-6 text-grey-400"}>/ person</p>
              </div>
              <h2 className={"text-preset-1 ml-auto text-green-400"}>$4.27</h2>
            </div>

            <div className={"flex items-center"}>
              <div>
                <p className={"text-preset-5 text-white"}>Total</p>
                <p className={"text-preset-6 text-grey-400"}>/ person</p>
              </div>
              <h2 className={"text-preset-1 ml-auto text-green-400"}>$32.79</h2>
            </div>

            <button
              className={
                "text-preset-4 mt-auto w-full rounded-[5px] bg-green-400 py-3 text-green-900 uppercase hover:bg-green-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              }
            >
              Reset
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
