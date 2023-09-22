import Image from "next/image";
import React, { useEffect, useRef } from "react";
import bg from "/public/bg-02.jpg";
import sideL from "/public/clothing04.png";
import sideR from "/public/clothing05.png";
import { setInitialStates, moveSideImages, scaleCenterImage, moveUpTitle } from './grid-anims'
import localFont from "next/font/local";

const titlefont = localFont({
  src: "../../public/gatheraz.otf",
});

const ImageGrid = ({ timeline }) => {
  const centerImageWrapperRef = useRef(null);
  const centerImageRef = useRef(null);
  const leftImageRef = useRef(null);
  const rightImageRef = useRef(null);

  const centerImageTitleRef = useRef(null);

  useEffect(() => {
    timeline &&
      timeline
        .add(setInitialStates(centerImageRef.current))
        .add(moveSideImages(leftImageRef.current, rightImageRef.current))
        // adding '<' makes it so it happens at the same time as the one before it
        .add(scaleCenterImage(centerImageWrapperRef.current, centerImageRef.current), '<')
        .add(moveUpTitle(centerImageTitleRef.current), '<')
  }, [timeline]);

  return (
    <section
      className="image-grid relative flex justify-center 
    items-center w-full h-screen overflow-hidden bg-stone-900"
    >
      <div className="images flex justify-center items-center gap-10 w-[200%]">
        <div className="img-container">
          <Image
            priority
            fill
            src={sideL}
            alt=""
            className="w-full h-full object-cover"
            ref={leftImageRef}
          />
        </div>

        <div className="img-container"></div>

        <div
          className="img-container"
          data-wrapper-center
          ref={centerImageWrapperRef}
          onClick={() => timeline.play()}
        >
          <div className="center-title">
            <h2 className={`${titlefont.className} font-black sm:text-[12rem] tracking-wider`} ref={centerImageTitleRef}>
              DAYTONA
            </h2>
          </div>
          <Image
            priority
            fill
            src={bg}
            alt=""
            className="w-full h-full object-cover"
            data-image-center
            ref={centerImageRef}
          />
        </div>
        <div className="img-container">
          <Image
            priority
            fill
            src={sideR}
            alt=""
            className="w-full h-full object-cover"
            ref={rightImageRef}
          />
        </div>
      </div>
    </section>
  );
};

export default ImageGrid;
