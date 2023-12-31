Splitting();
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();
tl.from(".name .char", 1.3, {
    opacity: 0,
    xPercent: -130,
    stagger: 0.06,
    ease: "back.out"
})
    .from(".job .char", 0.7, {
        opacity: 0,
        xPercent: -130,
        stagger: 0.06,
        ease: "back.out"
    }, "-=1")
    .from(".rectangle", 1.6, {
        opacity: 0,
        scaleX: 0,
        transformOrigin: "left",
        ease: "back.out"
    }, "-=1.5");


const gsapItem = gsap.utils.toArray(".anim_item");

gsapItem.forEach((gsIt) => {

    const textChar = gsIt.querySelectorAll(".char");

    let tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: gsIt,
            start: "top 90%",
            end: "70% 80%",
            toggleActions: "play none none none",
            scrub: 1
        }
    })
    tl2.from(textChar, 7, {
        opacity: 0,
        xPercent: -130,
        stagger: 0.06,
        ease: "back.out"
    })
})