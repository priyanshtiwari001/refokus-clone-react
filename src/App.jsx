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
    <div className="bg-zinc-900  h-full font-sans w-full  text-white">
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
