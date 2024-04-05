import { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

const videos = [
  { url: "/videos/arqitel.webm" },
  { url: "/videos/Silvr.webm" },
  { url: "/videos/layland.mp4" },
  { url: "/videos/TTR.webm" },
  { url: "/videos/mavin.mp4" },
];
var products = [
  {
    title: "Arqitel",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga edistinctio natus aut consequatur nisi maxime blanditiis! Lorem ipsum dolor sit amet consectetur.",
    live: true,
    case: false,
  },
  {
    title: "Silvr",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga edistinctio natus aut consequatur nisi maxime blanditiis! Lorem ipsum dolor sit amet consectetur.",
    live: true,
    case: false,
  },
  {
    title: "Layout Land",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga edistinctio natus aut consequatur nisi maxime blanditiis! Lorem ipsum dolor sit amet consectetur.",
    live: true,
    case: false,
  },
  {
    title: "TTR",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga edistinctio natus aut consequatur nisi maxime blanditiis! Lorem ipsum dolor sit amet consectetur.",
    live: true,
    case: true,
  },
  {
    title: "Maniv",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga edistinctio natus aut consequatur nisi maxime blanditiis! Lorem ipsum dolor sit amet consectetur.",
    live: true,
    case: true,
  },
];
const Products = () => {
  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 22);
  };
  return (
    <div className="relative mt-20 ">
      {products.map((product, index) => (
        <Product key={index} product={product} mover={mover} i={index} />
      ))}
      <div className="absolute top-0 w-full h-full  pointer-events-none">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: pos + "rem" }}
          transition={{ ease: "circOut", duration: 0.6 }}
          className="window absolute w-[25rem] h-[22rem]    left-[35%]   overflow-hidden  rounded-xl"
        >
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: "circOut", duration: 0.5 }}
            className="w-full h-full "
          >
            <video autoPlay muted loop>
              <source src={videos[0].url} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: "circOut", duration: 0.5 }}
            className="w-full h-full  "
          >
            <video autoPlay muted loop>
              <source src={videos[1].url} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: "circOut", duration: 0.5 }}
            className="w-full h-full "
          >
            <video autoPlay muted loop>
              <source src={videos[2].url} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: "circOut", duration: 0.5 }}
            className="w-full h-full  "
          >
            <video autoPlay muted loop>
              <source src={videos[3].url} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + "rem" }}
            transition={{ ease: "circOut", duration: 0.5 }}
            className="w-full h-full  "
          >
            <video autoPlay muted loop>
              <source src={videos[4].url} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
export default Products;
