import { Frown } from "lucide-react";
import Cards from "./components/cards/Cards";
import Footer from "./components/Footer";
import Marquees from "./components/marquees/Marquees";
import Navbar from "./components/Navbar";
import Products from "./components/products/Products";
import Stripes from "./components/stripes/Stripes";
import Work from "./components/Work";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <div className="hidden md:block bg-zinc-900  h-full font-sans w-full  text-white">
        <Navbar />
        <Work />
        <Stripes />
        <Products />
        <Marquees />
        <Cards />
        <Footer />
      </div>

      <div className=" md:hidden w-full h-screen  uppercase px-6  bg-zinc-900 flex flex-col gap-3 items-center justify-center text-zinc-300">
        <p className="w-full text-center text-4xl font-light  font-Poppins">
          This is not responsive. Try with
          <span className="text-purple-500"> desktop view!</span>
        </p>
        <div className="flex gap-2">
          <Frown className="w-20 h-20 text-zinc-300" />
          <Frown className="w-20 h-20 text-zinc-300" />
        </div>
      </div>
    </>
  );
}

export default App;
