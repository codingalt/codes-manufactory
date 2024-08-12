import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";
import { Image } from "@nextui-org/react";
import { useMediaQuery } from "@uidotdev/usehooks";
import "./grid.scss";

export const ParallaxScroll = ({ images, className }) => {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll({});
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 500]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -400]);

  // Distribute images into three columns for larger screens
  const columns = [[], [], []];
  images?.forEach((image, index) => {
    columns[index % 3].push(image);
  });

  return (
    <div
      className={cn("scrollbar-hide items-start w-full", className)}
      ref={gridRef}
    >
      <div className="max-w-7xl mx-auto pt-40 pb-0 sm:pb-[36rem] px-9 sm:px-10">
        {isSmallDevice ? (
          // Mobile layout: Stack all images in a single column
          <div className="grid gap-10 sm:gap-12">
            {images?.map((el, idx) => (
              <motion.div
                style={{ y: translateFirst }}
                key={"grid-mobile-" + idx}
              >
                <Image
                  src={el}
                  className="h-auto shadow w-full object-cover object-left-top rounded-lg gap-0"
                  height="100%"
                  alt="thumbnail"
                />
              </motion.div>
            ))}
          </div>
        ) : (
          // Desktop layout: Display images in three columns
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-12">
            <div className="grid gap-10 sm:gap-12">
              {columns[0]?.map((el, idx) => (
                <motion.div style={{ y: translateFirst }} key={"grid-1" + idx}>
                  <Image
                    src={el}
                    className="h-auto shadow w-full object-cover object-left-top rounded-lg gap-0"
                    height="100%"
                    alt="thumbnail"
                  />
                </motion.div>
              ))}
            </div>
            <div className="grid gap-10 sm:gap-12">
              {columns[1]?.map((el, idx) => (
                <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
                  <Image
                    src={el}
                    className="h-auto shadow w-full object-cover object-left-top rounded-lg gap-0"
                    height="100%"
                    alt="thumbnail"
                  />
                </motion.div>
              ))}
            </div>
            <div className="grid gap-10 sm:gap-12">
              {columns[2]?.map((el, idx) => (
                <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
                  <Image
                    src={el}
                    className="h-auto shadow w-full object-cover object-left-top rounded-lg gap-0"
                    height="100%"
                    alt="thumbnail"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
