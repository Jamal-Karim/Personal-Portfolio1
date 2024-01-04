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
    });
    tl2.from(textChar, 7, {
        opacity: 0,
        xPercent: -130,
        stagger: 0.06,
        ease: "back.out"
    })
});

let containers = document.querySelectorAll(".anim_img");

containers.forEach(container => {
    let image = container.querySelector(".Img");

    let tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: container,
            toggleActions: "restart none none none"
        }
    });

    tl3.set(container, { autoAlpha: 1, transformOrigin: "top left" });
    tl3.from(image, {
        scale: 0,
        ease: "back.out",
        duration: 0.5
    });

})


//nav bar animations

// let sections = document.querySelectorAll(".section");
// let navLinks = document.querySelectorAll(".headerNav nav a");

// window.onscroll = () => {
//     sections.forEach(sect => {
//         let top = window.scrollY;
//         let offset = sect.offsetTop - 100;
//         let height = sect.offsetHeight;
//         let id = sect.getAttribute("id");

//         if (top >= offset && top < offset + height) {
//             navLinks.forEach(links => {
//                 links.classList.remove("active");
//             })
//             let activeLink = document.querySelector('.headerNav nav a[href="#' + id + '"]');

//             if (activeLink) {
//                 activeLink.classList.add("active");
//             }
//             return;
//         }
//     })
// }


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
    let offset = contactSection.offsetTop + 100;

    window.scrollTo({
        top: offset,
        behavior: 'smooth'
    });
});

let aboutLink = document.querySelector('.headerNav nav a[href="#about"]');

aboutLink.addEventListener('click', function (event) {
    event.preventDefault();

    let aboutSection = document.getElementById('about');
    let offset = aboutSection.offsetTop + 130;

    window.scrollTo({
        top: offset,
        behavior: 'smooth'
    });
});

let projLink = document.querySelector('.headerNav nav a[href="#projects"]');

projLink.addEventListener('click', function (event) {
    event.preventDefault();

    let projSection = document.getElementById('projects');
    let offset = projSection.offsetTop + 130;

    window.scrollTo({
        top: offset,
        behavior: 'smooth'
    });
});


var currentYear = new Date().getFullYear();

document.getElementById('currYear').innerText = 'Ⓒ ' + currentYear;



document.addEventListener("DOMContentLoaded", function () {
    var headerNav = document.querySelector(".headerNav");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            gsap.to(headerNav, { backgroundColor: "rgba(0, 0, 0, 0.7)", duration: 0.3 });
        } else {
            gsap.to(headerNav, { backgroundColor: "rgba(0, 0, 0, 0)", duration: 0.3 });
        }
    });
});

//PROJECT 1
//view repo button project 1

function project1Redirect(){

    let repoUrl = "https://github.com/Jamal-Karim/Personal-Portfolio1";

    window.open(repoUrl, '_blank');
}

//PROJECT 2
//view repo button project 2

function project2Redirect(){

    let repoUrl = "https://github.com/Jamal-Karim/Data_Science_ProjectFA23";

    window.open(repoUrl, '_blank');
}

//PROJECT 3
//view repo button project 3

function project3Redirect(){

    let repoUrl = "https://github.com/Jamal-Karim/Restaurant_Page";

    window.open(repoUrl, '_blank');
}
//view live button project 3

function project3RedirectLive(){

    let liveUrl = "https://jamal-karim.github.io/Restaurant_Page/";

    window.open(liveUrl, '_blank');
}

//PROJECT 4
//view repo button project 4

function project4Redirect(){

    let repoUrl = "https://github.com/Jamal-Karim/Ableton-Cloned-Website";

    window.open(repoUrl, '_blank');
}
//view live button project 4

function project4RedirectLive(){

    let liveUrl = "https://jamal-karim.github.io/Ableton-Cloned-Website/";

    window.open(liveUrl, '_blank');
}
