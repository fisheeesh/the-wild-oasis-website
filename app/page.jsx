import Image from "next/image";
import Link from "next/link";
import bg from '@/public/bg.png'
import Intro from "./_components/Intro";
import Offers from "./_components/Offers";
import HotelFacilities from "./_components/HotelFacilities";
import Newsletter from "./_components/Newsletter";
import Footer from "./_components/Footer";
import Hero from "./_components/Hero";

export default function Page() {
  return (
    <>
      <Hero />
      <Intro />
      <Offers />
      <HotelFacilities />
      <Newsletter />
      <Footer />
    </>
  );
}
