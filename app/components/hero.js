"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import bg from "/public/bg-02.jpg";
import ClothesCarousel from "./clothes-carousel";
import localFont from "next/font/local";
import { Handjet } from "next/font/google";
import {
  titleAnimation,
  textAnimation,
  fadeImage,
  buttonAnimation,
  outTextAnimation,
  outImageAnimation,
  outTitleAnimation,
  backgroundColorChange,
  outButtonAnimation,
  outCarouselAnimation,
} from "./hero-anims";

const titlefont = localFont({
  src: "../../public/gatheraz.otf",
});

const handjet = Handjet({
  weight: ["300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

const Hero = ({ timeline }) => {
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const textRefs = useRef([]);
  const buttonRef = useRef(null);

  const sectionRef = useRef(null);
  const carouselRef = useRef(null);

  useEffect(() => {
    buttonAnimation(buttonRef.current);
    titleAnimation(titleRef.current);
    textAnimation(textRefs.current);
    fadeImage(imageRef.current);
  }, []);

  const handleOutAnimations = () => {
    if (timeline) {
      timeline
        .add(outButtonAnimation(buttonRef.current))
        .add(outTitleAnimation(titleRef.current))
        .add(outCarouselAnimation(carouselRef.current), "<")
        .add(outTextAnimation(textRefs.current), "<")
        .add(outImageAnimation(imageRef.current))
        .add(backgroundColorChange(sectionRef.current), "<")
        .play();
    }
  };

  return (
    <main>
      <section ref={sectionRef}>
        <div
          className="absolute sm:left-96 sm:top-[21rem] z-40 w-[600px] h-[900px] overflow-hidden"
          ref={carouselRef}
        >
          <ClothesCarousel />
        </div>

        <div className="z-10 relative w-full h-screen">
          <div className="sm:fixed sm:right-96 sm:top-[21rem] overflow-hidden">
            <h1
              className={`${titlefont.className} font-black sm:text-[12rem] tracking-wider overflow-hidden translate-y-[-100%] text-[#A6E22E]`}
              ref={titleRef}
            >
              daytona
            </h1>
          </div>
          <div className="sm:fixed sm:right-96 sm:bottom-96">
            <p
              className={`${handjet.className} font-medium sm:text-6xl sm:w-[700px] text-white text-justify uppercase`}
            >
              <span className="overflow-hidden block">
                <span
                  className="overflow-hidden block translate-y-[100%]"
                  ref={(text) => textRefs.current.push(text)}
                >
                  Daytona fuses grungy vibes with modern style. Drawing{" "}
                </span>
              </span>
              <span className="overflow-hidden block">
                <span
                  className="overflow-hidden block translate-y-[100%]"
                  ref={(text) => textRefs.current.push(text)}
                >
                  inspiration from Tokyo&apos;s dynamic streets, this brand offers:{" "}
                </span>
              </span>
              <span className="overflow-hidden block font-light">
                <span
                  className="overflow-hidden block translate-y-[100%]"
                  ref={(text) => textRefs.current.push(text)}
                >
                  edgy, contemporary fashion for the urban soul.{" "}
                  <b>[BASED IN SHIBUYA]</b>
                </span>
              </span>
            </p>
          </div>
          <div className="overflow-hidden absolute  bottom-60 right-96">
            <button
              className={`${titlefont.className} text-white text-6xl hover:underline underline-offset-8`}
              ref={buttonRef}
              onClick={handleOutAnimations}
            >
              <a>click me</a>
            </button>
          </div>
        </div>
        <Image
          priority
          fill
          src={bg}
          alt=""
          className="w-full h-full object-cover opacity-100"
          ref={imageRef}
        />
      </section>
    </main>
  );
};

export default Hero;
