import gsap from "gsap";
// // setInitialStates
// moveSideImages
// scaleCenterImage
// moveUpTitle

gsap.defaults({
  duration: 2,
  ease: "expo.inOut",
});

export const setInitialStates = (centerImageRef) => {
  gsap.set(centerImageRef, { scale: 1.5 });
};

export const moveSideImages = (leftImageRef, rightImageRef) => {
  const tl = gsap.timeline();
  tl.to(leftImageRef, {
    xPercent: -50,
    scale: 2,
    transformOrigin: "center right",
  }).to(
    rightImageRef,
    {
      xPercent: 50,
      scale: 2,
      transformOrigin: "center left",
    },
    0
  );

  return tl;
};

export const scaleCenterImage = (centerImageWrapperRef, centerImageRef) => {
  const tl = gsap.timeline();
    tl.to(centerImageWrapperRef, {
        width: '100%',
        height: '100vh',
    }).to(centerImageRef, {
        scale: 1
    }, 0)
  return tl;
};

export const moveUpTitle = (centerImageTitleRef) => {
  return gsap.to(centerImageTitleRef, {
    yPercent: -100,
  })
};
