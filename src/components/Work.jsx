import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

let img = [
  {
    id: 0,
    url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
    top: "50%",
    left: "50%",
    isActive: false,
  },
  {
    id: 1,
    url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
    top: "52%",
    left: "48%",
    isActive: false,
  },
  {
    id: 2,
    url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
    top: "47%",
    left: "52%",
    isActive: false,
  },
  {
    id: 3,
    url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
    top: "51%",
    left: "47%",
    isActive: false,
  },
  {
    id: 4,
    url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
    top: "53%",
    left: "49%",
    isActive: false,
  },
  {
    id: 5,
    url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
    top: "55%",
    left: "52%",
    isActive: false,
  },
];

const Work = () => {
  const [images, setImages] = useState(img);
  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function showImage(arr) {
      setImages((prev) =>
        prev.map((item) =>
          arr.indexOf(item.id) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }

    switch (Math.floor(data * 100)) {
      case 0:
        showImage([]);
        break;
      case 1:
        showImage([0]);
        break;
      case 2:
        showImage([0, 1]);
        break;
      case 3:
        showImage([0, 1, 2]);
        break;
      case 4:
        showImage([0, 1, 2, 3]);
        break;
      case 5:
        showImage([0, 1, 2, 3, 4]);
        break;
      case 6:
        showImage([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <div className="w-full ">
      <div className=" relative max-w-screen-lg mx-auto text-center">
        <h1 className="text-[30vw] font-sans select-none leading-none tracking-tight">
          work
        </h1>
        <div className=" absolute top-0 w-full h-full  ">
          {images.map((image) => {
            return (
              image.isActive && (
                <img
                  className="absolute w-60 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ top: image.top, left: image.left }}
                  key={image.id}
                  src={image.url}
                  alt=""
                />
              )
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Work;
