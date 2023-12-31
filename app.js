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
            end: "10% 10%",
            toggleActions: "play none none none",
            scrub: 1
        }
    })
    tl2.from(textChar, 7, {
        opacity: 0,
        xPercent: -130,
        stagger: 0.06,
        ease: "back.out"
    });
});


//nav bar animations

let sections = document.querySelectorAll(".section");
let navLinks = document.querySelectorAll(".headerNav nav a");

window.onscroll = () => {
    sections.forEach(sect => {
        let top = window.scrollY;
        let offset = sect.offsetTop - 100;
        let height = sect.offsetHeight;
        let id = sect.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
            })
            let activeLink = document.querySelector('.headerNav nav a[href="#' + id + '"]');

            if (activeLink) {
                activeLink.classList.add("active");
            }
            return;
        }
    })
}


let logo = document.querySelector('.logo a');

logo.addEventListener('click', function (event) {
    event.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

let contactLink = document.querySelector('.headerNav nav a[href="#contact"]');

contactLink.addEventListener('click', function (event) {
    event.preventDefault();

    let contactSection = document.getElementById('contact');
    let offset = contactSection.offsetTop - 75;

    window.scrollTo({
        top: offset,
        behavior: 'smooth'
    });
});