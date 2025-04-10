export class AnimationManager {
    static initProjectAnimations() {
        if (window.gsap) {
            gsap.utils.toArray('.project-container').forEach(project => {
                gsap.from(project, {
                    scrollTrigger: {
                        trigger: project,
                        start: "top center+=100"
                    },
                    opacity: 0,
                    y: 50,
                    duration: 0.8
                });
            });
        }
    }
}