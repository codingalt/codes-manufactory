import React from "react";
import RecentWork from "../components/RecentWork/RecentWork";
import QuoteSection from "../components/QuoteSection/QuoteSection";
import OurServices from "../components/OurServices/OurServices";
import Testimonial from "../components/Testimonial/Testimonial";
import Pricing from "../components/Pricing/Pricing";
import FAQ from "../components/FAQ/FAQ";
import Hero from "../components/Hero/Hero";

const IndexPage = () => {
  return (
    <>
      <Hero />
      <RecentWork />
      <QuoteSection />
      <OurServices />
      <Testimonial />
      {/* <Pricing /> */}
      <FAQ />
    </>
  );
};

export default IndexPage;
