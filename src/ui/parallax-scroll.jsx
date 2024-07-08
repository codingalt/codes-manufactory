import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";
import { Image } from "@nextui-org/react";
import { useMediaQuery } from "@uidotdev/usehooks";

export const ParallaxScroll = ({ images, className }) => {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({
    // container: gridRef, // remove this if your container is not fixed height
    // offset: ["start start", "end start"], // remove this if your container is not fixed height
  });
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);
  
  const total = isSmallDevice ? 2 : 3;
  const third = Math.ceil(images?.length / total);

  const firstPart = images?.slice(0, third);
  const secondPart = images?.slice(third, 2 * third);
  const thirdPart = images?.slice(2 * third);

  return (
    <div
      className={cn("items-start scrollbar-hide scroll-smooth", className)}
      ref={gridRef}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-7xl mx-auto gap-0 md:gap-10 pt-32 pb-40 px-4"
        ref={gridRef}
      >
        <div className="grid gap-10 h-full mb-0 p-0 grid-cols-1 items-start">
          {firstPart?.map((el, idx) => (
            <motion.div
              style={{ y: translateFirst }} // Apply the translateY motion value here
              key={"grid-1" + idx}
            >
              <Image
                src={el}
                className="h-full w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10 h-full mb-0 p-0 grid-cols-1 items-start">
          {secondPart?.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
              <Image
                src={el}
                className="h-1/2 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10 h-full mb-0 p-0 grid-cols-1 items-start">
          {thirdPart?.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
              <Image
                src={el}
                className="h-1/2 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
