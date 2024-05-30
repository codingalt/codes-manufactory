import React, { useEffect } from 'react'
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import "./gallery.scss"

const Projects = (props) => {
     useEffect(() => {
       let lightbox = new PhotoSwipeLightbox({
         gallery: "#" + props.galleryID,
         children: "a",
         pswpModule: () => import("photoswipe"),
       });
       lightbox.init();

       return () => {
         lightbox.destroy();
         lightbox = null;
       };
     }, []);
  return (
    <div className="pswp-gallery" id={props.galleryID}>
      <div className="testt">
        {props.images.map((image, index) => (
          <a
            href={image.largeURL}
            // data-pswp-width={image.width}
            // data-pswp-height={image.height}
            key={props.galleryID + "-" + index}
            target="_blank"
            rel="noreferrer"
          >
            <img src={image.thumbnailURL} alt="" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects