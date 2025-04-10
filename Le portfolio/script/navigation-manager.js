export class BurgerMenu {
    constructor() {
        this.burgerMenus = document.querySelectorAll('.burger-menu');
        this.navMobile = document.getElementById('nav-mobile');
        this.links = document.querySelectorAll('#nav-mobile a');
    }

    init() {
        this.burgerMenus.forEach(menu => {
            menu.addEventListener('click', () => this.toggleMenu());
        });

        this.links.forEach(link => {
            link.addEventListener('click', () => this.closeMenu());
        });
    }

    toggleMenu() {
        this.navMobile.style.display =
            (this.navMobile.style.display === 'none' || !this.navMobile.style.display) ?
                'flex' : 'none';
    }

    closeMenu() {
        this.navMobile.style.display = 'none';
    }
}