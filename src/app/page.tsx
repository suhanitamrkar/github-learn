import Image from "next/image";
import Navbar from "./Componetns/Navbar";

import Banner from "./Componetns/Banner";
import Benefits from "./Componetns/Benefits";
import Experience from "./Componetns/Experience";

import Logo from "./Componetns/Logo";

import Footer from "./Componetns/Footer";
import Darkgreen from "./Componetns/Darkgreen";
import Data from "./Componetns/Data";

import { Blog } from "./Componetns/Blog";
import { Suspense } from "react";

export default function Home() {
  return (
   
   <>
   
   <Banner/>

   
   <Benefits/>
   <Experience/>
   <Data/>
   <Logo/>
   <Darkgreen/>

<Blog/>

   
   
   
   </>
  );
}
