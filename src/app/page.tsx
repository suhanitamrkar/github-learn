import Image from "next/image";
import Navbar from "./Componetns/Navbar";

import Banner from "./Componetns/Banner";
import Benefits from "./Componetns/Benefits";
import Experience from "./Componetns/Experience";
import MobileFeature from "./Componetns/MobileFeature";
import Logo from "./Componetns/Logo";
import AwardWinning from "./Componetns/AwardWinning";
import Footer from "./Componetns/Footer";
import Darkgreen from "./Componetns/Darkgreen";
import Data from "./Componetns/Data";

import { Blog } from "./Componetns/Blog";
import { Suspense } from "react";

export default function Home() {
  return (
   
   <>
   <Suspense fallback={<p>Loading...</p>}>
   <Banner/>
      </Suspense>
   
   <Benefits/>
   <Experience/>
   <Data/>
   <Logo/>
   <Darkgreen/>

<Blog/>

   <AwardWinning/>
   
   
   </>
  );
}
