import gsap from "gsap";
gsap.defaults({
  duration: 2,
  ease: "expo.out",
});

export const titleAnimation = (titleRef) => {
  return gsap.to(titleRef, {
    y: 0,
    duration: 2.5,
  });
};

export const outTitleAnimation = (titleRef) => {
  return gsap.to(titleRef, {
    y: -1000,
    duration: 2.5,
  })
}

export const textAnimation = (textRefs) => {
  gsap.set(textRefs, {
    opacity: 0.2,
  });
  return gsap.to(textRefs, {
    y: 0,
    stagger: 0.2,
    opacity: 1,
  });
};

export const outTextAnimation = (textRefs) => {
  return gsap.to(textRefs, {
    opacity: 0,
    y: 200,
    stagger: 0.05,
  })
}

export const outCarouselAnimation = (carouselRef) => {
  gsap.to(carouselRef, {
    opacity: 0
  })
}

export const fadeImage = (imageRef) => {
  gsap.set(imageRef, { opacity: 1 });

  return gsap.to(imageRef, {
    opacity: 0.2,
    duration: 2.8,
  });
};

export const outImageAnimation = (imageRef) => {
  gsap.to(imageRef, {
    opacity: 1,
    height: 0,
  })
}

export const buttonAnimation = (buttonRef) => {
  gsap.set(buttonRef, {
    opacity: 0,
    y: 1000
  })
  return gsap.to(buttonRef, {
    opacity: 1,
    y: 0
  })
}

export const outButtonAnimation = (buttonRef) => {
  gsap.to(buttonRef, {
    y: 1000
  })
}

export const backgroundColorChange = (sectionRef) => {
  gsap.to(sectionRef, {
    backgroundColor: '#A6E22E'
  })
}

// carousel animation

export const handleCarousel = (container) => {
  const images = Array.from(container.children);
  let z = 999;

  images.forEach((image) => {
    z -= 1;
    image.style.zIndex = z;
  });

  // Initial animation
  const tl = gsap.timeline();
  tl.set(images, {
    x: () => {
      return 500 * Math.random() - 250;
    },
    y: "500%",
    rotation: () => {
      return 48 * Math.random() - 24;
    },
    opacity: 1,
  })
    .to(images, { x: 0, y: 0, stagger: -0.25 })
    .to(images, {
      rotation: () => {
        return 16 * Math.random() - 8;
      },
    });
};

