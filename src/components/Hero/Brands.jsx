import React from "react";
import css from "./Hero.module.scss";
import profile1 from "../../assets/p1.png";
import profile2 from "../../assets/p2.png";
import profile3 from "../../assets/p3.png";
import brand1 from "../../assets/b1.svg";
import brand2 from "../../assets/b2.svg";
import brand3 from "../../assets/b3.svg";
import {Avatar, AvatarGroup, Image} from "@nextui-org/react"
import { useMediaQuery } from "@uidotdev/usehooks";

const Brands = () => {
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  return (
    <div
      className={`${css.brands} max-w-screen-xl 3xl:max-w-screen-2xl mx-auto px-4 md:px-9 2xl:px-0 3xl:px-5`}
    >
      <div className={css.leftSide}>
        {/* <div className={css.images}>  */}
          <AvatarGroup isBordered size={isSmallDevice ? "sm" : "md"}>
            <Avatar src={profile1} />
            <Avatar src={profile2} />
            <Avatar src={profile3} />
          </AvatarGroup>
        {/* </div>  */}
        <p className="text-tiny md:text-sm w-64 font-light">
          Join over 30+ happy customers and book a demo today.
        </p>
      </div>
      <div className={`${css.rightSide} scrollbar-hide`}>
        <div className={`${css.images} scrollbar-hide overflow-x-auto`}>
          <div className={css.imageWrapper}>
            <Image src={brand1} alt="Brand" />
            <Image src={brand2} alt="Brand" />
            <Image src={brand3} alt="Brand" />
          </div>

          <div className={css.imageWrapper}>
            <Image src={brand1} alt="Brand" />
            <Image src={brand2} alt="Brand" />
            <Image src={brand3} alt="Brand" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
