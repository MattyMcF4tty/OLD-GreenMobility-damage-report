import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Navbar, NavButtons } from "../components/navigation";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <div className="p-4 bg-MainGreen-100 h-max">
        <Component {...pageProps} />
        <div className="text-center text-2xl text-MainGreen-300 font-semibold">
          <h1>GreenMobility damage report</h1>
        </div>
        <main className="container mx-auto p-8">
          <section className="mb-8">
            <h2 className="text-[16px] font-semibold mb-4">
              What to expect in this damage report
            </h2>
            <h3></h3>
          </section>
        </main>
        <NavButtons />
      </div>
    </>
  );
}

export default MyApp;
