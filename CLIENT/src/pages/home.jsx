import React from "react";
import Header from "../components/Header/header";
import Banner from "../components/Banner/banner";
import Benefit from "../components/Benefit/benefit";
import Footer from "../components/Footer/footer";
import Sample from "../components/Samples/sample";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Benefit />
      <Sample />
      <Footer />
    </div>
  );
}
