import gsap from "gsap"

gsap.defaults({
    ease: "expo.inOut",
  });

export const showNav = (navRef) => {
    console.log('hola')
    gsap.to(navRef, {
        translateX: 0,
        duration: 1.5,
    })
}