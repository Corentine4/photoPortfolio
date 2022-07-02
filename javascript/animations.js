// ----- HEADER -----

window.addEventListener('load', () => {

    const timeline = gsap.timeline({paused: true});

    timeline.staggerFrom("nav", 1, {top: -50, opacity: 0, ease: "slow.out"}, 0.3);
    timeline.staggerFrom(".bannierOverlay", 1, {left: -50, opacity: 0, ease: "slow.out"}, 0.3, '-=.1');
    
    timeline.play();

})

// ----- SECTION -----

const timelineGallery = gsap.timeline({
    scrollTrigger: {
        trigger: ".picture",
        toggleActions: "play none none none"
    }
})

timelineGallery.staggerFrom(".picture", 1, {top: -50, opacity: 0, ease: "action2"}, 0.5);