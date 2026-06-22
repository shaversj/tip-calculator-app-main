import type { ReactNode } from "react";

type TipCalculatorLayoutProps = {
  children: ReactNode;
};

export function TipCalculatorLayout({ children }: TipCalculatorLayoutProps) {
  return (
    <main
      className={
        "mt-[40.86px] flex flex-col rounded-[25px] bg-white shadow-[0_32px_43px_rgba(79,166,175,0.200735)] md:mx-20 md:gap-y-10 lg:mt-[87.86px] lg:h-120.25 lg:w-230 lg:flex-row lg:gap-x-12"
      }
    >
      {children}
    </main>
  );
}
