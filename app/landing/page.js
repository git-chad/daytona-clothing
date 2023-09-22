"use client";
import { useState, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import Hero from "../components/hero";


const page = () => {
  const router = useRouter();
  const [shopTimeline, setShopTimeline] = useState();

  useLayoutEffect(() => {
    
    const context = gsap.context(() => {
      const tl = gsap.timeline({
        paused: true,
        onComplete: () => router.push("/shop"),
      });

      setShopTimeline(tl);
    });
    return context.revert();
  }, []);

  return (
    <div>
      <Hero timeline={shopTimeline}/>
    </div>
  );
};

export default page;
