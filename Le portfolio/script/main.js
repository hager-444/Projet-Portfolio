import { ThemeManager } from './theme-manager.js';
import { BurgerMenu } from './navigation-manager.js';
import { ProjectRenderer } from './project-renderer.js';
import { AnimationManager } from './animation-manager.js';
import { projects } from './projects-data.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialisation du thème
    const themeManager = new ThemeManager();
    themeManager.init();

    // Gestion de la navigation mobile
    const burgerMenu = new BurgerMenu();
    burgerMenu.init();

    if (document.getElementById('projects-container')) {
        // Rendu des projets
        const projectRenderer = new ProjectRenderer(projects, 'projects-container');
        projectRenderer.renderProjects();
    }

    // Initialisation des animations
    AnimationManager.initProjectAnimations();
});