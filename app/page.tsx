// app/page.tsx

import React from "react";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Page = async ({
  searchParams,
}: {
  searchParams: { status?: string; gender?: string };
}) => {
  return (
    <div>
      <Navbar />
      <Home searchParams={searchParams} />
      <Footer />
    </div>
  );
};

export default Page;
