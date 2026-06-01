import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="bg-grey-200 grid min-h-screen place-items-center">
      <img src={"/logo.svg"} alt="logo" />
      <main className={"h-[481px] w-[920px] rounded-[25px] bg-white shadow-[0_32px_43px_rgba(79,166,175,0.200735)]"}></main>
    </div>
  );
}
