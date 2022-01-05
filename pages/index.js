import Head from "next/head";

import HomePage from "./HomePage";


export default function index() {
  
  return (
    <div className="bg-[#E7ECEF] ">
      <div className="h-screen scale-95 rounded-md ">
        <Head>
          <title>Social Club</title>
        </Head>

        <HomePage />
      </div>
    </div>
  );
}
