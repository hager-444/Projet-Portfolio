document.addEventListener("DOMContentLoaded", function () {

    const scroll = document.getElementById("scroll");
    const apropos = document.getElementById("a-propos")
    scroll.addEventListener('click', function () {
        apropos.scrollIntoView({ behavior: 'smooth' });
    })

    // Utilisation de SplitType pour animé chaque charactère de mon titre et sous-titre
    const myTitleHeader = new SplitType('#hero-title')
    const myParagrapheHeader = new SplitType('#hero-paragraphe')

    gsap.registerPlugin(ScrollTrigger);

    // Animation de mon titre
    gsap.to('.char', {
        y: 0,
        stagger: 0.04,
        duration: .1
    })

    // Animation de mon header 
    const lineHero = document.querySelector(".line-hero");
    const lineIcons = document.querySelectorAll(".line-icons a");

    // Fonction pour animer les éléments
    function animateElements() {
        gsap.from(lineHero, {
            height: 0,
            opacity: 0,
            y: 100,
            duration: 1,
        });

        gsap.from(lineIcons, {
            opacity: 0,
            y: 100,
            stagger: 0.2,
            duration: 1,
        });
    }

    animateElements();

    // Animation de mon "blob" qui suit la souris sur ma section hero
    let blobSVG = document.getElementById("animate-background");

    // Récupération de la dimension de l'écran 
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Calcul des coordonnées pour placer la forme au milieu de l'écran
    const centerX = screenWidth / 2;
    const centerY = screenHeight / 2;

    // Animation de opacité et de l'échelle de mon svg contenant mon "blob" 
    gsap.from(blobSVG, {
        x: centerX,
        y: centerY,
        scale: 0,
        opacity: 0,
        duration: 3,
    });

    let setCursorPosition = function (e) {
        requestAnimationFrame(function () {
            let xPosition = e.clientX - blobSVG.clientWidth / 2 + "px";
            let yPosition = e.clientY - blobSVG.clientHeight / 2 + "px";
            blobSVG.style.transform =
                "translate(" + xPosition + "," + yPosition + ")";
        });
    };

    document.addEventListener("mousemove", e => setCursorPosition(e));

    const skills = document.querySelectorAll(".skills li");
    let animationPlayed = false;

    function animationSkills() {
        if (!animationPlayed) {
            gsap.from(skills, {
                opacity: 0,
                y: 100,
                stagger: 0.1,
                duration: 0.7,
            });
            animationPlayed = true; // Marquer l'animation comme jouée
        }
    }

    ScrollTrigger.create({
        trigger: skills,
        start: "top bottom",
        onEnter: animationSkills,
    });

    // Animation de ma section projet
    const projects = document.querySelectorAll(".project-container");

    // Vérifiez la taille de l'écran avant de créer l'animation
    if (window.innerWidth >= 800) {
        projects.forEach((project) => {
            const animation = gsap.from(project, {
                opacity: 0,
                stagger: 0.1,
                y: 90,
                duration: 1,
                paused: true,
            });

            ScrollTrigger.create({
                trigger: project,
                start: "top 80%",
                onEnter: () => animation.play(),
            });
        });
    }


    // Animation de mon curseur
    const cursor = document.querySelector(".cursor");

    let posX = 0;
    let posY = 0;
    let mouseX = 0;
    let mouseY = 0;

    gsap.to({}, {
        duration: 0.016,
        repeat: -1,
        onRepeat: function () {
            posX += (mouseX - posX) / 9;
            posY += (mouseY - posY) / 9;

            gsap.set(cursor, {
                left: mouseX,
                top: mouseY
            });
        }
    });

    document.addEventListener("mousemove", function (e) {
        mouseX = e.pageX;
        mouseY = e.pageY;
    });

    const containerLeftImg = document.querySelectorAll(".container-left img");

})