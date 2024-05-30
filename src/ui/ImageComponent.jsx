import React, { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";
import blankImage from "../assets/blank-img.jpg";
import { cn } from "../utils/cn";

const ImageComponent = ({ src, className, radius, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };

    img.onerror = () => {
      // console.error("Error loading image:", src);
      setIsError(true);
    };
    img.src = src;
  }, [src]);

  return (
    <>
      <div
        style={{
          display: imageLoaded || isError ? "none" : "inline",
          borderRadius: radius ? radius : "0px",
        }}
      >
        <Blurhash
          hash="L1QJfm-;fQ-;_3fQfQfQfQfQfQfQ"
          width={"100%"}
          height={"100%"}
          resolutionX={32}
          resolutionY={32}
          punch={1}
          style={{
            borderRadius: radius ? radius : "0px",
            overflow: "hidden",
          }}
        />
      </div>

      <div
        style={{
          display: !isError ? "none" : "inline",
          borderRadius: radius ? radius : "0px",
        }}
      >
        <img src={blankImage} className={className} loading="lazy" alt="Image" />
      </div>

      <img
        src={src}
        className={cn(
          "object-cover object-top absolute inset-0 h-full w-full transition duration-200",
          imageLoaded ? "blur-none" : "blur-md",
          className
        )}
        loading="lazy"
        alt="Image"
        style={{
        //   display: !imageLoaded ? "none" : "inline",
          borderRadius: radius ? radius : "0px",
        }}
        onClick={() => onClick(src)}
      />
    </>
  );
};

export default ImageComponent;
