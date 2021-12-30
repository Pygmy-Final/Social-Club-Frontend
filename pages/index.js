import Head from "next/head";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import SuccessMessage from "../components/SuccessMessage";

export default function index() {
  return (
    <div className="bg-[#E7ECEF] ">
      <div className="h-screen scale-95 rounded-md ">
        <Head>
          <title>Social Club</title>
        </Head>

        <Header />

        {/* <SuccessMessage /> */}

        <div className="fixed top-5 left-0 right-0 rounded-md bg-[#E7ECEF] drop-shadow-2xl -z-50  h-[47.5rem] ">
          <main className="h-96">
            {/* <Sidebar/> */}
            {/* <HomePage /> */}
            <HomePage />
          </main>
        </div>
      </div>
    </div>
  );
}
