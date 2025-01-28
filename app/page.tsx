import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Body } from "@/components/Body";
import { Blogg } from "@/components/Blogg";



import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Body/>
   <Blogg/>
   <Footer/>
   
    </>
  );
}