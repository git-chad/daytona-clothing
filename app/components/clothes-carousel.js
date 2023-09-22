"use client";
import React, { useEffect, useRef } from "react";
import cl02 from "/public/clothing02.png";
import cl03 from "/public/clothing03.png";
import cl04 from "/public/clothing04.png";
import cl05 from "/public/clothing05.png";
import Image from "next/image";
import { handleCarousel } from "./hero-anims";

const ClothesCarousel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      handleCarousel(containerRef.current);
    }
  }, []);

  const images = [cl05, cl03, cl04, cl02];

  return (
    <section className="">
      <div ref={containerRef} className="">
        {images.map((src, index) => (
          <Image
            key={index}
            width={555}
            alt="clothes"
            className="absolute top-0 left-0"
            src={src}
          />
        ))}
      </div>
    </section>
  );
};

export default ClothesCarousel;
