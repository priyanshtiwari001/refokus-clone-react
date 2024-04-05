import { motion } from "framer-motion";
const Marquee = ({ imageUrls, direction }) => {
  return (
    <div className="flex w-full overflow-hidden">
      <motion.div
        initial={{ x: direction == "left" ? "0" : "-100%" }}
        animate={{ x: direction == "left" ? "-100%" : "0" }}
        transition={{
          ease: "linear",
          duration: 15,
          repeat: Infinity,
          delay: 0.8,
        }}
        className=" flex  flex-shrink-0 gap-32 py-8 pr-40 "
      >
        {imageUrls.map((imgUrl, i) => (
          <img key={i} src={imgUrl} alt="" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction == "left" ? "0" : "-100%" }}
        animate={{ x: direction == "left" ? "-100%" : "0" }}
        transition={{
          ease: "linear",
          duration: 15,
          repeat: Infinity,
          delay: 0.8,
        }}
        className=" flex  flex-shrink-0 gap-32 py-8 pr-40 "
      >
        {imageUrls.map((imgUrl, i) => (
          <img key={i} src={imgUrl} alt="" />
        ))}
      </motion.div>
    </div>
  );
};
export default Marquee;
