"use client"

import Events from "./_components/Events";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";
import HighlightImages from "./_components/HighlightImages";
import HotelFacilities from "./_components/HotelFacilities";
import Intro from "./_components/Intro";
import Newsletter from "./_components/Newsletter";
import Offers from "./_components/Offers";

export default function Page() {
  return (
    <>
      <Hero />
      <Intro />
      <Offers />
      <HotelFacilities />
      <HighlightImages />
      <Events />
      <Newsletter />
      <Footer />
      {/* <ScrollTopBtn /> */}
    </>
  );
}
