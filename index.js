let dropdown = document.querySelector(".dropdown");
let midtoo = document.querySelector(".midtoo");
let nav = document.getElementById("nav");
let mid = document.querySelector(".mid");
let Image = document.querySelector(".Image")
let pageright = document.querySelector(".pageright")
let heall = document.querySelectorAll(".he")
let play = document.querySelector(".play")
let video = document.querySelector(".video video")
let watch = document.querySelector(".watch")
let middle = document.querySelectorAll(".middle")

let tl = gsap.timeline({ paused: true });

tl.to(".dropdown", {
    height: "25vh",
    duration: 0.3,
})
    .to(".mid", {
        height: "33vh",
        duration: 0.3,
    }, "-=0.3")
    .to(".midtoo", {
        opacity: 1,
        duration: 0.3,
    }, "-=0.3")
    .to(".midtoo .I h2", {
        opacity: 1,
        stagger: { amount: 0.8 },
        duration: 0.3
    }, "-=0.3");

function openDropdown() {
    tl.play();
}

function closeDropdown() {
    tl.reverse();
}

nav.addEventListener("mouseenter", openDropdown);
dropdown.addEventListener("mouseenter", openDropdown);

nav.addEventListener("mouseleave", () => {
    setTimeout(() => {
        if (!nav.matches(":hover") && !dropdown.matches(":hover")) {
            closeDropdown();
        }
    }, 100);
});

dropdown.addEventListener("mouseleave", () => {
    setTimeout(() => {
        if (!nav.matches(":hover") && !dropdown.matches(":hover")) {
            closeDropdown();
        }
    }, 100);
});


heall.forEach(elem => {
    const image = elem.querySelector(".Image");
    image.style.zIndex = 10;

    elem.addEventListener("mousemove", (e) => {
        const rect = elem.getBoundingClientRect();

        const x = e.clientX - rect.left - image.offsetWidth / 2;
        const y = e.clientY - rect.top - image.offsetHeight / 2;

        gsap.to(image, {
            opacity: 1,
            scale: 1,
            x: x,
            y: y,
        });
    });


    elem.addEventListener("mouseleave", () => {
        gsap.to(image, {
            opacity: 0,
            scale: 0,
        });
    });
});


play.addEventListener("mouseenter", () => {
    gsap.to(play, {
        backgroundColor: "green"
    })
    gsap.to(watch, {
        opacity: 1,
    })
})


play.addEventListener("mouseleave", () => {
    gsap.to(play, {
        backgroundColor: "gray"
    })
    gsap.to(watch, {
        opacity: 0,
        zIndex: 1,
    })
})


play.addEventListener("click", () => {
    video.muted = false
    video.currentTime = 0
    gsap.to(video, {
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        zIndex: 9999,
    })
})

video.addEventListener("dblclick", () => {
    video.muted = true
    gsap.to(video, {
        position: "relative",
        height: "100%",
        width: "69vw",
        objectFit: "cover",
        zIndex: 1,
        duration: 0.4,
    })
})


middle.forEach((card)=> 
    card.addEventListener("mouseenter",()=>{
        gsap.to(card,{
        backgroundColor:"orange",
        duration: 0.5
    })
    }),
)
middle.forEach((card)=> 
    card.addEventListener("mouseleave",()=>{
           gsap.to(card, {
        backgroundColor: "",
        duration: 0.5
    })
    }),
)

// middle.addEventListener("mouseenter",()=>{
    
// })
// middle.addEventListener("mouseleave", () => {
    //  card.addEventListener("mouseleave",()=>{
     
    // })
// })